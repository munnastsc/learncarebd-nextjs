# -*- coding: utf-8 -*-
"""
Situations 11 to 20 for Spoken English Lab
"""

SITUATIONS_11_20 = [
    # 11. Buying Groceries at the Supermarket
    {
        "id": "conv-11-buying-groceries-at-the-supermarket",
        "number": 11,
        "title": "Buying Groceries at the Supermarket",
        "titleBn": "সুপারশপে মুদিপণ্য কেনা ও সেলফ খোঁজা",
        "level": "Easy",
        "category": "Shopping",
        "imageUrl": "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=800&q=80",
        "sceneDescription": "সুপারমার্কেটে গিয়ে আইল বা সেলফ খুঁজে না পেলে স্টাফের কাছে সাহায্য চাওয়া, অর্গানিক পণ্য ও এক্সপায়ারি ডেট যাচাই করার কথোপকথন।",
        "briefing": {
            "setting": "সুপারমার্কেটের আইল ও কাউন্টার (Supermarket Aisle)",
            "roleA": { "name": "Shopper", "titleBn": "মুদি ক্রেতা (Shopper)", "descBn": "অলিভ অয়েল ও ওটস কোন আইলে আছে খুঁজছেন" },
            "roleB": { "name": "Store Clerk", "titleBn": "স্টোরকর্মী (Clerk)", "descBn": "আইল নম্বর ও ডিসকাউন্ট বুঝিয়ে দিচ্ছেন" },
            "overviewBn": "বিদেশে সুপারমার্কেটে বিভিন্ন আইল (Aisle 4, Aisle 7), অর্গানিক ও ডেইরি সেকশন এবং সেলফ-চেকআউট কাউন্টার থাকে। 'Which aisle is...?' বলে সরাসরি প্রশ্ন করলে সময় বাঁচে।",
            "politenessTips": [
                "পণ্য খুঁজতে গিয়ে কর্মীদের বলুন: 'Excuse me, which aisle can I find olive oil in?'",
                "অর্গানিক বা গ্লুটেন-ফ্রি জানতে বলুন: 'Do you carry any gluten-free oat brands?'",
                "কাউন্টারে ক্যারি ব্যাগ লাগবে কি না জিজ্ঞাসা করলে বলুন: 'Yes please, two paper bags.'"
            ],
            "keyVocabulary": [
                { "word": "Aisle", "meaning": "সুপারমার্কেটের দুই পাশের তাকের মধ্যবর্তী হাঁটার গলি", "pron": "আইল (s অনুচ্চারিত)" },
                { "word": "In bulk", "meaning": "পাইকারি বা বেশি পরিমাণে কেনা", "pron": "ইন বাল্ক" },
                { "word": "Expiry date", "meaning": "মেয়াদোত্তীর্ণ হওয়ার তারিখ", "pron": "এক্সপায়ারি ডেইট" },
                { "word": "Paper bag / Reusable bag", "meaning": "কাগজের ব্যাগ / বারবার ব্যবহারের ব্যাগ", "pron": "পেইপার ব্যাগ" }
            ]
        },
        "starters": [
            { "en": "Excuse me, which aisle has cooking oils and spices?", "bn": "মাফ করবেন, রান্নার তেল ও মশলা কোন আইলে রয়েছে?", "tip": "আইল খুঁজে পাওয়ার সবচেয়ে ভালো বাক্য।" },
            { "en": "Hi, do you have any freshly arrived organic eggs today?", "bn": "হাই, আজ কি আপনাদের কোনো ফ্রেশ অর্গানিক ডিম এসেছে?", "tip": "তাজা পণ্যের খোঁজ নেওয়ার প্রশ্ন।" },
            { "en": "Could you tell me if this bakery section offers whole wheat bread?", "bn": "বেকারি সেকশনে কি লাল আটার রুটি পাওয়া যাবে একটু বলবেন?", "tip": "নির্দিষ্ট খাবার খোঁজার বাক্য।" }
        ],
        "dialogue": [
            { "id": "1", "speaker": "Shopper", "role": "A", "roleTitle": "Shopper / ক্রেতা", "en": "Excuse me, I'm looking for extra virgin olive oil. Which aisle is it in?", "bn": "মাফ করবেন, আমি এক্সট্রা ভার্জিন অলিভ অয়েল খুঁজছি। এটি কোন আইলে পাওয়া যাবে?", "ipa": "/ɪkˈskjuːz miː aɪm ˈlʊkɪŋ fɔːr ˈekstrə ˈvɜːdʒɪn ˈɒlɪv ɔɪl wɪtʃ aɪl ɪz ɪt ɪn/", "bn_pron": "এক্সকিউজ মি, আইম লুকিং ফর এক্সট্রা ভার্জিন অলিভ অয়েল। উইচ আইল ইজ ইট ইন?" },
            { "id": "2", "speaker": "Clerk", "role": "B", "roleTitle": "Clerk / কর্মী", "en": "Hello! Cooking oils and pasta are in Aisle 4, right on the middle shelf.", "bn": "হ্যালো! রান্নার তেল আর পাস্তা রয়েছে ৪ নম্বর আইলের ঠিক মাঝখানের তাকে।", "ipa": "/həˈləʊ ˈkʊkɪŋ ɔɪlz ænd ˈpæstə ɑːr ɪn aɪl fɔː raɪt ɒn ðə ˈmɪdl ʃelf/", "bn_pron": "হ্যালো! কুকিং অয়েলস অ্যান্ড পাস্তা আর ইন আইল ফোর, রাইট অন দ্য মিডল শেলফ।" },
            { "id": "3", "speaker": "Shopper", "role": "A", "roleTitle": "Shopper / ক্রেতা", "en": "Thank you! Do you also carry organic gluten-free rolled oats?", "bn": "ধন্যবাদ! আপনাদের কাছে কি অর্গানিক গ্লুটেন-ফ্রি ওটসও পাওয়া যায়?", "ipa": "/θæŋk juː duː juː ˈɔːlsəʊ ˈkæri ɔːˈɡænɪk ˈɡluːtn friː rəʊld əʊts/", "bn_pron": "থ্যাংক ইউ! ডু ইউ অলসো ক্যারি অর্গানিক গ্লুটেন-ফ্রি রোল্ড ওটস?" },
            { "id": "4", "speaker": "Clerk", "role": "B", "roleTitle": "Clerk / কর্মী", "en": "Yes, we do. Those are located in the health food section in Aisle 2.", "bn": "হ্যাঁ, আছে। সেগুলো ২ নম্বর আইলের হেলথ ফুড সেকশনে সাজানো রয়েছে।", "ipa": "/jes wiː duː ðəʊz ɑː ləʊˈkeɪtɪd ɪn ðə helθ fuːd ˈsekʃn ɪn aɪl tuː/", "bn_pron": "ইয়েস, উই ডু। দোজ আর লোকেটেড ইন দ্য হেলথ ফুড সেকশন ইন আইল টু।" },
            { "id": "5", "speaker": "Shopper", "role": "A", "roleTitle": "Shopper / ক্রেতা", "en": "Are there any buy-one-get-one deals running this week?", "bn": "এই সপ্তাহে কি কোনো বাই-ওয়ান-গেট-ওয়ান অফার বা ছাড় চলছে?", "ipa": "/ɑː ðeər ˈeni baɪ wʌn ɡet wʌn diːlz ˈrʌnɪŋ ðɪs wiːk/", "bn_pron": "আর দেয়ার এনি বাই-ওয়ান-গেট-ওয়ান ডিলস রানিং দিস উইক?" },
            { "id": "6", "speaker": "Clerk", "role": "B", "roleTitle": "Clerk / কর্মী", "en": "Yes! All dairy milk and Greek yogurts have a 20% discount sticker today.", "bn": "হ্যাঁ! ডেইরি মিল্ক আর গ্রীক দইয়ের ওপর আজ ২০% ছাড়ের স্টিকার লাগানো আছে।", "ipa": "/jes ɔːl ˈdeəri mɪlk ænd ɡriːk ˈjɒɡəts hæv ə ˈtwenti pəˈsent ˈdɪskaʊnt ˈstɪkə təˈdeɪ/", "bn_pron": "ইয়েস! অল ডেইরি মিল্ক অ্যান্ড গ্রীক ইয়োগার্টস হ্যাভ আ টোয়েন্টি পার্সেন্ট ডিসকাউন্ট স্টিকার।" },
            { "id": "7", "speaker": "Shopper", "role": "A", "roleTitle": "Shopper / ক্রেতা", "en": "Awesome, I will definitely grab some Greek yogurt then.", "bn": "চমৎকার, তাহলে আমি অবশ্যই কিছু গ্রীক দই নিয়ে নেব।", "ipa": "/ˈɔːsəm aɪ wɪl ˈdefɪnətli ɡræb sʌm ɡriːk ˈjɒɡət ðen/", "bn_pron": "অসাম, আই উইল ডেফিনিটলি গ্র্যাব সাম গ্রীক ইয়োগার্ট দেন।" },
            { "id": "8", "speaker": "Clerk", "role": "B", "roleTitle": "Clerk / কর্মী", "en": "Would you like a shopping basket or a rolling cart for your groceries?", "bn": "আপনি কি জিনিসপত্র বহনের জন্য শপিং বাস্কেট নাকি ট্রলি কার্ট নেবেন?", "ipa": "/wʊd juː laɪk ə ˈʃɒpɪŋ ˈbɑːskɪt ɔːr ə ˈrəʊlɪŋ kɑːt fɔː jɔː ˈɡrəʊsəriz/", "bn_pron": "উড ইউ লাইক আ শপিং বাস্কেট অর আ রোলিং কার্ট ফর ইউর গ্রোসারিয?" },
            { "id": "9", "speaker": "Shopper", "role": "A", "roleTitle": "Shopper / ক্রেতা", "en": "A hand basket is enough for me today. Where are the checkout lines?", "bn": "আজকের জন্য হাতের বাস্কেটই যথেষ্ট। ক্যাশ কাউন্টারের লাইনগুলো কোন দিকে?", "ipa": "/ə hænd ˈbɑːskɪt ɪz ɪˈnʌf fɔː miː təˈdeɪ weər ɑː ðə ˈtʃekaʊt laɪnz/", "bn_pron": "আ হ্যান্ড বাস্কেট ইজ এনাফ ফর মি টুডেই। হোয়ার আর দ্য চেকআউট লাইনস?" },
            { "id": "10", "speaker": "Clerk", "role": "B", "roleTitle": "Clerk / কর্মী", "en": "Right at the front entrance. We have both cashiers and self-checkouts available.", "bn": "একদম সামনের প্রবেশদ্বারের কাছে। ক্যাশিয়ার ও সেলফ-চেকআউট দুটো সুবিধাই আছে।", "ipa": "/raɪt æt ðə frʌnt ˈentrəns wiː hæv bəʊθ kæˈʃɪəz ænd self ˈtʃekaʊts əˈveɪləbl/", "bn_pron": "রাইট অ্যাট দ্য ফ্রন্ট এন্ট্রান্স। উই হ্যাভ বোথ ক্যাশিয়ার্স অ্যান্ড সেলফ-চেকআউটস অ্যাভেইলেবল।" }
        ],
        "followUps": [
            { "en": "Do I need to weigh the loose vegetables before heading to the register?", "bn": "খোলা শাকসবজি কি কাউন্টারে যাওয়ার আগেই ওজন করে স্টিকার লাগাতে হবে?" },
            { "en": "Do you accept international Apple Pay at the self-checkout kiosks?", "bn": "সেলফ-চেকআউট মেশিনে কি ইন্টারন্যাশনাল অ্যাপল পে কাজ করবে?" },
            { "en": "Could I get paper bags instead of plastic bags, please?", "bn": "প্লাস্টিকের ব্যাগের বদলে আমাকে কি কাগজের ব্যাগ দেওয়া যাবে?" }
        ],
        "closers": [
            { "en": "Thank you for directing me so clearly! Have a great day.", "bn": "এত সুন্দর করে পথ দেখিয়ে দেওয়ার জন্য ধন্যবাদ! দিনটি ভালো কাটুক।" },
            { "en": "Thanks a lot for your help around the aisles!", "bn": "আইলগুলো খুঁজে দিতে সহায়তার জন্য অনেক ধন্যবাদ!" },
            { "en": "All set now, thanks again!", "bn": "আমার সব নেওয়া শেষ, আবারও ধন্যবাদ!" }
        ],
        "nativePhrases": [
            { "phrase": "In stock", "meaning": "দোকানে মজুদ থাকা", "context": "পণ্য পাওয়া যাবে কি না জানতে।" },
            { "phrase": "Grab a bite", "meaning": "ঝটপট হালকা খাবার খাওয়া", "context": "শপিংয়ের মাঝে স্ন্যাক্স নেওয়ার ক্ষেত্রে।" },
            { "phrase": "Ring it up", "meaning": "ক্যাশ কাউন্টারে বারকোড স্ক্যান করে বিল করা", "context": "বিল পরিশোধের মুহূর্তে।" }
        ]
    },

    # 12. Taking a Taxi / Ride Sharing
    {
        "id": "conv-12-taking-a-taxi-ride-sharing",
        "number": 12,
        "title": "Taking a Taxi / Ride Sharing",
        "titleBn": "ট্যাক্সি বা রাইড শেয়ারে গন্তব্যে যাওয়া",
        "level": "Easy",
        "category": "Travel",
        "imageUrl": "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80",
        "sceneDescription": "এয়ারপোর্ট বা শহরের রাস্তায় ট্যাক্সি বা উবারে উঠে গন্তব্য বলা, ট্রাফিক ও রুট নিয়ে কথা বলা এবং ভাড়া মেটানোর কথোপকথন।",
        "briefing": {
            "setting": "ট্যাক্সির ভেতর ও গন্তব্য (Inside Taxi / Cab)",
            "roleA": { "name": "Passenger", "titleBn": "যাত্রী (Passenger)", "descBn": "এয়ারপোর্ট টার্মিনাল ২-এ যাওয়ার জন্য তাড়াহুড়ো করছেন" },
            "roleB": { "name": "Driver", "titleBn": "ট্যাক্সি ড্রাইভার (Driver)", "descBn": "হাইওয়ে দিয়ে জ্যাম এড়িয়ে দ্রুত পৌঁছানোর ভরসা দিচ্ছেন" },
            "overviewBn": "ট্যাক্সিতে উঠেই গন্তব্য (Destination), ট্রাঙ্ক খোলা (Pop the trunk for luggage), ভাড়া মিটারে চলবে কি না (Turn on the meter) এবং নামার সময় (Drop me off here) জানা খুব দরকারি।",
            "politenessTips": [
                "ট্যাক্সিতে উঠে বলুন: 'Hi, could you please take me to the airport Terminal 2?'",
                "তাড়াতাড়ি যেতে চাইলে বলুন: 'I have a flight in two hours, could we take the fastest route?'",
                "নামার সময় বলুন: 'Could you please pull over by that building? Keep the change!'"
            ],
            "keyVocabulary": [
                { "word": "Pop the trunk", "meaning": "গাড়ির পেছনের মালামাল রাখার ডিকি বা ট্রাঙ্ক খোলা", "pron": "পপ দ্য ট্রাঙ্ক" },
                { "word": "Pull over", "meaning": "গাড়ি রাস্তার একপাশে এনে থামানো", "pron": "পুল ওভার" },
                { "word": "Expressway / Toll", "meaning": "দ্রুতগতির মহাসড়ক / টোল ফি", "pron": "এক্সপ্রেসওয়ে / টোল" },
                { "word": "Drop me off", "meaning": "আমাকে এখানে নামিয়ে দিন", "pron": "ড্রপ মি অফ" }
            ]
        },
        "starters": [
            { "en": "Hello, are you available to go to the international airport?", "bn": "হ্যালো, আন্তর্জাতিক বিমানবন্দরে যাওয়ার জন্য কি যাওয়া যাবে?", "tip": "ট্যাক্সিতে ওঠার সোজা প্রশ্ন।" },
            { "en": "Could you please pop the trunk? I have two heavy suitcases.", "bn": "ট্রাঙ্কটা একটু খুলে দেবেন প্লিজ? আমার সাথে দুইটি ভারী স্যুটকেস আছে।", "tip": "লাগেজ তোলার অনুরোধ।" },
            { "en": "Hi, I'm heading to downtown hotel district. How long will it take?", "bn": "হাই, আমি ডাউনটাউন হোটেল এলাকায় যাব। কতক্ষণ লাগতে পারে?", "tip": "সময় ও দূরত্বের খোঁজ নেওয়া।" }
        ],
        "dialogue": [
            { "id": "1", "speaker": "Passenger", "role": "A", "roleTitle": "Passenger / যাত্রী", "en": "Good afternoon! Could you please take me to Airport Terminal 2?", "bn": "শুভ অপরাহ্ন! আমাকে কি এয়ারপোর্ট টার্মিনাল ২-এ নিয়ে যাওয়া যাবে, প্লিজ?", "ipa": "/ɡʊd ˌɑːftəˈnuːn kʊd juː pliːz teɪk miː tuː ˈeəpɔːt ˈtɜːmɪnl tuː/", "bn_pron": "গুড আফটারনুন! কুড ইউ প্লীয টেক মি টু এয়ারপোর্ট টার্মিনাল টু?" },
            { "id": "2", "speaker": "Driver", "role": "B", "roleTitle": "Driver / ড্রাইভার", "en": "Sure thing! Put your bags in the back seat or trunk. Hop right in!", "bn": "অবশ্যই! আপনার ব্যাগগুলো পেছনের সিটে বা ট্রাঙ্কে রাখুন। উঠে পড়ুন!", "ipa": "/ʃʊə θɪŋ pʊt jɔː bæɡz ɪn ðə bæk siːt ɔː trʌŋk hɒp raɪt ɪn/", "bn_pron": "শুয়ার থিং! পুট ইউর ব্যাগস ইন দ্য ব্যাক সিট অর ট্রাঙ্ক। হপ রাইট ইন!" },
            { "id": "3", "speaker": "Passenger", "role": "A", "roleTitle": "Passenger / যাত্রী", "en": "Thank you. My flight boards in about two hours. Is traffic heavy today?", "bn": "ধন্যবাদ। প্রায় দুই ঘণ্টা পরই আমার ফ্লাইটের বোর্ডিং শুরু হবে। আজ রাস্তায় কি বেশি জ্যাম?", "ipa": "/θæŋk juː maɪ flaɪt bɔːdz ɪn əˈbaʊt tuː ˈaʊəz ɪz ˈtræfɪk ˈhevi təˈdeɪ/", "bn_pron": "থ্যাংক ইউ। মাই ফ্লাইট বোর্ডস ইন অ্যাবাউট টু আওয়ার্স। ইজ ট্রাফিক হেভি টুডেই?" },
            { "id": "4", "speaker": "Driver", "role": "B", "roleTitle": "Driver / ড্রাইভার", "en": "Main street is clogged, but if we take the elevated toll expressway, we'll make it in 30 minutes.", "bn": "মূল রাস্তায় বেশ জ্যাম, তবে আমরা যদি এলিভেটেড টোল এক্সপ্রেসওয়ে দিয়ে যাই তবে ৩০ মিনিটেই পৌঁছে যাব।", "ipa": "/meɪn striːt ɪz klɒɡd bʌt ɪf wiː teɪk ðə ˈelɪveɪtɪd təʊl ɪkˈspresweɪ wiːl meɪk ɪt ɪn ˈθɜːti ˈmɪnɪts/", "bn_pron": "মেইন স্ট্রিট ইজ ক্লগড, বাট ইফ উই টেক দ্য এলিভেটেড টোল এক্সপ্রেসওয়ে, উইল মেইক ইট ইন থার্টি মিনিটস।" },
            { "id": "5", "speaker": "Passenger", "role": "A", "roleTitle": "Passenger / যাত্রী", "en": "Yes, please take the toll road! I will happily pay the extra toll fee.", "bn": "হ্যাঁ, দয়া করে এক্সপ্রেসওয়ে দিয়েই চলুন! অতিরিক্ত টোল ফি আমি খুশি মনেই দিয়ে দেব।", "ipa": "/jes pliːz teɪk ðə təʊl rəʊd aɪ wɪl ˈhæpɪli peɪ ðə ˈekstrə təʊl fiː/", "bn_pron": "ইয়েস, প্লীয টেক দ্য টোল রোড! আই উইল হ্যাপিলি পেই দ্য এক্সট্রা টোল ফি।" },
            { "id": "6", "speaker": "Driver", "role": "B", "roleTitle": "Driver / ড্রাইভার", "en": "Sounds good. Is the AC temperature comfortable for you back there?", "bn": "ঠিক আছে। পেছনের সিটে এসির তাপমাত্রা কি আপনার জন্য আরামদায়ক?", "ipa": "/saʊndz ɡʊd ɪz ðə eɪ siː ˈtemprətʃə ˈkʌmftəbl fɔː juː bæk ðeə/", "bn_pron": "সাউন্ডস গুড। ইজ দ্য এসি টেম্পারেচার কমফোর্টেবল ফর ইউ ব্যাক দেয়ার?" },
            { "id": "7", "speaker": "Passenger", "role": "A", "roleTitle": "Passenger / যাত্রী", "en": "It's perfect, thank you for asking.", "bn": "একদম নিখুঁত, খোঁজ নেওয়ার জন্য ধন্যবাদ।", "ipa": "/ɪts ˈpɜːfɪkt θæŋk juː fɔːr ˈɑːskɪŋ/", "bn_pron": "ইটস পারফেক্ট, থ্যাংক ইউ ফর আস্কিং।" },
            { "id": "8", "speaker": "Driver", "role": "B", "roleTitle": "Driver / ড্রাইভার", "en": "Here we are at Terminal 2 departures gate. Total fare is $28 plus $3 toll.", "bn": "এই যে আমরা টার্মিনাল ২ ডিপার্চার গেটে পৌঁছে গেছি। মোট ভাড়া ২৮ ডলার আর ৩ ডলার টোল।", "ipa": "/hɪə wiː ɑːr æt ˈtɜːmɪnl tuː dɪˈpɑːtʃəz ɡeɪt ˈtəʊtl feər ɪz ˈtwenti eɪt plʌs θriː təʊl/", "bn_pron": "হিয়ার উই আর অ্যাট টার্মিনাল টু ডিপার্চার্স গেট। টোটাল ফেয়ার ইজ টোয়েন্টি এইট প্লাস থ্রি টোল।" },
            { "id": "9", "speaker": "Passenger", "role": "A", "roleTitle": "Passenger / যাত্রী", "en": "Here is $35 cash. Please keep the change as your tip for the speedy drive!", "bn": "এই নিন ৩৫ ডলার ক্যাশ। দ্রুত ড্রাইভ করার জন্য বাকি টাকাটি টিপস হিসেবে রেখে দিন!", "ipa": "/hɪər ɪz ˈθɜːti faɪv kæʃ pliːz kiːp ðə tʃeɪndʒ æz jɔː tɪp fɔː ðə ˈspiːdi draɪv/", "bn_pron": "হিয়ার ইয থার্টি ফাইভ ক্যাশ। প্লীয কীপ দ্য চেইঞ্জ অ্যাজ ইউর টিপ ফর দ্য স্পিডি ড্রাইভ!" },
            { "id": "10", "speaker": "Driver", "role": "B", "roleTitle": "Driver / ড্রাইভার", "en": "Thank you so much! Let me grab your luggage out of the trunk. Have a great flight!", "bn": "অনেক অনেক ধন্যবাদ! আমি ট্রাঙ্ক থেকে আপনার লাগেজ নামিয়ে দিচ্ছি। আপনার ফ্লাইট শুভ হোক!", "ipa": "/θæŋk juː səʊ mʌtʃ let miː ɡræb jɔː ˈlʌɡɪdʒ aʊt ɒv ðə trʌŋk hæv ə ɡreɪt flaɪt/", "bn_pron": "থ্যাংক ইউ সো মাচ! লেট মি গ্র্যাব ইউর লাগেজ আউট অফ দ্য ট্রাঙ্ক। হ্যাভ আ গ্রেট ফ্লাইট!" }
        ],
        "followUps": [
            { "en": "Could you provide a printed receipt for my company reimbursement?", "bn": "অফিসে জমা দেওয়ার জন্য কি একটি প্রিন্টেড রিসিট দেওয়া যাবে?" },
            { "en": "Can you drop me right in front of the Qatar Airways entrance gate?", "bn": "আমাকে কি কাতার এয়ারওয়েজের গেটের ঠিক সামনে নামিয়ে দেওয়া যাবে?" },
            { "en": "Do you accept credit card tap on the dashboard terminal?", "bn": "ড্যাশবোর্ডের টার্মিনালে কি ক্রেডিট কার্ড ট্যাপ পেমেন্ট নেওয়া যাবে?" }
        ],
        "closers": [
            { "en": "Thank you for the safe and smooth ride! Take care.", "bn": "নিরাপদ ও সুন্দর যাত্রার জন্য ধন্যবাদ! ভালো থাকবেন।" },
            { "en": "You got me here just in the nick of time. Thanks a million!", "bn": "আপনি একদম মোক্ষম সময়ে আমাকে পৌঁছে দিলেন। লক্ষ ধন্যবাদ!" },
            { "en": "Have a wonderful day on the road! Goodbye.", "bn": "আজকের দিনটি রাস্তায় নিরাপদ ও সুন্দর কাটুক! বিদায়।" }
        ],
        "nativePhrases": [
            { "phrase": "In the nick of time", "meaning": "ঠিক শেষ মুহূর্তে বা একদম মোক্ষম সময়ে", "context": "ফ্লাইট বা ট্রেনের শেষ মুহূর্তে পৌঁছালে।" },
            { "phrase": "Beat the traffic", "meaning": "জ্যাম পড়ার আগেই গন্তব্যে পৌঁছানো", "context": "বিকল্প রুট নিয়ে কথা বলতে।" },
            { "phrase": "Pull over", "meaning": "রাস্তার পাশে গাড়ি থামানো", "context": "নামার নির্দেশ দিতে।" }
        ]
    },

    # 13. Making an Appointment over Phone
    {
        "id": "conv-13-making-an-appointment-over-phone",
        "number": 13,
        "title": "Making an Appointment over Phone",
        "titleBn": "ফোনে ডাক্তার বা কাজের অ্যাপয়েন্টমেন্ট নেওয়া",
        "level": "Easy",
        "category": "Services",
        "imageUrl": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
        "sceneDescription": "ডেন্টাল ক্লিনিকে ফোনে দাঁতের চেকআপ ও ক্লিনিংয়ের জন্য সুবিধাজনক দিন ও সময় বুকিং করার কথপোকথন।",
        "briefing": {
            "setting": "ক্লিনিক অ্যাপয়েন্টমেন্ট কল (Clinic Helpline Call)",
            "roleA": { "name": "Caller", "titleBn": "গ্রাহক / রোগী (Patient)", "descBn": "বৃহস্পতিবার বিকেলে ডেন্টিস্টের সময় চাচ্ছেন" },
            "roleB": { "name": "Receptionist", "titleBn": "রিসিপশনিস্ট (Clinic Desk)", "descBn": "শিডিউল মিলিয়ে বিকেল ৪টায় বুকিং নিশ্চিত করছেন" },
            "overviewBn": "ফোনে অ্যাপয়েন্টমেন্ট নেওয়ার সময় নিজের নাম, সাক্ষাতের উদ্দেশ্য (Dental cleaning, general checkup), সুবিধাজনক দিন/সময় (Thursday afternoon) এবং কনফার্মেশন মেসেজ পাওয়ার নিয়ম জানা দরকার।",
            "politenessTips": [
                "কল করে বলুন: 'Hello, I would like to schedule an appointment with Dr. Rahman, please.'",
                "নির্দিষ্ট সময় চাইতে বলুন: 'Do you have any openings this Thursday afternoon?'",
                "তারিখ ও সময় আবার উচ্চারণ করে কনফার্ম করুন: 'So that's Thursday at 4 PM, correct?'"
            ],
            "keyVocabulary": [
                { "word": "Schedule an appointment", "meaning": "সাক্ষাতের সময় বা অ্যাপয়েন্টমেন্ট নির্ধারণ করা", "pron": "শিডিউল অ্যান অ্যাপয়েন্টমেন্ট" },
                { "word": "Available slot / Opening", "meaning": "খালি থাকা নির্দিষ্ট সময়", "pron": "অ্যাভেইলেবল স্লট / ওপেনিং" },
                { "word": "Routine checkup", "meaning": "নিয়মিত সাধারণ স্বাস্থ্য পরীক্ষা", "pron": "রুটিন চেকআপ" },
                { "word": "Confirmation SMS", "meaning": "বুকিং নিশ্চিতকরণের বার্তা", "pron": "কনফার্মেশন এসএমএস" }
            ]
        },
        "starters": [
            { "en": "Hello, I'd like to book an appointment with Dr. Rahman, please.", "bn": "হ্যালো, আমি ড. রহমানের সাথে একটি অ্যাপয়েন্টমেন্ট বুক করতে চাচ্ছি।", "tip": "কল শুরু করার আদর্শ বাক্য।" },
            { "en": "Good morning, do you have any available slots for dental cleaning this week?", "bn": "শুভ সকাল, এই সপ্তাহে দাঁত পরিষ্কার করানোর কোনো খালি স্লট আছে কি?", "tip": "নির্দিষ্ট কাজের জন্য সময় চাওয়ার উপায়।" },
            { "en": "Hi, I need to reschedule my consultation from Tuesday to Friday.", "bn": "হাই, আমার মঙ্গলবারের অ্যাপয়েন্টমেন্টটি শুক্রবারে পরিবর্তন করতে হবে।", "tip": "রিশিডিউল করার বাক্য।" }
        ],
        "dialogue": [
            { "id": "1", "speaker": "Caller", "role": "A", "roleTitle": "Caller / কলার", "en": "Good morning! I would like to schedule an appointment for a routine dental checkup.", "bn": "শুভ সকাল! আমি দাঁতের রুটিন চেকআপের জন্য একটি অ্যাপয়েন্টমেন্ট শিডিউল করতে চাই।", "ipa": "/ɡʊd ˈmɔːnɪŋ aɪ wʊd laɪk tuː ˈʃedjuːl ən əˈpɔɪntmənt fɔːr ə ruːˈtiːn ˈdentl ˈtʃekʌp/", "bn_pron": "গুড মর্নিং! আই উড লাইক টু শিডিউল অ্যান অ্যাপয়েন্টমেন্ট ফর আ রুটিন ডেন্টাল চেকআপ।" },
            { "id": "2", "speaker": "Receptionist", "role": "B", "roleTitle": "Receptionist / ডেন্টাল স্টাফ", "en": "Good morning! Certainly. Are you a new patient or have you visited our clinic before?", "bn": "শুভ সকাল! অবশ্যই। আপনি কি নতুন রোগী নাকি এর আগেও আমাদের ক্লিনিকে এসেছেন?", "ipa": "/ɡʊd ˈmɔːnɪŋ ˈsɜːtnli ɑː juː ə njuː ˈpeɪʃnt ɔː hæv juː ˈvɪzɪtɪd ˈaʊə ˈklɪnɪk bɪˈfɔː/", "bn_pron": "গুড মর্নিং! সার্টেনলি। আর ইউ আ নিউ পেশেন্ট অর হ্যাভ ইউ ভিজিটেড আওয়ার ক্লিনিক বিফোর?" },
            { "id": "3", "speaker": "Caller", "role": "A", "roleTitle": "Caller / কলার", "en": "I'm a new patient. My name is Fahim Chowdhury.", "bn": "আমি নতুন রোগী। আমার নাম ফাহিম চৌধুরী।", "ipa": "/aɪm ə njuː ˈpeɪʃnt maɪ neɪm ɪz fɑːˈhiːm ˈtʃaʊdʊri/", "bn_pron": "আইম আ নিউ পেশেন্ট। মাই নেইম ইয ফাহিম চৌধুরী।" },
            { "id": "4", "speaker": "Receptionist", "role": "B", "roleTitle": "Receptionist / ডেন্টাল স্টাফ", "en": "Welcome Mr. Chowdhury. Which doctor would you prefer, and what day works best?", "bn": "স্বাগতম জনাব চৌধুরী। আপনি কোন ডাক্তারের সাথে দেখা করতে চান, এবং কোন দিন আপনার জন্য সুবিধা?", "ipa": "/ˈwelkəm ˈmɪstə ˈtʃaʊdʊri wɪtʃ ˈdɒktə wʊd juː prɪˈfɜːr ænd wɒt deɪ wɜːks best/", "bn_pron": "ওয়েলকাম মিস্টার চৌধুরী। উইচ ডক্টর উড ইউ প্রিফার, অ্যান্ড ওয়াট ডেই ওয়ার্কস বেস্ট?" },
            { "id": "5", "speaker": "Caller", "role": "A", "roleTitle": "Caller / কলার", "en": "Dr. Sarah if possible. Do you have any openings this Thursday afternoon?", "bn": "সম্ভব হলে ড. সারা। এই বৃহস্পতিবার বিকেলে কি কোনো খালি স্লট আছে?", "ipa": "/ˈdɒktə ˈseərə ɪf ˈpɒsəbl duː juː hæv ˈeni ˈəʊpnɪŋz ðɪs ˈθɜːzdeɪ ˌɑːftəˈnuːn/", "bn_pron": "ডক্টর স্যারা ইফ পসিবল। ডু ইউ হ্যাভ এনি ওপেনিংস দিস থার্সডে আফটারনুন?" },
            { "id": "6", "speaker": "Receptionist", "role": "B", "roleTitle": "Receptionist / ডেন্টাল স্টাফ", "en": "Let me check her calendar. Yes! She has an opening at 4:30 PM this Thursday.", "bn": "আমি একটু ওনার শিডিউল দেখছি। হ্যাঁ! এই বৃহস্পতিবার বিকেল ৪:৩০ মিনিটে একটি স্লট খালি আছে।", "ipa": "/let miː tʃek hɜː ˈkælɪndə jes ʃiː hæz ən ˈəʊpnɪŋ æt fɔː ˈθɜːti piː em ðɪs ˈθɜːzdeɪ/", "bn_pron": "লেট মি চেক হার ক্যালেন্ডার। ইয়েস! শি হ্যাজ অ্যান ওপেনিং অ্যাট ফোর থার্টি পিএম দিস থার্সডে।" },
            { "id": "7", "speaker": "Caller", "role": "A", "roleTitle": "Caller / কলার", "en": "4:30 PM on Thursday is perfect for me. Please book that slot.", "bn": "বৃহস্পতিবার বিকেল ৪:৩০ মিনিট আমার জন্য একদম উপযুক্ত। দয়া করে ওই স্লটটি বুক করে দিন।", "ipa": "/fɔː ˈθɜːti piː em ɒn ˈθɜːzdeɪ ɪz ˈpɜːfɪkt fɔː miː pliːz bʊk ðæt slɒt/", "bn_pron": "ফোর থার্টি পিএম অন থার্সডে ইজ পারফেক্ট ফর মি। প্লীয বুক দ্যাট স্লট।" },
            { "id": "8", "speaker": "Receptionist", "role": "B", "roleTitle": "Receptionist / ডেন্টাল স্টাফ", "en": "May I have your contact phone number to send the confirmation text?", "bn": "বুকিং নিশ্চিতকরণের মেসেজ পাঠাতে আমি কি আপনার ফোন নম্বরটি পেতে পারি?", "ipa": "/meɪ aɪ hæv jɔː ˈkɒntækt fəʊn ˈnʌmbə tuː send ðə ˌkɒnfəˈmeɪʃn tekst/", "bn_pron": "মে আই হ্যাভ ইউর কন্ট্যাক্ট ফোন নাম্বার টু সেন্ড দ্য কনফার্মেশন টেক্সট?" },
            { "id": "9", "speaker": "Caller", "role": "A", "roleTitle": "Caller / কলার", "en": "Sure, it is 01711-223344.", "bn": "অবশ্যই, নম্বরটি হলো ০১৭১১-২২৩৩৪৪।", "ipa": "/ʃʊər ɪt ɪz ˈzɪərəʊ wʌn ˈsevn wʌn wʌn tuː tuː θriː θriː fɔː fɔː/", "bn_pron": "শুয়ার, ইট ইজ জিরো ওয়ান সেভেন ওয়ান ওয়ান টু টু থ্রি থ্রি ফোর ফোর।" },
            { "id": "10", "speaker": "Receptionist", "role": "B", "roleTitle": "Receptionist / ডেন্টাল স্টাফ", "en": "All confirmed! Please arrive 10 minutes early to fill out registration forms. See you Thursday!", "bn": "বুকিং নিশ্চিত হলো! ফর্ম পূরণের জন্য অনুগ্রহ করে ১০ মিনিট আগে আসবেন। বৃহস্পতিবারে দেখা হবে!", "ipa": "/ɔːl kənˈfɜːmd pliːz əˈraɪv ten ˈmɪnɪts ˈɜːli tuː fɪl aʊt ˌredʒɪˈstreɪʃn fɔːmz siː juː ˈθɜːzdeɪ/", "bn_pron": "অল কনফার্মড! প্লীয অ্যারাইভ টেন মিনিটস আর্লি টু ফিল আউট রেজিস্ট্রেশন ফর্মস। সি ইউ থার্সডে!" }
        ],
        "followUps": [
            { "en": "What is the consultation fee for the first visit?", "bn": "প্রথমবারের সাক্ষাতের জন্য কনসালটেশন ফি কত?" },
            { "en": "Does your clinic accept private health insurance cards?", "bn": "আপনাদের ক্লিনিকে কি প্রাইভেট হেলথ ইন্স্যুরেন্স কার্ড গ্রহণ করা হয়?" },
            { "en": "What is your cancellation policy if an emergency comes up?", "bn": "জরুরি কোনো কারণে আসতে না পারলে অ্যাপয়েন্টমেন্ট বাতিলের নিয়ম কী?" }
        ],
        "closers": [
            { "en": "Thank you so much for your assistance! Have a nice day.", "bn": "সহযোগিতার জন্য অনেক ধন্যবাদ! দিনটি সুন্দর কাটুক।" },
            { "en": "I've received the confirmation text. Thanks a lot!", "bn": "কনফার্মেশন মেসেজটি পেয়েছি। অনেক ধন্যবাদ!" },
            { "en": "See you on Thursday afternoon. Goodbye!", "bn": "বৃহস্পতিবার বিকেলে দেখা হচ্ছে। বিদায়!" }
        ],
        "nativePhrases": [
            { "phrase": "Book me in", "meaning": "আমার নামে অ্যাপয়েন্টমেন্ট বা সিট বুক করে দিন", "context": "শিডিউলে নিজের নাম নথিভুক্ত করতে।" },
            { "phrase": "First come, first served", "meaning": "আগে আসলে আগে পাবেন ভিত্তিতে", "context": "সিরিয়াল নিয়ে প্রশ্ন করতে।" },
            { "phrase": "Fit me in", "meaning": "ব্যস্ত শিডিউলের মাঝেও একটু সময় বের করে দেওয়া", "context": "জরুরি অ্যাপয়েন্টমেন্ট অনুরোধে।" }
        ]
    },

    # 14. At the Bank: Opening an Account
    {
        "id": "conv-14-at-the-bank-opening-an-account",
        "number": 14,
        "title": "At the Bank: Opening an Account",
        "titleBn": "ব্যাংকে নতুন অ্যাকাউন্ট খোলা ও নিয়ম জানা",
        "level": "Easy",
        "category": "Services",
        "imageUrl": "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&w=800&q=80",
        "sceneDescription": "ব্যাংকের শাখায় গিয়ে নতুন সেভিংস অ্যাকাউন্ট খোলার জন্য প্রয়োজনীয় কাগজপত্র, ডেবিট কার্ড ও মোবাইল অ্যাপের নিয়ম জানা।",
        "briefing": {
            "setting": "ব্যাংক ডেস্ক (Bank Branch Customer Desk)",
            "roleA": { "name": "Customer", "titleBn": "গ্রাহক (Customer)", "descBn": "আন্তর্জাতিক ডেবিট কার্ডসহ সেভিংস অ্যাকাউন্ট খুলতে চান" },
            "roleB": { "name": "Bank Officer", "titleBn": "ব্যাংক কর্মকর্তা (Officer)", "descBn": "ফর্ম পূরণ করিয়ে নিচ্ছেন ও মিনিমাম ডিপোজিট জানাচ্ছেন" },
            "overviewBn": "ব্যাংকে অ্যাকাউন্ট খোলার জন্য এনআইডি/পাসপোর্ট (National ID / Passport), ঠিকানার প্রমাণ (Utility bill as proof of address), নমিনির ছবি এবং প্রাথমিক জমার পরিমাণ (Minimum initial deposit) আলোচনা করতে হয়।",
            "politenessTips": [
                "অফিসারের টেবিলে গিয়ে বলুন: 'Good morning, I would like to open a savings account today.'",
                "কাগজপত্র দেওয়ার সময় বলুন: 'Here are my identity documents and utility bill.'",
                "অনলাইন ব্যাংকিংয়ের ব্যাপারে জিজ্ঞাসা করুন: 'Is internet and mobile banking activated automatically?'"
            ],
            "keyVocabulary": [
                { "word": "Savings account", "meaning": "সঞ্চয়ী ব্যাংক হিসাব", "pron": "সেভিংস অ্যাকাউন্ট" },
                { "word": "Proof of address", "meaning": "বর্তমান ঠিকানার প্রমাণপত্র (যেমন বিদ্যুৎ বিল)", "pron": "প্রুফ অফ অ্যাড্রেস" },
                { "word": "Initial deposit", "meaning": "অ্যাকাউন্ট খোলার প্রাথমিক জমার পরিমাণ", "pron": "ইনিশিয়াল ডিপোজিট" },
                { "word": "Debit card & Pin", "meaning": "ডেবিট কার্ড ও গোপন পিন কোড", "pron": "ডেবিট কার্ড অ্যান্ড পিন" }
            ]
        },
        "starters": [
            { "en": "Good morning, I'd like to open a personal savings account, please.", "bn": "শুভ সকাল, আমি একটি ব্যক্তিগত সঞ্চয়ী হিসাব খুলতে চাই।", "tip": "ব্যাংকে অ্যাকাউন্ট খোলার সূচনা বাক্য।" },
            { "en": "Hello, could you tell me the requirements to open a foreign currency account?", "bn": "হ্যালো, ফরেন কারেন্সি অ্যাকাউন্ট খোলার জন্য কী কী কাগজপত্র লাগে একটু বলবেন?", "tip": "বিশেষ অ্যাকাউন্ট খোলার প্রশ্ন।" },
            { "en": "Excuse me, which customer service desk handles new account registrations?", "bn": "মাফ করবেন, নতুন অ্যাকাউন্ট খোলার জন্য কোন ডেস্কে যেতে হবে?", "tip": "ডেস্ক খোঁজার বাক্য।" }
        ],
        "dialogue": [
            { "id": "1", "speaker": "Customer", "role": "A", "roleTitle": "Customer / গ্রাহক", "en": "Good morning! I would like to open a personal savings account today.", "bn": "শুভ সকাল! আমি আজ একটি ব্যক্তিগত সঞ্চয়ী ব্যাংক হিসাব খুলতে চাচ্ছি।", "ipa": "/ɡʊd ˈmɔːnɪŋ aɪ wʊd laɪk tuː ˈəʊpən ə ˈpɜːsənl ˈseɪvɪŋz əˈkaʊnt təˈdeɪ/", "bn_pron": "গুড মর্নিং! আই উড লাইক টু ওপেন আ পার্সোনাল সেভিংস অ্যাকাউন্ট টুডেই।" },
            { "id": "2", "speaker": "Officer", "role": "B", "roleTitle": "Officer / কর্মকর্তা", "en": "Good morning! We would be delighted to assist you. Do you have your ID and proof of address?", "bn": "শুভ সকাল! আপনাকে সাহায্য করতে পেরে আনন্দিত হব। সাথে কি আপনার এনআইডি ও ঠিকানার প্রমাণ আছে?", "ipa": "/ɡʊd ˈmɔːnɪŋ wiː wʊd biː dɪˈlaɪtɪd tuː əˈsɪst juː duː juː hæv jɔːr aɪˈdiː ænd pruːf ɒv əˈdres/", "bn_pron": "গুড মর্নিং! উই উড বি ডিলাইটেড টু অ্যাসিস্ট ইউ। ডু ইউ হ্যাভ ইউর আইডি অ্যান্ড প্রুফ অফ অ্যাড্রেস?" },
            { "id": "3", "speaker": "Customer", "role": "A", "roleTitle": "Customer / গ্রাহক", "en": "Yes, I brought my National ID card, passport size photos, and an electricity utility bill.", "bn": "হ্যাঁ, আমি জাতীয় পরিচয়পত্র, পাসপোর্ট সাইজের ছবি এবং বিদ্যুৎ বিলের কপি নিয়ে এসেছি।", "ipa": "/jes aɪ brɔːt maɪ ˈnæʃnəl aɪˈdiː kɑːd ˈpɑːspɔːt saɪz ˈfəʊtəʊz ænd ən ɪlekˈtrɪsəti juːˈtɪləti bɪl/", "bn_pron": "ইয়েস, আই ব্রট মাই ন্যাশনাল আইডি কার্ড, পাসপোর্ট সাইজ ফটোজ অ্যান্ড অ্যান ইলেকট্রিসিটি ইউটিলিটি বিল।" },
            { "id": "4", "speaker": "Officer", "role": "B", "roleTitle": "Officer / কর্মকর্তা", "en": "Excellent, everything is in order. Would you also like a Visa contactless debit card?", "bn": "চমৎকার, সব কাগজপত্র একদম ঠিকঠাক আছে। আপনি কি সাথে একটি ভিসা কন্ট্যাক্টলেস ডেবিট কার্ডও নিতে চান?", "ipa": "/ˈeksələnt ˈevriθɪŋ ɪz ɪn ˈɔːdə wʊd juː ˈɔːlsəʊ laɪk ə ˈviːzə ˈkɒntæktləs ˈdebɪt kɑːd/", "bn_pron": "এক্সেলেন্ট, এভরিথিং ইজ ইন অর্ডার। উড ইউ অলসো লাইক আ ভিসা কন্ট্যাক্টলেস ডেবিট কার্ড?" },
            { "id": "5", "speaker": "Customer", "role": "A", "roleTitle": "Customer / গ্রাহক", "en": "Yes please! Can I use the debit card for international online transactions?", "bn": "হ্যাঁ প্লিজ! ডেবিট কার্ডটি কি আন্তর্জাতিক অনলাইন কেনাকাটায় ব্যবহার করা যাবে?", "ipa": "/jes pliːz kæn aɪ juːz ðə ˈdebɪt kɑːd fɔːr ˌɪntəˈnæʃnəl ˈɒnlaɪn trænˈzækʃnz/", "bn_pron": "ইয়েস প্লীয! ক্যান আই ইউজ দ্য ডেবিট কার্ড ফর ইন্টারন্যাশনাল অনলাইন ট্রানজ্যাকশনস?" },
            { "id": "6", "speaker": "Officer", "role": "B", "roleTitle": "Officer / কর্মকর্তা", "en": "Yes, once you endorse your passport, international dual-currency transactions are active.", "bn": "হ্যাঁ, পাসপোর্ট অ্যান্ডোর্সমেন্ট সম্পন্ন করার সাথে সাথেই ডুয়েল কারেন্সি লেনদেন চালু হয়ে যাবে।", "ipa": "/jes wʌns juː ɪnˈdɔːs jɔː ˈpɑːspɔːt ˌɪntəˈnæʃnəl ˈdjuːəl ˈkʌrənsi trænˈzækʃnz ɑːr ˈæktɪv/", "bn_pron": "ইয়েস, ওয়ান্স ইউ এনডোর্স ইউর পাসপোর্ট, ইন্টারন্যাশনাল ডুয়েল কারেন্সি ট্রানজ্যাকশনস আর অ্যাক্টিভ।" },
            { "id": "7", "speaker": "Customer", "role": "A", "roleTitle": "Customer / গ্রাহক", "en": "That is very convenient. What is the minimum initial deposit required?", "bn": "তা তো খুবই সুবিধাজনক। অ্যাকাউন্টটি চালু করতে সর্বনিম্ন কত টাকা জমা দিতে হবে?", "ipa": "/ðæt ɪz ˈveri kənˈviːniənt wɒt ɪz ðə ˈmɪnɪməm ɪˈnɪʃl dɪˈpɒzɪt rɪˈkwaɪəd/", "bn_pron": "দ্যাট ইয ভেরি কনভিনিয়েন্ট। ওয়াট ইজ দ্য মিনিমাম ইনিশিয়াল ডিপোজিট রিকোয়ার্ড?" },
            { "id": "8", "speaker": "Officer", "role": "B", "roleTitle": "Officer / কর্মকর্তা", "en": "The minimum opening deposit is 1,000 Taka, which remains in your available balance.", "bn": "সর্বনিম্ন উদ্বোধনী জমা ১,০০০ টাকা, যা আপনার অ্যাকাউন্টের ব্যালেন্সেই জমা থাকবে।", "ipa": "/ðə ˈmɪnɪməm ˈəʊpnɪŋ dɪˈpɒzɪt ɪz wʌn ˈθaʊznd ˈtɑːkə wɪtʃ rɪˈmeɪnz ɪn jɔːr əˈveɪləbl ˈbæləns/", "bn_pron": "দ্য মিনিমাম ওপেনিং ডিপোজিট ইজ ওয়ান থাউজেন্ড টাকা, উইচ রিমেইন্স ইন ইউর অ্যাভেইলেবল ব্যালেন্স।" },
            { "id": "9", "speaker": "Customer", "role": "A", "roleTitle": "Customer / গ্রাহক", "en": "Great. Please sign me up for mobile internet banking as well.", "bn": "দারুণ। আমাকে মোবাইল ইন্টারনেট ব্যাংকিং সুবিধার জন্যও সাইন-আপ করিয়ে দিন।", "ipa": "/ɡreɪt pliːz saɪn miː ʌp fɔː ˈməʊbaɪl ˈɪntənet ˈbæŋkɪŋ æz wel/", "bn_pron": "গ্রেট। প্লীয সাইন মি আপ ফর মোবাইল ইন্টারনেট ব্যাংকিং অ্যাজ ওয়েল।" },
            { "id": "10", "speaker": "Officer", "role": "B", "roleTitle": "Officer / কর্মকর্তা", "en": "Please sign here and here. Your account is ready, and your debit card will arrive in 3 days!", "bn": "অনুগ্রহ করে এখানে এবং এখানে স্বাক্ষর করুন। আপনার হিসাব খোলা সম্পন্ন, আর ৩ দিনের মধ্যেই কার্ড চলে আসবে!", "ipa": "/pliːz saɪn hɪər ænd hɪə jɔːr əˈkaʊnt ɪz ˈredi ænd jɔː ˈdebɪt kɑːd wɪl əˈraɪv ɪn θriː deɪz/", "bn_pron": "প্লীয সাইন হিয়ার অ্যান্ড হিয়ার। ইউর অ্যাকাউন্ট ইজ রেডি, অ্যান্ড ইউর ডেবিট কার্ড উইল অ্যারাইভ ইন থ্রি ডেইজ!" }
        ],
        "followUps": [
            { "en": "How can I set up the mobile banking password after receiving the card?", "bn": "কার্ড পাওয়ার পর মোবাইল ব্যাংকিং পাসওয়ার্ড কীভাবে সেট করব?" },
            { "en": "What is the daily cash withdrawal limit at ATM booths?", "bn": "এটিএম বুথ থেকে দৈনিক সর্বোচ্চ কত টাকা ক্যাশ তোলা যায়?" },
            { "en": "Are there any annual maintenance fees for this savings account?", "bn": "এই সঞ্চয়ী হিসাবের জন্য কি বাৎসরিক কোনো মেইনটেন্যান্স ফি আছে?" }
        ],
        "closers": [
            { "en": "Thank you so much for the swift and professional service!", "bn": "দ্রুত ও পেশাদার সেবার জন্য অনেক ধন্যবাদ!" },
            { "en": "I appreciate your patient explanation of the features. Have a great day!", "bn": "বৈশিষ্ট্যগুলো ধৈর্য ধরে বুঝিয়ে দেওয়ার জন্য কৃতজ্ঞ। দিনটি সুন্দর কাটুক!" },
            { "en": "All paperwork complete, thanks again officer!", "bn": "সব কাজ সম্পন্ন হলো, আবারও ধন্যবাদ অফিসার!" }
        ],
        "nativePhrases": [
            { "phrase": "Sign on the dotted line", "meaning": "চুক্তি বা ফর্মে চূড়ান্ত স্বাক্ষর করা", "context": "অ্যাকাউন্ট খোলার শেষ ধাপে।" },
            { "phrase": "Nest egg", "meaning": "ভবিষ্যতের জন্য জমিয়ে রাখা সঞ্চয়", "context": "সঞ্চয় হিসাবের গুরুত্ব বোঝাতে।" },
            { "phrase": "In the black", "meaning": "লাভজনক বা ব্যাংক হিসাবে উদ্বৃত্ত টাকা থাকা (ঋণমুক্ত)", "context": "আর্থিক সক্ষমতা বোঝাতে।" }
        ]
    },

    # 15. Discussing Daily Weather & Rain
    {
        "id": "conv-15-discussing-daily-weather-rain",
        "number": 15,
        "title": "Discussing Daily Weather & Rain",
        "titleBn": "আবহাওয়া ও বৃষ্টির পূর্বাভাস নিয়ে কথা",
        "level": "Easy",
        "category": "Daily Life",
        "imageUrl": "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?auto=format&fit=crop&w=800&q=80",
        "sceneDescription": "হঠাৎ আকাশ মেঘলা হয়ে মুষলধারে বৃষ্টি নামলে বাসস্টপে দাঁড়িয়ে সহযাত্রীর সাথে আবহাওয়া, ছাতা ও পূর্বাভাস নিয়ে আড্ডা।",
        "briefing": {
            "setting": "বৃষ্টিভেজা বাসস্টপ বা বারান্দা (Rainy Bus Shelter)",
            "roleA": { "name": "Commuter A", "titleBn": "যাত্রী A (Arif)", "descBn": "মেঘলা আকাশ ও হঠাৎ বৃষ্টির পূর্বাভাস নিয়ে কথা বলছেন" },
            "roleB": { "name": "Commuter B", "titleBn": "যাত্রী B (Suman)", "descBn": "ছাতা না নিয়ে বের হওয়ায় বৃষ্টির আশ্রয়ে দাঁড়িয়ে কথা বলছেন" },
            "overviewBn": "ইংরেজিতে যেকোনো কথোপকথনের বরফ ভাঙতে (Ice breaker) আবহাওয়া সবচেয়ে জনপ্রিয় বিষয়। 'It looks like rain', 'It's pouring outside', 'Did you check the forecast?' ইত্যাদি বাক্য যেকোনো আড্ডাকে সহজ করে তোলে।",
            "politenessTips": [
                "আকাশ মেঘলা দেখলে বলুন: 'Looks like we're in for quite a downpour today!'",
                "ভারী বৃষ্টি দেখে বলুন: 'It's really pouring buckets out there!'",
                "আবহাওয়ার পূর্বাভাস উল্লেখ করুন: 'The weather app says it should clear up by evening.'"
            ],
            "keyVocabulary": [
                { "word": "Downpour", "meaning": "মুষলধারে প্রবল বৃষ্টি", "pron": "ডাউনপোর" },
                { "word": "Pouring buckets", "meaning": "বালতি ঢালার মতো তীব্র বৃষ্টি হওয়া", "pron": "পোরিং বাকেটস" },
                { "word": "Overcast", "meaning": "চারদিক মেঘে ঢেকে থাকা আকাশ", "pron": "ওভারকাস্ট" },
                { "word": "Clear up", "meaning": "বৃষ্টি থেমে আকাশ পরিষ্কার হওয়া", "pron": "ক্লিয়ার আপ" }
            ]
        },
        "starters": [
            { "en": "Looks like the skies are about to open up any second!", "bn": "মনে হচ্ছে যেকোনো মুহূর্তে মুষলধারে বৃষ্টি নামবে!", "tip": "বৃষ্টির পূর্বাভাস নিয়ে কথা শুরুর চমৎকার রূপ।" },
            { "en": "Did you catch today's weather forecast before leaving home?", "bn": "বাসা থেকে বের হওয়ার আগে কি আজকের আবহাওয়ার খবর দেখেছিলে?", "tip": "আবহাওয়া নিয়ে প্রশ্ন করার বাক্য।" },
            { "en": "What unpredictable weather we've been having this week!", "bn": "এই সপ্তাহে কী অপ্রত্যাশিত আবহাওয়া যাচ্ছে দেখুন!", "tip": "সহযাত্রীর সাথে আড্ডা শুরুর কৌশল।" }
        ],
        "dialogue": [
            { "id": "1", "speaker": "Arif", "role": "A", "roleTitle": "Commuter A / আরিফ", "en": "Look at those dark clouds! It looks like it's going to pour any minute.", "bn": "কালো মেঘগুলোর দিকে তাকিয়ে দেখুন! যেকোনো মুহূর্তে ঝুম বৃষ্টি নামবে বলে মনে হচ্ছে।", "ipa": "/lʊk æt ðəʊz dɑːk klaʊdz ɪt lʊks laɪk ɪts ˈɡəʊɪŋ tuː pɔːr ˈeni ˈmɪnɪt/", "bn_pron": "লুক অ্যাট দোজ ডার্ক ক্লাউডস! ইট লুকস লাইক ইটস গোয়িং টু পোর এনি মিনিট।" },
            { "id": "2", "speaker": "Suman", "role": "B", "roleTitle": "Commuter B / সুমন", "en": "Tell me about it! And of course, today is the one day I left my umbrella at home.", "bn": "আর বলবেন না! আর ঠিক আজকের দিনেই আমি ছাতাটা বাসায় ফেলে এসেছি।", "ipa": "/tel miː əˈbaʊt ɪt ænd ɒv kɔːs təˈdeɪ ɪz ðə wʌn deɪ aɪ left maɪ ʌmˈbrelə æt həʊm/", "bn_pron": "টেল মি অ্যাবাউট ইট! অ্যান্ড অফ কোর্স, টুডেই ইজ দ্য ওয়ান ডেই আই লেফট মাই আমব্রেলা অ্যাট হোম।" },
            { "id": "3", "speaker": "Arif", "role": "A", "roleTitle": "Commuter A / আরিফ", "en": "That always happens! Luckily we have this roof shelter over the bus stop.", "bn": "এমনটাই সবসময় ঘটে! ভাগ্য ভালো যে বাসস্টপের ওপরে এই ছাউনিটা রয়েছে।", "ipa": "/ðæt ˈɔːlweɪz ˈhæpənz ˈlʌkɪli wiː hæv ðɪs ruːf ˈʃeltər ˈəʊvə ðə bʌs stɒp/", "bn_pron": "দ্যাট অলওয়েজ হ্যাপেনস! লাকিলি উই হ্যাভ দিস রুফ শেল্টার ওভার দ্য বাস স্টপ।" },
            { "id": "4", "speaker": "Suman", "role": "B", "roleTitle": "Commuter B / সুমন", "en": "Listen to that thunder! Here comes the downpour.", "bn": "মেঘের গর্জনটা শুনুন! এই রে, মুষলধারে বৃষ্টি নেমে গেল।", "ipa": "/ˈlɪsn tuː ðæt ˈθʌndə hɪə kʌmz ðə ˈdaʊnpɔː/", "bn_pron": "লিসেন টু দ্যাট থান্ডার! হিয়ার কামস দ্য ডাউনপোর।" },
            { "id": "5", "speaker": "Arif", "role": "A", "roleTitle": "Commuter A / আরিফ", "en": "It's really raining cats and dogs! The streets are already filling with water.", "bn": "সত্যিই তো মুষলধারে বৃষ্টি হচ্ছে! রাস্তাগুলো ইতিমধ্যেই পানিতে ভরে উঠছে।", "ipa": "/ɪts ˈrɪəli ˈreɪnɪŋ kæts ænd dɒɡz ðə striːts ɑːr ɔːlˈredi ˈfɪlɪŋ wɪð ˈwɔːtə/", "bn_pron": "ইটস রিয়ালি রেইনিং ক্যাটস অ্যান্ড ডগস! দ্য স্ট্রিটস আর অলরেডি ফিলিং উইথ ওয়াটার।" },
            { "id": "6", "speaker": "Suman", "role": "B", "roleTitle": "Commuter B / সুমন", "en": "Did your weather forecast app predict this much rain today?", "bn": "আপনার আবহাওয়ার অ্যাপে কি আজ এত বৃষ্টির কোনো পূর্বাভাস ছিল?", "ipa": "/dɪd jɔː ˈweðə ˈfɔːkɑːst æp prɪˈdɪkt ðɪs mʌtʃ reɪn təˈdeɪ/", "bn_pron": "ডিড ইউর ওয়েদার ফোরকাস্ট অ্যাপ প্রেডিক্ট দিস মাচ রেইন টুডেই?" },
            { "id": "7", "speaker": "Arif", "role": "A", "roleTitle": "Commuter A / আরিফ", "en": "It showed only a 20% chance of showers in the morning. Summer weather is so unpredictable!", "bn": "সকালে মাত্র ২০% হালকা বৃষ্টির সম্ভাবনা দেখিয়েছিল। গ্রীষ্মের আবহাওয়া বড্ড খামখেয়ালী!", "ipa": "/ɪt ʃəʊd ˈəʊnli ə ˈtwenti pəˈsent tʃɑːns ɒv ˈʃaʊəz ɪn ðə ˈmɔːnɪŋ ˈsʌmə ˈweðər ɪz səʊ ˌʌnprɪˈdɪktəbl/", "bn_pron": "ইট শোড অনলি আ টোয়েন্টি পার্সেন্ট চান্স অফ শাওয়ার্স। সামার ওয়েদার ইজ সো আনপ্রেডিক্টেবল!" },
            { "id": "8", "speaker": "Suman", "role": "B", "roleTitle": "Commuter B / সুমন", "en": "At least the temperature dropped. The cool breeze feels wonderful after weeks of heat.", "bn": "অন্তত তাপমাত্রা কিছুটা কমেছে। কয়েক সপ্তাহের তীব্র গরমের পর শীতল বাতাসটা দারুণ লাগছে।", "ipa": "/æt liːst ðə ˈtemprətʃə drɒpt ðə kuːl briːz fiːlz ˈwʌndəfl ˈɑːftə wiːks ɒv hiːt/", "bn_pron": "অ্যাট লিস্ট দ্য টেম্পারেচার ড্রপড। দ্য কুল ব্রীজ ফিলস ওয়ান্ডারফুল আফটার উইকস অফ হিট।" },
            { "id": "9", "speaker": "Arif", "role": "A", "roleTitle": "Commuter A / আরিফ", "en": "I completely agree. Ah look, the rain is easing into a gentle drizzle now.", "bn": "একদম ঠিক বলেছেন। এই দেখুন, ভারী বৃষ্টি কমে এখন গুঁড়ি গুঁড়ি বৃষ্টিতে পরিণত হয়েছে।", "ipa": "/aɪ kəmˈpliːtli əˈɡriː ɑː lʊk ðə reɪn ɪz ˈiːzɪŋ ˈɪntuː ə ˈdʒentl ˈdrɪzl naʊ/", "bn_pron": "আই কমপ্লিটলি এগ্রি। আহ লুক, দ্য রেইন ইজ ইজিং ইনটু আ জেন্টল ড্রিসল নাও।" },
            { "id": "10", "speaker": "Suman", "role": "B", "roleTitle": "Commuter B / সুমন", "en": "And here comes our bus! We timed that shelter perfectly. Let's get on board!", "bn": "আর এই যে আমাদের বাসও চলে এসেছে! আমরা একদম সঠিক সময়ে আশ্রয় পেয়েছিলাম। চলুন বাসে উঠি!", "ipa": "/ænd hɪə kʌmz ˈaʊə bʌs wiː taɪmd ðæt ˈʃeltə ˈpɜːfɪktli lets ɡet ɒn bɔːd/", "bn_pron": "অ্যান্ড হিয়ার কামস আওয়ার বাস! উই টাইমড দ্যাট শেল্টার পারফেক্টলি। লেটস গেট অন বোর্ড!" }
        ],
        "followUps": [
            { "en": "Do you think the rain will cause heavy traffic gridlocks today?", "bn": "বৃষ্টির কারণে আজ কি রাস্তায় প্রচণ্ড জ্যাম লেগে যাবে বলে মনে হয়?" },
            { "en": "Do you enjoy hot tea and snacks when it rains like this?", "bn": "এমন বৃষ্টির দিনে গরম চা আর স্ন্যাক্স খেতে আপনার কেমন লাগে?" },
            { "en": "Is the monsoon season usually this intense around here?", "bn": "এখানে বর্ষাকাল কি সাধারণত সবসময়ই এত ভারী হয়?" }
        ],
        "closers": [
            { "en": "Stay dry out there! It was great chatting with you.", "bn": "বৃষ্টি থেকে সাবধানে থাকবেন! আপনার সাথে কথা বলে ভালো লাগল।" },
            { "en": "Hope you get home safely before the next shower hits!", "bn": "পরবর্তী বৃষ্টি নামার আগেই আশা করি নিরাপদে বাড়ি পৌঁছে যাবেন!" },
            { "en": "Enjoy the cool weather today! Take care.", "bn": "আজকের মনোরম ঠান্ডা আবহাওয়া উপভোগ করুন! ভালো থাকবেন।" }
        ],
        "nativePhrases": [
            { "phrase": "Raining cats and dogs", "meaning": "প্রচণ্ড মুষলধারে অবিরাম বৃষ্টি হওয়া", "context": "ভারী বৃষ্টির সময় সবচেয়ে ক্লাসিক ইংরেজি বাগধারা।" },
            { "phrase": "Clear up", "meaning": "মেঘ কেটে গিয়ে আকাশ পরিষ্কার ও রোদোজ্জ্বল হওয়া", "context": "বৃষ্টি থামার পূর্বাভাসে।" },
            { "phrase": "In for a spell of rain", "meaning": "বেশ কিছু সময় ধরে বৃষ্টি চলার পূর্বাভাস", "context": "আবহাওয়ার বর্ণনা দিতে।" }
        ]
    }
]

print(f"Loaded {len(SITUATIONS_11_20)} situations (11 to 15)")
