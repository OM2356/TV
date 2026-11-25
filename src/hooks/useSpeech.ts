import {useCallback, useEffect, useRef, useState} from 'react';
import type {Language} from '../types';

interface SpeechRecognitionEventLike {
  results: {
    [index: number]: {
      [index: number]: {
        transcript: string;
      };
      isFinal: boolean;
    };
    length: number;
  };
}

interface SpeechRecognitionErrorEventLike {
  error: string;
}

interface SpeechRecognitionLike {
  lang: string;
  interimResults: boolean;
  maxAlternatives: number;
  continuous: boolean;
  onresult: ((event: SpeechRecognitionEventLike) => void) | null;
  onerror: ((event: SpeechRecognitionErrorEventLike) => void) | null;
  onend: (() => void) | null;
  start: () => void;
  stop: () => void;
  abort: () => void;
}

type SpeechRecognitionConstructor = new () => SpeechRecognitionLike;

function getSpeechRecognitionCtor(): SpeechRecognitionConstructor | null {
  const win = window as unknown as Record<string, unknown>;
  const ctor = win.SpeechRecognition || win.webkitSpeechRecognition;
  return typeof ctor === 'function' ? (ctor as SpeechRecognitionConstructor) : null;
}

function getLangLocale(lang: Language): string {
  if (lang === 'mr') return 'mr-IN';
  if (lang === 'hi') return 'hi-IN';
  return 'en-IN';
}

export function useSpeechSynthesis(language: Language) {
  const [isSupported] = useState<boolean>(
    () => typeof window !== 'undefined' && 'speechSynthesis' in window
  );
  const [status, setStatus] = useState<'idle' | 'speaking' | 'paused'>('idle');

  const stop = useCallback(() => {
    if (!isSupported) return;
    window.speechSynthesis.cancel();
    setStatus('idle');
  }, [isSupported]);

  const speak = useCallback(
    (text: string) => {
      if (!isSupported || !text.trim()) return;
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      const targetLocale = getLangLocale(language);
      utterance.lang = targetLocale;
      utterance.rate = 0.92; // Gentle pace for older adults
      utterance.pitch = 1.0;

      const voices = window.speechSynthesis.getVoices();
      const exactVoice = voices.find((v) => v.lang.toLowerCase() === targetLocale.toLowerCase());
      const prefixVoice = voices.find((v) => v.lang.toLowerCase().startsWith(language));
      const fallbackIndianVoice = voices.find((v) => v.lang.toLowerCase().includes('in'));
      if (exactVoice) utterance.voice = exactVoice;
      else if (prefixVoice) utterance.voice = prefixVoice;
      else if (fallbackIndianVoice) utterance.voice = fallbackIndianVoice;

      utterance.onstart = () => setStatus('speaking');
      utterance.onpause = () => setStatus('paused');
      utterance.onresume = () => setStatus('speaking');
      utterance.onend = () => setStatus('idle');
      utterance.onerror = () => setStatus('idle');

      window.speechSynthesis.speak(utterance);
      setStatus('speaking');
    },
    [isSupported, language]
  );

  const pause = useCallback(() => {
    if (!isSupported) return;
    window.speechSynthesis.pause();
    setStatus('paused');
  }, [isSupported]);

  const resume = useCallback(() => {
    if (!isSupported) return;
    window.speechSynthesis.resume();
    setStatus('speaking');
  }, [isSupported]);

  useEffect(() => {
    return () => {
      if (isSupported) {
        window.speechSynthesis.cancel();
      }
    };
  }, [isSupported]);

  return {
    isSupported,
    status,
    speak,
    pause,
    resume,
    stop,
  };
}

export function useVoiceRecognition(
  language: Language,
  onFinalTranscript: (transcript: string) => void
) {
  const [isSupported] = useState<boolean>(() => typeof window !== 'undefined' && getSpeechRecognitionCtor() !== null);
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [errorCode, setErrorCode] = useState<'none' | 'unsupported' | 'denied' | 'generic'>('none');
  const recognitionRef = useRef<SpeechRecognitionLike | null>(null);
  const callbackRef = useRef(onFinalTranscript);

  useEffect(() => {
    callbackRef.current = onFinalTranscript;
  }, [onFinalTranscript]);

  const stopListening = useCallback(() => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch {
        // Ignore stop errors
      }
    }
    setIsListening(false);
  }, []);

  const startListening = useCallback(() => {
    const Ctor = getSpeechRecognitionCtor();
    if (!Ctor) {
      setErrorCode('unsupported');
      return;
    }

    setErrorCode('none');
    setTranscript('');

    try {
      const recognition = new Ctor();
      recognition.lang = getLangLocale(language);
      recognition.interimResults = true;
      recognition.maxAlternatives = 1;
      recognition.continuous = false;

      let latestText = '';
      let handledFinal = false;

      recognition.onresult = (event) => {
        let combined = '';
        let isFinal = false;
        for (let i = 0; i < event.results.length; i++) {
          combined += event.results[i][0]?.transcript ?? '';
          if (event.results[i].isFinal) {
            isFinal = true;
          }
        }
        latestText = combined.trim();
        setTranscript(latestText);

        if (isFinal && latestText && !handledFinal) {
          handledFinal = true;
          setIsListening(false);
          callbackRef.current(latestText);
        }
      };

      recognition.onerror = (event) => {
        setIsListening(false);
        if (event.error === 'not-allowed' || event.error === 'service-not-allowed') {
          setErrorCode('denied');
        } else if (event.error !== 'aborted' && event.error !== 'no-speech') {
          setErrorCode('generic');
        }
      };

      recognition.onend = () => {
        setIsListening(false);
        if (!handledFinal && latestText) {
          handledFinal = true;
          callbackRef.current(latestText);
        }
      };

      recognitionRef.current = recognition;
      setIsListening(true);
      recognition.start();
    } catch {
      setIsListening(false);
      setErrorCode('unsupported');
    }
  }, [language]);

  useEffect(() => {
    return () => {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.abort();
        } catch {
          // Ignore
        }
      }
    };
  }, []);

  return {
    isSupported,
    isListening,
    transcript,
    errorCode,
    startListening,
    stopListening,
    clearError: () => setErrorCode('none'),
  };
}
