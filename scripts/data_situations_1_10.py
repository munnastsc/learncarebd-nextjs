# -*- coding: utf-8 -*-
"""
Situations 1 to 20 for Spoken English Lab
"""

SITUATIONS_1_20 = [
    # 1. Meeting Someone for the First Time
    {
        "id": "conv-01-meeting-someone-for-the-first-time",
        "number": 1,
        "title": "Meeting Someone for the First Time",
        "titleBn": "নতুন কারো সাথে প্রথম পরিচয় ও কুশল বিনিময়",
        "level": "Easy",
        "category": "Social",
        "imageUrl": "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
        "sceneDescription": "আন্তর্জাতিক কনফারেন্স বা নতুন সামাজিক পরিবেশে প্রথম দেখা হলে আত্মবিশ্বাসের সাথে হ্যান্ডশেক করে নিজের পরিচয় দেওয়া ও কুশল বিনিময়।",
        "briefing": {
            "setting": "কনফারেন্স লাউঞ্জ (Conference Networking Lounge)",
            "roleA": { "name": "Rafi", "titleBn": "নতুন অংশগ্রহণকারী (Attendee)", "descBn": "হাসিমুখে হ্যান্ডশেক করে কুশল বিনিময় শুরু করছেন" },
            "roleB": { "name": "Sarah", "titleBn": "সহকর্মী প্রফেশনাল (Professional)", "descBn": "সাদরে সম্ভাষণ জানিয়ে নিজের ব্যাকগ্রাউন্ড শেয়ার করছেন" },
            "overviewBn": "প্রথম দেখায় ইংরেজিতে কথা বলা ভীতিকর মনে হলেও একটি আন্তরিক হাসি, স্পষ্ট সম্ভাষণ এবং 'Nice to meet you' বলে নিজের নাম জানালে সুন্দর সম্পর্ক তৈরি হয়।",
            "politenessTips": [
                "সবসময় চোখে চোখ রেখে হাসিমুখে 'Nice to meet you' বলুন।",
                "অপর ব্যক্তির নাম মনে রাখার চেষ্টা করুন এবং কথায় নামটি একবার উচ্চারণ করুন।",
                "কথোপকথন একপেশে না করে অপর ব্যক্তিকে প্রশ্ন করার সুযোগ দিন।"
            ],
            "keyVocabulary": [
                { "word": "Pleasure to meet you", "meaning": "আপনার সাথে পরিচিত হতে পেরে আনন্দিত", "pron": "প্লেযার টু মিট ইউ" },
                { "word": "What brings you here?", "meaning": "এখানে কীভাবে আসা হলো?", "pron": "ওয়াট ব্রিংস ইউ হিয়ার?" },
                { "word": "Background", "meaning": "পেশাগত অভিজ্ঞতা", "pron": "ব্যাকগ্রাউন্ড" },
                { "word": "Stay in touch", "meaning": "যোগাযোগ রক্ষা করা", "pron": "স্টেই ইন টাচ" }
            ]
        },
        "starters": [
            { "en": "Hi, I don't think we've met yet. I'm Rafi.", "bn": "হাই, মনে হয় আমাদের আগে পরিচয় হয়নি। আমি রাফি।", "tip": "প্রথম পরিচয় শুরুর সবচেয়ে স্বাভাবিক ও স্মার্ট উপায়।" },
            { "en": "Excuse me, mind if I join you at this table?", "bn": "মাফ করবেন, আমি কি এই টেবিলে আপনার সাথে বসতে পারি?", "tip": "কোনো ইভেন্টে ভদ্রভাবে বসার অনুমতি নেওয়ার বাক্য।" },
            { "en": "Hello! How are you enjoying the event so far?", "bn": "হ্যালো! অনুষ্ঠানটি আপনার কেমন লাগছে এ পর্যন্ত?", "tip": "সাধারণ বিষয়ের ওপর ভিত্তি করে কথোপকথন শুরু করার কৌশল।" }
        ],
        "dialogue": [
            { "id": "1", "speaker": "Rafi", "role": "A", "roleTitle": "Attendee / নতুন ব্যক্তি", "en": "Hello! I don't think we've met yet. My name is Rafi.", "bn": "হ্যালো! মনে হয় আমাদের আগে পরিচয় হয়নি। আমার নাম রাফি।", "ipa": "/həˈləʊ aɪ dəʊnt θɪŋk wiːv met jet maɪ neɪm ɪz ˈræfi/", "bn_pron": "হ্যালো! আই ডোন্ট থিঙ্ক উইভ মেট ইয়েট। মাই নেইম ইয রাফি।" },
            { "id": "2", "speaker": "Sarah", "role": "B", "roleTitle": "Professional / সহকর্মী", "en": "Nice to meet you, Rafi! I'm Sarah. What brings you here today?", "bn": "আপনার সাথে পরিচিত হয়ে খুব ভালো লাগল, রাফি! আমি সারা। আজ এখানে কী উদ্দেশ্যে আসা?", "ipa": "/naɪs tuː miːt juː ˈræfi aɪm ˈseərə wɒt brɪŋz juː hɪə təˈdeɪ/", "bn_pron": "নাইস টু মিট ইউ, রাফি! আইম স্যারা। ওয়াট ব্রিংস ইউ হিয়ার টুডেই?" },
            { "id": "3", "speaker": "Rafi", "role": "A", "roleTitle": "Attendee / নতুন ব্যক্তি", "en": "I'm attending the technology workshop. Are you in the tech industry too?", "bn": "আমি টেকনোলজি ওয়ার্কশপে অংশ নিতে এসেছি। আপনিও কি টেক ইন্ডাস্ট্রিতে কাজ করছেন?", "ipa": "/aɪm əˈtendɪŋ ðə tekˈnɒlədʒi ˈwɜːkʃɒp ɑː juː ɪn ðə tek ˈɪndəstri tuː/", "bn_pron": "আইম অ্যাটেন্ডিং দ্য টেকনোলজি ওয়ার্কশপ। আর ইউ ইন দ্য টেক ইন্ডাস্ট্রি টু?" },
            { "id": "4", "speaker": "Sarah", "role": "B", "roleTitle": "Professional / সহকর্মী", "en": "Yes, exactly! I work as a digital product designer in Dhaka.", "bn": "হ্যাঁ, একদম ঠিক! আমি ঢাকায় ডিজিটাল প্রোডাক্ট ডিজাইনার হিসেবে কাজ করছি।", "ipa": "/jes ɪɡˈzæktli aɪ wɜːk æz ə ˈdɪdʒɪtl ˈprɒdʌkt dɪˈzaɪnə ɪn ˈdɑːkə/", "bn_pron": "ইয়েস, এক্স্যাক্টলি! আই ওয়ার্ক অ্যাজ আ ডিজিটাল প্রোডাক্ট ডিজাইনার ইন ঢাকা।" },
            { "id": "5", "speaker": "Rafi", "role": "A", "roleTitle": "Attendee / নতুন ব্যক্তি", "en": "That sounds fantastic! How long have you been doing that?", "bn": "অসাধারণ তো! আপনি কতদিন ধরে এই পেশায় কাজ করছেন?", "ipa": "/ðæt saʊndz fænˈtæstɪk haʊ lɒŋ hæv juː biːn ˈduːɪŋ ðæt/", "bn_pron": "দ্যাট সাউন্ডস ফ্যান্টাস্টিক! হাউ লং হ্যাভ ইউ বিন ডুইং দ্যাট?" },
            { "id": "6", "speaker": "Sarah", "role": "B", "roleTitle": "Professional / সহকর্মী", "en": "About four years now. And what about you? What do you do?", "bn": "প্রায় চার বছর হলো। আর আপনার কী খবর? আপনি কী করছেন?", "ipa": "/əˈbaʊt fɔː jɪəz naʊ ænd wɒt əˈbaʊt juː wɒt duː juː duː/", "bn_pron": "অ্যাবাউট ফোর ইয়ার্স নাও। অ্যান্ড ওয়াট অ্যাবাউট ইউ? ওয়াট ডু ইউ ডু?" },
            { "id": "7", "speaker": "Rafi", "role": "A", "roleTitle": "Attendee / নতুন ব্যক্তি", "en": "I specialize in data analytics and business strategy.", "bn": "আমি ডেটা অ্যানালিটিক্স ও বিজনেস স্ট্র্যাটেজি নিয়ে কাজ করছি।", "ipa": "/aɪ ˈspeʃəlaɪz ɪn ˈdeɪtə ˌænəˈlɪtɪks ænd ˈbɪznəs ˈstrætədʒi/", "bn_pron": "আই স্পেশালাইজ ইন ডেইটা অ্যানালিটিক্স অ্যান্ড বিজনেস স্ট্র্যাটেজি।" },
            { "id": "8", "speaker": "Sarah", "role": "B", "roleTitle": "Professional / সহকর্মী", "en": "That is wonderful! We definitely need data insights in product design.", "bn": "খুবই চমৎকার! প্রোডাক্ট ডিজাইনে আমাদের সবসময়ই ডেটা ইনসাইটের খুব দরকার পড়ে।", "ipa": "/ðæt ɪz ˈwʌndəfl wiː ˈdefɪnətli niːd ˈdeɪtə ˈɪnsaɪts ɪn ˈprɒdʌkt dɪˈzaɪn/", "bn_pron": "দ্যাট ইয ওয়ান্ডারফুল! উই ডেফিনিটলি নিড ডেইটা ইনসাইটস ইন প্রোডাক্ট ডিজাইন।" },
            { "id": "9", "speaker": "Rafi", "role": "A", "roleTitle": "Attendee / নতুন ব্যক্তি", "en": "Absolutely. Let's connect on LinkedIn so we can stay in touch!", "bn": "একদমই তাই। চলুন লিংকডইনে যুক্ত হই, যাতে পরে যোগাযোগ রাখতে পারি!", "ipa": "/ˌæbsəˈluːtli lets kəˈnekt ɒn ˌlɪŋktˈɪn səʊ wiː kæn steɪ ɪn tʌtʃ/", "bn_pron": "অ্যাবসলিউটলি। লেটস কানেক্ট অন লিংকডইন সো উই ক্যান স্টেই ইন টাচ!" },
            { "id": "10", "speaker": "Sarah", "role": "B", "roleTitle": "Professional / সহকর্মী", "en": "Here is my profile. Great meeting you, Rafi. Enjoy the session!", "bn": "এই যে আমার প্রোফাইল। আপনার সাথে পরিচিত হয়ে দারুণ লাগল, রাফি। সেশনটি উপভোগ করুন!", "ipa": "/hɪər ɪz maɪ ˈprəʊfaɪl ɡreɪt ˈmiːtɪŋ juː ˈræfi ɪnˈdʒɔɪ ðə ˈseʃn/", "bn_pron": "হিয়ার ইয মাই প্রোফাইল। গ্রেট মিটিং ইউ, রাফি। এনজয় দ্য সেশন!" }
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

    # 2. Ordering Coffee at a Cafe
    {
        "id": "conv-02-ordering-coffee-at-a-cafe",
        "number": 2,
        "title": "Ordering Coffee at a Cafe",
        "titleBn": "ক্যাফেতে কফি ও স্ন্যাক্স অর্ডার করা",
        "level": "Easy",
        "category": "Services",
        "imageUrl": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80",
        "sceneDescription": "আধুনিক কফি শপে নিজের পছন্দের কফি সাইজ, দুধের ধরন এবং স্ন্যাক্স অর্ডার করার সম্পূর্ণ বাস্তব দৃশ্যপট।",
        "briefing": {
            "setting": "কফি শপ কাউন্টার (Coffee Shop Counter)",
            "roleA": { "name": "Customer", "titleBn": "কাস্টমার / ক্রেতা", "descBn": "ভদ্রভাবে নিজের পছন্দের কফি ও পেস্ট্রি অর্ডার করছেন" },
            "roleB": { "name": "Barista", "titleBn": "বারিস্তা / ক্যাফে স্টাফ", "descBn": "হাসিমুখে কাস্টমারকে অপশন জানাচ্ছেন এবং বিল নিচ্ছেন" },
            "overviewBn": "ক্যাফেতে অর্ডার করার সময় সাইজ (Small, Medium, Large), দুধের ধরন (Whole, Skim, Oat, Almond milk) এবং খাওয়ার ধরন (For here or to go) স্পষ্ট করে বললে দ্রুত নিখুঁত অর্ডার পাওয়া যায়।",
            "politenessTips": [
                "কখনো 'Give me coffee' বলবেন না; বলুন 'Could I please get...' বা 'I would like...'",
                "পার্সেল নিতে চাইলে বলুন 'To go' বা 'Takeaway', আর ভেতরে বসে খেতে চাইলে বলুন 'For here'।",
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
            { "id": "1", "speaker": "Customer", "role": "A", "roleTitle": "Customer / ক্রেতা", "en": "Good morning! Could I please get a medium cappuccino to go?", "bn": "শুভ সকাল! আমাকে কি পার্সেল নেওয়ার জন্য একটি মিডিয়াম কাপুচিনো দেওয়া যাবে, প্লিজ?", "ipa": "/ɡʊd ˈmɔːnɪŋ kʊd aɪ pliːz ɡet ə ˈmiːdiəm ˌkæpʊˈtʃiːnəʊ tuː ɡəʊ/", "bn_pron": "গুড মর্নিং! কুড আই প্লীয গেট আ মিডিয়াম কাপুচিনো টু গো?" },
            { "id": "2", "speaker": "Barista", "role": "B", "roleTitle": "Barista / বারিস্তা", "en": "Good morning! Sure thing. What kind of milk would you prefer?", "bn": "শুভ সকাল! অবশ্যই। আপনি কোন ধরনের দুধ পছন্দ করবেন?", "ipa": "/ɡʊd ˈmɔːnɪŋ ʃʊə θɪŋ wɒt kaɪnd ɒv mɪlk wʊd juː prɪˈfɜː/", "bn_pron": "গুড মর্নিং! শুয়ার থিং। ওয়াট কাইন্ড অফ মিল্ক উড ইউ প্রিফার?" },
            { "id": "3", "speaker": "Customer", "role": "A", "roleTitle": "Customer / ক্রেতা", "en": "Oat milk, please. And could you make it extra hot?", "bn": "ওট মিল্ক দিন, প্লিজ। আর এটা কি একটু বেশি গরম করে দেওয়া যাবে?", "ipa": "/əʊt mɪlk pliːz ænd kʊd juː meɪk ɪt ˈekstrə hɒt/", "bn_pron": "ওট মিল্ক, প্লীয। অ্যান্ড কুড ইউ মেইক ইট এক্সট্রা হট?" },
            { "id": "4", "speaker": "Barista", "role": "B", "roleTitle": "Barista / বারিস্তা", "en": "You got it! Would you like any sugar or syrup with that?", "bn": "অবশ্যই! এর সাথে কোনো চিনি বা সুগার সিরাপ যোগ করবেন?", "ipa": "/juː ɡɒt ɪt wʊd juː laɪk ˈeni ˈʃʊɡər ɔː ˈsɪrəp wɪð ðæt/", "bn_pron": "ইউ গট ইট! উড ইউ লাইক এনি শুগার অর সিরাপ উইথ দ্যাট?" },
            { "id": "5", "speaker": "Customer", "role": "A", "roleTitle": "Customer / ক্রেতা", "en": "Just one pump of vanilla syrup, please. Nothing else.", "bn": "শুধু এক পাম্প ভ্যানিলা সিরাপ দিন। আর কিছু লাগবে না।", "ipa": "/dʒʌst wʌn pʌmp ɒv vəˈnɪlə ˈsɪrəp pliːz ˈnʌθɪŋ els/", "bn_pron": "জাস্ট ওয়ান পাম্প অফ ভ্যানিলা সিরাপ, প্লীয। নাথিং এলস।" },
            { "id": "6", "speaker": "Barista", "role": "B", "roleTitle": "Barista / বারিস্তা", "en": "Great! Anything to eat today? We have fresh warm croissants.", "bn": "চমৎকার! সাথে কি কিছু খাবেন? আমাদের কাছে গরম তাজা ক্রসাঁ আছে।", "ipa": "/ɡreɪt ˈeniθɪŋ tuː iːt təˈdeɪ wiː hæv freʃ wɔːm ˈkrwɑːsɒŋz/", "bn_pron": "গ্রেট! এনিথিং টু ইট টুডেই? উই হ্যাভ ফ্রেশ ওয়ার্ম ক্রোসাঁ।" },
            { "id": "7", "speaker": "Customer", "role": "A", "roleTitle": "Customer / ক্রেতা", "en": "Yes, I will take one chocolate croissant as well.", "bn": "হ্যাঁ, সাথে একটি চকলেট ক্রসাঁও নিয়ে নেব।", "ipa": "/jes aɪ wɪl teɪk wʌn ˈtʃɒklət ˈkrwɑːsɒŋ æz wel/", "bn_pron": "ইয়েস, আই উইল টেক ওয়ান চকোলেট ক্রোসাঁ অ্যাজ ওয়েল।" },
            { "id": "8", "speaker": "Barista", "role": "B", "roleTitle": "Barista / বারিস্তা", "en": "Perfect. That comes to $8.20. Are you paying with cash or card?", "bn": "নিখুঁত। সর্বমোট ৮ ডলার ২০ সেন্ট হয়েছে। ক্যাশে নাকি কার্ডে পেমেন্ট করবেন?", "ipa": "/ˈpɜːfɪkt ðæt kʌmz tuː eɪt ˈtwenti ɑː juː ˈpeɪɪŋ wɪð kæʃ ɔː kɑːd/", "bn_pron": "পারফেক্ট। দ্যাট কামস টু এইট টোয়েন্টি। আর ইউ পেয়িং উইথ ক্যাশ অর কার্ড?" },
            { "id": "9", "speaker": "Customer", "role": "A", "roleTitle": "Customer / ক্রেতা", "en": "Card, please. Can I just tap right here?", "bn": "কার্ডে দেব, প্লিজ। আমি কি এখানে ট্যাপ করলেই হবে?", "ipa": "/kɑːd pliːz kæn aɪ dʒʌst tæp raɪt hɪə/", "bn_pron": "কার্ড, প্লীয। ক্যান আই জাস্ট ট্যাপ রাইট হিয়ার?" },
            { "id": "10", "speaker": "Barista", "role": "B", "roleTitle": "Barista / বারিস্তা", "en": "Yes, right there. Beep! It will be ready at the counter in two minutes!", "bn": "হ্যাঁ, ঠিক ওখানেই। বিপ! দুই মিনিটের মধ্যেই পিকআপ কাউন্টারে পেয়ে যাবেন!", "ipa": "/jes raɪt ðeə biːp ɪt wɪl biː ˈredi æt ðə ˈkaʊntər ɪn tuː ˈmɪnɪts/", "bn_pron": "ইয়েস, রাইট দেয়ার। বিপ! ইট উইল বি রেডি অ্যাট দ্য কাউন্টার ইন টু মিনিটস!" }
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
    },

    # 3. Asking for Directions on the Street
    {
        "id": "conv-03-asking-for-directions-on-the-street",
        "number": 3,
        "title": "Asking for Directions on the Street",
        "titleBn": "রাস্তায় পথ ও দিকনির্দেশনা চাওয়া",
        "level": "Easy",
        "category": "Travel",
        "imageUrl": "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=800&q=80",
        "sceneDescription": "অচেনা শহরে বা রাস্তায় পথ হারিয়ে গেলে স্থানীয় বাসিন্দার কাছ থেকে ভদ্রভাবে দিকনির্দেশনা জানার কথোপকথন।",
        "briefing": {
            "setting": "শহরের ব্যস্ত মোড় (City Street Corner)",
            "roleA": { "name": "Tourist", "titleBn": "পথচারী / পর্যটক", "descBn": "কাছের মেট্রো স্টেশনের পথ জানতে চাচ্ছেন" },
            "roleB": { "name": "Local Resident", "titleBn": "স্থানীয় বাসিন্দা", "descBn": "স্পষ্টভাবে ল্যান্ডমার্ক ও টার্নিং বুঝিয়ে দিচ্ছেন" },
            "overviewBn": "বিদেশে রাস্তায় পথ খোঁজার সময় 'Excuse me' দিয়ে শুরু করা অত্যন্ত জরুরি। সোজা যাওয়া (Go straight), ডানে/বামে মোড় নেওয়া (Turn right/left), এবং ল্যান্ডমার্ক চিনে রাখা সহজে গন্তব্যে পৌঁছাতে সাহায্য করে।",
            "politenessTips": [
                "কারো মনোযোগ আকর্ষণের জন্য সবসময় 'Excuse me, could you help me?' দিয়ে শুরু করুন।",
                "দিকনির্দেশনা শুনে কনফার্ম করার জন্য পুনরাবৃত্তি করুন: 'So that's left at the traffic light, right?'",
                "পথ দেখিয়ে দেওয়ার পর আন্তরিক ধন্যবাদ জানান।"
            ],
            "keyVocabulary": [
                { "word": "Go straight ahead", "meaning": "সোজা সামনের দিকে এগিয়ে যান", "pron": "গো স্ট্রেইট অ্যাহেড" },
                { "word": "Crosswalk / Intersection", "meaning": "রাস্তা পারাপারের স্থান / চার রাস্তার মোড়", "pron": "ক্রসওয়াক / ইন্টারসেকশন" },
                { "word": "You can't miss it", "meaning": "সহজেই চোখে পড়বে, ভুল হওয়ার সুযোগ নেই", "pron": "ইউ কান্ট মিস ইট" },
                { "word": "Within walking distance", "meaning": "হেঁটেই যাওয়ার মতো কাছাকাছি দূরত্বে", "pron": "উইদিন ওয়াকিং ডিসট্যান্স" }
            ]
        },
        "starters": [
            { "en": "Excuse me, could you tell me how to get to the central station?", "bn": "মাফ করবেন, সেন্ট্রাল স্টেশনে যাওয়ার পথটি কি একটু বলে দেবেন?", "tip": "পথ জানার সবচেয়ে প্রচলিত ও কার্যকর বাক্য।" },
            { "en": "Pardon me, I think I'm a bit lost. Is Oxford Street nearby?", "bn": "মাফ করবেন, মনে হয় আমি পথ হারিয়েছি। অক্সফোর্ড স্ট্রিট কি কাছেই?", "tip": "নম্রভাবে পথ হারানোর কথা প্রকাশ করার উপায়।" },
            { "en": "Hi there, do you know if there is a subway entrance around here?", "bn": "হাই, আপনি কি জানেন আশেপাশে কোনো সাবওয়ে প্রবেশপথ আছে কি না?", "tip": "নির্দিষ্ট কোনো স্থান খোঁজার বাক্য।" }
        ],
        "dialogue": [
            { "id": "1", "speaker": "Tourist", "role": "A", "roleTitle": "Tourist / পথচারী", "en": "Excuse me! Could you tell me how to get to Central Station?", "bn": "মাফ করবেন! সেন্ট্রাল স্টেশনে কীভাবে যেতে হবে একটু বলে দেবেন?", "ipa": "/ɪkˈskjuːz miː kʊd juː tel miː haʊ tuː ɡet tuː ˈsentrəl ˈsteɪʃn/", "bn_pron": "এক্সকিউজ মি! কুড ইউ টেল মি হাউ টু গেট টু সেন্ট্রাল স্টেশন?" },
            { "id": "2", "speaker": "Resident", "role": "B", "roleTitle": "Local / স্থানীয় বাসিন্দা", "en": "Sure! Go straight down this road for two blocks until the traffic light.", "bn": "অবশ্যই! এই রাস্তা ধরে ট্রাফিক লাইট পর্যন্ত সোজা দুই ব্লক এগিয়ে যান।", "ipa": "/ʃʊə ɡəʊ streɪt daʊn ðɪs rəʊd fɔː tuː blɒks ənˈtɪl ðə ˈtræfɪk laɪt/", "bn_pron": "শুয়ার! গো স্ট্রেইট ডাউন দিস রোড ফর টু ব্লকস আনটিল দ্য ট্রাফিক লাইট।" },
            { "id": "3", "speaker": "Tourist", "role": "A", "roleTitle": "Tourist / পথচারী", "en": "Okay, two blocks straight. And which way do I turn then?", "bn": "আচ্ছা, সোজা দুই ব্লক। তারপর কোন দিকে মোড় নেব?", "ipa": "/ˌəʊˈkeɪ tuː blɒks streɪt ænd wɪtʃ weɪ duː aɪ tɜːn ðen/", "bn_pron": "ওকে, টু ব্লকস স্ট্রেইট। অ্যান্ড উইচ ওয়ে ডু আই টার্ন দেন?" },
            { "id": "4", "speaker": "Resident", "role": "B", "roleTitle": "Local / স্থানীয় বাসিন্দা", "en": "Turn left at the supermarket, onto Grand Avenue.", "bn": "সুপারমার্কেটের কাছে বামে মোড় নিয়ে গ্র্যান্ড এভিনিউতে উঠবেন।", "ipa": "/tɜːn left æt ðə ˈsuːpəmɑːkɪt ˈɒntuː ɡrænd ˈævənjuː/", "bn_pron": "টার্ন লেফট অ্যাট দ্য সুপারমার্কেট, অনটু গ্র্যান্ড অ্যাভিনিউ।" },
            { "id": "5", "speaker": "Tourist", "role": "A", "roleTitle": "Tourist / পথচারী", "en": "Is it within walking distance from there?", "bn": "সেখান থেকে কি হেঁটে যাওয়ার মতো দূরত্ব?", "ipa": "/ɪz ɪt wɪˈðɪn ˈwɔːkɪŋ ˈdɪstəns frəm ðeə/", "bn_pron": "ইজ ইট উইদিন ওয়াকিং ডিসট্যান্স ফ্রম দেয়ার?" },
            { "id": "6", "speaker": "Resident", "role": "B", "roleTitle": "Local / স্থানীয় বাসিন্দা", "en": "Yes, just a five-minute walk. You'll see the big glass clock tower.", "bn": "হ্যাঁ, মাত্র পাঁচ মিনিটের হাঁটা পথ। বড় কাঁচের ঘড়ি টাওয়ারটি দেখতে পাবেন।", "ipa": "/jes dʒʌst ə faɪv ˈmɪnɪt wɔːk juːl siː ðə bɪɡ ɡlɑːs klɒk ˈtaʊə/", "bn_pron": "ইয়েস, জাস্ট আ ফাইভ মিনিট ওয়াক। ইউল সি দ্য বিগ গ্লাস ক্লক টাওয়ার।" },
            { "id": "7", "speaker": "Tourist", "role": "A", "roleTitle": "Tourist / পথচারী", "en": "Ah, the clock tower! That sounds very easy to spot.", "bn": "আহ, ঘড়ি টাওয়ার! ওটা তো খুব সহজেই চোখে পড়বে।", "ipa": "/ɑː ðə klɒk ˈtaʊə ðæt saʊndz ˈveri ˈiːzi tuː spɒt/", "bn_pron": "আহ, দ্য ক্লক টাওয়ার! দ্যাট সাউন্ডস ভেরি ইযি টু স্পট।" },
            { "id": "8", "speaker": "Resident", "role": "B", "roleTitle": "Local / স্থানীয় বাসিন্দা", "en": "Exactly! The main station entrance is right under that clock.", "bn": "একদম ঠিক! প্রধান স্টেশন গেটটি ঠিক সেই ঘড়ির নিচেই অবস্থিত।", "ipa": "/ɪɡˈzæktli ðə meɪn ˈsteɪʃn ˈentrəns ɪz raɪt ˈʌndə ðæt klɒk/", "bn_pron": "এক্স্যাক্টলি! দ্য মেইন স্টেশন এন্ট্রান্স ইয রাইট আন্ডার দ্যাট ক্লক।" },
            { "id": "9", "speaker": "Tourist", "role": "A", "roleTitle": "Tourist / পথচারী", "en": "Thank you so much for taking the time to help me!", "bn": "সময় দিয়ে আমাকে সাহায্য করার জন্য অনেক অনেক ধন্যবাদ!", "ipa": "/θæŋk juː səʊ mʌtʃ fɔː ˈteɪkɪŋ ðə taɪm tuː help miː/", "bn_pron": "থ্যাংক ইউ সো মাচ ফর টেকিং দ্য টাইম টু হেল্প মি!" },
            { "id": "10", "speaker": "Resident", "role": "B", "roleTitle": "Local / স্থানীয় বাসিন্দা", "en": "You're very welcome! Have a safe and pleasant journey!", "bn": "আপনাকে অনেক স্বাগতম! আপনার যাত্রা নিরাপদ ও সুন্দর হোক!", "ipa": "/jɔː ˈveri ˈwelkəm hæv ə seɪf ænd ˈpleznt ˈdʒɜːni/", "bn_pron": "ইউর ভেরি ওয়েলকাম! হ্যাভ আ সেইফ অ্যান্ড প্লেজেন্ট জার্নি!" }
        ],
        "followUps": [
            { "en": "Do you know if tickets can be bought at the station machines?", "bn": "আপনি কি জানেন স্টেশনের ভেন্ডিং মেশিন থেকে টিকিট কেনা যায় কি না?" },
            { "en": "Is there a taxi stand nearby if I have heavy luggage?", "bn": "ভারী লাগেজ থাকলে কি কাছেই কোনো ট্যাক্সি স্ট্যান্ড পাওয়া যাবে?" },
            { "en": "How often do the trains depart from that station?", "bn": "ওই স্টেশন থেকে ট্রেন কতক্ষণ পর পর ছাড়ে?" }
        ],
        "closers": [
            { "en": "I really appreciate your kind help. Have a lovely day!", "bn": "আপনার আন্তরিক সহযোগিতার জন্য কৃতজ্ঞ। দিনটি সুন্দর কাটুক!" },
            { "en": "Thanks for pointing me in the right direction!", "bn": "সঠিক পথটি দেখিয়ে দেওয়ার জন্য অনেক ধন্যবাদ!" },
            { "en": "Take care! You've been a lifesaver.", "bn": "ভালো থাকবেন! আপনি আমাকে দারুণ বাঁচিয়ে দিলেন।" }
        ],
        "nativePhrases": [
            { "phrase": "You can't miss it", "meaning": "খুব সহজেই চোখে পড়বে", "context": "দিকনির্দেশনা দেওয়ার সময় বড় কোনো ল্যান্ডমার্ক উল্লেখ করতে।" },
            { "phrase": "Within walking distance", "meaning": "হেঁটেই যাওয়ার মতো দূরত্বে", "context": "গাড়ি লাগবে কি না তা বোঝাতে।" },
            { "phrase": "As the crow flies", "meaning": "সোজা আকাশপথে বা সরলরেখায় দূরত্ব", "context": "দূরত্ব অনুমান করতে।" }
        ]
    },

    # 4. Shopping for Clothes & Sizes
    {
        "id": "conv-04-shopping-for-clothes-sizes",
        "number": 4,
        "title": "Shopping for Clothes & Sizes",
        "titleBn": "পোশাকের দোকানে সাইজ ও ট্রায়াল নেওয়া",
        "level": "Easy",
        "category": "Shopping",
        "imageUrl": "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
        "sceneDescription": "পোশাকের শোরুমে পছন্দের জ্যাকেট বা জামার মাপ খোঁজা, ট্রায়াল রুমে পরা এবং ডিসকাউন্ট নিয়ে সেলস স্টাফের সাথে কথা বলা।",
        "briefing": {
            "setting": "পোশাকের আউটলেট (Clothing Store)",
            "roleA": { "name": "Shopper", "titleBn": "ক্রেতা / Shopper", "descBn": "নেভি ব্লু জ্যাকেটের মিডিয়াম সাইজ খুঁজছেন" },
            "roleB": { "name": "Sales Assistant", "titleBn": "সেলস অ্যাসিস্ট্যান্ট", "descBn": "সাইজ এনে দিচ্ছেন ও ফিটিং রুম দেখিয়ে দিচ্ছেন" },
            "overviewBn": "পোশাক কিনতে গিয়ে সাইজ (Small, Medium, Large, XL), ট্রায়াল রুম (Fitting room / Changing room) এবং ফিটিং কেমন হয়েছে (It fits well / It is too tight) তা ইংরেজিতে প্রকাশ করা জরুরি।",
            "politenessTips": [
                "সেলসকর্মীর কাছে সাইজ চাওয়ার সময় বলুন: 'Do you have this in a size Medium?'",
                "ট্রায়াল রুমে ঢোকার আগে জিজ্ঞাসা করুন: 'Could I try this on in the fitting room?'",
                "পণ্য পছন্দ না হলে ভদ্রভাবে বলুন: 'It's a bit loose, I'll think about it. Thank you!'"
            ],
            "keyVocabulary": [
                { "word": "Fitting room", "meaning": "পোশাক ট্রায়াল দেওয়ার রুম", "pron": "ফিটিং রুম" },
                { "word": "In stock", "meaning": "দোকানে মজুদ আছে", "pron": "ইন স্টক" },
                { "word": "A size down / up", "meaning": "এক সাইজ ছোট / এক সাইজ বড়", "pron": "আ সাইজ ডাউন / আপ" },
                { "word": "On sale", "meaning": "মূল্যছাড়ে বিক্রি হচ্ছে", "pron": "অন সেইল" }
            ]
        },
        "starters": [
            { "en": "Excuse me, do you have this shirt in a medium size?", "bn": "মাফ করবেন, এই শার্টটি কি মিডিয়াম সাইজে আছে আপনাদের?", "tip": "নির্দিষ্ট সাইজ জানার সবচেয়ে নির্ভরযোগ্য বাক্য।" },
            { "en": "Hi, where are the fitting rooms located?", "bn": "হাই, ট্রায়াল রুমগুলো কোন দিকে?", "tip": "ট্রায়াল রুমে যাওয়ার সোজা প্রশ্ন।" },
            { "en": "Are these winter jackets currently on discount?", "bn": "এই শীতের জ্যাকেটগুলোতে কি এখন কোনো ডিসকাউন্ট চলছে?", "tip": "অফিসিয়াল ডিসকাউন্ট জানার বাক্য।" }
        ],
        "dialogue": [
            { "id": "1", "speaker": "Shopper", "role": "A", "roleTitle": "Shopper / ক্রেতা", "en": "Excuse me, I really like this jacket. Do you have it in size Medium?", "bn": "মাফ করবেন, আমার এই জ্যাকেটটি খুব পছন্দ হয়েছে। এটি কি মিডিয়াম সাইজে হবে?", "ipa": "/ɪkˈskjuːz miː aɪ ˈrɪəli laɪk ðɪs ˈdʒækɪt duː juː hæv ɪt ɪn saɪz ˈmiːdiəm/", "bn_pron": "এক্সকিউজ মি, আই রিয়ালি লাইক দিস জ্যাকেট। ডু ইউ হ্যাভ ইট ইন সাইজ মিডিয়াম?" },
            { "id": "2", "speaker": "Assistant", "role": "B", "roleTitle": "Assistant / স্টাফ", "en": "Let me check our stock room for you. Yes, here is a Medium in navy blue!", "bn": "আমি একটু স্টক রুমে চেক করে দেখছি। হ্যাঁ, এই যে নেভি ব্লু রঙে মিডিয়াম সাইজ আছে!", "ipa": "/let miː tʃek ˈaʊə stɒk ruːm fɔː juː jes hɪər ɪz ə ˈmiːdiəm ɪn ˈneɪvi bluː/", "bn_pron": "লেট মি চেক আওয়ার স্টক রুম ফর ইউ। ইয়েস, হিয়ার ইয আ মিডিয়াম ইন নেভি ব্লু!" },
            { "id": "3", "speaker": "Shopper", "role": "A", "roleTitle": "Shopper / ক্রেতা", "en": "Great! Where are the fitting rooms so I can try it on?", "bn": "দারুণ! ট্রায়াল রুমগুলো কোন দিকে যাতে আমি একটু পরে দেখতে পারি?", "ipa": "/ɡreɪt weər ɑː ðə ˈfɪtɪŋ ruːmz səʊ aɪ kæn traɪ ɪt ɒn/", "bn_pron": "গ্রেট! হোয়ার আর দ্য ফিটিং রুমস সো আই ক্যান ট্রাই ইট অন?" },
            { "id": "4", "speaker": "Assistant", "role": "B", "roleTitle": "Assistant / স্টাফ", "en": "The fitting rooms are right around the corner on your left.", "bn": "ট্রায়াল রুমগুলো ঠিক এই কোণা ঘুরে আপনার বাম দিকে রয়েছে।", "ipa": "/ðə ˈfɪtɪŋ ruːmz ɑː raɪt əˈraʊnd ðə ˈkɔːnər ɒn jɔː left/", "bn_pron": "দ্য ফিটিং রুমস আর রাইট অ্যারাউন্ড দ্য কর্নার অন ইউর লেফট।" },
            { "id": "5", "speaker": "Shopper", "role": "A", "roleTitle": "Shopper / ক্রেতা", "en": "Thanks! ... Well, the sleeves are perfect, but the shoulders feel slightly tight.", "bn": "ধন্যবাদ! ... আচ্ছা, হাতা ঠিক আছে, তবে কাঁধের দিকটা সামান্য আঁটসাঁট লাগছে।", "ipa": "/θæŋks wel ðə sliːvz ɑː ˈpɜːfɪkt bʌt ðə ˈʃəʊldəz fiːl ˈslaɪtli taɪt/", "bn_pron": "থ্যাংকস! ... ওয়েল, দ্য স্লিভস আর পারফেক্ট, বাট দ্য শোল্ডারস ফিল স্লাইটলি টাইট।" },
            { "id": "6", "speaker": "Assistant", "role": "B", "roleTitle": "Assistant / স্টাফ", "en": "Would you like to try a size Large to compare the comfort?", "bn": "আপনি কি আরামদায়ক কি না তা দেখতে একটি লার্জ সাইজ ট্রাই করে দেখতে চান?", "ipa": "/wʊd juː laɪk tuː traɪ ə saɪz lɑːdʒ tuː kəmˈpeə ðə ˈkʌmfət/", "bn_pron": "উড ইউ লাইক টু ট্রাই আ সাইজ লার্জ টু কম্পেয়ার দ্য কমফোর্ট?" },
            { "id": "7", "speaker": "Shopper", "role": "A", "roleTitle": "Shopper / ক্রেতা", "en": "Yes please, that would be very helpful.", "bn": "হ্যাঁ প্লিজ, তা খুব ভালো হতো।", "ipa": "/jes pliːz ðæt wʊd biː ˈveri ˈhelpfl/", "bn_pron": "ইয়েস প্লীয, দ্যাট উড বি ভেরি হেল্পফুল।" },
            { "id": "8", "speaker": "Assistant", "role": "B", "roleTitle": "Assistant / স্টাফ", "en": "Here is the Large. How does that one feel?", "bn": "এই যে লার্জ সাইজ। এবার কেমন লাগছে?", "ipa": "/hɪər ɪz ðə lɑːdʒ haʊ dʌz ðæt wʌn fiːl/", "bn_pron": "হিয়ার ইয দ্য লার্জ। হাউ ডাজ দ্যাট ওয়ান ফিল?" },
            { "id": "9", "speaker": "Shopper", "role": "A", "roleTitle": "Shopper / ক্রেতা", "en": "This fits like a glove! It's so comfortable. Is it on sale today?", "bn": "এটা একদম নিখুঁত ফিট হয়েছে! খুব আরামদায়ক। আজ কি এটা কোনো ডিসকাউন্টে আছে?", "ipa": "/ðɪs fɪts laɪk ə ɡlʌv ɪts səʊ ˈkʌmftəbl ɪz ɪt ɒn seɪl təˈdeɪ/", "bn_pron": "দিস ফিটস লাইক আ গ্লাভ! ইটস সো কমফোর্টেবল। ইজ ইট অন সেইল টুডেই?" },
            { "id": "10", "speaker": "Assistant", "role": "B", "roleTitle": "Assistant / স্টাফ", "en": "Yes! All outerwear is 20% off at the cash register.", "bn": "হ্যাঁ! ক্যাশ কাউন্টারে সব জ্যাকেটের ওপর ২০% ডিসকাউন্ট পাওয়া যাবে।", "ipa": "/jes ɔːl ˈaʊtəweər ɪz ˈtwenti pəˈsent ɒf æt ðə kæʃ ˈredʒɪstə/", "bn_pron": "ইয়েস! অল আউটারওয়্যার ইজ টোয়েন্টি পার্সেন্ট অফ অ্যাট দ্য ক্যাশ রেজিস্টার।" }
        ],
        "followUps": [
            { "en": "What is your return or exchange policy if it's a gift?", "bn": "এটা উপহার হলে ফেরত বা পরিবর্তনের নিয়ম কী?" },
            { "en": "Do you have this exact design in black or charcoal gray?", "bn": "এই একই ডিজাইন কি কালো বা ছাই রঙে পাওয়া যাবে?" },
            { "en": "Could I get a gift receipt inside the bag?", "bn": "ব্যাগের ভেতরে কি একটি গিফট রিসিট দেওয়া যাবে?" }
        ],
        "closers": [
            { "en": "I'll take it! Thank you so much for your patience.", "bn": "আমি এটা নিচ্ছি! আপনার ধৈর্যের জন্য অনেক ধন্যবাদ।" },
            { "en": "I'll think about it and come back later. Thanks for your help!", "bn": "আমি একটু ভেবে পরে আসব। সাহায্যের জন্য ধন্যবাদ!" },
            { "en": "Have a wonderful shift today! Goodbye.", "bn": "আজকের দিনটি চমৎকার কাটুক! বিদায়।" }
        ],
        "nativePhrases": [
            { "phrase": "Fits like a glove", "meaning": "শরীরের মাপে একদম নিখুঁতভাবে বসা", "context": "কাপড় একদম ঠিকঠাক ফিট হলে প্রশংসা করতে।" },
            { "phrase": "Try it on", "meaning": "পোশাক পরে মাপ পরীক্ষা করা", "context": "ট্রায়াল দেওয়ার অনুরোধে।" },
            { "phrase": "In stock", "meaning": "দোকানে মজুদ থাকা", "context": "সাইজ বা রঙ পাওয়া যাবে কি না জানতে।" }
        ]
    },

    # 5. Restaurant Dining & Splitting the Bill
    {
        "id": "conv-05-restaurant-dining-splitting-the-bill",
        "number": 5,
        "title": "Restaurant Dining & Splitting the Bill",
        "titleBn": "রেস্টুরেন্টে খাবার অর্ডার ও বিল ভাগাভাগি",
        "level": "Easy",
        "category": "Services",
        "imageUrl": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
        "sceneDescription": "বন্ধুদের নিয়ে রেস্তোরাঁয় ডিনার করতে গিয়ে টেবিল চাওয়া, স্পেশাল খাবার অর্ডার করা এবং খাওয়া শেষে বিল সমানভাবে ভাগ করে দেওয়ার দৃশ্যপট।",
        "briefing": {
            "setting": "ডাইনিং রেস্তোরাঁ (Dining Restaurant)",
            "roleA": { "name": "Diner", "titleBn": "অতিথি / গেস্ট", "descBn": "দুইজনের টেবিল চেয়ে মেন্যু থেকে খাবার অর্ডার করছেন" },
            "roleB": { "name": "Waiter", "titleBn": "ওয়েটার / সার্ভার", "descBn": "শেফের স্পেশাল খাবার সাজেস্ট করছেন ও বিল ভাগ করে দিচ্ছেন" },
            "overviewBn": "রেস্তোরাঁয় টেবিল চাওয়া (Table for two), স্পেশাল ডিশ জানা (Today's special), পানি সাধারণ না স্পার্কলিং (Still or sparkling) এবং বিল আলাদা করা (Split the bill) অত্যন্ত দরকারি স্কিল।",
            "politenessTips": [
                "রেস্তোরাঁয় ঢুকে বলুন: 'Table for two, please.'",
                "বিল চাওয়ার সময় বলুন: 'Could we please have the check when you have a moment?'",
                "বিল ভাগ করতে চাইলে শুরুতেই ওয়েটারকে বলুন: 'Could we split the bill evenly between two cards?'"
            ],
            "keyVocabulary": [
                { "word": "Table for two", "meaning": "দুইজনের বসার টেবিল", "pron": "টেইবল ফর টু" },
                { "word": "Chef's special", "meaning": "শেফের আজকের বিশেষ পদ", "pron": "শেফস স্পেশাল" },
                { "word": "Split the bill", "meaning": "বিল সমানভাবে ভাগ করে দেওয়া", "pron": "স্প্লিট দ্য বিল" },
                { "word": "Check / Bill", "meaning": "খাবারের মোট খরচের রশিদ", "pron": "চেক / বিল" }
            ]
        },
        "starters": [
            { "en": "Good evening! Do you have a table available for two?", "bn": "শুভ সন্ধ্যা! দুইজনের জন্য কি কোনো টেবিল খালি আছে?", "tip": "রেস্তোরাঁয় ঢোকার প্রথম স্বাভাবিক বাক্য।" },
            { "en": "Excuse me, could we see the dessert and drink menu?", "bn": "মাফ করবেন, আমরা কি ডেজার্ট ও পানীয়ের মেন্যুটা দেখতে পারি?", "tip": "মেন্যু চাওয়ার মার্জিত রূপ।" },
            { "en": "Could we please get the check whenever you're ready?", "bn": "সময় সুবিধা অনুযায়ী আমাদের বিলটি কি একটু দেওয়া যাবে?", "tip": "বিল চাওয়ার সবচেয়ে ভদ্র রূপ।" }
        ],
        "dialogue": [
            { "id": "1", "speaker": "Diner", "role": "A", "roleTitle": "Diner / অতিথি", "en": "Good evening! We don't have a reservation, but is there a table for two?", "bn": "শুভ সন্ধ্যা! আমাদের কোনো বুকিং নেই, তবে দুইজনের কোনো টেবিল কি খালি আছে?", "ipa": "/ɡʊd ˈiːvnɪŋ wiː dəʊnt hæv ə ˌrezəˈveɪʃn bʌt ɪz ðeər ə ˈteɪbl fɔː tuː/", "bn_pron": "গুড ইভনিং! উই ডোন্ট হ্যাভ আ রিজার্ভেশন, বাট ইজ দেয়ার আ টেইবল ফর টু?" },
            { "id": "2", "speaker": "Waiter", "role": "B", "roleTitle": "Waiter / ওয়েটার", "en": "Good evening! Yes, right this way by the window. Here are your menus.", "bn": "শুভ সন্ধ্যা! হ্যাঁ, জানালার পাশে এই টেবিলটিতে আসুন। এই যে আপনাদের মেন্যু।", "ipa": "/ɡʊd ˈiːvnɪŋ jes raɪt ðɪs weɪ baɪ ðə ˈwɪndəʊ hɪər ɑː jɔː ˈmenjuːz/", "bn_pron": "গুড ইভনিং! ইয়েস, রাইট দিস ওয়ে বাই দ্য উইন্ডো। হিয়ার আর ইউর মেন্যুস।" },
            { "id": "3", "speaker": "Diner", "role": "A", "roleTitle": "Diner / অতিথি", "en": "Thank you! What is the chef's special tonight?", "bn": "ধন্যবাদ! আজকের রাতে শেফের বিশেষ পদ কোনটি?", "ipa": "/θæŋk juː wɒt ɪz ðə ʃefs ˈspeʃl təˈnaɪt/", "bn_pron": "থ্যাংক ইউ! ওয়াট ইজ দ্য শেফস স্পেশাল টুনাইট?" },
            { "id": "4", "speaker": "Waiter", "role": "B", "roleTitle": "Waiter / ওয়েটার", "en": "Tonight we have grilled salmon with garlic asparagus and lemon butter.", "bn": "আজ রাতে লেমন বাটারে গার্লিক অ্যাসপ্যারাগাসের সাথে গ্রিলড স্যামন মাছ রয়েছে।", "ipa": "/təˈnaɪt wiː hæv ɡrɪld ˈsæmən wɪð ˈɡɑːlɪk əˈspærəɡəs ænd ˈlemən ˈbʌtə/", "bn_pron": "টুনাইট উই হ্যাভ গ্রিলড স্যামন উইথ গার্লিক অ্যাসপ্যারাগাস অ্যান্ড লেমন বাটার।" },
            { "id": "5", "speaker": "Diner", "role": "A", "roleTitle": "Diner / অতিথি", "en": "That sounds delicious! We will have two orders of the salmon, please.", "bn": "অসাধারণ শোনাচ্ছে! আমাদের জন্য দুইটি স্যামন নিয়ে আসুন, প্লিজ।", "ipa": "/ðæt saʊndz dɪˈlɪʃəs wiː wɪl hæv tuː ˈɔːdəz ɒv ðə ˈsæmən pliːz/", "bn_pron": "দ্যাট সাউন্ডস ডিলিশাস! উই উইল হ্যাভ টু অর্ডার্স অফ দ্য স্যামন, প্লীয।" },
            { "id": "6", "speaker": "Waiter", "role": "B", "roleTitle": "Waiter / ওয়েটার", "en": "Excellent choice. Would you care for still water or sparkling water?", "bn": "চমৎকার পছন্দ। আপনারা কি সাধারণ পানি নেবেন নাকি স্পার্কলিং ওয়াটার?", "ipa": "/ˈeksələnt tʃɔɪs wʊd juː keə fɔː stɪl ˈwɔːtər ɔː ˈspɑːklɪŋ ˈwɔːtə/", "bn_pron": "এক্সেলেন্ট চয়েস। উড ইউ কেয়ার ফর স্টিল ওয়াটার অর স্পার্কলিং ওয়াটার?" },
            { "id": "7", "speaker": "Diner", "role": "A", "roleTitle": "Diner / অতিথি", "en": "Just still water with a slice of lemon, thank you.", "bn": "এক টুকরো লেবুসহ সাধারণ পানি দিন, ধন্যবাদ।", "ipa": "/dʒʌst stɪl ˈwɔːtə wɪð ə slaɪs ɒv ˈlemən θæŋk juː/", "bn_pron": "জাস্ট স্টিল ওয়াটার উইথ আ স্লাইস অফ লেমন, থ্যাংক ইউ।" },
            { "id": "8", "speaker": "Waiter", "role": "B", "roleTitle": "Waiter / ওয়েটার", "en": "Coming right up! ... (After dinner) Did you both enjoy the meal?", "bn": "কিছুক্ষণের মধ্যেই নিয়ে আসছি! ... (খাবার শেষে) খাবারটি কি আপনাদের ভালো লেগেছে?", "ipa": "/ˈkʌmɪŋ raɪt ʌp dɪd juː bəʊθ ɪnˈdʒɔɪ ðə miːl/", "bn_pron": "কামিং রাইট আপ! ... ডিড ইউ বোথ এনজয় দ্য মিল?" },
            { "id": "9", "speaker": "Diner", "role": "A", "roleTitle": "Diner / অতিথি", "en": "It was amazing! Could we get the bill, and could we split it evenly?", "bn": "দারুণ ছিল! আমাদের বিলটি কি একটু দেওয়া যাবে, আর বিলটি কি সমান দুই ভাগে করা যাবে?", "ipa": "/ɪt wɒz əˈmeɪzɪŋ kʊd wiː ɡet ðə bɪl ænd kʊd wiː splɪt ɪt ˈiːvnli/", "bn_pron": "ইট ওয়াজ অ্যামেজিং! কুড উই গেট দ্য বিল, অ্যান্ড কুড উই স্প্লিট ইট ইভেনলি?" },
            { "id": "10", "speaker": "Waiter", "role": "B", "roleTitle": "Waiter / ওয়েটার", "en": "Of course! I have split it into two equal cards. Take your time!", "bn": "অবশ্যই! আমি দুইটি কার্ডের জন্য সমানভাবে ভাগ করে দিচ্ছি। সময় নিয়ে পেমেন্ট করুন!", "ipa": "/ɒv kɔːs aɪ hæv splɪt ɪt ˈɪntuː tuː ˈiːkwəl kɑːdz teɪk jɔː taɪm/", "bn_pron": "অফ কোর্স! আই হ্যাভ স্প্লিট ইট ইনটু টু ইকুয়াল কার্ডস। টেক ইউর টাইম!" }
        ],
        "followUps": [
            { "en": "Can we pack the leftover food in a takeaway box?", "bn": "অবশিষ্ট খাবার কি পার্সেল বক্সে প্যাক করে দেওয়া যাবে?" },
            { "en": "Does the total bill include the service charge or gratuity?", "bn": "মোট বিলের সাথে কি সার্ভিস চার্জ বা টিপস অন্তর্ভুক্ত আছে?" },
            { "en": "Could you bring a clean fork and extra napkins?", "bn": "একটি পরিষ্কার কাঁটাচামচ ও অতিরিক্ত টিস্যু দেওয়া যাবে?" }
        ],
        "closers": [
            { "en": "Thank you for the wonderful hospitality! We'll definitely be back.", "bn": "সুন্দর আতিথেয়তার জন্য ধন্যবাদ! আমরা নিশ্চিতভাবেই আবার আসব।" },
            { "en": "My compliments to the chef! Have a great evening.", "bn": "শেফের হাতের রান্নার জন্য প্রশংসা রইল! শুভ সন্ধ্যা।" },
            { "en": "Everything was top-notch. Keep the change, please!", "bn": "সবকিছু সেরা মানের ছিল। অতিরিক্ত টাকাটা রেখে দিন, প্লিজ!" }
        ],
        "nativePhrases": [
            { "phrase": "Split the bill / Go Dutch", "meaning": "বিল সমানভাবে ভাগ করে দেওয়া", "context": "বন্ধুদের সাথে ডিনার শেষে বিল দেওয়ার সময়।" },
            { "phrase": "My treat / It's on me", "meaning": "আজকের বিল আমি দিচ্ছি (দাওয়াত)", "context": "বন্ধুকে খাওয়াতে চাইলে।" },
            { "phrase": "Compliments to the chef", "meaning": "রান্না অসাধারণ হয়েছে বলে শেফকে শুভেচ্ছা", "context": "খাবার খুব সুস্বাদু হলে ওয়েটারকে বলার মার্জিত বাক্য।" }
        ]
    },

    # 6. At the Doctor's: Symptoms & Prescription
    {
        "id": "conv-06-at-the-doctor-s-symptoms-prescription",
        "number": 6,
        "title": "At the Doctor's: Symptoms & Prescription",
        "titleBn": "ডাক্তারের চেম্বারে লক্ষণ প্রকাশ ও প্রেসক্রিপশন",
        "level": "Easy",
        "category": "Services",
        "imageUrl": "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80",
        "sceneDescription": "ডাক্তারের চেম্বারে গিয়ে নিজের শারীরিক অসুস্থতা, জ্বর বা ব্যথার লক্ষণ স্পষ্ট ভাষায় বুঝিয়ে বলা এবং প্রেসক্রিপশনের নির্দেশনা জানা।",
        "briefing": {
            "setting": "ডাক্তারের চেম্বার (Doctor's Consultation Room)",
            "roleA": { "name": "Patient", "titleBn": "রোগী / পেশেন্ট", "descBn": "তিন দিন ধরে গলাব্যথা ও জ্বরের লক্ষণ জানাচ্ছেন" },
            "roleB": { "name": "Doctor", "titleBn": "চিকিৎসক / ডক্টর", "descBn": "গলা পরীক্ষা করে অ্যান্টিবায়োটিক ও বিশ্রামের পরামর্শ দিচ্ছেন" },
            "overviewBn": "বিদেশে ডাক্তারের কাছে গেলে লক্ষণ কতদিন ধরে (For three days), ব্যথার ধরন (Dull ache, sharp pain) এবং কোনো ওষুধে অ্যালার্জি আছে কি না (Allergic to penicillin) স্পষ্টভাবে বলতে পারা খুব গুরুত্বপূর্ণ।",
            "politenessTips": [
                "ডাক্তারকে লক্ষণ বলার সময় শুরু করুন: 'Doctor, I haven't been feeling well since Monday.'",
                "ওষুধ খাওয়ার নিয়ম কনফার্ম করতে জিজ্ঞাসা করুন: 'Should I take this before or after meals?'",
                "কোনো পার্শ্বপ্রতিক্রিয়া বা অ্যালার্জি থাকলে আগেই জানান: 'I am allergic to certain antibiotics.'"
            ],
            "keyVocabulary": [
                { "word": "Sore throat / Fever", "meaning": "গলাব্যথা / জ্বর", "pron": "সোর থ্রোট / ফিভার" },
                { "word": "Prescription", "meaning": "চিকিৎসকের দেওয়া ব্যবস্থাপত্র", "pron": "প্রেসক্রিপশন" },
                { "word": "Dosage", "meaning": "ওষুধ সেবনের মাত্রা বা নিয়ম", "pron": "ডোসেজ" },
                { "word": "Get plenty of rest", "meaning": "পর্যাপ্ত বিশ্রাম নেওয়া", "pron": "গেট প্লেন্টি অফ রেস্ট" }
            ]
        },
        "starters": [
            { "en": "Good morning Doctor, I've had a persistent fever for three days.", "bn": "শুভ সকাল ডাক্তার, তিন দিন ধরে আমার একটানা জ্বর চলছে।", "tip": "লক্ষণ জানানোর সবচেয়ে স্পষ্ট বাক্য।" },
            { "en": "Hello Doctor, I woke up with severe throat pain and headache.", "bn": "হ্যালো ডাক্তার, ঘুম থেকে উঠে দেখি প্রচণ্ড গলাব্যথা ও মাথাধরা।", "tip": "তীব্র লক্ষণ প্রকাশের উপায়।" },
            { "en": "Doctor, could you check my cough? It has gotten worse recently.", "bn": "ডাক্তার, আমার কাশিটা কি একটু দেখবেন? সম্প্রতি এটা বেড়েছে।", "tip": "নির্দিষ্ট কোনো সমস্যা পরীক্ষার অনুরোধ।" }
        ],
        "dialogue": [
            { "id": "1", "speaker": "Patient", "role": "A", "roleTitle": "Patient / রোগী", "en": "Good morning Doctor. I haven't been feeling well for the past three days.", "bn": "শুভ সকাল ডাক্তার। গত তিন দিন ধরে আমার শরীরটা একদম ভালো লাগছে না।", "ipa": "/ɡʊd ˈmɔːnɪŋ ˈdɒktə aɪ hævnt biːn ˈfiːlɪŋ wel fɔː ðə pɑːst θriː deɪz/", "bn_pron": "গুড মর্নিং ডক্টর। আই হ্যাভন্ট বিন ফিলিং ওয়েল ফর দ্য পাস্ট থ্রি ডেইজ।" },
            { "id": "2", "speaker": "Doctor", "role": "B", "roleTitle": "Doctor / চিকিৎসক", "en": "Good morning. Please have a seat. What symptoms are you experiencing?", "bn": "শুভ সকাল। বসুন প্লিজ। আপনার কী কী উপসর্গ বা লক্ষণ দেখা দিচ্ছে?", "ipa": "/ɡʊd ˈmɔːnɪŋ pliːz hæv ə siːt wɒt ˈsɪmptəmz ɑː juː ɪkˈspɪəriənsɪŋ/", "bn_pron": "গুড মর্নিং। প্লীয হ্যাভ আ সিট। ওয়াট সিম্পটমস আর ইউ এক্সপেরিয়েন্সিং?" },
            { "id": "3", "speaker": "Patient", "role": "A", "roleTitle": "Patient / রোগী", "en": "I have a painful sore throat, a dry cough, and a mild fever around 101.", "bn": "আমার গলায় প্রচণ্ড ব্যথা, শুকনা কাশি এবং প্রায় ১০১ ডিগ্রির মতো হালকা জ্বর আছে।", "ipa": "/aɪ hæv ə ˈpeɪnfl sɔː θrəʊt ə draɪ kɒf ænd ə maɪld ˈfiːvər əˈraʊnd wʌn ˈhʌndrəd/", "bn_pron": "আই হ্যাভ আ পেইনফুল সোর থ্রোট, আ ড্রাই কফ, অ্যান্ড আ মাইল্ড ফিভার।" },
            { "id": "4", "speaker": "Doctor", "role": "B", "roleTitle": "Doctor / চিকিৎসক", "en": "Let me take a quick look at your throat. Please open wide and say 'Ah'.", "bn": "আমি একটু আপনার গলাটি পরীক্ষা করে দেখি। হাঁ করুন এবং 'আহ' বলুন।", "ipa": "/let miː teɪk ə kwɪk lʊk æt jɔː θrəʊt pliːz ˈəʊpən waɪd ænd seɪ ɑː/", "bn_pron": "লেট মি টেক আ কুইক লুক অ্যাট ইউর থ্রোট। প্লীয ওপেন ওয়াইড অ্যান্ড সেই আহ।" },
            { "id": "5", "speaker": "Patient", "role": "A", "roleTitle": "Patient / রোগী", "en": "Aaaah... It hurts especially when I try to swallow food or water.", "bn": "আআহ... বিশেষ করে খাবার বা পানি গিলতে গেলে খুব ব্যথা করে।", "ipa": "/ɑː ɪt hɜːts ɪˈspeʃəli wen aɪ traɪ tuː ˈswɒləʊ fuːd ɔː ˈwɔːtə/", "bn_pron": "আহ... ইট হার্টস এস্পেশালি হোয়েন আই ট্রাই টু সোয়ালো ফুড অর ওয়াটার।" },
            { "id": "6", "speaker": "Doctor", "role": "B", "roleTitle": "Doctor / চিকিৎসক", "en": "Yes, your tonsils are quite red and inflamed. It's a bacterial infection.", "bn": "হ্যাঁ, আপনার টনসিল বেশ লাল হয়ে ফুলে উঠেছে। এটা একটি ব্যাকটেরিয়াল ইনফেকশন।", "ipa": "/jes jɔː ˈtɒnslz ɑː kwaɪt red ænd ɪnˈfleɪmd ɪts ə bækˈtɪəriəl ɪnˈfekʃn/", "bn_pron": "ইয়েস, ইউর টনসিলস আর কোয়াইট রেড অ্যান্ড ইনফ্লেইমড। ইটস আ ব্যাকটেরিয়াল ইনফেকশন।" },
            { "id": "7", "speaker": "Patient", "role": "A", "roleTitle": "Patient / রোগী", "en": "Is it serious Doctor? Will I need to take antibiotics?", "bn": "এটা কি গুরুতর কিছু ডাক্তার? আমাকে কি অ্যান্টিবায়োটিক খেতে হবে?", "ipa": "/ɪz ɪt ˈsɪəriəs ˈdɒktə wɪl aɪ niːd tuː teɪk ˌæntibaɪˈɒtɪks/", "bn_pron": "ইজ ইট সিরিয়াস ডক্টর? উইল আই নিড টু টেক অ্যান্টিবায়োটিকস?" },
            { "id": "8", "speaker": "Doctor", "role": "B", "roleTitle": "Doctor / চিকিৎসক", "en": "Don't worry, it's very treatable. I'm prescribing a 5-day antibiotic course.", "bn": "চিন্তা করবেন না, এটি সহজেই নিরাময়যোগ্য। আমি ৫ দিনের অ্যান্টিবায়োটিক কোর্স লিখে দিচ্ছি।", "ipa": "/dəʊnt ˈwʌri ɪts ˈveri ˈtriːtəbl aɪm prɪˈskraɪbɪŋ ə faɪv deɪ ˌæntibaɪˈɒtɪk kɔːs/", "bn_pron": "ডোন্ট ওয়ারি, ইটস ভেরি ট্রিটেবল। আইম প্রেসক্রাইবিং আ ফাইভ ডেই অ্যান্টিবায়োটিক কোর্স।" },
            { "id": "9", "speaker": "Patient", "role": "A", "roleTitle": "Patient / রোগী", "en": "Should I take the medicine before or after meals?", "bn": "ওষুধগুলো কি খাওয়ার আগে নাকি খাওয়ার পরে সেবন করতে হবে?", "ipa": "/ʃʊd aɪ teɪk ðə ˈmedsn bɪˈfɔːr ɔːr ˈɑːftə miːlz/", "bn_pron": "শুড আই টেক দ্য মেডিসিন বিফোর অর আফটার মিলস?" },
            { "id": "10", "speaker": "Doctor", "role": "B", "roleTitle": "Doctor / চিকিৎসক", "en": "After meals, twice a day. Drink warm water, gargle with salt, and rest well!", "bn": "খাওয়ার পর, দিনে দুইবার। হালকা গরম পানি খাবেন, লবণ দিয়ে কুলকুচি করবেন ও বিশ্রাম নেবেন!", "ipa": "/ˈɑːftə miːlz twaɪs ə deɪ drɪŋk wɔːm ˈwɔːtə ˈɡɑːɡl wɪð sɔːlt ænd rest wel/", "bn_pron": "আফটার মিলস, টোয়াইস আ ডেই। ড্রিঙ্ক ওয়ার্ম ওয়াটার, গার্গল উইথ সল্ট, অ্যান্ড রেস্ট ওয়েল!" }
        ],
        "followUps": [
            { "en": "Should I come back for a follow-up visit if the fever doesn't drop?", "bn": "জ্বর না কমলে কি আবার ফলো-আপ চেকআপে আসতে হবে?" },
            { "en": "Can I continue going to office, or should I take sick leave?", "bn": "আমি কি অফিসে যেতে পারব, নাকি ছুটির প্রয়োজন আছে?" },
            { "en": "Are there any dietary restrictions I should maintain this week?", "bn": "এই সপ্তাহে খাওয়ার ব্যাপারে কি কোনো বিধিনিষেধ মেনে চলতে হবে?" }
        ],
        "closers": [
            { "en": "Thank you so much Doctor! I will follow your instructions carefully.", "bn": "অনেক ধন্যবাদ ডাক্তার! আমি আপনার নির্দেশনা ঠিকঠাক মেনে চলব।" },
            { "en": "I appreciate your quick diagnosis. Have a good day Doctor!", "bn": "দ্রুত রোগ নির্ণয় করার জন্য কৃতজ্ঞতা। ভালো থাকবেন ডাক্তার!" },
            { "en": "Thanks for your guidance. Goodbye Doctor!", "bn": "আপনার মূল্যবান নির্দেশনার জন্য ধন্যবাদ। বিদায় ডাক্তার!" }
        ],
        "nativePhrases": [
            { "phrase": "Under the weather", "meaning": "সামান্য অসুস্থ বা শরীর ভালো না থাকা", "context": "অসুস্থতা প্রকাশের সবচেয়ে কমন ব্রিটিশ ও আমেরিকান ফ্রেজ।" },
            { "phrase": "Back on your feet", "meaning": "সুস্থ হয়ে আগের মতো সক্রিয় হয়ে ওঠা", "context": "রোগীর দ্রুত আরোগ্য কামনায়।" },
            { "phrase": "Run a temperature", "meaning": "শরীরে জ্বর থাকা বা তাপমাত্রা বাড়া", "context": "জ্বর মাপার পর চিকিৎসকের সাথে কথা বলতে।" }
        ]
    },

    # 7. Checking into a Hotel Room
    {
        "id": "conv-07-checking-into-a-hotel-room",
        "number": 7,
        "title": "Checking into a Hotel Room",
        "titleBn": "হোটেলে রুম বুকিং ও চেক-ইন করা",
        "level": "Easy",
        "category": "Travel",
        "imageUrl": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
        "sceneDescription": "আন্তর্জাতিক হোটেলে চেক-ইন কাউন্টারে নিজের রিজার্ভেশন দেখানো, রুমের চাবি নেওয়া, ওয়াইফাই ও ব্রেকফাস্ট টাইমিং জানার কথপোকথন।",
        "briefing": {
            "setting": "হোটেল রিসিপশন ডেস্ক (Hotel Reception Desk)",
            "roleA": { "name": "Guest", "titleBn": "হোটেল গেস্ট / অতিথি", "descBn": "অনলাইন বুকিংয়ের নাম ও পাসপোর্ট দেখিয়ে চেক-ইন করছেন" },
            "roleB": { "name": "Receptionist", "titleBn": "রিসিপশনিস্ট / ফ্রন্ট ডেস্ক", "descBn": "রুমের চাবি বুঝিয়ে দিচ্ছেন এবং ব্রেকফাস্টের নিয়ম জানাচ্ছেন" },
            "overviewBn": "হোটেলে চেক-ইন করার সময় বুকিং কনফার্মেশন কোড, পাসপোর্ট/আইডি এবং ক্রেডিট কার্ড দেখানো লাগে। রুম কোন ফ্লোরে (On the 8th floor), ব্রেকফাস্ট কয়টায় (Complimentary breakfast) এবং চেক-আউট কয়টায় তা জানা জরুরি।",
            "politenessTips": [
                "রিসিপশনে হাসিমুখে বলুন: 'Hello, I have a reservation under the name [Your Name].'",
                "পাসপোর্ট দেওয়ার সময় বলুন: 'Here is my passport and booking confirmation.'",
                "ওয়াইফাই ও ব্রেকফাস্টের সময় নিশ্চিত হয়ে নিন: 'What time is breakfast served in the morning?'"
            ],
            "keyVocabulary": [
                { "word": "Reservation under the name", "meaning": "অমুক নামের অধীনে হোটেল বুকিং", "pron": "রিজার্ভেশন আন্ডার দ্য নেইম" },
                { "word": "Key card", "meaning": "রুমের ডিজিটাল চাবি কার্ড", "pron": "কী কার্ড" },
                { "word": "Complimentary breakfast", "meaning": "হোটেলের পক্ষ থেকে ফ্রি সকালের নাস্তা", "pron": "কমপ্লিমেন্টারি ব্রেকফাস্ট" },
                { "word": "Check-out time", "meaning": "হোটেল রুম ছাড়ার নির্দিষ্ট সময়", "pron": "চেক-আউট টাইম" }
            ]
        },
        "starters": [
            { "en": "Good afternoon! I have a reservation under Rafi Ahmed.", "bn": "শুভ অপরাহ্ন! রাফি আহমেদ নামে আমার একটি রুম বুকিং আছে।", "tip": "চেক-ইন শুরুর সবচেয়ে মার্জিত বাক্য।" },
            { "en": "Hello! Is it possible to check in a bit earlier today?", "bn": "হ্যালো! আজ কি কিছুটা আগে চেক-ইন করা সম্ভব হবে?", "tip": "আর্লি চেক-ইন চাওয়ার উপায়।" },
            { "en": "Hi, could you check my booking confirmation from Expedia?", "bn": "হাই, এক্সপিডিয়া থেকে করা আমার বুকিং কনফার্মেশনটি কি একটু দেখবেন?", "tip": "অনলাইন বুকিং দেখানোর বাক্য।" }
        ],
        "dialogue": [
            { "id": "1", "speaker": "Guest", "role": "A", "roleTitle": "Guest / অতিথি", "en": "Good afternoon! I'd like to check in. I have a reservation under Rafi Ahmed.", "bn": "শুভ অপরাহ্ন! আমি চেক-ইন করতে চাচ্ছি। রাফি আহমেদ নামে আমার একটি বুকিং রয়েছে।", "ipa": "/ɡʊd ˌɑːftəˈnuːn aɪd laɪk tuː tʃek ɪn aɪ hæv ə ˌrezəˈveɪʃn ˈʌndə ˈræfi ˈɑːmed/", "bn_pron": "গুড আফটারনুন! আইড লাইক টু চেক ইন। আই হ্যাভ আ রিজার্ভেশন আন্ডার রাফি আহমেদ।" },
            { "id": "2", "speaker": "Receptionist", "role": "B", "roleTitle": "Receptionist / ফ্রন্ট ডেস্ক", "en": "Good afternoon, Mr. Ahmed! Welcome. May I please see your passport and ID?", "bn": "শুভ অপরাহ্ন, জনাব আহমেদ! স্বাগতম। আমি কি আপনার পাসপোর্ট ও পরিচয়পত্রটি দেখতে পারি?", "ipa": "/ɡʊd ˌɑːftəˈnuːn ˈmɪstə ˈɑːmed ˈwelkəm meɪ aɪ pliːz siː jɔː ˈpɑːspɔːt ænd aɪˈdiː/", "bn_pron": "গুড আফটারনুন, মিস্টার আহমেদ! ওয়েলকাম। মে আই প্লীয সি ইউর পাসপোর্ট অ্যান্ড আইডি?" },
            { "id": "3", "speaker": "Guest", "role": "A", "roleTitle": "Guest / অতিথি", "en": "Here is my passport, and here is my booking confirmation slip.", "bn": "এই যে আমার পাসপোর্ট, আর এই যে আমার বুকিং কনফার্মেশন স্লিপ।", "ipa": "/hɪər ɪz maɪ ˈpɑːspɔːt ænd hɪər ɪz maɪ ˈbʊkɪŋ ˌkɒnfəˈmeɪʃn slɪp/", "bn_pron": "হিয়ার ইয মাই পাসপোর্ট, অ্যান্ড হিয়ার ইয মাই বুকিং কনফার্মেশন স্লিপ।" },
            { "id": "4", "speaker": "Receptionist", "role": "B", "roleTitle": "Receptionist / ফ্রন্ট ডেস্ক", "en": "Thank you! You have booked a Deluxe King Room for three nights, correct?", "bn": "ধন্যবাদ! আপনি তিন রাতের জন্য একটি ডিলাক্স কিং রুম বুক করেছেন, তাই তো?", "ipa": "/θæŋk juː juː hæv bʊkt ə dɪˈlʌks kɪŋ ruːm fɔː θriː naɪts kəˈrekt/", "bn_pron": "থ্যাংক ইউ! ইউ হ্যাভ বুকড আ ডিলাক্স কিং রুম ফর থ্রি নাইটস, কারেক্ট?" },
            { "id": "5", "speaker": "Guest", "role": "A", "roleTitle": "Guest / অতিথি", "en": "Yes, exactly. Could I please request a quiet room on a higher floor?", "bn": "হ্যাঁ, একদম ঠিক। উপরের কোনো ফ্লোরে একটি শান্ত নিরিবিলি রুম কি পাওয়া যাবে?", "ipa": "/jes ɪɡˈzæktli kʊd aɪ pliːz rɪˈkwest ə ˈkwaɪət ruːm ɒn ə ˈhaɪə flɔː/", "bn_pron": "ইয়েস, এক্স্যাক্টলি। কুড আই প্লীয রিকোয়েস্ট আ কোয়াইট রুম অন আ হায়ার ফ্লোর?" },
            { "id": "6", "speaker": "Receptionist", "role": "B", "roleTitle": "Receptionist / ফ্রন্ট ডেস্ক", "en": "Certainly! I've assigned you Room 812 on the eighth floor with a city view.", "bn": "অবশ্যই! আমি আপনাকে অষ্টম তলায় সিটি ভিউসহ ৮১২ নম্বর রুমটি দিয়ে দিচ্ছি।", "ipa": "/ˈsɜːtnli aɪv əˈsaɪnd juː ruːm eɪt twelv ɒn ðə eɪtθ flɔː wɪð ə ˈsɪti vjuː/", "bn_pron": "সার্টেনলি! আইভ অ্যাসাইন্ড ইউ রুম এইট টুয়েলভ অন দ্য এইথ ফ্লোর উইথ আ সিটি ভিউ।" },
            { "id": "7", "speaker": "Guest", "role": "A", "roleTitle": "Guest / অতিথি", "en": "That sounds wonderful! What time is breakfast served in the morning?", "bn": "অসাধারণ! সকালে ব্রেকফাস্ট কয়টা থেকে পরিবেশন করা হয়?", "ipa": "/ðæt saʊndz ˈwʌndəfl wɒt taɪm ɪz ˈbrekfəst sɜːvd ɪn ðə ˈmɔːnɪŋ/", "bn_pron": "দ্যাট সাউন্ডস ওয়ান্ডারফুল! ওয়াট টাইম ইজ ব্রেকফাস্ট সার্ভড ইন দ্য মর্নিং?" },
            { "id": "8", "speaker": "Receptionist", "role": "B", "roleTitle": "Receptionist / ফ্রন্ট ডেস্ক", "en": "Complimentary breakfast is served from 6:30 to 10:00 AM in the second-floor dining hall.", "bn": "দ্বিতীয় তলার ডাইনিং হলে সকাল ৬:৩০ থেকে ১০:০০টা পর্যন্ত কমপ্লিমেন্টারি ব্রেকফাস্ট থাকে।", "ipa": "/ˌkɒmplɪˈmentri ˈbrekfəst ɪz sɜːvd frəm sɪks ˈθɜːti tuː ten eɪ em ɪn ðə ˈsekənd flɔː ˈdaɪnɪŋ hɔːl/", "bn_pron": "কমপ্লিমেন্টারি ব্রেকফাস্ট ইজ সার্ভড ফ্রম সিক্স থার্টি টু টেন এএম ইন দ্য সেকেন্ড ফ্লোর ডাইনিং হল।" },
            { "id": "9", "speaker": "Guest", "role": "A", "roleTitle": "Guest / অতিথি", "en": "And what is the Wi-Fi password for the room?", "bn": "আর রুমের ওয়াইফাই পাসওয়ার্ডটি কী?", "ipa": "/ænd wɒt ɪz ðə ˈwaɪfaɪ ˈpɑːswɜːd fɔː ðə ruːm/", "bn_pron": "অ্যান্ড ওয়াট ইজ দ্য ওয়াইফাই পাসওয়ার্ড ফর দ্য রুম?" },
            { "id": "10", "speaker": "Receptionist", "role": "B", "roleTitle": "Receptionist / ফ্রন্ট ডেস্ক", "en": "It's printed right inside this key card sleeve. Check-out is at 11 AM. Enjoy your stay!", "bn": "এই চাবি কার্ডের কভারের ভেতরেই প্রিন্ট করা আছে। চেক-আউট সকাল ১১টায়। আপনার অবস্থান আনন্দদায়ক হোক!", "ipa": "/ɪts ˈprɪntɪd raɪt ɪnˈsaɪd ðɪs kiː kɑːd sliːv tʃek aʊt ɪz æt ɪˈlevn eɪ em ɪnˈdʒɔɪ jɔː steɪ/", "bn_pron": "ইটস প্রিন্টেড রাইট ইনসাইড দিস কী কার্ড স্লিভ। চেক-আউট ইজ অ্যাট ইলেভেন এএম। এনজয় ইউর স্টেই!" }
        ],
        "followUps": [
            { "en": "Can I leave my luggage with the concierge after check-out tomorrow?", "bn": "কাল চেক-আউটের পর কি আমার লাগেজ কনসিয়ার্জের কাছে রেখে যেতে পারব?" },
            { "en": "Is room service available 24 hours a day?", "bn": "রুম সার্ভিস কি ২৪ ঘণ্টাই চালু থাকে?" },
            { "en": "Could you arrange a wake-up call for 6:00 AM tomorrow?", "bn": "কাল সকাল ৬টায় কি একটি ওয়েক-আপ কল দেওয়া যাবে?" }
        ],
        "closers": [
            { "en": "Thank you for the warm welcome! Have a good day.", "bn": "উষ্ণ অভ্যর্থনার জন্য ধন্যবাদ! দিনটি ভালো কাটুক।" },
            { "en": "Thanks for your great assistance at the desk!", "bn": "ডেস্কে চমৎকার সহযোগিতার জন্য ধন্যবাদ!" },
            { "en": "I'll head up to my room now. Goodbye!", "bn": "আমি এবার রুমে যাচ্ছি। বিদায়!" }
        ],
        "nativePhrases": [
            { "phrase": "On the house", "meaning": "হোটেল বা ম্যানেজমেন্টের পক্ষ থেকে সম্পূর্ণ ফ্রি", "context": "ফ্রি ড্রিঙ্ক বা ব্রেকফাস্টের ব্যাপারে।" },
            { "phrase": "Wake-up call", "meaning": "সকালে ঘুম ভাঙানোর ফোন কল", "context": "ভ্রমণের সকালে আগেভাগে জাগার জন্য অনুরোধ করতে।" },
            { "phrase": "Early check-in", "meaning": "নির্ধারিত সময়ের আগেই রুমে ওঠা", "context": "সকাল সকাল হোটেলে পৌঁছালে।" }
        ]
    },

    # 8. Catching Up with an Old Friend on Phone
    {
        "id": "conv-08-catching-up-with-an-old-friend-on-phone",
        "number": 8,
        "title": "Catching Up with an Old Friend on Phone",
        "titleBn": "পুরনো বন্ধুর সাথে ফোনে আড্ডা ও খোঁজ নেওয়া",
        "level": "Easy",
        "category": "Social",
        "imageUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
        "sceneDescription": "অনেকদিন পর পুরনো বন্ধুকে হঠাৎ ফোন করে কেমন আছে তা জানা, ক্যারিয়ার ও পরিবার নিয়ে আড্ডা দেওয়া এবং সামনাসামনি দেখা করার প্ল্যান করা।",
        "briefing": {
            "setting": "ফোনে আড্ডা (Casual Phone Call)",
            "roleA": { "name": "Tanvir", "titleBn": "বন্ধু A (Caller)", "descBn": "অনেকদিন পর ফোন দিয়ে বন্ধুর খোঁজ নিচ্ছেন" },
            "roleB": { "name": "Nabil", "titleBn": "বন্ধু B (Receiver)", "descBn": "আনন্দিত হয়ে সাম্প্রতিক জীবনের আপডেট দিচ্ছেন" },
            "overviewBn": "বন্ধুদের সাথে ফোনে কথা বলার সময় ইনফরমাল ও আন্তরিক ভঙ্গি বজায় রাখা হয়। 'Long time no see', 'How have you been?', 'What's new with you?' ইত্যাদি ফ্রেজ ফোনে আড্ডাকে সাবলীল করে তোলে।",
            "politenessTips": [
                "ফোন ধরেই বলুন: 'Hey! Long time no talk, how are you doing?'",
                "বন্ধুর সুখবরে স্বতঃস্ফূর্ত অভিনন্দন জানান: 'That is huge news! I'm so happy for you!'",
                "কথার শেষে সামনাসামনি কফি খাওয়ার প্রস্তাব দিন: 'We definitely need to catch up over coffee soon!'"
            ],
            "keyVocabulary": [
                { "word": "Long time no talk", "meaning": "অনেকদিন তোমার সাথে কথা হয় না", "pron": "লং টাইম নো টক" },
                { "word": "Catch up", "meaning": "পুরনো গল্প করে আপডেট নেওয়া", "pron": "ক্যাচ আপ" },
                { "word": "Out of the blue", "meaning": "হঠাৎ অপ্রত্যাশিতভাবে", "pron": "আউট অফ দ্য ব্লু" },
                { "word": "Time flies", "meaning": "সময় খুব দ্রুত চলে যায়", "pron": "টাইম ফ্লাইস" }
            ]
        },
        "starters": [
            { "en": "Hey buddy! Long time no hear. How have you been?", "bn": "আরে দোস্ত! অনেকদিন তোর কোনো খোঁজ নেই। কেমন আছিস রে?", "tip": "বন্ধুকে ফোন করার সবচেয়ে আন্তরিক বাক্য।" },
            { "en": "I was just thinking about you out of the blue, so I decided to call!", "bn": "হঠাৎ তোর কথা মনে পড়ল, তাই ভাবলাম একটা কল দিই!", "tip": "অপ্রত্যাশিত কিন্তু মিষ্টি ফোন কল শুরুর উপায়।" },
            { "en": "Hey man, do you have a few minutes to chat?", "bn": "আরে বন্ধু, তোর কি একটু কথা বলার সময় হবে?", "tip": "বন্ধু ব্যস্ত কি না তা জানার সহজ বাক্য।" }
        ],
        "dialogue": [
            { "id": "1", "speaker": "Tanvir", "role": "A", "roleTitle": "Friend A / তানভীর", "en": "Hey Nabil! It's Tanvir. Long time no talk, man! How have you been?", "bn": "আরে নাবিল! আমি তানভীর। কতদিন তোর সাথে কথা হয় না রে দোস্ত! কেমন আছিস তুই?", "ipa": "/heɪ ˈnəbɪl ɪts tænˈvɪə lɒŋ taɪm nəʊ tɔːk mæn haʊ hæv juː biːn/", "bn_pron": "হেই নাবিল! ইটস তানভীর। লং টাইম নো টক, ম্যান! হাউ হ্যাভ ইউ বিন?" },
            { "id": "2", "speaker": "Nabil", "role": "B", "roleTitle": "Friend B / নাবিল", "en": "Tanvir! What a pleasant surprise! I'm doing really well, how are things with you?", "bn": "তানভীর! কী দারুণ সারপ্রাইজ রে! আমি তো বেশ ভালোই আছি, তোর কী অবস্থা বল?", "ipa": "/tænˈvɪə wɒt ə ˈpleznt səˈpraɪz aɪm ˈduːɪŋ ˈrɪəli wel haʊ ɑː θɪŋz wɪð juː/", "bn_pron": "তানভীর! ওয়াট আ প্লেজেন্ট সারপ্রাইজ! আইম ডুইং রিয়ালি ওয়েল, হাউ আর থিংস উইথ ইউ?" },
            { "id": "3", "speaker": "Tanvir", "role": "A", "roleTitle": "Friend A / তানভীর", "en": "Things are great! I saw on Facebook that you recently got promoted. Congratulations!", "bn": "সবকিছু দারুণ চলছে! ফেসবুকে দেখলাম তোর সম্প্রতি প্রমোশন হয়েছে। অনেক অভিনন্দন!", "ipa": "/θɪŋz ɑː ɡreɪt aɪ sɔː ɒn ˈfeɪsbʊk ðæt juː ˈriːsntli ɡɒt prəˈməʊtɪd kənˌɡrætʃuˈleɪʃnz/", "bn_pron": "থিংস আর গ্রেট! আই স অন ফেইসবুক দ্যাট ইউ রিসেন্টলি গট প্রমোটেড। কনগ্র্যাচুলেশনস!" },
            { "id": "4", "speaker": "Nabil", "role": "B", "roleTitle": "Friend B / নাবিল", "en": "Thanks a lot buddy! It's been quite hectic with the new responsibilities, but rewarding.", "bn": "অনেক ধন্যবাদ রে দোস্ত! নতুন দায়িত্ব নিয়ে বেশ ব্যস্ততা যাচ্ছে, তবে বেশ ভালোই লাগছে।", "ipa": "/θæŋks ə lɒt ˈbʌdi ɪts biːn kwaɪt ˈhektɪk wɪð ðə njuː rɪˌspɒnsəˈbɪlətiz bʌt rɪˈwɔːdɪŋ/", "bn_pron": "থ্যাংকস আ লট বাডি! ইটস বিন কোয়াইট হেকটিক উইথ দ্য নিউ রেসপনসিবিলিটিজ, বাট রিওয়ার্ডিং।" },
            { "id": "5", "speaker": "Tanvir", "role": "A", "roleTitle": "Friend A / তানভীর", "en": "You truly deserve it. How is the family doing? How are your parents?", "bn": "তুই সত্যিই এটা ডিজার্ভ করিস। পরিবারের সবাই কেমন আছে? আংকেল-আন্টি কেমন আছেন?", "ipa": "/juː ˈtruːli dɪˈzɜːv ɪt haʊ ɪz ðə ˈfæməli ˈduːɪŋ haʊ ɑː jɔː ˈpeərənts/", "bn_pron": "ইউ ট্রুলি ডিজার্ভ ইট। হাউ ইজ দ্য ফ্যামিলি ডুইং? হাউ আর ইউর প্যারেন্টস?" },
            { "id": "6", "speaker": "Nabil", "role": "B", "roleTitle": "Friend B / নাবিল", "en": "They are doing well, thank you for asking. What about your new startup project?", "bn": "ওনারা ভালো আছেন, খোঁজ নেওয়ার জন্য ধন্যবাদ। তোর নতুন স্টার্টআপ প্রজেক্টের কী খবর?", "ipa": "/ðeɪ ɑː ˈduːɪŋ wel θæŋk juː fɔːr ˈɑːskɪŋ wɒt əˈbaʊt jɔː njuː ˈstɑːtʌp ˈprɒdʒekt/", "bn_pron": "দেই আর ডুইং ওয়েল, থ্যাংক ইউ ফর আস্কিং। ওয়াট অ্যাবাউট ইউর নিউ স্টার্টআপ প্রজেক্ট?" },
            { "id": "7", "speaker": "Tanvir", "role": "A", "roleTitle": "Friend A / তানভীর", "en": "We just launched our mobile app last month, and users are loving it!", "bn": "আমরা গত মাসেই আমাদের মোবাইল অ্যাপ লঞ্চ করেছি, এবং ইউজাররা দারুণ পছন্দ করছে!", "ipa": "/wiː dʒʌst lɔːntʃt ˈaʊə ˈməʊbaɪl æp lɑːst mʌnθ ænd ˈjuːzəz ɑː ˈlʌvɪŋ ɪt/", "bn_pron": "উই জাস্ট লঞ্চড আওয়ার মোবাইল অ্যাপ লাস্ট মান্থ, অ্যান্ড ইউজার্স আর লাভিং ইট!" },
            { "id": "8", "speaker": "Nabil", "role": "B", "roleTitle": "Friend B / নাবিল", "en": "That's huge news! I'm so proud of you. We really need to celebrate.", "bn": "এ তো বিরাট খবর! তোর জন্য খুব গর্ব হচ্ছে রে। আমাদের কিন্তু একটা সেলিব্রেশন করা উচিত।", "ipa": "/ðæts hjuːdʒ njuːz aɪm səʊ praʊd ɒv juː wiː ˈrɪəli niːd tuː ˈselɪbreɪt/", "bn_pron": "দ্যাটস হিউজ নিউজ! আইম সো প্রাউড অফ ইউ। উই রিয়ালি নিড টু সেলিব্রেট।" },
            { "id": "9", "speaker": "Tanvir", "role": "A", "roleTitle": "Friend A / তানভীর", "en": "Yes! Are you free this Saturday afternoon for some coffee and snacks?", "bn": "হ্যাঁ রে! এই শনিবার বিকেলে কি তোর সময় হবে একটু কফি আর আড্ডা দেওয়ার?", "ipa": "/jes ɑː juː friː ðɪs ˈsætədeɪ ˌɑːftəˈnuːn fɔː sʌm ˈkɒfi ænd snæks/", "bn_pron": "ইয়েস! আর ইউ ফ্রি দিস স্যাটারডে আফটারনুন ফর সাম কফি অ্যান্ড স্ন্যাক্স?" },
            { "id": "10", "speaker": "Nabil", "role": "B", "roleTitle": "Friend B / নাবিল", "en": "Saturday works perfectly! Let's meet at our usual Dhanmondi cafe around 5 PM.", "bn": "শনিবার একদম পারফেক্ট! বিকেল ৫টার দিকে ধানমন্ডির আমাদের সেই চেনা ক্যাফেতে দেখা হচ্ছে।", "ipa": "/ˈsætədeɪ wɜːks ˈpɜːfɪktli lets miːt æt ˈaʊə ˈjuːʒʊəl dʌnˈmɒndi ˈkæfeɪ əˈraʊnd faɪv piː em/", "bn_pron": "স্যাটারডে ওয়ার্কস পারফেক্টলি! লেটস মিট অ্যাট আওয়ার ইউজুয়াল ধানমন্ডি ক্যাফে অ্যারাউন্ড ফাইভ পিএম।" }
        ],
        "followUps": [
            { "en": "Do you still keep in touch with anyone from our university batch?", "bn": "আমাদের ভার্সিটি ব্যাচের কারো সাথে কি এখনো তোর যোগাযোগ আছে?" },
            { "en": "Shall I bring my laptop along so I can demo the new app to you?", "bn": "আমি কি ল্যাপটপ নিয়ে আসব যাতে তোকে অ্যাপের ডেমো দেখাতে পারি?" },
            { "en": "Text me the location link on WhatsApp so I don't forget, okay?", "bn": "লোকেশনটা একটু হোয়াটসঅ্যাপে পাঠিয়ে দিস যাতে ভুলে না যাই, ঠিক আছে?" }
        ],
        "closers": [
            { "en": "Awesome, see you on Saturday at 5! Take care buddy.", "bn": "দারুণ, তাহলে শনিবারে দেখা হচ্ছে বিকেল ৫টায়! ভালো থাকিস দোস্ত।" },
            { "en": "It was so wonderful hearing your voice again. Talk soon!", "bn": "তোর গলা আবার শুনে খুব ভালো লাগল। দ্রুতই কথা হচ্ছে!" },
            { "en": "Give my warm regards to uncle and aunty. Bye for now!", "bn": "আংকেল আর আন্টিকে আমার সালাম দিস। আপাতত রাখছি রে!" }
        ],
        "nativePhrases": [
            { "phrase": "Time flies", "meaning": "সময় চোখের পলকে কেটে যায়", "context": "কতদিন পর কথা হচ্ছে তা বোঝাতে।" },
            { "phrase": "Catch you later", "meaning": "পরে আবার কথা হবে বা দেখা হবে", "context": "বন্ধুদের সাথে বিদায়ের সময় ইনফরমাল উক্তি।" },
            { "phrase": "Out of the blue", "meaning": "হঠাৎ অপ্রত্যাশিতভাবে কোনো পূর্বাভাস ছাড়াই", "context": "বহুদিন পর অপ্রত্যাশিত যোগাযোগের ক্ষেত্রে।" }
        ]
    },

    # 9. Asking for Help & Lost Property
    {
        "id": "conv-09-asking-for-help-lost-property",
        "number": 9,
        "title": "Asking for Help & Lost Property",
        "titleBn": "সাহায্য চাওয়া ও হারানো জিনিস খোঁজা",
        "level": "Easy",
        "category": "Daily Life",
        "imageUrl": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
        "sceneDescription": "মেট্রোরেল বা শপিং মলে নিজের ব্যাগ বা ফোন ফেলে এলে হেল্পডেস্কে গিয়ে বিবরণ দেওয়া এবং হারানো বিজ্ঞপ্তি এন্ট্রি করার কথোপকথন।",
        "briefing": {
            "setting": "ইনফরমেশন ও লস্ট অ্যান্ড ফাউন্ড ডেস্ক (Lost & Found Desk)",
            "roleA": { "name": "Passenger", "titleBn": "যাত্রী / প্যাসেঞ্জার", "descBn": "মেট্রোর সিটে ফেলে আসা কালো ব্যাকপ্যাক খুঁজছেন" },
            "roleB": { "name": "Helpdesk Officer", "titleBn": "হেল্পডেস্ক অফিসার", "descBn": "লক্ষণ লিখে নিচ্ছেন ও স্টেশনের সিসিটিভি চেক করছেন" },
            "overviewBn": "হারানো জিনিস খোঁজার সময় আকার, রঙ (Black leather), ব্র্যান্ড (Samsonite) এবং ভেতরের জিনিসপত্রের তালিকা (Laptop, charger, wallet) ইংরেজিতে স্পষ্ট করে বলতে পারলে উদ্ধার করা অনেক সহজ হয়।",
            "politenessTips": [
                "উদ্বিগ্ন হলেও শান্ত থেকে বলুন: 'Excuse me, I think I misplaced my bag on the train.'",
                "ব্যাগের ভেতরের গুরুত্বপূর্ণ জিনিস উল্লেখ করুন: 'It contains my work laptop and ID card.'",
                "অফিসারের নাম ও রেফারেন্স নম্বর টুকে রাখুন: 'Could you give me a reference tracking number?'"
            ],
            "keyVocabulary": [
                { "word": "Lost and Found", "meaning": "হারানো ও প্রাপ্তি শাখা", "pron": "লস্ট অ্যান্ড ফাউন্ড" },
                { "word": "Misplaced", "meaning": "ভুলবশত কোথাও ফেলে আসা", "pron": "মিসপেইসড" },
                { "word": "Distinctive feature", "meaning": "চেনার মতো বিশেষ কোনো চিহ্ন", "pron": "ডিসটিংক্টিভ ফিচার" },
                { "word": "File a report", "meaning": "অফিসিয়াল হারানো ডায়েরি করা", "pron": "ফাইল আ রিপোর্ট" }
            ]
        },
        "starters": [
            { "en": "Excuse me, where is the Lost and Found department located?", "bn": "মাফ করবেন, হারানো ও প্রাপ্তি শাখাটি কোন দিকে?", "tip": "ডেস্ক খোঁজার প্রথম প্রশ্ন।" },
            { "en": "Hello officer, I think I accidentally left my backpack on the subway train.", "bn": "হ্যালো অফিসার, মনে হয় আমি ট্রেনের সিটে ভুল করে ব্যাকপ্যাক ফেলে এসেছি।", "tip": "ঘটনা সরাসরি তুলে ধরার উপায়।" },
            { "en": "Has anyone turned in a black leather wallet today by any chance?", "bn": "আজকে কি কেউ কোনো কালো চামড়ার মানিব্যাগ এখানে জমা দিয়েছে?", "tip": "কোনো জিনিস ইতিমধ্যে জমা পড়েছে কি না তা জানার বাক্য।" }
        ],
        "dialogue": [
            { "id": "1", "speaker": "Passenger", "role": "A", "roleTitle": "Passenger / যাত্রী", "en": "Excuse me officer! I think I accidentally left my backpack on the train.", "bn": "মাফ করবেন অফিসার! মনে হয় আমি ভুল করে ট্রেনে আমার ব্যাকপ্যাকটি ফেলে এসেছি।", "ipa": "/ɪkˈskjuːz miː ˈɒfɪsə aɪ θɪŋk aɪ ˌæksɪˈdentəli left maɪ ˈbækpæk ɒn ðə treɪn/", "bn_pron": "এক্সকিউজ মি অফিসার! আই থিঙ্ক আই অ্যাক্সিডেন্টালি লেফট মাই ব্যাকপ্যাক অন দ্য ট্রেইন।" },
            { "id": "2", "speaker": "Officer", "role": "B", "roleTitle": "Officer / কর্মকর্তা", "en": "Don't panic. Which train line were you on, and what time did you get off?", "bn": "আতঙ্কিত হবেন না। আপনি কোন ট্রেনের লাইনে ছিলেন এবং কয়টার সময় নেমেছেন?", "ipa": "/dəʊnt ˈpænɪk wɪtʃ treɪn laɪn wɜː juː ɒn ænd wɒt taɪm dɪd juː ɡet ɒf/", "bn_pron": "ডোন্ট প্যানিক। উইচ ট্রেইন লাইন ওয়ার ইউ অন, অ্যান্ড ওয়াট টাইম ডিড ইউ গেট অফ?" },
            { "id": "3", "speaker": "Passenger", "role": "A", "roleTitle": "Passenger / যাত্রী", "en": "I was on the Green Line. I got off at Central Station about twenty minutes ago.", "bn": "আমি গ্রিন লাইনে ছিলাম। প্রায় বিশ মিনিট আগে সেন্ট্রাল স্টেশনে নেমেছি।", "ipa": "/aɪ wɒz ɒn ðə ɡriːn laɪn aɪ ɡɒt ɒf æt ˈsentrəl ˈsteɪʃn əˈbaʊt ˈtwenti ˈmɪnɪts əˈɡəʊ/", "bn_pron": "আই ওয়াজ অন দ্য গ্রীন লাইন। আই গট অফ অ্যাট সেন্ট্রাল স্টেশন অ্যাবাউট টোয়েন্টি মিনিটস অ্যাগো।" },
            { "id": "4", "speaker": "Officer", "role": "B", "roleTitle": "Officer / কর্মকর্তা", "en": "Can you describe the bag? What color is it, and what's inside?", "bn": "ব্যাগটির একটু বিবরণ দিতে পারবেন? রঙ কী এবং ভেতরে কী ছিল?", "ipa": "/kæn juː dɪˈskraɪb ðə bæɡ wɒt ˈkʌlər ɪz ɪt ænd wɒts ɪnˈsaɪd/", "bn_pron": "ক্যান ইউ ডেসক্রাইব দ্য ব্যাগ? ওয়াট কালার ইজ ইট, অ্যান্ড ওয়াটস ইনসাইড?" },
            { "id": "5", "speaker": "Passenger", "role": "A", "roleTitle": "Passenger / যাত্রী", "en": "It's a black SwissGear backpack. Inside there is a silver Dell laptop and my notebook.", "bn": "এটি একটি কালো সুইসগিয়ার ব্যাকপ্যাক। ভেতরে সিলভার রঙের ডেল ল্যাপটপ আর নোটবুক আছে।", "ipa": "/ɪts ə blæk swɪs ɡɪə ˈbækpæk ɪnˈsaɪd ðeər ɪz ə ˈsɪlvə del ˈlæptɒp ænd maɪ ˈnəʊtbʊk/", "bn_pron": "ইটস আ ব্ল্যাক সুইসগিয়ার ব্যাকপ্যাক। ইনসাইড দেয়ার ইজ আ সিলভার ডেল ল্যাপটপ অ্যান্ড মাই নোটবুক।" },
            { "id": "6", "speaker": "Officer", "role": "B", "roleTitle": "Officer / কর্মকর্তা", "en": "Are there any specific identifying marks or keychains on the bag?", "bn": "ব্যাগটিতে চেনার মতো বিশেষ কোনো দাগ বা কি-চেইন ঝোলানো আছে?", "ipa": "/ɑː ðeər ˈeni spəˈsɪfɪk aɪˈdentɪfaɪɪŋ mɑːks ɔː ˈkiːtʃeɪnz ɒn ðə bæɡ/", "bn_pron": "আর দেয়ার এনি স্পেসিফিক আইডেন্টিফাইং মার্কস অর কী-চেইন্স অন দ্য ব্যাগ?" },
            { "id": "7", "speaker": "Passenger", "role": "A", "roleTitle": "Passenger / যাত্রী", "en": "Yes! It has a small red ribbon tied to the top zipper handle.", "bn": "হ্যাঁ! ওপরের চেইনের হাতলে একটি ছোট লাল ফিতা বাঁধা রয়েছে।", "ipa": "/jes ɪt hæz ə smɔːl red ˈrɪbən taɪd tuː ðə tɒp ˈzɪpə ˈhændl/", "bn_pron": "ইয়েস! ইট হ্যাজ আ স্মল রেড রিবন টাইড টু দ্য টপ জিপার হ্যান্ডেল।" },
            { "id": "8", "speaker": "Officer", "role": "B", "roleTitle": "Officer / কর্মকর্তা", "en": "Let me radio the cleaning crew at the terminal station right away.", "bn": "আমি টার্মিনাল স্টেশনের ক্লিনিং ক্রুকে এখনই ওয়্যারলেসে মেসেজ দিচ্ছি।", "ipa": "/let miː ˈreɪdiəʊ ðə ˈkliːnɪŋ kruː æt ðə ˈtɜːmɪnl ˈsteɪʃn raɪt əˈweɪ/", "bn_pron": "লেট মি রেডিও দ্য ক্লিনিং ক্রু অ্যাট দ্য টার্মিনাল স্টেশন রাইট অ্যাওয়ে।" },
            { "id": "9", "speaker": "Passenger", "role": "A", "roleTitle": "Passenger / যাত্রী", "en": "Thank you so much! Here is my phone number and email address.", "bn": "অনেক অনেক ধন্যবাদ! এই যে আমার ফোন নম্বর ও ইমেইল ঠিকানা রইল।", "ipa": "/θæŋk juː səʊ mʌtʃ hɪər ɪz maɪ fəʊn ˈnʌmbər ænd ˈiːmeɪl əˈdres/", "bn_pron": "থ্যাংক ইউ সো মাচ! হিয়ার ইয মাই ফোন নাম্বার অ্যান্ড ইমেইল অ্যাড্রেস।" },
            { "id": "10", "speaker": "Officer", "role": "B", "roleTitle": "Officer / কর্মকর্তা", "en": "Good news! They just found it on Seat 14. We will have it here in 15 minutes!", "bn": "দারুণ সুখবর! তারা ১৪ নম্বর সিটে ব্যাগটি পেয়েছে। ১৫ মিনিটের মধ্যেই এখানে চলে আসবে!", "ipa": "/ɡʊd njuːz ðeɪ dʒʌst faʊnd ɪt ɒn siːt ˌfɔːˈtiːn wiː wɪl hæv ɪt hɪər ɪn ˌfɪfˈtiːn ˈmɪnɪts/", "bn_pron": "গুড নিউজ! দেই জাস্ট ফাউন্ড ইট অন সিট ফোরটিন। উই উইল হ্যাভ ইট হিয়ার ইন ফিফটিন মিনিটস!" }
        ],
        "followUps": [
            { "en": "Will I need to show my ID card when claiming the bag?", "bn": "ব্যাগটি বুঝে নেওয়ার সময় কি আমার আইডি কার্ড দেখাতে হবে?" },
            { "en": "Is there a handling or storage fee for lost items?", "bn": "হারানো জিনিসের জন্য কি কোনো সার্ভিস বা স্টোরেজ ফি প্রযোজ্য?" },
            { "en": "Could I get a written receipt stating the bag was returned intact?", "bn": "ব্যাগটি অক্ষত অবস্থায় ফেরত পেয়েছি বলে কি একটি রশিদ পেতে পারি?" }
        ],
        "closers": [
            { "en": "What a huge relief! Thank you so much for your swift action.", "bn": "কী যে স্বস্তি পেলাম! আপনার দ্রুত পদক্ষেপের জন্য অনেক ধন্যবাদ।" },
            { "en": "You have saved my entire day! I'm truly grateful.", "bn": "আপনি আমার পুরো দিনটি বাঁচিয়ে দিলেন! আমি অত্যন্ত কৃতজ্ঞ।" },
            { "en": "Thank you for the excellent service! Have a wonderful day.", "bn": "চমৎকার সেবার জন্য ধন্যবাদ! দিনটি সুন্দর কাটুক।" }
        ],
        "nativePhrases": [
            { "phrase": "A huge relief", "meaning": "বড় ধরনের মানসিক স্বস্তি বা দুশ্চিন্তা মুক্তি", "context": "হারানো জিনিস ফিরে পাওয়ার পর আবেগ প্রকাশ করতে।" },
            { "phrase": "Keep an eye out", "meaning": "চোখ কান খোলা রাখা বা খেয়াল রাখা", "context": "কারো জিনিস খুঁজতে নজর রাখার প্রতিশ্রুতিতে।" },
            { "phrase": "Turned in", "meaning": "হারানো জিনিস কর্তৃপক্ষের কাছে জমা দেওয়া", "context": "কেউ ব্যাগ বা ফোন জমা করেছে কি না জানতে।" }
        ]
    },

    # 10. Talking About Hobbies & Passions
    {
        "id": "conv-10-talking-about-hobbies-passions",
        "number": 10,
        "title": "Talking About Hobbies & Passions",
        "titleBn": "শখ, আগ্রহ ও অবসর নিয়ে আলোচনা",
        "level": "Easy",
        "category": "Social",
        "imageUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
        "sceneDescription": "বন্ধুদের আড্ডায় অবসরে কে কী করতে পছন্দ করে—যেমন ফটোগ্রাফি, মিউজিক বা বই পড়া নিয়ে প্রাণবন্ত ইংরেজিতে গল্প করার দৃশ্যপট।",
        "briefing": {
            "setting": "ছুটির দিনের আড্ডা (Casual Weekend Cafe Meetup)",
            "roleA": { "name": "Arif", "titleBn": "ফটোগ্রাফিপ্রেমী (Photographer)", "descBn": "ল্যান্ডস্কেপ ফটোগ্রাফি ও ক্যামেরা নিয়ে গল্প করছেন" },
            "roleB": { "name": "Maya", "titleBn": "সঙ্গীতপ্রেমী (Guitarist)", "descBn": "অ্যাকোস্টিক গিটার শেখার অভিজ্ঞতা শেয়ার করছেন" },
            "overviewBn": "শখ নিয়ে কথা বলা সামাজিক যোগাযোগের সবচেয়ে সহজ উপায়। 'I am passionate about...', 'In my spare time, I love...', 'How did you get into that?' ইত্যাদি বাক্য আড্ডাকে আকর্ষণীয় করে তোলে।",
            "politenessTips": [
                "শখের ব্যাপারে জানতে জিজ্ঞাসা করুন: 'What do you like to do in your free time?'",
                "অপরের শখকে উৎসাহ দিন: 'That sounds really relaxing and creative!'",
                "কীভাবে শুরু করেছিলেন তা জানতে চান: 'What inspired you to pick up the guitar?'"
            ],
            "keyVocabulary": [
                { "word": "In my spare time", "meaning": "আমার অবসর সময়ে", "pron": "ইন মাই স্পেয়ার টাইম" },
                { "word": "Passionate about", "meaning": "কোনো কাজের প্রতি তীব্র ভালোবাসা থাকা", "pron": "প্যাশনেট অ্যাবাউট" },
                { "word": "Unwind / De-stress", "meaning": "ক্লান্তি দূর করে মানসিক শান্তি পাওয়া", "pron": "আনওয়াইন্ড / ডি-স্ট্রেস" },
                { "word": "Pick up a skill", "meaning": "নতুন কোনো দক্ষতা বা শখ আয়ত্ত করা", "pron": "পিক আপ আ স্কিল" }
            ]
        },
        "starters": [
            { "en": "What do you usually enjoy doing to unwind after a busy work week?", "bn": "ব্যস্ত সপ্তাহের পর ক্লান্তি দূর করতে তুমি সাধারণত কী করতে পছন্দ করো?", "tip": "শখ জানার সবচেয়ে মার্জিত প্রশ্ন।" },
            { "en": "Do you have any creative hobbies or sports you're passionate about?", "bn": "তোমার কি কোনো ক্রিয়েটিভ শখ বা খেলাধুলা আছে যার প্রতি তোমার বিশেষ আগ্রহ?", "tip": "আগ্রহের জায়গা জানার বাক্য।" },
            { "en": "I've recently started learning photography! Do you do any photography?", "bn": "আমি সম্প্রতি ফটোগ্রাফি শেখা শুরু করেছি! তুমি কি ছবি তোলো?", "tip": "নিজের শখের কথা বলে কথোপকথন শুরু করার কৌশল।" }
        ],
        "dialogue": [
            { "id": "1", "speaker": "Arif", "role": "A", "roleTitle": "Arif / আরিফ", "en": "Maya, what do you usually enjoy doing in your spare time?", "bn": "মায়া, অবসর সময়ে তুমি সাধারণত কী করতে পছন্দ করো?", "ipa": "/ˈmaɪə wɒt duː juː ˈjuːʒʊəli ɪnˈdʒɔɪ ˈduːɪŋ ɪn jɔː speə taɪm/", "bn_pron": "মায়া, ওয়াট ডু ইউ ইউজুয়ালি এনজয় ডুইং ইন ইউর স্পেয়ার টাইম?" },
            { "id": "2", "speaker": "Maya", "role": "B", "roleTitle": "Maya / মায়া", "en": "I've recently picked up playing the acoustic guitar. It really helps me de-stress!", "bn": "আমি সম্প্রতি অ্যাকোস্টিক গিটার বাজানো শিখেছি। এটা মানসিক ক্লান্তি দূর করতে দারুণ সাহায্য করে!", "ipa": "/aɪv ˈriːsntli pɪkt ʌp ˈpleɪɪŋ ðə əˈkuːstɪk ɡɪˈtɑː ɪt ˈrɪəli helps miː diːˈstres/", "bn_pron": "আইভ রিসেন্টলি পিকড আপ প্লেইং দ্য অ্যাকোস্টিক গিটার। ইট রিয়ালি হেল্পস মি ডি-স্ট্রেস!" },
            { "id": "3", "speaker": "Arif", "role": "A", "roleTitle": "Arif / আরিফ", "en": "That is so cool! How long have you been playing it?", "bn": "খুবই চমৎকার তো! কতদিন ধরে গিটার বাজাচ্ছো?", "ipa": "/ðæt ɪz səʊ kuːl haʊ lɒŋ hæv juː biːn ˈpleɪɪŋ ɪt/", "bn_pron": "দ্যাট ইয সো কুল! হাউ লং হ্যাভ ইউ বিন প্লেইং ইট?" },
            { "id": "4", "speaker": "Maya", "role": "B", "roleTitle": "Maya / মায়া", "en": "About six months now. I can play a few basic chords and songs. What about you?", "bn": "প্রায় ছয় মাস হলো। কিছু বেসিক কর্ড আর গান বাজাতে পারি। তোমার কী শখ?", "ipa": "/əˈbaʊt sɪks mʌnθs naʊ aɪ kæn pleɪ ə fjuː ˈbeɪsɪk kɔːdz ænd sɒŋz wɒt əˈbaʊt juː/", "bn_pron": "অ্যাবাউট সিক্স মান্থস নাও। আই ক্যান প্লে আ ফিউ বেসিক কর্ডস অ্যান্ড সংস। ওয়াট অ্যাবাউট ইউ?" },
            { "id": "5", "speaker": "Arif", "role": "A", "roleTitle": "Arif / আরিফ", "en": "I'm super passionate about landscape and street photography.", "bn": "আমি ল্যান্ডস্কেপ ও স্ট্রিট ফটোগ্রাফির প্রতি ভীষণ প্যাশনেট।", "ipa": "/aɪm ˈsuːpə ˈpæʃənət əˈbaʊt ˈlændskeɪp ænd striːt fəˈtɒɡrəfi/", "bn_pron": "আইম সুপার প্যাশনেট অ্যাবাউট ল্যান্ডস্কেপ অ্যান্ড স্ট্রিট ফটোগ্রাফি।" },
            { "id": "6", "speaker": "Maya", "role": "B", "roleTitle": "Maya / মায়া", "en": "Wow, photography! What kind of camera equipment do you use?", "bn": "ওয়াও, ফটোগ্রাফি! তুমি কী ধরনের ক্যামেরা বা যন্ত্রপাতি ব্যবহার করো?", "ipa": "/waʊ fəˈtɒɡrəfi wɒt kaɪnd ɒv ˈkæmərə ɪˈkwɪpmənt duː juː juːz/", "bn_pron": "ওয়াও, ফটোগ্রাফি! ওয়াট কাইন্ড অফ ক্যামেরা ইকুইপমেন্ট ডু ইউ ইউজ?" },
            { "id": "7", "speaker": "Arif", "role": "A", "roleTitle": "Arif / আরিফ", "en": "I use a Sony mirrorless camera with a 50mm prime lens for natural light.", "bn": "ন্যাচারাল লাইটে ছবি তোলার জন্য আমি একটি সনি মিররলেস ক্যামেরা আর ৫০ মিমি লেন্স ব্যবহার করি।", "ipa": "/aɪ juːz ə ˈsəʊni ˈmɪrələs ˈkæmərə wɪð ə ˈfɪfti ˈmɪlɪmiːtə praɪm lenz fɔː ˈnætʃrəl laɪt/", "bn_pron": "আই ইউজ আ সোনি মিররলেস ক্যামেরা উইথ আ ফিফটি এমএম প্রাইম লেন্স ফর ন্যাচারাল লাইট।" },
            { "id": "8", "speaker": "Maya", "role": "B", "roleTitle": "Maya / মায়া", "en": "Natural light photos always look so authentic and dreamy!", "bn": "ন্যাচারাল লাইটের ছবিগুলো সবসময়ই একদম জীবন্ত আর স্বপ্নিল দেখায়!", "ipa": "/ˈnætʃrəl laɪt ˈfəʊtəʊz ˈɔːlweɪz lʊk səʊ ɔːˈθentɪk ænd ˈdriːmi/", "bn_pron": "ন্যাচারাল লাইট ফটোজ অলওয়েজ লুক সো অথেন্টিক অ্যান্ড ড্রিমি!" },
            { "id": "9", "speaker": "Arif", "role": "A", "roleTitle": "Arif / আরিফ", "en": "They really do! Maybe one day I can take some artistic portraits of you playing guitar.", "bn": "একদম সত্যি! হয়তো কোনো একদিন গিটার বাজানোর সময় তোমার কিছু শৈল্পিক পোট্রেট তুলতে পারি।", "ipa": "/ðeɪ ˈrɪəli duː ˈmeɪbi wʌn deɪ aɪ kæn teɪk sʌm ɑːˈtɪstɪk ˈpɔːtreɪts ɒv juː ˈpleɪɪŋ ɡɪˈtɑː/", "bn_pron": "দেই রিয়ালি ডু! মেবি ওয়ান ডেই আই ক্যান টেক সাম আর্টিস্টিক পোট্রেটস অফ ইউ প্লেইং গিটার।" },
            { "id": "10", "speaker": "Maya", "role": "B", "roleTitle": "Maya / মায়া", "en": "I would absolutely love that! That sounds like an amazing creative project.", "bn": "আমি তো খুবই খুশি হব! এটা সত্যিই দারুণ একটি ক্রিয়েটিভ প্রজেক্ট হবে।", "ipa": "/aɪ wʊd ˌæbsəˈluːtli lʌv ðæt ðæt saʊndz laɪk ən əˈmeɪzɪŋ kriˈeɪtɪv ˈprɒdʒekt/", "bn_pron": "আই উড অ্যাবসলিউটলি লাভ দ্যাট! দ্যাট সাউন্ডস লাইক অ্যান অ্যামেজিং ক্রিয়েটিভ প্রজেক্ট।" }
        ],
        "followUps": [
            { "en": "Do you post your photos online on Instagram or 500px?", "bn": "তুমি কি তোমার ছবিগুলো ইনস্টাগ্রাম বা অনলাইনে পোস্ট করো?" },
            { "en": "What genre of music do you like playing on guitar?", "bn": "গিটারে তুমি কোন ঘরানার গান বাজাতে পছন্দ করো?" },
            { "en": "Do you find it difficult to make time for hobbies during weekdays?", "bn": "কাজের দিনে শখের জন্য সময় বের করা কি কঠিন মনে হয়?" }
        ],
        "closers": [
            { "en": "It was so refreshing talking about something creative today!", "bn": "আজ ক্রিয়েটিভ কোনো বিষয় নিয়ে কথা বলে মনটা একদম সতেজ হয়ে গেল!" },
            { "en": "Keep practicing those chords! Can't wait to hear you play.", "bn": "কর্ডগুলো প্র্যাকটিস করতে থাকো! তোমার গান শোনার অপেক্ষায় রইলাম।" },
            { "en": "Let's definitely plan that photo session soon. Take care!", "bn": "আমরা দ্রুতই সেই ফটোসেশনের প্ল্যান করব। ভালো থেকো!" }
        ],
        "nativePhrases": [
            { "phrase": "Passionate about", "meaning": "কোনো বিষয়ের প্রতি গভীর ভালোবাসা থাকা", "context": "নিজের আসল শখ বা স্বপ্ন নিয়ে বলতে।" },
            { "phrase": "Clear your head", "meaning": "মানসিক চাপ দূর করে মন হালকা করা", "context": "শখ কীভাবে উপকার করে তা বোঝাতে।" },
            { "phrase": "Pick up a hobby", "meaning": "নতুন কোনো শখ বা খেলা শুরু করা", "context": "সম্প্রতি কিছু শেখা শুরু করলে।" }
        ]
    }
]

print(f"Loaded {len(SITUATIONS_1_20)} situations (1 to 10)")
