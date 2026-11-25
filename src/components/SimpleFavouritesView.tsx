import {ArrowLeft, Clock, ExternalLink, Heart, Home, Play, Star, Trash2, Tv} from 'lucide-react';
import {MAIN_CATEGORIES} from '../data/simpleCatalog';
import type {SimpleTranslations} from '../data/simpleTranslations';
import type {
  FavouriteItem,
  Language,
  MainCategoryId,
  RecentVisitedItem,
  TVChannel,
} from '../types';
import {ResilientImage} from './ResilientImage';

interface SimpleFavouritesViewProps {
  t: SimpleTranslations;
  language: Language;
  items: FavouriteItem[];
  favouriteCategories: MainCategoryId[];
  favouriteChannels: TVChannel[];
  recentVisited: RecentVisitedItem[];
  onBack: () => void;
  onGoHome: () => void;
  onOpenCategory: (id: MainCategoryId) => void;
  onOpenChannels: () => void;
  onOpenFavourite: (item: FavouriteItem) => void;
  onReopenRecent: (item: RecentVisitedItem) => void;
  onRemoveFavourite: (id: string) => void;
  onRemoveFavouriteCategory: (id: MainCategoryId) => void;
  onRemoveFavouriteChannel: (channelId: string) => void;
  onRemoveRecent: (id: string) => void;
  onClearRecent: () => void;
}

