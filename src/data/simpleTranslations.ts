import type {Language} from '../types';

export interface SimpleTranslations {
  brandTitle: string;
  homeButton: string;
  backButton: string;
  favouritesButton: string;
  greetingTitle: string;
  greetingQuestion: string;
  happyWatching: string;
  readAloud: string;
  pauseSpeech: string;
  resumeSpeech: string;
  stopSpeech: string;
  fontDecrease: string;
  fontIncrease: string;
  themeLight: string;
  themeDark: string;
  voiceButtonHome: string;
  voicePromptHeading: string;
  voiceTapToSpeak: string;
  voiceListeningMessage: string;
  voiceTapToStop: string;
  voiceRecognizedPrefix: string;
  voiceFallbackMessage: string;
  voiceExamplesHeading: string;
  searchPlaceholder: string;
  searchButton: string;
  searchOnYoutubeButton: string;
  manualSearchHeading: string;
  chooseTopicHeading: string;
  watchHere: string;
  watchOnYoutube: string;
  saveFavourite: string;
  savedFavourite: string;
  saveCategoryFavourite: string;
  savedCategoryFavourite: string;
  removeFavourite: string;
  favouritesTitle: string;
  favouriteCategoriesTitle: string;
  favouritesEmpty: string;
  recentlyVisitedTitle: string;
  recentlyVisitedEmpty: string;
  clearHistory: string;
  openAgain: string;
  helpButtonHome: string;
  helpPageTitle: string;
  helpPageSubtitle: string;
  helpGoToTroubleshoot: string;
  troubleshootHomeButton: string;
  troubleshootHomeSubtitle: string;
  troubleshootTitle: string;
  troubleshootSelectPrompt: string;
  troubleshootVoiceButton: string;
  troubleshootStepIntro: string;
  stepIndicator: (current: number, total: number) => string;
  didNotUnderstand: string;
  simplerWayHeading: string;
  nextStepButton: string;
  prevStepButton: string;
  problemSolvedButton: string;
  stillProblemButton: string;
  goHomeButton: string;
  solvedTitle: string;
  solvedSubtitle: string;
  goBackToTvButton: string;
  unresolvedTitle: string;
  unresolvedMessage: string;
  safetyAlertHeading: string;
  tryAgainStepsButton: string;
  chooseOtherProblemButton: string;
  playerNote: string;
  companionNote: string;
  myChannelsButton: string;
  myChannelsQuestion: string;
  channelSearchPlaceholder: string;
  channelSearchExamples: string;
  channelNumberUnverified: string;
  channelLineupDisclaimer: string;
  channelSaveFavourite: string;
  channelSavedFavourite: string;
  myFavouriteChannelsTitle: string;
  myFavouriteChannelsEmpty: string;
  channelHowToFindButton: string;
  channelHelpTitle: string;
  channelHelpSubtitle: string;
  channelHelpSteps: string[];
  channelHelpCompanionNote: string;
  channelNoResults: string;
  channelClearSearch: string;
  hdmi2HomeNote: string;
}

