import {useMemo, useState} from 'react';
import {ArrowLeft, HelpCircle, Home, Info, Search, Star, Tv, Volume2, X} from 'lucide-react';
import {CHANNEL_CATEGORY_FILTERS, TV_CHANNELS} from '../data/channelsData';
import type {SimpleTranslations} from '../data/simpleTranslations';
import type {ChannelCategoryId, Language, TVChannel} from '../types';

interface MyChannelsViewProps {
  t: SimpleTranslations;
  language: Language;
  favouriteChannelIds: string[];
  onToggleFavouriteChannel: (channelId: string) => void;
  onOpenChannelHelp: () => void;
  onBack: () => void;
  onGoHome: () => void;
  onSpeak: (text: string) => void;
}

const EXAMPLE_SEARCHES = ['झी मराठी', 'साम टीव्ही', '1203', 'भजन', 'बातम्या'];

function matchesSearch(channel: TVChannel, rawQuery: string): boolean {
  const q = rawQuery.trim().toLowerCase();
  if (!q) return true;

  const searchable = [
    channel.number ?? '',
    channel.nameMr,
    channel.nameOriginal,
    channel.categoryLabel.mr,
    channel.categoryLabel.hi,
    channel.categoryLabel.en,
    channel.languageLabel.mr,
    channel.languageLabel.hi,
    channel.languageLabel.en,
    channel.searchKeywords ?? '',
  ]
    .join(' ')
    .toLowerCase();

  return searchable.includes(q);
}

