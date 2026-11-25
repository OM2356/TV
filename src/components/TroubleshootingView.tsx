import {useEffect, useState} from 'react';
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  Home,
  Mic,
  MicOff,
  PhoneCall,
  PlugZap,
  RotateCcw,
  ShieldAlert,
  Smartphone,
  Tv,
  Volume2,
  VolumeX,
  Wifi,
  Youtube,
} from 'lucide-react';
import {TROUBLESHOOT_PROBLEMS} from '../data/troubleshootingData';
import type {SimpleTranslations} from '../data/simpleTranslations';
import type {Language, StepDiagramType, TroubleshootProblemId} from '../types';

interface TroubleshootingViewProps {
  t: SimpleTranslations;
  language: Language;
  initialProblemId?: TroubleshootProblemId | null;
  voiceSupported: boolean;
  isListening: boolean;
  transcript: string;
  voiceErrorCode: 'none' | 'unsupported' | 'denied' | 'generic';
  onStartVoice: () => void;
  onStopVoice: () => void;
  onSpeak: (text: string) => void;
  onBack: () => void;
  onGoHome: () => void;
}

function Hdmi2Illustration({language}: {language: Language}) {
  const label =
    language === 'mr'
      ? 'तुमच्या Samsung टीव्हीवर HDMI 2 निवडा'
      : language === 'hi'
        ? 'अपने Samsung टीवी पर HDMI 2 चुनें'
        : 'Select HDMI 2 on your Samsung TV';
  const jioTag =
    language === 'mr'
      ? 'Jio Set-Top Box इथे जोडलेला आहे'
      : language === 'hi'
        ? 'Jio Set-Top Box यहाँ जुड़ा है'
        : 'Jio Set-Top Box is connected here';

  return (
    <div className="surface-soft rounded-3xl p-5 sm:p-6 space-y-4 border-2 border-emerald-500/70">
      <p className="senior-body font-bold text-center text-[var(--text-primary)]">{label}</p>
      <div className="grid grid-cols-3 gap-3 max-w-xl mx-auto items-center">
        <div className="rounded-2xl p-4 bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-center opacity-55">
          <div className="font-bold text-[18px]">HDMI 1</div>
        </div>

        <div className="rounded-2xl p-4 bg-emerald-700 text-white border-4 border-amber-400 text-center shadow-sm">
          <div className="font-bold text-2xl">✓ HDMI 2</div>
          <div className="text-[15px] font-semibold mt-1">Jio Box</div>
        </div>

        <div className="rounded-2xl p-4 bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-center opacity-55">
          <div className="font-bold text-[18px]">TV / AV</div>
        </div>
      </div>
      <p className="senior-subtext font-bold text-center text-emerald-800 dark:text-emerald-300">
        {jioTag}
      </p>
    </div>
  );
}

