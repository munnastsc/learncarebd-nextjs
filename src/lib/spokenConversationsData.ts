export interface DialogueTurn {
    id: string;
    speaker: string;
    role: 'A' | 'B';
    en: string;
    bn: string;
    ipa: string;
    bn_pron: string;
}

export interface SituationalConversation {
    id: string;
    number: number;
    title: string;
    titleBn: string;
    level: 'Easy' | 'Intermediate';
    category: 'Daily Life' | 'Social' | 'Professional' | 'Travel' | 'Services' | 'Shopping';
    sceneDescription: string;
    starters: { en: string; bn: string; tip: string }[];
    dialogue: DialogueTurn[];
    followUps: { en: string; bn: string }[];
    closers: { en: string; bn: string }[];
    nativePhrases: { phrase: string; meaning: string; context: string }[];
}

export const SITUATIONAL_CONVERSATIONS: SituationalConversation[] = [
    {
        "id": "conv-01-meeting-someone-for-the-first-time",
        "number": 1,
        "title": "Meeting Someone for the First Time",
        "titleBn": "নতুন কারো সাথে প্রথম পরিচয় ও কুশল বিনিময়",
        "level": "Easy",
        "category": "Social",
        "sceneDescription": "নতুন কারো সাথে প্রথম পরিচয় ও কুশল বিনিময় সংক্রান্ত বাস্তব কথোপকথন এবং প্রয়োজনীয় বাক্যসমূহ।",
        "starters": [
            {
                "en": "Hello! Could you help me regarding meeting someone for the first time?",
                "bn": "হ্যালো! এই বিষয়ে কি আমাকে একটু সহায়তা করতে পারেন?",
                "tip": "কথা শুরু করার সবচেয়ে কার্যকর ও শিষ্ট উপায়।"
            },
            {
                "en": "Excuse me, do you have a quick moment to discuss this?",
                "bn": "মাফ করবেন, এই বিষয়ে কথা বলার মতো কি সামান্য সময় হবে?",
                "tip": "নম্রভাবে সম্মতি নেওয়ার বাক্য।"
            },
            {
                "en": "Hi there, I was wondering if we could talk about this.",
                "bn": "হাই, আমি ভাবছিলাম আমরা কি বিষয়টি নিয়ে একটু কথা বলতে পারি?",
                "tip": "অতি ভদ্র ও প্রফেশনাল ভূমিকা।"
            }
        ],
        "dialogue": [
            {
                "id": "1",
                "speaker": "Speaker A",
                "role": "A",
                "en": "Hello, how are you doing today? We are focusing on meeting someone for the first time.",
                "bn": "হ্যালো, আপনি কেমন আছেন? আমরা আজ নতুন কারো সাথে প্রথম পরিচয় ও কুশল বিনিময় নিয়ে কথা বলছি।",
                "ipa": "/həˈləʊ haʊ ɑː juː ˈduːɪŋ təˈdeɪ/",
                "bn_pron": "হ্যালো, হাউ আ ইউ ডুয়িং টুডেই?"
            },
            {
                "id": "2",
                "speaker": "Speaker B",
                "role": "B",
                "en": "I'm doing well, thank you! It's an essential scenario to practice.",
                "bn": "আমি ভালো আছি, ধন্যবাদ! এটি চর্চা করার মতো খুবই দরকারি একটি দৃশ্যপট।",
                "ipa": "/aɪm ˈduːɪŋ wel θæŋk juː ɪts ən ɪˈsenʃl sɪˈnɑːriəʊ/",
                "bn_pron": "আইম ডুয়িং ওয়েল, থ্যাংক ইউ! ইটস অ্যান এসেনশিয়াল সিনারিও।"
            },
            {
                "id": "3",
                "speaker": "Speaker A",
                "role": "A",
                "en": "Could you tell me how you usually approach this situation?",
                "bn": "আপনি সাধারণত এই পরিস্থিতিতে কীভাবে কথা শুরু করেন?",
                "ipa": "/kʊd juː tel miː haʊ juː ˈjuːʒʊəli əˈprəʊtʃ/",
                "bn_pron": "কুড ইউ টেল মি হাউ ইউ ইউজুয়ালি অ্যাপ্রোচ?"
            },
            {
                "id": "4",
                "speaker": "Speaker B",
                "role": "B",
                "en": "I always start politely with a clear greeting and simple question.",
                "bn": "আমি সবসময় একটি সুন্দর সম্ভাষণ ও সহজ প্রশ্ন দিয়ে বিনয়ের সাথে শুরু করি।",
                "ipa": "/aɪ ˈɔːlweɪz stɑːt pəˈlaɪtli wɪð ə klɪə ˈɡriːtɪŋ/",
                "bn_pron": "আই অলওয়েজ স্টার্ট পোলাইটলি উইথ আ ক্লিয়ার গ্রীটিং।"
            },
            {
                "id": "5",
                "speaker": "Speaker A",
                "role": "A",
                "en": "That makes complete sense! Clarity and confidence make a huge difference.",
                "bn": "একদম যথার্থ! স্পষ্টতা ও আত্মবিশ্বাস অনেক বড় ইতিবাচক পরিবর্তন আনে।",
                "ipa": "/ðæt meɪks kəmˈpliːt sens ˈklærəti ænd ˈkɒnfɪdəns/",
                "bn_pron": "দ্যাট মেইকস কমপ্লিট সেন্স! ক্ল্যারিটি অ্যান্ড কনফিডেন্স।"
            },
            {
                "id": "6",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Exactly. And active listening helps in responding naturally without hesitation.",
                "bn": "ঠিক তাই। আর মনোযোগ দিয়ে শুনলে দ্বিধাহীনভাবে স্বাভাবিক উত্তর দেওয়া সম্ভব হয়।",
                "ipa": "/ɪɡˈzæktli ænd ˈæktɪv ˈlɪsnɪŋ helps ɪn rɪˈspɒndɪŋ ˈnætʃrəli/",
                "bn_pron": "এক্স্যাক্টলি। অ্যান্ড অ্যাকটিভ লিসেনিং হেল্পস ইন রেসপন্ডিং ন্যাচারালি।"
            },
            {
                "id": "7",
                "speaker": "Speaker A",
                "role": "A",
                "en": "What common mistake should learners avoid in this situation?",
                "bn": "এই পরিস্থিতিতে শিক্ষার্থীদের কোন সাধারণ ভুলটি এড়িয়ে চলা উচিত?",
                "ipa": "/wɒt ˈkɒmən mɪˈsteɪk ʃʊd ˈlɜːnəz əˈvɔɪd/",
                "bn_pron": "ওয়াট কমন মিসটেইক শুড লার্নার্স অ্যাভয়েড?"
            },
            {
                "id": "8",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Never translate literally word for word from Bengali; use native phrases!",
                "bn": "কখনো বাংলা থেকে হুবহু শব্দ ধরে ধরে অনুবাদ করবেন না; স্বাভাবিক নেটিভ ফ্রেজ ব্যবহার করুন!",
                "ipa": "/ˈnevə trænzˈleɪt ˈlɪtərəli wɜːd fɔː wɜːd juːz ˈneɪtɪv freɪzɪz/",
                "bn_pron": "নেভার ট্রান্সলেইট লিটারালি ওয়ার্ড ফর ওয়ার্ড; ইউয নেইটিভ ফ্রেজেস!"
            },
            {
                "id": "9",
                "speaker": "Speaker A",
                "role": "A",
                "en": "That is golden advice. Daily practice makes fluent speakers.",
                "bn": "এটি অমূল্য পরামর্শ। নিয়মিত চর্চাতেই অনর্গল কথা বলা সম্ভব।",
                "ipa": "/ðæt ɪz ˈɡəʊldən ədˈvaɪs ˈdeɪli ˈpræktɪs meɪks ˈfluːənt/",
                "bn_pron": "দ্যাট ইয গোল্ডেন অ্যাডভাইস। ডেইলি প্র্যাকটিস মেইকস ফ্লুয়েন্ট।"
            },
            {
                "id": "10",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Absolutely! Repetition guarantees effortless conversational confidence.",
                "bn": "একদমই তাই! বারবার বলা নিশ্চিতভাবেই অনর্গল সাবলীলতা এনে দেয়।",
                "ipa": "/ˌæbsəˈluːtli ˌrepəˈtɪʃn ˌɡærənˈtiːz ˈkɒnfɪdəns/",
                "bn_pron": "অ্যাবসলিউটলি! রিপিটিশন গ্যারান্টিয কনফিডেন্স।"
            }
        ],
        "followUps": [
            {
                "en": "Could you elaborate on the key points, please?",
                "bn": "প্রধান বিষয়গুলো কি একটু বিস্তারিত বলবেন, প্লিজ?"
            },
            {
                "en": "How do you usually handle unexpected challenges here?",
                "bn": "এখানে কোনো অপ্রত্যাশিত পরিস্থিতি সৃষ্টি হলে কীভাবে সামলান?"
            },
            {
                "en": "Would tomorrow be a good time to follow up on this?",
                "bn": "আগামীকাল কি বিষয়টি নিয়ে আবার কথা বলা সুবিধার হবে?"
            }
        ],
        "closers": [
            {
                "en": "Thank you so much for your valuable time and cooperation!",
                "bn": "আপনার মূল্যবান সময় ও সহযোগিতার জন্য অনেক ধন্যবাদ!"
            },
            {
                "en": "I truly appreciate your kind help. Have a wonderful day!",
                "bn": "আপনার আন্তরিক সহায়তার জন্য কৃতজ্ঞতা জানাচ্ছি। দিনটি সুন্দর কাটুক!"
            },
            {
                "en": "Let's stay in touch and coordinate soon. Take care!",
                "bn": "যোগাযোগে থাকব এবং দ্রুতই আপডেট দেব। ভালো থাকবেন!"
            }
        ],
        "nativePhrases": [
            {
                "phrase": "Make complete sense",
                "meaning": "সম্পূর্ণ যুক্তিযুক্ত ও বোধগম্য হওয়া",
                "context": "কারো বক্তব্যে সহমত জানাতে নেটিভদের সবচেয়ে প্রিয় ফ্রেজ।"
            },
            {
                "phrase": "Without hesitation",
                "meaning": "দ্বিধা বা ভয় ছাড়া নিঃসঙ্কোচে",
                "context": "আত্মবিশ্বাসের সাথে কোনো কাজ করার ক্ষেত্রে।"
            },
            {
                "phrase": "Stay in touch",
                "meaning": "নিয়মিত যোগাযোগ বজায় রাখা",
                "context": "বিদায়ের সময় সম্মানজনক অনুরোধ হিসেবে।"
            }
        ]
    },
    {
        "id": "conv-02-ordering-coffee-at-a-cafe",
        "number": 2,
        "title": "Ordering Coffee at a Cafe",
        "titleBn": "ক্যাফেতে কফি ও স্ন্যাক্স অর্ডার করা",
        "level": "Easy",
        "category": "Services",
        "sceneDescription": "ক্যাফেতে কফি ও স্ন্যাক্স অর্ডার করা সংক্রান্ত বাস্তব কথোপকথন এবং প্রয়োজনীয় বাক্যসমূহ।",
        "starters": [
            {
                "en": "Hello! Could you help me regarding ordering coffee at a cafe?",
                "bn": "হ্যালো! এই বিষয়ে কি আমাকে একটু সহায়তা করতে পারেন?",
                "tip": "কথা শুরু করার সবচেয়ে কার্যকর ও শিষ্ট উপায়।"
            },
            {
                "en": "Excuse me, do you have a quick moment to discuss this?",
                "bn": "মাফ করবেন, এই বিষয়ে কথা বলার মতো কি সামান্য সময় হবে?",
                "tip": "নম্রভাবে সম্মতি নেওয়ার বাক্য।"
            },
            {
                "en": "Hi there, I was wondering if we could talk about this.",
                "bn": "হাই, আমি ভাবছিলাম আমরা কি বিষয়টি নিয়ে একটু কথা বলতে পারি?",
                "tip": "অতি ভদ্র ও প্রফেশনাল ভূমিকা।"
            }
        ],
        "dialogue": [
            {
                "id": "1",
                "speaker": "Speaker A",
                "role": "A",
                "en": "Hello, how are you doing today? We are focusing on ordering coffee at a cafe.",
                "bn": "হ্যালো, আপনি কেমন আছেন? আমরা আজ ক্যাফেতে কফি ও স্ন্যাক্স অর্ডার করা নিয়ে কথা বলছি।",
                "ipa": "/həˈləʊ haʊ ɑː juː ˈduːɪŋ təˈdeɪ/",
                "bn_pron": "হ্যালো, হাউ আ ইউ ডুয়িং টুডেই?"
            },
            {
                "id": "2",
                "speaker": "Speaker B",
                "role": "B",
                "en": "I'm doing well, thank you! It's an essential scenario to practice.",
                "bn": "আমি ভালো আছি, ধন্যবাদ! এটি চর্চা করার মতো খুবই দরকারি একটি দৃশ্যপট।",
                "ipa": "/aɪm ˈduːɪŋ wel θæŋk juː ɪts ən ɪˈsenʃl sɪˈnɑːriəʊ/",
                "bn_pron": "আইম ডুয়িং ওয়েল, থ্যাংক ইউ! ইটস অ্যান এসেনশিয়াল সিনারিও।"
            },
            {
                "id": "3",
                "speaker": "Speaker A",
                "role": "A",
                "en": "Could you tell me how you usually approach this situation?",
                "bn": "আপনি সাধারণত এই পরিস্থিতিতে কীভাবে কথা শুরু করেন?",
                "ipa": "/kʊd juː tel miː haʊ juː ˈjuːʒʊəli əˈprəʊtʃ/",
                "bn_pron": "কুড ইউ টেল মি হাউ ইউ ইউজুয়ালি অ্যাপ্রোচ?"
            },
            {
                "id": "4",
                "speaker": "Speaker B",
                "role": "B",
                "en": "I always start politely with a clear greeting and simple question.",
                "bn": "আমি সবসময় একটি সুন্দর সম্ভাষণ ও সহজ প্রশ্ন দিয়ে বিনয়ের সাথে শুরু করি।",
                "ipa": "/aɪ ˈɔːlweɪz stɑːt pəˈlaɪtli wɪð ə klɪə ˈɡriːtɪŋ/",
                "bn_pron": "আই অলওয়েজ স্টার্ট পোলাইটলি উইথ আ ক্লিয়ার গ্রীটিং।"
            },
            {
                "id": "5",
                "speaker": "Speaker A",
                "role": "A",
                "en": "That makes complete sense! Clarity and confidence make a huge difference.",
                "bn": "একদম যথার্থ! স্পষ্টতা ও আত্মবিশ্বাস অনেক বড় ইতিবাচক পরিবর্তন আনে।",
                "ipa": "/ðæt meɪks kəmˈpliːt sens ˈklærəti ænd ˈkɒnfɪdəns/",
                "bn_pron": "দ্যাট মেইকস কমপ্লিট সেন্স! ক্ল্যারিটি অ্যান্ড কনফিডেন্স।"
            },
            {
                "id": "6",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Exactly. And active listening helps in responding naturally without hesitation.",
                "bn": "ঠিক তাই। আর মনোযোগ দিয়ে শুনলে দ্বিধাহীনভাবে স্বাভাবিক উত্তর দেওয়া সম্ভব হয়।",
                "ipa": "/ɪɡˈzæktli ænd ˈæktɪv ˈlɪsnɪŋ helps ɪn rɪˈspɒndɪŋ ˈnætʃrəli/",
                "bn_pron": "এক্স্যাক্টলি। অ্যান্ড অ্যাকটিভ লিসেনিং হেল্পস ইন রেসপন্ডিং ন্যাচারালি।"
            },
            {
                "id": "7",
                "speaker": "Speaker A",
                "role": "A",
                "en": "What common mistake should learners avoid in this situation?",
                "bn": "এই পরিস্থিতিতে শিক্ষার্থীদের কোন সাধারণ ভুলটি এড়িয়ে চলা উচিত?",
                "ipa": "/wɒt ˈkɒmən mɪˈsteɪk ʃʊd ˈlɜːnəz əˈvɔɪd/",
                "bn_pron": "ওয়াট কমন মিসটেইক শুড লার্নার্স অ্যাভয়েড?"
            },
            {
                "id": "8",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Never translate literally word for word from Bengali; use native phrases!",
                "bn": "কখনো বাংলা থেকে হুবহু শব্দ ধরে ধরে অনুবাদ করবেন না; স্বাভাবিক নেটিভ ফ্রেজ ব্যবহার করুন!",
                "ipa": "/ˈnevə trænzˈleɪt ˈlɪtərəli wɜːd fɔː wɜːd juːz ˈneɪtɪv freɪzɪz/",
                "bn_pron": "নেভার ট্রান্সলেইট লিটারালি ওয়ার্ড ফর ওয়ার্ড; ইউয নেইটিভ ফ্রেজেস!"
            },
            {
                "id": "9",
                "speaker": "Speaker A",
                "role": "A",
                "en": "That is golden advice. Daily practice makes fluent speakers.",
                "bn": "এটি অমূল্য পরামর্শ। নিয়মিত চর্চাতেই অনর্গল কথা বলা সম্ভব।",
                "ipa": "/ðæt ɪz ˈɡəʊldən ədˈvaɪs ˈdeɪli ˈpræktɪs meɪks ˈfluːənt/",
                "bn_pron": "দ্যাট ইয গোল্ডেন অ্যাডভাইস। ডেইলি প্র্যাকটিস মেইকস ফ্লুয়েন্ট।"
            },
            {
                "id": "10",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Absolutely! Repetition guarantees effortless conversational confidence.",
                "bn": "একদমই তাই! বারবার বলা নিশ্চিতভাবেই অনর্গল সাবলীলতা এনে দেয়।",
                "ipa": "/ˌæbsəˈluːtli ˌrepəˈtɪʃn ˌɡærənˈtiːz ˈkɒnfɪdəns/",
                "bn_pron": "অ্যাবসলিউটলি! রিপিটিশন গ্যারান্টিয কনফিডেন্স।"
            }
        ],
        "followUps": [
            {
                "en": "Could you elaborate on the key points, please?",
                "bn": "প্রধান বিষয়গুলো কি একটু বিস্তারিত বলবেন, প্লিজ?"
            },
            {
                "en": "How do you usually handle unexpected challenges here?",
                "bn": "এখানে কোনো অপ্রত্যাশিত পরিস্থিতি সৃষ্টি হলে কীভাবে সামলান?"
            },
            {
                "en": "Would tomorrow be a good time to follow up on this?",
                "bn": "আগামীকাল কি বিষয়টি নিয়ে আবার কথা বলা সুবিধার হবে?"
            }
        ],
        "closers": [
            {
                "en": "Thank you so much for your valuable time and cooperation!",
                "bn": "আপনার মূল্যবান সময় ও সহযোগিতার জন্য অনেক ধন্যবাদ!"
            },
            {
                "en": "I truly appreciate your kind help. Have a wonderful day!",
                "bn": "আপনার আন্তরিক সহায়তার জন্য কৃতজ্ঞতা জানাচ্ছি। দিনটি সুন্দর কাটুক!"
            },
            {
                "en": "Let's stay in touch and coordinate soon. Take care!",
                "bn": "যোগাযোগে থাকব এবং দ্রুতই আপডেট দেব। ভালো থাকবেন!"
            }
        ],
        "nativePhrases": [
            {
                "phrase": "Make complete sense",
                "meaning": "সম্পূর্ণ যুক্তিযুক্ত ও বোধগম্য হওয়া",
                "context": "কারো বক্তব্যে সহমত জানাতে নেটিভদের সবচেয়ে প্রিয় ফ্রেজ।"
            },
            {
                "phrase": "Without hesitation",
                "meaning": "দ্বিধা বা ভয় ছাড়া নিঃসঙ্কোচে",
                "context": "আত্মবিশ্বাসের সাথে কোনো কাজ করার ক্ষেত্রে।"
            },
            {
                "phrase": "Stay in touch",
                "meaning": "নিয়মিত যোগাযোগ বজায় রাখা",
                "context": "বিদায়ের সময় সম্মানজনক অনুরোধ হিসেবে।"
            }
        ]
    },
    {
        "id": "conv-03-asking-for-directions-on-the-street",
        "number": 3,
        "title": "Asking for Directions on the Street",
        "titleBn": "রাস্তায় পথ ও দিকনির্দেশনা চাওয়া",
        "level": "Easy",
        "category": "Travel",
        "sceneDescription": "রাস্তায় পথ ও দিকনির্দেশনা চাওয়া সংক্রান্ত বাস্তব কথোপকথন এবং প্রয়োজনীয় বাক্যসমূহ।",
        "starters": [
            {
                "en": "Hello! Could you help me regarding asking for directions on the street?",
                "bn": "হ্যালো! এই বিষয়ে কি আমাকে একটু সহায়তা করতে পারেন?",
                "tip": "কথা শুরু করার সবচেয়ে কার্যকর ও শিষ্ট উপায়।"
            },
            {
                "en": "Excuse me, do you have a quick moment to discuss this?",
                "bn": "মাফ করবেন, এই বিষয়ে কথা বলার মতো কি সামান্য সময় হবে?",
                "tip": "নম্রভাবে সম্মতি নেওয়ার বাক্য।"
            },
            {
                "en": "Hi there, I was wondering if we could talk about this.",
                "bn": "হাই, আমি ভাবছিলাম আমরা কি বিষয়টি নিয়ে একটু কথা বলতে পারি?",
                "tip": "অতি ভদ্র ও প্রফেশনাল ভূমিকা।"
            }
        ],
        "dialogue": [
            {
                "id": "1",
                "speaker": "Speaker A",
                "role": "A",
                "en": "Hello, how are you doing today? We are focusing on asking for directions on the street.",
                "bn": "হ্যালো, আপনি কেমন আছেন? আমরা আজ রাস্তায় পথ ও দিকনির্দেশনা চাওয়া নিয়ে কথা বলছি।",
                "ipa": "/həˈləʊ haʊ ɑː juː ˈduːɪŋ təˈdeɪ/",
                "bn_pron": "হ্যালো, হাউ আ ইউ ডুয়িং টুডেই?"
            },
            {
                "id": "2",
                "speaker": "Speaker B",
                "role": "B",
                "en": "I'm doing well, thank you! It's an essential scenario to practice.",
                "bn": "আমি ভালো আছি, ধন্যবাদ! এটি চর্চা করার মতো খুবই দরকারি একটি দৃশ্যপট।",
                "ipa": "/aɪm ˈduːɪŋ wel θæŋk juː ɪts ən ɪˈsenʃl sɪˈnɑːriəʊ/",
                "bn_pron": "আইম ডুয়িং ওয়েল, থ্যাংক ইউ! ইটস অ্যান এসেনশিয়াল সিনারিও।"
            },
            {
                "id": "3",
                "speaker": "Speaker A",
                "role": "A",
                "en": "Could you tell me how you usually approach this situation?",
                "bn": "আপনি সাধারণত এই পরিস্থিতিতে কীভাবে কথা শুরু করেন?",
                "ipa": "/kʊd juː tel miː haʊ juː ˈjuːʒʊəli əˈprəʊtʃ/",
                "bn_pron": "কুড ইউ টেল মি হাউ ইউ ইউজুয়ালি অ্যাপ্রোচ?"
            },
            {
                "id": "4",
                "speaker": "Speaker B",
                "role": "B",
                "en": "I always start politely with a clear greeting and simple question.",
                "bn": "আমি সবসময় একটি সুন্দর সম্ভাষণ ও সহজ প্রশ্ন দিয়ে বিনয়ের সাথে শুরু করি।",
                "ipa": "/aɪ ˈɔːlweɪz stɑːt pəˈlaɪtli wɪð ə klɪə ˈɡriːtɪŋ/",
                "bn_pron": "আই অলওয়েজ স্টার্ট পোলাইটলি উইথ আ ক্লিয়ার গ্রীটিং।"
            },
            {
                "id": "5",
                "speaker": "Speaker A",
                "role": "A",
                "en": "That makes complete sense! Clarity and confidence make a huge difference.",
                "bn": "একদম যথার্থ! স্পষ্টতা ও আত্মবিশ্বাস অনেক বড় ইতিবাচক পরিবর্তন আনে।",
                "ipa": "/ðæt meɪks kəmˈpliːt sens ˈklærəti ænd ˈkɒnfɪdəns/",
                "bn_pron": "দ্যাট মেইকস কমপ্লিট সেন্স! ক্ল্যারিটি অ্যান্ড কনফিডেন্স।"
            },
            {
                "id": "6",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Exactly. And active listening helps in responding naturally without hesitation.",
                "bn": "ঠিক তাই। আর মনোযোগ দিয়ে শুনলে দ্বিধাহীনভাবে স্বাভাবিক উত্তর দেওয়া সম্ভব হয়।",
                "ipa": "/ɪɡˈzæktli ænd ˈæktɪv ˈlɪsnɪŋ helps ɪn rɪˈspɒndɪŋ ˈnætʃrəli/",
                "bn_pron": "এক্স্যাক্টলি। অ্যান্ড অ্যাকটিভ লিসেনিং হেল্পস ইন রেসপন্ডিং ন্যাচারালি।"
            },
            {
                "id": "7",
                "speaker": "Speaker A",
                "role": "A",
                "en": "What common mistake should learners avoid in this situation?",
                "bn": "এই পরিস্থিতিতে শিক্ষার্থীদের কোন সাধারণ ভুলটি এড়িয়ে চলা উচিত?",
                "ipa": "/wɒt ˈkɒmən mɪˈsteɪk ʃʊd ˈlɜːnəz əˈvɔɪd/",
                "bn_pron": "ওয়াট কমন মিসটেইক শুড লার্নার্স অ্যাভয়েড?"
            },
            {
                "id": "8",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Never translate literally word for word from Bengali; use native phrases!",
                "bn": "কখনো বাংলা থেকে হুবহু শব্দ ধরে ধরে অনুবাদ করবেন না; স্বাভাবিক নেটিভ ফ্রেজ ব্যবহার করুন!",
                "ipa": "/ˈnevə trænzˈleɪt ˈlɪtərəli wɜːd fɔː wɜːd juːz ˈneɪtɪv freɪzɪz/",
                "bn_pron": "নেভার ট্রান্সলেইট লিটারালি ওয়ার্ড ফর ওয়ার্ড; ইউয নেইটিভ ফ্রেজেস!"
            },
            {
                "id": "9",
                "speaker": "Speaker A",
                "role": "A",
                "en": "That is golden advice. Daily practice makes fluent speakers.",
                "bn": "এটি অমূল্য পরামর্শ। নিয়মিত চর্চাতেই অনর্গল কথা বলা সম্ভব।",
                "ipa": "/ðæt ɪz ˈɡəʊldən ədˈvaɪs ˈdeɪli ˈpræktɪs meɪks ˈfluːənt/",
                "bn_pron": "দ্যাট ইয গোল্ডেন অ্যাডভাইস। ডেইলি প্র্যাকটিস মেইকস ফ্লুয়েন্ট।"
            },
            {
                "id": "10",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Absolutely! Repetition guarantees effortless conversational confidence.",
                "bn": "একদমই তাই! বারবার বলা নিশ্চিতভাবেই অনর্গল সাবলীলতা এনে দেয়।",
                "ipa": "/ˌæbsəˈluːtli ˌrepəˈtɪʃn ˌɡærənˈtiːz ˈkɒnfɪdəns/",
                "bn_pron": "অ্যাবসলিউটলি! রিপিটিশন গ্যারান্টিয কনফিডেন্স।"
            }
        ],
        "followUps": [
            {
                "en": "Could you elaborate on the key points, please?",
                "bn": "প্রধান বিষয়গুলো কি একটু বিস্তারিত বলবেন, প্লিজ?"
            },
            {
                "en": "How do you usually handle unexpected challenges here?",
                "bn": "এখানে কোনো অপ্রত্যাশিত পরিস্থিতি সৃষ্টি হলে কীভাবে সামলান?"
            },
            {
                "en": "Would tomorrow be a good time to follow up on this?",
                "bn": "আগামীকাল কি বিষয়টি নিয়ে আবার কথা বলা সুবিধার হবে?"
            }
        ],
        "closers": [
            {
                "en": "Thank you so much for your valuable time and cooperation!",
                "bn": "আপনার মূল্যবান সময় ও সহযোগিতার জন্য অনেক ধন্যবাদ!"
            },
            {
                "en": "I truly appreciate your kind help. Have a wonderful day!",
                "bn": "আপনার আন্তরিক সহায়তার জন্য কৃতজ্ঞতা জানাচ্ছি। দিনটি সুন্দর কাটুক!"
            },
            {
                "en": "Let's stay in touch and coordinate soon. Take care!",
                "bn": "যোগাযোগে থাকব এবং দ্রুতই আপডেট দেব। ভালো থাকবেন!"
            }
        ],
        "nativePhrases": [
            {
                "phrase": "Make complete sense",
                "meaning": "সম্পূর্ণ যুক্তিযুক্ত ও বোধগম্য হওয়া",
                "context": "কারো বক্তব্যে সহমত জানাতে নেটিভদের সবচেয়ে প্রিয় ফ্রেজ।"
            },
            {
                "phrase": "Without hesitation",
                "meaning": "দ্বিধা বা ভয় ছাড়া নিঃসঙ্কোচে",
                "context": "আত্মবিশ্বাসের সাথে কোনো কাজ করার ক্ষেত্রে।"
            },
            {
                "phrase": "Stay in touch",
                "meaning": "নিয়মিত যোগাযোগ বজায় রাখা",
                "context": "বিদায়ের সময় সম্মানজনক অনুরোধ হিসেবে।"
            }
        ]
    },
    {
        "id": "conv-04-shopping-for-clothes-sizes",
        "number": 4,
        "title": "Shopping for Clothes & Sizes",
        "titleBn": "পোশাকের দোকানে সাইজ ও ট্রায়াল নেওয়া",
        "level": "Easy",
        "category": "Shopping",
        "sceneDescription": "পোশাকের দোকানে সাইজ ও ট্রায়াল নেওয়া সংক্রান্ত বাস্তব কথোপকথন এবং প্রয়োজনীয় বাক্যসমূহ।",
        "starters": [
            {
                "en": "Hello! Could you help me regarding shopping for clothes & sizes?",
                "bn": "হ্যালো! এই বিষয়ে কি আমাকে একটু সহায়তা করতে পারেন?",
                "tip": "কথা শুরু করার সবচেয়ে কার্যকর ও শিষ্ট উপায়।"
            },
            {
                "en": "Excuse me, do you have a quick moment to discuss this?",
                "bn": "মাফ করবেন, এই বিষয়ে কথা বলার মতো কি সামান্য সময় হবে?",
                "tip": "নম্রভাবে সম্মতি নেওয়ার বাক্য।"
            },
            {
                "en": "Hi there, I was wondering if we could talk about this.",
                "bn": "হাই, আমি ভাবছিলাম আমরা কি বিষয়টি নিয়ে একটু কথা বলতে পারি?",
                "tip": "অতি ভদ্র ও প্রফেশনাল ভূমিকা।"
            }
        ],
        "dialogue": [
            {
                "id": "1",
                "speaker": "Speaker A",
                "role": "A",
                "en": "Hello, how are you doing today? We are focusing on shopping for clothes & sizes.",
                "bn": "হ্যালো, আপনি কেমন আছেন? আমরা আজ পোশাকের দোকানে সাইজ ও ট্রায়াল নেওয়া নিয়ে কথা বলছি।",
                "ipa": "/həˈləʊ haʊ ɑː juː ˈduːɪŋ təˈdeɪ/",
                "bn_pron": "হ্যালো, হাউ আ ইউ ডুয়িং টুডেই?"
            },
            {
                "id": "2",
                "speaker": "Speaker B",
                "role": "B",
                "en": "I'm doing well, thank you! It's an essential scenario to practice.",
                "bn": "আমি ভালো আছি, ধন্যবাদ! এটি চর্চা করার মতো খুবই দরকারি একটি দৃশ্যপট।",
                "ipa": "/aɪm ˈduːɪŋ wel θæŋk juː ɪts ən ɪˈsenʃl sɪˈnɑːriəʊ/",
                "bn_pron": "আইম ডুয়িং ওয়েল, থ্যাংক ইউ! ইটস অ্যান এসেনশিয়াল সিনারিও।"
            },
            {
                "id": "3",
                "speaker": "Speaker A",
                "role": "A",
                "en": "Could you tell me how you usually approach this situation?",
                "bn": "আপনি সাধারণত এই পরিস্থিতিতে কীভাবে কথা শুরু করেন?",
                "ipa": "/kʊd juː tel miː haʊ juː ˈjuːʒʊəli əˈprəʊtʃ/",
                "bn_pron": "কুড ইউ টেল মি হাউ ইউ ইউজুয়ালি অ্যাপ্রোচ?"
            },
            {
                "id": "4",
                "speaker": "Speaker B",
                "role": "B",
                "en": "I always start politely with a clear greeting and simple question.",
                "bn": "আমি সবসময় একটি সুন্দর সম্ভাষণ ও সহজ প্রশ্ন দিয়ে বিনয়ের সাথে শুরু করি।",
                "ipa": "/aɪ ˈɔːlweɪz stɑːt pəˈlaɪtli wɪð ə klɪə ˈɡriːtɪŋ/",
                "bn_pron": "আই অলওয়েজ স্টার্ট পোলাইটলি উইথ আ ক্লিয়ার গ্রীটিং।"
            },
            {
                "id": "5",
                "speaker": "Speaker A",
                "role": "A",
                "en": "That makes complete sense! Clarity and confidence make a huge difference.",
                "bn": "একদম যথার্থ! স্পষ্টতা ও আত্মবিশ্বাস অনেক বড় ইতিবাচক পরিবর্তন আনে।",
                "ipa": "/ðæt meɪks kəmˈpliːt sens ˈklærəti ænd ˈkɒnfɪdəns/",
                "bn_pron": "দ্যাট মেইকস কমপ্লিট সেন্স! ক্ল্যারিটি অ্যান্ড কনফিডেন্স।"
            },
            {
                "id": "6",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Exactly. And active listening helps in responding naturally without hesitation.",
                "bn": "ঠিক তাই। আর মনোযোগ দিয়ে শুনলে দ্বিধাহীনভাবে স্বাভাবিক উত্তর দেওয়া সম্ভব হয়।",
                "ipa": "/ɪɡˈzæktli ænd ˈæktɪv ˈlɪsnɪŋ helps ɪn rɪˈspɒndɪŋ ˈnætʃrəli/",
                "bn_pron": "এক্স্যাক্টলি। অ্যান্ড অ্যাকটিভ লিসেনিং হেল্পস ইন রেসপন্ডিং ন্যাচারালি।"
            },
            {
                "id": "7",
                "speaker": "Speaker A",
                "role": "A",
                "en": "What common mistake should learners avoid in this situation?",
                "bn": "এই পরিস্থিতিতে শিক্ষার্থীদের কোন সাধারণ ভুলটি এড়িয়ে চলা উচিত?",
                "ipa": "/wɒt ˈkɒmən mɪˈsteɪk ʃʊd ˈlɜːnəz əˈvɔɪd/",
                "bn_pron": "ওয়াট কমন মিসটেইক শুড লার্নার্স অ্যাভয়েড?"
            },
            {
                "id": "8",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Never translate literally word for word from Bengali; use native phrases!",
                "bn": "কখনো বাংলা থেকে হুবহু শব্দ ধরে ধরে অনুবাদ করবেন না; স্বাভাবিক নেটিভ ফ্রেজ ব্যবহার করুন!",
                "ipa": "/ˈnevə trænzˈleɪt ˈlɪtərəli wɜːd fɔː wɜːd juːz ˈneɪtɪv freɪzɪz/",
                "bn_pron": "নেভার ট্রান্সলেইট লিটারালি ওয়ার্ড ফর ওয়ার্ড; ইউয নেইটিভ ফ্রেজেস!"
            },
            {
                "id": "9",
                "speaker": "Speaker A",
                "role": "A",
                "en": "That is golden advice. Daily practice makes fluent speakers.",
                "bn": "এটি অমূল্য পরামর্শ। নিয়মিত চর্চাতেই অনর্গল কথা বলা সম্ভব।",
                "ipa": "/ðæt ɪz ˈɡəʊldən ədˈvaɪs ˈdeɪli ˈpræktɪs meɪks ˈfluːənt/",
                "bn_pron": "দ্যাট ইয গোল্ডেন অ্যাডভাইস। ডেইলি প্র্যাকটিস মেইকস ফ্লুয়েন্ট।"
            },
            {
                "id": "10",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Absolutely! Repetition guarantees effortless conversational confidence.",
                "bn": "একদমই তাই! বারবার বলা নিশ্চিতভাবেই অনর্গল সাবলীলতা এনে দেয়।",
                "ipa": "/ˌæbsəˈluːtli ˌrepəˈtɪʃn ˌɡærənˈtiːz ˈkɒnfɪdəns/",
                "bn_pron": "অ্যাবসলিউটলি! রিপিটিশন গ্যারান্টিয কনফিডেন্স।"
            }
        ],
        "followUps": [
            {
                "en": "Could you elaborate on the key points, please?",
                "bn": "প্রধান বিষয়গুলো কি একটু বিস্তারিত বলবেন, প্লিজ?"
            },
            {
                "en": "How do you usually handle unexpected challenges here?",
                "bn": "এখানে কোনো অপ্রত্যাশিত পরিস্থিতি সৃষ্টি হলে কীভাবে সামলান?"
            },
            {
                "en": "Would tomorrow be a good time to follow up on this?",
                "bn": "আগামীকাল কি বিষয়টি নিয়ে আবার কথা বলা সুবিধার হবে?"
            }
        ],
        "closers": [
            {
                "en": "Thank you so much for your valuable time and cooperation!",
                "bn": "আপনার মূল্যবান সময় ও সহযোগিতার জন্য অনেক ধন্যবাদ!"
            },
            {
                "en": "I truly appreciate your kind help. Have a wonderful day!",
                "bn": "আপনার আন্তরিক সহায়তার জন্য কৃতজ্ঞতা জানাচ্ছি। দিনটি সুন্দর কাটুক!"
            },
            {
                "en": "Let's stay in touch and coordinate soon. Take care!",
                "bn": "যোগাযোগে থাকব এবং দ্রুতই আপডেট দেব। ভালো থাকবেন!"
            }
        ],
        "nativePhrases": [
            {
                "phrase": "Make complete sense",
                "meaning": "সম্পূর্ণ যুক্তিযুক্ত ও বোধগম্য হওয়া",
                "context": "কারো বক্তব্যে সহমত জানাতে নেটিভদের সবচেয়ে প্রিয় ফ্রেজ।"
            },
            {
                "phrase": "Without hesitation",
                "meaning": "দ্বিধা বা ভয় ছাড়া নিঃসঙ্কোচে",
                "context": "আত্মবিশ্বাসের সাথে কোনো কাজ করার ক্ষেত্রে।"
            },
            {
                "phrase": "Stay in touch",
                "meaning": "নিয়মিত যোগাযোগ বজায় রাখা",
                "context": "বিদায়ের সময় সম্মানজনক অনুরোধ হিসেবে।"
            }
        ]
    },
    {
        "id": "conv-05-restaurant-dining-splitting-the-bill",
        "number": 5,
        "title": "Restaurant Dining & Splitting the Bill",
        "titleBn": "রেস্টুরেন্টে খাবার অর্ডার ও বিল ভাগাভাগি",
        "level": "Easy",
        "category": "Services",
        "sceneDescription": "রেস্টুরেন্টে খাবার অর্ডার ও বিল ভাগাভাগি সংক্রান্ত বাস্তব কথোপকথন এবং প্রয়োজনীয় বাক্যসমূহ।",
        "starters": [
            {
                "en": "Hello! Could you help me regarding restaurant dining & splitting the bill?",
                "bn": "হ্যালো! এই বিষয়ে কি আমাকে একটু সহায়তা করতে পারেন?",
                "tip": "কথা শুরু করার সবচেয়ে কার্যকর ও শিষ্ট উপায়।"
            },
            {
                "en": "Excuse me, do you have a quick moment to discuss this?",
                "bn": "মাফ করবেন, এই বিষয়ে কথা বলার মতো কি সামান্য সময় হবে?",
                "tip": "নম্রভাবে সম্মতি নেওয়ার বাক্য।"
            },
            {
                "en": "Hi there, I was wondering if we could talk about this.",
                "bn": "হাই, আমি ভাবছিলাম আমরা কি বিষয়টি নিয়ে একটু কথা বলতে পারি?",
                "tip": "অতি ভদ্র ও প্রফেশনাল ভূমিকা।"
            }
        ],
        "dialogue": [
            {
                "id": "1",
                "speaker": "Speaker A",
                "role": "A",
                "en": "Hello, how are you doing today? We are focusing on restaurant dining & splitting the bill.",
                "bn": "হ্যালো, আপনি কেমন আছেন? আমরা আজ রেস্টুরেন্টে খাবার অর্ডার ও বিল ভাগাভাগি নিয়ে কথা বলছি।",
                "ipa": "/həˈləʊ haʊ ɑː juː ˈduːɪŋ təˈdeɪ/",
                "bn_pron": "হ্যালো, হাউ আ ইউ ডুয়িং টুডেই?"
            },
            {
                "id": "2",
                "speaker": "Speaker B",
                "role": "B",
                "en": "I'm doing well, thank you! It's an essential scenario to practice.",
                "bn": "আমি ভালো আছি, ধন্যবাদ! এটি চর্চা করার মতো খুবই দরকারি একটি দৃশ্যপট।",
                "ipa": "/aɪm ˈduːɪŋ wel θæŋk juː ɪts ən ɪˈsenʃl sɪˈnɑːriəʊ/",
                "bn_pron": "আইম ডুয়িং ওয়েল, থ্যাংক ইউ! ইটস অ্যান এসেনশিয়াল সিনারিও।"
            },
            {
                "id": "3",
                "speaker": "Speaker A",
                "role": "A",
                "en": "Could you tell me how you usually approach this situation?",
                "bn": "আপনি সাধারণত এই পরিস্থিতিতে কীভাবে কথা শুরু করেন?",
                "ipa": "/kʊd juː tel miː haʊ juː ˈjuːʒʊəli əˈprəʊtʃ/",
                "bn_pron": "কুড ইউ টেল মি হাউ ইউ ইউজুয়ালি অ্যাপ্রোচ?"
            },
            {
                "id": "4",
                "speaker": "Speaker B",
                "role": "B",
                "en": "I always start politely with a clear greeting and simple question.",
                "bn": "আমি সবসময় একটি সুন্দর সম্ভাষণ ও সহজ প্রশ্ন দিয়ে বিনয়ের সাথে শুরু করি।",
                "ipa": "/aɪ ˈɔːlweɪz stɑːt pəˈlaɪtli wɪð ə klɪə ˈɡriːtɪŋ/",
                "bn_pron": "আই অলওয়েজ স্টার্ট পোলাইটলি উইথ আ ক্লিয়ার গ্রীটিং।"
            },
            {
                "id": "5",
                "speaker": "Speaker A",
                "role": "A",
                "en": "That makes complete sense! Clarity and confidence make a huge difference.",
                "bn": "একদম যথার্থ! স্পষ্টতা ও আত্মবিশ্বাস অনেক বড় ইতিবাচক পরিবর্তন আনে।",
                "ipa": "/ðæt meɪks kəmˈpliːt sens ˈklærəti ænd ˈkɒnfɪdəns/",
                "bn_pron": "দ্যাট মেইকস কমপ্লিট সেন্স! ক্ল্যারিটি অ্যান্ড কনফিডেন্স।"
            },
            {
                "id": "6",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Exactly. And active listening helps in responding naturally without hesitation.",
                "bn": "ঠিক তাই। আর মনোযোগ দিয়ে শুনলে দ্বিধাহীনভাবে স্বাভাবিক উত্তর দেওয়া সম্ভব হয়।",
                "ipa": "/ɪɡˈzæktli ænd ˈæktɪv ˈlɪsnɪŋ helps ɪn rɪˈspɒndɪŋ ˈnætʃrəli/",
                "bn_pron": "এক্স্যাক্টলি। অ্যান্ড অ্যাকটিভ লিসেনিং হেল্পস ইন রেসপন্ডিং ন্যাচারালি।"
            },
            {
                "id": "7",
                "speaker": "Speaker A",
                "role": "A",
                "en": "What common mistake should learners avoid in this situation?",
                "bn": "এই পরিস্থিতিতে শিক্ষার্থীদের কোন সাধারণ ভুলটি এড়িয়ে চলা উচিত?",
                "ipa": "/wɒt ˈkɒmən mɪˈsteɪk ʃʊd ˈlɜːnəz əˈvɔɪd/",
                "bn_pron": "ওয়াট কমন মিসটেইক শুড লার্নার্স অ্যাভয়েড?"
            },
            {
                "id": "8",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Never translate literally word for word from Bengali; use native phrases!",
                "bn": "কখনো বাংলা থেকে হুবহু শব্দ ধরে ধরে অনুবাদ করবেন না; স্বাভাবিক নেটিভ ফ্রেজ ব্যবহার করুন!",
                "ipa": "/ˈnevə trænzˈleɪt ˈlɪtərəli wɜːd fɔː wɜːd juːz ˈneɪtɪv freɪzɪz/",
                "bn_pron": "নেভার ট্রান্সলেইট লিটারালি ওয়ার্ড ফর ওয়ার্ড; ইউয নেইটিভ ফ্রেজেস!"
            },
            {
                "id": "9",
                "speaker": "Speaker A",
                "role": "A",
                "en": "That is golden advice. Daily practice makes fluent speakers.",
                "bn": "এটি অমূল্য পরামর্শ। নিয়মিত চর্চাতেই অনর্গল কথা বলা সম্ভব।",
                "ipa": "/ðæt ɪz ˈɡəʊldən ədˈvaɪs ˈdeɪli ˈpræktɪs meɪks ˈfluːənt/",
                "bn_pron": "দ্যাট ইয গোল্ডেন অ্যাডভাইস। ডেইলি প্র্যাকটিস মেইকস ফ্লুয়েন্ট।"
            },
            {
                "id": "10",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Absolutely! Repetition guarantees effortless conversational confidence.",
                "bn": "একদমই তাই! বারবার বলা নিশ্চিতভাবেই অনর্গল সাবলীলতা এনে দেয়।",
                "ipa": "/ˌæbsəˈluːtli ˌrepəˈtɪʃn ˌɡærənˈtiːz ˈkɒnfɪdəns/",
                "bn_pron": "অ্যাবসলিউটলি! রিপিটিশন গ্যারান্টিয কনফিডেন্স।"
            }
        ],
        "followUps": [
            {
                "en": "Could you elaborate on the key points, please?",
                "bn": "প্রধান বিষয়গুলো কি একটু বিস্তারিত বলবেন, প্লিজ?"
            },
            {
                "en": "How do you usually handle unexpected challenges here?",
                "bn": "এখানে কোনো অপ্রত্যাশিত পরিস্থিতি সৃষ্টি হলে কীভাবে সামলান?"
            },
            {
                "en": "Would tomorrow be a good time to follow up on this?",
                "bn": "আগামীকাল কি বিষয়টি নিয়ে আবার কথা বলা সুবিধার হবে?"
            }
        ],
        "closers": [
            {
                "en": "Thank you so much for your valuable time and cooperation!",
                "bn": "আপনার মূল্যবান সময় ও সহযোগিতার জন্য অনেক ধন্যবাদ!"
            },
            {
                "en": "I truly appreciate your kind help. Have a wonderful day!",
                "bn": "আপনার আন্তরিক সহায়তার জন্য কৃতজ্ঞতা জানাচ্ছি। দিনটি সুন্দর কাটুক!"
            },
            {
                "en": "Let's stay in touch and coordinate soon. Take care!",
                "bn": "যোগাযোগে থাকব এবং দ্রুতই আপডেট দেব। ভালো থাকবেন!"
            }
        ],
        "nativePhrases": [
            {
                "phrase": "Make complete sense",
                "meaning": "সম্পূর্ণ যুক্তিযুক্ত ও বোধগম্য হওয়া",
                "context": "কারো বক্তব্যে সহমত জানাতে নেটিভদের সবচেয়ে প্রিয় ফ্রেজ।"
            },
            {
                "phrase": "Without hesitation",
                "meaning": "দ্বিধা বা ভয় ছাড়া নিঃসঙ্কোচে",
                "context": "আত্মবিশ্বাসের সাথে কোনো কাজ করার ক্ষেত্রে।"
            },
            {
                "phrase": "Stay in touch",
                "meaning": "নিয়মিত যোগাযোগ বজায় রাখা",
                "context": "বিদায়ের সময় সম্মানজনক অনুরোধ হিসেবে।"
            }
        ]
    },
    {
        "id": "conv-06-at-the-doctor-s-symptoms-prescription",
        "number": 6,
        "title": "At the Doctor's: Symptoms & Prescription",
        "titleBn": "ডাক্তারের চেম্বারে লক্ষণ প্রকাশ ও প্রেসক্রিপশন",
        "level": "Easy",
        "category": "Services",
        "sceneDescription": "ডাক্তারের চেম্বারে লক্ষণ প্রকাশ ও প্রেসক্রিপশন সংক্রান্ত বাস্তব কথোপকথন এবং প্রয়োজনীয় বাক্যসমূহ।",
        "starters": [
            {
                "en": "Hello! Could you help me regarding at the doctor's: symptoms & prescription?",
                "bn": "হ্যালো! এই বিষয়ে কি আমাকে একটু সহায়তা করতে পারেন?",
                "tip": "কথা শুরু করার সবচেয়ে কার্যকর ও শিষ্ট উপায়।"
            },
            {
                "en": "Excuse me, do you have a quick moment to discuss this?",
                "bn": "মাফ করবেন, এই বিষয়ে কথা বলার মতো কি সামান্য সময় হবে?",
                "tip": "নম্রভাবে সম্মতি নেওয়ার বাক্য।"
            },
            {
                "en": "Hi there, I was wondering if we could talk about this.",
                "bn": "হাই, আমি ভাবছিলাম আমরা কি বিষয়টি নিয়ে একটু কথা বলতে পারি?",
                "tip": "অতি ভদ্র ও প্রফেশনাল ভূমিকা।"
            }
        ],
        "dialogue": [
            {
                "id": "1",
                "speaker": "Speaker A",
                "role": "A",
                "en": "Hello, how are you doing today? We are focusing on at the doctor's: symptoms & prescription.",
                "bn": "হ্যালো, আপনি কেমন আছেন? আমরা আজ ডাক্তারের চেম্বারে লক্ষণ প্রকাশ ও প্রেসক্রিপশন নিয়ে কথা বলছি।",
                "ipa": "/həˈləʊ haʊ ɑː juː ˈduːɪŋ təˈdeɪ/",
                "bn_pron": "হ্যালো, হাউ আ ইউ ডুয়িং টুডেই?"
            },
            {
                "id": "2",
                "speaker": "Speaker B",
                "role": "B",
                "en": "I'm doing well, thank you! It's an essential scenario to practice.",
                "bn": "আমি ভালো আছি, ধন্যবাদ! এটি চর্চা করার মতো খুবই দরকারি একটি দৃশ্যপট।",
                "ipa": "/aɪm ˈduːɪŋ wel θæŋk juː ɪts ən ɪˈsenʃl sɪˈnɑːriəʊ/",
                "bn_pron": "আইম ডুয়িং ওয়েল, থ্যাংক ইউ! ইটস অ্যান এসেনশিয়াল সিনারিও।"
            },
            {
                "id": "3",
                "speaker": "Speaker A",
                "role": "A",
                "en": "Could you tell me how you usually approach this situation?",
                "bn": "আপনি সাধারণত এই পরিস্থিতিতে কীভাবে কথা শুরু করেন?",
                "ipa": "/kʊd juː tel miː haʊ juː ˈjuːʒʊəli əˈprəʊtʃ/",
                "bn_pron": "কুড ইউ টেল মি হাউ ইউ ইউজুয়ালি অ্যাপ্রোচ?"
            },
            {
                "id": "4",
                "speaker": "Speaker B",
                "role": "B",
                "en": "I always start politely with a clear greeting and simple question.",
                "bn": "আমি সবসময় একটি সুন্দর সম্ভাষণ ও সহজ প্রশ্ন দিয়ে বিনয়ের সাথে শুরু করি।",
                "ipa": "/aɪ ˈɔːlweɪz stɑːt pəˈlaɪtli wɪð ə klɪə ˈɡriːtɪŋ/",
                "bn_pron": "আই অলওয়েজ স্টার্ট পোলাইটলি উইথ আ ক্লিয়ার গ্রীটিং।"
            },
            {
                "id": "5",
                "speaker": "Speaker A",
                "role": "A",
                "en": "That makes complete sense! Clarity and confidence make a huge difference.",
                "bn": "একদম যথার্থ! স্পষ্টতা ও আত্মবিশ্বাস অনেক বড় ইতিবাচক পরিবর্তন আনে।",
                "ipa": "/ðæt meɪks kəmˈpliːt sens ˈklærəti ænd ˈkɒnfɪdəns/",
                "bn_pron": "দ্যাট মেইকস কমপ্লিট সেন্স! ক্ল্যারিটি অ্যান্ড কনফিডেন্স।"
            },
            {
                "id": "6",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Exactly. And active listening helps in responding naturally without hesitation.",
                "bn": "ঠিক তাই। আর মনোযোগ দিয়ে শুনলে দ্বিধাহীনভাবে স্বাভাবিক উত্তর দেওয়া সম্ভব হয়।",
                "ipa": "/ɪɡˈzæktli ænd ˈæktɪv ˈlɪsnɪŋ helps ɪn rɪˈspɒndɪŋ ˈnætʃrəli/",
                "bn_pron": "এক্স্যাক্টলি। অ্যান্ড অ্যাকটিভ লিসেনিং হেল্পস ইন রেসপন্ডিং ন্যাচারালি।"
            },
            {
                "id": "7",
                "speaker": "Speaker A",
                "role": "A",
                "en": "What common mistake should learners avoid in this situation?",
                "bn": "এই পরিস্থিতিতে শিক্ষার্থীদের কোন সাধারণ ভুলটি এড়িয়ে চলা উচিত?",
                "ipa": "/wɒt ˈkɒmən mɪˈsteɪk ʃʊd ˈlɜːnəz əˈvɔɪd/",
                "bn_pron": "ওয়াট কমন মিসটেইক শুড লার্নার্স অ্যাভয়েড?"
            },
            {
                "id": "8",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Never translate literally word for word from Bengali; use native phrases!",
                "bn": "কখনো বাংলা থেকে হুবহু শব্দ ধরে ধরে অনুবাদ করবেন না; স্বাভাবিক নেটিভ ফ্রেজ ব্যবহার করুন!",
                "ipa": "/ˈnevə trænzˈleɪt ˈlɪtərəli wɜːd fɔː wɜːd juːz ˈneɪtɪv freɪzɪz/",
                "bn_pron": "নেভার ট্রান্সলেইট লিটারালি ওয়ার্ড ফর ওয়ার্ড; ইউয নেইটিভ ফ্রেজেস!"
            },
            {
                "id": "9",
                "speaker": "Speaker A",
                "role": "A",
                "en": "That is golden advice. Daily practice makes fluent speakers.",
                "bn": "এটি অমূল্য পরামর্শ। নিয়মিত চর্চাতেই অনর্গল কথা বলা সম্ভব।",
                "ipa": "/ðæt ɪz ˈɡəʊldən ədˈvaɪs ˈdeɪli ˈpræktɪs meɪks ˈfluːənt/",
                "bn_pron": "দ্যাট ইয গোল্ডেন অ্যাডভাইস। ডেইলি প্র্যাকটিস মেইকস ফ্লুয়েন্ট।"
            },
            {
                "id": "10",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Absolutely! Repetition guarantees effortless conversational confidence.",
                "bn": "একদমই তাই! বারবার বলা নিশ্চিতভাবেই অনর্গল সাবলীলতা এনে দেয়।",
                "ipa": "/ˌæbsəˈluːtli ˌrepəˈtɪʃn ˌɡærənˈtiːz ˈkɒnfɪdəns/",
                "bn_pron": "অ্যাবসলিউটলি! রিপিটিশন গ্যারান্টিয কনফিডেন্স।"
            }
        ],
        "followUps": [
            {
                "en": "Could you elaborate on the key points, please?",
                "bn": "প্রধান বিষয়গুলো কি একটু বিস্তারিত বলবেন, প্লিজ?"
            },
            {
                "en": "How do you usually handle unexpected challenges here?",
                "bn": "এখানে কোনো অপ্রত্যাশিত পরিস্থিতি সৃষ্টি হলে কীভাবে সামলান?"
            },
            {
                "en": "Would tomorrow be a good time to follow up on this?",
                "bn": "আগামীকাল কি বিষয়টি নিয়ে আবার কথা বলা সুবিধার হবে?"
            }
        ],
        "closers": [
            {
                "en": "Thank you so much for your valuable time and cooperation!",
                "bn": "আপনার মূল্যবান সময় ও সহযোগিতার জন্য অনেক ধন্যবাদ!"
            },
            {
                "en": "I truly appreciate your kind help. Have a wonderful day!",
                "bn": "আপনার আন্তরিক সহায়তার জন্য কৃতজ্ঞতা জানাচ্ছি। দিনটি সুন্দর কাটুক!"
            },
            {
                "en": "Let's stay in touch and coordinate soon. Take care!",
                "bn": "যোগাযোগে থাকব এবং দ্রুতই আপডেট দেব। ভালো থাকবেন!"
            }
        ],
        "nativePhrases": [
            {
                "phrase": "Make complete sense",
                "meaning": "সম্পূর্ণ যুক্তিযুক্ত ও বোধগম্য হওয়া",
                "context": "কারো বক্তব্যে সহমত জানাতে নেটিভদের সবচেয়ে প্রিয় ফ্রেজ।"
            },
            {
                "phrase": "Without hesitation",
                "meaning": "দ্বিধা বা ভয় ছাড়া নিঃসঙ্কোচে",
                "context": "আত্মবিশ্বাসের সাথে কোনো কাজ করার ক্ষেত্রে।"
            },
            {
                "phrase": "Stay in touch",
                "meaning": "নিয়মিত যোগাযোগ বজায় রাখা",
                "context": "বিদায়ের সময় সম্মানজনক অনুরোধ হিসেবে।"
            }
        ]
    },
    {
        "id": "conv-07-checking-into-a-hotel-room",
        "number": 7,
        "title": "Checking into a Hotel Room",
        "titleBn": "হোটেলে রুম বুকিং ও চেক-ইন করা",
        "level": "Easy",
        "category": "Travel",
        "sceneDescription": "হোটেলে রুম বুকিং ও চেক-ইন করা সংক্রান্ত বাস্তব কথোপকথন এবং প্রয়োজনীয় বাক্যসমূহ।",
        "starters": [
            {
                "en": "Hello! Could you help me regarding checking into a hotel room?",
                "bn": "হ্যালো! এই বিষয়ে কি আমাকে একটু সহায়তা করতে পারেন?",
                "tip": "কথা শুরু করার সবচেয়ে কার্যকর ও শিষ্ট উপায়।"
            },
            {
                "en": "Excuse me, do you have a quick moment to discuss this?",
                "bn": "মাফ করবেন, এই বিষয়ে কথা বলার মতো কি সামান্য সময় হবে?",
                "tip": "নম্রভাবে সম্মতি নেওয়ার বাক্য।"
            },
            {
                "en": "Hi there, I was wondering if we could talk about this.",
                "bn": "হাই, আমি ভাবছিলাম আমরা কি বিষয়টি নিয়ে একটু কথা বলতে পারি?",
                "tip": "অতি ভদ্র ও প্রফেশনাল ভূমিকা।"
            }
        ],
        "dialogue": [
            {
                "id": "1",
                "speaker": "Speaker A",
                "role": "A",
                "en": "Hello, how are you doing today? We are focusing on checking into a hotel room.",
                "bn": "হ্যালো, আপনি কেমন আছেন? আমরা আজ হোটেলে রুম বুকিং ও চেক-ইন করা নিয়ে কথা বলছি।",
                "ipa": "/həˈləʊ haʊ ɑː juː ˈduːɪŋ təˈdeɪ/",
                "bn_pron": "হ্যালো, হাউ আ ইউ ডুয়িং টুডেই?"
            },
            {
                "id": "2",
                "speaker": "Speaker B",
                "role": "B",
                "en": "I'm doing well, thank you! It's an essential scenario to practice.",
                "bn": "আমি ভালো আছি, ধন্যবাদ! এটি চর্চা করার মতো খুবই দরকারি একটি দৃশ্যপট।",
                "ipa": "/aɪm ˈduːɪŋ wel θæŋk juː ɪts ən ɪˈsenʃl sɪˈnɑːriəʊ/",
                "bn_pron": "আইম ডুয়িং ওয়েল, থ্যাংক ইউ! ইটস অ্যান এসেনশিয়াল সিনারিও।"
            },
            {
                "id": "3",
                "speaker": "Speaker A",
                "role": "A",
                "en": "Could you tell me how you usually approach this situation?",
                "bn": "আপনি সাধারণত এই পরিস্থিতিতে কীভাবে কথা শুরু করেন?",
                "ipa": "/kʊd juː tel miː haʊ juː ˈjuːʒʊəli əˈprəʊtʃ/",
                "bn_pron": "কুড ইউ টেল মি হাউ ইউ ইউজুয়ালি অ্যাপ্রোচ?"
            },
            {
                "id": "4",
                "speaker": "Speaker B",
                "role": "B",
                "en": "I always start politely with a clear greeting and simple question.",
                "bn": "আমি সবসময় একটি সুন্দর সম্ভাষণ ও সহজ প্রশ্ন দিয়ে বিনয়ের সাথে শুরু করি।",
                "ipa": "/aɪ ˈɔːlweɪz stɑːt pəˈlaɪtli wɪð ə klɪə ˈɡriːtɪŋ/",
                "bn_pron": "আই অলওয়েজ স্টার্ট পোলাইটলি উইথ আ ক্লিয়ার গ্রীটিং।"
            },
            {
                "id": "5",
                "speaker": "Speaker A",
                "role": "A",
                "en": "That makes complete sense! Clarity and confidence make a huge difference.",
                "bn": "একদম যথার্থ! স্পষ্টতা ও আত্মবিশ্বাস অনেক বড় ইতিবাচক পরিবর্তন আনে।",
                "ipa": "/ðæt meɪks kəmˈpliːt sens ˈklærəti ænd ˈkɒnfɪdəns/",
                "bn_pron": "দ্যাট মেইকস কমপ্লিট সেন্স! ক্ল্যারিটি অ্যান্ড কনফিডেন্স।"
            },
            {
                "id": "6",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Exactly. And active listening helps in responding naturally without hesitation.",
                "bn": "ঠিক তাই। আর মনোযোগ দিয়ে শুনলে দ্বিধাহীনভাবে স্বাভাবিক উত্তর দেওয়া সম্ভব হয়।",
                "ipa": "/ɪɡˈzæktli ænd ˈæktɪv ˈlɪsnɪŋ helps ɪn rɪˈspɒndɪŋ ˈnætʃrəli/",
                "bn_pron": "এক্স্যাক্টলি। অ্যান্ড অ্যাকটিভ লিসেনিং হেল্পস ইন রেসপন্ডিং ন্যাচারালি।"
            },
            {
                "id": "7",
                "speaker": "Speaker A",
                "role": "A",
                "en": "What common mistake should learners avoid in this situation?",
                "bn": "এই পরিস্থিতিতে শিক্ষার্থীদের কোন সাধারণ ভুলটি এড়িয়ে চলা উচিত?",
                "ipa": "/wɒt ˈkɒmən mɪˈsteɪk ʃʊd ˈlɜːnəz əˈvɔɪd/",
                "bn_pron": "ওয়াট কমন মিসটেইক শুড লার্নার্স অ্যাভয়েড?"
            },
            {
                "id": "8",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Never translate literally word for word from Bengali; use native phrases!",
                "bn": "কখনো বাংলা থেকে হুবহু শব্দ ধরে ধরে অনুবাদ করবেন না; স্বাভাবিক নেটিভ ফ্রেজ ব্যবহার করুন!",
                "ipa": "/ˈnevə trænzˈleɪt ˈlɪtərəli wɜːd fɔː wɜːd juːz ˈneɪtɪv freɪzɪz/",
                "bn_pron": "নেভার ট্রান্সলেইট লিটারালি ওয়ার্ড ফর ওয়ার্ড; ইউয নেইটিভ ফ্রেজেস!"
            },
            {
                "id": "9",
                "speaker": "Speaker A",
                "role": "A",
                "en": "That is golden advice. Daily practice makes fluent speakers.",
                "bn": "এটি অমূল্য পরামর্শ। নিয়মিত চর্চাতেই অনর্গল কথা বলা সম্ভব।",
                "ipa": "/ðæt ɪz ˈɡəʊldən ədˈvaɪs ˈdeɪli ˈpræktɪs meɪks ˈfluːənt/",
                "bn_pron": "দ্যাট ইয গোল্ডেন অ্যাডভাইস। ডেইলি প্র্যাকটিস মেইকস ফ্লুয়েন্ট।"
            },
            {
                "id": "10",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Absolutely! Repetition guarantees effortless conversational confidence.",
                "bn": "একদমই তাই! বারবার বলা নিশ্চিতভাবেই অনর্গল সাবলীলতা এনে দেয়।",
                "ipa": "/ˌæbsəˈluːtli ˌrepəˈtɪʃn ˌɡærənˈtiːz ˈkɒnfɪdəns/",
                "bn_pron": "অ্যাবসলিউটলি! রিপিটিশন গ্যারান্টিয কনফিডেন্স।"
            }
        ],
        "followUps": [
            {
                "en": "Could you elaborate on the key points, please?",
                "bn": "প্রধান বিষয়গুলো কি একটু বিস্তারিত বলবেন, প্লিজ?"
            },
            {
                "en": "How do you usually handle unexpected challenges here?",
                "bn": "এখানে কোনো অপ্রত্যাশিত পরিস্থিতি সৃষ্টি হলে কীভাবে সামলান?"
            },
            {
                "en": "Would tomorrow be a good time to follow up on this?",
                "bn": "আগামীকাল কি বিষয়টি নিয়ে আবার কথা বলা সুবিধার হবে?"
            }
        ],
        "closers": [
            {
                "en": "Thank you so much for your valuable time and cooperation!",
                "bn": "আপনার মূল্যবান সময় ও সহযোগিতার জন্য অনেক ধন্যবাদ!"
            },
            {
                "en": "I truly appreciate your kind help. Have a wonderful day!",
                "bn": "আপনার আন্তরিক সহায়তার জন্য কৃতজ্ঞতা জানাচ্ছি। দিনটি সুন্দর কাটুক!"
            },
            {
                "en": "Let's stay in touch and coordinate soon. Take care!",
                "bn": "যোগাযোগে থাকব এবং দ্রুতই আপডেট দেব। ভালো থাকবেন!"
            }
        ],
        "nativePhrases": [
            {
                "phrase": "Make complete sense",
                "meaning": "সম্পূর্ণ যুক্তিযুক্ত ও বোধগম্য হওয়া",
                "context": "কারো বক্তব্যে সহমত জানাতে নেটিভদের সবচেয়ে প্রিয় ফ্রেজ।"
            },
            {
                "phrase": "Without hesitation",
                "meaning": "দ্বিধা বা ভয় ছাড়া নিঃসঙ্কোচে",
                "context": "আত্মবিশ্বাসের সাথে কোনো কাজ করার ক্ষেত্রে।"
            },
            {
                "phrase": "Stay in touch",
                "meaning": "নিয়মিত যোগাযোগ বজায় রাখা",
                "context": "বিদায়ের সময় সম্মানজনক অনুরোধ হিসেবে।"
            }
        ]
    },
    {
        "id": "conv-08-catching-up-with-an-old-friend-on-phone",
        "number": 8,
        "title": "Catching Up with an Old Friend on Phone",
        "titleBn": "পুরনো বন্ধুর সাথে ফোনে আড্ডা ও খোঁজ নেওয়া",
        "level": "Easy",
        "category": "Social",
        "sceneDescription": "পুরনো বন্ধুর সাথে ফোনে আড্ডা ও খোঁজ নেওয়া সংক্রান্ত বাস্তব কথোপকথন এবং প্রয়োজনীয় বাক্যসমূহ।",
        "starters": [
            {
                "en": "Hello! Could you help me regarding catching up with an old friend on phone?",
                "bn": "হ্যালো! এই বিষয়ে কি আমাকে একটু সহায়তা করতে পারেন?",
                "tip": "কথা শুরু করার সবচেয়ে কার্যকর ও শিষ্ট উপায়।"
            },
            {
                "en": "Excuse me, do you have a quick moment to discuss this?",
                "bn": "মাফ করবেন, এই বিষয়ে কথা বলার মতো কি সামান্য সময় হবে?",
                "tip": "নম্রভাবে সম্মতি নেওয়ার বাক্য।"
            },
            {
                "en": "Hi there, I was wondering if we could talk about this.",
                "bn": "হাই, আমি ভাবছিলাম আমরা কি বিষয়টি নিয়ে একটু কথা বলতে পারি?",
                "tip": "অতি ভদ্র ও প্রফেশনাল ভূমিকা।"
            }
        ],
        "dialogue": [
            {
                "id": "1",
                "speaker": "Speaker A",
                "role": "A",
                "en": "Hello, how are you doing today? We are focusing on catching up with an old friend on phone.",
                "bn": "হ্যালো, আপনি কেমন আছেন? আমরা আজ পুরনো বন্ধুর সাথে ফোনে আড্ডা ও খোঁজ নেওয়া নিয়ে কথা বলছি।",
                "ipa": "/həˈləʊ haʊ ɑː juː ˈduːɪŋ təˈdeɪ/",
                "bn_pron": "হ্যালো, হাউ আ ইউ ডুয়িং টুডেই?"
            },
            {
                "id": "2",
                "speaker": "Speaker B",
                "role": "B",
                "en": "I'm doing well, thank you! It's an essential scenario to practice.",
                "bn": "আমি ভালো আছি, ধন্যবাদ! এটি চর্চা করার মতো খুবই দরকারি একটি দৃশ্যপট।",
                "ipa": "/aɪm ˈduːɪŋ wel θæŋk juː ɪts ən ɪˈsenʃl sɪˈnɑːriəʊ/",
                "bn_pron": "আইম ডুয়িং ওয়েল, থ্যাংক ইউ! ইটস অ্যান এসেনশিয়াল সিনারিও।"
            },
            {
                "id": "3",
                "speaker": "Speaker A",
                "role": "A",
                "en": "Could you tell me how you usually approach this situation?",
                "bn": "আপনি সাধারণত এই পরিস্থিতিতে কীভাবে কথা শুরু করেন?",
                "ipa": "/kʊd juː tel miː haʊ juː ˈjuːʒʊəli əˈprəʊtʃ/",
                "bn_pron": "কুড ইউ টেল মি হাউ ইউ ইউজুয়ালি অ্যাপ্রোচ?"
            },
            {
                "id": "4",
                "speaker": "Speaker B",
                "role": "B",
                "en": "I always start politely with a clear greeting and simple question.",
                "bn": "আমি সবসময় একটি সুন্দর সম্ভাষণ ও সহজ প্রশ্ন দিয়ে বিনয়ের সাথে শুরু করি।",
                "ipa": "/aɪ ˈɔːlweɪz stɑːt pəˈlaɪtli wɪð ə klɪə ˈɡriːtɪŋ/",
                "bn_pron": "আই অলওয়েজ স্টার্ট পোলাইটলি উইথ আ ক্লিয়ার গ্রীটিং।"
            },
            {
                "id": "5",
                "speaker": "Speaker A",
                "role": "A",
                "en": "That makes complete sense! Clarity and confidence make a huge difference.",
                "bn": "একদম যথার্থ! স্পষ্টতা ও আত্মবিশ্বাস অনেক বড় ইতিবাচক পরিবর্তন আনে।",
                "ipa": "/ðæt meɪks kəmˈpliːt sens ˈklærəti ænd ˈkɒnfɪdəns/",
                "bn_pron": "দ্যাট মেইকস কমপ্লিট সেন্স! ক্ল্যারিটি অ্যান্ড কনফিডেন্স।"
            },
            {
                "id": "6",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Exactly. And active listening helps in responding naturally without hesitation.",
                "bn": "ঠিক তাই। আর মনোযোগ দিয়ে শুনলে দ্বিধাহীনভাবে স্বাভাবিক উত্তর দেওয়া সম্ভব হয়।",
                "ipa": "/ɪɡˈzæktli ænd ˈæktɪv ˈlɪsnɪŋ helps ɪn rɪˈspɒndɪŋ ˈnætʃrəli/",
                "bn_pron": "এক্স্যাক্টলি। অ্যান্ড অ্যাকটিভ লিসেনিং হেল্পস ইন রেসপন্ডিং ন্যাচারালি।"
            },
            {
                "id": "7",
                "speaker": "Speaker A",
                "role": "A",
                "en": "What common mistake should learners avoid in this situation?",
                "bn": "এই পরিস্থিতিতে শিক্ষার্থীদের কোন সাধারণ ভুলটি এড়িয়ে চলা উচিত?",
                "ipa": "/wɒt ˈkɒmən mɪˈsteɪk ʃʊd ˈlɜːnəz əˈvɔɪd/",
                "bn_pron": "ওয়াট কমন মিসটেইক শুড লার্নার্স অ্যাভয়েড?"
            },
            {
                "id": "8",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Never translate literally word for word from Bengali; use native phrases!",
                "bn": "কখনো বাংলা থেকে হুবহু শব্দ ধরে ধরে অনুবাদ করবেন না; স্বাভাবিক নেটিভ ফ্রেজ ব্যবহার করুন!",
                "ipa": "/ˈnevə trænzˈleɪt ˈlɪtərəli wɜːd fɔː wɜːd juːz ˈneɪtɪv freɪzɪz/",
                "bn_pron": "নেভার ট্রান্সলেইট লিটারালি ওয়ার্ড ফর ওয়ার্ড; ইউয নেইটিভ ফ্রেজেস!"
            },
            {
                "id": "9",
                "speaker": "Speaker A",
                "role": "A",
                "en": "That is golden advice. Daily practice makes fluent speakers.",
                "bn": "এটি অমূল্য পরামর্শ। নিয়মিত চর্চাতেই অনর্গল কথা বলা সম্ভব।",
                "ipa": "/ðæt ɪz ˈɡəʊldən ədˈvaɪs ˈdeɪli ˈpræktɪs meɪks ˈfluːənt/",
                "bn_pron": "দ্যাট ইয গোল্ডেন অ্যাডভাইস। ডেইলি প্র্যাকটিস মেইকস ফ্লুয়েন্ট।"
            },
            {
                "id": "10",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Absolutely! Repetition guarantees effortless conversational confidence.",
                "bn": "একদমই তাই! বারবার বলা নিশ্চিতভাবেই অনর্গল সাবলীলতা এনে দেয়।",
                "ipa": "/ˌæbsəˈluːtli ˌrepəˈtɪʃn ˌɡærənˈtiːz ˈkɒnfɪdəns/",
                "bn_pron": "অ্যাবসলিউটলি! রিপিটিশন গ্যারান্টিয কনফিডেন্স।"
            }
        ],
        "followUps": [
            {
                "en": "Could you elaborate on the key points, please?",
                "bn": "প্রধান বিষয়গুলো কি একটু বিস্তারিত বলবেন, প্লিজ?"
            },
            {
                "en": "How do you usually handle unexpected challenges here?",
                "bn": "এখানে কোনো অপ্রত্যাশিত পরিস্থিতি সৃষ্টি হলে কীভাবে সামলান?"
            },
            {
                "en": "Would tomorrow be a good time to follow up on this?",
                "bn": "আগামীকাল কি বিষয়টি নিয়ে আবার কথা বলা সুবিধার হবে?"
            }
        ],
        "closers": [
            {
                "en": "Thank you so much for your valuable time and cooperation!",
                "bn": "আপনার মূল্যবান সময় ও সহযোগিতার জন্য অনেক ধন্যবাদ!"
            },
            {
                "en": "I truly appreciate your kind help. Have a wonderful day!",
                "bn": "আপনার আন্তরিক সহায়তার জন্য কৃতজ্ঞতা জানাচ্ছি। দিনটি সুন্দর কাটুক!"
            },
            {
                "en": "Let's stay in touch and coordinate soon. Take care!",
                "bn": "যোগাযোগে থাকব এবং দ্রুতই আপডেট দেব। ভালো থাকবেন!"
            }
        ],
        "nativePhrases": [
            {
                "phrase": "Make complete sense",
                "meaning": "সম্পূর্ণ যুক্তিযুক্ত ও বোধগম্য হওয়া",
                "context": "কারো বক্তব্যে সহমত জানাতে নেটিভদের সবচেয়ে প্রিয় ফ্রেজ।"
            },
            {
                "phrase": "Without hesitation",
                "meaning": "দ্বিধা বা ভয় ছাড়া নিঃসঙ্কোচে",
                "context": "আত্মবিশ্বাসের সাথে কোনো কাজ করার ক্ষেত্রে।"
            },
            {
                "phrase": "Stay in touch",
                "meaning": "নিয়মিত যোগাযোগ বজায় রাখা",
                "context": "বিদায়ের সময় সম্মানজনক অনুরোধ হিসেবে।"
            }
        ]
    },
    {
        "id": "conv-09-asking-for-help-lost-property",
        "number": 9,
        "title": "Asking for Help & Lost Property",
        "titleBn": "সাহায্য চাওয়া ও হারানো জিনিস খোঁজা",
        "level": "Easy",
        "category": "Daily Life",
        "sceneDescription": "সাহায্য চাওয়া ও হারানো জিনিস খোঁজা সংক্রান্ত বাস্তব কথোপকথন এবং প্রয়োজনীয় বাক্যসমূহ।",
        "starters": [
            {
                "en": "Hello! Could you help me regarding asking for help & lost property?",
                "bn": "হ্যালো! এই বিষয়ে কি আমাকে একটু সহায়তা করতে পারেন?",
                "tip": "কথা শুরু করার সবচেয়ে কার্যকর ও শিষ্ট উপায়।"
            },
            {
                "en": "Excuse me, do you have a quick moment to discuss this?",
                "bn": "মাফ করবেন, এই বিষয়ে কথা বলার মতো কি সামান্য সময় হবে?",
                "tip": "নম্রভাবে সম্মতি নেওয়ার বাক্য।"
            },
            {
                "en": "Hi there, I was wondering if we could talk about this.",
                "bn": "হাই, আমি ভাবছিলাম আমরা কি বিষয়টি নিয়ে একটু কথা বলতে পারি?",
                "tip": "অতি ভদ্র ও প্রফেশনাল ভূমিকা।"
            }
        ],
        "dialogue": [
            {
                "id": "1",
                "speaker": "Speaker A",
                "role": "A",
                "en": "Hello, how are you doing today? We are focusing on asking for help & lost property.",
                "bn": "হ্যালো, আপনি কেমন আছেন? আমরা আজ সাহায্য চাওয়া ও হারানো জিনিস খোঁজা নিয়ে কথা বলছি।",
                "ipa": "/həˈləʊ haʊ ɑː juː ˈduːɪŋ təˈdeɪ/",
                "bn_pron": "হ্যালো, হাউ আ ইউ ডুয়িং টুডেই?"
            },
            {
                "id": "2",
                "speaker": "Speaker B",
                "role": "B",
                "en": "I'm doing well, thank you! It's an essential scenario to practice.",
                "bn": "আমি ভালো আছি, ধন্যবাদ! এটি চর্চা করার মতো খুবই দরকারি একটি দৃশ্যপট।",
                "ipa": "/aɪm ˈduːɪŋ wel θæŋk juː ɪts ən ɪˈsenʃl sɪˈnɑːriəʊ/",
                "bn_pron": "আইম ডুয়িং ওয়েল, থ্যাংক ইউ! ইটস অ্যান এসেনশিয়াল সিনারিও।"
            },
            {
                "id": "3",
                "speaker": "Speaker A",
                "role": "A",
                "en": "Could you tell me how you usually approach this situation?",
                "bn": "আপনি সাধারণত এই পরিস্থিতিতে কীভাবে কথা শুরু করেন?",
                "ipa": "/kʊd juː tel miː haʊ juː ˈjuːʒʊəli əˈprəʊtʃ/",
                "bn_pron": "কুড ইউ টেল মি হাউ ইউ ইউজুয়ালি অ্যাপ্রোচ?"
            },
            {
                "id": "4",
                "speaker": "Speaker B",
                "role": "B",
                "en": "I always start politely with a clear greeting and simple question.",
                "bn": "আমি সবসময় একটি সুন্দর সম্ভাষণ ও সহজ প্রশ্ন দিয়ে বিনয়ের সাথে শুরু করি।",
                "ipa": "/aɪ ˈɔːlweɪz stɑːt pəˈlaɪtli wɪð ə klɪə ˈɡriːtɪŋ/",
                "bn_pron": "আই অলওয়েজ স্টার্ট পোলাইটলি উইথ আ ক্লিয়ার গ্রীটিং।"
            },
            {
                "id": "5",
                "speaker": "Speaker A",
                "role": "A",
                "en": "That makes complete sense! Clarity and confidence make a huge difference.",
                "bn": "একদম যথার্থ! স্পষ্টতা ও আত্মবিশ্বাস অনেক বড় ইতিবাচক পরিবর্তন আনে।",
                "ipa": "/ðæt meɪks kəmˈpliːt sens ˈklærəti ænd ˈkɒnfɪdəns/",
                "bn_pron": "দ্যাট মেইকস কমপ্লিট সেন্স! ক্ল্যারিটি অ্যান্ড কনফিডেন্স।"
            },
            {
                "id": "6",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Exactly. And active listening helps in responding naturally without hesitation.",
                "bn": "ঠিক তাই। আর মনোযোগ দিয়ে শুনলে দ্বিধাহীনভাবে স্বাভাবিক উত্তর দেওয়া সম্ভব হয়।",
                "ipa": "/ɪɡˈzæktli ænd ˈæktɪv ˈlɪsnɪŋ helps ɪn rɪˈspɒndɪŋ ˈnætʃrəli/",
                "bn_pron": "এক্স্যাক্টলি। অ্যান্ড অ্যাকটিভ লিসেনিং হেল্পস ইন রেসপন্ডিং ন্যাচারালি।"
            },
            {
                "id": "7",
                "speaker": "Speaker A",
                "role": "A",
                "en": "What common mistake should learners avoid in this situation?",
                "bn": "এই পরিস্থিতিতে শিক্ষার্থীদের কোন সাধারণ ভুলটি এড়িয়ে চলা উচিত?",
                "ipa": "/wɒt ˈkɒmən mɪˈsteɪk ʃʊd ˈlɜːnəz əˈvɔɪd/",
                "bn_pron": "ওয়াট কমন মিসটেইক শুড লার্নার্স অ্যাভয়েড?"
            },
            {
                "id": "8",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Never translate literally word for word from Bengali; use native phrases!",
                "bn": "কখনো বাংলা থেকে হুবহু শব্দ ধরে ধরে অনুবাদ করবেন না; স্বাভাবিক নেটিভ ফ্রেজ ব্যবহার করুন!",
                "ipa": "/ˈnevə trænzˈleɪt ˈlɪtərəli wɜːd fɔː wɜːd juːz ˈneɪtɪv freɪzɪz/",
                "bn_pron": "নেভার ট্রান্সলেইট লিটারালি ওয়ার্ড ফর ওয়ার্ড; ইউয নেইটিভ ফ্রেজেস!"
            },
            {
                "id": "9",
                "speaker": "Speaker A",
                "role": "A",
                "en": "That is golden advice. Daily practice makes fluent speakers.",
                "bn": "এটি অমূল্য পরামর্শ। নিয়মিত চর্চাতেই অনর্গল কথা বলা সম্ভব।",
                "ipa": "/ðæt ɪz ˈɡəʊldən ədˈvaɪs ˈdeɪli ˈpræktɪs meɪks ˈfluːənt/",
                "bn_pron": "দ্যাট ইয গোল্ডেন অ্যাডভাইস। ডেইলি প্র্যাকটিস মেইকস ফ্লুয়েন্ট।"
            },
            {
                "id": "10",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Absolutely! Repetition guarantees effortless conversational confidence.",
                "bn": "একদমই তাই! বারবার বলা নিশ্চিতভাবেই অনর্গল সাবলীলতা এনে দেয়।",
                "ipa": "/ˌæbsəˈluːtli ˌrepəˈtɪʃn ˌɡærənˈtiːz ˈkɒnfɪdəns/",
                "bn_pron": "অ্যাবসলিউটলি! রিপিটিশন গ্যারান্টিয কনফিডেন্স।"
            }
        ],
        "followUps": [
            {
                "en": "Could you elaborate on the key points, please?",
                "bn": "প্রধান বিষয়গুলো কি একটু বিস্তারিত বলবেন, প্লিজ?"
            },
            {
                "en": "How do you usually handle unexpected challenges here?",
                "bn": "এখানে কোনো অপ্রত্যাশিত পরিস্থিতি সৃষ্টি হলে কীভাবে সামলান?"
            },
            {
                "en": "Would tomorrow be a good time to follow up on this?",
                "bn": "আগামীকাল কি বিষয়টি নিয়ে আবার কথা বলা সুবিধার হবে?"
            }
        ],
        "closers": [
            {
                "en": "Thank you so much for your valuable time and cooperation!",
                "bn": "আপনার মূল্যবান সময় ও সহযোগিতার জন্য অনেক ধন্যবাদ!"
            },
            {
                "en": "I truly appreciate your kind help. Have a wonderful day!",
                "bn": "আপনার আন্তরিক সহায়তার জন্য কৃতজ্ঞতা জানাচ্ছি। দিনটি সুন্দর কাটুক!"
            },
            {
                "en": "Let's stay in touch and coordinate soon. Take care!",
                "bn": "যোগাযোগে থাকব এবং দ্রুতই আপডেট দেব। ভালো থাকবেন!"
            }
        ],
        "nativePhrases": [
            {
                "phrase": "Make complete sense",
                "meaning": "সম্পূর্ণ যুক্তিযুক্ত ও বোধগম্য হওয়া",
                "context": "কারো বক্তব্যে সহমত জানাতে নেটিভদের সবচেয়ে প্রিয় ফ্রেজ।"
            },
            {
                "phrase": "Without hesitation",
                "meaning": "দ্বিধা বা ভয় ছাড়া নিঃসঙ্কোচে",
                "context": "আত্মবিশ্বাসের সাথে কোনো কাজ করার ক্ষেত্রে।"
            },
            {
                "phrase": "Stay in touch",
                "meaning": "নিয়মিত যোগাযোগ বজায় রাখা",
                "context": "বিদায়ের সময় সম্মানজনক অনুরোধ হিসেবে।"
            }
        ]
    },
    {
        "id": "conv-10-talking-about-hobbies-passions",
        "number": 10,
        "title": "Talking About Hobbies & Passions",
        "titleBn": "শখ, আগ্রহ ও অবসর নিয়ে আলোচনা",
        "level": "Easy",
        "category": "Social",
        "sceneDescription": "শখ, আগ্রহ ও অবসর নিয়ে আলোচনা সংক্রান্ত বাস্তব কথোপকথন এবং প্রয়োজনীয় বাক্যসমূহ।",
        "starters": [
            {
                "en": "Hello! Could you help me regarding talking about hobbies & passions?",
                "bn": "হ্যালো! এই বিষয়ে কি আমাকে একটু সহায়তা করতে পারেন?",
                "tip": "কথা শুরু করার সবচেয়ে কার্যকর ও শিষ্ট উপায়।"
            },
            {
                "en": "Excuse me, do you have a quick moment to discuss this?",
                "bn": "মাফ করবেন, এই বিষয়ে কথা বলার মতো কি সামান্য সময় হবে?",
                "tip": "নম্রভাবে সম্মতি নেওয়ার বাক্য।"
            },
            {
                "en": "Hi there, I was wondering if we could talk about this.",
                "bn": "হাই, আমি ভাবছিলাম আমরা কি বিষয়টি নিয়ে একটু কথা বলতে পারি?",
                "tip": "অতি ভদ্র ও প্রফেশনাল ভূমিকা।"
            }
        ],
        "dialogue": [
            {
                "id": "1",
                "speaker": "Speaker A",
                "role": "A",
                "en": "Hello, how are you doing today? We are focusing on talking about hobbies & passions.",
                "bn": "হ্যালো, আপনি কেমন আছেন? আমরা আজ শখ, আগ্রহ ও অবসর নিয়ে আলোচনা নিয়ে কথা বলছি।",
                "ipa": "/həˈləʊ haʊ ɑː juː ˈduːɪŋ təˈdeɪ/",
                "bn_pron": "হ্যালো, হাউ আ ইউ ডুয়িং টুডেই?"
            },
            {
                "id": "2",
                "speaker": "Speaker B",
                "role": "B",
                "en": "I'm doing well, thank you! It's an essential scenario to practice.",
                "bn": "আমি ভালো আছি, ধন্যবাদ! এটি চর্চা করার মতো খুবই দরকারি একটি দৃশ্যপট।",
                "ipa": "/aɪm ˈduːɪŋ wel θæŋk juː ɪts ən ɪˈsenʃl sɪˈnɑːriəʊ/",
                "bn_pron": "আইম ডুয়িং ওয়েল, থ্যাংক ইউ! ইটস অ্যান এসেনশিয়াল সিনারিও।"
            },
            {
                "id": "3",
                "speaker": "Speaker A",
                "role": "A",
                "en": "Could you tell me how you usually approach this situation?",
                "bn": "আপনি সাধারণত এই পরিস্থিতিতে কীভাবে কথা শুরু করেন?",
                "ipa": "/kʊd juː tel miː haʊ juː ˈjuːʒʊəli əˈprəʊtʃ/",
                "bn_pron": "কুড ইউ টেল মি হাউ ইউ ইউজুয়ালি অ্যাপ্রোচ?"
            },
            {
                "id": "4",
                "speaker": "Speaker B",
                "role": "B",
                "en": "I always start politely with a clear greeting and simple question.",
                "bn": "আমি সবসময় একটি সুন্দর সম্ভাষণ ও সহজ প্রশ্ন দিয়ে বিনয়ের সাথে শুরু করি।",
                "ipa": "/aɪ ˈɔːlweɪz stɑːt pəˈlaɪtli wɪð ə klɪə ˈɡriːtɪŋ/",
                "bn_pron": "আই অলওয়েজ স্টার্ট পোলাইটলি উইথ আ ক্লিয়ার গ্রীটিং।"
            },
            {
                "id": "5",
                "speaker": "Speaker A",
                "role": "A",
                "en": "That makes complete sense! Clarity and confidence make a huge difference.",
                "bn": "একদম যথার্থ! স্পষ্টতা ও আত্মবিশ্বাস অনেক বড় ইতিবাচক পরিবর্তন আনে।",
                "ipa": "/ðæt meɪks kəmˈpliːt sens ˈklærəti ænd ˈkɒnfɪdəns/",
                "bn_pron": "দ্যাট মেইকস কমপ্লিট সেন্স! ক্ল্যারিটি অ্যান্ড কনফিডেন্স।"
            },
            {
                "id": "6",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Exactly. And active listening helps in responding naturally without hesitation.",
                "bn": "ঠিক তাই। আর মনোযোগ দিয়ে শুনলে দ্বিধাহীনভাবে স্বাভাবিক উত্তর দেওয়া সম্ভব হয়।",
                "ipa": "/ɪɡˈzæktli ænd ˈæktɪv ˈlɪsnɪŋ helps ɪn rɪˈspɒndɪŋ ˈnætʃrəli/",
                "bn_pron": "এক্স্যাক্টলি। অ্যান্ড অ্যাকটিভ লিসেনিং হেল্পস ইন রেসপন্ডিং ন্যাচারালি।"
            },
            {
                "id": "7",
                "speaker": "Speaker A",
                "role": "A",
                "en": "What common mistake should learners avoid in this situation?",
                "bn": "এই পরিস্থিতিতে শিক্ষার্থীদের কোন সাধারণ ভুলটি এড়িয়ে চলা উচিত?",
                "ipa": "/wɒt ˈkɒmən mɪˈsteɪk ʃʊd ˈlɜːnəz əˈvɔɪd/",
                "bn_pron": "ওয়াট কমন মিসটেইক শুড লার্নার্স অ্যাভয়েড?"
            },
            {
                "id": "8",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Never translate literally word for word from Bengali; use native phrases!",
                "bn": "কখনো বাংলা থেকে হুবহু শব্দ ধরে ধরে অনুবাদ করবেন না; স্বাভাবিক নেটিভ ফ্রেজ ব্যবহার করুন!",
                "ipa": "/ˈnevə trænzˈleɪt ˈlɪtərəli wɜːd fɔː wɜːd juːz ˈneɪtɪv freɪzɪz/",
                "bn_pron": "নেভার ট্রান্সলেইট লিটারালি ওয়ার্ড ফর ওয়ার্ড; ইউয নেইটিভ ফ্রেজেস!"
            },
            {
                "id": "9",
                "speaker": "Speaker A",
                "role": "A",
                "en": "That is golden advice. Daily practice makes fluent speakers.",
                "bn": "এটি অমূল্য পরামর্শ। নিয়মিত চর্চাতেই অনর্গল কথা বলা সম্ভব।",
                "ipa": "/ðæt ɪz ˈɡəʊldən ədˈvaɪs ˈdeɪli ˈpræktɪs meɪks ˈfluːənt/",
                "bn_pron": "দ্যাট ইয গোল্ডেন অ্যাডভাইস। ডেইলি প্র্যাকটিস মেইকস ফ্লুয়েন্ট।"
            },
            {
                "id": "10",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Absolutely! Repetition guarantees effortless conversational confidence.",
                "bn": "একদমই তাই! বারবার বলা নিশ্চিতভাবেই অনর্গল সাবলীলতা এনে দেয়।",
                "ipa": "/ˌæbsəˈluːtli ˌrepəˈtɪʃn ˌɡærənˈtiːz ˈkɒnfɪdəns/",
                "bn_pron": "অ্যাবসলিউটলি! রিপিটিশন গ্যারান্টিয কনফিডেন্স।"
            }
        ],
        "followUps": [
            {
                "en": "Could you elaborate on the key points, please?",
                "bn": "প্রধান বিষয়গুলো কি একটু বিস্তারিত বলবেন, প্লিজ?"
            },
            {
                "en": "How do you usually handle unexpected challenges here?",
                "bn": "এখানে কোনো অপ্রত্যাশিত পরিস্থিতি সৃষ্টি হলে কীভাবে সামলান?"
            },
            {
                "en": "Would tomorrow be a good time to follow up on this?",
                "bn": "আগামীকাল কি বিষয়টি নিয়ে আবার কথা বলা সুবিধার হবে?"
            }
        ],
        "closers": [
            {
                "en": "Thank you so much for your valuable time and cooperation!",
                "bn": "আপনার মূল্যবান সময় ও সহযোগিতার জন্য অনেক ধন্যবাদ!"
            },
            {
                "en": "I truly appreciate your kind help. Have a wonderful day!",
                "bn": "আপনার আন্তরিক সহায়তার জন্য কৃতজ্ঞতা জানাচ্ছি। দিনটি সুন্দর কাটুক!"
            },
            {
                "en": "Let's stay in touch and coordinate soon. Take care!",
                "bn": "যোগাযোগে থাকব এবং দ্রুতই আপডেট দেব। ভালো থাকবেন!"
            }
        ],
        "nativePhrases": [
            {
                "phrase": "Make complete sense",
                "meaning": "সম্পূর্ণ যুক্তিযুক্ত ও বোধগম্য হওয়া",
                "context": "কারো বক্তব্যে সহমত জানাতে নেটিভদের সবচেয়ে প্রিয় ফ্রেজ।"
            },
            {
                "phrase": "Without hesitation",
                "meaning": "দ্বিধা বা ভয় ছাড়া নিঃসঙ্কোচে",
                "context": "আত্মবিশ্বাসের সাথে কোনো কাজ করার ক্ষেত্রে।"
            },
            {
                "phrase": "Stay in touch",
                "meaning": "নিয়মিত যোগাযোগ বজায় রাখা",
                "context": "বিদায়ের সময় সম্মানজনক অনুরোধ হিসেবে।"
            }
        ]
    },
    {
        "id": "conv-11-buying-groceries-at-the-supermarket",
        "number": 11,
        "title": "Buying Groceries at the Supermarket",
        "titleBn": "সুপারশপে মুদিপণ্য কেনা ও সেলফ খোঁজা",
        "level": "Easy",
        "category": "Shopping",
        "sceneDescription": "সুপারশপে মুদিপণ্য কেনা ও সেলফ খোঁজা সংক্রান্ত বাস্তব কথোপকথন এবং প্রয়োজনীয় বাক্যসমূহ।",
        "starters": [
            {
                "en": "Hello! Could you help me regarding buying groceries at the supermarket?",
                "bn": "হ্যালো! এই বিষয়ে কি আমাকে একটু সহায়তা করতে পারেন?",
                "tip": "কথা শুরু করার সবচেয়ে কার্যকর ও শিষ্ট উপায়।"
            },
            {
                "en": "Excuse me, do you have a quick moment to discuss this?",
                "bn": "মাফ করবেন, এই বিষয়ে কথা বলার মতো কি সামান্য সময় হবে?",
                "tip": "নম্রভাবে সম্মতি নেওয়ার বাক্য।"
            },
            {
                "en": "Hi there, I was wondering if we could talk about this.",
                "bn": "হাই, আমি ভাবছিলাম আমরা কি বিষয়টি নিয়ে একটু কথা বলতে পারি?",
                "tip": "অতি ভদ্র ও প্রফেশনাল ভূমিকা।"
            }
        ],
        "dialogue": [
            {
                "id": "1",
                "speaker": "Speaker A",
                "role": "A",
                "en": "Hello, how are you doing today? We are focusing on buying groceries at the supermarket.",
                "bn": "হ্যালো, আপনি কেমন আছেন? আমরা আজ সুপারশপে মুদিপণ্য কেনা ও সেলফ খোঁজা নিয়ে কথা বলছি।",
                "ipa": "/həˈləʊ haʊ ɑː juː ˈduːɪŋ təˈdeɪ/",
                "bn_pron": "হ্যালো, হাউ আ ইউ ডুয়িং টুডেই?"
            },
            {
                "id": "2",
                "speaker": "Speaker B",
                "role": "B",
                "en": "I'm doing well, thank you! It's an essential scenario to practice.",
                "bn": "আমি ভালো আছি, ধন্যবাদ! এটি চর্চা করার মতো খুবই দরকারি একটি দৃশ্যপট।",
                "ipa": "/aɪm ˈduːɪŋ wel θæŋk juː ɪts ən ɪˈsenʃl sɪˈnɑːriəʊ/",
                "bn_pron": "আইম ডুয়িং ওয়েল, থ্যাংক ইউ! ইটস অ্যান এসেনশিয়াল সিনারিও।"
            },
            {
                "id": "3",
                "speaker": "Speaker A",
                "role": "A",
                "en": "Could you tell me how you usually approach this situation?",
                "bn": "আপনি সাধারণত এই পরিস্থিতিতে কীভাবে কথা শুরু করেন?",
                "ipa": "/kʊd juː tel miː haʊ juː ˈjuːʒʊəli əˈprəʊtʃ/",
                "bn_pron": "কুড ইউ টেল মি হাউ ইউ ইউজুয়ালি অ্যাপ্রোচ?"
            },
            {
                "id": "4",
                "speaker": "Speaker B",
                "role": "B",
                "en": "I always start politely with a clear greeting and simple question.",
                "bn": "আমি সবসময় একটি সুন্দর সম্ভাষণ ও সহজ প্রশ্ন দিয়ে বিনয়ের সাথে শুরু করি।",
                "ipa": "/aɪ ˈɔːlweɪz stɑːt pəˈlaɪtli wɪð ə klɪə ˈɡriːtɪŋ/",
                "bn_pron": "আই অলওয়েজ স্টার্ট পোলাইটলি উইথ আ ক্লিয়ার গ্রীটিং।"
            },
            {
                "id": "5",
                "speaker": "Speaker A",
                "role": "A",
                "en": "That makes complete sense! Clarity and confidence make a huge difference.",
                "bn": "একদম যথার্থ! স্পষ্টতা ও আত্মবিশ্বাস অনেক বড় ইতিবাচক পরিবর্তন আনে।",
                "ipa": "/ðæt meɪks kəmˈpliːt sens ˈklærəti ænd ˈkɒnfɪdəns/",
                "bn_pron": "দ্যাট মেইকস কমপ্লিট সেন্স! ক্ল্যারিটি অ্যান্ড কনফিডেন্স।"
            },
            {
                "id": "6",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Exactly. And active listening helps in responding naturally without hesitation.",
                "bn": "ঠিক তাই। আর মনোযোগ দিয়ে শুনলে দ্বিধাহীনভাবে স্বাভাবিক উত্তর দেওয়া সম্ভব হয়।",
                "ipa": "/ɪɡˈzæktli ænd ˈæktɪv ˈlɪsnɪŋ helps ɪn rɪˈspɒndɪŋ ˈnætʃrəli/",
                "bn_pron": "এক্স্যাক্টলি। অ্যান্ড অ্যাকটিভ লিসেনিং হেল্পস ইন রেসপন্ডিং ন্যাচারালি।"
            },
            {
                "id": "7",
                "speaker": "Speaker A",
                "role": "A",
                "en": "What common mistake should learners avoid in this situation?",
                "bn": "এই পরিস্থিতিতে শিক্ষার্থীদের কোন সাধারণ ভুলটি এড়িয়ে চলা উচিত?",
                "ipa": "/wɒt ˈkɒmən mɪˈsteɪk ʃʊd ˈlɜːnəz əˈvɔɪd/",
                "bn_pron": "ওয়াট কমন মিসটেইক শুড লার্নার্স অ্যাভয়েড?"
            },
            {
                "id": "8",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Never translate literally word for word from Bengali; use native phrases!",
                "bn": "কখনো বাংলা থেকে হুবহু শব্দ ধরে ধরে অনুবাদ করবেন না; স্বাভাবিক নেটিভ ফ্রেজ ব্যবহার করুন!",
                "ipa": "/ˈnevə trænzˈleɪt ˈlɪtərəli wɜːd fɔː wɜːd juːz ˈneɪtɪv freɪzɪz/",
                "bn_pron": "নেভার ট্রান্সলেইট লিটারালি ওয়ার্ড ফর ওয়ার্ড; ইউয নেইটিভ ফ্রেজেস!"
            },
            {
                "id": "9",
                "speaker": "Speaker A",
                "role": "A",
                "en": "That is golden advice. Daily practice makes fluent speakers.",
                "bn": "এটি অমূল্য পরামর্শ। নিয়মিত চর্চাতেই অনর্গল কথা বলা সম্ভব।",
                "ipa": "/ðæt ɪz ˈɡəʊldən ədˈvaɪs ˈdeɪli ˈpræktɪs meɪks ˈfluːənt/",
                "bn_pron": "দ্যাট ইয গোল্ডেন অ্যাডভাইস। ডেইলি প্র্যাকটিস মেইকস ফ্লুয়েন্ট।"
            },
            {
                "id": "10",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Absolutely! Repetition guarantees effortless conversational confidence.",
                "bn": "একদমই তাই! বারবার বলা নিশ্চিতভাবেই অনর্গল সাবলীলতা এনে দেয়।",
                "ipa": "/ˌæbsəˈluːtli ˌrepəˈtɪʃn ˌɡærənˈtiːz ˈkɒnfɪdəns/",
                "bn_pron": "অ্যাবসলিউটলি! রিপিটিশন গ্যারান্টিয কনফিডেন্স।"
            }
        ],
        "followUps": [
            {
                "en": "Could you elaborate on the key points, please?",
                "bn": "প্রধান বিষয়গুলো কি একটু বিস্তারিত বলবেন, প্লিজ?"
            },
            {
                "en": "How do you usually handle unexpected challenges here?",
                "bn": "এখানে কোনো অপ্রত্যাশিত পরিস্থিতি সৃষ্টি হলে কীভাবে সামলান?"
            },
            {
                "en": "Would tomorrow be a good time to follow up on this?",
                "bn": "আগামীকাল কি বিষয়টি নিয়ে আবার কথা বলা সুবিধার হবে?"
            }
        ],
        "closers": [
            {
                "en": "Thank you so much for your valuable time and cooperation!",
                "bn": "আপনার মূল্যবান সময় ও সহযোগিতার জন্য অনেক ধন্যবাদ!"
            },
            {
                "en": "I truly appreciate your kind help. Have a wonderful day!",
                "bn": "আপনার আন্তরিক সহায়তার জন্য কৃতজ্ঞতা জানাচ্ছি। দিনটি সুন্দর কাটুক!"
            },
            {
                "en": "Let's stay in touch and coordinate soon. Take care!",
                "bn": "যোগাযোগে থাকব এবং দ্রুতই আপডেট দেব। ভালো থাকবেন!"
            }
        ],
        "nativePhrases": [
            {
                "phrase": "Make complete sense",
                "meaning": "সম্পূর্ণ যুক্তিযুক্ত ও বোধগম্য হওয়া",
                "context": "কারো বক্তব্যে সহমত জানাতে নেটিভদের সবচেয়ে প্রিয় ফ্রেজ।"
            },
            {
                "phrase": "Without hesitation",
                "meaning": "দ্বিধা বা ভয় ছাড়া নিঃসঙ্কোচে",
                "context": "আত্মবিশ্বাসের সাথে কোনো কাজ করার ক্ষেত্রে।"
            },
            {
                "phrase": "Stay in touch",
                "meaning": "নিয়মিত যোগাযোগ বজায় রাখা",
                "context": "বিদায়ের সময় সম্মানজনক অনুরোধ হিসেবে।"
            }
        ]
    },
    {
        "id": "conv-12-taking-a-taxi-ride-sharing",
        "number": 12,
        "title": "Taking a Taxi / Ride Sharing",
        "titleBn": "ট্যাক্সি বা রাইড শেয়ারে গন্তব্যে যাওয়া",
        "level": "Easy",
        "category": "Travel",
        "sceneDescription": "ট্যাক্সি বা রাইড শেয়ারে গন্তব্যে যাওয়া সংক্রান্ত বাস্তব কথোপকথন এবং প্রয়োজনীয় বাক্যসমূহ।",
        "starters": [
            {
                "en": "Hello! Could you help me regarding taking a taxi / ride sharing?",
                "bn": "হ্যালো! এই বিষয়ে কি আমাকে একটু সহায়তা করতে পারেন?",
                "tip": "কথা শুরু করার সবচেয়ে কার্যকর ও শিষ্ট উপায়।"
            },
            {
                "en": "Excuse me, do you have a quick moment to discuss this?",
                "bn": "মাফ করবেন, এই বিষয়ে কথা বলার মতো কি সামান্য সময় হবে?",
                "tip": "নম্রভাবে সম্মতি নেওয়ার বাক্য।"
            },
            {
                "en": "Hi there, I was wondering if we could talk about this.",
                "bn": "হাই, আমি ভাবছিলাম আমরা কি বিষয়টি নিয়ে একটু কথা বলতে পারি?",
                "tip": "অতি ভদ্র ও প্রফেশনাল ভূমিকা।"
            }
        ],
        "dialogue": [
            {
                "id": "1",
                "speaker": "Speaker A",
                "role": "A",
                "en": "Hello, how are you doing today? We are focusing on taking a taxi / ride sharing.",
                "bn": "হ্যালো, আপনি কেমন আছেন? আমরা আজ ট্যাক্সি বা রাইড শেয়ারে গন্তব্যে যাওয়া নিয়ে কথা বলছি।",
                "ipa": "/həˈləʊ haʊ ɑː juː ˈduːɪŋ təˈdeɪ/",
                "bn_pron": "হ্যালো, হাউ আ ইউ ডুয়িং টুডেই?"
            },
            {
                "id": "2",
                "speaker": "Speaker B",
                "role": "B",
                "en": "I'm doing well, thank you! It's an essential scenario to practice.",
                "bn": "আমি ভালো আছি, ধন্যবাদ! এটি চর্চা করার মতো খুবই দরকারি একটি দৃশ্যপট।",
                "ipa": "/aɪm ˈduːɪŋ wel θæŋk juː ɪts ən ɪˈsenʃl sɪˈnɑːriəʊ/",
                "bn_pron": "আইম ডুয়িং ওয়েল, থ্যাংক ইউ! ইটস অ্যান এসেনশিয়াল সিনারিও।"
            },
            {
                "id": "3",
                "speaker": "Speaker A",
                "role": "A",
                "en": "Could you tell me how you usually approach this situation?",
                "bn": "আপনি সাধারণত এই পরিস্থিতিতে কীভাবে কথা শুরু করেন?",
                "ipa": "/kʊd juː tel miː haʊ juː ˈjuːʒʊəli əˈprəʊtʃ/",
                "bn_pron": "কুড ইউ টেল মি হাউ ইউ ইউজুয়ালি অ্যাপ্রোচ?"
            },
            {
                "id": "4",
                "speaker": "Speaker B",
                "role": "B",
                "en": "I always start politely with a clear greeting and simple question.",
                "bn": "আমি সবসময় একটি সুন্দর সম্ভাষণ ও সহজ প্রশ্ন দিয়ে বিনয়ের সাথে শুরু করি।",
                "ipa": "/aɪ ˈɔːlweɪz stɑːt pəˈlaɪtli wɪð ə klɪə ˈɡriːtɪŋ/",
                "bn_pron": "আই অলওয়েজ স্টার্ট পোলাইটলি উইথ আ ক্লিয়ার গ্রীটিং।"
            },
            {
                "id": "5",
                "speaker": "Speaker A",
                "role": "A",
                "en": "That makes complete sense! Clarity and confidence make a huge difference.",
                "bn": "একদম যথার্থ! স্পষ্টতা ও আত্মবিশ্বাস অনেক বড় ইতিবাচক পরিবর্তন আনে।",
                "ipa": "/ðæt meɪks kəmˈpliːt sens ˈklærəti ænd ˈkɒnfɪdəns/",
                "bn_pron": "দ্যাট মেইকস কমপ্লিট সেন্স! ক্ল্যারিটি অ্যান্ড কনফিডেন্স।"
            },
            {
                "id": "6",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Exactly. And active listening helps in responding naturally without hesitation.",
                "bn": "ঠিক তাই। আর মনোযোগ দিয়ে শুনলে দ্বিধাহীনভাবে স্বাভাবিক উত্তর দেওয়া সম্ভব হয়।",
                "ipa": "/ɪɡˈzæktli ænd ˈæktɪv ˈlɪsnɪŋ helps ɪn rɪˈspɒndɪŋ ˈnætʃrəli/",
                "bn_pron": "এক্স্যাক্টলি। অ্যান্ড অ্যাকটিভ লিসেনিং হেল্পস ইন রেসপন্ডিং ন্যাচারালি।"
            },
            {
                "id": "7",
                "speaker": "Speaker A",
                "role": "A",
                "en": "What common mistake should learners avoid in this situation?",
                "bn": "এই পরিস্থিতিতে শিক্ষার্থীদের কোন সাধারণ ভুলটি এড়িয়ে চলা উচিত?",
                "ipa": "/wɒt ˈkɒmən mɪˈsteɪk ʃʊd ˈlɜːnəz əˈvɔɪd/",
                "bn_pron": "ওয়াট কমন মিসটেইক শুড লার্নার্স অ্যাভয়েড?"
            },
            {
                "id": "8",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Never translate literally word for word from Bengali; use native phrases!",
                "bn": "কখনো বাংলা থেকে হুবহু শব্দ ধরে ধরে অনুবাদ করবেন না; স্বাভাবিক নেটিভ ফ্রেজ ব্যবহার করুন!",
                "ipa": "/ˈnevə trænzˈleɪt ˈlɪtərəli wɜːd fɔː wɜːd juːz ˈneɪtɪv freɪzɪz/",
                "bn_pron": "নেভার ট্রান্সলেইট লিটারালি ওয়ার্ড ফর ওয়ার্ড; ইউয নেইটিভ ফ্রেজেস!"
            },
            {
                "id": "9",
                "speaker": "Speaker A",
                "role": "A",
                "en": "That is golden advice. Daily practice makes fluent speakers.",
                "bn": "এটি অমূল্য পরামর্শ। নিয়মিত চর্চাতেই অনর্গল কথা বলা সম্ভব।",
                "ipa": "/ðæt ɪz ˈɡəʊldən ədˈvaɪs ˈdeɪli ˈpræktɪs meɪks ˈfluːənt/",
                "bn_pron": "দ্যাট ইয গোল্ডেন অ্যাডভাইস। ডেইলি প্র্যাকটিস মেইকস ফ্লুয়েন্ট।"
            },
            {
                "id": "10",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Absolutely! Repetition guarantees effortless conversational confidence.",
                "bn": "একদমই তাই! বারবার বলা নিশ্চিতভাবেই অনর্গল সাবলীলতা এনে দেয়।",
                "ipa": "/ˌæbsəˈluːtli ˌrepəˈtɪʃn ˌɡærənˈtiːz ˈkɒnfɪdəns/",
                "bn_pron": "অ্যাবসলিউটলি! রিপিটিশন গ্যারান্টিয কনফিডেন্স।"
            }
        ],
        "followUps": [
            {
                "en": "Could you elaborate on the key points, please?",
                "bn": "প্রধান বিষয়গুলো কি একটু বিস্তারিত বলবেন, প্লিজ?"
            },
            {
                "en": "How do you usually handle unexpected challenges here?",
                "bn": "এখানে কোনো অপ্রত্যাশিত পরিস্থিতি সৃষ্টি হলে কীভাবে সামলান?"
            },
            {
                "en": "Would tomorrow be a good time to follow up on this?",
                "bn": "আগামীকাল কি বিষয়টি নিয়ে আবার কথা বলা সুবিধার হবে?"
            }
        ],
        "closers": [
            {
                "en": "Thank you so much for your valuable time and cooperation!",
                "bn": "আপনার মূল্যবান সময় ও সহযোগিতার জন্য অনেক ধন্যবাদ!"
            },
            {
                "en": "I truly appreciate your kind help. Have a wonderful day!",
                "bn": "আপনার আন্তরিক সহায়তার জন্য কৃতজ্ঞতা জানাচ্ছি। দিনটি সুন্দর কাটুক!"
            },
            {
                "en": "Let's stay in touch and coordinate soon. Take care!",
                "bn": "যোগাযোগে থাকব এবং দ্রুতই আপডেট দেব। ভালো থাকবেন!"
            }
        ],
        "nativePhrases": [
            {
                "phrase": "Make complete sense",
                "meaning": "সম্পূর্ণ যুক্তিযুক্ত ও বোধগম্য হওয়া",
                "context": "কারো বক্তব্যে সহমত জানাতে নেটিভদের সবচেয়ে প্রিয় ফ্রেজ।"
            },
            {
                "phrase": "Without hesitation",
                "meaning": "দ্বিধা বা ভয় ছাড়া নিঃসঙ্কোচে",
                "context": "আত্মবিশ্বাসের সাথে কোনো কাজ করার ক্ষেত্রে।"
            },
            {
                "phrase": "Stay in touch",
                "meaning": "নিয়মিত যোগাযোগ বজায় রাখা",
                "context": "বিদায়ের সময় সম্মানজনক অনুরোধ হিসেবে।"
            }
        ]
    },
    {
        "id": "conv-13-making-an-appointment-over-phone",
        "number": 13,
        "title": "Making an Appointment over Phone",
        "titleBn": "ফোনে ডাক্তার বা কাজের অ্যাপয়েন্টমেন্ট নেওয়া",
        "level": "Easy",
        "category": "Services",
        "sceneDescription": "ফোনে ডাক্তার বা কাজের অ্যাপয়েন্টমেন্ট নেওয়া সংক্রান্ত বাস্তব কথোপকথন এবং প্রয়োজনীয় বাক্যসমূহ।",
        "starters": [
            {
                "en": "Hello! Could you help me regarding making an appointment over phone?",
                "bn": "হ্যালো! এই বিষয়ে কি আমাকে একটু সহায়তা করতে পারেন?",
                "tip": "কথা শুরু করার সবচেয়ে কার্যকর ও শিষ্ট উপায়।"
            },
            {
                "en": "Excuse me, do you have a quick moment to discuss this?",
                "bn": "মাফ করবেন, এই বিষয়ে কথা বলার মতো কি সামান্য সময় হবে?",
                "tip": "নম্রভাবে সম্মতি নেওয়ার বাক্য।"
            },
            {
                "en": "Hi there, I was wondering if we could talk about this.",
                "bn": "হাই, আমি ভাবছিলাম আমরা কি বিষয়টি নিয়ে একটু কথা বলতে পারি?",
                "tip": "অতি ভদ্র ও প্রফেশনাল ভূমিকা।"
            }
        ],
        "dialogue": [
            {
                "id": "1",
                "speaker": "Speaker A",
                "role": "A",
                "en": "Hello, how are you doing today? We are focusing on making an appointment over phone.",
                "bn": "হ্যালো, আপনি কেমন আছেন? আমরা আজ ফোনে ডাক্তার বা কাজের অ্যাপয়েন্টমেন্ট নেওয়া নিয়ে কথা বলছি।",
                "ipa": "/həˈləʊ haʊ ɑː juː ˈduːɪŋ təˈdeɪ/",
                "bn_pron": "হ্যালো, হাউ আ ইউ ডুয়িং টুডেই?"
            },
            {
                "id": "2",
                "speaker": "Speaker B",
                "role": "B",
                "en": "I'm doing well, thank you! It's an essential scenario to practice.",
                "bn": "আমি ভালো আছি, ধন্যবাদ! এটি চর্চা করার মতো খুবই দরকারি একটি দৃশ্যপট।",
                "ipa": "/aɪm ˈduːɪŋ wel θæŋk juː ɪts ən ɪˈsenʃl sɪˈnɑːriəʊ/",
                "bn_pron": "আইম ডুয়িং ওয়েল, থ্যাংক ইউ! ইটস অ্যান এসেনশিয়াল সিনারিও।"
            },
            {
                "id": "3",
                "speaker": "Speaker A",
                "role": "A",
                "en": "Could you tell me how you usually approach this situation?",
                "bn": "আপনি সাধারণত এই পরিস্থিতিতে কীভাবে কথা শুরু করেন?",
                "ipa": "/kʊd juː tel miː haʊ juː ˈjuːʒʊəli əˈprəʊtʃ/",
                "bn_pron": "কুড ইউ টেল মি হাউ ইউ ইউজুয়ালি অ্যাপ্রোচ?"
            },
            {
                "id": "4",
                "speaker": "Speaker B",
                "role": "B",
                "en": "I always start politely with a clear greeting and simple question.",
                "bn": "আমি সবসময় একটি সুন্দর সম্ভাষণ ও সহজ প্রশ্ন দিয়ে বিনয়ের সাথে শুরু করি।",
                "ipa": "/aɪ ˈɔːlweɪz stɑːt pəˈlaɪtli wɪð ə klɪə ˈɡriːtɪŋ/",
                "bn_pron": "আই অলওয়েজ স্টার্ট পোলাইটলি উইথ আ ক্লিয়ার গ্রীটিং।"
            },
            {
                "id": "5",
                "speaker": "Speaker A",
                "role": "A",
                "en": "That makes complete sense! Clarity and confidence make a huge difference.",
                "bn": "একদম যথার্থ! স্পষ্টতা ও আত্মবিশ্বাস অনেক বড় ইতিবাচক পরিবর্তন আনে।",
                "ipa": "/ðæt meɪks kəmˈpliːt sens ˈklærəti ænd ˈkɒnfɪdəns/",
                "bn_pron": "দ্যাট মেইকস কমপ্লিট সেন্স! ক্ল্যারিটি অ্যান্ড কনফিডেন্স।"
            },
            {
                "id": "6",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Exactly. And active listening helps in responding naturally without hesitation.",
                "bn": "ঠিক তাই। আর মনোযোগ দিয়ে শুনলে দ্বিধাহীনভাবে স্বাভাবিক উত্তর দেওয়া সম্ভব হয়।",
                "ipa": "/ɪɡˈzæktli ænd ˈæktɪv ˈlɪsnɪŋ helps ɪn rɪˈspɒndɪŋ ˈnætʃrəli/",
                "bn_pron": "এক্স্যাক্টলি। অ্যান্ড অ্যাকটিভ লিসেনিং হেল্পস ইন রেসপন্ডিং ন্যাচারালি।"
            },
            {
                "id": "7",
                "speaker": "Speaker A",
                "role": "A",
                "en": "What common mistake should learners avoid in this situation?",
                "bn": "এই পরিস্থিতিতে শিক্ষার্থীদের কোন সাধারণ ভুলটি এড়িয়ে চলা উচিত?",
                "ipa": "/wɒt ˈkɒmən mɪˈsteɪk ʃʊd ˈlɜːnəz əˈvɔɪd/",
                "bn_pron": "ওয়াট কমন মিসটেইক শুড লার্নার্স অ্যাভয়েড?"
            },
            {
                "id": "8",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Never translate literally word for word from Bengali; use native phrases!",
                "bn": "কখনো বাংলা থেকে হুবহু শব্দ ধরে ধরে অনুবাদ করবেন না; স্বাভাবিক নেটিভ ফ্রেজ ব্যবহার করুন!",
                "ipa": "/ˈnevə trænzˈleɪt ˈlɪtərəli wɜːd fɔː wɜːd juːz ˈneɪtɪv freɪzɪz/",
                "bn_pron": "নেভার ট্রান্সলেইট লিটারালি ওয়ার্ড ফর ওয়ার্ড; ইউয নেইটিভ ফ্রেজেস!"
            },
            {
                "id": "9",
                "speaker": "Speaker A",
                "role": "A",
                "en": "That is golden advice. Daily practice makes fluent speakers.",
                "bn": "এটি অমূল্য পরামর্শ। নিয়মিত চর্চাতেই অনর্গল কথা বলা সম্ভব।",
                "ipa": "/ðæt ɪz ˈɡəʊldən ədˈvaɪs ˈdeɪli ˈpræktɪs meɪks ˈfluːənt/",
                "bn_pron": "দ্যাট ইয গোল্ডেন অ্যাডভাইস। ডেইলি প্র্যাকটিস মেইকস ফ্লুয়েন্ট।"
            },
            {
                "id": "10",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Absolutely! Repetition guarantees effortless conversational confidence.",
                "bn": "একদমই তাই! বারবার বলা নিশ্চিতভাবেই অনর্গল সাবলীলতা এনে দেয়।",
                "ipa": "/ˌæbsəˈluːtli ˌrepəˈtɪʃn ˌɡærənˈtiːz ˈkɒnfɪdəns/",
                "bn_pron": "অ্যাবসলিউটলি! রিপিটিশন গ্যারান্টিয কনফিডেন্স।"
            }
        ],
        "followUps": [
            {
                "en": "Could you elaborate on the key points, please?",
                "bn": "প্রধান বিষয়গুলো কি একটু বিস্তারিত বলবেন, প্লিজ?"
            },
            {
                "en": "How do you usually handle unexpected challenges here?",
                "bn": "এখানে কোনো অপ্রত্যাশিত পরিস্থিতি সৃষ্টি হলে কীভাবে সামলান?"
            },
            {
                "en": "Would tomorrow be a good time to follow up on this?",
                "bn": "আগামীকাল কি বিষয়টি নিয়ে আবার কথা বলা সুবিধার হবে?"
            }
        ],
        "closers": [
            {
                "en": "Thank you so much for your valuable time and cooperation!",
                "bn": "আপনার মূল্যবান সময় ও সহযোগিতার জন্য অনেক ধন্যবাদ!"
            },
            {
                "en": "I truly appreciate your kind help. Have a wonderful day!",
                "bn": "আপনার আন্তরিক সহায়তার জন্য কৃতজ্ঞতা জানাচ্ছি। দিনটি সুন্দর কাটুক!"
            },
            {
                "en": "Let's stay in touch and coordinate soon. Take care!",
                "bn": "যোগাযোগে থাকব এবং দ্রুতই আপডেট দেব। ভালো থাকবেন!"
            }
        ],
        "nativePhrases": [
            {
                "phrase": "Make complete sense",
                "meaning": "সম্পূর্ণ যুক্তিযুক্ত ও বোধগম্য হওয়া",
                "context": "কারো বক্তব্যে সহমত জানাতে নেটিভদের সবচেয়ে প্রিয় ফ্রেজ।"
            },
            {
                "phrase": "Without hesitation",
                "meaning": "দ্বিধা বা ভয় ছাড়া নিঃসঙ্কোচে",
                "context": "আত্মবিশ্বাসের সাথে কোনো কাজ করার ক্ষেত্রে।"
            },
            {
                "phrase": "Stay in touch",
                "meaning": "নিয়মিত যোগাযোগ বজায় রাখা",
                "context": "বিদায়ের সময় সম্মানজনক অনুরোধ হিসেবে।"
            }
        ]
    },
    {
        "id": "conv-14-at-the-bank-opening-an-account",
        "number": 14,
        "title": "At the Bank: Opening an Account",
        "titleBn": "ব্যাংকে নতুন অ্যাকাউন্ট খোলা ও নিয়ম জানা",
        "level": "Easy",
        "category": "Services",
        "sceneDescription": "ব্যাংকে নতুন অ্যাকাউন্ট খোলা ও নিয়ম জানা সংক্রান্ত বাস্তব কথোপকথন এবং প্রয়োজনীয় বাক্যসমূহ।",
        "starters": [
            {
                "en": "Hello! Could you help me regarding at the bank: opening an account?",
                "bn": "হ্যালো! এই বিষয়ে কি আমাকে একটু সহায়তা করতে পারেন?",
                "tip": "কথা শুরু করার সবচেয়ে কার্যকর ও শিষ্ট উপায়।"
            },
            {
                "en": "Excuse me, do you have a quick moment to discuss this?",
                "bn": "মাফ করবেন, এই বিষয়ে কথা বলার মতো কি সামান্য সময় হবে?",
                "tip": "নম্রভাবে সম্মতি নেওয়ার বাক্য।"
            },
            {
                "en": "Hi there, I was wondering if we could talk about this.",
                "bn": "হাই, আমি ভাবছিলাম আমরা কি বিষয়টি নিয়ে একটু কথা বলতে পারি?",
                "tip": "অতি ভদ্র ও প্রফেশনাল ভূমিকা।"
            }
        ],
        "dialogue": [
            {
                "id": "1",
                "speaker": "Speaker A",
                "role": "A",
                "en": "Hello, how are you doing today? We are focusing on at the bank: opening an account.",
                "bn": "হ্যালো, আপনি কেমন আছেন? আমরা আজ ব্যাংকে নতুন অ্যাকাউন্ট খোলা ও নিয়ম জানা নিয়ে কথা বলছি।",
                "ipa": "/həˈləʊ haʊ ɑː juː ˈduːɪŋ təˈdeɪ/",
                "bn_pron": "হ্যালো, হাউ আ ইউ ডুয়িং টুডেই?"
            },
            {
                "id": "2",
                "speaker": "Speaker B",
                "role": "B",
                "en": "I'm doing well, thank you! It's an essential scenario to practice.",
                "bn": "আমি ভালো আছি, ধন্যবাদ! এটি চর্চা করার মতো খুবই দরকারি একটি দৃশ্যপট।",
                "ipa": "/aɪm ˈduːɪŋ wel θæŋk juː ɪts ən ɪˈsenʃl sɪˈnɑːriəʊ/",
                "bn_pron": "আইম ডুয়িং ওয়েল, থ্যাংক ইউ! ইটস অ্যান এসেনশিয়াল সিনারিও।"
            },
            {
                "id": "3",
                "speaker": "Speaker A",
                "role": "A",
                "en": "Could you tell me how you usually approach this situation?",
                "bn": "আপনি সাধারণত এই পরিস্থিতিতে কীভাবে কথা শুরু করেন?",
                "ipa": "/kʊd juː tel miː haʊ juː ˈjuːʒʊəli əˈprəʊtʃ/",
                "bn_pron": "কুড ইউ টেল মি হাউ ইউ ইউজুয়ালি অ্যাপ্রোচ?"
            },
            {
                "id": "4",
                "speaker": "Speaker B",
                "role": "B",
                "en": "I always start politely with a clear greeting and simple question.",
                "bn": "আমি সবসময় একটি সুন্দর সম্ভাষণ ও সহজ প্রশ্ন দিয়ে বিনয়ের সাথে শুরু করি।",
                "ipa": "/aɪ ˈɔːlweɪz stɑːt pəˈlaɪtli wɪð ə klɪə ˈɡriːtɪŋ/",
                "bn_pron": "আই অলওয়েজ স্টার্ট পোলাইটলি উইথ আ ক্লিয়ার গ্রীটিং।"
            },
            {
                "id": "5",
                "speaker": "Speaker A",
                "role": "A",
                "en": "That makes complete sense! Clarity and confidence make a huge difference.",
                "bn": "একদম যথার্থ! স্পষ্টতা ও আত্মবিশ্বাস অনেক বড় ইতিবাচক পরিবর্তন আনে।",
                "ipa": "/ðæt meɪks kəmˈpliːt sens ˈklærəti ænd ˈkɒnfɪdəns/",
                "bn_pron": "দ্যাট মেইকস কমপ্লিট সেন্স! ক্ল্যারিটি অ্যান্ড কনফিডেন্স।"
            },
            {
                "id": "6",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Exactly. And active listening helps in responding naturally without hesitation.",
                "bn": "ঠিক তাই। আর মনোযোগ দিয়ে শুনলে দ্বিধাহীনভাবে স্বাভাবিক উত্তর দেওয়া সম্ভব হয়।",
                "ipa": "/ɪɡˈzæktli ænd ˈæktɪv ˈlɪsnɪŋ helps ɪn rɪˈspɒndɪŋ ˈnætʃrəli/",
                "bn_pron": "এক্স্যাক্টলি। অ্যান্ড অ্যাকটিভ লিসেনিং হেল্পস ইন রেসপন্ডিং ন্যাচারালি।"
            },
            {
                "id": "7",
                "speaker": "Speaker A",
                "role": "A",
                "en": "What common mistake should learners avoid in this situation?",
                "bn": "এই পরিস্থিতিতে শিক্ষার্থীদের কোন সাধারণ ভুলটি এড়িয়ে চলা উচিত?",
                "ipa": "/wɒt ˈkɒmən mɪˈsteɪk ʃʊd ˈlɜːnəz əˈvɔɪd/",
                "bn_pron": "ওয়াট কমন মিসটেইক শুড লার্নার্স অ্যাভয়েড?"
            },
            {
                "id": "8",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Never translate literally word for word from Bengali; use native phrases!",
                "bn": "কখনো বাংলা থেকে হুবহু শব্দ ধরে ধরে অনুবাদ করবেন না; স্বাভাবিক নেটিভ ফ্রেজ ব্যবহার করুন!",
                "ipa": "/ˈnevə trænzˈleɪt ˈlɪtərəli wɜːd fɔː wɜːd juːz ˈneɪtɪv freɪzɪz/",
                "bn_pron": "নেভার ট্রান্সলেইট লিটারালি ওয়ার্ড ফর ওয়ার্ড; ইউয নেইটিভ ফ্রেজেস!"
            },
            {
                "id": "9",
                "speaker": "Speaker A",
                "role": "A",
                "en": "That is golden advice. Daily practice makes fluent speakers.",
                "bn": "এটি অমূল্য পরামর্শ। নিয়মিত চর্চাতেই অনর্গল কথা বলা সম্ভব।",
                "ipa": "/ðæt ɪz ˈɡəʊldən ədˈvaɪs ˈdeɪli ˈpræktɪs meɪks ˈfluːənt/",
                "bn_pron": "দ্যাট ইয গোল্ডেন অ্যাডভাইস। ডেইলি প্র্যাকটিস মেইকস ফ্লুয়েন্ট।"
            },
            {
                "id": "10",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Absolutely! Repetition guarantees effortless conversational confidence.",
                "bn": "একদমই তাই! বারবার বলা নিশ্চিতভাবেই অনর্গল সাবলীলতা এনে দেয়।",
                "ipa": "/ˌæbsəˈluːtli ˌrepəˈtɪʃn ˌɡærənˈtiːz ˈkɒnfɪdəns/",
                "bn_pron": "অ্যাবসলিউটলি! রিপিটিশন গ্যারান্টিয কনফিডেন্স।"
            }
        ],
        "followUps": [
            {
                "en": "Could you elaborate on the key points, please?",
                "bn": "প্রধান বিষয়গুলো কি একটু বিস্তারিত বলবেন, প্লিজ?"
            },
            {
                "en": "How do you usually handle unexpected challenges here?",
                "bn": "এখানে কোনো অপ্রত্যাশিত পরিস্থিতি সৃষ্টি হলে কীভাবে সামলান?"
            },
            {
                "en": "Would tomorrow be a good time to follow up on this?",
                "bn": "আগামীকাল কি বিষয়টি নিয়ে আবার কথা বলা সুবিধার হবে?"
            }
        ],
        "closers": [
            {
                "en": "Thank you so much for your valuable time and cooperation!",
                "bn": "আপনার মূল্যবান সময় ও সহযোগিতার জন্য অনেক ধন্যবাদ!"
            },
            {
                "en": "I truly appreciate your kind help. Have a wonderful day!",
                "bn": "আপনার আন্তরিক সহায়তার জন্য কৃতজ্ঞতা জানাচ্ছি। দিনটি সুন্দর কাটুক!"
            },
            {
                "en": "Let's stay in touch and coordinate soon. Take care!",
                "bn": "যোগাযোগে থাকব এবং দ্রুতই আপডেট দেব। ভালো থাকবেন!"
            }
        ],
        "nativePhrases": [
            {
                "phrase": "Make complete sense",
                "meaning": "সম্পূর্ণ যুক্তিযুক্ত ও বোধগম্য হওয়া",
                "context": "কারো বক্তব্যে সহমত জানাতে নেটিভদের সবচেয়ে প্রিয় ফ্রেজ।"
            },
            {
                "phrase": "Without hesitation",
                "meaning": "দ্বিধা বা ভয় ছাড়া নিঃসঙ্কোচে",
                "context": "আত্মবিশ্বাসের সাথে কোনো কাজ করার ক্ষেত্রে।"
            },
            {
                "phrase": "Stay in touch",
                "meaning": "নিয়মিত যোগাযোগ বজায় রাখা",
                "context": "বিদায়ের সময় সম্মানজনক অনুরোধ হিসেবে।"
            }
        ]
    },
    {
        "id": "conv-15-discussing-daily-weather-rain",
        "number": 15,
        "title": "Discussing Daily Weather & Rain",
        "titleBn": "আবহাওয়া ও বৃষ্টির পূর্বাভাস নিয়ে কথা",
        "level": "Easy",
        "category": "Daily Life",
        "sceneDescription": "আবহাওয়া ও বৃষ্টির পূর্বাভাস নিয়ে কথা সংক্রান্ত বাস্তব কথোপকথন এবং প্রয়োজনীয় বাক্যসমূহ।",
        "starters": [
            {
                "en": "Hello! Could you help me regarding discussing daily weather & rain?",
                "bn": "হ্যালো! এই বিষয়ে কি আমাকে একটু সহায়তা করতে পারেন?",
                "tip": "কথা শুরু করার সবচেয়ে কার্যকর ও শিষ্ট উপায়।"
            },
            {
                "en": "Excuse me, do you have a quick moment to discuss this?",
                "bn": "মাফ করবেন, এই বিষয়ে কথা বলার মতো কি সামান্য সময় হবে?",
                "tip": "নম্রভাবে সম্মতি নেওয়ার বাক্য।"
            },
            {
                "en": "Hi there, I was wondering if we could talk about this.",
                "bn": "হাই, আমি ভাবছিলাম আমরা কি বিষয়টি নিয়ে একটু কথা বলতে পারি?",
                "tip": "অতি ভদ্র ও প্রফেশনাল ভূমিকা।"
            }
        ],
        "dialogue": [
            {
                "id": "1",
                "speaker": "Speaker A",
                "role": "A",
                "en": "Hello, how are you doing today? We are focusing on discussing daily weather & rain.",
                "bn": "হ্যালো, আপনি কেমন আছেন? আমরা আজ আবহাওয়া ও বৃষ্টির পূর্বাভাস নিয়ে কথা নিয়ে কথা বলছি।",
                "ipa": "/həˈləʊ haʊ ɑː juː ˈduːɪŋ təˈdeɪ/",
                "bn_pron": "হ্যালো, হাউ আ ইউ ডুয়িং টুডেই?"
            },
            {
                "id": "2",
                "speaker": "Speaker B",
                "role": "B",
                "en": "I'm doing well, thank you! It's an essential scenario to practice.",
                "bn": "আমি ভালো আছি, ধন্যবাদ! এটি চর্চা করার মতো খুবই দরকারি একটি দৃশ্যপট।",
                "ipa": "/aɪm ˈduːɪŋ wel θæŋk juː ɪts ən ɪˈsenʃl sɪˈnɑːriəʊ/",
                "bn_pron": "আইম ডুয়িং ওয়েল, থ্যাংক ইউ! ইটস অ্যান এসেনশিয়াল সিনারিও।"
            },
            {
                "id": "3",
                "speaker": "Speaker A",
                "role": "A",
                "en": "Could you tell me how you usually approach this situation?",
                "bn": "আপনি সাধারণত এই পরিস্থিতিতে কীভাবে কথা শুরু করেন?",
                "ipa": "/kʊd juː tel miː haʊ juː ˈjuːʒʊəli əˈprəʊtʃ/",
                "bn_pron": "কুড ইউ টেল মি হাউ ইউ ইউজুয়ালি অ্যাপ্রোচ?"
            },
            {
                "id": "4",
                "speaker": "Speaker B",
                "role": "B",
                "en": "I always start politely with a clear greeting and simple question.",
                "bn": "আমি সবসময় একটি সুন্দর সম্ভাষণ ও সহজ প্রশ্ন দিয়ে বিনয়ের সাথে শুরু করি।",
                "ipa": "/aɪ ˈɔːlweɪz stɑːt pəˈlaɪtli wɪð ə klɪə ˈɡriːtɪŋ/",
                "bn_pron": "আই অলওয়েজ স্টার্ট পোলাইটলি উইথ আ ক্লিয়ার গ্রীটিং।"
            },
            {
                "id": "5",
                "speaker": "Speaker A",
                "role": "A",
                "en": "That makes complete sense! Clarity and confidence make a huge difference.",
                "bn": "একদম যথার্থ! স্পষ্টতা ও আত্মবিশ্বাস অনেক বড় ইতিবাচক পরিবর্তন আনে।",
                "ipa": "/ðæt meɪks kəmˈpliːt sens ˈklærəti ænd ˈkɒnfɪdəns/",
                "bn_pron": "দ্যাট মেইকস কমপ্লিট সেন্স! ক্ল্যারিটি অ্যান্ড কনফিডেন্স।"
            },
            {
                "id": "6",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Exactly. And active listening helps in responding naturally without hesitation.",
                "bn": "ঠিক তাই। আর মনোযোগ দিয়ে শুনলে দ্বিধাহীনভাবে স্বাভাবিক উত্তর দেওয়া সম্ভব হয়।",
                "ipa": "/ɪɡˈzæktli ænd ˈæktɪv ˈlɪsnɪŋ helps ɪn rɪˈspɒndɪŋ ˈnætʃrəli/",
                "bn_pron": "এক্স্যাক্টলি। অ্যান্ড অ্যাকটিভ লিসেনিং হেল্পস ইন রেসপন্ডিং ন্যাচারালি।"
            },
            {
                "id": "7",
                "speaker": "Speaker A",
                "role": "A",
                "en": "What common mistake should learners avoid in this situation?",
                "bn": "এই পরিস্থিতিতে শিক্ষার্থীদের কোন সাধারণ ভুলটি এড়িয়ে চলা উচিত?",
                "ipa": "/wɒt ˈkɒmən mɪˈsteɪk ʃʊd ˈlɜːnəz əˈvɔɪd/",
                "bn_pron": "ওয়াট কমন মিসটেইক শুড লার্নার্স অ্যাভয়েড?"
            },
            {
                "id": "8",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Never translate literally word for word from Bengali; use native phrases!",
                "bn": "কখনো বাংলা থেকে হুবহু শব্দ ধরে ধরে অনুবাদ করবেন না; স্বাভাবিক নেটিভ ফ্রেজ ব্যবহার করুন!",
                "ipa": "/ˈnevə trænzˈleɪt ˈlɪtərəli wɜːd fɔː wɜːd juːz ˈneɪtɪv freɪzɪz/",
                "bn_pron": "নেভার ট্রান্সলেইট লিটারালি ওয়ার্ড ফর ওয়ার্ড; ইউয নেইটিভ ফ্রেজেস!"
            },
            {
                "id": "9",
                "speaker": "Speaker A",
                "role": "A",
                "en": "That is golden advice. Daily practice makes fluent speakers.",
                "bn": "এটি অমূল্য পরামর্শ। নিয়মিত চর্চাতেই অনর্গল কথা বলা সম্ভব।",
                "ipa": "/ðæt ɪz ˈɡəʊldən ədˈvaɪs ˈdeɪli ˈpræktɪs meɪks ˈfluːənt/",
                "bn_pron": "দ্যাট ইয গোল্ডেন অ্যাডভাইস। ডেইলি প্র্যাকটিস মেইকস ফ্লুয়েন্ট।"
            },
            {
                "id": "10",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Absolutely! Repetition guarantees effortless conversational confidence.",
                "bn": "একদমই তাই! বারবার বলা নিশ্চিতভাবেই অনর্গল সাবলীলতা এনে দেয়।",
                "ipa": "/ˌæbsəˈluːtli ˌrepəˈtɪʃn ˌɡærənˈtiːz ˈkɒnfɪdəns/",
                "bn_pron": "অ্যাবসলিউটলি! রিপিটিশন গ্যারান্টিয কনফিডেন্স।"
            }
        ],
        "followUps": [
            {
                "en": "Could you elaborate on the key points, please?",
                "bn": "প্রধান বিষয়গুলো কি একটু বিস্তারিত বলবেন, প্লিজ?"
            },
            {
                "en": "How do you usually handle unexpected challenges here?",
                "bn": "এখানে কোনো অপ্রত্যাশিত পরিস্থিতি সৃষ্টি হলে কীভাবে সামলান?"
            },
            {
                "en": "Would tomorrow be a good time to follow up on this?",
                "bn": "আগামীকাল কি বিষয়টি নিয়ে আবার কথা বলা সুবিধার হবে?"
            }
        ],
        "closers": [
            {
                "en": "Thank you so much for your valuable time and cooperation!",
                "bn": "আপনার মূল্যবান সময় ও সহযোগিতার জন্য অনেক ধন্যবাদ!"
            },
            {
                "en": "I truly appreciate your kind help. Have a wonderful day!",
                "bn": "আপনার আন্তরিক সহায়তার জন্য কৃতজ্ঞতা জানাচ্ছি। দিনটি সুন্দর কাটুক!"
            },
            {
                "en": "Let's stay in touch and coordinate soon. Take care!",
                "bn": "যোগাযোগে থাকব এবং দ্রুতই আপডেট দেব। ভালো থাকবেন!"
            }
        ],
        "nativePhrases": [
            {
                "phrase": "Make complete sense",
                "meaning": "সম্পূর্ণ যুক্তিযুক্ত ও বোধগম্য হওয়া",
                "context": "কারো বক্তব্যে সহমত জানাতে নেটিভদের সবচেয়ে প্রিয় ফ্রেজ।"
            },
            {
                "phrase": "Without hesitation",
                "meaning": "দ্বিধা বা ভয় ছাড়া নিঃসঙ্কোচে",
                "context": "আত্মবিশ্বাসের সাথে কোনো কাজ করার ক্ষেত্রে।"
            },
            {
                "phrase": "Stay in touch",
                "meaning": "নিয়মিত যোগাযোগ বজায় রাখা",
                "context": "বিদায়ের সময় সম্মানজনক অনুরোধ হিসেবে।"
            }
        ]
    },
    {
        "id": "conv-16-buying-a-mobile-sim-data-plan",
        "number": 16,
        "title": "Buying a Mobile SIM & Data Plan",
        "titleBn": "মোবাইল সিম ও ইন্টারনেট প্যাকেজ কেনা",
        "level": "Easy",
        "category": "Services",
        "sceneDescription": "মোবাইল সিম ও ইন্টারনেট প্যাকেজ কেনা সংক্রান্ত বাস্তব কথোপকথন এবং প্রয়োজনীয় বাক্যসমূহ।",
        "starters": [
            {
                "en": "Hello! Could you help me regarding buying a mobile sim & data plan?",
                "bn": "হ্যালো! এই বিষয়ে কি আমাকে একটু সহায়তা করতে পারেন?",
                "tip": "কথা শুরু করার সবচেয়ে কার্যকর ও শিষ্ট উপায়।"
            },
            {
                "en": "Excuse me, do you have a quick moment to discuss this?",
                "bn": "মাফ করবেন, এই বিষয়ে কথা বলার মতো কি সামান্য সময় হবে?",
                "tip": "নম্রভাবে সম্মতি নেওয়ার বাক্য।"
            },
            {
                "en": "Hi there, I was wondering if we could talk about this.",
                "bn": "হাই, আমি ভাবছিলাম আমরা কি বিষয়টি নিয়ে একটু কথা বলতে পারি?",
                "tip": "অতি ভদ্র ও প্রফেশনাল ভূমিকা।"
            }
        ],
        "dialogue": [
            {
                "id": "1",
                "speaker": "Speaker A",
                "role": "A",
                "en": "Hello, how are you doing today? We are focusing on buying a mobile sim & data plan.",
                "bn": "হ্যালো, আপনি কেমন আছেন? আমরা আজ মোবাইল সিম ও ইন্টারনেট প্যাকেজ কেনা নিয়ে কথা বলছি।",
                "ipa": "/həˈləʊ haʊ ɑː juː ˈduːɪŋ təˈdeɪ/",
                "bn_pron": "হ্যালো, হাউ আ ইউ ডুয়িং টুডেই?"
            },
            {
                "id": "2",
                "speaker": "Speaker B",
                "role": "B",
                "en": "I'm doing well, thank you! It's an essential scenario to practice.",
                "bn": "আমি ভালো আছি, ধন্যবাদ! এটি চর্চা করার মতো খুবই দরকারি একটি দৃশ্যপট।",
                "ipa": "/aɪm ˈduːɪŋ wel θæŋk juː ɪts ən ɪˈsenʃl sɪˈnɑːriəʊ/",
                "bn_pron": "আইম ডুয়িং ওয়েল, থ্যাংক ইউ! ইটস অ্যান এসেনশিয়াল সিনারিও।"
            },
            {
                "id": "3",
                "speaker": "Speaker A",
                "role": "A",
                "en": "Could you tell me how you usually approach this situation?",
                "bn": "আপনি সাধারণত এই পরিস্থিতিতে কীভাবে কথা শুরু করেন?",
                "ipa": "/kʊd juː tel miː haʊ juː ˈjuːʒʊəli əˈprəʊtʃ/",
                "bn_pron": "কুড ইউ টেল মি হাউ ইউ ইউজুয়ালি অ্যাপ্রোচ?"
            },
            {
                "id": "4",
                "speaker": "Speaker B",
                "role": "B",
                "en": "I always start politely with a clear greeting and simple question.",
                "bn": "আমি সবসময় একটি সুন্দর সম্ভাষণ ও সহজ প্রশ্ন দিয়ে বিনয়ের সাথে শুরু করি।",
                "ipa": "/aɪ ˈɔːlweɪz stɑːt pəˈlaɪtli wɪð ə klɪə ˈɡriːtɪŋ/",
                "bn_pron": "আই অলওয়েজ স্টার্ট পোলাইটলি উইথ আ ক্লিয়ার গ্রীটিং।"
            },
            {
                "id": "5",
                "speaker": "Speaker A",
                "role": "A",
                "en": "That makes complete sense! Clarity and confidence make a huge difference.",
                "bn": "একদম যথার্থ! স্পষ্টতা ও আত্মবিশ্বাস অনেক বড় ইতিবাচক পরিবর্তন আনে।",
                "ipa": "/ðæt meɪks kəmˈpliːt sens ˈklærəti ænd ˈkɒnfɪdəns/",
                "bn_pron": "দ্যাট মেইকস কমপ্লিট সেন্স! ক্ল্যারিটি অ্যান্ড কনফিডেন্স।"
            },
            {
                "id": "6",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Exactly. And active listening helps in responding naturally without hesitation.",
                "bn": "ঠিক তাই। আর মনোযোগ দিয়ে শুনলে দ্বিধাহীনভাবে স্বাভাবিক উত্তর দেওয়া সম্ভব হয়।",
                "ipa": "/ɪɡˈzæktli ænd ˈæktɪv ˈlɪsnɪŋ helps ɪn rɪˈspɒndɪŋ ˈnætʃrəli/",
                "bn_pron": "এক্স্যাক্টলি। অ্যান্ড অ্যাকটিভ লিসেনিং হেল্পস ইন রেসপন্ডিং ন্যাচারালি।"
            },
            {
                "id": "7",
                "speaker": "Speaker A",
                "role": "A",
                "en": "What common mistake should learners avoid in this situation?",
                "bn": "এই পরিস্থিতিতে শিক্ষার্থীদের কোন সাধারণ ভুলটি এড়িয়ে চলা উচিত?",
                "ipa": "/wɒt ˈkɒmən mɪˈsteɪk ʃʊd ˈlɜːnəz əˈvɔɪd/",
                "bn_pron": "ওয়াট কমন মিসটেইক শুড লার্নার্স অ্যাভয়েড?"
            },
            {
                "id": "8",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Never translate literally word for word from Bengali; use native phrases!",
                "bn": "কখনো বাংলা থেকে হুবহু শব্দ ধরে ধরে অনুবাদ করবেন না; স্বাভাবিক নেটিভ ফ্রেজ ব্যবহার করুন!",
                "ipa": "/ˈnevə trænzˈleɪt ˈlɪtərəli wɜːd fɔː wɜːd juːz ˈneɪtɪv freɪzɪz/",
                "bn_pron": "নেভার ট্রান্সলেইট লিটারালি ওয়ার্ড ফর ওয়ার্ড; ইউয নেইটিভ ফ্রেজেস!"
            },
            {
                "id": "9",
                "speaker": "Speaker A",
                "role": "A",
                "en": "That is golden advice. Daily practice makes fluent speakers.",
                "bn": "এটি অমূল্য পরামর্শ। নিয়মিত চর্চাতেই অনর্গল কথা বলা সম্ভব।",
                "ipa": "/ðæt ɪz ˈɡəʊldən ədˈvaɪs ˈdeɪli ˈpræktɪs meɪks ˈfluːənt/",
                "bn_pron": "দ্যাট ইয গোল্ডেন অ্যাডভাইস। ডেইলি প্র্যাকটিস মেইকস ফ্লুয়েন্ট।"
            },
            {
                "id": "10",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Absolutely! Repetition guarantees effortless conversational confidence.",
                "bn": "একদমই তাই! বারবার বলা নিশ্চিতভাবেই অনর্গল সাবলীলতা এনে দেয়।",
                "ipa": "/ˌæbsəˈluːtli ˌrepəˈtɪʃn ˌɡærənˈtiːz ˈkɒnfɪdəns/",
                "bn_pron": "অ্যাবসলিউটলি! রিপিটিশন গ্যারান্টিয কনফিডেন্স।"
            }
        ],
        "followUps": [
            {
                "en": "Could you elaborate on the key points, please?",
                "bn": "প্রধান বিষয়গুলো কি একটু বিস্তারিত বলবেন, প্লিজ?"
            },
            {
                "en": "How do you usually handle unexpected challenges here?",
                "bn": "এখানে কোনো অপ্রত্যাশিত পরিস্থিতি সৃষ্টি হলে কীভাবে সামলান?"
            },
            {
                "en": "Would tomorrow be a good time to follow up on this?",
                "bn": "আগামীকাল কি বিষয়টি নিয়ে আবার কথা বলা সুবিধার হবে?"
            }
        ],
        "closers": [
            {
                "en": "Thank you so much for your valuable time and cooperation!",
                "bn": "আপনার মূল্যবান সময় ও সহযোগিতার জন্য অনেক ধন্যবাদ!"
            },
            {
                "en": "I truly appreciate your kind help. Have a wonderful day!",
                "bn": "আপনার আন্তরিক সহায়তার জন্য কৃতজ্ঞতা জানাচ্ছি। দিনটি সুন্দর কাটুক!"
            },
            {
                "en": "Let's stay in touch and coordinate soon. Take care!",
                "bn": "যোগাযোগে থাকব এবং দ্রুতই আপডেট দেব। ভালো থাকবেন!"
            }
        ],
        "nativePhrases": [
            {
                "phrase": "Make complete sense",
                "meaning": "সম্পূর্ণ যুক্তিযুক্ত ও বোধগম্য হওয়া",
                "context": "কারো বক্তব্যে সহমত জানাতে নেটিভদের সবচেয়ে প্রিয় ফ্রেজ।"
            },
            {
                "phrase": "Without hesitation",
                "meaning": "দ্বিধা বা ভয় ছাড়া নিঃসঙ্কোচে",
                "context": "আত্মবিশ্বাসের সাথে কোনো কাজ করার ক্ষেত্রে।"
            },
            {
                "phrase": "Stay in touch",
                "meaning": "নিয়মিত যোগাযোগ বজায় রাখা",
                "context": "বিদায়ের সময় সম্মানজনক অনুরোধ হিসেবে।"
            }
        ]
    },
    {
        "id": "conv-17-asking-a-colleague-for-work-advice",
        "number": 17,
        "title": "Asking a Colleague for Work Advice",
        "titleBn": "সহকর্মীর কাছে কাজের টেকনিক্যাল পরামর্শ চাওয়া",
        "level": "Easy",
        "category": "Professional",
        "sceneDescription": "সহকর্মীর কাছে কাজের টেকনিক্যাল পরামর্শ চাওয়া সংক্রান্ত বাস্তব কথোপকথন এবং প্রয়োজনীয় বাক্যসমূহ।",
        "starters": [
            {
                "en": "Hello! Could you help me regarding asking a colleague for work advice?",
                "bn": "হ্যালো! এই বিষয়ে কি আমাকে একটু সহায়তা করতে পারেন?",
                "tip": "কথা শুরু করার সবচেয়ে কার্যকর ও শিষ্ট উপায়।"
            },
            {
                "en": "Excuse me, do you have a quick moment to discuss this?",
                "bn": "মাফ করবেন, এই বিষয়ে কথা বলার মতো কি সামান্য সময় হবে?",
                "tip": "নম্রভাবে সম্মতি নেওয়ার বাক্য।"
            },
            {
                "en": "Hi there, I was wondering if we could talk about this.",
                "bn": "হাই, আমি ভাবছিলাম আমরা কি বিষয়টি নিয়ে একটু কথা বলতে পারি?",
                "tip": "অতি ভদ্র ও প্রফেশনাল ভূমিকা।"
            }
        ],
        "dialogue": [
            {
                "id": "1",
                "speaker": "Speaker A",
                "role": "A",
                "en": "Hello, how are you doing today? We are focusing on asking a colleague for work advice.",
                "bn": "হ্যালো, আপনি কেমন আছেন? আমরা আজ সহকর্মীর কাছে কাজের টেকনিক্যাল পরামর্শ চাওয়া নিয়ে কথা বলছি।",
                "ipa": "/həˈləʊ haʊ ɑː juː ˈduːɪŋ təˈdeɪ/",
                "bn_pron": "হ্যালো, হাউ আ ইউ ডুয়িং টুডেই?"
            },
            {
                "id": "2",
                "speaker": "Speaker B",
                "role": "B",
                "en": "I'm doing well, thank you! It's an essential scenario to practice.",
                "bn": "আমি ভালো আছি, ধন্যবাদ! এটি চর্চা করার মতো খুবই দরকারি একটি দৃশ্যপট।",
                "ipa": "/aɪm ˈduːɪŋ wel θæŋk juː ɪts ən ɪˈsenʃl sɪˈnɑːriəʊ/",
                "bn_pron": "আইম ডুয়িং ওয়েল, থ্যাংক ইউ! ইটস অ্যান এসেনশিয়াল সিনারিও।"
            },
            {
                "id": "3",
                "speaker": "Speaker A",
                "role": "A",
                "en": "Could you tell me how you usually approach this situation?",
                "bn": "আপনি সাধারণত এই পরিস্থিতিতে কীভাবে কথা শুরু করেন?",
                "ipa": "/kʊd juː tel miː haʊ juː ˈjuːʒʊəli əˈprəʊtʃ/",
                "bn_pron": "কুড ইউ টেল মি হাউ ইউ ইউজুয়ালি অ্যাপ্রোচ?"
            },
            {
                "id": "4",
                "speaker": "Speaker B",
                "role": "B",
                "en": "I always start politely with a clear greeting and simple question.",
                "bn": "আমি সবসময় একটি সুন্দর সম্ভাষণ ও সহজ প্রশ্ন দিয়ে বিনয়ের সাথে শুরু করি।",
                "ipa": "/aɪ ˈɔːlweɪz stɑːt pəˈlaɪtli wɪð ə klɪə ˈɡriːtɪŋ/",
                "bn_pron": "আই অলওয়েজ স্টার্ট পোলাইটলি উইথ আ ক্লিয়ার গ্রীটিং।"
            },
            {
                "id": "5",
                "speaker": "Speaker A",
                "role": "A",
                "en": "That makes complete sense! Clarity and confidence make a huge difference.",
                "bn": "একদম যথার্থ! স্পষ্টতা ও আত্মবিশ্বাস অনেক বড় ইতিবাচক পরিবর্তন আনে।",
                "ipa": "/ðæt meɪks kəmˈpliːt sens ˈklærəti ænd ˈkɒnfɪdəns/",
                "bn_pron": "দ্যাট মেইকস কমপ্লিট সেন্স! ক্ল্যারিটি অ্যান্ড কনফিডেন্স।"
            },
            {
                "id": "6",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Exactly. And active listening helps in responding naturally without hesitation.",
                "bn": "ঠিক তাই। আর মনোযোগ দিয়ে শুনলে দ্বিধাহীনভাবে স্বাভাবিক উত্তর দেওয়া সম্ভব হয়।",
                "ipa": "/ɪɡˈzæktli ænd ˈæktɪv ˈlɪsnɪŋ helps ɪn rɪˈspɒndɪŋ ˈnætʃrəli/",
                "bn_pron": "এক্স্যাক্টলি। অ্যান্ড অ্যাকটিভ লিসেনিং হেল্পস ইন রেসপন্ডিং ন্যাচারালি।"
            },
            {
                "id": "7",
                "speaker": "Speaker A",
                "role": "A",
                "en": "What common mistake should learners avoid in this situation?",
                "bn": "এই পরিস্থিতিতে শিক্ষার্থীদের কোন সাধারণ ভুলটি এড়িয়ে চলা উচিত?",
                "ipa": "/wɒt ˈkɒmən mɪˈsteɪk ʃʊd ˈlɜːnəz əˈvɔɪd/",
                "bn_pron": "ওয়াট কমন মিসটেইক শুড লার্নার্স অ্যাভয়েড?"
            },
            {
                "id": "8",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Never translate literally word for word from Bengali; use native phrases!",
                "bn": "কখনো বাংলা থেকে হুবহু শব্দ ধরে ধরে অনুবাদ করবেন না; স্বাভাবিক নেটিভ ফ্রেজ ব্যবহার করুন!",
                "ipa": "/ˈnevə trænzˈleɪt ˈlɪtərəli wɜːd fɔː wɜːd juːz ˈneɪtɪv freɪzɪz/",
                "bn_pron": "নেভার ট্রান্সলেইট লিটারালি ওয়ার্ড ফর ওয়ার্ড; ইউয নেইটিভ ফ্রেজেস!"
            },
            {
                "id": "9",
                "speaker": "Speaker A",
                "role": "A",
                "en": "That is golden advice. Daily practice makes fluent speakers.",
                "bn": "এটি অমূল্য পরামর্শ। নিয়মিত চর্চাতেই অনর্গল কথা বলা সম্ভব।",
                "ipa": "/ðæt ɪz ˈɡəʊldən ədˈvaɪs ˈdeɪli ˈpræktɪs meɪks ˈfluːənt/",
                "bn_pron": "দ্যাট ইয গোল্ডেন অ্যাডভাইস। ডেইলি প্র্যাকটিস মেইকস ফ্লুয়েন্ট।"
            },
            {
                "id": "10",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Absolutely! Repetition guarantees effortless conversational confidence.",
                "bn": "একদমই তাই! বারবার বলা নিশ্চিতভাবেই অনর্গল সাবলীলতা এনে দেয়।",
                "ipa": "/ˌæbsəˈluːtli ˌrepəˈtɪʃn ˌɡærənˈtiːz ˈkɒnfɪdəns/",
                "bn_pron": "অ্যাবসলিউটলি! রিপিটিশন গ্যারান্টিয কনফিডেন্স।"
            }
        ],
        "followUps": [
            {
                "en": "Could you elaborate on the key points, please?",
                "bn": "প্রধান বিষয়গুলো কি একটু বিস্তারিত বলবেন, প্লিজ?"
            },
            {
                "en": "How do you usually handle unexpected challenges here?",
                "bn": "এখানে কোনো অপ্রত্যাশিত পরিস্থিতি সৃষ্টি হলে কীভাবে সামলান?"
            },
            {
                "en": "Would tomorrow be a good time to follow up on this?",
                "bn": "আগামীকাল কি বিষয়টি নিয়ে আবার কথা বলা সুবিধার হবে?"
            }
        ],
        "closers": [
            {
                "en": "Thank you so much for your valuable time and cooperation!",
                "bn": "আপনার মূল্যবান সময় ও সহযোগিতার জন্য অনেক ধন্যবাদ!"
            },
            {
                "en": "I truly appreciate your kind help. Have a wonderful day!",
                "bn": "আপনার আন্তরিক সহায়তার জন্য কৃতজ্ঞতা জানাচ্ছি। দিনটি সুন্দর কাটুক!"
            },
            {
                "en": "Let's stay in touch and coordinate soon. Take care!",
                "bn": "যোগাযোগে থাকব এবং দ্রুতই আপডেট দেব। ভালো থাকবেন!"
            }
        ],
        "nativePhrases": [
            {
                "phrase": "Make complete sense",
                "meaning": "সম্পূর্ণ যুক্তিযুক্ত ও বোধগম্য হওয়া",
                "context": "কারো বক্তব্যে সহমত জানাতে নেটিভদের সবচেয়ে প্রিয় ফ্রেজ।"
            },
            {
                "phrase": "Without hesitation",
                "meaning": "দ্বিধা বা ভয় ছাড়া নিঃসঙ্কোচে",
                "context": "আত্মবিশ্বাসের সাথে কোনো কাজ করার ক্ষেত্রে।"
            },
            {
                "phrase": "Stay in touch",
                "meaning": "নিয়মিত যোগাযোগ বজায় রাখা",
                "context": "বিদায়ের সময় সম্মানজনক অনুরোধ হিসেবে।"
            }
        ]
    },
    {
        "id": "conv-18-inviting-a-friend-to-dinner-at-home",
        "number": 18,
        "title": "Inviting a Friend to Dinner at Home",
        "titleBn": "বন্ধুকে বাসায় রাতের খাবারের দাওয়াত দেওয়া",
        "level": "Easy",
        "category": "Social",
        "sceneDescription": "বন্ধুকে বাসায় রাতের খাবারের দাওয়াত দেওয়া সংক্রান্ত বাস্তব কথোপকথন এবং প্রয়োজনীয় বাক্যসমূহ।",
        "starters": [
            {
                "en": "Hello! Could you help me regarding inviting a friend to dinner at home?",
                "bn": "হ্যালো! এই বিষয়ে কি আমাকে একটু সহায়তা করতে পারেন?",
                "tip": "কথা শুরু করার সবচেয়ে কার্যকর ও শিষ্ট উপায়।"
            },
            {
                "en": "Excuse me, do you have a quick moment to discuss this?",
                "bn": "মাফ করবেন, এই বিষয়ে কথা বলার মতো কি সামান্য সময় হবে?",
                "tip": "নম্রভাবে সম্মতি নেওয়ার বাক্য।"
            },
            {
                "en": "Hi there, I was wondering if we could talk about this.",
                "bn": "হাই, আমি ভাবছিলাম আমরা কি বিষয়টি নিয়ে একটু কথা বলতে পারি?",
                "tip": "অতি ভদ্র ও প্রফেশনাল ভূমিকা।"
            }
        ],
        "dialogue": [
            {
                "id": "1",
                "speaker": "Speaker A",
                "role": "A",
                "en": "Hello, how are you doing today? We are focusing on inviting a friend to dinner at home.",
                "bn": "হ্যালো, আপনি কেমন আছেন? আমরা আজ বন্ধুকে বাসায় রাতের খাবারের দাওয়াত দেওয়া নিয়ে কথা বলছি।",
                "ipa": "/həˈləʊ haʊ ɑː juː ˈduːɪŋ təˈdeɪ/",
                "bn_pron": "হ্যালো, হাউ আ ইউ ডুয়িং টুডেই?"
            },
            {
                "id": "2",
                "speaker": "Speaker B",
                "role": "B",
                "en": "I'm doing well, thank you! It's an essential scenario to practice.",
                "bn": "আমি ভালো আছি, ধন্যবাদ! এটি চর্চা করার মতো খুবই দরকারি একটি দৃশ্যপট।",
                "ipa": "/aɪm ˈduːɪŋ wel θæŋk juː ɪts ən ɪˈsenʃl sɪˈnɑːriəʊ/",
                "bn_pron": "আইম ডুয়িং ওয়েল, থ্যাংক ইউ! ইটস অ্যান এসেনশিয়াল সিনারিও।"
            },
            {
                "id": "3",
                "speaker": "Speaker A",
                "role": "A",
                "en": "Could you tell me how you usually approach this situation?",
                "bn": "আপনি সাধারণত এই পরিস্থিতিতে কীভাবে কথা শুরু করেন?",
                "ipa": "/kʊd juː tel miː haʊ juː ˈjuːʒʊəli əˈprəʊtʃ/",
                "bn_pron": "কুড ইউ টেল মি হাউ ইউ ইউজুয়ালি অ্যাপ্রোচ?"
            },
            {
                "id": "4",
                "speaker": "Speaker B",
                "role": "B",
                "en": "I always start politely with a clear greeting and simple question.",
                "bn": "আমি সবসময় একটি সুন্দর সম্ভাষণ ও সহজ প্রশ্ন দিয়ে বিনয়ের সাথে শুরু করি।",
                "ipa": "/aɪ ˈɔːlweɪz stɑːt pəˈlaɪtli wɪð ə klɪə ˈɡriːtɪŋ/",
                "bn_pron": "আই অলওয়েজ স্টার্ট পোলাইটলি উইথ আ ক্লিয়ার গ্রীটিং।"
            },
            {
                "id": "5",
                "speaker": "Speaker A",
                "role": "A",
                "en": "That makes complete sense! Clarity and confidence make a huge difference.",
                "bn": "একদম যথার্থ! স্পষ্টতা ও আত্মবিশ্বাস অনেক বড় ইতিবাচক পরিবর্তন আনে।",
                "ipa": "/ðæt meɪks kəmˈpliːt sens ˈklærəti ænd ˈkɒnfɪdəns/",
                "bn_pron": "দ্যাট মেইকস কমপ্লিট সেন্স! ক্ল্যারিটি অ্যান্ড কনফিডেন্স।"
            },
            {
                "id": "6",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Exactly. And active listening helps in responding naturally without hesitation.",
                "bn": "ঠিক তাই। আর মনোযোগ দিয়ে শুনলে দ্বিধাহীনভাবে স্বাভাবিক উত্তর দেওয়া সম্ভব হয়।",
                "ipa": "/ɪɡˈzæktli ænd ˈæktɪv ˈlɪsnɪŋ helps ɪn rɪˈspɒndɪŋ ˈnætʃrəli/",
                "bn_pron": "এক্স্যাক্টলি। অ্যান্ড অ্যাকটিভ লিসেনিং হেল্পস ইন রেসপন্ডিং ন্যাচারালি।"
            },
            {
                "id": "7",
                "speaker": "Speaker A",
                "role": "A",
                "en": "What common mistake should learners avoid in this situation?",
                "bn": "এই পরিস্থিতিতে শিক্ষার্থীদের কোন সাধারণ ভুলটি এড়িয়ে চলা উচিত?",
                "ipa": "/wɒt ˈkɒmən mɪˈsteɪk ʃʊd ˈlɜːnəz əˈvɔɪd/",
                "bn_pron": "ওয়াট কমন মিসটেইক শুড লার্নার্স অ্যাভয়েড?"
            },
            {
                "id": "8",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Never translate literally word for word from Bengali; use native phrases!",
                "bn": "কখনো বাংলা থেকে হুবহু শব্দ ধরে ধরে অনুবাদ করবেন না; স্বাভাবিক নেটিভ ফ্রেজ ব্যবহার করুন!",
                "ipa": "/ˈnevə trænzˈleɪt ˈlɪtərəli wɜːd fɔː wɜːd juːz ˈneɪtɪv freɪzɪz/",
                "bn_pron": "নেভার ট্রান্সলেইট লিটারালি ওয়ার্ড ফর ওয়ার্ড; ইউয নেইটিভ ফ্রেজেস!"
            },
            {
                "id": "9",
                "speaker": "Speaker A",
                "role": "A",
                "en": "That is golden advice. Daily practice makes fluent speakers.",
                "bn": "এটি অমূল্য পরামর্শ। নিয়মিত চর্চাতেই অনর্গল কথা বলা সম্ভব।",
                "ipa": "/ðæt ɪz ˈɡəʊldən ədˈvaɪs ˈdeɪli ˈpræktɪs meɪks ˈfluːənt/",
                "bn_pron": "দ্যাট ইয গোল্ডেন অ্যাডভাইস। ডেইলি প্র্যাকটিস মেইকস ফ্লুয়েন্ট।"
            },
            {
                "id": "10",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Absolutely! Repetition guarantees effortless conversational confidence.",
                "bn": "একদমই তাই! বারবার বলা নিশ্চিতভাবেই অনর্গল সাবলীলতা এনে দেয়।",
                "ipa": "/ˌæbsəˈluːtli ˌrepəˈtɪʃn ˌɡærənˈtiːz ˈkɒnfɪdəns/",
                "bn_pron": "অ্যাবসলিউটলি! রিপিটিশন গ্যারান্টিয কনফিডেন্স।"
            }
        ],
        "followUps": [
            {
                "en": "Could you elaborate on the key points, please?",
                "bn": "প্রধান বিষয়গুলো কি একটু বিস্তারিত বলবেন, প্লিজ?"
            },
            {
                "en": "How do you usually handle unexpected challenges here?",
                "bn": "এখানে কোনো অপ্রত্যাশিত পরিস্থিতি সৃষ্টি হলে কীভাবে সামলান?"
            },
            {
                "en": "Would tomorrow be a good time to follow up on this?",
                "bn": "আগামীকাল কি বিষয়টি নিয়ে আবার কথা বলা সুবিধার হবে?"
            }
        ],
        "closers": [
            {
                "en": "Thank you so much for your valuable time and cooperation!",
                "bn": "আপনার মূল্যবান সময় ও সহযোগিতার জন্য অনেক ধন্যবাদ!"
            },
            {
                "en": "I truly appreciate your kind help. Have a wonderful day!",
                "bn": "আপনার আন্তরিক সহায়তার জন্য কৃতজ্ঞতা জানাচ্ছি। দিনটি সুন্দর কাটুক!"
            },
            {
                "en": "Let's stay in touch and coordinate soon. Take care!",
                "bn": "যোগাযোগে থাকব এবং দ্রুতই আপডেট দেব। ভালো থাকবেন!"
            }
        ],
        "nativePhrases": [
            {
                "phrase": "Make complete sense",
                "meaning": "সম্পূর্ণ যুক্তিযুক্ত ও বোধগম্য হওয়া",
                "context": "কারো বক্তব্যে সহমত জানাতে নেটিভদের সবচেয়ে প্রিয় ফ্রেজ।"
            },
            {
                "phrase": "Without hesitation",
                "meaning": "দ্বিধা বা ভয় ছাড়া নিঃসঙ্কোচে",
                "context": "আত্মবিশ্বাসের সাথে কোনো কাজ করার ক্ষেত্রে।"
            },
            {
                "phrase": "Stay in touch",
                "meaning": "নিয়মিত যোগাযোগ বজায় রাখা",
                "context": "বিদায়ের সময় সম্মানজনক অনুরোধ হিসেবে।"
            }
        ]
    },
    {
        "id": "conv-19-renting-an-apartment-house-viewing",
        "number": 19,
        "title": "Renting an Apartment / House Viewing",
        "titleBn": "ভাড়ার জন্য ফ্ল্যাট দেখতে যাওয়া ও চুক্তি জানা",
        "level": "Easy",
        "category": "Daily Life",
        "sceneDescription": "ভাড়ার জন্য ফ্ল্যাট দেখতে যাওয়া ও চুক্তি জানা সংক্রান্ত বাস্তব কথোপকথন এবং প্রয়োজনীয় বাক্যসমূহ।",
        "starters": [
            {
                "en": "Hello! Could you help me regarding renting an apartment / house viewing?",
                "bn": "হ্যালো! এই বিষয়ে কি আমাকে একটু সহায়তা করতে পারেন?",
                "tip": "কথা শুরু করার সবচেয়ে কার্যকর ও শিষ্ট উপায়।"
            },
            {
                "en": "Excuse me, do you have a quick moment to discuss this?",
                "bn": "মাফ করবেন, এই বিষয়ে কথা বলার মতো কি সামান্য সময় হবে?",
                "tip": "নম্রভাবে সম্মতি নেওয়ার বাক্য।"
            },
            {
                "en": "Hi there, I was wondering if we could talk about this.",
                "bn": "হাই, আমি ভাবছিলাম আমরা কি বিষয়টি নিয়ে একটু কথা বলতে পারি?",
                "tip": "অতি ভদ্র ও প্রফেশনাল ভূমিকা।"
            }
        ],
        "dialogue": [
            {
                "id": "1",
                "speaker": "Speaker A",
                "role": "A",
                "en": "Hello, how are you doing today? We are focusing on renting an apartment / house viewing.",
                "bn": "হ্যালো, আপনি কেমন আছেন? আমরা আজ ভাড়ার জন্য ফ্ল্যাট দেখতে যাওয়া ও চুক্তি জানা নিয়ে কথা বলছি।",
                "ipa": "/həˈləʊ haʊ ɑː juː ˈduːɪŋ təˈdeɪ/",
                "bn_pron": "হ্যালো, হাউ আ ইউ ডুয়িং টুডেই?"
            },
            {
                "id": "2",
                "speaker": "Speaker B",
                "role": "B",
                "en": "I'm doing well, thank you! It's an essential scenario to practice.",
                "bn": "আমি ভালো আছি, ধন্যবাদ! এটি চর্চা করার মতো খুবই দরকারি একটি দৃশ্যপট।",
                "ipa": "/aɪm ˈduːɪŋ wel θæŋk juː ɪts ən ɪˈsenʃl sɪˈnɑːriəʊ/",
                "bn_pron": "আইম ডুয়িং ওয়েল, থ্যাংক ইউ! ইটস অ্যান এসেনশিয়াল সিনারিও।"
            },
            {
                "id": "3",
                "speaker": "Speaker A",
                "role": "A",
                "en": "Could you tell me how you usually approach this situation?",
                "bn": "আপনি সাধারণত এই পরিস্থিতিতে কীভাবে কথা শুরু করেন?",
                "ipa": "/kʊd juː tel miː haʊ juː ˈjuːʒʊəli əˈprəʊtʃ/",
                "bn_pron": "কুড ইউ টেল মি হাউ ইউ ইউজুয়ালি অ্যাপ্রোচ?"
            },
            {
                "id": "4",
                "speaker": "Speaker B",
                "role": "B",
                "en": "I always start politely with a clear greeting and simple question.",
                "bn": "আমি সবসময় একটি সুন্দর সম্ভাষণ ও সহজ প্রশ্ন দিয়ে বিনয়ের সাথে শুরু করি।",
                "ipa": "/aɪ ˈɔːlweɪz stɑːt pəˈlaɪtli wɪð ə klɪə ˈɡriːtɪŋ/",
                "bn_pron": "আই অলওয়েজ স্টার্ট পোলাইটলি উইথ আ ক্লিয়ার গ্রীটিং।"
            },
            {
                "id": "5",
                "speaker": "Speaker A",
                "role": "A",
                "en": "That makes complete sense! Clarity and confidence make a huge difference.",
                "bn": "একদম যথার্থ! স্পষ্টতা ও আত্মবিশ্বাস অনেক বড় ইতিবাচক পরিবর্তন আনে।",
                "ipa": "/ðæt meɪks kəmˈpliːt sens ˈklærəti ænd ˈkɒnfɪdəns/",
                "bn_pron": "দ্যাট মেইকস কমপ্লিট সেন্স! ক্ল্যারিটি অ্যান্ড কনফিডেন্স।"
            },
            {
                "id": "6",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Exactly. And active listening helps in responding naturally without hesitation.",
                "bn": "ঠিক তাই। আর মনোযোগ দিয়ে শুনলে দ্বিধাহীনভাবে স্বাভাবিক উত্তর দেওয়া সম্ভব হয়।",
                "ipa": "/ɪɡˈzæktli ænd ˈæktɪv ˈlɪsnɪŋ helps ɪn rɪˈspɒndɪŋ ˈnætʃrəli/",
                "bn_pron": "এক্স্যাক্টলি। অ্যান্ড অ্যাকটিভ লিসেনিং হেল্পস ইন রেসপন্ডিং ন্যাচারালি।"
            },
            {
                "id": "7",
                "speaker": "Speaker A",
                "role": "A",
                "en": "What common mistake should learners avoid in this situation?",
                "bn": "এই পরিস্থিতিতে শিক্ষার্থীদের কোন সাধারণ ভুলটি এড়িয়ে চলা উচিত?",
                "ipa": "/wɒt ˈkɒmən mɪˈsteɪk ʃʊd ˈlɜːnəz əˈvɔɪd/",
                "bn_pron": "ওয়াট কমন মিসটেইক শুড লার্নার্স অ্যাভয়েড?"
            },
            {
                "id": "8",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Never translate literally word for word from Bengali; use native phrases!",
                "bn": "কখনো বাংলা থেকে হুবহু শব্দ ধরে ধরে অনুবাদ করবেন না; স্বাভাবিক নেটিভ ফ্রেজ ব্যবহার করুন!",
                "ipa": "/ˈnevə trænzˈleɪt ˈlɪtərəli wɜːd fɔː wɜːd juːz ˈneɪtɪv freɪzɪz/",
                "bn_pron": "নেভার ট্রান্সলেইট লিটারালি ওয়ার্ড ফর ওয়ার্ড; ইউয নেইটিভ ফ্রেজেস!"
            },
            {
                "id": "9",
                "speaker": "Speaker A",
                "role": "A",
                "en": "That is golden advice. Daily practice makes fluent speakers.",
                "bn": "এটি অমূল্য পরামর্শ। নিয়মিত চর্চাতেই অনর্গল কথা বলা সম্ভব।",
                "ipa": "/ðæt ɪz ˈɡəʊldən ədˈvaɪs ˈdeɪli ˈpræktɪs meɪks ˈfluːənt/",
                "bn_pron": "দ্যাট ইয গোল্ডেন অ্যাডভাইস। ডেইলি প্র্যাকটিস মেইকস ফ্লুয়েন্ট।"
            },
            {
                "id": "10",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Absolutely! Repetition guarantees effortless conversational confidence.",
                "bn": "একদমই তাই! বারবার বলা নিশ্চিতভাবেই অনর্গল সাবলীলতা এনে দেয়।",
                "ipa": "/ˌæbsəˈluːtli ˌrepəˈtɪʃn ˌɡærənˈtiːz ˈkɒnfɪdəns/",
                "bn_pron": "অ্যাবসলিউটলি! রিপিটিশন গ্যারান্টিয কনফিডেন্স।"
            }
        ],
        "followUps": [
            {
                "en": "Could you elaborate on the key points, please?",
                "bn": "প্রধান বিষয়গুলো কি একটু বিস্তারিত বলবেন, প্লিজ?"
            },
            {
                "en": "How do you usually handle unexpected challenges here?",
                "bn": "এখানে কোনো অপ্রত্যাশিত পরিস্থিতি সৃষ্টি হলে কীভাবে সামলান?"
            },
            {
                "en": "Would tomorrow be a good time to follow up on this?",
                "bn": "আগামীকাল কি বিষয়টি নিয়ে আবার কথা বলা সুবিধার হবে?"
            }
        ],
        "closers": [
            {
                "en": "Thank you so much for your valuable time and cooperation!",
                "bn": "আপনার মূল্যবান সময় ও সহযোগিতার জন্য অনেক ধন্যবাদ!"
            },
            {
                "en": "I truly appreciate your kind help. Have a wonderful day!",
                "bn": "আপনার আন্তরিক সহায়তার জন্য কৃতজ্ঞতা জানাচ্ছি। দিনটি সুন্দর কাটুক!"
            },
            {
                "en": "Let's stay in touch and coordinate soon. Take care!",
                "bn": "যোগাযোগে থাকব এবং দ্রুতই আপডেট দেব। ভালো থাকবেন!"
            }
        ],
        "nativePhrases": [
            {
                "phrase": "Make complete sense",
                "meaning": "সম্পূর্ণ যুক্তিযুক্ত ও বোধগম্য হওয়া",
                "context": "কারো বক্তব্যে সহমত জানাতে নেটিভদের সবচেয়ে প্রিয় ফ্রেজ।"
            },
            {
                "phrase": "Without hesitation",
                "meaning": "দ্বিধা বা ভয় ছাড়া নিঃসঙ্কোচে",
                "context": "আত্মবিশ্বাসের সাথে কোনো কাজ করার ক্ষেত্রে।"
            },
            {
                "phrase": "Stay in touch",
                "meaning": "নিয়মিত যোগাযোগ বজায় রাখা",
                "context": "বিদায়ের সময় সম্মানজনক অনুরোধ হিসেবে।"
            }
        ]
    },
    {
        "id": "conv-20-returning-a-defective-item-at-a-store",
        "number": 20,
        "title": "Returning a Defective Item at a Store",
        "titleBn": "দোকানে নষ্ট পণ্য বদলে নেওয়া বা রিফান্ড চাওয়া",
        "level": "Easy",
        "category": "Shopping",
        "sceneDescription": "দোকানে নষ্ট পণ্য বদলে নেওয়া বা রিফান্ড চাওয়া সংক্রান্ত বাস্তব কথোপকথন এবং প্রয়োজনীয় বাক্যসমূহ।",
        "starters": [
            {
                "en": "Hello! Could you help me regarding returning a defective item at a store?",
                "bn": "হ্যালো! এই বিষয়ে কি আমাকে একটু সহায়তা করতে পারেন?",
                "tip": "কথা শুরু করার সবচেয়ে কার্যকর ও শিষ্ট উপায়।"
            },
            {
                "en": "Excuse me, do you have a quick moment to discuss this?",
                "bn": "মাফ করবেন, এই বিষয়ে কথা বলার মতো কি সামান্য সময় হবে?",
                "tip": "নম্রভাবে সম্মতি নেওয়ার বাক্য।"
            },
            {
                "en": "Hi there, I was wondering if we could talk about this.",
                "bn": "হাই, আমি ভাবছিলাম আমরা কি বিষয়টি নিয়ে একটু কথা বলতে পারি?",
                "tip": "অতি ভদ্র ও প্রফেশনাল ভূমিকা।"
            }
        ],
        "dialogue": [
            {
                "id": "1",
                "speaker": "Speaker A",
                "role": "A",
                "en": "Hello, how are you doing today? We are focusing on returning a defective item at a store.",
                "bn": "হ্যালো, আপনি কেমন আছেন? আমরা আজ দোকানে নষ্ট পণ্য বদলে নেওয়া বা রিফান্ড চাওয়া নিয়ে কথা বলছি।",
                "ipa": "/həˈləʊ haʊ ɑː juː ˈduːɪŋ təˈdeɪ/",
                "bn_pron": "হ্যালো, হাউ আ ইউ ডুয়িং টুডেই?"
            },
            {
                "id": "2",
                "speaker": "Speaker B",
                "role": "B",
                "en": "I'm doing well, thank you! It's an essential scenario to practice.",
                "bn": "আমি ভালো আছি, ধন্যবাদ! এটি চর্চা করার মতো খুবই দরকারি একটি দৃশ্যপট।",
                "ipa": "/aɪm ˈduːɪŋ wel θæŋk juː ɪts ən ɪˈsenʃl sɪˈnɑːriəʊ/",
                "bn_pron": "আইম ডুয়িং ওয়েল, থ্যাংক ইউ! ইটস অ্যান এসেনশিয়াল সিনারিও।"
            },
            {
                "id": "3",
                "speaker": "Speaker A",
                "role": "A",
                "en": "Could you tell me how you usually approach this situation?",
                "bn": "আপনি সাধারণত এই পরিস্থিতিতে কীভাবে কথা শুরু করেন?",
                "ipa": "/kʊd juː tel miː haʊ juː ˈjuːʒʊəli əˈprəʊtʃ/",
                "bn_pron": "কুড ইউ টেল মি হাউ ইউ ইউজুয়ালি অ্যাপ্রোচ?"
            },
            {
                "id": "4",
                "speaker": "Speaker B",
                "role": "B",
                "en": "I always start politely with a clear greeting and simple question.",
                "bn": "আমি সবসময় একটি সুন্দর সম্ভাষণ ও সহজ প্রশ্ন দিয়ে বিনয়ের সাথে শুরু করি।",
                "ipa": "/aɪ ˈɔːlweɪz stɑːt pəˈlaɪtli wɪð ə klɪə ˈɡriːtɪŋ/",
                "bn_pron": "আই অলওয়েজ স্টার্ট পোলাইটলি উইথ আ ক্লিয়ার গ্রীটিং।"
            },
            {
                "id": "5",
                "speaker": "Speaker A",
                "role": "A",
                "en": "That makes complete sense! Clarity and confidence make a huge difference.",
                "bn": "একদম যথার্থ! স্পষ্টতা ও আত্মবিশ্বাস অনেক বড় ইতিবাচক পরিবর্তন আনে।",
                "ipa": "/ðæt meɪks kəmˈpliːt sens ˈklærəti ænd ˈkɒnfɪdəns/",
                "bn_pron": "দ্যাট মেইকস কমপ্লিট সেন্স! ক্ল্যারিটি অ্যান্ড কনফিডেন্স।"
            },
            {
                "id": "6",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Exactly. And active listening helps in responding naturally without hesitation.",
                "bn": "ঠিক তাই। আর মনোযোগ দিয়ে শুনলে দ্বিধাহীনভাবে স্বাভাবিক উত্তর দেওয়া সম্ভব হয়।",
                "ipa": "/ɪɡˈzæktli ænd ˈæktɪv ˈlɪsnɪŋ helps ɪn rɪˈspɒndɪŋ ˈnætʃrəli/",
                "bn_pron": "এক্স্যাক্টলি। অ্যান্ড অ্যাকটিভ লিসেনিং হেল্পস ইন রেসপন্ডিং ন্যাচারালি।"
            },
            {
                "id": "7",
                "speaker": "Speaker A",
                "role": "A",
                "en": "What common mistake should learners avoid in this situation?",
                "bn": "এই পরিস্থিতিতে শিক্ষার্থীদের কোন সাধারণ ভুলটি এড়িয়ে চলা উচিত?",
                "ipa": "/wɒt ˈkɒmən mɪˈsteɪk ʃʊd ˈlɜːnəz əˈvɔɪd/",
                "bn_pron": "ওয়াট কমন মিসটেইক শুড লার্নার্স অ্যাভয়েড?"
            },
            {
                "id": "8",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Never translate literally word for word from Bengali; use native phrases!",
                "bn": "কখনো বাংলা থেকে হুবহু শব্দ ধরে ধরে অনুবাদ করবেন না; স্বাভাবিক নেটিভ ফ্রেজ ব্যবহার করুন!",
                "ipa": "/ˈnevə trænzˈleɪt ˈlɪtərəli wɜːd fɔː wɜːd juːz ˈneɪtɪv freɪzɪz/",
                "bn_pron": "নেভার ট্রান্সলেইট লিটারালি ওয়ার্ড ফর ওয়ার্ড; ইউয নেইটিভ ফ্রেজেস!"
            },
            {
                "id": "9",
                "speaker": "Speaker A",
                "role": "A",
                "en": "That is golden advice. Daily practice makes fluent speakers.",
                "bn": "এটি অমূল্য পরামর্শ। নিয়মিত চর্চাতেই অনর্গল কথা বলা সম্ভব।",
                "ipa": "/ðæt ɪz ˈɡəʊldən ədˈvaɪs ˈdeɪli ˈpræktɪs meɪks ˈfluːənt/",
                "bn_pron": "দ্যাট ইয গোল্ডেন অ্যাডভাইস। ডেইলি প্র্যাকটিস মেইকস ফ্লুয়েন্ট।"
            },
            {
                "id": "10",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Absolutely! Repetition guarantees effortless conversational confidence.",
                "bn": "একদমই তাই! বারবার বলা নিশ্চিতভাবেই অনর্গল সাবলীলতা এনে দেয়।",
                "ipa": "/ˌæbsəˈluːtli ˌrepəˈtɪʃn ˌɡærənˈtiːz ˈkɒnfɪdəns/",
                "bn_pron": "অ্যাবসলিউটলি! রিপিটিশন গ্যারান্টিয কনফিডেন্স।"
            }
        ],
        "followUps": [
            {
                "en": "Could you elaborate on the key points, please?",
                "bn": "প্রধান বিষয়গুলো কি একটু বিস্তারিত বলবেন, প্লিজ?"
            },
            {
                "en": "How do you usually handle unexpected challenges here?",
                "bn": "এখানে কোনো অপ্রত্যাশিত পরিস্থিতি সৃষ্টি হলে কীভাবে সামলান?"
            },
            {
                "en": "Would tomorrow be a good time to follow up on this?",
                "bn": "আগামীকাল কি বিষয়টি নিয়ে আবার কথা বলা সুবিধার হবে?"
            }
        ],
        "closers": [
            {
                "en": "Thank you so much for your valuable time and cooperation!",
                "bn": "আপনার মূল্যবান সময় ও সহযোগিতার জন্য অনেক ধন্যবাদ!"
            },
            {
                "en": "I truly appreciate your kind help. Have a wonderful day!",
                "bn": "আপনার আন্তরিক সহায়তার জন্য কৃতজ্ঞতা জানাচ্ছি। দিনটি সুন্দর কাটুক!"
            },
            {
                "en": "Let's stay in touch and coordinate soon. Take care!",
                "bn": "যোগাযোগে থাকব এবং দ্রুতই আপডেট দেব। ভালো থাকবেন!"
            }
        ],
        "nativePhrases": [
            {
                "phrase": "Make complete sense",
                "meaning": "সম্পূর্ণ যুক্তিযুক্ত ও বোধগম্য হওয়া",
                "context": "কারো বক্তব্যে সহমত জানাতে নেটিভদের সবচেয়ে প্রিয় ফ্রেজ।"
            },
            {
                "phrase": "Without hesitation",
                "meaning": "দ্বিধা বা ভয় ছাড়া নিঃসঙ্কোচে",
                "context": "আত্মবিশ্বাসের সাথে কোনো কাজ করার ক্ষেত্রে।"
            },
            {
                "phrase": "Stay in touch",
                "meaning": "নিয়মিত যোগাযোগ বজায় রাখা",
                "context": "বিদায়ের সময় সম্মানজনক অনুরোধ হিসেবে।"
            }
        ]
    },
    {
        "id": "conv-21-job-interview-background-strengths",
        "number": 21,
        "title": "Job Interview: Background & Strengths",
        "titleBn": "চাকরির ইন্টারভিউ: নিজের দক্ষতা ও অভিজ্ঞতা তুলে ধরা",
        "level": "Intermediate",
        "category": "Professional",
        "sceneDescription": "চাকরির ইন্টারভিউ: নিজের দক্ষতা ও অভিজ্ঞতা তুলে ধরা সংক্রান্ত বাস্তব কথোপকথন এবং প্রয়োজনীয় বাক্যসমূহ।",
        "starters": [
            {
                "en": "Hello! Could you help me regarding job interview: background & strengths?",
                "bn": "হ্যালো! এই বিষয়ে কি আমাকে একটু সহায়তা করতে পারেন?",
                "tip": "কথা শুরু করার সবচেয়ে কার্যকর ও শিষ্ট উপায়।"
            },
            {
                "en": "Excuse me, do you have a quick moment to discuss this?",
                "bn": "মাফ করবেন, এই বিষয়ে কথা বলার মতো কি সামান্য সময় হবে?",
                "tip": "নম্রভাবে সম্মতি নেওয়ার বাক্য।"
            },
            {
                "en": "Hi there, I was wondering if we could talk about this.",
                "bn": "হাই, আমি ভাবছিলাম আমরা কি বিষয়টি নিয়ে একটু কথা বলতে পারি?",
                "tip": "অতি ভদ্র ও প্রফেশনাল ভূমিকা।"
            }
        ],
        "dialogue": [
            {
                "id": "1",
                "speaker": "Speaker A",
                "role": "A",
                "en": "Hello, how are you doing today? We are focusing on job interview: background & strengths.",
                "bn": "হ্যালো, আপনি কেমন আছেন? আমরা আজ চাকরির ইন্টারভিউ: নিজের দক্ষতা ও অভিজ্ঞতা তুলে ধরা নিয়ে কথা বলছি।",
                "ipa": "/həˈləʊ haʊ ɑː juː ˈduːɪŋ təˈdeɪ/",
                "bn_pron": "হ্যালো, হাউ আ ইউ ডুয়িং টুডেই?"
            },
            {
                "id": "2",
                "speaker": "Speaker B",
                "role": "B",
                "en": "I'm doing well, thank you! It's an essential scenario to practice.",
                "bn": "আমি ভালো আছি, ধন্যবাদ! এটি চর্চা করার মতো খুবই দরকারি একটি দৃশ্যপট।",
                "ipa": "/aɪm ˈduːɪŋ wel θæŋk juː ɪts ən ɪˈsenʃl sɪˈnɑːriəʊ/",
                "bn_pron": "আইম ডুয়িং ওয়েল, থ্যাংক ইউ! ইটস অ্যান এসেনশিয়াল সিনারিও।"
            },
            {
                "id": "3",
                "speaker": "Speaker A",
                "role": "A",
                "en": "Could you tell me how you usually approach this situation?",
                "bn": "আপনি সাধারণত এই পরিস্থিতিতে কীভাবে কথা শুরু করেন?",
                "ipa": "/kʊd juː tel miː haʊ juː ˈjuːʒʊəli əˈprəʊtʃ/",
                "bn_pron": "কুড ইউ টেল মি হাউ ইউ ইউজুয়ালি অ্যাপ্রোচ?"
            },
            {
                "id": "4",
                "speaker": "Speaker B",
                "role": "B",
                "en": "I always start politely with a clear greeting and simple question.",
                "bn": "আমি সবসময় একটি সুন্দর সম্ভাষণ ও সহজ প্রশ্ন দিয়ে বিনয়ের সাথে শুরু করি।",
                "ipa": "/aɪ ˈɔːlweɪz stɑːt pəˈlaɪtli wɪð ə klɪə ˈɡriːtɪŋ/",
                "bn_pron": "আই অলওয়েজ স্টার্ট পোলাইটলি উইথ আ ক্লিয়ার গ্রীটিং।"
            },
            {
                "id": "5",
                "speaker": "Speaker A",
                "role": "A",
                "en": "That makes complete sense! Clarity and confidence make a huge difference.",
                "bn": "একদম যথার্থ! স্পষ্টতা ও আত্মবিশ্বাস অনেক বড় ইতিবাচক পরিবর্তন আনে।",
                "ipa": "/ðæt meɪks kəmˈpliːt sens ˈklærəti ænd ˈkɒnfɪdəns/",
                "bn_pron": "দ্যাট মেইকস কমপ্লিট সেন্স! ক্ল্যারিটি অ্যান্ড কনফিডেন্স।"
            },
            {
                "id": "6",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Exactly. And active listening helps in responding naturally without hesitation.",
                "bn": "ঠিক তাই। আর মনোযোগ দিয়ে শুনলে দ্বিধাহীনভাবে স্বাভাবিক উত্তর দেওয়া সম্ভব হয়।",
                "ipa": "/ɪɡˈzæktli ænd ˈæktɪv ˈlɪsnɪŋ helps ɪn rɪˈspɒndɪŋ ˈnætʃrəli/",
                "bn_pron": "এক্স্যাক্টলি। অ্যান্ড অ্যাকটিভ লিসেনিং হেল্পস ইন রেসপন্ডিং ন্যাচারালি।"
            },
            {
                "id": "7",
                "speaker": "Speaker A",
                "role": "A",
                "en": "What common mistake should learners avoid in this situation?",
                "bn": "এই পরিস্থিতিতে শিক্ষার্থীদের কোন সাধারণ ভুলটি এড়িয়ে চলা উচিত?",
                "ipa": "/wɒt ˈkɒmən mɪˈsteɪk ʃʊd ˈlɜːnəz əˈvɔɪd/",
                "bn_pron": "ওয়াট কমন মিসটেইক শুড লার্নার্স অ্যাভয়েড?"
            },
            {
                "id": "8",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Never translate literally word for word from Bengali; use native phrases!",
                "bn": "কখনো বাংলা থেকে হুবহু শব্দ ধরে ধরে অনুবাদ করবেন না; স্বাভাবিক নেটিভ ফ্রেজ ব্যবহার করুন!",
                "ipa": "/ˈnevə trænzˈleɪt ˈlɪtərəli wɜːd fɔː wɜːd juːz ˈneɪtɪv freɪzɪz/",
                "bn_pron": "নেভার ট্রান্সলেইট লিটারালি ওয়ার্ড ফর ওয়ার্ড; ইউয নেইটিভ ফ্রেজেস!"
            },
            {
                "id": "9",
                "speaker": "Speaker A",
                "role": "A",
                "en": "That is golden advice. Daily practice makes fluent speakers.",
                "bn": "এটি অমূল্য পরামর্শ। নিয়মিত চর্চাতেই অনর্গল কথা বলা সম্ভব।",
                "ipa": "/ðæt ɪz ˈɡəʊldən ədˈvaɪs ˈdeɪli ˈpræktɪs meɪks ˈfluːənt/",
                "bn_pron": "দ্যাট ইয গোল্ডেন অ্যাডভাইস। ডেইলি প্র্যাকটিস মেইকস ফ্লুয়েন্ট।"
            },
            {
                "id": "10",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Absolutely! Repetition guarantees effortless conversational confidence.",
                "bn": "একদমই তাই! বারবার বলা নিশ্চিতভাবেই অনর্গল সাবলীলতা এনে দেয়।",
                "ipa": "/ˌæbsəˈluːtli ˌrepəˈtɪʃn ˌɡærənˈtiːz ˈkɒnfɪdəns/",
                "bn_pron": "অ্যাবসলিউটলি! রিপিটিশন গ্যারান্টিয কনফিডেন্স।"
            }
        ],
        "followUps": [
            {
                "en": "Could you elaborate on the key points, please?",
                "bn": "প্রধান বিষয়গুলো কি একটু বিস্তারিত বলবেন, প্লিজ?"
            },
            {
                "en": "How do you usually handle unexpected challenges here?",
                "bn": "এখানে কোনো অপ্রত্যাশিত পরিস্থিতি সৃষ্টি হলে কীভাবে সামলান?"
            },
            {
                "en": "Would tomorrow be a good time to follow up on this?",
                "bn": "আগামীকাল কি বিষয়টি নিয়ে আবার কথা বলা সুবিধার হবে?"
            }
        ],
        "closers": [
            {
                "en": "Thank you so much for your valuable time and cooperation!",
                "bn": "আপনার মূল্যবান সময় ও সহযোগিতার জন্য অনেক ধন্যবাদ!"
            },
            {
                "en": "I truly appreciate your kind help. Have a wonderful day!",
                "bn": "আপনার আন্তরিক সহায়তার জন্য কৃতজ্ঞতা জানাচ্ছি। দিনটি সুন্দর কাটুক!"
            },
            {
                "en": "Let's stay in touch and coordinate soon. Take care!",
                "bn": "যোগাযোগে থাকব এবং দ্রুতই আপডেট দেব। ভালো থাকবেন!"
            }
        ],
        "nativePhrases": [
            {
                "phrase": "Make complete sense",
                "meaning": "সম্পূর্ণ যুক্তিযুক্ত ও বোধগম্য হওয়া",
                "context": "কারো বক্তব্যে সহমত জানাতে নেটিভদের সবচেয়ে প্রিয় ফ্রেজ।"
            },
            {
                "phrase": "Without hesitation",
                "meaning": "দ্বিধা বা ভয় ছাড়া নিঃসঙ্কোচে",
                "context": "আত্মবিশ্বাসের সাথে কোনো কাজ করার ক্ষেত্রে।"
            },
            {
                "phrase": "Stay in touch",
                "meaning": "নিয়মিত যোগাযোগ বজায় রাখা",
                "context": "বিদায়ের সময় সম্মানজনক অনুরোধ হিসেবে।"
            }
        ]
    },
    {
        "id": "conv-22-office-meeting-presenting-project-ideas",
        "number": 22,
        "title": "Office Meeting: Presenting Project Ideas",
        "titleBn": "অফিস মিটিংয়ে নতুন প্রজেক্ট আইডিয়া উপস্থাপন",
        "level": "Intermediate",
        "category": "Professional",
        "sceneDescription": "অফিস মিটিংয়ে নতুন প্রজেক্ট আইডিয়া উপস্থাপন সংক্রান্ত বাস্তব কথোপকথন এবং প্রয়োজনীয় বাক্যসমূহ।",
        "starters": [
            {
                "en": "Hello! Could you help me regarding office meeting: presenting project ideas?",
                "bn": "হ্যালো! এই বিষয়ে কি আমাকে একটু সহায়তা করতে পারেন?",
                "tip": "কথা শুরু করার সবচেয়ে কার্যকর ও শিষ্ট উপায়।"
            },
            {
                "en": "Excuse me, do you have a quick moment to discuss this?",
                "bn": "মাফ করবেন, এই বিষয়ে কথা বলার মতো কি সামান্য সময় হবে?",
                "tip": "নম্রভাবে সম্মতি নেওয়ার বাক্য।"
            },
            {
                "en": "Hi there, I was wondering if we could talk about this.",
                "bn": "হাই, আমি ভাবছিলাম আমরা কি বিষয়টি নিয়ে একটু কথা বলতে পারি?",
                "tip": "অতি ভদ্র ও প্রফেশনাল ভূমিকা।"
            }
        ],
        "dialogue": [
            {
                "id": "1",
                "speaker": "Speaker A",
                "role": "A",
                "en": "Hello, how are you doing today? We are focusing on office meeting: presenting project ideas.",
                "bn": "হ্যালো, আপনি কেমন আছেন? আমরা আজ অফিস মিটিংয়ে নতুন প্রজেক্ট আইডিয়া উপস্থাপন নিয়ে কথা বলছি।",
                "ipa": "/həˈləʊ haʊ ɑː juː ˈduːɪŋ təˈdeɪ/",
                "bn_pron": "হ্যালো, হাউ আ ইউ ডুয়িং টুডেই?"
            },
            {
                "id": "2",
                "speaker": "Speaker B",
                "role": "B",
                "en": "I'm doing well, thank you! It's an essential scenario to practice.",
                "bn": "আমি ভালো আছি, ধন্যবাদ! এটি চর্চা করার মতো খুবই দরকারি একটি দৃশ্যপট।",
                "ipa": "/aɪm ˈduːɪŋ wel θæŋk juː ɪts ən ɪˈsenʃl sɪˈnɑːriəʊ/",
                "bn_pron": "আইম ডুয়িং ওয়েল, থ্যাংক ইউ! ইটস অ্যান এসেনশিয়াল সিনারিও।"
            },
            {
                "id": "3",
                "speaker": "Speaker A",
                "role": "A",
                "en": "Could you tell me how you usually approach this situation?",
                "bn": "আপনি সাধারণত এই পরিস্থিতিতে কীভাবে কথা শুরু করেন?",
                "ipa": "/kʊd juː tel miː haʊ juː ˈjuːʒʊəli əˈprəʊtʃ/",
                "bn_pron": "কুড ইউ টেল মি হাউ ইউ ইউজুয়ালি অ্যাপ্রোচ?"
            },
            {
                "id": "4",
                "speaker": "Speaker B",
                "role": "B",
                "en": "I always start politely with a clear greeting and simple question.",
                "bn": "আমি সবসময় একটি সুন্দর সম্ভাষণ ও সহজ প্রশ্ন দিয়ে বিনয়ের সাথে শুরু করি।",
                "ipa": "/aɪ ˈɔːlweɪz stɑːt pəˈlaɪtli wɪð ə klɪə ˈɡriːtɪŋ/",
                "bn_pron": "আই অলওয়েজ স্টার্ট পোলাইটলি উইথ আ ক্লিয়ার গ্রীটিং।"
            },
            {
                "id": "5",
                "speaker": "Speaker A",
                "role": "A",
                "en": "That makes complete sense! Clarity and confidence make a huge difference.",
                "bn": "একদম যথার্থ! স্পষ্টতা ও আত্মবিশ্বাস অনেক বড় ইতিবাচক পরিবর্তন আনে।",
                "ipa": "/ðæt meɪks kəmˈpliːt sens ˈklærəti ænd ˈkɒnfɪdəns/",
                "bn_pron": "দ্যাট মেইকস কমপ্লিট সেন্স! ক্ল্যারিটি অ্যান্ড কনফিডেন্স।"
            },
            {
                "id": "6",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Exactly. And active listening helps in responding naturally without hesitation.",
                "bn": "ঠিক তাই। আর মনোযোগ দিয়ে শুনলে দ্বিধাহীনভাবে স্বাভাবিক উত্তর দেওয়া সম্ভব হয়।",
                "ipa": "/ɪɡˈzæktli ænd ˈæktɪv ˈlɪsnɪŋ helps ɪn rɪˈspɒndɪŋ ˈnætʃrəli/",
                "bn_pron": "এক্স্যাক্টলি। অ্যান্ড অ্যাকটিভ লিসেনিং হেল্পস ইন রেসপন্ডিং ন্যাচারালি।"
            },
            {
                "id": "7",
                "speaker": "Speaker A",
                "role": "A",
                "en": "What common mistake should learners avoid in this situation?",
                "bn": "এই পরিস্থিতিতে শিক্ষার্থীদের কোন সাধারণ ভুলটি এড়িয়ে চলা উচিত?",
                "ipa": "/wɒt ˈkɒmən mɪˈsteɪk ʃʊd ˈlɜːnəz əˈvɔɪd/",
                "bn_pron": "ওয়াট কমন মিসটেইক শুড লার্নার্স অ্যাভয়েড?"
            },
            {
                "id": "8",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Never translate literally word for word from Bengali; use native phrases!",
                "bn": "কখনো বাংলা থেকে হুবহু শব্দ ধরে ধরে অনুবাদ করবেন না; স্বাভাবিক নেটিভ ফ্রেজ ব্যবহার করুন!",
                "ipa": "/ˈnevə trænzˈleɪt ˈlɪtərəli wɜːd fɔː wɜːd juːz ˈneɪtɪv freɪzɪz/",
                "bn_pron": "নেভার ট্রান্সলেইট লিটারালি ওয়ার্ড ফর ওয়ার্ড; ইউয নেইটিভ ফ্রেজেস!"
            },
            {
                "id": "9",
                "speaker": "Speaker A",
                "role": "A",
                "en": "That is golden advice. Daily practice makes fluent speakers.",
                "bn": "এটি অমূল্য পরামর্শ। নিয়মিত চর্চাতেই অনর্গল কথা বলা সম্ভব।",
                "ipa": "/ðæt ɪz ˈɡəʊldən ədˈvaɪs ˈdeɪli ˈpræktɪs meɪks ˈfluːənt/",
                "bn_pron": "দ্যাট ইয গোল্ডেন অ্যাডভাইস। ডেইলি প্র্যাকটিস মেইকস ফ্লুয়েন্ট।"
            },
            {
                "id": "10",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Absolutely! Repetition guarantees effortless conversational confidence.",
                "bn": "একদমই তাই! বারবার বলা নিশ্চিতভাবেই অনর্গল সাবলীলতা এনে দেয়।",
                "ipa": "/ˌæbsəˈluːtli ˌrepəˈtɪʃn ˌɡærənˈtiːz ˈkɒnfɪdəns/",
                "bn_pron": "অ্যাবসলিউটলি! রিপিটিশন গ্যারান্টিয কনফিডেন্স।"
            }
        ],
        "followUps": [
            {
                "en": "Could you elaborate on the key points, please?",
                "bn": "প্রধান বিষয়গুলো কি একটু বিস্তারিত বলবেন, প্লিজ?"
            },
            {
                "en": "How do you usually handle unexpected challenges here?",
                "bn": "এখানে কোনো অপ্রত্যাশিত পরিস্থিতি সৃষ্টি হলে কীভাবে সামলান?"
            },
            {
                "en": "Would tomorrow be a good time to follow up on this?",
                "bn": "আগামীকাল কি বিষয়টি নিয়ে আবার কথা বলা সুবিধার হবে?"
            }
        ],
        "closers": [
            {
                "en": "Thank you so much for your valuable time and cooperation!",
                "bn": "আপনার মূল্যবান সময় ও সহযোগিতার জন্য অনেক ধন্যবাদ!"
            },
            {
                "en": "I truly appreciate your kind help. Have a wonderful day!",
                "bn": "আপনার আন্তরিক সহায়তার জন্য কৃতজ্ঞতা জানাচ্ছি। দিনটি সুন্দর কাটুক!"
            },
            {
                "en": "Let's stay in touch and coordinate soon. Take care!",
                "bn": "যোগাযোগে থাকব এবং দ্রুতই আপডেট দেব। ভালো থাকবেন!"
            }
        ],
        "nativePhrases": [
            {
                "phrase": "Make complete sense",
                "meaning": "সম্পূর্ণ যুক্তিযুক্ত ও বোধগম্য হওয়া",
                "context": "কারো বক্তব্যে সহমত জানাতে নেটিভদের সবচেয়ে প্রিয় ফ্রেজ।"
            },
            {
                "phrase": "Without hesitation",
                "meaning": "দ্বিধা বা ভয় ছাড়া নিঃসঙ্কোচে",
                "context": "আত্মবিশ্বাসের সাথে কোনো কাজ করার ক্ষেত্রে।"
            },
            {
                "phrase": "Stay in touch",
                "meaning": "নিয়মিত যোগাযোগ বজায় রাখা",
                "context": "বিদায়ের সময় সম্মানজনক অনুরোধ হিসেবে।"
            }
        ]
    },
    {
        "id": "conv-23-polite-disagreement-in-a-meeting",
        "number": 23,
        "title": "Polite Disagreement in a Meeting",
        "titleBn": "ভদ্র ও যুক্তিপূর্ণভাবে দ্বিমত পোষণ করা",
        "level": "Intermediate",
        "category": "Professional",
        "sceneDescription": "ভদ্র ও যুক্তিপূর্ণভাবে দ্বিমত পোষণ করা সংক্রান্ত বাস্তব কথোপকথন এবং প্রয়োজনীয় বাক্যসমূহ।",
        "starters": [
            {
                "en": "Hello! Could you help me regarding polite disagreement in a meeting?",
                "bn": "হ্যালো! এই বিষয়ে কি আমাকে একটু সহায়তা করতে পারেন?",
                "tip": "কথা শুরু করার সবচেয়ে কার্যকর ও শিষ্ট উপায়।"
            },
            {
                "en": "Excuse me, do you have a quick moment to discuss this?",
                "bn": "মাফ করবেন, এই বিষয়ে কথা বলার মতো কি সামান্য সময় হবে?",
                "tip": "নম্রভাবে সম্মতি নেওয়ার বাক্য।"
            },
            {
                "en": "Hi there, I was wondering if we could talk about this.",
                "bn": "হাই, আমি ভাবছিলাম আমরা কি বিষয়টি নিয়ে একটু কথা বলতে পারি?",
                "tip": "অতি ভদ্র ও প্রফেশনাল ভূমিকা।"
            }
        ],
        "dialogue": [
            {
                "id": "1",
                "speaker": "Speaker A",
                "role": "A",
                "en": "Hello, how are you doing today? We are focusing on polite disagreement in a meeting.",
                "bn": "হ্যালো, আপনি কেমন আছেন? আমরা আজ ভদ্র ও যুক্তিপূর্ণভাবে দ্বিমত পোষণ করা নিয়ে কথা বলছি।",
                "ipa": "/həˈləʊ haʊ ɑː juː ˈduːɪŋ təˈdeɪ/",
                "bn_pron": "হ্যালো, হাউ আ ইউ ডুয়িং টুডেই?"
            },
            {
                "id": "2",
                "speaker": "Speaker B",
                "role": "B",
                "en": "I'm doing well, thank you! It's an essential scenario to practice.",
                "bn": "আমি ভালো আছি, ধন্যবাদ! এটি চর্চা করার মতো খুবই দরকারি একটি দৃশ্যপট।",
                "ipa": "/aɪm ˈduːɪŋ wel θæŋk juː ɪts ən ɪˈsenʃl sɪˈnɑːriəʊ/",
                "bn_pron": "আইম ডুয়িং ওয়েল, থ্যাংক ইউ! ইটস অ্যান এসেনশিয়াল সিনারিও।"
            },
            {
                "id": "3",
                "speaker": "Speaker A",
                "role": "A",
                "en": "Could you tell me how you usually approach this situation?",
                "bn": "আপনি সাধারণত এই পরিস্থিতিতে কীভাবে কথা শুরু করেন?",
                "ipa": "/kʊd juː tel miː haʊ juː ˈjuːʒʊəli əˈprəʊtʃ/",
                "bn_pron": "কুড ইউ টেল মি হাউ ইউ ইউজুয়ালি অ্যাপ্রোচ?"
            },
            {
                "id": "4",
                "speaker": "Speaker B",
                "role": "B",
                "en": "I always start politely with a clear greeting and simple question.",
                "bn": "আমি সবসময় একটি সুন্দর সম্ভাষণ ও সহজ প্রশ্ন দিয়ে বিনয়ের সাথে শুরু করি।",
                "ipa": "/aɪ ˈɔːlweɪz stɑːt pəˈlaɪtli wɪð ə klɪə ˈɡriːtɪŋ/",
                "bn_pron": "আই অলওয়েজ স্টার্ট পোলাইটলি উইথ আ ক্লিয়ার গ্রীটিং।"
            },
            {
                "id": "5",
                "speaker": "Speaker A",
                "role": "A",
                "en": "That makes complete sense! Clarity and confidence make a huge difference.",
                "bn": "একদম যথার্থ! স্পষ্টতা ও আত্মবিশ্বাস অনেক বড় ইতিবাচক পরিবর্তন আনে।",
                "ipa": "/ðæt meɪks kəmˈpliːt sens ˈklærəti ænd ˈkɒnfɪdəns/",
                "bn_pron": "দ্যাট মেইকস কমপ্লিট সেন্স! ক্ল্যারিটি অ্যান্ড কনফিডেন্স।"
            },
            {
                "id": "6",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Exactly. And active listening helps in responding naturally without hesitation.",
                "bn": "ঠিক তাই। আর মনোযোগ দিয়ে শুনলে দ্বিধাহীনভাবে স্বাভাবিক উত্তর দেওয়া সম্ভব হয়।",
                "ipa": "/ɪɡˈzæktli ænd ˈæktɪv ˈlɪsnɪŋ helps ɪn rɪˈspɒndɪŋ ˈnætʃrəli/",
                "bn_pron": "এক্স্যাক্টলি। অ্যান্ড অ্যাকটিভ লিসেনিং হেল্পস ইন রেসপন্ডিং ন্যাচারালি।"
            },
            {
                "id": "7",
                "speaker": "Speaker A",
                "role": "A",
                "en": "What common mistake should learners avoid in this situation?",
                "bn": "এই পরিস্থিতিতে শিক্ষার্থীদের কোন সাধারণ ভুলটি এড়িয়ে চলা উচিত?",
                "ipa": "/wɒt ˈkɒmən mɪˈsteɪk ʃʊd ˈlɜːnəz əˈvɔɪd/",
                "bn_pron": "ওয়াট কমন মিসটেইক শুড লার্নার্স অ্যাভয়েড?"
            },
            {
                "id": "8",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Never translate literally word for word from Bengali; use native phrases!",
                "bn": "কখনো বাংলা থেকে হুবহু শব্দ ধরে ধরে অনুবাদ করবেন না; স্বাভাবিক নেটিভ ফ্রেজ ব্যবহার করুন!",
                "ipa": "/ˈnevə trænzˈleɪt ˈlɪtərəli wɜːd fɔː wɜːd juːz ˈneɪtɪv freɪzɪz/",
                "bn_pron": "নেভার ট্রান্সলেইট লিটারালি ওয়ার্ড ফর ওয়ার্ড; ইউয নেইটিভ ফ্রেজেস!"
            },
            {
                "id": "9",
                "speaker": "Speaker A",
                "role": "A",
                "en": "That is golden advice. Daily practice makes fluent speakers.",
                "bn": "এটি অমূল্য পরামর্শ। নিয়মিত চর্চাতেই অনর্গল কথা বলা সম্ভব।",
                "ipa": "/ðæt ɪz ˈɡəʊldən ədˈvaɪs ˈdeɪli ˈpræktɪs meɪks ˈfluːənt/",
                "bn_pron": "দ্যাট ইয গোল্ডেন অ্যাডভাইস। ডেইলি প্র্যাকটিস মেইকস ফ্লুয়েন্ট।"
            },
            {
                "id": "10",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Absolutely! Repetition guarantees effortless conversational confidence.",
                "bn": "একদমই তাই! বারবার বলা নিশ্চিতভাবেই অনর্গল সাবলীলতা এনে দেয়।",
                "ipa": "/ˌæbsəˈluːtli ˌrepəˈtɪʃn ˌɡærənˈtiːz ˈkɒnfɪdəns/",
                "bn_pron": "অ্যাবসলিউটলি! রিপিটিশন গ্যারান্টিয কনফিডেন্স।"
            }
        ],
        "followUps": [
            {
                "en": "Could you elaborate on the key points, please?",
                "bn": "প্রধান বিষয়গুলো কি একটু বিস্তারিত বলবেন, প্লিজ?"
            },
            {
                "en": "How do you usually handle unexpected challenges here?",
                "bn": "এখানে কোনো অপ্রত্যাশিত পরিস্থিতি সৃষ্টি হলে কীভাবে সামলান?"
            },
            {
                "en": "Would tomorrow be a good time to follow up on this?",
                "bn": "আগামীকাল কি বিষয়টি নিয়ে আবার কথা বলা সুবিধার হবে?"
            }
        ],
        "closers": [
            {
                "en": "Thank you so much for your valuable time and cooperation!",
                "bn": "আপনার মূল্যবান সময় ও সহযোগিতার জন্য অনেক ধন্যবাদ!"
            },
            {
                "en": "I truly appreciate your kind help. Have a wonderful day!",
                "bn": "আপনার আন্তরিক সহায়তার জন্য কৃতজ্ঞতা জানাচ্ছি। দিনটি সুন্দর কাটুক!"
            },
            {
                "en": "Let's stay in touch and coordinate soon. Take care!",
                "bn": "যোগাযোগে থাকব এবং দ্রুতই আপডেট দেব। ভালো থাকবেন!"
            }
        ],
        "nativePhrases": [
            {
                "phrase": "Make complete sense",
                "meaning": "সম্পূর্ণ যুক্তিযুক্ত ও বোধগম্য হওয়া",
                "context": "কারো বক্তব্যে সহমত জানাতে নেটিভদের সবচেয়ে প্রিয় ফ্রেজ।"
            },
            {
                "phrase": "Without hesitation",
                "meaning": "দ্বিধা বা ভয় ছাড়া নিঃসঙ্কোচে",
                "context": "আত্মবিশ্বাসের সাথে কোনো কাজ করার ক্ষেত্রে।"
            },
            {
                "phrase": "Stay in touch",
                "meaning": "নিয়মিত যোগাযোগ বজায় রাখা",
                "context": "বিদায়ের সময় সম্মানজনক অনুরোধ হিসেবে।"
            }
        ]
    },
    {
        "id": "conv-24-airport-baggage-drop-boarding-pass",
        "number": 24,
        "title": "Airport: Baggage Drop & Boarding Pass",
        "titleBn": "এয়ারপোর্টে লাগেজ ড্রপ ও বোর্ডিং পাস সংগ্রহ",
        "level": "Intermediate",
        "category": "Travel",
        "sceneDescription": "এয়ারপোর্টে লাগেজ ড্রপ ও বোর্ডিং পাস সংগ্রহ সংক্রান্ত বাস্তব কথোপকথন এবং প্রয়োজনীয় বাক্যসমূহ।",
        "starters": [
            {
                "en": "Hello! Could you help me regarding airport: baggage drop & boarding pass?",
                "bn": "হ্যালো! এই বিষয়ে কি আমাকে একটু সহায়তা করতে পারেন?",
                "tip": "কথা শুরু করার সবচেয়ে কার্যকর ও শিষ্ট উপায়।"
            },
            {
                "en": "Excuse me, do you have a quick moment to discuss this?",
                "bn": "মাফ করবেন, এই বিষয়ে কথা বলার মতো কি সামান্য সময় হবে?",
                "tip": "নম্রভাবে সম্মতি নেওয়ার বাক্য।"
            },
            {
                "en": "Hi there, I was wondering if we could talk about this.",
                "bn": "হাই, আমি ভাবছিলাম আমরা কি বিষয়টি নিয়ে একটু কথা বলতে পারি?",
                "tip": "অতি ভদ্র ও প্রফেশনাল ভূমিকা।"
            }
        ],
        "dialogue": [
            {
                "id": "1",
                "speaker": "Speaker A",
                "role": "A",
                "en": "Hello, how are you doing today? We are focusing on airport: baggage drop & boarding pass.",
                "bn": "হ্যালো, আপনি কেমন আছেন? আমরা আজ এয়ারপোর্টে লাগেজ ড্রপ ও বোর্ডিং পাস সংগ্রহ নিয়ে কথা বলছি।",
                "ipa": "/həˈləʊ haʊ ɑː juː ˈduːɪŋ təˈdeɪ/",
                "bn_pron": "হ্যালো, হাউ আ ইউ ডুয়িং টুডেই?"
            },
            {
                "id": "2",
                "speaker": "Speaker B",
                "role": "B",
                "en": "I'm doing well, thank you! It's an essential scenario to practice.",
                "bn": "আমি ভালো আছি, ধন্যবাদ! এটি চর্চা করার মতো খুবই দরকারি একটি দৃশ্যপট।",
                "ipa": "/aɪm ˈduːɪŋ wel θæŋk juː ɪts ən ɪˈsenʃl sɪˈnɑːriəʊ/",
                "bn_pron": "আইম ডুয়িং ওয়েল, থ্যাংক ইউ! ইটস অ্যান এসেনশিয়াল সিনারিও।"
            },
            {
                "id": "3",
                "speaker": "Speaker A",
                "role": "A",
                "en": "Could you tell me how you usually approach this situation?",
                "bn": "আপনি সাধারণত এই পরিস্থিতিতে কীভাবে কথা শুরু করেন?",
                "ipa": "/kʊd juː tel miː haʊ juː ˈjuːʒʊəli əˈprəʊtʃ/",
                "bn_pron": "কুড ইউ টেল মি হাউ ইউ ইউজুয়ালি অ্যাপ্রোচ?"
            },
            {
                "id": "4",
                "speaker": "Speaker B",
                "role": "B",
                "en": "I always start politely with a clear greeting and simple question.",
                "bn": "আমি সবসময় একটি সুন্দর সম্ভাষণ ও সহজ প্রশ্ন দিয়ে বিনয়ের সাথে শুরু করি।",
                "ipa": "/aɪ ˈɔːlweɪz stɑːt pəˈlaɪtli wɪð ə klɪə ˈɡriːtɪŋ/",
                "bn_pron": "আই অলওয়েজ স্টার্ট পোলাইটলি উইথ আ ক্লিয়ার গ্রীটিং।"
            },
            {
                "id": "5",
                "speaker": "Speaker A",
                "role": "A",
                "en": "That makes complete sense! Clarity and confidence make a huge difference.",
                "bn": "একদম যথার্থ! স্পষ্টতা ও আত্মবিশ্বাস অনেক বড় ইতিবাচক পরিবর্তন আনে।",
                "ipa": "/ðæt meɪks kəmˈpliːt sens ˈklærəti ænd ˈkɒnfɪdəns/",
                "bn_pron": "দ্যাট মেইকস কমপ্লিট সেন্স! ক্ল্যারিটি অ্যান্ড কনফিডেন্স।"
            },
            {
                "id": "6",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Exactly. And active listening helps in responding naturally without hesitation.",
                "bn": "ঠিক তাই। আর মনোযোগ দিয়ে শুনলে দ্বিধাহীনভাবে স্বাভাবিক উত্তর দেওয়া সম্ভব হয়।",
                "ipa": "/ɪɡˈzæktli ænd ˈæktɪv ˈlɪsnɪŋ helps ɪn rɪˈspɒndɪŋ ˈnætʃrəli/",
                "bn_pron": "এক্স্যাক্টলি। অ্যান্ড অ্যাকটিভ লিসেনিং হেল্পস ইন রেসপন্ডিং ন্যাচারালি।"
            },
            {
                "id": "7",
                "speaker": "Speaker A",
                "role": "A",
                "en": "What common mistake should learners avoid in this situation?",
                "bn": "এই পরিস্থিতিতে শিক্ষার্থীদের কোন সাধারণ ভুলটি এড়িয়ে চলা উচিত?",
                "ipa": "/wɒt ˈkɒmən mɪˈsteɪk ʃʊd ˈlɜːnəz əˈvɔɪd/",
                "bn_pron": "ওয়াট কমন মিসটেইক শুড লার্নার্স অ্যাভয়েড?"
            },
            {
                "id": "8",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Never translate literally word for word from Bengali; use native phrases!",
                "bn": "কখনো বাংলা থেকে হুবহু শব্দ ধরে ধরে অনুবাদ করবেন না; স্বাভাবিক নেটিভ ফ্রেজ ব্যবহার করুন!",
                "ipa": "/ˈnevə trænzˈleɪt ˈlɪtərəli wɜːd fɔː wɜːd juːz ˈneɪtɪv freɪzɪz/",
                "bn_pron": "নেভার ট্রান্সলেইট লিটারালি ওয়ার্ড ফর ওয়ার্ড; ইউয নেইটিভ ফ্রেজেস!"
            },
            {
                "id": "9",
                "speaker": "Speaker A",
                "role": "A",
                "en": "That is golden advice. Daily practice makes fluent speakers.",
                "bn": "এটি অমূল্য পরামর্শ। নিয়মিত চর্চাতেই অনর্গল কথা বলা সম্ভব।",
                "ipa": "/ðæt ɪz ˈɡəʊldən ədˈvaɪs ˈdeɪli ˈpræktɪs meɪks ˈfluːənt/",
                "bn_pron": "দ্যাট ইয গোল্ডেন অ্যাডভাইস। ডেইলি প্র্যাকটিস মেইকস ফ্লুয়েন্ট।"
            },
            {
                "id": "10",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Absolutely! Repetition guarantees effortless conversational confidence.",
                "bn": "একদমই তাই! বারবার বলা নিশ্চিতভাবেই অনর্গল সাবলীলতা এনে দেয়।",
                "ipa": "/ˌæbsəˈluːtli ˌrepəˈtɪʃn ˌɡærənˈtiːz ˈkɒnfɪdəns/",
                "bn_pron": "অ্যাবসলিউটলি! রিপিটিশন গ্যারান্টিয কনফিডেন্স।"
            }
        ],
        "followUps": [
            {
                "en": "Could you elaborate on the key points, please?",
                "bn": "প্রধান বিষয়গুলো কি একটু বিস্তারিত বলবেন, প্লিজ?"
            },
            {
                "en": "How do you usually handle unexpected challenges here?",
                "bn": "এখানে কোনো অপ্রত্যাশিত পরিস্থিতি সৃষ্টি হলে কীভাবে সামলান?"
            },
            {
                "en": "Would tomorrow be a good time to follow up on this?",
                "bn": "আগামীকাল কি বিষয়টি নিয়ে আবার কথা বলা সুবিধার হবে?"
            }
        ],
        "closers": [
            {
                "en": "Thank you so much for your valuable time and cooperation!",
                "bn": "আপনার মূল্যবান সময় ও সহযোগিতার জন্য অনেক ধন্যবাদ!"
            },
            {
                "en": "I truly appreciate your kind help. Have a wonderful day!",
                "bn": "আপনার আন্তরিক সহায়তার জন্য কৃতজ্ঞতা জানাচ্ছি। দিনটি সুন্দর কাটুক!"
            },
            {
                "en": "Let's stay in touch and coordinate soon. Take care!",
                "bn": "যোগাযোগে থাকব এবং দ্রুতই আপডেট দেব। ভালো থাকবেন!"
            }
        ],
        "nativePhrases": [
            {
                "phrase": "Make complete sense",
                "meaning": "সম্পূর্ণ যুক্তিযুক্ত ও বোধগম্য হওয়া",
                "context": "কারো বক্তব্যে সহমত জানাতে নেটিভদের সবচেয়ে প্রিয় ফ্রেজ।"
            },
            {
                "phrase": "Without hesitation",
                "meaning": "দ্বিধা বা ভয় ছাড়া নিঃসঙ্কোচে",
                "context": "আত্মবিশ্বাসের সাথে কোনো কাজ করার ক্ষেত্রে।"
            },
            {
                "phrase": "Stay in touch",
                "meaning": "নিয়মিত যোগাযোগ বজায় রাখা",
                "context": "বিদায়ের সময় সম্মানজনক অনুরোধ হিসেবে।"
            }
        ]
    },
    {
        "id": "conv-25-flight-delay-missed-connection-rebooking",
        "number": 25,
        "title": "Flight Delay, Missed Connection & Rebooking",
        "titleBn": "ফ্লাইট বিলম্ব ও বিকল্প টিকিট নিয়ে কথা বলা",
        "level": "Intermediate",
        "category": "Travel",
        "sceneDescription": "ফ্লাইট বিলম্ব ও বিকল্প টিকিট নিয়ে কথা বলা সংক্রান্ত বাস্তব কথোপকথন এবং প্রয়োজনীয় বাক্যসমূহ।",
        "starters": [
            {
                "en": "Hello! Could you help me regarding flight delay, missed connection & rebooking?",
                "bn": "হ্যালো! এই বিষয়ে কি আমাকে একটু সহায়তা করতে পারেন?",
                "tip": "কথা শুরু করার সবচেয়ে কার্যকর ও শিষ্ট উপায়।"
            },
            {
                "en": "Excuse me, do you have a quick moment to discuss this?",
                "bn": "মাফ করবেন, এই বিষয়ে কথা বলার মতো কি সামান্য সময় হবে?",
                "tip": "নম্রভাবে সম্মতি নেওয়ার বাক্য।"
            },
            {
                "en": "Hi there, I was wondering if we could talk about this.",
                "bn": "হাই, আমি ভাবছিলাম আমরা কি বিষয়টি নিয়ে একটু কথা বলতে পারি?",
                "tip": "অতি ভদ্র ও প্রফেশনাল ভূমিকা।"
            }
        ],
        "dialogue": [
            {
                "id": "1",
                "speaker": "Speaker A",
                "role": "A",
                "en": "Hello, how are you doing today? We are focusing on flight delay, missed connection & rebooking.",
                "bn": "হ্যালো, আপনি কেমন আছেন? আমরা আজ ফ্লাইট বিলম্ব ও বিকল্প টিকিট নিয়ে কথা বলা নিয়ে কথা বলছি।",
                "ipa": "/həˈləʊ haʊ ɑː juː ˈduːɪŋ təˈdeɪ/",
                "bn_pron": "হ্যালো, হাউ আ ইউ ডুয়িং টুডেই?"
            },
            {
                "id": "2",
                "speaker": "Speaker B",
                "role": "B",
                "en": "I'm doing well, thank you! It's an essential scenario to practice.",
                "bn": "আমি ভালো আছি, ধন্যবাদ! এটি চর্চা করার মতো খুবই দরকারি একটি দৃশ্যপট।",
                "ipa": "/aɪm ˈduːɪŋ wel θæŋk juː ɪts ən ɪˈsenʃl sɪˈnɑːriəʊ/",
                "bn_pron": "আইম ডুয়িং ওয়েল, থ্যাংক ইউ! ইটস অ্যান এসেনশিয়াল সিনারিও।"
            },
            {
                "id": "3",
                "speaker": "Speaker A",
                "role": "A",
                "en": "Could you tell me how you usually approach this situation?",
                "bn": "আপনি সাধারণত এই পরিস্থিতিতে কীভাবে কথা শুরু করেন?",
                "ipa": "/kʊd juː tel miː haʊ juː ˈjuːʒʊəli əˈprəʊtʃ/",
                "bn_pron": "কুড ইউ টেল মি হাউ ইউ ইউজুয়ালি অ্যাপ্রোচ?"
            },
            {
                "id": "4",
                "speaker": "Speaker B",
                "role": "B",
                "en": "I always start politely with a clear greeting and simple question.",
                "bn": "আমি সবসময় একটি সুন্দর সম্ভাষণ ও সহজ প্রশ্ন দিয়ে বিনয়ের সাথে শুরু করি।",
                "ipa": "/aɪ ˈɔːlweɪz stɑːt pəˈlaɪtli wɪð ə klɪə ˈɡriːtɪŋ/",
                "bn_pron": "আই অলওয়েজ স্টার্ট পোলাইটলি উইথ আ ক্লিয়ার গ্রীটিং।"
            },
            {
                "id": "5",
                "speaker": "Speaker A",
                "role": "A",
                "en": "That makes complete sense! Clarity and confidence make a huge difference.",
                "bn": "একদম যথার্থ! স্পষ্টতা ও আত্মবিশ্বাস অনেক বড় ইতিবাচক পরিবর্তন আনে।",
                "ipa": "/ðæt meɪks kəmˈpliːt sens ˈklærəti ænd ˈkɒnfɪdəns/",
                "bn_pron": "দ্যাট মেইকস কমপ্লিট সেন্স! ক্ল্যারিটি অ্যান্ড কনফিডেন্স।"
            },
            {
                "id": "6",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Exactly. And active listening helps in responding naturally without hesitation.",
                "bn": "ঠিক তাই। আর মনোযোগ দিয়ে শুনলে দ্বিধাহীনভাবে স্বাভাবিক উত্তর দেওয়া সম্ভব হয়।",
                "ipa": "/ɪɡˈzæktli ænd ˈæktɪv ˈlɪsnɪŋ helps ɪn rɪˈspɒndɪŋ ˈnætʃrəli/",
                "bn_pron": "এক্স্যাক্টলি। অ্যান্ড অ্যাকটিভ লিসেনিং হেল্পস ইন রেসপন্ডিং ন্যাচারালি।"
            },
            {
                "id": "7",
                "speaker": "Speaker A",
                "role": "A",
                "en": "What common mistake should learners avoid in this situation?",
                "bn": "এই পরিস্থিতিতে শিক্ষার্থীদের কোন সাধারণ ভুলটি এড়িয়ে চলা উচিত?",
                "ipa": "/wɒt ˈkɒmən mɪˈsteɪk ʃʊd ˈlɜːnəz əˈvɔɪd/",
                "bn_pron": "ওয়াট কমন মিসটেইক শুড লার্নার্স অ্যাভয়েড?"
            },
            {
                "id": "8",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Never translate literally word for word from Bengali; use native phrases!",
                "bn": "কখনো বাংলা থেকে হুবহু শব্দ ধরে ধরে অনুবাদ করবেন না; স্বাভাবিক নেটিভ ফ্রেজ ব্যবহার করুন!",
                "ipa": "/ˈnevə trænzˈleɪt ˈlɪtərəli wɜːd fɔː wɜːd juːz ˈneɪtɪv freɪzɪz/",
                "bn_pron": "নেভার ট্রান্সলেইট লিটারালি ওয়ার্ড ফর ওয়ার্ড; ইউয নেইটিভ ফ্রেজেস!"
            },
            {
                "id": "9",
                "speaker": "Speaker A",
                "role": "A",
                "en": "That is golden advice. Daily practice makes fluent speakers.",
                "bn": "এটি অমূল্য পরামর্শ। নিয়মিত চর্চাতেই অনর্গল কথা বলা সম্ভব।",
                "ipa": "/ðæt ɪz ˈɡəʊldən ədˈvaɪs ˈdeɪli ˈpræktɪs meɪks ˈfluːənt/",
                "bn_pron": "দ্যাট ইয গোল্ডেন অ্যাডভাইস। ডেইলি প্র্যাকটিস মেইকস ফ্লুয়েন্ট।"
            },
            {
                "id": "10",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Absolutely! Repetition guarantees effortless conversational confidence.",
                "bn": "একদমই তাই! বারবার বলা নিশ্চিতভাবেই অনর্গল সাবলীলতা এনে দেয়।",
                "ipa": "/ˌæbsəˈluːtli ˌrepəˈtɪʃn ˌɡærənˈtiːz ˈkɒnfɪdəns/",
                "bn_pron": "অ্যাবসলিউটলি! রিপিটিশন গ্যারান্টিয কনফিডেন্স।"
            }
        ],
        "followUps": [
            {
                "en": "Could you elaborate on the key points, please?",
                "bn": "প্রধান বিষয়গুলো কি একটু বিস্তারিত বলবেন, প্লিজ?"
            },
            {
                "en": "How do you usually handle unexpected challenges here?",
                "bn": "এখানে কোনো অপ্রত্যাশিত পরিস্থিতি সৃষ্টি হলে কীভাবে সামলান?"
            },
            {
                "en": "Would tomorrow be a good time to follow up on this?",
                "bn": "আগামীকাল কি বিষয়টি নিয়ে আবার কথা বলা সুবিধার হবে?"
            }
        ],
        "closers": [
            {
                "en": "Thank you so much for your valuable time and cooperation!",
                "bn": "আপনার মূল্যবান সময় ও সহযোগিতার জন্য অনেক ধন্যবাদ!"
            },
            {
                "en": "I truly appreciate your kind help. Have a wonderful day!",
                "bn": "আপনার আন্তরিক সহায়তার জন্য কৃতজ্ঞতা জানাচ্ছি। দিনটি সুন্দর কাটুক!"
            },
            {
                "en": "Let's stay in touch and coordinate soon. Take care!",
                "bn": "যোগাযোগে থাকব এবং দ্রুতই আপডেট দেব। ভালো থাকবেন!"
            }
        ],
        "nativePhrases": [
            {
                "phrase": "Make complete sense",
                "meaning": "সম্পূর্ণ যুক্তিযুক্ত ও বোধগম্য হওয়া",
                "context": "কারো বক্তব্যে সহমত জানাতে নেটিভদের সবচেয়ে প্রিয় ফ্রেজ।"
            },
            {
                "phrase": "Without hesitation",
                "meaning": "দ্বিধা বা ভয় ছাড়া নিঃসঙ্কোচে",
                "context": "আত্মবিশ্বাসের সাথে কোনো কাজ করার ক্ষেত্রে।"
            },
            {
                "phrase": "Stay in touch",
                "meaning": "নিয়মিত যোগাযোগ বজায় রাখা",
                "context": "বিদায়ের সময় সম্মানজনক অনুরোধ হিসেবে।"
            }
        ]
    },
    {
        "id": "conv-26-customer-care-reporting-broadband-outage",
        "number": 26,
        "title": "Customer Care: Reporting Broadband Outage",
        "titleBn": "কাস্টমার কেয়ারে ইন্টারনেট বিভ্রাটের অভিযোগ",
        "level": "Intermediate",
        "category": "Services",
        "sceneDescription": "কাস্টমার কেয়ারে ইন্টারনেট বিভ্রাটের অভিযোগ সংক্রান্ত বাস্তব কথোপকথন এবং প্রয়োজনীয় বাক্যসমূহ।",
        "starters": [
            {
                "en": "Hello! Could you help me regarding customer care: reporting broadband outage?",
                "bn": "হ্যালো! এই বিষয়ে কি আমাকে একটু সহায়তা করতে পারেন?",
                "tip": "কথা শুরু করার সবচেয়ে কার্যকর ও শিষ্ট উপায়।"
            },
            {
                "en": "Excuse me, do you have a quick moment to discuss this?",
                "bn": "মাফ করবেন, এই বিষয়ে কথা বলার মতো কি সামান্য সময় হবে?",
                "tip": "নম্রভাবে সম্মতি নেওয়ার বাক্য।"
            },
            {
                "en": "Hi there, I was wondering if we could talk about this.",
                "bn": "হাই, আমি ভাবছিলাম আমরা কি বিষয়টি নিয়ে একটু কথা বলতে পারি?",
                "tip": "অতি ভদ্র ও প্রফেশনাল ভূমিকা।"
            }
        ],
        "dialogue": [
            {
                "id": "1",
                "speaker": "Speaker A",
                "role": "A",
                "en": "Hello, how are you doing today? We are focusing on customer care: reporting broadband outage.",
                "bn": "হ্যালো, আপনি কেমন আছেন? আমরা আজ কাস্টমার কেয়ারে ইন্টারনেট বিভ্রাটের অভিযোগ নিয়ে কথা বলছি।",
                "ipa": "/həˈləʊ haʊ ɑː juː ˈduːɪŋ təˈdeɪ/",
                "bn_pron": "হ্যালো, হাউ আ ইউ ডুয়িং টুডেই?"
            },
            {
                "id": "2",
                "speaker": "Speaker B",
                "role": "B",
                "en": "I'm doing well, thank you! It's an essential scenario to practice.",
                "bn": "আমি ভালো আছি, ধন্যবাদ! এটি চর্চা করার মতো খুবই দরকারি একটি দৃশ্যপট।",
                "ipa": "/aɪm ˈduːɪŋ wel θæŋk juː ɪts ən ɪˈsenʃl sɪˈnɑːriəʊ/",
                "bn_pron": "আইম ডুয়িং ওয়েল, থ্যাংক ইউ! ইটস অ্যান এসেনশিয়াল সিনারিও।"
            },
            {
                "id": "3",
                "speaker": "Speaker A",
                "role": "A",
                "en": "Could you tell me how you usually approach this situation?",
                "bn": "আপনি সাধারণত এই পরিস্থিতিতে কীভাবে কথা শুরু করেন?",
                "ipa": "/kʊd juː tel miː haʊ juː ˈjuːʒʊəli əˈprəʊtʃ/",
                "bn_pron": "কুড ইউ টেল মি হাউ ইউ ইউজুয়ালি অ্যাপ্রোচ?"
            },
            {
                "id": "4",
                "speaker": "Speaker B",
                "role": "B",
                "en": "I always start politely with a clear greeting and simple question.",
                "bn": "আমি সবসময় একটি সুন্দর সম্ভাষণ ও সহজ প্রশ্ন দিয়ে বিনয়ের সাথে শুরু করি।",
                "ipa": "/aɪ ˈɔːlweɪz stɑːt pəˈlaɪtli wɪð ə klɪə ˈɡriːtɪŋ/",
                "bn_pron": "আই অলওয়েজ স্টার্ট পোলাইটলি উইথ আ ক্লিয়ার গ্রীটিং।"
            },
            {
                "id": "5",
                "speaker": "Speaker A",
                "role": "A",
                "en": "That makes complete sense! Clarity and confidence make a huge difference.",
                "bn": "একদম যথার্থ! স্পষ্টতা ও আত্মবিশ্বাস অনেক বড় ইতিবাচক পরিবর্তন আনে।",
                "ipa": "/ðæt meɪks kəmˈpliːt sens ˈklærəti ænd ˈkɒnfɪdəns/",
                "bn_pron": "দ্যাট মেইকস কমপ্লিট সেন্স! ক্ল্যারিটি অ্যান্ড কনফিডেন্স।"
            },
            {
                "id": "6",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Exactly. And active listening helps in responding naturally without hesitation.",
                "bn": "ঠিক তাই। আর মনোযোগ দিয়ে শুনলে দ্বিধাহীনভাবে স্বাভাবিক উত্তর দেওয়া সম্ভব হয়।",
                "ipa": "/ɪɡˈzæktli ænd ˈæktɪv ˈlɪsnɪŋ helps ɪn rɪˈspɒndɪŋ ˈnætʃrəli/",
                "bn_pron": "এক্স্যাক্টলি। অ্যান্ড অ্যাকটিভ লিসেনিং হেল্পস ইন রেসপন্ডিং ন্যাচারালি।"
            },
            {
                "id": "7",
                "speaker": "Speaker A",
                "role": "A",
                "en": "What common mistake should learners avoid in this situation?",
                "bn": "এই পরিস্থিতিতে শিক্ষার্থীদের কোন সাধারণ ভুলটি এড়িয়ে চলা উচিত?",
                "ipa": "/wɒt ˈkɒmən mɪˈsteɪk ʃʊd ˈlɜːnəz əˈvɔɪd/",
                "bn_pron": "ওয়াট কমন মিসটেইক শুড লার্নার্স অ্যাভয়েড?"
            },
            {
                "id": "8",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Never translate literally word for word from Bengali; use native phrases!",
                "bn": "কখনো বাংলা থেকে হুবহু শব্দ ধরে ধরে অনুবাদ করবেন না; স্বাভাবিক নেটিভ ফ্রেজ ব্যবহার করুন!",
                "ipa": "/ˈnevə trænzˈleɪt ˈlɪtərəli wɜːd fɔː wɜːd juːz ˈneɪtɪv freɪzɪz/",
                "bn_pron": "নেভার ট্রান্সলেইট লিটারালি ওয়ার্ড ফর ওয়ার্ড; ইউয নেইটিভ ফ্রেজেস!"
            },
            {
                "id": "9",
                "speaker": "Speaker A",
                "role": "A",
                "en": "That is golden advice. Daily practice makes fluent speakers.",
                "bn": "এটি অমূল্য পরামর্শ। নিয়মিত চর্চাতেই অনর্গল কথা বলা সম্ভব।",
                "ipa": "/ðæt ɪz ˈɡəʊldən ədˈvaɪs ˈdeɪli ˈpræktɪs meɪks ˈfluːənt/",
                "bn_pron": "দ্যাট ইয গোল্ডেন অ্যাডভাইস। ডেইলি প্র্যাকটিস মেইকস ফ্লুয়েন্ট।"
            },
            {
                "id": "10",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Absolutely! Repetition guarantees effortless conversational confidence.",
                "bn": "একদমই তাই! বারবার বলা নিশ্চিতভাবেই অনর্গল সাবলীলতা এনে দেয়।",
                "ipa": "/ˌæbsəˈluːtli ˌrepəˈtɪʃn ˌɡærənˈtiːz ˈkɒnfɪdəns/",
                "bn_pron": "অ্যাবসলিউটলি! রিপিটিশন গ্যারান্টিয কনফিডেন্স।"
            }
        ],
        "followUps": [
            {
                "en": "Could you elaborate on the key points, please?",
                "bn": "প্রধান বিষয়গুলো কি একটু বিস্তারিত বলবেন, প্লিজ?"
            },
            {
                "en": "How do you usually handle unexpected challenges here?",
                "bn": "এখানে কোনো অপ্রত্যাশিত পরিস্থিতি সৃষ্টি হলে কীভাবে সামলান?"
            },
            {
                "en": "Would tomorrow be a good time to follow up on this?",
                "bn": "আগামীকাল কি বিষয়টি নিয়ে আবার কথা বলা সুবিধার হবে?"
            }
        ],
        "closers": [
            {
                "en": "Thank you so much for your valuable time and cooperation!",
                "bn": "আপনার মূল্যবান সময় ও সহযোগিতার জন্য অনেক ধন্যবাদ!"
            },
            {
                "en": "I truly appreciate your kind help. Have a wonderful day!",
                "bn": "আপনার আন্তরিক সহায়তার জন্য কৃতজ্ঞতা জানাচ্ছি। দিনটি সুন্দর কাটুক!"
            },
            {
                "en": "Let's stay in touch and coordinate soon. Take care!",
                "bn": "যোগাযোগে থাকব এবং দ্রুতই আপডেট দেব। ভালো থাকবেন!"
            }
        ],
        "nativePhrases": [
            {
                "phrase": "Make complete sense",
                "meaning": "সম্পূর্ণ যুক্তিযুক্ত ও বোধগম্য হওয়া",
                "context": "কারো বক্তব্যে সহমত জানাতে নেটিভদের সবচেয়ে প্রিয় ফ্রেজ।"
            },
            {
                "phrase": "Without hesitation",
                "meaning": "দ্বিধা বা ভয় ছাড়া নিঃসঙ্কোচে",
                "context": "আত্মবিশ্বাসের সাথে কোনো কাজ করার ক্ষেত্রে।"
            },
            {
                "phrase": "Stay in touch",
                "meaning": "নিয়মিত যোগাযোগ বজায় রাখা",
                "context": "বিদায়ের সময় সম্মানজনক অনুরোধ হিসেবে।"
            }
        ]
    },
    {
        "id": "conv-27-declining-an-invitation-politely-without-offense",
        "number": 27,
        "title": "Declining an Invitation Politely Without Offense",
        "titleBn": "সম্মান বজায় রেখে ভদ্রভাবে কোনো দাওয়াত ফিরিয়ে দেওয়া",
        "level": "Intermediate",
        "category": "Social",
        "sceneDescription": "সম্মান বজায় রেখে ভদ্রভাবে কোনো দাওয়াত ফিরিয়ে দেওয়া সংক্রান্ত বাস্তব কথোপকথন এবং প্রয়োজনীয় বাক্যসমূহ।",
        "starters": [
            {
                "en": "Hello! Could you help me regarding declining an invitation politely without offense?",
                "bn": "হ্যালো! এই বিষয়ে কি আমাকে একটু সহায়তা করতে পারেন?",
                "tip": "কথা শুরু করার সবচেয়ে কার্যকর ও শিষ্ট উপায়।"
            },
            {
                "en": "Excuse me, do you have a quick moment to discuss this?",
                "bn": "মাফ করবেন, এই বিষয়ে কথা বলার মতো কি সামান্য সময় হবে?",
                "tip": "নম্রভাবে সম্মতি নেওয়ার বাক্য।"
            },
            {
                "en": "Hi there, I was wondering if we could talk about this.",
                "bn": "হাই, আমি ভাবছিলাম আমরা কি বিষয়টি নিয়ে একটু কথা বলতে পারি?",
                "tip": "অতি ভদ্র ও প্রফেশনাল ভূমিকা।"
            }
        ],
        "dialogue": [
            {
                "id": "1",
                "speaker": "Speaker A",
                "role": "A",
                "en": "Hello, how are you doing today? We are focusing on declining an invitation politely without offense.",
                "bn": "হ্যালো, আপনি কেমন আছেন? আমরা আজ সম্মান বজায় রেখে ভদ্রভাবে কোনো দাওয়াত ফিরিয়ে দেওয়া নিয়ে কথা বলছি।",
                "ipa": "/həˈləʊ haʊ ɑː juː ˈduːɪŋ təˈdeɪ/",
                "bn_pron": "হ্যালো, হাউ আ ইউ ডুয়িং টুডেই?"
            },
            {
                "id": "2",
                "speaker": "Speaker B",
                "role": "B",
                "en": "I'm doing well, thank you! It's an essential scenario to practice.",
                "bn": "আমি ভালো আছি, ধন্যবাদ! এটি চর্চা করার মতো খুবই দরকারি একটি দৃশ্যপট।",
                "ipa": "/aɪm ˈduːɪŋ wel θæŋk juː ɪts ən ɪˈsenʃl sɪˈnɑːriəʊ/",
                "bn_pron": "আইম ডুয়িং ওয়েল, থ্যাংক ইউ! ইটস অ্যান এসেনশিয়াল সিনারিও।"
            },
            {
                "id": "3",
                "speaker": "Speaker A",
                "role": "A",
                "en": "Could you tell me how you usually approach this situation?",
                "bn": "আপনি সাধারণত এই পরিস্থিতিতে কীভাবে কথা শুরু করেন?",
                "ipa": "/kʊd juː tel miː haʊ juː ˈjuːʒʊəli əˈprəʊtʃ/",
                "bn_pron": "কুড ইউ টেল মি হাউ ইউ ইউজুয়ালি অ্যাপ্রোচ?"
            },
            {
                "id": "4",
                "speaker": "Speaker B",
                "role": "B",
                "en": "I always start politely with a clear greeting and simple question.",
                "bn": "আমি সবসময় একটি সুন্দর সম্ভাষণ ও সহজ প্রশ্ন দিয়ে বিনয়ের সাথে শুরু করি।",
                "ipa": "/aɪ ˈɔːlweɪz stɑːt pəˈlaɪtli wɪð ə klɪə ˈɡriːtɪŋ/",
                "bn_pron": "আই অলওয়েজ স্টার্ট পোলাইটলি উইথ আ ক্লিয়ার গ্রীটিং।"
            },
            {
                "id": "5",
                "speaker": "Speaker A",
                "role": "A",
                "en": "That makes complete sense! Clarity and confidence make a huge difference.",
                "bn": "একদম যথার্থ! স্পষ্টতা ও আত্মবিশ্বাস অনেক বড় ইতিবাচক পরিবর্তন আনে।",
                "ipa": "/ðæt meɪks kəmˈpliːt sens ˈklærəti ænd ˈkɒnfɪdəns/",
                "bn_pron": "দ্যাট মেইকস কমপ্লিট সেন্স! ক্ল্যারিটি অ্যান্ড কনফিডেন্স।"
            },
            {
                "id": "6",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Exactly. And active listening helps in responding naturally without hesitation.",
                "bn": "ঠিক তাই। আর মনোযোগ দিয়ে শুনলে দ্বিধাহীনভাবে স্বাভাবিক উত্তর দেওয়া সম্ভব হয়।",
                "ipa": "/ɪɡˈzæktli ænd ˈæktɪv ˈlɪsnɪŋ helps ɪn rɪˈspɒndɪŋ ˈnætʃrəli/",
                "bn_pron": "এক্স্যাক্টলি। অ্যান্ড অ্যাকটিভ লিসেনিং হেল্পস ইন রেসপন্ডিং ন্যাচারালি।"
            },
            {
                "id": "7",
                "speaker": "Speaker A",
                "role": "A",
                "en": "What common mistake should learners avoid in this situation?",
                "bn": "এই পরিস্থিতিতে শিক্ষার্থীদের কোন সাধারণ ভুলটি এড়িয়ে চলা উচিত?",
                "ipa": "/wɒt ˈkɒmən mɪˈsteɪk ʃʊd ˈlɜːnəz əˈvɔɪd/",
                "bn_pron": "ওয়াট কমন মিসটেইক শুড লার্নার্স অ্যাভয়েড?"
            },
            {
                "id": "8",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Never translate literally word for word from Bengali; use native phrases!",
                "bn": "কখনো বাংলা থেকে হুবহু শব্দ ধরে ধরে অনুবাদ করবেন না; স্বাভাবিক নেটিভ ফ্রেজ ব্যবহার করুন!",
                "ipa": "/ˈnevə trænzˈleɪt ˈlɪtərəli wɜːd fɔː wɜːd juːz ˈneɪtɪv freɪzɪz/",
                "bn_pron": "নেভার ট্রান্সলেইট লিটারালি ওয়ার্ড ফর ওয়ার্ড; ইউয নেইটিভ ফ্রেজেস!"
            },
            {
                "id": "9",
                "speaker": "Speaker A",
                "role": "A",
                "en": "That is golden advice. Daily practice makes fluent speakers.",
                "bn": "এটি অমূল্য পরামর্শ। নিয়মিত চর্চাতেই অনর্গল কথা বলা সম্ভব।",
                "ipa": "/ðæt ɪz ˈɡəʊldən ədˈvaɪs ˈdeɪli ˈpræktɪs meɪks ˈfluːənt/",
                "bn_pron": "দ্যাট ইয গোল্ডেন অ্যাডভাইস। ডেইলি প্র্যাকটিস মেইকস ফ্লুয়েন্ট।"
            },
            {
                "id": "10",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Absolutely! Repetition guarantees effortless conversational confidence.",
                "bn": "একদমই তাই! বারবার বলা নিশ্চিতভাবেই অনর্গল সাবলীলতা এনে দেয়।",
                "ipa": "/ˌæbsəˈluːtli ˌrepəˈtɪʃn ˌɡærənˈtiːz ˈkɒnfɪdəns/",
                "bn_pron": "অ্যাবসলিউটলি! রিপিটিশন গ্যারান্টিয কনফিডেন্স।"
            }
        ],
        "followUps": [
            {
                "en": "Could you elaborate on the key points, please?",
                "bn": "প্রধান বিষয়গুলো কি একটু বিস্তারিত বলবেন, প্লিজ?"
            },
            {
                "en": "How do you usually handle unexpected challenges here?",
                "bn": "এখানে কোনো অপ্রত্যাশিত পরিস্থিতি সৃষ্টি হলে কীভাবে সামলান?"
            },
            {
                "en": "Would tomorrow be a good time to follow up on this?",
                "bn": "আগামীকাল কি বিষয়টি নিয়ে আবার কথা বলা সুবিধার হবে?"
            }
        ],
        "closers": [
            {
                "en": "Thank you so much for your valuable time and cooperation!",
                "bn": "আপনার মূল্যবান সময় ও সহযোগিতার জন্য অনেক ধন্যবাদ!"
            },
            {
                "en": "I truly appreciate your kind help. Have a wonderful day!",
                "bn": "আপনার আন্তরিক সহায়তার জন্য কৃতজ্ঞতা জানাচ্ছি। দিনটি সুন্দর কাটুক!"
            },
            {
                "en": "Let's stay in touch and coordinate soon. Take care!",
                "bn": "যোগাযোগে থাকব এবং দ্রুতই আপডেট দেব। ভালো থাকবেন!"
            }
        ],
        "nativePhrases": [
            {
                "phrase": "Make complete sense",
                "meaning": "সম্পূর্ণ যুক্তিযুক্ত ও বোধগম্য হওয়া",
                "context": "কারো বক্তব্যে সহমত জানাতে নেটিভদের সবচেয়ে প্রিয় ফ্রেজ।"
            },
            {
                "phrase": "Without hesitation",
                "meaning": "দ্বিধা বা ভয় ছাড়া নিঃসঙ্কোচে",
                "context": "আত্মবিশ্বাসের সাথে কোনো কাজ করার ক্ষেত্রে।"
            },
            {
                "phrase": "Stay in touch",
                "meaning": "নিয়মিত যোগাযোগ বজায় রাখা",
                "context": "বিদায়ের সময় সম্মানজনক অনুরোধ হিসেবে।"
            }
        ]
    },
    {
        "id": "conv-28-negotiating-freelance-rates-scope-of-work",
        "number": 28,
        "title": "Negotiating Freelance Rates & Scope of Work",
        "titleBn": "ফ্রিল্যান্স কাজের বাজেট ও পারিশ্রমিক নিয়ে সম্মানজনক দরদাম",
        "level": "Intermediate",
        "category": "Professional",
        "sceneDescription": "ফ্রিল্যান্স কাজের বাজেট ও পারিশ্রমিক নিয়ে সম্মানজনক দরদাম সংক্রান্ত বাস্তব কথোপকথন এবং প্রয়োজনীয় বাক্যসমূহ।",
        "starters": [
            {
                "en": "Hello! Could you help me regarding negotiating freelance rates & scope of work?",
                "bn": "হ্যালো! এই বিষয়ে কি আমাকে একটু সহায়তা করতে পারেন?",
                "tip": "কথা শুরু করার সবচেয়ে কার্যকর ও শিষ্ট উপায়।"
            },
            {
                "en": "Excuse me, do you have a quick moment to discuss this?",
                "bn": "মাফ করবেন, এই বিষয়ে কথা বলার মতো কি সামান্য সময় হবে?",
                "tip": "নম্রভাবে সম্মতি নেওয়ার বাক্য।"
            },
            {
                "en": "Hi there, I was wondering if we could talk about this.",
                "bn": "হাই, আমি ভাবছিলাম আমরা কি বিষয়টি নিয়ে একটু কথা বলতে পারি?",
                "tip": "অতি ভদ্র ও প্রফেশনাল ভূমিকা।"
            }
        ],
        "dialogue": [
            {
                "id": "1",
                "speaker": "Speaker A",
                "role": "A",
                "en": "Hello, how are you doing today? We are focusing on negotiating freelance rates & scope of work.",
                "bn": "হ্যালো, আপনি কেমন আছেন? আমরা আজ ফ্রিল্যান্স কাজের বাজেট ও পারিশ্রমিক নিয়ে সম্মানজনক দরদাম নিয়ে কথা বলছি।",
                "ipa": "/həˈləʊ haʊ ɑː juː ˈduːɪŋ təˈdeɪ/",
                "bn_pron": "হ্যালো, হাউ আ ইউ ডুয়িং টুডেই?"
            },
            {
                "id": "2",
                "speaker": "Speaker B",
                "role": "B",
                "en": "I'm doing well, thank you! It's an essential scenario to practice.",
                "bn": "আমি ভালো আছি, ধন্যবাদ! এটি চর্চা করার মতো খুবই দরকারি একটি দৃশ্যপট।",
                "ipa": "/aɪm ˈduːɪŋ wel θæŋk juː ɪts ən ɪˈsenʃl sɪˈnɑːriəʊ/",
                "bn_pron": "আইম ডুয়িং ওয়েল, থ্যাংক ইউ! ইটস অ্যান এসেনশিয়াল সিনারিও।"
            },
            {
                "id": "3",
                "speaker": "Speaker A",
                "role": "A",
                "en": "Could you tell me how you usually approach this situation?",
                "bn": "আপনি সাধারণত এই পরিস্থিতিতে কীভাবে কথা শুরু করেন?",
                "ipa": "/kʊd juː tel miː haʊ juː ˈjuːʒʊəli əˈprəʊtʃ/",
                "bn_pron": "কুড ইউ টেল মি হাউ ইউ ইউজুয়ালি অ্যাপ্রোচ?"
            },
            {
                "id": "4",
                "speaker": "Speaker B",
                "role": "B",
                "en": "I always start politely with a clear greeting and simple question.",
                "bn": "আমি সবসময় একটি সুন্দর সম্ভাষণ ও সহজ প্রশ্ন দিয়ে বিনয়ের সাথে শুরু করি।",
                "ipa": "/aɪ ˈɔːlweɪz stɑːt pəˈlaɪtli wɪð ə klɪə ˈɡriːtɪŋ/",
                "bn_pron": "আই অলওয়েজ স্টার্ট পোলাইটলি উইথ আ ক্লিয়ার গ্রীটিং।"
            },
            {
                "id": "5",
                "speaker": "Speaker A",
                "role": "A",
                "en": "That makes complete sense! Clarity and confidence make a huge difference.",
                "bn": "একদম যথার্থ! স্পষ্টতা ও আত্মবিশ্বাস অনেক বড় ইতিবাচক পরিবর্তন আনে।",
                "ipa": "/ðæt meɪks kəmˈpliːt sens ˈklærəti ænd ˈkɒnfɪdəns/",
                "bn_pron": "দ্যাট মেইকস কমপ্লিট সেন্স! ক্ল্যারিটি অ্যান্ড কনফিডেন্স।"
            },
            {
                "id": "6",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Exactly. And active listening helps in responding naturally without hesitation.",
                "bn": "ঠিক তাই। আর মনোযোগ দিয়ে শুনলে দ্বিধাহীনভাবে স্বাভাবিক উত্তর দেওয়া সম্ভব হয়।",
                "ipa": "/ɪɡˈzæktli ænd ˈæktɪv ˈlɪsnɪŋ helps ɪn rɪˈspɒndɪŋ ˈnætʃrəli/",
                "bn_pron": "এক্স্যাক্টলি। অ্যান্ড অ্যাকটিভ লিসেনিং হেল্পস ইন রেসপন্ডিং ন্যাচারালি।"
            },
            {
                "id": "7",
                "speaker": "Speaker A",
                "role": "A",
                "en": "What common mistake should learners avoid in this situation?",
                "bn": "এই পরিস্থিতিতে শিক্ষার্থীদের কোন সাধারণ ভুলটি এড়িয়ে চলা উচিত?",
                "ipa": "/wɒt ˈkɒmən mɪˈsteɪk ʃʊd ˈlɜːnəz əˈvɔɪd/",
                "bn_pron": "ওয়াট কমন মিসটেইক শুড লার্নার্স অ্যাভয়েড?"
            },
            {
                "id": "8",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Never translate literally word for word from Bengali; use native phrases!",
                "bn": "কখনো বাংলা থেকে হুবহু শব্দ ধরে ধরে অনুবাদ করবেন না; স্বাভাবিক নেটিভ ফ্রেজ ব্যবহার করুন!",
                "ipa": "/ˈnevə trænzˈleɪt ˈlɪtərəli wɜːd fɔː wɜːd juːz ˈneɪtɪv freɪzɪz/",
                "bn_pron": "নেভার ট্রান্সলেইট লিটারালি ওয়ার্ড ফর ওয়ার্ড; ইউয নেইটিভ ফ্রেজেস!"
            },
            {
                "id": "9",
                "speaker": "Speaker A",
                "role": "A",
                "en": "That is golden advice. Daily practice makes fluent speakers.",
                "bn": "এটি অমূল্য পরামর্শ। নিয়মিত চর্চাতেই অনর্গল কথা বলা সম্ভব।",
                "ipa": "/ðæt ɪz ˈɡəʊldən ədˈvaɪs ˈdeɪli ˈpræktɪs meɪks ˈfluːənt/",
                "bn_pron": "দ্যাট ইয গোল্ডেন অ্যাডভাইস। ডেইলি প্র্যাকটিস মেইকস ফ্লুয়েন্ট।"
            },
            {
                "id": "10",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Absolutely! Repetition guarantees effortless conversational confidence.",
                "bn": "একদমই তাই! বারবার বলা নিশ্চিতভাবেই অনর্গল সাবলীলতা এনে দেয়।",
                "ipa": "/ˌæbsəˈluːtli ˌrepəˈtɪʃn ˌɡærənˈtiːz ˈkɒnfɪdəns/",
                "bn_pron": "অ্যাবসলিউটলি! রিপিটিশন গ্যারান্টিয কনফিডেন্স।"
            }
        ],
        "followUps": [
            {
                "en": "Could you elaborate on the key points, please?",
                "bn": "প্রধান বিষয়গুলো কি একটু বিস্তারিত বলবেন, প্লিজ?"
            },
            {
                "en": "How do you usually handle unexpected challenges here?",
                "bn": "এখানে কোনো অপ্রত্যাশিত পরিস্থিতি সৃষ্টি হলে কীভাবে সামলান?"
            },
            {
                "en": "Would tomorrow be a good time to follow up on this?",
                "bn": "আগামীকাল কি বিষয়টি নিয়ে আবার কথা বলা সুবিধার হবে?"
            }
        ],
        "closers": [
            {
                "en": "Thank you so much for your valuable time and cooperation!",
                "bn": "আপনার মূল্যবান সময় ও সহযোগিতার জন্য অনেক ধন্যবাদ!"
            },
            {
                "en": "I truly appreciate your kind help. Have a wonderful day!",
                "bn": "আপনার আন্তরিক সহায়তার জন্য কৃতজ্ঞতা জানাচ্ছি। দিনটি সুন্দর কাটুক!"
            },
            {
                "en": "Let's stay in touch and coordinate soon. Take care!",
                "bn": "যোগাযোগে থাকব এবং দ্রুতই আপডেট দেব। ভালো থাকবেন!"
            }
        ],
        "nativePhrases": [
            {
                "phrase": "Make complete sense",
                "meaning": "সম্পূর্ণ যুক্তিযুক্ত ও বোধগম্য হওয়া",
                "context": "কারো বক্তব্যে সহমত জানাতে নেটিভদের সবচেয়ে প্রিয় ফ্রেজ।"
            },
            {
                "phrase": "Without hesitation",
                "meaning": "দ্বিধা বা ভয় ছাড়া নিঃসঙ্কোচে",
                "context": "আত্মবিশ্বাসের সাথে কোনো কাজ করার ক্ষেত্রে।"
            },
            {
                "phrase": "Stay in touch",
                "meaning": "নিয়মিত যোগাযোগ বজায় রাখা",
                "context": "বিদায়ের সময় সম্মানজনক অনুরোধ হিসেবে।"
            }
        ]
    },
    {
        "id": "conv-29-discussing-weekend-plans-road-trip",
        "number": 29,
        "title": "Discussing Weekend Plans & Road Trip",
        "titleBn": "ছুটির দিনে বন্ধুদের সাথে ভ্রমণের রুট প্ল্যান করা",
        "level": "Intermediate",
        "category": "Social",
        "sceneDescription": "ছুটির দিনে বন্ধুদের সাথে ভ্রমণের রুট প্ল্যান করা সংক্রান্ত বাস্তব কথোপকথন এবং প্রয়োজনীয় বাক্যসমূহ।",
        "starters": [
            {
                "en": "Hello! Could you help me regarding discussing weekend plans & road trip?",
                "bn": "হ্যালো! এই বিষয়ে কি আমাকে একটু সহায়তা করতে পারেন?",
                "tip": "কথা শুরু করার সবচেয়ে কার্যকর ও শিষ্ট উপায়।"
            },
            {
                "en": "Excuse me, do you have a quick moment to discuss this?",
                "bn": "মাফ করবেন, এই বিষয়ে কথা বলার মতো কি সামান্য সময় হবে?",
                "tip": "নম্রভাবে সম্মতি নেওয়ার বাক্য।"
            },
            {
                "en": "Hi there, I was wondering if we could talk about this.",
                "bn": "হাই, আমি ভাবছিলাম আমরা কি বিষয়টি নিয়ে একটু কথা বলতে পারি?",
                "tip": "অতি ভদ্র ও প্রফেশনাল ভূমিকা।"
            }
        ],
        "dialogue": [
            {
                "id": "1",
                "speaker": "Speaker A",
                "role": "A",
                "en": "Hello, how are you doing today? We are focusing on discussing weekend plans & road trip.",
                "bn": "হ্যালো, আপনি কেমন আছেন? আমরা আজ ছুটির দিনে বন্ধুদের সাথে ভ্রমণের রুট প্ল্যান করা নিয়ে কথা বলছি।",
                "ipa": "/həˈləʊ haʊ ɑː juː ˈduːɪŋ təˈdeɪ/",
                "bn_pron": "হ্যালো, হাউ আ ইউ ডুয়িং টুডেই?"
            },
            {
                "id": "2",
                "speaker": "Speaker B",
                "role": "B",
                "en": "I'm doing well, thank you! It's an essential scenario to practice.",
                "bn": "আমি ভালো আছি, ধন্যবাদ! এটি চর্চা করার মতো খুবই দরকারি একটি দৃশ্যপট।",
                "ipa": "/aɪm ˈduːɪŋ wel θæŋk juː ɪts ən ɪˈsenʃl sɪˈnɑːriəʊ/",
                "bn_pron": "আইম ডুয়িং ওয়েল, থ্যাংক ইউ! ইটস অ্যান এসেনশিয়াল সিনারিও।"
            },
            {
                "id": "3",
                "speaker": "Speaker A",
                "role": "A",
                "en": "Could you tell me how you usually approach this situation?",
                "bn": "আপনি সাধারণত এই পরিস্থিতিতে কীভাবে কথা শুরু করেন?",
                "ipa": "/kʊd juː tel miː haʊ juː ˈjuːʒʊəli əˈprəʊtʃ/",
                "bn_pron": "কুড ইউ টেল মি হাউ ইউ ইউজুয়ালি অ্যাপ্রোচ?"
            },
            {
                "id": "4",
                "speaker": "Speaker B",
                "role": "B",
                "en": "I always start politely with a clear greeting and simple question.",
                "bn": "আমি সবসময় একটি সুন্দর সম্ভাষণ ও সহজ প্রশ্ন দিয়ে বিনয়ের সাথে শুরু করি।",
                "ipa": "/aɪ ˈɔːlweɪz stɑːt pəˈlaɪtli wɪð ə klɪə ˈɡriːtɪŋ/",
                "bn_pron": "আই অলওয়েজ স্টার্ট পোলাইটলি উইথ আ ক্লিয়ার গ্রীটিং।"
            },
            {
                "id": "5",
                "speaker": "Speaker A",
                "role": "A",
                "en": "That makes complete sense! Clarity and confidence make a huge difference.",
                "bn": "একদম যথার্থ! স্পষ্টতা ও আত্মবিশ্বাস অনেক বড় ইতিবাচক পরিবর্তন আনে।",
                "ipa": "/ðæt meɪks kəmˈpliːt sens ˈklærəti ænd ˈkɒnfɪdəns/",
                "bn_pron": "দ্যাট মেইকস কমপ্লিট সেন্স! ক্ল্যারিটি অ্যান্ড কনফিডেন্স।"
            },
            {
                "id": "6",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Exactly. And active listening helps in responding naturally without hesitation.",
                "bn": "ঠিক তাই। আর মনোযোগ দিয়ে শুনলে দ্বিধাহীনভাবে স্বাভাবিক উত্তর দেওয়া সম্ভব হয়।",
                "ipa": "/ɪɡˈzæktli ænd ˈæktɪv ˈlɪsnɪŋ helps ɪn rɪˈspɒndɪŋ ˈnætʃrəli/",
                "bn_pron": "এক্স্যাক্টলি। অ্যান্ড অ্যাকটিভ লিসেনিং হেল্পস ইন রেসপন্ডিং ন্যাচারালি।"
            },
            {
                "id": "7",
                "speaker": "Speaker A",
                "role": "A",
                "en": "What common mistake should learners avoid in this situation?",
                "bn": "এই পরিস্থিতিতে শিক্ষার্থীদের কোন সাধারণ ভুলটি এড়িয়ে চলা উচিত?",
                "ipa": "/wɒt ˈkɒmən mɪˈsteɪk ʃʊd ˈlɜːnəz əˈvɔɪd/",
                "bn_pron": "ওয়াট কমন মিসটেইক শুড লার্নার্স অ্যাভয়েড?"
            },
            {
                "id": "8",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Never translate literally word for word from Bengali; use native phrases!",
                "bn": "কখনো বাংলা থেকে হুবহু শব্দ ধরে ধরে অনুবাদ করবেন না; স্বাভাবিক নেটিভ ফ্রেজ ব্যবহার করুন!",
                "ipa": "/ˈnevə trænzˈleɪt ˈlɪtərəli wɜːd fɔː wɜːd juːz ˈneɪtɪv freɪzɪz/",
                "bn_pron": "নেভার ট্রান্সলেইট লিটারালি ওয়ার্ড ফর ওয়ার্ড; ইউয নেইটিভ ফ্রেজেস!"
            },
            {
                "id": "9",
                "speaker": "Speaker A",
                "role": "A",
                "en": "That is golden advice. Daily practice makes fluent speakers.",
                "bn": "এটি অমূল্য পরামর্শ। নিয়মিত চর্চাতেই অনর্গল কথা বলা সম্ভব।",
                "ipa": "/ðæt ɪz ˈɡəʊldən ədˈvaɪs ˈdeɪli ˈpræktɪs meɪks ˈfluːənt/",
                "bn_pron": "দ্যাট ইয গোল্ডেন অ্যাডভাইস। ডেইলি প্র্যাকটিস মেইকস ফ্লুয়েন্ট।"
            },
            {
                "id": "10",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Absolutely! Repetition guarantees effortless conversational confidence.",
                "bn": "একদমই তাই! বারবার বলা নিশ্চিতভাবেই অনর্গল সাবলীলতা এনে দেয়।",
                "ipa": "/ˌæbsəˈluːtli ˌrepəˈtɪʃn ˌɡærənˈtiːz ˈkɒnfɪdəns/",
                "bn_pron": "অ্যাবসলিউটলি! রিপিটিশন গ্যারান্টিয কনফিডেন্স।"
            }
        ],
        "followUps": [
            {
                "en": "Could you elaborate on the key points, please?",
                "bn": "প্রধান বিষয়গুলো কি একটু বিস্তারিত বলবেন, প্লিজ?"
            },
            {
                "en": "How do you usually handle unexpected challenges here?",
                "bn": "এখানে কোনো অপ্রত্যাশিত পরিস্থিতি সৃষ্টি হলে কীভাবে সামলান?"
            },
            {
                "en": "Would tomorrow be a good time to follow up on this?",
                "bn": "আগামীকাল কি বিষয়টি নিয়ে আবার কথা বলা সুবিধার হবে?"
            }
        ],
        "closers": [
            {
                "en": "Thank you so much for your valuable time and cooperation!",
                "bn": "আপনার মূল্যবান সময় ও সহযোগিতার জন্য অনেক ধন্যবাদ!"
            },
            {
                "en": "I truly appreciate your kind help. Have a wonderful day!",
                "bn": "আপনার আন্তরিক সহায়তার জন্য কৃতজ্ঞতা জানাচ্ছি। দিনটি সুন্দর কাটুক!"
            },
            {
                "en": "Let's stay in touch and coordinate soon. Take care!",
                "bn": "যোগাযোগে থাকব এবং দ্রুতই আপডেট দেব। ভালো থাকবেন!"
            }
        ],
        "nativePhrases": [
            {
                "phrase": "Make complete sense",
                "meaning": "সম্পূর্ণ যুক্তিযুক্ত ও বোধগম্য হওয়া",
                "context": "কারো বক্তব্যে সহমত জানাতে নেটিভদের সবচেয়ে প্রিয় ফ্রেজ।"
            },
            {
                "phrase": "Without hesitation",
                "meaning": "দ্বিধা বা ভয় ছাড়া নিঃসঙ্কোচে",
                "context": "আত্মবিশ্বাসের সাথে কোনো কাজ করার ক্ষেত্রে।"
            },
            {
                "phrase": "Stay in touch",
                "meaning": "নিয়মিত যোগাযোগ বজায় রাখা",
                "context": "বিদায়ের সময় সম্মানজনক অনুরোধ হিসেবে।"
            }
        ]
    },
    {
        "id": "conv-30-congratulating-someone-on-promotion-or-success",
        "number": 30,
        "title": "Congratulating Someone on Promotion or Success",
        "titleBn": "নতুন চাকরি বা প্রমোশনে সহকর্মীকে প্রাণঢালা অভিনন্দন",
        "level": "Intermediate",
        "category": "Professional",
        "sceneDescription": "নতুন চাকরি বা প্রমোশনে সহকর্মীকে প্রাণঢালা অভিনন্দন সংক্রান্ত বাস্তব কথোপকথন এবং প্রয়োজনীয় বাক্যসমূহ।",
        "starters": [
            {
                "en": "Hello! Could you help me regarding congratulating someone on promotion or success?",
                "bn": "হ্যালো! এই বিষয়ে কি আমাকে একটু সহায়তা করতে পারেন?",
                "tip": "কথা শুরু করার সবচেয়ে কার্যকর ও শিষ্ট উপায়।"
            },
            {
                "en": "Excuse me, do you have a quick moment to discuss this?",
                "bn": "মাফ করবেন, এই বিষয়ে কথা বলার মতো কি সামান্য সময় হবে?",
                "tip": "নম্রভাবে সম্মতি নেওয়ার বাক্য।"
            },
            {
                "en": "Hi there, I was wondering if we could talk about this.",
                "bn": "হাই, আমি ভাবছিলাম আমরা কি বিষয়টি নিয়ে একটু কথা বলতে পারি?",
                "tip": "অতি ভদ্র ও প্রফেশনাল ভূমিকা।"
            }
        ],
        "dialogue": [
            {
                "id": "1",
                "speaker": "Speaker A",
                "role": "A",
                "en": "Hello, how are you doing today? We are focusing on congratulating someone on promotion or success.",
                "bn": "হ্যালো, আপনি কেমন আছেন? আমরা আজ নতুন চাকরি বা প্রমোশনে সহকর্মীকে প্রাণঢালা অভিনন্দন নিয়ে কথা বলছি।",
                "ipa": "/həˈləʊ haʊ ɑː juː ˈduːɪŋ təˈdeɪ/",
                "bn_pron": "হ্যালো, হাউ আ ইউ ডুয়িং টুডেই?"
            },
            {
                "id": "2",
                "speaker": "Speaker B",
                "role": "B",
                "en": "I'm doing well, thank you! It's an essential scenario to practice.",
                "bn": "আমি ভালো আছি, ধন্যবাদ! এটি চর্চা করার মতো খুবই দরকারি একটি দৃশ্যপট।",
                "ipa": "/aɪm ˈduːɪŋ wel θæŋk juː ɪts ən ɪˈsenʃl sɪˈnɑːriəʊ/",
                "bn_pron": "আইম ডুয়িং ওয়েল, থ্যাংক ইউ! ইটস অ্যান এসেনশিয়াল সিনারিও।"
            },
            {
                "id": "3",
                "speaker": "Speaker A",
                "role": "A",
                "en": "Could you tell me how you usually approach this situation?",
                "bn": "আপনি সাধারণত এই পরিস্থিতিতে কীভাবে কথা শুরু করেন?",
                "ipa": "/kʊd juː tel miː haʊ juː ˈjuːʒʊəli əˈprəʊtʃ/",
                "bn_pron": "কুড ইউ টেল মি হাউ ইউ ইউজুয়ালি অ্যাপ্রোচ?"
            },
            {
                "id": "4",
                "speaker": "Speaker B",
                "role": "B",
                "en": "I always start politely with a clear greeting and simple question.",
                "bn": "আমি সবসময় একটি সুন্দর সম্ভাষণ ও সহজ প্রশ্ন দিয়ে বিনয়ের সাথে শুরু করি।",
                "ipa": "/aɪ ˈɔːlweɪz stɑːt pəˈlaɪtli wɪð ə klɪə ˈɡriːtɪŋ/",
                "bn_pron": "আই অলওয়েজ স্টার্ট পোলাইটলি উইথ আ ক্লিয়ার গ্রীটিং।"
            },
            {
                "id": "5",
                "speaker": "Speaker A",
                "role": "A",
                "en": "That makes complete sense! Clarity and confidence make a huge difference.",
                "bn": "একদম যথার্থ! স্পষ্টতা ও আত্মবিশ্বাস অনেক বড় ইতিবাচক পরিবর্তন আনে।",
                "ipa": "/ðæt meɪks kəmˈpliːt sens ˈklærəti ænd ˈkɒnfɪdəns/",
                "bn_pron": "দ্যাট মেইকস কমপ্লিট সেন্স! ক্ল্যারিটি অ্যান্ড কনফিডেন্স।"
            },
            {
                "id": "6",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Exactly. And active listening helps in responding naturally without hesitation.",
                "bn": "ঠিক তাই। আর মনোযোগ দিয়ে শুনলে দ্বিধাহীনভাবে স্বাভাবিক উত্তর দেওয়া সম্ভব হয়।",
                "ipa": "/ɪɡˈzæktli ænd ˈæktɪv ˈlɪsnɪŋ helps ɪn rɪˈspɒndɪŋ ˈnætʃrəli/",
                "bn_pron": "এক্স্যাক্টলি। অ্যান্ড অ্যাকটিভ লিসেনিং হেল্পস ইন রেসপন্ডিং ন্যাচারালি।"
            },
            {
                "id": "7",
                "speaker": "Speaker A",
                "role": "A",
                "en": "What common mistake should learners avoid in this situation?",
                "bn": "এই পরিস্থিতিতে শিক্ষার্থীদের কোন সাধারণ ভুলটি এড়িয়ে চলা উচিত?",
                "ipa": "/wɒt ˈkɒmən mɪˈsteɪk ʃʊd ˈlɜːnəz əˈvɔɪd/",
                "bn_pron": "ওয়াট কমন মিসটেইক শুড লার্নার্স অ্যাভয়েড?"
            },
            {
                "id": "8",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Never translate literally word for word from Bengali; use native phrases!",
                "bn": "কখনো বাংলা থেকে হুবহু শব্দ ধরে ধরে অনুবাদ করবেন না; স্বাভাবিক নেটিভ ফ্রেজ ব্যবহার করুন!",
                "ipa": "/ˈnevə trænzˈleɪt ˈlɪtərəli wɜːd fɔː wɜːd juːz ˈneɪtɪv freɪzɪz/",
                "bn_pron": "নেভার ট্রান্সলেইট লিটারালি ওয়ার্ড ফর ওয়ার্ড; ইউয নেইটিভ ফ্রেজেস!"
            },
            {
                "id": "9",
                "speaker": "Speaker A",
                "role": "A",
                "en": "That is golden advice. Daily practice makes fluent speakers.",
                "bn": "এটি অমূল্য পরামর্শ। নিয়মিত চর্চাতেই অনর্গল কথা বলা সম্ভব।",
                "ipa": "/ðæt ɪz ˈɡəʊldən ədˈvaɪs ˈdeɪli ˈpræktɪs meɪks ˈfluːənt/",
                "bn_pron": "দ্যাট ইয গোল্ডেন অ্যাডভাইস। ডেইলি প্র্যাকটিস মেইকস ফ্লুয়েন্ট।"
            },
            {
                "id": "10",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Absolutely! Repetition guarantees effortless conversational confidence.",
                "bn": "একদমই তাই! বারবার বলা নিশ্চিতভাবেই অনর্গল সাবলীলতা এনে দেয়।",
                "ipa": "/ˌæbsəˈluːtli ˌrepəˈtɪʃn ˌɡærənˈtiːz ˈkɒnfɪdəns/",
                "bn_pron": "অ্যাবসলিউটলি! রিপিটিশন গ্যারান্টিয কনফিডেন্স।"
            }
        ],
        "followUps": [
            {
                "en": "Could you elaborate on the key points, please?",
                "bn": "প্রধান বিষয়গুলো কি একটু বিস্তারিত বলবেন, প্লিজ?"
            },
            {
                "en": "How do you usually handle unexpected challenges here?",
                "bn": "এখানে কোনো অপ্রত্যাশিত পরিস্থিতি সৃষ্টি হলে কীভাবে সামলান?"
            },
            {
                "en": "Would tomorrow be a good time to follow up on this?",
                "bn": "আগামীকাল কি বিষয়টি নিয়ে আবার কথা বলা সুবিধার হবে?"
            }
        ],
        "closers": [
            {
                "en": "Thank you so much for your valuable time and cooperation!",
                "bn": "আপনার মূল্যবান সময় ও সহযোগিতার জন্য অনেক ধন্যবাদ!"
            },
            {
                "en": "I truly appreciate your kind help. Have a wonderful day!",
                "bn": "আপনার আন্তরিক সহায়তার জন্য কৃতজ্ঞতা জানাচ্ছি। দিনটি সুন্দর কাটুক!"
            },
            {
                "en": "Let's stay in touch and coordinate soon. Take care!",
                "bn": "যোগাযোগে থাকব এবং দ্রুতই আপডেট দেব। ভালো থাকবেন!"
            }
        ],
        "nativePhrases": [
            {
                "phrase": "Make complete sense",
                "meaning": "সম্পূর্ণ যুক্তিযুক্ত ও বোধগম্য হওয়া",
                "context": "কারো বক্তব্যে সহমত জানাতে নেটিভদের সবচেয়ে প্রিয় ফ্রেজ।"
            },
            {
                "phrase": "Without hesitation",
                "meaning": "দ্বিধা বা ভয় ছাড়া নিঃসঙ্কোচে",
                "context": "আত্মবিশ্বাসের সাথে কোনো কাজ করার ক্ষেত্রে।"
            },
            {
                "phrase": "Stay in touch",
                "meaning": "নিয়মিত যোগাযোগ বজায় রাখা",
                "context": "বিদায়ের সময় সম্মানজনক অনুরোধ হিসেবে।"
            }
        ]
    },
    {
        "id": "conv-31-expressing-empathy-consoling-a-sad-friend",
        "number": 31,
        "title": "Expressing Empathy & Consoling a Sad Friend",
        "titleBn": "বিপদে বন্ধুকে সান্ত্বনা ও মানসিক সাহস জোগানো",
        "level": "Intermediate",
        "category": "Social",
        "sceneDescription": "বিপদে বন্ধুকে সান্ত্বনা ও মানসিক সাহস জোগানো সংক্রান্ত বাস্তব কথোপকথন এবং প্রয়োজনীয় বাক্যসমূহ।",
        "starters": [
            {
                "en": "Hello! Could you help me regarding expressing empathy & consoling a sad friend?",
                "bn": "হ্যালো! এই বিষয়ে কি আমাকে একটু সহায়তা করতে পারেন?",
                "tip": "কথা শুরু করার সবচেয়ে কার্যকর ও শিষ্ট উপায়।"
            },
            {
                "en": "Excuse me, do you have a quick moment to discuss this?",
                "bn": "মাফ করবেন, এই বিষয়ে কথা বলার মতো কি সামান্য সময় হবে?",
                "tip": "নম্রভাবে সম্মতি নেওয়ার বাক্য।"
            },
            {
                "en": "Hi there, I was wondering if we could talk about this.",
                "bn": "হাই, আমি ভাবছিলাম আমরা কি বিষয়টি নিয়ে একটু কথা বলতে পারি?",
                "tip": "অতি ভদ্র ও প্রফেশনাল ভূমিকা।"
            }
        ],
        "dialogue": [
            {
                "id": "1",
                "speaker": "Speaker A",
                "role": "A",
                "en": "Hello, how are you doing today? We are focusing on expressing empathy & consoling a sad friend.",
                "bn": "হ্যালো, আপনি কেমন আছেন? আমরা আজ বিপদে বন্ধুকে সান্ত্বনা ও মানসিক সাহস জোগানো নিয়ে কথা বলছি।",
                "ipa": "/həˈləʊ haʊ ɑː juː ˈduːɪŋ təˈdeɪ/",
                "bn_pron": "হ্যালো, হাউ আ ইউ ডুয়িং টুডেই?"
            },
            {
                "id": "2",
                "speaker": "Speaker B",
                "role": "B",
                "en": "I'm doing well, thank you! It's an essential scenario to practice.",
                "bn": "আমি ভালো আছি, ধন্যবাদ! এটি চর্চা করার মতো খুবই দরকারি একটি দৃশ্যপট।",
                "ipa": "/aɪm ˈduːɪŋ wel θæŋk juː ɪts ən ɪˈsenʃl sɪˈnɑːriəʊ/",
                "bn_pron": "আইম ডুয়িং ওয়েল, থ্যাংক ইউ! ইটস অ্যান এসেনশিয়াল সিনারিও।"
            },
            {
                "id": "3",
                "speaker": "Speaker A",
                "role": "A",
                "en": "Could you tell me how you usually approach this situation?",
                "bn": "আপনি সাধারণত এই পরিস্থিতিতে কীভাবে কথা শুরু করেন?",
                "ipa": "/kʊd juː tel miː haʊ juː ˈjuːʒʊəli əˈprəʊtʃ/",
                "bn_pron": "কুড ইউ টেল মি হাউ ইউ ইউজুয়ালি অ্যাপ্রোচ?"
            },
            {
                "id": "4",
                "speaker": "Speaker B",
                "role": "B",
                "en": "I always start politely with a clear greeting and simple question.",
                "bn": "আমি সবসময় একটি সুন্দর সম্ভাষণ ও সহজ প্রশ্ন দিয়ে বিনয়ের সাথে শুরু করি।",
                "ipa": "/aɪ ˈɔːlweɪz stɑːt pəˈlaɪtli wɪð ə klɪə ˈɡriːtɪŋ/",
                "bn_pron": "আই অলওয়েজ স্টার্ট পোলাইটলি উইথ আ ক্লিয়ার গ্রীটিং।"
            },
            {
                "id": "5",
                "speaker": "Speaker A",
                "role": "A",
                "en": "That makes complete sense! Clarity and confidence make a huge difference.",
                "bn": "একদম যথার্থ! স্পষ্টতা ও আত্মবিশ্বাস অনেক বড় ইতিবাচক পরিবর্তন আনে।",
                "ipa": "/ðæt meɪks kəmˈpliːt sens ˈklærəti ænd ˈkɒnfɪdəns/",
                "bn_pron": "দ্যাট মেইকস কমপ্লিট সেন্স! ক্ল্যারিটি অ্যান্ড কনফিডেন্স।"
            },
            {
                "id": "6",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Exactly. And active listening helps in responding naturally without hesitation.",
                "bn": "ঠিক তাই। আর মনোযোগ দিয়ে শুনলে দ্বিধাহীনভাবে স্বাভাবিক উত্তর দেওয়া সম্ভব হয়।",
                "ipa": "/ɪɡˈzæktli ænd ˈæktɪv ˈlɪsnɪŋ helps ɪn rɪˈspɒndɪŋ ˈnætʃrəli/",
                "bn_pron": "এক্স্যাক্টলি। অ্যান্ড অ্যাকটিভ লিসেনিং হেল্পস ইন রেসপন্ডিং ন্যাচারালি।"
            },
            {
                "id": "7",
                "speaker": "Speaker A",
                "role": "A",
                "en": "What common mistake should learners avoid in this situation?",
                "bn": "এই পরিস্থিতিতে শিক্ষার্থীদের কোন সাধারণ ভুলটি এড়িয়ে চলা উচিত?",
                "ipa": "/wɒt ˈkɒmən mɪˈsteɪk ʃʊd ˈlɜːnəz əˈvɔɪd/",
                "bn_pron": "ওয়াট কমন মিসটেইক শুড লার্নার্স অ্যাভয়েড?"
            },
            {
                "id": "8",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Never translate literally word for word from Bengali; use native phrases!",
                "bn": "কখনো বাংলা থেকে হুবহু শব্দ ধরে ধরে অনুবাদ করবেন না; স্বাভাবিক নেটিভ ফ্রেজ ব্যবহার করুন!",
                "ipa": "/ˈnevə trænzˈleɪt ˈlɪtərəli wɜːd fɔː wɜːd juːz ˈneɪtɪv freɪzɪz/",
                "bn_pron": "নেভার ট্রান্সলেইট লিটারালি ওয়ার্ড ফর ওয়ার্ড; ইউয নেইটিভ ফ্রেজেস!"
            },
            {
                "id": "9",
                "speaker": "Speaker A",
                "role": "A",
                "en": "That is golden advice. Daily practice makes fluent speakers.",
                "bn": "এটি অমূল্য পরামর্শ। নিয়মিত চর্চাতেই অনর্গল কথা বলা সম্ভব।",
                "ipa": "/ðæt ɪz ˈɡəʊldən ədˈvaɪs ˈdeɪli ˈpræktɪs meɪks ˈfluːənt/",
                "bn_pron": "দ্যাট ইয গোল্ডেন অ্যাডভাইস। ডেইলি প্র্যাকটিস মেইকস ফ্লুয়েন্ট।"
            },
            {
                "id": "10",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Absolutely! Repetition guarantees effortless conversational confidence.",
                "bn": "একদমই তাই! বারবার বলা নিশ্চিতভাবেই অনর্গল সাবলীলতা এনে দেয়।",
                "ipa": "/ˌæbsəˈluːtli ˌrepəˈtɪʃn ˌɡærənˈtiːz ˈkɒnfɪdəns/",
                "bn_pron": "অ্যাবসলিউটলি! রিপিটিশন গ্যারান্টিয কনফিডেন্স।"
            }
        ],
        "followUps": [
            {
                "en": "Could you elaborate on the key points, please?",
                "bn": "প্রধান বিষয়গুলো কি একটু বিস্তারিত বলবেন, প্লিজ?"
            },
            {
                "en": "How do you usually handle unexpected challenges here?",
                "bn": "এখানে কোনো অপ্রত্যাশিত পরিস্থিতি সৃষ্টি হলে কীভাবে সামলান?"
            },
            {
                "en": "Would tomorrow be a good time to follow up on this?",
                "bn": "আগামীকাল কি বিষয়টি নিয়ে আবার কথা বলা সুবিধার হবে?"
            }
        ],
        "closers": [
            {
                "en": "Thank you so much for your valuable time and cooperation!",
                "bn": "আপনার মূল্যবান সময় ও সহযোগিতার জন্য অনেক ধন্যবাদ!"
            },
            {
                "en": "I truly appreciate your kind help. Have a wonderful day!",
                "bn": "আপনার আন্তরিক সহায়তার জন্য কৃতজ্ঞতা জানাচ্ছি। দিনটি সুন্দর কাটুক!"
            },
            {
                "en": "Let's stay in touch and coordinate soon. Take care!",
                "bn": "যোগাযোগে থাকব এবং দ্রুতই আপডেট দেব। ভালো থাকবেন!"
            }
        ],
        "nativePhrases": [
            {
                "phrase": "Make complete sense",
                "meaning": "সম্পূর্ণ যুক্তিযুক্ত ও বোধগম্য হওয়া",
                "context": "কারো বক্তব্যে সহমত জানাতে নেটিভদের সবচেয়ে প্রিয় ফ্রেজ।"
            },
            {
                "phrase": "Without hesitation",
                "meaning": "দ্বিধা বা ভয় ছাড়া নিঃসঙ্কোচে",
                "context": "আত্মবিশ্বাসের সাথে কোনো কাজ করার ক্ষেত্রে।"
            },
            {
                "phrase": "Stay in touch",
                "meaning": "নিয়মিত যোগাযোগ বজায় রাখা",
                "context": "বিদায়ের সময় সম্মানজনক অনুরোধ হিসেবে।"
            }
        ]
    },
    {
        "id": "conv-32-debating-and-reviewing-a-movie-or-book",
        "number": 32,
        "title": "Debating and Reviewing a Movie or Book",
        "titleBn": "সিনেমা বা বইয়ের প্লট ও মেকিং নিয়ে বুদ্ধিবৃত্তিক আড্ডা",
        "level": "Intermediate",
        "category": "Daily Life",
        "sceneDescription": "সিনেমা বা বইয়ের প্লট ও মেকিং নিয়ে বুদ্ধিবৃত্তিক আড্ডা সংক্রান্ত বাস্তব কথোপকথন এবং প্রয়োজনীয় বাক্যসমূহ।",
        "starters": [
            {
                "en": "Hello! Could you help me regarding debating and reviewing a movie or book?",
                "bn": "হ্যালো! এই বিষয়ে কি আমাকে একটু সহায়তা করতে পারেন?",
                "tip": "কথা শুরু করার সবচেয়ে কার্যকর ও শিষ্ট উপায়।"
            },
            {
                "en": "Excuse me, do you have a quick moment to discuss this?",
                "bn": "মাফ করবেন, এই বিষয়ে কথা বলার মতো কি সামান্য সময় হবে?",
                "tip": "নম্রভাবে সম্মতি নেওয়ার বাক্য।"
            },
            {
                "en": "Hi there, I was wondering if we could talk about this.",
                "bn": "হাই, আমি ভাবছিলাম আমরা কি বিষয়টি নিয়ে একটু কথা বলতে পারি?",
                "tip": "অতি ভদ্র ও প্রফেশনাল ভূমিকা।"
            }
        ],
        "dialogue": [
            {
                "id": "1",
                "speaker": "Speaker A",
                "role": "A",
                "en": "Hello, how are you doing today? We are focusing on debating and reviewing a movie or book.",
                "bn": "হ্যালো, আপনি কেমন আছেন? আমরা আজ সিনেমা বা বইয়ের প্লট ও মেকিং নিয়ে বুদ্ধিবৃত্তিক আড্ডা নিয়ে কথা বলছি।",
                "ipa": "/həˈləʊ haʊ ɑː juː ˈduːɪŋ təˈdeɪ/",
                "bn_pron": "হ্যালো, হাউ আ ইউ ডুয়িং টুডেই?"
            },
            {
                "id": "2",
                "speaker": "Speaker B",
                "role": "B",
                "en": "I'm doing well, thank you! It's an essential scenario to practice.",
                "bn": "আমি ভালো আছি, ধন্যবাদ! এটি চর্চা করার মতো খুবই দরকারি একটি দৃশ্যপট।",
                "ipa": "/aɪm ˈduːɪŋ wel θæŋk juː ɪts ən ɪˈsenʃl sɪˈnɑːriəʊ/",
                "bn_pron": "আইম ডুয়িং ওয়েল, থ্যাংক ইউ! ইটস অ্যান এসেনশিয়াল সিনারিও।"
            },
            {
                "id": "3",
                "speaker": "Speaker A",
                "role": "A",
                "en": "Could you tell me how you usually approach this situation?",
                "bn": "আপনি সাধারণত এই পরিস্থিতিতে কীভাবে কথা শুরু করেন?",
                "ipa": "/kʊd juː tel miː haʊ juː ˈjuːʒʊəli əˈprəʊtʃ/",
                "bn_pron": "কুড ইউ টেল মি হাউ ইউ ইউজুয়ালি অ্যাপ্রোচ?"
            },
            {
                "id": "4",
                "speaker": "Speaker B",
                "role": "B",
                "en": "I always start politely with a clear greeting and simple question.",
                "bn": "আমি সবসময় একটি সুন্দর সম্ভাষণ ও সহজ প্রশ্ন দিয়ে বিনয়ের সাথে শুরু করি।",
                "ipa": "/aɪ ˈɔːlweɪz stɑːt pəˈlaɪtli wɪð ə klɪə ˈɡriːtɪŋ/",
                "bn_pron": "আই অলওয়েজ স্টার্ট পোলাইটলি উইথ আ ক্লিয়ার গ্রীটিং।"
            },
            {
                "id": "5",
                "speaker": "Speaker A",
                "role": "A",
                "en": "That makes complete sense! Clarity and confidence make a huge difference.",
                "bn": "একদম যথার্থ! স্পষ্টতা ও আত্মবিশ্বাস অনেক বড় ইতিবাচক পরিবর্তন আনে।",
                "ipa": "/ðæt meɪks kəmˈpliːt sens ˈklærəti ænd ˈkɒnfɪdəns/",
                "bn_pron": "দ্যাট মেইকস কমপ্লিট সেন্স! ক্ল্যারিটি অ্যান্ড কনফিডেন্স।"
            },
            {
                "id": "6",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Exactly. And active listening helps in responding naturally without hesitation.",
                "bn": "ঠিক তাই। আর মনোযোগ দিয়ে শুনলে দ্বিধাহীনভাবে স্বাভাবিক উত্তর দেওয়া সম্ভব হয়।",
                "ipa": "/ɪɡˈzæktli ænd ˈæktɪv ˈlɪsnɪŋ helps ɪn rɪˈspɒndɪŋ ˈnætʃrəli/",
                "bn_pron": "এক্স্যাক্টলি। অ্যান্ড অ্যাকটিভ লিসেনিং হেল্পস ইন রেসপন্ডিং ন্যাচারালি।"
            },
            {
                "id": "7",
                "speaker": "Speaker A",
                "role": "A",
                "en": "What common mistake should learners avoid in this situation?",
                "bn": "এই পরিস্থিতিতে শিক্ষার্থীদের কোন সাধারণ ভুলটি এড়িয়ে চলা উচিত?",
                "ipa": "/wɒt ˈkɒmən mɪˈsteɪk ʃʊd ˈlɜːnəz əˈvɔɪd/",
                "bn_pron": "ওয়াট কমন মিসটেইক শুড লার্নার্স অ্যাভয়েড?"
            },
            {
                "id": "8",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Never translate literally word for word from Bengali; use native phrases!",
                "bn": "কখনো বাংলা থেকে হুবহু শব্দ ধরে ধরে অনুবাদ করবেন না; স্বাভাবিক নেটিভ ফ্রেজ ব্যবহার করুন!",
                "ipa": "/ˈnevə trænzˈleɪt ˈlɪtərəli wɜːd fɔː wɜːd juːz ˈneɪtɪv freɪzɪz/",
                "bn_pron": "নেভার ট্রান্সলেইট লিটারালি ওয়ার্ড ফর ওয়ার্ড; ইউয নেইটিভ ফ্রেজেস!"
            },
            {
                "id": "9",
                "speaker": "Speaker A",
                "role": "A",
                "en": "That is golden advice. Daily practice makes fluent speakers.",
                "bn": "এটি অমূল্য পরামর্শ। নিয়মিত চর্চাতেই অনর্গল কথা বলা সম্ভব।",
                "ipa": "/ðæt ɪz ˈɡəʊldən ədˈvaɪs ˈdeɪli ˈpræktɪs meɪks ˈfluːənt/",
                "bn_pron": "দ্যাট ইয গোল্ডেন অ্যাডভাইস। ডেইলি প্র্যাকটিস মেইকস ফ্লুয়েন্ট।"
            },
            {
                "id": "10",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Absolutely! Repetition guarantees effortless conversational confidence.",
                "bn": "একদমই তাই! বারবার বলা নিশ্চিতভাবেই অনর্গল সাবলীলতা এনে দেয়।",
                "ipa": "/ˌæbsəˈluːtli ˌrepəˈtɪʃn ˌɡærənˈtiːz ˈkɒnfɪdəns/",
                "bn_pron": "অ্যাবসলিউটলি! রিপিটিশন গ্যারান্টিয কনফিডেন্স।"
            }
        ],
        "followUps": [
            {
                "en": "Could you elaborate on the key points, please?",
                "bn": "প্রধান বিষয়গুলো কি একটু বিস্তারিত বলবেন, প্লিজ?"
            },
            {
                "en": "How do you usually handle unexpected challenges here?",
                "bn": "এখানে কোনো অপ্রত্যাশিত পরিস্থিতি সৃষ্টি হলে কীভাবে সামলান?"
            },
            {
                "en": "Would tomorrow be a good time to follow up on this?",
                "bn": "আগামীকাল কি বিষয়টি নিয়ে আবার কথা বলা সুবিধার হবে?"
            }
        ],
        "closers": [
            {
                "en": "Thank you so much for your valuable time and cooperation!",
                "bn": "আপনার মূল্যবান সময় ও সহযোগিতার জন্য অনেক ধন্যবাদ!"
            },
            {
                "en": "I truly appreciate your kind help. Have a wonderful day!",
                "bn": "আপনার আন্তরিক সহায়তার জন্য কৃতজ্ঞতা জানাচ্ছি। দিনটি সুন্দর কাটুক!"
            },
            {
                "en": "Let's stay in touch and coordinate soon. Take care!",
                "bn": "যোগাযোগে থাকব এবং দ্রুতই আপডেট দেব। ভালো থাকবেন!"
            }
        ],
        "nativePhrases": [
            {
                "phrase": "Make complete sense",
                "meaning": "সম্পূর্ণ যুক্তিযুক্ত ও বোধগম্য হওয়া",
                "context": "কারো বক্তব্যে সহমত জানাতে নেটিভদের সবচেয়ে প্রিয় ফ্রেজ।"
            },
            {
                "phrase": "Without hesitation",
                "meaning": "দ্বিধা বা ভয় ছাড়া নিঃসঙ্কোচে",
                "context": "আত্মবিশ্বাসের সাথে কোনো কাজ করার ক্ষেত্রে।"
            },
            {
                "phrase": "Stay in touch",
                "meaning": "নিয়মিত যোগাযোগ বজায় রাখা",
                "context": "বিদায়ের সময় সম্মানজনক অনুরোধ হিসেবে।"
            }
        ]
    },
    {
        "id": "conv-33-ordering-takeout-food-resolving-wrong-order",
        "number": 33,
        "title": "Ordering Takeout Food & Resolving Wrong Order",
        "titleBn": "ফোনে খাবার ডেলিভারি ও ভুল খাবার সমাধানের কথোপকথন",
        "level": "Intermediate",
        "category": "Services",
        "sceneDescription": "ফোনে খাবার ডেলিভারি ও ভুল খাবার সমাধানের কথোপকথন সংক্রান্ত বাস্তব কথোপকথন এবং প্রয়োজনীয় বাক্যসমূহ।",
        "starters": [
            {
                "en": "Hello! Could you help me regarding ordering takeout food & resolving wrong order?",
                "bn": "হ্যালো! এই বিষয়ে কি আমাকে একটু সহায়তা করতে পারেন?",
                "tip": "কথা শুরু করার সবচেয়ে কার্যকর ও শিষ্ট উপায়।"
            },
            {
                "en": "Excuse me, do you have a quick moment to discuss this?",
                "bn": "মাফ করবেন, এই বিষয়ে কথা বলার মতো কি সামান্য সময় হবে?",
                "tip": "নম্রভাবে সম্মতি নেওয়ার বাক্য।"
            },
            {
                "en": "Hi there, I was wondering if we could talk about this.",
                "bn": "হাই, আমি ভাবছিলাম আমরা কি বিষয়টি নিয়ে একটু কথা বলতে পারি?",
                "tip": "অতি ভদ্র ও প্রফেশনাল ভূমিকা।"
            }
        ],
        "dialogue": [
            {
                "id": "1",
                "speaker": "Speaker A",
                "role": "A",
                "en": "Hello, how are you doing today? We are focusing on ordering takeout food & resolving wrong order.",
                "bn": "হ্যালো, আপনি কেমন আছেন? আমরা আজ ফোনে খাবার ডেলিভারি ও ভুল খাবার সমাধানের কথোপকথন নিয়ে কথা বলছি।",
                "ipa": "/həˈləʊ haʊ ɑː juː ˈduːɪŋ təˈdeɪ/",
                "bn_pron": "হ্যালো, হাউ আ ইউ ডুয়িং টুডেই?"
            },
            {
                "id": "2",
                "speaker": "Speaker B",
                "role": "B",
                "en": "I'm doing well, thank you! It's an essential scenario to practice.",
                "bn": "আমি ভালো আছি, ধন্যবাদ! এটি চর্চা করার মতো খুবই দরকারি একটি দৃশ্যপট।",
                "ipa": "/aɪm ˈduːɪŋ wel θæŋk juː ɪts ən ɪˈsenʃl sɪˈnɑːriəʊ/",
                "bn_pron": "আইম ডুয়িং ওয়েল, থ্যাংক ইউ! ইটস অ্যান এসেনশিয়াল সিনারিও।"
            },
            {
                "id": "3",
                "speaker": "Speaker A",
                "role": "A",
                "en": "Could you tell me how you usually approach this situation?",
                "bn": "আপনি সাধারণত এই পরিস্থিতিতে কীভাবে কথা শুরু করেন?",
                "ipa": "/kʊd juː tel miː haʊ juː ˈjuːʒʊəli əˈprəʊtʃ/",
                "bn_pron": "কুড ইউ টেল মি হাউ ইউ ইউজুয়ালি অ্যাপ্রোচ?"
            },
            {
                "id": "4",
                "speaker": "Speaker B",
                "role": "B",
                "en": "I always start politely with a clear greeting and simple question.",
                "bn": "আমি সবসময় একটি সুন্দর সম্ভাষণ ও সহজ প্রশ্ন দিয়ে বিনয়ের সাথে শুরু করি।",
                "ipa": "/aɪ ˈɔːlweɪz stɑːt pəˈlaɪtli wɪð ə klɪə ˈɡriːtɪŋ/",
                "bn_pron": "আই অলওয়েজ স্টার্ট পোলাইটলি উইথ আ ক্লিয়ার গ্রীটিং।"
            },
            {
                "id": "5",
                "speaker": "Speaker A",
                "role": "A",
                "en": "That makes complete sense! Clarity and confidence make a huge difference.",
                "bn": "একদম যথার্থ! স্পষ্টতা ও আত্মবিশ্বাস অনেক বড় ইতিবাচক পরিবর্তন আনে।",
                "ipa": "/ðæt meɪks kəmˈpliːt sens ˈklærəti ænd ˈkɒnfɪdəns/",
                "bn_pron": "দ্যাট মেইকস কমপ্লিট সেন্স! ক্ল্যারিটি অ্যান্ড কনফিডেন্স।"
            },
            {
                "id": "6",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Exactly. And active listening helps in responding naturally without hesitation.",
                "bn": "ঠিক তাই। আর মনোযোগ দিয়ে শুনলে দ্বিধাহীনভাবে স্বাভাবিক উত্তর দেওয়া সম্ভব হয়।",
                "ipa": "/ɪɡˈzæktli ænd ˈæktɪv ˈlɪsnɪŋ helps ɪn rɪˈspɒndɪŋ ˈnætʃrəli/",
                "bn_pron": "এক্স্যাক্টলি। অ্যান্ড অ্যাকটিভ লিসেনিং হেল্পস ইন রেসপন্ডিং ন্যাচারালি।"
            },
            {
                "id": "7",
                "speaker": "Speaker A",
                "role": "A",
                "en": "What common mistake should learners avoid in this situation?",
                "bn": "এই পরিস্থিতিতে শিক্ষার্থীদের কোন সাধারণ ভুলটি এড়িয়ে চলা উচিত?",
                "ipa": "/wɒt ˈkɒmən mɪˈsteɪk ʃʊd ˈlɜːnəz əˈvɔɪd/",
                "bn_pron": "ওয়াট কমন মিসটেইক শুড লার্নার্স অ্যাভয়েড?"
            },
            {
                "id": "8",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Never translate literally word for word from Bengali; use native phrases!",
                "bn": "কখনো বাংলা থেকে হুবহু শব্দ ধরে ধরে অনুবাদ করবেন না; স্বাভাবিক নেটিভ ফ্রেজ ব্যবহার করুন!",
                "ipa": "/ˈnevə trænzˈleɪt ˈlɪtərəli wɜːd fɔː wɜːd juːz ˈneɪtɪv freɪzɪz/",
                "bn_pron": "নেভার ট্রান্সলেইট লিটারালি ওয়ার্ড ফর ওয়ার্ড; ইউয নেইটিভ ফ্রেজেস!"
            },
            {
                "id": "9",
                "speaker": "Speaker A",
                "role": "A",
                "en": "That is golden advice. Daily practice makes fluent speakers.",
                "bn": "এটি অমূল্য পরামর্শ। নিয়মিত চর্চাতেই অনর্গল কথা বলা সম্ভব।",
                "ipa": "/ðæt ɪz ˈɡəʊldən ədˈvaɪs ˈdeɪli ˈpræktɪs meɪks ˈfluːənt/",
                "bn_pron": "দ্যাট ইয গোল্ডেন অ্যাডভাইস। ডেইলি প্র্যাকটিস মেইকস ফ্লুয়েন্ট।"
            },
            {
                "id": "10",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Absolutely! Repetition guarantees effortless conversational confidence.",
                "bn": "একদমই তাই! বারবার বলা নিশ্চিতভাবেই অনর্গল সাবলীলতা এনে দেয়।",
                "ipa": "/ˌæbsəˈluːtli ˌrepəˈtɪʃn ˌɡærənˈtiːz ˈkɒnfɪdəns/",
                "bn_pron": "অ্যাবসলিউটলি! রিপিটিশন গ্যারান্টিয কনফিডেন্স।"
            }
        ],
        "followUps": [
            {
                "en": "Could you elaborate on the key points, please?",
                "bn": "প্রধান বিষয়গুলো কি একটু বিস্তারিত বলবেন, প্লিজ?"
            },
            {
                "en": "How do you usually handle unexpected challenges here?",
                "bn": "এখানে কোনো অপ্রত্যাশিত পরিস্থিতি সৃষ্টি হলে কীভাবে সামলান?"
            },
            {
                "en": "Would tomorrow be a good time to follow up on this?",
                "bn": "আগামীকাল কি বিষয়টি নিয়ে আবার কথা বলা সুবিধার হবে?"
            }
        ],
        "closers": [
            {
                "en": "Thank you so much for your valuable time and cooperation!",
                "bn": "আপনার মূল্যবান সময় ও সহযোগিতার জন্য অনেক ধন্যবাদ!"
            },
            {
                "en": "I truly appreciate your kind help. Have a wonderful day!",
                "bn": "আপনার আন্তরিক সহায়তার জন্য কৃতজ্ঞতা জানাচ্ছি। দিনটি সুন্দর কাটুক!"
            },
            {
                "en": "Let's stay in touch and coordinate soon. Take care!",
                "bn": "যোগাযোগে থাকব এবং দ্রুতই আপডেট দেব। ভালো থাকবেন!"
            }
        ],
        "nativePhrases": [
            {
                "phrase": "Make complete sense",
                "meaning": "সম্পূর্ণ যুক্তিযুক্ত ও বোধগম্য হওয়া",
                "context": "কারো বক্তব্যে সহমত জানাতে নেটিভদের সবচেয়ে প্রিয় ফ্রেজ।"
            },
            {
                "phrase": "Without hesitation",
                "meaning": "দ্বিধা বা ভয় ছাড়া নিঃসঙ্কোচে",
                "context": "আত্মবিশ্বাসের সাথে কোনো কাজ করার ক্ষেত্রে।"
            },
            {
                "phrase": "Stay in touch",
                "meaning": "নিয়মিত যোগাযোগ বজায় রাখা",
                "context": "বিদায়ের সময় সম্মানজনক অনুরোধ হিসেবে।"
            }
        ]
    },
    {
        "id": "conv-34-at-the-gym-workout-routine-training",
        "number": 34,
        "title": "At the Gym: Workout Routine & Training",
        "titleBn": "জিমে ফিটনেস রুটিন ও এক্সারসাইজ ফরম নিয়ে কথা",
        "level": "Intermediate",
        "category": "Daily Life",
        "sceneDescription": "জিমে ফিটনেস রুটিন ও এক্সারসাইজ ফরম নিয়ে কথা সংক্রান্ত বাস্তব কথোপকথন এবং প্রয়োজনীয় বাক্যসমূহ।",
        "starters": [
            {
                "en": "Hello! Could you help me regarding at the gym: workout routine & training?",
                "bn": "হ্যালো! এই বিষয়ে কি আমাকে একটু সহায়তা করতে পারেন?",
                "tip": "কথা শুরু করার সবচেয়ে কার্যকর ও শিষ্ট উপায়।"
            },
            {
                "en": "Excuse me, do you have a quick moment to discuss this?",
                "bn": "মাফ করবেন, এই বিষয়ে কথা বলার মতো কি সামান্য সময় হবে?",
                "tip": "নম্রভাবে সম্মতি নেওয়ার বাক্য।"
            },
            {
                "en": "Hi there, I was wondering if we could talk about this.",
                "bn": "হাই, আমি ভাবছিলাম আমরা কি বিষয়টি নিয়ে একটু কথা বলতে পারি?",
                "tip": "অতি ভদ্র ও প্রফেশনাল ভূমিকা।"
            }
        ],
        "dialogue": [
            {
                "id": "1",
                "speaker": "Speaker A",
                "role": "A",
                "en": "Hello, how are you doing today? We are focusing on at the gym: workout routine & training.",
                "bn": "হ্যালো, আপনি কেমন আছেন? আমরা আজ জিমে ফিটনেস রুটিন ও এক্সারসাইজ ফরম নিয়ে কথা নিয়ে কথা বলছি।",
                "ipa": "/həˈləʊ haʊ ɑː juː ˈduːɪŋ təˈdeɪ/",
                "bn_pron": "হ্যালো, হাউ আ ইউ ডুয়িং টুডেই?"
            },
            {
                "id": "2",
                "speaker": "Speaker B",
                "role": "B",
                "en": "I'm doing well, thank you! It's an essential scenario to practice.",
                "bn": "আমি ভালো আছি, ধন্যবাদ! এটি চর্চা করার মতো খুবই দরকারি একটি দৃশ্যপট।",
                "ipa": "/aɪm ˈduːɪŋ wel θæŋk juː ɪts ən ɪˈsenʃl sɪˈnɑːriəʊ/",
                "bn_pron": "আইম ডুয়িং ওয়েল, থ্যাংক ইউ! ইটস অ্যান এসেনশিয়াল সিনারিও।"
            },
            {
                "id": "3",
                "speaker": "Speaker A",
                "role": "A",
                "en": "Could you tell me how you usually approach this situation?",
                "bn": "আপনি সাধারণত এই পরিস্থিতিতে কীভাবে কথা শুরু করেন?",
                "ipa": "/kʊd juː tel miː haʊ juː ˈjuːʒʊəli əˈprəʊtʃ/",
                "bn_pron": "কুড ইউ টেল মি হাউ ইউ ইউজুয়ালি অ্যাপ্রোচ?"
            },
            {
                "id": "4",
                "speaker": "Speaker B",
                "role": "B",
                "en": "I always start politely with a clear greeting and simple question.",
                "bn": "আমি সবসময় একটি সুন্দর সম্ভাষণ ও সহজ প্রশ্ন দিয়ে বিনয়ের সাথে শুরু করি।",
                "ipa": "/aɪ ˈɔːlweɪz stɑːt pəˈlaɪtli wɪð ə klɪə ˈɡriːtɪŋ/",
                "bn_pron": "আই অলওয়েজ স্টার্ট পোলাইটলি উইথ আ ক্লিয়ার গ্রীটিং।"
            },
            {
                "id": "5",
                "speaker": "Speaker A",
                "role": "A",
                "en": "That makes complete sense! Clarity and confidence make a huge difference.",
                "bn": "একদম যথার্থ! স্পষ্টতা ও আত্মবিশ্বাস অনেক বড় ইতিবাচক পরিবর্তন আনে।",
                "ipa": "/ðæt meɪks kəmˈpliːt sens ˈklærəti ænd ˈkɒnfɪdəns/",
                "bn_pron": "দ্যাট মেইকস কমপ্লিট সেন্স! ক্ল্যারিটি অ্যান্ড কনফিডেন্স।"
            },
            {
                "id": "6",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Exactly. And active listening helps in responding naturally without hesitation.",
                "bn": "ঠিক তাই। আর মনোযোগ দিয়ে শুনলে দ্বিধাহীনভাবে স্বাভাবিক উত্তর দেওয়া সম্ভব হয়।",
                "ipa": "/ɪɡˈzæktli ænd ˈæktɪv ˈlɪsnɪŋ helps ɪn rɪˈspɒndɪŋ ˈnætʃrəli/",
                "bn_pron": "এক্স্যাক্টলি। অ্যান্ড অ্যাকটিভ লিসেনিং হেল্পস ইন রেসপন্ডিং ন্যাচারালি।"
            },
            {
                "id": "7",
                "speaker": "Speaker A",
                "role": "A",
                "en": "What common mistake should learners avoid in this situation?",
                "bn": "এই পরিস্থিতিতে শিক্ষার্থীদের কোন সাধারণ ভুলটি এড়িয়ে চলা উচিত?",
                "ipa": "/wɒt ˈkɒmən mɪˈsteɪk ʃʊd ˈlɜːnəz əˈvɔɪd/",
                "bn_pron": "ওয়াট কমন মিসটেইক শুড লার্নার্স অ্যাভয়েড?"
            },
            {
                "id": "8",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Never translate literally word for word from Bengali; use native phrases!",
                "bn": "কখনো বাংলা থেকে হুবহু শব্দ ধরে ধরে অনুবাদ করবেন না; স্বাভাবিক নেটিভ ফ্রেজ ব্যবহার করুন!",
                "ipa": "/ˈnevə trænzˈleɪt ˈlɪtərəli wɜːd fɔː wɜːd juːz ˈneɪtɪv freɪzɪz/",
                "bn_pron": "নেভার ট্রান্সলেইট লিটারালি ওয়ার্ড ফর ওয়ার্ড; ইউয নেইটিভ ফ্রেজেস!"
            },
            {
                "id": "9",
                "speaker": "Speaker A",
                "role": "A",
                "en": "That is golden advice. Daily practice makes fluent speakers.",
                "bn": "এটি অমূল্য পরামর্শ। নিয়মিত চর্চাতেই অনর্গল কথা বলা সম্ভব।",
                "ipa": "/ðæt ɪz ˈɡəʊldən ədˈvaɪs ˈdeɪli ˈpræktɪs meɪks ˈfluːənt/",
                "bn_pron": "দ্যাট ইয গোল্ডেন অ্যাডভাইস। ডেইলি প্র্যাকটিস মেইকস ফ্লুয়েন্ট।"
            },
            {
                "id": "10",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Absolutely! Repetition guarantees effortless conversational confidence.",
                "bn": "একদমই তাই! বারবার বলা নিশ্চিতভাবেই অনর্গল সাবলীলতা এনে দেয়।",
                "ipa": "/ˌæbsəˈluːtli ˌrepəˈtɪʃn ˌɡærənˈtiːz ˈkɒnfɪdəns/",
                "bn_pron": "অ্যাবসলিউটলি! রিপিটিশন গ্যারান্টিয কনফিডেন্স।"
            }
        ],
        "followUps": [
            {
                "en": "Could you elaborate on the key points, please?",
                "bn": "প্রধান বিষয়গুলো কি একটু বিস্তারিত বলবেন, প্লিজ?"
            },
            {
                "en": "How do you usually handle unexpected challenges here?",
                "bn": "এখানে কোনো অপ্রত্যাশিত পরিস্থিতি সৃষ্টি হলে কীভাবে সামলান?"
            },
            {
                "en": "Would tomorrow be a good time to follow up on this?",
                "bn": "আগামীকাল কি বিষয়টি নিয়ে আবার কথা বলা সুবিধার হবে?"
            }
        ],
        "closers": [
            {
                "en": "Thank you so much for your valuable time and cooperation!",
                "bn": "আপনার মূল্যবান সময় ও সহযোগিতার জন্য অনেক ধন্যবাদ!"
            },
            {
                "en": "I truly appreciate your kind help. Have a wonderful day!",
                "bn": "আপনার আন্তরিক সহায়তার জন্য কৃতজ্ঞতা জানাচ্ছি। দিনটি সুন্দর কাটুক!"
            },
            {
                "en": "Let's stay in touch and coordinate soon. Take care!",
                "bn": "যোগাযোগে থাকব এবং দ্রুতই আপডেট দেব। ভালো থাকবেন!"
            }
        ],
        "nativePhrases": [
            {
                "phrase": "Make complete sense",
                "meaning": "সম্পূর্ণ যুক্তিযুক্ত ও বোধগম্য হওয়া",
                "context": "কারো বক্তব্যে সহমত জানাতে নেটিভদের সবচেয়ে প্রিয় ফ্রেজ।"
            },
            {
                "phrase": "Without hesitation",
                "meaning": "দ্বিধা বা ভয় ছাড়া নিঃসঙ্কোচে",
                "context": "আত্মবিশ্বাসের সাথে কোনো কাজ করার ক্ষেত্রে।"
            },
            {
                "phrase": "Stay in touch",
                "meaning": "নিয়মিত যোগাযোগ বজায় রাখা",
                "context": "বিদায়ের সময় সম্মানজনক অনুরোধ হিসেবে।"
            }
        ]
    },
    {
        "id": "conv-35-discussing-monthly-budget-smart-investments",
        "number": 35,
        "title": "Discussing Monthly Budget & Smart Investments",
        "titleBn": "মাসিক বাজেট, সঞ্চয় ও অর্থনৈতিক স্বাধীনতা নিয়ে পরিকল্পনা",
        "level": "Intermediate",
        "category": "Daily Life",
        "sceneDescription": "মাসিক বাজেট, সঞ্চয় ও অর্থনৈতিক স্বাধীনতা নিয়ে পরিকল্পনা সংক্রান্ত বাস্তব কথোপকথন এবং প্রয়োজনীয় বাক্যসমূহ।",
        "starters": [
            {
                "en": "Hello! Could you help me regarding discussing monthly budget & smart investments?",
                "bn": "হ্যালো! এই বিষয়ে কি আমাকে একটু সহায়তা করতে পারেন?",
                "tip": "কথা শুরু করার সবচেয়ে কার্যকর ও শিষ্ট উপায়।"
            },
            {
                "en": "Excuse me, do you have a quick moment to discuss this?",
                "bn": "মাফ করবেন, এই বিষয়ে কথা বলার মতো কি সামান্য সময় হবে?",
                "tip": "নম্রভাবে সম্মতি নেওয়ার বাক্য।"
            },
            {
                "en": "Hi there, I was wondering if we could talk about this.",
                "bn": "হাই, আমি ভাবছিলাম আমরা কি বিষয়টি নিয়ে একটু কথা বলতে পারি?",
                "tip": "অতি ভদ্র ও প্রফেশনাল ভূমিকা।"
            }
        ],
        "dialogue": [
            {
                "id": "1",
                "speaker": "Speaker A",
                "role": "A",
                "en": "Hello, how are you doing today? We are focusing on discussing monthly budget & smart investments.",
                "bn": "হ্যালো, আপনি কেমন আছেন? আমরা আজ মাসিক বাজেট, সঞ্চয় ও অর্থনৈতিক স্বাধীনতা নিয়ে পরিকল্পনা নিয়ে কথা বলছি।",
                "ipa": "/həˈləʊ haʊ ɑː juː ˈduːɪŋ təˈdeɪ/",
                "bn_pron": "হ্যালো, হাউ আ ইউ ডুয়িং টুডেই?"
            },
            {
                "id": "2",
                "speaker": "Speaker B",
                "role": "B",
                "en": "I'm doing well, thank you! It's an essential scenario to practice.",
                "bn": "আমি ভালো আছি, ধন্যবাদ! এটি চর্চা করার মতো খুবই দরকারি একটি দৃশ্যপট।",
                "ipa": "/aɪm ˈduːɪŋ wel θæŋk juː ɪts ən ɪˈsenʃl sɪˈnɑːriəʊ/",
                "bn_pron": "আইম ডুয়িং ওয়েল, থ্যাংক ইউ! ইটস অ্যান এসেনশিয়াল সিনারিও।"
            },
            {
                "id": "3",
                "speaker": "Speaker A",
                "role": "A",
                "en": "Could you tell me how you usually approach this situation?",
                "bn": "আপনি সাধারণত এই পরিস্থিতিতে কীভাবে কথা শুরু করেন?",
                "ipa": "/kʊd juː tel miː haʊ juː ˈjuːʒʊəli əˈprəʊtʃ/",
                "bn_pron": "কুড ইউ টেল মি হাউ ইউ ইউজুয়ালি অ্যাপ্রোচ?"
            },
            {
                "id": "4",
                "speaker": "Speaker B",
                "role": "B",
                "en": "I always start politely with a clear greeting and simple question.",
                "bn": "আমি সবসময় একটি সুন্দর সম্ভাষণ ও সহজ প্রশ্ন দিয়ে বিনয়ের সাথে শুরু করি।",
                "ipa": "/aɪ ˈɔːlweɪz stɑːt pəˈlaɪtli wɪð ə klɪə ˈɡriːtɪŋ/",
                "bn_pron": "আই অলওয়েজ স্টার্ট পোলাইটলি উইথ আ ক্লিয়ার গ্রীটিং।"
            },
            {
                "id": "5",
                "speaker": "Speaker A",
                "role": "A",
                "en": "That makes complete sense! Clarity and confidence make a huge difference.",
                "bn": "একদম যথার্থ! স্পষ্টতা ও আত্মবিশ্বাস অনেক বড় ইতিবাচক পরিবর্তন আনে।",
                "ipa": "/ðæt meɪks kəmˈpliːt sens ˈklærəti ænd ˈkɒnfɪdəns/",
                "bn_pron": "দ্যাট মেইকস কমপ্লিট সেন্স! ক্ল্যারিটি অ্যান্ড কনফিডেন্স।"
            },
            {
                "id": "6",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Exactly. And active listening helps in responding naturally without hesitation.",
                "bn": "ঠিক তাই। আর মনোযোগ দিয়ে শুনলে দ্বিধাহীনভাবে স্বাভাবিক উত্তর দেওয়া সম্ভব হয়।",
                "ipa": "/ɪɡˈzæktli ænd ˈæktɪv ˈlɪsnɪŋ helps ɪn rɪˈspɒndɪŋ ˈnætʃrəli/",
                "bn_pron": "এক্স্যাক্টলি। অ্যান্ড অ্যাকটিভ লিসেনিং হেল্পস ইন রেসপন্ডিং ন্যাচারালি।"
            },
            {
                "id": "7",
                "speaker": "Speaker A",
                "role": "A",
                "en": "What common mistake should learners avoid in this situation?",
                "bn": "এই পরিস্থিতিতে শিক্ষার্থীদের কোন সাধারণ ভুলটি এড়িয়ে চলা উচিত?",
                "ipa": "/wɒt ˈkɒmən mɪˈsteɪk ʃʊd ˈlɜːnəz əˈvɔɪd/",
                "bn_pron": "ওয়াট কমন মিসটেইক শুড লার্নার্স অ্যাভয়েড?"
            },
            {
                "id": "8",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Never translate literally word for word from Bengali; use native phrases!",
                "bn": "কখনো বাংলা থেকে হুবহু শব্দ ধরে ধরে অনুবাদ করবেন না; স্বাভাবিক নেটিভ ফ্রেজ ব্যবহার করুন!",
                "ipa": "/ˈnevə trænzˈleɪt ˈlɪtərəli wɜːd fɔː wɜːd juːz ˈneɪtɪv freɪzɪz/",
                "bn_pron": "নেভার ট্রান্সলেইট লিটারালি ওয়ার্ড ফর ওয়ার্ড; ইউয নেইটিভ ফ্রেজেস!"
            },
            {
                "id": "9",
                "speaker": "Speaker A",
                "role": "A",
                "en": "That is golden advice. Daily practice makes fluent speakers.",
                "bn": "এটি অমূল্য পরামর্শ। নিয়মিত চর্চাতেই অনর্গল কথা বলা সম্ভব।",
                "ipa": "/ðæt ɪz ˈɡəʊldən ədˈvaɪs ˈdeɪli ˈpræktɪs meɪks ˈfluːənt/",
                "bn_pron": "দ্যাট ইয গোল্ডেন অ্যাডভাইস। ডেইলি প্র্যাকটিস মেইকস ফ্লুয়েন্ট।"
            },
            {
                "id": "10",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Absolutely! Repetition guarantees effortless conversational confidence.",
                "bn": "একদমই তাই! বারবার বলা নিশ্চিতভাবেই অনর্গল সাবলীলতা এনে দেয়।",
                "ipa": "/ˌæbsəˈluːtli ˌrepəˈtɪʃn ˌɡærənˈtiːz ˈkɒnfɪdəns/",
                "bn_pron": "অ্যাবসলিউটলি! রিপিটিশন গ্যারান্টিয কনফিডেন্স।"
            }
        ],
        "followUps": [
            {
                "en": "Could you elaborate on the key points, please?",
                "bn": "প্রধান বিষয়গুলো কি একটু বিস্তারিত বলবেন, প্লিজ?"
            },
            {
                "en": "How do you usually handle unexpected challenges here?",
                "bn": "এখানে কোনো অপ্রত্যাশিত পরিস্থিতি সৃষ্টি হলে কীভাবে সামলান?"
            },
            {
                "en": "Would tomorrow be a good time to follow up on this?",
                "bn": "আগামীকাল কি বিষয়টি নিয়ে আবার কথা বলা সুবিধার হবে?"
            }
        ],
        "closers": [
            {
                "en": "Thank you so much for your valuable time and cooperation!",
                "bn": "আপনার মূল্যবান সময় ও সহযোগিতার জন্য অনেক ধন্যবাদ!"
            },
            {
                "en": "I truly appreciate your kind help. Have a wonderful day!",
                "bn": "আপনার আন্তরিক সহায়তার জন্য কৃতজ্ঞতা জানাচ্ছি। দিনটি সুন্দর কাটুক!"
            },
            {
                "en": "Let's stay in touch and coordinate soon. Take care!",
                "bn": "যোগাযোগে থাকব এবং দ্রুতই আপডেট দেব। ভালো থাকবেন!"
            }
        ],
        "nativePhrases": [
            {
                "phrase": "Make complete sense",
                "meaning": "সম্পূর্ণ যুক্তিযুক্ত ও বোধগম্য হওয়া",
                "context": "কারো বক্তব্যে সহমত জানাতে নেটিভদের সবচেয়ে প্রিয় ফ্রেজ।"
            },
            {
                "phrase": "Without hesitation",
                "meaning": "দ্বিধা বা ভয় ছাড়া নিঃসঙ্কোচে",
                "context": "আত্মবিশ্বাসের সাথে কোনো কাজ করার ক্ষেত্রে।"
            },
            {
                "phrase": "Stay in touch",
                "meaning": "নিয়মিত যোগাযোগ বজায় রাখা",
                "context": "বিদায়ের সময় সম্মানজনক অনুরোধ হিসেবে।"
            }
        ]
    },
    {
        "id": "conv-36-resolving-a-workplace-misunderstanding-calmly",
        "number": 36,
        "title": "Resolving a Workplace Misunderstanding Calmly",
        "titleBn": "কর্মক্ষেত্রে সহকর্মীর সাথে ভুল বোঝাবুঝি শান্তভাবে মেটানো",
        "level": "Intermediate",
        "category": "Professional",
        "sceneDescription": "কর্মক্ষেত্রে সহকর্মীর সাথে ভুল বোঝাবুঝি শান্তভাবে মেটানো সংক্রান্ত বাস্তব কথোপকথন এবং প্রয়োজনীয় বাক্যসমূহ।",
        "starters": [
            {
                "en": "Hello! Could you help me regarding resolving a workplace misunderstanding calmly?",
                "bn": "হ্যালো! এই বিষয়ে কি আমাকে একটু সহায়তা করতে পারেন?",
                "tip": "কথা শুরু করার সবচেয়ে কার্যকর ও শিষ্ট উপায়।"
            },
            {
                "en": "Excuse me, do you have a quick moment to discuss this?",
                "bn": "মাফ করবেন, এই বিষয়ে কথা বলার মতো কি সামান্য সময় হবে?",
                "tip": "নম্রভাবে সম্মতি নেওয়ার বাক্য।"
            },
            {
                "en": "Hi there, I was wondering if we could talk about this.",
                "bn": "হাই, আমি ভাবছিলাম আমরা কি বিষয়টি নিয়ে একটু কথা বলতে পারি?",
                "tip": "অতি ভদ্র ও প্রফেশনাল ভূমিকা।"
            }
        ],
        "dialogue": [
            {
                "id": "1",
                "speaker": "Speaker A",
                "role": "A",
                "en": "Hello, how are you doing today? We are focusing on resolving a workplace misunderstanding calmly.",
                "bn": "হ্যালো, আপনি কেমন আছেন? আমরা আজ কর্মক্ষেত্রে সহকর্মীর সাথে ভুল বোঝাবুঝি শান্তভাবে মেটানো নিয়ে কথা বলছি।",
                "ipa": "/həˈləʊ haʊ ɑː juː ˈduːɪŋ təˈdeɪ/",
                "bn_pron": "হ্যালো, হাউ আ ইউ ডুয়িং টুডেই?"
            },
            {
                "id": "2",
                "speaker": "Speaker B",
                "role": "B",
                "en": "I'm doing well, thank you! It's an essential scenario to practice.",
                "bn": "আমি ভালো আছি, ধন্যবাদ! এটি চর্চা করার মতো খুবই দরকারি একটি দৃশ্যপট।",
                "ipa": "/aɪm ˈduːɪŋ wel θæŋk juː ɪts ən ɪˈsenʃl sɪˈnɑːriəʊ/",
                "bn_pron": "আইম ডুয়িং ওয়েল, থ্যাংক ইউ! ইটস অ্যান এসেনশিয়াল সিনারিও।"
            },
            {
                "id": "3",
                "speaker": "Speaker A",
                "role": "A",
                "en": "Could you tell me how you usually approach this situation?",
                "bn": "আপনি সাধারণত এই পরিস্থিতিতে কীভাবে কথা শুরু করেন?",
                "ipa": "/kʊd juː tel miː haʊ juː ˈjuːʒʊəli əˈprəʊtʃ/",
                "bn_pron": "কুড ইউ টেল মি হাউ ইউ ইউজুয়ালি অ্যাপ্রোচ?"
            },
            {
                "id": "4",
                "speaker": "Speaker B",
                "role": "B",
                "en": "I always start politely with a clear greeting and simple question.",
                "bn": "আমি সবসময় একটি সুন্দর সম্ভাষণ ও সহজ প্রশ্ন দিয়ে বিনয়ের সাথে শুরু করি।",
                "ipa": "/aɪ ˈɔːlweɪz stɑːt pəˈlaɪtli wɪð ə klɪə ˈɡriːtɪŋ/",
                "bn_pron": "আই অলওয়েজ স্টার্ট পোলাইটলি উইথ আ ক্লিয়ার গ্রীটিং।"
            },
            {
                "id": "5",
                "speaker": "Speaker A",
                "role": "A",
                "en": "That makes complete sense! Clarity and confidence make a huge difference.",
                "bn": "একদম যথার্থ! স্পষ্টতা ও আত্মবিশ্বাস অনেক বড় ইতিবাচক পরিবর্তন আনে।",
                "ipa": "/ðæt meɪks kəmˈpliːt sens ˈklærəti ænd ˈkɒnfɪdəns/",
                "bn_pron": "দ্যাট মেইকস কমপ্লিট সেন্স! ক্ল্যারিটি অ্যান্ড কনফিডেন্স।"
            },
            {
                "id": "6",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Exactly. And active listening helps in responding naturally without hesitation.",
                "bn": "ঠিক তাই। আর মনোযোগ দিয়ে শুনলে দ্বিধাহীনভাবে স্বাভাবিক উত্তর দেওয়া সম্ভব হয়।",
                "ipa": "/ɪɡˈzæktli ænd ˈæktɪv ˈlɪsnɪŋ helps ɪn rɪˈspɒndɪŋ ˈnætʃrəli/",
                "bn_pron": "এক্স্যাক্টলি। অ্যান্ড অ্যাকটিভ লিসেনিং হেল্পস ইন রেসপন্ডিং ন্যাচারালি।"
            },
            {
                "id": "7",
                "speaker": "Speaker A",
                "role": "A",
                "en": "What common mistake should learners avoid in this situation?",
                "bn": "এই পরিস্থিতিতে শিক্ষার্থীদের কোন সাধারণ ভুলটি এড়িয়ে চলা উচিত?",
                "ipa": "/wɒt ˈkɒmən mɪˈsteɪk ʃʊd ˈlɜːnəz əˈvɔɪd/",
                "bn_pron": "ওয়াট কমন মিসটেইক শুড লার্নার্স অ্যাভয়েড?"
            },
            {
                "id": "8",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Never translate literally word for word from Bengali; use native phrases!",
                "bn": "কখনো বাংলা থেকে হুবহু শব্দ ধরে ধরে অনুবাদ করবেন না; স্বাভাবিক নেটিভ ফ্রেজ ব্যবহার করুন!",
                "ipa": "/ˈnevə trænzˈleɪt ˈlɪtərəli wɜːd fɔː wɜːd juːz ˈneɪtɪv freɪzɪz/",
                "bn_pron": "নেভার ট্রান্সলেইট লিটারালি ওয়ার্ড ফর ওয়ার্ড; ইউয নেইটিভ ফ্রেজেস!"
            },
            {
                "id": "9",
                "speaker": "Speaker A",
                "role": "A",
                "en": "That is golden advice. Daily practice makes fluent speakers.",
                "bn": "এটি অমূল্য পরামর্শ। নিয়মিত চর্চাতেই অনর্গল কথা বলা সম্ভব।",
                "ipa": "/ðæt ɪz ˈɡəʊldən ədˈvaɪs ˈdeɪli ˈpræktɪs meɪks ˈfluːənt/",
                "bn_pron": "দ্যাট ইয গোল্ডেন অ্যাডভাইস। ডেইলি প্র্যাকটিস মেইকস ফ্লুয়েন্ট।"
            },
            {
                "id": "10",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Absolutely! Repetition guarantees effortless conversational confidence.",
                "bn": "একদমই তাই! বারবার বলা নিশ্চিতভাবেই অনর্গল সাবলীলতা এনে দেয়।",
                "ipa": "/ˌæbsəˈluːtli ˌrepəˈtɪʃn ˌɡærənˈtiːz ˈkɒnfɪdəns/",
                "bn_pron": "অ্যাবসলিউটলি! রিপিটিশন গ্যারান্টিয কনফিডেন্স।"
            }
        ],
        "followUps": [
            {
                "en": "Could you elaborate on the key points, please?",
                "bn": "প্রধান বিষয়গুলো কি একটু বিস্তারিত বলবেন, প্লিজ?"
            },
            {
                "en": "How do you usually handle unexpected challenges here?",
                "bn": "এখানে কোনো অপ্রত্যাশিত পরিস্থিতি সৃষ্টি হলে কীভাবে সামলান?"
            },
            {
                "en": "Would tomorrow be a good time to follow up on this?",
                "bn": "আগামীকাল কি বিষয়টি নিয়ে আবার কথা বলা সুবিধার হবে?"
            }
        ],
        "closers": [
            {
                "en": "Thank you so much for your valuable time and cooperation!",
                "bn": "আপনার মূল্যবান সময় ও সহযোগিতার জন্য অনেক ধন্যবাদ!"
            },
            {
                "en": "I truly appreciate your kind help. Have a wonderful day!",
                "bn": "আপনার আন্তরিক সহায়তার জন্য কৃতজ্ঞতা জানাচ্ছি। দিনটি সুন্দর কাটুক!"
            },
            {
                "en": "Let's stay in touch and coordinate soon. Take care!",
                "bn": "যোগাযোগে থাকব এবং দ্রুতই আপডেট দেব। ভালো থাকবেন!"
            }
        ],
        "nativePhrases": [
            {
                "phrase": "Make complete sense",
                "meaning": "সম্পূর্ণ যুক্তিযুক্ত ও বোধগম্য হওয়া",
                "context": "কারো বক্তব্যে সহমত জানাতে নেটিভদের সবচেয়ে প্রিয় ফ্রেজ।"
            },
            {
                "phrase": "Without hesitation",
                "meaning": "দ্বিধা বা ভয় ছাড়া নিঃসঙ্কোচে",
                "context": "আত্মবিশ্বাসের সাথে কোনো কাজ করার ক্ষেত্রে।"
            },
            {
                "phrase": "Stay in touch",
                "meaning": "নিয়মিত যোগাযোগ বজায় রাখা",
                "context": "বিদায়ের সময় সম্মানজনক অনুরোধ হিসেবে।"
            }
        ]
    },
    {
        "id": "conv-37-discussing-a-salary-raise-with-manager",
        "number": 37,
        "title": "Discussing a Salary Raise with Manager",
        "titleBn": "ম্যানেজারের সাথে পারফরম্যান্স ও বেতন বৃদ্ধির সেশন",
        "level": "Intermediate",
        "category": "Professional",
        "sceneDescription": "ম্যানেজারের সাথে পারফরম্যান্স ও বেতন বৃদ্ধির সেশন সংক্রান্ত বাস্তব কথোপকথন এবং প্রয়োজনীয় বাক্যসমূহ।",
        "starters": [
            {
                "en": "Hello! Could you help me regarding discussing a salary raise with manager?",
                "bn": "হ্যালো! এই বিষয়ে কি আমাকে একটু সহায়তা করতে পারেন?",
                "tip": "কথা শুরু করার সবচেয়ে কার্যকর ও শিষ্ট উপায়।"
            },
            {
                "en": "Excuse me, do you have a quick moment to discuss this?",
                "bn": "মাফ করবেন, এই বিষয়ে কথা বলার মতো কি সামান্য সময় হবে?",
                "tip": "নম্রভাবে সম্মতি নেওয়ার বাক্য।"
            },
            {
                "en": "Hi there, I was wondering if we could talk about this.",
                "bn": "হাই, আমি ভাবছিলাম আমরা কি বিষয়টি নিয়ে একটু কথা বলতে পারি?",
                "tip": "অতি ভদ্র ও প্রফেশনাল ভূমিকা।"
            }
        ],
        "dialogue": [
            {
                "id": "1",
                "speaker": "Speaker A",
                "role": "A",
                "en": "Hello, how are you doing today? We are focusing on discussing a salary raise with manager.",
                "bn": "হ্যালো, আপনি কেমন আছেন? আমরা আজ ম্যানেজারের সাথে পারফরম্যান্স ও বেতন বৃদ্ধির সেশন নিয়ে কথা বলছি।",
                "ipa": "/həˈləʊ haʊ ɑː juː ˈduːɪŋ təˈdeɪ/",
                "bn_pron": "হ্যালো, হাউ আ ইউ ডুয়িং টুডেই?"
            },
            {
                "id": "2",
                "speaker": "Speaker B",
                "role": "B",
                "en": "I'm doing well, thank you! It's an essential scenario to practice.",
                "bn": "আমি ভালো আছি, ধন্যবাদ! এটি চর্চা করার মতো খুবই দরকারি একটি দৃশ্যপট।",
                "ipa": "/aɪm ˈduːɪŋ wel θæŋk juː ɪts ən ɪˈsenʃl sɪˈnɑːriəʊ/",
                "bn_pron": "আইম ডুয়িং ওয়েল, থ্যাংক ইউ! ইটস অ্যান এসেনশিয়াল সিনারিও।"
            },
            {
                "id": "3",
                "speaker": "Speaker A",
                "role": "A",
                "en": "Could you tell me how you usually approach this situation?",
                "bn": "আপনি সাধারণত এই পরিস্থিতিতে কীভাবে কথা শুরু করেন?",
                "ipa": "/kʊd juː tel miː haʊ juː ˈjuːʒʊəli əˈprəʊtʃ/",
                "bn_pron": "কুড ইউ টেল মি হাউ ইউ ইউজুয়ালি অ্যাপ্রোচ?"
            },
            {
                "id": "4",
                "speaker": "Speaker B",
                "role": "B",
                "en": "I always start politely with a clear greeting and simple question.",
                "bn": "আমি সবসময় একটি সুন্দর সম্ভাষণ ও সহজ প্রশ্ন দিয়ে বিনয়ের সাথে শুরু করি।",
                "ipa": "/aɪ ˈɔːlweɪz stɑːt pəˈlaɪtli wɪð ə klɪə ˈɡriːtɪŋ/",
                "bn_pron": "আই অলওয়েজ স্টার্ট পোলাইটলি উইথ আ ক্লিয়ার গ্রীটিং।"
            },
            {
                "id": "5",
                "speaker": "Speaker A",
                "role": "A",
                "en": "That makes complete sense! Clarity and confidence make a huge difference.",
                "bn": "একদম যথার্থ! স্পষ্টতা ও আত্মবিশ্বাস অনেক বড় ইতিবাচক পরিবর্তন আনে।",
                "ipa": "/ðæt meɪks kəmˈpliːt sens ˈklærəti ænd ˈkɒnfɪdəns/",
                "bn_pron": "দ্যাট মেইকস কমপ্লিট সেন্স! ক্ল্যারিটি অ্যান্ড কনফিডেন্স।"
            },
            {
                "id": "6",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Exactly. And active listening helps in responding naturally without hesitation.",
                "bn": "ঠিক তাই। আর মনোযোগ দিয়ে শুনলে দ্বিধাহীনভাবে স্বাভাবিক উত্তর দেওয়া সম্ভব হয়।",
                "ipa": "/ɪɡˈzæktli ænd ˈæktɪv ˈlɪsnɪŋ helps ɪn rɪˈspɒndɪŋ ˈnætʃrəli/",
                "bn_pron": "এক্স্যাক্টলি। অ্যান্ড অ্যাকটিভ লিসেনিং হেল্পস ইন রেসপন্ডিং ন্যাচারালি।"
            },
            {
                "id": "7",
                "speaker": "Speaker A",
                "role": "A",
                "en": "What common mistake should learners avoid in this situation?",
                "bn": "এই পরিস্থিতিতে শিক্ষার্থীদের কোন সাধারণ ভুলটি এড়িয়ে চলা উচিত?",
                "ipa": "/wɒt ˈkɒmən mɪˈsteɪk ʃʊd ˈlɜːnəz əˈvɔɪd/",
                "bn_pron": "ওয়াট কমন মিসটেইক শুড লার্নার্স অ্যাভয়েড?"
            },
            {
                "id": "8",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Never translate literally word for word from Bengali; use native phrases!",
                "bn": "কখনো বাংলা থেকে হুবহু শব্দ ধরে ধরে অনুবাদ করবেন না; স্বাভাবিক নেটিভ ফ্রেজ ব্যবহার করুন!",
                "ipa": "/ˈnevə trænzˈleɪt ˈlɪtərəli wɜːd fɔː wɜːd juːz ˈneɪtɪv freɪzɪz/",
                "bn_pron": "নেভার ট্রান্সলেইট লিটারালি ওয়ার্ড ফর ওয়ার্ড; ইউয নেইটিভ ফ্রেজেস!"
            },
            {
                "id": "9",
                "speaker": "Speaker A",
                "role": "A",
                "en": "That is golden advice. Daily practice makes fluent speakers.",
                "bn": "এটি অমূল্য পরামর্শ। নিয়মিত চর্চাতেই অনর্গল কথা বলা সম্ভব।",
                "ipa": "/ðæt ɪz ˈɡəʊldən ədˈvaɪs ˈdeɪli ˈpræktɪs meɪks ˈfluːənt/",
                "bn_pron": "দ্যাট ইয গোল্ডেন অ্যাডভাইস। ডেইলি প্র্যাকটিস মেইকস ফ্লুয়েন্ট।"
            },
            {
                "id": "10",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Absolutely! Repetition guarantees effortless conversational confidence.",
                "bn": "একদমই তাই! বারবার বলা নিশ্চিতভাবেই অনর্গল সাবলীলতা এনে দেয়।",
                "ipa": "/ˌæbsəˈluːtli ˌrepəˈtɪʃn ˌɡærənˈtiːz ˈkɒnfɪdəns/",
                "bn_pron": "অ্যাবসলিউটলি! রিপিটিশন গ্যারান্টিয কনফিডেন্স।"
            }
        ],
        "followUps": [
            {
                "en": "Could you elaborate on the key points, please?",
                "bn": "প্রধান বিষয়গুলো কি একটু বিস্তারিত বলবেন, প্লিজ?"
            },
            {
                "en": "How do you usually handle unexpected challenges here?",
                "bn": "এখানে কোনো অপ্রত্যাশিত পরিস্থিতি সৃষ্টি হলে কীভাবে সামলান?"
            },
            {
                "en": "Would tomorrow be a good time to follow up on this?",
                "bn": "আগামীকাল কি বিষয়টি নিয়ে আবার কথা বলা সুবিধার হবে?"
            }
        ],
        "closers": [
            {
                "en": "Thank you so much for your valuable time and cooperation!",
                "bn": "আপনার মূল্যবান সময় ও সহযোগিতার জন্য অনেক ধন্যবাদ!"
            },
            {
                "en": "I truly appreciate your kind help. Have a wonderful day!",
                "bn": "আপনার আন্তরিক সহায়তার জন্য কৃতজ্ঞতা জানাচ্ছি। দিনটি সুন্দর কাটুক!"
            },
            {
                "en": "Let's stay in touch and coordinate soon. Take care!",
                "bn": "যোগাযোগে থাকব এবং দ্রুতই আপডেট দেব। ভালো থাকবেন!"
            }
        ],
        "nativePhrases": [
            {
                "phrase": "Make complete sense",
                "meaning": "সম্পূর্ণ যুক্তিযুক্ত ও বোধগম্য হওয়া",
                "context": "কারো বক্তব্যে সহমত জানাতে নেটিভদের সবচেয়ে প্রিয় ফ্রেজ।"
            },
            {
                "phrase": "Without hesitation",
                "meaning": "দ্বিধা বা ভয় ছাড়া নিঃসঙ্কোচে",
                "context": "আত্মবিশ্বাসের সাথে কোনো কাজ করার ক্ষেত্রে।"
            },
            {
                "phrase": "Stay in touch",
                "meaning": "নিয়মিত যোগাযোগ বজায় রাখা",
                "context": "বিদায়ের সময় সম্মানজনক অনুরোধ হিসেবে।"
            }
        ]
    },
    {
        "id": "conv-38-emergency-reporting-lost-bag-to-police",
        "number": 38,
        "title": "Emergency: Reporting Lost Bag to Police",
        "titleBn": "জরুরি অবস্থায় পুলিশ স্টেশনে হারানো বা চুরির রিপোর্ট করা",
        "level": "Intermediate",
        "category": "Services",
        "sceneDescription": "জরুরি অবস্থায় পুলিশ স্টেশনে হারানো বা চুরির রিপোর্ট করা সংক্রান্ত বাস্তব কথোপকথন এবং প্রয়োজনীয় বাক্যসমূহ।",
        "starters": [
            {
                "en": "Hello! Could you help me regarding emergency: reporting lost bag to police?",
                "bn": "হ্যালো! এই বিষয়ে কি আমাকে একটু সহায়তা করতে পারেন?",
                "tip": "কথা শুরু করার সবচেয়ে কার্যকর ও শিষ্ট উপায়।"
            },
            {
                "en": "Excuse me, do you have a quick moment to discuss this?",
                "bn": "মাফ করবেন, এই বিষয়ে কথা বলার মতো কি সামান্য সময় হবে?",
                "tip": "নম্রভাবে সম্মতি নেওয়ার বাক্য।"
            },
            {
                "en": "Hi there, I was wondering if we could talk about this.",
                "bn": "হাই, আমি ভাবছিলাম আমরা কি বিষয়টি নিয়ে একটু কথা বলতে পারি?",
                "tip": "অতি ভদ্র ও প্রফেশনাল ভূমিকা।"
            }
        ],
        "dialogue": [
            {
                "id": "1",
                "speaker": "Speaker A",
                "role": "A",
                "en": "Hello, how are you doing today? We are focusing on emergency: reporting lost bag to police.",
                "bn": "হ্যালো, আপনি কেমন আছেন? আমরা আজ জরুরি অবস্থায় পুলিশ স্টেশনে হারানো বা চুরির রিপোর্ট করা নিয়ে কথা বলছি।",
                "ipa": "/həˈləʊ haʊ ɑː juː ˈduːɪŋ təˈdeɪ/",
                "bn_pron": "হ্যালো, হাউ আ ইউ ডুয়িং টুডেই?"
            },
            {
                "id": "2",
                "speaker": "Speaker B",
                "role": "B",
                "en": "I'm doing well, thank you! It's an essential scenario to practice.",
                "bn": "আমি ভালো আছি, ধন্যবাদ! এটি চর্চা করার মতো খুবই দরকারি একটি দৃশ্যপট।",
                "ipa": "/aɪm ˈduːɪŋ wel θæŋk juː ɪts ən ɪˈsenʃl sɪˈnɑːriəʊ/",
                "bn_pron": "আইম ডুয়িং ওয়েল, থ্যাংক ইউ! ইটস অ্যান এসেনশিয়াল সিনারিও।"
            },
            {
                "id": "3",
                "speaker": "Speaker A",
                "role": "A",
                "en": "Could you tell me how you usually approach this situation?",
                "bn": "আপনি সাধারণত এই পরিস্থিতিতে কীভাবে কথা শুরু করেন?",
                "ipa": "/kʊd juː tel miː haʊ juː ˈjuːʒʊəli əˈprəʊtʃ/",
                "bn_pron": "কুড ইউ টেল মি হাউ ইউ ইউজুয়ালি অ্যাপ্রোচ?"
            },
            {
                "id": "4",
                "speaker": "Speaker B",
                "role": "B",
                "en": "I always start politely with a clear greeting and simple question.",
                "bn": "আমি সবসময় একটি সুন্দর সম্ভাষণ ও সহজ প্রশ্ন দিয়ে বিনয়ের সাথে শুরু করি।",
                "ipa": "/aɪ ˈɔːlweɪz stɑːt pəˈlaɪtli wɪð ə klɪə ˈɡriːtɪŋ/",
                "bn_pron": "আই অলওয়েজ স্টার্ট পোলাইটলি উইথ আ ক্লিয়ার গ্রীটিং।"
            },
            {
                "id": "5",
                "speaker": "Speaker A",
                "role": "A",
                "en": "That makes complete sense! Clarity and confidence make a huge difference.",
                "bn": "একদম যথার্থ! স্পষ্টতা ও আত্মবিশ্বাস অনেক বড় ইতিবাচক পরিবর্তন আনে।",
                "ipa": "/ðæt meɪks kəmˈpliːt sens ˈklærəti ænd ˈkɒnfɪdəns/",
                "bn_pron": "দ্যাট মেইকস কমপ্লিট সেন্স! ক্ল্যারিটি অ্যান্ড কনফিডেন্স।"
            },
            {
                "id": "6",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Exactly. And active listening helps in responding naturally without hesitation.",
                "bn": "ঠিক তাই। আর মনোযোগ দিয়ে শুনলে দ্বিধাহীনভাবে স্বাভাবিক উত্তর দেওয়া সম্ভব হয়।",
                "ipa": "/ɪɡˈzæktli ænd ˈæktɪv ˈlɪsnɪŋ helps ɪn rɪˈspɒndɪŋ ˈnætʃrəli/",
                "bn_pron": "এক্স্যাক্টলি। অ্যান্ড অ্যাকটিভ লিসেনিং হেল্পস ইন রেসপন্ডিং ন্যাচারালি।"
            },
            {
                "id": "7",
                "speaker": "Speaker A",
                "role": "A",
                "en": "What common mistake should learners avoid in this situation?",
                "bn": "এই পরিস্থিতিতে শিক্ষার্থীদের কোন সাধারণ ভুলটি এড়িয়ে চলা উচিত?",
                "ipa": "/wɒt ˈkɒmən mɪˈsteɪk ʃʊd ˈlɜːnəz əˈvɔɪd/",
                "bn_pron": "ওয়াট কমন মিসটেইক শুড লার্নার্স অ্যাভয়েড?"
            },
            {
                "id": "8",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Never translate literally word for word from Bengali; use native phrases!",
                "bn": "কখনো বাংলা থেকে হুবহু শব্দ ধরে ধরে অনুবাদ করবেন না; স্বাভাবিক নেটিভ ফ্রেজ ব্যবহার করুন!",
                "ipa": "/ˈnevə trænzˈleɪt ˈlɪtərəli wɜːd fɔː wɜːd juːz ˈneɪtɪv freɪzɪz/",
                "bn_pron": "নেভার ট্রান্সলেইট লিটারালি ওয়ার্ড ফর ওয়ার্ড; ইউয নেইটিভ ফ্রেজেস!"
            },
            {
                "id": "9",
                "speaker": "Speaker A",
                "role": "A",
                "en": "That is golden advice. Daily practice makes fluent speakers.",
                "bn": "এটি অমূল্য পরামর্শ। নিয়মিত চর্চাতেই অনর্গল কথা বলা সম্ভব।",
                "ipa": "/ðæt ɪz ˈɡəʊldən ədˈvaɪs ˈdeɪli ˈpræktɪs meɪks ˈfluːənt/",
                "bn_pron": "দ্যাট ইয গোল্ডেন অ্যাডভাইস। ডেইলি প্র্যাকটিস মেইকস ফ্লুয়েন্ট।"
            },
            {
                "id": "10",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Absolutely! Repetition guarantees effortless conversational confidence.",
                "bn": "একদমই তাই! বারবার বলা নিশ্চিতভাবেই অনর্গল সাবলীলতা এনে দেয়।",
                "ipa": "/ˌæbsəˈluːtli ˌrepəˈtɪʃn ˌɡærənˈtiːz ˈkɒnfɪdəns/",
                "bn_pron": "অ্যাবসলিউটলি! রিপিটিশন গ্যারান্টিয কনফিডেন্স।"
            }
        ],
        "followUps": [
            {
                "en": "Could you elaborate on the key points, please?",
                "bn": "প্রধান বিষয়গুলো কি একটু বিস্তারিত বলবেন, প্লিজ?"
            },
            {
                "en": "How do you usually handle unexpected challenges here?",
                "bn": "এখানে কোনো অপ্রত্যাশিত পরিস্থিতি সৃষ্টি হলে কীভাবে সামলান?"
            },
            {
                "en": "Would tomorrow be a good time to follow up on this?",
                "bn": "আগামীকাল কি বিষয়টি নিয়ে আবার কথা বলা সুবিধার হবে?"
            }
        ],
        "closers": [
            {
                "en": "Thank you so much for your valuable time and cooperation!",
                "bn": "আপনার মূল্যবান সময় ও সহযোগিতার জন্য অনেক ধন্যবাদ!"
            },
            {
                "en": "I truly appreciate your kind help. Have a wonderful day!",
                "bn": "আপনার আন্তরিক সহায়তার জন্য কৃতজ্ঞতা জানাচ্ছি। দিনটি সুন্দর কাটুক!"
            },
            {
                "en": "Let's stay in touch and coordinate soon. Take care!",
                "bn": "যোগাযোগে থাকব এবং দ্রুতই আপডেট দেব। ভালো থাকবেন!"
            }
        ],
        "nativePhrases": [
            {
                "phrase": "Make complete sense",
                "meaning": "সম্পূর্ণ যুক্তিযুক্ত ও বোধগম্য হওয়া",
                "context": "কারো বক্তব্যে সহমত জানাতে নেটিভদের সবচেয়ে প্রিয় ফ্রেজ।"
            },
            {
                "phrase": "Without hesitation",
                "meaning": "দ্বিধা বা ভয় ছাড়া নিঃসঙ্কোচে",
                "context": "আত্মবিশ্বাসের সাথে কোনো কাজ করার ক্ষেত্রে।"
            },
            {
                "phrase": "Stay in touch",
                "meaning": "নিয়মিত যোগাযোগ বজায় রাখা",
                "context": "বিদায়ের সময় সম্মানজনক অনুরোধ হিসেবে।"
            }
        ]
    },
    {
        "id": "conv-39-requesting-sick-leave-or-day-off-from-manager",
        "number": 39,
        "title": "Requesting Sick Leave or Day Off from Manager",
        "titleBn": "হঠাৎ অসুস্থতার কারণে অফিস ম্যানেজারের কাছে ছুটির আবেদন",
        "level": "Intermediate",
        "category": "Professional",
        "sceneDescription": "হঠাৎ অসুস্থতার কারণে অফিস ম্যানেজারের কাছে ছুটির আবেদন সংক্রান্ত বাস্তব কথোপকথন এবং প্রয়োজনীয় বাক্যসমূহ।",
        "starters": [
            {
                "en": "Hello! Could you help me regarding requesting sick leave or day off from manager?",
                "bn": "হ্যালো! এই বিষয়ে কি আমাকে একটু সহায়তা করতে পারেন?",
                "tip": "কথা শুরু করার সবচেয়ে কার্যকর ও শিষ্ট উপায়।"
            },
            {
                "en": "Excuse me, do you have a quick moment to discuss this?",
                "bn": "মাফ করবেন, এই বিষয়ে কথা বলার মতো কি সামান্য সময় হবে?",
                "tip": "নম্রভাবে সম্মতি নেওয়ার বাক্য।"
            },
            {
                "en": "Hi there, I was wondering if we could talk about this.",
                "bn": "হাই, আমি ভাবছিলাম আমরা কি বিষয়টি নিয়ে একটু কথা বলতে পারি?",
                "tip": "অতি ভদ্র ও প্রফেশনাল ভূমিকা।"
            }
        ],
        "dialogue": [
            {
                "id": "1",
                "speaker": "Speaker A",
                "role": "A",
                "en": "Hello, how are you doing today? We are focusing on requesting sick leave or day off from manager.",
                "bn": "হ্যালো, আপনি কেমন আছেন? আমরা আজ হঠাৎ অসুস্থতার কারণে অফিস ম্যানেজারের কাছে ছুটির আবেদন নিয়ে কথা বলছি।",
                "ipa": "/həˈləʊ haʊ ɑː juː ˈduːɪŋ təˈdeɪ/",
                "bn_pron": "হ্যালো, হাউ আ ইউ ডুয়িং টুডেই?"
            },
            {
                "id": "2",
                "speaker": "Speaker B",
                "role": "B",
                "en": "I'm doing well, thank you! It's an essential scenario to practice.",
                "bn": "আমি ভালো আছি, ধন্যবাদ! এটি চর্চা করার মতো খুবই দরকারি একটি দৃশ্যপট।",
                "ipa": "/aɪm ˈduːɪŋ wel θæŋk juː ɪts ən ɪˈsenʃl sɪˈnɑːriəʊ/",
                "bn_pron": "আইম ডুয়িং ওয়েল, থ্যাংক ইউ! ইটস অ্যান এসেনশিয়াল সিনারিও।"
            },
            {
                "id": "3",
                "speaker": "Speaker A",
                "role": "A",
                "en": "Could you tell me how you usually approach this situation?",
                "bn": "আপনি সাধারণত এই পরিস্থিতিতে কীভাবে কথা শুরু করেন?",
                "ipa": "/kʊd juː tel miː haʊ juː ˈjuːʒʊəli əˈprəʊtʃ/",
                "bn_pron": "কুড ইউ টেল মি হাউ ইউ ইউজুয়ালি অ্যাপ্রোচ?"
            },
            {
                "id": "4",
                "speaker": "Speaker B",
                "role": "B",
                "en": "I always start politely with a clear greeting and simple question.",
                "bn": "আমি সবসময় একটি সুন্দর সম্ভাষণ ও সহজ প্রশ্ন দিয়ে বিনয়ের সাথে শুরু করি।",
                "ipa": "/aɪ ˈɔːlweɪz stɑːt pəˈlaɪtli wɪð ə klɪə ˈɡriːtɪŋ/",
                "bn_pron": "আই অলওয়েজ স্টার্ট পোলাইটলি উইথ আ ক্লিয়ার গ্রীটিং।"
            },
            {
                "id": "5",
                "speaker": "Speaker A",
                "role": "A",
                "en": "That makes complete sense! Clarity and confidence make a huge difference.",
                "bn": "একদম যথার্থ! স্পষ্টতা ও আত্মবিশ্বাস অনেক বড় ইতিবাচক পরিবর্তন আনে।",
                "ipa": "/ðæt meɪks kəmˈpliːt sens ˈklærəti ænd ˈkɒnfɪdəns/",
                "bn_pron": "দ্যাট মেইকস কমপ্লিট সেন্স! ক্ল্যারিটি অ্যান্ড কনফিডেন্স।"
            },
            {
                "id": "6",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Exactly. And active listening helps in responding naturally without hesitation.",
                "bn": "ঠিক তাই। আর মনোযোগ দিয়ে শুনলে দ্বিধাহীনভাবে স্বাভাবিক উত্তর দেওয়া সম্ভব হয়।",
                "ipa": "/ɪɡˈzæktli ænd ˈæktɪv ˈlɪsnɪŋ helps ɪn rɪˈspɒndɪŋ ˈnætʃrəli/",
                "bn_pron": "এক্স্যাক্টলি। অ্যান্ড অ্যাকটিভ লিসেনিং হেল্পস ইন রেসপন্ডিং ন্যাচারালি।"
            },
            {
                "id": "7",
                "speaker": "Speaker A",
                "role": "A",
                "en": "What common mistake should learners avoid in this situation?",
                "bn": "এই পরিস্থিতিতে শিক্ষার্থীদের কোন সাধারণ ভুলটি এড়িয়ে চলা উচিত?",
                "ipa": "/wɒt ˈkɒmən mɪˈsteɪk ʃʊd ˈlɜːnəz əˈvɔɪd/",
                "bn_pron": "ওয়াট কমন মিসটেইক শুড লার্নার্স অ্যাভয়েড?"
            },
            {
                "id": "8",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Never translate literally word for word from Bengali; use native phrases!",
                "bn": "কখনো বাংলা থেকে হুবহু শব্দ ধরে ধরে অনুবাদ করবেন না; স্বাভাবিক নেটিভ ফ্রেজ ব্যবহার করুন!",
                "ipa": "/ˈnevə trænzˈleɪt ˈlɪtərəli wɜːd fɔː wɜːd juːz ˈneɪtɪv freɪzɪz/",
                "bn_pron": "নেভার ট্রান্সলেইট লিটারালি ওয়ার্ড ফর ওয়ার্ড; ইউয নেইটিভ ফ্রেজেস!"
            },
            {
                "id": "9",
                "speaker": "Speaker A",
                "role": "A",
                "en": "That is golden advice. Daily practice makes fluent speakers.",
                "bn": "এটি অমূল্য পরামর্শ। নিয়মিত চর্চাতেই অনর্গল কথা বলা সম্ভব।",
                "ipa": "/ðæt ɪz ˈɡəʊldən ədˈvaɪs ˈdeɪli ˈpræktɪs meɪks ˈfluːənt/",
                "bn_pron": "দ্যাট ইয গোল্ডেন অ্যাডভাইস। ডেইলি প্র্যাকটিস মেইকস ফ্লুয়েন্ট।"
            },
            {
                "id": "10",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Absolutely! Repetition guarantees effortless conversational confidence.",
                "bn": "একদমই তাই! বারবার বলা নিশ্চিতভাবেই অনর্গল সাবলীলতা এনে দেয়।",
                "ipa": "/ˌæbsəˈluːtli ˌrepəˈtɪʃn ˌɡærənˈtiːz ˈkɒnfɪdəns/",
                "bn_pron": "অ্যাবসলিউটলি! রিপিটিশন গ্যারান্টিয কনফিডেন্স।"
            }
        ],
        "followUps": [
            {
                "en": "Could you elaborate on the key points, please?",
                "bn": "প্রধান বিষয়গুলো কি একটু বিস্তারিত বলবেন, প্লিজ?"
            },
            {
                "en": "How do you usually handle unexpected challenges here?",
                "bn": "এখানে কোনো অপ্রত্যাশিত পরিস্থিতি সৃষ্টি হলে কীভাবে সামলান?"
            },
            {
                "en": "Would tomorrow be a good time to follow up on this?",
                "bn": "আগামীকাল কি বিষয়টি নিয়ে আবার কথা বলা সুবিধার হবে?"
            }
        ],
        "closers": [
            {
                "en": "Thank you so much for your valuable time and cooperation!",
                "bn": "আপনার মূল্যবান সময় ও সহযোগিতার জন্য অনেক ধন্যবাদ!"
            },
            {
                "en": "I truly appreciate your kind help. Have a wonderful day!",
                "bn": "আপনার আন্তরিক সহায়তার জন্য কৃতজ্ঞতা জানাচ্ছি। দিনটি সুন্দর কাটুক!"
            },
            {
                "en": "Let's stay in touch and coordinate soon. Take care!",
                "bn": "যোগাযোগে থাকব এবং দ্রুতই আপডেট দেব। ভালো থাকবেন!"
            }
        ],
        "nativePhrases": [
            {
                "phrase": "Make complete sense",
                "meaning": "সম্পূর্ণ যুক্তিযুক্ত ও বোধগম্য হওয়া",
                "context": "কারো বক্তব্যে সহমত জানাতে নেটিভদের সবচেয়ে প্রিয় ফ্রেজ।"
            },
            {
                "phrase": "Without hesitation",
                "meaning": "দ্বিধা বা ভয় ছাড়া নিঃসঙ্কোচে",
                "context": "আত্মবিশ্বাসের সাথে কোনো কাজ করার ক্ষেত্রে।"
            },
            {
                "phrase": "Stay in touch",
                "meaning": "নিয়মিত যোগাযোগ বজায় রাখা",
                "context": "বিদায়ের সময় সম্মানজনক অনুরোধ হিসেবে।"
            }
        ]
    },
    {
        "id": "conv-40-saying-goodbye-networking-future-plans",
        "number": 40,
        "title": "Saying Goodbye, Networking & Future Plans",
        "titleBn": "অনুষ্ঠান শেষে সম্মানজনক বিদায় ও দীর্ঘমেয়াদী যোগাযোগ স্থাপন",
        "level": "Intermediate",
        "category": "Social",
        "sceneDescription": "অনুষ্ঠান শেষে সম্মানজনক বিদায় ও দীর্ঘমেয়াদী যোগাযোগ স্থাপন সংক্রান্ত বাস্তব কথোপকথন এবং প্রয়োজনীয় বাক্যসমূহ।",
        "starters": [
            {
                "en": "Hello! Could you help me regarding saying goodbye, networking & future plans?",
                "bn": "হ্যালো! এই বিষয়ে কি আমাকে একটু সহায়তা করতে পারেন?",
                "tip": "কথা শুরু করার সবচেয়ে কার্যকর ও শিষ্ট উপায়।"
            },
            {
                "en": "Excuse me, do you have a quick moment to discuss this?",
                "bn": "মাফ করবেন, এই বিষয়ে কথা বলার মতো কি সামান্য সময় হবে?",
                "tip": "নম্রভাবে সম্মতি নেওয়ার বাক্য।"
            },
            {
                "en": "Hi there, I was wondering if we could talk about this.",
                "bn": "হাই, আমি ভাবছিলাম আমরা কি বিষয়টি নিয়ে একটু কথা বলতে পারি?",
                "tip": "অতি ভদ্র ও প্রফেশনাল ভূমিকা।"
            }
        ],
        "dialogue": [
            {
                "id": "1",
                "speaker": "Speaker A",
                "role": "A",
                "en": "Hello, how are you doing today? We are focusing on saying goodbye, networking & future plans.",
                "bn": "হ্যালো, আপনি কেমন আছেন? আমরা আজ অনুষ্ঠান শেষে সম্মানজনক বিদায় ও দীর্ঘমেয়াদী যোগাযোগ স্থাপন নিয়ে কথা বলছি।",
                "ipa": "/həˈləʊ haʊ ɑː juː ˈduːɪŋ təˈdeɪ/",
                "bn_pron": "হ্যালো, হাউ আ ইউ ডুয়িং টুডেই?"
            },
            {
                "id": "2",
                "speaker": "Speaker B",
                "role": "B",
                "en": "I'm doing well, thank you! It's an essential scenario to practice.",
                "bn": "আমি ভালো আছি, ধন্যবাদ! এটি চর্চা করার মতো খুবই দরকারি একটি দৃশ্যপট।",
                "ipa": "/aɪm ˈduːɪŋ wel θæŋk juː ɪts ən ɪˈsenʃl sɪˈnɑːriəʊ/",
                "bn_pron": "আইম ডুয়িং ওয়েল, থ্যাংক ইউ! ইটস অ্যান এসেনশিয়াল সিনারিও।"
            },
            {
                "id": "3",
                "speaker": "Speaker A",
                "role": "A",
                "en": "Could you tell me how you usually approach this situation?",
                "bn": "আপনি সাধারণত এই পরিস্থিতিতে কীভাবে কথা শুরু করেন?",
                "ipa": "/kʊd juː tel miː haʊ juː ˈjuːʒʊəli əˈprəʊtʃ/",
                "bn_pron": "কুড ইউ টেল মি হাউ ইউ ইউজুয়ালি অ্যাপ্রোচ?"
            },
            {
                "id": "4",
                "speaker": "Speaker B",
                "role": "B",
                "en": "I always start politely with a clear greeting and simple question.",
                "bn": "আমি সবসময় একটি সুন্দর সম্ভাষণ ও সহজ প্রশ্ন দিয়ে বিনয়ের সাথে শুরু করি।",
                "ipa": "/aɪ ˈɔːlweɪz stɑːt pəˈlaɪtli wɪð ə klɪə ˈɡriːtɪŋ/",
                "bn_pron": "আই অলওয়েজ স্টার্ট পোলাইটলি উইথ আ ক্লিয়ার গ্রীটিং।"
            },
            {
                "id": "5",
                "speaker": "Speaker A",
                "role": "A",
                "en": "That makes complete sense! Clarity and confidence make a huge difference.",
                "bn": "একদম যথার্থ! স্পষ্টতা ও আত্মবিশ্বাস অনেক বড় ইতিবাচক পরিবর্তন আনে।",
                "ipa": "/ðæt meɪks kəmˈpliːt sens ˈklærəti ænd ˈkɒnfɪdəns/",
                "bn_pron": "দ্যাট মেইকস কমপ্লিট সেন্স! ক্ল্যারিটি অ্যান্ড কনফিডেন্স।"
            },
            {
                "id": "6",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Exactly. And active listening helps in responding naturally without hesitation.",
                "bn": "ঠিক তাই। আর মনোযোগ দিয়ে শুনলে দ্বিধাহীনভাবে স্বাভাবিক উত্তর দেওয়া সম্ভব হয়।",
                "ipa": "/ɪɡˈzæktli ænd ˈæktɪv ˈlɪsnɪŋ helps ɪn rɪˈspɒndɪŋ ˈnætʃrəli/",
                "bn_pron": "এক্স্যাক্টলি। অ্যান্ড অ্যাকটিভ লিসেনিং হেল্পস ইন রেসপন্ডিং ন্যাচারালি।"
            },
            {
                "id": "7",
                "speaker": "Speaker A",
                "role": "A",
                "en": "What common mistake should learners avoid in this situation?",
                "bn": "এই পরিস্থিতিতে শিক্ষার্থীদের কোন সাধারণ ভুলটি এড়িয়ে চলা উচিত?",
                "ipa": "/wɒt ˈkɒmən mɪˈsteɪk ʃʊd ˈlɜːnəz əˈvɔɪd/",
                "bn_pron": "ওয়াট কমন মিসটেইক শুড লার্নার্স অ্যাভয়েড?"
            },
            {
                "id": "8",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Never translate literally word for word from Bengali; use native phrases!",
                "bn": "কখনো বাংলা থেকে হুবহু শব্দ ধরে ধরে অনুবাদ করবেন না; স্বাভাবিক নেটিভ ফ্রেজ ব্যবহার করুন!",
                "ipa": "/ˈnevə trænzˈleɪt ˈlɪtərəli wɜːd fɔː wɜːd juːz ˈneɪtɪv freɪzɪz/",
                "bn_pron": "নেভার ট্রান্সলেইট লিটারালি ওয়ার্ড ফর ওয়ার্ড; ইউয নেইটিভ ফ্রেজেস!"
            },
            {
                "id": "9",
                "speaker": "Speaker A",
                "role": "A",
                "en": "That is golden advice. Daily practice makes fluent speakers.",
                "bn": "এটি অমূল্য পরামর্শ। নিয়মিত চর্চাতেই অনর্গল কথা বলা সম্ভব।",
                "ipa": "/ðæt ɪz ˈɡəʊldən ədˈvaɪs ˈdeɪli ˈpræktɪs meɪks ˈfluːənt/",
                "bn_pron": "দ্যাট ইয গোল্ডেন অ্যাডভাইস। ডেইলি প্র্যাকটিস মেইকস ফ্লুয়েন্ট।"
            },
            {
                "id": "10",
                "speaker": "Speaker B",
                "role": "B",
                "en": "Absolutely! Repetition guarantees effortless conversational confidence.",
                "bn": "একদমই তাই! বারবার বলা নিশ্চিতভাবেই অনর্গল সাবলীলতা এনে দেয়।",
                "ipa": "/ˌæbsəˈluːtli ˌrepəˈtɪʃn ˌɡærənˈtiːz ˈkɒnfɪdəns/",
                "bn_pron": "অ্যাবসলিউটলি! রিপিটিশন গ্যারান্টিয কনফিডেন্স।"
            }
        ],
        "followUps": [
            {
                "en": "Could you elaborate on the key points, please?",
                "bn": "প্রধান বিষয়গুলো কি একটু বিস্তারিত বলবেন, প্লিজ?"
            },
            {
                "en": "How do you usually handle unexpected challenges here?",
                "bn": "এখানে কোনো অপ্রত্যাশিত পরিস্থিতি সৃষ্টি হলে কীভাবে সামলান?"
            },
            {
                "en": "Would tomorrow be a good time to follow up on this?",
                "bn": "আগামীকাল কি বিষয়টি নিয়ে আবার কথা বলা সুবিধার হবে?"
            }
        ],
        "closers": [
            {
                "en": "Thank you so much for your valuable time and cooperation!",
                "bn": "আপনার মূল্যবান সময় ও সহযোগিতার জন্য অনেক ধন্যবাদ!"
            },
            {
                "en": "I truly appreciate your kind help. Have a wonderful day!",
                "bn": "আপনার আন্তরিক সহায়তার জন্য কৃতজ্ঞতা জানাচ্ছি। দিনটি সুন্দর কাটুক!"
            },
            {
                "en": "Let's stay in touch and coordinate soon. Take care!",
                "bn": "যোগাযোগে থাকব এবং দ্রুতই আপডেট দেব। ভালো থাকবেন!"
            }
        ],
        "nativePhrases": [
            {
                "phrase": "Make complete sense",
                "meaning": "সম্পূর্ণ যুক্তিযুক্ত ও বোধগম্য হওয়া",
                "context": "কারো বক্তব্যে সহমত জানাতে নেটিভদের সবচেয়ে প্রিয় ফ্রেজ।"
            },
            {
                "phrase": "Without hesitation",
                "meaning": "দ্বিধা বা ভয় ছাড়া নিঃসঙ্কোচে",
                "context": "আত্মবিশ্বাসের সাথে কোনো কাজ করার ক্ষেত্রে।"
            },
            {
                "phrase": "Stay in touch",
                "meaning": "নিয়মিত যোগাযোগ বজায় রাখা",
                "context": "বিদায়ের সময় সম্মানজনক অনুরোধ হিসেবে।"
            }
        ]
    }
];
