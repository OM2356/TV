import {useCallback, useEffect, useMemo, useState} from 'react';
import {CategoryTopicView} from './components/CategoryTopicView';
import {ChannelNumberHelpView} from './components/ChannelNumberHelpView';
import {MyChannelsView} from './components/MyChannelsView';
import {SimpleFavouritesView} from './components/SimpleFavouritesView';
import {SimpleHeader} from './components/SimpleHeader';
import {SimpleHelpView} from './components/SimpleHelpView';
import {SimpleHome} from './components/SimpleHome';
import {TroubleshootingView} from './components/TroubleshootingView';
import {VideoPlayerView} from './components/VideoPlayerView';
import {VoiceSearchView} from './components/VoiceSearchView';
import {TV_CHANNELS} from './data/channelsData';
import {buildYouTubeSearchUrl, MAIN_CATEGORIES, matchVoiceRequest} from './data/simpleCatalog';
import {SIMPLE_TRANSLATIONS} from './data/simpleTranslations';
import {useLocalStorage} from './hooks/useLocalStorage';
import {useSpeechSynthesis, useVoiceRecognition} from './hooks/useSpeech';
import type {
  AppSection,
  FavouriteItem,
  FontScale,
  Language,
  MainCategoryId,
  RecentVisitedItem,
  SubOption,
  ThemeMode,
  TroubleshootProblemId,
  VideoItem,
} from './types';

const FONT_SIZE_PX: Record<FontScale, string> = {
  normal: '22px',
  large: '25px',
  xlarge: '28px',
};