function StepVisualDiagram({diagram, language}: {diagram: StepDiagramType; language: Language}) {
  if (diagram === 'hdmi-2-source') {
    return <Hdmi2Illustration language={language} />;
  }

  const captionMap: Record<Exclude<StepDiagramType, 'hdmi-2-source'>, {mr: string; hi: string; en: string}> = {
    'power-plug': {mr: 'स्विच व प्लग तपासणी', hi: 'स्विच और प्लग जाँच', en: 'Power Switch Check'},
    'remote-mute': {mr: 'रिमोटवरील Mute (🔇) बटण', hi: 'रिमोट का Mute (🔇) बटन', en: 'Remote Mute Button'},
    'remote-volume': {mr: 'आवाज वाढवण्याचे (+) बटण', hi: 'आवाज़ बढ़ाने का (+) बटन', en: 'Volume Up (+) Button'},
    'jio-light': {mr: 'Jio Set-Top Box चा दिवा', hi: 'Jio Set-Top Box की लाइट', en: 'Jio Box Indicator Light'},
    'safe-restart': {mr: 'सुरक्षितपणे ३० सेकंदांनी पुन्हा सुरू करा', hi: 'सुरक्षित रूप से 30 सेकंड बाद चालू करें', en: 'Safe 30-Second Restart'},
    'router-lights': {mr: 'Wi-Fi राउटरवरील दिवे', hi: 'Wi-Fi राउटर की लाइट्स', en: 'Router Indicator Lights'},
    'tv-home-youtube': {mr: 'रिमोट Home 🏠 आणि YouTube ▶️', hi: 'रिमोट Home 🏠 और YouTube ▶️', en: 'TV Home & YouTube App'},
    'remote-battery': {mr: 'रिमोट बॅटरी आणि दिशा', hi: 'रिमोट बैटरी और दिशा', en: 'Remote Direction & Batteries'},
    'safety-stop': {mr: 'प्रथम सुरक्षितता तपासा', hi: 'सबसे पहले सुरक्षा जाँचें', en: 'Safety Check First'},
    'family-help': {mr: 'घरातील व्यक्ती किंवा सेवा मदत', hi: 'परिवार या सेवा केंद्र की मदद', en: 'Family or Service Support'},
  };

  const renderIcon = () => {
    const cls = 'w-14 h-14 text-orange-700 dark:text-orange-300';
    switch (diagram) {
      case 'power-plug':
        return <PlugZap className={cls} aria-hidden="true" />;
      case 'remote-mute':
        return <VolumeX className={cls} aria-hidden="true" />;
      case 'remote-volume':
        return <Volume2 className={cls} aria-hidden="true" />;
      case 'jio-light':
        return <Tv className={cls} aria-hidden="true" />;
      case 'safe-restart':
        return <RotateCcw className={cls} aria-hidden="true" />;
      case 'router-lights':
        return <Wifi className={cls} aria-hidden="true" />;
      case 'tv-home-youtube':
        return <Youtube className={cls} aria-hidden="true" />;
      case 'remote-battery':
        return <Smartphone className={cls} aria-hidden="true" />;
      case 'safety-stop':
        return <ShieldAlert className="w-14 h-14 text-red-700 dark:text-red-400" aria-hidden="true" />;
      case 'family-help':
        return <PhoneCall className={cls} aria-hidden="true" />;
    }
  };

  return (
    <div className="surface-soft rounded-2xl p-5 flex flex-col sm:flex-row items-center gap-4">
      <div className="w-24 h-24 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex items-center justify-center shrink-0">
        {renderIcon()}
      </div>
      <p className="senior-body font-bold text-center sm:text-left">
        {captionMap[diagram][language]}
      </p>
    </div>
  );
}

