import {useState} from 'react';
import {ArrowLeft, ExternalLink, Home, Mic, MicOff, Search} from 'lucide-react';
import {buildYouTubeSearchUrl, VOICE_EXAMPLES} from '../data/simpleCatalog';
import type {SimpleTranslations} from '../data/simpleTranslations';
import type {Language} from '../types';

interface VoiceSearchViewProps {
  t: SimpleTranslations;
  language: Language;
  voiceSupported: boolean;
  isListening: boolean;
  transcript: string;
  voiceErrorCode: 'none' | 'unsupported' | 'denied' | 'generic';
  onStartVoice: () => void;
  onStopVoice: () => void;
  onPhraseOrSearch: (text: string) => void;
  onBack: () => void;
  onGoHome: () => void;
}

export function VoiceSearchView({
  t,
  language,
  voiceSupported,
  isListening,
  transcript,
  voiceErrorCode,
  onStartVoice,
  onStopVoice,
  onPhraseOrSearch,
  onBack,
  onGoHome,
}: VoiceSearchViewProps) {
  const [typedQuery, setTypedQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleaned = typedQuery.trim();
    if (!cleaned) return;
    onPhraseOrSearch(cleaned);
  };

  const examples = VOICE_EXAMPLES[language];
  const hasVoiceIssue = !voiceSupported || voiceErrorCode !== 'none';

  return (
    <div className="space-y-8">
      {/* Back & Home */}
      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={onBack}
          className="btn-senior px-6 py-3 rounded-2xl surface-card hover:bg-orange-100 font-bold flex items-center gap-2.5 cursor-pointer"
        >
          <ArrowLeft className="w-6 h-6 shrink-0" aria-hidden="true" />
          <span>{t.backButton}</span>
        </button>

        <button
          type="button"
          onClick={onGoHome}
          className="btn-senior px-6 py-3 rounded-2xl surface-soft hover:bg-orange-100 font-bold flex items-center gap-2.5 cursor-pointer"
        >
          <Home className="w-6 h-6 shrink-0" aria-hidden="true" />
          <span>{t.homeButton}</span>
        </button>
      </div>

      {/* Giant Voice Card */}
      <section className="surface-card rounded-3xl p-6 sm:p-10 text-center space-y-6 shadow-sm">
        <h1 className="senior-hero-heading font-bold font-display">
          {t.voicePromptHeading}
        </h1>

        <div className="flex justify-center">
          <div className="relative">
            {isListening && (
              <span
                aria-hidden="true"
                className="voice-listening-ring absolute inset-0 rounded-3xl bg-orange-500/40 pointer-events-none"
              />
            )}
            <button
              type="button"
              onClick={isListening ? onStopVoice : onStartVoice}
              className={`relative btn-senior min-h-[110px] px-10 py-6 rounded-3xl font-bold text-white flex flex-col sm:flex-row items-center justify-center gap-4 shadow-sm cursor-pointer ${
                isListening ? 'bg-red-700 hover:bg-red-800' : 'bg-orange-600 hover:bg-orange-700'
              }`}
            >
              {isListening ? (
                <MicOff className="w-12 h-12 shrink-0" aria-hidden="true" />
              ) : (
                <Mic className="w-12 h-12 shrink-0" aria-hidden="true" />
              )}
              <span className="text-2xl">
                {isListening ? t.voiceListeningMessage : `🎙️ ${t.voiceTapToSpeak}`}
              </span>
            </button>
          </div>
        </div>

        {isListening && (
          <p className="senior-subtext font-semibold text-red-700 dark:text-red-300">
            {t.voiceTapToStop}
          </p>
        )}

        {transcript && (
          <div className="surface-soft rounded-2xl p-5 max-w-xl mx-auto">
            <span className="senior-subtext text-muted-senior mr-2">{t.voiceRecognizedPrefix}</span>
            <span className="font-bold text-[1.15em]">"{transcript}"</span>
          </div>
        )}

        {hasVoiceIssue && (
          <div className="rounded-2xl p-5 bg-amber-50 dark:bg-amber-950/50 border border-amber-300 dark:border-amber-700 max-w-2xl mx-auto">
            <p className="senior-body font-semibold text-amber-950 dark:text-amber-100">
              {t.voiceFallbackMessage}
            </p>
          </div>
        )}
      </section>

      {/* Simple Text Search Fallback */}
      <section className="surface-card rounded-3xl p-6 sm:p-8 space-y-5 shadow-sm">
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-6 h-6 text-muted-senior absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true" />
            <input
              type="search"
              value={typedQuery}
              onChange={(e) => setTypedQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              aria-label={t.searchPlaceholder}
              className="w-full min-h-[65px] pl-14 pr-4 py-3 rounded-2xl surface-soft font-medium"
            />
          </div>
          <button
            type="submit"
            className="btn-senior px-8 py-3 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold cursor-pointer"
          >
            {t.searchButton}
          </button>
        </form>

        {typedQuery.trim().length > 0 && (
          <div>
            <a
              href={buildYouTubeSearchUrl(typedQuery)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-senior inline-flex px-7 py-3 rounded-2xl bg-orange-600 hover:bg-orange-700 text-white font-bold items-center gap-2.5"
            >
              <ExternalLink className="w-6 h-6 shrink-0" aria-hidden="true" />
              <span>{t.searchOnYoutubeButton}</span>
            </a>
          </div>
        )}

        <div className="space-y-3 pt-2">
          <p className="senior-subtext font-bold text-muted-senior">{t.voiceExamplesHeading}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {examples.map((phrase) => (
              <button
                key={phrase}
                type="button"
                onClick={() => onPhraseOrSearch(phrase)}
                className="btn-senior px-5 py-3 rounded-2xl surface-soft hover:bg-orange-100 text-left font-semibold cursor-pointer"
              >
                "{phrase}"
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
