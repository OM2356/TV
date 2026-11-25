import type {
  Language,
  MainCategory,
  MainCategoryId,
  SimpleHelpGuide,
  SubOption,
  TroubleshootProblemId,
} from '../types';

export const ARTWORK = {
  bhakti: '/src/assets/images/devotional_bhakti_art_1795619737453.jpg',
  music: '/src/assets/images/classic_music_radio_1795619739118.jpg',
  cinema: '/src/assets/images/marathi_cinema_family_1795619739064.jpg',
  tv: '/src/assets/images/tv_companion_remote_1795619739545.jpg',
  calm: '/src/assets/images/calm_meditation_morning_1795619739407.jpg',
} as const;

export function buildYouTubeSearchUrl(query: string): string {
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(query.trim())}`;
}

export const MAIN_CATEGORIES: MainCategory[] = [
  {
    id: 'bhajan',
    emoji: '🙏',
    title: {mr: 'भजन आणि आरती', hi: 'भजन और आरती', en: 'Bhajan & Aarti'},
    cardBg: 'bg-amber-50 hover:bg-amber-100 border-amber-300 dark:bg-amber-950/40 dark:border-amber-700',
  },
  {
    id: 'old-songs',
    emoji: '🎵',
    title: {mr: 'जुनी गाणी', hi: 'पुराने गाने', en: 'Old Songs'},
    cardBg: 'bg-emerald-50 hover:bg-emerald-100 border-emerald-300 dark:bg-emerald-950/40 dark:border-emerald-700',
  },
  {
    id: 'news',
    emoji: '📰',
    title: {mr: 'बातम्या', hi: 'समाचार', en: 'News'},
    cardBg: 'bg-orange-50 hover:bg-orange-100 border-orange-300 dark:bg-orange-950/40 dark:border-orange-700',
  },
  {
    id: 'movies',
    emoji: '🎬',
    title: {mr: 'चित्रपट', hi: 'फ़िल्में', en: 'Movies'},
    cardBg: 'bg-amber-50 hover:bg-amber-100 border-amber-300 dark:bg-amber-950/40 dark:border-amber-700',
  },
  {
    id: 'entertainment',
    emoji: '😂',
    title: {mr: 'मनोरंजन', hi: 'मनोरंजन', en: 'Entertainment'},
    cardBg: 'bg-emerald-50 hover:bg-emerald-100 border-emerald-300 dark:bg-emerald-950/40 dark:border-emerald-700',
  },
];

export const SUB_OPTIONS: SubOption[] = [
  // 5. Bhajan Section
  {
    id: 'vitthal-bhajan',
    categoryId: 'bhajan',
    emoji: '🙏',
    title: {mr: 'विठ्ठल भजन', hi: 'विट्ठल भजन', en: 'Vitthal Bhajan'},
    subtitle: {mr: 'भजन लावा', hi: 'भजन सुनें', en: 'Listen to Vitthal bhajan'},
    youtubeQuery: 'विठ्ठल भजन मराठी अभंग',
    artwork: ARTWORK.bhakti,
  },
  {
    id: 'ganpati-aarti',
    categoryId: 'bhajan',
    emoji: '🪔',
    title: {mr: 'गणपती आरती', hi: 'गणपति आरती', en: 'Ganpati Aarti'},
    subtitle: {mr: 'सुखकर्ता दुखहर्ता आरती', hi: 'गणपति की आरती', en: 'Ganesh aarti'},
    youtubeQuery: 'गणपती आरती मराठी सुखकर्ता दुखहर्ता',
    artwork: ARTWORK.bhakti,
  },
  {
    id: 'saibaba',
    categoryId: 'bhajan',
    emoji: '🌼',
    title: {mr: 'साईबाबा', hi: 'साईं बाबा', en: 'Saibaba'},
    subtitle: {mr: 'साईबाबांची आरती आणि भजन', hi: 'साईं बाबा आरती और भजन', en: 'Saibaba aarti & bhajan'},
    youtubeQuery: 'साईबाबा आरती आणि भजन मराठी',
    artwork: ARTWORK.bhakti,
  },
  {
    id: 'swami-samarth',
    categoryId: 'bhajan',
    emoji: '🌺',
    title: {mr: 'स्वामी समर्थ', hi: 'स्वामी समर्थ', en: 'Swami Samarth'},
    subtitle: {mr: 'श्री स्वामी समर्थ तारक मंत्र', hi: 'स्वामी समर्थ तारक मंत्र', en: 'Swami Samarth mantra'},
    youtubeQuery: 'श्री स्वामी समर्थ तारक मंत्र भजन',
    artwork: ARTWORK.bhakti,
  },
  {
    id: 'krishna-bhajan',
    categoryId: 'bhajan',
    emoji: '🦚',
    title: {mr: 'कृष्ण भजन', hi: 'कृष्ण भजन', en: 'Krishna Bhajan'},
    subtitle: {mr: 'मधुर श्रीकृष्ण भजनं', hi: 'मधुर श्रीकृष्ण भजन', en: 'Krishna devotional songs'},
    youtubeQuery: 'श्री कृष्ण भजन मराठी हिंदी',
    artwork: ARTWORK.bhakti,
  },
  {
    id: 'hanuman-bhajan',
    categoryId: 'bhajan',
    emoji: '🕉️',
    title: {mr: 'हनुमान भजन', hi: 'हनुमान भजन', en: 'Hanuman Bhajan'},
    subtitle: {mr: 'हनुमान चालीसा आणि स्तोत्र', hi: 'हनुमान चालीसा और भजन', en: 'Hanuman Chalisa & bhajan'},
    youtubeQuery: 'हनुमान चालीसा आणि मारुती स्तोत्र मराठी',
    artwork: ARTWORK.bhakti,
  },

  // 6. Old Songs Section
  {
    id: 'lata-mangeshkar',
    categoryId: 'old-songs',
    emoji: '🎶',
    title: {mr: 'लता मंगेशकर', hi: 'लता मंगेशकर', en: 'Lata Mangeshkar'},
    subtitle: {mr: 'गाणी ऐका', hi: 'लता दीदी के गाने', en: 'Evergreen Lata songs'},
    youtubeQuery: 'लता मंगेशकर जुनी मराठी हिंदी गाणी',
    artwork: ARTWORK.music,
  },
  {
    id: 'kishore-kumar',
    categoryId: 'old-songs',
    emoji: '🎤',
    title: {mr: 'किशोर कुमार', hi: 'किशोर कुमार', en: 'Kishore Kumar'},
    subtitle: {mr: 'किशोर कुमार यांची गाणी', hi: 'किशोर कुमार के गाने', en: 'Kishore Kumar classics'},
    youtubeQuery: 'Kishore Kumar evergreen old songs',
    artwork: ARTWORK.music,
  },
  {
    id: 'asha-bhosle',
    categoryId: 'old-songs',
    emoji: '🎼',
    title: {mr: 'आशा भोसले', hi: 'आशा भोसले', en: 'Asha Bhosle'},
    subtitle: {mr: 'आशा भोसले यांची मधुर गाणी', hi: 'आशा भोसले के गीत', en: 'Asha Bhosle hits'},
    youtubeQuery: 'आशा भोसले जुनी मराठी हिंदी गाणी',
    artwork: ARTWORK.music,
  },
  {
    id: 'mohammed-rafi',
    categoryId: 'old-songs',
    emoji: '📻',
    title: {mr: 'मोहम्मद रफी', hi: 'मोहम्मद रफ़ी', en: 'Mohammed Rafi'},
    subtitle: {mr: 'मोहम्मद रफी यांची सुंदर गाणी', hi: 'मोहम्मद रफ़ी के सदाबहार गीत', en: 'Mohammed Rafi classics'},
    youtubeQuery: 'Mohammed Rafi evergreen hit songs',
    artwork: ARTWORK.music,
  },
  {
    id: 'marathi-old-songs',
    categoryId: 'old-songs',
    emoji: '🎵',
    title: {mr: 'मराठी जुनी गाणी', hi: 'मराठी पुराने गाने', en: 'Old Marathi Songs'},
    subtitle: {mr: 'जुनी मराठी भावगीते आणि गाणी', hi: 'मराठी भावगीत और पुराने गीत', en: 'Classic Marathi songs'},
    youtubeQuery: 'मराठी जुनी गाणी भावगीते',
    artwork: ARTWORK.music,
  },
  {
    id: 'sadabahar-songs',
    categoryId: 'old-songs',
    emoji: '🌿',
    title: {mr: 'सदाबहार गाणी', hi: 'सदाबहार गाने', en: 'Evergreen Songs'},
    subtitle: {mr: 'नेहमी आवडणारी जुनी गाणी', hi: 'सदाबहार पुराने गाने', en: 'All-time evergreen hits'},
    youtubeQuery: 'सदाबहार जुनी गाणी मराठी हिंदी',
    artwork: ARTWORK.music,
  },

  // 7. News Section
  {
    id: 'marathi-news',
    categoryId: 'news',
    emoji: '📰',
    title: {mr: 'मराठी बातम्या', hi: 'मराठी समाचार', en: 'Marathi News'},
    subtitle: {mr: 'बातम्या पाहा', hi: 'मराठी समाचार देखें', en: 'Watch Marathi news'},
    youtubeQuery: 'मराठी बातम्या आजच्या',
    artwork: ARTWORK.tv,
  },
  {
    id: 'maharashtra-news',
    categoryId: 'news',
    emoji: '🗺️',
    title: {mr: 'महाराष्ट्र बातम्या', hi: 'महाराष्ट्र समाचार', en: 'Maharashtra News'},
    subtitle: {mr: 'महाराष्ट्रातील बातम्या', hi: 'महाराष्ट्र की खबरें', en: 'Maharashtra updates'},
    youtubeQuery: 'महाराष्ट्र बातम्या मराठी',
    artwork: ARTWORK.tv,
  },
  {
    id: 'india-news',
    categoryId: 'news',
    emoji: '🇮🇳',
    title: {mr: 'भारताच्या बातम्या', hi: 'भारत के समाचार', en: 'India News'},
    subtitle: {mr: 'देशभरातील मुख्य बातम्या', hi: 'देश के मुख्य समाचार', en: 'National news'},
    youtubeQuery: 'भारत आजच्या मुख्य बातम्या मराठी',
    artwork: ARTWORK.tv,
  },
  {
    id: 'today-news',
    categoryId: 'news',
    emoji: '🗞️',
    title: {mr: 'आजच्या बातम्या', hi: 'आज के समाचार', en: "Today's News"},
    subtitle: {mr: 'आज सकाळ-संध्याकाळच्या बातम्या', hi: 'आज की ताज़ा खबरें', en: "Today's headlines"},
    youtubeQuery: 'आजच्या ताज्या मराठी बातम्या',
    artwork: ARTWORK.tv,
  },

  // 8. Movies Section
  {
    id: 'marathi-movies',
    categoryId: 'movies',
    emoji: '🎬',
    title: {mr: 'मराठी चित्रपट', hi: 'मराठी फ़िल्में', en: 'Marathi Movies'},
    subtitle: {mr: 'छान मराठी चित्रपट पाहा', hi: 'मराठी फ़िल्में देखें', en: 'Watch Marathi films'},
    youtubeQuery: 'मराठी चित्रपट full movie',
    artwork: ARTWORK.cinema,
  },
  {
    id: 'hindi-movies',
    categoryId: 'movies',
    emoji: '🎥',
    title: {mr: 'हिंदी चित्रपट', hi: 'हिंदी फ़िल्में', en: 'Hindi Movies'},
    subtitle: {mr: 'हिंदी चित्रपट पाहा', hi: 'हिंदी फ़िल्में देखें', en: 'Watch Hindi films'},
    youtubeQuery: 'हिंदी पारिवारिक चित्रपट full movie',
    artwork: ARTWORK.cinema,
  },
  {
    id: 'old-movies',
    categoryId: 'movies',
    emoji: '🎞️',
    title: {mr: 'जुने चित्रपट', hi: 'पुरानी फ़िल्में', en: 'Classic Old Movies'},
    subtitle: {mr: 'जुने गाजलेले चित्रपट', hi: 'पुरानी मशहूर फ़िल्में', en: 'Classic old films'},
    youtubeQuery: 'जुने मराठी हिंदी चित्रपट full movie',
    artwork: ARTWORK.cinema,
  },
  {
    id: 'family-movies',
    categoryId: 'movies',
    emoji: '👨‍👩‍👧‍👦',
    title: {mr: 'कौटुंबिक चित्रपट', hi: 'पारिवारिक फ़िल्में', en: 'Family Movies'},
    subtitle: {mr: 'संपूर्ण कुटुंबासोबत पाहण्यासाठी', hi: 'पूरे परिवार के साथ देखने लायक', en: 'Clean family movies'},
    youtubeQuery: 'कौटुंबिक मराठी चित्रपट full movie',
    artwork: ARTWORK.cinema,
  },

  // 9. Entertainment Section
  {
    id: 'marathi-comedy',
    categoryId: 'entertainment',
    emoji: '😂',
    title: {mr: 'मराठी कॉमेडी', hi: 'मराठी कॉमेडी', en: 'Marathi Comedy'},
    subtitle: {mr: 'हसवणारे मराठी कार्यक्रम', hi: 'मज़ेदार मराठी कॉमेडी', en: 'Marathi comedy clips'},
    youtubeQuery: 'मराठी कॉमेडी हास्य कार्यक्रम',
    artwork: ARTWORK.cinema,
  },
  {
    id: 'comedy-shows',
    categoryId: 'entertainment',
    emoji: '😊',
    title: {mr: 'विनोदी कार्यक्रम', hi: 'कॉमेडी शो', en: 'Comedy Shows'},
    subtitle: {mr: 'मन मोकळं हसण्यासाठी', hi: 'हंसने-हंसाने वाले शो', en: 'Light comedy shows'},
    youtubeQuery: 'मराठी विनोदी कार्यक्रम',
    artwork: ARTWORK.cinema,
  },
  {
    id: 'marathi-natak',
    categoryId: 'entertainment',
    emoji: '🎭',
    title: {mr: 'नाटक', hi: 'नाटक', en: 'Marathi Natak'},
    subtitle: {mr: 'जुनी आणि नवीन मराठी नाटकं', hi: 'प्रसिद्ध मराठी नाटक', en: 'Marathi stage plays'},
    youtubeQuery: 'मराठी नाटक full',
    artwork: ARTWORK.cinema,
  },
  {
    id: 'family-entertainment',
    categoryId: 'entertainment',
    emoji: '🏡',
    title: {mr: 'कुटुंबासाठी मनोरंजन', hi: 'पारिवारिक मनोरंजन', en: 'Family Entertainment'},
    subtitle: {mr: 'सगळ्यांना आवडणारे कार्यक्रम', hi: 'परिवार के साथ देखने वाले कार्यक्रम', en: 'Family shows & stories'},
    youtubeQuery: 'मराठी कौटुंबिक कार्यक्रम मनोरंजन',
    artwork: ARTWORK.calm,
  },
];

export const VOICE_EXAMPLES: Record<Language, string[]> = {
  mr: [
    'विठ्ठलाची भजनं लाव.',
    'जुनी गाणी दाखव.',
    'मराठी बातम्या दाखव.',
    'साईबाबांची आरती लाव.',
    'मला चित्रपट पाहायचा आहे.',
    'कॉमेडी दाखव.',
  ],
  hi: [
    'विट्ठल भजन लगाओ।',
    'पुराने गाने दिखाओ।',
    'मराठी समाचार दिखाओ।',
    'साईं बाबा आरती लगाओ।',
    'मुझे फ़िल्म देखनी है।',
    'कॉमेडी दिखाओ।',
  ],
  en: [
    'Play Vitthal bhajan',
    'Show old songs',
    'Show Marathi news',
    'Play Saibaba aarti',
    'I want to watch a movie',
    'Show comedy',
  ],
};

export type VoiceMatch =
  | {type: 'troubleshoot'; problemId?: TroubleshootProblemId}
  | {type: 'channels'; query?: string}
  | {type: 'help'}
  | {type: 'favourites'}
  | {type: 'suboption'; categoryId: MainCategoryId; subOptionId: string}
  | {type: 'category'; categoryId: MainCategoryId}
  | {type: 'search'; query: string};

export function matchVoiceRequest(rawText: string): VoiceMatch {
  const text = rawText.toLowerCase().trim();

  // Troubleshooting voice commands
  if (text.includes('hdmi 2') || text.includes('hdmi2') || text.includes('एचडीएमआय')) {
    return {type: 'troubleshoot', problemId: 'select-hdmi-2'};
  }
  if (
    text.includes('चित्र दिसत नाही') ||
    text.includes('स्क्रीन दिसत नाही') ||
    text.includes('no signal') ||
    text.includes('सिग्नल')
  ) {
    return {type: 'troubleshoot', problemId: 'no-signal'};
  }
  if (
    text.includes('सुरू होत नाही') ||
    text.includes('चालू होत नाही') ||
    text.includes('बंद पडला') ||
    text.includes('tv not turning') ||
    text.includes('tv band')
  ) {
    if (text.includes('youtube') || text.includes('यूट्यूब')) {
      return {type: 'troubleshoot', problemId: 'youtube-not-opening'};
    }
    if (text.includes('jio') || text.includes('जिओ') || text.includes('बॉक्स')) {
      return {type: 'troubleshoot', problemId: 'jio-box-not-working'};
    }
    return {type: 'troubleshoot', problemId: 'tv-not-turning-on'};
  }
  if (text.includes('आवाज') || text.includes('sound') || text.includes('आवाज़') || text.includes('mute')) {
    return {type: 'troubleshoot', problemId: 'no-sound'};
  }
  if (text.includes('चॅनेल दिसत नाही') || text.includes('चैनल नहीं')) {
    return {type: 'troubleshoot', problemId: 'no-channels'};
  }
  if (text.includes('चॅनेल') || text.includes('चैनल') || text.includes('channel')) {
    return {type: 'channels'};
  }
  if (text.includes('इंटरनेट') || text.includes('वायफाय') || text.includes('wifi') || text.includes('internet')) {
    return {type: 'troubleshoot', problemId: 'no-internet'};
  }
  if (
    (text.includes('youtube') || text.includes('यूट्यूब')) &&
    (text.includes('चालत नाही') || text.includes('नाही') || text.includes('नहीं') || text.includes('not'))
  ) {
    return {type: 'troubleshoot', problemId: 'youtube-not-opening'};
  }
  if (text.includes('रिमोट') || text.includes('remote')) {
    return {type: 'troubleshoot', problemId: 'remote-not-working'};
  }
  if (text.includes('अडचण') || text.includes('मदत') || text.includes('परेशानी') || text.includes('help')) {
    return {type: 'troubleshoot'};
  }

  // Favourites
  if (text.includes('आवडते') || text.includes('पसंदीदा') || text.includes('favourite')) {
    return {type: 'favourites'};
  }

  // Specific entertainment sub-options
  if (text.includes('विठ्ठल') || text.includes('vitthal')) {
    return {type: 'suboption', categoryId: 'bhajan', subOptionId: 'vitthal-bhajan'};
  }
  if (text.includes('साई') || text.includes('साईबाबा') || text.includes('sai')) {
    return {type: 'suboption', categoryId: 'bhajan', subOptionId: 'saibaba'};
  }
  if (text.includes('गणपती') || text.includes('गणेश') || text.includes('ganpati')) {
    return {type: 'suboption', categoryId: 'bhajan', subOptionId: 'ganpati-aarti'};
  }
  if (text.includes('स्वामी') || text.includes('swami')) {
    return {type: 'suboption', categoryId: 'bhajan', subOptionId: 'swami-samarth'};
  }
  if (text.includes('कृष्ण') || text.includes('krishna')) {
    return {type: 'suboption', categoryId: 'bhajan', subOptionId: 'krishna-bhajan'};
  }
  if (text.includes('हनुमान') || text.includes('मारुती') || text.includes('hanuman')) {
    return {type: 'suboption', categoryId: 'bhajan', subOptionId: 'hanuman-bhajan'};
  }
  if (text.includes('लता') || text.includes('lata')) {
    return {type: 'suboption', categoryId: 'old-songs', subOptionId: 'lata-mangeshkar'};
  }
  if (text.includes('किशोर') || text.includes('kishore')) {
    return {type: 'suboption', categoryId: 'old-songs', subOptionId: 'kishore-kumar'};
  }
  if (text.includes('आशा') || text.includes('asha')) {
    return {type: 'suboption', categoryId: 'old-songs', subOptionId: 'asha-bhosle'};
  }
  if (text.includes('रफी') || text.includes('rafi')) {
    return {type: 'suboption', categoryId: 'old-songs', subOptionId: 'mohammed-rafi'};
  }
  if (text.includes('नाटक') || text.includes('natak')) {
    return {type: 'suboption', categoryId: 'entertainment', subOptionId: 'marathi-natak'};
  }

  // Broad 5 categories
  if (text.includes('भजन') || text.includes('आरती') || text.includes('भक्ती') || text.includes('bhajan') || text.includes('aarti')) {
    return {type: 'category', categoryId: 'bhajan'};
  }
  if (text.includes('गाणी') || text.includes('गाने') || text.includes('जुनी') || text.includes('song')) {
    return {type: 'category', categoryId: 'old-songs'};
  }
  if (text.includes('बातम्या') || text.includes('समाचार') || text.includes('खबर') || text.includes('news')) {
    return {type: 'category', categoryId: 'news'};
  }
  if (text.includes('चित्रपट') || text.includes('फ़िल्म') || text.includes('फिल्म') || text.includes('movie')) {
    return {type: 'category', categoryId: 'movies'};
  }
  if (text.includes('कॉमेडी') || text.includes('विनोदी') || text.includes('मनोरंजन') || text.includes('comedy')) {
    return {type: 'category', categoryId: 'entertainment'};
  }

  return {type: 'search', query: rawText.trim()};
}

export const SIMPLE_HELP_GUIDES: SimpleHelpGuide[] = [
  {
    id: 'youtube-how',
    emoji: '▶️',
    title: {
      mr: 'YouTube कसं पाहायचं?',
      hi: 'YouTube कैसे देखें?',
      en: 'How to watch YouTube?',
    },
    steps: {
      mr: [
        'टीव्ही चालू करा.',
        'रिमोटवरील Home (घर) बटण दाबा.',
        'YouTube निवडा.',
        'आता आवडता व्हिडिओ पाहा.',
      ],
      hi: [
        'टीवी चालू करें।',
        'रिमोट का Home बटन दबाएं।',
        'YouTube चुनें।',
        'अब पसंदीदा वीडियो देखें।',
      ],
      en: [
        'Turn on the TV.',
        'Press the Home button on the remote.',
        'Select YouTube.',
        'Now enjoy your favourite video.',
      ],
    },
  },
  {
    id: 'volume-how',
    emoji: '🔊',
    title: {
      mr: 'आवाज कसा वाढवायचा?',
      hi: 'आवाज़ कैसे बढ़ाएं?',
      en: 'How to increase volume?',
    },
    steps: {
      mr: [
        'रिमोटवरील आवाज वाढवण्याचं बटण (+) दाबा.',
        'जर आवाज बंद असेल, तर Mute (🔇) बटण एकदा दाबा.',
      ],
      hi: [
        'रिमोट पर आवाज़ बढ़ाने का बटन (+) दबाएं।',
        'अगर आवाज़ बंद है, तो Mute (🔇) बटन एक बार दबाएं।',
      ],
      en: [
        'Press the volume up (+) button on your remote.',
        'If muted, press the Mute (🔇) button once.',
      ],
    },
  },
  {
    id: 'remote-how',
    emoji: '🎮',
    title: {
      mr: 'रिमोट काम करत नसेल?',
      hi: 'रिमोट काम नहीं कर रहा है?',
      en: 'Remote not working?',
    },
    steps: {
      mr: [
        'बॅटरी तपासा.',
        'टीव्हीसमोर उभे राहून पुन्हा प्रयत्न करा.',
        'गरज असल्यास घरातील व्यक्तीला सांगा.',
      ],
      hi: [
        'बैटरी जांचें।',
        'टीवी के सामने खड़े होकर फिर से दबाएं।',
        'ज़रूरत होने पर घर के किसी सदस्य को बताएं।',
      ],
      en: [
        'Check the batteries.',
        'Stand in front of the TV and try again.',
        'Ask a family member if needed.',
      ],
    },
  },
];
