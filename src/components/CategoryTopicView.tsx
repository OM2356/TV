import {useState} from 'react';
import {ArrowLeft, ExternalLink, Home, Search, Star, Volume2} from 'lucide-react';
import {buildYouTubeSearchUrl, MAIN_CATEGORIES, SUB_OPTIONS} from '../data/simpleCatalog';
import type {SimpleTranslations} from '../data/simpleTranslations';
import type {Language, MainCategoryId, SubOption} from '../types';
import {ResilientImage} from './ResilientImage';

interface CategoryTopicViewProps {
  t: SimpleTranslations;
  language: Language;
  categoryId: MainCategoryId | null;
  initialSubOptionId?: string | null;
  customQuery?: string | null;
  favouriteIds: string[];
  favouriteCategoryIds: MainCategoryId[];
  onBack: () => void;
  onGoHome: () => void;
  onToggleFavouriteCategory: (categoryId: MainCategoryId) => void;
  onToggleFavouriteTopic: (topic: SubOption) => void;
  onRecordTopicVisit: (topic: SubOption) => void;
  onRecordSearchVisit: (query: string) => void;
  onSpeak: (text: string) => void;
}

export function CategoryTopicView({
  t,
  language,
  categoryId,
  initialSubOptionId,
  customQuery,
  favouriteIds,
  favouriteCategoryIds,
  onBack,
  onGoHome,
  onToggleFavouriteCategory,
  onToggleFavouriteTopic,
  onRecordTopicVisit,
  onRecordSearchVisit,
  onSpeak,
}: CategoryTopicViewProps) {
  const category = categoryId ? MAIN_CATEGORIES.find((c) => c.id === categoryId) : undefined;
  const options = categoryId ? SUB_OPTIONS.filter((o) => o.categoryId === categoryId) : [];

  const [manualQuery, setManualQuery] = useState(customQuery ?? '');

  const isCatSaved = categoryId ? favouriteCategoryIds.includes(categoryId) : false;

  const trimmedManual = manualQuery.trim();
  const activeSearchQuery = trimmedManual || customQuery || '';
  const directCustomYoutubeUrl = activeSearchQuery
    ? buildYouTubeSearchUrl(activeSearchQuery)
    : null;

  return (
    <div className="space-y-8">
      {/* Clear Top Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-3">
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

        <button
          type="button"
          onClick={() =>
            onSpeak(
              `${category ? category.title[language] : activeSearchQuery}. ${t.chooseTopicHeading}`
            )
          }
          className="btn-senior px-5 py-3 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold flex items-center gap-2.5 cursor-pointer"
        >
          <Volume2 className="w-6 h-6 shrink-0" aria-hidden="true" />
          <span>{t.readAloud}</span>
        </button>
      </div>

      {/* Category Heading + Save Favourite Category */}
      <div className="surface-card rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h1 className="senior-hero-heading font-bold font-display flex items-center gap-3">
            {category && <span aria-hidden="true">{category.emoji}</span>}
            <span>{category ? category.title[language] : activeSearchQuery}</span>
          </h1>

          {categoryId && (
            <button
              type="button"
              onClick={() => onToggleFavouriteCategory(categoryId)}
              className={`btn-senior px-6 py-3 rounded-2xl font-bold flex items-center gap-2.5 cursor-pointer ${
                isCatSaved
                  ? 'bg-amber-200 text-amber-950 border-2 border-amber-500'
                  : 'surface-soft hover:bg-amber-100 dark:hover:bg-amber-950/40'
              }`}
            >
              <Star className={`w-6 h-6 shrink-0 ${isCatSaved ? 'fill-current' : ''}`} aria-hidden="true" />
              <span>{isCatSaved ? t.savedCategoryFavourite : t.saveCategoryFavourite}</span>
            </button>
          )}
        </div>

        {options.length > 0 && (
          <p className="senior-body text-muted-senior">{t.chooseTopicHeading}</p>
        )}

        {/* Custom / Manual YouTube Search Box (zero API key, always works) */}
        <div className="pt-2 border-t border-[var(--border-subtle)] space-y-3">
          <p className="senior-subtext font-semibold text-muted-senior">{t.manualSearchHeading}</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search
                className="w-6 h-6 text-muted-senior absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
                aria-hidden="true"
              />
              <input
                type="search"
                value={manualQuery}
                onChange={(e) => setManualQuery(e.target.value)}
                placeholder={t.searchPlaceholder}
                aria-label={t.searchPlaceholder}
                className="w-full min-h-[65px] pl-14 pr-4 py-3 rounded-2xl surface-soft font-medium"
              />
            </div>

            {directCustomYoutubeUrl && (
              <a
                href={directCustomYoutubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => onRecordSearchVisit(activeSearchQuery)}
                className="btn-senior px-7 py-3 rounded-2xl bg-orange-600 hover:bg-orange-700 text-white font-bold flex items-center justify-center gap-2.5 shrink-0"
              >
                <ExternalLink className="w-6 h-6 shrink-0" aria-hidden="true" />
                <span>{t.watchOnYoutube}</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Large Friendly Topic Cards (Zero Backend / Zero Broken Embeds) */}
      {options.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {options.map((opt) => {
            const isHighlighted = opt.id === initialSubOptionId;
            const optFav = favouriteIds.includes(`topic-${opt.id}`);
            const ytUrl = buildYouTubeSearchUrl(opt.youtubeQuery);

            return (
              <article
                key={opt.id}
                className={`surface-card rounded-3xl overflow-hidden flex flex-col justify-between shadow-sm ${
                  isHighlighted ? 'ring-3 ring-orange-600' : ''
                }`}
              >
                <div>
                  <div className="aspect-[4/3] w-full bg-stone-200 dark:bg-stone-800">
                    <ResilientImage
                      src={opt.artwork}
                      alt={opt.title[language]}
                      titleFallback={opt.title[language]}
                    />
                  </div>
                  <div className="p-5 space-y-1.5">
                    <h2 className="font-bold font-display text-[1.25em] flex items-center gap-2">
                      <span aria-hidden="true">{opt.emoji}</span>
                      <span>{opt.title[language]}</span>
                    </h2>
                    <p className="senior-subtext text-muted-senior">{opt.subtitle[language]}</p>
                  </div>
                </div>

                <div className="px-5 pb-5 space-y-2.5">
                  <a
                    href={ytUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => onRecordTopicVisit(opt)}
                    className="btn-senior w-full px-5 py-3 rounded-2xl bg-orange-600 hover:bg-orange-700 text-white font-bold flex items-center justify-center gap-2.5"
                  >
                    <ExternalLink className="w-6 h-6 shrink-0" aria-hidden="true" />
                    <span>{t.watchOnYoutube}</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => onToggleFavouriteTopic(opt)}
                    className={`btn-senior w-full px-4 py-2.5 rounded-2xl font-bold flex items-center justify-center gap-2 cursor-pointer ${
                      optFav
                        ? 'bg-amber-200 text-amber-950 border-2 border-amber-500'
                        : 'surface-soft hover:bg-amber-100 dark:hover:bg-amber-950/40'
                    }`}
                  >
                    <Star className={`w-6 h-6 shrink-0 ${optFav ? 'fill-current' : ''}`} aria-hidden="true" />
                    <span>{optFav ? t.savedFavourite : t.saveFavourite}</span>
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}