export default function App() {
  const [language, setLanguage] = useLocalStorage<Language>('aai_baba_tv_lang', 'mr');
  const [fontScale, setFontScale] = useLocalStorage<FontScale>('aai_baba_tv_font_scale', 'normal');
  const [theme, setTheme] = useLocalStorage<ThemeMode>('aai_baba_tv_theme', 'light');
  const [favourites, setFavourites] = useLocalStorage<FavouriteItem[]>(
    'aai_baba_tv_simple_favourites',
    []
  );
  const [favouriteCategoryIds, setFavouriteCategoryIds] = useLocalStorage<MainCategoryId[]>(
    'aai_baba_tv_fav_categories',
    []
  );
  const [favouriteChannelIds, setFavouriteChannelIds] = useLocalStorage<string[]>(
    'aai_baba_tv_fav_channels',
    []
  );
  const [recentVisited, setRecentVisited] = useLocalStorage<RecentVisitedItem[]>(
    'aai_baba_tv_recent_visited',
    []
  );

  const [activeSection, setActiveSection] = useState<AppSection>('home');
  const [previousSection, setPreviousSection] = useState<AppSection>('home');
  const [selectedCategory, setSelectedCategory] = useState<MainCategoryId | null>(null);
  const [selectedSubOptionId, setSelectedSubOptionId] = useState<string | null>(null);
  const [customQuery, setCustomQuery] = useState<string | null>(null);
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);
  const [troubleshootProblemId, setTroubleshootProblemId] =
    useState<TroubleshootProblemId | null>(null);

  const t = SIMPLE_TRANSLATIONS[language];

  useEffect(() => {
    const root = document.documentElement;
    root.lang = language;
    root.classList.toggle('dark', theme === 'dark');
    root.setAttribute('data-contrast', 'standard');
    root.style.setProperty('--base-font-size', FONT_SIZE_PX[fontScale]);
  }, [language, theme, fontScale]);

  const speechSynth = useSpeechSynthesis(language);

  const favouriteChannels = useMemo(
    () =>
      favouriteChannelIds
        .map((id) => TV_CHANNELS.find((ch) => ch.id === id))
        .filter((ch): ch is NonNullable<typeof ch> => Boolean(ch)),
    [favouriteChannelIds]
  );

  const navigate = useCallback(
    (next: AppSection) => {
      setPreviousSection(activeSection);
      setActiveSection(next);
      window.scrollTo({top: 0, behavior: 'smooth'});
    },
    [activeSection]
  );

  const goHome = useCallback(() => {
    setSelectedCategory(null);
    setSelectedSubOptionId(null);
    setCustomQuery(null);
    setTroubleshootProblemId(null);
    setActiveSection('home');
    window.scrollTo({top: 0, behavior: 'smooth'});
  }, []);

  const addRecentVisit = useCallback(
    (item: Omit<RecentVisitedItem, 'visitedAt'>) => {
      setRecentVisited((prev) => {
        const entry: RecentVisitedItem = {...item, visitedAt: Date.now()};
        return [entry, ...prev.filter((i) => i.id !== entry.id)].slice(0, 10);
      });
    },
    [setRecentVisited]
  );

  const openCategory = useCallback(
    (categoryId: MainCategoryId, subOptionId: string | null = null) => {
      setSelectedCategory(categoryId);
      setSelectedSubOptionId(subOptionId);
      setCustomQuery(null);
      const cat = MAIN_CATEGORIES.find((c) => c.id === categoryId);
      if (cat) {
        addRecentVisit({
          id: `cat-${cat.id}`,
          kind: 'category',
          title: `${cat.emoji} ${cat.title[language]}`,
          categoryId: cat.id,
        });
      }
      navigate('category');
    },
    [addRecentVisit, language, navigate]
  );

  const openSearch = useCallback(
    (query: string) => {
      setSelectedCategory(null);
      setSelectedSubOptionId(null);
      setCustomQuery(query);
      addRecentVisit({
        id: `search-${query.toLowerCase()}`,
        kind: 'search',
        title: query,
        url: buildYouTubeSearchUrl(query),
      });
      navigate('category');
    },
    [addRecentVisit, navigate]
  );

  const handleVoiceMatch = useCallback(
    (spokenText: string) => {
      const matched = matchVoiceRequest(spokenText);
      if (matched.type === 'troubleshoot') {
        setTroubleshootProblemId(matched.problemId ?? null);
        navigate('troubleshoot');
      } else if (matched.type === 'channels') {
        navigate('channels');
      } else if (matched.type === 'help') {
        navigate('help');
      } else if (matched.type === 'favourites') {
        navigate('favourites');
      } else if (matched.type === 'suboption') {
        openCategory(matched.categoryId, matched.subOptionId);
      } else if (matched.type === 'category') {
        openCategory(matched.categoryId);
      } else {
        openSearch(matched.query);
      }
    },
    [navigate, openCategory, openSearch]
  );

  const voiceRecognition = useVoiceRecognition(language, handleVoiceMatch);

  const toggleFavouriteCategory = useCallback(
    (categoryId: MainCategoryId) => {
      setFavouriteCategoryIds((prev) =>
        prev.includes(categoryId) ? prev.filter((id) => id !== categoryId) : [categoryId, ...prev]
      );
    },
    [setFavouriteCategoryIds]
  );

  const toggleFavouriteTopic = useCallback(
    (topic: SubOption) => {
      const favId = `topic-${topic.id}`;
      setFavourites((prev) => {
        if (prev.some((item) => item.id === favId)) {
          return prev.filter((item) => item.id !== favId);
        }
        const entry: FavouriteItem = {
          id: favId,
          kind: 'topic',
          title: topic.title[language],
          subtitle: topic.subtitle[language],
          thumbnail: topic.artwork,
          url: buildYouTubeSearchUrl(topic.youtubeQuery),
          categoryId: topic.categoryId,
          subOptionId: topic.id,
          savedAt: Date.now(),
        };
        return [entry, ...prev];
      });
    },
    [language, setFavourites]
  );

  const toggleFavouriteVideo = useCallback(
    (video: VideoItem) => {
      const favId = `video-${video.id}`;
      setFavourites((prev) => {
        if (prev.some((item) => item.id === favId)) {
          return prev.filter((item) => item.id !== favId);
        }
        const entry: FavouriteItem = {
          id: favId,
          kind: 'video',
          title: video.title,
          subtitle: video.channelTitle,
          thumbnail: video.thumbnail,
          url: video.watchUrl,
          videoId: video.id,
          categoryId: video.categoryId,
          savedAt: Date.now(),
        };
        return [entry, ...prev];
      });
    },
    [setFavourites]
  );

  const toggleFavouriteChannel = useCallback(
    (channelId: string) => {
      setFavouriteChannelIds((prev) =>
        prev.includes(channelId) ? prev.filter((id) => id !== channelId) : [channelId, ...prev]
      );
    },
    [setFavouriteChannelIds]
  );

  const playVideo = useCallback(
    (video: VideoItem) => {
      setActiveVideo(video);
      navigate('player');
    },
    [navigate]
  );

  const openFavouriteItem = useCallback(
    (item: FavouriteItem) => {
      if (item.kind === 'video' && item.videoId) {
        playVideo({
          id: item.videoId,
          title: item.title,
          channelTitle: item.subtitle || 'YouTube',
          thumbnail: item.thumbnail,
          watchUrl: item.url,
          categoryId: item.categoryId,
        });
      } else if (item.kind === 'topic' && item.categoryId) {
        openCategory(item.categoryId, item.subOptionId ?? null);
      }
    },
    [openCategory, playVideo]
  );

  const reopenRecent = useCallback(
    (item: RecentVisitedItem) => {
      if (item.kind === 'category' && item.categoryId) {
        openCategory(item.categoryId);
      } else if (item.kind === 'topic' && item.categoryId) {
        openCategory(item.categoryId, item.subOptionId ?? null);
      } else if (item.kind === 'channel') {
        navigate('channels');
      } else {
        openSearch(item.title);
      }
    },
    [navigate, openCategory, openSearch]
  );

  const handleFontDecrease = () => {
    setFontScale((prev) => (prev === 'xlarge' ? 'large' : 'normal'));
  };

  const handleFontIncrease = () => {
    setFontScale((prev) => (prev === 'normal' ? 'large' : 'xlarge'));
  };

  const totalFavouritesCount =
    favourites.length + favouriteChannels.length + favouriteCategoryIds.length;

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-canvas)] text-[var(--text-primary)]">
      <SimpleHeader
        t={t}
        language={language}
        onLanguageChange={setLanguage}
        fontScale={fontScale}
        onFontDecrease={handleFontDecrease}
        onFontIncrease={handleFontIncrease}
        theme={theme}
        onToggleTheme={() => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))}
        activeSection={activeSection}
        favouritesCount={totalFavouritesCount}
        onNavigateHome={goHome}
        onOpenFavourites={() => navigate('favourites')}
      />

      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {activeSection === 'home' && (
          <SimpleHome
            t={t}
            language={language}
            favouriteChannels={favouriteChannels}
            recentVisited={recentVisited}
            onSelectCategory={(id) => openCategory(id)}
            onOpenChannels={() => navigate('channels')}
            onRemoveFavouriteChannel={toggleFavouriteChannel}
            onReopenRecent={reopenRecent}
            onOpenVoice={() => navigate('voice')}
            onOpenHelp={() => navigate('help')}
            onOpenTroubleshoot={() => {
              setTroubleshootProblemId(null);
              navigate('troubleshoot');
            }}
            onSpeak={speechSynth.speak}
          />
        )}

        {activeSection === 'channels' && (
          <MyChannelsView
            t={t}
            language={language}
            favouriteChannelIds={favouriteChannelIds}
            onToggleFavouriteChannel={toggleFavouriteChannel}
            onOpenChannelHelp={() => navigate('channel-help')}
            onBack={goHome}
            onGoHome={goHome}
            onSpeak={speechSynth.speak}
          />
        )}

        {activeSection === 'channel-help' && (
          <ChannelNumberHelpView
            t={t}
            onBack={() => navigate('channels')}
            onGoHome={goHome}
            onSpeak={speechSynth.speak}
          />
        )}

        {activeSection === 'category' && (
          <CategoryTopicView
            t={t}
            language={language}
            categoryId={selectedCategory}
            initialSubOptionId={selectedSubOptionId}
            customQuery={customQuery}
            favouriteIds={favourites.map((f) => f.id)}
            favouriteCategoryIds={favouriteCategoryIds}
            onBack={goHome}
            onGoHome={goHome}
            onToggleFavouriteCategory={toggleFavouriteCategory}
            onToggleFavouriteTopic={toggleFavouriteTopic}
            onRecordTopicVisit={(topic) =>
              addRecentVisit({
                id: `topic-${topic.id}`,
                kind: 'topic',
                title: topic.title[language],
                subtitle: topic.subtitle[language],
                url: buildYouTubeSearchUrl(topic.youtubeQuery),
                categoryId: topic.categoryId,
                subOptionId: topic.id,
              })
            }
            onRecordSearchVisit={(query) =>
              addRecentVisit({
                id: `search-${query.toLowerCase()}`,
                kind: 'search',
                title: query,
                url: buildYouTubeSearchUrl(query),
              })
            }
            onSpeak={speechSynth.speak}
          />
        )}

        {activeSection === 'voice' && (
          <VoiceSearchView
            t={t}
            language={language}
            voiceSupported={voiceRecognition.isSupported}
            isListening={voiceRecognition.isListening}
            transcript={voiceRecognition.transcript}
            voiceErrorCode={voiceRecognition.errorCode}
            onStartVoice={voiceRecognition.startListening}
            onStopVoice={voiceRecognition.stopListening}
            onPhraseOrSearch={handleVoiceMatch}
            onBack={goHome}
            onGoHome={goHome}
          />
        )}

        {activeSection === 'favourites' && (
          <SimpleFavouritesView
            t={t}
            language={language}
            items={favourites}
            favouriteCategories={favouriteCategoryIds}
            favouriteChannels={favouriteChannels}
            recentVisited={recentVisited}
            onBack={goHome}
            onGoHome={goHome}
            onOpenCategory={(id) => openCategory(id)}
            onOpenChannels={() => navigate('channels')}
            onOpenFavourite={openFavouriteItem}
            onReopenRecent={reopenRecent}
            onRemoveFavourite={(id) =>
              setFavourites((prev) => prev.filter((item) => item.id !== id))
            }
            onRemoveFavouriteCategory={toggleFavouriteCategory}
            onRemoveFavouriteChannel={toggleFavouriteChannel}
            onRemoveRecent={(id) =>
              setRecentVisited((prev) => prev.filter((item) => item.id !== id))
            }
            onClearRecent={() => setRecentVisited([])}
          />
        )}

        {activeSection === 'help' && (
          <SimpleHelpView
            t={t}
            language={language}
            onBack={goHome}
            onGoHome={goHome}
            onOpenTroubleshoot={() => {
              setTroubleshootProblemId(null);
              navigate('troubleshoot');
            }}
            onSpeak={speechSynth.speak}
          />
        )}

        {activeSection === 'troubleshoot' && (
          <TroubleshootingView
            t={t}
            language={language}
            initialProblemId={troubleshootProblemId}
            voiceSupported={voiceRecognition.isSupported}
            isListening={voiceRecognition.isListening}
            transcript={voiceRecognition.transcript}
            voiceErrorCode={voiceRecognition.errorCode}
            onStartVoice={voiceRecognition.startListening}
            onStopVoice={voiceRecognition.stopListening}
            onSpeak={speechSynth.speak}
            onBack={goHome}
            onGoHome={goHome}
          />
        )}

        {activeSection === 'player' && activeVideo && (
          <VideoPlayerView
            t={t}
            video={activeVideo}
            isFavourite={favourites.some((f) => f.id === `video-${activeVideo.id}`)}
            onBack={() =>
              setActiveSection(previousSection === 'player' ? 'home' : previousSection)
            }
            onGoHome={goHome}
            onToggleFavourite={toggleFavouriteVideo}
            onSpeak={speechSynth.speak}
          />
        )}
      </main>
    </div>
  );
}