export function TroubleshootingView({
  t,
  language,
  initialProblemId = null,
  voiceSupported,
  isListening,
  transcript,
  voiceErrorCode,
  onStartVoice,
  onStopVoice,
  onSpeak,
  onBack,
  onGoHome,
}: TroubleshootingViewProps) {
  const [selectedProblemId, setSelectedProblemId] = useState<TroubleshootProblemId | null>(
    initialProblemId
  );
  const [stepIndex, setStepIndex] = useState(0);
  const [showSimpler, setShowSimpler] = useState(false);
  const [status, setStatus] = useState<'steps' | 'solved' | 'unresolved'>('steps');

  useEffect(() => {
    if (initialProblemId) {
      setSelectedProblemId(initialProblemId);
      setStepIndex(0);
      setShowSimpler(false);
      setStatus('steps');
    }
  }, [initialProblemId]);

  const activeProblem = TROUBLESHOOT_PROBLEMS.find((p) => p.id === selectedProblemId) ?? null;
  const activeStep = activeProblem ? activeProblem.steps[stepIndex] : null;

  const selectProblem = (id: TroubleshootProblemId) => {
    setSelectedProblemId(id);
    setStepIndex(0);
    setShowSimpler(false);
    setStatus('steps');
  };

  const handleNextStep = () => {
    if (!activeProblem) return;
    setShowSimpler(false);
    if (stepIndex + 1 < activeProblem.steps.length) {
      setStepIndex((prev) => prev + 1);
    } else {
      setStatus('unresolved');
    }
  };

  const handlePrevStep = () => {
    setShowSimpler(false);
    if (stepIndex > 0) {
      setStepIndex((prev) => prev - 1);
    } else {
      setSelectedProblemId(null);
    }
  };

  if (!activeProblem) {
    return (
      <div className="space-y-8">
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

        <section className="surface-card rounded-3xl p-6 sm:p-8 space-y-5 shadow-sm">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="space-y-2 max-w-2xl">
              <h1 className="senior-hero-heading font-bold font-display">{t.troubleshootTitle}</h1>
              <p className="senior-body text-muted-senior">{t.troubleshootSelectPrompt}</p>
              <p className="senior-subtext font-bold text-emerald-800 dark:text-emerald-300">
                {t.hdmi2HomeNote}
              </p>
            </div>

            <button
              type="button"
              onClick={() => onSpeak(`${t.troubleshootTitle}. ${t.troubleshootSelectPrompt}`)}
              className="btn-senior px-5 py-3 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold flex items-center gap-2.5 cursor-pointer"
            >
              <Volume2 className="w-6 h-6 shrink-0" aria-hidden="true" />
              <span>{t.readAloud}</span>
            </button>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <div className="relative">
              {isListening && (
                <span
                  aria-hidden="true"
                  className="voice-listening-ring absolute inset-0 rounded-2xl bg-orange-500/40 pointer-events-none"
                />
              )}
              <button
                type="button"
                onClick={isListening ? onStopVoice : onStartVoice}
                className={`relative btn-senior px-7 py-3 rounded-2xl font-bold text-white flex items-center gap-3 cursor-pointer ${
                  isListening ? 'bg-red-700 hover:bg-red-800' : 'bg-orange-600 hover:bg-orange-700'
                }`}
              >
                {isListening ? (
                  <MicOff className="w-6 h-6 shrink-0" aria-hidden="true" />
                ) : (
                  <Mic className="w-6 h-6 shrink-0" aria-hidden="true" />
                )}
                <span>{isListening ? t.voiceListeningMessage : t.troubleshootVoiceButton}</span>
              </button>
            </div>

            {transcript && (
              <p className="senior-subtext font-semibold">
                {t.voiceRecognizedPrefix} "{transcript}"
              </p>
            )}
          </div>

          {(!voiceSupported || voiceErrorCode !== 'none') && (
            <p className="senior-subtext text-muted-senior">{t.voiceFallbackMessage}</p>
          )}
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {TROUBLESHOOT_PROBLEMS.map((problem) => (
            <button
              key={problem.id}
              type="button"
              onClick={() => selectProblem(problem.id)}
              className="btn-senior min-h-[96px] surface-card hover:border-orange-500 hover:bg-orange-50/70 dark:hover:bg-orange-950/30 rounded-3xl p-5 flex items-center gap-4 text-left shadow-sm cursor-pointer transition-colors"
            >
              <span className="text-4xl shrink-0" aria-hidden="true">
                {problem.emoji}
              </span>
              <span className="font-bold font-display text-[1.2em] leading-snug">
                {problem.title[language]}
              </span>
            </button>
          ))}
        </section>
      </div>
    );
  }

  if (status === 'solved') {
    return (
      <div className="space-y-8">
        <div className="surface-card rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-sm">
          <CheckCircle2 className="w-20 h-20 text-emerald-700 dark:text-emerald-400 mx-auto" aria-hidden="true" />
          <h1 className="senior-hero-heading font-bold font-display text-emerald-800 dark:text-emerald-300">
            {t.solvedTitle}
          </h1>
          <p className="senior-heading font-medium max-w-xl mx-auto">{t.solvedSubtitle}</p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={onGoHome}
              className="btn-senior px-8 py-4 rounded-2xl bg-orange-600 hover:bg-orange-700 text-white font-bold flex items-center gap-3 cursor-pointer"
            >
              <span>{t.goBackToTvButton}</span>
            </button>

            <button
              type="button"
              onClick={() => onSpeak(`${t.solvedTitle} ${t.solvedSubtitle}`)}
              className="btn-senior px-6 py-4 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold flex items-center gap-2.5 cursor-pointer"
            >
              <Volume2 className="w-6 h-6 shrink-0" aria-hidden="true" />
              <span>{t.readAloud}</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (status === 'unresolved') {
    return (
      <div className="space-y-8">
        <div className="surface-card rounded-3xl p-8 sm:p-10 text-center space-y-6 shadow-sm">
          <PhoneCall className="w-16 h-16 text-orange-600 mx-auto" aria-hidden="true" />
          <h1 className="senior-hero-heading font-bold font-display">{t.unresolvedTitle}</h1>
          <p className="senior-body font-medium max-w-2xl mx-auto">{t.unresolvedMessage}</p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => {
                setStepIndex(0);
                setStatus('steps');
                setShowSimpler(false);
              }}
              className="btn-senior px-7 py-3 rounded-2xl bg-orange-600 hover:bg-orange-700 text-white font-bold cursor-pointer"
            >
              {t.tryAgainStepsButton}
            </button>

            <button
              type="button"
              onClick={() => setSelectedProblemId(null)}
              className="btn-senior px-7 py-3 rounded-2xl surface-soft hover:bg-amber-100 font-bold cursor-pointer"
            >
              {t.chooseOtherProblemButton}
            </button>

            <button
              type="button"
              onClick={onGoHome}
              className="btn-senior px-7 py-3 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold flex items-center gap-2 cursor-pointer"
            >
              <Home className="w-6 h-6 shrink-0" aria-hidden="true" />
              <span>{t.goHomeButton}</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!activeStep) return null;
  const totalSteps = activeProblem.steps.length;
  const currentStepNumber = stepIndex + 1;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => setSelectedProblemId(null)}
            className="btn-senior px-6 py-3 rounded-2xl surface-card hover:bg-orange-100 font-bold flex items-center gap-2.5 cursor-pointer"
          >
            <ArrowLeft className="w-6 h-6 shrink-0" aria-hidden="true" />
            <span>{t.chooseOtherProblemButton}</span>
          </button>

          <button
            type="button"
            onClick={onGoHome}
            className="btn-senior px-6 py-3 rounded-2xl surface-soft hover:bg-orange-100 font-bold flex items-center gap-2.5 cursor-pointer"
          >
            <Home className="w-6 h-6 shrink-0" aria-hidden="true" />
            <span>{t.goHomeButton}</span>
          </button>
        </div>

        <button
          type="button"
          onClick={() =>
            onSpeak(
              `${t.stepIndicator(currentStepNumber, totalSteps)}. ${activeStep.instruction[language]} ${
                showSimpler ? activeStep.simplerExplanation[language] : ''
              }`
            )
          }
          className="btn-senior px-5 py-3 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold flex items-center gap-2.5 cursor-pointer"
        >
          <Volume2 className="w-6 h-6 shrink-0" aria-hidden="true" />
          <span>{t.readAloud}</span>
        </button>
      </div>

      <div className="surface-card rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--border-subtle)] pb-5">
          <div className="space-y-1.5">
            <h1 className="senior-heading font-bold font-display flex items-center gap-3">
              {!activeProblem.headingOverride && <span aria-hidden="true">{activeProblem.emoji}</span>}
              <span>
                {activeProblem.headingOverride
                  ? activeProblem.headingOverride[language]
                  : activeProblem.title[language]}
              </span>
            </h1>
            <p className="senior-subtext font-bold text-orange-700 dark:text-orange-400">
              {activeProblem.introNote[language]}
            </p>
          </div>

          <div className="surface-soft rounded-2xl px-5 py-3 font-bold text-emerald-800 dark:text-emerald-300 tabular-nums">
            {t.stepIndicator(currentStepNumber, totalSteps)}
          </div>
        </div>

        {activeProblem.homeConnectionNote && (
          <div className="rounded-2xl p-4 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-300 dark:border-emerald-800">
            <p className="senior-body font-bold text-emerald-900 dark:text-emerald-200">
              {activeProblem.homeConnectionNote[language]}
            </p>
          </div>
        )}

        <StepVisualDiagram diagram={activeStep.diagram} language={language} />

        <div className="space-y-4">
          <p className="text-2xl sm:text-3xl font-bold font-display leading-snug text-[var(--text-primary)]">
            {activeStep.instruction[language]}
          </p>

          {activeStep.safetyNote && (
            <div className="rounded-2xl p-5 bg-red-50 dark:bg-red-950/50 border-2 border-red-300 dark:border-red-700 flex items-start gap-3">
              <AlertTriangle className="w-7 h-7 text-red-700 dark:text-red-300 shrink-0 mt-0.5" aria-hidden="true" />
              <div className="space-y-1">
                <p className="font-bold text-red-900 dark:text-red-200">{t.safetyAlertHeading}</p>
                <p className="senior-body text-red-900 dark:text-red-100">
                  {activeStep.safetyNote[language]}
                </p>
              </div>
            </div>
          )}

          <div>
            <button
              type="button"
              onClick={() => {
                const nextState = !showSimpler;
                setShowSimpler(nextState);
                if (nextState) {
                  onSpeak(activeStep.simplerExplanation[language]);
                }
              }}
              className="min-h-[54px] px-5 py-2.5 rounded-2xl surface-soft hover:bg-amber-100 font-bold inline-flex items-center gap-2.5 cursor-pointer"
            >
              <HelpCircle className="w-6 h-6 text-orange-700 shrink-0" aria-hidden="true" />
              <span>{t.didNotUnderstand}</span>
            </button>

            {showSimpler && (
              <div className="mt-4 rounded-2xl p-5 bg-amber-50 dark:bg-amber-950/50 border border-amber-300 dark:border-amber-700 space-y-1.5">
                <p className="senior-subtext font-bold text-amber-900 dark:text-amber-200">
                  {t.simplerWayHeading}
                </p>
                <p className="senior-body font-medium text-amber-950 dark:text-amber-100">
                  {activeStep.simplerExplanation[language]}
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row flex-wrap gap-3">
          {!activeStep.isEmergencySafetyStep && (
            <button
              type="button"
              onClick={() => setStatus('solved')}
              className="btn-senior flex-1 px-6 py-4 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <CheckCircle2 className="w-6 h-6 shrink-0" aria-hidden="true" />
              <span>
                {activeStep.solvedButtonLabel
                  ? activeStep.solvedButtonLabel[language]
                  : t.problemSolvedButton}
              </span>
            </button>
          )}

          <button
            type="button"
            onClick={handleNextStep}
            className="btn-senior flex-1 px-6 py-4 rounded-2xl bg-orange-600 hover:bg-orange-700 text-white font-bold flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <span>
              {activeStep.nextButtonLabel
                ? activeStep.nextButtonLabel[language]
                : currentStepNumber < totalSteps
                  ? t.nextStepButton
                  : t.stillProblemButton}
            </span>
            <ArrowRight className="w-6 h-6 shrink-0" aria-hidden="true" />
          </button>

          {activeStep.isEmergencySafetyStep && (
            <button
              type="button"
              onClick={() => setStatus('unresolved')}
              className="btn-senior px-6 py-4 rounded-2xl bg-red-700 hover:bg-red-800 text-white font-bold flex items-center justify-center gap-2 cursor-pointer"
            >
              <PhoneCall className="w-6 h-6 shrink-0" aria-hidden="true" />
              <span>{t.stillProblemButton}</span>
            </button>
          )}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          <button
            type="button"
            onClick={handlePrevStep}
            className="min-h-[54px] px-5 py-2.5 rounded-2xl surface-soft hover:bg-orange-100 font-bold flex items-center gap-2 cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5 shrink-0" aria-hidden="true" />
            <span>{t.prevStepButton}</span>
          </button>

          <button
            type="button"
            onClick={onGoHome}
            className="min-h-[54px] px-5 py-2.5 rounded-2xl surface-soft hover:bg-orange-100 font-bold flex items-center gap-2 cursor-pointer"
          >
            <Home className="w-5 h-5 shrink-0" aria-hidden="true" />
            <span>{t.goHomeButton}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
