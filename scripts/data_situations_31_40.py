# -*- coding: utf-8 -*-
"""
Situations 31 to 40 for Spoken English Lab
"""

SITUATIONS_31_40 = [
    # 31. Expressing Empathy & Consoling a Sad Friend
    {
        "id": "conv-31-expressing-empathy-consoling-a-sad-friend",
        "number": 31,
        "title": "Expressing Empathy & Consoling a Sad Friend",
        "titleBn": "বিপদে বন্ধুকে সান্ত্বনা ও মানসিক সাহস জোগানো",
        "level": "Intermediate",
        "category": "Social",
        "imageUrl": "https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?auto=format&fit=crop&w=800&q=80",
        "sceneDescription": "বন্ধু কোনো ব্যক্তিগত ক্ষতি বা ক্যারিয়ারের হতাশায় ভেঙে পড়লে শান্ত পরিবেশে বসে আন্তরিকভাবে তার কথা শোনা, সান্ত্বনা দেওয়া ও পাশে থাকার ভরসা দেওয়া।",
        "briefing": {
            "setting": "নিরিবিলি পার্ক বা বারান্দা (Quiet Reflective Setting)",
            "roleA": { "name": "Caring Friend", "titleBn": "সহমর্মী বন্ধু (Rony)", "descBn": "মনোযোগ দিয়ে বন্ধুর দুঃখের কথা শুনছেন ও ভরসা দিচ্ছেন" },
            "roleB": { "name": "Distressed Friend", "titleBn": "বিষণ্ণ বন্ধু (Sajib)", "descBn": "চাকরি হারানো ও মানসিক চাপের কথা খুলে বলছেন" },
            "overviewBn": "বিপদে কাউকে সান্ত্বনা দেওয়ার সময় অযথা জ্ঞান না দিয়ে আগে মনোযোগ দিয়ে শোনা (Active listening), সহমর্মিতা প্রকাশ করা ('I am so sorry you are going through this'), এবং পাশে থাকার আশ্বাস দেওয়া ('I am always here for you') সবচেয়ে বড় নৈতিক গুণ।",
            "politenessTips": [
                "কখনো বলবেন না: 'It's not a big deal'; বরং বলুন: 'Your feelings are completely valid.'",
                "অযাচিত উপদেশ না দিয়ে পাশে থাকার প্রতিশ্রুতি দিন: 'You don't have to carry this alone.'",
                "ছোট ছোট সহযোগিতার প্রস্তাব দিন: 'Can I bring you some warm soup or help update your resume?'"
            ],
            "keyVocabulary": [
                { "word": "I'm here for you", "meaning": "আমি সবসময় তোমার পাশে আছি", "pron": "আইম হিয়ার ফর ইউ" },
                { "word": "Tough break / Rough patch", "meaning": "জীবনের কঠিন বা দুঃসহ একটি সময়", "pron": "টাফ ব্রেক / রাফ প্যাচ" },
                { "word": "Listen without judgment", "meaning": "বিচার বা সমালোচনা ছাড়া মনোযোগ দিয়ে কথা শোনা", "pron": "লিসেন উইদাউট জাজমেন্ট" },
                { "word": "Take things one day at a time", "meaning": "ভবিষ্যতের দুশ্চিন্তা না করে প্রতিদিনের দিনটি সামলানো", "pron": "টেইক থিংস ওয়ান ডেই অ্যাট আ টাইম" }
            ]
        },
        "starters": [
            { "en": "Hey Sajib, I noticed you've seemed a bit distant and quiet lately. Is everything alright?", "bn": "আরে সজীব, খেয়াল করলাম সম্প্রতি তুই কেমন যেন একটু চুপচাপ আর মনমরা। সব ঠিক আছে তো রে?", "tip": "বন্ধুর খোঁজ নেওয়ার সবচেয়ে সংবেদনশীল বাক্য।" },
            { "en": "I'm always here if you ever need an open ear to vent without any judgment.", "bn": "কোনো বিচার-বিবেচনা ছাড়া মনের কথা খুলে বলার জন্য আমি সবসময় আছি রে দোস্ত।", "tip": "মনোযোগ দেওয়ার আশ্বাস বাক্য।" },
            { "en": "I heard about what happened at your company. I'm so sorry, man.", "bn": "তোর অফিসে কী হয়েছে আমি শুনেছি রে। শুনে আমার খুব খারাপ লাগল দোস্ত।", "tip": "দুঃসংবাদে সমবেদনা জানানোর বাক্য।" }
        ],
        "dialogue": [
            { "id": "1", "speaker": "Rony", "role": "A", "roleTitle": "Friend / রনি", "en": "Hey Sajib. You've seemed really weighed down over the past couple of days. Do you want to talk about it?", "bn": "আরে সজীব। গত কয়েকদিন ধরে তোকে খুব মনমরা আর চিন্তিত লাগছে রে। তুই কি বিষয়টা নিয়ে কথা বলতে চাস?", "ipa": "/heɪ ˈsædʒɪb juːv siːmd ˈrɪəli weɪd daʊn ˈəʊvə ðə pɑːst ˈkʌpl ɒv deɪz duː juː wɒnt tuː tɔːk əˈbaʊt ɪt/", "bn_pron": "হেই সজীব। ইউভ সিমড রিয়ালি ওয়েইড ডাউন। ডু ইউ ওয়ান্ট টু টক অ্যাবাউট ইট?" },
            { "id": "2", "speaker": "Sajib", "role": "B", "roleTitle": "Friend / সজীব", "en": "Thanks for noticing, Rony. Honestly, our startup announced unexpected layoffs yesterday, and my position was terminated.", "bn": "খেয়াল করার জন্য ধন্যবাদ রনি। সত্যি বলতে, আমাদের স্টার্টআপ গতকাল হঠাৎ কর্মী ছাঁটাইয়ের ঘোষণা দিয়েছে, এবং আমার চাকরিটাও চলে গেছে।", "ipa": "/θæŋks fɔː ˈnəʊtɪsɪŋ ˈrəʊni ˈɒnɪstli ˈaʊə ˈstɑːtʌp əˈnaʊnst ˌʌnɪkˈspektɪd ˈleɪɒfs ˈjestədeɪ/", "bn_pron": "থ্যাংকস ফর নোটিসিং রনি। অনেস্টলি, আওয়ার স্টার্টআপ অ্যানাউন্সড আনএক্সপেক্টেড লেইঅফস।" },
            { "id": "3", "speaker": "Rony", "role": "A", "roleTitle": "Friend / রনি", "en": "Oh Sajib, I am so truly sorry to hear that. That must feel like such a heavy shock.", "bn": "হায়রে সজীব, শুনে আমার সত্যি ভীষণ খারাপ লাগছে রে। এটা তোর জন্য কত বড় একটা মানসিক ধাক্কা আমি বুঝতে পারছি।", "ipa": "/əʊ ˈsædʒɪb aɪ æm səʊ ˈtruːli ˈsɒri tuː hɪə ðæt ðæt mʌst fiːl laɪk sʌtʃ ə ˈhevi ʃɒk/", "bn_pron": "ওহ সজীব, আই অ্যাম সো ট্রুলি সরি টু হিয়ার দ্যাট। দ্যাট মাস্ট ফিল লাইক আ হেভি শক।" },
            { "id": "4", "speaker": "Sajib", "role": "B", "roleTitle": "Friend / সজীব", "en": "It really is. I poured my heart and soul into that product for two years, and now I feel completely lost about what to do next.", "bn": "সত্যিই তাই রে। দুই বছর ধরে জানপ্রাণ দিয়ে প্রজেক্টটাতে কাজ করেছিলাম, আর এখন পরবর্তী ক্যারিয়ার নিয়ে আমি সম্পূর্ণ দিশেহারা।", "ipa": "/ɪt ˈrɪəli ɪz aɪ pɔːd maɪ hɑːt ænd səʊl ˈɪntuː ðæt ˈprɒdʌkt fɔː tuː jɪəz ænd naʊ aɪ fiːl kəmˈpliːtli lɒst/", "bn_pron": "ইট রিয়ালি ইজ। আই পোর্ড মাই হার্ট অ্যান্ড সোল ইনটু দ্যাট প্রোডাক্ট।" },
            { "id": "5", "speaker": "Rony", "role": "A", "roleTitle": "Friend / রনি", "en": "Your feelings are 100% valid. It is entirely normal to feel hurt and betrayed after sacrificing so much.", "bn": "তোর অনুভূতি শতভাগ যৌক্তিক। এতটা ত্যাগ স্বীকার করার পর এমন কষ্ট আর প্রতারিত অনুভব হওয়া একদম স্বাভাবিক।", "ipa": "/jɔː ˈfiːlɪŋz ɑː wʌn ˈhʌndrəd pəˈsent ˈvælɪd ɪt ɪz ɪnˈtaɪəli ˈnɔːml tuː fiːl hɜːt/", "bn_pron": "ইউর ফিলিংস আর ওয়ান হান্ড্রেড পার্সেন্ট ভ্যালিড।" },
            { "id": "6", "speaker": "Sajib", "role": "B", "roleTitle": "Friend / সজীব", "en": "I'm stressed about rent and bills, and I keep questioning my self-worth.", "bn": "বাসার ভাড়া আর মাসিক খরচের কথা ভেবে দুশ্চিন্তা হচ্ছে, আর নিজের যোগ্যতা নিয়েও কেমন যেন সংশয় জন্মাচ্ছে রে।", "ipa": "/aɪm strest əˈbaʊt rent ænd bɪlz ænd aɪ kiːp ˈkwestʃənɪŋ maɪ self wɜːθ/", "bn_pron": "আইম স্ট্রেসড অ্যাবাউট রেন্ট অ্যান্ড বিলস, অ্যান্ড আই কীপ কোয়েশ্চেনিং মাই সেলফ ওর্থ।" },
            { "id": "7", "speaker": "Rony", "role": "A", "roleTitle": "Friend / রনি", "en": "Listen to me: this layoff reflects their company financial mismanagement, not your exceptional engineering talent.", "bn": "আমার কথা শোন: এই ছাঁটাই তাদের কোম্পানির অর্থনৈতিক অদক্ষতার ফল, তোর অসামান্য ইঞ্জিনিয়ারিং দক্ষতার কোনো খামতি নয়।", "ipa": "/ˈlɪsn tuː miː ðɪs ˈleɪɒf rɪˈflekts ðeə ˈkʌmpəni faɪˈnænʃl ˌmɪsˈmænɪdʒmənt nɒt jɔːr ɪkˈsepʃənl ˌendʒɪˈnɪərɪŋ ˈtælənt/", "bn_pron": "লিসেন টু মি: দিস লেইঅফ রিফ্লেক্টস দেয়ার ফিন্যান্সিয়াল মিসম্যানেজমেন্ট, নট ইউর ট্যালেন্ট।" },
            { "id": "8", "speaker": "Sajib", "role": "B", "roleTitle": "Friend / সজীব", "en": "Thank you for reminding me of that. I really needed to hear those words right now.", "bn": "আমাকে এটা মনে করিয়ে দেওয়ার জন্য ধন্যবাদ রে। এই মুহূর্তে এই সান্ত্বনার কথাগুলো আমার খুব দরকার ছিল।", "ipa": "/θæŋk juː fɔː rɪˈmaɪndɪŋ miː ɒv ðæt aɪ ˈrɪəli ˈniːdɪd tuː hɪə ðəʊz wɜːdz raɪt naʊ/", "bn_pron": "থ্যাংক ইউ ফর রিমাইন্ডিং মি অফ দ্যাট। আই রিয়ালি নিডেড টু হিয়ার দোজ ওয়ার্ডস।" },
            { "id": "9", "speaker": "Rony", "role": "A", "roleTitle": "Friend / রনি", "en": "You don't have to face this alone. Take a few days to rest, and then we will polish your resume and tap my network for warm referrals.", "bn": "তোকে একা এটার মুখোমুখি হতে হবে না। কয়েকটা দিন বিশ্রাম নে, তারপর আমরা একসাথে তোর সিভি আপডেট করব এবং আমার রেফারেন্সে আবেদন করব।", "ipa": "/juː dəʊnt hæv tuː feɪs ðɪs əˈləʊn teɪk ə fjuː deɪz tuː rest ænd ðen wiː wɪl ˈpɒlɪʃ jɔː ˈrezjuːmeɪ/", "bn_pron": "ইউ ডোন্ট হ্যাভ টু ফেইস দিস অ্যালোন। টেক আ ফিউ ডেইজ টু রেস্ট।" },
            { "id": "10", "speaker": "Sajib", "role": "B", "roleTitle": "Friend / সজীব", "en": "Having a genuine brother like you by my side gives me real hope. Thank you from the bottom of my heart, Rony.", "bn": "তোর মতো একজন খাঁটি ভাইয়ের মতো বন্ধু পাশে থাকা আমাকে সত্যি অনেক সাহস আর আশা জোগাচ্ছে। অন্তর থেকে ধন্যবাদ রনি।", "ipa": "/ˈhævɪŋ ə ˈdʒenjuɪn ˈbrʌðə laɪk juː baɪ maɪ saɪd ɡɪvz miː rɪəl həʊp θæŋk juː frəm ðə ˈbɒtəm ɒv maɪ hɑːt/", "bn_pron": "হ্যাভিং আ জেনুইন ব্রাদার লাইক ইউ গিভস মি রিয়্যাল হোপ। থ্যাংক ইউ ফ্রম দ্য বটম অফ মাই হার্ট।" }
        ],
        "followUps": [
            { "en": "Would you like to come over to my place tonight so you don't have to be alone?", "bn": "তুই কি আজ রাতে আমার বাসায় চলে আসবি যাতে একা থাকতে না হয়?" },
            { "en": "Can I treat you to a nice warm meal or coffee right now?", "bn": "চল তোকে এখনই গরম কোনো ভালো খাবার বা কফি খাইয়ে আনি?", "tip": "ছোট উষ্ণ সেবার প্রস্তাব।" },
            { "en": "Let's take a peaceful walk in the park to clear your mind from all the noise.", "bn": "মনটা একটু শান্ত করার জন্য চলো পার্কে কিছুক্ষণ নীরব বাতাসে হেঁটে আসি।" }
        ],
        "closers": [
            { "en": "Take it one day at a time, Sajib. I'm just a phone call away, anytime.", "bn": "প্রতিদিনের দিনটা প্রতিদিন সামলা সজীব। যে কোনো সময় কল দিবি, আমি পাশে আছি।" },
            { "en": "This storm will pass, and you will come out stronger on the other side. Believe that!", "bn": "এই দুর্যোগের দিন কেটে যাবে, আর তুই আরও শক্তিশালী হয়ে ফিরে আসবি। বিশ্বাস রাখিস!" },
            { "en": "Rest well tonight buddy. We will tackle this together tomorrow!", "bn": "আজ রাতে ভালো করে ঘুমা দোস্ত। কাল থেকে আমরা একসাথে লড়াই করব!" }
        ],
        "nativePhrases": [
            { "phrase": "One day at a time", "meaning": "দূর ভবিষ্যতের অতিরিক্ত দুশ্চিন্তা না করে কেবল আজকের দিনটির ওপর মনোযোগ রাখা", "context": "বিপদে বন্ধুকে সান্ত্বনা দিতে।" },
            { "phrase": "Rough patch", "meaning": "জীবনের কঠিন বা পরীক্ষার সময়কাল", "context": "অস্থায়ী সংকট বোঝাতে।" },
            { "phrase": "Silver lining", "meaning": "কঠিনতম বিপদের আড়ালেও লুকিয়ে থাকা শুভ সম্ভাবনা", "context": "আশা জোগাতে।" }
        ]
    },

    # 32. Debating and Reviewing a Movie or Book
    {
        "id": "conv-32-debating-and-reviewing-a-movie-or-book",
        "number": 32,
        "title": "Debating and Reviewing a Movie or Book",
        "titleBn": "সিনেমা বা বইয়ের প্লট ও মেকিং নিয়ে বুদ্ধিবৃত্তিক আড্ডা",
        "level": "Intermediate",
        "category": "Daily Life",
        "imageUrl": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80",
        "sceneDescription": "ক্রিস্টোফার নোলানের নতুন থ্রিলার সিনেমা বা বেস্টসেলার বই পড়ার পর বুক ক্যাফেতে বসে প্লটের গভীরতা, সিনেমাটোগ্রাফি ও চরিত্রায়ন নিয়ে আড্ডা।",
        "briefing": {
            "setting": "বুক ক্যাফে লাউঞ্জ (Cozy Book Cafe)",
            "roleA": { "name": "Film Buff", "titleBn": "সিনেমা বিশ্লেষক (Tahsin)", "descBn": "সিনেমার আবহসংগীত, ভিজ্যুয়াল ইফেক্টস ও ডিরেকশনের ভূয়সী প্রশংসা করছেন" },
            "roleB": { "name": "Critical Viewer", "titleBn": "সমঝদার দর্শক (Lina)", "descBn": "ভিজ্যুয়াল ভালো লাগলেও শেষ অঙ্কের প্লটহোল ও পেসিং নিয়ে প্রশ্ন তুলছেন" },
            "overviewBn": "শিল্পকর্ম নিয়ে বিতর্ক করার সময় মত প্রকাশের এক্সপ্রেশন ('In my opinion', 'The cinematography was jaw-dropping', 'On the other hand, the pacing dragged in the second act') দারুণ ভূমিকা রাখে।",
            "politenessTips": [
                "অপরের মতামতের প্রতি শ্রদ্ধা জানিয়ে শুরু করুন: 'I definitely agree the visuals were stunning, but...'",
                "নির্দিষ্ট বিষয় ধরে যুক্তি দিন: 'The plot twist felt slightly unearned in the third act.'",
                "রেটিং বা স্কোর দিন: 'Overall, I'd give it a solid 8 out of 10.'"
            ],
            "keyVocabulary": [
                { "word": "Cinematography", "meaning": "চলচ্চিত্রের দৃশ্যধারণের শৈল্পিক মান", "pron": "সিনেমাটোগ্রাফি" },
                { "word": "Plot twist", "meaning": "গল্পের অপ্রত্যাশিত রোমাঞ্চকর মোড়", "pron": "প্লট টুইস্ট" },
                { "word": "Character development", "meaning": "গল্পের সাথে সাথে চরিত্রের মানসিক পরিবর্তন ও বিকাশ", "pron": "ক্যারেক্টার ডেভেলপমেন্ট" },
                { "word": "Pacing", "meaning": "সিনেমার ঘটনার দৃশ্য পরম্পরার গতি", "pron": "পেইসিং" }
            ]
        },
        "starters": [
            { "en": "Have you seen Christopher Nolan's latest masterpiece yet? I was blown away!", "bn": "ক্রিস্টোফার নোলানের সাম্প্রতিক মাস্টারপিসটি কি দেখেছ? আমি তো একেবারে মুগ্ধ!", "tip": "সিনেমা নিয়ে কথা শুরুর উচ্ছ্বসিত বাক্য।" },
            { "en": "What did you think of the ending of that mystery novel? Did it live up to the hype?", "bn": "রহস্য উপন্যাসের সমাপ্তিটা তোমার কেমন লাগল? প্রচারণার মতো কি মানসম্পন্ন ছিল?", "tip": "বইয়ের মূল্যায়ন জানার বাক্য।" },
            { "en": "I loved the cinematography, though the character motivations felt a bit rushed.", "bn": "সিনেমাটোগ্রাফি ভালো লেগেছে, তবে চরিত্রগুলোর পেছনের কারণগুলো একটু তাড়াহুড়ো মনে হয়েছে।", "tip": "ভারসাম্যপূর্ণ মতামতের বাক্য।" }
        ],
        "dialogue": [
            { "id": "1", "speaker": "Tahsin", "role": "A", "roleTitle": "Film Buff / তাহসিন", "en": "Lina, did you watch the new sci-fi film Oppenheimer over the weekend? My mind was completely blown!", "bn": "লিনা, এই উইকেন্ডে নোলানের ওপেনহাইমার মুভিটা কি দেখেছ? আমার তো মাথা একদম ঘুরে গেছে!", "ipa": "/ˈliːnə dɪd juː wɒtʃ ðə njuː ˈsaɪfaɪ fɪlm ˈəʊpənhaɪmə ˈəʊvə ðə ˈwiːkend maɪ maɪnd wɒz kəmˈpliːtli bləʊn/", "bn_pron": "লিনা, ডিড ইউ ওয়াচ দ্য নিউ সাই-ফাই ফিল্ম? মাই মাইন্ড ওয়াজ কমপ্লিটলি ব্লোন!" },
            { "id": "2", "speaker": "Lina", "role": "B", "roleTitle": "Critical Viewer / লিনা", "en": "I did! Visually and sonically, it was an absolute masterclass. Ludwig Göransson's soundtrack was breathtaking.", "bn": "হ্যাঁ দেখেছি! ভিজ্যুয়াল আর সাউন্ড ডিজাইনের দিক থেকে এটি এক মাস্টারপিস ছিল। বিশেষ করে ব্যাকগ্রাউন্ড মিউজিকটা ছিল গায়ে কাঁটা দেওয়ার মতো।", "ipa": "/aɪ dɪd ˈvɪʒuəli ænd ˈsɒnɪkli ɪt wɒz ən ˈæbsəluːt ˈmɑːstəklɑːs ˈsaʊndtræk wɒz ˈbreθteɪkɪŋ/", "bn_pron": "আই ডিড! ভিজ্যুয়ালি অ্যান্ড সনিকালি ইট ওয়াজ অ্যান অ্যাবসলিউট মাস্টারক্লাস।" },
            { "id": "3", "speaker": "Tahsin", "role": "A", "roleTitle": "Film Buff / তাহসিন", "en": "The Trinity test scene was pure cinematic poetry! The silence before the blast shockwave gave me actual chills.", "bn": "ট্রিনিটি টেস্টের দৃশ্যটি ছিল চলচ্চিত্রের খাঁটি কবিতা! বিস্ফোরণের শকওয়েভের আগের নিস্তব্ধতা আমার গায়ে কাঁটা দিয়েছিল।", "ipa": "/ðə ˈtrɪnəti test siːn wɒz pjʊə ˌsɪnəˈmætɪk ˈpəʊətri ðə ˈsaɪləns bɪˈfɔː ðə blɑːst ˈʃɒkweɪv ɡeɪv miː ˈæktʃuəl tʃɪlz/", "bn_pron": "দ্য ট্রিনিটি টেস্ট সিন ওয়াজ পিওর সিনেমাটিক পোয়েট্রি! দ্য সাইলেন্স গ্যাভ মি চিলস।" },
            { "id": "4", "speaker": "Lina", "role": "B", "roleTitle": "Critical Viewer / লিনা", "en": "I agree that sequence was genius. However, I felt the courtroom political drama in the final hour dragged quite a bit.", "bn": "ওই দৃশ্যটি যে জিনিয়াস ছিল তাতে সন্দেহ নেই। তবে শেষ এক ঘণ্টার আদালতের রাজনৈতিক দ্বন্দ্বের অংশটি একটু বেশি দীর্ঘায়িত মনে হয়েছে।", "ipa": "/aɪ əˈɡriː ðæt ˈsiːkwəns wɒz ˈdʒiːniəs haʊˈevər aɪ felt ðə ˈkɔːtruːm pəˈlɪtɪkl ˈdrɑːmə ɪn ðə ˈfaɪnl ˈaʊə dræɡd/", "bn_pron": "আই এগ্রি দ্যাট সিকোয়েন্স ওয়াজ জিনিয়াস। হাউএভার, দ্য কোর্টরুম ড্রামা ড্র্যাগড আ বিট।" },
            { "id": "5", "speaker": "Tahsin", "role": "A", "roleTitle": "Film Buff / তাহসিন", "en": "Really? I thought Robert Downey Jr.'s performance as Strauss brought immense psychological tension to that act!", "bn": "সত্যি? আমার তো মনে হয়েছে স্ট্রস চরিত্রে রবার্ট ডাউনি জুনিয়রের অভিনয় ওই অংশে এক বিরাট মনস্তাত্ত্বিক টানটান উত্তেজনা এনে দিয়েছিল!", "ipa": "/ˈrɪəli aɪ θɔːt ˈrɒbət ˈdaʊni ˈdʒuːnjəz pəˈfɔːməns æz straʊs brɔːt ɪˈmens ˌsaɪkəˈlɒdʒɪkl ˈtenʃn/", "bn_pron": "রিয়ালি? আই থট রবার্ট ডাউনি জুনিয়র্স পারফরম্যান্স ব্রট ইমেন্স সাইকোলজিক্যাল টেনশন!" },
            { "id": "6", "speaker": "Lina", "role": "B", "roleTitle": "Critical Viewer / লিনা", "en": "His acting was indeed Oscar-worthy. But with three non-linear timelines jumping back and forth, casual viewers could easily get confused.", "bn": "ওনার অভিনয় নিশ্চিতভাবেই অস্কার পাওয়ার মতো। তবে সময়ের তিনটি সমান্তরাল টাইমলাইন সামনে-পেছনে লাফানোর কারণে সাধারণ দর্শক সহজেই খেই হারিয়ে ফেলতে পারে।", "ipa": "/hɪz ˈæktɪŋ wɒz ɪnˈdiːd ˈɒskə ˈwɜːði bʌt wɪð θriː nɒn ˈlɪniə ˈtaɪmlaɪnz ˈdʒʌmpɪŋ bæk ænd fɔːθ/", "bn_pron": "হিজ অ্যাক্টিং ওয়াজ ইনডিড অস্কার ওর্দি। বাট উইথ থ্রি নন-লিনিয়ার টাইমলাইনস।" },
            { "id": "7", "speaker": "Tahsin", "role": "A", "roleTitle": "Film Buff / তাহসিন", "en": "That's a fair critique. Nolan always demands intense intellectual concentration from his audience.", "bn": "এটা যুক্তিযুক্ত সমালোচনা। নোলান সবসময়ই তার দর্শকদের কাছ থেকে তীব্র বুদ্ধিবৃত্তিক মনোযোগ দাবি করেন।", "ipa": "/ðæts ə feə krɪˈtiːk ˈnəʊlən ˈɔːlweɪz dɪˈmɑːndz ɪnˈtens ˌɪntəˈlektʃuəl ˌkɒnsnˈtreɪʃn frəm hɪz ˈɔːdiəns/", "bn_pron": "দ্যাটস আ ফেয়ার ক্রিটিক। নোলান অলওয়েজ ডিমান্ডস ইনটেন্স কনসেন্ট্রেশন।" },
            { "id": "8", "speaker": "Lina", "role": "B", "roleTitle": "Critical Viewer / লিনা", "en": "What rating would you give it overall out of 10?", "bn": "১০-এর মধ্যে সামগ্রিকভাবে তুমি একে কত রেটিং দেবে?", "ipa": "/wɒt ˈreɪtɪŋ wʊd juː ɡɪv ɪt ˌəʊvərˈɔːl aʊt ɒv ten/", "bn_pron": "ওয়াট রেটিং উড ইউ গিভ ইট ওভারঅল আউট অফ টেন?" },
            { "id": "9", "speaker": "Tahsin", "role": "A", "roleTitle": "Film Buff / তাহসিন", "en": "I'd give it a solid 9.5 out of 10. A landmark historical epic. What about you?", "bn": "আমি একে অনায়াসে ৯.৫ দেব। একটি ঐতিহাসিক মহাকাব্যিক সিনেমা। তোমার রেটিং কত?", "ipa": "/aɪd ɡɪv ɪt ə ˈsɒlɪd naɪn pɔɪnt faɪv aʊt ɒv ten ə ˈlændmɑːk hɪˈstɒrɪkl ˈepɪk wɒt əˈbaʊt juː/", "bn_pron": "আইড গিভ ইট আ সলিড নাইন পয়েন্ট ফাইভ আউট অফ টেন। ওয়াট অ্যাবাউট ইউ?" },
            { "id": "10", "speaker": "Lina", "role": "B", "roleTitle": "Critical Viewer / লিনা", "en": "A respectable 8.5 for me! Flawless craft and sound, just slightly overlong. A must-watch regardless!", "bn": "আমার পক্ষ থেকে সম্মানজনক ৮.৫! নির্মাণশৈলী ও শব্দ নিখুঁত, শুধু একটু বেশি দীর্ঘ। যাই হোক, এটা অবশ্য দেখার মতো সিনেমা!", "ipa": "/ə rɪˈspektəbl eɪt pɔɪnt faɪv fɔː miː ˈflɔːləs krɑːft ænd saʊnd dʒʌst ˈslaɪtli ˌəʊvəˈlɒŋ ə mʌst wɒtʃ rɪˈɡɑːdləs/", "bn_pron": "আ রেসপেক্টেবল এইট পয়েন্ট ফাইভ ফর মি! ফ্ললেস ক্রাফট অ্যান্ড সাউন্ড।" }
        ],
        "followUps": [
            { "en": "Did you watch it on a genuine 70mm IMAX film screen?", "bn": "তুমি কি এটা জেনুইন ৭০ মিমি আইম্যাক্স বড় পর্দায় দেখেছিলে?" },
            { "en": "Have you read the Pulitzer Prize-winning biography 'American Prometheus' it was based on?", "bn": "যে পুলিৎজারজয়ী আমেরিকান প্রমিথিউস জীবনীগ্রন্থের ওপর এটি তৈরি, সেটা কি পড়েছ?" },
            { "en": "Which film do you rank as your all-time favorite in Nolan's filmography?", "bn": "নোলানের সব সিনেমার মধ্যে তোমার সর্বকালের প্রিয় ছবি কোনটি?" }
        ],
        "closers": [
            { "en": "I love having these deep film discussions with you! We should do this more often.", "bn": "তোমার সাথে এমন সিনেমার গভীর বিশ্লেষণ করতে দারুণ লাগে! আমাদের নিয়মিত এমন আড্ডা দেওয়া উচিত।" },
            { "en": "Next week let's watch Denis Villeneuve's Dune: Part Two together!", "bn": "পরের সপ্তাহে চলো একসাথে ডেনিস ভিলেন্যুভের 'ডিউন ২' দেখে আসি!" },
            { "en": "Thanks for the great intellectual chat over coffee. See you soon!", "bn": "কফির আড্ডায় এমন বুদ্ধিবৃত্তিক চমৎকার আলোচনার জন্য ধন্যবাদ। দ্রুতই দেখা হবে!" }
        ],
        "nativePhrases": [
            { "phrase": "Blown away", "meaning": "কোনো কিছুর অসাধারণ মানে চূড়ান্তভাবে বিস্মিত ও মুগ্ধ হওয়া", "context": "সিনেমার প্রশংসা করতে।" },
            { "phrase": "Live up to the hype", "meaning": "আগে থেকে হওয়া তুমুল প্রশংসার মান অক্ষুণ্ণ রাখা", "context": "প্রত্যাশা পূরণ হয়েছে কি না তা নিয়ে।" },
            { "phrase": "A must-watch", "meaning": "অবশ্যই দেখার মতো অনন্য সৃষ্টি", "context": "কাউকে সিনেমা দেখার সুপারিশ করতে।" }
        ]
    },

    # 33. Ordering Takeout Food & Resolving Wrong Order
    {
        "id": "conv-33-ordering-takeout-food-resolving-wrong-order",
        "number": 33,
        "title": "Ordering Takeout Food & Resolving Wrong Order",
        "titleBn": "ফোনে খাবার ডেলিভারি ও ভুল খাবার সমাধানের কথোপকথন",
        "level": "Intermediate",
        "category": "Services",
        "imageUrl": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
        "sceneDescription": "ফুড ডেলিভারি অ্যাপে খাবার আসার পর দেখা গেল বিফ বার্গারের বদলে চিকেন বার্গার এবং ফ্রেঞ্চ ফ্রাই মিসিং—রেস্তোরাঁর হেল্পলাইনে কল করে দ্রুত সংশোধনের কথোপকথন।",
        "briefing": {
            "setting": "রেস্তোরাঁ ডেলিভারি সাপোর্ট কল (Delivery Customer Helpline)",
            "roleA": { "name": "Hungry Customer", "titleBn": "গ্রাহক (Farid)", "descBn": "অর্ডার আইডি উল্লেখ করে ভুল খাবার আসার কথা জানাচ্ছেন" },
            "roleB": { "name": "Manager", "titleBn": "রেস্তোরাঁ ইনচার্জ / ম্যানেজার (Kamal)", "descBn": "ভুলের জন্য দুঃখ প্রকাশ করে গরম সঠিক খাবার ও কমপ্লিমেন্টারি ডেজার্ট পাঠাচ্ছেন" },
            "overviewBn": "খাবার ডেলিভারিতে ভুল হলে মাথা গরম না করে অর্ডার নম্বর বলা (Order #4920), কী পাওয়ার কথা ছিল এবং কী এসেছে তা স্পষ্ট করা (I ordered beef, but received chicken), এবং দ্রুত পুনরায় পাঠানোর ব্যবস্থা করা।",
            "politenessTips": [
                "শুরুতেই অর্ডার নম্বর বলুন: 'Hello, I just received order #7821, but there is a mix-up with the items.'",
                "ভুলটা পরিষ্কার করে বলুন: 'I ordered two double-beef burgers, but received two chicken wraps instead.'",
                "সমাধান দাবি করুন: 'Could you please dispatch the correct order urgently, as our guests are waiting?'"
            ],
            "keyVocabulary": [
                { "word": "Mix-up in the order", "meaning": "অর্ডারে জিনিসপত্র ওলটপালট বা ভুল হওয়া", "pron": "মিক্স-আপ ইন দ্য অর্ডার" },
                { "word": "Dispatch a replacement", "meaning": "সংশোধিত খাবার সাথে সাথে রাইডার দিয়ে পাঠিয়ে দেওয়া", "pron": "ডিসপ্যাচ আ রিপ্লেসমেন্ট" },
                { "word": "Complimentary dessert", "meaning": "ভুলের ক্ষতিপূরণ হিসেবে উপহারস্বরূপ ফ্রি ডেজার্ট", "pron": "কমপ্লিমেন্টারি ডেজার্ট" },
                { "word": "Order summary receipt", "meaning": "খাবারের প্যাকেটে সাঁটানো অর্ডারের রশিদ", "pron": "অর্ডার সামারি রিসিট" }
            ]
        },
        "starters": [
            { "en": "Hello, I just received delivery for order #8841, but unfortunately the items are incorrect.", "bn": "হ্যালো, আমি এইমাত্র ৮৮৪১ নম্বর অর্ডারের খাবার পেয়েছি, তবে পণ্যগুলো ভুল এসেছে।", "tip": "ভুল ডেলিভারি জানানোর স্পষ্ট বাক্য।" },
            { "en": "Hi, there seems to be a missing item in my takeaway package. We didn't receive our fries.", "bn": "হাই, আমার খাবারের প্যাকেটে একটি জিনিস কম মনে হচ্ছে। আমাদের ফ্রাইগুলো আসেনি।", "tip": "আইটেম মিসিংয়ের কথা জানানোর বাক্য।" },
            { "en": "Could I speak with the duty manager regarding a mix-up with our dinner delivery?", "bn": "আমাদের ডিনার ডেলিভারির ভুলের বিষয়ে কি ডিউটি ম্যানেজারের সাথে কথা বলা যাবে?", "tip": "ম্যানেজারের সাথে কথা বলার উপায়।" }
        ],
        "dialogue": [
            { "id": "1", "speaker": "Farid", "role": "A", "roleTitle": "Customer / ফরিদ", "en": "Good evening. I just received my food delivery for Order #3920, but there's a serious mix-up.", "bn": "শুভ সন্ধ্যা। আমি এইমাত্র ৩৯২০ নম্বর অর্ডারের ডেলিভারি পেয়েছি, তবে খাবারে বড় ধরনের গরমিল রয়েছে।", "ipa": "/ɡʊd ˈiːvnɪŋ aɪ dʒʌst rɪˈsiːvd maɪ fuːd dɪˈlɪvəri fɔːr ˈɔːdə θriː naɪn tuː ˈzɪərəʊ/", "bn_pron": "গুড ইভনিং। আই জাস্ট রিসিভড মাই ফুড ডেলিভারি ফর অর্ডার থ্রি নাইন টু জিরো।" },
            { "id": "2", "speaker": "Manager", "role": "B", "roleTitle": "Manager / ম্যানেজার", "en": "Good evening, I'm very sorry to hear that! What seems to be the problem with the package?", "bn": "শুভ সন্ধ্যা, শুনে ভীষণ দুঃখিত হলাম! প্যাকেটে ঠিক কী সমস্যা হয়েছে একটু বলবেন কি?", "ipa": "/ɡʊd ˈiːvnɪŋ aɪm ˈveri ˈsɒri tuː hɪə ðæt wɒt siːmz tuː biː ðə ˈprɒbləm wɪð ðə ˈpækɪdʒ/", "bn_pron": "গুড ইভনিং, আইম ভেরি সরি টু হিয়ার দ্যাট! ওয়াট সিমস টু বি দ্য প্রবলেম?" },
            { "id": "3", "speaker": "Farid", "role": "A", "roleTitle": "Customer / ফরিদ", "en": "I ordered two spicy gourmet beef burgers and large curly fries, but I received two cold chicken wraps instead.", "bn": "আমি দুইটি স্পাইসি বিফ বার্গার ও বড় কার্লি ফ্রাই অর্ডার করেছিলাম, কিন্তু তার বদলে পেয়েছি দুইটি ঠান্ডা চিকেন র‍্যাপ।", "ipa": "/aɪ ˈɔːdəd tuː ˈspaɪsi ˈɡʊəmeɪ biːf ˈbɜːɡəz ænd lɑːdʒ ˈkɜːli fraɪz bʌt aɪ rɪˈsiːvd tuː kəʊld ˈtʃɪkɪn ræps/", "bn_pron": "আই অর্ডার্ড টু স্পাইসি বিফ বার্গার্স, বাট আই রিসিভড টু কোল্ড চিকেন র‍্যাপস।" },
            { "id": "4", "speaker": "Manager", "role": "B", "roleTitle": "Manager / ম্যানেজার", "en": "Oh dear! It looks like the delivery courier swapped bags with another customer at pickup. Let me pull up your ticket.", "bn": "আহা! মনে হচ্ছে ডেলিভারি রাইডার নেওয়ার সময় অন্য এক কাস্টমারের ব্যাগের সাথে অদলবদল করে ফেলেছে। আমি টিকিটটি দেখছি।", "ipa": "/əʊ dɪər ɪt lʊks laɪk ðə dɪˈlɪvəri ˈkʊriə swɒpt bæɡz wɪð əˈnʌðə ˈkʌstəmər æt ˈpɪkʌp/", "bn_pron": "ওহ ডিয়ার! ইট লুকস লাইক দ্য ডেলিভারি কুরিয়ার সোয়াপড ব্যাগস।" },
            { "id": "5", "speaker": "Farid", "role": "A", "roleTitle": "Customer / ফরিদ", "en": "We have guests waiting at home for dinner. How fast can you dispatch the correct items?", "bn": "আমাদের বাসায় মেহমানরা রাতের খাবারের জন্য অপেক্ষা করছেন। কত দ্রুত আপনারা সঠিক খাবারটি পাঠাতে পারবেন?", "ipa": "/wiː hæv ɡests ˈweɪtɪŋ æt həʊm fɔː ˈdɪnə haʊ fɑːst kæn juː dɪˈspætʃ ðə kəˈrekt ˈaɪtəmz/", "bn_pron": "উই হ্যাভ গেস্টস ওয়েইটিং অ্যাট হোম ফর ডিনার। হাউ ফাস্ট ক্যান ইউ ডিসপ্যাচ?" },
            { "id": "6", "speaker": "Manager", "role": "B", "roleTitle": "Manager / ম্যানেজার", "en": "I am having our chef prepare your fresh beef burgers on priority right this second. It will take 8 minutes to cook.", "bn": "আমি এই সেকেন্ডেই আমাদের শেফকে দিয়ে অগ্রাধিকার ভিত্তিতে তাজা বিফ বার্গার তৈরি করাচ্ছি। ভাজতে ৮ মিনিট লাগবে।", "ipa": "/aɪ æm ˈhævɪŋ ˈaʊə ʃef prɪˈpeə jɔː freʃ biːf ˈbɜːɡəz ɒn praɪˈɒrəti raɪt ðɪs ˈsekənd/", "bn_pron": "আই অ্যাম হ্যাভিং আওয়ার শেফ প্রিপেয়ার ফ্রেশ বিফ বার্গার্স অন প্রায়োরিটি।" },
            { "id": "7", "speaker": "Farid", "role": "A", "roleTitle": "Customer / ফরিদ", "en": "Please make sure the fries are hot and crispy, and don't forget the garlic mayo dip.", "bn": "ফ্রাইগুলো যেন গরম আর মুচমুচে থাকে খেয়াল রাখবেন, আর সাথে গার্লিক মেয়ো ডিপ দিতে ভুলবেন না যেন।", "ipa": "/pliːz meɪk ʃʊə ðə fraɪz ɑː hɒt ænd ˈkrɪspi ænd dəʊnt fəˈɡet ðə ˈɡɑːlɪk ˈmeɪəʊ dɪp/", "bn_pron": "প্লীয মেইক শুয়ার দ্য ফ্রাইস আর হট অ্যান্ড ক্রিস্পি, অ্যান্ড ডোন্ট ফরগেট দ্য গার্লিক মেয়ো।" },
            { "id": "8", "speaker": "Manager", "role": "B", "roleTitle": "Manager / ম্যানেজার", "en": "I will inspect and pack the bag personally. I am also adding two complimentary Belgian chocolate brownies as our sincere apology.", "bn": "আমি ব্যক্তিগতভাবে খাবারের ব্যাগটি যাচাই করে প্যাক করব। আন্তরিক দুঃখপ্রকাশ হিসেবে সাথে দুইটি চকলেট ব্রাউনিও ফ্রি দিয়ে দিচ্ছি।", "ipa": "/aɪ wɪl ɪnˈspekt ænd pæk ðə bæɡ ˈpɜːsənəli aɪ æm ˈɔːlsəʊ ˈædɪŋ tuː ˌkɒmplɪˈmentri ˈbeldʒən ˈtʃɒklət ˈbraʊniz/", "bn_pron": "আই উইল ইন্সপেক্ট অ্যান্ড প্যাক দ্য ব্যাগ পার্সোনালি। অ্যাডিং টু চকলেট ব্রাউনিস।" },
            { "id": "9", "speaker": "Farid", "role": "A", "roleTitle": "Customer / ফরিদ", "en": "I appreciate the quick resolution and the brownies. Should I return the chicken wraps to the rider?", "bn": "দ্রুত সমাধান ও ব্রাউনির জন্য ধন্যবাদ। ভুল আসা চিকেন র‍্যাপগুলো কি রাইডারকে ফেরত দিয়ে দেব?", "ipa": "/aɪ əˈpriːʃieɪt ðə kwɪk ˌrezəˈluːʃn ænd ðə ˈbraʊniz ʃʊd aɪ rɪˈtɜːn ðə ˈtʃɪkɪn ræps tuː ðə ˈraɪdə/", "bn_pron": "আই অ্যাপ্রিশিয়েট দ্য কুইক রেজোলিউশন। শুড আই রিটার্ন দ্য চিকেন র‍্যাপস?" },
            { "id": "10", "speaker": "Manager", "role": "B", "roleTitle": "Manager / ম্যানেজার", "en": "No need, please keep them! Our express express rider has just left the kitchen. He will be at your door in 15 minutes!", "bn": "কোনো দরকার নেই, ওগুলো আপনারা রেখে দিন! আমাদের এক্সপ্রেস রাইডার এইমাত্র রওনা হয়েছে। ১৫ মিনিটে পৌঁছে যাবে!", "ipa": "/nəʊ niːd pliːz kiːp ðem ˈaʊər ɪkˈspres ˈraɪdə hæz dʒʌst left ðə ˈkɪtʃɪn hiː wɪl biː æt jɔː dɔːr ɪn ˌfɪfˈtiːn ˈmɪnɪts/", "bn_pron": "নো নিড, প্লীয কীপ দেম! আওয়ার এক্সপ্রেস রাইডার হ্যাজ জাস্ট লেফট দ্য কিচেন। ফিফটিন মিনিটস!" }
        ],
        "followUps": [
            { "en": "Can you text me the rider's live GPS tracking link?", "bn": "রাইডারের লাইভ জিপিএস ট্র্যাকিং লিংকটি কি আমাকে মেসেজে পাঠানো যাবে?" },
            { "en": "Will you also credit my delivery app wallet for the delay?", "bn": "দেরির ক্ষতিপূরণ হিসেবে কি অ্যাপের ওয়ালেটে কোনো ক্রেডিট পয়েন্ট যোগ হবে?" },
            { "en": "Could you provide your direct name in case the rider gets lost in our lane?", "bn": "গলিতে রাইডার হারিয়ে গেলে যোগাযোগের জন্য আপনার নামটি কি জানতে পারি?" }
        ],
        "closers": [
            { "en": "Thank you for rectifying the mistake so responsibly! Have a good evening.", "bn": "এত দায়িত্বশীলতার সাথে ভুল সংশোধন করে দেওয়ার জন্য ধন্যবাদ! শুভ সন্ধ্যা।" },
            { "en": "Appreciate your excellent customer service under pressure.", "bn": "চাপের মধ্যেও এমন আন্তরিক গ্রাহকসেবার জন্য প্রশংসা জানাচ্ছি।" },
            { "en": "I'll wait for the rider at the gate. Goodbye!", "bn": "আমি গেটে রাইডারের জন্য অপেক্ষা করছি। বিদায়!" }
        ],
        "nativePhrases": [
            { "phrase": "On the house", "meaning": "রেস্তোরাঁর পক্ষ থেকে সম্পূর্ণ বিনামূল্যে বা উপহার", "context": "ভুল আদেশের ক্ষতিপূরণে ফ্রি খাবার দিলে।" },
            { "phrase": "Mix-up", "meaning": "ভুলবশত ওলটপালট বা বিভ্রান্তি", "context": "অর্ডার বিভ্রাটের ক্ষেত্রে।" },
            { "phrase": "Rectify the issue", "meaning": "ভুল বা সমস্যা দ্রুত সংশোধন করা", "context": "সমাধান প্রক্রিয়ায়।" }
        ]
    },

    # 34. At the Gym: Workout Routine & Training
    {
        "id": "conv-34-at-the-gym-workout-routine-training",
        "number": 34,
        "title": "At the Gym: Workout Routine & Training",
        "titleBn": "জিমে ফিটনেস রুটিন ও এক্সারসাইজ ফরম নিয়ে কথা",
        "level": "Intermediate",
        "category": "Daily Life",
        "imageUrl": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
        "sceneDescription": "ফিটনেস জিমে নতুন ভর্তি হয়ে ট্রেইনারের কাছ থেকে প্রোপার স্কোয়াট ও ডেডলিফট ফরম শেখা, ইনজুরি এড়ানো এবং ৩ দিনের ওয়ার্কআউট স্প্লিট জানার কথপোকথন।",
        "briefing": {
            "setting": "ফিটনেস জিম ফ্লোর (Gym Weight Room)",
            "roleA": { "name": "New Member", "titleBn": "নতুন সদস্য (Tanvir)", "descBn": "স্ট্যামিনা বাড়ানো ও সঠিক স্কোয়াট ফরম শিখতে চাচ্ছেন" },
            "roleB": { "name": "Gym Trainer", "titleBn": "ফিটনেস ট্রেইনার (Coach Alex)", "descBn": "ভুল ভঙ্গি শুধরে দিচ্ছেন ও ওয়ার্ম-আপ রুটিন বোঝাচ্ছেন" },
            "overviewBn": "জিমে এক্সারসাইজ ফরম (Proper posture/form), সেট ও রেপস (3 sets of 10 reps), পেশির ক্লান্তি (Muscle soreness vs injury), এবং হাইড্রেটেড থাকা ইংরেজিতে সাবলীলভাবে বলতে পারা দরকার।",
            "politenessTips": [
                "ট্রেইনারকে বলতে পারেন: 'Coach, could you critique my squat posture to make sure I don't injure my lower back?'",
                "ওজন স্পট করতে অনুরোধ করুন: 'Could you please spot me on this last heavy bench press set?'",
                "পরামর্শের জন্য ধন্যবাদ জানান: 'Thank you for correcting my foot placement!'"
            ],
            "keyVocabulary": [
                { "word": "Proper form / Posture", "meaning": "ব্যায়ামের সঠিক শারীরিক ভঙ্গি", "pron": "প্রোপার ফর্ম / পশ্চার" },
                { "word": "Spot me", "meaning": "ভারী ওজন তোলার সময় পেছনে থেকে নিরাপত্তা সহায়তা দেওয়া", "pron": "স্পট মি" },
                { "word": "Sets and reps", "meaning": "ব্যায়ামের সেট এবং প্রতি সেটে উঠানোর সংখ্যা (পুনরাবৃত্তি)", "pron": "সেটস অ্যান্ড রেপস" },
                { "word": "Core engagement", "meaning": "পেট ও কোমরের পেশি শক্ত ও সোজা রাখা", "pron": "কোর এনগেজমেন্ট" }
            ]
        },
        "starters": [
            { "en": "Hi Coach, could you take a quick look at my deadlift technique?", "bn": "হাই কোচ, আমার ডেডলিফটের টেকনিকটি কি একটু দেখে দেবেন?", "tip": "ব্যায়ামের ফরম যাচাইয়ের সোজা বাক্য।" },
            { "en": "Excuse me, are you using these dumbbells or may I work in with you?", "bn": "মাফ করবেন, আপনি কি এই ডাম্বেলগুলো ব্যবহার করছেন নাকি আমি শেয়ার করতে পারি?", "tip": "যন্ত্রপাতি শেয়ার করার জিম এটিকেট।" },
            { "en": "What stretching routine do you recommend prior to heavy squatting?", "bn": "ভারী স্কোয়াটের আগে কোন স্ট্রেচিং বা ওয়ার্ম-আপ করার পরামর্শ দেবেন?", "tip": "ওয়ার্ম-আপের পরামর্শ চাওয়ার বাক্য।" }
        ],
        "dialogue": [
            { "id": "1", "speaker": "Tanvir", "role": "A", "roleTitle": "Member / তানভীর", "en": "Hey Coach Alex! It's my first week here. Could you critique my squat form to make sure I don't hurt my back?", "bn": "হেই কোচ অ্যালেক্স! এটি এখানে আমার প্রথম সপ্তাহ। পিঠে যেন চোট না লাগে তাই আমার স্কোয়াট ফরমটা কি একটু দেখবেন?", "ipa": "/heɪ kəʊtʃ ˈæleks ɪts maɪ fɜːst wiːk hɪə kʊd juː krɪˈtiːk maɪ skwɒt fɔːm/", "bn_pron": "হেই কোচ অ্যালেক্স! কুড ইউ ক্রিটিক মাই স্কোয়াট ফর্ম?" },
            { "id": "2", "speaker": "Alex", "role": "B", "roleTitle": "Coach / কোচ", "en": "Gladly, Tanvir! Safe form always comes before heavy weight. Show me five bodyweight reps first.", "bn": "খুশি হয়েই দেখব তানভীর! ভারী ওজনের আগে সবসময়ই সঠিক ভঙ্গি জরুরি। প্রথমে খালি গায়ে পাঁচটি বডিওয়েট স্কোয়াট দিয়ে দেখাও।", "ipa": "/ˈɡlædli tænˈvɪə seɪf fɔːm ˈɔːlweɪz kʌmz bɪˈfɔː ˈhevi weɪt ʃəʊ miː faɪv ˈbɒdiweɪt reps fɜːst/", "bn_pron": "গ্ল্যাডলি তানভীর! সেইফ ফর্ম অলওয়েজ কামস বিফোর হেভি ওয়েইট।" },
            { "id": "3", "speaker": "Tanvir", "role": "A", "roleTitle": "Member / তানভীর", "en": "Sure! One... two... three... How does my depth look?", "bn": "অবশ্যই! এক... দুই... তিন... আমার বসার গভীরতা কেমন দেখাচ্ছে?", "ipa": "/ʃʊə wʌn tuː θriː haʊ dʌz maɪ depθ lʊk/", "bn_pron": "শুয়ার! ওয়ান... টু... থ্রি... হাউ ডাজ মাই ডেপথ লুক?" },
            { "id": "4", "speaker": "Alex", "role": "B", "roleTitle": "Coach / কোচ", "en": "Your depth is good, but your knees are caving inwards slightly. Keep your toes flared out at 30 degrees and drive your knees out.", "bn": "গভীরতা ঠিক আছে, তবে ওঠার সময় হাঁটু ভেতরের দিকে দুমড়ে যাচ্ছে। পায়ের পাতা ৩০ ডিগ্রিতে ছড়িয়ে হাঁটু বাইরের দিকে ঠেলো।", "ipa": "/jɔː depθ ɪz ɡʊd bʌt jɔː niːz ɑː ˈkeɪvɪŋ ˈɪnwədz ˈslaɪtli kiːp jɔː təʊz fleəd aʊt/", "bn_pron": "ইউর ডেপথ ইজ গুড, বাট ইউর নীজ আর কেইভিং ইনওয়ার্ডস স্লাইটলি।" },
            { "id": "5", "speaker": "Tanvir", "role": "A", "roleTitle": "Member / তানভীর", "en": "Let me adjust that... Like this? Wow, that engages my glutes and hamstrings so much better!", "bn": "আমি একটু ঠিক করে নিচ্ছি... এভাবে? ওয়াও, এবার তো থাই আর নিতম্বের পেশিতে অনেক বেশি চাপ লাগছে!", "ipa": "/let miː əˈdʒʌst ðæt laɪk ðɪs waʊ ðæt ɪnˈɡeɪdʒɪz maɪ ɡluːts ænd ˈhæmstrɪŋz səʊ mʌtʃ ˈbetə/", "bn_pron": "লেট মি অ্যাডজাস্ট দ্যাট... লাইক দিস? ওয়াও, দ্যাট এনগেইজেস মাই গ্লুটস বেটার!" },
            { "id": "6", "speaker": "Alex", "role": "B", "roleTitle": "Coach / কোচ", "en": "Bingo! That was a picture-perfect squat. Keep your core tight and chest upright throughout the movement.", "bn": "একদম নিখুঁত! এটা ছিল ছবির মতো পারফেক্ট স্কোয়াট। পুরো মুভমেন্টের সময় পেট শক্ত এবং বুক সোজা রাখবে।", "ipa": "/ˈbɪŋɡəʊ ðæt wɒz ə ˈpɪktʃə ˈpɜːfɪkt skwɒt kiːp jɔː kɔː taɪt ænd tʃest ˈʌpraɪt/", "bn_pron": "বিঙ্গো! দ্যাট ওয়াজ আ পিকচার-পারফেক্ট স্কোয়াট। কীপ ইউর কোর টাইট।" },
            { "id": "7", "speaker": "Tanvir", "role": "A", "roleTitle": "Member / তানভীর", "en": "How many sets and reps should I perform as a beginner building baseline strength?", "bn": "বেসিক শক্তি তৈরির জন্য একজন নতুন হিসেবে আমার কত সেট এবং কত রেপস দেওয়া উচিত?", "ipa": "/haʊ ˈmeni sets ænd reps ʃʊd aɪ pəˈfɔːm æz ə bɪˈɡɪnə ˈbɪldɪŋ ˈbeɪslaɪn streŋθ/", "bn_pron": "হাউ মেনি সেটস অ্যান্ড রেপস শুড আই পারফর্ম অ্যাজ আ বিগিনার?" },
            { "id": "8", "speaker": "Alex", "role": "B", "roleTitle": "Coach / কোচ", "en": "Aim for three sets of 8 to 10 reps with a controlled 2-second descent. Rest 90 seconds between sets.", "bn": "ধীরে ধীরে ২ সেকেন্ড ধরে নিচে নেমে ৮ থেকে ১০ রেপসের মোট ৩টি সেট দাও। প্রতি সেটের মাঝে ৯০ সেকেন্ড বিশ্রাম নেবে।", "ipa": "/eɪm fɔː θriː sets ɒv eɪt tuː ten reps wɪð ə kənˈtrəʊld tuː ˈsekənd dɪˈsent/", "bn_pron": "এইম ফর থ্রি সেটস অফ এইট টু টেন রেপস উইথ আ কন্ট্রোল্ড ডিসেন্ট।" },
            { "id": "9", "speaker": "Tanvir", "role": "A", "roleTitle": "Member / তানভীর", "en": "Could you also spot me on the bench press later once I rack on the weights?", "bn": "পরে যখন বেঞ্চ প্রেসে রডে ওজন তুলব, তখন কি আমাকে একটু পেছনে থেকে স্পট করে সাহায্য করবেন?", "ipa": "/kʊd juː ˈɔːlsəʊ spɒt miː ɒn ðə bentʃ pres ˈleɪtə wʌns aɪ ræk ɒn ðə weɪts/", "bn_pron": "কুড ইউ অলসো স্পট মি অন দ্য বেঞ্চ প্রেস লেইটার?" },
            { "id": "10", "speaker": "Alex", "role": "B", "roleTitle": "Coach / কোচ", "en": "Absolutely, just wave me over when you're ready to press. Consistency is key, Tanvir. Keep crushing it!", "bn": "অবশ্যই, প্রেস করার জন্য রেডি হলেই আমাকে হাত দিয়ে ইশারা দিয়ো। ধারাবাহিকতাই সাফল্যের চাবিকাঠি তানভীর। চালিয়ে যাও!", "ipa": "/ˌæbsəˈluːtli dʒʌst weɪv miː ˈəʊvə wen jɔː ˈredi tuː pres kənˈsɪstənsi ɪz kiː tænˈvɪə/", "bn_pron": "অ্যাবসলিউটলি, জাস্ট ওয়েইভ মি ওভার হোয়েন ইউর রেডি। কনসিস্টেন্সি ইজ কী!" }
        ],
        "followUps": [
            { "en": "What is the ideal post-workout protein intake window for recovery?", "bn": "মাংসপেশির ক্ষয়রোধ ও বৃদ্ধির জন্য ওয়ার্কআউটের পর প্রোটিন খাওয়ার সেরা সময় কখন?" },
            { "en": "How can I distinguish between normal muscle soreness and an actual tendon injury?", "bn": "স্বাভাবিক পেশির টান এবং লিগামেন্ট বা টেন্ডন ইনজুরির মধ্যে পার্থক্য কীভাবে বুঝব?" },
            { "en": "Do you provide a customized 3-day push-pull-legs workout split plan?", "bn": "আপনি কি সপ্তাহে ৩ দিনের পুশ-পুল-লেগস রুটিনের শিডিউল চার্ট দিয়ে থাকেন?" }
        ],
        "closers": [
            { "en": "Thank you Coach Alex! That form correction made an immediate difference.", "bn": "ধন্যবাদ কোচ অ্যালেক্স! আপনার এই শুধরে দেওয়া সাথে সাথেই দারুণ উপকার দিল।" },
            { "en": "Feeling pumped! See you by the bench press station.", "bn": "বেশ এনার্জেটিক লাগছে! বেঞ্চ প্রেস স্টেশনে দেখা হচ্ছে।" },
            { "en": "Have a great training day Coach, see you Wednesday!", "bn": "কোচ দিনটি চমৎকার কাটুক, বুধবারে আবার দেখা হবে!" }
        ],
        "nativePhrases": [
            { "phrase": "Spot me", "meaning": "ভারী ওজন তোলার সময় পেছনে সতর্ক থেকে নিরাপত্তা দেওয়া", "context": "জিমে সবচেয়ে কমন অনুরোধের বাক্য।" },
            { "phrase": "Crushing it", "meaning": "দুর্দান্তভাবে ও সফলতার সাথে কাজ করে চলা", "context": "কারো ওয়ার্কআউট পারফরম্যান্সে উৎসাহ দিতে।" },
            { "phrase": "No pain, no gain", "meaning": "কঠোর শারীরিক পরিশ্রম ও কষ্ট ছাড়া কাঙ্ক্ষিত সাফল্য আসে না", "context": "ফিটনেসের চিরন্তন মূলমন্ত্র।" }
        ]
    },

    # 35. Discussing Monthly Budget & Smart Investments
    {
        "id": "conv-35-discussing-monthly-budget-smart-investments",
        "number": 35,
        "title": "Discussing Monthly Budget & Smart Investments",
        "titleBn": "মাসিক বাজেট, সঞ্চয় ও অর্থনৈতিক স্বাধীনতা নিয়ে পরিকল্পনা",
        "level": "Intermediate",
        "category": "Daily Life",
        "imageUrl": "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=800&q=80",
        "sceneDescription": "মাসিক বেতন পাওয়ার পর ড্রয়িংরুমে বসে জীবনসঙ্গী বা বন্ধুর সাথে ৫০-৩০-২০ বাজেট রুল, ইমার্জেন্সি ফান্ড এবং ইনডেক্স ফান্ডে সঞ্চয় নিয়ে গঠনমূলক আলোচনা।",
        "briefing": {
            "setting": "ড্রয়িংরুমের প্ল্যানিং সেশন (Cozy Home Study Desk)",
            "roleA": { "name": "Planner", "titleBn": "অর্থপরিকল্পক (Imtiaz)", "descBn": "৫০-৩০-২০ নিয়ম মেনে ২০% সরাসরি সঞ্চয়ে রাখার প্রস্তাব দিচ্ছেন" },
            "roleB": { "name": "Partner", "titleBn": "পার্টনার বা বন্ধু (Samira)", "descBn": "দৈনন্দিন অপ্রয়োজনীয় সাবস্ক্রিপশন ও ফুড ডেলিভারি কমানোর প্ল্যান করছেন" },
            "overviewBn": "টাকা-পয়সা ও বাজেট নিয়ে কথা বলার সময় ইনকাম ও এক্সপেন্স (Income vs Expenses), জরুরি তহবিল (Emergency fund), এবং ভবিষ্যৎ বিনিয়োগ (Index funds / Savings) স্পষ্ট ইংরেজি পরিভাষায় প্রকাশ করা আধুনিক জীবনের অন্যতম দক্ষতা।",
            "politenessTips": [
                "শান্ত ও পজিটিভভাবে শুরু করুন: 'Let's take a look at our monthly cash flow to build our safety net.'",
                "অপ্রয়োজনীয় খরচ কমাতে বলুন: 'We spent $200 on dining out last month; we could cap that at $100.'",
                "ভবিষ্যতের লক্ষ্য তুলে ধরুন: 'Putting 20% into diversified funds will grant us true financial peace of mind.'"
            ],
            "keyVocabulary": [
                { "word": "Emergency fund", "meaning": "বিপদ-আপদের জন্য জমানো ৩-৬ মাসের খরচের তহবিল", "pron": "ইমার্জেন্সি ফান্ড" },
                { "word": "50-30-20 rule", "meaning": "৫০% প্রয়োজন, ৩০% শখ, ২০% সঞ্চয় করার বিশ্বখ্যাত বাজেট নিয়ম", "pron": "ফিফটি থার্টি টোয়েন্টি রুল" },
                { "word": "Compound interest", "meaning": "চক্রবৃদ্ধি মুনাফা বা সুদে-আসলে বৃদ্ধি পাওয়া লাভ", "pron": "কম্পাউন্ড ইন্টারেস্ট" },
                { "word": "Financial freedom", "meaning": "আর্থিক স্বাবলম্বিতা ও নিশ্চিন্ত ভবিষ্যৎ", "pron": "ফিন্যান্সিয়াল ফ্রিডম" }
            ]
        },
        "starters": [
            { "en": "Shall we review our monthly household budget spreadsheet this evening?", "bn": "আজ সন্ধ্যায় কি আমাদের মাসিক পারিবারিক খরচের স্প্রেডশিটটা একটু দেখতে পারি?", "tip": "বাজেট পর্যালোচনার মার্জিত সূচনা।" },
            { "en": "I was reading about the 50-30-20 budgeting framework, and it makes total financial sense.", "bn": "আমি ৫০-৩০-২০ বাজেটিং পদ্ধতি নিয়ে পড়ছিলাম, এটা আসলেই খুব যুক্তিযুক্ত মনে হলো।", "tip": "নতুন আর্থিক নিয়ম আলোচনার বাক্য।" },
            { "en": "How are we tracking against our target 6-month emergency fund savings goal?", "bn": "আমাদের ৬ মাসের জরুরি ফান্ডের লক্ষ্যের দিকে আমরা কতটা এগোতে পারলাম?", "tip": "সঞ্চয়ের অগ্রগতি জানার প্রশ্ন।" }
        ],
        "dialogue": [
            { "id": "1", "speaker": "Imtiaz", "role": "A", "roleTitle": "Imtiaz / ইমতিয়াজ", "en": "Samira, now that our monthly paychecks have arrived, let's review our household budget for next month.", "bn": "সামীরা, যেহেতু আমাদের দুজনের মাসিক বেতন অ্যাকাউন্টে ঢুকেছে, চলো সামনের মাসের পারিবারিক বাজেটটা একটু সাজাই।", "ipa": "/səˈmɪərə naʊ ðæt ˈaʊə ˈmʌnθli ˈpeɪtʃeks hæv əˈraɪvd lets rɪˈvjuː ˈaʊə ˈhaʊshəʊld ˈbʌdʒɪt/", "bn_pron": "সামীরা, নাও দ্যাট আওয়ার মান্থলি পেইচেকস হ্যাভ অ্যারাইভড, লেটস রিভিউ আওয়ার বাজেট।" },
            { "id": "2", "speaker": "Samira", "role": "B", "roleTitle": "Samira / সামীরা", "en": "Great idea. Looking at our bank statement, our food delivery and ride-sharing expenses spiked by 25% last month.", "bn": "দারুণ আইডিয়া। ব্যাংক স্টেটমেন্টে দেখলাম, গত মাসে আমাদের ফুড ডেলিভারি আর উবার রাইডের খরচ ২৫% বেড়ে গিয়েছিল।", "ipa": "/ɡreɪt aɪˈdɪə ˈlʊkɪŋ æt ˈaʊə bæŋk ˈsteɪtmənt ˈaʊə fuːd dɪˈlɪvəri ænd raɪd ˈʃeərɪŋ ɪkˈspensɪz spaɪkt/", "bn_pron": "গ্রেট আইডিয়া। আওয়ার ফুড ডেলিভারি অ্যান্ড রাইড শেয়ারিং এক্সপেন্সেস স্পাইকড।" },
            { "id": "3", "speaker": "Imtiaz", "role": "A", "roleTitle": "Imtiaz / ইমতিয়াজ", "en": "I noticed that too. What if we adopt the classic 50-30-20 budgeting principle starting this month?", "bn": "আমিও ওটা খেয়াল করেছি। এই মাস থেকে আমরা যদি বিখ্যাত ৫০-৩০-২০ বাজেটিং ফর্মুলা মেনে চলি কেমন হয়?", "ipa": "/aɪ ˈnəʊtɪst ðæt tuː wɒt ɪf wiː əˈdɒpt ðə ˈklæsɪk ˈfɪfti ˈθɜːti ˈtwenti ˈbʌdʒɪtɪŋ ˈprɪnsəpl/", "bn_pron": "আই নোটিসড দ্যাট টু। ওয়াট ইফ উই অ্যাডপ্ট দ্য ক্লাসিক ফিফটি থার্টি টোয়েন্টি প্রিন্সিপল?" },
            { "id": "4", "speaker": "Samira", "role": "B", "roleTitle": "Samira / সামীরা", "en": "How does that break down in practical numbers for us?", "bn": "বাস্তব সংখ্যার হিসেবে আমাদের খরচের বিভাজনটা কেমন হবে একটু বুঝিয়ে বলো তো?", "ipa": "/haʊ dʌz ðæt breɪk daʊn ɪn ˈpræktɪkl ˈnʌmbəz fɔːr ʌs/", "bn_pron": "হাউ ডাজ দ্যাট ব্রেক ডাউন ইন প্র্যাকটিক্যাল নাম্বার্স ফর আস?" },
            { "id": "5", "speaker": "Imtiaz", "role": "A", "roleTitle": "Imtiaz / ইমতিয়াজ", "en": "50% goes to essential needs like rent and groceries, 30% for discretionary wants, and a strict 20% directly into savings.", "bn": "৫০% যাবে বাড়িভাড়া ও নিত্যপ্রয়োজনীয় বাজার খরচে, ৩০% ব্যক্তিগত বিনোদন বা শখে, আর অবধারিত ২০% সরাসরি সঞ্চয়ে।", "ipa": "/ˈfɪfti pəˈsent ɡəʊz tuː ɪˈsenʃl niːdz laɪk rent ænd ˈɡrəʊsəriz ˈθɜːti pəˈsent fɔː dɪˈskreʃnri wɒnts/", "bn_pron": "ফিফটি পার্সেন্ট গোজ টু এসেনশিয়াল নিডস, থার্টি পার্সেন্ট ফর ওয়ান্টস, অ্যান্ড টুয়েন্টি পার্সেন্ট সেভিংস।" },
            { "id": "6", "speaker": "Samira", "role": "B", "roleTitle": "Samira / সামীরা", "en": "That makes a lot of sense. And should that 20% first build our six-month emergency fund?", "bn": "খুবই সুন্দর পরিকল্পনা। আর এই ২০% কি প্রথমে আমাদের ৬ মাসের জরুরি ফান্ডের লক্ষ্য পূরণ করবে?", "ipa": "/ðæt meɪks ə lɒt ɒv sens ænd ʃʊd ðæt ˈtwenti pəˈsent fɜːst bɪld ˈaʊə sɪks mʌnθ ɪˈmɜːdʒənsi fʌnd/", "bn_pron": "দ্যাট মেইকস আ লট অফ সেন্স। শুড দ্যাট টুয়েন্টি পার্সেন্ট ফার্স্ট বিল্ড আওয়ার ইমার্জেন্সি ফান্ড?" },
            { "id": "7", "speaker": "Imtiaz", "role": "A", "roleTitle": "Imtiaz / ইমতিয়াজ", "en": "Yes! Once we have six months of living expenses parked in a safe high-yield account, we can invest the rest in low-cost index funds.", "bn": "হ্যাঁ! হাই-ইন্টারেস্ট সেভিংস অ্যাকাউন্টে ৬ মাসের খরচ জমার পর, বাকিটা আমরা লো-কস্ট ইনডেক্স ফান্ডে দীর্ঘমেয়াদে ইনভেস্ট করব।", "ipa": "/jes wʌns wiː hæv sɪks mʌnθs ɒv ˈlɪvɪŋ ɪkˈspensɪz pɑːkt ɪn ə seɪf haɪ jiːld əˈkaʊnt/", "bn_pron": "ইয়েস! ওয়ান্স উই হ্যাভ সিক্স মান্থস লিভিং এক্সপেন্সেস পার্কড ইন আ সেইফ অ্যাকাউন্ট।" },
            { "id": "8", "speaker": "Samira", "role": "B", "roleTitle": "Samira / সামীরা", "en": "Index funds provide consistent compound growth over the long run without the stress of stock picking.", "bn": "শেয়ার বাজারের ঝুঁকি নেওয়ার মানসিক চাপ ছাড়াই দীর্ঘমেয়াদে ইনডেক্স ফান্ড চমৎকার চক্রবৃদ্ধি প্রবৃদ্ধি নিশ্চিত করে।", "ipa": "/ˈɪndeks fʌndz prəˈvaɪd kənˈsɪstənt ˈkɒmpaʊnd ɡrəʊθ ˈəʊvə ðə lɒŋ rʌn/", "bn_pron": "ইনডেক্স ফান্ডস প্রোভাইড কনসিস্টেন্ট কম্পাউন্ড গ্রোথ ওভার দ্য লং রান।" },
            { "id": "9", "speaker": "Imtiaz", "role": "A", "roleTitle": "Imtiaz / ইমতিয়াজ", "en": "Exactly. Let's set up an automated bank transfer on payday so we 'pay ourselves first' before spending.", "bn": "ঠিক তাই। বেতন পাওয়ার দিনেই চলো অটোমেটিক ব্যাংক ট্রান্সফার চালু করে দিই, যাতে খরচের আগেই সঞ্চয় নিশ্চিত হয়ে যায়।", "ipa": "/ɪɡˈzæktli lets set ʌp ən ˈɔːtəmeɪtɪd bæŋk trænsˈfɜːr ɒn ˈpeɪdeɪ səʊ wiː peɪ ˌaʊəˈselvz fɜːst/", "bn_pron": "এক্স্যাক্টলি। লেটস সেট আপ অ্যান অটোমেটেড ব্যাংক ট্রান্সফার অন পেইডেই।" },
            { "id": "10", "speaker": "Samira", "role": "B", "roleTitle": "Samira / সামীরা", "en": "Agreed! It feels wonderful knowing we are proactively taking control of our financial future.", "bn": "একমত! নিজেদের আর্থিক ভবিষ্যতের নিয়ন্ত্রণ সচেতনভাবে নিজেদের হাতে নিতে পেরে সত্যি দারুণ মানসিক স্বস্তি লাগছে।", "ipa": "/əˈɡriːd ɪt fiːlz ˈwʌndəfl ˈnəʊɪŋ wiː ɑː ˌprəʊˈæktɪvli ˈteɪkɪŋ kənˈtrəʊl ɒv ˈaʊə faɪˈnænʃl ˈfjuːtʃə/", "bn_pron": "এগ্রিড! ইট ফিলস ওয়ান্ডারফুল নোয়িং উই আর প্রোক্টিভলি টেকিং কন্ট্রোল অফ আওয়ার ফিউচার।" }
        ],
        "followUps": [
            { "en": "Should we cancel unused streaming subscriptions like Netflix or Spotify Family?", "bn": "অব্যবহৃত যেসব স্ট্রিমিং সাবস্ক্রিপশন আছে সেগুলো কি বাতিল করে দেওয়া উচিত?" },
            { "en": "What percentage of our portfolio should be allocated toward precious metals like gold?", "bn": "আমাদের পোর্টফোলিওর কত শতাংশ স্বর্ণের মতো মূল্যবান সম্পদে রাখা উচিত?" },
            { "en": "Let's review our budget monthly on the first Sunday of every month to stay accountable.", "bn": "জবাবদিহিতা বজায় রাখতে প্রতি মাসের প্রথম রবিবারে চলো আমরা বাজেট রিভিউ করি।" }
        ],
        "closers": [
            { "en": "I love that we're on the exact same page financially! Great teamwork.", "bn": "আর্থিক বিষয়ে আমরা দুজন একই পৃষ্ঠায় একমত থাকতে পেরেছি এতে আমি ভীষণ খুশি! দারুণ টিমওয়ার্ক।" },
            { "en": "Setting up the automated savings transfer right now on my phone. Done!", "bn": "মোবাইল ব্যাংকিং অ্যাপে অটোমেটেড ট্রান্সফার এইমাত্র সেট করে ফেললাম। ডান!" },
            { "en": "Here's to financial independence and stress-free living! Cheers.", "bn": "আর্থিক স্বাধীনতা ও দুশ্চিন্তাহীন জীবনের শুভকামনা রইল! শুভ রাত্রি।" }
        ],
        "nativePhrases": [
            { "phrase": "Pay yourself first", "meaning": "মাসিক খরচের টাকা অপচয় করার আগেই সঞ্চয়ের অংশ নিরাপদ তহবিলে আলাদা সরিয়ে রাখা", "context": "বুদ্ধিমানদের প্রধান অর্থনৈতিক সূত্র।" },
            { "phrase": "Rainy day fund", "meaning": "ভবিষ্যতে বিপদ বা অপ্রত্যাশিত সংকটের জন্য জমানো জরুরি টাকা", "context": "জরুরি তহবিল বিষয়ে।" },
            { "phrase": "Tighten our belts", "meaning": "বাজেটের ভারসাম্য বজায় রাখতে অপ্রয়োজনীয় বিলাসিতা কমিয়ে সংযমী হওয়া", "context": "ব্যয় সংকোচনের আলোচনায়।" }
        ]
    },

    # 36. Resolving a Workplace Misunderstanding Calmly
    {
        "id": "conv-36-resolving-a-workplace-misunderstanding-calmly",
        "number": 36,
        "title": "Resolving a Workplace Misunderstanding Calmly",
        "titleBn": "কর্মক্ষেত্রে সহকর্মীর সাথে ভুল বোঝাবুঝি শান্তভাবে মেটানো",
        "level": "Intermediate",
        "category": "Professional",
        "imageUrl": "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&w=800&q=80",
        "sceneDescription": "প্রজেক্টের কাজের ভাগ বা ক্লায়েন্ট ইমেইল নিয়ে সহকর্মীর সাথে ভুল বোঝাবুঝি বা টানাপোড়েন তৈরি হলে ওয়ান-অন-ওয়ান রুমে শান্তভাবে কথা বলে সমাধান করার দৃশ্যপট।",
        "briefing": {
            "setting": "প্রাইভেট মিটিং রুম (Private Meeting Pod)",
            "roleA": { "name": "Colleague A", "titleBn": "সহকর্মী A (Naveed)", "descBn": "মিসড কমিউনিকেশন নিয়ে শান্তভাবে খোলামেলা আলোচনা শুরু করছেন" },
            "roleB": { "name": "Colleague B", "titleBn": "সহকর্মী B (Zeeshan)", "descBn": "ভুল বুঝতে পেরে দুঃখ প্রকাশ করছেন ও স্ল্যাক মেসেজিংয়ে স্বচ্ছতার নিয়ম করছেন" },
            "overviewBn": "কর্মক্ষেত্রে ভুল বোঝাবুঝি হতেই পারে। কিন্তু রাগ না দেখিয়ে 'I noticed some tension between us regarding the client presentation, so I wanted to clear the air' বলে কথা বললে টিমওয়ার্ক ও সৌহার্দ্য রক্ষা পায়।",
            "politenessTips": [
                "অন্য সহকর্মীদের সামনে নয়, একান্তে ডেকে কথা বলুন: 'Hey Zeeshan, do you have a few minutes for a private chat in Pod 3?'",
                "দোষারোপ না করে নিজের অনুভূতি বলুন: 'I felt there was a slight disconnect about who was sending the final draft.'",
                "ভবিষ্যতের জন্য স্পষ্ট কর্মপন্থা ঠিক করুন: 'Going forward, let's tag each other explicitly on Slack before sending to client.'"
            ],
            "keyVocabulary": [
                { "word": "Clear the air", "meaning": "খোলামেলা কথা বলে ভুল বোঝাবুঝি বা ক্ষোভ দূর করা", "pron": "ক্লিয়ার দ্য এয়ার" },
                { "word": "Miscommunication / Disconnect", "meaning": "কথাবার্তা ও তথ্যের আদান-প্রদানে অসঙ্গতি", "pron": "মিসকমিউনিকেশন / ডিসকানেক্ট" },
                { "word": "Water under the bridge", "meaning": "অতীতের তিক্ততা ভুলে যা আর মনে রাখার মতো নয়", "pron": "ওয়াটার আন্ডার দ্য ব্রিজ" },
                { "word": "Keep each other in the loop", "meaning": "পরস্পরকে সব আপডেটে সর্বদা অবহিত রাখা", "pron": "কীপ ইচ আদার ইন দ্য লুপ" }
            ]
        },
        "starters": [
            { "en": "Hey Zeeshan, do you have five minutes to chat in private? I'd love to clear the air about yesterday's presentation.", "bn": "হেই জীশান, একটু একান্তে কথা বলার মতো ৫ মিনিট সময় হবে? গতকালের প্রেজেন্টেশন নিয়ে ভুল বোঝাবুঝিটা দূর করতে চাই।", "tip": "ভুল বোঝাবুঝি দূর করার সেরা সূচনা।" },
            { "en": "I sensed some friction between us during the client call, and I wanted to make sure we're on good terms.", "bn": "ক্লায়েন্ট কলের সময় আমাদের মধ্যে কিছুটা টানাপোড়েন মনে হলো, আমরা ঠিক আছি কি না তা নিশ্চিত করতে এসেছি।", "tip": "সম্পর্ক অটুট রাখার আন্তরিক বাক্য।" },
            { "en": "I value our working relationship immensely, so I wanted to address this directly rather than let it simmer.", "bn": "আমাদের কর্মসম্পর্ককে আমি ভীষণ মূল্যায়ন করি, তাই ভুল ধারণা পুষে না রেখে সরাসরি কথা বলতে চাই।", "tip": "পেশাদার দূরদর্শিতার রূপ।" }
        ],
        "dialogue": [
            { "id": "1", "speaker": "Naveed", "role": "A", "roleTitle": "Naveed / নাভীদ", "en": "Hey Zeeshan, thanks for stepping into this meeting room with me. I wanted to clear the air about yesterday's client pitch.", "bn": "হেই জীশান, আমার সাথে মিটিং রুমে আসার জন্য ধন্যবাদ। গতকালের ক্লায়েন্ট প্রেজেন্টেশনের ভুল বোঝাবুঝিটা একটু পরিষ্কার করতে চাই।", "ipa": "/heɪ ziːˈʃɑːn θæŋks fɔː ˈstepɪŋ ˈɪntuː ðɪs ˈmiːtɪŋ ruːm wɪð miː aɪ ˈwɒntɪd tuː klɪə ðə eə/", "bn_pron": "হেই জীশান, থ্যাংকস ফর স্টেপিং ইনটু দিস মিটিং রুম। আই ওয়ান্টেড টু ক্লিয়ার দ্য এয়ার।" },
            { "id": "2", "speaker": "Zeeshan", "role": "B", "roleTitle": "Zeeshan / জীশান", "en": "I appreciate you bringing it up, Naveed. Honestly, I felt caught off guard when you answered the pricing slide without briefing me.", "bn": "তুমি যে সরাসরি বিষয়টি তুলেছ তার জন্য আমি খুশি নাভীদ। সত্যি বলতে, আমাকে না জানিয়ে প্রাইসিং স্লাইডের উত্তর দেওয়ায় আমি অপ্রস্তুত হয়ে পড়েছিলাম।", "ipa": "/aɪ əˈpriːʃieɪt juː ˈbrɪŋɪŋ ɪt ʌp nəˈviːd ˈɒnɪstli aɪ felt kɔːt ɒf ɡɑːd wen juː ˈɑːnsəd ðə ˈpraɪsɪŋ slaɪd/", "bn_pron": "আই অ্যাপ্রিশিয়েট ইউ ব্রিংগিং ইট আপ নাভীদ। অনেস্টলি, আই ফেল্ট কট অফ গার্ড।" },
            { "id": "3", "speaker": "Naveed", "role": "A", "roleTitle": "Naveed / নাভীদ", "en": "I completely understand why that felt frustrating, and I sincerely apologize. It was never my intention to speak over you or undermine your role.", "bn": "তোমার খারাপ লাগার কারণটি আমি সম্পূর্ণ বুঝতে পারছি এবং আমি আন্তরিক দুঃখ প্রকাশ করছি। তোমাকে ডিঙিয়ে যাওয়া বা খাটো করার কোনো উদ্দেশ্য আমার ছিল না।", "ipa": "/aɪ kəmˈpliːtli ˌʌndəˈstænd waɪ ðæt felt ˈfrʌstreɪtɪŋ ænd aɪ sɪnˈsɪəli əˈpɒlədʒaɪz/", "bn_pron": "আই কমপ্লিটলি আন্ডারস্ট্যান্ড হোয়াই দ্যাট ফেল্ট ফ্রাস্ট্রেটিং, অ্যান্ড আই সিনসিয়ারলি অ্যাপোলোজাইজ।" },
            { "id": "4", "speaker": "Zeeshan", "role": "B", "roleTitle": "Zeeshan / জীশান", "en": "Thank you for saying that. The client looked directly at you, so from my seat it seemed like our preparation wasn't aligned.", "bn": "কথাটা বলার জন্য ধন্যবাদ। ক্লায়েন্ট সরাসরি তোমার দিকে তাকাচ্ছিল, তাই আমার মনে হচ্ছিল যেন আমাদের দুজনের পূর্বপ্রস্তুতিতে মিল ছিল না।", "ipa": "/θæŋk juː fɔː ˈseɪɪŋ ðæt ðə ˈklaɪənt lʊkt dɪˈrektli æt juː səʊ frəm maɪ siːt ɪt siːmd laɪk ˈaʊə/", "bn_pron": "থ্যাংক ইউ ফর সেইং দ্যাট। দ্য ক্লায়েন্ট লুকড ডিরেক্টলি অ্যাট ইউ।" },
            { "id": "5", "speaker": "Naveed", "role": "A", "roleTitle": "Naveed / নাভীদ", "en": "The client suddenly fired an unexpected discount question, and in the heat of the moment I reacted instinctively instead of passing the mic to you.", "bn": "ক্লায়েন্ট হঠাৎ ডিসকাউন্ট নিয়ে অপ্রত্যাশিত প্রশ্ন করায় ওই মুহূর্তের তাড়নায় তোমাকে সুযোগ না দিয়ে আমি নিজে স্বয়ংক্রিয়ভাবে উত্তর দিয়ে ফেলেছিলাম।", "ipa": "/ðə ˈklaɪənt ˈsʌdənli ˈfaɪəd ən ˌʌnɪkˈspektɪd ˈdɪskaʊnt ˈkwestʃən ænd ɪn ðə hiːt ɒv ðə ˈməʊmənt/", "bn_pron": "দ্য ক্লায়েন্ট সাডেনলি ফায়ার্ড অ্যান আনএক্সপেক্টেড ডিসকাউন্ট কোশ্চেন।" },
            { "id": "6", "speaker": "Zeeshan", "role": "B", "roleTitle": "Zeeshan / জীশান", "en": "I see. In high-stakes meetings, quick reactions happen. I could have also intervened more smoothly rather than going quiet.", "bn": "বুঝতে পেরেছি। বড় মিটিংয়ে এমন তাৎক্ষণিক প্রতিক্রিয়া হতেই পারে। মনমরা না থেকে আমিও আরও স্বাভাবিকভাবে কথাটি তুলে ধরতে পারতাম।", "ipa": "/aɪ siː ɪn haɪ steɪks ˈmiːtɪŋz kwɪk riˈækʃnz ˈhæpən aɪ kʊd hæv ˈɔːlsəʊ ˌɪntəˈviːnd mɔː ˈsmuːðli/", "bn_pron": "আই সি। ইন হাই-স্টেকস মিটিংস, কুইক রিঅ্যাকশনস হ্যাপেন।" },
            { "id": "7", "speaker": "Naveed", "role": "A", "roleTitle": "Naveed / নাভীদ", "en": "How can we structure future meetings so we operate as a completely unified, bulletproof tag-team?", "bn": "ভবিষ্যতের মিটিংগুলোতে আমরা কীভাবে প্রস্তুত থাকতে পারি যাতে আমরা দুজন নিখুঁত ও চমৎকার টিম হিসেবে পারফর্ম করতে পারি?", "ipa": "/haʊ kæn wiː ˈstrʌktʃə ˈfjuːtʃə ˈmiːtɪŋz səʊ wiː ˈɒpəreɪt æz ə kəmˈpliːtli ˈjuːnɪfaɪd ˈbʊlɪtpruːf tæɡ tiːm/", "bn_pron": "হাউ ক্যান উই স্ট্রাকচার ফিউচার মিটিংস সো উই অপারেট অ্যাজ আ ইউনিফাইড ট্যাগ-টিম?" },
            { "id": "8", "speaker": "Zeeshan", "role": "B", "roleTitle": "Zeeshan / জীশান", "en": "Let's do a 10-minute role demarcation dry-run before every pitch: I'll lead commercials, you lead product architecture.", "bn": "প্রতিটি প্রেজেন্টেশনের আগে চলো ১০ মিনিটের রিহার্সাল করি: আমি কমার্শিয়াল দিক সামলাব, তুমি টেকনিক্যাল আর্কিটেকচার সামলাবে।", "ipa": "/lets duː ə ten ˈmɪnɪt rəʊl ˌdiːmɑːˈkeɪʃn draɪ rʌn bɪˈfɔːr ˈevri pɪtʃ aɪl liːd kəˈmɜːʃlz/", "bn_pron": "লেটস ডু আ টেন মিনিট ড্রাই-রান বিফোর এভরি পিচ। আইল লিড কমার্শিয়ালস।" },
            { "id": "9", "speaker": "Naveed", "role": "A", "roleTitle": "Naveed / নাভীদ", "en": "That's a brilliant protocol! I really value collaborating with you, Zeeshan, and I'm so glad we spoke directly.", "bn": "চমৎকার নিয়ম! তোমার সাথে পার্টনারশিপে কাজ করাকে আমি খুব মূল্যায়ন করি জীশান, আর সরাসরি কথা বলতে পেরে দারুণ স্বস্তি লাগছে।", "ipa": "/ðæts ə ˈbrɪljənt ˈprəʊtəkɒl aɪ ˈrɪəli ˈvæljuː kəˈlæbəreɪtɪŋ wɪð juː ziːˈʃɑːn/", "bn_pron": "দ্যাটস আ ব্রিলিয়ান্ট প্রোটোকল! আই রিয়ালি ভ্যালু কোলাবোরেটিং উইথ ইউ জীশান।" },
            { "id": "10", "speaker": "Zeeshan", "role": "B", "roleTitle": "Zeeshan / জীশান", "en": "Likewise, Naveed. It's completely water under the bridge now. Let's go win that client deal together!", "bn": "আমারও একই অনুভূতি নাভীদ। পেছনের ভুলত্রুটি সব অতীত হয়ে গেছে। চলো একসাথে ক্লায়েন্টের এই বড় কাজটা জিতে নিই!", "ipa": "/ˈlaɪkwaɪz nəˈviːd ɪts kəmˈpliːtli ˈwɔːtər ˈʌndə ðə brɪdʒ naʊ lets ɡəʊ wɪn ðæt ˈklaɪənt diːl təˈɡeðə/", "bn_pron": "লাইকওয়াইজ নাভীদ। ইটস কমপ্লিটলি ওয়াটার আন্ডার দ্য ব্রিজ নাও। লেটস গো উইন দ্যাট ডিল!" }
        ],
        "followUps": [
            { "en": "Shall we grab lunch together today to celebrate our renewed team alignment?", "bn": "আমাদের পারস্পরিক বোঝাপড়া সুন্দরভাবে সমাধানের খুশিতে আজ দুপুরে একসাথে লাঞ্চ করব?" },
            { "en": "Could we create a shared bullet-point document for next Tuesday's follow-up presentation?", "bn": "পরবর্তী মঙ্গলবারের প্রেজেন্টেশনের জন্য কি আমরা শেয়ার্ড ডকুমেন্টে দায়িত্ব ভাগ করে রাখতে পারি?" },
            { "en": "Would you like me to send an email clarifying the pricing schedule to the client today?", "bn": "প্রাইসিংয়ের বিষয়টি পরিষ্কার করে ক্লায়েন্টকে আজ কি আমার তরফ থেকে একটি ইমেইল দেওয়া উচিত?" }
        ],
        "closers": [
            { "en": "Thank you for hearing me out with such maturity Zeeshan. Much respected!", "bn": "এত পরিপক্বতার সাথে আমার কথা শোনার জন্য ধন্যবাদ জীশান। অনেক শ্রদ্ধা রইল!" },
            { "en": "Glad we got this sorted out swiftly. Back to crushing our goals!", "bn": "খুব দ্রুত বিষয়টি মিটিয়ে ফেলতে পেরে ভালো লাগল। চলো কাজে মনোযোগ দিই!" },
            { "en": "High five buddy, let's close this contract! See you outside.", "bn": "হাই ফাইভ দোস্ত, চলো এই চুক্তিটা পাকা করি! বাইরে দেখা হচ্ছে।" }
        ],
        "nativePhrases": [
            { "phrase": "Clear the air", "meaning": "খোলামেলা কথা বলে ভুল বোঝাবুঝি বা মনের দ্বিধা দূর করা", "context": "সম্পর্ক ভালো রাখার সেরা ফ্রেজ।" },
            { "phrase": "Water under the bridge", "meaning": "অতীতের ঘটনা যা ভুলে যাওয়া হয়েছে এবং যার আর কোনো ক্ষতিকর প্রভাব নেই", "context": "ক্ষমা ও সম্প্রীতির ক্ষেত্রে।" },
            { "phrase": "Caught off guard", "meaning": "কোনো আচমকা ঘটনায় হতচকিত বা অপ্রস্তুত হয়ে পড়া", "context": "হঠাৎ অপ্রস্তুত হওয়ার অনুভূতি প্রকাশে।" }
        ]
    },

    # 37. Discussing a Salary Raise with Manager
    {
        "id": "conv-37-discussing-a-salary-raise-with-manager",
        "number": 37,
        "title": "Discussing a Salary Raise with Manager",
        "titleBn": "ম্যানেজারের সাথে পারফরম্যান্স ও বেতন বৃদ্ধির সেশন",
        "level": "Intermediate",
        "category": "Professional",
        "imageUrl": "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
        "sceneDescription": "বাৎসরিক পারফরম্যান্স রিভিউতে নিজের কাজের অর্জন, অতিরিক্ত দায়িত্ব এবং মার্কেট ডেটা তুলে ধরে ম্যানেজারের সাথে সম্মানজনকভাবে বেতন সমন্বয়ের আলোচনা।",
        "briefing": {
            "setting": "ম্যানেজারের কনফারেন্স রুম (One-on-One Appraisal Room)",
            "roleA": { "name": "Employee", "titleBn": "কর্মী (Shakil)", "descBn": "বিগত এক বছরের টার্গেট ছাড়িয়ে যাওয়া অর্জন ও ১৫% বেতন বৃদ্ধির প্রস্তাব দিচ্ছেন" },
            "roleB": { "name": "Manager", "titleBn": "ডিপার্টমেন্ট ম্যানেজার (Mr. Harris)", "descBn": "কাজের প্রশংসা করে এইচআরের সাথে সমন্বয়ের আশ্বাস দিচ্ছেন" },
            "overviewBn": "বেতন বৃদ্ধির কথা তোলার সময় আবেগের বশে কথা না বলে তথ্য ও প্রমাণের ওপর জোর দেওয়া (I exceeded our annual KPIs by 20%), দায়িত্ব বৃদ্ধি উল্লেখ করা (Taking on junior mentorship), এবং সম্মানজনক পার্সেন্টেজ চাওয়া পেশাদারিত্বের পরিচায়ক।",
            "politenessTips": [
                "শুরুতেই বর্তমান সুযোগের প্রশংসা করুন: 'Thank you for making time today Mr. Harris. I really enjoy contributing to this team.'",
                "তথ্য-উপাত্ত দিয়ে অর্জন তুলে ধরুন: 'Over the past 12 months, my initiatives increased team output by 25%.'",
                "নির্দিষ্ট সমন্বয়ের প্রস্তাব করুন: 'Given my expanded scope, I would like to request a 15% salary adjustment.'"
            ],
            "keyVocabulary": [
                { "word": "Compensation adjustment", "meaning": "বেতন ও আর্থিক সুবিধার ন্যায্য সমন্বয়", "pron": "কম্পেনসেশন অ্যাডজাস্টমেন্ট" },
                { "word": "Merit-based raise", "meaning": "যোগ্যতা ও অসাধারণ কাজের অর্জনের ভিত্তিতে বেতন বৃদ্ধি", "pron": "মেরিট-বেইসড রেইয" },
                { "word": "Key Performance Indicators (KPIs)", "meaning": "কাজের মূল পারফরম্যান্স সূচক", "pron": "কেপিআই" },
                { "word": "Market rate benchmark", "meaning": "ইন্ডাস্ট্রিতে সমমানের পদে বাজারমূল্যের গড় বেতন", "pron": "মার্কেট রেইট বেঞ্চমার্ক" }
            ]
        },
        "starters": [
            { "en": "Good afternoon Mr. Harris, thank you for scheduling this one-on-one performance review.", "bn": "শুভ অপরাহ্ন হ্যারিস সাহেব, এই ওয়ান-অন-ওয়ান পারফরম্যান্স রিভিউ সেশন দেওয়ার জন্য ধন্যবাদ।", "tip": "মূল্যায়নের আনুষ্ঠানিক সূচনা বাক্য।" },
            { "en": "I'd love to review my accomplishments over the past year and discuss my current compensation.", "bn": "বিগত বছরে আমার কাজের অর্জনগুলো পর্যালোচনা করতে এবং বর্তমান বেতন নিয়ে একটু আলোচনা করতে চাই।", "tip": "বেতনের আলোচনার স্পষ্ট সূচনা।" },
            { "en": "Over the past 12 months, my responsibilities have grown significantly, which brings me to today's topic.", "bn": "গত ১২ মাসে আমার কাজের দায়িত্ব লক্ষণীয়ভাবে বেড়েছে, যা আমাকে আজকের বিষয়ে কথা বলতে উৎসাহিত করেছে।", "tip": "দায়িত্ব বৃদ্ধির প্রেক্ষাপট তুলে ধরা।" }
        ],
        "dialogue": [
            { "id": "1", "speaker": "Shakil", "role": "A", "roleTitle": "Shakil / শাকিল", "en": "Good afternoon Mr. Harris. Thank you for setting aside time for our annual performance and compensation review.", "bn": "শুভ অপরাহ্ন হ্যারিস সাহেব। আমাদের বাৎসরিক পারফরম্যান্স ও বেতন পর্যালোচনার জন্য সময় দেওয়ায় ধন্যবাদ।", "ipa": "/ɡʊd ˌɑːftəˈnuːn ˈmɪstə ˈhærɪs θæŋk juː fɔː ˈsetɪŋ əˈsaɪd taɪm fɔːr ˈaʊər ˈænjuəl pəˈfɔːməns/", "bn_pron": "গুড আফটারনুন মিস্টার হ্যারিস। থ্যাংক ইউ ফর সেটিং অ্যাসাইড টাইম ফর আওয়ার অ্যানুয়াল পারফরম্যান্স।" },
            { "id": "2", "speaker": "Mr. Harris", "role": "B", "roleTitle": "Manager / হ্যারিস", "en": "Good afternoon Shakil. You've had a standout year, so I'm very eager to hear your thoughts.", "bn": "শুভ অপরাহ্ন শাকিল। এই বছর তোমার কাজ ছিল অসাধারণ, তাই তোমার ভাবনাগুলো শুনতে আমি খুব আগ্রহী।", "ipa": "/ɡʊd ˌɑːftəˈnuːn ʃəˈkiːl juːv hæd ə ˈstændaʊt jɪə səʊ aɪm ˈveri ˈiːɡə tuː hɪə jɔː θɔːts/", "bn_pron": "গুড আফটারনুন শাকিল। ইউভ হ্যাড আ স্ট্যান্ডআউট ইয়ার। আইম ইগার টু হিয়ার ইউর থটস।" },
            { "id": "3", "speaker": "Shakil", "role": "A", "roleTitle": "Shakil / শাকিল", "en": "Over the past 12 months, I successfully spearheaded three major software migrations and exceeded our performance KPIs by 20%.", "bn": "গত ১২ মাসে আমি সফলভাবে তিনটি বড় সফটওয়্যার মাইগ্রেশন পরিচালনা করেছি এবং আমাদের নির্ধারিত কেপিআই ২০% বেশি অর্জন করেছি।", "ipa": "/ˈəʊvə ðə pɑːst twelv mʌnθs aɪ səkˈsesfəli ˈspɪəhedɪd θriː ˈmeɪdʒə ˈsɒftweə maɪˈɡreɪʃnz/", "bn_pron": "ওভার দ্য পাস্ট টুয়েলভ মান্থস, আই সাকসেসফুলি স্পিয়ারহেডেড থ্রি মেজর সফটওয়্যার মাইগ্রেশনস।" },
            { "id": "4", "speaker": "Mr. Harris", "role": "B", "roleTitle": "Manager / হ্যারিস", "en": "The leadership team took notice of that. You've stepped up as a natural mentor to the junior developers as well.", "bn": "লিডারশিপ টিম সেটা বিশেষভাবে খেয়াল করেছে। তুমি একই সাথে জুনিয়র ডেভেলপারদের মেন্টর হিসেবেও চমৎকার ভূমিকা রেখেছো।", "ipa": "/ðə ˈliːdəʃɪp tiːm tʊk ˈnəʊtɪs ɒv ðæt juːv stept ʌp æz ə ˈnætʃrəl ˈmentɔː tuː ðə ˈdʒuːnjə dɪˈveləpəz/", "bn_pron": "দ্য লিডারশিপ টিম টুক নোটিস অফ দ্যাট। ইউভ স্টেপড আপ অ্যাজ আ মেন্টর টু জুনিয়রস।" },
            { "id": "5", "speaker": "Shakil", "role": "A", "roleTitle": "Shakil / শাকিল", "en": "Given this expanded scope and market benchmarks for Senior Engineers in our sector, I'd like to request a 15% salary adjustment.", "bn": "আমার এই বর্ধিত কাজের পরিধি এবং ইন্ডাস্ট্রির সিনিয়র ইঞ্জিনিয়ারদের বেতনের মানদণ্ড বিবেচনা করে, আমি ১৫% বেতন বৃদ্ধির অনুরোধ জানাতে চাই।", "ipa": "/ˈɡɪvn ðɪs ɪkˈspændɪd skəʊp ænd ˈmɑːkɪt ˈbentʃmɑːks fɔː ˈsiːniər ˌendʒɪˈnɪəz ɪn ˈaʊə ˈsektə/", "bn_pron": "গিভেন দিস এক্সপ্যান্ডেড স্কোপ অ্যান্ড মার্কেট বেঞ্চমার্কস, আইড লাইক টু রিকোয়েস্ট আ ফিফটিন পার্সেন্ট অ্যাডজাস্টমেন্ট।" },
            { "id": "6", "speaker": "Mr. Harris", "role": "B", "roleTitle": "Manager / হ্যারিস", "en": "15% is a meaningful jump, but your measurable impact and retention value undeniably warrant serious consideration.", "bn": "১৫% বেশ বড় একটি বৃদ্ধি, তবে তোমার পরিমাপযোগ্য সাফল্য এবং টিমে ধরে রাখার গুরুত্ব বিবেচনা করলে এটি নিশ্চিতভাবেই পাওয়ার দাবি রাখে।", "ipa": "/ˌfɪfˈtiːn pəˈsent ɪz ə ˈmiːnɪŋfl dʒʌmp bʌt jɔː ˈmeʒərəbl ˈɪmpækt ænd rɪˈtenʃn ˈvæljuː/", "bn_pron": "ফিফটিন পার্সেন্ট ইজ আ মিনিংফুল জাম্প, বাট ইউর মেযারেবল ইমপ্যাক্ট ওয়ারেন্টস সিরিয়াস কনসিডারেশন।" },
            { "id": "7", "speaker": "Shakil", "role": "A", "roleTitle": "Shakil / শাকিল", "en": "I've compiled a one-page summary highlighting the cost savings and client retention figures from my projects for your review.", "bn": "আপনার মূল্যায়নের সুবিধার জন্য আমার প্রজেক্টগুলো থেকে আসা খরচ সাশ্রয় ও ক্লায়েন্ট ধরে রাখার হিসাবের এক পাতার একটি সামারি এনেছি।", "ipa": "/aɪv kəmˈpaɪld ə wʌn peɪdʒ ˈsʌməri ˈhaɪlaɪtɪŋ ðə kɒst ˈseɪvɪŋz ænd ˈklaɪənt rɪˈtenʃn ˈfɪɡəz/", "bn_pron": "আইভ কম্পাইল্ড আ ওয়ান পেইজ সামারি হাইলাইটিং দ্য কস্ট সেভিংস অ্যান্ড ক্লায়েন্ট রিটেনশন।" },
            { "id": "8", "speaker": "Mr. Harris", "role": "B", "roleTitle": "Manager / হ্যারিস", "en": "This data-driven documentation makes my pitch to the executive finance committee much easier. I really appreciate your preparation.", "bn": "ডেটা সহকারে এই ডকুমেন্টেশন ফিন্যান্স কমিটির কাছে তোমার প্রস্তাব উপস্থাপন করা আমার জন্য অনেক সহজ করে দিল। তোমার প্রস্তুতির প্রশংসা করছি।", "ipa": "/ðɪs ˈdeɪtə ˈdrɪvn ˌdɒkjumenˈteɪʃn meɪks maɪ pɪtʃ tuː ðɪ ɪɡˈzekjətɪv faɪˈnæns kəˈmɪti mʌtʃ ˈiːziə/", "bn_pron": "দিস ডেইটা ড্রিভেন ডকুমেন্টেশন মেইকস মাই পিচ টু ফিন্যান্স কমিটি মাচ ইজিয়ার।" },
            { "id": "9", "speaker": "Shakil", "role": "A", "roleTitle": "Shakil / শাকিল", "en": "I'm deeply committed to this company's long-term vision, and I want to ensure my compensation reflects that shared commitment.", "bn": "আমি এই কোম্পানির দীর্ঘমেয়াদী লক্ষ্যের প্রতি গভীরভাবে প্রতিশ্রুতিবদ্ধ, এবং আমি চাই আমার পারিশ্রমিক সেই প্রতিশ্রুতির প্রতিফলন ঘটাবে।", "ipa": "/aɪm ˈdiːpli kəˈmɪtɪd tuː ðɪs ˈkʌmpəniz lɒŋ tɜːm ˈvɪʒn ænd aɪ wɒnt tuː ɪnˈʃʊə maɪ ˌkɒmpenˈseɪʃn/", "bn_pron": "আইম ডিপলি কমিটেড টু দিস কোম্পানিস লং টার্ম ভিশন, অ্যান্ড আই ওয়ান্ট মাই কম্পেনসেশন টু রিফ্লেক্ট দ্যাট।" },
            { "id": "10", "speaker": "Mr. Harris", "role": "B", "roleTitle": "Manager / হ্যারিস", "en": "I will submit this proposal with my strongest recommendation today. Expect official HR confirmation by Friday!", "bn": "আমি আজই আমার জোরালো সুপারিশ সহ এই প্রস্তাব জমা দিচ্ছি। আশা করছি শুক্রবারের মধ্যেই এইচআরের অফিসিয়াল চিঠি পেয়ে যাবে!", "ipa": "/aɪ wɪl səbˈmɪt ðɪs prəˈpəʊzl wɪð maɪ ˈstrɒŋɡɪst ˌrekəmenˈdeɪʃn təˈdeɪ ɪkˈspekt əˈfɪʃl eɪtʃ ɑː ˌkɒnfəˈmeɪʃn/", "bn_pron": "আই উইল সাবমিট দিস প্রপোজাল উইথ মাই স্ট্রংগেস্ট রেকমেন্ডেশন টুডেই। এক্সপেক্ট কনফার্মেশন বাই ফ্রাইডে!" }
        ],
        "followUps": [
            { "en": "Will this merit adjustment take effect starting from the upcoming month's payroll cycle?", "bn": "এই বেতন বৃদ্ধি কি সামনের মাসের পে-রোল সাইকেল থেকেই কার্যকর হবে?" },
            { "en": "Does this adjustment also influence my annual bonus eligibility tier?", "bn": "এই সমন্বয়ের সাথে কি আমার বাৎসরিক বোনাস পাওয়ার স্তরও বৃদ্ধি পাবে?" },
            { "en": "Are there additional leadership certifications the company would sponsor for my growth?", "bn": "আমার উন্নতির জন্য কোম্পানি কি কোনো অ্যাডভান্সড লিডারশিপ সার্টিফিকেশনের খরচ বহন করবে?" }
        ],
        "closers": [
            { "en": "Thank you so much Mr. Harris! I truly appreciate your advocacy and leadership.", "bn": "অনেক অনেক ধন্যবাদ হ্যারিস সাহেব! আমার পক্ষে সুপারিশ এবং আপনার চমৎকার নেতৃত্বের জন্য সত্যি কৃতজ্ঞ।" },
            { "en": "I look forward to hearing back from HR. Have a productive afternoon!", "bn": "এইচআরের চিঠির অপেক্ষায় রইলাম। আপনার দিনটি সুন্দর ও সফল হোক!" },
            { "en": "Thank you for the productive discussion. Goodbye!", "bn": "ফলপ্রসূ এই আলোচনার জন্য ধন্যবাদ। বিদায়!" }
        ],
        "nativePhrases": [
            { "phrase": "Data-driven", "meaning": "অনুমান নয়, সুনির্দিষ্ট তথ্য ও পরিসংখ্যানের ওপর প্রতিষ্ঠিত", "context": "অর্জনের প্রমাণ দিতে।" },
            { "phrase": "Step up", "meaning": "প্রয়োজনে অতিরিক্ত দায়িত্ব কাঁধে নিয়ে বড় ভূমিকা পালন করা", "context": "কাজের প্রশংসায়।" },
            { "phrase": "Standout year", "meaning": "অসাধারণ সাফল্যময় ও স্মরণীয় একটি বছর", "context": "বার্ষিক মূল্যায়নে।" }
        ]
    },

    # 38. Emergency: Reporting Lost Bag to Police
    {
        "id": "conv-38-emergency-reporting-lost-bag-to-police",
        "number": 38,
        "title": "Emergency: Reporting Lost Bag to Police",
        "titleBn": "জরুরি অবস্থায় পুলিশ স্টেশনে হারানো বা চুরির রিপোর্ট করা",
        "level": "Intermediate",
        "category": "Services",
        "imageUrl": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
        "sceneDescription": "বিদেশে সাবওয়ে স্টেশনে ব্যাগ বা পাসপোর্ট চুরি হলে পুলিশ স্টেশনে গিয়ে শান্তভাবে ঘটনার সময়, স্থান ও বিবরণ দিয়ে অফিসিয়াল পুলিশ রিপোর্ট বা এফআইআর করার কথপোকথন।",
        "briefing": {
            "setting": "পুলিশ স্টেশন ফ্রন্ট ডেস্ক (Police Station Incident Desk)",
            "roleA": { "name": "Victim", "titleBn": "ভুক্তভোগী পর্যটক (Tourist / Arif)", "descBn": "মেট্রো স্টেশনে পাসপোর্ট ও ওয়ালেট সহ ব্যাগ চুরির রিপোর্ট করছেন" },
            "roleB": { "name": "Police Officer", "titleBn": "পুলিশ অফিসার (Officer Miller)", "descBn": "বিবরণ লিখে সিসিটিভি ফুটেজ চেক করছেন ও পুলিশ কেস রিপোর্ট দিচ্ছেন" },
            "overviewBn": "বিদেশে কোনো জিনিস চুরি বা হারালে তাৎক্ষণিক পুলিশ রিপোর্ট (Police report / Crime reference number) নেওয়া অত্যন্ত জরুরি। কারণ নতুন পাসপোর্ট ইস্যু এবং ট্রাভেল ইন্স্যুরেন্স ক্লেইম করতে এই পুলিশ রিপোর্টটি বাধ্যতামূলক।",
            "politenessTips": [
                "উদ্বিগ্ন হলেও সময় ও স্থান স্পষ্টভাবে বলুন: 'My handbag was stolen at Central Station platform 3 around 4:15 PM.'",
                "ভেতরের জিনিসের তালিকা গুছিয়ে দিন: 'Inside there was my passport, $300 cash, and an iPhone 14.'",
                "ইনস্যুরেন্সের জন্য লিখিত রিপোর্ট নিন: 'Could I please get an official stamped police report copy for my embassy and insurance?'"
            ],
            "keyVocabulary": [
                { "word": "Police incident report", "meaning": "পুলিশের অফিসিয়াল তদন্ত ও ঘটনা বিবরণী রিপোর্ট", "pron": "পুলিশ ইনসিডেন্ট রিপোর্ট" },
                { "word": "Crime reference number", "meaning": "পুলিশ কেসের ট্র্যাকিং রেফারেন্স নম্বর", "pron": "ক্রাইম রেফারেন্স নাম্বার" },
                { "word": "Embassy replacement", "meaning": "দূতাবাস থেকে জরুরি বিকল্প ট্রাভেল পাস বা পাসপোর্ট", "pron": "অ্যাম্বাসি রিপ্লেসমেন্ট" },
                { "word": "CCTV surveillance footage", "meaning": "সিসিটিভি ক্যামেরার নজরদারি ভিডিও", "pron": "সিসিটিভি সার্ভেইল্যান্স ফুটেজ" }
            ]
        },
        "starters": [
            { "en": "Good afternoon officer, I need to urgently report a theft that occurred 30 minutes ago.", "bn": "শুভ অপরাহ্ন অফিসার, ৩০ মিনিট আগে ঘটা একটি চুরির ঘটনার বিষয়ে জরুরি রিপোর্ট করতে এসেছি।", "tip": "পুলিশ স্টেশনে জরুরি সূচনা বাক্য।" },
            { "en": "Hello officer, my handbag containing my passport and wallet was snatched at the metro entrance.", "bn": "হ্যালো অফিসার, মেট্রোর গেটে আমার পাসপোর্ট ও ওয়ালেট সহ ব্যাগটি ছিনতাই হয়েছে।", "tip": "সরাসরি ছিনতাইয়ের ঘটনা বর্ণনার বাক্য।" },
            { "en": "I need to file an official police lost report for my embassy passport emergency reissue.", "bn": "দূতাবাস থেকে জরুরি পাসপোর্ট উত্তোলনের জন্য আমার একটি অফিসিয়াল পুলিশ রিপোর্ট দরকার।", "tip": "রিপোর্টের প্রয়োজনীয়তা জানানোর বাক্য।" }
        ],
        "dialogue": [
            { "id": "1", "speaker": "Arif", "role": "A", "roleTitle": "Tourist / আরিফ", "en": "Good afternoon officer. I need to report a theft. My backpack was stolen at Central Subway Station about 30 minutes ago.", "bn": "শুভ অপরাহ্ন অফিসার। আমি চুরির রিপোর্ট করতে এসেছি। প্রায় ৩০ মিনিট আগে সেন্ট্রাল সাবওয়ে স্টেশনে আমার ব্যাকপ্যাক চুরি হয়েছে।", "ipa": "/ɡʊd ˌɑːftəˈnuːn ˈɒfɪsə aɪ niːd tuː rɪˈpɔːt ə θeft maɪ ˈbækpæk wɒz ˈstəʊlən æt ˈsentrəl ˈsʌbweɪ ˈsteɪʃn/", "bn_pron": "গুড আফটারনুন অফিসার। আই নিড টু রিপোর্ট আ থেফট। মাই ব্যাকপ্যাক ওয়াজ স্টোলেন।" },
            { "id": "2", "speaker": "Officer Miller", "role": "B", "roleTitle": "Police / মিলার", "en": "Please take a seat and take a deep breath. Are you physically hurt in any way?", "bn": "দয়া করে বসুন এবং একটি গভীর শ্বাস নিন। আপনি শারীরিকভাবে কোথাও আঘাত পাননি তো?", "ipa": "/pliːz teɪk ə siːt ænd teɪk ə diːp breθ ɑː juː ˈfɪzɪkli hɜːt ɪn ˈeni weɪ/", "bn_pron": "প্লীয টেক আ সিট অ্যান্ড টেক আ ডিপ ব্রেথ। আর ইউ ফিজিক্যালি হার্ট?" },
            { "id": "3", "speaker": "Arif", "role": "A", "roleTitle": "Tourist / আরিফ", "en": "No, I'm not hurt, but I'm in shock. The bag contained my passport, my flight tickets, and my wallet.", "bn": "না, শরীরে আঘাত লাগেনি, তবে আমি খুব মানসিক শকে আছি। ব্যাগের ভেতর আমার পাসপোর্ট, বিমানের টিকিট আর মানিব্যাগ ছিল।", "ipa": "/nəʊ aɪm nɒt hɜːt bʌt aɪm ɪn ʃɒk ðə bæɡ kənˈteɪnd maɪ ˈpɑːspɔːt maɪ flaɪt ˈtɪkɪts ænd maɪ ˈwɒlɪt/", "bn_pron": "নো, আইম নট হার্ট, বাট আইম ইন শক। দ্য ব্যাগ কন্টেইন্ড মাই পাসপোর্ট।" },
            { "id": "4", "speaker": "Officer Miller", "role": "B", "roleTitle": "Police / মিলার", "en": "Can you describe the location and what happened exactly?", "bn": "ঘটনাস্থল এবং ঠিক কী ঘটেছিল একটু বিস্তারিত বর্ণনা করতে পারবেন?", "ipa": "/kæn juː dɪˈskraɪb ðə ləʊˈkeɪʃn ænd wɒt ˈhæpənd ɪɡˈzæktli/", "bn_pron": "ক্যান ইউ ডেসক্রাইব দ্য লোকেশন অ্যান্ড ওয়াট হ্যাপেনড এক্স্যাক্টলি?" },
            { "id": "5", "speaker": "Arif", "role": "A", "roleTitle": "Tourist / আরিফ", "en": "I was purchasing an express metro ticket at Kiosk 3 on Platform 2. I set my bag between my feet, and when I looked down after printing, it was gone.", "bn": "আমি ২ নম্বর প্ল্যাটফর্মের ৩ নম্বর কিয়স্কে মেট্রো টিকিট কাটছিলাম। পায়ের মাঝে ব্যাগটি রেখেছিলাম, টিকিট বের হওয়ার পর নিচে তাকিয়ে দেখি ব্যাগ নেই।", "ipa": "/aɪ wɒz ˈpɜːtʃəsɪŋ ən ɪkˈspres ˈmetrəʊ ˈtɪkɪt æt ˈkiːɒsk θriː ɒn ˈplætfɔːm tuː/", "bn_pron": "আই ওয়াজ পারচেসিং অ্যান এক্সপ্রেস মেট্রো টিকেট। আই সেট মাই ব্যাগ বিটুইন মাই ফিট।" },
            { "id": "6", "speaker": "Officer Miller", "role": "B", "roleTitle": "Police / মিলার", "en": "That kiosk is covered by high-definition station CCTV cameras. Can you describe the bag and the suspect if you noticed anyone?", "bn": "ওই টিকিট মেশিনে হাই-ডেফিনিশন সিসিটিভি ক্যামেরা তাক করা আছে। ব্যাগের বিবরণ দিন, আর কাউকে সন্দেহজনকভাবে খেয়াল করেছিলেন কি?", "ipa": "/ðæt ˈkiːɒsk ɪz ˈkʌvəd baɪ haɪ ˌdefɪˈnɪʃn ˈsteɪʃn siː siː tiː viː ˈkæmərəz/", "bn_pron": "দ্যাট কিয়স্ক ইজ কাভার্ড বাই হাই ডেফিনিশন সিসিটিভি ক্যামেরাস।" },
            { "id": "7", "speaker": "Arif", "role": "A", "roleTitle": "Tourist / আরিফ", "en": "It's a dark navy blue Samsonite backpack with a brown leather handle. A tall man in a dark hoodie bumped into me right before.", "bn": "এটি ডার্ক নেভি ব্লু রঙের স্যামসোনাইট ব্যাকপ্যাক, ওপরে বাদামী চামড়ার হাতল আছে। ঠিক তার আগে কালো হুডি পরা একজন লম্বা লোক আমার গায়ে ধাক্কা দিয়েছিল।", "ipa": "/ɪts ə dɑːk ˈneɪvi bluː ˈsæmsənaɪt ˈbækpæk wɪð ə braʊn ˈleðə ˈhændl ə tɔːl mæn ɪn ə dɑːk ˈhʊdi bʌmpt/", "bn_pron": "ইটস আ ডার্ক নেভি ব্লু স্যামসোনাইট ব্যাকপ্যাক। আ টল ম্যান ইন আ ডার্ক হুডি বাম্পড ইনটু মি।" },
            { "id": "8", "speaker": "Officer Miller", "role": "B", "roleTitle": "Police / মিলার", "en": "I have radioed transit security to review the platform camera recordings for that timestamp immediately.", "bn": "আমি ওই নির্দিষ্ট সময়ের প্ল্যাটফর্মের ক্যামেরা রেকর্ডিং এখনই পর্যালোচনার জন্য ট্রানজিট সিকিউরিটিকে ওয়্যারলেসে নির্দেশ দিয়েছি।", "ipa": "/aɪ hæv ˈreɪdiəʊd ˈtrænzɪt sɪˈkjʊərəti tuː rɪˈvjuː ðə ˈplætfɔːm ˈkæmərə rɪˈkɔːdɪŋz fɔː ðæt ˈtaɪmstæmp/", "bn_pron": "আই হ্যাভ রেডিওড ট্রানজিট সিকিউরিটি টু রিভিউ দ্য প্ল্যাটফর্ম ক্যামেরা রেকর্ডিং।" },
            { "id": "9", "speaker": "Arif", "role": "A", "roleTitle": "Tourist / আরিফ", "en": "Could you issue me an official police incident report copy so I can visit my embassy for an emergency passport?", "bn": "আমাকে কি একটি অফিসিয়াল পুলিশ রিপোর্টের কপি দেওয়া যাবে যাতে জরুরি পাসপোর্টের জন্য আমার দূতাবাসে যেতে পারি?", "ipa": "/kʊd juː ˈɪʃuː miː ən əˈfɪʃl pəˈliːs ˈɪnsɪdənt rɪˈpɔːt ˈkɒpi səʊ aɪ kæn ˈvɪzɪt maɪ ˈembəsi/", "bn_pron": "কুড ইউ ইস্যু মি অ্যান অফিসিয়াল পুলিশ ইনসিডেন্ট রিপোর্ট কপি?" },
            { "id": "10", "speaker": "Officer Miller", "role": "B", "roleTitle": "Police / মিলার", "en": "Here is your stamped Police Crime Reference Report #CR-90422. It has our badge number and contact details. We will notify you the moment there's an update!", "bn": "এই যে আপনার সিলমোহর দেওয়া পুলিশ রিপোর্ট #CR-90422। এতে আমাদের ব্যাজ নম্বর ও ফোন দেওয়া আছে। কোনো আপডেট পেলেই আপনাকে জানাব!", "ipa": "/hɪər ɪz jɔː stæmpt pəˈliːs kraɪm ˈrefrəns rɪˈpɔːt siː ɑː naɪn ˈzɪərəʊ fɔː tuː tuː/", "bn_pron": "হিয়ার ইয ইউর স্ট্যাম্পড পুলিশ ক্রাইম রেফারেন্স রিপোর্ট। উই উইল নোটিফাই ইউ!" }
        ],
        "followUps": [
            { "en": "Have you blocked your stolen debit and credit cards via your mobile banking apps?", "bn": "আপনি কি আপনার মোবাইল ব্যাংকিং অ্যাপ দিয়ে চুরি হওয়া কার্ডগুলো ব্লক করেছেন?" },
            { "en": "Is the Bangladesh Embassy located within walking distance from this police station?", "bn": "বাংলাদেশ দূতাবাস কি এই পুলিশ স্টেশন থেকে হেঁটে যাওয়ার মতো কাছাকাছি?" },
            { "en": "Can I leave an alternate emergency contact number in case my phone battery runs out?", "bn": "ফোনের চার্জ শেষ হয়ে গেলে যোগাযোগের জন্য কি বিকল্প কোনো জরুরি নম্বর দিয়ে যেতে পারি?" }
        ],
        "closers": [
            { "en": "Thank you officer for your compassion and swift report generation!", "bn": "সহমর্মিতা ও দ্রুত পুলিশ রিপোর্ট দেওয়ার জন্য অনেক ধন্যবাদ অফিসার!" },
            { "en": "I'll take this report to the embassy right now. Have a good day.", "bn": "এই রিপোর্টটি নিয়ে আমি এখনই দূতাবাসে যাচ্ছি। ভালো থাকবেন।" },
            { "en": "Appreciate your professional guidance during this emergency. Goodbye!", "bn": "এই জরুরি মুহূর্তে পেশাদার নির্দেশনার জন্য কৃতজ্ঞ। বিদায়!" }
        ],
        "nativePhrases": [
            { "phrase": "In the blink of an eye", "meaning": "চোখের পলকে খুব দ্রুত ঘটে যাওয়া", "context": "চুরির আকস্মিকতা প্রকাশ করতে।" },
            { "phrase": "Cover all the bases", "meaning": "সম্ভাব্য সব প্রয়োজনীয় পদক্ষেপ নিখুঁতভাবে গ্রহণ করা", "context": "কার্ড ব্লক ও রিপোর্ট ফাইলিংয়ে।" },
            { "phrase": "Keep you posted", "meaning": "যেকোনো নতুন অগ্রগতি নিয়মিত জানানো", "context": "পুলিশের তদন্তের আশ্বাসে।" }
        ]
    },

    # 39. Requesting Sick Leave or Day Off from Manager
    {
        "id": "conv-39-requesting-sick-leave-or-day-off-from-manager",
        "number": 39,
        "title": "Requesting Sick Leave or Day Off from Manager",
        "titleBn": "হঠাৎ অসুস্থতার কারণে অফিস ম্যানেজারের কাছে ছুটির আবেদন",
        "level": "Intermediate",
        "category": "Professional",
        "imageUrl": "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
        "sceneDescription": "হঠাৎ তীব্র জ্বর বা পেটের পীড়ায় সকালে কাজে যেতে না পেরে টিম লিড বা ম্যানেজারকে ফোন করে দায়িত্ব হস্তান্তর ও দুই দিনের মেডিকেল ছুটির অনুরোধ করার কথপোকথন।",
        "briefing": {
            "setting": "সকালের জরুরি ফোন কল (Morning Emergency Call to Manager)",
            "roleA": { "name": "Employee", "titleBn": "অসুস্থ কর্মী (Mehedi)", "descBn": "তীব্র অসুস্থতার কথা জানিয়ে কাজের দায়িত্ব সহকর্মীকে বুঝিয়ে দেওয়ার নিশ্চয়তা দিচ্ছেন" },
            "roleB": { "name": "Reporting Manager", "titleBn": "অফিস ম্যানেজার (Salma)", "descBn": "সহমর্মিতার সাথে ছুটি মঞ্জুর করছেন ও বিশ্রাম নেওয়ার পরামর্শ দিচ্ছেন" },
            "overviewBn": "অসুস্থতার ছুটি চাওয়ার সময় ভোরবেলা বা আগেভাগেই জানানো (Calling in sick early), দিনের জরুরি মিটিং বা ডেডলাইনের কাজের ব্যাকআপ ঠিক করা (Colleague covering my tasks), এবং ডাক্তার দেখালে প্রেসক্রিপশন পাঠানো পেশাদার দায়িত্বশীলতা।",
            "politenessTips": [
                "অফিস শুরুর আগেই ফোন বা বার্তা দিন: 'Good morning Salma, unfortunately I've fallen ill overnight.'",
                "কাজের দায়িত্বের ব্যাকআপ জানান: 'I've briefed Tanvir to cover my client demo at 2 PM.'",
                "কাজের চেয়ে স্বাস্থ্যের বিশ্রামকে গুরুত্ব দিন, তবে আপডেট রাখুন: 'I'll keep you posted after visiting the doctor this morning.'"
            ],
            "keyVocabulary": [
                { "word": "Call in sick", "meaning": "অসুস্থতার কারণে অফিসে ফোন করে ছুটি চাওয়া", "pron": "কল ইন সিক" },
                { "word": "Cover for someone", "meaning": "অনুপস্থিত সহকর্মীর হয়ে জরুরি দায়িত্ব পালন করে দেওয়া", "pron": "কাভার ফর সামওয়ান" },
                { "word": "Doctor's medical note", "meaning": "চিকিৎসকের দেওয়া ছুটির সার্টিফিকেট বা প্রেসক্রিপশন", "pron": "ডক্টরস মেডিকেল নোট" },
                { "word": "Speedy recovery", "meaning": "দ্রুত আরোগ্য লাভ বা সুস্থ হয়ে ওঠা", "pron": "স্পিডি রিকভারি" }
            ]
        },
        "starters": [
            { "en": "Good morning Salma, I'm calling to let you know I won't be able to make it into the office today due to illness.", "bn": "শুভ সকাল সালমা আপা, অসুস্থতার কারণে আজ অফিসে আসতে পারছি না বলে জানাতে কল করেছি।", "tip": "ছুটি চাওয়ার পেশাদার সূচনা বাক্য।" },
            { "en": "Hello, I've come down with a severe stomach flu overnight and need to take a sick day today.", "bn": "হ্যালো, রাতে হঠাৎ তীব্র পেটের পীড়ায় আক্রান্ত হওয়ায় আমার আজকের দিনটি মেডিকেল ছুটি প্রয়োজন।", "tip": "অসুস্থতা উল্লেখ করার বাক্য।" },
            { "en": "I wanted to inform you as early as possible so we can redistribute today's client deliverables.", "bn": "যত দ্রুত সম্ভব আপনাকে জানিয়ে রাখতে চাইলাম যাতে আজকের জরুরি কাজগুলো বণ্টন করা যায়।", "tip": "দায়িত্বশীলতার সাথে জানানোর উপায়।" }
        ],
        "dialogue": [
            { "id": "1", "speaker": "Mehedi", "role": "A", "roleTitle": "Employee / মেহেদী", "en": "Good morning Salma apu. I'm calling to inform you that I have come down with a high fever and severe flu overnight.", "bn": "শুভ সকাল সালমা আপু। রাতে হঠাৎ তীব্র জ্বর আর সর্দিতে আক্রান্ত হওয়ায় আমি আজ কাজে আসতে পারছি না বলে জানাতে কল করেছি।", "ipa": "/ɡʊd ˈmɔːnɪŋ ˈsælmə ˈɑːpuː aɪm ˈkɔːlɪŋ tuː ɪnˈfɔːm juː ðæt aɪ hæv kʌm daʊn wɪð ə haɪ ˈfiːvə/", "bn_pron": "গুড মর্নিং সালমা আপু। আইম কলিং টু ইনফর্ম ইউ দ্যাট আই হ্যাভ কাম ডাউন উইথ আ হাই ফিভার।" },
            { "id": "2", "speaker": "Salma", "role": "B", "roleTitle": "Manager / সালমা", "en": "Good morning Mehedi. Oh no, you sound really congested! How high is your temperature?", "bn": "শুভ সকাল মেহেদী। তোমার গলার আওয়াজেই বোঝা যাচ্ছে বেশ ঠান্ডা লেগেছে! শরীরের তাপমাত্রা কত?", "ipa": "/ɡʊd ˈmɔːnɪŋ meˈheːdi əʊ nəʊ juː saʊnd ˈrɪəli kənˈdʒestɪd haʊ haɪ ɪz jɔː ˈtemprətʃə/", "bn_pron": "গুড মর্নিং মেহেদী। ইউ সাউন্ড রিয়ালি কনজেস্টেড! হাউ হাই ইজ ইউর টেম্পারেচার?" },
            { "id": "3", "speaker": "Mehedi", "role": "A", "roleTitle": "Employee / মেহেদী", "en": "It's around 102 degrees with extreme body aches. I will be seeing a physician this morning, so I'd like to request two days of sick leave.", "bn": "প্রায় ১০২ ডিগ্রি জ্বর সাথে প্রচণ্ড শরীরব্যথা। আজ সকালেই ডাক্তারের কাছে যাব, তাই দুই দিনের মেডিকেল ছুটির আবেদন জানাতে চাই।", "ipa": "/ɪts əˈraʊnd wʌn ˈhʌndrəd tuː dɪˈɡriːz wɪð ɪkˈstriːm ˈbɒdi eɪks aɪ wɪl biː ˈsiːɪŋ ə fɪˈzɪʃn/", "bn_pron": "ইটস অ্যারাউন্ড ওয়ান হান্ড্রেড টু ডিগ্রিজ। আইড লাইক টু রিকোয়েস্ট টু ডেইজ অফ সিক লিভ।" },
            { "id": "4", "speaker": "Salma", "role": "B", "roleTitle": "Manager / সালমা", "en": "Please don't worry about work at all, health comes first. What about your pending deadlines for today?", "bn": "কাজের ব্যাপারে একদম কোনো চিন্তা করো না, স্বাস্থ্য সবার আগে। আজকের জরুরি কাজের কোনো ডেডলাইন আছে কি?", "ipa": "/pliːz dəʊnt ˈwʌri əˈbaʊt wɜːk æt ɔːl helθ kʌmz fɜːst wɒt əˈbaʊt jɔː ˈpendɪŋ ˈdedlaɪnz fɔː təˈdeɪ/", "bn_pron": "প্লীয ডোন্ট ওয়ারি অ্যাবাউট ওয়ার্ক অ্যাট অল, হেলথ কামস ফার্স্ট।" },
            { "id": "5", "speaker": "Mehedi", "role": "A", "roleTitle": "Employee / মেহেদী", "en": "I've already messaged Tanvir. He kindly agreed to cover our 2:00 PM client sprint demonstration.", "bn": "আমি ইতিমধ্যে তানভীরের সাথে কথা বলেছি। সে দুপুর ২টার ক্লায়েন্ট স্প্রিন্ট ডেমোটি হ্যান্ডেল করতে সানন্দে রাজি হয়েছে।", "ipa": "/aɪv ɔːlˈredi ˈmesɪdʒd tænˈvɪə hiː ˈkaɪndli əˈɡriːd tuː ˈkʌvər ˈaʊə tuː piː em ˈklaɪənt sprɪnt/", "bn_pron": "আইভ অলরেডি মেসেজড তানভীর। হি কাইন্ডলি এগ্রিড টু কাভার আওয়ার টু পিএম ক্লায়েন্ট ডেমো।" },
            { "id": "6", "speaker": "Salma", "role": "B", "roleTitle": "Manager / সালমা", "en": "That's very proactive and responsible of you. Are there any urgent pull requests or deployments waiting on your approval?", "bn": "খুবই দায়িত্বশীল কাজ করেছো। কোনো জরুরি পুল রিকোয়েস্ট বা কোড ডিপ্লয়মেন্ট কি তোমার অনুমোদনের অপেক্ষায় আটকে আছে?", "ipa": "/ðæts ˈveri ˌprəʊˈæktɪv ænd rɪˈspɒnsəbl ɒv juː ɑː ðeər ˈeni ˈɜːdʒənt pʊl rɪˈkwestɪz/", "bn_pron": "দ্যাটস ভেরি প্রোক্টিভ অ্যান্ড রেসপনসিবল অফ ইউ।" },
            { "id": "7", "speaker": "Mehedi", "role": "A", "roleTitle": "Employee / মেহেদী", "en": "No, I pushed all clean commits yesterday evening, so the staging environment is fully stable.", "bn": "না, কাল সন্ধ্যায় আমি সব ফ্রেশ কোড পুশ করে এসেছি, তাই স্টেজিং এনভায়রনমেন্ট সম্পূর্ণ স্ট্যাবল আছে।", "ipa": "/nəʊ aɪ pʊʃt ɔːl kliːn kəˈmɪts ˈjestədeɪ ˈiːvnɪŋ səʊ ðə ˈsteɪdʒɪŋ ɪnˈvaɪrənmənt ɪz ˈfʊli ˈsteɪbl/", "bn_pron": "নো, আই পুশড অল ক্লিন কমিটস ইয়েস্টারডে ইভনিং। স্টেজিং ইজ ফুলি স্ট্যাবল।" },
            { "id": "8", "speaker": "Salma", "role": "B", "roleTitle": "Manager / সালমা", "en": "Excellent. I will approve your sick leave in our HR portal right away. Focus completely on resting and recovery.", "bn": "চমৎকার। আমি এখনই আমাদের এইচআর পোর্টালে তোমার দুই দিনের ছুটি অ্যাপ্রুভ করে দিচ্ছি। তুমি শুধু বিশ্রামে মনোযোগ দাও।", "ipa": "/ˈeksələnt aɪ wɪl əˈpruːv jɔː sɪk liːv ɪn ˈaʊər eɪtʃ ɑː ˈpɔːtl raɪt əˈweɪ ˈfəʊkəs kəmˈpliːtli ɒn ˈrestɪŋ/", "bn_pron": "এক্সেলেন্ট। আই উইল অ্যাপ্রুভ ইউর সিক লিভ ইন আওয়ার এইচআর পোর্টাল।" },
            { "id": "9", "speaker": "Mehedi", "role": "A", "roleTitle": "Employee / মেহেদী", "en": "I will upload the doctor's prescription note to the HR portal once I return from the clinic.", "bn": "ডাক্তারখানা থেকে ফেরার পর আমি প্রেসক্রিপশনের কপিটি এইচআর পোর্টালে আপলোড করে দেব আপু।", "ipa": "/aɪ wɪl ʌpˈləʊd ðə ˈdɒktəz prɪˈskrɪpʃn nəʊt tuː ðɪ eɪtʃ ɑː ˈpɔːtl wʌns aɪ rɪˈtɜːn frəm ðə ˈklɪnɪk/", "bn_pron": "আই উইল আপলোড দ্য ডক্টরস প্রেসক্রিপশন নোট টু দ্য এইচআর পোর্টাল।" },
            { "id": "10", "speaker": "Salma", "role": "B", "roleTitle": "Manager / সালমা", "en": "Take all the time you need, Mehedi. Turn off Slack, drink lots of fluids, and get well soon!", "bn": "যতটুকু সময় দরকার নাও মেহেদী। স্ল্যাক নোটিফিকেশন অফ করে প্রচুর পানি আর বিশ্রাম নাও। দ্রুত সুস্থ হয়ে ওঠো!", "ipa": "/teɪk ɔːl ðə taɪm juː niːd meˈheːdi tɜːn ɒf slæk drɪŋk lɒts ɒv ˈfluːɪdz ænd ɡet wel suːn/", "bn_pron": "টেক অল দ্য টাইম ইউ নিড মেহেদী। টার্ন অফ স্ল্যাক অ্যান্ড গেট ওয়েল সুন!" }
        ],
        "followUps": [
            { "en": "Should I set an 'Out of Office' auto-responder on my work email?", "bn": "অফিসের ইমেইলে কি একটি 'Out of Office' স্বয়ংক্রিয় মেসেজ সেট করে রাখব?" },
            { "en": "Do you need me to forward the client slide deck to Tanvir's email directly?", "bn": "ক্লায়েন্ট স্লাইড ডেকটি কি তানভীরের ইমেইলে সরাসরি ফরোয়ার্ড করে দেব?" },
            { "en": "I will send you a brief WhatsApp text on Thursday evening regarding my readiness for Friday.", "bn": "শুক্রবারে অফিসে যোগ দিতে পারব কি না তা জানিয়ে বৃহস্পতিবার সন্ধ্যায় একটি হোয়াটসঅ্যাপ মেসেজ দেব।" }
        ],
        "closers": [
            { "en": "Thank you so much for your kind understanding Salma apu!", "bn": "আপনার আন্তরিক সহমর্মিতার জন্য অনেক ধন্যবাদ সালমা আপু!" },
            { "en": "I will log off and rest now. Have a smooth day at the office.", "bn": "আমি এবার লগ অফ করে বিশ্রাম নিচ্ছি। অফিসে দিনটি সুন্দর কাটুক।" },
            { "en": "Goodbye apu, see you as soon as I recover!", "bn": "বিদায় আপু, সুস্থ হয়ে দ্রুতই দেখা হবে!" }
        ],
        "nativePhrases": [
            { "phrase": "Get well soon", "meaning": "দ্রুত সুস্থ ও আরোগ্য লাভ করার আন্তরিক শুভকামনা", "context": "অসুস্থ ব্যক্তিকে সান্ত্বনা ও বিদায় জানাতে।" },
            { "phrase": "Cover for me", "meaning": "আমার অনুপস্থিতে আমার দায়িত্বটি পালন করে দেওয়া", "context": "সহকর্মীর সহায়তা চাওয়ায়।" },
            { "phrase": "Come down with", "meaning": "কোনো জ্বর বা সর্দি-কাশিতে আক্রান্ত হওয়া", "context": "অসুস্থতা প্রকাশের আদর্শ বাগধারা।" }
        ]
    },

    # 40. Saying Goodbye, Networking & Future Plans
    {
        "id": "conv-40-saying-goodbye-networking-future-plans",
        "number": 40,
        "title": "Saying Goodbye, Networking & Future Plans",
        "titleBn": "অনুষ্ঠান শেষে সম্মানজনক বিদায় ও দীর্ঘমেয়াদী যোগাযোগ স্থাপন",
        "level": "Intermediate",
        "category": "Social",
        "imageUrl": "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80",
        "sceneDescription": "আন্তর্জাতিক সামিট বা ফেয়ারওয়েল পার্টির শেষে নতুন পরিচিত প্রফেশনালদের সাথে উষ্ণ বিদায় বিনিময়, ফোন নম্বর বা লিংকডইন আদান-প্রদান এবং ভবিষ্যৎ কোলাবোরেশনের পরিকল্পনা।",
        "briefing": {
            "setting": "ফেয়ারওয়েল রিসিপশন হল (Farewell & Networking Reception)",
            "roleA": { "name": "Departing Professional", "titleBn": "বিদায়ী অংশগ্রহণকারী (Kazi)", "descBn": "ফলপ্রসূ আলোচনার পর উষ্ণ বিদায় ও যোগাযোগ রক্ষার প্রস্তাব দিচ্ছেন" },
            "roleB": { "name": "Global Peer", "titleBn": "সহকর্মী নেটওয়ার্কার (Elena)", "descBn": "কৃতজ্ঞতা জানিয়ে ভবিষ্যতে প্রজেক্টে যুক্ত থাকার প্রতিশ্রুতি দিচ্ছেন" },
            "overviewBn": "কোনো ইভেন্টের শেষে সুন্দরভাবে বিদায় নেওয়া ও সম্পর্ক দীর্ঘমেয়াদী করা এক দারুণ আর্ট। 'It was such a pleasure collaborating with you', 'Let's make sure we keep in touch', 'Safe travels back home' ইত্যাদি বাক্য পেশাদার জীবনকে সমৃদ্ধ করে।",
            "politenessTips": [
                "কৃতজ্ঞতা দিয়ে বিদায় শুরু করুন: 'It has been an absolute pleasure connecting with you throughout this summit.'",
                "যোগাযোগ রক্ষার নির্দিষ্ট মাধ্যম বলুন: 'Let's exchange WhatsApp and connect on LinkedIn.'",
                "ভবিষ্যতের সফলতার শুভকামনা দিন: 'Wishing you tremendous success with your upcoming venture!'"
            ],
            "keyVocabulary": [
                { "word": "Cross paths again", "meaning": "ভবিষ্যতে আবার কখনো দেখা বা পরিচয় হওয়া", "pron": "ক্রস পাথস এগেইন" },
                { "word": "Keep in touch", "meaning": "নিয়মিত যোগাযোগ বজায় রাখা", "pron": "কীপ ইন টাচ" },
                { "word": "Fruitful collaboration", "meaning": "ফলপ্রসূ ও সফল যৌথ উদ্যোগ", "pron": "ফ্রুটফুল কোলাবোরেশন" },
                { "word": "Safe travels", "meaning": "নিরাপদ ও সুখকর ফিরতি যাত্রা", "pron": "সেইফ ট্রাভেলস" }
            ]
        },
        "starters": [
            { "en": "It has been an absolute honor meeting you and exchanging insights this week Elena.", "bn": "এই সপ্তাহে আপনার সাথে পরিচিত হওয়া এবং অভিজ্ঞতার বিনিময় করা সত্যি এক পরম আনন্দের অভিজ্ঞতা ছিল এলেনা।", "tip": "বিদায় নেওয়ার সবচেয়ে সুন্দর ও মার্জিত বাক্য।" },
            { "en": "Before we both head to the airport, let's make sure our contact details are synchronized.", "bn": "আমরা এয়ারপোর্টে রওনা দেওয়ার আগে চলুন আমাদের যোগাযোগের মাধ্যমগুলো অদলবদল করে নিই।", "tip": "কন্ট্যাক্ট শেয়ার করার স্মার্ট উপায়।" },
            { "en": "I'm genuinely looking forward to exploring synergies between our two teams in the near future.", "bn": "অদূর ভবিষ্যতে আমাদের দুই টিমের যৌথ সম্ভাবনার দিকগুলো নিয়ে কাজ করার জন্য আমি উন্মুখ হয়ে আছি।", "tip": "ভবিষ্যৎ পার্টনারশিপের বাক্য।" }
        ],
        "dialogue": [
            { "id": "1", "speaker": "Kazi", "role": "A", "roleTitle": "Kazi / কাজী", "en": "Elena! Before the closing reception winds down, I wanted to say what an absolute pleasure it was meeting you.", "bn": "এলেনা! সমাপনী অনুষ্ঠান শেষ হওয়ার আগে আমি বলতে চাই আপনার সাথে পরিচিত হতে পারাটা সত্যিই এক পরম আনন্দের ছিল।", "ipa": "/ɪˈleɪnə bɪˈfɔː ðə ˈkləʊzɪŋ rɪˈsepʃn waɪndz daʊn aɪ ˈwɒntɪd tuː seɪ wɒt ən ˈæbsəluːt ˈpleʒər ɪt wɒz/", "bn_pron": "এলেনা! বিফোর দ্য ক্লোজিং রিসিপশন ওয়াইন্ডস ডাউন, আই ওয়ান্টেড টু সেই হোয়াট অ্যান অ্যাবসলিউট প্লেজার!" },
            { "id": "2", "speaker": "Elena", "role": "B", "roleTitle": "Elena / এলেনা", "en": "Likewise, Kazi! Our brainstorming session on cross-border logistics was easily the highlight of my entire conference.", "bn": "আমারও ঠিক একই অনুভূতি কাজী! ক্রস-বর্ডার লজিস্টিকস নিয়ে আমাদের ব্রেইনস্টর্মিং সেশনটি ছিল পুরো কনফারেন্সের সবচেয়ে সেরা অভিজ্ঞতা।", "ipa": "/ˈlaɪkwaɪz ˈkɑːzi ˈaʊə ˈbreɪnstɔːmɪŋ ˈseʃn ɒn krɒs ˈbɔːdə ləˈdʒɪstɪks wɒz ˈiːzɪli ðə ˈhaɪlaɪt/", "bn_pron": "লাইকওয়াইজ কাজী! আওয়ার ব্রেইনস্টর্মিং সেশন ওয়াজ ইজিলি দ্য হাইলাইট অফ মাই কনফারেন্স।" },
            { "id": "3", "speaker": "Kazi", "role": "A", "roleTitle": "Kazi / কাজী", "en": "I couldn't agree more. Let's make sure this isn't just a one-time encounter. How do you prefer staying in touch?", "bn": "আমি আপনার সাথে সম্পূর্ণ একমত। চলুন নিশ্চিত করি এটি যেন কেবল এককালীন যোগাযোগ না হয়। কোন মাধ্যমে যোগাযোগ আপনার জন্য বেশি সুবিধাজনক?", "ipa": "/aɪ ˈkʊdnt əˈɡriː mɔː lets meɪk ʃʊə ðɪs ɪznt dʒʌst ə wʌn taɪm ɪnˈkaʊntə haʊ duː juː prɪˈfɜː ˈsteɪɪŋ ɪn tʌtʃ/", "bn_pron": "আই কুডন্ট এগ্রি মোর। লেটস মেইক শুয়ার দিস ইজন্ট জাস্ট আ ওয়ান টাইম এনকাউন্টার।" },
            { "id": "4", "speaker": "Elena", "role": "B", "roleTitle": "Elena / এলেনা", "en": "I'm very active on LinkedIn and WhatsApp. Let's scan our LinkedIn QR codes right now!", "bn": "আমি লিংকডইন আর হোয়াটসঅ্যাপে খুব সক্রিয়। চলুন এখনই আমাদের লিংকডইনের কিউআর কোড স্ক্যান করে কানেক্ট হই!", "ipa": "/aɪm ˈveri ˈæktɪv ɒn ˌlɪŋktˈɪn ænd wɒtsˈæp lets skæn ˈaʊə ˌlɪŋktˈɪn kjuː ɑː kəʊdz raɪt naʊ/", "bn_pron": "আইম ভেরি অ্যাক্টিভ অন লিংকডইন অ্যান্ড হোয়াটসঅ্যাপ। লেটস স্ক্যান আওয়ার কিউআর কোডস নাও!" },
            { "id": "5", "speaker": "Kazi", "role": "A", "roleTitle": "Kazi / কাজী", "en": "Connected! And here is my business card with my direct WhatsApp and personal email.", "bn": "যুক্ত হয়ে গেলাম! আর এই যে আমার ভিজিটিং কার্ড, যাতে সরাসরি হোয়াটসঅ্যাপ ও ব্যক্তিগত ইমেইল দেওয়া আছে।", "ipa": "/kəˈnektɪd ænd hɪər ɪz maɪ ˈbɪznəs kɑːd wɪð maɪ dɪˈrekt wɒtsˈæp ænd ˈpɜːsənl ˈiːmeɪl/", "bn_pron": "কানেক্টেড! অ্যান্ড হিয়ার ইয মাই বিজনেস কার্ড উইথ মাই ডিরেক্ট হোয়াটসঅ্যাপ অ্যান্ড পার্সোনাল ইমেইল।" },
            { "id": "6", "speaker": "Elena", "role": "B", "roleTitle": "Elena / এলেনা", "en": "Thank you! When are you flying back home to Dhaka?", "bn": "ধন্যবাদ! ঢাকায় আপনার ফিরতি ফ্লাইট কখন?", "ipa": "/θæŋk juː wen ɑː juː ˈflaɪɪŋ bæk həʊm tuː ˈdɑːkə/", "bn_pron": "থ্যাংক ইউ! হোয়েন আর ইউ ফ্লাইং ব্যাক হোম টু ঢাকা?" },
            { "id": "7", "speaker": "Kazi", "role": "A", "roleTitle": "Kazi / কাজী", "en": "Tomorrow at noon. And do you return straight to Berlin?", "bn": "কাল দুপুরবেলা। আর আপনি কি সরাসরি বার্লিন ফিরে যাচ্ছেন?", "ipa": "/təˈmɒrəʊ æt nuːn ænd duː juː rɪˈtɜːn streɪt tuː bɜːˈlɪn/", "bn_pron": "টুমরো অ্যাট নুন। অ্যান্ড ডু ইউ রিটার্ন স্ট্রেইট টু বার্লিন?" },
            { "id": "8", "speaker": "Elena", "role": "B", "roleTitle": "Elena / এলেনা", "en": "Yes, on the early morning flight. Next quarter I'll actually be visiting South Asia for an industry summit.", "bn": "হ্যাঁ, সকাল সকাল ফ্লাইটে। আগামী কোয়ার্টারে একটি সামিটের কাজে আমার আসলে দক্ষিণ এশিয়া সফরে আসার কথা রয়েছে।", "ipa": "/jes ɒn ðə ˈɜːli ˈmɔːnɪŋ flaɪt nekst ˈkwɔːtər aɪl ˈæktʃuəli biː ˈvɪzɪtɪŋ saʊθ ˈeɪʒə/", "bn_pron": "ইয়েস, অন দ্য আর্লি মর্নিং ফ্লাইট। নেক্সট কোয়ার্টার আইল বি ভিজিটিং সাউথ এশিয়া।" },
            { "id": "9", "speaker": "Kazi", "role": "A", "roleTitle": "Kazi / কাজী", "en": "If your travels bring you to Bangladesh, dinner is on me! We have incredible hospitality and culinary heritage.", "bn": "আপনার সফরে যদি বাংলাদেশে আসা হয়, তবে ডিনারের দাওয়াত আমার পক্ষ থেকে! আমাদের আতিথেয়তা আর খাবার সত্যিই ভোলার মতো নয়।", "ipa": "/ɪf jɔː ˈtrævlz brɪŋ juː tuː ˌbæŋɡləˈdeʃ ˈdɪnər ɪz ɒn miː wiː hæv ɪnˈkredəbl ˌhɒspɪˈtæləti/", "bn_pron": "ইফ ইউর ট্রাভেলস ব্রিং ইউ টু বাংলাদেশ, ডিনার ইজ অন মি! উই হ্যাভ ইনক্রেডিবল হসপিটালিটি।" },
            { "id": "10", "speaker": "Elena", "role": "B", "roleTitle": "Elena / এলেনা", "en": "I will definitely hold you to that promise, Kazi! Have a safe flight home, and until we cross paths again, take care!", "bn": "আমি অবশ্যই তোমার এই মিষ্টি ওয়াদা মনে রাখব কাজী! নিরাপদে বাড়ি ফিরে যাও, আর ভবিষ্যতে আবার দেখা হওয়া পর্যন্ত ভালো থেকো!", "ipa": "/aɪ wɪl ˈdefɪnətli həʊld juː tuː ðæt ˈprɒmɪs ˈkɑːzi hæv ə seɪf flaɪt həʊm ænd ənˈtɪl wiː krɒs pɑːðz əˈɡen/", "bn_pron": "আই উইল ডেফিনিটলি হোল্ড ইউ টু দ্যাট প্রমিস কাজী! হ্যাভ আ সেইফ ফ্লাইট হোম, অ্যান্ড টেক কেয়ার!" }
        ],
        "followUps": [
            { "en": "Let's schedule a 30-minute virtual catch-up in a month to review any synergy points.", "bn": "যৌথ কাজের সম্ভাবনা পর্যালোচনার জন্য এক মাস পর চলো একটি ৩০ মিনিটের ভার্চুয়াল মিটিং রাখি।" },
            { "en": "I will tag you in our group networking photo on LinkedIn tomorrow morning.", "bn": "কাল সকালে লিংকডইনে আমাদের গ্রুপ ফটোতে আমি আপনাকে ট্যাগ করে দেব।" },
            { "en": "Let me know whenever you arrive safely back home after your flight.", "bn": "ফ্লাইটের পর নিরাপদে পৌঁছালে অবশ্যই একটি মেসেজ দিয়ে আমাকে জানাবেন।" }
        ],
        "closers": [
            { "en": "Safe travels back to Berlin, Elena! It was truly unforgettable.", "bn": "বার্লিনে নিরাপদ ফিরতি যাত্রা হোক এলেনা! অভিজ্ঞতাটি সত্যিই স্মরণীয় হয়ে থাকবে।" },
            { "en": "Keep in touch and stay inspiring. Goodbye for now!", "bn": "যোগাযোগে থাকবেন এবং অনুপ্রেরণা দিয়ে যাবেন। বিদায়!" },
            { "en": "Until next time, my friend. All the best!", "bn": "পরবর্তী সাক্ষাতের অপেক্ষায় রইলাম আমার বন্ধু। অনেক শুভকামনা!" }
        ],
        "nativePhrases": [
            { "phrase": "Cross paths again", "meaning": "ভবিষ্যতে কোথাও আবার কখনো দেখা হওয়া বা সাক্ষাৎ ঘটা", "context": "আন্তরিক বিদায়ের সেরা ইংরেজি উক্তি।" },
            { "phrase": "Hold you to that", "meaning": "তোমার দেওয়া প্রতিশ্রুতি বা দাওয়াতের কথা মনে করিয়ে দাবি বজায় রাখব", "context": "দাওয়াত হাসিমুখে গ্রহণ করতে।" },
            { "phrase": "Safe travels", "meaning": "যাত্রা নিরাপদ ও শুভ হোক", "context": "ভ্রমণকারীদের বিদায়কালে।" }
        ]
    }
]

print(f"Loaded {len(SITUATIONS_31_40)} situations (31 to 40)")
