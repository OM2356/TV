import {Clock, ExternalLink, HelpCircle, Mic, Star, Trash2, Tv, Volume2, Wrench} from 'lucide-react';
import {MAIN_CATEGORIES} from '../data/simpleCatalog';
import type {SimpleTranslations} from '../data/simpleTranslations';
import type {Language, MainCategoryId, RecentVisitedItem, TVChannel} from '../types';

interface SimpleHomeProps {
  t: SimpleTranslations;
  language: Language;
  favouriteChannels: TVChannel[];
  recentVisited: RecentVisitedItem[];
  onSelectCategory: (id: MainCategoryId) => void;
  onOpenChannels: () => void;
  onRemoveFavouriteChannel: (channelId: string) => void;
  onReopenRecent: (item: RecentVisitedItem) => void;
  onOpenVoice: () => void;
  onOpenHelp: () => void;
  onOpenTroubleshoot: () => void;
  onSpeak: (text: string) => void;
}

export function SimpleHome({
  t,
  language,
  favouriteChannels,
  recentVisited,
  onSelectCategory,
  onOpenChannels,
  onRemoveFavouriteChannel,
  onReopenRecent,
  onOpenVoice,
  onOpenHelp,
  onOpenTroubleshoot,
  onSpeak,
}: SimpleHomeProps) {
  return (
    <div className="space-y-8">
      {/* Warm Greeting */}
      <section className="surface-card rounded-3xl p-6 sm:p-8 text-center space-y-4 shadow-sm">
        <h1 className="senior-hero-heading font-bold font-display text-[var(--text-primary)]">
          {t.greetingTitle}
        </h1>
        <p className="senior-heading font-semibold text-orange-800 dark:text-orange-300">
          {t.greetingQuestion}
        </p>
        <div className="pt-1 flex justify-center">
          <button
            type="button"
            onClick={() => onSpeak(`${t.greetingTitle}. ${t.greetingQuestion}`)}
            className="min-h-[54px] px-6 py-2.5 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold inline-flex items-center gap-2.5 cursor-pointer"
          >
            <Volume2 className="w-6 h-6 shrink-0" aria-hidden="true" />
            <span>{t.readAloud}</span>
          </button>
        </div>
      </section>

      {/* SIX BIG MAIN BUTTONS */}
      <section aria-label={t.greetingQuestion} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {MAIN_CATEGORIES.map((category) => (
          <button
            key={category.id}
            type="button"
            onClick={() => onSelectCategory(category.id)}
            className={`btn-senior min-h-[140px] rounded-3xl p-6 border-2 flex flex-col items-center justify-center gap-3 text-center shadow-sm cursor-pointer transition-transform hover:-translate-y-0.5 ${category.cardBg}`}
          >
            <span className="text-5xl leading-none" aria-hidden="true">
              {category.emoji}
            </span>
            <span className="font-bold font-display text-[1.35em] text-[var(--text-primary)]">
              {category.title[language]}
            </span>
          </button>
        ))}

        {/* Button 6: Voice Search */}
        <button
          type="button"
          onClick={onOpenVoice}
          className="btn-senior min-h-[140px] rounded-3xl p-6 border-2 border-orange-500 bg-orange-600 hover:bg-orange-700 text-white flex flex-col items-center justify-center gap-3 text-center shadow-sm cursor-pointer transition-transform hover:-translate-y-0.5"
        >
          <Mic className="w-12 h-12 shrink-0" aria-hidden="true" />
          <span className="font-bold font-display text-[1.35em]">
            🎙️ {t.voiceButtonHome}
          </span>
        </button>
      </section>

      {/* Big My Channels Button */}
      <section>
        <button
          type="button"
          onClick={onOpenChannels}
          className="btn-senior w-full min-h-[100px] rounded-3xl p-6 border-2 border-emerald-600 bg-emerald-700 hover:bg-emerald-800 text-white flex flex-col sm:flex-row items-center justify-center gap-4 text-center shadow-sm cursor-pointer"
        >
          <Tv className="w-10 h-10 shrink-0" aria-hidden="true" />
          <span className="font-bold font-display text-2xl sm:text-3xl">
            {t.myChannelsButton}
          </span>
        </button>
      </section>

      {/* Favourite Channels on Homepage */}
      <section aria-labelledby="home-fav-channels" className="surface-card rounded-3xl p-6 sm:p-8 space-y-5 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 id="home-fav-channels" className="senior-heading font-bold font-display flex items-center gap-2.5">
            <Star className="w-7 h-7 text-amber-500 fill-amber-500 shrink-0" aria-hidden="true" />
            <span>{t.myFavouriteChannelsTitle}</span>
          </h2>
          <button
            type="button"
            onClick={onOpenChannels}
            className="min-h-[50px] px-5 py-2 rounded-2xl surface-soft hover:bg-orange-100 dark:hover:bg-orange-950/40 font-bold cursor-pointer"
          >
            {t.myChannelsButton}
          </button>
        </div>

        {favouriteChannels.length === 0 ? (
          <p className="senior-body text-muted-senior">{t.myFavouriteChannelsEmpty}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {favouriteChannels.map((ch) => (
              <div
                key={ch.id}
                className="surface-soft rounded-2xl p-5 flex flex-col justify-between gap-3 text-center"
              >
                <div className="space-y-1">
                  <div className="text-2xl font-bold font-display text-orange-700 dark:text-orange-400 tabular-nums">
                    📺 {ch.number ? ch.number : t.channelNumberUnverified}
                  </div>
                  <h3 className="font-bold font-display text-[1.25em]">{ch.nameMr}</h3>
                  <p className="senior-subtext text-muted-senior">{ch.categoryLabel[language]}</p>
                </div>

                <button
                  type="button"
                  onClick={() => onRemoveFavouriteChannel(ch.id)}
                  className="min-h-[48px] px-4 py-2 rounded-xl bg-[var(--bg-surface)] hover:bg-red-100 text-red-700 font-semibold flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Trash2 className="w-5 h-5 shrink-0" aria-hidden="true" />
                  <span>{t.removeFavourite}</span>
                </button>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Recently Visited Shortcuts (only when items exist) */}
      {recentVisited.length > 0 && (
        <section aria-labelledby="home-recent" className="surface-card rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
          <h2 id="home-recent" className="senior-heading font-bold font-display flex items-center gap-2.5">
            <Clock className="w-7 h-7 text-emerald-700 dark:text-emerald-400 shrink-0" aria-hidden="true" />
            <span>{t.recentlyVisitedTitle}</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {recentVisited.slice(0, 3).map((item) =>
              item.url ? (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-senior surface-soft hover:bg-orange-100 dark:hover:bg-orange-950/40 rounded-2xl p-4 flex items-center justify-between gap-3 font-bold"
                >
                  <span className="line-clamp-2">{item.title}</span>
                  <ExternalLink className="w-5 h-5 shrink-0 text-orange-700 dark:text-orange-400" aria-hidden="true" />
                </a>
              ) : (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onReopenRecent(item)}
                  className="btn-senior surface-soft hover:bg-orange-100 dark:hover:bg-orange-950/40 rounded-2xl p-4 text-left font-bold cursor-pointer"
                >
                  <span className="line-clamp-2">{item.title}</span>
                </button>
              )
            )}
          </div>
        </section>
      )}

      {/* Simple Help & TV Troubleshooting Entry */}
      <section className="surface-card rounded-3xl p-6 sm:p-8 space-y-5 shadow-sm text-center">
        <div className="space-y-2 max-w-2xl mx-auto">
          <p className="senior-body font-medium text-[var(--text-primary)]">
            {t.troubleshootHomeSubtitle}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
          <button
            type="button"
            onClick={onOpenTroubleshoot}
            className="btn-senior px-7 py-4 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold flex items-center justify-center gap-3 cursor-pointer"
          >
            <Wrench className="w-7 h-7 shrink-0" aria-hidden="true" />
            <span>{t.troubleshootHomeButton}</span>
          </button>

          <button
            type="button"
            onClick={onOpenHelp}
            className="btn-senior px-7 py-4 rounded-2xl surface-soft hover:bg-amber-100 dark:hover:bg-amber-950/40 font-bold flex items-center justify-center gap-3 cursor-pointer"
          >
            <HelpCircle className="w-7 h-7 shrink-0 text-orange-700" aria-hidden="true" />
            <span>{t.helpButtonHome}</span>
          </button>
        </div>
      </section>
    </div>
  );
}