export const SIMPLE_TRANSLATIONS: Record<Language, SimpleTranslations> = {
  mr: {
    brandTitle: 'Aai Baba TV ❤️',
    homeButton: '🏠 मुख्य पान',
    backButton: '⬅️ मागे जा',
    favouritesButton: '❤️ माझे आवडते',
    greetingTitle: 'नमस्कार आई-बाबा ❤️',
    greetingQuestion: 'आज काय पाहायचं आहे?',
    happyWatching: 'छान! आता आनंदाने पाहा ❤️',
    readAloud: '🔊 वाचून दाखवा',
    pauseSpeech: 'थांबा',
    resumeSpeech: 'पुढे ऐका',
    stopSpeech: 'बंद करा',
    fontDecrease: 'अक्षर लहान',
    fontIncrease: 'अक्षर मोठे',
    themeLight: 'उजेड',
    themeDark: 'गडद',
    voiceButtonHome: 'बोलून शोधा',
    voicePromptHeading: 'बोला, तुम्हाला काय पाहायचं आहे?',
    voiceTapToSpeak: 'इथे दाबा आणि बोला',
    voiceListeningMessage: 'मी ऐकत आहे... ❤️',
    voiceTapToStop: 'थांबण्यासाठी इथे दाबा',
    voiceRecognizedPrefix: 'तुम्ही म्हणालात:',
    voiceFallbackMessage: 'काही हरकत नाही! खालील बटण दाबून तुम्ही शोधू शकता.',
    voiceExamplesHeading: 'तुम्ही असे बोलू शकता किंवा दाबू शकता:',
    searchPlaceholder: 'इथे लिहा... उदा. विठ्ठल भजन, जुनी गाणी',
    searchButton: 'शोधा',
    searchOnYoutubeButton: 'YouTube वर पाहा',
    manualSearchHeading: 'तुम्हाला वेगळं काही शोधायचं असल्यास इथे लिहा:',
    chooseTopicHeading: 'खालीलपैकी एक निवडा — इथे दाबा',
    watchHere: 'इथे पाहा',
    watchOnYoutube: 'YouTube वर पाहा',
    saveFavourite: '⭐ आवडतं म्हणून ठेवा',
    savedFavourite: '⭐ आवडत्यामध्ये ठेवले आहे',
    saveCategoryFavourite: '⭐ आवडता विभाग म्हणून ठेवा',
    savedCategoryFavourite: '⭐ आवडता विभाग आहे',
    removeFavourite: 'काढून टाका',
    favouritesTitle: '❤️ माझे आवडते',
    favouriteCategoriesTitle: '⭐ माझे आवडते विभाग',
    favouritesEmpty: 'अजून काहीही ठेवलेले नाही. आवडत्या कार्यक्रमासमोर "⭐ आवडतं म्हणून ठेवा" दाबा.',
    recentlyVisitedTitle: '⏰ नुकतेच पाहिले',
    recentlyVisitedEmpty: 'तुम्ही अलीकडे पाहिलेले विषय येथे दिसतील.',
    clearHistory: 'सर्व पुसा',
    openAgain: 'पुन्हा उघडा',
    helpButtonHome: '❓ मदत हवी आहे?',
    helpPageTitle: '❓ सोपी मदत',
    helpPageSubtitle: 'टीव्ही आणि रिमोट कसे वापरायचे ते सोप्या शब्दांत पाहा.',
    helpGoToTroubleshoot: '🛠️ टीव्हीमध्ये काही अडचण आहे?',
    troubleshootHomeButton: '🛠️ टीव्हीमध्ये काही अडचण आहे?',
    troubleshootHomeSubtitle:
      'काळजी करू नका. तुमची अडचण निवडा. आम्ही तुम्हाला सोप्या पद्धतीने मार्गदर्शन करू.',
    troubleshootTitle: '🛠️ टीव्ही मदत केंद्र',
    troubleshootSelectPrompt: 'तुम्हाला कोणती अडचण येत आहे? खालीलपैकी एक निवडा.',
    troubleshootVoiceButton: '🎙️ तुमची अडचण बोलून सांगा',
    troubleshootStepIntro: 'काळजी करू नका. आपण एकेक पायरी तपासूया.',
    stepIndicator: (current, total) => `पायरी ${current} पैकी ${total}`,
    didNotUnderstand: 'मला समजले नाही',
    simplerWayHeading: 'सोप्या शब्दांत:',
    nextStepButton: 'पुढील पायरी',
    prevStepButton: 'मागील पायरी',
    problemSolvedButton: 'माझी समस्या सुटली',
    stillProblemButton: 'अजूनही समस्या आहे',
    goHomeButton: 'मुख्य पानावर जा',
    solvedTitle: '🎉 छान! तुमची समस्या सुटली.',
    solvedSubtitle: 'आता तुम्ही आनंदाने तुमचा आवडता कार्यक्रम पाहू शकता. ❤️',
    goBackToTvButton: '📺 पुन्हा टीव्ही पाहायला जा',
    unresolvedTitle: 'ही समस्या अजूनही कायम आहे.',
    unresolvedMessage:
      'ही समस्या अजूनही कायम आहे. कृपया घरातील व्यक्तीची किंवा अधिकृत सेवा केंद्राची मदत घ्या.',
    safetyAlertHeading: 'महत्त्वाची सुरक्षितता सूचना',
    tryAgainStepsButton: 'पायऱ्या पुन्हा तपासा',
    chooseOtherProblemButton: 'दुसरी अडचण निवडा',
    playerNote: 'जर व्हिडिओ इथे सुरू झाला नाही, तर खालील "YouTube वर पाहा" बटण दाबा.',
    companionNote:
      'ही वेबसाइट तुमच्या Samsung Smart TV आणि Jio Set-Top Box (HDMI 2) सोबत मदतीसाठी आहे.',
    myChannelsButton: '📺 माझे चॅनेल',
    myChannelsQuestion: 'तुम्हाला कोणता कार्यक्रम पाहायचा आहे?',
    channelSearchPlaceholder: 'चॅनेलचे नाव किंवा नंबर शोधा',
    channelSearchExamples: 'उदाहरण: झी मराठी, साम टीव्ही, 1203, भजन, बातम्या',
    channelNumberUnverified: 'चॅनेल नंबर तपासा',
    channelLineupDisclaimer:
      'चॅनेल नंबर Jio च्या यादीप्रमाणे बदलू शकतात. तुमच्या टीव्हीवरील चॅनेल गाईडमध्ये दिसणारा नंबर अंतिम समजावा.',
    channelSaveFavourite: '⭐ आवडते म्हणून ठेवा',
    channelSavedFavourite: '⭐ आवडते चॅनेल',
    myFavouriteChannelsTitle: '⭐ माझे आवडते चॅनेल',
    myFavouriteChannelsEmpty:
      'अजून कोणतेही आवडते चॅनेल ठेवलेले नाही. "📺 माझे चॅनेल" मधून तुमचे आवडते चॅनेल जोडा.',
    channelHowToFindButton: '❓ चॅनेल नंबर कसा शोधायचा?',
    channelHelpTitle: 'चॅनेल नंबर कसा शोधायचा?',
    channelHelpSubtitle: 'तुमच्या Jio Set-Top Box वर कोणताही चॅनेल नंबर पाहण्यासाठी या ५ सोप्या पायऱ्या करा.',
    channelHelpSteps: [
      'Jio Set-Top Box चा रिमोट हातात घ्या.',
      'टीव्हीवरील JioTV+ किंवा Digital TV पर्याय उघडा.',
      'चॅनेल गाईड उघडा.',
      'आवडत्या चॅनेलचे नाव शोधा.',
      'त्याच्या समोर दिसणारा नंबर वापरा.',
    ],
    channelHelpCompanionNote:
      'कृपया लक्षात ठेवा: ही वेबसाइट थेट टीव्हीवरील चॅनेल बदलत नाही. तुम्ही Jio रिमोटवर हा नंबर दाबून चॅनेल पाहू शकता.',
    channelNoResults: 'या नावाचे किंवा नंबरचे चॅनेल सापडले नाही. कृपया वेगळे नाव किंवा सर्व चॅनेल पहा.',
    channelClearSearch: 'सर्व चॅनेल पुन्हा दाखवा',
    hdmi2HomeNote: 'ℹ️ तुमच्या घरी Jio Set-Top Box HDMI 2 ला जोडलेला आहे.',
  },
  hi: {
    brandTitle: 'Aai Baba TV ❤️',
    homeButton: '🏠 मुख्य पान',
    backButton: '⬅️ पीछे जाएं',
    favouritesButton: '❤️ मेरे पसंदीदा',
    greetingTitle: 'नमस्कार आई-बाबा ❤️',
    greetingQuestion: 'आज क्या देखना है?',
    happyWatching: 'बहुत अच्छा! अब आनंद से देखें ❤️',
    readAloud: '🔊 पढ़कर सुनाएं',
    pauseSpeech: 'रुकें',
    resumeSpeech: 'आगे सुनें',
    stopSpeech: 'बंद करें',
    fontDecrease: 'अक्षर छोटे',
    fontIncrease: 'अक्षर बड़े',
    themeLight: 'उजाला',
    themeDark: 'गहरा',
    voiceButtonHome: 'बोलकर खोजें',
    voicePromptHeading: 'बोलिए, आपको क्या देखना है?',
    voiceTapToSpeak: 'यहाँ दबाएं और बोलें',
    voiceListeningMessage: 'मैं सुन रहा हूँ... ❤️',
    voiceTapToStop: 'रोकने के लिए दबाएं',
    voiceRecognizedPrefix: 'आपने कहा:',
    voiceFallbackMessage: 'कोई बात नहीं! नीचे का बटन दबाकर आप खोज सकते हैं।',
    voiceExamplesHeading: 'आप ऐसे बोल सकते हैं या दबा सकते हैं:',
    searchPlaceholder: 'यहाँ लिखें... जैसे विट्ठल भजन, पुराने गाने',
    searchButton: 'खोजें',
    searchOnYoutubeButton: 'YouTube पर देखें',
    manualSearchHeading: 'कुछ अलग खोजना हो तो यहाँ लिखें:',
    chooseTopicHeading: 'नीचे से एक चुनें — यहाँ दबाएं',
    watchHere: 'यहाँ देखें',
    watchOnYoutube: 'YouTube पर देखें',
    saveFavourite: '⭐ पसंदीदा में रखें',
    savedFavourite: '⭐ पसंदीदा में रखा है',
    saveCategoryFavourite: '⭐ पसंदीदा श्रेणी में रखें',
    savedCategoryFavourite: '⭐ पसंदीदा श्रेणी',
    removeFavourite: 'हटाएं',
    favouritesTitle: '❤️ मेरे पसंदीदा',
    favouriteCategoriesTitle: '⭐ मेरी पसंदीदा श्रेणियाँ',
    favouritesEmpty: 'अभी कुछ भी नहीं रखा है। किसी भी कार्यक्रम के पास "⭐ पसंदीदा में रखें" दबाएं।',
    recentlyVisitedTitle: '⏰ अभी देखा गया',
    recentlyVisitedEmpty: 'हाल ही में देखे गए विषय यहाँ दिखेंगे।',
    clearHistory: 'सब हटाएं',
    openAgain: 'फिर खोलें',
    helpButtonHome: '❓ मदद चाहिए?',
    helpPageTitle: '❓ आसान मदद',
    helpPageSubtitle: 'टीवी और रिमोट कैसे चलाएं, आसान भाषा में देखें।',
    helpGoToTroubleshoot: '🛠️ टीवी में कोई परेशानी है?',
    troubleshootHomeButton: '🛠️ टीवी में कोई परेशानी है?',
    troubleshootHomeSubtitle:
      'चिंता न करें। अपनी परेशानी चुनें। हम आपको आसान तरीके से मार्गदर्शन करेंगे।',
    troubleshootTitle: '🛠️ टीवी मदद केंद्र',
    troubleshootSelectPrompt: 'आपको क्या परेशानी हो रही है? नीचे से एक चुनें।',
    troubleshootVoiceButton: '🎙️ अपनी परेशानी बोलकर बताएं',
    troubleshootStepIntro: 'चिंता न करें। हम एक-एक कदम जांचेंगे।',
    stepIndicator: (current, total) => `कदम ${current} (कुल ${total})`,
    didNotUnderstand: 'मुझे समझ नहीं आया',
    simplerWayHeading: 'आसान शब्दों में:',
    nextStepButton: 'अगला कदम',
    prevStepButton: 'पिछला कदम',
    problemSolvedButton: 'मेरी समस्या हल हो गई',
    stillProblemButton: 'अभी भी समस्या है',
    goHomeButton: 'मुख्य पन्ने पर जाएं',
    solvedTitle: '🎉 बहुत बढ़िया! आपकी समस्या हल हो गई।',
    solvedSubtitle: 'अब आप आनंद से अपना पसंदीदा कार्यक्रम देख सकते हैं। ❤️',
    goBackToTvButton: '📺 फिर से टीवी देखने जाएं',
    unresolvedTitle: 'यह समस्या अभी भी बनी हुई है।',
    unresolvedMessage:
      'यह समस्या अभी भी बनी हुई है। कृपया परिवार के किसी सदस्य या अधिकृत सेवा केंद्र की मदद लें।',
    safetyAlertHeading: 'ज़रूरी सुरक्षा सूचना',
    tryAgainStepsButton: 'कदम फिर से जांचें',
    chooseOtherProblemButton: 'दूसरी परेशानी चुनें',
    playerNote: 'अगर वीडियो यहाँ नहीं चलता है, तो नीचे "YouTube पर देखें" बटन दबाएं।',
    companionNote: 'यह वेबसाइट आपके Samsung Smart TV और Jio Set-Top Box (HDMI 2) के साथ मदद के लिए है।',
    myChannelsButton: '📺 मेरे चैनल',
    myChannelsQuestion: 'आपको कौन-सा कार्यक्रम देखना है?',
    channelSearchPlaceholder: 'चैनल का नाम या नंबर खोजें',
    channelSearchExamples: 'उदाहरण: ज़ी मराठी, साम टीवी, 1203, भजन, समाचार',
    channelNumberUnverified: 'चैनल नंबर जाँचें',
    channelLineupDisclaimer:
      'चैनल नंबर Jio की सूची के अनुसार बदल सकते हैं। आपके टीवी के चैनल गाइड में दिखने वाला नंबर अंतिम मानें।',
    channelSaveFavourite: '⭐ पसंदीदा में रखें',
    channelSavedFavourite: '⭐ पसंदीदा चैनल',
    myFavouriteChannelsTitle: '⭐ मेरे पसंदीदा चैनल',
    myFavouriteChannelsEmpty: 'अभी कोई पसंदीदा चैनल नहीं जुड़ा है।',
    channelHowToFindButton: '❓ चैनल नंबर कैसे खोजें?',
    channelHelpTitle: 'चैनल नंबर कैसे खोजें?',
    channelHelpSubtitle: 'Jio Set-Top Box पर किसी भी चैनल का नंबर देखने के 5 आसान कदम।',
    channelHelpSteps: [
      'Jio Set-Top Box का रिमोट हाथ में लें।',
      'टीवी पर JioTV+ या Digital TV विकल्प खोलें।',
      'चैनल गाइड खोलें।',
      'पसंदीदा चैनल का नाम खोजें।',
      'उसके सामने दिखने वाला नंबर दबाएं।',
    ],
    channelHelpCompanionNote:
      'नोट: यह वेबसाइट सीधे टीवी का चैनल नहीं बदलती। कृपया Jio रिमोट से नंबर दबाएं।',
    channelNoResults: 'इस नाम या नंबर का चैनल नहीं मिला। कृपया सभी चैनल देखें।',
    channelClearSearch: 'सभी चैनल फिर से दिखाएं',
    hdmi2HomeNote: 'ℹ️ आपके घर में Jio Set-Top Box HDMI 2 से जुड़ा है।',
  },
  en: {
    brandTitle: 'Aai Baba TV ❤️',
    homeButton: '🏠 Home',
    backButton: '⬅️ Go Back',
    favouritesButton: '❤️ My Favourites',
    greetingTitle: 'Namaskar Aai-Baba ❤️',
    greetingQuestion: 'What would you like to watch today?',
    happyWatching: 'Wonderful! Enjoy watching ❤️',
    readAloud: '🔊 Read Aloud',
    pauseSpeech: 'Pause',
    resumeSpeech: 'Resume',
    stopSpeech: 'Stop',
    fontDecrease: 'Smaller Text',
    fontIncrease: 'Larger Text',
    themeLight: 'Light',
    themeDark: 'Dark',
    voiceButtonHome: 'Speak & Search',
    voicePromptHeading: 'Speak, what would you like to watch?',
    voiceTapToSpeak: 'Tap here and speak',
    voiceListeningMessage: 'I am listening... ❤️',
    voiceTapToStop: 'Tap here to stop',
    voiceRecognizedPrefix: 'You said:',
    voiceFallbackMessage: 'No problem at all! You can tap the button below to search.',
    voiceExamplesHeading: 'You can say or tap:',
    searchPlaceholder: 'Type here... e.g. Vitthal bhajan, old songs',
    searchButton: 'Search',
    searchOnYoutubeButton: 'Watch on YouTube',
    manualSearchHeading: 'Type anything else to search on YouTube:',
    chooseTopicHeading: 'Choose one below — Tap here',
    watchHere: 'Watch Here',
    watchOnYoutube: 'Watch on YouTube',
    saveFavourite: '⭐ Save to Favourites',
    savedFavourite: '⭐ Saved in Favourites',
    saveCategoryFavourite: '⭐ Save Category',
    savedCategoryFavourite: '⭐ Favourite Category',
    removeFavourite: 'Remove',
    favouritesTitle: '❤️ My Favourites',
    favouriteCategoriesTitle: '⭐ My Favourite Categories',
    favouritesEmpty: 'Nothing saved yet. Tap "⭐ Save to Favourites" on anything you like.',
    recentlyVisitedTitle: '⏰ Recently Visited',
    recentlyVisitedEmpty: 'Programs you recently opened will appear here.',
    clearHistory: 'Clear All',
    openAgain: 'Open Again',
    helpButtonHome: '❓ Need Help?',
    helpPageTitle: '❓ Easy Help',
    helpPageSubtitle: 'Simple guides for using your TV and remote.',
    helpGoToTroubleshoot: '🛠️ Having a TV problem?',
    troubleshootHomeButton: '🛠️ Having a problem with the TV?',
    troubleshootHomeSubtitle:
      'Do not worry. Select your problem below and we will guide you step by step.',
    troubleshootTitle: '🛠️ TV Help Center',
    troubleshootSelectPrompt: 'What problem are you facing? Tap one option below.',
    troubleshootVoiceButton: '🎙️ Speak your TV problem',
    troubleshootStepIntro: 'Do not worry. Let us check one step at a time.',
    stepIndicator: (current, total) => `Step ${current} of ${total}`,
    didNotUnderstand: 'I did not understand',
    simplerWayHeading: 'In simpler words:',
    nextStepButton: 'Next Step',
    prevStepButton: 'Previous Step',
    problemSolvedButton: 'My Problem is Solved',
    stillProblemButton: 'Still Having Problem',
    goHomeButton: 'Go to Home',
    solvedTitle: '🎉 Great! Your problem is solved.',
    solvedSubtitle: 'Now you can happily enjoy watching your favourite program. ❤️',
    goBackToTvButton: '📺 Go Back to Watch TV',
    unresolvedTitle: 'This issue is still continuing.',
    unresolvedMessage:
      'This problem is still continuing. Please ask a family member or an authorized service technician for help.',
    safetyAlertHeading: 'Important Safety Note',
    tryAgainStepsButton: 'Check Steps Again',
    chooseOtherProblemButton: 'Choose Another Problem',
    playerNote: 'If the video does not play inside this box, tap "Watch on YouTube" below.',
    companionNote:
      'This website is a simple companion for your Samsung Smart TV and Jio Set-Top Box (HDMI 2).',
    myChannelsButton: '📺 My Channels',
    myChannelsQuestion: 'Which channel or program would you like to watch?',
    channelSearchPlaceholder: 'Search channel name or number',
    channelSearchExamples: 'Examples: Zee Marathi, Saam TV, 1203, Bhajan, News',
    channelNumberUnverified: 'Check channel number',
    channelLineupDisclaimer:
      'Channel numbers may change as per Jio lineup updates. Treat the number shown in your TV Channel Guide as final.',
    channelSaveFavourite: '⭐ Save Channel',
    channelSavedFavourite: '⭐ Favourite Channel',
    myFavouriteChannelsTitle: '⭐ My Favourite Channels',
    myFavouriteChannelsEmpty: 'No favourite channels saved yet. Open "📺 My Channels" to add your favourites.',
    channelHowToFindButton: '❓ How to find channel number?',
    channelHelpTitle: 'How to find a channel number?',
    channelHelpSubtitle: '5 easy steps to check any channel number on your Jio Set-Top Box.',
    channelHelpSteps: [
      'Hold your Jio Set-Top Box remote.',
      'Open JioTV+ or Digital TV on your television.',
      'Open the Channel Guide.',
      'Look up the name of your favourite channel.',
      'Use the number shown next to it.',
    ],
    channelHelpCompanionNote:
      'Note: This website does not directly change TV channels. Simply type the number on your Jio remote.',
    channelNoResults: 'No matching channel found. Try another name or clear your search.',
    channelClearSearch: 'Show All Channels',
    hdmi2HomeNote: 'ℹ️ At your home, the Jio Set-Top Box is connected to HDMI 2.',
  },
};
