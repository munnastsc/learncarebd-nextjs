export interface LessonConversationTurn {
    speaker: 'A' | 'B';
    type: 'practice' | 'real';
    en: string;
    bn: string;
    ipa: string;
    bn_pron: string;
}

export interface SpokenLesson {
    id: string;
    lessonNumber: number;
    title: string;
    subtitle: string;
    phase: 'to-be' | 'have-has' | 'tenses' | 'modals' | 'comparisons' | 'power-structures' | 'advanced';
    phaseLabel: string;
    level: 'Beginner' | 'Elementary' | 'Intermediate' | 'Upper-Intermediate';
    concept: {
        explanation: string;
        whenToUse: string;
        commonMistake: string;
        formulaSummary: string;
    };
    transformation6Way: {
        baseConcept: string;
        positive: { en: string; bn: string; ipa: string; formula: string };
        negative: { en: string; bn: string; ipa: string; formula: string };
        interrogative: { en: string; bn: string; ipa: string; formula: string };
        interroNegative: { en: string; bn: string; ipa: string; formula: string };
        whPositive: { en: string; bn: string; ipa: string; formula: string };
        whNegative: { en: string; bn: string; ipa: string; formula: string };
    };
    realLifeSentences: {
        en: string;
        bn: string;
        ipa: string;
        context: string;
        type: 'positive' | 'negative' | 'question' | 'wh';
    }[];
    nativeVariations: {
        situation: string;
        standard: string;
        nativeStyle: string;
        waysToSay: { phrasing: string; tone: string; bn: string }[];
        tip: string;
    };
    qaDrill: {
        targetQuestion: { en: string; bn: string; ipa: string };
        possibleAnswers: {
            style: 'সংক্ষিপ্ত সম্মতি (Short Affirmative)' | 'বিস্তারিত উত্তর (Elaborated)' | 'না-বাচক উত্তর (Polite Negative)' | 'বিকল্প বা দ্বিধা (Alternative / Uncertainty)';
            en: string;
            bn: string;
            ipa: string;
        }[];
    };
    conversation?: LessonConversationTurn[];
    sentenceBuilder: {
        subjects: string[];
        auxOrVerbs: string[];
        complements: string[];
    };
}

