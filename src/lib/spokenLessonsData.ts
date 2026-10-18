export interface SpokenLesson {
    id: string;
    lessonNumber: number;
    title: string;
    subtitle: string;
    phase: 'to-be' | 'have-has' | 'tenses' | 'modals' | 'power-structures';
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
        sentenceBuilder: {
            subjects: ['It takes', 'It took me', 'It will take', 'How long does it take', 'Why does it take'],
            auxOrVerbs: ['twenty minutes', 'a lot of patience', 'two months', 'hardly any time', 'only five seconds'],
            complements: ['to reach the office', 'to master IELTS speaking', 'to cook this delicious recipe', 'to solve this puzzle', 'to download the application']
        }
    }
];