export function SimpleFavouritesView({
  t,
  language,
  items,
  favouriteCategories,
  favouriteChannels,
  recentVisited,
  onBack,
  onGoHome,
  onOpenCategory,
  onOpenChannels,
  onOpenFavourite,
  onReopenRecent,
  onRemoveFavourite,
  onRemoveFavouriteCategory,
  onRemoveFavouriteChannel,
  onRemoveRecent,
  onClearRecent,
}: SimpleFavouritesViewProps) {
  const favCategoryObjects = favouriteCategories
    .map((id) => MAIN_CATEGORIES.find((c) => c.id === id))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  const isAllEmpty =
    items.length === 0 && favouriteChannels.length === 0 && favCategoryObjects.length === 0;

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={onBack}
          className="btn-senior px-6 py-3 rounded-2xl surface-card hover:bg-orange-100 dark:hover:bg-orange-950/40 font-bold flex items-center gap-2.5 cursor-pointer"
        >
          <ArrowLeft className="w-6 h-6 shrink-0" aria-hidden="true" />
          <span>{t.backButton}</span>
        </button>

        <button
          type="button"
          onClick={onGoHome}
          className="btn-senior px-6 py-3 rounded-2xl surface-soft hover:bg-orange-100 dark:hover:bg-orange-950/40 font-bold flex items-center gap-2.5 cursor-pointer"
        >
          <Home className="w-6 h-6 shrink-0" aria-hidden="true" />
          <span>{t.homeButton}</span>
        </button>
      </div>

      <div className="surface-card rounded-3xl p-6 sm:p-8 shadow-sm">
        <h1 className="senior-hero-heading font-bold font-display">{t.favouritesTitle}</h1>
      </div>

      {isAllEmpty && (
        <div className="surface-card rounded-3xl p-10 text-center space-y-5">
          <Heart className="w-14 h-14 text-red-500 mx-auto" aria-hidden="true" />
          <p className="senior-body font-medium text-muted-senior max-w-xl mx-auto">
            {t.favouritesEmpty}
          </p>
          <button
            type="button"
            onClick={onOpenChannels}
            className="btn-senior px-7 py-3 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold inline-flex items-center gap-2.5 cursor-pointer"
          >
            <Tv className="w-6 h-6 shrink-0" aria-hidden="true" />
            <span>{t.myChannelsButton}</span>
          </button>
        </div>
      )}

      {/* Favourite Categories */}
      {favCategoryObjects.length > 0 && (
        <section className="space-y-4">
          <h2 className="senior-heading font-bold font-display">{t.favouriteCategoriesTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {favCategoryObjects.map((cat) => (
              <div
                key={cat.id}
                className="surface-card rounded-2xl p-4 flex items-center justify-between gap-3"
              >
                <button
                  type="button"
                  onClick={() => onOpenCategory(cat.id)}
                  className="flex items-center gap-3 text-left flex-1 min-h-[56px] cursor-pointer"
                >
                  <span className="text-3xl shrink-0" aria-hidden="true">
                    {cat.emoji}
                  </span>
                  <span className="font-bold font-display text-[1.12em]">{cat.title[language]}</span>
                </button>
                <button
                  type="button"
                  onClick={() => onRemoveFavouriteCategory(cat.id)}
                  aria-label={t.removeFavourite}
                  className="min-h-[48px] min-w-[48px] rounded-xl surface-soft hover:bg-red-100 text-red-700 flex items-center justify-center cursor-pointer"
                >
                  <Trash2 className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Favourite TV Channels */}
      {favouriteChannels.length > 0 && (
        <section className="space-y-4">
          <h2 className="senior-heading font-bold font-display flex items-center gap-2.5">
            <Star className="w-7 h-7 text-amber-500 fill-amber-500 shrink-0" aria-hidden="true" />
            <span>{t.myFavouriteChannelsTitle}</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {favouriteChannels.map((ch) => (
              <article
                key={ch.id}
                className="surface-card rounded-3xl p-6 flex flex-col justify-between gap-4 text-center shadow-sm"
              >
                <div className="space-y-1">
                  <div className="text-2xl font-bold font-display text-orange-700 dark:text-orange-400 tabular-nums">
                    📺 {ch.number ? ch.number : t.channelNumberUnverified}
                  </div>
                  <h3 className="font-bold font-display text-[1.3em]">{ch.nameMr}</h3>
                  <p className="text-[16px] text-muted-senior">{ch.nameOriginal}</p>
                  <p className="senior-subtext font-semibold text-emerald-800 dark:text-emerald-300">
                    {ch.categoryLabel[language]}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => onRemoveFavouriteChannel(ch.id)}
                  className="btn-senior w-full px-4 py-2.5 rounded-2xl surface-soft hover:bg-red-100 text-red-700 font-bold flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Trash2 className="w-5 h-5 shrink-0" aria-hidden="true" />
                  <span>{t.removeFavourite}</span>
                </button>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Favourite Topics & Videos */}
      {items.length > 0 && (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {items.map((item) => (
            <article
              key={item.id}
              className="surface-card rounded-3xl overflow-hidden flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="aspect-video w-full bg-stone-200 dark:bg-stone-800">
                  <ResilientImage
                    src={item.thumbnail}
                    alt={item.title}
                    titleFallback={item.title}
                  />
                </div>
                <div className="p-5 space-y-1">
                  <h2 className="font-bold font-display text-[1.2em] line-clamp-2">{item.title}</h2>
                  {item.subtitle && (
                    <p className="senior-subtext text-muted-senior">{item.subtitle}</p>
                  )}
                </div>
              </div>

              <div className="px-5 pb-5 flex flex-wrap gap-2.5">
                <button
                  type="button"
                  onClick={() => onOpenFavourite(item)}
                  className="btn-senior flex-1 px-4 py-2.5 rounded-2xl bg-orange-600 hover:bg-orange-700 text-white font-bold flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Play className="w-5 h-5 shrink-0" aria-hidden="true" />
                  <span>{t.watchHere}</span>
                </button>

                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-senior px-4 py-2.5 rounded-2xl surface-soft font-bold flex items-center gap-2"
                >
                  <ExternalLink className="w-5 h-5 shrink-0" aria-hidden="true" />
                  <span>YouTube</span>
                </a>

                <button
                  type="button"
                  onClick={() => onRemoveFavourite(item.id)}
                  aria-label={t.removeFavourite}
                  title={t.removeFavourite}
                  className="btn-senior min-w-[60px] px-3 rounded-2xl surface-soft hover:bg-red-100 text-red-700 flex items-center justify-center cursor-pointer"
                >
                  <Trash2 className="w-6 h-6" aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </section>
      )}

      {/* Recently Visited */}
      <section className="surface-card rounded-3xl p-6 sm:p-8 space-y-5 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="senior-heading font-bold font-display flex items-center gap-2.5">
            <Clock className="w-7 h-7 text-emerald-700 dark:text-emerald-400 shrink-0" aria-hidden="true" />
            <span>{t.recentlyVisitedTitle}</span>
          </h2>
          {recentVisited.length > 0 && (
            <button
              type="button"
              onClick={onClearRecent}
              className="min-h-[48px] px-4 py-2 rounded-xl surface-soft hover:bg-red-100 text-red-700 font-bold cursor-pointer"
            >
              {t.clearHistory}
            </button>
          )}
        </div>

        {recentVisited.length === 0 ? (
          <p className="senior-body text-muted-senior">{t.recentlyVisitedEmpty}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {recentVisited.map((item) => (
              <div
                key={item.id}
                className="surface-soft rounded-2xl p-4 flex items-center justify-between gap-3"
              >
                <button
                  type="button"
                  onClick={() => onReopenRecent(item)}
                  className="text-left flex-1 min-h-[54px] cursor-pointer"
                >
                  <div className="font-bold text-[1.08em] line-clamp-1">{item.title}</div>
                  {item.subtitle && (
                    <div className="senior-subtext text-muted-senior line-clamp-1">{item.subtitle}</div>
                  )}
                </button>

                <div className="flex items-center gap-2 shrink-0">
                  {item.url ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[48px] px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold flex items-center gap-1.5"
                    >
                      <ExternalLink className="w-4 h-4 shrink-0" aria-hidden="true" />
                      <span>{t.openAgain}</span>
                    </a>
                  ) : (
                    <button
                      type="button"
                      onClick={() => onReopenRecent(item)}
                      className="min-h-[48px] px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold cursor-pointer"
                    >
                      {t.openAgain}
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={() => onRemoveRecent(item.id)}
                    aria-label={t.removeFavourite}
                    className="min-h-[48px] min-w-[48px] rounded-xl bg-[var(--bg-surface)] hover:bg-red-100 text-red-700 flex items-center justify-center cursor-pointer"
                  >
                    <Trash2 className="w-5 h-5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
