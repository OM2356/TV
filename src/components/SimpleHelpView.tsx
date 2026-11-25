import {ArrowLeft, Home, Volume2, Wrench} from 'lucide-react';
import {ARTWORK, SIMPLE_HELP_GUIDES} from '../data/simpleCatalog';
import type {SimpleTranslations} from '../data/simpleTranslations';
import type {Language} from '../types';
import {ResilientImage} from './ResilientImage';

interface SimpleHelpViewProps {
  t: SimpleTranslations;
  language: Language;
  onBack: () => void;
  onGoHome: () => void;
  onOpenTroubleshoot: () => void;
  onSpeak: (text: string) => void;
}

export function SimpleHelpView({
  t,
  language,
  onBack,
  onGoHome,
  onOpenTroubleshoot,
  onSpeak,
}: SimpleHelpViewProps) {
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

      {/* Intro Banner */}
      <section className="surface-card rounded-3xl p-6 sm:p-8 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-7 space-y-3">
          <h1 className="senior-hero-heading font-bold font-display">{t.helpPageTitle}</h1>
          <p className="senior-body text-muted-senior">{t.helpPageSubtitle}</p>
          <p className="senior-subtext text-emerald-800 dark:text-emerald-400 font-semibold">
            {t.companionNote}
          </p>
        </div>
        <div className="md:col-span-5 aspect-[4/3] rounded-2xl overflow-hidden bg-stone-200 dark:bg-stone-800">
          <ResilientImage
            src={ARTWORK.tv}
            alt={t.helpPageTitle}
            titleFallback={t.helpPageTitle}
          />
        </div>
      </section>

      {/* Friendly Illustrated Guides */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {SIMPLE_HELP_GUIDES.map((guide) => (
          <article key={guide.id} className="surface-card rounded-3xl p-6 flex flex-col justify-between gap-5 shadow-sm">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-4xl" aria-hidden="true">
                  {guide.emoji}
                </span>
                <h2 className="font-bold font-display text-[1.25em]">{guide.title[language]}</h2>
              </div>

              <ol className="space-y-3">
                {guide.steps[language].map((step, idx) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-orange-600 text-white font-bold flex items-center justify-center shrink-0 tabular-nums mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="senior-body">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <button
              type="button"
              onClick={() => onSpeak(`${guide.title[language]}. ${guide.steps[language].join(' ')}`)}
              className="btn-senior w-full px-4 py-3 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold flex items-center justify-center gap-2 cursor-pointer"
            >
              <Volume2 className="w-6 h-6 shrink-0" aria-hidden="true" />
              <span>{t.readAloud}</span>
            </button>
          </article>
        ))}
      </div>

      {/* Link to Full Step-by-Step TV Troubleshooting */}
      <section className="surface-card rounded-3xl p-6 sm:p-8 text-center space-y-4">
        <p className="senior-body font-medium">{t.troubleshootHomeSubtitle}</p>
        <button
          type="button"
          onClick={onOpenTroubleshoot}
          className="btn-senior px-8 py-4 rounded-2xl bg-orange-600 hover:bg-orange-700 text-white font-bold inline-flex items-center gap-3 cursor-pointer"
        >
          <Wrench className="w-7 h-7 shrink-0" aria-hidden="true" />
          <span>{t.helpGoToTroubleshoot}</span>
        </button>
      </section>
    </div>
  );
}
