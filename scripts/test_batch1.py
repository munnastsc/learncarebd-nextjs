# -*- coding: utf-8 -*-
"""
Full Generator for 40 Real-Life Situational Conversations
Creates authentic dialogues, scene briefings, tips, vocab, and images.
"""
import json

def get_conversations():
    return [
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
        }
    ]

print("Batch 1 (Situations 1 to 5) structure verified.")
