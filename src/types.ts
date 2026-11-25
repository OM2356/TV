export type Language = 'mr' | 'hi' | 'en';

export type FontScale = 'normal' | 'large' | 'xlarge';

export type ThemeMode = 'light' | 'dark';

export type AppSection =
  | 'home'
  | 'category'
  | 'channels'
  | 'channel-help'
  | 'voice'
  | 'favourites'
  | 'help'
  | 'troubleshoot'
  | 'player';

export type MainCategoryId =
  | 'bhajan'
  | 'old-songs'
  | 'news'
  | 'movies'
  | 'entertainment';

export type ChannelCategoryId =
  | 'all'
  | 'marathi-serials'
  | 'marathi-news'
  | 'marathi-movies'
  | 'hindi-serials'
  | 'hindi-movies'
  | 'bhakti-mandir'
  | 'songs'
  | 'sports'
  | 'entertainment'
  | 'kids'
  | 'documentary'
  | 'english';

export type TroubleshootProblemId =
  | 'tv-not-turning-on'
  | 'no-signal'
  | 'select-hdmi-2'
  | 'no-sound'
  | 'no-channels'
  | 'jio-box-not-working'
  | 'no-internet'
  | 'youtube-not-opening'
  | 'remote-not-working'
  | 'tv-restarting'
  | 'other-problem';

export interface LocalizedText {
  mr: string;
  hi: string;
  en: string;
}

export interface MainCategory {
  id: MainCategoryId;
  emoji: string;
  title: LocalizedText;
  cardBg: string;
}

export interface SubOption {
  id: string;
  categoryId: MainCategoryId;
  emoji: string;
  title: LocalizedText;
  subtitle: LocalizedText;
  youtubeQuery: string;
  artwork: string;
}

export interface VideoItem {
  id: string;
  title: string;
  channelTitle: string;
  durationText?: string;
  thumbnail: string;
  watchUrl: string;
  categoryId?: MainCategoryId;
}

export interface FavouriteItem {
  id: string;
  kind: 'topic' | 'video';
  title: string;
  subtitle?: string;
  thumbnail: string;
  url: string;
  videoId?: string;
  categoryId?: MainCategoryId;
  subOptionId?: string;
  savedAt: number;
}

export interface RecentVisitedItem {
  id: string;
  kind: 'category' | 'topic' | 'channel' | 'search';
  title: string;
  subtitle?: string;
  url?: string;
  categoryId?: MainCategoryId;
  subOptionId?: string;
  visitedAt: number;
}

export interface TVChannel {
  id: string;
  number: string | null;
  nameMr: string;
  nameOriginal: string;
  categoryId: Exclude<ChannelCategoryId, 'all'>;
  categoryLabel: LocalizedText;
  languageLabel: LocalizedText;
  quality?: 'HD' | 'SD';
  searchKeywords?: string;
}

export interface ChannelCategoryFilter {
  id: ChannelCategoryId;
  emoji: string;
  label: LocalizedText;
}

export type StepDiagramType =
  | 'power-plug'
  | 'remote-mute'
  | 'remote-volume'
  | 'jio-light'
  | 'hdmi-2-source'
  | 'safe-restart'
  | 'router-lights'
  | 'tv-home-youtube'
  | 'remote-battery'
  | 'safety-stop'
  | 'family-help';

export interface TroubleshootStep {
  id: string;
  diagram: StepDiagramType;
  instruction: LocalizedText;
  simplerExplanation: LocalizedText;
  safetyNote?: LocalizedText;
  nextButtonLabel?: LocalizedText;
  solvedButtonLabel?: LocalizedText;
  isEmergencySafetyStep?: boolean;
}

export interface TroubleshootProblem {
  id: TroubleshootProblemId;
  emoji: string;
  title: LocalizedText;
  headingOverride?: LocalizedText;
  introNote: LocalizedText;
  homeConnectionNote?: LocalizedText;
  steps: TroubleshootStep[];
}

export interface SimpleHelpGuide {
  id: string;
  emoji: string;
  title: LocalizedText;
  steps: {
    mr: string[];
    hi: string[];
    en: string[];
  };
}
