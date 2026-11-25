import {ArrowLeft, Home, Info, Tv, Volume2} from 'lucide-react';
import type {SimpleTranslations} from '../data/simpleTranslations';

interface ChannelNumberHelpViewProps {
  t: SimpleTranslations;
  onBack: () => void;
  onGoHome: () => void;
  onSpeak: (text: string) => void;
}

export function ChannelNumberHelpView({
  t,
  onBack,
  onGoHome,
  onSpeak,
}: ChannelNumberHelpViewProps) {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
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

        <button
          type="button"
          onClick={() =>
            onSpeak(`${t.channelHelpTitle}. ${t.channelHelpSubtitle}. ${t.channelHelpSteps.join(' ')}`)
          }
          className="btn-senior px-5 py-3 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold flex items-center gap-2.5 cursor-pointer"
        >
          <Volume2 className="w-6 h-6 shrink-0" aria-hidden="true" />
          <span>{t.readAloud}</span>
        </button>
      </div>

      <section className="surface-card rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 rounded-2xl bg-orange-100 dark:bg-orange-950 flex items-center justify-center shrink-0">
            <Tv className="w-9 h-9 text-orange-700 dark:text-orange-300" aria-hidden="true" />
          </div>
          <div>
            <h1 className="senior-hero-heading font-bold font-display">{t.channelHelpTitle}</h1>
            <p className="senior-body text-muted-senior mt-1">{t.channelHelpSubtitle}</p>
          </div>
        </div>

        <ol className="space-y-4">
          {t.channelHelpSteps.map((step, index) => (
            <li
              key={step}
              className="surface-soft rounded-2xl p-5 flex items-start gap-4"
            >
              <span className="w-11 h-11 rounded-full bg-orange-600 text-white font-bold flex items-center justify-center shrink-0 tabular-nums">
                {index + 1}
              </span>
              <span className="senior-body font-semibold pt-1">{step}</span>
            </li>
          ))}
        </ol>

        <div className="rounded-2xl p-5 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-300 dark:border-emerald-800 flex items-start gap-3">
          <Info className="w-6 h-6 text-emerald-800 dark:text-emerald-300 shrink-0 mt-0.5" aria-hidden="true" />
          <p className="senior-subtext font-semibold text-emerald-950 dark:text-emerald-100">
            {t.channelHelpCompanionNote}
          </p>
        </div>
      </section>
    </div>
  );
}