export function MyChannelsView({
  t,
  language,
  favouriteChannelIds,
  onToggleFavouriteChannel,
  onOpenChannelHelp,
  onBack,
  onGoHome,
  onSpeak,
}: MyChannelsViewProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ChannelCategoryId>('all');

  const filteredChannels = useMemo(() => {
    return TV_CHANNELS.filter((channel) => {
      const catMatch =
        selectedCategory === 'all' || channel.categoryId === selectedCategory;
      const queryMatch = matchesSearch(channel, searchQuery);
      return catMatch && queryMatch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="space-y-7">
      {/* Top Navigation */}
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
          onClick={() => onSpeak(`${t.myChannelsButton}. ${t.myChannelsQuestion}`)}
          className="btn-senior px-5 py-3 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold flex items-center gap-2.5 cursor-pointer"
        >
          <Volume2 className="w-6 h-6 shrink-0" aria-hidden="true" />
          <span>{t.readAloud}</span>
        </button>
      </div>

      {/* Header & Channel Number Help Shortcut */}
      <section className="surface-card rounded-3xl p-6 sm:p-8 space-y-5 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <h1 className="senior-hero-heading font-bold font-display">{t.myChannelsButton}</h1>
            <p className="senior-heading font-semibold text-orange-800 dark:text-orange-300">
              {t.myChannelsQuestion}
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenChannelHelp}
            className="btn-senior px-6 py-3 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold flex items-center justify-center gap-2.5 shrink-0 cursor-pointer"
          >
            <HelpCircle className="w-6 h-6 shrink-0" aria-hidden="true" />
            <span>{t.channelHowToFindButton}</span>
          </button>
        </div>

        {/* Full Channel Search Input */}
        <div className="space-y-3">
          <div className="relative">
            <Search
              className="w-6 h-6 text-muted-senior absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
              aria-hidden="true"
            />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.channelSearchPlaceholder}
              aria-label={t.channelSearchPlaceholder}
              className="w-full min-h-[65px] pl-14 pr-14 py-3 rounded-2xl surface-soft font-semibold text-[var(--text-primary)] placeholder:text-[var(--text-secondary)]"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                aria-label={t.channelClearSearch}
                className="min-h-[48px] min-w-[48px] absolute right-2 top-1/2 -translate-y-1/2 rounded-xl flex items-center justify-center hover:bg-black/10 cursor-pointer"
              >
                <X className="w-6 h-6" aria-hidden="true" />
              </button>
            )}
          </div>

          {/* Clickable Search Examples */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="senior-subtext text-muted-senior mr-1">{t.channelSearchExamples}</span>
            {EXAMPLE_SEARCHES.map((ex) => (
              <button
                key={ex}
                type="button"
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery(ex);
                }}
                className="min-h-[44px] px-4 py-1.5 rounded-xl surface-soft hover:bg-orange-100 font-semibold text-[18px] cursor-pointer"
              >
                {ex}
              </button>
            ))}
          </div>
        </div>

        {/* HDMI 2 + Channel Lineup Disclaimer */}
        <div className="rounded-2xl p-4 bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-700 flex items-start gap-3">
          <Info className="w-6 h-6 text-amber-800 dark:text-amber-300 shrink-0 mt-0.5" aria-hidden="true" />
          <div className="space-y-1">
            <p className="senior-subtext font-semibold text-amber-950 dark:text-amber-100">
              {t.channelLineupDisclaimer}
            </p>
            <p className="senior-subtext font-semibold text-emerald-900 dark:text-emerald-300">
              {t.hdmi2HomeNote}
            </p>
          </div>
        </div>
      </section>

      {/* Simple Category Filters */}
      <section aria-label={t.myChannelsQuestion} className="flex flex-wrap gap-2.5">
        {CHANNEL_CATEGORY_FILTERS.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`min-h-[56px] px-4 py-2.5 rounded-2xl font-bold flex items-center gap-2 whitespace-nowrap cursor-pointer transition-colors ${
                isSelected
                  ? 'bg-orange-600 text-white shadow-sm'
                  : 'surface-card hover:bg-orange-100'
              }`}
            >
              <span aria-hidden="true">{cat.emoji}</span>
              <span>{cat.label[language]}</span>
            </button>
          );
        })}
      </section>

      {/* Channel Directory Cards */}
      {filteredChannels.length === 0 ? (
        <div className="surface-card rounded-3xl p-8 text-center space-y-4">
          <p className="senior-body font-medium text-muted-senior">{t.channelNoResults}</p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            className="btn-senior px-7 py-3 rounded-2xl bg-orange-600 hover:bg-orange-700 text-white font-bold cursor-pointer"
          >
            {t.channelClearSearch}
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredChannels.map((channel) => {
            const isFav = favouriteChannelIds.includes(channel.id);
            return (
              <article
                key={channel.id}
                className="surface-card rounded-3xl p-6 flex flex-col justify-between gap-5 text-center shadow-sm"
              >
                <div className="space-y-2">
                  {/* Channel Number */}
                  <div className="flex items-center justify-center gap-2 text-2xl sm:text-3xl font-bold font-display text-orange-700 dark:text-orange-400 tabular-nums">
                    <Tv className="w-7 h-7 shrink-0" aria-hidden="true" />
                    <span>{channel.number ? channel.number : t.channelNumberUnverified}</span>
                  </div>

                  {/* Marathi Name */}
                  <h2 className="font-bold font-display text-[1.35em] leading-snug text-[var(--text-primary)]">
                    {channel.nameMr}
                  </h2>

                  {/* Original Name in small clear text */}
                  <p className="text-[16px] text-muted-senior font-medium">
                    {channel.nameOriginal}
                  </p>

                  {/* Clean Unboxed Metadata */}
                  <p className="senior-subtext font-semibold text-emerald-800 dark:text-emerald-300">
                    {channel.categoryLabel[language]} · {channel.languageLabel[language]}
                    {channel.quality ? ` · ${channel.quality}` : ''}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => onToggleFavouriteChannel(channel.id)}
                  className={`btn-senior w-full px-4 py-3 rounded-2xl font-bold flex items-center justify-center gap-2 cursor-pointer transition-colors ${
                    isFav
                      ? 'bg-amber-200 text-amber-950 border-2 border-amber-500'
                      : 'surface-soft hover:bg-amber-100'
                  }`}
                >
                  <Star className={`w-6 h-6 shrink-0 ${isFav ? 'fill-current' : ''}`} aria-hidden="true" />
                  <span>{isFav ? t.channelSavedFavourite : t.channelSaveFavourite}</span>
                </button>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}
