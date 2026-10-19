# -*- coding: utf-8 -*-
"""
Generator for all 40 authentic Situational Conversations for Spoken English Lab
"""
import json

CONVERSATIONS_DATA = [
    {
        "id": "conv-01-meeting-someone-for-the-first-time",
        "number": 1,
        "title": "Meeting Someone for the First Time",
        "titleBn": "নতুন কারো সাথে প্রথম পরিচয় ও কুশল বিনিময়",
        "level": "Easy",
        "category": "Social",
        "imageUrl": "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
        "sceneDescription": "আন্তর্জাতিক কনফারেন্স বা নতুন কোনো সামাজিক পরিবেশে প্রথম দেখা হলে কীভাবে আত্মবিশ্বাসের সাথে হ্যান্ডশেক করে নিজের পরিচয় দিতে হয় ও অপর ব্যক্তির খোঁজ নিতে হয়।",
        "briefing": {
            "setting": "কনফারেন্স লাউঞ্জ (Networking Lounge)",
            "roleA": { "name": "Rafi", "titleBn": "নতুন অংশগ্রহণকারী (Attendee)", "descBn": "হাসিমুখে হ্যান্ডশেক করে কুশল বিনিময় শুরু করছেন" },
            "roleB": { "name": "Sarah", "titleBn": "সহকর্মী প্রফেশনাল (Professional)", "descBn": "সাদরে সম্ভাষণ জানিয়ে নিজের ব্যাকগ্রাউন্ড শেয়ার করছেন" },
            "overviewBn": "প্রথম দেখায় ইংরেজিতে কথা বলা অনেকের কাছে ভীতিকর মনে হয়। কিন্তু সহজ একটি হাসি, স্পষ্ট সম্ভাষণ এবং 'Nice to meet you' বলে নিজের নাম ও পেশা সংক্ষেপে জানালে খুব সহজেই যেকোনো সামাজিক বা অফিশিয়াল যোগাযোগ শুরু করা যায়।",
            "politenessTips": [
                "সবসময় চোখে চোখ রেখে হাসিমুখে 'Nice to meet you' বলুন।",
                "অপর ব্যক্তির নাম মনে রাখার চেষ্টা করুন এবং কথায় নামটি একবার উচ্চারণ করুন (যেমন: 'Nice to meet you, Sarah!')।",
                "কথোপকথন একপেশে না করে অপর ব্যক্তিকে প্রশ্ন করার সুযোগ দিন ('What brings you here today?')।"
            ],
            "keyVocabulary": [
                { "word": "Pleasure to meet you", "meaning": "আপনার সাথে পরিচিত হতে পেরে আনন্দিত", "pron": "প্লেযার টু মিট ইউ" },
                { "word": "What brings you here?", "meaning": "এখানে আপনার আসার কারণ কী বা কীভাবে এলেন?", "pron": "ওয়াট ব্রিংস ইউ হিয়ার?" },
                { "word": "Background", "meaning": "পেশাগত অভিজ্ঞতা বা পটভূমি", "pron": "ব্যাকগ্রাউন্ড" },
                { "word": "Stay in touch", "meaning": "যোগাযোগ রক্ষা করা", "pron": "স্টেই ইন টাচ" }
            ]
        },
        "starters": [
            { "en": "Hi, I don't think we've met yet. I'm Rafi.", "bn": "হাই, মনে হয় আমাদের আগে পরিচয় হয়নি। আমি রাফি।", "tip": "প্রথম পরিচয় শুরুর সবচেয়ে স্বাভাবিক ও স্মার্ট উপায়।" },
            { "en": "Excuse me, mind if I join you at this table?", "bn": "মাফ করবেন, আমি কি এই টেবিলে আপনার সাথে বসতে পারি?", "tip": "কোনো ইভেন্টে ভদ্রভাবে বসার অনুমতি নেওয়ার বাক্য।" },
            { "en": "Hello! How are you enjoying the event so far?", "bn": "হ্যালো! অনুষ্ঠানটি আপনার কেমন লাগছে এ পর্যন্ত?", "tip": "সাধারণ বিষয়ের ওপর ভিত্তি করে কথোপকথন শুরু করার কৌশল।" }
        ],
        "dialogue": [
            {
                "id": "1", "speaker": "Rafi", "role": "A", "roleTitle": "Attendee / নতুন ব্যক্তি",
                "en": "Hello! I don't think we've met yet. My name is Rafi.",
                "bn": "হ্যালো! মনে হয় আমাদের আগে পরিচয় হয়নি। আমার নাম রাফি।",
                "ipa": "/həˈləʊ aɪ dəʊnt θɪŋk wiːv met jet maɪ neɪm ɪz ˈræfi/",
                "bn_pron": "হ্যালো! আই ডোন্ট থিঙ্ক উইভ মেট ইয়েট। মাই নেইম ইয রাফি।"
            },
            {
                "id": "2", "speaker": "Sarah", "role": "B", "roleTitle": "Professional / সহকর্মী",
                "en": "Nice to meet you, Rafi! I'm Sarah. What brings you here today?",
                "bn": "আপনার সাথে পরিচিত হয়ে খুব ভালো লাগল, রাফি! আমি সারা। আজ এখানে কী উদ্দেশ্যে আসা?",
                "ipa": "/naɪs tuː miːt juː ˈræfi aɪm ˈseərə wɒt brɪŋz juː hɪə təˈdeɪ/",
                "bn_pron": "নাইস টু মিট ইউ, রাফি! আইম স্যারা। ওয়াট ব্রিংস ইউ হিয়ার টুডেই?"
            },
            {
                "id": "3", "speaker": "Rafi", "role": "A", "roleTitle": "Attendee / নতুন ব্যক্তি",
                "en": "I'm attending the technology workshop. Are you in the tech industry too?",
                "bn": "আমি টেকনোলজি ওয়ার্কশপে অংশ নিতে এসেছি। আপনিও কি টেক ইন্ডাস্ট্রিতে কাজ করছেন?",
                "ipa": "/aɪm əˈtendɪŋ ðə tekˈnɒlədʒi ˈwɜːkʃɒp ɑː juː ɪn ðə tek ˈɪndəstri tuː/",
                "bn_pron": "আইম অ্যাটেন্ডিং দ্য টেকনোলজি ওয়ার্কশপ। আর ইউ ইন দ্য টেক ইন্ডাস্ট্রি টু?"
            },
            {
                "id": "4", "speaker": "Sarah", "role": "B", "roleTitle": "Professional / সহকর্মী",
                "en": "Yes, exactly! I work as a digital product designer in Dhaka.",
                "bn": "হ্যাঁ, একদম ঠিক! আমি ঢাকায় ডিজিটাল প্রোডাক্ট ডিজাইনার হিসেবে কাজ করছি।",
                "ipa": "/jes ɪɡˈzæktli aɪ wɜːk æz ə ˈdɪdʒɪtl ˈprɒdʌkt dɪˈzaɪnə ɪn ˈdɑːkə/",
                "bn_pron": "ইয়েস, এক্স্যাক্টলি! আই ওয়ার্ক অ্যাজ আ ডিজিটাল প্রোডাক্ট ডিজাইনার ইন ঢাকা।"
            },
            {
                "id": "5", "speaker": "Rafi", "role": "A", "roleTitle": "Attendee / নতুন ব্যক্তি",
                "en": "That sounds fantastic! How long have you been doing that?",
                "bn": "অসাধারণ তো! আপনি কতদিন ধরে এই পেশায় কাজ করছেন?",
                "ipa": "/ðæt saʊndz fænˈtæstɪk haʊ lɒŋ hæv juː biːn ˈduːɪŋ ðæt/",
                "bn_pron": "দ্যাট সাউন্ডস ফ্যান্টাস্টিক! হাউ লং হ্যাভ ইউ বিন ডুইং দ্যাট?"
            },
            {
                "id": "6", "speaker": "Sarah", "role": "B", "roleTitle": "Professional / সহকর্মী",
                "en": "About four years now. And what about you? What do you do?",
                "bn": "প্রায় চার বছর হলো। আর আপনার কী খবর? আপনি কী করছেন?",
                "ipa": "/əˈbaʊt fɔː jɪəz naʊ ænd wɒt əˈbaʊt juː wɒt duː juː duː/",
                "bn_pron": "অ্যাবাউট ফোর ইয়ার্স নাও। অ্যান্ড ওয়াট অ্যাবাউট ইউ? ওয়াট ডু ইউ ডু?"
            },
            {
                "id": "7", "speaker": "Rafi", "role": "A", "roleTitle": "Attendee / নতুন ব্যক্তি",
                "en": "I specialize in data analytics and business strategy.",
                "bn": "আমি ডেটা অ্যানালিটিক্স ও বিজনেস স্ট্র্যাটেজি নিয়ে কাজ করছি।",
                "ipa": "/aɪ ˈspeʃəlaɪz ɪn ˈdeɪtə ˌænəˈlɪtɪks ænd ˈbɪznəs ˈstrætədʒi/",
                "bn_pron": "আই স্পেশালাইজ ইন ডেইটা অ্যানালিটিক্স অ্যান্ড বিজনেস স্ট্র্যাটেজি।"
            },
            {
                "id": "8", "speaker": "Sarah", "role": "B", "roleTitle": "Professional / সহকর্মী",
                "en": "That is wonderful! We definitely need data insights in product design.",
                "bn": "খুবই চমৎকার! প্রোডাক্ট ডিজাইনে আমাদের সবসময়ই ডেটা ইনসাইটের খুব দরকার পড়ে।",
                "ipa": "/ðæt ɪz ˈwʌndəfl wiː ˈdefɪnətli niːd ˈdeɪtə ˈɪnsaɪts ɪn ˈprɒdʌkt dɪˈzaɪn/",
                "bn_pron": "দ্যাট ইয ওয়ান্ডারফুল! উই ডেফিনিটলি নিড ডেইটা ইনসাইটস ইন প্রোডাক্ট ডিজাইন।"
            },
            {
                "id": "9", "speaker": "Rafi", "role": "A", "roleTitle": "Attendee / নতুন ব্যক্তি",
                "en": "Absolutely. Let's connect on LinkedIn so we can stay in touch!",
                "bn": "একদমই তাই। চলুন লিংকডইনে যুক্ত হই, যাতে পরে যোগাযোগ রাখতে পারি!",
                "ipa": "/ˌæbsəˈluːtli lets kəˈnekt ɒn ˌlɪŋktˈɪn səʊ wiː kæn steɪ ɪn tʌtʃ/",
                "bn_pron": "অ্যাবসলিউটলি। লেটস কানেক্ট অন লিংকডইন সো উই ক্যান স্টেই ইন টাচ!"
            },
            {
                "id": "10", "speaker": "Sarah", "role": "B", "roleTitle": "Professional / সহকর্মী",
                "en": "Here is my profile. Great meeting you, Rafi. Enjoy the session!",
                "bn": "এই যে আমার প্রোফাইল। আপনার সাথে পরিচিত হয়ে দারুণ লাগল, রাফি। সেশনটি উপভোগ করুন!",
                "ipa": "/hɪər ɪz maɪ ˈprəʊfaɪl ɡreɪt ˈmiːtɪŋ juː ˈræfi ɪnˈdʒɔɪ ðə ˈseʃn/",
                "bn_pron": "হিয়ার ইয মাই প্রোফাইল। গ্রেট মিটিং ইউ, রাফি। এনজয় দ্য সেশন!"
            }
        ],
        "followUps": [
            { "en": "What company or team are you currently working with?", "bn": "আপনি বর্তমানে কোন কোম্পানি বা টিমে কাজ করছেন?" },
            { "en": "Have you attended this annual conference before?", "bn": "আপনি কি এই বাৎসরিক কনফারেন্সে আগেও এসেছেন?" },
            { "en": "Are you based here locally, or did you travel in for this?", "bn": "আপনি কি এখানকারই স্থানীয়, নাকি এই অনুষ্ঠানের জন্যই ভ্রমণ করে এসেছেন?" }
        ],
        "closers": [
            { "en": "It was truly a pleasure meeting you! Let's stay in touch.", "bn": "আপনার সাথে পরিচয় হয়ে সত্যিই আনন্দিত হলাম! যোগাযোগে থাকব।" },
            { "en": "I'll shoot you a message on LinkedIn shortly. Have a great day!", "bn": "আমি কিছুক্ষণের মধ্যেই লিংকডইনে মেসেজ পাঠাচ্ছি। ভালো থাকবেন!" },
            { "en": "Thanks for the great conversation! Catch you around.", "bn": "সুন্দর আলোচনার জন্য ধন্যবাদ! আবার দেখা হবে।" }
        ],
        "nativePhrases": [
            { "phrase": "What brings you here?", "meaning": "কী উদ্দেশ্যে আসা বা এখানে কীভাবে এলেন?", "context": "যেকোনো ইভেন্ট বা পার্টিতে পরিচিত হওয়ার সবচেয়ে স্মার্ট প্রশ্ন।" },
            { "phrase": "Small world!", "meaning": "দুনিয়াটা কত ছোট!", "context": "যখন অপ্রত্যাশিতভাবে কোনো পরিচিত ব্যক্তি বা মিল পাওয়া যায়।" },
            { "phrase": "Let's keep in touch", "meaning": "নিয়মিত যোগাযোগ বজায় রাখি", "context": "প্রথম পরিচয়ের সমাপ্তিতে সৌজন্যমূলক বাক্য।" }
        ]
    },
    {
        "id": "conv-02-ordering-coffee-at-a-cafe",
        "number": 2,
        "title": "Ordering Coffee at a Cafe",
        "titleBn": "ক্যাফেতে কফি ও স্ন্যাক্স অর্ডার করা",
        "level": "Easy",
        "category": "Services",
        "imageUrl": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80",
        "sceneDescription": "একটি আধুনিক কফি শপে গিয়ে নিজের পছন্দের কফি সাইজ, দুধের ধরন এবং স্ন্যাক্স অর্ডার করার সম্পূর্ণ বাস্তব কথোপকথন।",
        "briefing": {
            "setting": "কফি শপ কাউন্টার (Coffee Shop Counter)",
            "roleA": { "name": "Customer", "titleBn": "কাস্টমার / ক্রেতা", "descBn": "ভদ্রভাবে নিজের পছন্দের কফি ও পেস্ট্রি অর্ডার করছেন" },
            "roleB": { "name": "Barista", "titleBn": "বারিস্তা / ক্যাফে কর্মী", "descBn": "হাসিমুখে কাস্টমারকে অপশন জানাচ্ছেন এবং বিল নিচ্ছেন" },
            "overviewBn": "ক্যাফেতে অর্ডার করার সময় সাইজ (Small, Medium, Large), দুধের ধরন (Whole, Skim, Oat, Almond milk) এবং খাওয়ার ধরন (For here or to go) স্পষ্ট করে বললে ভুল অর্ডার হওয়ার কোনো ঝুঁকি থাকে না।",
            "politenessTips": [
                "কখনো 'Give me coffee' বলবেন না; বলুন 'Could I please get...' বা 'I would like...'",
                "পার্সেল নিতে চাইলে বলুন 'To go' বা 'Takeaway', আর সেখানে বসে খেতে চাইলে বলুন 'For here' বা 'Having in'।",
                "পেমেন্টের পর বারিস্তাকে সুন্দর করে 'Thank you, have a great day!' বলুন।"
            ],
            "keyVocabulary": [
                { "word": "To go / For here", "meaning": "পার্সেল নিয়ে যাওয়া নাকি ভেতরে বসে খাওয়া", "pron": "টু গো / ফর হিয়ার" },
                { "word": "Oat milk / Skim milk", "meaning": "ওট দুধ / কম ফ্যাটযুক্ত দুধ", "pron": "ওট মিল্ক / স্কিম মিল্ক" },
                { "word": "Extra shot", "meaning": "অতিরিক্ত কফি শট (কড়া কফির জন্য)", "pron": "এক্সট্রা শট" },
                { "word": "Tap to pay", "meaning": "কন্ট্যাক্টলেস কার্ড দিয়ে বিল দেওয়া", "pron": "ট্যাপ টু পেই" }
            ]
        },
        "starters": [
            { "en": "Hi, good morning! Could I please get a medium latte?", "bn": "হাই, শুভ সকাল! আমাকে কি একটি মিডিয়াম লাতে দেওয়া যাবে, প্লিজ?", "tip": "সবচেয়ে মার্জিত ও স্পষ্ট অর্ডার শুরুর রূপ।" },
            { "en": "Excuse me, what coffee beans or roast do you recommend today?", "bn": "মাফ করবেন, আজকের জন্য কোন কফি রোস্টটি আপনি সাজেস্ট করবেন?", "tip": "বারিস্তার সাথে আলাপ শুরু করার চমৎকার উপায়।" },
            { "en": "Hello! Are your pastries baked fresh this morning?", "bn": "হ্যালো! আপনাদের পেস্ট্রিগুলো কি আজ সকালেই ফ্রেশ তৈরি করা?", "tip": "খাবার অর্ডারের আগে জানার সহজ উপায়।" }
        ],
        "dialogue": [
            {
                "id": "1", "speaker": "Customer", "role": "A", "roleTitle": "Customer / ক্রেতা",
                "en": "Good morning! Could I please get a medium cappuccino to go?",
                "bn": "শুভ সকাল! আমাকে কি পার্সেল নেওয়ার জন্য একটি মিডিয়াম কাপুচিনো দেওয়া যাবে, প্লিজ?",
                "ipa": "/ɡʊd ˈmɔːnɪŋ kʊd aɪ pliːz ɡet ə ˈmiːdiəm ˌkæpʊˈtʃiːnəʊ tuː ɡəʊ/",
                "bn_pron": "গুড মর্নিং! কুড আই প্লীয গেট আ মিডিয়াম কাপুচিনো টু গো?"
            },
            {
                "id": "2", "speaker": "Barista", "role": "B", "roleTitle": "Barista / বারিস্তা",
                "en": "Good morning! Sure thing. What kind of milk would you prefer?",
                "bn": "শুভ সকাল! অবশ্যই। আপনি কোন ধরনের দুধ পছন্দ করবেন?",
                "ipa": "/ɡʊd ˈmɔːnɪŋ ʃʊə θɪŋ wɒt kaɪnd ɒv mɪlk wʊd juː prɪˈfɜː/",
                "bn_pron": "গুড মর্নিং! শুয়ার থিং। ওয়াট কাইন্ড অফ মিল্ক উড ইউ প্রিফার?"
            },
            {
                "id": "3", "speaker": "Customer", "role": "A", "roleTitle": "Customer / ক্রেতা",
                "en": "Oat milk, please. And could you make it extra hot?",
                "bn": "ওট মিল্ক দিন, প্লিজ। আর এটা কি একটু বেশি গরম করে দেওয়া যাবে?",
                "ipa": "/əʊt mɪlk pliːz ænd kʊd juː meɪk ɪt ˈekstrə hɒt/",
                "bn_pron": "ওট মিল্ক, প্লীয। অ্যান্ড কুড ইউ মেইক ইট এক্সট্রা হট?"
            },
            {
                "id": "4", "speaker": "Barista", "role": "B", "roleTitle": "Barista / বারিস্তা",
                "en": "You got it! Would you like any sugar or syrup with that?",
                "bn": "অবশ্যই! এর সাথে কোনো চিনি বা সুগার সিরাপ যোগ করবেন?",
                "ipa": "/juː ɡɒt ɪt wʊd juː laɪk ˈeni ˈʃʊɡər ɔː ˈsɪrəp wɪð ðæt/",
                "bn_pron": "ইউ গট ইট! উড ইউ লাইক এনি শুগার অর সিরাপ উইথ দ্যাট?"
            },
            {
                "id": "5", "speaker": "Customer", "role": "A", "roleTitle": "Customer / ক্রেতা",
                "en": "Just one pump of vanilla syrup, please. Nothing else.",
                "bn": "শুধু এক পাম্প ভ্যানিলা সিরাপ দিন। আর কিছু লাগবে না।",
                "ipa": "/dʒʌst wʌn pʌmp ɒv vəˈnɪlə ˈsɪrəp pliːz ˈnʌθɪŋ els/",
                "bn_pron": "জাস্ট ওয়ান পাম্প অফ ভ্যানিলা সিরাপ, প্লীয। নাথিং এলস।"
            },
            {
                "id": "6", "speaker": "Barista", "role": "B", "roleTitle": "Barista / বারিস্তা",
                "en": "Great! Anything to eat today? We have fresh warm croissants.",
                "bn": "চমৎকার! সাথে কি কিছু খাবেন? আমাদের কাছে গরম তাজা ক্রসাঁ আছে।",
                "ipa": "/ɡreɪt ˈeniθɪŋ tuː iːt təˈdeɪ wiː hæv freʃ wɔːm ˈkrwɑːsɒŋz/",
                "bn_pron": "গ্রেট! এনিথিং টু ইট টুডেই? উই হ্যাভ ফ্রেশ ওয়ার্ম ক্রোসাঁ।"
            },
            {
                "id": "7", "speaker": "Customer", "role": "A", "roleTitle": "Customer / ক্রেতা",
                "en": "Yes, I will take one chocolate croissant as well.",
                "bn": "হ্যাঁ, সাথে একটি চকলেট ক্রসাঁও নিয়ে নেব।",
                "ipa": "/jes aɪ wɪl teɪk wʌn ˈtʃɒklət ˈkrwɑːsɒŋ æz wel/",
                "bn_pron": "ইয়েস, আই উইল টেক ওয়ান চকোলেট ক্রোসাঁ অ্যাজ ওয়েল।"
            },
            {
                "id": "8", "speaker": "Barista", "role": "B", "roleTitle": "Barista / বারিস্তা",
                "en": "Perfect. That comes to $8.20. Are you paying with cash or card?",
                "bn": "নিখুঁত। সর্বমোট ৮ ডলার ২০ সেন্ট হয়েছে। ক্যাশে নাকি কার্ডে পেমেন্ট করবেন?",
                "ipa": "/ˈpɜːfɪkt ðæt kʌmz tuː eɪt ˈtwenti ɑː juː ˈpeɪɪŋ wɪð kæʃ ɔː kɑːd/",
                "bn_pron": "পারফেক্ট। দ্যাট কামস টু এইট টোয়েন্টি। আর ইউ পেয়িং উইথ ক্যাশ অর কার্ড?"
            },
            {
                "id": "9", "speaker": "Customer", "role": "A", "roleTitle": "Customer / ক্রেতা",
                "en": "Card, please. Can I just tap right here?",
                "bn": "কার্ডে দেব, প্লিজ। আমি কি এখানে ট্যাপ করলেই হবে?",
                "ipa": "/kɑːd pliːz kæn aɪ dʒʌst tæp raɪt hɪə/",
                "bn_pron": "কার্ড, প্লীয। ক্যান আই জাস্ট ট্যাপ রাইট হিয়ার?"
            },
            {
                "id": "10", "speaker": "Barista", "role": "B", "roleTitle": "Barista / বারিস্তা",
                "en": "Yes, right there. Beep! It will be ready at the counter in two minutes!",
                "bn": "হ্যাঁ, ঠিক ওখানেই। বিপ! দুই মিনিটের মধ্যেই পিকআপ কাউন্টারে পেয়ে যাবেন!",
                "ipa": "/jes raɪt ðeə biːp ɪt wɪl biː ˈredi æt ðə ˈkaʊntər ɪn tuː ˈmɪnɪts/",
                "bn_pron": "ইয়েস, রাইট দেয়ার। বিপ! ইট উইল বি রেডি অ্যাট দ্য কাউন্টার ইন টু মিনিটস!"
            }
        ],
        "followUps": [
            { "en": "Could I get a cup sleeve and a napkin, please?", "bn": "আমাকে কি একটি কাপ স্লিভ ও টিস্যু পেপার দেওয়া যাবে, প্লিজ?" },
            { "en": "Do you offer free Wi-Fi here for customers?", "bn": "গ্রাহকদের জন্য কি এখানে ফ্রি ওয়াইফাই সুবিধা আছে?" },
            { "en": "Can I get a receipt with that, please?", "bn": "এটার সাথে কি আমাকে একটি মানি রিসিট দেওয়া যাবে?" }
        ],
        "closers": [
            { "en": "Thank you so much! Keep the change.", "bn": "অনেক ধন্যবাদ! বাকি খুচরাটা রেখে দিন।" },
            { "en": "Thanks a lot for the quick service. Have a wonderful day!", "bn": "দ্রুত সার্ভিসের জন্য অনেক ধন্যবাদ। দিনটি সুন্দর কাটুক!" },
            { "en": "Looks delicious, thanks! See you tomorrow morning.", "bn": "খুব লোভনীয় লাগছে, ধন্যবাদ! কাল সকালে আবার দেখা হবে।" }
        ],
        "nativePhrases": [
            { "phrase": "On the go", "meaning": "চলাফেরার মধ্যে বা দ্রুত ব্যস্ত সময়ে", "context": "সকালে তাড়াহুড়ো করে কফি নিয়ে কাজে যাওয়ার সময়।" },
            { "phrase": "Hit the spot", "meaning": "মনের মতো হওয়া বা তৃপ্তি দেওয়া", "context": "প্রথম চুমুক দিয়ে তৃপ্তি প্রকাশ করতে।" },
            { "phrase": "Keep the change", "meaning": "বাকি খুচরা টাকাটি টিপস হিসেবে রেখে দিন", "context": "ক্যাফে বা ট্যাক্সি ড্রাইভারকে টিপস দেওয়ার সময়।" }
        ]
    }
]

print(f"Base data template prepared with {len(CONVERSATIONS_DATA)} fully detailed items.")
