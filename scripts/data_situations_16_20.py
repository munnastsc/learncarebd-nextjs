# -*- coding: utf-8 -*-
"""
Situations 16 to 20 for Spoken English Lab
"""

SITUATIONS_16_20 = [
    # 16. Buying a Mobile SIM & Data Plan
    {
        "id": "conv-16-buying-a-mobile-sim-data-plan",
        "number": 16,
        "title": "Buying a Mobile SIM & Data Plan",
        "titleBn": "মোবাইল সিম ও ইন্টারনেট প্যাকেজ কেনা",
        "level": "Easy",
        "category": "Services",
        "imageUrl": "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?auto=format&fit=crop&w=800&q=80",
        "sceneDescription": "বিদেশে পৌঁছে বা নতুন শহরে গিয়ে মোবাইল দোকানে ট্রাভেলার প্রিপেইড সিম বা ই-সিম ও হাইস্পিড ডাটা প্ল্যান কেনার কথোপকথন।",
        "briefing": {
            "setting": "টেলিকম স্টোর কাউন্টার (Telecom Store Counter)",
            "roleA": { "name": "Customer", "titleBn": "গ্রাহক (Customer)", "descBn": "এক মাসের জন্য হাইস্পিড 5G ডাটা প্যাকসহ সিম চাচ্ছেন" },
            "roleB": { "name": "Sales Rep", "titleBn": "টেলিকম প্রতিনিধি (Sales Rep)", "descBn": "ই-সিম অ্যাক্টিভেশন ও ট্যুরিস্ট প্যাকেজ বুঝিয়ে দিচ্ছেন" },
            "overviewBn": "বিদেশে এয়ারপোর্টে নেমে সিম কেনার সময় ফিজিক্যাল সিম নাকি ই-সিম (eSIM), ডাটা লিমিট (Unlimited 5G or 30GB), কলিং মিনিট এবং পাসপোর্ট রেজিস্ট্রেশন আলোচনা করতে হয়।",
            "politenessTips": [
                "দোকানে গিয়ে বলুন: 'Hi, I'm looking for a prepaid tourist SIM with good data coverage.'",
                "ই-সিম সাপোর্ট জানতে বলুন: 'Does my phone support an eSIM QR code activation?'",
                "অ্যাক্টিভেশন সময় জিজ্ঞাসা করুন: 'How soon will the data and calling service be activated?'"
            ],
            "keyVocabulary": [
                { "word": "Prepaid SIM / eSIM", "meaning": "প্রিপেইড সিম কার্ড বা ডিজিটাল ই-সিম", "pron": "প্রিপেইড সিম / ই-সিম" },
                { "word": "Data allowance", "meaning": "ইন্টারনেট ডাটার নির্দিষ্ট পরিমাণ", "pron": "ডেইটা অ্যালাউয়েন্স" },
                { "word": "Network coverage", "meaning": "নেটওয়ার্কের বিস্তৃতি ও সিগন্যাল সক্ষমতা", "pron": "নেটওয়ার্ক কভারেজ" },
                { "word": "Scan the QR code", "meaning": "কিউআর কোড স্ক্যান করে ইনস্টল করা", "pron": "স্ক্যান দ্য কিউআর কোড" }
            ]
        },
        "starters": [
            { "en": "Hi, do you offer prepaid 5G data packages for international visitors?", "bn": "হাই, আন্তর্জাতিক দর্শনার্থীদের জন্য কি প্রিপেইড 5G ডাটা প্যাকেজ আছে?", "tip": "সিম চাওয়ার সূচনা বাক্য।" },
            { "en": "Excuse me, I'd like to purchase an eSIM with unlimited high-speed data.", "bn": "মাফ করবেন, আনলিমিটেড হাই-স্পিড ডাটা সহ একটি ই-সিম কিনতে চাই।", "tip": "ই-সিম চাওয়ার বাক্য।" },
            { "en": "Could you help me activate a local phone number on my smartphone?", "bn": "আমার স্মার্টফোনে একটি লোকাল ফোন নম্বর চালু করতে সাহায্য করবেন?", "tip": "অ্যাক্টিভেশন চাওয়ার উপায়।" }
        ],
        "dialogue": [
            { "id": "1", "speaker": "Customer", "role": "A", "roleTitle": "Customer / ক্রেতা", "en": "Hello! I just arrived in town and I need a prepaid SIM card with plenty of data.", "bn": "হ্যালো! আমি এইমাত্র শহরে এসেছি এবং প্রচুর ডাটা সহ একটি প্রিপেইড সিম কার্ড দরকার।", "ipa": "/həˈləʊ aɪ dʒʌst əˈraɪvd ɪn taʊn ænd aɪ niːd ə ˌpriːˈpeɪd sɪm kɑːd wɪð ˈplenti ɒv ˈdeɪtə/", "bn_pron": "হ্যালো! আই জাস্ট অ্যারাইভড ইন টাউন অ্যান্ড আই নিড আ প্রিপেইড সিম কার্ড উইথ প্লেন্টি অফ ডেইটা।" },
            { "id": "2", "speaker": "Rep", "role": "B", "roleTitle": "Sales Rep / বিক্রেতা", "en": "Welcome! How long will you be staying, and does your phone support eSIM?", "bn": "স্বাগতম! আপনি কতদিন থাকবেন এবং আপনার ফোনে কি ই-সিম সাপোর্ট করে?", "ipa": "/ˈwelkəm haʊ lɒŋ wɪl juː biː ˈsteɪɪŋ ænd dʌz jɔː fəʊn səˈpɔːt ˈiːsɪm/", "bn_pron": "ওয়েলকাম! হাউ লং উইল ইউ বি স্টেইং, অ্যান্ড ডাজ ইউর ফোন সাপোর্ট ই-সিম?" },
            { "id": "3", "speaker": "Customer", "role": "A", "roleTitle": "Customer / ক্রেতা", "en": "I'll be here for three weeks. Yes, my iPhone supports digital eSIMs.", "bn": "আমি তিন সপ্তাহ থাকব। হ্যাঁ, আমার আইফোনে ডিজিটাল ই-সিম কাজ করে।", "ipa": "/aɪl biː hɪə fɔː θriː wiːks jes maɪ ˈaɪfəʊn səˈpɔːts ˈdɪdʒɪtl ˈiːsɪmz/", "bn_pron": "আইল বি হিয়ার ফর থ্রি উইকস। ইয়েস, মাই আইফোন সাপোর্টস ডিজিটাল ই-সিমস।" },
            { "id": "4", "speaker": "Rep", "role": "B", "roleTitle": "Sales Rep / বিক্রেতা", "en": "Great! We have a 30-day Tourist Plan with 40GB of 5G data and unlimited local calls.", "bn": "দারুণ! আমাদের ৩০ দিনের ট্যুরিস্ট প্ল্যান আছে যাতে ৪০ জিবি 5G ডাটা আর আনলিমিটেড লোকাল কল রয়েছে।", "ipa": "/ɡreɪt wiː hæv ə ˈθɜːti deɪ ˈtʊərɪst plæn wɪð ˈfɔːti ˈɡɪɡəbaɪts ɒv faɪv dʒiː ˈdeɪtə/", "bn_pron": "গ্রেট! উই হ্যাভ আ থার্টি ডেই ট্যুরিস্ট প্ল্যান উইথ ফোরটি জিবি অফ ফাইভ জি ডেইটা।" },
            { "id": "5", "speaker": "Customer", "role": "A", "roleTitle": "Customer / ক্রেতা", "en": "That sounds ideal! Does it also include any international minutes to call back home?", "bn": "খুবই চমৎকার শোনাচ্ছে! এতে কি দেশে কথা বলার জন্য কোনো আন্তর্জাতিক কলিং মিনিট আছে?", "ipa": "/ðæt saʊndz aɪˈdɪəl dʌz ɪt ˈɔːlsəʊ ɪnˈkluːd ˈeni ˌɪntəˈnæʃnəl ˈmɪnɪts tuː kɔːl bæk həʊm/", "bn_pron": "দ্যাট সাউন্ডস আইডিয়াল! ডাজ ইট অলসো ইনক্লুড এনি ইন্টারন্যাশনাল মিনিটস টু কল ব্যাক হোম?" },
            { "id": "6", "speaker": "Rep", "role": "B", "roleTitle": "Sales Rep / বিক্রেতা", "en": "Yes, it includes 100 international calling minutes to over 50 countries.", "bn": "হ্যাঁ, এতে ৫০টিরও বেশি দেশে কথা বলার জন্য ১০০ আন্তর্জাতিক মিনিট রয়েছে।", "ipa": "/jes ɪt ɪnˈkluːdz wʌn ˈhʌndrəd ˌɪntəˈnæʃnəl ˈkɔːlɪŋ ˈmɪnɪts tuː ˈəʊvə ˈfɪfti ˈkʌntriz/", "bn_pron": "ইয়েস, ইট ইনক্লুডস ওয়ান হান্ড্রেড ইন্টারন্যাশনাল কলিং মিনিটস টু ওভার ফিফটি কান্ট্রিজ।" },
            { "id": "7", "speaker": "Customer", "role": "A", "roleTitle": "Customer / ক্রেতা", "en": "How much does the whole package cost?", "bn": "পুরো প্যাকেজটির মোট দাম কত পড়বে?", "ipa": "/haʊ mʌtʃ dʌz ðə həʊl ˈpækɪdʒ kɒst/", "bn_pron": "হাউ মাচ ডাজ দ্য হোল প্যাকেজ কস্ট?" },
            { "id": "8", "speaker": "Rep", "role": "B", "roleTitle": "Sales Rep / বিক্রেতা", "en": "It is $25 tax included. I will just need your passport to register the number.", "bn": "ট্যাক্সসহ মোট ২৫ ডলার পড়বে। সিমটি রেজিস্টার করতে শুধু আপনার পাসপোর্টটি লাগবে।", "ipa": "/ɪt ɪz ˈtwenti faɪv tæks ɪnˈkluːdɪd aɪ wɪl dʒʌst niːd jɔː ˈpɑːspɔːt tuː ˈredʒɪstə ðə ˈnʌmbə/", "bn_pron": "ইট ইজ টোয়েন্টি ফাইভ ট্যাক্স ইনক্লুডেড। আই উইল জাস্ট নিড ইউর পাসপোর্ট টু রেজিস্টার দ্য নাম্বার।" },
            { "id": "9", "speaker": "Customer", "role": "A", "roleTitle": "Customer / ক্রেতা", "en": "Here is my passport. Can you guide me through scanning the eSIM QR code?", "bn": "এই নিন আমার পাসপোর্ট। ই-সিমের কিউআর কোড স্ক্যান করতে আমাকে একটু গাইড করবেন?", "ipa": "/hɪər ɪz maɪ ˈpɑːspɔːt kæn juː ɡaɪd miː θruː ˈskænɪŋ ðə ˈiːsɪm kjuː ɑː kəʊd/", "bn_pron": "হিয়ার ইয মাই পাসপোর্ট। ক্যান ইউ গাইড মি থ্রু স্ক্যানিং দ্য ই-সিম কিউআর কোড?" },
            { "id": "10", "speaker": "Rep", "role": "B", "roleTitle": "Sales Rep / বিক্রেতা", "en": "Just point your camera at this QR card and tap 'Add Cellular Plan'. You're fully connected now!", "bn": "ক্যামেরাটি এই কিউআর কার্ডে ধরুন এবং 'Add Cellular Plan'-এ ট্যাপ করুন। ব্যস, আপনি এখন সংযুক্ত!", "ipa": "/dʒʌst pɔɪnt jɔː ˈkæmərə æt ðɪs kjuː ɑː kɑːd ænd tæp æd ˈseljələ plæn jɔː ˈfʊli kəˈnektɪd naʊ/", "bn_pron": "জাস্ট পয়েন্ট ইউর ক্যামেরা অ্যাট দিস কিউআর কার্ড অ্যান্ড ট্যাপ অ্যাড সেলুলার প্ল্যান। ইউর ফুলি কানেক্টেড নাও!" }
        ],
        "followUps": [
            { "en": "How do I check my remaining data balance and validity?", "bn": "আমার অবশিষ্ট ডাটা ব্যালেন্স ও মেয়াদ কীভাবে চেক করব?" },
            { "en": "Can I easily top up or recharge more gigabytes through your website?", "bn": "ওয়েবসাইট থেকে কি সহজেই আরও ডাটা রিচার্জ বা টপ-আপ করা যাবে?" },
            { "en": "Does this plan permit personal mobile hotspot tethering to my laptop?", "bn": "এই প্যাকেজটি দিয়ে কি ল্যাপটপে মোবাইল হটস্পট শেয়ার করা যাবে?" }
        ],
        "closers": [
            { "en": "Thank you for the quick and painless setup! Have a great day.", "bn": "ঝামেলাহীন ও দ্রুত সিম সেটআপের জন্য ধন্যবাদ! দিনটি ভালো কাটুক।" },
            { "en": "The 5G speed is already blazing fast. Thanks a million!", "bn": "5G স্পিড ইতিমধ্যেই দারুণ ফাস্ট দেখাচ্ছে। অনেক অনেক ধন্যবাদ!" },
            { "en": "All working smoothly now. Goodbye!", "bn": "সবকিছু ঠিকঠাক কাজ করছে। বিদায়!" }
        ],
        "nativePhrases": [
            { "phrase": "Up and running", "meaning": "সম্পূর্ণ সক্রিয় হয়ে ঠিকঠাক কাজ শুরু হওয়া", "context": "ইন্টারনেট বা সিম চালু হওয়ার পর।" },
            { "phrase": "Top up", "meaning": "মোবাইলে ব্যালেন্স বা ডাটা রিচার্জ করা", "context": "ডাটা শেষ হয়ে গেলে রিচার্জের ক্ষেত্রে।" },
            { "phrase": "Drop calls", "meaning": "নেটওয়ার্কের দুর্বলতায় কল কেটে যাওয়া", "context": "নেটওয়ার্ক সমস্যা আলোচনার সময়।" }
        ]
    },

    # 17. Asking a Colleague for Work Advice
    {
        "id": "conv-17-asking-a-colleague-for-work-advice",
        "number": 17,
        "title": "Asking a Colleague for Work Advice",
        "titleBn": "সহকর্মীর কাছে কাজের টেকনিক্যাল পরামর্শ চাওয়া",
        "level": "Easy",
        "category": "Professional",
        "imageUrl": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
        "sceneDescription": "অফিসে নতুন প্রজেক্টে ডেটা কুয়েরি বা প্রেজেন্টেশন স্লাইড নিয়ে আটকে গেলে সিনিয়র সহকর্মীর কাছে সময় নিয়ে বিনয়ের সাথে পরামর্শ নেওয়া।",
        "briefing": {
            "setting": "অফিস ওয়ার্কস্টেশন (Office Collaborative Workstation)",
            "roleA": { "name": "Junior Analyst", "titleBn": "জুনিয়র অ্যানালিস্ট (Arif)", "descBn": "রিপোর্টের এসকিউএল কুয়েরি অপটিমাইজেশন নিয়ে আটকে গেছেন" },
            "roleB": { "name": "Senior Colleague", "titleBn": "সিনিয়র সহকর্মী (Tamim)", "descBn": "হাসিমুখে স্ক্রিন দেখে ইনডেক্সিং ও পরামর্শ দিচ্ছেন" },
            "overviewBn": "কর্মক্ষেত্রে সিনিয়র বা সহকর্মীর কাছে সাহায্য চাওয়ার সময় তাদের ব্যস্ততার সম্মান করা (Do you have a quick 5 minutes?), সমস্যা সুনির্দিষ্টভাবে বলা (I'm hitting a roadblock on this SQL query) অত্যন্ত জরুরি প্রফেশনাল শিষ্টাচার।",
            "politenessTips": [
                "আগে সময় আছে কি না জিজ্ঞাসা করুন: 'Hi Tamim, do you have a quick 5 minutes to spare?'",
                "সমস্যা স্পষ্ট করে বলুন: 'I've tried X, but I'm encountering Y issue.'",
                "সহযোগিতা পাওয়ার পর কৃতজ্ঞতা জানান: 'Thank you for walking me through this!'"
            ],
            "keyVocabulary": [
                { "word": "Hit a roadblock", "meaning": "কাজে বড় কোনো জটিলতায় আটকে যাওয়া", "pron": "হিট আ রোডব্লক" },
                { "word": "Pick your brain", "meaning": "কোনো অভিজ্ঞ ব্যক্তির পরামর্শ বা বুদ্ধি নেওয়া", "pron": "পিক ইউর ব্রেইন" },
                { "word": "Walk me through", "meaning": "ধাপে ধাপে হাতে-কলমে বুঝিয়ে দেওয়া", "pron": "ওয়াক মি থ্রু" },
                { "word": "Streamline", "meaning": "কাজের গতি বাড়ানো বা সহজ করা", "pron": "স্ট্রিমলাইন" }
            ]
        },
        "starters": [
            { "en": "Hi Tamim, do you happen to have five minutes to look at something with me?", "bn": "হাই তামিম ভাই, একটি বিষয় একটু দেখার জন্য আপনার কি ৫ মিনিট সময় হবে?", "tip": "সহকর্মীর কাছে সাহায্য চাওয়ার সবচেয়ে পেশাদার উপায়।" },
            { "en": "Excuse me, I'm stuck on this client report query. Could I pick your brain?", "bn": "মাফ করবেন, আমি এই ক্লায়েন্ট রিপোর্টের কুয়েরিতে আটকে গেছি। আপনার পরামর্শ নেওয়া যাবে?", "tip": "অভিজ্ঞ ব্যক্তির বুদ্ধি চাওয়ার বাক্য।" },
            { "en": "Whenever you take your next coffee break, could I ask you a quick question?", "bn": "পরবর্তী কফি ব্রেক নেওয়ার সময় আপনাকে কি একটি ছোট প্রশ্ন করতে পারি?", "tip": "ব্যস্ত সহকর্মীর অবসর সময় চাওয়ার শিষ্টাচার।" }
        ],
        "dialogue": [
            { "id": "1", "speaker": "Arif", "role": "A", "roleTitle": "Junior / জুনিয়র কর্মী", "en": "Hi Tamim, sorry to interrupt. Do you happen to have a quick five minutes?", "bn": "হাই তামিম ভাই, কাজে ব্যাঘাত ঘটানোর জন্য দুঃখিত। আপনার কি দ্রুত ৫ মিনিট সময় হবে?", "ipa": "/haɪ təˈmiːm ˈsɒri tuː ˌɪntəˈrʌpt duː juː ˈhæpən tuː hæv ə kwɪk faɪv ˈmɪnɪts/", "bn_pron": "হাই তামিম, সরি টু ইন্টারাপ্ট। ডু ইউ হ্যাপেন টু হ্যাভ আ কুইক ফাইভ মিনিটস?" },
            { "id": "2", "speaker": "Tamim", "role": "B", "roleTitle": "Senior / সিনিয়র সহকর্মী", "en": "Hey Arif! Sure, I just finished sending an email. What's on your mind?", "bn": "আরে আরিফ! অবশ্যই, এইমাত্র একটি ইমেইল পাঠানো শেষ করলাম। কী সমস্যা বলো?", "ipa": "/heɪ ˈærɪf ʃʊər aɪ dʒʌst ˈfɪnɪʃt ˈsendɪŋ ən ˈiːmeɪl wɒts ɒn jɔː maɪnd/", "bn_pron": "হেই আরিফ! শুয়ার, আই জাস্ট ফিনিশড সেন্ডিং অ্যান ইমেইল। ওয়াটস অন ইউর মাইন্ড?" },
            { "id": "3", "speaker": "Arif", "role": "A", "roleTitle": "Junior / জুনিয়র কর্মী", "en": "I'm hitting a roadblock on the monthly revenue query. It takes over two minutes to run.", "bn": "আমি মাসিক রেভিনিউ কুয়েরিটাতে আটকে গেছি। রান হতে দুই মিনিটেরও বেশি সময় নিচ্ছে।", "ipa": "/aɪm ˈhɪtɪŋ ə ˈrəʊdblɒk ɒn ðə ˈmʌnθli ˈrevənjuː ˈkwɪəri ɪt teɪks ˈəʊvə tuː ˈmɪnɪts tuː rʌn/", "bn_pron": "আইম হিটিং আ রোডব্লক অন দ্য মান্থলি রেভিনিউ কুয়েরি। ইট টেক্স ওভার টু মিনিটস টু রান।" },
            { "id": "4", "speaker": "Tamim", "role": "B", "roleTitle": "Senior / সিনিয়র সহকর্মী", "en": "Let's take a look at your screen. Ah, I see! You have a nested loop in the join condition.", "bn": "স্ক্রিনটা একটু দেখি। আহা, বুঝতে পেরেছি! জয়েন কন্ডিশনে তুমি একটি নেস্টেড লুপ ব্যবহার করেছো।", "ipa": "/lets teɪk ə lʊk æt jɔː skriːn ɑː aɪ siː juː hæv ə ˈnestɪd luːp ɪn ðə dʒɔɪn kənˈdɪʃn/", "bn_pron": "লেটস টেক আ লুক অ্যাট ইউর স্ক্রিন। আহ, আই সি! ইউ হ্যাভ আ নেস্টেড লুপ ইন দ্য জয়েন কন্ডিশন।" },
            { "id": "5", "speaker": "Arif", "role": "A", "roleTitle": "Junior / জুনিয়র কর্মী", "en": "Right! How would you recommend restructuring the query for better efficiency?", "bn": "ঠিক তাই! কাজের গতি বাড়ানোর জন্য আপনি কীভাবে কুয়েরিটি সাজাতে পরামর্শ দেবেন?", "ipa": "/raɪt haʊ wʊd juː ˌrekəˈmend ˌriːˈstrʌktʃərɪŋ ðə ˈkwɪəri fɔː ˈbetər ɪˈfɪʃnsi/", "bn_pron": "রাইট! হাউ উড ইউ রেকমেন্ড রিস্ট্রাকচারিং দ্য কুয়েরি ফর বেটার এফিসিয়েন্সি?" },
            { "id": "6", "speaker": "Tamim", "role": "B", "roleTitle": "Senior / সিনিয়র সহকর্মী", "en": "Index the date column first, and use a Common Table Expression (CTE) instead.", "bn": "প্রথমে তারিখের কলামটি ইনডেক্স করো, আর সাব-কুয়েরির বদলে একটি CTE ব্যবহার করো।", "ipa": "/ˈɪndeks ðə deɪt ˈkɒləm fɜːst ænd juːz ə ˈkɒmən ˈteɪbl ɪkˈspreʃn ɪnˈsted/", "bn_pron": "ইনডেক্স দ্য ডেইট কলাম ফার্স্ট, অ্যান্ড ইউজ আ কমন টেইবল এক্সপ্রেশন ইনস্টেড।" },
            { "id": "7", "speaker": "Arif", "role": "A", "roleTitle": "Junior / জুনিয়র কর্মী", "en": "Let me test that quickly... Wow! It returned all 50,000 rows in just three seconds!", "bn": "আমি একটু ঝটপট চালিয়ে দেখি... ওয়াও! মাত্র তিন সেকেন্ডেই পুরো ৫০,০০০ ডাটা চলে এসেছে!", "ipa": "/let miː test ðæt ˈkwɪkli waʊ ɪt rɪˈtɜːnd ɔːl ˈfɪfti ˈθaʊznd rəʊz ɪn dʒʌst θriː ˈsekəndz/", "bn_pron": "লেট মি টেস্ট দ্যাট কুইকলি... ওয়াও! ইট রিটার্নড অল ফিফটি থাউজেন্ড রোজ ইন জাস্ট থ্রি সেকেন্ডস!" },
            { "id": "8", "speaker": "Tamim", "role": "B", "roleTitle": "Senior / সিনিয়র সহকর্মী", "en": "Boom! That's the power of proper indexing and clean query architecture.", "bn": "দারুণ! প্রোপার ইনডেক্সিং এবং পরিচ্ছন্ন কুয়েরি আর্কিটেকচারের শক্তি এটাই।", "ipa": "/buːm ðæts ðə ˈpaʊər ɒv ˈprɒpər ˈɪndeksɪŋ ænd kliːn ˈkwɪəri ˈɑːkɪtektʃə/", "bn_pron": "বুম! দ্যাটস দ্য পাওয়ার অফ প্রোপার ইনডেক্সিং অ্যান্ড ক্লিন কুয়েরি আর্কিটেকচার।" },
            { "id": "9", "speaker": "Arif", "role": "A", "roleTitle": "Junior / জুনিয়র কর্মী", "en": "Tamim brother, thank you so much! You just saved my entire afternoon.", "bn": "তামিম ভাই, অনেক অনেক ধন্যবাদ! আপনি আমার পুরো বিকেলটি বাঁচিয়ে দিলেন।", "ipa": "/təˈmiːm ˈbrʌðə θæŋk juː səʊ mʌtʃ juː dʒʌst seɪvd maɪ ɪnˈtaɪər ˌɑːftəˈnuːn/", "bn_pron": "তামিম ব্রাদার, থ্যাংক ইউ সো মাচ! ইউ জাস্ট সেভড মাই এনটায়ার আফটারনুন।" },
            { "id": "10", "speaker": "Tamim", "role": "B", "roleTitle": "Senior / সিনিয়র সহকর্মী", "en": "Anytime, Arif! My door is always open if you run into tricky data issues.", "bn": "যেকোনো সময় আরিফ! জটিল কোনো সমস্যায় পড়লে নির্দ্বিধায় চলে এসো।", "ipa": "/ˈenitaɪm ˈærɪf maɪ dɔːr ɪz ˈɔːlweɪz ˈəʊpən ɪf juː rʌn ˈɪntuː ˈtrɪki ˈdeɪtə ˈɪʃuːz/", "bn_pron": "এনিটাইম, আরিফ! মাই ডোর ইজ অলওয়েজ ওপেন ইফ ইউ রান ইনটু ট্রিকি ডেইটা ইস্যুস।" }
        ],
        "followUps": [
            { "en": "Could you share the SQL documentation article you referenced?", "bn": "আপনি যে এসকিউএল ডকুমেন্টেশনের কথা বললেন সেটার লিঙ্ক কি শেয়ার করবেন?" },
            { "en": "Would you mind if I include this performance optimization in our sprint demo?", "bn": "আমাদের স্প্রিন্ট ডেমোতে এই অপটিমাইজেশনটি তুলে ধরলে কি কোনো সমস্যা আছে?" },
            { "en": "Can I grab you a fresh cup of coffee from the pantry as a thank you?", "bn": "ধন্যবাদস্বরূপ প্যান্ট্রি থেকে আপনার জন্য এক কাপ কফি বানিয়ে নিয়ে আসব?" }
        ],
        "closers": [
            { "en": "Thanks again for your guidance! Back to crunching numbers now.", "bn": "নির্দেশনার জন্য আবারও ধন্যবাদ! কাজে মনোযোগ দিচ্ছি এবার।" },
            { "en": "Really appreciate your mentorship, Tamim. Have a productive day!", "bn": "আপনার সহযোগিতার জন্য সত্যি কৃতজ্ঞ তামিম ভাই। দিনটি ফলপ্রসূ হোক!" },
            { "en": "See you at the team standup meeting. Cheers!", "bn": "টিম স্ট্যান্ডআপ মিটিংয়ে দেখা হচ্ছে। ভালো থাকবেন!" }
        ],
        "nativePhrases": [
            { "phrase": "Pick your brain", "meaning": "কোনো অভিজ্ঞ ব্যক্তির বুদ্ধি বা পরামর্শ নেওয়া", "context": "পরামর্শ চাওয়ার অত্যন্ত মার্জিত প্রফেশনাল এক্সপ্রেশন।" },
            { "phrase": "My door is always open", "meaning": "যেকোনো প্রয়োজনে সাহায্য করতে সবসময় প্রস্তুত", "context": "সিনিয়রদের সহযোগিতাপূর্ণ আশ্বাসবাণী।" },
            { "phrase": "Hit a roadblock", "meaning": "কাজে বড় কোনো বাধার মুখে পড়া", "context": "সমস্যা বর্ণনা করতে।" }
        ]
    },

    # 18. Inviting a Friend to Dinner at Home
    {
        "id": "conv-18-inviting-a-friend-to-dinner-at-home",
        "number": 18,
        "title": "Inviting a Friend to Dinner at Home",
        "titleBn": "বন্ধুকে বাসায় রাতের খাবারের দাওয়াত দেওয়া",
        "level": "Easy",
        "category": "Social",
        "imageUrl": "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80",
        "sceneDescription": "ছুটির দিনে বাসায় স্পেশাল বিরিয়ানি ও ডেজার্ট রান্না উপলক্ষে ঘনিষ্ঠ বন্ধুকে সপরিবারে নৈশভোজের আন্তরিক আমন্ত্রণ জানানোর কথোপকথন।",
        "briefing": {
            "setting": "বন্ধুত্বপূর্ণ আড্ডা বা ফোনে দাওয়াত (Friendly Invitation Call)",
            "roleA": { "name": "Host", "titleBn": "হোস্ট বন্ধু (Imran)", "descBn": "শুক্রবার রাতে বাসায় বিরিয়ানি ডিনারের দাওয়াত দিচ্ছেন" },
            "roleB": { "name": "Invited Friend", "titleBn": "আমন্ত্রিত বন্ধু (Zubair)", "descBn": "আনন্দের সাথে দাওয়াত গ্রহণ করছেন ও ডেজার্ট আনার প্রস্তাব দিচ্ছেন" },
            "overviewBn": "বাসায় ডিনারের দাওয়াত দেওয়ার সময় দিন ও সময় (This Friday around 8 PM), কী রান্না হচ্ছে (Mutton biryani and custard) এবং কোনো খাবারের অ্যালার্জি আছে কি না (Any dietary preferences) আলোচনা করা সুন্দর এটিকেট।",
            "politenessTips": [
                "দাওয়াত দিয়ে বলুন: 'We are hosting a cozy dinner at our place this Friday, and we'd love for you to join!'",
                "খাবারের সীমাবদ্ধতা জানতে চান: 'Do you or your family have any food allergies?'",
                "আমন্ত্রণ গ্রহণ করে বলুন: 'I would be delighted to come! Can I bring anything along?'"
            ],
            "keyVocabulary": [
                { "word": "Host a dinner", "meaning": "বাসায় মেহমানদের নৈশভোজের আয়োজন করা", "pron": "হোস্ট আ ডিনার" },
                { "word": "Dietary restrictions", "meaning": "খাবারের ব্যাপারে বিশেষ স্বাস্থ্যগত বিধিনিষেধ", "pron": "ডায়েটারি রেস্ট্রিকশনস" },
                { "word": "Homemade specialty", "meaning": "নিজের হাতে রান্না করা স্পেশাল খাবার", "pron": "হোমমেইড স্পেশালটি" },
                { "word": "Potluck / Bring a dessert", "meaning": "ডেজার্ট বা মিষ্টি খাবার সাথে নিয়ে আসা", "pron": "পটল্যাক / ব্রিং আ ডেজার্ট" }
            ]
        },
        "starters": [
            { "en": "Hey Zubair, what are your plans for this Friday evening?", "bn": "আরে জুবায়ের, এই শুক্রবার সন্ধ্যায় তোর কি কোনো প্ল্যান আছে?", "tip": "দাওয়াত দেওয়ার আগে শিডিউল জানার সেরা প্রশ্ন।" },
            { "en": "We're cooking a special homemade dinner this weekend and would love to have you over!", "bn": "এই উইকেন্ডে বাসায় স্পেশাল রান্না করছি, তুই আসলে দারুণ হতো!", "tip": "সরাসরি উষ্ণ আমন্ত্রণের বাক্য।" },
            { "en": "It's been too long since we sat down together for a relaxed meal. Come over this Friday!", "bn": "কতদিন একসাথে বসে খাওয়া হয় না। এই শুক্রবারে আমাদের বাসায় চলে আয়!", "tip": "বন্ধুকে জোর দিয়ে ডাকার আন্তরিক বাক্য।" }
        ],
        "dialogue": [
            { "id": "1", "speaker": "Imran", "role": "A", "roleTitle": "Host / ইমরান", "en": "Hey Zubair! Are you free this Friday evening around 7:30 PM?", "bn": "আরে জুবায়ের! এই শুক্রবার সন্ধ্যা ৭:৩০টার দিকে কি তুই ফ্রি আছিস?", "ipa": "/heɪ zuːˈbeər ɑː juː friː ðɪs ˈfraɪdeɪ ˈiːvnɪŋ əˈraʊnd ˈsevn ˈθɜːti piː em/", "bn_pron": "হেই জুবায়ের! আর ইউ ফ্রি দিস ফ্রাইডে ইভনিং অ্যারাউন্ড সেভেন থার্টি পিএম?" },
            { "id": "2", "speaker": "Zubair", "role": "B", "roleTitle": "Friend / জুবায়ের", "en": "Hey Imran! Yes, I don't have anything planned. What's cookin'?", "bn": "আরে ইমরান! হ্যাঁ, তেমন কোনো প্ল্যান নেই। কী ব্যাপার বল তো?", "ipa": "/heɪ ˈɪmrɑːn jes aɪ dəʊnt hæv ˈeniθɪŋ plænd wɒts ˈkʊkɪn/", "bn_pron": "হেই ইমরান! ইয়েস, আই ডোন্ট হ্যাভ এনিথিং প্ল্যান্ড। ওয়াটস কুকিন?" },
            { "id": "3", "speaker": "Imran", "role": "A", "roleTitle": "Host / ইমরান", "en": "My wife and I are cooking homemade Kacchi Biryani and sweet firni, and we'd love for you to join us for dinner!", "bn": "আমি আর আমার স্ত্রী বাসায় খাঁটি কাচ্চি বিরিয়ানি আর ফিরনি রান্না করছি, তুই আমাদের সাথে ডিনারে যোগ দিলে দারুণ হতো!", "ipa": "/maɪ waɪf ænd aɪ ɑː ˈkʊkɪŋ ˈhəʊmmeɪd ˈkætʃi bɪrˈjɑːni ænd swiːt ˈfɪəni ænd wiːd lʌv fɔː juː tuː dʒɔɪn ʌs fɔː ˈdɪnə/", "bn_pron": "মাই ওয়াইফ অ্যান্ড আই আর কুকিং হোমমেইড কাচ্চি বিরিয়ানি অ্যান্ড সুইট ফিরনি, অ্যান্ড উইড লাভ ফর ইউ টু জয়েন আস ফর ডিনার!" },
            { "id": "4", "speaker": "Zubair", "role": "B", "roleTitle": "Friend / জুবায়ের", "en": "Count me in 100%! Nobody can say no to your homemade biryani.", "bn": "১০০% আসছি আমি! তোর হাতের কাচ্চি বিরিয়ানি কেউ কখনোই মিস করে না।", "ipa": "/kaʊnt miː ɪn wʌn ˈhʌndrəd pəˈsent ˈnəʊbədi kæn seɪ nəʊ tuː jɔː ˈhəʊmmeɪd bɪrˈjɑːni/", "bn_pron": "কাউন্ট মি ইন ওয়ান হান্ড্রেড পার্সেন্ট! নোবডি ক্যান সেই নো টু ইউর হোমমেইড বিরিয়ানি।" },
            { "id": "5", "speaker": "Imran", "role": "A", "roleTitle": "Host / ইমরান", "en": "Haha wonderful! By the way, do you have any food allergies or spice preferences?", "bn": "হাহা অসাধারণ! ভালো কথা, তোর কি কোনো খাবারে অ্যালার্জি বা ঝালের বিশেষ কোনো পছন্দ আছে?", "ipa": "/ˈhɑːhɑː ˈwʌndəfl baɪ ðə weɪ duː juː hæv ˈeni fuːd ˈælədʒiz ɔː spaɪs ˈprefərənsɪz/", "bn_pron": "হাহা ওয়ান্ডারফুল! বাই দ্য ওয়ে, ডু ইউ হ্যাভ এনি ফুড অ্যালার্জিস অর স্পাইস প্রেফারেন্সেস?" },
            { "id": "6", "speaker": "Zubair", "role": "B", "roleTitle": "Friend / জুবায়ের", "en": "No dietary restrictions at all! I love authentic spicy traditional flavours.", "bn": "কোনো খাবারের বাধা নেই রে! আমি একদম খাঁটি ঐতিহ্যবাহী ঝাল ঝাল খাবার দারুণ ভালোবাসি।", "ipa": "/nəʊ ˈdaɪətəri rɪˈstrɪkʃnz æt ɔːl aɪ lʌv ɔːˈθentɪk ˈspaɪsi trəˈdɪʃənl ˈfleɪvəz/", "bn_pron": "নো ডায়েটারি রেস্ট্রিকশনস অ্যাট অল! আই লাভ অথেন্টিক স্পাইসি ট্র্যাডিশনাল ফ্লেভার্স।" },
            { "id": "7", "speaker": "Imran", "role": "A", "roleTitle": "Host / ইমরান", "en": "Perfect. A couple of our other close university buddies are coming as well.", "bn": "পারফেক্ট। ভার্সিটি লাইফের আমাদের আরও দুই-একজন ঘনিষ্ঠ বন্ধুও কিন্তু আসছে।", "ipa": "/ˈpɜːfɪkt ə ˈkʌpl ɒv ˈaʊər ˈʌðə kləʊs ˌjuːnɪˈvɜːsəti ˈbʌdiz ɑː ˈkʌmɪŋ æz wel/", "bn_pron": "পারফেক্ট। আ কাপল অফ আওয়ার আদার ক্লোজ ইউনিভার্সিটি বাডিজ আর কামিং অ্যাজ ওয়েল।" },
            { "id": "8", "speaker": "Zubair", "role": "B", "roleTitle": "Friend / জুবায়ের", "en": "That is going to be such a fun reunion! What can I bring along? Dessert, drinks, or fruit?", "bn": "দারুণ একটা রিইউনিয়ন হবে তাহলে! আমি সাথে কী নিয়ে আসব বল? মিষ্টি, কোল্ড ড্রিঙ্কস নাকি ফল?", "ipa": "/ðæt ɪz ˈɡəʊɪŋ tuː biː sʌtʃ ə fʌn ˌriːˈjuːniən wɒt kæn aɪ brɪŋ əˈlɒŋ dɪˈzɜːt drɪŋks ɔː fruːt/", "bn_pron": "দ্যাট ইজ গোয়িং টু বি সাচ আ ফান রিইউনিয়ন! ওয়াট ক্যান আই ব্রিং অ্যালং? ডেজার্ট, ড্রিঙ্কস, অর ফ্রুট?" },
            { "id": "9", "speaker": "Imran", "role": "A", "roleTitle": "Host / ইমরান", "en": "Just bring your appetite and yourself! But if you insist, some ice cream would pair great with the firni.", "bn": "শুধু তুই চলে আয় আর তোর পেট নিয়ে আয়! তবে আনতে চাইলে ফিরনির সাথে একটু আইসক্রিম আনতে পারিস।", "ipa": "/dʒʌst brɪŋ jɔːr ˈæpɪtaɪt ænd jɔːˈself bʌt ɪf juː ɪnˈsɪst sʌm ˈaɪs kriːm wʊd peə ɡreɪt wɪð ðə ˈfɪəni/", "bn_pron": "জাস্ট ব্রিং ইউর অ্যাপেটাইট অ্যান্ড ইউরসেলফ! বাট ইফ ইউ ইনসিস্ট, সাম আইসক্রিম উড পেয়ার গ্রেট।" },
            { "id": "10", "speaker": "Zubair", "role": "B", "roleTitle": "Friend / জুবায়ের", "en": "Deal! I will pick up premium vanilla ice cream on my way. See you Friday at 7:30!", "bn": "ডান! আসার পথে প্রিমিয়াম ভ্যানিলা আইসক্রিম কিনে নিয়ে আসব। দেখা হচ্ছে শুক্রবার সন্ধ্যা ৭:৩০টায়!", "ipa": "/diːl aɪ wɪl pɪk ʌp ˈpriːmiəm vəˈnɪlə ˈaɪs kriːm ɒn maɪ weɪ siː juː ˈfraɪdeɪ æt ˈsevn ˈθɜːti/", "bn_pron": "ডিল! আই উইল পিক আপ প্রিমিয়াম ভ্যানিলা আইসক্রিম অন মাই ওয়ে। সি ইউ ফ্রাইডে অ্যাট সেভেন থার্টি!" }
        ],
        "followUps": [
            { "en": "Send me your apartment building location on Google Maps, please.", "bn": "তোর বাসার বিল্ডিংয়ের গুগল ম্যাপ লোকেশনটা একটু পাঠিয়ে দিস।" },
            { "en": "Is visitor parking available inside your apartment premises?", "bn": "তোদের অ্যাপার্টমেন্ট ভবনে কি মেহমানদের গাড়ি পার্কিংয়ের ব্যবস্থা আছে?" },
            { "en": "Shall we bring any board games like Scrabble or Catan for after dinner?", "bn": "খাওয়ার পর খেলার জন্য কি কোনো বোর্ড গেম সাথে করে নিয়ে আসব?" }
        ],
        "closers": [
            { "en": "Already looking forward to Friday night! Take care.", "bn": "শুক্রবার রাতের আড্ডার জন্য মুখিয়ে রইলাম! ভালো থাকিস।" },
            { "en": "Give my best regards to bhabi. See you both Friday!", "bn": "ভাবীকে আমার সালাম দিস। শুক্রবারে দেখা হচ্ছে তোদের সাথে!" },
            { "en": "Thanks for hosting us Imran, see you soon!", "bn": "দাওয়াত দেওয়ার জন্য ধন্যবাদ ইমরান, দ্রুতই দেখা হচ্ছে!" }
        ],
        "nativePhrases": [
            { "phrase": "Count me in", "meaning": "আমাকে অবশ্যই হিসেবে রাখো (আমি আসছি)", "context": "যেকোনো আমন্ত্রণ সানন্দে গ্রহণের ক্ষেত্রে।" },
            { "phrase": "Bring your appetite", "meaning": "খালি পেটে পেট ভরে খাওয়ার প্রস্তুতি নিয়ে আসা", "context": "হোস্টের আন্তরিক অনুরোধে।" },
            { "phrase": "My treat", "meaning": "আমার পক্ষ থেকে মেহমানদারি", "context": "খাবার খাওয়ানোর সময়।" }
        ]
    },

    # 19. Renting an Apartment / House Viewing
    {
        "id": "conv-19-renting-an-apartment-house-viewing",
        "number": 19,
        "title": "Renting an Apartment / House Viewing",
        "titleBn": "ভাড়ার জন্য ফ্ল্যাট দেখতে যাওয়া ও চুক্তি জানা",
        "level": "Easy",
        "category": "Daily Life",
        "imageUrl": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
        "sceneDescription": "ভাড়ার জন্য নতুন অ্যাপার্টমেন্ট দেখতে গিয়ে রুমের সাইজ, বারান্দা, ইউটিলিটি বিল, সিকিউরিটি ডিপোজিট এবং রেন্ট এগ্রিমেন্ট নিয়ে কথা বলা।",
        "briefing": {
            "setting": "নতুন অ্যাপার্টমেন্টের ড্রয়িংরুম (Apartment Viewing)",
            "roleA": { "name": "Tenant", "titleBn": "সম্ভাব্য ভাড়াটিয়া (Prospective Tenant)", "descBn": "২ বেডরুমের ফ্ল্যাটের আলো-বাতাস ও ভাড়া যাচাই করছেন" },
            "roleB": { "name": "Landlord / Agent", "titleBn": "বাড়িওয়ালা বা প্রপার্টি এজেন্ট", "descBn": "ফ্ল্যাট ঘুরিয়ে দেখাচ্ছেন ও চুক্তির শর্ত জানাচ্ছেন" },
            "overviewBn": "ফ্ল্যাট দেখার সময় মাসিক ভাড়া (Monthly rent), অ্যাডভান্স বা সিকিউরিটি ডিপোজিট (Security deposit), ইউটিলিটি বিল অন্তর্ভুক্ত কি না (Are utilities included?), এবং নোটিশ পিরিয়ড (Notice period) পরিষ্কারভাবে বোঝা দরকার।",
            "politenessTips": [
                "ঢোকার পর বলুন: 'Thank you for taking the time to show me around the apartment.'",
                "বিল সম্পর্কে জিজ্ঞাসা করুন: 'Does the rent cover water, gas, and service charges?'",
                "চুক্তির মেয়াদ জানতে চান: 'What is the standard lease term, and how much is the security deposit?'"
            ],
            "keyVocabulary": [
                { "word": "Lease agreement", "meaning": "বাড়ি ভাড়ার আনুষ্ঠানিক চুক্তিপত্র", "pron": "লিজ এগ্রিমেন্ট" },
                { "word": "Security deposit", "meaning": "জামানত বা অগ্রিম নিরাপত্তা জামিন", "pron": "সিকিউরিটি ডিপোজিট" },
                { "word": "Utilities", "meaning": "বিদ্যুৎ, গ্যাস, পানি ও পরিচ্ছন্নতা বিল", "pron": "ইউটিলিটিস" },
                { "word": "Natural sunlight", "meaning": "প্রাকৃতিক আলো-বাতাস", "pron": "ন্যাচারাল সানলাইট" }
            ]
        },
        "starters": [
            { "en": "Hello, thank you for meeting me today to view this two-bedroom apartment.", "bn": "হ্যালো, এই দুই রুমের অ্যাপার্টমেন্টটি দেখানোর জন্য দেখা করায় ধন্যবাদ।", "tip": "ফ্ল্যাট দেখার ভদ্র সূচনা।" },
            { "en": "Hi, I saw your rental listing on the property website. Is the unit still available?", "bn": "হাই, রিয়েল এস্টেট সাইটে আপনার ফ্ল্যাটের বিজ্ঞাপনটি দেখেছি। এটি কি এখনো ভাড়ার জন্য খালি?", "tip": "বিজ্ঞাপন নিয়ে প্রশ্ন করার বাক্য।" },
            { "en": "Could you walk me through the apartment layout and building amenities?", "bn": "ফ্ল্যাটের নকশা ও ভবনের সুযোগ-সুবিধাগুলো কি একটু ঘুরিয়ে দেখাবেন?", "tip": "পুরো বাসা দেখার অনুরোধ।" }
        ],
        "dialogue": [
            { "id": "1", "speaker": "Tenant", "role": "A", "roleTitle": "Tenant / ভাড়াটিয়া", "en": "Good afternoon Mr. Kamal! Thank you for showing me this two-bedroom flat.", "bn": "শুভ অপরাহ্ন কামাল সাহেব! এই দুই বেডরুমের ফ্ল্যাটটি ঘুরিয়ে দেখানোর জন্য ধন্যবাদ।", "ipa": "/ɡʊd ˌɑːftəˈnuːn ˈmɪstə kəˈmɑːl θæŋk juː fɔː ˈʃəʊɪŋ miː ðɪs tuː ˈbedruːm flæt/", "bn_pron": "গুড আফটারনুন মিস্টার কামাল! থ্যাংক ইউ ফর শোয়িং মি দিস টু বেডরুম ফ্ল্যাট।" },
            { "id": "2", "speaker": "Landlord", "role": "B", "roleTitle": "Landlord / বাড়িওয়ালা", "en": "Good afternoon! Welcome. As you can see, the living room receives plenty of natural sunlight.", "bn": "শুভ অপরাহ্ন! স্বাগতম। দেখতেই পাচ্ছেন, ড্রয়িংরুমে প্রচুর প্রাকৃতিক আলো ও বাতাস আসে।", "ipa": "/ɡʊd ˌɑːftəˈnuːn ˈwelkəm æz juː kæn siː ðə ˈlɪvɪŋ ruːm rɪˈsiːvz ˈplenti ɒv ˈnætʃrəl ˈsʌnlaɪt/", "bn_pron": "গুড আফটারনুন! ওয়েলকাম। অ্যাজ ইউ ক্যান সি, দ্য লিভিং রুম রিসিভস প্লেন্টি অফ ন্যাচারাল সানলাইট।" },
            { "id": "3", "speaker": "Tenant", "role": "A", "roleTitle": "Tenant / ভাড়াটিয়া", "en": "The balcony view is lovely! What is the exact square footage of this apartment?", "bn": "বারান্দার ভিউটা চমৎকার! এই অ্যাপার্টমেন্টটির মোট আয়তন কত স্কয়ার ফিট?", "ipa": "/ðə ˈbælkəni vjuː ˈlʌvli wɒt ɪz ðə ɪɡˈzækt skweə ˈfʊtɪdʒ ɒv ðɪs əˈpɑːtmənt/", "bn_pron": "দ্য ব্যালকনি ভিউ ইজ লাভলি! ওয়াট ইজ দ্য এক্স্যাক্ট স্কয়ার ফুটিজ অফ দিস অ্যাপার্টমেন্ট?" },
            { "id": "4", "speaker": "Landlord", "role": "B", "roleTitle": "Landlord / বাড়িওয়ালা", "en": "It is 1,250 square feet with two master bedrooms, two attached bathrooms, and a modern kitchen.", "bn": "এটি ১,২৫০ স্কয়ার ফিট, যাতে দুইটি মাস্টার বেডরুম, দুইটি অ্যাটাচড বাথরুম ও আধুনিক কিচেন রয়েছে।", "ipa": "/ɪt ɪz wʌn ˈθaʊznd tuː ˈhʌndrəd ˈfɪfti skweə fiːt wɪð tuː ˈmɑːstə ˈbedruːmz/", "bn_pron": "ইট ইজ ওয়ান থাউজেন্ড টু হান্ড্রেড ফিফটি স্কয়ার ফিট উইথ টু মাস্টার বেডরুমস।" },
            { "id": "5", "speaker": "Tenant", "role": "A", "roleTitle": "Tenant / ভাড়াটিয়া", "en": "The layout is very practical. What is the monthly rent, and what does it include?", "bn": "নকশাটি খুবই ব্যবহারিক ও সুন্দর। মাসিক ভাড়া কত, এবং এর মধ্যে কী কী অন্তর্ভুক্ত?", "ipa": "/ðə ˈleɪaʊt ɪz ˈveri ˈpræktɪkl wɒt ɪz ðə ˈmʌnθli rent ænd wɒt dʌz ɪt ɪnˈkluːd/", "bn_pron": "দ্য লেআউট ইজ ভেরি প্র্যাকটিক্যাল। ওয়াট ইজ দ্য মান্থলি রেন্ট, অ্যান্ড ওয়াট ডাজ ইট ইনক্লুড?" },
            { "id": "6", "speaker": "Landlord", "role": "B", "roleTitle": "Landlord / বাড়িওয়ালা", "en": "The monthly rent is 25,000 Taka. Water and building security are covered in the building maintenance fee.", "bn": "মাসিক ভাড়া ২৫,০০০ টাকা। পানি ও ভবনের সার্বক্ষণিক নিরাপত্তার খরচ সার্ভিস চার্জের মধ্যে অন্তর্ভুক্ত।", "ipa": "/ðə ˈmʌnθli rent ɪz ˈtwenti faɪv ˈθaʊznd ˈtɑːkə ˈwɔːtər ænd ˈbɪldɪŋ sɪˈkjʊərəti ɑː ˈkʌvəd/", "bn_pron": "দ্য মান্থলি রেন্ট ইজ টোয়েন্টি ফাইভ থাউজেন্ড টাকা। ওয়াটার অ্যান্ড বিল্ডিং সিকিউরিটি আর কাভার্ড।" },
            { "id": "7", "speaker": "Tenant", "role": "A", "roleTitle": "Tenant / ভাড়াটিয়া", "en": "Are gas and electricity bills billed on individual prepaid meters?", "bn": "গ্যাস ও বিদ্যুতের বিল কি আলাদা প্রিপেইড মিটারের মাধ্যমে আসবে?", "ipa": "/ɑː ɡæs ænd ɪlekˈtrɪsəti bɪlz bɪld ɒn ˌɪndɪˈvɪdʒuəl ˌpriːˈpeɪd ˈmiːtəz/", "bn_pron": "আর গ্যাস অ্যান্ড ইলেকট্রিসিটি বিলস বিল্ড অন ইন্ডিভিজুয়াল প্রিপেইড মিটার্স?" },
            { "id": "8", "speaker": "Landlord", "role": "B", "roleTitle": "Landlord / বাড়িওয়ালা", "en": "Yes, both have dedicated smart prepaid digital meters so you only pay for what you consume.", "bn": "হ্যাঁ, দুটোরই আলাদা স্মার্ট প্রিপেইড মিটার আছে, তাই যা খরচ করবেন কেবল তারই বিল দেবেন।", "ipa": "/jes bəʊθ hæv ˈdedɪkeɪtɪd smɑːt ˌpriːˈpeɪd ˈdɪdʒɪtl ˈmiːtəz səʊ juː ˈəʊnli peɪ fɔː wɒt juː kənˈsjuːm/", "bn_pron": "ইয়েস, বোথ হ্যাভ ডেডিকেটেড স্মার্ট প্রিপেইড ডিজিটাল মিটার্স।" },
            { "id": "9", "speaker": "Tenant", "role": "A", "roleTitle": "Tenant / ভাড়াটিয়া", "en": "How much security deposit do you require upfront, and what is the notice period?", "bn": "শুরুতে কত মাসের সিকিউরিটি ডিপোজিট জমা দিতে হবে, এবং বাসা ছাড়ার নোটিশ পিরিয়ড কতদিনের?", "ipa": "/haʊ mʌtʃ sɪˈkjʊərəti dɪˈpɒzɪt duː juː rɪˈkwaɪər ʌpˈfrʌnt ænd wɒt ɪz ðə ˈnəʊtɪs ˈpɪəriəd/", "bn_pron": "হাউ মাচ সিকিউরিটি ডিপোজিট ডু ইউ রিকোয়ার আপফ্রন্ট, অ্যান্ড ওয়াট ইজ দ্য নোটিস পিরিয়ড?" },
            { "id": "10", "speaker": "Landlord", "role": "B", "roleTitle": "Landlord / বাড়িওয়ালা", "en": "Two months' rent as security deposit, and a standard two-month advance notice period. The flat is ready for immediate move-in!", "bn": "দুই মাসের ভাড়া সিকিউরিটি ডিপোজিট হিসেবে, আর দুই মাসের অগ্রিম নোটিশ পিরিয়ড। ফ্ল্যাটে এখনই ওঠার মতো প্রস্তুত!", "ipa": "/tuː mʌnθs rent æz sɪˈkjʊərəti dɪˈpɒzɪt ænd ə ˈstændəd tuː mʌnθ ədˈvɑːns ˈnəʊtɪs ˈpɪəriəd/", "bn_pron": "টু মান্থস রেন্ট অ্যাজ সিকিউরিটি ডিপোজিট, অ্যান্ড আ স্ট্যান্ডার্ড টু মান্থ অ্যাডভান্স নোটিস পিরিয়ড।" }
        ],
        "followUps": [
            { "en": "Is a dedicated parking slot included with this unit?", "bn": "এই ফ্ল্যাটের সাথে কি নির্দিষ্ট কোনো গাড়ি পার্কিং সুবিধা বরাদ্দ আছে?" },
            { "en": "Are pets permitted in this residential building?", "bn": "এই আবাসিক ভবনে কি পোষা প্রাণী রাখার অনুমতি আছে?" },
            { "en": "Could you provide a drafted copy of the rental lease contract for review?", "bn": "পড়ার জন্য কি ভাড়ার চুক্তিনামার একটি খসড়া কপি দেওয়া যাবে?" }
        ],
        "closers": [
            { "en": "I really like the apartment! I'll discuss it with my family and confirm tomorrow.", "bn": "ফ্ল্যাটটি আমার খুব পছন্দ হয়েছে! পরিবারের সাথে কথা বলে কাল নিশ্চিত করছি।" },
            { "en": "Thank you for answering all my questions so patiently Mr. Kamal.", "bn": "ধৈর্য ধরে সব প্রশ্নের উত্তর বুঝিয়ে দেওয়ার জন্য ধন্যবাদ কামাল সাহেব।" },
            { "en": "I will get in touch soon with my decision. Have a great day!", "bn": "আমার সিদ্ধান্ত দ্রুতই ফোন করে জানাব। দিনটি ভালো কাটুক!" }
        ],
        "nativePhrases": [
            { "phrase": "Move-in ready", "meaning": "নতুন রঙ ও মেরামত শেষ হয়ে সাথে সাথেই বসবাসের উপযুক্ত", "context": "বাসার প্রস্তুতি বোঝাতে।" },
            { "phrase": "Upfront", "meaning": "শুরুতেই অগ্রিম পরিশোধ করতে হবে এমন", "context": "সিকিউরিটি ডিপোজিটের শর্তে।" },
            { "phrase": "Seal the deal", "meaning": "চূড়ান্ত চুক্তিতে সম্মত হয়ে স্বাক্ষর করা", "context": "ফ্ল্যাট পছন্দ হওয়ার পর চুক্তি করতে।" }
        ]
    },

    # 20. Returning a Defective Item at a Store
    {
        "id": "conv-20-returning-a-defective-item-at-a-store",
        "number": 20,
        "title": "Returning a Defective Item at a Store",
        "titleBn": "দোকানে নষ্ট পণ্য বদলে নেওয়া বা রিফান্ড চাওয়া",
        "level": "Easy",
        "category": "Shopping",
        "imageUrl": "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=800&q=80",
        "sceneDescription": "ইলেকট্রনিক্স দোকান থেকে কেনা ব্লুটুথ হেডফোন নষ্ট পাওয়ায় মানি রিসিট ও অরিজিনাল বক্সসহ গিয়ে বদল বা টাকা ফেরতের দাবি জানানোর দৃশ্যপট।",
        "briefing": {
            "setting": "দোকানের কাস্টমার সার্ভিস ডেস্ক (Customer Service Return Desk)",
            "roleA": { "name": "Customer", "titleBn": "ক্রেতা (Customer)", "descBn": "গতকাল কেনা হেডফোনের বাম পাশ কাজ না করায় এসেছেন" },
            "roleB": { "name": "Service Desk", "titleBn": "কাস্টমার সার্ভিস কর্মী (Staff)", "descBn": "রিসিট যাচাই করে ডিভাইস টেস্ট করে নতুন বক্স বদলে দিচ্ছেন" },
            "overviewBn": "কোনো ত্রুটিযুক্ত পণ্য ফেরত দিতে গেলে শান্তভাবে সমস্যা বুঝিয়ে বলা (The left earbud is completely silent), রিসিট দেখানো (Here is my original purchase receipt) এবং এক্সচেঞ্জ বা রিফান্ড চাওয়া খুব দরকারি।",
            "politenessTips": [
                "শান্ত কিন্তু দৃঢ়ভাবে বলুন: 'I bought this yesterday, but unfortunately it seems to be defective.'",
                "রিসিট দেখিয়ে বলুন: 'I have the original purchase receipt and packaging.'",
                "সমাধান চাইতে বলুন: 'I would prefer a direct replacement or a store refund, please.'"
            ],
            "keyVocabulary": [
                { "word": "Defective / Faulty", "meaning": "ত্রুটিপূর্ণ বা নষ্ট পণ্য", "pron": "ডিফেক্টিভ / ফল্টি" },
                { "word": "Replacement", "meaning": "নষ্টটির বদলে সম্পূর্ণ নতুন পণ্য প্রদান", "pron": "রিপ্লেসমেন্ট" },
                { "word": "Store refund", "meaning": "টাকা ফেরত প্রদান", "pron": "স্টোর রিফান্ড" },
                { "word": "Original packaging", "meaning": "পণ্যটির আসল মোড়ক বা বাক্স", "pron": "অরিজিনাল প্যাকেজিং" }
            ]
        },
        "starters": [
            { "en": "Hello, I'd like to return or exchange an item I bought yesterday.", "bn": "হ্যালো, গতকাল কেনা একটি জিনিস আমি ফেরত বা পরিবর্তন করতে চাই।", "tip": "রিটার্ন ডেস্কে কথা শুরুর ভদ্র উপায়।" },
            { "en": "Excuse me, I seem to have received a defective product in my purchase.", "bn": "মাফ করবেন, মনে হচ্ছে আমি একটি ত্রুটিযুক্ত পণ্য পেয়েছি।", "tip": "নষ্ট পণ্যের কথা জানানোর বাক্য।" },
            { "en": "Hi, who should I speak with regarding warranty replacement for electronics?", "bn": "হাই, ওয়ারেন্টির আওতায় পণ্য বদলের জন্য কার সাথে কথা বলতে হবে?", "tip": "সঠিক কর্মী খোঁজার বাক্য।" }
        ],
        "dialogue": [
            { "id": "1", "speaker": "Customer", "role": "A", "roleTitle": "Customer / ক্রেতা", "en": "Good morning! I bought these wireless headphones here yesterday, but they appear to be defective.", "bn": "শুভ সকাল! আমি গতকাল এখান থেকে এই ওয়্যারলেস হেডফোন কিনেছিলাম, তবে এটি ত্রুটিপূর্ণ বলে মনে হচ্ছে।", "ipa": "/ɡʊd ˈmɔːnɪŋ aɪ bɔːt ðiːz ˈwaɪələs ˈhedfəʊnz hɪə ˈjestədeɪ bʌt ðeɪ əˈpɪə tuː biː dɪˈfektɪv/", "bn_pron": "গুড মর্নিং! আই বট দিজ ওয়্যারলেস হেডফোনস হিয়ার ইয়েস্টারডে, বাট দেই অ্যাপিয়ার টু বি ডিফেক্টিভ।" },
            { "id": "2", "speaker": "Staff", "role": "B", "roleTitle": "Staff / কর্মী", "en": "Good morning! I'm sorry to hear that. Could you describe what issue you're encountering?", "bn": "শুভ সকাল! শুনে খারাপ লাগল। ঠিক কী সমস্যা হচ্ছে একটু বুঝিয়ে বলবেন কি?", "ipa": "/ɡʊd ˈmɔːnɪŋ aɪm ˈsɒri tuː hɪə ðæt kʊd juː dɪˈskraɪb wɒt ˈɪʃuː jɔːr ɪnˈkaʊntərɪŋ/", "bn_pron": "গুড মর্নিং! আইম সরি টু হিয়ার দ্যাট। কুড ইউ ডেসক্রাইব ওয়াট ইস্যু ইউর এনকাউন্টারিঙ?" },
            { "id": "3", "speaker": "Customer", "role": "A", "roleTitle": "Customer / ক্রেতা", "en": "The left earbud doesn't charge or connect at all, even after charging it overnight.", "bn": "বাম পাশের ইয়ারবাডটি সারারাত চার্জ দেওয়ার পরেও কোনো চার্জ নিচ্ছে না বা কানেক্ট হচ্ছে না।", "ipa": "/ðə left ˈɪəbʌd dʌznt tʃɑːdʒ ɔː kəˈnekt æt ɔːl ˈiːvn ˈɑːftə ˈtʃɑːdʒɪŋ ɪt ˌəʊvəˈnaɪt/", "bn_pron": "দ্য লেফট ইয়ারবাড ডাজন্ট চার্জ অর কানেক্ট অ্যাট অল, ইভেন আফটার চার্জিং ইট ওভারনাইট।" },
            { "id": "4", "speaker": "Staff", "role": "B", "roleTitle": "Staff / কর্মী", "en": "I see. Do you have the original purchase receipt and the product box with you?", "bn": "বুঝতে পেরেছি। সাথে কি আপনার কেনাকাটার আসল রিসিট এবং পণ্যের বাক্সটি আছে?", "ipa": "/aɪ siː duː juː hæv ðə əˈrɪdʒənl ˈpɜːtʃəs rɪˈsiːt ænd ðə ˈprɒdʌkt bɒks wɪð juː/", "bn_pron": "আই সি। ডু ইউ হ্যাভ দ্য অরিজিনাল পারচেস রিসিট অ্যান্ড দ্য প্রোডাক্ট বক্স উইথ ইউ?" },
            { "id": "5", "speaker": "Customer", "role": "A", "roleTitle": "Customer / ক্রেতা", "en": "Yes, I brought the original receipt, user manual, and full packaging intact.", "bn": "হ্যাঁ, আমি আসল রিসিট, ইউজার ম্যানুয়াল এবং সম্পূর্ণ বাক্স অক্ষত অবস্থায় নিয়ে এসেছি।", "ipa": "/jes aɪ brɔːt ðə əˈrɪdʒənl rɪˈsiːt ˈjuːzə ˈmænjuəl ænd fʊl ˈpækɪdʒɪŋ ɪnˈtækt/", "bn_pron": "ইয়েস, আই ব্রট দ্য অরিজিনাল রিসিট, ইউজার ম্যানুয়াল অ্যান্ড ফুল প্যাকেজিং ইনট্যাক্ট।" },
            { "id": "6", "speaker": "Staff", "role": "B", "roleTitle": "Staff / কর্মী", "en": "Let me plug it into our test bench to verify... Yes, you're right, the left pin has a loose contact.", "bn": "আমি একটু আমাদের টেস্ট বেঞ্চে প্লাগ করে পরীক্ষা করি... হ্যাঁ, আপনি একদম ঠিক বলেছেন, বাম পিনে লুজ কানেকশন আছে।", "ipa": "/let miː plʌɡ ɪt ˈɪntuː ˈaʊə test bentʃ tuː ˈverɪfaɪ jes jɔː raɪt ðə left pɪn hæz ə luːs ˈkɒntækt/", "bn_pron": "লেট মি প্লাগ ইট ইনটু আওয়ার টেস্ট বেঞ্চ টু ভেরিফাই... ইয়েস, ইউর রাইট, দ্য লেফট পিন হ্যাজ আ লুজ কন্ট্যাক্ট।" },
            { "id": "7", "speaker": "Customer", "role": "A", "roleTitle": "Customer / ক্রেতা", "en": "Would it be possible to get an immediate replacement unit?", "bn": "আমাকে কি সাথে সাথে একটি নতুন ইনট্যাক্ট পিস বদলে দেওয়া সম্ভব হবে?", "ipa": "/wʊd ɪt biː ˈpɒsəbl tuː ɡet ən ɪˈmiːdiət rɪˈpleɪsmənt ˈjuːnɪt/", "bn_pron": "উড ইট বি পসিবল টু গেট অ্যান ইমিডিয়েট রিপ্লেসমেন্ট ইউনিট?" },
            { "id": "8", "speaker": "Staff", "role": "B", "roleTitle": "Staff / কর্মী", "en": "Absolutely! Since you purchased it within our 7-day return window, we exchange it instantly on the spot.", "bn": "অবশ্যই! যেহেতু আপনি আমাদের ৭ দিনের রিটার্ন পলিসির মধ্যেই এসেছেন, আমরা সরাসরি কাউন্টারেই নতুন পিস বদলে দিচ্ছি।", "ipa": "/ˌæbsəˈluːtli sɪns juː ˈpɜːtʃəst ɪt wɪˈðɪn ˈaʊə ˈsevn deɪ rɪˈtɜːn ˈwɪndəʊ wiː ɪksˈtʃeɪndʒ ɪt ˈɪnstəntli/", "bn_pron": "অ্যাবসলিউটলি! সিন্স ইউ পারচেসড ইট উইদিন আওয়ার সেভেন ডেই রিটার্ন উইন্ডো, উই এক্সচেঞ্জ ইট অন দ্য স্পট।" },
            { "id": "9", "speaker": "Customer", "role": "A", "roleTitle": "Customer / ক্রেতা", "en": "Can we quickly test the new one right here before I head out?", "bn": "আমি চলে যাওয়ার আগে কি নতুনটি এখানেই একবার টেস্ট করে নেওয়া যাবে?", "ipa": "/kæn wiː ˈkwɪkli test ðə njuː wʌn raɪt hɪə bɪˈfɔːr aɪ hed aʊt/", "bn_pron": "ক্যান উই কুইকলি টেস্ট দ্য নিউ ওয়ান রাইট হিয়ার বিফোর আই হেড আউট?" },
            { "id": "10", "speaker": "Staff", "role": "B", "roleTitle": "Staff / কর্মী", "en": "By all means! Let's unseal it together. Audio is crisp in both ears! Here is your updated warranty card.", "bn": "অবশ্যই! চলুন একসাথে সিল খুলি। দুটো কানেই নিখুঁত সাউন্ড আসছে! এই যে আপনার নতুন ওয়ারেন্টি কার্ড।", "ipa": "/baɪ ɔːl miːnz lets ʌnˈsiːl ɪt təˈɡeðə ˈɔːdiəʊ ɪz krɪsp ɪn bəʊθ ɪəz hɪər ɪz jɔːr ʌpˈdeɪtɪd ˈwɒrənti kɑːd/", "bn_pron": "বাই অল মিনস! লেটস আনসিল ইট টুগেদার। অডিও ইজ ক্রিস্প ইন বোথ ইয়ার্স! হিয়ার ইয ইউর আপডেটেড ওয়ারেন্টি কার্ড।" }
        ],
        "followUps": [
            { "en": "How many months of manufacturer warranty remain on this new replacement?", "bn": "এই নতুন ইউনিটটির ওপর প্রস্তুতকারকের কত মাসের ওয়ারেন্টি বাকি থাকবে?" },
            { "en": "If I ever face another issue, do I bring it back to this same store?", "bn": "পরে আবার কোনো সমস্যা হলে কি আমি এই একই দোকানেই নিয়ে আসব?" },
            { "en": "Could I get a copy of the exchange confirmation receipt?", "bn": "পণ্য পরিবর্তনের কনফার্মেশন রিসিটের একটি কপি কি পাওয়া যাবে?" }
        ],
        "closers": [
            { "en": "Thank you for the hassle-free resolution! Much appreciated.", "bn": "ঝামেলাহীনভাবে সমাধান করে দেওয়ার জন্য অনেক ধন্যবাদ! খুব ভালো লাগল।" },
            { "en": "You have wonderful customer service here. Have a great day!", "bn": "আপনাদের কাস্টমার সার্ভিস সত্যিই দারুণ। দিনটি ভালো কাটুক!" },
            { "en": "All tested and working great now. Goodbye!", "bn": "টেস্ট করা শেষ, এখন চমৎকার কাজ করছে। বিদায়!" }
        ],
        "nativePhrases": [
            { "phrase": "Hassle-free", "meaning": "ঝামেলা বা পেরেশানি ছাড়া অনায়াসে", "context": "সহজ গ্রাহকসেবার প্রশংসা করতে।" },
            { "phrase": "On the spot", "meaning": "কালবিলম্ব না করে সাথে সাথে ঘটনাস্থলেই", "context": "তাত্ক্ষণিক পরিবর্তনের ক্ষেত্রে।" },
            { "phrase": "Wear and tear", "meaning": "দীর্ঘদিন ব্যবহারের কারণে স্বাভাবিক ক্ষয়", "context": "ওয়ারেন্টির শর্ত আলোচনায়।" }
        ]
    }
]

print(f"Loaded {len(SITUATIONS_16_20)} situations (16 to 20)")
