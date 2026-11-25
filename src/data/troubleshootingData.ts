import type {TroubleshootProblem} from '../types';

export const TROUBLESHOOT_PROBLEMS: TroubleshootProblem[] = [
  {
    id: 'no-signal',
    emoji: '🖥️',
    title: {
      mr: 'स्क्रीनवर चित्र दिसत नाही / "No Signal" दिसत आहे.',
      hi: 'टीवी पर चित्र नहीं दिख रहा / "No Signal" दिख रहा है।',
      en: 'No picture on screen / TV shows "No Signal".',
    },
    headingOverride: {
      mr: '📺 टीव्हीवर Jio चा कार्यक्रम दिसत नाही?',
      hi: '📺 टीवी पर Jio का कार्यक्रम नहीं दिख रहा है?',
      en: '📺 Cannot see Jio TV on the screen?',
    },
    introNote: {
      mr: 'कृपया खालील सूचना करा. काळजी करू नका.',
      hi: 'कृपया नीचे दिए गए निर्देश करें। चिंता न करें।',
      en: 'Please follow these steps calmly. Do not worry.',
    },
    homeConnectionNote: {
      mr: 'ℹ️ तुमच्या घरी Jio Set-Top Box HDMI 2 ला जोडलेला आहे.',
      hi: 'ℹ️ आपके घर में Jio Set-Top Box HDMI 2 से जुड़ा है।',
      en: 'ℹ️ At your home, the Jio Set-Top Box is connected to HDMI 2.',
    },
    steps: [
      {
        id: 'hdmi2-step-1',
        diagram: 'hdmi-2-source',
        instruction: {
          mr: 'Samsung टीव्हीच्या रिमोटवरील Source बटण दाबा.',
          hi: 'Samsung टीवी रिमोट का Source बटन दबाएं।',
          en: 'Press the Source button on your Samsung TV remote.',
        },
        simplerExplanation: {
          mr: 'Samsung रिमोटवर 🏠 (Home) बटण दाबून डावीकडे "Source" निवडा, किंवा रिमोटवर वरच्या बाजूला Source असे लिहिलेले बटण दाबा.',
          hi: 'Samsung रिमोट पर 🏠 (Home) दबाकर बाईं ओर "Source" चुनें, या Source बटन दबाएं।',
          en: 'Press the Home (🏠) or Source button on the Samsung remote and open Source.',
        },
        nextButtonLabel: {
          mr: 'पुढील पायरी',
          hi: 'अगला कदम',
          en: 'Next Step',
        },
      },
      {
        id: 'hdmi2-step-2',
        diagram: 'hdmi-2-source',
        instruction: {
          mr: 'स्क्रीनवर HDMI 1, HDMI 2 किंवा इतर पर्याय दिसतील.',
          hi: 'स्क्रीन पर HDMI 1, HDMI 2 या अन्य विकल्प दिखेंगे।',
          en: 'You will see HDMI 1, HDMI 2, or other options on the TV screen.',
        },
        simplerExplanation: {
          mr: 'टीव्हीच्या स्क्रीनवर खालच्या रांगेत HDMI 1 आणि HDMI 2 असे पर्याय दिसतील. रिमोटवरील उजव्या बाणाने पुढे जा.',
          hi: 'स्क्रीन पर नीचे HDMI 1 और HDMI 2 दिखेंगे। रिमोट के तीर बटन से आगे बढ़ें।',
          en: 'Look at the options on screen showing HDMI 1 and HDMI 2.',
        },
        nextButtonLabel: {
          mr: 'पुढील पायरी',
          hi: 'अगला कदम',
          en: 'Next Step',
        },
      },
      {
        id: 'hdmi2-step-3',
        diagram: 'hdmi-2-source',
        instruction: {
          mr: 'कृपया HDMI 2 निवडा.',
          hi: 'कृपया HDMI 2 चुनें।',
          en: 'Please select HDMI 2.',
        },
        simplerExplanation: {
          mr: 'तुमच्या घरी Jio Set-Top Box नेहमी HDMI 2 ला जोडलेला असतो. म्हणून HDMI 2 वर जाऊन रिमोटचे मधले OK बटण दाबा.',
          hi: 'आपके घर में Jio Set-Top Box हमेशा HDMI 2 से जुड़ा होता है। HDMI 2 पर जाकर OK दबाएं।',
          en: 'Your Jio Set-Top Box is plugged into HDMI 2. Highlight HDMI 2 and press OK.',
        },
        solvedButtonLabel: {
          mr: 'हो, टीव्ही सुरू झाला',
          hi: 'हाँ, टीवी चालू हो गया',
          en: 'Yes, TV started',
        },
        nextButtonLabel: {
          mr: 'पुढील पायरी',
          hi: 'अगला कदम',
          en: 'Next Step',
        },
      },
      {
        id: 'hdmi2-step-4',
        diagram: 'jio-light',
        instruction: {
          mr: 'काही सेकंद थांबा. Jio Set-Top Box ची स्क्रीन दिसायला हवी.',
          hi: 'कुछ सेकंड रुकें। Jio Set-Top Box की स्क्रीन दिखनी चाहिए।',
          en: 'Wait a few seconds. The Jio Set-Top Box screen should now appear.',
        },
        simplerExplanation: {
          mr: 'जर अजूनही चित्र आले नसेल, तर Jio बॉक्स समोरील दिवा चालू आहे का पहा आणि Jio रिमोटवरचे लाल पॉवर बटण एकदा दाबा.',
          hi: 'अगर स्क्रीन अभी भी नहीं दिखे, तो देखें कि Jio बॉक्स की लाइट जल रही है या नहीं।',
          en: 'Check that the Jio box indicator light is on; press Power on the Jio remote if needed.',
        },
        solvedButtonLabel: {
          mr: 'हो, टीव्ही सुरू झाला',
          hi: 'हाँ, टीवी चालू हो गया',
          en: 'Yes, TV started',
        },
        nextButtonLabel: {
          mr: 'अजूनही स्क्रीन दिसत नाही',
          hi: 'अभी भी स्क्रीन नहीं दिख रही है',
          en: 'Screen still not visible',
        },
      },
      {
        id: 'hdmi2-step-5',
        diagram: 'safe-restart',
        instruction: {
          mr: 'सहज शक्य असल्यास, टीव्ही आणि Jio Set-Top Box बंद करा, ३० सेकंद शांत थांबा आणि पुन्हा सुरू करा. त्यानंतर पुन्हा HDMI 2 निवडा.',
          hi: 'अगर आसानी से संभव हो, तो टीवी और Jio बॉक्स को बंद करें, 30 सेकंड रुकें और फिर चालू करके HDMI 2 चुनें।',
          en: 'If safely accessible, turn off both the TV and Jio box, wait 30 seconds, turn them back on, and select HDMI 2.',
        },
        simplerExplanation: {
          mr: 'दोन्ही रिमोटने बंद करून ३० सेकंदांनी पुन्हा सुरू केल्यावर स्क्रीन पुन्हा जोडली जाते.',
          hi: 'दोनों को बंद करके 30 सेकंड बाद फिर से चालू करें।',
          en: 'Powering both off for 30 seconds and turning back on refreshes the HDMI 2 connection.',
        },
        safetyNote: {
          mr: 'कृपया टीव्ही किंवा Jio बॉक्स उघडू नका आणि कोणतीही वायर स्वतः ओढू नका.',
          hi: 'कृपया टीवी या Jio बॉक्स न खोलें और कोई तार खुद न खींचें।',
          en: 'Never open the TV or Jio box or pull wires.',
        },
        solvedButtonLabel: {
          mr: 'हो, टीव्ही सुरू झाला',
          hi: 'हाँ, टीवी चालू हो गया',
          en: 'Yes, TV started',
        },
        nextButtonLabel: {
          mr: 'अजूनही स्क्रीन दिसत नाही',
          hi: 'अभी भी स्क्रीन नहीं दिख रही है',
          en: 'Screen still not visible',
        },
      },
    ],
  },
  {
    id: 'select-hdmi-2',
    emoji: '🔌',
    title: {
      mr: 'HDMI 2 निवडायचा आहे.',
      hi: 'HDMI 2 चुनना है।',
      en: 'Need to select HDMI 2.',
    },
    headingOverride: {
      mr: '📺 टीव्हीवर Jio चा कार्यक्रम दिसत नाही?',
      hi: '📺 टीवी पर Jio का कार्यक्रम नहीं दिख रहा है?',
      en: '📺 Selecting HDMI 2 for your Jio Set-Top Box',
    },
    introNote: {
      mr: 'कृपया खालील सूचना करा. तुमच्या घरी Jio Set-Top Box HDMI 2 ला जोडलेला आहे.',
      hi: 'कृपया नीचे दिए निर्देश करें। आपके घर में Jio Set-Top Box HDMI 2 से जुड़ा है।',
      en: 'Please follow these steps. Your Jio Set-Top Box is connected to HDMI 2.',
    },
    homeConnectionNote: {
      mr: 'ℹ️ तुमच्या घरी Jio Set-Top Box HDMI 2 ला जोडलेला आहे.',
      hi: 'ℹ️ आपके घर में Jio Set-Top Box HDMI 2 से जुड़ा है।',
      en: 'ℹ️ At your home, the Jio Set-Top Box is connected to HDMI 2.',
    },
    steps: [
      {
        id: 's-hdmi2-1',
        diagram: 'hdmi-2-source',
        instruction: {
          mr: 'Samsung टीव्हीच्या रिमोटवरील Source बटण दाबा.',
          hi: 'Samsung टीवी रिमोट का Source बटन दबाएं।',
          en: 'Press the Source button on the Samsung TV remote.',
        },
        simplerExplanation: {
          mr: 'रिमोटवरील 🏠 (Home) बटण दाबून डावीकडील "Source" पर्याय उघडा.',
          hi: 'रिमोट पर Home (🏠) दबाकर बाईं ओर "Source" खोलें।',
          en: 'Press Home (🏠) and move left to Source.',
        },
        nextButtonLabel: {mr: 'पुढील पायरी', hi: 'अगला कदम', en: 'Next Step'},
      },
      {
        id: 's-hdmi2-2',
        diagram: 'hdmi-2-source',
        instruction: {
          mr: 'स्क्रीनवर HDMI 1, HDMI 2 किंवा इतर पर्याय दिसतील.',
          hi: 'स्क्रीन पर HDMI 1, HDMI 2 या अन्य विकल्प दिखेंगे।',
          en: 'You will see HDMI 1, HDMI 2, or other inputs on the screen.',
        },
        simplerExplanation: {
          mr: 'बाणांच्या बटणाने HDMI पर्यायांकडे जा.',
          hi: 'तीर के बटन से HDMI विकल्पों पर जाएं।',
          en: 'Use the arrow buttons to move along the HDMI choices.',
        },
        nextButtonLabel: {mr: 'पुढील पायरी', hi: 'अगला कदम', en: 'Next Step'},
      },
      {
        id: 's-hdmi2-3',
        diagram: 'hdmi-2-source',
        instruction: {
          mr: 'कृपया HDMI 2 निवडा.',
          hi: 'कृपया HDMI 2 चुनें।',
          en: 'Please select HDMI 2.',
        },
        simplerExplanation: {
          mr: 'HDMI 2 वर जाऊन रिमोटचे मधले OK बटण दाबा.',
          hi: 'HDMI 2 पर जाकर OK बटन दबाएं।',
          en: 'Highlight HDMI 2 and press the centre OK button.',
        },
        solvedButtonLabel: {mr: 'हो, टीव्ही सुरू झाला', hi: 'हाँ, टीवी चालू हो गया', en: 'Yes, TV started'},
        nextButtonLabel: {mr: 'पुढील पायरी', hi: 'अगला कदम', en: 'Next Step'},
      },
      {
        id: 's-hdmi2-4',
        diagram: 'jio-light',
        instruction: {
          mr: 'काही सेकंद थांबा. Jio Set-Top Box ची स्क्रीन दिसायला हवी.',
          hi: 'कुछ सेकंड रुकें। Jio Set-Top Box की स्क्रीन दिखनी चाहिए।',
          en: 'Wait a few seconds. The Jio Set-Top Box screen should now appear.',
        },
        simplerExplanation: {
          mr: 'Jio बॉक्स चालू असल्याची खात्री करा आणि Jio रिमोटवर 🏠 Home दाबा.',
          hi: 'Jio बॉक्स चालू है या नहीं जांचें और Jio रिमोट पर Home दबाएं।',
          en: 'Make sure the Jio box is powered on and press Home on the Jio remote.',
        },
        solvedButtonLabel: {mr: 'हो, टीव्ही सुरू झाला', hi: 'हाँ, टीवी चालू हो गया', en: 'Yes, TV started'},
        nextButtonLabel: {mr: 'अजूनही स्क्रीन दिसत नाही', hi: 'अभी भी स्क्रीन नहीं दिख रही है', en: 'Screen still not visible'},
      },
    ],
  },
  {
    id: 'tv-not-turning-on',
    emoji: '📺',
    title: {
      mr: 'टीव्ही सुरू होत नाही.',
      hi: 'टीवी चालू नहीं हो रहा है।',
      en: 'TV is not turning on.',
    },
    introNote: {
      mr: 'काळजी करू नका. आपण एकेक पायरी तपासूया. कृपया टीव्ही किंवा कोणतीही वायर स्वतः उघडू नका.',
      hi: 'चिंता न करें। हम एक-एक कदम जांचेंगे। कृपया टीवी या कोई तार खुद न खोलें।',
      en: 'Do not worry. Let us check one step at a time. Never open the TV or touch loose wires.',
    },
    steps: [
      {
        id: 'tv-on-1',
        diagram: 'safety-stop',
        isEmergencySafetyStep: true,
        instruction: {
          mr: 'प्रथम सुरक्षितता तपासा: टीव्हीजवळ जळण्याचा वास, धूर, ठिणग्या किंवा जास्त गरमपणा जाणवत आहे का?',
          hi: 'सबसे पहले सुरक्षा जांचें: क्या टीवी के पास जलने की गंध, धुआं, चिंगारी या ज़्यादा गर्मी लग रही है?',
          en: 'First check safety: Do you notice any burning smell, smoke, sparks, or unusual heat near the TV?',
        },
        simplerExplanation: {
          mr: 'जर वास, धूर किंवा गरम वाटत असेल, तर टीव्हीला अजिबात हात लावू नका आणि लगेच घरातील व्यक्तीला बोलवा.',
          hi: 'अगर जलने की गंध या धुआं दिखे, तो टीवी को न छुएं और तुरंत घर के किसी सदस्य को बुलाएं।',
          en: 'If there is any smoke or burning smell, do not touch the TV and call a family member right away.',
        },
        safetyNote: {
          mr: 'धूर, जळण्याचा वास किंवा उघडी वायर दिसल्यास उपकरण लगेच वापरणे थांबवा आणि घरातील व्यक्तीची मदत घ्या.',
          hi: 'धुआं, जलने की गंध या खुला तार दिखने पर उपकरण को न छुएं और परिवार की मदद लें।',
          en: 'If you notice smoke, burning smell, sparks, or exposed wires, stop immediately and call family or a technician.',
        },
        nextButtonLabel: {
          mr: 'सर्व ठीक आहे — पुढील पायरी',
          hi: 'सब ठीक है — अगला कदम',
          en: 'Everything looks safe — Next Step',
        },
      },
      {
        id: 'tv-on-2',
        diagram: 'power-plug',
        instruction: {
          mr: 'भिंतीवरील टीव्हीचे स्विच बटण चालू आहे का आणि प्लग नीट बसला आहे का, ते दुरून सुरक्षितपणे पहा.',
          hi: 'दीवार पर टीवी का स्विच चालू है या नहीं और प्लग ठीक से लगा है या नहीं, सुरक्षित रूप से देखें।',
          en: 'Check safely whether the wall power switch for the TV is turned ON and the plug is properly seated.',
        },
        simplerExplanation: {
          mr: 'भिंतीवरील ज्या बटनाला टीव्हीची पिन जोडली आहे, ते बटण चालू केलेले आहे का ते पहा. टीव्हीच्या खालील बाजूस छोटा लाल दिवा लागतो का पहा.',
          hi: 'दीवार का वह स्विच देखें जिससे टीवी जुड़ा है। क्या वह चालू है और टीवी के नीचे छोटी लाल लाइट दिख रही है?',
          en: 'Look at the wall switch connected to the TV. Make sure it is switched ON.',
        },
        safetyNote: {
          mr: 'कृपया कोणतीही वायर स्वतः ओढू किंवा उघडू नका.',
          hi: 'कृपया कोई भी तार खुद न खींचें या न खोलें।',
          en: 'Please do not pull or open any wires yourself.',
        },
        nextButtonLabel: {mr: 'पुढील पायरी', hi: 'अगला कदम', en: 'Next Step'},
      },
      {
        id: 'tv-on-3',
        diagram: 'remote-battery',
        instruction: {
          mr: 'Samsung रिमोटवरील वरचे लाल पॉवर (⏻) बटण टीव्हीकडे धरून एकदा दाबा आणि ३ सेकंद थांबा.',
          hi: 'Samsung रिमोट का ऊपर वाला लाल पावर (⏻) बटन टीवी की तरफ़ रखकर एक बार दबाएं और 3 सेकंड रुकें।',
          en: 'Point the Samsung remote at the TV, press the red Power (⏻) button once, and wait 3 seconds.',
        },
        simplerExplanation: {
          mr: 'रिमोट टीव्हीच्या दिशेने धरून वरचे गोल पॉवर बटण एकदा दाबा. टीव्ही सुरू व्हायला २-३ सेकंद लागतात.',
          hi: 'रिमोट को टीवी की ओर करके ऊपर वाला पावर बटन एक बार दबाएं।',
          en: 'Hold the remote facing the TV, press Power once, and wait 2–3 seconds.',
        },
        solvedButtonLabel: {mr: 'माझी समस्या सुटली', hi: 'मेरी समस्या हल हुई', en: 'TV turned on!'},
        nextButtonLabel: {mr: 'पुढील पायरी', hi: 'अगला कदम', en: 'Next Step'},
      },
      {
        id: 'tv-on-4',
        diagram: 'power-plug',
        instruction: {
          mr: 'सहज हात पोहोचत असल्यास, Samsung टीव्हीच्या अगदी मधोमध खालच्या कडेला असलेले छोटे बटण हलकेच एकदा दाबून पहा.',
          hi: 'आसानी से पहुँचने पर Samsung टीवी के ठीक नीचे बीच में स्थित छोटा बटन एक बार दबाकर देखें।',
          en: 'If safely reachable, gently press the small physical power button tucked underneath the centre bottom edge of the Samsung TV.',
        },
        simplerExplanation: {
          mr: 'टीव्हीच्या स्क्रीनच्या अगदी खाली मधोमध एक छोटे बटण असते. ते एकदा दाबल्याने रिमोटशिवायही टीव्ही सुरू होतो.',
          hi: 'टीवी स्क्रीन के ठीक नीचे बीच में एक छोटा सा बटन होता है। उसे एक बार दबाएं।',
          en: 'Feel gently right under the centre bottom edge of the TV for a tiny button and press it once.',
        },
        solvedButtonLabel: {mr: 'माझी समस्या सुटली', hi: 'मेरी समस्या हल हुई', en: 'TV turned on!'},
        nextButtonLabel: {mr: 'अजून समस्या आहे', hi: 'अभी भी समस्या है', en: 'Still having problem'},
      },
    ],
  },
  {
    id: 'no-sound',
    emoji: '🔇',
    title: {
      mr: 'आवाज येत नाही.',
      hi: 'टीवी में आवाज़ नहीं आ रही है।',
      en: 'No sound on TV.',
    },
    introNote: {
      mr: 'काळजी करू नका. आपण एकेक पायरी तपासूया.',
      hi: 'चिंता न करें। हम एक-एक कदम जांचेंगे।',
      en: 'Do not worry. Let us check one step at a time.',
    },
    steps: [
      {
        id: 'sound-1',
        diagram: 'remote-mute',
        instruction: {
          mr: 'रिमोटवरील Mute (🔇) बटण दाबून आवाज बंद केला आहे का, ते तपासा. असल्यास ते बटण एकदा दाबा.',
          hi: 'जांचें कि कहीं रिमोट का Mute (🔇) बटन दबाकर आवाज़ बंद तो नहीं है। हो तो उसे एक बार दबाएं।',
          en: 'Check whether the Mute (🔇) button on the remote was pressed accidentally. Press it once if needed.',
        },
        simplerExplanation: {
          mr: 'रिमोटवर ज्या बटनावर स्पीकरवर रेष (🔇) मारलेली असते, ते एकदा दाबा.',
          hi: 'रिमोट पर स्पीकर कटे निशान (🔇) वाला बटन एक बार दबाएं।',
          en: 'Look for the speaker-with-a-line icon (🔇) on your remote and tap it once.',
        },
        solvedButtonLabel: {mr: 'माझी समस्या सुटली', hi: 'आवाज़ आ गई', en: 'Sound is back!'},
        nextButtonLabel: {mr: 'पुढील पायरी', hi: 'अगला कदम', en: 'Next Step'},
      },
      {
        id: 'sound-2',
        diagram: 'remote-volume',
        instruction: {
          mr: 'आता Samsung रिमोटवरील आवाज वाढवण्याचे (+) बटण ३ वेळा दाबा.',
          hi: 'अब Samsung रिमोट पर आवाज़ बढ़ाने का (+) बटन 3 बार दबाएं।',
          en: 'Now press the Volume Up (+) button on your Samsung remote 3 times.',
        },
        simplerExplanation: {
          mr: 'रिमोटवर VOL किंवा (+) असे लिहिलेले बटण ३-४ वेळा वर दाबा.',
          hi: 'रिमोट पर VOL या (+) लिखा बटन 3-4 बार दबाएं।',
          en: 'Press the VOL (+) button upward 3–4 times.',
        },
        solvedButtonLabel: {mr: 'माझी समस्या सुटली', hi: 'आवाज़ आ गई', en: 'Sound is back!'},
        nextButtonLabel: {mr: 'पुढील पायरी', hi: 'अगला कदम', en: 'Next Step'},
      },
      {
        id: 'sound-3',
        diagram: 'jio-light',
        instruction: {
          mr: 'Jio Set-Top Box चालू आहे का ते तपासा आणि Jio रिमोटवरील (+) बटण दाबून आवाज वाढवा.',
          hi: 'जांचें कि Jio Set-Top Box चालू है या नहीं और Jio रिमोट से भी (+) आवाज़ बढ़ाएं।',
          en: 'Check that your Jio Set-Top Box is on, and also press Volume (+) on the Jio remote.',
        },
        simplerExplanation: {
          mr: 'काळ्या Jio रिमोटवरचे (+) बटण ५-६ वेळा दाबून पहा.',
          hi: 'Jio रिमोट पर भी (+) बटन 5-6 बार दबाएं।',
          en: 'Press (+) a few times on the Jio remote as well.',
        },
        solvedButtonLabel: {mr: 'माझी समस्या सुटली', hi: 'आवाज़ आ गई', en: 'Sound is back!'},
        nextButtonLabel: {mr: 'पुढील पायरी', hi: 'अगला कदम', en: 'Next Step'},
      },
      {
        id: 'sound-4',
        diagram: 'hdmi-2-source',
        instruction: {
          mr: 'Samsung रिमोटवरील Source बटण दाबून HDMI 2 निवडलेले आहे का ते तपासा.',
          hi: 'Samsung रिमोट पर Source दबाकर देखें कि HDMI 2 चुना हुआ है या नहीं।',
          en: 'Press Source on the Samsung remote and confirm HDMI 2 is selected.',
        },
        simplerExplanation: {
          mr: 'तुमच्या घरी Jio बॉक्स HDMI 2 ला जोडलेला आहे. Source मध्ये HDMI 2 निवडा.',
          hi: 'आपके घर में Jio बॉक्स HDMI 2 से जुड़ा है। Source में HDMI 2 चुनें।',
          en: 'Your Jio box is on HDMI 2. Select HDMI 2 in Source.',
        },
        solvedButtonLabel: {mr: 'माझी समस्या सुटली', hi: 'आवाज़ आ गई', en: 'Sound is back!'},
        nextButtonLabel: {mr: 'पुढील पायरी', hi: 'अगला कदम', en: 'Next Step'},
      },
      {
        id: 'sound-5',
        diagram: 'safe-restart',
        instruction: {
          mr: 'सहज हात पोहोचत असल्यास, टीव्ही आणि Jio बॉक्स बंद करा, ३० सेकंद थांबा आणि पुन्हा सुरू करा.',
          hi: 'अगर आसानी से पहुँच सकें, तो टीवी और Jio बॉक्स बंद करें, 30 सेकंड रुकें और फिर चालू करें।',
          en: 'If safely accessible, turn off both the TV and Jio box, wait 30 seconds, and turn them back on.',
        },
        simplerExplanation: {
          mr: 'दोन्ही बंद करून ३० सेकंदांनी पुन्हा चालू करा.',
          hi: 'दोनों को बंद करके 30 सेकंड बाद चालू करें।',
          en: 'Power both off, wait 30 seconds, and turn them back on.',
        },
        safetyNote: {
          mr: 'कृपया कोणतीही वायर स्वतः उघडू नका.',
          hi: 'कृपया कोई भी तार खुद न खोलें।',
          en: 'Never open devices or pull wires.',
        },
        solvedButtonLabel: {mr: 'माझी समस्या सुटली', hi: 'आवाज़ आ गई', en: 'Sound is back!'},
        nextButtonLabel: {mr: 'अजून समस्या आहे', hi: 'अभी भी समस्या है', en: 'Still having problem'},
      },
    ],
  },
  {
    id: 'no-channels',
    emoji: '📡',
    title: {
      mr: 'चॅनेल दिसत नाही.',
      hi: 'टीवी पर चैनल नहीं दिख रहा है।',
      en: 'Channels are not showing.',
    },
    introNote: {
      mr: 'काळजी करू नका. आपण एकेक पायरी तपासूया.',
      hi: 'चिंता न करें। हम एक-एक कदम जांचेंगे।',
      en: 'Do not worry. Let us check one step at a time.',
    },
    homeConnectionNote: {
      mr: 'ℹ️ तुमच्या घरी Jio Set-Top Box HDMI 2 ला जोडलेला आहे.',
      hi: 'ℹ️ आपके घर में Jio Set-Top Box HDMI 2 से जुड़ा है।',
      en: 'ℹ️ At your home, the Jio Set-Top Box is connected to HDMI 2.',
    },
    steps: [
      {
        id: 'chan-1',
        diagram: 'jio-light',
        instruction: {
          mr: 'Jio Set-Top Box चालू आहे का ते तपासा. बॉक्सवर पांढरा किंवा हिरवा दिवा दिसत आहे का?',
          hi: 'जांचें कि Jio Set-Top Box चालू है या नहीं। क्या बॉक्स पर सफ़ेद या हरी लाइट दिख रही है?',
          en: 'Check if your Jio Set-Top Box is powered on and showing a steady light.',
        },
        simplerExplanation: {
          mr: 'दिवा बंद असल्यास Jio रिमोटवरील लाल पॉवर बटण एकदा दाबा.',
          hi: 'लाइट बंद हो तो Jio रिमोट का लाल पावर बटन दबाएं।',
          en: 'If its light is off, press the red power button on the Jio remote.',
        },
        solvedButtonLabel: {mr: 'माझी समस्या सुटली', hi: 'चैनल चल गए', en: 'Channels are back!'},
        nextButtonLabel: {mr: 'पुढील पायरी', hi: 'अगला कदम', en: 'Next Step'},
      },
      {
        id: 'chan-2',
        diagram: 'hdmi-2-source',
        instruction: {
          mr: 'Samsung रिमोटवरील Source बटण दाबा आणि HDMI 2 निवडला आहे का ते तपासा.',
          hi: 'Samsung रिमोट पर Source दबाएं और देखें कि HDMI 2 चुना हुआ है या नहीं।',
          en: 'Press Source on the Samsung remote and ensure HDMI 2 is selected.',
        },
        simplerExplanation: {
          mr: 'तुमच्या घरी Jio बॉक्स HDMI 2 वर जोडलेला आहे. म्हणून HDMI 2 निवडून OK दाबा.',
          hi: 'आपके घर में Jio बॉक्स HDMI 2 पर जुड़ा है, इसलिए HDMI 2 चुनें।',
          en: 'Select HDMI 2 and press OK.',
        },
        solvedButtonLabel: {mr: 'माझी समस्या सुटली', hi: 'चैनल चल गए', en: 'Channels are back!'},
        nextButtonLabel: {mr: 'पुढील पायरी', hi: 'अगला कदम', en: 'Next Step'},
      },
      {
        id: 'chan-3',
        diagram: 'tv-home-youtube',
        instruction: {
          mr: 'Jio रिमोटवर Home (🏠) बटण दाबून "JioTV+" पर्याय निवडा.',
          hi: 'Jio रिमोट पर Home (🏠) दबाकर "JioTV+" चुनें।',
          en: 'Press Home (🏠) on the Jio remote and select "JioTV+".',
        },
        simplerExplanation: {
          mr: 'Jio रिमोटवर 🏠 घर चिन्हाचे बटण दाबून JioTV+ वर OK दाबा.',
          hi: 'Jio रिमोट पर Home दबाकर JioTV+ पर OK दबाएं।',
          en: 'Press Home on the Jio remote, move to JioTV+, and press OK.',
        },
        solvedButtonLabel: {mr: 'माझी समस्या सुटली', hi: 'चैनल चल गए', en: 'Channels are back!'},
        nextButtonLabel: {mr: 'पुढील पायरी', hi: 'अगला कदम', en: 'Next Step'},
      },
      {
        id: 'chan-4',
        diagram: 'family-help',
        instruction: {
          mr: 'तरीही चॅनेल दिसत नसेल, तर चॅनेलचे पॅक किंवा तात्पुरती अडचण असू शकते. कृपया घरातील व्यक्तीला तपासायला सांगा.',
          hi: 'अगर अभी भी चैनल न दिखे, तो पैक या अस्थायी समस्या हो सकती है। कृपया परिवार के सदस्य से जाँच करने को कहें।',
          en: 'If channels are still unavailable, it may be a subscription or temporary signal issue. Please ask a family member.',
        },
        simplerExplanation: {
          mr: 'दुसरे चॅनेल लावून पहा (CH+ दाबा). अडचण कायम राहिल्यास मुलांना कळवा.',
          hi: 'CH+ दबाकर दूसरा चैनल देखें या परिवार को बताएं।',
          en: 'Try CH+ for another channel, or ask family to check.',
        },
        solvedButtonLabel: {mr: 'माझी समस्या सुटली', hi: 'समस्या हल हुई', en: 'Channels are back!'},
        nextButtonLabel: {mr: 'अजून समस्या आहे', hi: 'अभी भी समस्या है', en: 'Still having problem'},
      },
    ],
  },
  {
    id: 'jio-box-not-working',
    emoji: '📦',
    title: {
      mr: 'Jio Box सुरू होत नाही.',
      hi: 'Jio Box चालू नहीं हो रहा है।',
      en: 'Jio Box is not starting.',
    },
    introNote: {
      mr: 'काळजी करू नका. आपण एकेक पायरी तपासूया. बॉक्स स्वतः उघडू नका.',
      hi: 'चिंता न करें। हम एक-एक कदम जांचेंगे। बॉक्स खुद न खोलें।',
      en: 'Do not worry. Let us check one step at a time. Never open the box.',
    },
    homeConnectionNote: {
      mr: 'ℹ️ तुमच्या घरी Jio Set-Top Box HDMI 2 ला जोडलेला आहे.',
      hi: 'ℹ️ आपके घर में Jio Set-Top Box HDMI 2 से जुड़ा है।',
      en: 'ℹ️ At your home, the Jio Set-Top Box is connected to HDMI 2.',
    },
    steps: [
      {
        id: 'jio-1',
        diagram: 'jio-light',
        instruction: {
          mr: 'Jio बॉक्सवर पांढरा किंवा हिरवा दिवा लागला आहे का पहा. लाल दिवा असल्यास Jio रिमोटवरील पॉवर बटण दाबा.',
          hi: 'देखें कि Jio बॉक्स पर सफ़ेद या हरी लाइट है क्या। लाल लाइट हो तो Jio रिमोट का पावर बटन दबाएं।',
          en: 'Check if the Jio box light is white/green. If red, press Power on the Jio remote.',
        },
        simplerExplanation: {
          mr: 'Jio रिमोटवरचे वरचे लाल बटण एकदा दाबून ५ सेकंद थांबा.',
          hi: 'Jio रिमोट का ऊपर वाला लाल बटन दबाकर 5 सेकंड रुकें।',
          en: 'Press the top red button on the Jio remote and wait 5 seconds.',
        },
        solvedButtonLabel: {mr: 'माझी समस्या सुटली', hi: 'बॉक्स चालू हो गया', en: 'Jio Box started!'},
        nextButtonLabel: {mr: 'पुढील पायरी', hi: 'अगला कदम', en: 'Next Step'},
      },
      {
        id: 'jio-2',
        diagram: 'hdmi-2-source',
        instruction: {
          mr: 'Samsung रिमोटवरील Source बटण दाबून HDMI 2 निवडा.',
          hi: 'Samsung रिमोट पर Source दबाकर HDMI 2 चुनें।',
          en: 'Press Source on the Samsung remote and select HDMI 2.',
        },
        simplerExplanation: {
          mr: 'Jio बॉक्स HDMI 2 ला जोडलेला आहे, म्हणून HDMI 2 वर जाऊन OK दाबा.',
          hi: 'Jio बॉक्स HDMI 2 से जुड़ा है, इसलिए HDMI 2 चुनें।',
          en: 'Choose HDMI 2 and press OK.',
        },
        solvedButtonLabel: {mr: 'माझी समस्या सुटली', hi: 'समस्या हल हुई', en: 'Solved!'},
        nextButtonLabel: {mr: 'पुढील पायरी', hi: 'अगला कदम', en: 'Next Step'},
      },
      {
        id: 'jio-3',
        diagram: 'safe-restart',
        instruction: {
          mr: 'सहज हात पोहोचत असल्यास, Jio बॉक्सचे स्विच बंद करा, ३० सेकंद थांबा आणि पुन्हा चालू करा. १-२ मिनिटे थांबा.',
          hi: 'अगर आसानी से पहुँच सकें, तो Jio बॉक्स का स्विच बंद करें, 30 सेकंड रुकें और फिर चालू करें। 1-2 मिनट इंतज़ार करें।',
          en: 'If safely accessible, switch the Jio box off, wait 30 seconds, turn it back on, and wait 1–2 minutes.',
        },
        simplerExplanation: {
          mr: 'Jio बॉक्स पूर्ण सुरू व्हायला १-२ मिनिटे लागतात.',
          hi: 'Jio बॉक्स को शुरू होने में 1-2 मिनट लगते हैं।',
          en: 'The Jio box takes 1–2 minutes to start up.',
        },
        safetyNote: {
          mr: 'कोणतीही केबल स्वतः ओढू नका आणि बॉक्स उघडू नका.',
          hi: 'कोई भी तार न खींचें और बॉक्स न खोलें।',
          en: 'Do not pull cables or open the box.',
        },
        solvedButtonLabel: {mr: 'माझी समस्या सुटली', hi: 'बॉक्स चालू हो गया', en: 'Jio Box started!'},
        nextButtonLabel: {mr: 'अजून समस्या आहे', hi: 'अभी भी समस्या है', en: 'Still having problem'},
      },
    ],
  },
  {
    id: 'no-internet',
    emoji: '🌐',
    title: {
      mr: 'इंटरनेट चालत नाही.',
      hi: 'इंटरनेट नहीं चल रहा है।',
      en: 'Internet is not working.',
    },
    introNote: {
      mr: 'काळजी करू नका. राउटर उघडू किंवा रीसेट करू नका.',
      hi: 'चिंता न करें। राउटर को न खोलें और न ही रीसेट करें।',
      en: 'Do not worry. Never open or factory-reset the router.',
    },
    steps: [
      {
        id: 'net-1',
        diagram: 'router-lights',
        instruction: {
          mr: 'घरातील Jio राउटर (Wi-Fi बॉक्स) चालू आहे का ते तपासा.',
          hi: 'जांचें कि घर का Jio राउटर (Wi-Fi बॉक्स) चालू है या नहीं।',
          en: 'Check whether your home Jio Wi-Fi router is powered on.',
        },
        simplerExplanation: {
          mr: 'वाय-फायच्या डब्याचे स्विच चालू आहे का ते दुरून पहा.',
          hi: 'Wi-Fi बॉक्स का बिजली का स्विच चालू है या नहीं देखें।',
          en: 'Check that the Wi-Fi router wall switch is on.',
        },
        nextButtonLabel: {mr: 'पुढील पायरी', hi: 'अगला कदम', en: 'Next Step'},
      },
      {
        id: 'net-2',
        diagram: 'router-lights',
        instruction: {
          mr: 'राउटरला हात न लावता त्यावरील दिवे पहा: हिरवा/निळा दिवा स्थिर आहे की लाल दिवा लागला आहे?',
          hi: 'राउटर को छुए बिना उसकी लाइट देखें: हरी/नीली लाइट है या लाल लाइट?',
          en: 'Observe the router indicator lights without touching it: steady green/blue or red?',
        },
        simplerExplanation: {
          mr: 'लाल दिवा असेल तर बाहेरून JioFiber बंद असू शकते. हिरवा/निळा दिवा असेल तर इंटरनेट ठीक आहे.',
          hi: 'लाल लाइट हो तो बाहर से नेटवर्क बंद हो सकता है।',
          en: 'Red light usually means an outside line outage; green/blue means connected.',
        },
        safetyNote: {
          mr: 'कृपया राउटर उघडू नका आणि कोणतेही रीसेट बटण दाबू नका.',
          hi: 'कृपया राउटर न खोलें और रीसेट बटन न दबाएं।',
          en: 'Never open or factory reset the router.',
        },
        nextButtonLabel: {mr: 'पुढील पायरी', hi: 'अगला कदम', en: 'Next Step'},
      },
      {
        id: 'net-3',
        diagram: 'safe-restart',
        instruction: {
          mr: '१-२ मिनिटे शांत थांबून पुन्हा तपासा किंवा मोबाईलवर Wi-Fi सुरू आहे का ते पहा.',
          hi: '1-2 मिनट रुककर फिर जांचें या देखें कि मोबाइल पर Wi-Fi चल रहा है या नहीं।',
          en: 'Wait 1–2 minutes and check if Wi-Fi works on your phone.',
        },
        simplerExplanation: {
          mr: 'तात्पुरती अडचण असल्यास थोड्या वेळाने इंटरनेट आपोआप सुरू होते.',
          hi: 'थोड़ी देर में इंटरनेट अपने आप ठीक हो सकता है।',
          en: 'Brief drops often recover after 1–2 minutes.',
        },
        solvedButtonLabel: {mr: 'माझी समस्या सुटली', hi: 'इंटरनेट चल गया', en: 'Internet is back!'},
        nextButtonLabel: {mr: 'पुढील पायरी', hi: 'अगला कदम', en: 'Next Step'},
      },
      {
        id: 'net-4',
        diagram: 'family-help',
        instruction: {
          mr: 'इंटरनेट अजूनही बंद असल्यास कृपया घरातील व्यक्तीची मदत घ्या.',
          hi: 'इंटरनेट अभी भी बंद हो तो कृपया परिवार के सदस्य की मदद लें।',
          en: 'If internet is still down, please ask a family member to check.',
        },
        simplerExplanation: {
          mr: 'राउटरवर कोणता दिवा लागला आहे ते मुलांना फोनवर सांगा.',
          hi: 'राउटर पर दिखने वाली लाइट के बारे में परिवार को बताएं।',
          en: 'Tell a family member which light colour shows on the router.',
        },
        solvedButtonLabel: {mr: 'माझी समस्या सुटली', hi: 'समस्या हल हुई', en: 'Solved!'},
        nextButtonLabel: {mr: 'अजून समस्या आहे', hi: 'अभी भी समस्या है', en: 'Still having problem'},
      },
    ],
  },
  {
    id: 'youtube-not-opening',
    emoji: '▶️',
    title: {
      mr: 'YouTube सुरू होत नाही.',
      hi: 'YouTube चालू नहीं हो रहा है।',
      en: 'YouTube is not opening.',
    },
    introNote: {
      mr: 'काळजी करू नका. आपण एकेक पायरी तपासूया.',
      hi: 'चिंता न करें। हम एक-एक कदम जांचेंगे।',
      en: 'Do not worry. Let us check one step at a time.',
    },
    steps: [
      {
        id: 'yt-1',
        diagram: 'tv-home-youtube',
        instruction: {
          mr: 'रिमोटवरील 🏠 (Home) बटण दाबा आणि स्क्रीनवर लाल ▶️ YouTube अ‍ॅप निवडा.',
          hi: 'रिमोट पर 🏠 (Home) दबाएं और लाल ▶️ YouTube ऐप चुनें।',
          en: 'Press 🏠 (Home) on the remote and select the red ▶️ YouTube app.',
        },
        simplerExplanation: {
          mr: 'घर (🏠) बटण दाबल्यावर खालच्या रांगेत YouTube दिसेल, त्यावर OK दाबा.',
          hi: 'घर (🏠) बटन दबाने के बाद नीचे YouTube पर OK दबाएं।',
          en: 'Press Home and press OK on YouTube.',
        },
        solvedButtonLabel: {mr: 'माझी समस्या सुटली', hi: 'YouTube चल गया', en: 'YouTube opened!'},
        nextButtonLabel: {mr: 'पुढील पायरी', hi: 'अगला कदम', en: 'Next Step'},
      },
      {
        id: 'yt-2',
        diagram: 'router-lights',
        instruction: {
          mr: 'घरातील Wi-Fi इंटरनेट सुरू आहे का ते तपासा.',
          hi: 'जांचें कि घर का Wi-Fi इंटरनेट चल रहा है या नहीं।',
          en: 'Check that your home Wi-Fi internet is working.',
        },
        simplerExplanation: {
          mr: 'मोबाईलवर YouTube चालते का ते पहा.',
          hi: 'देखें कि मोबाइल पर YouTube चल रहा है या नहीं।',
          en: 'Check if videos open on your phone over Wi-Fi.',
        },
        solvedButtonLabel: {mr: 'माझी समस्या सुटली', hi: 'YouTube चल गया', en: 'YouTube opened!'},
        nextButtonLabel: {mr: 'पुढील पायरी', hi: 'अगला कदम', en: 'Next Step'},
      },
      {
        id: 'yt-3',
        diagram: 'safe-restart',
        instruction: {
          mr: 'रिमोटने टीव्ही बंद करा, ३० सेकंद थांबा आणि पुन्हा चालू करून YouTube उघडा.',
          hi: 'रिमोट से टीवी बंद करें, 30 सेकंड रुकें और फिर चालू करके YouTube खोलें।',
          en: 'Turn the TV off with the remote, wait 30 seconds, turn it on, and open YouTube.',
        },
        simplerExplanation: {
          mr: 'टीव्ही एकदा बंद करून पुन्हा चालू केल्यास अ‍ॅप नीट सुरू होते.',
          hi: 'टीवी को बंद करके फिर चालू करने से ऐप ठीक चल जाता है।',
          en: 'Restarting the TV refreshes the YouTube app.',
        },
        solvedButtonLabel: {mr: 'माझी समस्या सुटली', hi: 'YouTube चल गया', en: 'YouTube opened!'},
        nextButtonLabel: {mr: 'अजून समस्या आहे', hi: 'अभी भी समस्या है', en: 'Still having problem'},
      },
    ],
  },
  {
    id: 'remote-not-working',
    emoji: '🎮',
    title: {
      mr: 'रिमोट काम करत नाही.',
      hi: 'रिमोट काम नहीं कर रहा है।',
      en: 'Remote is not working.',
    },
    introNote: {
      mr: 'काळजी करू नका. आपण एकेक पायरी तपासूया. रिमोट उघडू किंवा तोडू नका.',
      hi: 'चिंता न करें। हम एक-एक कदम जांचेंगे। रिमोट को न खोलें।',
      en: 'Do not worry. Never force open the remote.',
    },
    steps: [
      {
        id: 'rem-1',
        diagram: 'remote-battery',
        instruction: {
          mr: 'योग्य रिमोट हातात आहे का ते पहा (टीव्हीसाठी Samsung रिमोट, चॅनेलसाठी Jio रिमोट) आणि थेट टीव्हीकडे धरून दाबा.',
          hi: 'देखें कि सही रिमोट हाथ में है (टीवी के लिए Samsung, चैनल के लिए Jio) और सीधे टीवी की ओर रखकर दबाएं।',
          en: 'Make sure you have the right remote (Samsung for TV, Jio for channels) and point it directly at the TV.',
        },
        simplerExplanation: {
          mr: 'टीव्हीसमोर कोणताही अडथळा नसू द्या.',
          hi: 'टीवी के सामने कोई चीज़ न हो।',
          en: 'Keep the path between remote and TV clear.',
        },
        solvedButtonLabel: {mr: 'माझी समस्या सुटली', hi: 'रिमोट चल गया', en: 'Remote works!'},
        nextButtonLabel: {mr: 'पुढील पायरी', hi: 'अगला कदम', en: 'Next Step'},
      },
      {
        id: 'rem-2',
        diagram: 'remote-battery',
        instruction: {
          mr: 'सुरक्षितपणे शक्य असल्यास, रिमोटचे सेल (बॅटरी) बदलून पहा.',
          hi: 'अगर सुरक्षित रूप से संभव हो, तो रिमोट की बैटरी (सेल) बदलकर देखें।',
          en: 'If comfortable doing so safely, try replacing the remote batteries.',
        },
        simplerExplanation: {
          mr: 'झाकण उघडायला कठीण वाटल्यास जोर लावू नका — घरातील व्यक्तीला सांगा.',
          hi: 'ढक्कन खोलना कठिन लगे तो ज़ोर न लगाएं।',
          en: 'Do not force the battery cover; ask family if tight.',
        },
        safetyNote: {
          mr: 'रिमोटचे कोणतेही आतील भाग किंवा स्क्रू उघडू नका.',
          hi: 'रिमोट का कोई अंदरूनी हिस्सा न खोलें।',
          en: 'Do not open internal parts of the remote.',
        },
        solvedButtonLabel: {mr: 'माझी समस्या सुटली', hi: 'रिमोट चल गया', en: 'Remote works!'},
        nextButtonLabel: {mr: 'पुढील पायरी', hi: 'अगला कदम', en: 'Next Step'},
      },
      {
        id: 'rem-3',
        diagram: 'power-plug',
        instruction: {
          mr: 'सहज हात पोहोचत असल्यास टीव्हीच्या खालच्या कडेला असलेले छोटे बटण वापरून पहा किंवा घरातील व्यक्तीला सांगा.',
          hi: 'आसानी से पहुँचने पर टीवी के नीचे वाले छोटे बटन का उपयोग करें या परिवार के सदस्य को बताएं।',
          en: 'Use the small button underneath the TV if safely reachable, or ask a family member.',
        },
        simplerExplanation: {
          mr: 'काळजी करू नका, नवीन सेल टाकल्यावर रिमोट पुन्हा नीट चालेल.',
          hi: 'चिंता न करें, नए सेल लगाने पर रिमोट ठीक हो जाएगा।',
          en: 'Fresh batteries usually restore the remote.',
        },
        solvedButtonLabel: {mr: 'माझी समस्या सुटली', hi: 'समस्या हल हुई', en: 'Solved!'},
        nextButtonLabel: {mr: 'अजून समस्या आहे', hi: 'अभी भी समस्या है', en: 'Still having problem'},
      },
    ],
  },
  {
    id: 'tv-restarting',
    emoji: '🔄',
    title: {
      mr: 'टीव्ही वारंवार बंद किंवा सुरू होत आहे.',
      hi: 'टीवी बार-बार बंद या चालू हो रहा है।',
      en: 'TV keeps turning off and on.',
    },
    introNote: {
      mr: 'काळजी करू नका. शांत रहा आणि पुढील सुरक्षित पायऱ्या काळजीपूर्वक पहा.',
      hi: 'चिंता न करें। शांत रहें और सुरक्षित कदम ध्यान से देखें।',
      en: 'Do not worry. Follow these safe steps carefully.',
    },
    steps: [
      {
        id: 'rest-1',
        diagram: 'safety-stop',
        isEmergencySafetyStep: true,
        instruction: {
          mr: 'अतिशय महत्त्वाचे: टीव्हीजवळ जळण्याचा वास, धूर, ठिणग्या किंवा खूप गरमपणा जाणवत आहे का?',
          hi: 'बहुत ज़रूरी: क्या टीवी के पास जलने की गंध, धुआं, चिंगारी या ज़्यादा गर्मी लग रही है?',
          en: 'Very important: Is there any burning smell, smoke, sparks, or unusual heat?',
        },
        simplerExplanation: {
          mr: 'असे काहीही जाणवल्यास टीव्ही वापरणे ताबडतोब बंद करा आणि घरातील व्यक्तीला किंवा तंत्रज्ञाला बोलवा.',
          hi: 'ऐसा कुछ दिखे तो टीवी तुरंत बंद करें और परिवार या तकनीशियन को बुलाएं।',
          en: 'If yes, stop using the TV immediately and call family or a technician.',
        },
        safetyNote: {
          mr: 'विजेचा धोका वाटल्यास उपकरणाला अजिबात स्पर्श करू नका.',
          hi: 'बिजली का खतरा लगे तो उपकरण को बिल्कुल न छुएं।',
          en: 'Do not touch the equipment if there is any electrical danger.',
        },
        nextButtonLabel: {mr: 'सर्व ठीक आहे — पुढील पायरी', hi: 'सब ठीक है — अगला कदम', en: 'All safe — Next Step'},
      },
      {
        id: 'rest-2',
        diagram: 'safe-restart',
        instruction: {
          mr: 'स्विच वारंवार चालू-बंद करू नका. एकदा रिमोटने टीव्ही बंद करून १ मिनिट विश्रांती द्या.',
          hi: 'स्विच बार-बार चालू-बंद न करें। एक बार रिमोट से बंद करके 1 मिनट छोड़ दें।',
          en: 'Avoid toggling the switch repeatedly. Turn off once and rest for 1 minute.',
        },
        simplerExplanation: {
          mr: '१ मिनिट शांत थांबून मग पुन्हा चालू करा.',
          hi: '1 मिनट रुककर फिर चालू करें।',
          en: 'Wait 1 quiet minute before turning back on.',
        },
        solvedButtonLabel: {mr: 'माझी समस्या सुटली', hi: 'टीवी ठीक चल रहा है', en: 'TV is steady!'},
        nextButtonLabel: {mr: 'अजून समस्या आहे', hi: 'अभी भी समस्या है', en: 'Still having problem'},
      },
    ],
  },
  {
    id: 'other-problem',
    emoji: '❓',
    title: {
      mr: 'इतर काही अडचण आहे.',
      hi: 'कोई और परेशानी है।',
      en: 'Some other problem.',
    },
    introNote: {
      mr: 'काळजी करू नका. आपण काही सोप्या गोष्टी तपासूया.',
      hi: 'चिंता न करें। हम कुछ आसान बातें जांचेंगे।',
      en: 'Do not worry. Let us check a few simple things.',
    },
    steps: [
      {
        id: 'other-1',
        diagram: 'safety-stop',
        isEmergencySafetyStep: true,
        instruction: {
          mr: 'प्रथम खात्री करा: कोणताही जळण्याचा वास, धूर, ठिणग्या किंवा उघडी वायर दिसत नाही ना?',
          hi: 'पहले पक्का करें: कोई जलने की गंध, धुआं, चिंगारी या खुला तार तो नहीं है?',
          en: 'First confirm there is no smoke, burning smell, sparks, or exposed wires?',
        },
        simplerExplanation: {
          mr: 'असे काहीही असल्यास उपकरणाला हात लावू नका आणि लगेच मदत बोलवा.',
          hi: 'ऐसा कुछ हो तो उपकरण को न छुएं।',
          en: 'If you notice any hazard, do not touch the device.',
        },
        safetyNote: {
          mr: 'धोका वाटल्यास उपकरण लगेच वापरणे थांबवा.',
          hi: 'खतरा लगे तो तुरंत उपयोग रोकें।',
          en: 'Stop using immediately if there is any safety risk.',
        },
        nextButtonLabel: {mr: 'सर्व सुरक्षित आहे — पुढील पायरी', hi: 'सब सुरक्षित है — अगला कदम', en: 'All safe — Next Step'},
      },
      {
        id: 'other-2',
        diagram: 'family-help',
        instruction: {
          mr: 'टीव्हीच्या स्क्रीनवर काय लिहिले आहे ते पहा आणि गरज असल्यास घरातील व्यक्तीची मदत घ्या.',
          hi: 'टीवी स्क्रीन पर क्या लिखा है देखें और ज़रूरत हो तो परिवार के सदस्य की मदद लें।',
          en: 'Note what message appears on the TV screen and ask a family member for help if needed.',
        },
        simplerExplanation: {
          mr: 'स्क्रीनवरचा शब्द पाहून घरातील व्यक्तीला फोनवर सांगितल्यास ते लगेच मदत करतील.',
          hi: 'स्क्रीन का संदेश परिवार को फ़ोन पर बताएं।',
          en: 'Simply call a family member and read them the screen message.',
        },
        solvedButtonLabel: {mr: 'माझी समस्या सुटली', hi: 'समस्या हल हुई', en: 'Solved!'},
        nextButtonLabel: {mr: 'अजून समस्या आहे', hi: 'अभी भी समस्या है', en: 'Still having problem'},
      },
    ],
  },
];