export const SPOKEN_LESSONS: SpokenLesson[] = [
    // ══════════════════════════════════════════════════════════════════
    // PHASE 1: TO-BE VERBS (STATE OF BEING / পরিচয়, অবস্থান ও গুণ)
    // ══════════════════════════════════════════════════════════════════
    {
        id: 'lesson-01-present-to-be',
        lessonNumber: 1,
        title: 'Present To-Be: am / is / are',
        subtitle: 'বর্তমান পরিচয়, অবস্থান, গুণ ও শারীরিক/মানসিক অবস্থা প্রকাশ',
        phase: 'to-be',
        phaseLabel: 'ভিত্তিপ্রস্তর (To-Be)',
        level: 'Beginner',
        concept: {
            explanation: 'ইংরেজিতে কোনো কাজ (Action) না বুঝিয়ে শুধু কারো পরিচয় (যেমন: I am a student), অবস্থা (She is happy), বা অবস্থান (They are in Dhaka) বোঝাতে am, is, are ব্যবহৃত হয়। বাংলায় আমরা প্রায়ই "হই/হয়" উহ্য রাখি (যেমন: "সে একজন ডাক্তার" = He is a doctor)।',
            whenToUse: 'কারো পেশা, জাতীয়তা, বয়স, মনের ভাব, শারীরিক অবস্থা বা কোনো স্থানের বর্তমান স্থিতি বর্ণনা করতে।',
            commonMistake: 'বাঙালি শিক্ষার্থীরা অনেক সময় ভুল করে সাধারণ কাজের সাথে am/is/are জুড়ে দেয় (যেমন: "I am agree" বা "He is go" - এগুলো সম্পূর্ণ ভুল! সঠিক: "I agree", "He goes")। am/is/are কেবল Adjective/Noun/Prepositional Phrase এর পূর্বে বসে যখন কোনো মূল ভার্ব থাকে না।',
            formulaSummary: 'I + am | He/She/It/Single + is | We/You/They/Plural + are'
        },
        transformation6Way: {
            baseConcept: 'ব্যস্ত থাকা (Being busy)',
            positive: {
                formula: 'Subject + am/is/are + Adjective/Noun',
                en: 'I am extremely busy right now.',
                bn: 'আমি এখন ভীষণ ব্যস্ত।',
                ipa: '/aɪ æm ɪkˈstriːmli ˈbɪzi raɪt naʊ/'
            },
            negative: {
                formula: 'Subject + am not / isn\'t / aren\'t + Extension',
                en: 'I am not busy right now.',
                bn: 'আমি এখন ব্যস্ত নই।',
                ipa: '/aɪ æm nɒt ˈbɪzi raɪt naʊ/'
            },
            interrogative: {
                formula: 'Am/Is/Are + Subject + Extension?',
                en: 'Are you busy right now?',
                bn: 'তুমি কি এখন ব্যস্ত?',
                ipa: '/ɑː juː ˈbɪzi raɪt naʊ/'
            },
            interroNegative: {
                formula: 'Aren\'t/Isn\'t + Subject + Extension? (বা Are you not...?)',
                en: 'Aren\'t you busy right now?',
                bn: 'তুমি কি এখন ব্যস্ত নও?',
                ipa: '/ɑːnt juː ˈbɪzi raɪt naʊ/'
            },
            whPositive: {
                formula: 'WH-Word + am/is/are + Subject + Extension?',
                en: 'Why are you so busy today?',
                bn: 'তুমি আজকে এত ব্যস্ত কেন?',
                ipa: '/waɪ ɑː juː səʊ ˈbɪzi təˈdeɪ/'
            },
            whNegative: {
                formula: 'WH-Word + aren\'t/isn\'t + Subject + Extension?',
                en: 'Why aren\'t you ready yet?',
                bn: 'তুমি এখনো প্রস্তুত নও কেন?',
                ipa: '/waɪ ɑːnt juː ˈredi jet/'
            }
        },
        realLifeSentences: [
            { en: 'I am really glad to meet you in person.', bn: 'আপনার সাথে সরাসরি দেখা হয়ে সত্যিই আনন্দিত।', ipa: '/aɪ æm ˈrɪəli ɡlæd tə miːt juː ɪn ˈpɜːsn/', context: 'পরিচিত হওয়ার সময় ভদ্রতা প্রকাশ', type: 'positive' },
            { en: 'She isn\'t in the office at the moment.', bn: 'তিনি এই মুহূর্তে অফিসে নেই।', ipa: '/ʃiː ˈɪznt ɪn ði ˈɒfɪs æt ðə ˈməʊmənt/', context: 'অফিস কল বা কারো খোঁজ দেওয়া', type: 'negative' },
            { en: 'Are you comfortable with this arrangement?', bn: 'আপনি কি এই ব্যবস্থাপনায় স্বাচ্ছন্দ্যবোধ করছেন?', ipa: '/ɑː juː ˈkʌmftəbl wɪð ðɪs əˈreɪndʒmənt/', context: 'অতিথি বা ক্লায়েন্টকে জিজ্ঞাসা', type: 'question' },
            { en: 'Who is responsible for this project?', bn: 'এই প্রকল্পের দায়িত্বে কে আছেন?', ipa: '/huː ɪz rɪˈspɒnsəbl fɔː ðɪs ˈprɒdʒekt/', context: 'অফিস মিটিং বা ইনকোয়ারি', type: 'wh' }
        ],
        nativeVariations: {
            situation: 'বলতে চাওয়া: "আমি খুব ব্যস্ত"',
            standard: 'I am very busy right now.',
            nativeStyle: 'I\'m a bit tied up at the moment / My hands are full.',
            waysToSay: [
                { phrasing: 'I\'m a bit tied up right now.', tone: 'পেশাদার ও স্বাভাবিক', bn: 'আমি এখন একটু কাজে আটকে আছি।' },
                { phrasing: 'I\'m swamped with work today.', tone: 'ক্যাজুয়াল ও অনর্গল', bn: 'আজকে আমি কাজের চাপে ডুবে আছি।' },
                { phrasing: 'My plate is completely full.', tone: 'ইডিয়াম্যাটিক', bn: 'আমার হাতে প্রচুর কাজ জমে আছে।' },
                { phrasing: 'I\'m in the middle of something.', tone: 'ফোনালাপে দারুণ', bn: 'আমি একটা কাজের মধ্যে আছি।' }
            ],
            tip: '💡 নেটিভ স্পিকাররা "I am" আলাদা না বলে সবসময় সংক্ষিপ্ত রূপ "I\'m" (/aɪm/) উচ্চারণ করেন।'
        },
        qaDrill: {
            targetQuestion: {
                en: 'Are you free this evening for a quick coffee?',
                bn: 'আজ সন্ধ্যায় কি একটু কফি খাওয়ার জন্য তোমার সময় হবে?',
                ipa: '/ɑː juː friː ðɪs ˈiːvnɪŋ fɔːr ə kwɪk ˈkɒfi/'
            },
            possibleAnswers: [
                { style: 'সংক্ষিপ্ত সম্মতি (Short Affirmative)', en: 'Yes, absolutely! I\'m totally free after six.', bn: 'হ্যাঁ, অবশ্যই! ৬টার পর আমি পুরোপুরি ফ্রি আছি।', ipa: '/jes ˌæbsəˈluːtli aɪm ˈtəʊtəli friː ˈɑːftə sɪks/' },
                { style: 'বিস্তারিত উত্তর (Elaborated)', en: 'I am, and I\'d love to catch up. Where should we meet?', bn: 'হ্যাঁ আছি, এবং আড্ডা দিতে ভালোই লাগবে। কোথায় দেখা করব?', ipa: '/aɪ æm ænd aɪd lʌv tə kætʃ ʌp weə ʃʊd wiː miːt/' },
                { style: 'না-বাচক উত্তর (Polite Negative)', en: 'I\'m afraid I\'m busy tonight, but how about tomorrow?', bn: 'আজ রাতে দুঃখিত আমি ব্যস্ত, তবে কাল হলে কেমন হয়?', ipa: '/aɪm əˈfreɪd aɪm ˈbɪzi təˈnaɪt bʌt haʊ əˈbaʊt təˈmɒrəʊ/' },
                { style: 'বিকল্প বা দ্বিধা (Alternative / Uncertainty)', en: 'I\'m not quite sure yet. Let me check my schedule and ping you.', bn: 'আমি এখনো নিশ্চিত নই। একটু রুটিন দেখে তোমাকে জানাচ্ছি।', ipa: '/aɪm nɒt kwaɪt ʃɔː jet let miː tʃek maɪ ˈʃedjuːl ænd pɪŋ juː/' }
            ]
        },
        conversation: [
          {
                    "speaker": "A",
                    "type": "practice",
                    "en": "Are you ready for the presentation?",
                    "bn": "তুমি কি প্রেজেন্টেশনের জন্য প্রস্তুত?",
                    "ipa": "/ɑː juː ˈredi fɔː ðə ˌpreznˈteɪʃn/",
                    "bn_pron": "আ ইউ রেডি ফর দা প্রেজেন্টেশন?"
          },
          {
                    "speaker": "B",
                    "type": "practice",
                    "en": "Yes, I am completely ready and confident.",
                    "bn": "হ্যাঁ, আমি পুরোপুরি প্রস্তুত এবং আত্মবিশ্বাসী।",
                    "ipa": "/jes aɪ æm kəmˈpliːtli ˈredi/",
                    "bn_pron": "ইয়েস, আই অ্যাম কমপ্লিটলি রেডি অ্যান্ড কনফিডেন্ট।"
          },
          {
                    "speaker": "A",
                    "type": "practice",
                    "en": "Is he at the office right now?",
                    "bn": "সে কি এখন অফিসে আছে?",
                    "ipa": "/ɪz hiː æt ði ˈɒfɪs raɪt naʊ/",
                    "bn_pron": "ইয হি অ্যাট দি অফিস রাইট নাও?"
          },
          {
                    "speaker": "B",
                    "type": "practice",
                    "en": "No, he isn't at the office; he is at home.",
                    "bn": "না, সে অফিসে নেই; সে বাসায় আছে।",
                    "ipa": "/nəʊ hiː ˈɪznt æt ði ˈɒfɪs/",
                    "bn_pron": "নো, হি ইযন্ট অ্যাট দি অফিস; হি ইয অ্যাট হোম।"
          },
          {
                    "speaker": "A",
                    "type": "practice",
                    "en": "Are they happy with the service?",
                    "bn": "তারা কি সার্ভিসে সন্তুষ্ট?",
                    "ipa": "/ɑː ðeɪ ˈhæpi wɪð ðə ˈsɜːvɪs/",
                    "bn_pron": "আ দেই হ্যাপি উইথ দা সার্ভিস?"
          },
          {
                    "speaker": "B",
                    "type": "practice",
                    "en": "Yes, they are very pleased with our quality.",
                    "bn": "হ্যাঁ, তারা আমাদের সার্ভিসে খুবই সন্তুষ্ট।",
                    "ipa": "/jes ðeɪ ɑː ˈveri pliːzd/",
                    "bn_pron": "ইয়েস, দেই আ ভেরি প্লীজড উইথ আওয়ার কোয়ালিটি।"
          },
          {
                    "speaker": "A",
                    "type": "real",
                    "en": "Hi Faisal! How are you doing today?",
                    "bn": "হাই ফয়সাল! আজ কেমন আছো?",
                    "ipa": "/haɪ Faisal haʊ ɑː juː ˈduːɪŋ/",
                    "bn_pron": "হাই ফয়সাল! হাউ আ ইউ ডুয়িং টুডেই?"
          },
          {
                    "speaker": "B",
                    "type": "real",
                    "en": "I am doing great, thank you! It's sunny outside.",
                    "bn": "আমি চমৎকার আছি, ধন্যবাদ! বাইরে দারুণ রোদ।",
                    "ipa": "/aɪ æm ˈduːɪŋ ɡreɪt θæŋk juː/",
                    "bn_pron": "আই অ্যাম ডুয়িং গ্রেইট, থ্যাংক ইউ!"
          },
          {
                    "speaker": "A",
                    "type": "real",
                    "en": "Are you free for a cup of tea?",
                    "bn": "এক কাপ চা খাওয়ার মতো কি অবসর আছো?",
                    "ipa": "/ɑː juː friː fɔːr ə kʌp ɒv tiː/",
                    "bn_pron": "আ ইউ ফ্রী ফর আ কাপ অফ টি?"
          },
          {
                    "speaker": "B",
                    "type": "real",
                    "en": "Yes, I am totally free! Let's go.",
                    "bn": "হ্যাঁ, আমি পুরোপুরি ফ্রি! চলো যাই।",
                    "ipa": "/jes aɪ æm ˈtəʊtəli friː lets ɡəʊ/",
                    "bn_pron": "ইয়েস, আই অ্যাম টোটালি ফ্রী! লেটস গো।"
          }
],
        sentenceBuilder: {
            subjects: ['I am', 'She is', 'They are', 'Are you', 'Why are you'],
            auxOrVerbs: ['always', 'not', 'extremely', 'really', 'proud to be'],
            complements: ['ready for the meeting', 'interested in Spoken English', 'available right now', 'happy with the results', 'worried about the exam']
        }
    },
    {
        id: 'lesson-02-past-to-be',
        lessonNumber: 2,
        title: 'Past To-Be: was / were',
        subtitle: 'অতীতের পরিচয়, গুণ, শারীরিক অবস্থা বা অবস্থান বর্ণনা',
        phase: 'to-be',
        phaseLabel: 'ভিত্তিপ্রস্তর (To-Be)',
        level: 'Beginner',
        concept: {
            explanation: 'অতীতে কোনো ব্যক্তি বা বস্তু কী ছিল, কেমন ছিল বা কোথায় ছিল বোঝাতে was এবং were ব্যবহৃত হয়। I/He/She/It/Single এর সাথে was, এবং We/You/They/Plural এর সাথে were বসে।',
            whenToUse: 'অতীত ঘটনা, মিটিংয়ে উপস্থিতি, গতকালের আবহাওয়া বা অনুভূতির কথা বলতে।',
            commonMistake: 'You-এর সাথে কখনোই was বসে না (You was wrong ❌ ➔ You were wrong ✅)। আবার was/were-কে ভুলবশত অতীতে সাধারণ কাজ বোঝাতে ব্যবহার করা যাবে না (যেমন: "I was go yesterday" ❌ ➔ "I went yesterday" ✅)।',
            formulaSummary: 'I/He/She/It + was | We/You/They + were'
        },
        transformation6Way: {
            baseConcept: 'উপস্থিত থাকা (Being present / at home)',
            positive: {
                formula: 'Subject + was/were + Extension',
                en: 'I was at home all evening yesterday.',
                bn: 'গতকাল পুরো সন্ধ্যা আমি বাড়িতেই ছিলাম।',
                ipa: '/aɪ wɒz æt həʊm ɔːl ˈiːvnɪŋ ˈjestədeɪ/'
            },
            negative: {
                formula: 'Subject + wasn\'t / weren\'t + Extension',
                en: 'I wasn\'t at home yesterday.',
                bn: 'গতকাল আমি বাড়িতে ছিলাম না।',
                ipa: '/aɪ ˈwɒznt æt həʊm ˈjestədeɪ/'
            },
            interrogative: {
                formula: 'Was/Were + Subject + Extension?',
                en: 'Were you at home yesterday?',
                bn: 'তুমি কি গতকাল বাড়িতে ছিলে?',
                ipa: '/wɜː juː æt həʊm ˈjestədeɪ/'
            },
            interroNegative: {
                formula: 'Weren\'t/Wasn\'t + Subject + Extension?',
                en: 'Weren\'t you at home yesterday?',
                bn: 'তুমি কি গতকাল বাড়িতে ছিলে না?',
                ipa: '/wɜːnt juː æt həʊm ˈjestədeɪ/'
            },
            whPositive: {
                formula: 'WH-Word + was/were + Subject + Extension?',
                en: 'Where were you yesterday evening?',
                bn: 'গতকাল সন্ধ্যায় তুমি কোথায় ছিলে?',
                ipa: '/weə wɜː juː ˈjestədeɪ ˈiːvnɪŋ/'
            },
            whNegative: {
                formula: 'WH-Word + wasn\'t/weren\'t + Subject + Extension?',
                en: 'Why weren\'t you at the team meeting?',
                bn: 'তুমি টিম মিটিংয়ে উপস্থিত ছিলে না কেন?',
                ipa: '/waɪ wɜːnt juː æt ðə tiːm ˈmiːtɪŋ/'
            }
        },
        realLifeSentences: [
            { en: 'The presentation was much better than I expected.', bn: 'উপস্থাপনাটি আমার প্রত্যাশার চেয়েও অনেক ভালো ছিল।', ipa: '/ðə ˌpreznˈteɪʃn wɒz mʌtʃ ˈbetə ðæn aɪ ɪkˈspektɪd/', context: 'অফিস বা ক্লাসের রিভিউ', type: 'positive' },
            { en: 'We weren\'t aware of the sudden schedule change.', bn: 'আমরা হঠাৎ সময়সূচি পরিবর্তনের বিষয়ে অবগত ছিলাম না।', ipa: '/wiː wɜːnt əˈweər ɒv ðə ˈsʌdn ˈʃedjuːl tʃeɪndʒ/', context: 'দেরি বা বিভ্রান্তির কৈফিয়ত', type: 'negative' },
            { en: 'Was the traffic heavy on your way here?', bn: 'এখানে আসার পথে কি প্রচুর যানজট ছিল?', ipa: '/wɒz ðə ˈtræfɪk ˈhevi ɒn jɔː weɪ hɪə/', context: 'মেহমান এলে কুশল বিনিময়', type: 'question' },
            { en: 'How was your flight to London?', bn: 'লন্ডনে আপনার বিমান ভ্রমণ কেমন ছিল?', ipa: '/haʊ wɒz jɔː flaɪt tə ˈlʌndən/', context: 'যাত্রার অভিজ্ঞতা জিজ্ঞাসা', type: 'wh' }
        ],
        nativeVariations: {
            situation: 'বলতে চাওয়া: "মিটিংটি দারুণ হয়েছিল"',
            standard: 'The meeting was very good.',
            nativeStyle: 'The meeting went really well / It was a great session.',
            waysToSay: [
                { phrasing: 'It was a huge success.', tone: 'পেশাদার ও উৎসাহী', bn: 'এটি বিরাট সফল হয়েছিল।' },
                { phrasing: 'Everything went smoothly.', tone: 'স্বাভাবিক ও মার্জিত', bn: 'সবকিছু খুব মসৃণভাবে সম্পন্ন হয়েছিল।' },
                { phrasing: 'It couldn\'t have been better.', tone: 'উচ্চ প্রশংসা', bn: 'এর চেয়ে ভালো আর হতে পারত না।' }
            ],
            tip: '💡 "were" উচ্চারণে ঠোঁট গোল করুন (/wɜː/), "হোয়ার" নয়।'
        },
        qaDrill: {
            targetQuestion: {
                en: 'Why were you absent from the class yesterday?',
                bn: 'গতকাল ক্লাসে তুমি অনুপস্থিত ছিলে কেন?',
                ipa: '/waɪ wɜː juː ˈæbsənt frɒm ðə klɑːs ˈjestədeɪ/'
            },
            possibleAnswers: [
                { style: 'সংক্ষিপ্ত সম্মতি (Short Affirmative)', en: 'I was feeling under the weather with a fever.', bn: 'আমার জ্বর হয়েছিল এবং শরীরটা ভালো ছিল না।', ipa: '/aɪ wɒz ˈfiːlɪŋ ˈʌndə ðə ˈweðə wɪð ə ˈfiːvə/' },
                { style: 'বিস্তারিত উত্তর (Elaborated)', en: 'I had an urgent family emergency to take care of.', bn: 'আমার পারিবারিক একটি জরুরি কাজ সামলাতে হয়েছিল।', ipa: '/aɪ hæd ən ˈɜːdʒənt ˈfæməli ɪˈmɜːdʒənsi tə teɪk keər ɒv/' },
                { style: 'না-বাচক উত্তর (Polite Negative)', en: 'Actually, I was present online, but my mic was muted.', bn: 'আসলে আমি অনলাইনে ছিলাম, কিন্তু মাইক মিউট করা ছিল।', ipa: '/ˈæktʃuəli aɪ wɒz ˈpreznt ˈɒnlaɪn bʌt maɪ maɪk wɒz ˈmjuːtɪd/' },
                { style: 'বিকল্প বা দ্বিধা (Alternative / Uncertainty)', en: 'I was caught in heavy rain and missed the bus.', bn: 'আমি প্রচণ্ড বৃষ্টিতে আটকে গিয়ে বাস মিস করেছিলাম।', ipa: '/aɪ wɒz kɔːt ɪn ˈhevi reɪn ænd mɪst ðə bʌs/' }
            ]
        },
        conversation: [
          {
                    "speaker": "A",
                    "type": "practice",
                    "en": "Were you tired after work yesterday?",
                    "bn": "গতকাল কাজের পর তুমি কি ক্লান্ত ছিলে?",
                    "ipa": "/wɜː juː ˈtaɪəd ˈɑːftə wɜːk/",
                    "bn_pron": "ওয়া ইউ টায়াড আফটার ওয়াক?"
          },
          {
                    "speaker": "B",
                    "type": "practice",
                    "en": "Yes, I was completely exhausted.",
                    "bn": "হ্যাঁ, আমি পুরোপুরি ক্লান্ত ছিলাম।",
                    "ipa": "/jes aɪ wɒz kəmˈpliːtli ɪɡˈzɔːstɪd/",
                    "bn_pron": "ইয়েস, আই ওয়াজ কমপ্লিটলি এক্সজস্টেড।"
          },
          {
                    "speaker": "A",
                    "type": "practice",
                    "en": "Was she present at the morning meeting?",
                    "bn": "সে কি সকালের মিটিংয়ে উপস্থিত ছিল?",
                    "ipa": "/wɒz ʃiː ˈpreznt æt ðə ˈmiːtɪŋ/",
                    "bn_pron": "ওয়াজ শি প্রেজেন্ট অ্যাট দা মিটিং?"
          },
          {
                    "speaker": "B",
                    "type": "practice",
                    "en": "No, she was stuck in traffic.",
                    "bn": "না, সে যানজটে আটকে ছিল।",
                    "ipa": "/nəʊ ʃiː wɒz stʌk ɪn ˈtræfɪk/",
                    "bn_pron": "নো, শি ওয়াজ স্টাক ইন ট্রাফিক।"
          },
          {
                    "speaker": "A",
                    "type": "real",
                    "en": "Where were you last night? I called you.",
                    "bn": "গত রাতে তুমি কোথায় ছিলে? আমি কল দিয়েছিলাম।",
                    "ipa": "/weə wɜː juː lɑːst naɪt aɪ kɔːld juː/",
                    "bn_pron": "হোয়ার ওয়া ইউ লাস্ট নাইট? আই কল্ড ইউ।"
          },
          {
                    "speaker": "B",
                    "type": "real",
                    "en": "I was at my friend's birthday party.",
                    "bn": "আমি বন্ধুর জন্মদিনের অনুষ্ঠানে ছিলাম।",
                    "ipa": "/aɪ wɒz æt maɪ frendz ˈbɜːθdeɪ ˈpɑːti/",
                    "bn_pron": "আই ওয়াজ অ্যাট মাই ফ্রেন্ডস বার্থডেই পার্টি।"
          }
],
        sentenceBuilder: {
            subjects: ['I was', 'She was', 'We were', 'Were you', 'Why was he'],
            auxOrVerbs: ['not', 'really', 'extremely', 'so', 'just'],
            complements: ['tired after work', 'late for the interview', 'pleased with the score', 'at the airport on time', 'curious about the news']
        }
    },

    // ══════════════════════════════════════════════════════════════════
    // PHASE 2: POSSESSION & EXISTENCE (মালিকানা ও অস্তিত্ব)
    // ══════════════════════════════════════════════════════════════════
    {
        id: 'lesson-03-have-has',
        lessonNumber: 3,
        title: 'Possession: have / has (Have got)',
        subtitle: 'অধিকার, মালিকানা, শারীরিক সমস্যা বা সম্পর্ক প্রকাশ',
        phase: 'have-has',
        phaseLabel: 'মালিকানা ও অস্তিত্ব (Possession)',
        level: 'Beginner',
        concept: {
            explanation: 'কাছে কোনো বস্তু থাকা, কোনো আত্মীয় বা বন্ধু থাকা, অথবা শারীরিক সমস্যা (মাথাব্যথা, সর্দি) থাকা প্রকাশ করতে have/has ব্যবহৃত হয়। ব্রিটিশ স্পোকেনে have got / has got ব্যাপক ব্যবহৃত হয়।',
            whenToUse: 'আমার একটি গাড়ি আছে (I have a car), তার মাথাব্যথা আছে (She has a headache), আমাদের অনেক সময় আছে (We have plenty of time)।',
            commonMistake: 'নেগেটিভ করার সময় ডোন্ট/ডাজন্ট হ্যাভ হয় (He doesn\'t have a car ✅, He doesn\'t has a car ❌ - doesn\'t এর পর সবসময় have হয়)।',
            formulaSummary: 'I/We/You/They + have | He/She/It + has'
        },
        transformation6Way: {
            baseConcept: 'প্রশ্ন বা সমস্যা থাকা (Having a question)',
            positive: {
                formula: 'Subject + have/has + Noun',
                en: 'I have a quick question about this topic.',
                bn: 'এই বিষয়টি নিয়ে আমার একটি ছোট প্রশ্ন আছে।',
                ipa: '/aɪ hæv ə kwɪk ˈkwestʃən əˈbaʊt ðɪs ˈtɒpɪk/'
            },
            negative: {
                formula: 'Subject + don\'t/doesn\'t have + Noun',
                en: 'I don\'t have any doubt regarding this.',
                bn: 'এই ব্যাপারে আমার কোনো সন্দেহ নেই।',
                ipa: '/aɪ dəʊnt hæv ˈeni daʊt rɪˈɡɑːdɪŋ ðɪs/'
            },
            interrogative: {
                formula: 'Do/Does + Subject + have + Noun?',
                en: 'Do you have a few minutes to talk?',
                bn: 'কথা বলার জন্য আপনার কি কয়েক মিনিট সময় হবে?',
                ipa: '/duː juː hæv ə fjuː ˈmɪnɪts tə tɔːk/'
            },
            interroNegative: {
                formula: 'Don\'t/Doesn\'t + Subject + have + Noun?',
                en: 'Don\'t you have his phone number?',
                bn: 'তোমার কাছে কি তার ফোন নম্বর নেই?',
                ipa: '/dəʊnt juː hæv hɪz fəʊn ˈnʌmbə/'
            },
            whPositive: {
                formula: 'WH-Word + do/does + Subject + have + Noun?',
                en: 'What kind of experience do you have?',
                bn: 'আপনার কী ধরনের অভিজ্ঞতা আছে?',
                ipa: '/wɒt kaɪnd ɒv ɪkˈspɪəriəns duː juː hæv/'
            },
            whNegative: {
                formula: 'Why + don\'t/doesn\'t + Subject + have + Noun?',
                en: 'Why don\'t we have enough resources?',
                bn: 'আমাদের কাছে পর্যাপ্ত সম্পদ নেই কেন?',
                ipa: '/waɪ dəʊnt wiː hæv ɪˈnʌf rɪˈsɔːsɪz/'
            }
        },
        realLifeSentences: [
            { en: 'I have a splitting headache today.', bn: 'আজ আমার প্রচণ্ড মাথাব্যথা করছে।', ipa: '/aɪ hæv ə ˈsplɪtɪŋ ˈhedeɪk təˈdeɪ/', context: 'অসুস্থতা বা ছুটির কারণ বলা', type: 'positive' },
            { en: 'We don\'t have much time before the deadline.', bn: 'ডেডলাইনের আগে আমাদের হাতে বেশি সময় নেই।', ipa: '/wiː dəʊnt hæv mʌtʃ taɪm bɪˈfɔː ðə ˈdedlaɪn/', context: 'অফিস তাড়া', type: 'negative' },
            { en: 'Do you have change for a thousand-taka note?', bn: 'আপনার কাছে এক হাজার টাকার ভাঙতি আছে কি?', ipa: '/duː juː hæv tʃeɪndʒ fɔːr ə ˈθaʊznd ˈtɑːkə nəʊt/', context: 'দোকান বা কেনাকাটা', type: 'question' },
            { en: 'How many siblings do you have?', bn: 'আপনার কয়জন ভাইবোন আছে?', ipa: '/haʊ ˈmeni ˈsɪblɪŋz duː juː hæv/', context: 'পারিবারিক আড্ডা', type: 'wh' }
        ],
        nativeVariations: {
            situation: 'বলতে চাওয়া: "আমার কাছে কোনো টাকা নেই"',
            standard: 'I do not have any money.',
            nativeStyle: 'I\'m completely broke / I don\'t have a penny on me.',
            waysToSay: [
                { phrasing: 'I\'m a bit short on cash right now.', tone: 'ভদ্র ও প্রফেশনাল', bn: 'আমার কাছে এখন নগদ টাকার কিছুটা টানাটানি।' },
                { phrasing: 'I\'m totally broke this month.', tone: 'ক্যাজুয়াল বন্ধুদের সাথে', bn: 'এই মাসে আমার পকেট পুরো ফাঁকা।' },
                { phrasing: 'I haven\'t got any spare cash.', tone: 'ব্রিটিশ কথ্য', bn: 'আমার কাছে অতিরিক্ত টাকা নেই।' }
            ],
            tip: '💡 ব্রিটিশরা প্রায়ই "I have got a car" বা সংক্ষেপে "I\'ve got a car" বলে।'
        },
        qaDrill: {
            targetQuestion: {
                en: 'Do you have any prior experience in customer service?',
                bn: 'কাস্টমার সার্ভিসে আপনার কি কোনো পূর্ব অভিজ্ঞতা আছে?',
                ipa: '/duː juː hæv ˈeni ˈpraɪər ɪkˈspɪəriəns ɪn ˈkʌstəmə ˈsɜːvɪs/'
            },
            possibleAnswers: [
                { style: 'সংক্ষিপ্ত সম্মতি (Short Affirmative)', en: 'Yes, I do. I have two years of direct experience.', bn: 'হ্যাঁ, আমার আছে। আমার দুই বছরের সরাসরি অভিজ্ঞতা আছে।', ipa: '/jes aɪ duː aɪ hæv tuː jɪəz ɒv daɪˈrekt ɪkˈspɪəriəns/' },
                { style: 'বিস্তারিত উত্তর (Elaborated)', en: 'I have managed client communication at an international tech firm.', bn: 'আমি একটি আন্তর্জাতিক প্রযুক্তি প্রতিষ্ঠানে ক্লায়েন্ট যোগাযোগ পরিচালনা করেছি।', ipa: '/aɪ hæv ˈmænɪdʒd ˈklaɪənt kəˌmjuːnɪˈkeɪʃn æt ən ˌɪntəˈnæʃnəl tek fɜːm/' },
                { style: 'না-বাচক উত্তর (Polite Negative)', en: 'I don\'t have formal experience, but I\'m a quick learner.', bn: 'আমার আনুষ্ঠানিক অভিজ্ঞতা নেই, তবে আমি খুব দ্রুত শিখতে পারি।', ipa: '/aɪ dəʊnt hæv ˈfɔːml ɪkˈspɪəriəns bʌt aɪm ə kwɪk ˈlɜːnə/' },
                { style: 'বিকল্প বা দ্বিধা (Alternative / Uncertainty)', en: 'I have relevant volunteering experience organizing youth events.', bn: 'তরুণদের ইভেন্ট আয়োজনে আমার প্রাসঙ্গিক ভলান্টিয়ারিং অভিজ্ঞতা আছে।', ipa: '/aɪ hæv ˈreləvənt ˌvɒlənˈtɪərɪŋ ɪkˈspɪəriəns ˈɔːɡənaɪzɪŋ juːθ ɪˈvents/' }
            ]
        },
        conversation: [
          {
                    "speaker": "A",
                    "type": "practice",
                    "en": "Do you have a pen I can borrow?",
                    "bn": "তোমার কাছে কি একটি কলম আছে যা আমি ধার নিতে পারি?",
                    "ipa": "/duː juː hæv ə pen aɪ kæn ˈbɒrəʊ/",
                    "bn_pron": "ডু ইউ হ্যাভ আ পেন আই ক্যান বরো?"
          },
          {
                    "speaker": "B",
                    "type": "practice",
                    "en": "Yes, I have an extra blue pen in my pocket.",
                    "bn": "হ্যাঁ, আমার পকেটে অতিরিক্ত একটি নীল কলম আছে।",
                    "ipa": "/jes aɪ hæv ən ˈekstrə bluː pen/",
                    "bn_pron": "ইয়েস, আই হ্যাভ অ্যান এক্সট্রা ব্লু পেন।"
          },
          {
                    "speaker": "A",
                    "type": "practice",
                    "en": "Does he have a valid driver's license?",
                    "bn": "তার কি বৈধ ড্রাইভিং লাইসেন্স আছে?",
                    "ipa": "/dʌz hiː hæv ə ˈvælɪd ˈdraɪvəz ˈlaɪsns/",
                    "bn_pron": "ডায হি হ্যাভ আ ভ্যালিড ড্রাইভারস লাইসেন্স?"
          },
          {
                    "speaker": "B",
                    "type": "practice",
                    "en": "No, he doesn't have one yet; he is practicing.",
                    "bn": "না, এখনো নেই; সে ড্রাইভ শেখার প্র্যাকটিস করছে।",
                    "ipa": "/nəʊ hiː ˈdʌznt hæv wʌn jet/",
                    "bn_pron": "নো, হি ডাযন্ট হ্যাভ ওয়ান ইয়েট।"
          },
          {
                    "speaker": "A",
                    "type": "real",
                    "en": "Do you have any plans for tonight?",
                    "bn": "আজ রাতে তোমার কি কোনো পরিকল্পনা আছে?",
                    "ipa": "/duː juː hæv ˈeni plænz fɔː təˈnaɪt/",
                    "bn_pron": "ডু ইউ হ্যাভ এনি প্ল্যানস ফর টুনাট?"
          },
          {
                    "speaker": "B",
                    "type": "real",
                    "en": "I have an urgent project to finish by midnight.",
                    "bn": "মধ্যরাতের আগেই আমাকে একটি জরুরি কাজ শেষ করতে হবে।",
                    "ipa": "/aɪ hæv ən ˈɜːdʒənt ˈprɒdʒekt tə ˈfɪnɪʃ/",
                    "bn_pron": "আই হ্যাভ অ্যান আর্জেন্ট প্রজেক্ট টু ফিনিশ।"
          }
],
        sentenceBuilder: {
            subjects: ['I have', 'She has', 'Do you have', 'We don\'t have', 'Why do you have'],
            auxOrVerbs: ['got', 'enough', 'no', 'a lot of', 'any'],
            complements: ['time to explain', 'confidence in speaking', 'ideas for the project', 'patience with beginners', 'interest in English learning']
        }
    },
    {
        id: 'lesson-04-there-is-are',
        lessonNumber: 4,
        title: 'Existence: There is / There are',
        subtitle: 'কোথাও কোনো কিছু থাকা বা বিদ্যমান থাকা নির্দেশক স্ট্রাকচার',
        phase: 'have-has',
        phaseLabel: 'মালিকানা ও অস্তিত্ব (Possession)',
        level: 'Beginner',
        concept: {
            explanation: 'কোনো নির্দিষ্ট স্থানে কোনো ব্যক্তি বা বস্তুর অস্তিত্ব (আসে/আছেন) বোঝাতে "There is" (একবচনে) এবং "There are" (বহুবচনে) দিয়ে বাক্য শুরু হয়। যেমন: টেবিলে একটি বই আছে = There is a book on the table.',
            whenToUse: 'রুমের জিনিসপত্র, শহরের সুযোগ-সুবিধা, কোনো সমস্যা বা সমাধান আছে কি না বোঝাতে।',
            commonMistake: 'বাঙালিরা প্রায়ই ভুল করে বলে "In the room has a chair" ❌! বাংলায় "রুমে একটি চেয়ার আছে" হলেও ইংরেজিতে বলতে হবে: "There is a chair in the room" ✅।',
            formulaSummary: 'There is + Singular / Uncountable | There are + Plural'
        },
        transformation6Way: {
            baseConcept: 'সমস্যা বা ত্রুটি থাকা (Existence of a problem)',
            positive: {
                formula: 'There is/are + Noun + Location/Extension',
                en: 'There is a simple solution to this issue.',
                bn: 'এই সমস্যাটির একটি সহজ সমাধান রয়েছে।',
                ipa: '/ðeər ɪz ə ˈsɪmpl səˈluːʃn tə ðɪs ˈɪʃuː/'
            },
            negative: {
                formula: 'There isn\'t/aren\'t + any + Noun (বা There is no...)',
                en: 'There is no doubt about your potential.',
                bn: 'আপনার মেধা ও সম্ভাবনা নিয়ে কোনো সন্দেহ নেই।',
                ipa: '/ðeər ɪz nəʊ daʊt əˈbaʊt jɔː pəˈtenʃl/'
            },
            interrogative: {
                formula: 'Is/Are there + any + Noun + Extension?',
                en: 'Is there any vacancy available right now?',
                bn: 'এই মুহূর্তে কি কোনো পদ খালি আছে?',
                ipa: '/ɪz ðeər ˈeni ˈveɪkənsi əˈveɪləbl raɪt naʊ/'
            },
            interroNegative: {
                formula: 'Isn\'t/Aren\'t there + Noun + Extension?',
                en: 'Isn\'t there another alternative route?',
                bn: 'যাওয়ার কি আর কোনো বিকল্প রাস্তা নেই?',
                ipa: '/ˈɪznt ðeər əˈnʌðər ɔːlˈtɜːnətɪv ruːt/'
            },
            whPositive: {
                formula: 'How many/much + Noun + is/are there + Extension?',
                en: 'How many students are there in this batch?',
                bn: 'এই ব্যাচে কতজন শিক্ষার্থী আছেন?',
                ipa: '/haʊ ˈmeni ˈstjuːdnts ɑː ðeər ɪn ðɪs bætʃ/'
            },
            whNegative: {
                formula: 'Why isn\'t/aren\'t there + Noun + Extension?',
                en: 'Why isn\'t there any drinking water here?',
                bn: 'এখানে কোনো খাবার পানি নেই কেন?',
                ipa: '/waɪ ˈɪznt ðeər ˈeni ˈdrɪŋkɪŋ ˈwɔːtə hɪə/'
            }
        },
        realLifeSentences: [
            { en: 'There is a great coffee shop just around the corner.', bn: 'মোড়ের মাথায় ঠিক কাছেই একটা চমৎকার কফি শপ আছে।', ipa: '/ðeər ɪz ə ɡreɪt ˈkɒfi ʃɒp dʒʌst əˈraʊnd ðə ˈkɔːnə/', context: 'কাউকে দিকনির্দেশনা দেওয়া', type: 'positive' },
            { en: 'There are plenty of opportunities for skilled speakers.', bn: 'দক্ষ বক্তাদের জন্য প্রচুর সুযোগ রয়েছে।', ipa: '/ðeər ɑː ˈplenti ɒv ˌɒpəˈtjuːnətiz fɔː skɪld ˈspiːkəz/', context: 'উৎসাহব্যঞ্জক ক্যারিয়ার কথা', type: 'positive' },
            { en: 'Is there any problem with the sound quality?', bn: 'সাউন্ডের কোয়ালিটিতে কি কোনো সমস্যা হচ্ছে?', ipa: '/ɪz ðeər ˈeni ˈprɒbləm wɪð ðə saʊnd ˈkwɒləti/', context: 'অনলাইন মিটিং বা ফোন কল', type: 'question' },
            { en: 'There wasn\'t enough time to review every slide.', bn: 'প্রতিটি স্লাইড দেখার মতো পর্যাপ্ত সময় ছিল না।', ipa: '/ðeə ˈwɒznt ɪˈnʌf taɪm tə rɪˈvjuː ˈevri slaɪd/', context: 'প্রেজেন্টেশনের পর ব্যাখ্যা', type: 'negative' }
        ],
        nativeVariations: {
            situation: 'বলতে চাওয়া: "এখানে অনেক উপায় আছে"',
            standard: 'There are many ways to do this.',
            nativeStyle: 'There\'s a ton of ways / There\'s no shortage of options.',
            waysToSay: [
                { phrasing: 'There\'s plenty of room for improvement.', tone: 'পেশাদার পরামর্শ', bn: 'উন্নতির এখনো প্রচুর সুযোগ রয়েছে।' },
                { phrasing: 'There\'s no way around it.', tone: 'ইডিয়াম্যাটিক', bn: 'এ ছাড়া আর কোনো উপায় নেই।' },
                { phrasing: 'There is something fishy going on.', tone: 'ক্যাজুয়াল এক্সপ্রেশন', bn: 'এখানে সন্দেহজনক কিছু একটা ঘটছে।' }
            ],
            tip: '💡 নেটিভ স্পিকাররা কথ্য ভাষায় "There is" কে দ্রুত "There\'s" (/ðeəz/) বলেন।'
        },
        qaDrill: {
            targetQuestion: {
                en: 'Is there an ATM booth near this shopping mall?',
                bn: 'এই শপিং মলের কাছে কি কোনো এটিএম বুথ আছে?',
                ipa: '/ɪz ðeər ən ˌeɪ tiː ˈem buːð nɪə ðɪs ˈʃɒpɪŋ mɔːl/'
            },
            possibleAnswers: [
                { style: 'সংক্ষিপ্ত সম্মতি (Short Affirmative)', en: 'Yes, there is one right next to the main entrance.', bn: 'হ্যাঁ, প্রধান প্রবেশদ্বারের ঠিক পাশেই একটি আছে।', ipa: '/jes ðeər ɪz wʌn raɪt nekst tə ðə meɪn ˈentrəns/' },
                { style: 'বিস্তারিত উত্তর (Elaborated)', en: 'There are two booths inside on the ground floor near the elevator.', bn: 'নিচতলায় লিফটের কাছে ভেতরেই দুটি বুথ আছে।', ipa: '/ðeər ɑː tuː buːðz ɪnˈsaɪd ɒn ðə ɡraʊnd flɔː nɪə ði ˈelɪveɪtə/' },
                { style: 'না-বাচক উত্তর (Polite Negative)', en: 'No, there isn\'t any here, but you\'ll find one across the road.', bn: 'না, এখানে নেই, তবে রাস্তার ওপারে একটি পাবেন।', ipa: '/nəʊ ðeər ˈɪznt ˈeni hɪə bʌt juːl faɪnd wʌn əˈkrɒs ðə rəʊd/' },
                { style: 'বিকল্প বা দ্বিধা (Alternative / Uncertainty)', en: 'I\'m not sure, but there might be one beside the pharmacy.', bn: 'আমি নিশ্চিত নই, তবে ফার্মেসির পাশে একটা থাকতে পারে।', ipa: '/aɪm nɒt ʃɔː bʌt ðeə maɪt biː wʌn bɪˈsaɪd ðə ˈfɑːməsi/' }
            ]
        },
        conversation: [
          {
                    "speaker": "A",
                    "type": "practice",
                    "en": "Is there any problem with the connection?",
                    "bn": "কানেকশনে কি কোনো সমস্যা আছে?",
                    "ipa": "/ɪz ðeər ˈeni ˈprɒbləm wɪð ðə kəˈnekʃn/",
                    "bn_pron": "ইয দেয়ার এনি প্রবলেম উইথ দা কানেকশন?"
          },
          {
                    "speaker": "B",
                    "type": "practice",
                    "en": "No, there is no issue; the signal is strong.",
                    "bn": "না, কোনো সমস্যা নেই; সিগন্যাল বেশ শক্তিশালী।",
                    "ipa": "/nəʊ ðeər ɪz nəʊ ˈɪʃuː/",
                    "bn_pron": "নো, দেয়ার ইয নো ইস্যু।"
          },
          {
                    "speaker": "A",
                    "type": "practice",
                    "en": "Are there many people waiting in line?",
                    "bn": "লাইনে কি অনেক মানুষ অপেক্ষা করছে?",
                    "ipa": "/ɑː ðeə ˈmeni ˈpiːpl ˈweɪtɪŋ ɪn laɪn/",
                    "bn_pron": "আ দেয়ার মেনি পিপল ওয়েটিং ইন লাইন?"
          },
          {
                    "speaker": "B",
                    "type": "practice",
                    "en": "Yes, there are at least twenty people in queue.",
                    "bn": "হ্যাঁ, লাইনে কমপক্ষে বিশ জন মানুষ দাঁড়িয়ে আছে।",
                    "ipa": "/jes ðeər ɑːr æt liːst ˈtwenti ˈpiːpl/",
                    "bn_pron": "ইয়েস, দেয়ার আ অ্যাট লিস্ট টুয়েন্টি পিপল।"
          },
          {
                    "speaker": "A",
                    "type": "real",
                    "en": "Is there a good coffee shop nearby?",
                    "bn": "কাছে কি কোনো ভালো কফি শপ আছে?",
                    "ipa": "/ɪz ðeər ə ɡʊd ˈkɒfi ʃɒp ˌnɪəˈbaɪ/",
                    "bn_pron": "ইয দেয়ার আ গুড কফি শপ নিয়ারবাই?"
          },
          {
                    "speaker": "B",
                    "type": "real",
                    "en": "Yes, there is a fantastic cafe around the corner.",
                    "bn": "হ্যাঁ, ঠিক মোড়ের কাছেই একটি চমৎকার ক্যাফে আছে।",
                    "ipa": "/jes ðeər ɪz ə fænˈtæstɪk ˈkæfeɪ/",
                    "bn_pron": "ইয়েস, দেয়ার ইয আ ফ্যান্টাস্টিক ক্যাফে।"
          }
],
        sentenceBuilder: {
            subjects: ['There is', 'There are', 'Is there', 'There was', 'Why is there'],
            auxOrVerbs: ['always', 'no', 'a few', 'plenty of', 'hardly any'],
            complements: ['time left to prepare', 'people waiting outside', 'reason to worry', 'options on the menu', 'room for doubt']
        }
    },

    // ══════════════════════════════════════════════════════════════════
    // PHASE 3: ACTION TENSES FOR DAILY CONVERSATION
    // ══════════════════════════════════════════════════════════════════
    {
        id: 'lesson-05-present-simple',
        lessonNumber: 5,
        title: 'Present Simple: Routine & Habits',
        subtitle: 'দৈনন্দিন রুটিন, চিরন্তন সত্য, অভ্যাস ও পেশা সম্পর্কিত কথা',
        phase: 'tenses',
        phaseLabel: 'কার্যকাল ও টেন্স (Daily Action Tenses)',
        level: 'Elementary',
        concept: {
            explanation: 'প্রতিদিন বা নিয়মিত যা ঘটে, অভ্যাসগত কাজ, বা চিরন্তন সত্য বোঝাতে Present Simple ব্যবহৃত হয়। He/She/It (৩য় পুরুষ একবচন) হলে Verb-এর শেষে s/es যোগ হয়। প্রশ্ন ও না-বোধক করতে Do / Does সাহায্যকারী ভার্ব হিসেবে আসে।',
            whenToUse: 'ঘুম থেকে ওঠা, অফিসে যাওয়া, পছন্দ-অপছন্দ (I like tea), সাধারণ তথ্য দিতে।',
            commonMistake: 'নেগেটিভ বা প্রশ্নে does আসলে মূল ভার্ব থেকে s/es উঠে যায় (He doesn\'t knows ❌ ➔ He doesn\'t know ✅)। Does he plays? ❌ ➔ Does he play? ✅।',
            formulaSummary: 'I/We/You/They + V1 | He/She/It + V1(s/es) | Do/Does in ? & -'
        },
        transformation6Way: {
            baseConcept: 'ইংরেজি চর্চা করা (Practicing English)',
            positive: {
                formula: 'Subject + V1(s/es) + Extension',
                en: 'She practices spoken English every single morning.',
                bn: 'সে প্রতিদিন সকালে স্পোকেন ইংলিশ অনুশীলন করে।',
                ipa: '/ʃiː ˈpræktɪsɪz ˈspəʊkən ˈɪŋɡlɪʃ ˈevri ˈsɪŋɡl ˈmɔːnɪŋ/'
            },
            negative: {
                formula: 'Subject + don\'t/doesn\'t + V1 + Extension',
                en: 'She doesn\'t practice spoken English on weekends.',
                bn: 'সে ছুটির দিনে স্পোকেন ইংলিশ অনুশীলন করে না।',
                ipa: '/ʃiː ˈdʌznt ˈpræktɪs ˈspəʊkən ˈɪŋɡlɪʃ ɒn ˌwiːkˈendz/'
            },
            interrogative: {
                formula: 'Do/Does + Subject + V1 + Extension?',
                en: 'Does she practice spoken English every morning?',
                bn: 'সে কি প্রতিদিন সকালে স্পোকেন ইংলিশ অনুশীলন করে?',
                ipa: '/dʌz ʃiː ˈpræktɪs ˈspəʊkən ˈɪŋɡlɪʃ ˈevri ˈmɔːnɪŋ/'
            },
            interroNegative: {
                formula: 'Don\'t/Doesn\'t + Subject + V1 + Extension?',
                en: 'Doesn\'t she practice spoken English regularly?',
                bn: 'সে কি নিয়মিত স্পোকেন ইংলিশ অনুশীলন করে না?',
                ipa: '/ˈdʌznt ʃiː ˈpræktɪs ˈspəʊkən ˈɪŋɡlɪʃ ˈreɡjələli/'
            },
            whPositive: {
                formula: 'WH-Word + do/does + Subject + V1 + Extension?',
                en: 'How often does she practice spoken English?',
                bn: 'সে কত ঘন ঘন স্পোকেন ইংলিশ অনুশীলন করে?',
                ipa: '/haʊ ˈɒfn dʌz ʃiː ˈpræktɪs ˈspəʊkən ˈɪŋɡlɪʃ/'
            },
            whNegative: {
                formula: 'Why + don\'t/doesn\'t + Subject + V1 + Extension?',
                en: 'Why doesn\'t she join our evening discussion club?',
                bn: 'সে আমাদের সান্ধ্যকালীন ডিসকাশন ক্লাবে যোগ দেয় না কেন?',
                ipa: '/waɪ ˈdʌznt ʃiː dʒɔɪn ˈaʊər ˈiːvnɪŋ dɪˈskʌʃn klʌb/'
            }
        },
        realLifeSentences: [
            { en: 'I commute to work by public bus every morning.', bn: 'আমি প্রতিদিন সকালে বাসে করে কর্মস্থলে যাই।', ipa: '/aɪ kəˈmjuːt tə wɜːk baɪ ˈpʌblɪk bʌs ˈevri ˈmɔːnɪŋ/', context: 'ডেইলি রুটিনের বর্ণনা', type: 'positive' },
            { en: 'He rarely drinks tea or coffee after sunset.', bn: 'সূর্যাস্তের পর সে কদাচিৎ চা বা কফি পান করে।', ipa: '/hiː ˈreəli drɪŋks tiː ɔː ˈkɒfi ˈɑːftə ˈsʌnset/', context: 'অভ্যাস বর্ণনা', type: 'positive' },
            { en: 'Do you work from home or commute to the office?', bn: 'আপনি কি বাসা থেকে কাজ করেন নাকি অফিসে যান?', ipa: '/duː juː wɜːk frɒm həʊm ɔː kəˈmjuːt tə ði ˈɒfɪs/', context: 'চাকরি সম্পর্কিত কথোপকথন', type: 'question' },
            { en: 'What do you usually do in your leisure time?', bn: 'অবসর সময়ে আপনি সাধারণত কী করেন?', ipa: '/wɒt duː juː ˈjuːʒuəli duː ɪn jɔː ˈleʒə taɪm/', context: 'আইইএলটিএস স্পিকিং পার্ট ১', type: 'wh' }
        ],
        nativeVariations: {
            situation: 'বলতে চাওয়া: "আমি পুরোপুরি একমত"',
            standard: 'I agree with you completely.',
            nativeStyle: 'I couldn\'t agree more / You took the words right out of my mouth.',
            waysToSay: [
                { phrasing: 'I couldn\'t agree more.', tone: 'অত্যন্ত মার্জিত ও জোরালো', bn: 'আমি আপনার সাথে পুরোপুরি একমত।' },
                { phrasing: 'You can say that again!', tone: 'ক্যাজুয়াল ও অনর্গল', bn: 'একদম খাঁটি কথা বলেছেন!' },
                { phrasing: 'Spot on! That\'s exactly how I see it.', tone: 'নেটিভ স্টাইল', bn: 'একেবারে নির্ভুল! আমিও ঠিক তাই ভাবছি।' }
            ],
            tip: '💡 "Do you" দ্রুত বলার সময় নেটিভরা প্রায়ই "D\'you" বা "Dya" (/djə/) উচ্চারণ করেন।'
        },
        qaDrill: {
            targetQuestion: {
                en: 'What do you do for a living?',
                bn: 'জীবিকার জন্য আপনি কী করেন? (পেশা কী?)',
                ipa: '/wɒt duː juː duː fɔːr ə ˈlɪvɪŋ/'
            },
            possibleAnswers: [
                { style: 'সংক্ষিপ্ত সম্মতি (Short Affirmative)', en: 'I work as a software engineer at a local startup.', bn: 'আমি একটি লোকাল স্টার্টআপে সফটওয়্যার ইঞ্জিনিয়ার হিসেবে কাজ করি।', ipa: '/aɪ wɜːk æz ə ˈsɒftweər ˌendʒɪˈnɪər æt ə ˈləʊkl ˈstɑːtʌp/' },
                { style: 'বিস্তারিত উত্তর (Elaborated)', en: 'I run my own digital marketing consultancy assisting small businesses.', bn: 'ক্ষুদ্র ব্যবসায়ীদের সাহায্য করতে আমি নিজস্ব ডিজিটাল মার্কেটিং কনসালটেন্সি পরিচালনা করি।', ipa: '/aɪ rʌn maɪ əʊn ˈdɪdʒɪtl ˈmɑːkɪtɪŋ kənˈsʌltənsi əˈsɪstɪŋ smɔːl ˈbɪznɪsɪz/' },
                { style: 'না-বাচক উত্তর (Polite Negative)', en: 'Currently I\'m in between jobs and preparing for IELTS.', bn: 'বর্তমানে আমি চাকরি খুঁজছি এবং আইইএলটিএস পরীক্ষার প্রস্তুতি নিচ্ছি।', ipa: '/ˈkʌrəntli aɪm ɪn bɪˈtwiːn dʒɒbz ænd prɪˈpeərɪŋ fɔːr ˈaɪelts/' },
                { style: 'বিকল্প বা দ্বিধা (Alternative / Uncertainty)', en: 'I\'m a full-time university student majoring in finance.', bn: 'আমি বিশ্ববিদ্যালয়ের ফিন্যান্স ডিপার্টমেন্টের একজন ফুল-টাইম শিক্ষার্থী।', ipa: '/aɪm ə ˈfʊltaɪm ˌjuːnɪˈvɜːsəti ˈstjuːdnt ˈmeɪdʒərɪŋ ɪn faɪˈnæns/' }
            ]
        },
        conversation: [
          {
                    "speaker": "A",
                    "type": "practice",
                    "en": "Do you drink tea or coffee in the morning?",
                    "bn": "সকালে তুমি চা খাও নাকি কফি?",
                    "ipa": "/duː juː drɪŋk tiː ɔː ˈkɒfi/",
                    "bn_pron": "ডু ইউ ড্রিংক টি অর কফি?"
          },
          {
                    "speaker": "B",
                    "type": "practice",
                    "en": "I always drink a cup of black tea.",
                    "bn": "আমি সবসময় এক কাপ ব্ল্যাক টি খাই।",
                    "ipa": "/aɪ ˈɔːlweɪz drɪŋk ə kʌp ɒv blæk tiː/",
                    "bn_pron": "আই অলওয়েজ ড্রিংক আ কাপ অফ ব্ল্যাক টি।"
          },
          {
                    "speaker": "A",
                    "type": "practice",
                    "en": "Does your sister work at a bank?",
                    "bn": "তোমার বোন কি ব্যাংকে কাজ করে?",
                    "ipa": "/dʌz jɔː ˈsɪstə wɜːk æt ə bæŋk/",
                    "bn_pron": "ডায ইয়োর সিস্টার ওয়াক অ্যাট আ ব্যাংক?"
          },
          {
                    "speaker": "B",
                    "type": "practice",
                    "en": "No, she teaches English at a college.",
                    "bn": "না, সে কলেজে ইংরেজি পড়ায়।",
                    "ipa": "/nəʊ ʃiː ˈtiːtʃɪz ˈɪŋɡlɪʃ æt ə ˈkɒlɪdʒ/",
                    "bn_pron": "নো, শি টিচেস ইংলিশ অ্যাট আ কলেজ।"
          },
          {
                    "speaker": "A",
                    "type": "real",
                    "en": "What do you do on weekends?",
                    "bn": "ছুটির দিনে তুমি কী করো?",
                    "ipa": "/wɒt duː juː duː ɒn ˌwiːkˈendz/",
                    "bn_pron": "ওয়াট ডু ইউ ডু অন উইকএন্ডস?"
          },
          {
                    "speaker": "B",
                    "type": "real",
                    "en": "I usually read books and play games.",
                    "bn": "আমি সাধারণত বই পড়ি আর গেম খেলি।",
                    "ipa": "/aɪ ˈjuːʒʊəli riːd bʊks ænd pleɪ ɡeɪmz/",
                    "bn_pron": "আই ইউজুয়ালি রীড বুকস অ্যান্ড প্লেই গেইময।"
          }
],
        sentenceBuilder: {
            subjects: ['I usually', 'She always', 'They never', 'Do you often', 'Why does he'],
            auxOrVerbs: ['wake up', 'listen to', 'practice', 'read', 'speak'],
            complements: ['early in the morning', 'English podcasts', 'speaking with a partner', 'books on self-development', 'fluently in public']
        }
    },
    {
        id: 'lesson-06-present-continuous',
        lessonNumber: 6,
        title: 'Present Continuous: Right Now',
        subtitle: 'চোখের সামনে এই মুহূর্তে চলমান কাজ বা সাময়িক ঘটনা',
        phase: 'tenses',
        phaseLabel: 'কার্যকাল ও টেন্স (Daily Action Tenses)',
        level: 'Elementary',
        concept: {
            explanation: 'কথা বলার মুহূর্তে কোনো কাজ চলছে বোঝাতে am/is/are + Verb(ing) ব্যবহৃত হয়। যেমন: আমি এখন রান্না করছি = I am cooking now। এছাড়াও নিকট ভবিষ্যতের নিশ্চিত পরিকল্পনা বোঝাতেও এটি ব্যবহৃত হয় (যেমন: I am flying tomorrow)।',
            whenToUse: 'বর্তমানে চলমান কাজ, ভিডিও/ফোনালাপে এই মুহূর্তে কী করছেন তা বলতে, অথবা সাময়িক পরিস্থিতি বোঝাতে।',
            commonMistake: 'অনুভূতি বা ইন্দ্রিয়গত কিছু ভার্ব (Stative Verbs যেমন: know, understand, believe, love, need) সাধারণত Continuous-এ হয় না (I am understanding you ❌ ➔ I understand you ✅, I am needing help ❌ ➔ I need help ✅)।',
            formulaSummary: 'Subject + am/is/are + Verb(ing)'
        },
        transformation6Way: {
            baseConcept: 'আইইএলটিএস প্রস্তুতি নেওয়া (Preparing for IELTS)',
            positive: {
                formula: 'Subject + am/is/are + V-ing + Extension',
                en: 'I am preparing diligently for the IELTS speaking exam.',
                bn: 'আমি মনোযোগ দিয়ে আইইএলটিএস স্পিকিং পরীক্ষার প্রস্তুতি নিচ্ছি।',
                ipa: '/aɪ æm prɪˈpeərɪŋ ˈdɪlɪdʒəntli fɔː ði ˈaɪelts ˈspiːkɪŋ ɪɡˈzæm/'
            },
            negative: {
                formula: 'Subject + am not / isn\'t / aren\'t + V-ing + Extension',
                en: 'I am not wasting my time on social media.',
                bn: 'আমি সোশ্যাল মিডিয়ায় আমার মূল্যবান সময় নষ্ট করছি না।',
                ipa: '/aɪ æm nɒt ˈweɪstɪŋ maɪ taɪm ɒn ˈsəʊʃl ˈmiːdiə/'
            },
            interrogative: {
                formula: 'Am/Is/Are + Subject + V-ing + Extension?',
                en: 'Are you listening carefully to my instructions?',
                bn: 'তুমি কি আমার নির্দেশনাগুলো মনোযোগ দিয়ে শুনছ?',
                ipa: '/ɑː juː ˈlɪsnɪŋ ˈkeəfəli tə maɪ ɪnˈstrʌkʃnz/'
            },
            interroNegative: {
                formula: 'Aren\'t/Isn\'t + Subject + V-ing + Extension?',
                en: 'Aren\'t you coming to the seminar tonight?',
                bn: 'তুমি কি আজ রাতের সেমিনারে আসছ না?',
                ipa: '/ɑːnt juː ˈkʌmɪŋ tə ðə ˈsemɪnɑː təˈnaɪt/'
            },
            whPositive: {
                formula: 'WH-Word + am/is/are + Subject + V-ing + Extension?',
                en: 'What are you working on these days?',
                bn: 'আজকাল তুমি কী কাজ নিয়ে ব্যস্ত আছ?',
                ipa: '/wɒt ɑː juː ˈwɜːkɪŋ ɒn ðiːz deɪz/'
            },
            whNegative: {
                formula: 'Why + aren\'t/isn\'t + Subject + V-ing + Extension?',
                en: 'Why aren\'t you speaking in English with your partner?',
                bn: 'তুমি তোমার পার্টনারের সাথে ইংরেজিতে কথা বলছ না কেন?',
                ipa: '/waɪ ɑːnt juː ˈspiːkɪŋ ɪn ˈɪŋɡlɪʃ wɪð jɔː ˈpɑːtnə/'
            }
        },
        realLifeSentences: [
            { en: 'I am heading out for lunch, care to join me?', bn: 'আমি দুপুরের খাবারের জন্য বের হচ্ছি, সাথে আসবেন?', ipa: '/aɪ æm ˈhedɪŋ aʊt fɔː lʌntʃ keə tə dʒɔɪn miː/', context: 'অফিসে সহকর্মীকে আমন্ত্রণ', type: 'positive' },
            { en: 'He is giving an important presentation right now.', bn: 'তিনি ঠিক এই মুহূর্তে একটি গুরুত্বপূর্ণ প্রেজেন্টেশন দিচ্ছেন।', ipa: '/hiː ɪz ˈɡɪvɪŋ ən ɪmˈpɔːtnt ˌpreznˈteɪʃn raɪt naʊ/', context: 'কারো ব্যস্ততা জানানো', type: 'positive' },
            { en: 'Are you expecting any visitors this afternoon?', bn: 'আজ বিকেলে আপনার কোনো মেহমান আসার কথা আছে কি?', ipa: '/ɑː juː ɪkˈspektɪŋ ˈeni ˈvɪzɪtəz ðɪs ˌɑːftəˈnuːn/', context: 'শিডিউল সমন্বয়', type: 'question' },
            { en: 'Why are you smiling so mysteriously?', bn: 'তুমি এত রহস্যময়ভাবে হাসছ কেন?', ipa: '/waɪ ɑː juː ˈsmaɪlɪŋ səʊ mɪˈstɪəriəsli/', context: 'বন্ধুত্বপূর্ণ আড্ডা', type: 'wh' }
        ],
        nativeVariations: {
            situation: 'বলতে চাওয়া: "আমি রওনা হচ্ছি"',
            standard: 'I am leaving now.',
            nativeStyle: 'I\'m heading out / I\'m on my way.',
            waysToSay: [
                { phrasing: 'I\'m about to take off.', tone: 'ক্যাজুয়াল ও স্মার্ট', bn: 'আমি এখনই বের হচ্ছি।' },
                { phrasing: 'I\'m on my way right now.', tone: 'সর্বাধিক জনপ্রিয়', bn: 'আমি এই পথেই আছি, আসছি।' },
                { phrasing: 'I\'ve gotta hit the road.', tone: 'আমেরিকান কথ্য', bn: 'আমাকে এবার রওনা দিতে হবে।' }
            ],
            tip: '💡 "going to" কে স্পোকেন ইংরেজিতে প্রায়ই "gonna" (/ˈɡənə/) বলা হয়।'
        },
        qaDrill: {
            targetQuestion: {
                en: 'Are you still looking for a new apartment?',
                bn: 'তুমি কি এখনো নতুন বাসা খুঁজছ?',
                ipa: '/ɑː juː stɪl ˈlʊkɪŋ fɔːr ə njuː əˈpɑːtmənt/'
            },
            possibleAnswers: [
                { style: 'সংক্ষিপ্ত সম্মতি (Short Affirmative)', en: 'Yes, I am. Rent prices are skyrocketing everywhere.', bn: 'হ্যাঁ খুঁজছি। সব জায়গায় বাড়িভাড়া আকাশচুম্বী হয়ে গেছে।', ipa: '/jes aɪ æm rent ˈpraɪsɪz ɑː ˈskaɪˌrɒkɪtɪŋ ˈevriweə/' },
                { style: 'বিস্তারিত উত্তর (Elaborated)', en: 'I am viewing three flats tomorrow near the metro station.', bn: 'মেট্রো স্টেশনের কাছে আগামীকাল তিনটি ফ্ল্যাট দেখতে যাচ্ছি।', ipa: '/aɪ æm ˈvjuːɪŋ θriː flæts təˈmɒrəʊ nɪə ðə ˈmetrəʊ ˈsteɪʃn/' },
                { style: 'না-বাচক উত্তর (Polite Negative)', en: 'No, I\'ve already found a cozy place in Uttara.', bn: 'না, আমি উত্তরাতেই ইতোমধ্যে একটি চমৎকার বাসা পেয়ে গেছি।', ipa: '/nəʊ aɪv ɔːlˈredi faʊnd ə ˈkəʊzi pleɪs ɪn ʊttara/' },
                { style: 'বিকল্প বা দ্বিধা (Alternative / Uncertainty)', en: 'I\'m pausing my search until next month due to exams.', bn: 'পরীক্ষার কারণে আগামী মাস পর্যন্ত খোঁজাখুঁজি বন্ধ রাখছি।', ipa: '/aɪm ˈpɔːzɪŋ maɪ sɜːtʃ ənˈtɪl nekst mʌnθ djuː tə ɪɡˈzæmz/' }
            ]
        },
        conversation: [
          {
                    "speaker": "A",
                    "type": "practice",
                    "en": "Do you practice this spoken structure daily?",
                    "bn": "তুমি কি প্রতিদিন এই স্পোকেন স্ট্রাকচারটি চর্চা করো?",
                    "ipa": "/duː juː ˈpræktɪs ðɪs ˈspəʊkən ˈstrʌktʃə ˈdeɪli/",
                    "bn_pron": "ডু ইউ প্র্যাকটিস দিস স্পোকেন স্ট্রাকচার ডেইলি?"
          },
          {
                    "speaker": "B",
                    "type": "practice",
                    "en": "Yes, I practice it aloud for fifteen minutes every day.",
                    "bn": "হ্যাঁ, আমি প্রতিদিন পনের মিনিট এটি জোরে জোরে মুখে বলি।",
                    "ipa": "/jes aɪ ˈpræktɪs ɪt əˈlaʊd/",
                    "bn_pron": "ইয়েস, আই প্র্যাকটিস ইট অ্যালাউড ফর ফিফটিন মিনিটস।"
          },
          {
                    "speaker": "A",
                    "type": "practice",
                    "en": "Does it help improve your fluency and speed?",
                    "bn": "এটি কি তোমার ফ্লুয়েন্সি ও গতি বাড়াতে সাহায্য করে?",
                    "ipa": "/dʌz ɪt help ɪmˈpruːv jɔː ˈfluːənsi/",
                    "bn_pron": "ডায ইট হেল্প ইমপ্রুভ ইয়োর ফ্লুয়েন্সি?"
          },
          {
                    "speaker": "B",
                    "type": "practice",
                    "en": "Definitely! I can now speak naturally without thinking of rules.",
                    "bn": "অবশ্যই! এখন নিয়ম না ভেবেই মুখে স্বতঃস্ফূর্তভাবে বাক্য আসে।",
                    "ipa": "/ˈdefɪnətli aɪ kæn naʊ spiːk ˈnætʃrəli/",
                    "bn_pron": "ডেফিনেটলি! আই ক্যান নাও স্পীক ন্যাচারালি।"
          },
          {
                    "speaker": "A",
                    "type": "real",
                    "en": "Could we practice conversation together every evening?",
                    "bn": "আমরা কি প্রতিদিন সন্ধ্যায় একসাথে স্পোকেন প্র্যাকটিস করতে পারি?",
                    "ipa": "/kʊd wiː ˈpræktɪs ˌkɒnvəˈseɪʃn təˈɡeðə/",
                    "bn_pron": "কুড উই প্র্যাকটিস কনভারসেশন টুগেদার?"
          },
          {
                    "speaker": "B",
                    "type": "real",
                    "en": "That would be wonderful! Let's start from tomorrow.",
                    "bn": "দারুণ হবে! চলো কাল থেকেই শুরু করা যাক।",
                    "ipa": "/ðæt wʊd biː ˈwʌndəfl lets stɑːt frɒm təˈmɒrəʊ/",
                    "bn_pron": "দ্যাট উড বি ওয়ান্ডারফুল! লেটস স্টার্ট ফ্রম টুমরো।"
          }
],
        sentenceBuilder: {
            subjects: ['I am currently', 'She is', 'They are', 'Are you', 'Why are you'],
            auxOrVerbs: ['trying to', 'planning to', 'listening to', 'working on', 'looking for'],
            complements: ['improve my accent', 'switch career paths', 'a suitable solution', 'the latest podcast', 'expand business abroad']
        }
    },
    {
        id: 'lesson-07-past-simple',
        lessonNumber: 7,
        title: 'Past Simple: Finished Events',
        subtitle: 'অতীতে ঘটে যাওয়া সমাপ্ত কাজ (স্পোকেন ইংলিশের ৬০% কথোপকথন)',
        phase: 'tenses',
        phaseLabel: 'কার্যকাল ও টেন্স (Daily Action Tenses)',
        level: 'Elementary',
        concept: {
            explanation: 'অতীতে কোনো কাজ শেষ হয়ে গেছে বোঝাতে Past Simple ব্যবহৃত হয়। ইংরেজি দৈনন্দিন গল্পের অধিকাংশ বাক্যই এই টেন্সে বলা হয়। সাধারণ বাক্যে Verb-এর Past Form (V2) বসে। কিন্তু প্রশ্ন ও না-বোধক করতে Did ব্যবহৃত হয় এবং Did আসার সাথে সাথে মূল Verb-টি পুনরায় V1 হয়ে যায়!',
            whenToUse: 'গতকাল কী করলেন, গত বছর কোথায় ঘুরতে গেলেন, শৈশবের গল্প, ইন্টারভিউতে পূর্ব কাজের অভিজ্ঞতা বর্ণনা করতে।',
            commonMistake: 'সবচেয়ে বড় ভুল: Did-এর সাথে V2 ব্যবহার করা (He didn\'t went ❌ ➔ He didn\'t go ✅, Did you saw him? ❌ ➔ Did you see him? ✅)।',
            formulaSummary: 'Positive: Subject + V2 | Negative: did not + V1 | Question: Did + Subject + V1?'
        },
        transformation6Way: {
            baseConcept: 'মিটিংয়ে উপস্থিত হওয়া (Attending the meeting)',
            positive: {
                formula: 'Subject + V2 + Extension',
                en: 'I attended the orientation session yesterday.',
                bn: 'আমি গতকাল ওরিয়েন্টেশন সেশনে উপস্থিত হয়েছিলাম।',
                ipa: '/aɪ əˈtendɪd ði ˌɔːriənˈteɪʃn ˈseʃn ˈjestədeɪ/'
            },
            negative: {
                formula: 'Subject + didn\'t + V1 + Extension',
                en: 'I didn\'t receive any confirmation email.',
                bn: 'আমি কোনো কনফার্মেশন ইমেইল পাইনি।',
                ipa: '/aɪ ˈdɪdnt rɪˈsiːv ˈeni ˌkɒnfəˈmeɪʃn ˈiːmeɪl/'
            },
            interrogative: {
                formula: 'Did + Subject + V1 + Extension?',
                en: 'Did you finish your assignment on time?',
                bn: 'তুমি কি যথাসময়ে তোমার অ্যাসাইনমেন্ট শেষ করেছিলে?',
                ipa: '/dɪd juː ˈfɪnɪʃ jɔːr əˈsaɪnmənt ɒn taɪm/'
            },
            interroNegative: {
                formula: 'Didn\'t + Subject + V1 + Extension?',
                en: 'Didn\'t you notice the warning sign?',
                bn: 'তুমি কি সতর্কবার্তা চিহ্নটি লক্ষ্য করোনি?',
                ipa: '/ˈdɪdnt juː ˈnəʊtɪs ðə ˈwɔːnɪŋ saɪn/'
            },
            whPositive: {
                formula: 'WH-Word + did + Subject + V1 + Extension?',
                en: 'Where did you buy this stylish jacket?',
                bn: 'তুমি এই চমৎকার জ্যাকেটটি কোথা থেকে কিনলে?',
                ipa: '/weə dɪd juː baɪ ðɪs ˈstaɪlɪʃ ˈdʒækɪt/'
            },
            whNegative: {
                formula: 'Why + didn\'t + Subject + V1 + Extension?',
                en: 'Why didn\'t you tell me earlier?',
                bn: 'তুমি আমাকে আগে বলোনি কেন?',
                ipa: '/waɪ ˈdɪdnt juː tel miː ˈɜːliə/'
            }
        },
        realLifeSentences: [
            { en: 'I graduated from university three years ago.', bn: 'আমি তিন বছর আগে বিশ্ববিদ্যালয় থেকে পাস করেছি।', ipa: '/aɪ ˈɡrædʒueɪtɪd frɒm ˌjuːnɪˈvɜːsəti θriː jɪəz əˈɡəʊ/', context: 'ইন্টারভিউতে শিক্ষাগত যোগ্যতা বলা', type: 'positive' },
            { en: 'We spent our last vacation in Cox\'s Bazar.', bn: 'আমরা আমাদের গত ছুটি কক্সবাজারে কাটিয়েছিলাম।', ipa: '/wiː spent ˈaʊə lɑːst vəˈkeɪʃn ɪn kɒksɪz bəˈzɑː/', context: 'ভ্রমণের গল্প', type: 'positive' },
            { en: 'Did you get a chance to review my proposal?', bn: 'আমার প্রস্তাবনাটি দেখার সুযোগ কি আপনার হয়েছিল?', ipa: '/dɪd juː ɡet ə tʃɑːns tə rɪˈvjuː maɪ prəˈpəʊzl/', context: 'অফিসিয়াল ফলো-আপ', type: 'question' },
            { en: 'Why didn\'t you inform the team leader immediately?', bn: 'তুমি সাথে সাথে টিম লিডারকে বিষয়টি জানালে না কেন?', ipa: '/waɪ ˈdɪdnt juː ɪnˈfɔːm ðə tiːm ˈliːdə ɪˈmiːdiətli/', context: 'সমস্যা সমাধান', type: 'wh' }
        ],
        nativeVariations: {
            situation: 'বলতে চাওয়া: "আমি বুঝতে পেরেছি"',
            standard: 'I understood what you said.',
            nativeStyle: 'Got it! / That makes total sense.',
            waysToSay: [
                { phrasing: 'I got it, loud and clear.', tone: 'ক্যাজুয়াল ও আত্মবিশ্বাসী', bn: 'আমি একদম পরিষ্কার বুঝতে পেরেছি।' },
                { phrasing: 'That makes total sense to me.', tone: 'মার্জিত ও সম্মতিপূর্ণ', bn: 'বিষয়টি আমার কাছে পুরোপুরি বোধগম্য।' },
                { phrasing: 'Point taken.', tone: 'সংক্ষিপ্ত অফিসিয়াল', bn: 'আপনার যুক্তি আমি মেনে নিলাম।' }
            ],
            tip: '💡 "Did you" স্পোকেন ফ্লোতে প্রায়ই "Didja" (/ˈdɪdʒə/) শোনায়।'
        },
        qaDrill: {
            targetQuestion: {
                en: 'How was your weekend? Did you do anything fun?',
                bn: 'তোমার সপ্তাহান্ত কেমন কাটল? কোনো মজার কিছু করেছিলে?',
                ipa: '/haʊ wɒz jɔː ˌwiːkˈend dɪd juː duː ˈeniθɪŋ fʌn/'
            },
            possibleAnswers: [
                { style: 'সংক্ষিপ্ত সম্মতি (Short Affirmative)', en: 'It was great! I caught up with some old school buddies.', bn: 'দারুণ কেটেছে! স্কুলের পুরনো কিছু বন্ধুদের সাথে আড্ডা দিলাম।', ipa: '/ɪt wɒz ɡreɪt aɪ kɔːt ʌp wɪð sʌm əʊld skuːl ˈbʌdiz/' },
                { style: 'বিস্তারিত উত্তর (Elaborated)', en: 'I binge-watched a fantastic thriller series and cooked barbecue.', bn: 'আমি পুরো একটা থ্রিলার সিরিজ এক টানে দেখলাম আর বারবিকিউ বানালাম।', ipa: '/aɪ bɪndʒ wɒtʃt ə fænˈtæstɪk ˈθrɪlə ˈsɪəriːz ænd kʊkt ˈbɑːbɪkjuː/' },
                { style: 'না-বাচক উত্তর (Polite Negative)', en: 'Not really, I just stayed in and rested the entire time.', bn: 'তেমন কিছু না, পুরোটা সময় ঘরেই ছিলাম আর বিশ্রাম নিয়েছি।', ipa: '/nɒt ˈrɪəli aɪ dʒʌst steɪd ɪn ænd ˈrestɪd ði ɪnˈtaɪə taɪm/' },
                { style: 'বিকল্প বা দ্বিধা (Alternative / Uncertainty)', en: 'I had to work overtime on Saturday, so it flew by quickly.', bn: 'শনিবার আমাকে ওভারটাইম করতে হয়েছিল, তাই সময়টা খুব দ্রুত চলে গেল।', ipa: '/aɪ hæd tə wɜːk ˈəʊvətaɪm ɒn ˈsætədeɪ səʊ ɪt fluː baɪ ˈkwɪkli/' }
            ]
        },
        conversation: [
          {
                    "speaker": "A",
                    "type": "practice",
                    "en": "Do you practice this spoken structure daily?",
                    "bn": "তুমি কি প্রতিদিন এই স্পোকেন স্ট্রাকচারটি চর্চা করো?",
                    "ipa": "/duː juː ˈpræktɪs ðɪs ˈspəʊkən ˈstrʌktʃə ˈdeɪli/",
                    "bn_pron": "ডু ইউ প্র্যাকটিস দিস স্পোকেন স্ট্রাকচার ডেইলি?"
          },
          {
                    "speaker": "B",
                    "type": "practice",
                    "en": "Yes, I practice it aloud for fifteen minutes every day.",
                    "bn": "হ্যাঁ, আমি প্রতিদিন পনের মিনিট এটি জোরে জোরে মুখে বলি।",
                    "ipa": "/jes aɪ ˈpræktɪs ɪt əˈlaʊd/",
                    "bn_pron": "ইয়েস, আই প্র্যাকটিস ইট অ্যালাউড ফর ফিফটিন মিনিটস।"
          },
          {
                    "speaker": "A",
                    "type": "practice",
                    "en": "Does it help improve your fluency and speed?",
                    "bn": "এটি কি তোমার ফ্লুয়েন্সি ও গতি বাড়াতে সাহায্য করে?",
                    "ipa": "/dʌz ɪt help ɪmˈpruːv jɔː ˈfluːənsi/",
                    "bn_pron": "ডায ইট হেল্প ইমপ্রুভ ইয়োর ফ্লুয়েন্সি?"
          },
          {
                    "speaker": "B",
                    "type": "practice",
                    "en": "Definitely! I can now speak naturally without thinking of rules.",
                    "bn": "অবশ্যই! এখন নিয়ম না ভেবেই মুখে স্বতঃস্ফূর্তভাবে বাক্য আসে।",
                    "ipa": "/ˈdefɪnətli aɪ kæn naʊ spiːk ˈnætʃrəli/",
                    "bn_pron": "ডেফিনেটলি! আই ক্যান নাও স্পীক ন্যাচারালি।"
          },
          {
                    "speaker": "A",
                    "type": "real",
                    "en": "Could we practice conversation together every evening?",
                    "bn": "আমরা কি প্রতিদিন সন্ধ্যায় একসাথে স্পোকেন প্র্যাকটিস করতে পারি?",
                    "ipa": "/kʊd wiː ˈpræktɪs ˌkɒnvəˈseɪʃn təˈɡeðə/",
                    "bn_pron": "কুড উই প্র্যাকটিস কনভারসেশন টুগেদার?"
          },
          {
                    "speaker": "B",
                    "type": "real",
                    "en": "That would be wonderful! Let's start from tomorrow.",
                    "bn": "দারুণ হবে! চলো কাল থেকেই শুরু করা যাক।",
                    "ipa": "/ðæt wʊd biː ˈwʌndəfl lets stɑːt frɒm təˈmɒrəʊ/",
                    "bn_pron": "দ্যাট উড বি ওয়ান্ডারফুল! লেটস স্টার্ট ফ্রম টুমরো।"
          }
],
        sentenceBuilder: {
            subjects: ['I decided to', 'She told me', 'Did you', 'We went to', 'Why did you'],
            auxOrVerbs: ['learn', 'visit', 'call', 'buy', 'leave'],
            complements: ['spoken English last month', 'the doctor yesterday', 'a brand new laptop', 'the meeting early', 'our mutual friend']
        }
    },
    {
        id: 'lesson-08-present-perfect',
        lessonNumber: 8,
        title: 'Present Perfect: have / has + V3',
        subtitle: 'কাজ শেষ কিন্তু তার প্রভাব বা ফলাফল বর্তমানের সাথে সম্পর্কযুক্ত',
        phase: 'tenses',
        phaseLabel: 'কার্যকাল ও টেন্স (Daily Action Tenses)',
        level: 'Intermediate',
        concept: {
            explanation: 'এইমাত্র কোনো কাজ শেষ হয়েছে (I have just eaten), অথবা জীবনের কোনো অভিজ্ঞতা (I have visited Paris) বোঝাতে have/has + V3 বসে। Past Simple ও Present Perfect-এর পার্থক্য হলো: যদি নির্দিষ্ট অতীত সময় (yesterday, 2020) উল্লেখ থাকে তবে Past Simple, আর সময়ের চেয়ে কাজের প্রভাব মুখ্য হলে Present Perfect।',
            whenToUse: 'Just (এইমাত্র), Already (ইতোমধ্যে), Yet (এখনো না), Never (কখনো না), Ever (কখনো কি) দিয়ে কথা বলতে।',
            commonMistake: 'Yesterday বা নির্দিষ্ট সময়ের সাথে Present Perfect ব্যবহার করা যাবে না (I have seen him yesterday ❌ ➔ I saw him yesterday ✅)।',
            formulaSummary: 'Subject + have/has + V3 (Past Participle)'
        },
        transformation6Way: {
            baseConcept: 'কাজ সম্পন্ন করা (Completing the task)',
            positive: {
                formula: 'Subject + have/has + V3 + Extension',
                en: 'I have already submitted the project report.',
                bn: 'আমি ইতোমধ্যে প্রজেক্ট রিপোর্টটি জমা দিয়ে ফেলেছি।',
                ipa: '/aɪ hæv ɔːlˈredi səbˈmɪtɪd ðə ˈprɒdʒekt rɪˈpɔːt/'
            },
            negative: {
                formula: 'Subject + haven\'t / hasn\'t + V3 + yet',
                en: 'I haven\'t received any update from them yet.',
                bn: 'আমি এখনো তাদের কাছ থেকে কোনো আপডেট পাইনি।',
                ipa: '/aɪ ˈhævnt rɪˈsiːvd ˈeni ˈʌpdeɪt frɒm ðem jet/'
            },
            interrogative: {
                formula: 'Have/Has + Subject + V3 + Extension?',
                en: 'Have you ever spoken in front of a large audience?',
                bn: 'তুমি কি কখনো বড় কোনো দর্শকের সামনে বক্তব্য দিয়েছ?',
                ipa: '/hæv juː ˈevə ˈspəʊkən ɪn frʌnt ɒv ə lɑːdʒ ˈɔːdiəns/'
            },
            interroNegative: {
                formula: 'Haven\'t/Hasn\'t + Subject + V3 + yet?',
                en: 'Haven\'t you finished reading that chapter yet?',
                bn: 'তুমি কি এখনো ওই অধ্যায়টি পড়া শেষ করোনি?',
                ipa: '/ˈhævnt juː ˈfɪnɪʃt ˈriːdɪŋ ðæt ˈtʃæptə jet/'
            },
            whPositive: {
                formula: 'What/How many + have/has + Subject + V3?',
                en: 'How many mock tests have you taken so far?',
                bn: 'তুমি এ পর্যন্ত কতগুলো মক টেস্ট দিয়েছ?',
                ipa: '/haʊ ˈmeni mɒk tests hæv juː ˈteɪkən səʊ fɑː/'
            },
            whNegative: {
                formula: 'Why + haven\'t/hasn\'t + Subject + V3 + yet?',
                en: 'Why haven\'t they replied to our inquiry yet?',
                bn: 'তারা এখনো আমাদের বার্তার উত্তর দেয়নি কেন?',
                ipa: '/waɪ ˈhævnt ðeɪ rɪˈplaɪd tə ˈaʊər ɪnˈkwaɪəri jet/'
            }
        },
        realLifeSentences: [
            { en: 'I have made up my mind to study abroad next fall.', bn: 'আমি সিদ্ধান্ত নিয়ে নিয়েছি যে আগামী শরতে উচ্চশিক্ষার্থে বিদেশ যাব।', ipa: '/aɪ hæv meɪd ʌp maɪ maɪnd tə ˈstʌdi əˈbrɔːd nekst fɔːl/', context: 'জীবনের সিদ্ধান্ত', type: 'positive' },
            { en: 'She has just joined the Zoom conference call.', bn: 'তিনি এইমাত্র জুম কনফারেন্স কলে যুক্ত হয়েছেন।', ipa: '/ʃiː hæz dʒʌst dʒɔɪnd ðə zuːm ˈkɒnfərəns kɔːl/', context: 'মিটিং পরিস্থিতি', type: 'positive' },
            { en: 'Have you checked out the new pronunciation tool?', bn: 'তুমি কি নতুন প্রোনাউন্সিয়েশন টুলটি একবার পরখ করে দেখেছ?', ipa: '/hæv juː tʃekt aʊt ðə njuː prəˌnʌnsiˈeɪʃn tuːl/', context: 'টুল রিকমেন্ড করা', type: 'question' },
            { en: 'How long have you lived in this city?', bn: 'আপনি কতদিন ধরে এই শহরে বসবাস করছেন?', ipa: '/haʊ lɒŋ hæv juː lɪvd ɪn ðɪs ˈsɪti/', context: 'ব্যক্তিগত পরিচিতি', type: 'wh' }
        ],
        nativeVariations: {
            situation: 'বলতে চাওয়া: "আমার খাওয়া শেষ"',
            standard: 'I have finished eating.',
            nativeStyle: 'I\'m done / I\'m completely stuffed.',
            waysToSay: [
                { phrasing: 'I\'m all done here, thanks.', tone: 'রেস্তোরাঁয় বা টেবিলে', bn: 'আমার খাওয়া শেষ, ধন্যবাদ।' },
                { phrasing: 'I couldn\'t eat another bite.', tone: 'তৃপ্তিপূর্ণ অনুভূতি', bn: 'আর এক লোকমাও খেতে পারব না।' },
                { phrasing: 'That hit the spot.', tone: 'ইডিয়াম্যাটিক', bn: 'খাবারটা মন ছুঁয়ে গেছে।' }
            ],
            tip: '💡 "I have" দ্রুত বলা হয় "I\'ve" (/aɪv/), "He has" বলা হয় "He\'s" (/hiːz/)।'
        },
        qaDrill: {
            targetQuestion: {
                en: 'Have you ever traveled outside your home country?',
                bn: 'তুমি কি কখনো নিজের দেশের বাইরে ভ্রমণ করেছ?',
                ipa: '/hæv juː ˈevə ˈtrævld ˌaʊtˈsaɪd jɔː həʊm ˈkʌntri/'
            },
            possibleAnswers: [
                { style: 'সংক্ষিপ্ত সম্মতি (Short Affirmative)', en: 'Yes, I have! I visited Malaysia two years ago.', bn: 'হ্যাঁ করেছি! দু বছর আগে আমি মালয়েশিয়া গিয়েছিলাম।', ipa: '/jes aɪ hæv aɪ ˈvɪzɪtɪd məˈleɪʒə tuː jɪəz əˈɡəʊ/' },
                { style: 'বিস্তারিত উত্তর (Elaborated)', en: 'I have traveled to three different countries for study and work.', bn: 'পড়াশোনা ও কাজের সূত্রে আমি তিনটি ভিন্ন দেশে ভ্রমণ করেছি।', ipa: '/aɪ hæv ˈtrævld tə θriː ˈdɪfrənt ˈkʌntriz fɔː ˈstʌdi ænd wɜːk/' },
                { style: 'না-বাচক উত্তর (Polite Negative)', en: 'No, not yet, but I\'m planning my first trip to Turkey.', bn: 'না, এখনো যাইনি, তবে তুরস্কে প্রথম ভ্রমণের পরিকল্পনা করছি।', ipa: '/nəʊ nɒt jet bʌt aɪm ˈplænɪŋ maɪ fɜːst trɪp tə ˈtɜːki/' },
                { style: 'বিকল্প বা দ্বিধা (Alternative / Uncertainty)', en: 'I haven\'t had the chance yet due to my busy career.', bn: 'ব্যস্ত ক্যারিয়ারের কারণে এখনো সেই সুযোগ হয়ে ওঠেনি।', ipa: '/aɪ ˈhævnt hæd ðə tʃɑːns jet djuː tə maɪ ˈbɪzi kəˈrɪə/' }
            ]
        },
        conversation: [
          {
                    "speaker": "A",
                    "type": "practice",
                    "en": "Do you practice this spoken structure daily?",
                    "bn": "তুমি কি প্রতিদিন এই স্পোকেন স্ট্রাকচারটি চর্চা করো?",
                    "ipa": "/duː juː ˈpræktɪs ðɪs ˈspəʊkən ˈstrʌktʃə ˈdeɪli/",
                    "bn_pron": "ডু ইউ প্র্যাকটিস দিস স্পোকেন স্ট্রাকচার ডেইলি?"
          },
          {
                    "speaker": "B",
                    "type": "practice",
                    "en": "Yes, I practice it aloud for fifteen minutes every day.",
                    "bn": "হ্যাঁ, আমি প্রতিদিন পনের মিনিট এটি জোরে জোরে মুখে বলি।",
                    "ipa": "/jes aɪ ˈpræktɪs ɪt əˈlaʊd/",
                    "bn_pron": "ইয়েস, আই প্র্যাকটিস ইট অ্যালাউড ফর ফিফটিন মিনিটস।"
          },
          {
                    "speaker": "A",
                    "type": "practice",
                    "en": "Does it help improve your fluency and speed?",
                    "bn": "এটি কি তোমার ফ্লুয়েন্সি ও গতি বাড়াতে সাহায্য করে?",
                    "ipa": "/dʌz ɪt help ɪmˈpruːv jɔː ˈfluːənsi/",
                    "bn_pron": "ডায ইট হেল্প ইমপ্রুভ ইয়োর ফ্লুয়েন্সি?"
          },
          {
                    "speaker": "B",
                    "type": "practice",
                    "en": "Definitely! I can now speak naturally without thinking of rules.",
                    "bn": "অবশ্যই! এখন নিয়ম না ভেবেই মুখে স্বতঃস্ফূর্তভাবে বাক্য আসে।",
                    "ipa": "/ˈdefɪnətli aɪ kæn naʊ spiːk ˈnætʃrəli/",
                    "bn_pron": "ডেফিনেটলি! আই ক্যান নাও স্পীক ন্যাচারালি।"
          },
          {
                    "speaker": "A",
                    "type": "real",
                    "en": "Could we practice conversation together every evening?",
                    "bn": "আমরা কি প্রতিদিন সন্ধ্যায় একসাথে স্পোকেন প্র্যাকটিস করতে পারি?",
                    "ipa": "/kʊd wiː ˈpræktɪs ˌkɒnvəˈseɪʃn təˈɡeðə/",
                    "bn_pron": "কুড উই প্র্যাকটিস কনভারসেশন টুগেদার?"
          },
          {
                    "speaker": "B",
                    "type": "real",
                    "en": "That would be wonderful! Let's start from tomorrow.",
                    "bn": "দারুণ হবে! চলো কাল থেকেই শুরু করা যাক।",
                    "ipa": "/ðæt wʊd biː ˈwʌndəfl lets stɑːt frɒm təˈmɒrəʊ/",
                    "bn_pron": "দ্যাট উড বি ওয়ান্ডারফুল! লেটস স্টার্ট ফ্রম টুমরো।"
          }
],
        sentenceBuilder: {
            subjects: ['I have already', 'She has just', 'Have you ever', 'We haven\'t', 'Why haven\'t you'],
            auxOrVerbs: ['seen', 'completed', 'tried', 'sent', 'understood'],
            complements: ['the latest update', 'the full assignment', 'speaking with a foreigner', 'the registration form', 'the main concept yet']
        }
    },
    {
        id: 'lesson-09-future-will-going-to',
        lessonNumber: 9,
        title: 'Future: will vs be going to',
        subtitle: 'তাৎক্ষণিক সিদ্ধান্ত (Will) বনাম পূর্ব-পরিকল্পনা (Going to)',
        phase: 'tenses',
        phaseLabel: 'কার্যকাল ও টেন্স (Daily Action Tenses)',
        level: 'Intermediate',
        concept: {
            explanation: 'ভবিষ্যতের কথা বলতে দুটো প্রধান স্ট্রাকচার আছে: ১) Will: কথা বলার মুহূর্তে তাৎক্ষণিক সিদ্ধান্ত নিলে (যেমন: ফোন বাজছে, I\'ll answer it), অথবা প্রতিশ্রুতি/ভবিষ্যদ্বাণী করতে। ২) Be going to: আগে থেকেই পরিকল্পনা করা থাকলে (যেমন: I am going to buy a car next month) বা বর্তমান লক্ষণ দেখে নিশ্চিত হওয়া গেলে (যেমন: Look at the black clouds, it\'s going to rain)।',
            whenToUse: 'অফার করতে (I\'ll help you), ভবিষ্যৎ পরিকল্পনা জানাতে, কোনো প্রতিশ্রুতি দিতে।',
            commonMistake: 'পূর্বপরিকল্পিত কাজের ক্ষেত্রে will ব্যবহার করলে অনির্দিষ্ট শোনায়। যেমন: "I will get married next Friday" এর চেয়ে "I am going to get married" বা "I am getting married" বেশি স্বাভাবিক।',
            formulaSummary: 'Will: Subject + will + V1 | Going to: Subject + am/is/are + going to + V1'
        },
        transformation6Way: {
            baseConcept: 'সাহায্য করা (Helping / Assisting)',
            positive: {
                formula: 'Subject + will / am going to + V1',
                en: 'I will definitely assist you with your spoken English.',
                bn: 'আমি অবশ্যই তোমার স্পোকেন ইংলিশে সাহায্য করব।',
                ipa: '/aɪ wɪl ˈdefɪnətli əˈsɪst juː wɪð jɔː ˈspəʊkən ˈɪŋɡlɪʃ/'
            },
            negative: {
                formula: 'Subject + won\'t / am not going to + V1',
                en: 'I won\'t let you give up on your dreams.',
                bn: 'আমি তোমাকে তোমার স্বপ্ন ছেড়ে দিতে দেব না।',
                ipa: '/aɪ wəʊnt let juː ɡɪv ʌp ɒn jɔː driːmz/'
            },
            interrogative: {
                formula: 'Will / Are you going to + V1 + Extension?',
                en: 'Will you be free for a discussion tomorrow?',
                bn: 'কালকে কি আলোচনার জন্য তোমার সময় হবে?',
                ipa: '/wɪl juː biː friː fɔːr ə dɪˈskʌʃn təˈmɒrəʊ/'
            },
            interroNegative: {
                formula: 'Won\'t you / Aren\'t you going to + V1?',
                en: 'Won\'t you stay for dinner with us?',
                bn: 'তুমি কি আমাদের সাথে রাতের খাবারে থাকবে না?',
                ipa: '/wəʊnt juː steɪ fɔː ˈdɪnə wɪð ʌs/'
            },
            whPositive: {
                formula: 'What / When + will / are you going to + V1?',
                en: 'What are you going to do after passing IELTS?',
                bn: 'আইইএলটিএস পাস করার পর তুমি কী করবে?',
                ipa: '/wɒt ɑː juː ˈɡəʊɪŋ tə duː ˈɑːftə ˈpɑːsɪŋ ˈaɪelts/'
            },
            whNegative: {
                formula: 'Why + won\'t / aren\'t you going to + V1?',
                en: 'Why won\'t you consider applying for the scholarship?',
                bn: 'তুমি বৃত্তির জন্য আবেদন করার কথা ভাবছ না কেন?',
                ipa: '/waɪ wəʊnt juː kənˈsɪdə əˈplaɪɪŋ fɔː ðə ˈskɒləʃɪp/'
            }
        },
        realLifeSentences: [
            { en: 'Don\'t worry, I\'ll carry those heavy bags for you.', bn: 'চিন্তা করবেন না, আমি আপনার এই ভারী ব্যাগগুলো বয়ে নিয়ে যাচ্ছি।', ipa: '/dəʊnt ˈwʌri aɪl ˈkæri ðəʊz ˈhevi bæɡz fɔː juː/', context: 'স্বেচ্ছায় সহায়তা (Spontaneous will)', type: 'positive' },
            { en: 'We are going to launch our new website next Monday.', bn: 'আমরা আগামী সোমবার আমাদের নতুন ওয়েবসাইট উন্মোচন করতে যাচ্ছি।', ipa: '/wiː ɑː ˈɡəʊɪŋ tə lɔːntʃ ˈaʊə njuː ˈwebsaɪt nekst ˈmʌndeɪ/', context: 'পূর্বপরিকল্পিত কাজ (going to)', type: 'positive' },
            { en: 'I won\'t be able to make it to the party tonight.', bn: 'আজ রাতের পার্টিতে আমার পক্ষে উপস্থিত হওয়া সম্ভব হবে না।', ipa: '/aɪ wəʊnt biː ˈeɪbl tə meɪk ɪt tə ðə ˈpɑːti təˈnaɪt/', context: 'ভদ্রভাবে অপারগতা প্রকাশ', type: 'negative' },
            { en: 'What time will the online webinar begin?', bn: 'অনলাইন ওয়েবিনারটি কোন সময়ে শুরু হবে?', ipa: '/wɒt taɪm wɪl ði ˈɒnlaɪn ˈwebɪnɑː bɪˈɡɪn/', context: 'শিডিউল ইনকোয়ারি', type: 'wh' }
        ],
        nativeVariations: {
            situation: 'বলতে চাওয়া: "আমি নিশ্চিত করব"',
            standard: 'I will make sure about it.',
            nativeStyle: 'I\'ll see to it / Consider it done.',
            waysToSay: [
                { phrasing: 'Consider it done.', tone: 'আত্মবিশ্বাসী প্রফেশনাল', bn: 'কাজটি হয়ে গেছে বলে ধরে নিন।' },
                { phrasing: 'I\'ll take care of it right away.', tone: 'পেশাদার ও নির্ভরযোগ্য', bn: 'আমি সাথে সাথে বিষয়টি দেখছি।' },
                { phrasing: 'I\'ve got you covered.', tone: 'ক্যাজুয়াল ও বন্ধুত্বপূর্ণ', bn: 'তুমি নিশ্চিন্ত থাকো, আমি সামলে নেব।' }
            ],
            tip: '💡 "will not" এর সংক্ষেপ হলো "won\'t" (/wəʊnt/), ও-ধ্বনি দিয়ে টানুন।'
        },
        qaDrill: {
            targetQuestion: {
                en: 'Where do you see yourself five years from now?',
                bn: 'আজ থেকে পাঁচ বছর পর আপনি নিজেকে কোথায় দেখতে চান?',
                ipa: '/weə duː juː siː jɔːˈself faɪv jɪəz frɒm naʊ/'
            },
            possibleAnswers: [
                { style: 'সংক্ষিপ্ত সম্মতি (Short Affirmative)', en: 'I will be leading my own tech team in Europe.', bn: 'আমি ইউরোপে নিজের প্রযুক্তি টিম পরিচালনা করব।', ipa: '/aɪ wɪl biː ˈliːdɪŋ maɪ əʊn tek tiːm ɪn ˈjʊərəp/' },
                { style: 'বিস্তারিত উত্তর (Elaborated)', en: 'I am going to complete my Master\'s and publish several research papers.', bn: 'আমি আমার মাস্টার্স শেষ করব এবং বেশ কয়েকটি গবেষণাপত্র প্রকাশ করব।', ipa: '/aɪ æm ˈɡəʊɪŋ tə kəmˈpliːt maɪ ˈmɑːstəz ænd ˈpʌblɪʃ ˈsevrəl rɪˈsɜːtʃ ˈpeɪpəz/' },
                { style: 'না-বাচক উত্তর (Polite Negative)', en: 'I won\'t be in a stagnant position; I will continuously upskill.', bn: 'আমি স্থবির কোনো জায়গায় থাকব না; প্রতিনিয়ত নিজেকে দক্ষ করে তুলব।', ipa: '/aɪ wəʊnt biː ɪn ə ˈstæɡnənt pəˈzɪʃn aɪ wɪl kənˈtɪnjuəsli ʌpˈskɪl/' },
                { style: 'বিকল্প বা দ্বিধা (Alternative / Uncertainty)', en: 'I am planning to expand my family business to international markets.', bn: 'আমি আমার পারিবারিক ব্যবসাকে আন্তর্জাতিক বাজারে সম্প্রসারিত করার পরিকল্পনা করছি।', ipa: '/aɪ æm ˈplænɪŋ tə ɪkˈspænd maɪ ˈfæməli ˈbɪznɪs tuː ˌɪntəˈnæʃnəl ˈmɑːkɪts/' }
            ]
        },
        conversation: [
          {
                    "speaker": "A",
                    "type": "practice",
                    "en": "Do you practice this spoken structure daily?",
                    "bn": "তুমি কি প্রতিদিন এই স্পোকেন স্ট্রাকচারটি চর্চা করো?",
                    "ipa": "/duː juː ˈpræktɪs ðɪs ˈspəʊkən ˈstrʌktʃə ˈdeɪli/",
                    "bn_pron": "ডু ইউ প্র্যাকটিস দিস স্পোকেন স্ট্রাকচার ডেইলি?"
          },
          {
                    "speaker": "B",
                    "type": "practice",
                    "en": "Yes, I practice it aloud for fifteen minutes every day.",
                    "bn": "হ্যাঁ, আমি প্রতিদিন পনের মিনিট এটি জোরে জোরে মুখে বলি।",
                    "ipa": "/jes aɪ ˈpræktɪs ɪt əˈlaʊd/",
                    "bn_pron": "ইয়েস, আই প্র্যাকটিস ইট অ্যালাউড ফর ফিফটিন মিনিটস।"
          },
          {
                    "speaker": "A",
                    "type": "practice",
                    "en": "Does it help improve your fluency and speed?",
                    "bn": "এটি কি তোমার ফ্লুয়েন্সি ও গতি বাড়াতে সাহায্য করে?",
                    "ipa": "/dʌz ɪt help ɪmˈpruːv jɔː ˈfluːənsi/",
                    "bn_pron": "ডায ইট হেল্প ইমপ্রুভ ইয়োর ফ্লুয়েন্সি?"
          },
          {
                    "speaker": "B",
                    "type": "practice",
                    "en": "Definitely! I can now speak naturally without thinking of rules.",
                    "bn": "অবশ্যই! এখন নিয়ম না ভেবেই মুখে স্বতঃস্ফূর্তভাবে বাক্য আসে।",
                    "ipa": "/ˈdefɪnətli aɪ kæn naʊ spiːk ˈnætʃrəli/",
                    "bn_pron": "ডেফিনেটলি! আই ক্যান নাও স্পীক ন্যাচারালি।"
          },
          {
                    "speaker": "A",
                    "type": "real",
                    "en": "Could we practice conversation together every evening?",
                    "bn": "আমরা কি প্রতিদিন সন্ধ্যায় একসাথে স্পোকেন প্র্যাকটিস করতে পারি?",
                    "ipa": "/kʊd wiː ˈpræktɪs ˌkɒnvəˈseɪʃn təˈɡeðə/",
                    "bn_pron": "কুড উই প্র্যাকটিস কনভারসেশন টুগেদার?"
          },
          {
                    "speaker": "B",
                    "type": "real",
                    "en": "That would be wonderful! Let's start from tomorrow.",
                    "bn": "দারুণ হবে! চলো কাল থেকেই শুরু করা যাক।",
                    "ipa": "/ðæt wʊd biː ˈwʌndəfl lets stɑːt frɒm təˈmɒrəʊ/",
                    "bn_pron": "দ্যাট উড বি ওয়ান্ডারফুল! লেটস স্টার্ট ফ্রম টুমরো।"
          }
],
        sentenceBuilder: {
            subjects: ['I will', 'She is going to', 'We will', 'Are you going to', 'Why will they'],
            auxOrVerbs: ['call', 'join', 'start', 'buy', 'travel to'],
            complements: ['you back in ten minutes', 'the live class tonight', 'a new YouTube channel', 'a ticket for the flight', 'London next winter']
        }
    },

    // ══════════════════════════════════════════════════════════════════
    // PHASE 4: MODAL VERBS FOR FLUENCY & MANNERS
    // ══════════════════════════════════════════════════════════════════
    {
        id: 'lesson-10-can-could',
        lessonNumber: 10,
        title: 'Ability & Politeness: can vs could',
        subtitle: 'শারীরিক/মানসিক সক্ষমতা এবং অতি-ভদ্র অনুরোধ প্রকাশের কৌশল',
        phase: 'modals',
        phaseLabel: 'মোডাল ভার্ব ও ভদ্রতা (Modal Verbs)',
        level: 'Intermediate',
        concept: {
            explanation: 'Can বর্তমানের সক্ষমতা বোঝায় (I can speak English)। কিন্তু অনুরোধ বা প্রস্তাব করার সময় "Could" হলো "Can"-এর চেয়ে অনেক বেশি ভদ্র ও মার্জিত রূপ (Could you please help me? = আপনি কি দয়া করে একটু সাহায্য করবেন?)। অতীতের সক্ষমতা বোঝাতেও Could বসে (When I was young, I could run fast)।',
            whenToUse: 'রেস্তোরাঁ, অফিস, বিমানবন্দর বা নতুন কারো কাছে সাহায্য বা অনুমতি চাওয়ার সময় Could ব্যবহার করলে আপনি সবচেয়ে মার্জিত স্পিকার হবেন।',
            commonMistake: 'Could এর পর কখনো Verb-এর Past form বা s/es হয় না (Could you helped me? ❌ ➔ Could you help me? ✅)।',
            formulaSummary: 'Can/Could + Subject + V1 (Base Form)'
        },
        transformation6Way: {
            baseConcept: 'সাহায্য বা সহযোগিতা করা (Helping)',
            positive: {
                formula: 'Subject + can/could + V1 + Extension',
                en: 'I can manage this difficult task on my own.',
                bn: 'আমি নিজেই এই কঠিন কাজটি সামলে নিতে পারি।',
                ipa: '/aɪ kæn ˈmænɪdʒ ðɪs ˈdɪfɪkəlt tɑːsk ɒn maɪ əʊn/'
            },
            negative: {
                formula: 'Subject + cannot (can\'t) / couldn\'t + V1',
                en: 'I can\'t attend the meeting due to a network issue.',
                bn: 'নেটওয়ার্ক সমস্যার কারণে আমি মিটিংয়ে যুক্ত হতে পারছি না।',
                ipa: '/aɪ kɑːnt əˈtend ðə ˈmiːtɪŋ djuː tə ə ˈnetwɜːk ˈɪʃuː/'
            },
            interrogative: {
                formula: 'Could you please + V1 + Extension?',
                en: 'Could you please repeat that last sentence?',
                bn: 'আপনি কি দয়া করে শেষ বাক্যটি আরেকবার বলবেন?',
                ipa: '/kʊd juː pliːz rɪˈpiːt ðæt lɑːst ˈsentəns/'
            },
            interroNegative: {
                formula: 'Can\'t/Couldn\'t + Subject + V1 + Extension?',
                en: 'Can\'t you understand the gravity of this situation?',
                bn: 'তুমি কি এই পরিস্থিতির গুরুত্ব বুঝতে পারছ না?',
                ipa: '/kɑːnt juː ˌʌndəˈstænd ðə ˈɡrævəti ɒv ðɪs ˌsɪtʃuˈeɪʃn/'
            },
            whPositive: {
                formula: 'How / Where + can/could + Subject + V1?',
                en: 'How can I improve my English pronunciation quickly?',
                bn: 'আমি কীভাবে দ্রুত আমার ইংরেজি উচ্চারণ উন্নত করতে পারি?',
                ipa: '/haʊ kæn aɪ ɪmˈpruːv maɪ ˈɪŋɡlɪʃ prəˌnʌnsiˈeɪʃn ˈkwɪkli/'
            },
            whNegative: {
                formula: 'Why + can\'t/couldn\'t + Subject + V1?',
                en: 'Why couldn\'t you submit your application on time?',
                bn: 'তুমি যথাসময়ে তোমার আবেদন জমা দিতে পারলে না কেন?',
                ipa: '/waɪ ˈkʊdnt juː səbˈmɪt jɔːr ˌæplɪˈkeɪʃn ɒn taɪm/'
            }
        },
        realLifeSentences: [
            { en: 'Could you do me a quick favor, please?', bn: 'আমাকে কি একটু ছোট উপকার করতে পারবেন, দয়া করে?', ipa: '/kʊd juː duː miː ə kwɪk ˈfeɪvə pliːz/', context: 'অফিসে বা বন্ধুদের কাছে ভদ্র অনুরোধ', type: 'question' },
            { en: 'I can assure you that your data is completely safe.', bn: 'আমি আপনাকে নিশ্চিত করতে পারি যে আপনার তথ্য সম্পূর্ণ সুরক্ষিত।', ipa: '/aɪ kæn əˈʃɔː juː ðæt jɔː ˈdeɪtə ɪz kəmˈpliːtli seɪf/', context: 'ক্লায়েন্ট বা গ্রাহককে ভরসা দেওয়া', type: 'positive' },
            { en: 'Could we reschedule our call for tomorrow morning?', bn: 'আমরা কি আমাদের ফোনালাপটি কাল সকালে পিছিয়ে নিতে পারি?', ipa: '/kʊd wiː ˌriːˈʃedjuːl ˈaʊə kɔːl fɔː təˈmɒrəʊ ˈmɔːnɪŋ/', context: 'শিডিউল পরিবর্তন', type: 'question' },
            { en: 'I couldn\'t agree more with your thoughtful perspective.', bn: 'আপনার দূরদর্শী মতামতের সাথে আমি একমত না হয়ে পারছি না।', ipa: '/aɪ ˈkʊdnt əˈɡriː mɔː wɪð jɔː ˈθɔːtfl pəˈspektɪv/', context: 'সভা বা বিতর্কে প্রশংসা', type: 'negative' }
        ],
        nativeVariations: {
            situation: 'বলতে চাওয়া: "আমাকে কি লবণটা একটু বাড়িয়ে দেবেন?"',
            standard: 'Give me the salt.',
            nativeStyle: 'Could you pass the salt, please? / Would you mind passing the salt?',
            waysToSay: [
                { phrasing: 'Could you pass me the salt, please?', tone: 'সবচেয়ে মার্জিত ও স্বাভাবিক', bn: 'লবণটা কি একটু এগিয়ে দেওয়া যাবে?' },
                { phrasing: 'Would you mind passing the salt?', tone: 'অতি ভদ্র', bn: 'লবণটা একটু দিলে কিছু মনে করবেন কি?' },
                { phrasing: 'Can I grab that salt when you\'re done?', tone: 'ক্যাজুয়াল বন্ধুদের সাথে', bn: 'তোমার হয়ে গেলে লবণটা একটু নিতে পারি?' }
            ],
            tip: '💡 "Could you" ব্রিটিশ উচ্চারণে লিংক হয়ে "কুড-ইউ" (/kʊdʒuː/) হয়ে যায়।'
        },
        qaDrill: {
            targetQuestion: {
                en: 'Could you tell me how to get to the nearest hospital?',
                bn: 'সবচেয়ে কাছের হাসপাতালে কীভাবে যাব একটু বলতে পারবেন কি?',
                ipa: '/kʊd juː tel miː haʊ tuː ɡet tə ðə ˈnɪərɪst ˈhɒspɪtl/'
            },
            possibleAnswers: [
                { style: 'সংক্ষিপ্ত সম্মতি (Short Affirmative)', en: 'Sure! Go straight and take the first right turn.', bn: 'অবশ্যই! সোজা গিয়ে প্রথম ডানদিকের মোড়টি নিন।', ipa: '/ʃɔː ɡəʊ streɪt ænd teɪk ðə fɜːst raɪt tɜːn/' },
                { style: 'বিস্তারিত উত্তর (Elaborated)', en: 'It\'s about five minutes on foot, right behind the central bank.', bn: 'হেঁটে মাত্র পাঁচ মিনিট লাগবে, কেন্দ্রীয় ব্যাংকের ঠিক পেছনেই।', ipa: '/ɪts əˈbaʊt faɪv ˈmɪnɪts ɒn fʊt raɪt bɪˈhaɪnd ðə ˈsentrəl bæŋk/' },
                { style: 'না-বাচক উত্তর (Polite Negative)', en: 'I\'m so sorry, I can\'t help you as I\'m new to this neighborhood.', bn: 'খুবই দুঃখিত, আমি সাহায্য করতে পারছি না কারণ এই এলাকায় আমি নতুন।', ipa: '/aɪm səʊ ˈsɒri aɪ kɑːnt help juː æz aɪm njuː tə ðɪs ˈneɪbəhʊd/' },
                { style: 'বিকল্প বা দ্বিধা (Alternative / Uncertainty)', en: 'You can check Google Maps or ask that traffic police officer.', bn: 'আপনি গুগল ম্যাপে দেখতে পারেন অথবা ওই ট্রাফিক পুলিশকে জিজ্ঞেস করতে পারেন।', ipa: '/juː kæn tʃek ˈɡuːɡl mæps ɔːr ɑːsk ðæt ˈtræfɪk pəˈliːs ˈɒfɪsə/' }
            ]
        },
        conversation: [
          {
                    "speaker": "A",
                    "type": "practice",
                    "en": "Do you practice this spoken structure daily?",
                    "bn": "তুমি কি প্রতিদিন এই স্পোকেন স্ট্রাকচারটি চর্চা করো?",
                    "ipa": "/duː juː ˈpræktɪs ðɪs ˈspəʊkən ˈstrʌktʃə ˈdeɪli/",
                    "bn_pron": "ডু ইউ প্র্যাকটিস দিস স্পোকেন স্ট্রাকচার ডেইলি?"
          },
          {
                    "speaker": "B",
                    "type": "practice",
                    "en": "Yes, I practice it aloud for fifteen minutes every day.",
                    "bn": "হ্যাঁ, আমি প্রতিদিন পনের মিনিট এটি জোরে জোরে মুখে বলি।",
                    "ipa": "/jes aɪ ˈpræktɪs ɪt əˈlaʊd/",
                    "bn_pron": "ইয়েস, আই প্র্যাকটিস ইট অ্যালাউড ফর ফিফটিন মিনিটস।"
          },
          {
                    "speaker": "A",
                    "type": "practice",
                    "en": "Does it help improve your fluency and speed?",
                    "bn": "এটি কি তোমার ফ্লুয়েন্সি ও গতি বাড়াতে সাহায্য করে?",
                    "ipa": "/dʌz ɪt help ɪmˈpruːv jɔː ˈfluːənsi/",
                    "bn_pron": "ডায ইট হেল্প ইমপ্রুভ ইয়োর ফ্লুয়েন্সি?"
          },
          {
                    "speaker": "B",
                    "type": "practice",
                    "en": "Definitely! I can now speak naturally without thinking of rules.",
                    "bn": "অবশ্যই! এখন নিয়ম না ভেবেই মুখে স্বতঃস্ফূর্তভাবে বাক্য আসে।",
                    "ipa": "/ˈdefɪnətli aɪ kæn naʊ spiːk ˈnætʃrəli/",
                    "bn_pron": "ডেফিনেটলি! আই ক্যান নাও স্পীক ন্যাচারালি।"
          },
          {
                    "speaker": "A",
                    "type": "real",
                    "en": "Could we practice conversation together every evening?",
                    "bn": "আমরা কি প্রতিদিন সন্ধ্যায় একসাথে স্পোকেন প্র্যাকটিস করতে পারি?",
                    "ipa": "/kʊd wiː ˈpræktɪs ˌkɒnvəˈseɪʃn təˈɡeðə/",
                    "bn_pron": "কুড উই প্র্যাকটিস কনভারসেশন টুগেদার?"
          },
          {
                    "speaker": "B",
                    "type": "real",
                    "en": "That would be wonderful! Let's start from tomorrow.",
                    "bn": "দারুণ হবে! চলো কাল থেকেই শুরু করা যাক।",
                    "ipa": "/ðæt wʊd biː ˈwʌndəfl lets stɑːt frɒm təˈmɒrəʊ/",
                    "bn_pron": "দ্যাট উড বি ওয়ান্ডারফুল! লেটস স্টার্ট ফ্রম টুমরো।"
          }
],
        sentenceBuilder: {
            subjects: ['Could you please', 'I can easily', 'She couldn\'t', 'How can we', 'Why can\'t you'],
            auxOrVerbs: ['explain', 'manage', 'deliver', 'hear', 'solve'],
            complements: ['the problem clearly', 'this difficult task', 'the speech fluently', 'my voice properly', 'the question right now']
        }
    },
    {
        id: 'lesson-11-should-must-have-to',
        lessonNumber: 11,
        title: 'Advice & Obligation: should vs must / have to',
        subtitle: 'উপদেশ (Should) বনাম কঠোর বাধ্যবাধকতা (Must / Have to)',
        phase: 'modals',
        phaseLabel: 'মোডাল ভার্ব ও ভদ্রতা (Modal Verbs)',
        level: 'Intermediate',
        concept: {
            explanation: '১) Should: উপদেশ বা পরামর্শ দিতে (You should practice daily = তোমার প্রতিদিন চর্চা করা উচিত)। ২) Have to: বাহ্যিক নিয়মের বাধ্যবাধকতা (I have to wear a helmet = আমাকে হেলমেট পরতেই হবে কারণ নিয়ম)। ৩) Must: অভ্যন্তরীণ বা অতি-জরুরি বাধ্যবাধকতা (I must pass this exam = আমাকে এই পরীক্ষায় পাস করতেই হবে)।',
            whenToUse: 'কাউকে বন্ধুত্বপূর্ণ পরামর্শ দেওয়া, অফিসের বাধ্যবাধকতা জানানো, অথবা কঠোর স্বাস্থ্যবিধি মনে করিয়ে দেওয়া।',
            commonMistake: 'Should এর পর কখনোই "to" বসে না (You should to go ❌ ➔ You should go ✅)। কিন্তু Have-এর পর সবসময় "to" বসে (I have go ❌ ➔ I have to go ✅)।',
            formulaSummary: 'Should + V1 (উচিত) | Have to / Must + V1 (বাধ্যবাধকতা)'
        },
        transformation6Way: {
            baseConcept: 'উচ্চারণ অনুশীলন করা (Practicing pronunciation)',
            positive: {
                formula: 'Subject + should / have to + V1',
                en: 'You should record your voice while speaking English.',
                bn: 'ইংরেজিতে কথা বলার সময় তোমার নিজের কণ্ঠ রেকর্ড করা উচিত।',
                ipa: '/juː ʃʊd rɪˈkɔːd jɔː vɔɪs waɪl ˈspiːkɪŋ ˈɪŋɡlɪʃ/'
            },
            negative: {
                formula: 'Subject + shouldn\'t / don\'t have to + V1',
                en: 'You shouldn\'t feel ashamed of making small mistakes.',
                bn: 'ছোটখাটো ভুল করার জন্য তোমার লজ্জিত বোধ করা উচিত নয়।',
                ipa: '/juː ˈʃʊdnt fiːl əˈʃeɪmd ɒv ˈmeɪkɪŋ smɔːl mɪˈsteɪks/'
            },
            interrogative: {
                formula: 'Should / Do I have to + V1 + Extension?',
                en: 'Should I focus more on vocabulary or grammar?',
                bn: 'আমার কি ভোকাবুলারি নাকি গ্রামারে বেশি মনোযোগ দেওয়া উচিত?',
                ipa: '/ʃʊd aɪ ˈfəʊkəs mɔːr ɒn vəˈkæbjələri ɔː ˈɡræmə/'
            },
            interroNegative: {
                formula: 'Shouldn\'t + Subject + V1 + Extension?',
                en: 'Shouldn\'t we consult our mentor before deciding?',
                bn: 'সিদ্ধান্ত নেওয়ার আগে আমাদের কি মেন্টরের পরামর্শ নেওয়া উচিত নয়?',
                ipa: '/ˈʃʊdnt wiː kənˈsʌlt ˈaʊə ˈmentɔː bɪˈfɔː dɪˈsaɪdɪŋ/'
            },
            whPositive: {
                formula: 'What / How + should + Subject + V1?',
                en: 'What should I do to overcome speaking nervousness?',
                bn: 'কথা বলার ভয় কাটাতে আমার কী করা উচিত?',
                ipa: '/wɒt ʃʊd aɪ duː tuː ˌəʊvəˈkʌm ˈspiːkɪŋ ˈnɜːvəsnəs/'
            },
            whNegative: {
                formula: 'Why + shouldn\'t / don\'t you have to + V1?',
                en: 'Why shouldn\'t we seize this great opportunity?',
                bn: 'আমাদের এই দারুণ সুযোগটি কাজে লাগানো উচিত হবে না কেন?',
                ipa: '/waɪ ˈʃʊdnt wiː siːz ðɪs ɡreɪt ˌɒpəˈtjuːnəti/'
            }
        },
        realLifeSentences: [
            { en: 'You must carry your passport to the examination hall.', bn: 'পরীক্ষার হলে আপনাকে অবশ্যই আপনার পাসপোর্ট সাথে রাখতে হবে।', ipa: '/juː mʌst ˈkæri jɔː ˈpɑːspɔːt tə ði ɪɡˌzæmɪˈneɪʃn hɔːl/', context: 'কঠোর সরকারি নিয়ম (Must)', type: 'positive' },
            { en: 'I have to finish this audit report before 5 PM today.', bn: 'আজ বিকেল ৫টার আগেই আমাকে এই অডিট রিপোর্টটি শেষ করতে হবে।', ipa: '/aɪ hæv tə ˈfɪnɪʃ ðɪs ˈɔːdɪt rɪˈpɔːt bɪˈfɔː faɪv ˌpiː ˈem təˈdeɪ/', context: 'অফিস ডেডলাইন (Have to)', type: 'positive' },
            { en: 'You don\'t have to pay anything; it\'s 100% free.', bn: 'আপনার কোনো টাকা দিতে হবে না; এটা সম্পূর্ণ ফ্রি।', ipa: '/juː dəʊnt hæv tə peɪ ˈeniθɪŋ ɪts wʌn ˈhʌndrəd pəˈsent friː/', context: 'বাধ্যবাধকতা নেই বোঝাতে (Don\'t have to)', type: 'negative' },
            { en: 'What steps should we take to protect our environment?', bn: 'আমাদের পরিবেশ রক্ষায় আমাদের কোন পদক্ষেপগুলো নেওয়া উচিত?', ipa: '/wɒt steps ʃʊd wiː teɪk tə prəˈtekt ˈaʊər ɪnˈvaɪrənmənt/', context: 'আইইএলটিএস স্পিকিং পার্ট ৩', type: 'wh' }
        ],
        nativeVariations: {
            situation: 'বলতে চাওয়া: "তোমার ডাক্তার দেখানো উচিত"',
            standard: 'You should see a doctor.',
            nativeStyle: 'You\'d better get that checked out / You ought to see someone.',
            waysToSay: [
                { phrasing: 'You\'d better get that checked out.', tone: 'কড়া উপদেশ / শুভাকাঙ্ক্ষী', bn: 'তোমার ওটা এখনই পরীক্ষা করিয়ে নেওয়া দরকার।' },
                { phrasing: 'If I were you, I\'d take a couple days off.', tone: 'অতি ভদ্র পরামর্শ', bn: 'আমি তোমার জায়গায় হলে দুদিন ছুটি নিতাম।' },
                { phrasing: 'You ought to drink plenty of fluids.', tone: 'মার্জিত পরামর্শ', bn: 'তোমার প্রচুর তরল খাবার খাওয়া উচিত।' }
            ],
            tip: '💡 "have to" স্পোকেন ইংলিশে দ্রুত বললে "hafta" (/ˈhæftə/) হয়ে যায়।'
        },
        qaDrill: {
            targetQuestion: {
                en: 'Should I memorize vocabulary lists or learn them in context?',
                bn: 'আমার কি শব্দের তালিকা মুখস্থ করা উচিত নাকি বাক্যের মধ্যে শেখা উচিত?',
                ipa: '/ʃʊd aɪ ˈmeməraɪz vəˈkæbjələri lɪsts ɔː lɜːn ðem ɪn ˈkɒntekst/'
            },
            possibleAnswers: [
                { style: 'সংক্ষিপ্ত সম্মতি (Short Affirmative)', en: 'You should definitely learn in context; memorizing lists doesn\'t work.', bn: 'অবশ্যই বাক্যের মধ্যে শেখা উচিত; তালিকা মুখস্থ করে কোনো লাভ হয় না।', ipa: '/juː ʃʊd ˈdefɪnətli lɜːn ɪn ˈkɒntekst ˈmeməraɪzɪŋ lɪsts ˈdʌznt wɜːk/' },
                { style: 'বিস্তারিত উত্তর (Elaborated)', en: 'Make your own sentences with every new word you encounter.', bn: 'প্রতিটি নতুন শব্দ পাওয়ার সাথে সাথে তা দিয়ে নিজের মতো বাক্য তৈরি করুন।', ipa: '/meɪk jɔːr əʊn ˈsentənsɪz wɪð ˈevri njuː wɜːd juː ɪnˈkaʊntə/' },
                { style: 'না-বাচক উত্তর (Polite Negative)', en: 'You shouldn\'t stress over difficult academic words initially.', bn: 'শুরুতেই কঠিন প্রাতিষ্ঠানিক শব্দ নিয়ে অহেতুক চাপ নেওয়া উচিত নয়।', ipa: '/juː ˈʃʊdnt stres ˈəʊvə ˈdɪfɪkəlt ˌækəˈdemɪk wɜːdz ɪˈnɪʃəli/' },
                { style: 'বিকল্প বা দ্বিধা (Alternative / Uncertainty)', en: 'A balanced approach works best: 5 new words a day in real sentences.', bn: 'ভারসাম্যপূর্ণ কৌশল সবচেয়ে ভালো: প্রতিদিন ৫টি শব্দ বাস্তব বাক্যের মাধ্যমে।', ipa: '/ə ˈbælənst əˈprəʊtʃ wɜːks best faɪv njuː wɜːdz ə deɪ ɪn rɪəl ˈsentənsɪz/' }
            ]
        },
        conversation: [
          {
                    "speaker": "A",
                    "type": "practice",
                    "en": "Do you practice this spoken structure daily?",
                    "bn": "তুমি কি প্রতিদিন এই স্পোকেন স্ট্রাকচারটি চর্চা করো?",
                    "ipa": "/duː juː ˈpræktɪs ðɪs ˈspəʊkən ˈstrʌktʃə ˈdeɪli/",
                    "bn_pron": "ডু ইউ প্র্যাকটিস দিস স্পোকেন স্ট্রাকচার ডেইলি?"
          },
          {
                    "speaker": "B",
                    "type": "practice",
                    "en": "Yes, I practice it aloud for fifteen minutes every day.",
                    "bn": "হ্যাঁ, আমি প্রতিদিন পনের মিনিট এটি জোরে জোরে মুখে বলি।",
                    "ipa": "/jes aɪ ˈpræktɪs ɪt əˈlaʊd/",
                    "bn_pron": "ইয়েস, আই প্র্যাকটিস ইট অ্যালাউড ফর ফিফটিন মিনিটস।"
          },
          {
                    "speaker": "A",
                    "type": "practice",
                    "en": "Does it help improve your fluency and speed?",
                    "bn": "এটি কি তোমার ফ্লুয়েন্সি ও গতি বাড়াতে সাহায্য করে?",
                    "ipa": "/dʌz ɪt help ɪmˈpruːv jɔː ˈfluːənsi/",
                    "bn_pron": "ডায ইট হেল্প ইমপ্রুভ ইয়োর ফ্লুয়েন্সি?"
          },
          {
                    "speaker": "B",
                    "type": "practice",
                    "en": "Definitely! I can now speak naturally without thinking of rules.",
                    "bn": "অবশ্যই! এখন নিয়ম না ভেবেই মুখে স্বতঃস্ফূর্তভাবে বাক্য আসে।",
                    "ipa": "/ˈdefɪnətli aɪ kæn naʊ spiːk ˈnætʃrəli/",
                    "bn_pron": "ডেফিনেটলি! আই ক্যান নাও স্পীক ন্যাচারালি।"
          },
          {
                    "speaker": "A",
                    "type": "real",
                    "en": "Could we practice conversation together every evening?",
                    "bn": "আমরা কি প্রতিদিন সন্ধ্যায় একসাথে স্পোকেন প্র্যাকটিস করতে পারি?",
                    "ipa": "/kʊd wiː ˈpræktɪs ˌkɒnvəˈseɪʃn təˈɡeðə/",
                    "bn_pron": "কুড উই প্র্যাকটিস কনভারসেশন টুগেদার?"
          },
          {
                    "speaker": "B",
                    "type": "real",
                    "en": "That would be wonderful! Let's start from tomorrow.",
                    "bn": "দারুণ হবে! চলো কাল থেকেই শুরু করা যাক।",
                    "ipa": "/ðæt wʊd biː ˈwʌndəfl lets stɑːt frɒm təˈmɒrəʊ/",
                    "bn_pron": "দ্যাট উড বি ওয়ান্ডারফুল! লেটস স্টার্ট ফ্রম টুমরো।"
          }
],
        sentenceBuilder: {
            subjects: ['You should', 'We must', 'I have to', 'Should we', 'Why should I'],
            auxOrVerbs: ['always', 'never', 'immediately', 'carefully', 'definitely'],
            complements: ['listen to native speakers', 'submit the project on time', 'stop making excuses', 'wear a helmet on bikes', 'review what I learned']
        }
    },
    {
        id: 'lesson-12-would-would-like',
        lessonNumber: 12,
        title: 'Polite Offers & Desires: would like / would you mind',
        subtitle: 'ভদ্র প্রস্তাব, পছন্দ প্রকাশ ও মার্জিত অনুরোধের রাজকীয় ভাষা',
        phase: 'modals',
        phaseLabel: 'মোডাল ভার্ব ও ভদ্রতা (Modal Verbs)',
        level: 'Intermediate',
        concept: {
            explanation: 'স্পোকেন ইংরেজিতে "want" (চাই) বলা কিছুটা রূঢ় শোনায়। এর পরিবর্তে মার্জিতভাবে কিছু চাওয়া বা প্রস্তাব দিতে "would like" ব্যবহৃত হয় (I want water ➔ I would like some water, please)। আবার অতি-ভদ্র অনুরোধ করতে "Would you mind + V-ing?" ব্যবহৃত হয় (যেমন: Would you mind opening the door? = দরজাটা একটু খুলে দিলে কিছু মনে করবেন কি?)।',
            whenToUse: 'হোটেল, রেস্তোরাঁ, ইন্টারভিউ বা যেকোনো আনুষ্ঠানিক পরিবেশে কিছু অর্ডার করতে বা প্রস্তাব দিতে।',
            commonMistake: '"Would you mind" এর পর ভার্বের সাথে অবশ্যই "ing" যুক্ত করতে হবে (Would you mind open the door? ❌ ➔ Would you mind opening the door? ✅)। এবং এর উত্তরে সম্মতি দিতে "No, not at all" বলতে হয়!',
            formulaSummary: 'Would like + to + V1 | Would you mind + Verb(ing)?'
        },
        transformation6Way: {
            baseConcept: 'চা খাওয়ার ইচ্ছা প্রকাশ (Having tea/coffee)',
            positive: {
                formula: 'Subject + would like (\'d like) + Noun/To-Verb',
                en: 'I would like a cup of green tea, please.',
                bn: 'আমি এক কাপ গ্রিন টি নিতে চাই, দয়া করে।',
                ipa: '/aɪ wʊd laɪk ə kʌp ɒv ɡriːn tiː pliːz/'
            },
            negative: {
                formula: 'Subject + wouldn\'t like + to + V1',
                en: 'I wouldn\'t like to disturb your private family time.',
                bn: 'আমি আপনার একান্ত পারিবারিক সময়ে ব্যাঘাত ঘটাতে চাই না।',
                ipa: '/aɪ ˈwʊdnt laɪk tə dɪˈstɜːb jɔː ˈpraɪvət ˈfæməli taɪm/'
            },
            interrogative: {
                formula: 'Would you like + Noun / to + V1?',
                en: 'Would you like something to drink while you wait?',
                bn: 'অপেক্ষার সময় আপনি কি কিছু পান করতে পছন্দ করবেন?',
                ipa: '/wʊd juː laɪk ˈsʌmθɪŋ tə drɪŋk waɪl juː weɪt/'
            },
            interroNegative: {
                formula: 'Wouldn\'t you like + to + V1?',
                en: 'Wouldn\'t you like to join us for dinner tonight?',
                bn: 'আপনি কি আজ রাতে আমাদের সাথে ডিনারে অংশ নিতে চাইবেন না?',
                ipa: '/ˈwʊdnt juː laɪk tə dʒɔɪn ʌs fɔː ˈdɪnə təˈnaɪt/'
            },
            whPositive: {
                formula: 'What / Which + would you like + to + V1?',
                en: 'What kind of career would you like to pursue?',
                bn: 'আপনি কোন ধরনের পেশায় নিজেকে দেখতে পছন্দ করবেন?',
                ipa: '/wɒt kaɪnd ɒv kəˈrɪə wʊd juː laɪk tə pəˈsjuː/'
            },
            whNegative: {
                formula: 'Why wouldn\'t + Subject + like + to + V1?',
                en: 'Why wouldn\'t you like to work from home?',
                bn: 'তুমি বাসা থেকে কাজ করতে পছন্দ করবে না কেন?',
                ipa: '/waɪ ˈwʊdnt juː laɪk tə wɜːk frɒm həʊm/'
            }
        },
        realLifeSentences: [
            { en: 'I\'d like to schedule an appointment with Dr. Rahman.', bn: 'আমি ডা. রহমানের সাথে একটি অ্যাপয়েন্টমেন্ট নিতে চাই।', ipa: '/aɪd laɪk tə ˈʃedjuːl ən əˈpɔɪntmənt wɪð ˈdɒktə rahman/', context: 'হাসপাতাল বা ক্লিনিকে বুকিং', type: 'positive' },
            { en: 'Would you mind turning down the music a little bit?', bn: 'গানের ভলিউমটা একটু কমিয়ে দিলে কিছু মনে করবেন কি?', ipa: '/wʊd juː maɪnd ˈtɜːnɪŋ daʊn ðə ˈmjuːzɪk ə ˈlɪtl bɪt/', context: 'ভদ্র অনুরোধ (Would you mind + ing)', type: 'question' },
            { en: 'Where would you recommend going for a quick weekend trip?', bn: 'সপ্তাহান্তে সংক্ষিপ্ত ভ্রমণের জন্য আপনি কোথায় যাওয়ার পরামর্শ দেবেন?', ipa: '/weə wʊd juː ˌrekəˈmend ˈɡəʊɪŋ fɔːr ə kwɪk ˌwiːkˈend trɪp/', context: 'পরামর্শ চাওয়া', type: 'wh' },
            { en: 'I\'d love to help, but I\'m tied up until 4 PM.', bn: 'আমি সাহায্য করতে পারলে খুশি হতাম, তবে ৪টা পর্যন্ত আটকে আছি।', ipa: '/aɪd lʌv tə help bʌt aɪm taɪd ʌp ənˈtɪl fɔː ˌpiː ˈem/', context: 'ভদ্রভাবে অপারগতা', type: 'negative' }
        ],
        nativeVariations: {
            situation: 'বলতে চাওয়া: "আমার চা খেতে ইচ্ছে করছে"',
            standard: 'I want tea.',
            nativeStyle: 'I could really go for a cup of tea right now.',
            waysToSay: [
                { phrasing: 'I could really go for a cup of tea.', tone: 'ক্যাজুয়াল ও নেটিভ', bn: 'এক কাপ চা খেতে পারলে এখন দারুণ হতো।' },
                { phrasing: 'I\'m craving a hot coffee.', tone: 'তীব্র ইচ্ছা বোঝাতে', bn: 'আমার এক কাপ গরম কফি খেতে ভীষণ ইচ্ছে করছে।' },
                { phrasing: 'I\'d love nothing more than a warm drink.', tone: 'মার্জিত এক্সপ্রেশন', bn: 'একটি গরম পানীয়র চেয়ে ভালো আর কিছুই হতো না।' }
            ],
            tip: '💡 "I would like" কে নেটিভরা প্রায় ১০০% সময় "I\'d like" (/aɪd laɪk/) বলেন।'
        },
        qaDrill: {
            targetQuestion: {
                en: 'Would you mind holding this door for a second?',
                bn: 'দরজাটা একটু ধরে রাখলে কিছু মনে করবেন কি?',
                ipa: '/wʊd juː maɪnd ˈhəʊldɪŋ ðɪs dɔː fɔːr ə ˈsekənd/'
            },
            possibleAnswers: [
                { style: 'সংক্ষিপ্ত সম্মতি (Short Affirmative)', en: 'Not at all! Go right ahead.', bn: 'কিছুই মনে করব না (অবশ্যই)! আপনি যান।', ipa: '/nɒt æt ɔːl ɡəʊ raɪt əˈhed/' },
                { style: 'বিস্তারিত উত্তর (Elaborated)', en: 'Of course not, let me hold it until you get through.', bn: 'মোটেও না, আপনি ভেতরে যাওয়া পর্যন্ত আমি ধরে রাখছি।', ipa: '/ɒv kɔːs nɒt let miː həʊld ɪt ənˈtɪl juː ɡet θruː/' },
                { style: 'না-বাচক উত্তর (Polite Negative)', en: 'I\'m really sorry, my hands are full with heavy groceries.', bn: 'আমি আন্তরিকভাবে দুঃখিত, আমার দুহাতে ভারী বাজারভর্তি ব্যাগ।', ipa: '/aɪm ˈrɪəli ˈsɒri maɪ hændz ɑː fʊl wɪð ˈhevi ˈɡrəʊsəriz/' },
                { style: 'বিকল্প বা দ্বিধা (Alternative / Uncertainty)', en: 'Here, let me prop it open with this wedge.', bn: 'এই নিন, আমি এই জিনিসটা দিয়ে দরজাটা আটকে দিচ্ছি।', ipa: '/hɪə let miː prɒp ɪt ˈəʊpən wɪð ðɪs wedʒ/' }
            ]
        },
        conversation: [
          {
                    "speaker": "A",
                    "type": "practice",
                    "en": "Do you practice this spoken structure daily?",
                    "bn": "তুমি কি প্রতিদিন এই স্পোকেন স্ট্রাকচারটি চর্চা করো?",
                    "ipa": "/duː juː ˈpræktɪs ðɪs ˈspəʊkən ˈstrʌktʃə ˈdeɪli/",
                    "bn_pron": "ডু ইউ প্র্যাকটিস দিস স্পোকেন স্ট্রাকচার ডেইলি?"
          },
          {
                    "speaker": "B",
                    "type": "practice",
                    "en": "Yes, I practice it aloud for fifteen minutes every day.",
                    "bn": "হ্যাঁ, আমি প্রতিদিন পনের মিনিট এটি জোরে জোরে মুখে বলি।",
                    "ipa": "/jes aɪ ˈpræktɪs ɪt əˈlaʊd/",
                    "bn_pron": "ইয়েস, আই প্র্যাকটিস ইট অ্যালাউড ফর ফিফটিন মিনিটস।"
          },
          {
                    "speaker": "A",
                    "type": "practice",
                    "en": "Does it help improve your fluency and speed?",
                    "bn": "এটি কি তোমার ফ্লুয়েন্সি ও গতি বাড়াতে সাহায্য করে?",
                    "ipa": "/dʌz ɪt help ɪmˈpruːv jɔː ˈfluːənsi/",
                    "bn_pron": "ডায ইট হেল্প ইমপ্রুভ ইয়োর ফ্লুয়েন্সি?"
          },
          {
                    "speaker": "B",
                    "type": "practice",
                    "en": "Definitely! I can now speak naturally without thinking of rules.",
                    "bn": "অবশ্যই! এখন নিয়ম না ভেবেই মুখে স্বতঃস্ফূর্তভাবে বাক্য আসে।",
                    "ipa": "/ˈdefɪnətli aɪ kæn naʊ spiːk ˈnætʃrəli/",
                    "bn_pron": "ডেফিনেটলি! আই ক্যান নাও স্পীক ন্যাচারালি।"
          },
          {
                    "speaker": "A",
                    "type": "real",
                    "en": "Could we practice conversation together every evening?",
                    "bn": "আমরা কি প্রতিদিন সন্ধ্যায় একসাথে স্পোকেন প্র্যাকটিস করতে পারি?",
                    "ipa": "/kʊd wiː ˈpræktɪs ˌkɒnvəˈseɪʃn təˈɡeðə/",
                    "bn_pron": "কুড উই প্র্যাকটিস কনভারসেশন টুগেদার?"
          },
          {
                    "speaker": "B",
                    "type": "real",
                    "en": "That would be wonderful! Let's start from tomorrow.",
                    "bn": "দারুণ হবে! চলো কাল থেকেই শুরু করা যাক।",
                    "ipa": "/ðæt wʊd biː ˈwʌndəfl lets stɑːt frɒm təˈmɒrəʊ/",
                    "bn_pron": "দ্যাট উড বি ওয়ান্ডারফুল! লেটস স্টার্ট ফ্রম টুমরো।"
          }
],
        sentenceBuilder: {
            subjects: ['I\'d like to', 'Would you like to', 'Would you mind', 'She would love to', 'What would you like to'],
            auxOrVerbs: ['order', 'explain', 'helping me with', 'visit', 'know about'],
            complements: ['a table for two', 'this concept again', 'this heavy luggage', 'our campus tomorrow', 'our study abroad program']
        }
    },

    // ══════════════════════════════════════════════════════════════════
    // PHASE 5: HIGH-IMPACT SPOKEN ENGLISH POWER STRUCTURES
    // ══════════════════════════════════════════════════════════════════
    {
        id: 'lesson-13-used-to',
        lessonNumber: 13,
        title: 'Habits: used to vs be used to',
        subtitle: 'অতীতের নিয়মিত অভ্যাস বনাম বর্তমানের কোনো কাজে অভ্যস্ততা',
        phase: 'power-structures',
        phaseLabel: 'পাওয়ার স্ট্রাকচার (Power Structures)',
        level: 'Upper-Intermediate',
        concept: {
            explanation: '১) Used to + V1: অতীতে নিয়মিত কোনো কাজ করতেন কিন্তু এখন আর করেন না (I used to play cricket = আমি আগে ক্রিকেট খেলতাম কিন্তু এখন আর খেলি না)। ২) Be used to + V-ing: কোনো কাজে বর্তমান অভ্যস্ততা বোঝাতে am/is/are used to + V-ing ব্যবহৃত হয় (I am used to waking up early = আমি ভোরে ঘুম থেকে ওঠায় অভ্যস্ত)।',
            whenToUse: 'নিজের পুরনো অভ্যাস বনাম বর্তমানের জীবনের পরিবর্তনের তুলনা করতে।',
            commonMistake: 'Be used to এর পর অবশ্যই Verb(ing) হবে (I am used to drive ❌ ➔ I am used to driving in traffic ✅)। আর সাধারণ used to এর পর V1 হবে (I used to smoke ✅)।',
            formulaSummary: 'অতীতের অতীত অভ্যাস: used to + V1 | বর্তমান অভ্যস্ততা: am/is/are used to + V-ing'
        },
        transformation6Way: {
            baseConcept: 'দেরিতে ঘুমানো (Sleeping late at night)',
            positive: {
                formula: 'Subject + used to + V1 + Extension',
                en: 'I used to stay up late browsing my phone.',
                bn: 'আমি আগে ফোন টিপে অনেক রাত পর্যন্ত জেগে থাকতাম।',
                ipa: '/aɪ ˈjuːst tə steɪ ʌp leɪt ˈbraʊzɪŋ maɪ fəʊn/'
            },
            negative: {
                formula: 'Subject + didn\'t use to + V1',
                en: 'I didn\'t use to read English books in my childhood.',
                bn: 'শৈশবে আমি ইংরেজি বই পড়ার অভ্যাসে ছিলাম না।',
                ipa: '/aɪ ˈdɪdnt juːs tə riːd ˈɪŋɡlɪʃ bʊks ɪn maɪ ˈtʃaɪldhʊd/'
            },
            interrogative: {
                formula: 'Did you use to + V1 + Extension?',
                en: 'Did you use to live in Chittagong before moving here?',
                bn: 'এখানে আসার আগে তুমি কি চট্টগ্রামে বাস করতে?',
                ipa: '/dɪd juː juːs tə lɪv ɪn Chittagong bɪˈfɔː ˈmuːvɪŋ hɪə/'
            },
            interroNegative: {
                formula: 'Didn\'t you use to + V1 + Extension?',
                en: 'Didn\'t you use to work at that telecom company?',
                bn: 'তুমি কি আগে ওই টেলিকম কোম্পানিতে চাকরি করতে না?',
                ipa: '/ˈdɪdnt juː juːs tə wɜːk æt ðæt ˈtelɪkɒm ˈkʌmpəni/'
            },
            whPositive: {
                formula: 'What / Where + did you use to + V1?',
                en: 'What games did you use to play when you were a kid?',
                bn: 'ছোটবেলায় তুমি কোন খেলাগুলো খেলতে?',
                ipa: '/wɒt ɡeɪmz dɪd juː juːs tə pleɪ wen juː wɜːr ə kɪd/'
            },
            whNegative: {
                formula: 'Why didn\'t you use to + V1?',
                en: 'Why didn\'t you use to share your ideas in meetings?',
                bn: 'আগে তুমি মিটিংয়ে তোমার মতামত তুলে ধরতে না কেন?',
                ipa: '/waɪ ˈdɪdnt juː juːs tə ʃeə jɔːr aɪˈdɪəz ɪn ˈmiːtɪŋz/'
            }
        },
        realLifeSentences: [
            { en: 'I am used to speaking English for hours now.', bn: 'আমি এখন ঘণ্টার পর ঘণ্টা ইংরেজিতে কথা বলতে অভ্যস্ত।', ipa: '/aɪ æm juːst tə ˈspiːkɪŋ ˈɪŋɡlɪʃ fɔːr ˈaʊəz naʊ/', context: 'বর্তমান অভ্যস্ততা (Be used to + ing)', type: 'positive' },
            { en: 'He used to be extremely shy, but now he is very outgoing.', bn: 'সে আগে খুব লাজুক ছিল, তবে এখন সে খুবই মিশুক।', ipa: '/hiː ˈjuːst tə biː ɪkˈstriːmli ʃaɪ bʌt naʊ hiː ɪz ˈveri ˈaʊtˌɡəʊɪŋ/', context: 'ব্যক্তিত্বের পরিবর্তন', type: 'positive' },
            { en: 'Are you used to the cold weather in Canada yet?', bn: 'কানাডার কনকনে ঠাণ্ডা আবহাওয়ায় তুমি কি অভ্যস্ত হয়ে উঠেছ?', ipa: '/ɑː juː juːst tə ðə kəʊld ˈweðər ɪn ˈkænədə jet/', context: 'প্রবাস জীবনের অভিজ্ঞতা', type: 'question' },
            { en: 'It took me months to get used to driving on the left.', bn: 'বামপাশে গাড়ি চালানোয় অভ্যস্ত হতে আমার কয়েক মাস সময় লেগেছিল।', ipa: '/ɪt tʊk miː mʌnθs tə ɡet juːst tə ˈdraɪvɪŋ ɒn ðə left/', context: 'অভিযোজন প্রক্রিয়া', type: 'positive' }
        ],
        nativeVariations: {
            situation: 'বলতে চাওয়া: "আমি এই ঝামেলার সাথে অভ্যস্ত"',
            standard: 'I am used to this problem.',
            nativeStyle: 'I\'m totally accustomed to it / It\'s second nature to me now.',
            waysToSay: [
                { phrasing: 'It\'s become second nature to me.', tone: 'উচ্চমানের ইংলিশ', bn: 'এটা এখন আমার সহজাত অভ্যাসে পরিণত হয়েছে।' },
                { phrasing: 'I\'m pretty much used to the hustle.', tone: 'ক্যাজুয়াল ও বাস্তবমুখী', bn: 'আমি এই ব্যস্ততায় বেশ ভালোভাবেই অভ্যস্ত।' },
                { phrasing: 'I\'ve gotten the hang of it.', tone: 'ইডিয়াম্যাটিক', bn: 'আমি কাজটার কলাকৌশল পুরোপুরি রপ্ত করে ফেলেছি।' }
            ],
            tip: '💡 "used to" উচ্চারণে "d" সাইলেন্ট থাকে, উচ্চারণ হয় "ইউস-টু" (/ˈjuːst tuː/)।'
        },
        qaDrill: {
            targetQuestion: {
                en: 'Did you use to practice English every day when you started?',
                bn: 'শুরুর দিকে তুমি কি প্রতিদিন ইংরেজি চর্চা করতে?',
                ipa: '/dɪd juː juːs tə ˈpræktɪs ˈɪŋɡlɪʃ ˈevri deɪ wen juː ˈstɑːtɪd/'
            },
            possibleAnswers: [
                { style: 'সংক্ষিপ্ত সম্মতি (Short Affirmative)', en: 'Yes, I used to practice at least one hour before bed.', bn: 'হ্যাঁ, ঘুমানোর আগে অন্তত এক ঘণ্টা নিয়মিত চর্চা করতাম।', ipa: '/jes aɪ ˈjuːst tə ˈpræktɪs æt liːst wʌn ˈaʊə bɪˈfɔː bed/' },
                { style: 'বিস্তারিত উত্তর (Elaborated)', en: 'I used to record my voice and listen back to correct my mistakes.', bn: 'আমি নিজের ভয়েস রেকর্ড করতাম এবং ভুল শুধরাতে শুনতাম।', ipa: '/aɪ ˈjuːst tə rɪˈkɔːd maɪ vɔɪs ænd ˈlɪsn bæk tə kəˈrekt maɪ mɪˈsteɪks/' },
                { style: 'না-বাচক উত্তর (Polite Negative)', en: 'I didn\'t use to be consistent, which delayed my progress.', bn: 'আমি নিয়মিত চর্চা করতাম না, যার কারণে অগ্রগতিতে দেরি হয়েছিল।', ipa: '/aɪ ˈdɪdnt juːs tə biː kənˈsɪstənt wɪtʃ dɪˈleɪd maɪ ˈprəʊɡres/' },
                { style: 'বিকল্প বা দ্বিধা (Alternative / Uncertainty)', en: 'Now I am so used to speaking that I think in English.', bn: 'এখন আমি বলতে বলতে এত অভ্যস্ত যে মনে মনেও ইংরেজিতে চিন্তা করি।', ipa: '/naʊ aɪ æm səʊ juːst tə ˈspiːkɪŋ ðæt aɪ θɪŋk ɪn ˈɪŋɡlɪʃ/' }
            ]
        },
        conversation: [
          {
                    "speaker": "A",
                    "type": "practice",
                    "en": "Do you practice this spoken structure daily?",
                    "bn": "তুমি কি প্রতিদিন এই স্পোকেন স্ট্রাকচারটি চর্চা করো?",
                    "ipa": "/duː juː ˈpræktɪs ðɪs ˈspəʊkən ˈstrʌktʃə ˈdeɪli/",
                    "bn_pron": "ডু ইউ প্র্যাকটিস দিস স্পোকেন স্ট্রাকচার ডেইলি?"
          },
          {
                    "speaker": "B",
                    "type": "practice",
                    "en": "Yes, I practice it aloud for fifteen minutes every day.",
                    "bn": "হ্যাঁ, আমি প্রতিদিন পনের মিনিট এটি জোরে জোরে মুখে বলি।",
                    "ipa": "/jes aɪ ˈpræktɪs ɪt əˈlaʊd/",
                    "bn_pron": "ইয়েস, আই প্র্যাকটিস ইট অ্যালাউড ফর ফিফটিন মিনিটস।"
          },
          {
                    "speaker": "A",
                    "type": "practice",
                    "en": "Does it help improve your fluency and speed?",
                    "bn": "এটি কি তোমার ফ্লুয়েন্সি ও গতি বাড়াতে সাহায্য করে?",
                    "ipa": "/dʌz ɪt help ɪmˈpruːv jɔː ˈfluːənsi/",
                    "bn_pron": "ডায ইট হেল্প ইমপ্রুভ ইয়োর ফ্লুয়েন্সি?"
          },
          {
                    "speaker": "B",
                    "type": "practice",
                    "en": "Definitely! I can now speak naturally without thinking of rules.",
                    "bn": "অবশ্যই! এখন নিয়ম না ভেবেই মুখে স্বতঃস্ফূর্তভাবে বাক্য আসে।",
                    "ipa": "/ˈdefɪnətli aɪ kæn naʊ spiːk ˈnætʃrəli/",
                    "bn_pron": "ডেফিনেটলি! আই ক্যান নাও স্পীক ন্যাচারালি।"
          },
          {
                    "speaker": "A",
                    "type": "real",
                    "en": "Could we practice conversation together every evening?",
                    "bn": "আমরা কি প্রতিদিন সন্ধ্যায় একসাথে স্পোকেন প্র্যাকটিস করতে পারি?",
                    "ipa": "/kʊd wiː ˈpræktɪs ˌkɒnvəˈseɪʃn təˈɡeðə/",
                    "bn_pron": "কুড উই প্র্যাকটিস কনভারসেশন টুগেদার?"
          },
          {
                    "speaker": "B",
                    "type": "real",
                    "en": "That would be wonderful! Let's start from tomorrow.",
                    "bn": "দারুণ হবে! চলো কাল থেকেই শুরু করা যাক।",
                    "ipa": "/ðæt wʊd biː ˈwʌndəfl lets stɑːt frɒm təˈmɒrəʊ/",
                    "bn_pron": "দ্যাট উড বি ওয়ান্ডারফুল! লেটস স্টার্ট ফ্রম টুমরো।"
          }
],
        sentenceBuilder: {
            subjects: ['I used to', 'She is used to', 'Did you use to', 'We aren\'t used to', 'Why did you use to'],
            auxOrVerbs: ['play', 'waking up', 'live', 'working under', 'spend money on'],
            complements: ['guitar in a college band', 'early every morning', 'in a small village', 'intense workplace pressure', 'unnecessary luxury items']
        }
    },
    {
        id: 'lesson-14-feel-like-want-to',
        lessonNumber: 14,
        title: 'Desires: want to (wanna) vs feel like (ing)',
        subtitle: 'কোনো কিছু করতে মন চাওয়া, তাৎক্ষণিক মুড ও ইচ্ছা প্রকাশ',
        phase: 'power-structures',
        phaseLabel: 'পাওয়ার স্ট্রাকচার (Power Structures)',
        level: 'Intermediate',
        concept: {
            explanation: '১) Want to / Wanna: কোনো কিছু করার সোজাসাপ্টা ইচ্ছা প্রকাশ (I want to learn English)। ২) Feel like + Verb(ing): মনের তাৎক্ষণিক মুড বা ইচ্ছা প্রকাশ, যার বাংলা অর্থ "আমার ... করতে মন চাইছে / ইচ্ছে করছে" (I feel like having a cup of coffee = আমার এক কাপ কফি খেতে ইচ্ছে করছে)।',
            whenToUse: 'বন্ধুদের সাথে আড্ডায়, রেস্তোরাঁয় খাবারের পছন্দ জানাতে, বা কোনো কাজ করতে ভালো না লাগলে (I don\'t feel like studying today)।',
            commonMistake: 'Feel like এর পর মূল ভার্বের সাথে "ing" অবশ্যই দিতে হবে (I feel like eat ❌ ➔ I feel like eating ✅)। Want এর পর V1 হবে (I want to go ✅)।',
            formulaSummary: 'Subject + feel/feels like + Verb(ing) | Subject + want to + V1'
        },
        transformation6Way: {
            baseConcept: 'বাইরে ঘুরতে যাওয়ার ইচ্ছা (Going for a walk / hanging out)',
            positive: {
                formula: 'Subject + feel like + V-ing + Extension',
                en: 'I feel like going for a long walk by the river.',
                bn: 'নদীর পাড়ে আমার অনেকক্ষণ হাঁটতে ইচ্ছে করছে।',
                ipa: '/aɪ fiːl laɪk ˈɡəʊɪŋ fɔːr ə lɒŋ wɔːk baɪ ðə ˈrɪvə/'
            },
            negative: {
                formula: 'Subject + don\'t/doesn\'t feel like + V-ing',
                en: 'I don\'t feel like talking to anyone right now.',
                bn: 'এখন আমার কারো সাথে কথা বলতে ইচ্ছে করছে না।',
                ipa: '/aɪ dəʊnt fiːl laɪk ˈtɔːkɪŋ tə ˈeniwʌn raɪt naʊ/'
            },
            interrogative: {
                formula: 'Do/Does + Subject + feel like + V-ing?',
                en: 'Do you feel like grabbing some pizza tonight?',
                bn: 'আজ রাতে কি তোমার পিৎজা খেতে ইচ্ছে করছে?',
                ipa: '/duː juː fiːl laɪk ˈɡræbɪŋ sʌm ˈpiːtsə təˈnaɪt/'
            },
            interroNegative: {
                formula: 'Don\'t/Doesn\'t + Subject + feel like + V-ing?',
                en: 'Don\'t you feel like taking a break from screen time?',
                bn: 'স্ক্রিন থেকে একটু বিরতি নিতে কি তোমার মন চাইছে না?',
                ipa: '/dəʊnt juː fiːl laɪk ˈteɪkɪŋ ə breɪk frɒm skriːn taɪm/'
            },
            whPositive: {
                formula: 'What + do/does + Subject + feel like + V-ing?',
                en: 'What do you feel like doing this weekend?',
                bn: 'এই ছুটির দিনে তোমার কী করতে ইচ্ছে করছে?',
                ipa: '/wɒt duː juː fiːl laɪk ˈduːɪŋ ðɪs ˌwiːkˈend/'
            },
            whNegative: {
                formula: 'Why + don\'t/doesn\'t + Subject + feel like + V-ing?',
                en: 'Why don\'t you feel like attending the party?',
                bn: 'পার্টিতে যেতে তোমার মন চাইছে না কেন?',
                ipa: '/waɪ dəʊnt juː fiːl laɪk əˈtendɪŋ ðə ˈpɑːti/'
            }
        },
        realLifeSentences: [
            { en: 'I really wanna speak fluent English like a native.', bn: 'আমি সত্যি নেটিভদের মতো অনর্গল ইংরেজি বলতে চাই।', ipa: '/aɪ ˈrɪəli ˈwɒnə spiːk ˈfluːənt ˈɪŋɡlɪʃ laɪk ə ˈneɪtɪv/', context: 'উচ্চাকাঙ্ক্ষা ও স্বপ্ন', type: 'positive' },
            { en: 'She doesn\'t feel like cooking dinner after a tiring shift.', bn: 'ক্লান্তিকর শিফটের পর তার রাতের খাবার রান্না করতে মন চাইছে না।', ipa: '/ʃiː ˈdʌznt fiːl laɪk ˈkʊkɪŋ ˈdɪnə ˈɑːftər ə ˈtaɪərɪŋ ʃɪft/', context: 'দৈনন্দিন অনুভূতি', type: 'negative' },
            { en: 'Do you feel like watching a comedy movie together?', bn: 'একসাথে কি একটি কমেডি সিনেমা দেখতে মন চাইছে?', ipa: '/duː juː fiːl laɪk ˈwɒtʃɪŋ ə ˈkɒmədi ˈmuːvi təˈɡeðə/', context: 'বন্ধুকে প্রস্তাব', type: 'question' },
            { en: 'I feel like crying every time I listen to that song.', bn: 'ওই গানটি শুনলে প্রতিবারই আমার কান্না পায়।', ipa: '/aɪ fiːl laɪk ˈkraɪɪŋ ˈevri taɪm aɪ ˈlɪsn tə ðæt sɒŋ/', context: 'আবেগ প্রকাশ', type: 'positive' }
        ],
        nativeVariations: {
            situation: 'বলতে চাওয়া: "আমার এখন পড়তে ইচ্ছে করছে না"',
            standard: 'I do not want to study now.',
            nativeStyle: 'I\'m just not in the mood to study right now.',
            waysToSay: [
                { phrasing: 'I\'m really not in the mood for this.', tone: 'ন্যাচারাল ও অনর্গল', bn: 'এখন আমার সত্যিই এই মুড নেই।' },
                { phrasing: 'I don\'t have the mental bandwidth today.', tone: 'মডার্ন প্রফেশনাল', bn: 'আজকে আমার মাথায় আর কোনো চাপ নেওয়ার জায়গা নেই।' },
                { phrasing: 'I think I\'ll pass on this one.', tone: 'ভদ্রভাবে প্রত্যাখ্যান', bn: 'আমি বরং এটা থেকে বিরত থাকি।' }
            ],
            tip: '💡 "want to" এর কথ্য রূপ "wanna" (/ˈwɒnə/) ইনফরমাল ইংরেজিতে সবচেয়ে বেশি প্রচলিত।'
        },
        qaDrill: {
            targetQuestion: {
                en: 'Do you feel like hanging out at the mall this evening?',
                bn: 'আজ সন্ধ্যায় কি মলে আড্ডা দিতে তোমার মন চাইছে?',
                ipa: '/duː juː fiːl laɪk ˈhæŋɪŋ aʊt æt ðə mɔːl ðɪs ˈiːvnɪŋ/'
            },
            possibleAnswers: [
                { style: 'সংক্ষিপ্ত সম্মতি (Short Affirmative)', en: 'Totally! I definitely need some fresh air.', bn: 'অবশ্যই! আমার সত্যিই একটু মুক্ত বাতাস দরকার।', ipa: '/ˈtəʊtəli aɪ ˈdefɪnətli niːd sʌm freʃ eə/' },
                { style: 'বিস্তারিত উত্তর (Elaborated)', en: 'I\'d love to. We can grab burgers and check out the new bookstore.', bn: 'দারুণ হবে। আমরা বার্গার খেতে পারি এবং নতুন বইয়ের দোকানটা দেখতে পারি।', ipa: '/aɪd lʌv tuː wiː kæn ɡræb ˈbɜːɡəz ænd tʃek aʊt ðə njuː ˈbʊkstɔː/' },
                { style: 'না-বাচক উত্তর (Polite Negative)', en: 'Honestly, I\'m so exhausted I just feel like crashing on my bed.', bn: 'সত্যি বলতে, আমি এত ক্লান্ত যে শুধু বিছানায় গা এলিয়ে দিতে মন চাইছে।', ipa: '/ˈɒnɪstli aɪm səʊ ɪɡˈzɔːstɪd aɪ dʒʌst fiːl laɪk ˈkræʃɪŋ ɒn maɪ bed/' },
                { style: 'বিকল্প বা দ্বিধা (Alternative / Uncertainty)', en: 'Could we do it tomorrow instead? I have some chores to finish.', bn: 'কালকে করলে কেমন হয়? আমার বাসার কিছু কাজ বাকি আছে।', ipa: '/kʊd wiː duː ɪt təˈmɒrəʊ ɪnˈsted aɪ hæv sʌm tʃɔːz tə ˈfɪnɪʃ/' }
            ]
        },
        conversation: [
          {
                    "speaker": "A",
                    "type": "practice",
                    "en": "Do you practice this spoken structure daily?",
                    "bn": "তুমি কি প্রতিদিন এই স্পোকেন স্ট্রাকচারটি চর্চা করো?",
                    "ipa": "/duː juː ˈpræktɪs ðɪs ˈspəʊkən ˈstrʌktʃə ˈdeɪli/",
                    "bn_pron": "ডু ইউ প্র্যাকটিস দিস স্পোকেন স্ট্রাকচার ডেইলি?"
          },
          {
                    "speaker": "B",
                    "type": "practice",
                    "en": "Yes, I practice it aloud for fifteen minutes every day.",
                    "bn": "হ্যাঁ, আমি প্রতিদিন পনের মিনিট এটি জোরে জোরে মুখে বলি।",
                    "ipa": "/jes aɪ ˈpræktɪs ɪt əˈlaʊd/",
                    "bn_pron": "ইয়েস, আই প্র্যাকটিস ইট অ্যালাউড ফর ফিফটিন মিনিটস।"
          },
          {
                    "speaker": "A",
                    "type": "practice",
                    "en": "Does it help improve your fluency and speed?",
                    "bn": "এটি কি তোমার ফ্লুয়েন্সি ও গতি বাড়াতে সাহায্য করে?",
                    "ipa": "/dʌz ɪt help ɪmˈpruːv jɔː ˈfluːənsi/",
                    "bn_pron": "ডায ইট হেল্প ইমপ্রুভ ইয়োর ফ্লুয়েন্সি?"
          },
          {
                    "speaker": "B",
                    "type": "practice",
                    "en": "Definitely! I can now speak naturally without thinking of rules.",
                    "bn": "অবশ্যই! এখন নিয়ম না ভেবেই মুখে স্বতঃস্ফূর্তভাবে বাক্য আসে।",
                    "ipa": "/ˈdefɪnətli aɪ kæn naʊ spiːk ˈnætʃrəli/",
                    "bn_pron": "ডেফিনেটলি! আই ক্যান নাও স্পীক ন্যাচারালি।"
          },
          {
                    "speaker": "A",
                    "type": "real",
                    "en": "Could we practice conversation together every evening?",
                    "bn": "আমরা কি প্রতিদিন সন্ধ্যায় একসাথে স্পোকেন প্র্যাকটিস করতে পারি?",
                    "ipa": "/kʊd wiː ˈpræktɪs ˌkɒnvəˈseɪʃn təˈɡeðə/",
                    "bn_pron": "কুড উই প্র্যাকটিস কনভারসেশন টুগেদার?"
          },
          {
                    "speaker": "B",
                    "type": "real",
                    "en": "That would be wonderful! Let's start from tomorrow.",
                    "bn": "দারুণ হবে! চলো কাল থেকেই শুরু করা যাক।",
                    "ipa": "/ðæt wʊd biː ˈwʌndəfl lets stɑːt frɒm təˈmɒrəʊ/",
                    "bn_pron": "দ্যাট উড বি ওয়ান্ডারফুল! লেটস স্টার্ট ফ্রম টুমরো।"
          }
],
        sentenceBuilder: {
            subjects: ['I feel like', 'She feels like', 'Do you feel like', 'I don\'t feel like', 'What do you feel like'],
            auxOrVerbs: ['eating', 'traveling to', 'having', 'learning', 'talking about'],
            complements: ['some spicy food', 'the beach with friends', 'a cup of hot coffee', 'advanced spoken structures', 'our future plans']
        }
    },
    {
        id: 'lesson-15-it-takes-time',
        lessonNumber: 15,
        title: 'Time & Duration: It takes (time) to do',
        subtitle: 'কোনো কাজ সম্পন্ন করতে কত সময় লাগে তা প্রকাশের জাদুকরী ফর্মুলা',
        phase: 'power-structures',
        phaseLabel: 'পাওয়ার স্ট্রাকচার (Power Structures)',
        level: 'Upper-Intermediate',
        concept: {
            explanation: 'কোনো কাজ করতে কতটুকু সময় ব্যয় হয় তা প্রকাশ করতে "It takes + (person) + time + to do" ফর্মুলা ব্যবহৃত হয়। যেমন: ইংরেজি শিখতে সময় লাগে = It takes time to learn English। অফিসে যেতে আমার ৩০ মিনিট লাগে = It takes me 30 minutes to get to the office।',
            whenToUse: 'রাস্তার দূরত্ব ও যাতায়াত সময় বলতে, কোনো দক্ষতা অর্জনের ধৈর্য বোঝাতে, বা রান্না করতে কতক্ষণ লাগবে জানাতে।',
            commonMistake: '"For going office takes 30 minutes" ❌ - এটি ভুল! সবসময় "It takes" দিয়ে শুরু করতে হবে: "It takes 30 minutes to reach the office" ✅।',
            formulaSummary: 'It takes/took/will take + (Object) + Duration + to + V1'
        },
        transformation6Way: {
            baseConcept: 'ফ্লুয়েন্ট বক্তা হওয়া (Becoming a fluent speaker)',
            positive: {
                formula: 'It takes + Duration/Effort + to + V1',
                en: 'It takes consistent practice to become a fluent speaker.',
                bn: 'অনর্গল বক্তা হতে নিয়মিত ও ধারাবাহিক অনুশীলনের প্রয়োজন হয়।',
                ipa: '/ɪt teɪks kənˈsɪstənsi ˈpræktɪs tə bɪˈkʌm ə ˈfluːənt ˈspiːkə/'
            },
            negative: {
                formula: 'It doesn\'t take + Duration + to + V1',
                en: 'It doesn\'t take years if you follow the right system.',
                bn: 'সঠিক পদ্ধতি অনুসরণ করলে এতে বছরের পর বছর সময় লাগে না।',
                ipa: '/ɪt ˈdʌznt teɪk jɪəz ɪf juː ˈfɒləʊ ðə raɪt ˈsɪstəm/'
            },
            interrogative: {
                formula: 'How long does it take + (someone) + to + V1?',
                en: 'How long does it take you to get to work every day?',
                bn: 'প্রতিদিন কাজে পৌঁছাতে তোমার কতক্ষণ সময় লাগে?',
                ipa: '/haʊ lɒŋ dʌz ɪt teɪk juː tə ɡet tə wɜːk ˈevri deɪ/'
            },
            interroNegative: {
                formula: 'Doesn\'t it take + Duration + to + V1?',
                en: 'Doesn\'t it take a lot of courage to speak on stage?',
                bn: 'মঞ্চে দাঁড়িয়ে কথা বলতে কি অনেক সাহসের প্রয়োজন হয় না?',
                ipa: '/ˈdʌznt ɪt teɪk ə lɒt ɒv ˈkʌrɪdʒ tə spiːk ɒn steɪdʒ/'
            },
            whPositive: {
                formula: 'How much time will it take to + V1?',
                en: 'How much time will it take to repair my laptop?',
                bn: 'আমার ল্যাপটপটি মেরামত করতে কত সময় লাগবে?',
                ipa: '/haʊ mʌtʃ taɪm wɪl ɪt teɪk tə rɪˈpeə maɪ ˈlæptɒp/'
            },
            whNegative: {
                formula: 'Why does it take so long to + V1?',
                en: 'Why does it take so long to process this visa application?',
                bn: 'এই ভিসা আবেদন প্রক্রিয়া সম্পন্ন হতে এত দীর্ঘ সময় লাগে কেন?',
                ipa: '/waɪ dʌz ɪt teɪk səʊ lɒŋ tə ˈprəʊses ðɪs ˈviːzə ˌæplɪˈkeɪʃn/'
            }
        },
        realLifeSentences: [
            { en: 'It takes only two minutes to create an account.', bn: 'একটি অ্যাকাউন্ট তৈরি করতে মাত্র দুই মিনিট সময় লাগে।', ipa: '/ɪt teɪks ˈəʊnli tuː ˈmɪnɪts tə kriˈeɪt ən əˈkaʊnt/', context: 'সহজ নির্দেশনা', type: 'positive' },
            { en: 'It took me three months to build conversational fluency.', bn: 'কথোপকথনে সাবলীল হতে আমার তিন মাস সময় লেগেছিল।', ipa: '/ɪt tʊk miː θriː mʌnθs tə bɪld ˌkɒnvəˈseɪʃənl ˈfluːənsi/', context: 'ব্যক্তিগত সাফল্যের গল্প', type: 'positive' },
            { en: 'How long does it take by car to reach the international airport?', bn: 'গাড়িতে করে আন্তর্জাতিক বিমানবন্দরে পৌঁছাতে কত সময় লাগে?', ipa: '/haʊ lɒŋ dʌz ɪt teɪk baɪ kɑː tə riːtʃ ði ˌɪntəˈnæʃnəl ˈeəpɔːt/', context: 'ভ্রমণ সময়ের হিসাব', type: 'question' },
            { en: 'It doesn\'t take much effort to say a polite thank you.', bn: 'ভদ্রভাবে একটি ধন্যবাদ জানাতে খুব বেশি কষ্ট করতে হয় না।', ipa: '/ɪt ˈdʌznt teɪk mʌtʃ ˈefət tə seɪ ə pəˈlaɪt θæŋk juː/', context: 'সামাজিক শিষ্টাচার', type: 'negative' }
        ],
        nativeVariations: {
            situation: 'বলতে চাওয়া: "এতে কোনো সময় লাগবে না"',
            standard: 'It will take very little time.',
            nativeStyle: 'It\'ll take no time at all / It\'ll be done in a jiffy.',
            waysToSay: [
                { phrasing: 'It won\'t take a second.', tone: 'ক্যাজুয়াল ও দ্রুত', bn: 'এতে এক সেকেন্ডও লাগবে না।' },
                { phrasing: 'I\'ll be done before you know it.', tone: 'নেটিভ ফ্লুয়েন্ট', bn: 'আপনি বুঝে ওঠার আগেই আমার কাজ শেষ হয়ে যাবে।' },
                { phrasing: 'It takes two to tango.', tone: 'বিখ্যাত প্রবাদ', bn: 'একহাতে কখনো তালি বাজে না।' }
            ],
            tip: '💡 অতীতে সময় লেগেছিল বোঝাতে "It took" এবং ভবিষ্যতে সময় লাগবে বোঝাতে "It will take" ব্যবহৃত হয়।'
        },
        qaDrill: {
            targetQuestion: {
                en: 'How long will it take to master everyday Spoken English?',
                bn: 'দৈনন্দিন স্পোকেন ইংলিশ পুরোপুরি আয়ত্ত করতে কতদিন সময় লাগবে?',
                ipa: '/haʊ lɒŋ wɪl ɪt teɪk tə ˈmɑːstər ˈevrideɪ ˈspəʊkən ˈɪŋɡlɪʃ/'
            },
            possibleAnswers: [
                { style: 'সংক্ষিপ্ত সম্মতি (Short Affirmative)', en: 'With 30 minutes of daily speaking, it takes about three months.', bn: 'প্রতিদিন ৩০ মিনিট প্র্যাকটিস করলে প্রায় তিন মাস সময় লাগে।', ipa: '/wɪð ˈθɜːti ˈmɪnɪts ɒv ˈdeɪli ˈspiːkɪŋ ɪt teɪks əˈbaʊt θriː mʌnθs/' },
                { style: 'বিস্তারিত উত্তর (Elaborated)', en: 'It takes consistent effort: shadowing audio, speaking aloud, and building vocabulary.', bn: 'ধারাবাহিক প্রচেষ্টা প্রয়োজন: অডিও শুনে অনুকরণ করা, জোরে জোরে বলা ও শব্দভাণ্ডার বাড়ানো।', ipa: '/ɪt teɪks kənˈsɪstənt ˈefət ˈʃædəʊɪŋ ˈɔːdiəʊ ˈspiːkɪŋ əˈlaʊd ænd ˈbɪldɪŋ vəˈkæbjələri/' },
                { style: 'না-বাচক উত্তর (Polite Negative)', en: 'It doesn\'t take an expensive course; solo practice works wonders.', bn: 'কোনো দামি কোর্সের প্রয়োজন নেই; একা একা প্র্যাকটিস করলেই চমৎকার ফল মেলে।', ipa: '/ɪt ˈdʌznt teɪk ən ɪkˈspensɪv kɔːs ˈsəʊləʊ ˈpræktɪs wɜːks ˈwʌndəz/' },
                { style: 'বিকল্প বা দ্বিধা (Alternative / Uncertainty)', en: 'It depends on your consistency; immersion speeds up the timeline.', bn: 'এটা আপনার নিয়মানুবর্তিতার ওপর নির্ভর করে; পরিবেশ তৈরি করলে সময় অনেক কমে আসে।', ipa: '/ɪt dɪˈpendz ɒn jɔː kənˈsɪstənsi ɪˈmɜːʃn spiːdz ʌp ðə ˈtaɪmlaɪn/' }
            ]
        },
        conversation: [
          {
                    "speaker": "A",
                    "type": "practice",
                    "en": "Do you practice this spoken structure daily?",
                    "bn": "তুমি কি প্রতিদিন এই স্পোকেন স্ট্রাকচারটি চর্চা করো?",
                    "ipa": "/duː juː ˈpræktɪs ðɪs ˈspəʊkən ˈstrʌktʃə ˈdeɪli/",
                    "bn_pron": "ডু ইউ প্র্যাকটিস দিস স্পোকেন স্ট্রাকচার ডেইলি?"
          },
          {
                    "speaker": "B",
                    "type": "practice",
                    "en": "Yes, I practice it aloud for fifteen minutes every day.",
                    "bn": "হ্যাঁ, আমি প্রতিদিন পনের মিনিট এটি জোরে জোরে মুখে বলি।",
                    "ipa": "/jes aɪ ˈpræktɪs ɪt əˈlaʊd/",
                    "bn_pron": "ইয়েস, আই প্র্যাকটিস ইট অ্যালাউড ফর ফিফটিন মিনিটস।"
          },
          {
                    "speaker": "A",
                    "type": "practice",
                    "en": "Does it help improve your fluency and speed?",
                    "bn": "এটি কি তোমার ফ্লুয়েন্সি ও গতি বাড়াতে সাহায্য করে?",
                    "ipa": "/dʌz ɪt help ɪmˈpruːv jɔː ˈfluːənsi/",
                    "bn_pron": "ডায ইট হেল্প ইমপ্রুভ ইয়োর ফ্লুয়েন্সি?"
          },
          {
                    "speaker": "B",
                    "type": "practice",
                    "en": "Definitely! I can now speak naturally without thinking of rules.",
                    "bn": "অবশ্যই! এখন নিয়ম না ভেবেই মুখে স্বতঃস্ফূর্তভাবে বাক্য আসে।",
                    "ipa": "/ˈdefɪnətli aɪ kæn naʊ spiːk ˈnætʃrəli/",
                    "bn_pron": "ডেফিনেটলি! আই ক্যান নাও স্পীক ন্যাচারালি।"
          },
          {
                    "speaker": "A",
                    "type": "real",
                    "en": "Could we practice conversation together every evening?",
                    "bn": "আমরা কি প্রতিদিন সন্ধ্যায় একসাথে স্পোকেন প্র্যাকটিস করতে পারি?",
                    "ipa": "/kʊd wiː ˈpræktɪs ˌkɒnvəˈseɪʃn təˈɡeðə/",
                    "bn_pron": "কুড উই প্র্যাকটিস কনভারসেশন টুগেদার?"
          },
          {
                    "speaker": "B",
                    "type": "real",
                    "en": "That would be wonderful! Let's start from tomorrow.",
                    "bn": "দারুণ হবে! চলো কাল থেকেই শুরু করা যাক।",
                    "ipa": "/ðæt wʊd biː ˈwʌndəfl lets stɑːt frɒm təˈmɒrəʊ/",
                    "bn_pron": "দ্যাট উড বি ওয়ান্ডারফুল! লেটস স্টার্ট ফ্রম টুমরো।"
          }
],
        sentenceBuilder: {
            subjects: ['It takes', 'It took me', 'It will take', 'How long does it take', 'Why does it take'],
            auxOrVerbs: ['twenty minutes', 'a lot of patience', 'two months', 'hardly any time', 'only five seconds'],
            complements: ['to reach the office', 'to master IELTS speaking', 'to cook this delicious recipe', 'to solve this puzzle', 'to download the application']
        }
    },
    {
        id: "lesson-16-present-perfect-continuous",
        lessonNumber: 16,
        title: "Present Perfect Continuous: have/has been + V-ing",
        subtitle: "অতীতে শুরু হওয়া কাজ এখনো চলছে, স্থায়িত্ব ও সময়ের পরিমাপ প্রকাশ (Since vs For)",
        phase: "tenses",
        phaseLabel: "কাল ও স্থায়িত্ব (Perfect Continuous)",
        level: "Intermediate",
        concept: {
            explanation: "কোনো কাজ অতীতে শুরু হয়ে এখনো চোখের সামনে চলছে এবং বাক্যে সময়ের উল্লেখ থাকে (যেমন: সকাল থেকে, ২ ঘণ্টা ধরে) তখন have been বা has been + Verb-ing বসে। নির্দিষ্ট সময়ের শুরু বোঝালে 'Since' (যেমন: Since morning, Since 2020) এবং মোট সময়ের ব্যাপ্তি বোঝালে 'For' (যেমন: For 2 hours, For three days) বসে।",
            whenToUse: "কাজের স্থায়িত্ব বা কতক্ষণ ধরে কাজটি চলমান রয়েছে তা সুনির্দিষ্টভাবে তুলে ধরতে।",
            commonMistake: "বাঙালি শিক্ষার্থীরা ভুল করে বলে 'I am waiting for you since morning' — এটি ভুল! সময় উল্লেখ থাকলে কন্টিনিউয়াস হয় না, অবশ্যই বলতে হবে: 'I have been waiting for you since morning' (বা 'He has been living here for 5 years')।",
            formulaSummary: "I/We/You/They + have been + V-ing | He/She/It + has been + V-ing (+ since/for + time)"
        },
        transformation6Way: {
            baseConcept: "Present Perfect Continuous: have/has been + V-ing",
            positive: {
                formula: "I/We/You/They + have been + V-ing | He/She/It + has been + V-ing (+ since/for + time)",
                en: "I have been learning English for three months.",
                bn: "আমি তিন মাস ধরে ইংরেজি শিখছি।",
                ipa: "/aɪ hæv biːn ˈlɜːnɪŋ ˈɪŋɡlɪʃ fɔː θriː mʌnθs/"
            },
            negative: {
                formula: "Subject + Auxiliary Negative + Verb + Extension",
                en: "I haven't been sleeping well for the last two days.",
                bn: "গত দুই দিন ধরে আমার ভালো ঘুম হচ্ছে না।",
                ipa: "/aɪ hævnt biːn ˈsliːpɪŋ wel fɔː ðə lɑːst tuː deɪz/"
            },
            interrogative: {
                formula: "Auxiliary + Subject + Verb + Extension?",
                en: "Have you been waiting here for a long time?",
                bn: "তুমি কি এখানে অনেকক্ষণ ধরে অপেক্ষা করছো?",
                ipa: "/hæv juː biːn ˈweɪtɪŋ hɪə fɔːr ə lɒŋ taɪm/"
            },
            interroNegative: {
                formula: "Auxiliary Negative + Subject + Verb + Extension?",
                en: "Haven't you been feeling well lately?",
                bn: "সাম্প্রতিক সময়ে তোমার কি শরীর ভালো লাগছে না?",
                ipa: "/hævnt juː biːn ˈfiːlɪŋ wel ˈleɪtli/"
            },
            whPositive: {
                formula: "WH-Word + Auxiliary + Subject + Verb + Extension?",
                en: "How long have you been living in Dhaka?",
                bn: "তুমি ঢাকায় কতদিন ধরে বাস করছো?",
                ipa: "/haʊ lɒŋ hæv juː biːn ˈlɪvɪŋ ɪn ˈdækə/"
            },
            whNegative: {
                formula: "WH-Word + Auxiliary Negative + Subject + Verb + Extension?",
                en: "Why haven't they been attending the meetings regularly?",
                bn: "তারা কেন নিয়মিত মিটিংয়ে যোগ দিচ্ছে না?",
                ipa: "/waɪ hævnt ðeɪ biːn əˈtendɪŋ ðə ˈmiːtɪŋz ˈreɡjələli/"
            }
        },
        realLifeSentences: [
            { en: "I have been learning English for three months.", bn: "আমি তিন মাস ধরে ইংরেজি শিখছি।", ipa: "/aɪ hæv biːn ˈlɜːnɪŋ ˈɪŋɡlɪʃ fɔː θriː mʌnθs/", context: "দৈনন্দিন বাস্তব প্রয়োগ", type: "positive" },
            { en: "I haven't been sleeping well for the last two days.", bn: "গত দুই দিন ধরে আমার ভালো ঘুম হচ্ছে না।", ipa: "/aɪ hævnt biːn ˈsliːpɪŋ wel fɔː ðə lɑːst tuː deɪz/", context: "না-বাচক স্পষ্ট বিবৃতি", type: "negative" },
            { en: "Have you been waiting here for a long time?", bn: "তুমি কি এখানে অনেকক্ষণ ধরে অপেক্ষা করছো?", ipa: "/hæv juː biːn ˈweɪtɪŋ hɪə fɔːr ə lɒŋ taɪm/", context: "ভদ্র ও স্বাভাবিক প্রশ্ন", type: "question" },
            { en: "How long have you been living in Dhaka?", bn: "তুমি ঢাকায় কতদিন ধরে বাস করছো?", ipa: "/haʊ lɒŋ hæv juː biːn ˈlɪvɪŋ ɪn ˈdækə/", context: "তথ্যবহুল অনুসন্ধানী প্রশ্ন", type: "wh" }
        ],
        nativeVariations: {
            situation: "বলতে চাওয়া: \"আমি তিন মাস ধরে ইংরেজি শিখছি।\"",
            standard: "I have been learning English for three months.",
            nativeStyle: "I have been learning English for three months.",
            waysToSay: [
                { phrasing: "I have been learning English for three months.", tone: "পেশাদার ও স্পষ্ট", bn: "আমি তিন মাস ধরে ইংরেজি শিখছি।" },
                { phrasing: "Have you been waiting here for a long time?", tone: "ভদ্র ও চমৎকার", bn: "তুমি কি এখানে অনেকক্ষণ ধরে অপেক্ষা করছো?" },
                { phrasing: "How long have you been living in Dhaka?", tone: "বিশ্লেষণধর্মী", bn: "তুমি ঢাকায় কতদিন ধরে বাস করছো?" }
            ],
            tip: "💡 এই কাঠামোর নিয়মিত চর্চা আপনার স্পিকিংকে আরও সাবলীল ও আন্তর্জাতিক মানের করে তুলবে।"
        },
        qaDrill: {
            targetQuestion: {
                en: "How long have you been working at your current company?",
                bn: "তোমার বর্তমান কোম্পানিতে কতদিন ধরে কাজ করছো?",
                ipa: "/hæv juː biːn/"
            },
            possibleAnswers: [
                { style: "সংক্ষিপ্ত সম্মতি (Short Affirmative)", en: "Yes, absolutely! I find it very rewarding.", bn: "হ্যাঁ, অবশ্যই! এটি আমার কাছে দারুণ ফলপ্রসূ মনে হয়।", ipa: "/jes ˌæbsəˈluːtli/" },
                { style: "বিস্তারিত উত্তর (Elaborated)", en: "I have been learning English for three months.", bn: "আমি তিন মাস ধরে ইংরেজি শিখছি।", ipa: "/aɪ hæv biːn ˈlɜːnɪŋ ˈɪŋɡlɪʃ fɔː θriː mʌnθs/" },
                { style: "না-বাচক উত্তর (Polite Negative)", en: "Not quite, but I am planning to start soon.", bn: "পুরোপুরি নয়, তবে খুব শীঘ্রই শুরু করার পরিকল্পনা করছি।", ipa: "/nɒt kwaɪt/" },
                { style: "বিকল্প বা দ্বিধা (Alternative / Uncertainty)", en: "It varies depending on my daily schedule.", bn: "আমার দৈনন্দিন রুটিনের ওপর ভিত্তি করে এটি পরিবর্তিত হয়।", ipa: "/ɪt ˈveəriz/" }
            ]
        },
        sentenceBuilder: {
            subjects: ["I have been", "She has been", "They have been", "How long have you been", "We haven't been"],
            auxOrVerbs: ["working diligently", "practicing IELTS", "living happily", "waiting patiently", "studying online"],
            complements: ["for more than two years", "since early this morning", "for the last six months", "since we graduated", "for hours and hours"]
        }
    },
    {
        id: "lesson-17-tense-compare-continuous-perfect",
        lessonNumber: 17,
        title: "Tense Comparison: Continuous vs Perfect Continuous",
        subtitle: "\"I am working\" বনাম \"I have been working for 2 hours\" (সময়ের পার্থক্য)",
        phase: "comparisons",
        phaseLabel: "টেন্স তুলনা (Comparison)",
        level: "Intermediate",
        concept: {
            explanation: "Present Continuous (am/is/are + V-ing) কেবল এই মুহূর্তের কাজের ওপর ফোকাস করে (Right now action, কোনো সময়ের উল্লেখ ছাড়া)। অপরদিকে Present Perfect Continuous (have/has been + V-ing) অতীতে কাজ শুরুর পয়েন্ট থেকে এখন পর্যন্ত কাজের স্থায়িত্বের ওপর ফোকাস করে।",
            whenToUse: "যখন কাজের সাথে সময় যুক্ত হবে (for/since), তখনই Perfect Continuous ব্যবহার করতে হবে। আর যখন সময় থাকবে না, শুধুই এখনকার কাজ বোঝাবে, তখন সাধারণ Continuous।",
            commonMistake: "কখনোই 'It is raining for two hours' বলবেন না। সময় থাকলে অবশ্যই 'It has been raining for two hours' বলতে হবে।",
            formulaSummary: "No Time: Subject + am/is/are + V-ing | With Time (since/for): Subject + have/has been + V-ing"
        },
        transformation6Way: {
            baseConcept: "Tense Comparison: Continuous vs Perfect Continuous",
            positive: {
                formula: "No Time: Subject + am/is/are + V-ing | With Time (since/for): Subject + have/has been + V-ing",
                en: "I am reading now, but I have been reading this book for two days.",
                bn: "আমি এখন পড়ছি, তবে আমি এই বইটি দুই দিন ধরে পড়ছি।",
                ipa: "/aɪ æm ˈriːdɪŋ naʊ bʌt aɪ hæv biːn ˈriːdɪŋ ðɪs bʊk fɔː tuː deɪz/"
            },
            negative: {
                formula: "Subject + Auxiliary Negative + Verb + Extension",
                en: "He is not crying, he has just been chopping onions.",
                bn: "সে কাঁদছে না, সে কিছুক্ষণ ধরে পেঁয়াজ কাটছিল।",
                ipa: "/hiː ɪz nɒt ˈkraɪɪŋ hiː hæz dʒʌst biːn ˈtʃɒpɪŋ ˈʌnjənz/"
            },
            interrogative: {
                formula: "Auxiliary + Subject + Verb + Extension?",
                en: "Are you cooking right now, or have you been cooking all afternoon?",
                bn: "তুমি কি এখন রান্না করছো, নাকি সারা দুপুর ধরে রান্না করছো?",
                ipa: "/ɑː juː ˈkʊkɪŋ raɪt naʊ ɔː hæv juː biːn ˈkʊkɪŋ ɔːl ˌɑːftəˈnuːn/"
            },
            interroNegative: {
                formula: "Auxiliary Negative + Subject + Verb + Extension?",
                en: "Aren't you leaving yet? Haven't you been packing since morning?",
                bn: "তুমি এখনো রওনা হচ্ছ না? সকাল থেকে কি গোছাচ্ছ না?",
                ipa: "/ɑːnt juː ˈliːvɪŋ jet hævnt juː biːn ˈpækɪŋ sɪns ˈmɔːnɪŋ/"
            },
            whPositive: {
                formula: "WH-Word + Auxiliary + Subject + Verb + Extension?",
                en: "What are you doing versus what have you been doing all week?",
                bn: "তুমি এখন কী করছো বনাম পুরো সপ্তাহ জুড়ে কী করছিলে?",
                ipa: "/wɒt ɑː juː ˈduːɪŋ ˈvɜːsəs wɒt hæv juː biːn ˈduːɪŋ ɔːl wiːk/"
            },
            whNegative: {
                formula: "WH-Word + Auxiliary Negative + Subject + Verb + Extension?",
                en: "Why aren't you resting if you have been typing for hours?",
                bn: "তুমি বিশ্রাম নিচ্ছ না কেন যদি তুমি ঘণ্টার পর ঘণ্টা টাইপ করে থাকো?",
                ipa: "/waɪ ɑːnt juː ˈrestɪŋ ɪf juː hæv biːn ˈtaɪpɪŋ fɔːr ˈaʊəz/"
            }
        },
        realLifeSentences: [
            { en: "I am reading now, but I have been reading this book for two days.", bn: "আমি এখন পড়ছি, তবে আমি এই বইটি দুই দিন ধরে পড়ছি।", ipa: "/aɪ æm ˈriːdɪŋ naʊ bʌt aɪ hæv biːn ˈriːdɪŋ ðɪs bʊk fɔː tuː deɪz/", context: "দৈনন্দিন বাস্তব প্রয়োগ", type: "positive" },
            { en: "He is not crying, he has just been chopping onions.", bn: "সে কাঁদছে না, সে কিছুক্ষণ ধরে পেঁয়াজ কাটছিল।", ipa: "/hiː ɪz nɒt ˈkraɪɪŋ hiː hæz dʒʌst biːn ˈtʃɒpɪŋ ˈʌnjənz/", context: "না-বাচক স্পষ্ট বিবৃতি", type: "negative" },
            { en: "Are you cooking right now, or have you been cooking all afternoon?", bn: "তুমি কি এখন রান্না করছো, নাকি সারা দুপুর ধরে রান্না করছো?", ipa: "/ɑː juː ˈkʊkɪŋ raɪt naʊ ɔː hæv juː biːn ˈkʊkɪŋ ɔːl ˌɑːftəˈnuːn/", context: "ভদ্র ও স্বাভাবিক প্রশ্ন", type: "question" },
            { en: "What are you doing versus what have you been doing all week?", bn: "তুমি এখন কী করছো বনাম পুরো সপ্তাহ জুড়ে কী করছিলে?", ipa: "/wɒt ɑː juː ˈduːɪŋ ˈvɜːsəs wɒt hæv juː biːn ˈduːɪŋ ɔːl wiːk/", context: "তথ্যবহুল অনুসন্ধানী প্রশ্ন", type: "wh" }
        ],
        nativeVariations: {
            situation: "বলতে চাওয়া: \"আমি এখন পড়ছি, তবে আমি এই বইটি দুই দিন ধরে পড়ছি।\"",
            standard: "I am reading now, but I have been reading this book for two days.",
            nativeStyle: "I am reading now, but I have been reading this book for two days.",
            waysToSay: [
                { phrasing: "I am reading now, but I have been reading this book for two days.", tone: "পেশাদার ও স্পষ্ট", bn: "আমি এখন পড়ছি, তবে আমি এই বইটি দুই দিন ধরে পড়ছি।" },
                { phrasing: "Are you cooking right now, or have you been cooking all afternoon?", tone: "ভদ্র ও চমৎকার", bn: "তুমি কি এখন রান্না করছো, নাকি সারা দুপুর ধরে রান্না করছো?" },
                { phrasing: "What are you doing versus what have you been doing all week?", tone: "বিশ্লেষণধর্মী", bn: "তুমি এখন কী করছো বনাম পুরো সপ্তাহ জুড়ে কী করছিলে?" }
            ],
            tip: "💡 এই কাঠামোর নিয়মিত চর্চা আপনার স্পিকিংকে আরও সাবলীল ও আন্তর্জাতিক মানের করে তুলবে।"
        },
        qaDrill: {
            targetQuestion: {
                en: "Are you waiting for the bus, or have you been waiting here for a long time?",
                bn: "তুমি কি বাসের অপেক্ষা করছো, নাকি এখানে অনেকক্ষণ ধরে অপেক্ষা করছো?",
                ipa: "/hæv juː biːn/"
            },
            possibleAnswers: [
                { style: "সংক্ষিপ্ত সম্মতি (Short Affirmative)", en: "Yes, absolutely! I find it very rewarding.", bn: "হ্যাঁ, অবশ্যই! এটি আমার কাছে দারুণ ফলপ্রসূ মনে হয়।", ipa: "/jes ˌæbsəˈluːtli/" },
                { style: "বিস্তারিত উত্তর (Elaborated)", en: "I am reading now, but I have been reading this book for two days.", bn: "আমি এখন পড়ছি, তবে আমি এই বইটি দুই দিন ধরে পড়ছি।", ipa: "/aɪ æm ˈriːdɪŋ naʊ bʌt aɪ hæv biːn ˈriːdɪŋ ðɪs bʊk fɔː tuː deɪz/" },
                { style: "না-বাচক উত্তর (Polite Negative)", en: "Not quite, but I am planning to start soon.", bn: "পুরোপুরি নয়, তবে খুব শীঘ্রই শুরু করার পরিকল্পনা করছি।", ipa: "/nɒt kwaɪt/" },
                { style: "বিকল্প বা দ্বিধা (Alternative / Uncertainty)", en: "It varies depending on my daily schedule.", bn: "আমার দৈনন্দিন রুটিনের ওপর ভিত্তি করে এটি পরিবর্তিত হয়।", ipa: "/ɪt ˈveəriz/" }
            ]
        },
        sentenceBuilder: {
            subjects: ["I am", "I have been", "She is", "She has been", "Why are you"],
            auxOrVerbs: ["working on this task", "waiting for the doctor", "studying English", "looking for my keys", "cooking dinner"],
            complements: ["right now", "for over two hours", "at the moment", "since 9 o'clock", "all day long"]
        }
    },
    {
        id: "lesson-18-tense-compare-present-perfect-past-simple",
        lessonNumber: 18,
        title: "Tense Comparison: Present Perfect vs Past Simple",
        subtitle: "\"I have done\" বনাম \"I did\" (সমাপ্ত ঘটনা বনাম বর্তমান প্রভাব)",
        phase: "comparisons",
        phaseLabel: "টেন্স তুলনা (Comparison)",
        level: "Intermediate",
        concept: {
            explanation: "Past Simple নির্দেশ করে অতীত সময়ের কোনো নির্দিষ্ট সমাপ্ত মুহূর্ত (যেমন: yesterday, last week, in 2021, 2 hours ago)। আর Present Perfect নির্দেশ করে অতীত অভিজ্ঞতার বর্তমান তাৎপর্য বা অনির্দিষ্ট অতীতে ঘটা কাজ (যেমন: already, yet, just, ever, never, so far)।",
            whenToUse: "সময়ের উল্লেখ সুনির্দিষ্ট থাকলে Past Simple (I met him yesterday)। আর বর্তমানের সাথে ফলাফল সম্পর্কিত থাকলে বা সময় উহ্য থাকলে Present Perfect (I have met him already)।",
            commonMistake: "'I have seen him yesterday' বলা মস্ত বড় ভুল! নির্দিষ্ট অতীত সময় থাকলে কখনোই Present Perfect হবে না; বলতে হবে 'I saw him yesterday' বা 'I have seen him recently'।",
            formulaSummary: "Specific Past Time (yesterday/last year): Did / V2 | Unspecified / Experience: Have/Has + V3"
        },
        transformation6Way: {
            baseConcept: "Tense Comparison: Present Perfect vs Past Simple",
            positive: {
                formula: "Specific Past Time (yesterday/last year): Did / V2 | Unspecified / Experience: Have/Has + V3",
                en: "I visited London in 2022, but I have visited many other countries too.",
                bn: "আমি ২০২২ সালে লন্ডন গিয়েছিলাম, তবে আমি আরও অনেক দেশেও ভ্রমণ করেছি।",
                ipa: "/aɪ ˈvɪzɪtɪd ˈlʌndən ɪn 2022 bʌt aɪ hæv ˈvɪzɪtɪd ˈmeni ˈʌðə ˈkʌntriz tuː/"
            },
            negative: {
                formula: "Subject + Auxiliary Negative + Verb + Extension",
                en: "I didn't call him yesterday because I haven't recharged my phone yet.",
                bn: "আমি তাকে গতকাল কল করিনি কারণ আমি এখনো ফোনে রিচার্জ করিনি।",
                ipa: "/aɪ dɪdnt kɔːl hɪm ˈjestədeɪ bɪˈkɒz aɪ hævnt riːˈtʃɑːdʒd maɪ fəʊn jet/"
            },
            interrogative: {
                formula: "Auxiliary + Subject + Verb + Extension?",
                en: "Did you watch the match last night, or have you already seen the highlights?",
                bn: "তুমি কি কাল রাতে ম্যাচটি দেখেছিলে, নাকি ইতিমধ্যে হাইলাইটস দেখে ফেলেছো?",
                ipa: "/dɪd juː wɒtʃ ðə mætʃ lɑːst naɪt ɔː hæv juː ɔːlˈredi siːn ðə ˈhaɪlaɪts/"
            },
            interroNegative: {
                formula: "Auxiliary Negative + Subject + Verb + Extension?",
                en: "Didn't you submit the file, or haven't you finished it yet?",
                bn: "তুমি ফাইলটা জমা দেওনি, নাকি এখনো শেষ করতে পারোনি?",
                ipa: "/dɪdnt juː səbˈmɪt ðə faɪl ɔː hævnt juː ˈfɪnɪʃt ɪt jet/"
            },
            whPositive: {
                formula: "WH-Word + Auxiliary + Subject + Verb + Extension?",
                en: "When did you arrive, and what exciting places have you explored so far?",
                bn: "তুমি কখন পৌঁছালে, এবং এ পর্যন্ত তুমি কোন চমৎকার জায়গাগুলো ঘুরেছো?",
                ipa: "/wen dɪd juː əˈraɪv ænd wɒt ɪkˈsaɪtɪŋ ˈpleɪsɪz hæv juː ɪkˈsplɔːd səʊ fɑː/"
            },
            whNegative: {
                formula: "WH-Word + Auxiliary Negative + Subject + Verb + Extension?",
                en: "Why didn't you inform me when you have already known about the change?",
                bn: "তুমি আমাকে জানাওনি কেন যেখানে তুমি পরিবর্তনের বিষয়টি আগেই জানতে?",
                ipa: "/waɪ dɪdnt juː ɪnˈfɔːm miː wen juː hæv ɔːlˈredi nəʊn əˈbaʊt ðə tʃeɪndʒ/"
            }
        },
        realLifeSentences: [
            { en: "I visited London in 2022, but I have visited many other countries too.", bn: "আমি ২০২২ সালে লন্ডন গিয়েছিলাম, তবে আমি আরও অনেক দেশেও ভ্রমণ করেছি।", ipa: "/aɪ ˈvɪzɪtɪd ˈlʌndən ɪn 2022 bʌt aɪ hæv ˈvɪzɪtɪd ˈmeni ˈʌðə ˈkʌntriz tuː/", context: "দৈনন্দিন বাস্তব প্রয়োগ", type: "positive" },
            { en: "I didn't call him yesterday because I haven't recharged my phone yet.", bn: "আমি তাকে গতকাল কল করিনি কারণ আমি এখনো ফোনে রিচার্জ করিনি।", ipa: "/aɪ dɪdnt kɔːl hɪm ˈjestədeɪ bɪˈkɒz aɪ hævnt riːˈtʃɑːdʒd maɪ fəʊn jet/", context: "না-বাচক স্পষ্ট বিবৃতি", type: "negative" },
            { en: "Did you watch the match last night, or have you already seen the highlights?", bn: "তুমি কি কাল রাতে ম্যাচটি দেখেছিলে, নাকি ইতিমধ্যে হাইলাইটস দেখে ফেলেছো?", ipa: "/dɪd juː wɒtʃ ðə mætʃ lɑːst naɪt ɔː hæv juː ɔːlˈredi siːn ðə ˈhaɪlaɪts/", context: "ভদ্র ও স্বাভাবিক প্রশ্ন", type: "question" },
            { en: "When did you arrive, and what exciting places have you explored so far?", bn: "তুমি কখন পৌঁছালে, এবং এ পর্যন্ত তুমি কোন চমৎকার জায়গাগুলো ঘুরেছো?", ipa: "/wen dɪd juː əˈraɪv ænd wɒt ɪkˈsaɪtɪŋ ˈpleɪsɪz hæv juː ɪkˈsplɔːd səʊ fɑː/", context: "তথ্যবহুল অনুসন্ধানী প্রশ্ন", type: "wh" }
        ],
        nativeVariations: {
            situation: "বলতে চাওয়া: \"আমি ২০২২ সালে লন্ডন গিয়েছিলাম, তবে আমি আরও অনেক দেশেও ভ্রমণ করেছি।\"",
            standard: "I visited London in 2022, but I have visited many other countries too.",
            nativeStyle: "I visited London in 2022, but I have visited many other countries too.",
            waysToSay: [
                { phrasing: "I visited London in 2022, but I have visited many other countries too.", tone: "পেশাদার ও স্পষ্ট", bn: "আমি ২০২২ সালে লন্ডন গিয়েছিলাম, তবে আমি আরও অনেক দেশেও ভ্রমণ করেছি।" },
                { phrasing: "Did you watch the match last night, or have you already seen the highlights?", tone: "ভদ্র ও চমৎকার", bn: "তুমি কি কাল রাতে ম্যাচটি দেখেছিলে, নাকি ইতিমধ্যে হাইলাইটস দেখে ফেলেছো?" },
                { phrasing: "When did you arrive, and what exciting places have you explored so far?", tone: "বিশ্লেষণধর্মী", bn: "তুমি কখন পৌঁছালে, এবং এ পর্যন্ত তুমি কোন চমৎকার জায়গাগুলো ঘুরেছো?" }
            ],
            tip: "💡 এই কাঠামোর নিয়মিত চর্চা আপনার স্পিকিংকে আরও সাবলীল ও আন্তর্জাতিক মানের করে তুলবে।"
        },
        qaDrill: {
            targetQuestion: {
                en: "Have you ever eaten Italian food, or did you try it when you were abroad?",
                bn: "তুমি কি কখনো ইতালীয় খাবার খেয়েছো, নাকি বিদেশে থাকার সময় চেষ্টা করেছিলে?",
                ipa: "/hæv juː biːn/"
            },
            possibleAnswers: [
                { style: "সংক্ষিপ্ত সম্মতি (Short Affirmative)", en: "Yes, absolutely! I find it very rewarding.", bn: "হ্যাঁ, অবশ্যই! এটি আমার কাছে দারুণ ফলপ্রসূ মনে হয়।", ipa: "/jes ˌæbsəˈluːtli/" },
                { style: "বিস্তারিত উত্তর (Elaborated)", en: "I visited London in 2022, but I have visited many other countries too.", bn: "আমি ২০২২ সালে লন্ডন গিয়েছিলাম, তবে আমি আরও অনেক দেশেও ভ্রমণ করেছি।", ipa: "/aɪ ˈvɪzɪtɪd ˈlʌndən ɪn 2022 bʌt aɪ hæv ˈvɪzɪtɪd ˈmeni ˈʌðə ˈkʌntriz tuː/" },
                { style: "না-বাচক উত্তর (Polite Negative)", en: "Not quite, but I am planning to start soon.", bn: "পুরোপুরি নয়, তবে খুব শীঘ্রই শুরু করার পরিকল্পনা করছি।", ipa: "/nɒt kwaɪt/" },
                { style: "বিকল্প বা দ্বিধা (Alternative / Uncertainty)", en: "It varies depending on my daily schedule.", bn: "আমার দৈনন্দিন রুটিনের ওপর ভিত্তি করে এটি পরিবর্তিত হয়।", ipa: "/ɪt ˈveəriz/" }
            ]
        },
        sentenceBuilder: {
            subjects: ["I saw him", "I have seen him", "Did you complete", "Have you completed", "She arrived"],
            auxOrVerbs: ["yesterday afternoon", "many times before", "last night", "already today", "two hours ago"],
            complements: ["at the office gate", "with tremendous enthusiasm", "before the deadline", "in front of everyone", "without any hesitation"]
        }
    },
    {
        id: "lesson-19-past-continuous",
        lessonNumber: 19,
        title: "Past Continuous: was / were + V-ing",
        subtitle: "অতীতে কোনো কাজ চলার মাঝখানে আরেকটি ঘটনা ঘটা (When & While)",
        phase: "tenses",
        phaseLabel: "অতীত চলমান (Past Continuous)",
        level: "Intermediate",
        concept: {
            explanation: "অতীতে কোনো নির্দিষ্ট সময়ে একটি কাজ চলছিল (চলমান ছিল) বোঝাতে was/were + Verb-ing ব্যবহৃত হয়। প্রায়ই একটি দীর্ঘ কাজের (Past Continuous) মাঝখানে একটি আকস্মিক ছোট ঘটনা (Past Simple) ঘটার বর্ণনায় When বা While বসে।",
            whenToUse: "'আমি যখন বাড়ি ফিরছিলাম তখন বৃষ্টি শুরু হয়েছিল' (While I was going home, it began to rain)।",
            commonMistake: "বাঙালি শিক্ষার্থীরা দুটোতেই সাধারণ অতীত ব্যবহার করে। সঠিকভাবে চলমান কাজটি বোঝাতে 'was/were + ing' ব্যবহার নিশ্চিত করুন।",
            formulaSummary: "Subject + was/were + Verb-ing | When + Past Simple, While + Past Continuous"
        },
        transformation6Way: {
            baseConcept: "Past Continuous: was / were + V-ing",
            positive: {
                formula: "Subject + was/were + Verb-ing | When + Past Simple, While + Past Continuous",
                en: "I was cooking dinner when the doorbell rang suddenly.",
                bn: "আমি যখন রাতের খাবার রান্না করছিলাম তখন হঠাৎ দরজার বেল বেজে উঠল।",
                ipa: "/aɪ wəz ˈkʊkɪŋ ˈdɪnər wen ðə ˈdɔːbel ræŋ ˈsʌdənli/"
            },
            negative: {
                formula: "Subject + Auxiliary Negative + Verb + Extension",
                en: "They were not paying attention while the teacher was explaining.",
                bn: "শিক্ষক যখন বুঝিয়ে দিচ্ছিলেন তখন তারা মনোযোগ দিচ্ছিল না।",
                ipa: "/ðeɪ wɜː nɒt ˈpeɪɪŋ əˈtenʃn waɪl ðə ˈtiːtʃər wəz ɪkˈspleɪnɪŋ/"
            },
            interrogative: {
                formula: "Auxiliary + Subject + Verb + Extension?",
                en: "Were you sleeping when I called you last night?",
                bn: "কাল রাতে যখন আমি তোমাকে কল করেছিলাম তুমি কি ঘুমাচ্ছিলে?",
                ipa: "/wɜː juː ˈsliːpɪŋ wen aɪ kɔːld juː lɑːst naɪt/"
            },
            interroNegative: {
                formula: "Auxiliary Negative + Subject + Verb + Extension?",
                en: "Wasn't she working on her computer when the power went out?",
                bn: "বিদ্যুৎ চলে যাওয়ার সময় সে কি কম্পিউটারে কাজ করছিল না?",
                ipa: "/wɒznt ʃiː ˈwɜːkɪŋ ɒn hɜː kəmˈpjuːtə wen ðə ˈpaʊə went aʊt/"
            },
            whPositive: {
                formula: "WH-Word + Auxiliary + Subject + Verb + Extension?",
                en: "What were you doing yesterday at 8:00 PM?",
                bn: "গতকাল রাত ৮টায় তুমি কী করছিলে?",
                ipa: "/wɒt wɜː juː ˈduːɪŋ ˈjestədeɪ æt eɪt piː em/"
            },
            whNegative: {
                formula: "WH-Word + Auxiliary Negative + Subject + Verb + Extension?",
                en: "Why weren't you driving carefully when it was raining heavily?",
                bn: "যখন ভারী বৃষ্টি হচ্ছিল তখন তুমি সাবধানে গাড়ি চালাচ্ছিলে না কেন?",
                ipa: "/waɪ wɜːnt juː ˈdraɪvɪŋ ˈkeəfəli wen ɪt wəz ˈreɪnɪŋ ˈheɪvɪli/"
            }
        },
        realLifeSentences: [
            { en: "I was cooking dinner when the doorbell rang suddenly.", bn: "আমি যখন রাতের খাবার রান্না করছিলাম তখন হঠাৎ দরজার বেল বেজে উঠল।", ipa: "/aɪ wəz ˈkʊkɪŋ ˈdɪnər wen ðə ˈdɔːbel ræŋ ˈsʌdənli/", context: "দৈনন্দিন বাস্তব প্রয়োগ", type: "positive" },
            { en: "They were not paying attention while the teacher was explaining.", bn: "শিক্ষক যখন বুঝিয়ে দিচ্ছিলেন তখন তারা মনোযোগ দিচ্ছিল না।", ipa: "/ðeɪ wɜː nɒt ˈpeɪɪŋ əˈtenʃn waɪl ðə ˈtiːtʃər wəz ɪkˈspleɪnɪŋ/", context: "না-বাচক স্পষ্ট বিবৃতি", type: "negative" },
            { en: "Were you sleeping when I called you last night?", bn: "কাল রাতে যখন আমি তোমাকে কল করেছিলাম তুমি কি ঘুমাচ্ছিলে?", ipa: "/wɜː juː ˈsliːpɪŋ wen aɪ kɔːld juː lɑːst naɪt/", context: "ভদ্র ও স্বাভাবিক প্রশ্ন", type: "question" },
            { en: "What were you doing yesterday at 8:00 PM?", bn: "গতকাল রাত ৮টায় তুমি কী করছিলে?", ipa: "/wɒt wɜː juː ˈduːɪŋ ˈjestədeɪ æt eɪt piː em/", context: "তথ্যবহুল অনুসন্ধানী প্রশ্ন", type: "wh" }
        ],
        nativeVariations: {
            situation: "বলতে চাওয়া: \"আমি যখন রাতের খাবার রান্না করছিলাম তখন হঠাৎ দরজার বেল বেজে উঠল।\"",
            standard: "I was cooking dinner when the doorbell rang suddenly.",
            nativeStyle: "I was cooking dinner when the doorbell rang suddenly.",
            waysToSay: [
                { phrasing: "I was cooking dinner when the doorbell rang suddenly.", tone: "পেশাদার ও স্পষ্ট", bn: "আমি যখন রাতের খাবার রান্না করছিলাম তখন হঠাৎ দরজার বেল বেজে উঠল।" },
                { phrasing: "Were you sleeping when I called you last night?", tone: "ভদ্র ও চমৎকার", bn: "কাল রাতে যখন আমি তোমাকে কল করেছিলাম তুমি কি ঘুমাচ্ছিলে?" },
                { phrasing: "What were you doing yesterday at 8:00 PM?", tone: "বিশ্লেষণধর্মী", bn: "গতকাল রাত ৮টায় তুমি কী করছিলে?" }
            ],
            tip: "💡 এই কাঠামোর নিয়মিত চর্চা আপনার স্পিকিংকে আরও সাবলীল ও আন্তর্জাতিক মানের করে তুলবে।"
        },
        qaDrill: {
            targetQuestion: {
                en: "What were you doing when the earthquake occurred yesterday?",
                bn: "গতকাল ভূমিকম্পের সময় তুমি কী করছিলে?",
                ipa: "/hæv juː biːn/"
            },
            possibleAnswers: [
                { style: "সংক্ষিপ্ত সম্মতি (Short Affirmative)", en: "Yes, absolutely! I find it very rewarding.", bn: "হ্যাঁ, অবশ্যই! এটি আমার কাছে দারুণ ফলপ্রসূ মনে হয়।", ipa: "/jes ˌæbsəˈluːtli/" },
                { style: "বিস্তারিত উত্তর (Elaborated)", en: "I was cooking dinner when the doorbell rang suddenly.", bn: "আমি যখন রাতের খাবার রান্না করছিলাম তখন হঠাৎ দরজার বেল বেজে উঠল।", ipa: "/aɪ wəz ˈkʊkɪŋ ˈdɪnər wen ðə ˈdɔːbel ræŋ ˈsʌdənli/" },
                { style: "না-বাচক উত্তর (Polite Negative)", en: "Not quite, but I am planning to start soon.", bn: "পুরোপুরি নয়, তবে খুব শীঘ্রই শুরু করার পরিকল্পনা করছি।", ipa: "/nɒt kwaɪt/" },
                { style: "বিকল্প বা দ্বিধা (Alternative / Uncertainty)", en: "It varies depending on my daily schedule.", bn: "আমার দৈনন্দিন রুটিনের ওপর ভিত্তি করে এটি পরিবর্তিত হয়।", ipa: "/ɪt ˈveəriz/" }
            ]
        },
        sentenceBuilder: {
            subjects: ["I was", "She was", "They were", "Were you", "What were you"],
            auxOrVerbs: ["watching television", "walking in the park", "preparing dinner", "talking on the phone", "driving home"],
            complements: ["when the lights went out", "while it was raining cats and dogs", "at that exact moment", "when your brother called", "all through the evening"]
        }
    },
    {
        id: "lesson-20-past-perfect-and-comparison",
        lessonNumber: 20,
        title: "Past Perfect & Comparison: Past Simple vs Past Perfect",
        subtitle: "অতীতে দুটি ঘটনার মধ্যে যেটি আগে হয়েছিল (had + V3, Before / After)",
        phase: "comparisons",
        phaseLabel: "টেন্স তুলনা (Comparison)",
        level: "Intermediate",
        concept: {
            explanation: "অতীতে দুটি কাজ ঘটে থাকলে যে কাজটি তুলনামূলক আগে সম্পন্ন হয়েছিল সেটির ক্ষেত্রে Past Perfect (had + V3) এবং যেটি পরে হয়েছিল সেটির ক্ষেত্রে Past Simple (V2) বসে। Before এর পূর্বে had + V3 বসে, আর After এর পরে had + V3 বসে।",
            whenToUse: "ট্রেন আসার আগে স্টেশনে পৌঁছানো, ডাক্তার আসার আগে রোগীর সুস্থ হওয়া ইত্যাদি ধারাবাহিক অতীত ক্রম প্রকাশে।",
            commonMistake: "'Before the train left, we reached' না বলে আগে ঘটা কাজটি 'had + V3' দিয়ে বলতে হবে: 'The train had left before we reached the station'।",
            formulaSummary: "Earlier Action: had + V3 | Later Action: Past Simple (V2) | Before vs After Rules"
        },
        transformation6Way: {
            baseConcept: "Past Perfect & Comparison: Past Simple vs Past Perfect",
            positive: {
                formula: "Earlier Action: had + V3 | Later Action: Past Simple (V2) | Before vs After Rules",
                en: "The patient had recovered before the doctor arrived.",
                bn: "ডাক্তার আসার পূর্বেই রোগীটি সুস্থ হয়ে উঠেছিল।",
                ipa: "/ðə ˈpeɪʃnt hæd rɪˈkʌvəd bɪˈfɔː ðə ˈdɒktər əˈraɪvd/"
            },
            negative: {
                formula: "Subject + Auxiliary Negative + Verb + Extension",
                en: "I had not realized the truth until he explained everything.",
                bn: "তিনি সবকিছু ব্যাখ্যা না করা পর্যন্ত আমি সত্যটি বুঝতে পারিনি।",
                ipa: "/aɪ hæd nɒt ˈrɪəlaɪzd ðə truːθ ənˈtɪl hiː ɪkˈspleɪnd ˈevrɪθɪŋ/"
            },
            interrogative: {
                formula: "Auxiliary + Subject + Verb + Extension?",
                en: "Had you already locked the main gate before leaving home?",
                bn: "বাড়ি ছাড়ার আগে তুমি কি প্রধান গেটটি ইতিমধ্যে তালাবদ্ধ করেছিলে?",
                ipa: "/hæd juː ɔːlˈredi lɒkt ðə meɪn ɡeɪt bɪˈfɔː ˈliːvɪŋ həʊm/"
            },
            interroNegative: {
                formula: "Auxiliary Negative + Subject + Verb + Extension?",
                en: "Hadn't they informed you before making that major decision?",
                bn: "সেই বড় সিদ্ধান্তটি নেওয়ার আগে তারা কি তোমাকে জানায়নি?",
                ipa: "/hædnt ðeɪ ɪnˈfɔːmd juː bɪˈfɔː ˈmeɪkɪŋ ðæt ˈmeɪdʒə dɪˈsɪʒn/"
            },
            whPositive: {
                formula: "WH-Word + Auxiliary + Subject + Verb + Extension?",
                en: "What had happened before the security arrived at the spot?",
                bn: "ঘটনাস্থলে নিরাপত্তা কর্মী আসার আগে কী ঘটেছিল?",
                ipa: "/wɒt hæd ˈhæpənd bɪˈfɔː ðə sɪˈkjʊərəti əˈraɪvd æt ðə spɒt/"
            },
            whNegative: {
                formula: "WH-Word + Auxiliary Negative + Subject + Verb + Extension?",
                en: "Why hadn't you told me the issue before I finalized the agreement?",
                bn: "চুক্তিটি চূড়ান্ত করার আগে তুমি আমাকে সমস্যাটি বলোনি কেন?",
                ipa: "/waɪ hædnt juː təʊld miː ði ˈɪʃuː bɪˈfɔːr aɪ ˈfaɪnəlaɪzd ði əˈɡriːmənt/"
            }
        },
        realLifeSentences: [
            { en: "The patient had recovered before the doctor arrived.", bn: "ডাক্তার আসার পূর্বেই রোগীটি সুস্থ হয়ে উঠেছিল।", ipa: "/ðə ˈpeɪʃnt hæd rɪˈkʌvəd bɪˈfɔː ðə ˈdɒktər əˈraɪvd/", context: "দৈনন্দিন বাস্তব প্রয়োগ", type: "positive" },
            { en: "I had not realized the truth until he explained everything.", bn: "তিনি সবকিছু ব্যাখ্যা না করা পর্যন্ত আমি সত্যটি বুঝতে পারিনি।", ipa: "/aɪ hæd nɒt ˈrɪəlaɪzd ðə truːθ ənˈtɪl hiː ɪkˈspleɪnd ˈevrɪθɪŋ/", context: "না-বাচক স্পষ্ট বিবৃতি", type: "negative" },
            { en: "Had you already locked the main gate before leaving home?", bn: "বাড়ি ছাড়ার আগে তুমি কি প্রধান গেটটি ইতিমধ্যে তালাবদ্ধ করেছিলে?", ipa: "/hæd juː ɔːlˈredi lɒkt ðə meɪn ɡeɪt bɪˈfɔː ˈliːvɪŋ həʊm/", context: "ভদ্র ও স্বাভাবিক প্রশ্ন", type: "question" },
            { en: "What had happened before the security arrived at the spot?", bn: "ঘটনাস্থলে নিরাপত্তা কর্মী আসার আগে কী ঘটেছিল?", ipa: "/wɒt hæd ˈhæpənd bɪˈfɔː ðə sɪˈkjʊərəti əˈraɪvd æt ðə spɒt/", context: "তথ্যবহুল অনুসন্ধানী প্রশ্ন", type: "wh" }
        ],
        nativeVariations: {
            situation: "বলতে চাওয়া: \"ডাক্তার আসার পূর্বেই রোগীটি সুস্থ হয়ে উঠেছিল।\"",
            standard: "The patient had recovered before the doctor arrived.",
            nativeStyle: "The patient had recovered before the doctor arrived.",
            waysToSay: [
                { phrasing: "The patient had recovered before the doctor arrived.", tone: "পেশাদার ও স্পষ্ট", bn: "ডাক্তার আসার পূর্বেই রোগীটি সুস্থ হয়ে উঠেছিল।" },
                { phrasing: "Had you already locked the main gate before leaving home?", tone: "ভদ্র ও চমৎকার", bn: "বাড়ি ছাড়ার আগে তুমি কি প্রধান গেটটি ইতিমধ্যে তালাবদ্ধ করেছিলে?" },
                { phrasing: "What had happened before the security arrived at the spot?", tone: "বিশ্লেষণধর্মী", bn: "ঘটনাস্থলে নিরাপত্তা কর্মী আসার আগে কী ঘটেছিল?" }
            ],
            tip: "💡 এই কাঠামোর নিয়মিত চর্চা আপনার স্পিকিংকে আরও সাবলীল ও আন্তর্জাতিক মানের করে তুলবে।"
        },
        qaDrill: {
            targetQuestion: {
                en: "Had you eaten lunch before you came to the class today?",
                bn: "আজ ক্লাসে আসার আগে কি তুমি দুপুরের খাবার খেয়েছিলে?",
                ipa: "/hæv juː biːn/"
            },
            possibleAnswers: [
                { style: "সংক্ষিপ্ত সম্মতি (Short Affirmative)", en: "Yes, absolutely! I find it very rewarding.", bn: "হ্যাঁ, অবশ্যই! এটি আমার কাছে দারুণ ফলপ্রসূ মনে হয়।", ipa: "/jes ˌæbsəˈluːtli/" },
                { style: "বিস্তারিত উত্তর (Elaborated)", en: "The patient had recovered before the doctor arrived.", bn: "ডাক্তার আসার পূর্বেই রোগীটি সুস্থ হয়ে উঠেছিল।", ipa: "/ðə ˈpeɪʃnt hæd rɪˈkʌvəd bɪˈfɔː ðə ˈdɒktər əˈraɪvd/" },
                { style: "না-বাচক উত্তর (Polite Negative)", en: "Not quite, but I am planning to start soon.", bn: "পুরোপুরি নয়, তবে খুব শীঘ্রই শুরু করার পরিকল্পনা করছি।", ipa: "/nɒt kwaɪt/" },
                { style: "বিকল্প বা দ্বিধা (Alternative / Uncertainty)", en: "It varies depending on my daily schedule.", bn: "আমার দৈনন্দিন রুটিনের ওপর ভিত্তি করে এটি পরিবর্তিত হয়।", ipa: "/ɪt ˈveəriz/" }
            ]
        },
        sentenceBuilder: {
            subjects: ["I had finished my work", "The train had departed", "She had left the office", "Had you completed the test", "They had warned us"],
            auxOrVerbs: ["before", "after", "by the time", "long before", "just after"],
            complements: ["my manager asked for it", "we reached the railway platform", "the heavy thunderstorm started", "the bell rang loudly", "any accident took place"]
        }
    },
    {
        id: "lesson-21-past-perfect-continuous",
        lessonNumber: 21,
        title: "Past Perfect Continuous: had been + V-ing",
        subtitle: "অতীতের নির্দিষ্ট সময় বা ঘটনার আগ পর্যন্ত কাজটি কতক্ষণ চলছিল",
        phase: "tenses",
        phaseLabel: "অতীত স্থায়িত্ব (Past Perfect Continuous)",
        level: "Upper-Intermediate",
        concept: {
            explanation: "অতীতে কোনো ঘটনা ঘটার আগ পর্যন্ত অন্য একটি কাজ কত সময় ধরে বিরতিহীনভাবে চলছিল তা বোঝাতে had been + Verb-ing ব্যবহৃত হয়। এটি অতীত ঘটনার পূর্ববর্তী কাজের ক্লান্তি বা কারণ ব্যাখ্যায় ব্যবহৃত হয়।",
            whenToUse: "'সে ক্লান্ত ছিল কারণ সে সকাল থেকে দৌড়াচ্ছিল' (He was tired because he had been running since morning)।",
            commonMistake: "'He was tired because he ran' সাধারণ শোনায়; কাজের স্থায়িত্বের কারণে ক্লান্তি দেখাতে 'had been running' নেটিভ স্পিকারদের নিখুঁত পছন্দ।",
            formulaSummary: "Subject + had been + Verb-ing (+ since/for + duration before past moment)"
        },
        transformation6Way: {
            baseConcept: "Past Perfect Continuous: had been + V-ing",
            positive: {
                formula: "Subject + had been + Verb-ing (+ since/for + duration before past moment)",
                en: "She had been working for six hours before she finally took a break.",
                bn: "অবশেষে একটি বিরতি নেওয়ার আগ পর্যন্ত সে ছয় ঘণ্টা ধরে কাজ করছিল।",
                ipa: "/ʃiː hæd biːn ˈwɜːkɪŋ fɔː sɪks ˈaʊəz bɪˈfɔː ʃiː ˈfaɪnəli tʊk ə breɪk/"
            },
            negative: {
                formula: "Subject + Auxiliary Negative + Verb + Extension",
                en: "We hadn't been waiting long when the bus arrived.",
                bn: "বাসটি আসার সময় আমরা খুব বেশি সময় ধরে অপেক্ষা করছিলাম না।",
                ipa: "/wiː hædnt biːn ˈweɪtɪŋ lɒŋ wen ðə bʌs əˈraɪvd/"
            },
            interrogative: {
                formula: "Auxiliary + Subject + Verb + Extension?",
                en: "Had you been practicing Spoken English before taking the IELTS exam?",
                bn: "আইইএলটিএস পরীক্ষা দেওয়ার আগে তুমি কি স্পোকেন ইংলিশ অনুশীলন করছিলে?",
                ipa: "/hæd juː biːn ˈpræktɪsɪŋ ˈspəʊkən ˈɪŋɡlɪʃ bɪˈfɔː ˈteɪkɪŋ ði ˈaɪelts ɪɡˈzæm/"
            },
            interroNegative: {
                formula: "Auxiliary Negative + Subject + Verb + Extension?",
                en: "Hadn't it been raining for days before the flood started?",
                bn: "বন্যা শুরু হওয়ার আগে কি টানা কয়েকদিন ধরে বৃষ্টি হচ্ছিল না?",
                ipa: "/hædnt ɪt biːn ˈreɪnɪŋ fɔː deɪz bɪˈfɔː ðə flʌd ˈstɑːtɪd/"
            },
            whPositive: {
                formula: "WH-Word + Auxiliary + Subject + Verb + Extension?",
                en: "How long had you been living abroad before you returned to Bangladesh?",
                bn: "বাংলাদেশে ফেরার আগে তুমি কত বছর ধরে প্রবাসে বসবাস করছিলে?",
                ipa: "/haʊ lɒŋ hæd juː biːn ˈlɪvɪŋ əˈbrɔːd bɪˈfɔː juː rɪˈtɜːnd tə ˌbæŋɡləˈdeʃ/"
            },
            whNegative: {
                formula: "WH-Word + Auxiliary Negative + Subject + Verb + Extension?",
                en: "Why hadn't you been studying when your exams were so close?",
                bn: "তোমার পরীক্ষা এত কাছে থাকার পরও তুমি কেন পড়ছিলে না?",
                ipa: "/waɪ hædnt juː biːn ˈstʌdiɪŋ wen jɔːr ɪɡˈzæmz wɜː səʊ kləʊs/"
            }
        },
        realLifeSentences: [
            { en: "She had been working for six hours before she finally took a break.", bn: "অবশেষে একটি বিরতি নেওয়ার আগ পর্যন্ত সে ছয় ঘণ্টা ধরে কাজ করছিল।", ipa: "/ʃiː hæd biːn ˈwɜːkɪŋ fɔː sɪks ˈaʊəz bɪˈfɔː ʃiː ˈfaɪnəli tʊk ə breɪk/", context: "দৈনন্দিন বাস্তব প্রয়োগ", type: "positive" },
            { en: "We hadn't been waiting long when the bus arrived.", bn: "বাসটি আসার সময় আমরা খুব বেশি সময় ধরে অপেক্ষা করছিলাম না।", ipa: "/wiː hædnt biːn ˈweɪtɪŋ lɒŋ wen ðə bʌs əˈraɪvd/", context: "না-বাচক স্পষ্ট বিবৃতি", type: "negative" },
            { en: "Had you been practicing Spoken English before taking the IELTS exam?", bn: "আইইএলটিএস পরীক্ষা দেওয়ার আগে তুমি কি স্পোকেন ইংলিশ অনুশীলন করছিলে?", ipa: "/hæd juː biːn ˈpræktɪsɪŋ ˈspəʊkən ˈɪŋɡlɪʃ bɪˈfɔː ˈteɪkɪŋ ði ˈaɪelts ɪɡˈzæm/", context: "ভদ্র ও স্বাভাবিক প্রশ্ন", type: "question" },
            { en: "How long had you been living abroad before you returned to Bangladesh?", bn: "বাংলাদেশে ফেরার আগে তুমি কত বছর ধরে প্রবাসে বসবাস করছিলে?", ipa: "/haʊ lɒŋ hæd juː biːn ˈlɪvɪŋ əˈbrɔːd bɪˈfɔː juː rɪˈtɜːnd tə ˌbæŋɡləˈdeʃ/", context: "তথ্যবহুল অনুসন্ধানী প্রশ্ন", type: "wh" }
        ],
        nativeVariations: {
            situation: "বলতে চাওয়া: \"অবশেষে একটি বিরতি নেওয়ার আগ পর্যন্ত সে ছয় ঘণ্টা ধরে কাজ করছিল।\"",
            standard: "She had been working for six hours before she finally took a break.",
            nativeStyle: "She had been working for six hours before she finally took a break.",
            waysToSay: [
                { phrasing: "She had been working for six hours before she finally took a break.", tone: "পেশাদার ও স্পষ্ট", bn: "অবশেষে একটি বিরতি নেওয়ার আগ পর্যন্ত সে ছয় ঘণ্টা ধরে কাজ করছিল।" },
                { phrasing: "Had you been practicing Spoken English before taking the IELTS exam?", tone: "ভদ্র ও চমৎকার", bn: "আইইএলটিএস পরীক্ষা দেওয়ার আগে তুমি কি স্পোকেন ইংলিশ অনুশীলন করছিলে?" },
                { phrasing: "How long had you been living abroad before you returned to Bangladesh?", tone: "বিশ্লেষণধর্মী", bn: "বাংলাদেশে ফেরার আগে তুমি কত বছর ধরে প্রবাসে বসবাস করছিলে?" }
            ],
            tip: "💡 এই কাঠামোর নিয়মিত চর্চা আপনার স্পিকিংকে আরও সাবলীল ও আন্তর্জাতিক মানের করে তুলবে।"
        },
        qaDrill: {
            targetQuestion: {
                en: "Had you been working on this computer for hours before it crashed?",
                bn: "কম্পিউটারটি নষ্ট হওয়ার আগে কি তুমি কয়েক ঘণ্টা ধরে এতে কাজ করছিলে?",
                ipa: "/hæv juː biːn/"
            },
            possibleAnswers: [
                { style: "সংক্ষিপ্ত সম্মতি (Short Affirmative)", en: "Yes, absolutely! I find it very rewarding.", bn: "হ্যাঁ, অবশ্যই! এটি আমার কাছে দারুণ ফলপ্রসূ মনে হয়।", ipa: "/jes ˌæbsəˈluːtli/" },
                { style: "বিস্তারিত উত্তর (Elaborated)", en: "She had been working for six hours before she finally took a break.", bn: "অবশেষে একটি বিরতি নেওয়ার আগ পর্যন্ত সে ছয় ঘণ্টা ধরে কাজ করছিল।", ipa: "/ʃiː hæd biːn ˈwɜːkɪŋ fɔː sɪks ˈaʊəz bɪˈfɔː ʃiː ˈfaɪnəli tʊk ə breɪk/" },
                { style: "না-বাচক উত্তর (Polite Negative)", en: "Not quite, but I am planning to start soon.", bn: "পুরোপুরি নয়, তবে খুব শীঘ্রই শুরু করার পরিকল্পনা করছি।", ipa: "/nɒt kwaɪt/" },
                { style: "বিকল্প বা দ্বিধা (Alternative / Uncertainty)", en: "It varies depending on my daily schedule.", bn: "আমার দৈনন্দিন রুটিনের ওপর ভিত্তি করে এটি পরিবর্তিত হয়।", ipa: "/ɪt ˈveəriz/" }
            ]
        },
        sentenceBuilder: {
            subjects: ["I had been waiting", "She had been studying", "They had been planning", "How long had you been driving", "We had been talking"],
            auxOrVerbs: ["for nearly three hours", "since early morning", "for over five years", "all night long", "for several months"],
            complements: ["before the doctor finally arrived", "when she scored Band 8", "before launching their venture", "before finding the right hotel", "when the meeting concluded"]
        }
    },
    {
        id: "lesson-22-future-continuous",
        lessonNumber: 22,
        title: "Future Continuous: will be + V-ing",
        subtitle: "ভবিষ্যতের কোনো নির্দিষ্ট সময়ে কোনো কাজ চলমান থাকা বোঝাতে",
        phase: "tenses",
        phaseLabel: "ভবিষ্যত চলমান (Future Continuous)",
        level: "Intermediate",
        concept: {
            explanation: "ভবিষ্যতের কোনো নির্দিষ্ট সময়ে বা মুহূর্তে কোনো কাজ চলতে থাকবে বা কোনো ব্যক্তি কিছু করতে থাকবে বোঝাতে will be + Verb-ing ব্যবহৃত হয়। এছাড়া ভবিষ্যৎ কর্মসূচির ভদ্র জিজ্ঞাসাতেও এটি ব্যবহৃত হয়।",
            whenToUse: "'কাল এই সময়ে আমি ট্রেনে ভ্রমণ করতে থাকব' (Tomorrow at this time, I will be traveling on a train)।",
            commonMistake: "'Tomorrow I will travel' মানে কাল আমি ভ্রমণ করব (সাধারণ ইচ্ছা); কিন্তু 'Tomorrow at 10 AM, I will be flying' মানে নির্দিষ্ট সেই মুহূর্তে কাজটির মাঝপথে থাকব।",
            formulaSummary: "Subject + will be + Verb-ing (+ at this time tomorrow / next week)"
        },
        transformation6Way: {
            baseConcept: "Future Continuous: will be + V-ing",
            positive: {
                formula: "Subject + will be + Verb-ing (+ at this time tomorrow / next week)",
                en: "This time tomorrow, I will be flying to Singapore.",
                bn: "আগামীকাল এই সময়ে, আমি সিঙ্গাপুরের উদ্দেশ্যে বিমানে উড়তে থাকব।",
                ipa: "/ðɪs taɪm təˈmɒrəʊ aɪ wɪl biː ˈflaɪɪŋ tə ˈsɪŋəpɔː/"
            },
            negative: {
                formula: "Subject + Auxiliary Negative + Verb + Extension",
                en: "I won't be attending the party tomorrow night as I have an exam.",
                bn: "আগামীকাল রাতে আমি পার্টিতে উপস্থিত থাকব না কারণ আমার পরীক্ষা আছে।",
                ipa: "/aɪ wəʊnt biː əˈtendɪŋ ðə ˈpɑːti təˈmɒrəʊ naɪt æz aɪ hæv ən ɪɡˈzæm/"
            },
            interrogative: {
                formula: "Auxiliary + Subject + Verb + Extension?",
                en: "Will you be using your laptop this afternoon, or can I borrow it?",
                bn: "তুমি কি আজ বিকেলে ল্যাপটপটি ব্যবহার করতে থাকবে, নাকি আমি নিতে পারি?",
                ipa: "/wɪl juː biː ˈjuːzɪŋ jɔː ˈlæptɒp ðɪs ˌɑːftəˈnuːn ɔː kæn aɪ ˈbɒrəʊ ɪt/"
            },
            interroNegative: {
                formula: "Auxiliary Negative + Subject + Verb + Extension?",
                en: "Won't you be joining us for the weekend picnic?",
                bn: "সাপ্তাহিক ছুটির পিকনিকে তুমি কি আমাদের সাথে যোগ দিতে থাকবে না?",
                ipa: "/wəʊnt juː biː ˈdʒɔɪnɪŋ ʌs fɔː ðə ˈwiːkend ˈpɪknɪk/"
            },
            whPositive: {
                formula: "WH-Word + Auxiliary + Subject + Verb + Extension?",
                en: "What will you be doing this time next Friday?",
                bn: "আগামী শুক্রবার এই সময়ে তুমি কী করতে থাকবে?",
                ipa: "/wɒt wɪl juː biː ˈduːɪŋ ðɪs taɪm nekst ˈfraɪdeɪ/"
            },
            whNegative: {
                formula: "WH-Word + Auxiliary Negative + Subject + Verb + Extension?",
                en: "Why won't you be staying at the hotel with everyone else?",
                bn: "অন্য সবার সাথে তুমি হোটেলে অবস্থান করতে থাকবে না কেন?",
                ipa: "/waɪ wəʊnt juː biː ˈsteɪɪŋ æt ðə həʊˈtel wɪð ˈevriwʌn els/"
            }
        },
        realLifeSentences: [
            { en: "This time tomorrow, I will be flying to Singapore.", bn: "আগামীকাল এই সময়ে, আমি সিঙ্গাপুরের উদ্দেশ্যে বিমানে উড়তে থাকব।", ipa: "/ðɪs taɪm təˈmɒrəʊ aɪ wɪl biː ˈflaɪɪŋ tə ˈsɪŋəpɔː/", context: "দৈনন্দিন বাস্তব প্রয়োগ", type: "positive" },
            { en: "I won't be attending the party tomorrow night as I have an exam.", bn: "আগামীকাল রাতে আমি পার্টিতে উপস্থিত থাকব না কারণ আমার পরীক্ষা আছে।", ipa: "/aɪ wəʊnt biː əˈtendɪŋ ðə ˈpɑːti təˈmɒrəʊ naɪt æz aɪ hæv ən ɪɡˈzæm/", context: "না-বাচক স্পষ্ট বিবৃতি", type: "negative" },
            { en: "Will you be using your laptop this afternoon, or can I borrow it?", bn: "তুমি কি আজ বিকেলে ল্যাপটপটি ব্যবহার করতে থাকবে, নাকি আমি নিতে পারি?", ipa: "/wɪl juː biː ˈjuːzɪŋ jɔː ˈlæptɒp ðɪs ˌɑːftəˈnuːn ɔː kæn aɪ ˈbɒrəʊ ɪt/", context: "ভদ্র ও স্বাভাবিক প্রশ্ন", type: "question" },
            { en: "What will you be doing this time next Friday?", bn: "আগামী শুক্রবার এই সময়ে তুমি কী করতে থাকবে?", ipa: "/wɒt wɪl juː biː ˈduːɪŋ ðɪs taɪm nekst ˈfraɪdeɪ/", context: "তথ্যবহুল অনুসন্ধানী প্রশ্ন", type: "wh" }
        ],
        nativeVariations: {
            situation: "বলতে চাওয়া: \"আগামীকাল এই সময়ে, আমি সিঙ্গাপুরের উদ্দেশ্যে বিমানে উড়তে থাকব।\"",
            standard: "This time tomorrow, I will be flying to Singapore.",
            nativeStyle: "This time tomorrow, I will be flying to Singapore.",
            waysToSay: [
                { phrasing: "This time tomorrow, I will be flying to Singapore.", tone: "পেশাদার ও স্পষ্ট", bn: "আগামীকাল এই সময়ে, আমি সিঙ্গাপুরের উদ্দেশ্যে বিমানে উড়তে থাকব।" },
                { phrasing: "Will you be using your laptop this afternoon, or can I borrow it?", tone: "ভদ্র ও চমৎকার", bn: "তুমি কি আজ বিকেলে ল্যাপটপটি ব্যবহার করতে থাকবে, নাকি আমি নিতে পারি?" },
                { phrasing: "What will you be doing this time next Friday?", tone: "বিশ্লেষণধর্মী", bn: "আগামী শুক্রবার এই সময়ে তুমি কী করতে থাকবে?" }
            ],
            tip: "💡 এই কাঠামোর নিয়মিত চর্চা আপনার স্পিকিংকে আরও সাবলীল ও আন্তর্জাতিক মানের করে তুলবে।"
        },
        qaDrill: {
            targetQuestion: {
                en: "Will you be practicing English conversation this evening?",
                bn: "আজ সন্ধ্যায় কি তুমি ইংরেজি কথোপকথন অনুশীলন করতে থাকবে?",
                ipa: "/hæv juː biːn/"
            },
            possibleAnswers: [
                { style: "সংক্ষিপ্ত সম্মতি (Short Affirmative)", en: "Yes, absolutely! I find it very rewarding.", bn: "হ্যাঁ, অবশ্যই! এটি আমার কাছে দারুণ ফলপ্রসূ মনে হয়।", ipa: "/jes ˌæbsəˈluːtli/" },
                { style: "বিস্তারিত উত্তর (Elaborated)", en: "This time tomorrow, I will be flying to Singapore.", bn: "আগামীকাল এই সময়ে, আমি সিঙ্গাপুরের উদ্দেশ্যে বিমানে উড়তে থাকব।", ipa: "/ðɪs taɪm təˈmɒrəʊ aɪ wɪl biː ˈflaɪɪŋ tə ˈsɪŋəpɔː/" },
                { style: "না-বাচক উত্তর (Polite Negative)", en: "Not quite, but I am planning to start soon.", bn: "পুরোপুরি নয়, তবে খুব শীঘ্রই শুরু করার পরিকল্পনা করছি।", ipa: "/nɒt kwaɪt/" },
                { style: "বিকল্প বা দ্বিধা (Alternative / Uncertainty)", en: "It varies depending on my daily schedule.", bn: "আমার দৈনন্দিন রুটিনের ওপর ভিত্তি করে এটি পরিবর্তিত হয়।", ipa: "/ɪt ˈveəriz/" }
            ]
        },
        sentenceBuilder: {
            subjects: ["I will be", "She will be", "They will be", "Will you be", "What will you be"],
            auxOrVerbs: ["working on the project", "traveling to the beach", "practicing Spoken English", "attending the workshop", "relaxing at home"],
            complements: ["at this exact time tomorrow", "all throughout next month", "when you arrive at the airport", "during the upcoming vacation", "this coming Sunday morning"]
        }
    },
    {
        id: "lesson-23-future-perfect-and-continuous",
        lessonNumber: 23,
        title: "Future Perfect: will have + V3 / will have been",
        subtitle: "ভবিষ্যতের কোনো নির্দিষ্ট সময়ের মধ্যে কাজ সম্পন্ন হয়ে থাকা (By next month)",
        phase: "tenses",
        phaseLabel: "ভবিষ্যত সমাপ্তি (Future Perfect)",
        level: "Upper-Intermediate",
        concept: {
            explanation: "ভবিষ্যতের কোনো নির্দিষ্ট সময়সীমা বা ডেডলাইনের মধ্যে (By next year, By 5 PM, By tomorrow) কোনো কাজ সমাপ্ত হয়ে থাকবে বোঝাতে will have + V3 ব্যবহৃত হয়।",
            whenToUse: "'আগামী ডিসেম্বরের মধ্যে আমি আমার ডিগ্রি সম্পন্ন করে ফেলব' (By next December, I will have completed my degree)।",
            commonMistake: "'By 5 PM I will finish' এর বদলে সময়সীমার আগে সমাপ্তি জোর দিতে 'will have finished' ব্যবহার করা ব্যাকরণগতভাবে নিখুঁত।",
            formulaSummary: "Subject + will have + V3 (+ by + future deadline) | By the time + Present Simple, will have + V3"
        },
        transformation6Way: {
            baseConcept: "Future Perfect: will have + V3 / will have been",
            positive: {
                formula: "Subject + will have + V3 (+ by + future deadline) | By the time + Present Simple, will have + V3",
                en: "By next year, I will have mastered fluent Spoken English.",
                bn: "আগামী বছরের মধ্যে, আমি অনর্গল স্পোকেন ইংলিশে দক্ষতা অর্জন করে ফেলব।",
                ipa: "/baɪ nekst jɪər aɪ wɪl hæv ˈmɑːstəd ˈfluːənt ˈspəʊkən ˈɪŋɡlɪʃ/"
            },
            negative: {
                formula: "Subject + Auxiliary Negative + Verb + Extension",
                en: "They will not have finished the construction by next Monday.",
                bn: "আগামী সোমবারের মধ্যে তারা নির্মাণ কাজ শেষ করতে পারবে না।",
                ipa: "/ðeɪ wɪl nɒt hæv ˈfɪnɪʃt ðə kənˈstrʌkʃn baɪ nekst ˈmʌndeɪ/"
            },
            interrogative: {
                formula: "Auxiliary + Subject + Verb + Extension?",
                en: "Will you have submitted your application by Friday afternoon?",
                bn: "শুক্রবার বিকেলের মধ্যে কি তুমি তোমার আবেদনপত্র জমা দিয়ে ফেলবে?",
                ipa: "/wɪl juː hæv səbˈmɪtɪd jɔːr ˌæplɪˈkeɪʃn baɪ ˈfraɪdeɪ ˌɑːftəˈnuːn/"
            },
            interroNegative: {
                formula: "Auxiliary Negative + Subject + Verb + Extension?",
                en: "Won't you have graduated by the time your brother gets married?",
                bn: "তোমার ভাইয়ের বিয়ের সময়ের মধ্যে কি তোমার গ্রাজুয়েশন সম্পন্ন হবে না?",
                ipa: "/wəʊnt juː hæv ˈɡrædʒueɪtɪd baɪ ðə taɪm jɔː ˈbrʌðə ɡets ˈmærid/"
            },
            whPositive: {
                formula: "WH-Word + Auxiliary + Subject + Verb + Extension?",
                en: "What milestones will you have achieved by the end of this decade?",
                bn: "এই দশকের শেষের মধ্যে তুমি কোন কোন মাইলফলক অর্জন করে ফেলবে?",
                ipa: "/wɒt ˈmaɪlstəʊnz wɪl juː hæv əˈtʃiːvd baɪ ði end ɒv ðɪs ˈdekeɪd/"
            },
            whNegative: {
                formula: "WH-Word + Auxiliary Negative + Subject + Verb + Extension?",
                en: "Why won't they have completed the task before the deadline expires?",
                bn: "সময়সীমা শেষ হওয়ার আগে তারা কাজটি সম্পন্ন করে ফেলতে পারবে না কেন?",
                ipa: "/waɪ wəʊnt ðeɪ hæv kəmˈpliːtɪd ðə tɑːsk bɪˈfɔː ðə ˈdedlaɪn ɪkˈspaɪəz/"
            }
        },
        realLifeSentences: [
            { en: "By next year, I will have mastered fluent Spoken English.", bn: "আগামী বছরের মধ্যে, আমি অনর্গল স্পোকেন ইংলিশে দক্ষতা অর্জন করে ফেলব।", ipa: "/baɪ nekst jɪər aɪ wɪl hæv ˈmɑːstəd ˈfluːənt ˈspəʊkən ˈɪŋɡlɪʃ/", context: "দৈনন্দিন বাস্তব প্রয়োগ", type: "positive" },
            { en: "They will not have finished the construction by next Monday.", bn: "আগামী সোমবারের মধ্যে তারা নির্মাণ কাজ শেষ করতে পারবে না।", ipa: "/ðeɪ wɪl nɒt hæv ˈfɪnɪʃt ðə kənˈstrʌkʃn baɪ nekst ˈmʌndeɪ/", context: "না-বাচক স্পষ্ট বিবৃতি", type: "negative" },
            { en: "Will you have submitted your application by Friday afternoon?", bn: "শুক্রবার বিকেলের মধ্যে কি তুমি তোমার আবেদনপত্র জমা দিয়ে ফেলবে?", ipa: "/wɪl juː hæv səbˈmɪtɪd jɔːr ˌæplɪˈkeɪʃn baɪ ˈfraɪdeɪ ˌɑːftəˈnuːn/", context: "ভদ্র ও স্বাভাবিক প্রশ্ন", type: "question" },
            { en: "What milestones will you have achieved by the end of this decade?", bn: "এই দশকের শেষের মধ্যে তুমি কোন কোন মাইলফলক অর্জন করে ফেলবে?", ipa: "/wɒt ˈmaɪlstəʊnz wɪl juː hæv əˈtʃiːvd baɪ ði end ɒv ðɪs ˈdekeɪd/", context: "তথ্যবহুল অনুসন্ধানী প্রশ্ন", type: "wh" }
        ],
        nativeVariations: {
            situation: "বলতে চাওয়া: \"আগামী বছরের মধ্যে, আমি অনর্গল স্পোকেন ইংলিশে দক্ষতা অর্জন করে ফেলব।\"",
            standard: "By next year, I will have mastered fluent Spoken English.",
            nativeStyle: "By next year, I will have mastered fluent Spoken English.",
            waysToSay: [
                { phrasing: "By next year, I will have mastered fluent Spoken English.", tone: "পেশাদার ও স্পষ্ট", bn: "আগামী বছরের মধ্যে, আমি অনর্গল স্পোকেন ইংলিশে দক্ষতা অর্জন করে ফেলব।" },
                { phrasing: "Will you have submitted your application by Friday afternoon?", tone: "ভদ্র ও চমৎকার", bn: "শুক্রবার বিকেলের মধ্যে কি তুমি তোমার আবেদনপত্র জমা দিয়ে ফেলবে?" },
                { phrasing: "What milestones will you have achieved by the end of this decade?", tone: "বিশ্লেষণধর্মী", bn: "এই দশকের শেষের মধ্যে তুমি কোন কোন মাইলফলক অর্জন করে ফেলবে?" }
            ],
            tip: "💡 এই কাঠামোর নিয়মিত চর্চা আপনার স্পিকিংকে আরও সাবলীল ও আন্তর্জাতিক মানের করে তুলবে।"
        },
        qaDrill: {
            targetQuestion: {
                en: "Will you have finished reading this book by tonight?",
                bn: "আজ রাতের মধ্যে কি তুমি এই বইটি পড়া শেষ করে ফেলবে?",
                ipa: "/hæv juː biːn/"
            },
            possibleAnswers: [
                { style: "সংক্ষিপ্ত সম্মতি (Short Affirmative)", en: "Yes, absolutely! I find it very rewarding.", bn: "হ্যাঁ, অবশ্যই! এটি আমার কাছে দারুণ ফলপ্রসূ মনে হয়।", ipa: "/jes ˌæbsəˈluːtli/" },
                { style: "বিস্তারিত উত্তর (Elaborated)", en: "By next year, I will have mastered fluent Spoken English.", bn: "আগামী বছরের মধ্যে, আমি অনর্গল স্পোকেন ইংলিশে দক্ষতা অর্জন করে ফেলব।", ipa: "/baɪ nekst jɪər aɪ wɪl hæv ˈmɑːstəd ˈfluːənt ˈspəʊkən ˈɪŋɡlɪʃ/" },
                { style: "না-বাচক উত্তর (Polite Negative)", en: "Not quite, but I am planning to start soon.", bn: "পুরোপুরি নয়, তবে খুব শীঘ্রই শুরু করার পরিকল্পনা করছি।", ipa: "/nɒt kwaɪt/" },
                { style: "বিকল্প বা দ্বিধা (Alternative / Uncertainty)", en: "It varies depending on my daily schedule.", bn: "আমার দৈনন্দিন রুটিনের ওপর ভিত্তি করে এটি পরিবর্তিত হয়।", ipa: "/ɪt ˈveəriz/" }
            ]
        },
        sentenceBuilder: {
            subjects: ["By next month I will have", "She will have completed", "They will have moved", "Will you have saved", "We will have achieved"],
            auxOrVerbs: ["achieved my Band 8", "her university degree", "to their new residence", "enough financial savings", "our speaking targets"],
            complements: ["before the winter begins", "by the end of this semester", "before the contract expires", "by next December", "in less than two years"]
        }
    },
    {
        id: "lesson-24-complete-modals",
        lessonNumber: 24,
        title: "All Modals Mastery: May, Might, Must, Ought to, Shall",
        subtitle: "সম্ভাবনা (May/Might), বাধ্যবাধকতা (Must), উপদেশ (Ought to) ও অনুমতি",
        phase: "modals",
        phaseLabel: "সকল মডেল ভার্বস (All Modals)",
        level: "Upper-Intermediate",
        concept: {
            explanation: "মোডাল ভার্বস বাক্যের ভাব ও সম্ভাবনা প্রকাশ করে। May (৫০% সম্ভাবনা বা আনুষ্ঠানিক অনুমতি: May I come in?), Might (দুর্বল সম্ভাবনা: It might rain), Must (১০০% অবশ্য পালনীয় বাধ্যবাধকতা বা দৃঢ় অনুমান: You must follow the rules), Ought to (নৈতিক দায়িত্ব: We ought to respect elders), Shall (প্রস্তাব: Shall we go?)।",
            whenToUse: "সম্ভাবনা, নিশ্চয়তা, অনুমতি, নৈতিক দায়িত্ব এবং ভদ্র পরামর্শের সঠিক তীব্রতা প্রকাশের জন্য।",
            commonMistake: "মোডাল ভার্বের পর কখনো 'to' বা 's/es' বসে না (He can goes ❌ -> He can go ✔️; You must to study ❌ -> You must study ✔️)। শুধু 'Ought to' এবং 'Have to' তে 'to' থাকে।",
            formulaSummary: "Subject + Modal (may/might/must/shall/ought to) + V1 (Base Form)"
        },
        transformation6Way: {
            baseConcept: "All Modals Mastery: May, Might, Must, Ought to, Shall",
            positive: {
                formula: "Subject + Modal (may/might/must/shall/ought to) + V1 (Base Form)",
                en: "It may rain this evening, so you ought to carry an umbrella.",
                bn: "আজ সন্ধ্যায় বৃষ্টি হতে পারে, তাই তোমার একটি ছাতা সাথে নেওয়া উচিত।",
                ipa: "/ɪt meɪ reɪn ðɪs ˈiːvnɪŋ səʊ juː ɔːt tə ˈkæri ən ʌmˈbrelə/"
            },
            negative: {
                formula: "Subject + Auxiliary Negative + Verb + Extension",
                en: "You must not share your confidential password with anyone.",
                bn: "তোমার গোপনীয় পাসওয়ার্ড কারোর সাথেই শেয়ার করা একেবারেই উচিত নয়।",
                ipa: "/juː mʌst nɒt ʃeə jɔː ˌkɒnfɪˈdenʃl ˈpɑːswɜːd wɪð ˈeniwʌn/"
            },
            interrogative: {
                formula: "Auxiliary + Subject + Verb + Extension?",
                en: "May I request a brief moment of your valuable time?",
                bn: "আমি কি আপনার মূল্যবান সময়ের একটি সংক্ষিপ্ত মুহূর্ত পেতে পারি?",
                ipa: "/meɪ aɪ rɪˈkwest ə briːf ˈməʊmənt ɒv jɔː ˈvæljuəbl taɪm/"
            },
            interroNegative: {
                formula: "Auxiliary Negative + Subject + Verb + Extension?",
                en: "Might it not be wiser to double check the figures before submission?",
                bn: "জমা দেওয়ার পূর্বে সংখ্যাগুলো পুনরায় যাচাই করে নেওয়া কি বেশি বিচক্ষণ হবে না?",
                ipa: "/maɪt ɪt nɒt biː ˈwaɪzə tə ˈdʌbl tʃek ðə ˈfɪɡəz bɪˈfɔː səbˈmɪʃn/"
            },
            whPositive: {
                formula: "WH-Word + Auxiliary + Subject + Verb + Extension?",
                en: "What ought we to do to protect our surrounding environment?",
                bn: "আমাদের চারপাশের পরিবেশ রক্ষায় আমাদের নৈতিকভাবে কী করা উচিত?",
                ipa: "/wɒt ɔːt wiː tə duː tə prəˈtekt ˈaʊə səˈraʊndɪŋ ɪnˈvaɪrənmənt/"
            },
            whNegative: {
                formula: "WH-Word + Auxiliary Negative + Subject + Verb + Extension?",
                en: "Why must you always doubt your own creative capabilities?",
                bn: "তুমি কেন সবসময় তোমার নিজের সৃজনশীল সক্ষমতাকে সন্দেহ করবে?",
                ipa: "/waɪ mʌst juː ˈɔːlweɪz daʊt jɔːr əʊn kriˈeɪtɪv ˌkeɪpəˈbɪlətiz/"
            }
        },
        realLifeSentences: [
            { en: "It may rain this evening, so you ought to carry an umbrella.", bn: "আজ সন্ধ্যায় বৃষ্টি হতে পারে, তাই তোমার একটি ছাতা সাথে নেওয়া উচিত।", ipa: "/ɪt meɪ reɪn ðɪs ˈiːvnɪŋ səʊ juː ɔːt tə ˈkæri ən ʌmˈbrelə/", context: "দৈনন্দিন বাস্তব প্রয়োগ", type: "positive" },
            { en: "You must not share your confidential password with anyone.", bn: "তোমার গোপনীয় পাসওয়ার্ড কারোর সাথেই শেয়ার করা একেবারেই উচিত নয়।", ipa: "/juː mʌst nɒt ʃeə jɔː ˌkɒnfɪˈdenʃl ˈpɑːswɜːd wɪð ˈeniwʌn/", context: "না-বাচক স্পষ্ট বিবৃতি", type: "negative" },
            { en: "May I request a brief moment of your valuable time?", bn: "আমি কি আপনার মূল্যবান সময়ের একটি সংক্ষিপ্ত মুহূর্ত পেতে পারি?", ipa: "/meɪ aɪ rɪˈkwest ə briːf ˈməʊmənt ɒv jɔː ˈvæljuəbl taɪm/", context: "ভদ্র ও স্বাভাবিক প্রশ্ন", type: "question" },
            { en: "What ought we to do to protect our surrounding environment?", bn: "আমাদের চারপাশের পরিবেশ রক্ষায় আমাদের নৈতিকভাবে কী করা উচিত?", ipa: "/wɒt ɔːt wiː tə duː tə prəˈtekt ˈaʊə səˈraʊndɪŋ ɪnˈvaɪrənmənt/", context: "তথ্যবহুল অনুসন্ধানী প্রশ্ন", type: "wh" }
        ],
        nativeVariations: {
            situation: "বলতে চাওয়া: \"আজ সন্ধ্যায় বৃষ্টি হতে পারে, তাই তোমার একটি ছাতা সাথে নেওয়া উচিত।\"",
            standard: "It may rain this evening, so you ought to carry an umbrella.",
            nativeStyle: "It may rain this evening, so you ought to carry an umbrella.",
            waysToSay: [
                { phrasing: "It may rain this evening, so you ought to carry an umbrella.", tone: "পেশাদার ও স্পষ্ট", bn: "আজ সন্ধ্যায় বৃষ্টি হতে পারে, তাই তোমার একটি ছাতা সাথে নেওয়া উচিত।" },
                { phrasing: "May I request a brief moment of your valuable time?", tone: "ভদ্র ও চমৎকার", bn: "আমি কি আপনার মূল্যবান সময়ের একটি সংক্ষিপ্ত মুহূর্ত পেতে পারি?" },
                { phrasing: "What ought we to do to protect our surrounding environment?", tone: "বিশ্লেষণধর্মী", bn: "আমাদের চারপাশের পরিবেশ রক্ষায় আমাদের নৈতিকভাবে কী করা উচিত?" }
            ],
            tip: "💡 এই কাঠামোর নিয়মিত চর্চা আপনার স্পিকিংকে আরও সাবলীল ও আন্তর্জাতিক মানের করে তুলবে।"
        },
        qaDrill: {
            targetQuestion: {
                en: "May I assist you with carrying these heavy bags?",
                bn: "এই ভারী ব্যাগগুলো বহনে আমি কি আপনাকে সাহায্য করতে পারি?",
                ipa: "/hæv juː biːn/"
            },
            possibleAnswers: [
                { style: "সংক্ষিপ্ত সম্মতি (Short Affirmative)", en: "Yes, absolutely! I find it very rewarding.", bn: "হ্যাঁ, অবশ্যই! এটি আমার কাছে দারুণ ফলপ্রসূ মনে হয়।", ipa: "/jes ˌæbsəˈluːtli/" },
                { style: "বিস্তারিত উত্তর (Elaborated)", en: "It may rain this evening, so you ought to carry an umbrella.", bn: "আজ সন্ধ্যায় বৃষ্টি হতে পারে, তাই তোমার একটি ছাতা সাথে নেওয়া উচিত।", ipa: "/ɪt meɪ reɪn ðɪs ˈiːvnɪŋ səʊ juː ɔːt tə ˈkæri ən ʌmˈbrelə/" },
                { style: "না-বাচক উত্তর (Polite Negative)", en: "Not quite, but I am planning to start soon.", bn: "পুরোপুরি নয়, তবে খুব শীঘ্রই শুরু করার পরিকল্পনা করছি।", ipa: "/nɒt kwaɪt/" },
                { style: "বিকল্প বা দ্বিধা (Alternative / Uncertainty)", en: "It varies depending on my daily schedule.", bn: "আমার দৈনন্দিন রুটিনের ওপর ভিত্তি করে এটি পরিবর্তিত হয়।", ipa: "/ɪt ˈveəriz/" }
            ]
        },
        sentenceBuilder: {
            subjects: ["You must", "We ought to", "It may", "She might", "Shall we"],
            auxOrVerbs: ["respect the traffic regulations", "help those in urgent need", "rain heavily this evening", "be interested in the offer", "begin our session today"],
            complements: ["without any hesitation", "to maintain community harmony", "according to the weather forecast", "if we explain the benefits", "right now together"]
        }
    },
    {
        id: "lesson-25-be-being-been",
        lessonNumber: 25,
        title: "The Master Guide: Be, Being, Been এর ব্যবহার",
        subtitle: "Be (হওয়া/হও), Being (হওয়া অবস্থায়/প্যাসিভ), Been (হয়েছে/ঘুরে আসা)",
        phase: "advanced",
        phaseLabel: "উচ্চতর স্পোকেন (Master Guide)",
        level: "Upper-Intermediate",
        concept: {
            explanation: "১. Be: নির্দেশক বা মোডালের পর মূল রূপ (Be quiet! You should be polite)। ২. Being: কন্টিনিউয়াস প্যাসিভ (The road is being repaired) অথবা সাময়িক আচরণ প্রকাশে (Why are you being so rude today?) অথবা হওয়াতে (Being a student, I read books)। ৩. Been: Perfect Tense ও প্যাসিভ (I have been there; It has been completed; He has been sick)।",
            whenToUse: "স্পোকেন ইংলিশে আত্মবিশ্বাসের সাথে প্যাসিভ এবং নিখুঁত এক্সপ্রেশন তৈরি করতে। 'I have been to Cox's Bazar' মানে আমি সেখানে গিয়ে ঘুরে এসেছি।",
            commonMistake: "'I am being student' বলা ভুল (সঠিক: I am a student)। কিন্তু কারো সাময়িক অস্বাভাবিক আচরণে 'He is being childish' একদম সঠিক।",
            formulaSummary: "Modal + be | am/is/are + being + V3 | have/has/had + been + V3 / to [place]"
        },
        transformation6Way: {
            baseConcept: "The Master Guide: Be, Being, Been এর ব্যবহার",
            positive: {
                formula: "Modal + be | am/is/are + being + V3 | have/has/had + been + V3 / to [place]",
                en: "The new bridge is being constructed, and I have been there twice.",
                bn: "নতুন সেতুটি এখন নির্মাণ করা হচ্ছে, এবং আমি ইতিমধ্যে দুইবার সেখানে গিয়েছি।",
                ipa: "/ðə njuː brɪdʒ ɪz ˈbiːɪŋ kənˈstrʌktɪd ænd aɪ hæv biːn ðeə twaɪs/"
            },
            negative: {
                formula: "Subject + Auxiliary Negative + Verb + Extension",
                en: "He wasn't being genuine when he gave that polite compliment.",
                bn: "সেই ভদ্র প্রশংসা করার সময় তিনি ভেতর থেকে আন্তরিক হচ্ছিলেন না।",
                ipa: "/hiː ˈwɒznt ˈbiːɪŋ ˈdʒenjuɪn wen hiː ɡeɪv ðæt pəˈlaɪt ˈkɒmplɪmənt/"
            },
            interrogative: {
                formula: "Auxiliary + Subject + Verb + Extension?",
                en: "Have you ever been to the Sundarbans before?",
                bn: "তুমি কি এর আগে কখনো সুন্দরবনে ঘুরে এসেছো?",
                ipa: "/hæv juː ˈevə biːn tə ðə ˈsʊndəbənz bɪˈfɔː/"
            },
            interroNegative: {
                formula: "Auxiliary Negative + Subject + Verb + Extension?",
                en: "Isn't the issue being addressed by the administration right now?",
                bn: "সমস্যাটি কি এই মুহূর্তে প্রশাসনের দ্বারা সমাধান করা হচ্ছে না?",
                ipa: "/ˈɪznt ði ˈɪʃuː ˈbiːɪŋ əˈdrest baɪ ði ədˌmɪnɪˈstreɪʃn raɪt naʊ/"
            },
            whPositive: {
                formula: "WH-Word + Auxiliary + Subject + Verb + Extension?",
                en: "Where have you been all this time?",
                bn: "এতক্ষণ তুমি কোথায় ছিলে?",
                ipa: "/weə hæv juː biːn ɔːl ðɪs taɪm/"
            },
            whNegative: {
                formula: "WH-Word + Auxiliary Negative + Subject + Verb + Extension?",
                en: "Why is the car not being washed properly today?",
                bn: "আজ গাড়িটি সঠিকভাবে কেন ধোয়া হচ্ছে না?",
                ipa: "/waɪ ɪz ðə kɑː nɒt ˈbiːɪŋ wɒʃt ˈprɒpəli təˈdeɪ/"
            }
        },
        realLifeSentences: [
            { en: "The new bridge is being constructed, and I have been there twice.", bn: "নতুন সেতুটি এখন নির্মাণ করা হচ্ছে, এবং আমি ইতিমধ্যে দুইবার সেখানে গিয়েছি।", ipa: "/ðə njuː brɪdʒ ɪz ˈbiːɪŋ kənˈstrʌktɪd ænd aɪ hæv biːn ðeə twaɪs/", context: "দৈনন্দিন বাস্তব প্রয়োগ", type: "positive" },
            { en: "He wasn't being genuine when he gave that polite compliment.", bn: "সেই ভদ্র প্রশংসা করার সময় তিনি ভেতর থেকে আন্তরিক হচ্ছিলেন না।", ipa: "/hiː ˈwɒznt ˈbiːɪŋ ˈdʒenjuɪn wen hiː ɡeɪv ðæt pəˈlaɪt ˈkɒmplɪmənt/", context: "না-বাচক স্পষ্ট বিবৃতি", type: "negative" },
            { en: "Have you ever been to the Sundarbans before?", bn: "তুমি কি এর আগে কখনো সুন্দরবনে ঘুরে এসেছো?", ipa: "/hæv juː ˈevə biːn tə ðə ˈsʊndəbənz bɪˈfɔː/", context: "ভদ্র ও স্বাভাবিক প্রশ্ন", type: "question" },
            { en: "Where have you been all this time?", bn: "এতক্ষণ তুমি কোথায় ছিলে?", ipa: "/weə hæv juː biːn ɔːl ðɪs taɪm/", context: "তথ্যবহুল অনুসন্ধানী প্রশ্ন", type: "wh" }
        ],
        nativeVariations: {
            situation: "বলতে চাওয়া: \"নতুন সেতুটি এখন নির্মাণ করা হচ্ছে, এবং আমি ইতিমধ্যে দুইবার সেখানে গিয়েছি।\"",
            standard: "The new bridge is being constructed, and I have been there twice.",
            nativeStyle: "The new bridge is being constructed, and I have been there twice.",
            waysToSay: [
                { phrasing: "The new bridge is being constructed, and I have been there twice.", tone: "পেশাদার ও স্পষ্ট", bn: "নতুন সেতুটি এখন নির্মাণ করা হচ্ছে, এবং আমি ইতিমধ্যে দুইবার সেখানে গিয়েছি।" },
                { phrasing: "Have you ever been to the Sundarbans before?", tone: "ভদ্র ও চমৎকার", bn: "তুমি কি এর আগে কখনো সুন্দরবনে ঘুরে এসেছো?" },
                { phrasing: "Where have you been all this time?", tone: "বিশ্লেষণধর্মী", bn: "এতক্ষণ তুমি কোথায় ছিলে?" }
            ],
            tip: "💡 এই কাঠামোর নিয়মিত চর্চা আপনার স্পিকিংকে আরও সাবলীল ও আন্তর্জাতিক মানের করে তুলবে।"
        },
        qaDrill: {
            targetQuestion: {
                en: "Have you ever been to a foreign country for higher studies?",
                bn: "উচ্চশিক্ষার জন্য তুমি কি কখনো বিদেশে গিয়েছো?",
                ipa: "/hæv juː biːn/"
            },
            possibleAnswers: [
                { style: "সংক্ষিপ্ত সম্মতি (Short Affirmative)", en: "Yes, absolutely! I find it very rewarding.", bn: "হ্যাঁ, অবশ্যই! এটি আমার কাছে দারুণ ফলপ্রসূ মনে হয়।", ipa: "/jes ˌæbsəˈluːtli/" },
                { style: "বিস্তারিত উত্তর (Elaborated)", en: "The new bridge is being constructed, and I have been there twice.", bn: "নতুন সেতুটি এখন নির্মাণ করা হচ্ছে, এবং আমি ইতিমধ্যে দুইবার সেখানে গিয়েছি।", ipa: "/ðə njuː brɪdʒ ɪz ˈbiːɪŋ kənˈstrʌktɪd ænd aɪ hæv biːn ðeə twaɪs/" },
                { style: "না-বাচক উত্তর (Polite Negative)", en: "Not quite, but I am planning to start soon.", bn: "পুরোপুরি নয়, তবে খুব শীঘ্রই শুরু করার পরিকল্পনা করছি।", ipa: "/nɒt kwaɪt/" },
                { style: "বিকল্প বা দ্বিধা (Alternative / Uncertainty)", en: "It varies depending on my daily schedule.", bn: "আমার দৈনন্দিন রুটিনের ওপর ভিত্তি করে এটি পরিবর্তিত হয়।", ipa: "/ɪt ˈveəriz/" }
            ]
        },
        sentenceBuilder: {
            subjects: ["I have been to", "The presentation is being", "You should always be", "Being an honest person", "It has already been"],
            auxOrVerbs: ["London and Paris", "prepared by the team", "punctual and honest", "he earned everyone's trust", "approved by management"],
            complements: ["multiple times in my life", "with utmost professional care", "in all your communications", "without demanding any praise", "before the final deadline"]
        }
    },
    {
        id: "lesson-26-conditionals",
        lessonNumber: 26,
        title: "Real-Life Conditionals: 0, 1st, 2nd & 3rd Conditionals",
        subtitle: "বাস্তব জীবনের শর্তমূলক বাক্য (\"যদি তুমি আসো...\", \"যদি আমি ধনী হতাম...\")",
        phase: "advanced",
        phaseLabel: "শর্তমূলক বাক্য (Conditionals)",
        level: "Upper-Intermediate",
        concept: {
            explanation: "১. Zero: চিরন্তন সত্য (If you heat ice, it melts)। ২. 1st: বাস্তব সম্ভাবনা (If you practice daily, you will speak fluently)। ৩. 2nd: কাল্পনিক বর্তমান/অবাস্তব ইচ্ছা (If I were rich, I would help all orphans)। ৪. 3rd: অতীতের আফসোস বা অপরিবর্তনীয় ঘটনা (If you had told me, I would have helped you)।",
            whenToUse: "শর্ত, ভবিষ্যৎ সম্ভাবনা, কাল্পনিক স্বপ্ন এবং অতীতের অনুশোচনা প্রকাশে।",
            commonMistake: "'If I will come, I will meet you' বলা ভুল! If ক্লজে কখনোই will বসে না; সঠিক: 'If I come, I will meet you'। আর ২য় কন্ডিশনালে I এর সাথে was না বসে 'were' বসে (If I were you)।",
            formulaSummary: "1st: If + Present, will + V1 | 2nd: If + Past, would + V1 | 3rd: If + had + V3, would have + V3"
        },
        transformation6Way: {
            baseConcept: "Real-Life Conditionals: 0, 1st, 2nd & 3rd Conditionals",
            positive: {
                formula: "1st: If + Present, will + V1 | 2nd: If + Past, would + V1 | 3rd: If + had + V3, would have + V3",
                en: "If you practice speaking every single day, you will become unstoppable.",
                bn: "যদি তুমি প্রতিদিন কথা বলা অনুশীলন করো, তবে তুমি অপ্রতিরোধ্য হয়ে উঠবে।",
                ipa: "/ɪf juː ˈpræktɪs ˈspiːkɪŋ ˈevri ˈsɪŋɡl deɪ juː wɪl bɪˈkʌm ʌnˈstɒpəbl/"
            },
            negative: {
                formula: "Subject + Auxiliary Negative + Verb + Extension",
                en: "If I had not practiced consistently, I wouldn't have passed the IELTS test.",
                bn: "যদি আমি ধারাবাহিকভাবে অনুশীলন না করতাম, তবে আমি আইইএলটিএস পরীক্ষায় উত্তীর্ণ হতাম না।",
                ipa: "/ɪf aɪ hæd nɒt ˈpræktɪst kənˈsɪstəntli aɪ ˈwʊdnt hæv pɑːst ði ˈaɪelts test/"
            },
            interrogative: {
                formula: "Auxiliary + Subject + Verb + Extension?",
                en: "If you won the lottery tomorrow, what would you do first?",
                bn: "তুমি যদি কাল লটারি জিতে যাও, তবে তুমি সবার প্রথমে কী করবে?",
                ipa: "/ɪf juː wʌn ðə ˈlɒtəri təˈmɒrəʊ wɒt wʊd juː duː fɜːst/"
            },
            interroNegative: {
                formula: "Auxiliary Negative + Subject + Verb + Extension?",
                en: "Wouldn't you help your neighbor if they were in serious trouble?",
                bn: "তোমার প্রতিবেশী যদি গুরুতর বিপদে পড়ত তুমি কি তাকে সাহায্য করতে না?",
                ipa: "/ˈwʊdnt juː help jɔː ˈneɪbər ɪf ðeɪ wɜːr ɪn ˈsɪəriəs ˈtrʌbl/"
            },
            whPositive: {
                formula: "WH-Word + Auxiliary + Subject + Verb + Extension?",
                en: "What will happen if we do not submit the project on time?",
                bn: "আমরা যদি সময়মতো প্রকল্পটি জমা না দিই তবে কী ঘটবে?",
                ipa: "/wɒt wɪl ˈhæpən ɪf wiː duː nɒt səbˈmɪt ðə ˈprɒdʒekt ɒn taɪm/"
            },
            whNegative: {
                formula: "WH-Word + Auxiliary Negative + Subject + Verb + Extension?",
                en: "Why would you decline the offer if they matched your expected salary?",
                bn: "তারা যদি তোমার কাঙ্ক্ষিত বেতন দিত তবে কেন তুমি প্রস্তাবটি প্রত্যাখ্যান করতে?",
                ipa: "/waɪ wʊd juː dɪˈklaɪn ði ˈɒfər ɪf ðeɪ mætʃt jɔːr ɪkˈspektɪd ˈsæləri/"
            }
        },
        realLifeSentences: [
            { en: "If you practice speaking every single day, you will become unstoppable.", bn: "যদি তুমি প্রতিদিন কথা বলা অনুশীলন করো, তবে তুমি অপ্রতিরোধ্য হয়ে উঠবে।", ipa: "/ɪf juː ˈpræktɪs ˈspiːkɪŋ ˈevri ˈsɪŋɡl deɪ juː wɪl bɪˈkʌm ʌnˈstɒpəbl/", context: "দৈনন্দিন বাস্তব প্রয়োগ", type: "positive" },
            { en: "If I had not practiced consistently, I wouldn't have passed the IELTS test.", bn: "যদি আমি ধারাবাহিকভাবে অনুশীলন না করতাম, তবে আমি আইইএলটিএস পরীক্ষায় উত্তীর্ণ হতাম না।", ipa: "/ɪf aɪ hæd nɒt ˈpræktɪst kənˈsɪstəntli aɪ ˈwʊdnt hæv pɑːst ði ˈaɪelts test/", context: "না-বাচক স্পষ্ট বিবৃতি", type: "negative" },
            { en: "If you won the lottery tomorrow, what would you do first?", bn: "তুমি যদি কাল লটারি জিতে যাও, তবে তুমি সবার প্রথমে কী করবে?", ipa: "/ɪf juː wʌn ðə ˈlɒtəri təˈmɒrəʊ wɒt wʊd juː duː fɜːst/", context: "ভদ্র ও স্বাভাবিক প্রশ্ন", type: "question" },
            { en: "What will happen if we do not submit the project on time?", bn: "আমরা যদি সময়মতো প্রকল্পটি জমা না দিই তবে কী ঘটবে?", ipa: "/wɒt wɪl ˈhæpən ɪf wiː duː nɒt səbˈmɪt ðə ˈprɒdʒekt ɒn taɪm/", context: "তথ্যবহুল অনুসন্ধানী প্রশ্ন", type: "wh" }
        ],
        nativeVariations: {
            situation: "বলতে চাওয়া: \"যদি তুমি প্রতিদিন কথা বলা অনুশীলন করো, তবে তুমি অপ্রতিরোধ্য হয়ে উঠবে।\"",
            standard: "If you practice speaking every single day, you will become unstoppable.",
            nativeStyle: "If you practice speaking every single day, you will become unstoppable.",
            waysToSay: [
                { phrasing: "If you practice speaking every single day, you will become unstoppable.", tone: "পেশাদার ও স্পষ্ট", bn: "যদি তুমি প্রতিদিন কথা বলা অনুশীলন করো, তবে তুমি অপ্রতিরোধ্য হয়ে উঠবে।" },
                { phrasing: "If you won the lottery tomorrow, what would you do first?", tone: "ভদ্র ও চমৎকার", bn: "তুমি যদি কাল লটারি জিতে যাও, তবে তুমি সবার প্রথমে কী করবে?" },
                { phrasing: "What will happen if we do not submit the project on time?", tone: "বিশ্লেষণধর্মী", bn: "আমরা যদি সময়মতো প্রকল্পটি জমা না দিই তবে কী ঘটবে?" }
            ],
            tip: "💡 এই কাঠামোর নিয়মিত চর্চা আপনার স্পিকিংকে আরও সাবলীল ও আন্তর্জাতিক মানের করে তুলবে।"
        },
        qaDrill: {
            targetQuestion: {
                en: "What would you buy if you had one million dollars right now?",
                bn: "এই মুহূর্তে তোমার কাছে এক মিলিয়ন ডলার থাকলে তুমি কী কিনতে?",
                ipa: "/hæv juː biːn/"
            },
            possibleAnswers: [
                { style: "সংক্ষিপ্ত সম্মতি (Short Affirmative)", en: "Yes, absolutely! I find it very rewarding.", bn: "হ্যাঁ, অবশ্যই! এটি আমার কাছে দারুণ ফলপ্রসূ মনে হয়।", ipa: "/jes ˌæbsəˈluːtli/" },
                { style: "বিস্তারিত উত্তর (Elaborated)", en: "If you practice speaking every single day, you will become unstoppable.", bn: "যদি তুমি প্রতিদিন কথা বলা অনুশীলন করো, তবে তুমি অপ্রতিরোধ্য হয়ে উঠবে।", ipa: "/ɪf juː ˈpræktɪs ˈspiːkɪŋ ˈevri ˈsɪŋɡl deɪ juː wɪl bɪˈkʌm ʌnˈstɒpəbl/" },
                { style: "না-বাচক উত্তর (Polite Negative)", en: "Not quite, but I am planning to start soon.", bn: "পুরোপুরি নয়, তবে খুব শীঘ্রই শুরু করার পরিকল্পনা করছি।", ipa: "/nɒt kwaɪt/" },
                { style: "বিকল্প বা দ্বিধা (Alternative / Uncertainty)", en: "It varies depending on my daily schedule.", bn: "আমার দৈনন্দিন রুটিনের ওপর ভিত্তি করে এটি পরিবর্তিত হয়।", ipa: "/ɪt ˈveəriz/" }
            ]
        },
        sentenceBuilder: {
            subjects: ["If you join our club", "If I were the prime minister", "If we had left earlier", "What would you do", "If the weather is fine"],
            auxOrVerbs: ["you will improve rapidly", "I would make education free", "we would have caught the flight", "if you were in my position", "we will go on a picnic"],
            complements: ["without any shadow of doubt", "for every child in our nation", "before the airport gates closed", "to resolve this family matter", "near the peaceful riverside"]
        }
    },
    {
        id: "lesson-27-causative-verbs",
        lessonNumber: 27,
        title: "Causative Verbs: Make, Let, Have, Get & Help",
        subtitle: "কাউকে দিয়ে কোনো কাজ করানো বা সুযোগ দেওয়া (\"আমি তাকে দিয়ে করিয়েছি\")",
        phase: "power-structures",
        phaseLabel: "প্রযোজক ক্রিয়া (Causative Verbs)",
        level: "Upper-Intermediate",
        concept: {
            explanation: "নিজে না করে অন্যকে দিয়ে কাজ করানোর ক্ষেত্রে Causative Verbs বসে। Make (বাধ্য করা: She made me cry), Let (অনুমতি দেওয়া: Let me go), Have (দায়িত্ব দিয়ে করানো: I will have my mechanic fix it), Get (কনভিন্স বা রাজি করিয়ে করানো - এর সাথে to বসে: I got him to sign the deal), Help (সাহায্য করা: It helps me learn)।",
            whenToUse: "'আমি আমার চুল কাটিয়েছি' (I had my hair cut) বা 'সে আমাকে দিয়ে কাজটি করিয়েছে' (He made me do the work)।",
            commonMistake: "Get ছাড়া Make, Let, Have এর পর কখনো 'to' বসে না (He made me to go ❌ -> He made me go ✔️; Let him to speak ❌ -> Let him speak ✔️)।",
            formulaSummary: "Make/Let/Have + Person + V1 (Base Form) | Get + Person + to + V1"
        },
        transformation6Way: {
            baseConcept: "Causative Verbs: Make, Let, Have, Get & Help",
            positive: {
                formula: "Make/Let/Have + Person + V1 (Base Form) | Get + Person + to + V1",
                en: "The motivational speech made me realize my hidden potential.",
                bn: "সেই অনুপ্রেরণাদায়ক বক্তব্যটি আমাকে আমার সুপ্ত সম্ভাবনা উপলব্ধি করিয়েছিল।",
                ipa: "/ðə ˌməʊtɪˈveɪʃənl spiːtʃ meɪd miː ˈrɪəlaɪz maɪ ˈhɪdn pəˈtenʃl/"
            },
            negative: {
                formula: "Subject + Auxiliary Negative + Verb + Extension",
                en: "Please do not let negative thoughts distract you from your ultimate goals.",
                bn: "দয়া করে নেতিবাচক চিন্তাকে তোমার চূড়ান্ত লক্ষ্য থেকে বিচ্যুত করতে দিও না।",
                ipa: "/pliːz duː nɒt let ˈneɡətɪv θɔːts dɪˈstrækt juː frɒm jɔːr ˈʌltɪmət ɡəʊlz/"
            },
            interrogative: {
                formula: "Auxiliary + Subject + Verb + Extension?",
                en: "Did you get the plumber to fix the water leakage?",
                bn: "তুমি কি প্লাম্বারকে রাজি করিয়ে পানির লিকেজটি মেরামত করিয়েছিলে?",
                ipa: "/dɪd juː ɡet ðə ˈplʌmər tə fɪks ðə ˈwɔːtə ˈliːkɪdʒ/"
            },
            interroNegative: {
                formula: "Auxiliary Negative + Subject + Verb + Extension?",
                en: "Why don't you let your younger brother speak his mind?",
                bn: "তুমি তোমার ছোট ভাইকে তার মনের কথা বলতে দিচ্ছ না কেন?",
                ipa: "/waɪ dəʊnt juː let jɔː ˈjʌŋɡə ˈbrʌðə spiːk hɪz maɪnd/"
            },
            whPositive: {
                formula: "WH-Word + Auxiliary + Subject + Verb + Extension?",
                en: "Who had the air conditioner repaired so efficiently today?",
                bn: "আজ কে এত দক্ষতার সাথে এসি মেরামত করিয়ে নিয়েছিল?",
                ipa: "/huː hæd ðiː ˈeə kənˈdɪʃnə rɪˈpeəd səʊ ɪˈfɪʃntli təˈdeɪ/"
            },
            whNegative: {
                formula: "WH-Word + Auxiliary Negative + Subject + Verb + Extension?",
                en: "Why did you make him apologize when he was innocent?",
                bn: "সে নির্দোষ হওয়া সত্ত্বেও তুমি তাকে ক্ষমা চাইতে বাধ্য করেছিলে কেন?",
                ipa: "/waɪ dɪd juː meɪk hɪm əˈpɒlədʒaɪz wen hiː wəz ˈɪnəsnt/"
            }
        },
        realLifeSentences: [
            { en: "The motivational speech made me realize my hidden potential.", bn: "সেই অনুপ্রেরণাদায়ক বক্তব্যটি আমাকে আমার সুপ্ত সম্ভাবনা উপলব্ধি করিয়েছিল।", ipa: "/ðə ˌməʊtɪˈveɪʃənl spiːtʃ meɪd miː ˈrɪəlaɪz maɪ ˈhɪdn pəˈtenʃl/", context: "দৈনন্দিন বাস্তব প্রয়োগ", type: "positive" },
            { en: "Please do not let negative thoughts distract you from your ultimate goals.", bn: "দয়া করে নেতিবাচক চিন্তাকে তোমার চূড়ান্ত লক্ষ্য থেকে বিচ্যুত করতে দিও না।", ipa: "/pliːz duː nɒt let ˈneɡətɪv θɔːts dɪˈstrækt juː frɒm jɔːr ˈʌltɪmət ɡəʊlz/", context: "না-বাচক স্পষ্ট বিবৃতি", type: "negative" },
            { en: "Did you get the plumber to fix the water leakage?", bn: "তুমি কি প্লাম্বারকে রাজি করিয়ে পানির লিকেজটি মেরামত করিয়েছিলে?", ipa: "/dɪd juː ɡet ðə ˈplʌmər tə fɪks ðə ˈwɔːtə ˈliːkɪdʒ/", context: "ভদ্র ও স্বাভাবিক প্রশ্ন", type: "question" },
            { en: "Who had the air conditioner repaired so efficiently today?", bn: "আজ কে এত দক্ষতার সাথে এসি মেরামত করিয়ে নিয়েছিল?", ipa: "/huː hæd ðiː ˈeə kənˈdɪʃnə rɪˈpeəd səʊ ɪˈfɪʃntli təˈdeɪ/", context: "তথ্যবহুল অনুসন্ধানী প্রশ্ন", type: "wh" }
        ],
        nativeVariations: {
            situation: "বলতে চাওয়া: \"সেই অনুপ্রেরণাদায়ক বক্তব্যটি আমাকে আমার সুপ্ত সম্ভাবনা উপলব্ধি করিয়েছিল।\"",
            standard: "The motivational speech made me realize my hidden potential.",
            nativeStyle: "The motivational speech made me realize my hidden potential.",
            waysToSay: [
                { phrasing: "The motivational speech made me realize my hidden potential.", tone: "পেশাদার ও স্পষ্ট", bn: "সেই অনুপ্রেরণাদায়ক বক্তব্যটি আমাকে আমার সুপ্ত সম্ভাবনা উপলব্ধি করিয়েছিল।" },
                { phrasing: "Did you get the plumber to fix the water leakage?", tone: "ভদ্র ও চমৎকার", bn: "তুমি কি প্লাম্বারকে রাজি করিয়ে পানির লিকেজটি মেরামত করিয়েছিলে?" },
                { phrasing: "Who had the air conditioner repaired so efficiently today?", tone: "বিশ্লেষণধর্মী", bn: "আজ কে এত দক্ষতার সাথে এসি মেরামত করিয়ে নিয়েছিল?" }
            ],
            tip: "💡 এই কাঠামোর নিয়মিত চর্চা আপনার স্পিকিংকে আরও সাবলীল ও আন্তর্জাতিক মানের করে তুলবে।"
        },
        qaDrill: {
            targetQuestion: {
                en: "Could you let me know when the next workshop begins?",
                bn: "পরবর্তী কর্মশালাটি কখন শুরু হবে তা কি আমাকে দয়া করে জানিয়ে দিতে পারেন?",
                ipa: "/hæv juː biːn/"
            },
            possibleAnswers: [
                { style: "সংক্ষিপ্ত সম্মতি (Short Affirmative)", en: "Yes, absolutely! I find it very rewarding.", bn: "হ্যাঁ, অবশ্যই! এটি আমার কাছে দারুণ ফলপ্রসূ মনে হয়।", ipa: "/jes ˌæbsəˈluːtli/" },
                { style: "বিস্তারিত উত্তর (Elaborated)", en: "The motivational speech made me realize my hidden potential.", bn: "সেই অনুপ্রেরণাদায়ক বক্তব্যটি আমাকে আমার সুপ্ত সম্ভাবনা উপলব্ধি করিয়েছিল।", ipa: "/ðə ˌməʊtɪˈveɪʃənl spiːtʃ meɪd miː ˈrɪəlaɪz maɪ ˈhɪdn pəˈtenʃl/" },
                { style: "না-বাচক উত্তর (Polite Negative)", en: "Not quite, but I am planning to start soon.", bn: "পুরোপুরি নয়, তবে খুব শীঘ্রই শুরু করার পরিকল্পনা করছি।", ipa: "/nɒt kwaɪt/" },
                { style: "বিকল্প বা দ্বিধা (Alternative / Uncertainty)", en: "It varies depending on my daily schedule.", bn: "আমার দৈনন্দিন রুটিনের ওপর ভিত্তি করে এটি পরিবর্তিত হয়।", ipa: "/ɪt ˈveəriz/" }
            ]
        },
        sentenceBuilder: {
            subjects: ["I will have my assistant", "Please let me", "She got her brother to", "Hard work makes us", "This app helps you"],
            auxOrVerbs: ["email the documents", "explain the entire scenario", "drive her to the campus", "appreciate real success", "speak English effortlessly"],
            complements: ["first thing tomorrow morning", "without interrupting me", "safe and sound", "throughout our lives", "with just twenty minutes daily"]
        }
    },
    {
        id: "lesson-28-passive-speaking",
        lessonNumber: 28,
        title: "Passive Voice in Speaking: am/is/are + V3 & was/were + V3",
        subtitle: "দৈনন্দিন স্পোকেন ইংলিশে যখন কাজের চেয়ে ফলাফল প্রধান (\"কাউকে জানানো হয়েছে\")",
        phase: "power-structures",
        phaseLabel: "প্যাসিভ স্পোকেন (Passive Speaking)",
        level: "Upper-Intermediate",
        concept: {
            explanation: "কে কাজ করেছে তা অপ্রয়োজনীয় বা অজানা থাকলে স্পোকেন ইংলিশে সরাসরি Passive ব্যবহার করা হয়। যেমন: 'অফিস বন্ধ করা হয়েছে' (The office is closed), 'চা পরিবেশন করা হলো' (Tea was served), 'আমাকে জানানো হয়েছে' (I have been informed)।",
            whenToUse: "খবর, আনুষ্ঠানিক ঘোষণা, অফিসের নিয়ম, এবং দৈনন্দিন জীবনে যখন কাজের ফলাফলের ওপর জোর দিতে হয়।",
            commonMistake: "প্যাসিভ ভয়েসে Be Verb (am/is/are/was/were/been) এর পর অবশ্যই ভার্বের ৩য় রূপ (Past Participle - V3) বসবে (It was wrote ❌ -> It was written ✔️)।",
            formulaSummary: "Object + Be Verb (am/is/are/was/were/has been) + V3 (Past Participle)"
        },
        transformation6Way: {
            baseConcept: "Passive Voice in Speaking: am/is/are + V3 & was/were + V3",
            positive: {
                formula: "Object + Be Verb (am/is/are/was/were/has been) + V3 (Past Participle)",
                en: "English is spoken and celebrated all around the globe.",
                bn: "সারা বিশ্ব জুড়ে ইংরেজি ভাষায় কথা বলা হয় এবং একে সমাদৃত করা হয়।",
                ipa: "/ˈɪŋɡlɪʃ ɪz ˈspəʊkən ænd ˈselɪbreɪtɪd ɔːl əˈraʊnd ðə ɡləʊb/"
            },
            negative: {
                formula: "Subject + Auxiliary Negative + Verb + Extension",
                en: "The official announcement was not released until 5:00 PM.",
                bn: "বিকেল ৫টার আগে সরকারি ঘোষণাটি প্রকাশ করা হয়নি।",
                ipa: "/ði əˈfɪʃl əˈnaʊnsmənt wəz nɒt rɪˈliːst ənˈtɪl faɪv piː em/"
            },
            interrogative: {
                formula: "Auxiliary + Subject + Verb + Extension?",
                en: "Were you invited to the annual corporate dinner tonight?",
                bn: "আজ রাতে বার্ষিক করপোরেট নৈশভোজে কি তোমাকে আমন্ত্রণ জানানো হয়েছিল?",
                ipa: "/wɜː juː ɪnˈvaɪtɪd tə ði ˈænjuəl ˈkɔːpərət ˈdɪnə təˈnaɪt/"
            },
            interroNegative: {
                formula: "Auxiliary Negative + Subject + Verb + Extension?",
                en: "Isn't fresh breakfast served every morning at this hotel?",
                bn: "এই হোটেলে কি প্রতিদিন সকালে তাজা নাস্তা পরিবেশন করা হয় না?",
                ipa: "/ˈɪznt freʃ ˈbrekfəst sɜːvd ˈevri ˈmɔːnɪŋ æt ðɪs həʊˈtel/"
            },
            whPositive: {
                formula: "WH-Word + Auxiliary + Subject + Verb + Extension?",
                en: "Where was this beautiful handloom saree crafted?",
                bn: "এই সুন্দর তাঁতের শাড়িটি কোথায় তৈরি করা হয়েছিল?",
                ipa: "/weə wəz ðɪs ˈbjuːtɪfl ˈhændluːm ˈsɑːri ˈkrɑːftɪd/"
            },
            whNegative: {
                formula: "WH-Word + Auxiliary Negative + Subject + Verb + Extension?",
                en: "Why wasn't the broken elevator repaired immediately by maintenance?",
                bn: "রক্ষণাবেক্ষণ দল অবিলম্বে নষ্ট লিফটটি মেরামত করেনি কেন?",
                ipa: "/waɪ ˈwɒznt ðə ˈbrəʊkən ˈelɪveɪtə rɪˈpeəd ɪˈmiːdiətli baɪ ˈmeɪntənəns/"
            }
        },
        realLifeSentences: [
            { en: "English is spoken and celebrated all around the globe.", bn: "সারা বিশ্ব জুড়ে ইংরেজি ভাষায় কথা বলা হয় এবং একে সমাদৃত করা হয়।", ipa: "/ˈɪŋɡlɪʃ ɪz ˈspəʊkən ænd ˈselɪbreɪtɪd ɔːl əˈraʊnd ðə ɡləʊb/", context: "দৈনন্দিন বাস্তব প্রয়োগ", type: "positive" },
            { en: "The official announcement was not released until 5:00 PM.", bn: "বিকেল ৫টার আগে সরকারি ঘোষণাটি প্রকাশ করা হয়নি।", ipa: "/ði əˈfɪʃl əˈnaʊnsmənt wəz nɒt rɪˈliːst ənˈtɪl faɪv piː em/", context: "না-বাচক স্পষ্ট বিবৃতি", type: "negative" },
            { en: "Were you invited to the annual corporate dinner tonight?", bn: "আজ রাতে বার্ষিক করপোরেট নৈশভোজে কি তোমাকে আমন্ত্রণ জানানো হয়েছিল?", ipa: "/wɜː juː ɪnˈvaɪtɪd tə ði ˈænjuəl ˈkɔːpərət ˈdɪnə təˈnaɪt/", context: "ভদ্র ও স্বাভাবিক প্রশ্ন", type: "question" },
            { en: "Where was this beautiful handloom saree crafted?", bn: "এই সুন্দর তাঁতের শাড়িটি কোথায় তৈরি করা হয়েছিল?", ipa: "/weə wəz ðɪs ˈbjuːtɪfl ˈhændluːm ˈsɑːri ˈkrɑːftɪd/", context: "তথ্যবহুল অনুসন্ধানী প্রশ্ন", type: "wh" }
        ],
        nativeVariations: {
            situation: "বলতে চাওয়া: \"সারা বিশ্ব জুড়ে ইংরেজি ভাষায় কথা বলা হয় এবং একে সমাদৃত করা হয়।\"",
            standard: "English is spoken and celebrated all around the globe.",
            nativeStyle: "English is spoken and celebrated all around the globe.",
            waysToSay: [
                { phrasing: "English is spoken and celebrated all around the globe.", tone: "পেশাদার ও স্পষ্ট", bn: "সারা বিশ্ব জুড়ে ইংরেজি ভাষায় কথা বলা হয় এবং একে সমাদৃত করা হয়।" },
                { phrasing: "Were you invited to the annual corporate dinner tonight?", tone: "ভদ্র ও চমৎকার", bn: "আজ রাতে বার্ষিক করপোরেট নৈশভোজে কি তোমাকে আমন্ত্রণ জানানো হয়েছিল?" },
                { phrasing: "Where was this beautiful handloom saree crafted?", tone: "বিশ্লেষণধর্মী", bn: "এই সুন্দর তাঁতের শাড়িটি কোথায় তৈরি করা হয়েছিল?" }
            ],
            tip: "💡 এই কাঠামোর নিয়মিত চর্চা আপনার স্পিকিংকে আরও সাবলীল ও আন্তর্জাতিক মানের করে তুলবে।"
        },
        qaDrill: {
            targetQuestion: {
                en: "Has your passport application been approved by the authorities?",
                bn: "কর্তৃপক্ষের দ্বারা কি তোমার পাসপোর্ট আবেদন অনুমোদিত হয়েছে?",
                ipa: "/hæv juː biːn/"
            },
            possibleAnswers: [
                { style: "সংক্ষিপ্ত সম্মতি (Short Affirmative)", en: "Yes, absolutely! I find it very rewarding.", bn: "হ্যাঁ, অবশ্যই! এটি আমার কাছে দারুণ ফলপ্রসূ মনে হয়।", ipa: "/jes ˌæbsəˈluːtli/" },
                { style: "বিস্তারিত উত্তর (Elaborated)", en: "English is spoken and celebrated all around the globe.", bn: "সারা বিশ্ব জুড়ে ইংরেজি ভাষায় কথা বলা হয় এবং একে সমাদৃত করা হয়।", ipa: "/ˈɪŋɡlɪʃ ɪz ˈspəʊkən ænd ˈselɪbreɪtɪd ɔːl əˈraʊnd ðə ɡləʊb/" },
                { style: "না-বাচক উত্তর (Polite Negative)", en: "Not quite, but I am planning to start soon.", bn: "পুরোপুরি নয়, তবে খুব শীঘ্রই শুরু করার পরিকল্পনা করছি।", ipa: "/nɒt kwaɪt/" },
                { style: "বিকল্প বা দ্বিধা (Alternative / Uncertainty)", en: "It varies depending on my daily schedule.", bn: "আমার দৈনন্দিন রুটিনের ওপর ভিত্তি করে এটি পরিবর্তিত হয়।", ipa: "/ɪt ˈveəriz/" }
            ]
        },
        sentenceBuilder: {
            subjects: ["The project was completed", "Warm tea is served", "I was selected", "The certificates were distributed", "English is widely spoken"],
            auxOrVerbs: ["well ahead of schedule", "with delicious biscuits", "for the overseas fellowship", "among all participants", "in international conferences"],
            complements: ["by our hardworking engineers", "at every meeting session", "out of thousands of applicants", "with huge round of applause", "to bridge cultural gaps"]
        }
    }
];
