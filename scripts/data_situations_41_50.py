# -*- coding: utf-8 -*-
"""
Situations 41 to 50 for Spoken English Lab
"""

SITUATIONS_41_50 = [
    # 41. Returning to Retrieve Lost Property at a Cafe
    {
        "id": "conv-41-retrieve-lost-property-at-cafe",
        "number": 41,
        "title": "Returning to Retrieve a Lost Item at a Cafe",
        "titleBn": "ক্যাফেতে ফেলে যাওয়া জরুরি জিনিস বা ব্যাগ ফেরত খোঁজা",
        "level": "Easy",
        "category": "Services",
        "imageUrl": "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
        "sceneDescription": "ক্যাফেতে কফি খেয়ে বের হয়ে যাওয়ার পর টেবিলে ল্যাপটপের চার্জার বা ব্যাগ ফেলে যাওয়ার কথা মনে পড়া এবং দ্রুত ফিরে এসে ম্যানেজারের সাথে বিনয়ের সাথে কথা বলে তা উদ্ধার করা।",
        "briefing": {
            "setting": "সেন্ট্রাল লন্ডনের একটি ব্যস্ত ক্যাফে কাউন্টার (Busy Cafe Counter)",
            "roleA": { "name": "Distressed Customer", "titleBn": "গ্রাহক (Rahim)", "descBn": "কিছুক্ষণ আগে ক্যাফেতে বসে কাজ করেছিলেন এবং চার্জার ফেলে গেছেন" },
            "roleB": { "name": "Cafe Supervisor", "titleBn": "ক্যাফে সুপারভাইজার (Emily)", "descBn": "লস্ট অ্যান্ড ফাউন্ড রেজিস্টার দেখে গ্রাহককে সহায়তা করছেন" },
            "overviewBn": "কোনো পাবলিক প্লেসে জিনিস হারালে আতঙ্কিত না হয়ে শান্তভাবে সময়, টেবিল নম্বর এবং জিনিসের সুনির্দিষ্ট বিবরণ দেওয়া জরুরি। এতে কর্মীরা দ্রুত আইটেমটি ভেরিফাই করতে পারে।",
            "politenessTips": [
                "কর্মীদের ওপর দোষ না চাপিয়ে শান্তভাবে বলুন: 'I believe I accidentally left something behind.'",
                "জিনিসটির ব্র‍্যান্ড ও রঙ স্পষ্ট করে বলুন: 'It's a black 65-watt Dell USB-C charger.'",
                "উদ্ধার হওয়ার পর আন্তরিকভাবে কৃতজ্ঞতা জানান: 'You saved my entire workday!'"
            ],
            "keyVocabulary": [
                { "word": "Left behind", "meaning": "ভুলে ফেলে যাওয়া", "pron": "লেফট বিহাইন্ড" },
                { "word": "Lost and Found", "meaning": "হারানো ও প্রাপ্তি বিভাগ", "pron": "লস্ট অ্যান্ড ফাউন্ড" },
                { "word": "Distinctive mark", "meaning": "চেনার মতো বিশেষ চিহ্ন", "pron": "ডিস্টিঙ্কটিভ মার্ক" },
                { "word": "Safekeeping", "meaning": "নিরাপদ সংরক্ষণ", "pron": "সেইফকিপিং" }
            ]
        },
        "starters": [
            { "en": "Excuse me, sorry to bother you, but I think I left my charger at table number four.", "bn": "মাফ করবেন, আপনাকে বিরক্ত করার জন্য দুঃখিত, তবে মনে হয় ৪ নম্বর টেবিলে আমার চার্জারটি ফেলে গেছি।" },
            { "en": "Hi there, has anyone turned in a black laptop adapter within the last hour?", "bn": "হ্যালো, গত এক ঘণ্টার মধ্যে কেউ কি কালো রঙের ল্যাপটপ অ্যাডাপ্টার জমা দিয়েছে?" },
            { "en": "Hello, I was sitting near the window twenty minutes ago and forgot my pouch.", "bn": "হ্যালো, বিশ মিনিট আগে আমি জানালার পাশে বসেছিলাম এবং আমার পাউচটি ভুলে ফেলে গেছি।" }
        ],
        "dialogue": [
            {
                "id": "1", "speaker": "Rahim", "role": "A", "roleTitle": "Customer / রহিম",
                "en": "Excuse me, miss! I am so sorry to interrupt your rush, but I was sitting at the corner table thirty minutes ago and I think I left my laptop charger plugged in.",
                "bn": "মাফ করবেন আপা! আপনাদের ব্যস্ততায় ব্যাঘাত ঘটানোর জন্য দুঃখিত, তবে আধা ঘণ্টা আগে আমি কোণার টেবিলে বসেছিলাম এবং মনে হয় ল্যাপটপের চার্জারটি প্লাগ করা অবস্থায় ফেলে গেছি।",
                "ipa": "/ɪkˈskjuːz miː mɪs aɪ æm səʊ ˈsɒri tuː ˌɪntəˈrʌpt jɔː rʌʃ bʌt aɪ wɒz ˈsɪtɪŋ æt ðə ˈkɔːnə ˈteɪbl/",
                "bn_pron": "ইক্সকিউজ মি, মিস! আই অ্যাম সো সরি টু ইন্টারাপ্ট ইউর রাশ, বাট আই থিংক আই লেফট মাই ল্যাপটপ চার্জার প্লাগড ইন।"
            },
            {
                "id": "2", "speaker": "Emily", "role": "B", "roleTitle": "Supervisor / এমিলি",
                "en": "Don't panic at all, sir! Our staff cleans tables immediately after guests leave. What brand and color is the charger?",
                "bn": "একদম ঘাবড়াবেন না স্যার! অতিথিরা চলে যাওয়ার সাথে সাথেই আমাদের কর্মীরা টেবিল পরিষ্কার করে। চার্জারটি কোন ব্র্যান্ড ও রঙের ছিল?",
                "ipa": "/dəʊnt ˈpænɪk æt ɔːl sɜːr ˈaʊə stɑːf kliːnz ˈteɪblz ɪˈmiːdiətli ˈɑːftə ɡests liːv wɒt brænd ænd ˈkʌlər ɪz ðə ˈtʃɑːdʒə/",
                "bn_pron": "ডোন্ট প্যানিক অ্যাট অল, স্যার! আওয়ার স্টাফ ক্লিনস টেবলস ইমিডিয়েটলি। হোয়াট ব্র্যান্ড অ্যান্ড কালার ইজ দ্য চার্জার?"
            },
            {
                "id": "3", "speaker": "Rahim", "role": "A", "roleTitle": "Customer / রহিম",
                "en": "It's an original black 65-watt Dell charger, and it has a small blue piece of tape near the USB-C head.",
                "bn": "এটি ডেল কোম্পানির আসল কালো রঙের ৬৫ ওয়াটের চার্জার, এবং ইউএসবি-সি হেডের কাছে একটা ছোট নীল টেপ লাগানো আছে।",
                "ipa": "/ɪts ən əˈrɪdʒənl blæk ˈsɪksti faɪv wɒt del ˈtʃɑːdʒə ænd ɪt hæz ə smɔːl bluː piːs ɒv teɪp nɪə ðə juː-ɛs-biː-siː hed/",
                "bn_pron": "ইটস অ্যান অরিজিনাল ব্ল্যাক সিক্সটি ফাইভ ওয়াট ডেল চার্জার, অ্যান্ড ইট হ্যাজ আ স্মল ব্লু পিস অফ টেপ।"
            },
            {
                "id": "4", "speaker": "Emily", "role": "B", "roleTitle": "Supervisor / এমিলি",
                "en": "Ah yes! Marcus found that plugged beneath socket three. He handed it to me for safekeeping in our manager drawer. Let me fetch it.",
                "bn": "আহ হ্যাঁ! তিন নম্বর সকেটে মার্কাস ওটা পেয়েছিল। সে নিরাপদে রাখার জন্য ম্যানেজার ড্রয়ারে জমা দিয়ে গেছে। আমি এনে দিচ্ছি।",
                "ipa": "/ɑː jes ˈmɑːkəs faʊnd ðæt plʌɡd bɪˈniːθ ˈsɒkɪt θriː hiː ˈhændɪd ɪt tuː miː fɔː ˈseɪfˌkiːpɪŋ ɪn ˈaʊə ˈmænɪdʒə drɔː/",
                "bn_pron": "আহ ইয়েস! মার্কাস ফাউন্ড দ্যাট প্লাগড বিনিথ সকেট থ্রি। হি হ্যান্ডেড ইট টু মি ফর সেইফকিপিং।"
            },
            {
                "id": "5", "speaker": "Rahim", "role": "A", "roleTitle": "Customer / রহিম",
                "en": "Oh, what a huge relief! I have an urgent client presentation in two hours and my battery was down to ten percent.",
                "bn": "ওহ, কী যে স্বস্তি পেলাম! দুই ঘণ্টা পরেই আমার ক্লায়েন্ট প্রেজেন্টেশন আর ল্যাপটপের চার্জ নেমে এসেছিল ১০ শতাংশে।",
                "ipa": "/əʊ wɒt ə hjuːdʒ rɪˈliːf aɪ hæv ən ˈɜːdʒənt ˈklaɪənt ˌpreznˈteɪʃn ɪn tuː ˈaʊəz ænd maɪ ˈbætəri wɒz daʊn tuː ten pəˈsent/",
                "bn_pron": "ওহ, হোয়াট আ হিউজ রিলিফ! আই হ্যাভ অ্যান আর্জেন্ট ক্লায়েন্ট প্রেজেন্টেশন ইন টু আওয়ার্স।"
            },
            {
                "id": "6", "speaker": "Emily", "role": "B", "roleTitle": "Supervisor / এমিলি",
                "en": "Here it is! Could you please verify the blue tape so we know it belongs to you?",
                "bn": "এই যে নিন! নীল টেপটি কি একটু মিলিয়ে দেখে নিশ্চিত করবেন যে এটা সত্যিই আপনার?",
                "ipa": "/hɪər ɪt ɪz kʊd juː pliːz ˈverɪfaɪ ðə bluː teɪp səʊ wiː nəʊ ɪt bɪˈlɒŋz tuː juː/",
                "bn_pron": "হিয়ার ইট ইজ! কুড ইউ প্লিজ ভেরিফাই দ্য ব্লু টেপ সো উই নো ইট বিলংস টু ইউ?"
            },
            {
                "id": "7", "speaker": "Rahim", "role": "A", "roleTitle": "Customer / রহিম",
                "en": "Yes, exactly! That is definitely mine. Do I need to sign any lost-and-found confirmation log?",
                "bn": "হ্যাঁ, একদম ঠিক! এটা নিশ্চিতভাবেই আমার। আমাকে কি লস্ট-অ্যান্ড-ফাউন্ডের কোনো খাতায় সই করতে হবে?",
                "ipa": "/jes ɪɡˈzæktli ðæt ɪz ˈdefɪnətli maɪn duː aɪ niːd tuː saɪn ˈeni lɒst ænd faʊnd ˌkɒnfəˈmeɪʃn lɒɡ/",
                "bn_pron": "ইয়েস, এক্সাক্টলি! দ্যাট ইজ ডেফিনিটলি মাইন। ডু আই নিড টু সাইন এনি লস্ট অ্যান্ড ফাউন্ড কনফার্মেশন লগ?"
            },
            {
                "id": "8", "speaker": "Emily", "role": "B", "roleTitle": "Supervisor / এমিলি",
                "en": "Just your initial and phone number on this line right here, please. It protects both you and our staff.",
                "bn": "শুধু এই লাইনে আপনার নামের প্রথম অক্ষর আর ফোন নম্বরটি লিখে দিন প্লিজ। এতে আপনার এবং আমাদের স্টাফ উভয়েরই নিরাপত্তা থাকে।",
                "ipa": "/dʒʌst jɔːr ɪˈnɪʃl ænd fəʊn ˈnʌmbər ɒn ðɪs laɪn raɪt hɪə pliːz ɪt prəˈtekts bəʊθ juː ænd ˈaʊə stɑːf/",
                "bn_pron": "জাস্ট ইউর ইনিশিয়াল অ্যান্ড ফোন নাম্বার অন দিস লাইন রাইট হিয়ার, প্লিজ।"
            },
            {
                "id": "9", "speaker": "Rahim", "role": "A", "roleTitle": "Customer / রহিম",
                "en": "Done! You and Marcus honestly saved my entire day. I really appreciate how organized and trustworthy your team is.",
                "bn": "সই করে দিলাম! আপনি এবং মার্কাস সত্যি আমার সারাটা দিন বাঁচিয়ে দিলেন। আপনাদের টিমের সততা আর নিয়মানুবর্তিতার জন্য অনেক কৃতজ্ঞতা।",
                "ipa": "/dʌn juː ænd ˈmɑːkəs ˈɒnɪstli seɪvd maɪ ɪnˈtaɪə deɪ aɪ ˈrɪəli əˈpriːʃieɪt haʊ ˈɔːɡənaɪzd ænd ˈtrʌstwɜːði jɔː tiːm ɪz/",
                "bn_pron": "ডান! ইউ অ্যান্ড মার্কাস অনেস্টলি সেভড মাই এনটায়ার ডে। আই রিয়ালি অ্যাপ্রিশিয়েট ইউর টিম।"
            },
            {
                "id": "10", "speaker": "Emily", "role": "B", "roleTitle": "Supervisor / এমিলি",
                "en": "It is always our pleasure to help. Best of luck with your client presentation, and we hope to see you again soon!",
                "bn": "আপনাকে সাহায্য করতে পেরে আমাদেরও ভালো লাগছে। আপনার প্রেজেন্টেশন অনেক ভালো হোক, আশা করি শীঘ্রই আবার দেখা হবে!",
                "ipa": "/ɪt ɪz ˈɔːlweɪz ˈaʊə ˈpleʒə tuː help best ɒv lʌk wɪð jɔː ˈklaɪənt ˌpreznˈteɪʃn ænd wiː həʊp tuː siː juː əˈɡen suːn/",
                "bn_pron": "ইট ইজ অলওয়েজ আওয়ার প্লেজার টু হেল্প। বেস্ট অফ লাক উইথ ইউর ক্লায়েন্ট প্রেজেন্টেশন!"
            }
        ],
        "followUps": [
            { "en": "Could you also pass my sincere thanks to Marcus when his break is over?", "bn": "মার্কাসের ব্রেক শেষ হলে তাকেও কি আমার আন্তরিক ধন্যবাদটা একটু পৌঁছে দেবেন?" },
            { "en": "Are you guys open until eight this evening? I might pop back in for coffee.", "bn": "আপনারা কি আজ সন্ধ্যা আটটা পর্যন্ত খোলা আছেন? আমি হয়তো আবার কফি খেতে আসব।" },
            { "en": "Do you have a tip jar or QR code where I can leave a small gesture for the crew?", "bn": "আপনাদের কি কোনো টিপ জার বা কিউআর কোড আছে যেখানে কর্মীদের জন্য ছোট কিছু উপহার রাখতে পারি?" }
        ],
        "closers": [
            { "en": "Thanks a million again, Emily. Have a wonderful rest of your shift!", "bn": "আবারও লাখো ধন্যবাদ এমিলি। আপনার বাকি শিফট খুব ভালো কাটুক!" },
            { "en": "Take care, and thank you for taking such good care of lost belongings.", "bn": "ভালো থাকবেন, আর হারানো জিনিসের এত যত্ন নেওয়ার জন্য ধন্যবাদ।" },
            { "en": "See you around! Bye!", "bn": "আবার দেখা হবে! বিদায়!" }
        ],
        "nativePhrases": [
            { "phrase": "You saved my day", "meaning": "আপনি আমার বিরাট বড় উপকার করেছেন", "context": "জরুরি কোনো হারিয়ে যাওয়া জিনিস উদ্ধার করে দেওয়ার পর কৃতজ্ঞতায় বলা।" },
            { "phrase": "Turned in", "meaning": "কর্মীদের কাছে জমা দেওয়া হয়েছে", "context": "পাবলিক প্লেসে কোনো জিনিস কুড়িয়ে পেয়ে কর্তৃপক্ষের কাছে হস্তান্তর করা।" },
            { "phrase": "Pop back in", "meaning": "কিছুক্ষণের জন্য আবার একটু ঘুরে যাওয়া", "context": "ক্যাফে বা দোকানে আবার ক্ষণিকের জন্য ফেরার কথা জানাতে।" }
        ]
    },

    # 42. Apartment Lease Renewal & Rent Negotiation
    {
        "id": "conv-42-apartment-lease-renewal-negotiation",
        "number": 42,
        "title": "Apartment Lease Renewal & Rent Negotiation",
        "titleBn": "বাড়িওয়ালার সাথে বাড়িভাড়া কমানো ও নতুন চুক্তি নিয়ে দরকষাকষি",
        "level": "Intermediate",
        "category": "Daily Life",
        "imageUrl": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
        "sceneDescription": "এক বছরের ফ্ল্যাট ভাড়ার মেয়াদ শেষ হওয়ার মুখে বাড়িওয়ালা ভাড়া ১০% বাড়াতে চাইলে বিনয়ের সাথে নিজের সময়মতো ভাড়া পরিশোধের ট্র্যাক রেকর্ড তুলে ধরে ভাড়া স্থিতিশীল রাখার আলোচনা।",
        "briefing": {
            "setting": "লন্ডন বা টরন্টোর অ্যাপার্টমেন্টের লিভিং রুম বা ফোন কল (Phone Call / In-Person)",
            "roleA": { "name": "Reliable Tenant", "titleBn": "ভাড়াটিয়া (Tanvir)", "descBn": "এক বছর ধরে নিয়মিত ভাড়া দিয়ে আসছেন এবং আরও দুই বছর থাকতে চান" },
            "roleB": { "name": "Landlord / Agent", "titleBn": "বাড়িওয়ালা (Mr. Harrison)", "descBn": "বাজারের মূল্যবৃদ্ধি দেখিয়ে ভাড়া বাড়ানোর প্রস্তাব দিচ্ছেন" },
            "overviewBn": "বাড়িভাড়া নিয়ে নেগোশিয়েট করার সময় আক্রমণাত্মক না হয়ে নিজের নির্ভরযোগ্যতা তুলে ধরা (Timely payments, zero complaints, well-maintained flat) এবং দীর্ঘমেয়াদী চুক্তির প্রস্তাব দিয়ে পারস্পরিক লাভজনক সমাধান বের করতে হয়।",
            "politenessTips": [
                "কখনো একতরফা রাগ দেখাবেন না; বলুন: 'I genuinely love living here, but the proposed hike is outside my budget.'",
                "নিজের গুড ট্র্যাক রেকর্ড উল্লেখ করুন: 'I've never missed a single rent payment in twelve months.'",
                "উইন-উইন প্রস্তাব দিন: 'If we lock in the current rate, I'm ready to sign a two-year extension today.'"
            ],
            "keyVocabulary": [
                { "word": "Lease renewal", "meaning": "চুক্তির মেয়াদ বৃদ্ধি", "pron": "লিজ রিনিউয়াল" },
                { "word": "Rental hike / increase", "meaning": "বাড়িভাড়া বৃদ্ধি", "pron": "রেন্টাল হাইক" },
                { "word": "Track record", "meaning": "অতীতের সুনামের রেকর্ড", "pron": "ট্র্যাক রেকর্ড" },
                { "word": "Wear and tear", "meaning": "স্বাভাবিক ব্যবহারের কারণে ক্ষয়", "pron": "ওয়্যার অ্যান্ড টিয়ার" }
            ]
        },
        "starters": [
            { "en": "Good morning Mr. Harrison, I received your email regarding the lease renewal and wanted to discuss it briefly.", "bn": "শুভ সকাল মিস্টার হ্যারিসন, চুক্তি নবায়ন সংক্রান্ত আপনার ইমেইলটি পেয়েছিলাম এবং এ নিয়ে একটু কথা বলতে চেয়েছিলাম।" },
            { "en": "Hi Mr. Harrison, do you have five minutes to chat about next year's tenancy agreement?", "bn": "হ্যালো মিস্টার হ্যারিসন, আগামী বছরের ভাড়া চুক্তি নিয়ে কি ৫ মিনিট কথা বলা যাবে?" },
            { "en": "Hello! I am calling to discuss the proposed rent adjustment for flat 3B.", "bn": "হ্যালো! ফ্ল্যাট ৩বি-এর প্রস্তাবিত ভাড়া সমন্বয় নিয়ে কথা বলতে কল করেছি।" }
        ],
        "dialogue": [
            {
                "id": "1", "speaker": "Tanvir", "role": "A", "roleTitle": "Tenant / তানভীর",
                "en": "Good afternoon, Mr. Harrison. Thank you for taking the time to speak with me today regarding the renewal letter you sent last week.",
                "bn": "শুভ দুপুর, মিস্টার হ্যারিসন। গত সপ্তাহে আপনি যে চুক্তি নবায়নের চিঠিটি পাঠিয়েছিলেন, সে বিষয়ে আজ কথা বলার সময় দেওয়ার জন্য ধন্যবাদ।",
                "ipa": "/ɡʊd ˌɑːftəˈnuːn ˈmɪstə ˈhærɪsn θæŋk juː fɔː ˈteɪkɪŋ ðə taɪm tuː spiːk wɪð miː təˈdeɪ/",
                "bn_pron": "গুড আফটারনুন, মিস্টার হ্যারিসন। থ্যাংক ইউ ফর টেকিং দ্য টাইম টু স্পিক উইথ মি টুডে।"
            },
            {
                "id": "2", "speaker": "Mr. Harrison", "role": "B", "roleTitle": "Landlord / বাড়িওয়ালা",
                "en": "Hello Tanvir. Of course! You have been a wonderful tenant this past year, but as you know, building maintenance and insurance costs went up considerably.",
                "bn": "হ্যালো তানভীর। অবশ্যই! গত এক বছর তুমি খুব চমৎকার ভাড়াটিয়া ছিলে, তবে তুমি তো জানোই, বিল্ডিং রক্ষণাবেক্ষণ আর ইন্স্যুরেন্স খরচ অনেক বেড়েছে।",
                "ipa": "/həˈləʊ tænˈvɪər ɒv kɔːs juː hæv biːn ə ˈwʌndəfl ˈtenənt ðɪs pɑːst jɪər bʌt æz juː nəʊ/",
                "bn_pron": "হ্যালো তানভীর। অফ কোর্স! ইউ হ্যাভ বিন আ ওয়ান্ডারফুল টেন্যান্ট দিস পাস্ট ইয়ার।"
            },
            {
                "id": "3", "speaker": "Tanvir", "role": "A", "roleTitle": "Tenant / তানভীর",
                "en": "I completely understand inflation impacts landlords too. However, an eight percent hike is quite steep and slightly beyond my monthly housing allowance.",
                "bn": "আমি পুরোপুরি বুঝি যে মুদ্রাস্ফীতি বাড়িওয়ালাদের ওপরও প্রভাব ফেলে। কিন্তু আট শতাংশ ভাড়া বৃদ্ধি বেশ বেশি এবং আমার মাসিক ভাড়ার বাজেটের কিছুটা বাইরে।",
                "ipa": "/aɪ kəmˈpliːtli ˌʌndəˈstænd ɪnˈfleɪʃn ˈɪmpækts ˈlændlɔːdz tuː haʊˈevər ən eɪt pəˈsent haɪk ɪz kwaɪt stiːp/",
                "bn_pron": "আই কমপ্লিটলি আন্ডারস্ট্যান্ড ইনফ্লেশন ইমপ্যাক্টস ল্যান্ডলর্ডস টু। হাউএভার, অ্যান এইট পার্সেন্ট হাইক ইজ কোয়াইট স্টিপ।"
            },
            {
                "id": "4", "speaker": "Mr. Harrison", "role": "B", "roleTitle": "Landlord / বাড়িওয়ালা",
                "en": "Similar two-bedroom units in this neighborhood are currently renting for fifteen percent higher than what you pay.",
                "bn": "এই এলাকার একই রকম দুই রুমের ফ্ল্যাটগুলো বর্তমানে তোমার চেয়ে প্রায় পনেরো শতাংশ বেশি ভাড়ায় চলছে।",
                "ipa": "/ˈsɪmələ tuː ˈbedruːm ˈjuːnɪts ɪn ðɪs ˈneɪbəhʊd ɑː ˈkʌrəntli ˈrentɪŋ fɔː ˈfɪftiːn pəˈsent ˈhaɪə/",
                "bn_pron": "সিমিলার টু-বেডরুম ইউনিটস ইন দিস নেইবারহুড আর কারেন্টলি রেন্টিং ফর ফিফটিন পার্সেন্ট হায়ার।"
            },
            {
                "id": "5", "speaker": "Tanvir", "role": "A", "roleTitle": "Tenant / তানভীর",
                "en": "That may be true, but finding new tenants involves agent listing fees, cleaning, and potentially a month of vacancy without any rental income.",
                "bn": "তা হয়তো ঠিক, তবে নতুন ভাড়াটিয়া খুঁজতে এজেন্টের ফি লাগে, ডিপ ক্লিনিং লাগে, এবং হয়তো এক মাস ফ্ল্যাট ফাঁকা পড়ে থাকবে যাতে কোনো আয়ই হবে না।",
                "ipa": "/ðæt meɪ biː truː bʌt ˈfaɪndɪŋ njuː ˈtenənts ɪnˈvɒlvz ˈeɪdʒənt ˈlɪstɪŋ fiːz ˈkliːnɪŋ ænd pəˈtenʃəli ə mʌnθ ɒv ˈveɪkənsi/",
                "bn_pron": "দ্যাট মে বি ট্রু, বাট ফাইন্ডিং নিউ টেন্যান্টস ইনভলভস লিস্টিং ফিজ, ক্লিনিং, অ্যান্ড পোটেনশিয়ালি আ মান্থ অফ ভেকেন্সি।"
            },
            {
                "id": "6", "speaker": "Mr. Harrison", "role": "B", "roleTitle": "Landlord / বাড়িওয়ালা",
                "en": "You make a very valid point there, Tanvir. Turnovers are certainly costly and stressful for me.",
                "bn": "তুমি একটা খাঁটি কথা বলেছ তানভীর। ভাড়াটিয়া বদলানো আমার জন্যও বেশ খরচের এবং ঝামেলার ব্যাপার।",
                "ipa": "/juː meɪk ə ˈveri ˈvælɪd pɔɪnt ðeə tænˈvɪə ˈtɜːnˌəʊvəz ɑː ˈsɜːtnli ˈkɒstli ænd ˈstresfl fɔː miː/",
                "bn_pron": "ইউ মেক আ ভেরি ভ্যালিড পয়েন্ট দেয়ার, তানভীর। টার্নওভার্স আর সার্টেনলি কস্টলি অ্যান্ড স্ট্রেসফুল ফর মি।"
            },
            {
                "id": "7", "speaker": "Tanvir", "role": "A", "roleTitle": "Tenant / তানভীর",
                "en": "Exactly. I've always paid on the first of every month, maintained the property impeccably, and I am willing to sign a firm two-year lease today if we meet at a modest three percent increase.",
                "bn": "ঠিক তাই। আমি সবসময় মাসের এক তারিখে ভাড়া পরিশোধ করেছি, ফ্ল্যাট অত্যন্ত পরিচ্ছন্ন রেখেছি, এবং আমরা যদি তিন শতাংশ বৃদ্ধির বিষয়ে একমত হই তবে আমি আজই দুই বছরের চুক্তি সই করতে রাজি।",
                "ipa": "/ɪɡˈzæktli aɪv ˈɔːlweɪz peɪd ɒn ðə fɜːst ɒv ˈevri mʌnθ meɪnˈteɪnd ðə ˈprɒpəti ɪmˈpekəbli ænd aɪ æm ˈwɪlɪŋ tuː saɪn ə fɜːm tuː jɪə liːs/",
                "bn_pron": "এক্সাক্টলি। আইভ অলওয়েজ পেইড অন দ্য ফার্স্ট অফ এভরি মান্থ, অ্যান্ড আই অ্যাম উইলিং টু সাইন আ টু-ইয়ার লিজ অ্যাট আ থ্রি পার্সেন্ট ইনক্রিজ।"
            },
            {
                "id": "8", "speaker": "Mr. Harrison", "role": "B", "roleTitle": "Landlord / বাড়িওয়ালা",
                "en": "A guaranteed two-year occupancy with zero vacancy gives me tremendous peace of mind. Would you agree to three point five percent?",
                "bn": "ফাঁকা থাকার ঝুঁকি ছাড়া টানা দুই বছর নিশ্চিত ভাড়া আমার জন্য অনেক বড় মানসিক স্বস্তি। তুমি কি ৩.৫ শতাংশ বৃদ্ধিতে রাজি আছো?",
                "ipa": "/ə ˌɡærənˈtiːd tuː jɪər ˈɒkjəpənsi wɪð ˈzɪərəʊ ˈveɪkənsi ɡɪvz miː trɪˈmendəs piːs ɒv maɪnd wʊd juː əˈɡriː tuː θriː pɔɪnt faɪv pəˈsent/",
                "bn_pron": "আ গ্যারান্টিড টু-ইয়ার অকুপ্যান্সি উইথ জিরো ভেকেন্সি গিভস মি ট্রিমেন্ডাস পিস অফ মাইন্ড। উড ইউ এগ্রি টু থ্রি পয়েন্ট ফাইভ পার্সেন্ট?"
            },
            {
                "id": "9", "speaker": "Tanvir", "role": "A", "roleTitle": "Tenant / তানভীর",
                "en": "Three point five percent sounds fair, provided you can also send someone to look at the master bathroom radiator before winter.",
                "bn": "৩.৫ শতাংশ বৃদ্ধি আমার কাছে যৌক্তিক মনে হচ্ছে, তবে শর্ত হচ্ছে শীত আসার আগেই মাস্টার বাথরুমের রেডিয়েটরটি ঠিক করার লোক পাঠাতে হবে।",
                "ipa": "/θriː pɔɪnt faɪv pəˈsent saʊndz feə prəˈvaɪdɪd juː kæn ˈɔːlsəʊ send ˈsʌmwʌn tuː lʊk æt ðə ˈmɑːstə ˈbɑːθruːm ˈreɪdieɪtə/",
                "bn_pron": "থ্রি পয়েন্ট ফাইভ পার্সেন্ট সাউন্ডস ফেয়ার, প্রোভাইডেড ইউ ক্যান অলসো সেন্ড সামওয়ান টু ফিক্স দ্য বাথরুম রেডিয়েটর।"
            },
            {
                "id": "10", "speaker": "Mr. Harrison", "role": "B", "roleTitle": "Landlord / বাড়িওয়ালা",
                "en": "Deal! I will book the plumber for this Thursday and draft the updated two-year agreement for you to sign electronically.",
                "bn": "চুক্তি পাকা! আমি এই বৃহস্পতিবার প্লাম্বার বুক করে দিচ্ছি এবং আপনার অনলাইনে সই করার জন্য দুই বছরের নতুন চুক্তি ড্রাফট করে পাঠাচ্ছি।",
                "ipa": "/diːl aɪ wɪl bʊk ðə ˈplʌmə fɔː ðɪs ˈθɜːzdeɪ ænd drɑːft ðɪ ʌpˈdeɪtɪd tuː jɪər əˈɡriːmənt/",
                "bn_pron": "ডিল! আই উইল বুক দ্য প্লাম্বার ফর দিস থার্সডে অ্যান্ড ড্রাফট দি আপডেটেড এগ্রিমেন্ট।"
            }
        ],
        "followUps": [
            { "en": "Could you also include the parking space renewal in the same digital contract?", "bn": "একই ডিজিটাল চুক্তির ভেতর পার্কিং স্পেসের মেয়াদটাও কি অন্তর্ভুক্ত করে দেওয়া যাবে?" },
            { "en": "What time on Thursday should I expect the heating technician?", "bn": "বৃহস্পতিবার কয়টার দিকে হিটিং টেকনিশিয়ান আসার কথা?" },
            { "en": "Do I need to wire any difference for the security deposit as well?", "bn": "সিকিউরিটি ডিপোজিটের বাড়তি কোনো পার্থক্য কি আমাকে পাঠাতে হবে?" }
        ],
        "closers": [
            { "en": "Thank you for being so reasonable and flexible, Mr. Harrison. Have a great day!", "bn": "এত সুবিবেচক ও নমনীয় হওয়ার জন্য অনেক ধন্যবাদ মিস্টার হ্যারিসন। ভালো থাকবেন!" },
            { "en": "I'll review and sign the contract as soon as it arrives in my inbox.", "bn": "ইনবক্সে চুক্তি আসা মাত্রই আমি রিভিউ করে সই করে দেব।" },
            { "en": "Appreciate your prompt support! Talk soon.", "bn": "আপনার দ্রুত সহযোগিতার জন্য কৃতজ্ঞতা! কথা হবে।" }
        ],
        "nativePhrases": [
            { "phrase": "Meet in the middle", "meaning": "উভয় পক্ষ ছাড় দিয়ে মাঝামাঝি অবস্থানে একমত হওয়া", "context": "দামের দরকষাকষিতে সমঝোতায় পৌঁছানোর সবচেয়ে প্রচলিত প্রবাদ।" },
            { "phrase": "Peace of mind", "meaning": "মানসিক স্বস্তি ও দুশ্চিন্তামুক্ত থাকা", "context": "ঝামেলামুক্ত নিশ্চয়তার গুরুত্ব বোঝাতে ব্যবহৃত হয়।" },
            { "phrase": "Done deal", "meaning": "চুক্তি চূড়ান্ত ও নিশ্চিত হওয়া", "context": "নেগোশিয়েশন সফলভাবে শেষ হলে আনন্দ প্রকাশে বলা।" }
        ]
    },

    # 43. IT & Tech Support: Troubleshooting Sudden Laptop Crash
    {
        "id": "conv-43-tech-support-laptop-crash-recovery",
        "number": 43,
        "title": "IT Tech Support: Laptop Crash & Urgent Data Recovery",
        "titleBn": "আইটি হেল্পডেস্কে ল্যাপটপ ক্র্যাশ ও জরুরি ডেটা উদ্ধারের আলোচনা",
        "level": "Intermediate",
        "category": "Professional",
        "imageUrl": "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
        "sceneDescription": "কর্পোরেট অফিসে হঠাৎ নীল স্ক্রিন (Blue Screen of Death) এসে ল্যাপটপ বন্ধ হয়ে যাওয়া এবং জরুরি প্রজেক্ট ফাইল উদ্ধারের জন্য আইটি স্পেশালিস্টের সাথে ধাপে ধাপে সমস্যা সমাধান করা।",
        "briefing": {
            "setting": "কোম্পানির আইটি সাপোর্ট ডেস্ক বা রিমোট স্ক্রিন-শেয়ার সেশন (IT Helpdesk)",
            "roleA": { "name": "Stressed Employee", "titleBn": "কর্মকর্তা (Nadia)", "descBn": "বিকেলে জরুরি বোর্ড মিটিং, অথচ ল্যাপটপ অন হচ্ছে না" },
            "roleB": { "name": "IT Systems Engineer", "titleBn": "আইটি ইঞ্জিনিয়ার (Liam)", "descBn": "ধীরে ধীরে হার্ডওয়্যার ডায়াগনস্টিক চালিয়ে ডেটা ব্যাকআপ নিশ্চিত করছেন" },
            "overviewBn": "প্রযুক্তিগত কোনো সমস্যায় টেক সাপোর্টকে নির্ভুল লক্ষণ বলা দরকার—কী সফটওয়্যার চলছিল, কোনো এরর কোড ছিল কিনা, বা অদ্ভুত শব্দ হয়েছিল কিনা। এতে আইটি বিশেষজ্ঞ দ্রুত সমাধান করতে পারেন।",
            "politenessTips": [
                "আগে কী ঘটেছিল তা শান্তভাবে বর্ণনা করুন: 'I was running the financial model and got a sudden blue screen.'",
                "অযথা উল্টাপাল্টা বাটন চাপার আগে আইটির নির্দেশ শুনুন: 'Should I force restart or leave the screen as is?'",
                "ডেটা সেভ থাকলে প্রশংসা করুন: 'You saved my entire presentation today!'"
            ],
            "keyVocabulary": [
                { "word": "Blue screen of death (BSOD)", "meaning": "উইন্ডোজ অপারেটিং সিস্টেমের মারাত্মক ক্র্যাশ স্ক্রিন", "pron": "ব্লু স্ক্রিন অফ ডেথ" },
                { "word": "Cloud synchronization", "meaning": "ক্লাউডে স্বয়ংক্রিয়ভাবে ডেটা সেভ থাকা", "pron": "ক্লাউড সিনক্রোনাইজেশন" },
                { "word": "Corrupted sector", "meaning": "হার্ডড্রাইভের ক্ষতিগ্রস্ত অংশ", "pron": "করাপ্টেড সেক্টর" },
                { "word": "Safe mode", "meaning": "সিস্টেম মেরামতের জন্য ন্যূনতম মোড", "pron": "সেইফ মোড" }
            ]
        },
        "starters": [
            { "en": "Hi Liam, I'm facing a critical hardware emergency with my work ThinkPad.", "bn": "হাই লিয়াম, আমার অফিসের থিংকপ্যাড ল্যাপটপে একটি মারাত্মক হার্ডওয়্যার সমস্যা হয়েছে।" },
            { "en": "Helpdesk, this is Nadia from finance. My laptop just shut down abruptly with a memory error.", "bn": "হেল্পডেস্ক, আমি ফিন্যান্স থেকে নাদিয়া বলছি। মেমরি এরর দেখিয়ে আমার ল্যাপটপটি হঠাৎ বন্ধ হয়ে গেছে।" },
            { "en": "Hello, I desperately need help recovering unsaved spreadsheets after a system crash.", "bn": "হ্যালো, সিস্টেম ক্র্যাশের পর অসংরক্ষিত স্প্রেডশিট পুনরুদ্ধারে আমার জরুরি সহায়তা দরকার।" }
        ],
        "dialogue": [
            {
                "id": "1", "speaker": "Nadia", "role": "A", "roleTitle": "Employee / নাদিয়া",
                "en": "Hey Liam, I'm having a massive panic attack right now. My company laptop just rebooted into a black screen displaying 'No Bootable Device Found'!",
                "bn": "আরে লিয়াম, আমি এখন চরম আতঙ্কের মধ্যে আছি। আমার অফিসের ল্যাপটপ হঠাৎ রিবুট হয়ে কালো স্ক্রিনে দেখাচ্ছে 'No Bootable Device Found'!",
                "ipa": "/heɪ ˈliːəm aɪm ˈhævɪŋ ə ˈmæsɪv ˈpænɪk əˈtæk raɪt naʊ maɪ ˈkʌmpəni ˈlæptɒp dʒʌst ˌriːˈbuːtɪd ˈɪntuː ə blæk skriːn/",
                "bn_pron": "হেই লিয়াম, আইম হ্যাভিং আ ম্যাসিভ প্যানিক অ্যাটাক! মাই ল্যাপটপ জাস্ট রিবুটেড ইনটু আ ব্ল্যাক স্ক্রিন!"
            },
            {
                "id": "2", "speaker": "Liam", "role": "B", "roleTitle": "IT Specialist / লিয়াম",
                "en": "Take a deep breath Nadia, we will figure this out. Did you hear any clicking noise from the chassis right before the crash?",
                "bn": "শান্ত হয়ে লম্বা একটা শ্বাস নাও নাদিয়া, আমরা এর সমাধান বের করব। ক্র্যাশ হওয়ার ঠিক আগে ল্যাপটপের ভেতরে কি কোনো খটখট শব্দ হয়েছিল?",
                "ipa": "/teɪk ə diːp breθ ˈnædiə wiː wɪl ˈfɪɡər ðɪs aʊt dɪd juː hɪər ˈeni ˈklɪkɪŋ nɔɪz frəm ðə ˈʃæsi raɪt bɪˈfɔː ðə kræʃ/",
                "bn_pron": "টেক আ ডিপ ব্রেথ নাদিয়া, উই উইল ফিগার দিস আউট। ডিড ইউ হিয়ার এনি ক্লিকিং নয়েজ বিফোর দ্য ক্র্যাশ?"
            },
            {
                "id": "3", "speaker": "Nadia", "role": "A", "roleTitle": "Employee / নাদিয়া",
                "en": "No noise at all, but the fan spun very loudly and the base felt quite warm while compiling large datasets.",
                "bn": "শব্দ হয়নি, তবে বড় ডেটাসেট প্রসেস করার সময় কুলিং ফ্যান খুব জোরে ঘুরছিল এবং নিচের অংশ বেশ গরম লাগছিল।",
                "ipa": "/nəʊ nɔɪz æt ɔːl bʌt ðə fæn spʌn ˈveri ˈlaʊdli ænd ðə beɪs felt kwaɪt wɔːm waɪl kəmˈpaɪlɪŋ lɑːdʒ ˈdeɪtəˌsets/",
                "bn_pron": "নো নয়েজ অ্যাট অল, বাট দ্য ফ্যান স্পান ভেরি লাউডলি অ্যান্ড দ্য বেইস ফেল্ট কোয়াইট ওয়ার্ম।"
            },
            {
                "id": "4", "speaker": "Liam", "role": "B", "roleTitle": "IT Specialist / লিয়াম",
                "en": "That sounds like the SSD temporarily disconnected due to thermal throttling, or the boot partition glitched. Is the charger connected?",
                "bn": "মনে হচ্ছে অতিরিক্ত গরম হয়ে এসএসডি সাময়িকভাবে সংযোগ হারিয়েছে অথবা বুট পার্টিশন ক্ষতিগ্রস্ত হয়েছে। চার্জার কি লাগানো আছে?",
                "ipa": "/ðæt saʊndz laɪk ði ˌes-es-ˈdiː ˌtempəˈrerəli ˌdɪskəˈnektɪd djuː tuː ˈθɜːml ˈθrɒtlɪŋ ɔː ðə buːt pɑːˈtɪʃn ɡlɪtʃt/",
                "bn_pron": "দ্যাট সাউন্ডস লাইক দি এসএসডি ডিসকানেক্টেড ডিউ টু থার্মাল থ্রোটলিং। ইজ দ্য চার্জার কানেক্টেড?"
            },
            {
                "id": "5", "speaker": "Nadia", "role": "A", "roleTitle": "Employee / নাদিয়া",
                "en": "Yes, it is plugged in. More importantly, are my quarterly financial forecast files safe? I have a board meeting at four PM!",
                "bn": "হ্যাঁ, চার্জার লাগানো আছে। সবচেয়ে জরুরি কথা—আমার ত্রৈমাসিক ফিন্যান্সিয়াল ফোরকাস্ট ফাইলগুলো কি অক্ষত আছে? বিকেল চারটায় আমার বোর্ড মিটিং!",
                "ipa": "/jes ɪt ɪz plʌɡd ɪn mɔːr ɪmˈpɔːtntli ɑː maɪ ˈkwɔːtəli faɪˈnænʃl ˈfɔːkɑːst faɪlz seɪf/",
                "bn_pron": "ইয়েস, ইট ইজ প্লাগড ইন। আর মাই কোয়ার্টারলি ফোরকাস্ট ফাইলস সেইফ? আই হ্যাভ আ বোর্ড মিটিং অ্যাট ফোর পিএম!"
            },
            {
                "id": "6", "speaker": "Liam", "role": "B", "roleTitle": "IT Specialist / লিয়াম",
                "en": "Relax—all company Documents folders auto-sync to OneDrive every five minutes. Let me log you into a loaner laptop right now.",
                "bn": "একদম দুশ্চিন্তা করো না—কোম্পানির সব ডকুমেন্টস ফোল্ডার প্রতি পাঁচ মিনিট পর পর স্বয়ংক্রিয়ভাবে ওয়ানড্রাইভে সিঙ্ক হয়। আমি এখনই তোমাকে একটি ব্যাকআপ ল্যাপটপে লগইন করিয়ে দিচ্ছি।",
                "ipa": "/rɪˈlæks ɔːl ˈkʌmpəni ˈdɒkjumənts ˈfəʊldəz ˈɔːtəʊ sɪŋk tuː ˈwʌndraɪv ˈevri faɪv ˈmɪnɪts/",
                "bn_pron": "রিল্যাক্স—অল ডকুমেন্টস ফোল্ডার্স অটো-সিঙ্ক টু ওয়ানড্রাইভ। লেট মি লগ ইউ ইনটু আ লোনার ল্যাপটপ।"
            },
            {
                "id": "7", "speaker": "Nadia", "role": "A", "roleTitle": "Employee / নাদিয়া",
                "en": "Oh God bless cloud backups! Can I bring my broken laptop down to floor two right this second?",
                "bn": "ওহ, ক্লাউড ব্যাকআপের ওপর খোদার রহমত! আমি কি আমার নষ্ট ল্যাপটপটি নিয়ে এখনই দুই তলায় নেমে আসতে পারি?",
                "ipa": "/əʊ ɡɒd bles klaʊd ˈbækʌps kæn aɪ brɪŋ maɪ ˈbrəʊkən ˈlæptɒp daʊn tuː flɔː tuː raɪt ðɪs ˈsekənd/",
                "bn_pron": "ওহ গড ব্লেস ক্লাউড ব্যাকআপস! ক্যান আই ব্রিং মাই ব্রোকেন ল্যাপটপ ডাউন টু ফ্লোর টু রাইট নাউ?"
            },
            {
                "id": "8", "speaker": "Liam", "role": "B", "roleTitle": "IT Specialist / লিয়াম",
                "en": "Yes, come straight to desk 24. I already prepared an identical ThinkPad with your software suite configured.",
                "bn": "হ্যাঁ, সোজা ২৪ নম্বর ডেস্কে চলে এসো। আমি তোমার প্রয়োজনীয় সব সফটওয়্যার কনফিগার করে হুবহু একই মডেলের একটা থিংকপ্যাড রেডি করে রেখেছি।",
                "ipa": "/jes kʌm streɪt tuː desk ˈtwenti fɔːr aɪ ɔːlˈredi prɪˈpeəd ən aɪˈdentɪkl ˈθɪŋkpæd/",
                "bn_pron": "ইয়েস, কাম স্ট্রেইট টু ডেস্ক টুয়েন্টি ফোর। আই অলরেডি প্রিপেয়ার্ড অ্যান আইডেন্টিক্যাল থিংকপ্যাড।"
            },
            {
                "id": "9", "speaker": "Nadia", "role": "A", "roleTitle": "Employee / নাদিয়া",
                "en": "You are literally a lifesaver, Liam! I will be down in two minutes with my badge.",
                "bn": "তুমি সত্যি আমার জীবন বাঁচিয়ে দিলে লিয়াম! আমি আইডি কার্ড নিয়ে দুই মিনিটেই নিচে আসছি।",
                "ipa": "/juː ɑː ˈlɪtərəli ə ˈlaɪfˌseɪvə ˈliːəm aɪ wɪl biː daʊn ɪn tuː ˈmɪnɪts wɪð maɪ bædʒ/",
                "bn_pron": "ইউ আর লিটারালি আ লাইফসেভার, লিয়াম! আই উইল বি ডাউন ইন টু মিনিটস উইথ মাই ব্যাজ।"
            },
            {
                "id": "10", "speaker": "Liam", "role": "B", "roleTitle": "IT Specialist / লিয়াম",
                "en": "See you in a moment. We will run diagnostics on your drive while you ace that board presentation!",
                "bn": "একটু পরই দেখা হচ্ছে। তুমি ওদিকে বোর্ড মিটিংয়ে দারুণ প্রেজেন্টেশন দাও, আর আমরা এদিকে তোমার ড্রাইভ ঠিক করে রাখছি!",
                "ipa": "/siː juː ɪn ə ˈməʊmənt wiː wɪl rʌn ˌdaɪəɡˈnɒstɪks ɒn jɔː draɪv waɪl juː eɪs ðæt bɔːd ˌpreznˈteɪʃn/",
                "bn_pron": "সি ইউ ইন আ মোমেন্ট। উই উইল রান ডায়াগনস্টিকস অন ইউর ড্রাইভ।"
            }
        ],
        "followUps": [
            { "en": "Will my browser bookmarks and Outlook signatures sync automatically too?", "bn": "আমার ব্রাউজারের বুকমার্ক আর আউটলুকের সিগনেচারও কি স্বয়ংক্রিয়ভাবে সিঙ্ক হবে?" },
            { "en": "How long do you think the hardware diagnostics will take?", "bn": "হার্ডওয়্যার পরীক্ষা করতে কত সময় লাগতে পারে বলে তোমার ধারণা?" },
            { "en": "Should I keep the loaner laptop until the end of the week?", "bn": "আমি কি এই ব্যাকআপ ল্যাপটপটি সপ্তাহের শেষ পর্যন্ত আমার কাছে রাখতে পারি?" }
        ],
        "closers": [
            { "en": "I'm heading to the elevator right now. Thanks so much Liam!", "bn": "আমি লিফটের দিকে যাচ্ছি। অনেক ধন্যবাদ লিয়াম!" },
            { "en": "Thanks for your rapid troubleshooting! You rock.", "bn": "এত দ্রুত সমস্যা সমাধান করার জন্য ধন্যবাদ! তুমি সেরা।" },
            { "en": "See you at desk 24!", "bn": "২৪ নম্বর ডেস্কে দেখা হচ্ছে!" }
        ],
        "nativePhrases": [
            { "phrase": "Lifesaver", "meaning": "মহাবিপদে চরম সাহায্যকারী ব্যক্তি", "context": "কর্মক্ষেত্রে কোনো বড় বিপর্যয় থেকে কেউ উদ্ধার করলে বলা।" },
            { "phrase": "Ace it", "meaning": "চমৎকারভাবে সফল হওয়া", "context": "কোনো পরীক্ষা, ইন্টারভিউ বা মিটিংয়ে চমৎকার পারফর্ম করার শুভকামনা।" },
            { "phrase": "Thermal throttling", "meaning": "অতিরিক্ত তাপে ল্যাপটপের গতি ধীর হয়ে যাওয়া", "context": "কম্পিউটার হার্ডওয়্যারের তাপমাত্রা বেড়ে গেলে কাজের গতি কমে যাওয়া।" }
        ]
    },

    # 44. Parent-Teacher Meeting: Discussing Academic Progress
    {
        "id": "conv-44-parent-teacher-meeting-progress",
        "number": 44,
        "title": "Parent-Teacher Conference: Academic & Social Progress",
        "titleBn": "প্যারেন্ট-টিচার মিটিংয়ে সন্তানের পড়াশোনা ও আচার-আচরণ নিয়ে আলোচনা",
        "level": "Intermediate",
        "category": "Social",
        "imageUrl": "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80",
        "sceneDescription": "আন্তর্জাতিক বা ইংলিশ মিডিয়াম স্কুলের প্যারেন্ট-টিচার মিটিংয়ে শিক্ষকের সাথে বসে সন্তানের গণিতে মেধা, ক্লাসরুমে সহপাঠীদের সাথে যোগাযোগ ও মনোযোগ বৃদ্ধির উপায় নিয়ে গঠনমূলক আলোচনা।",
        "briefing": {
            "setting": "স্কুলের মনোরম ক্লাসরুম (Grade 6 Classroom)",
            "roleA": { "name": "Dedicated Mother", "titleBn": "অভিভাবক (Farhana)", "descBn": "সন্তানের গ্রেড ও স্কুলে মনোযোগ কেমন তা জানতে এসেছেন" },
            "roleB": { "name": "Class Teacher", "titleBn": "শ্রেণি শিক্ষক (Mrs. Bennett)", "descBn": "ছাত্রের শক্তি ও যেসব বিষয়ে আরেকটু নজর দেওয়া দরকার তা শেয়ার করছেন" },
            "overviewBn": "প্যারেন্ট-টিচার মিটিংয়ে শুধু অভিযোগ না শুনে শিক্ষকের মূল্যায়নের প্রশংসা করা এবং বাড়ি ও স্কুল কীভাবে যৌথভাবে কাজ করে বাচ্চার অগ্রগতি ঘটাতে পারে তা নিয়ে খোলাখুলি কথা বলতে হয়।",
            "politenessTips": [
                "শিক্ষকের উদ্যোগকে সাধুবাদ জানান: 'Thank you for giving Ayan such thoughtful attention.'",
                "বাচ্চার সীমাবদ্ধতা নিয়ে খোলাখুলি জিজ্ঞাসা করুন: 'Where does he seem to struggle the most during group work?'",
                "বাড়িতে কীভাবে সাপোর্ট দেওয়া যায় তা জানতে চান: 'What specific daily routine can we reinforce at home?'"
            ],
            "keyVocabulary": [
                { "word": "Constructive feedback", "meaning": "উন্নয়নের জন্য গঠনমূলক পরামর্শ", "pron": "কনস্ট্রাকটিভ ফিডব্যাক" },
                { "word": "Attention span", "meaning": "মনোযোগ ধরে রাখার ক্ষমতা", "pron": "অ্যাটেনশন স্প্যান" },
                { "word": "Peer interaction", "meaning": "সহপাঠীদের সাথে মিথস্ক্রিয়া বা ভাব বিনিময়", "pron": "পিয়ার ইন্টারঅ্যাকশন" },
                { "word": "Extracurriculars", "meaning": "সহশিক্ষা কার্যক্রম (খেলাধুলা, গান, বিতর্ক)", "pron": "এক্সট্রাকারিকুলার্স" }
            ]
        },
        "starters": [
            { "en": "Good afternoon Mrs. Bennett. It is great to finally meet you in person.", "bn": "শুভ দুপুর মিসেস বেনেট। অবশেষে আপনার সাথে সরাসরি দেখা হতে পেরে খুব ভালো লাগছে।" },
            { "en": "Hello Mrs. Bennett, thank you for scheduling this parent consultation today.", "bn": "হ্যালো মিসেস বেনেট, আজ এই অভিভাবক পরামর্শের সময় দেওয়ার জন্য ধন্যবাদ।" },
            { "en": "Hi, I am Farhana, Ayan's mother. We are very eager to hear about his sixth-grade progress.", "bn": "হাই, আমি ফারহানা, আয়ানের মা। ষষ্ঠ শ্রেণিতে ওর অগ্রগতি নিয়ে শুনতে আমরা খুব আগ্রহী।" }
        ],
        "dialogue": [
            {
                "id": "1", "speaker": "Farhana", "role": "A", "roleTitle": "Parent / ফারহানা",
                "en": "Good afternoon, Mrs. Bennett. Thank you so much for setting aside time for us today. Ayan always talks so enthusiastically about your science experiments!",
                "bn": "শুভ দুপুর, মিসেস বেনেট। আজ আমাদের জন্য সময় বের করার জন্য অনেক ধন্যবাদ। আয়ান বাসায় প্রায়ই আপনার বিজ্ঞানের চমৎকার এক্সপেরিমেন্টগুলোর কথা উৎসাহের সাথে বলে!",
                "ipa": "/ɡʊd ˌɑːftəˈnuːn ˈmɪsɪz ˈbenɪt θæŋk juː səʊ mʌtʃ fɔː ˈsetɪŋ əˈsaɪd taɪm fɔːr ʌs təˈdeɪ/",
                "bn_pron": "গুড আফটারনুন, মিসেস বেনেট। থ্যাংক ইউ সো মাচ ফর সেটিং অ্যাসাইড টাইম ফর আস টুডে।"
            },
            {
                "id": "2", "speaker": "Mrs. Bennett", "role": "B", "roleTitle": "Teacher / শিক্ষক",
                "en": "Welcome, Mrs. Farhana! Please have a seat. Ayan is a genuine delight to teach. His analytical thinking in STEM subjects is truly ahead of his grade level.",
                "bn": "স্বাগতম, মিসেস ফারহানা! অনুগ্রহ করে বসুন। আয়ানকে পড়ানো সত্যি খুব আনন্দের। বিজ্ঞান ও গণিত বিষয়ে তার বিশ্লেষণ ক্ষমতা তার ক্লাসের তুলনায় সত্যিই বেশ পরিণত।",
                "ipa": "/ˈwelkəm ˈmɪsɪz fɑːˈhɑːnə pliːz hæv ə siːt ˈaɪən ɪz ə ˈdʒenjuɪn dɪˈlaɪt tuː tiːtʃ/",
                "bn_pron": "ওয়েলকাম, মিসেস ফারহানা! প্লিজ হ্যাভ আ সিট। আয়ান ইজ আ জেনুইন ডিলাইট টু টিচ।"
            },
            {
                "id": "3", "speaker": "Farhana", "role": "A", "roleTitle": "Parent / ফারহানা",
                "en": "That warms my heart to hear! At home, however, we noticed he sometimes gets distracted when sitting down for creative writing assignments.",
                "bn": "শুনে আমার মনটা ভরে গেল! তবে বাসায় আমরা খেয়াল করেছি, সৃজনশীল লেখালেখির অ্যাসাইনমেন্টে বসলে সে মাঝে মাঝে একটু অন্যমনস্ক হয়ে পড়ে।",
                "ipa": "/ðæt wɔːmz maɪ hɑːt tuː hɪər æt həʊm haʊˈevə wiː ˈnəʊtɪst hiː ˈsʌmtaɪmz ɡets dɪˈstræktɪd/",
                "bn_pron": "দ্যাট ওয়ার্মস মাই হার্ট টু হিয়ার! অ্যাট হোম, হাউএভার, উই নোটিসড হি সামটাইমস গেটস ডিস্ট্র্যাক্টেড।"
            },
            {
                "id": "4", "speaker": "Mrs. Bennett", "role": "B", "roleTitle": "Teacher / শিক্ষক",
                "en": "You observed correctly. Ayan thinks much faster than he writes, which causes him to feel impatient with lengthy essays. He rushes and skips descriptive details.",
                "bn": "আপনি একদম ঠিক লক্ষ্য করেছেন। আয়ানের চিন্তার গতি তার হাতের লেখার চেয়ে দ্রুত, যার ফলে বড় কোনো রচনায় বসলে সে অধৈর্য হয়ে পড়ে। সে তাড়াহুড়ো করে বর্ণনামূলক অংশগুলো বাদ দিয়ে যায়।",
                "ipa": "/juː əbˈzɜːvd kəˈrektli ˈaɪən θɪŋks mʌtʃ ˈfɑːstə ðæn hiː raɪts wɪtʃ ˈkɔːzɪz hɪm tuː fiːl ɪmˈpeɪʃnt/",
                "bn_pron": "ইউ অবজার্ভড কারেক্টলি। আয়ান থিঙ্কস মাচ ফাস্টার দ্যান হি রাইটস, হুইচ কজেস হিম টু ফিল ইমপেশেন্ট।"
            },
            {
                "id": "5", "speaker": "Farhana", "role": "A", "roleTitle": "Parent / ফারহানা",
                "en": "That makes total sense. What practical strategies would you suggest we implement at home to help him organize his thoughts patiently?",
                "bn": "এখন বুঝতে পারলাম। ধৈর্য ধরে নিজের চিন্তাগুলো গুছিয়ে লেখার জন্য বাসায় আমরা কী কী কার্যকর কৌশল অনুসরণ করতে পারি বলে আপনি পরামর্শ দেবেন?",
                "ipa": "/ðæt meɪks ˈtəʊtl sens wɒt ˈpræktɪkl ˈstrætədʒiz wʊd juː səˈdʒest wiː ˈɪmplɪment æt həʊm/",
                "bn_pron": "দ্যাট মেকস টোটাল সেন্স। হোয়াট প্র্যাক্টিক্যাল স্ট্র্যাটেজিস উড ইউ সাজেস্ট উই ইমপ্লিমেন্ট অ্যাট হোম?"
            },
            {
                "id": "6", "speaker": "Mrs. Bennett", "role": "B", "roleTitle": "Teacher / শিক্ষক",
                "en": "I recommend mind-mapping! Before writing, have him sketch a quick visual diagram with three supporting adjectives for each paragraph. It grounds his focus wonderfully.",
                "bn": "আমি মাইন্ড-ম্যাপিংয়ের পরামর্শ দেব! লেখার আগে প্রতিটি প্যারার জন্য তিনটি করে সুন্দর বিশেষণ দিয়ে একটা ছোট ছবি বা ডায়াগ্রাম আঁকতে দিন। এতে তার মনোযোগ দারুণভাবে স্থির হবে।",
                "ipa": "/aɪ ˌrekəˈmend maɪnd ˈmæpɪŋ bɪˈfɔː ˈraɪtɪŋ hæv hɪm sketʃ ə kwɪk ˈvɪʒuəl ˈdaɪəɡræm/",
                "bn_pron": "আই রেকমেন্ড মাইন্ড-ম্যাপিং! বিফোর রাইটিং, হ্যাভ হিম স্কেচ আ কুইক ভিজ্যুয়াল ডায়াগ্রাম।"
            },
            {
                "id": "7", "speaker": "Farhana", "role": "A", "roleTitle": "Parent / ফারহানা",
                "en": "That sounds wonderfully actionable! We will start doing that fifteen minutes every evening. How is his social interaction during group projects?",
                "bn": "উপায়টা সত্যিই খুব সহজ ও কার্যকর মনে হচ্ছে! আমরা প্রতিদিন সন্ধ্যায় পনেরো মিনিট করে এটি অনুশীলন করাব। দলগত কাজে সহপাঠীদের সাথে ওর মেলামেশা কেমন?",
                "ipa": "/ðæt saʊndz ˈwʌndəfəli ˈækʃənəbl wiː wɪl stɑːt ˈduːɪŋ ðæt ˈfɪftiːn ˈmɪnɪts ˈevri ˈiːvnɪŋ/",
                "bn_pron": "দ্যাট সাউন্ডস ওয়ান্ডারফুলি অ্যাকশনেবল! হাউ ইজ হিজ সোশ্যাল ইন্টারঅ্যাকশন ডিউরিং গ্রুপ প্রজেক্টস?"
            },
            {
                "id": "8", "speaker": "Mrs. Bennett", "role": "B", "roleTitle": "Teacher / শিক্ষক",
                "en": "He is very popular and kind. Initially, he tended to dominate team discussions, but he has learned to actively listen and celebrate his teammates' ideas.",
                "bn": "সে সবার খুব প্রিয় এবং অমায়িক। শুরুতে দলগত আলোচনায় সে নিজেই সব কথা বলতে চাইত, তবে এখন সে অন্য বন্ধুদের কথা মনোযোগ দিয়ে শোনা এবং তাদের আইডিয়াকে সম্মান জানানো শিখেছে।",
                "ipa": "/hiː ɪz ˈveri ˈpɒpjələ ænd kaɪnd ɪˈnɪʃəli hiː ˈtendɪd tuː ˈdɒmɪneɪt tiːm dɪˈskʌʃnz/",
                "bn_pron": "হি ইজ ভেরি পপুলার অ্যান্ড কাইন্ড। ইনিশিয়ালি হি টেন্ডেড টু ডমিনেট, বাট হি হ্যাজ লার্নড টু লিসেন।"
            },
            {
                "id": "9", "speaker": "Farhana", "role": "A", "roleTitle": "Parent / ফারহানা",
                "en": "I am so relieved and proud to hear that. Thank you deeply for guiding his character alongside his academics, Mrs. Bennett.",
                "bn": "শুনে আমার মনটা অনেক হালকা হলো এবং খুব গর্ব লাগছে। পড়াশোনার পাশাপাশি ওর চারিত্রিক বিকাশে এভাবে দিকনির্দেশনা দেওয়ার জন্য আপনাকে অন্তর থেকে ধন্যবাদ মিসেস বেনেট।",
                "ipa": "/aɪ æm səʊ rɪˈliːvd ænd praʊd tuː hɪə ðæt θæŋk juː ˈdiːpli fɔː ˈɡaɪdɪŋ hɪz ˈkærəktər/",
                "bn_pron": "আই অ্যাম সো রিলিফড অ্যান্ড প্রাউড টু হিয়ার দ্যাট। থ্যাংক ইউ ডিপলি ফর গাইডিং হিজ ক্যারেক্টার।"
            },
            {
                "id": "10", "speaker": "Mrs. Bennett", "role": "B", "roleTitle": "Teacher / শিক্ষক",
                "en": "It is truly a collaborative partnership. Let us stay closely connected on the school portal, and I'll send an update in four weeks!",
                "bn": "অভিভাবক ও শিক্ষকের সম্মিলিত উদ্যোগেই তো বাচ্চার আসল বিকাশ। চলুন স্কুলের অ্যাপে নিয়মিত যোগাযোগ রাখি, চার সপ্তাহ পর আমি আবার আপডেট জানাব!",
                "ipa": "/ɪt ɪz ˈtruːli ə kəˈlæbərətɪv ˈpɑːtnəʃɪp let ʌs steɪ ˈkləʊsli kəˈnektɪd ɒn ðə skuːl ˈpɔːtl/",
                "bn_pron": "ইট ইজ ট্রুলি আ কোলাবোরেটিভ পার্টনারশিপ। লেট আস স্টে কানেক্টেড অন দ্য স্কুল পোর্টাল।"
            }
        ],
        "followUps": [
            { "en": "Would you like me to sign up as a volunteer parent for the upcoming science fair?", "bn": "আসন্ন বিজ্ঞান মেলায় কি আমি ভলান্টিয়ার অভিভাবক হিসেবে নাম লেখাতে পারি?" },
            { "en": "Should we consider buying any specific reading books recommended by the school library?", "bn": "স্কুল লাইব্রেরির তালিকা থেকে কোনো বিশেষ বই কি ওর জন্য কিনে দেব?" },
            { "en": "Is there any after-school robotics club Ayan can participate in?", "bn": "ছুটির পর আয়ান অংশ নিতে পারে এমন কোনো রোবটিক্স ক্লাব কি স্কুলে আছে?" }
        ],
        "closers": [
            { "en": "Thank you for an insightful and encouraging conference, Mrs. Bennett!", "bn": "এত অনুপ্রেরণাদায়ক ও তথ্যবহুল মিটিংয়ের জন্য ধন্যবাদ মিসেস বেনেট!" },
            { "en": "Have a wonderful remainder of the school week. Goodbye!", "bn": "সপ্তাহের বাকি দিনগুলো আপনার খুব সুন্দর কাটুক। বিদায়!" },
            { "en": "We truly appreciate your dedication to Ayan's growth. Take care!", "bn": "আয়ানের প্রতি আপনার যত্নের জন্য আমরা আন্তরিকভাবে কৃতজ্ঞ। ভালো থাকবেন!" }
        ],
        "nativePhrases": [
            { "phrase": "Ahead of the curve", "meaning": "বয়স বা ক্লাসের অন্যদের চেয়ে এগিয়ে থাকা", "context": "মেধা বা পারফরম্যান্সে প্রত্যাশার চেয়ে ভালো করার প্রশংসা।" },
            { "phrase": "Actionable advice", "meaning": "বাস্তবে রূপ দেওয়া সম্ভব এমন দরকারি পরামর্শ", "context": "তাত্ত্বিক কথা না বলে যা অবিলম্বে প্রয়োগ করা যায়।" },
            { "phrase": "Delight to teach", "meaning": "যাকে পড়ানো বা শেখানো অত্যন্ত আনন্দের", "context": "শিক্ষক যখন কোনো বিনয়ী ও মনোযোগী ছাত্রের প্রশংসা করেন।" }
        ]
    },

    # 45. Bank International Wire Transfer & Remittance
    {
        "id": "conv-45-bank-international-wire-transfer",
        "number": 45,
        "title": "Bank International Wire Transfer & Remittance",
        "titleBn": "ব্যাংকে বৈদেশিক রেমিট্যান্স ও আন্তর্জাতিক ফান্ড ট্রান্সফার",
        "level": "Intermediate",
        "category": "Services",
        "imageUrl": "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?auto=format&fit=crop&w=800&q=80",
        "sceneDescription": "আন্তর্জাতিক ব্যাংকের হেল্পডেস্কে গিয়ে অন্য দেশে টিউশন ফি বা জরুরি পারিবারিক খরচের জন্য সুইফট কোড (SWIFT/BIC) ও আইবান (IBAN) ব্যবহার করে নিরাপদে ফান্ড ট্রান্সফার করা।",
        "briefing": {
            "setting": "লন্ডন বা নিউইয়র্কের একটি রিটেইল ব্যাংক ব্রাঞ্চের কাস্টমার সার্ভিস ডেস্ক (HSBC / Barclays Branch)",
            "roleA": { "name": "Sender", "titleBn": "গ্রাহক (Kazi)", "descBn": "বিদেশে বিশ্ববিদ্যালয়ের টিউশন ফি পরিশোধ করতে এসেছেন" },
            "roleB": { "name": "Bank Officer", "titleBn": "ব্যাংক অফিসার (James)", "descBn": "আন্তর্জাতিক লেনদেনের ফর্ম ও এক্সচেঞ্জ রেট বুঝিয়ে দিচ্ছেন" },
            "overviewBn": "আন্তর্জাতিক ফান্ড ট্রান্সফারের সময় প্রাপকের নাম, ব্যাংকের SWIFT/BIC কোড, অ্যাকাউন্ট/IBAN নম্বর এবং সঠিক রেফারেন্স কোড দেওয়া আবশ্যক। সামান্য ভুল হলে ফান্ড ফেরত আসতে কয়েক সপ্তাহ সময় লেগে যেতে পারে।",
            "politenessTips": [
                "লেনদেনের ফি ও রেট আগে জেনে নিন: 'What is your current foreign exchange markup and intermediary fee?'",
                "রেফারেন্স নম্বরটি দু'বার যাচাই করুন: 'Could you double check the university student ID reference?'",
                "রসিদ ও ট্র্যাকিং নম্বর সংগ্রহ করুন: 'Could I have the official SWIFT transfer receipt with the UTR code?'"
            ],
            "keyVocabulary": [
                { "word": "SWIFT / BIC code", "meaning": "আন্তর্জাতিক ব্যাংকিং শনাক্তকরণ কোড", "pron": "সুইফট / বিক কোড" },
                { "word": "IBAN", "meaning": "আন্তর্জাতিক ব্যাংক অ্যাকাউন্ট নম্বর", "pron": "আইবান" },
                { "word": "Intermediary bank", "meaning": "মধ্যবর্তী ট্রানজিট ব্যাংক", "pron": "ইন্টারমিডিয়ারি ব্যাংক" },
                { "word": "UTR number", "meaning": "লেনদেনের অনন্য ট্র্যাকিং রেফারেন্স", "pron": "ইউ-টি-আর নাম্বার" }
            ]
        },
        "starters": [
            { "en": "Good morning. I need to initiate an urgent overseas wire transfer to a university in Canada.", "bn": "শুভ সকাল। কানাডার একটি বিশ্ববিদ্যালয়ে আমাকে একটি জরুরি ওভারসিজ ওয়্যার ট্রান্সফার পাঠাতে হবে।" },
            { "en": "Hello, could you assist me in sending money abroad via SWIFT wire today?", "bn": "হ্যালো, আজ সুইফট ওয়্যার ট্রাফারের মাধ্যমে বিদেশে টাকা পাঠাতে কি একটু সাহায্য করবেন?" },
            { "en": "Hi, I have the invoice and bank routing details to wire tuition fees.", "bn": "হাই, টিউশন ফি ওয়্যার করার জন্য ইনভয়েস আর ব্যাংকিং রুটিন তথ্য আমার সাথে আছে।" }
        ],
        "dialogue": [
            {
                "id": "1", "speaker": "Kazi", "role": "A", "roleTitle": "Customer / কাজী",
                "en": "Good morning, sir. I need to wire five thousand pounds to the University of Toronto for my semester tuition before Friday's deadline.",
                "bn": "শুভ সকাল, স্যার। আগামী শুক্রবারের ডেডলাইনের আগে আমার সেমিস্টার টিউশন ফি বাবদ টরন্টো ইউনিভার্সিটিতে পাঁচ হাজার পাউন্ড পাঠাতে হবে।",
                "ipa": "/ɡʊd ˈmɔːnɪŋ sɜːr aɪ niːd tuː ˈwaɪə faɪv ˈθaʊznd paʊndz tuː ðə ˌjuːnɪˈvɜːsəti ɒv təˈrɒntəʊ/",
                "bn_pron": "গুড মর্নিং, স্যার। আই নিড টু ওয়্যার ফাইভ থাউজেন্ড পাউন্ডস টু দ্য ইউনিভার্সিটি অফ টরন্টো।"
            },
            {
                "id": "2", "speaker": "James", "role": "B", "roleTitle": "Bank Officer / জেমস",
                "en": "Good morning! We can definitely process that for you today. Do you have your photo ID and the recipient university banking instructions?",
                "bn": "শুভ সকাল! আমরা অবশ্যই আজই আপনার লেনদেনটি প্রসেস করে দিতে পারব। আপনার ফটো আইডি এবং প্রাপক বিশ্ববিদ্যালয়ের ব্যাংকিং তথ্য কি সাথে আছে?",
                "ipa": "/ɡʊd ˈmɔːnɪŋ wiː kæn ˈdefɪnətli ˈprəʊses ðæt fɔː juː təˈdeɪ duː juː hæv jɔː ˈfəʊtəʊ aɪ-diː/",
                "bn_pron": "গুড মর্নিং! উই ক্যান ডেফিনিটলি প্রসেস দ্যাট ফর ইউ টুডে। ডু ইউ হ্যাভ ইউর ফটো আইডি?"
            },
            {
                "id": "3", "speaker": "Kazi", "role": "A", "roleTitle": "Customer / কাজী",
                "en": "Yes, here is my biometric passport, and this official invoice includes their institution SWIFT code, transit number, and my student ID reference.",
                "bn": "হ্যাঁ, এই যে আমার বায়োমেট্রিক পাসপোর্ট, আর এই অফিসিয়াল চালানে তাদের সুইফট কোড, ট্রানজিট নম্বর এবং আমার স্টুডেন্ট আইডি রেফারেন্স উল্লেখ আছে।",
                "ipa": "/jes hɪər ɪz maɪ ˌbaɪəʊˈmetrɪk ˈpɑːspɔːt ænd ðɪs əˈfɪʃl ˈɪnvɔɪs ɪnˈkluːdz ðeər ˌɪnstɪˈtjuːʃn swɪft kəʊd/",
                "bn_pron": "ইয়েস, হিয়ার ইজ মাই পাসপোর্ট, অ্যান্ড দিস ইনভয়েস ইনক্লুডস দেয়ার সুইফট কোড অ্যান্ড স্টুডেন্ট আইডি।"
            },
            {
                "id": "4", "speaker": "James", "role": "B", "roleTitle": "Bank Officer / জেমস",
                "en": "Excellent documentation. Our spot exchange rate from British Pounds to Canadian Dollars is currently one point seven two, with a flat fifteen-pound transfer fee.",
                "bn": "খুব গোছানো কাগজপত্র। ব্রিটিশ পাউন্ড থেকে কানাডিয়ান ডলারে আমাদের বর্তমান স্পট এক্সচেঞ্জ রেট ১.৭২, এবং ফ্ল্যাট ট্রান্সফার ফি ১৫ পাউন্ড।",
                "ipa": "/ˈeksələnt ˌdɒkjumenˈteɪʃn ˈaʊə spɒt ɪksˈtʃeɪndʒ reɪt frəm ˈbrɪtɪʃ paʊndz tuː kəˈneɪdiən ˈdɒləz ɪz ˈkʌrəntli/",
                "bn_pron": "এক্সেলেন্ট ডকুমেন্টেশন। আওয়ার স্পট এক্সচেঞ্জ রেট ইজ ওয়ান পয়েন্ট সেভেন্টি টু, উইথ আ ফিফটিন পাউন্ড ফি।"
            },
            {
                "id": "5", "speaker": "Kazi", "role": "A", "roleTitle": "Customer / কাজী",
                "en": "That rate sounds very competitive. How long will it take for the funds to clear into their Canadian bank account?",
                "bn": "রেটটি বেশ ভালো মনে হচ্ছে। টাকাটা তাদের কানাডিয়ান ব্যাংক অ্যাকাউন্টে জমা হতে সাধারণত কত সময় লাগবে?",
                "ipa": "/ðæt reɪt saʊndz ˈveri kəmˈpetətɪv haʊ lɒŋ wɪl ɪt teɪk fɔː ðə fʌndz tuː klɪər ˈɪntuː ðeə kəˈneɪdiən bæŋk əˈkaʊnt/",
                "bn_pron": "দ্যাট রেট সাউন্ডস ভেরি কম্পেটিটিভ। হাউ লং উইল ইট টেক ফর দ্য ফান্ডস টু ক্লিয়ার?"
            },
            {
                "id": "6", "speaker": "James", "role": "B", "roleTitle": "Bank Officer / জেমস",
                "en": "Since this goes via priority wire, it typically credits within twenty-four to forty-eight business hours, well ahead of your Friday deadline.",
                "bn": "যেহেতু এটি প্রায়োরিটি ওয়্যারের মাধ্যমে যাচ্ছে, তাই সাধারণত ২৪ থেকে ৪৮ কর্মঘণ্টার মধ্যে টাকা জমা হয়ে যায়, যা আপনার শুক্রবারের ডেডলাইনের অনেক আগেই পৌঁছে যাবে।",
                "ipa": "/sɪns ðɪs ɡəʊz ˈvaɪə praɪˈɒrəti ˈwaɪər ɪt ˈtɪpɪkli ˈkredɪts wɪðˈɪn ˈtwenti fɔː tuː ˈfɔːti eɪt ˈbɪznəs ˈaʊəz/",
                "bn_pron": "ইট টিপিক্যালি ক্রেডিট্স উইদিন টুয়েন্টি ফোর টু ফোর্টি এইট আওয়ার্স, ওয়েল অ্যাহেড অফ ফ্রাইডে।"
            },
            {
                "id": "7", "speaker": "Kazi", "role": "A", "roleTitle": "Customer / কাজী",
                "en": "That is wonderful. Please ensure my student number 'UT-8492' is entered into the payment reference field so the finance department reconciles it accurately.",
                "bn": "খুবই চমৎকার। অনুগ্রহ করে পেমেন্ট রেফারেন্সের ঘরে আমার স্টুডেন্ট নম্বর 'UT-8492' লিখে দিন যাতে তাদের ফিন্যান্স ডিপার্টমেন্ট সহজেই টাকাটা মেলাতে পারে।",
                "ipa": "/ðæt ɪz ˈwʌndəfl pliːz ɪnˈʃʊə maɪ ˈstjuːdnt ˈnʌmbər ɪz ˈentəd ˈɪntuː ðə ˈpeɪmənt ˈrefrəns fiːld/",
                "bn_pron": "দ্যাট ইজ ওয়ান্ডারফুল। প্লিজ এনশিওর মাই স্টুডেন্ট নাম্বার ইজ এন্টার্ড ইনটু দ্য রেফারেন্স ফিল্ড।"
            },
            {
                "id": "8", "speaker": "James", "role": "B", "roleTitle": "Bank Officer / জেমস",
                "en": "Done. I have typed it in verbatim. Please review the details on this pin-pad terminal and tap 'Approve' to authorize the debited amount.",
                "bn": "হয়ে গেছে। আমি অক্ষরে অক্ষরে মিলিয়ে লিখেছি। অনুগ্রহ করে স্ক্রিনের বিবরণগুলো মিলিয়ে দেখুন এবং অনুমোদনের জন্য 'Approve' বাটনে চাপ দিন।",
                "ipa": "/dʌn aɪ hæv taɪpt ɪt ɪn vɜːˈbeɪtɪm pliːz rɪˈvjuː ðə ˈdiːteɪlz ɒn ðɪs pɪn pæd ˈtɜːmɪnl ænd tæp əˈpruːv/",
                "bn_pron": "ডান। আই হ্যাভ টাইপড ইট ইন ভার্ব্যাটিম। প্লিজ রিভিউ দ্য ডিটেলস অন দ্য টার্মিনাল অ্যান্ড ট্যাপ এপ্রুভ।"
            },
            {
                "id": "9", "speaker": "Kazi", "role": "A", "roleTitle": "Customer / কাজী",
                "en": "Approved! Could you please stamp and print two copies of the official SWIFT transfer certificate for my student visa records?",
                "bn": "অনুমোদন দিয়ে দিলাম! আমার স্টুডেন্ট ভিসার রেকর্ডের জন্য অফিসিয়াল সুইফট ট্রান্সফার সনদের দুই কপি কি সিল দিয়ে প্রিন্ট করে দেবেন?",
                "ipa": "/əˈpruːvd kʊd juː pliːz stæmp ænd prɪnt tuː ˈkɒpiz ɒv ði əˈfɪʃl swɪft ˈtrænsfɜː səˈtɪfɪkət/",
                "bn_pron": "এপ্রুভড! কুড ইউ প্লিজ স্ট্যাম্প অ্যান্ড প্রিন্ট টু কপিস অফ দ্য সুইফট সার্টিফিকেট?"
            },
            {
                "id": "10", "speaker": "James", "role": "B", "roleTitle": "Bank Officer / জেমস",
                "en": "Here are your stamped receipts, containing the UTR tracking number. You can upload this directly to your university portal right now!",
                "bn": "এই যে আপনার সিলযুক্ত রসিদ, যাতে ইউটিআর ট্র্যাকিং নম্বর আছে। আপনি এটি এখনই সরাসরি আপনার বিশ্ববিদ্যালয়ের পোর্টালে আপলোড করে দিতে পারেন!",
                "ipa": "/hɪər ɑː jɔː stæmpt rɪˈsiːts kənˈteɪnɪŋ ðə juː-tiː-ɑː ˈtrækɪŋ ˈnʌmbə juː kæn ʌpˈləʊd ðɪs dɪˈrektli/",
                "bn_pron": "হিয়ার আর ইউর স্ট্যাম্পড রিসিটস। ইউ ক্যান আপলোড দিস ডিরেক্টলি টু ইউর পোর্টাল।"
            }
        ],
        "followUps": [
            { "en": "Will I receive an SMS notification once the recipient bank acknowledges receipt?", "bn": "প্রাপক ব্যাংক টাকা পাওয়ার পর আমি কি কোনো এসএমএস কনফার্মেশন পাব?" },
            { "en": "Is it possible to save this university profile as a recurring beneficiary in my online banking app?", "bn": "আমার মোবাইল ব্যাংকিং অ্যাপে এই বিশ্ববিদ্যালয়ের অ্যাকাউন্টটি কি বেনিফিশিয়ারি হিসেবে সেভ রাখা যাবে?" },
            { "en": "What should I do if the funds do not reflect on their end by Friday morning?", "bn": "শুক্রবার সকালের মধ্যে যদি ওদের সিস্টেমে টাকা জমা না দেখায়, তবে আমি কী করব?" }
        ],
        "closers": [
            { "en": "Thank you for the quick and seamless service, James. Have a great day!", "bn": "এত দ্রুত ও সহজ সেবার জন্য অনেক ধন্যবাদ জেমস। আপনার দিনটি শুভ হোক!" },
            { "en": "I really appreciate your thoroughness with the student reference. Goodbye!", "bn": "রেফারেন্স নম্বরটি এত মনোযোগ দিয়ে মিলিয়ে দেওয়ার জন্য আমি কৃতজ্ঞ। বিদায়!" },
            { "en": "Take care and keep up the great support!", "bn": "ভালো থাকবেন এবং এমন চমৎকার সেবা অব্যাহত রাখুন!" }
        ],
        "nativePhrases": [
            { "phrase": "Verbatim", "meaning": "হুবহু শব্দে শব্দে বা অক্ষরে অক্ষরে", "context": "কোনো রেফারেন্স বা তথ্য কোনো পরিবর্তন ছাড়া নির্ভুলভাবে লেখার সময়।" },
            { "phrase": "Clear into the account", "meaning": "ব্যাংক অ্যাকাউন্টে টাকা সফলভাবে জমা হওয়া", "context": "চেক বা আন্তর্জাতিক ফান্ড ট্রান্সফার সম্পন্ন হওয়া।" },
            { "phrase": "Spot exchange rate", "meaning": "তাত্ক্ষণিক বা বর্তমান মুহূর্তের মুদ্রা বিনিময় হার", "context": "ব্যাংকে ফরেন কারেন্সি কনভার্ট করার রিয়েল-টাইম রেট।" }
        ]
    },

    # 46. Gym Membership & Fitness Training Consultation
    {
        "id": "conv-46-gym-membership-fitness-consultation",
        "number": 46,
        "title": "Gym Membership & Personal Training Consultation",
        "titleBn": "জিমে নতুন মেম্বারশিপ ও ট্রেইনারের সাথে ফিটনেস প্ল্যান আলোচনা",
        "level": "Easy",
        "category": "Daily Life",
        "imageUrl": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
        "sceneDescription": "আধুনিক ফিটনেস সেন্টারে গিয়ে নিজের ওজন কমানো ও পেশি গঠনের লক্ষ্য অনুযায়ী জিম সাবস্ক্রিপশন, ট্রেইনার প্যাকেজ এবং জিম সুবিধার বিস্তারিত জেনে নেওয়া।",
        "briefing": {
            "setting": "একটি প্রিমিয়াম ফিটনেস ক্লাবের রিসেপশন লাউঞ্জ (Fitness Club Reception)",
            "roleA": { "name": "New Gymgoer", "titleBn": "নতুন সদস্য (Samir)", "descBn": "ডেস্ক জব করে ওজন বেড়েছে, তাই ফিট হতে চান" },
            "roleB": { "name": "Fitness Consultant", "titleBn": "ফিটনেস কনসালট্যান্ট (Chloe)", "descBn": "মেম্বারশিপ প্যাকেজ ও পার্সোনাল ট্রেইনিং শিডিউল বোঝাচ্ছেন" },
            "overviewBn": "জিমে ভর্তি হওয়ার সময় নিজের ফিটনেস গোল (Weight loss, muscle gain, stamina), আগের কোনো ইনজুরি আছে কিনা, এবং কত দিন সপ্তাহে আসা সম্ভব তা স্পষ্টভাবে বলা দরকার। এতে ট্রেইনার সঠিক রুটিন দিতে পারেন।",
            "politenessTips": [
                "নিজের স্বাস্থ্যগত অবস্থা স্পষ্ট করুন: 'I work long desk hours and suffer from mild lower back stiffness.'",
                "হিডেন ফি আছে কিনা আগে জেনে নিন: 'Does your monthly fee cover locker rooms, sauna, and group classes?'",
                "ট্রায়াল সেশনের সুযোগ আছে কিনা জিজ্ঞাসা করুন: 'Could I try a complimentary one-day pass before committing annually?'"
            ],
            "keyVocabulary": [
                { "word": "Personal Trainer (PT)", "meaning": "ব্যক্তিগত ফিটনেস প্রশিক্ষক", "pron": "পার্সোনাল ট্রেইনার" },
                { "word": "Cardio & Free weights", "meaning": "হৃদস্পন্দন বাড়ানোর ব্যায়াম ও ডাম্বেল/বারবেল", "pron": "কার্ডিও অ্যান্ড ফ্রি ওয়েইটস" },
                { "word": "Induction session", "meaning": "প্রথম দিনের পরিচিতি ও মেশিন ব্যবহারের ট্রেনিং", "pron": "ইন্ডাকশন সেশন" },
                { "word": "Flexibility & Posture", "meaning": "শরীরের নমনীয়তা ও সঠিক অঙ্গভঙ্গি", "pron": "ফ্লেক্সিবিলিটি অ্যান্ড পোসচার" }
            ]
        },
        "starters": [
            { "en": "Hi there! I am interested in signing up for a monthly gym membership and wanted to check your facilities.", "bn": "হ্যালো! আমি একটি মাসিক জিম মেম্বারশিপ নিতে আগ্রহী এবং আপনাদের সুযোগ-সুবিধাগুলো দেখতে চাচ্ছিলাম।" },
            { "en": "Good afternoon, could someone give me a quick walkthrough of your gym equipment?", "bn": "শুভ দুপুর, আপনাদের জিমের ইকুইপমেন্টগুলো কি কেউ একটু ঘুরিয়ে দেখাতে পারেন?" },
            { "en": "Hello, I want to start getting in shape after years of desk work. What packages do you offer?", "bn": "হ্যালো, বহু বছর ডেস্ক জবের পর এবার একটু ফিট হতে চাই। আপনাদের কী কী প্যাকেজ আছে?" }
        ],
        "dialogue": [
            {
                "id": "1", "speaker": "Samir", "role": "A", "roleTitle": "Member / সমীর",
                "en": "Hi! I just moved to this neighborhood and I want to get back into working out. Could you tell me about your membership options?",
                "bn": "হাই! আমি এই এলাকায় নতুন এসেছি এবং আবার নিয়মিত ব্যায়াম শুরু করতে চাই। আপনাদের মেম্বারশিপের সুযোগগুলো সম্পর্কে কি একটু বলবেন?",
                "ipa": "/haɪ aɪ dʒʌst muːvd tuː ðɪs ˈneɪbəhʊd ænd aɪ wɒnt tuː ɡet bæk ˈɪntuː ˈwɜːkaʊt/",
                "bn_pron": "হাই! আই জাস্ট মুভড টু দিস নেইবারহুড অ্যান্ড আই ওয়ান্ট টু গেট ব্যাক ইনটু ওয়ার্কিং আউট।"
            },
            {
                "id": "2", "speaker": "Chloe", "role": "B", "roleTitle": "Consultant / ক্লোয়ি",
                "en": "Welcome to IronFit, Samir! We offer two flexible tiers: Standard Access for forty-five pounds a month, and Platinum for sixty, which includes unlimited sauna, steam room, and all studio yoga classes.",
                "bn": "আইরনফিটে স্বাগতম, সমীর! আমাদের দুটি নমনীয় মেম্বারশিপ আছে: মাসে ৪৫ পাউন্ডের স্ট্যান্ডার্ড অ্যাক্সেস, এবং ৬০ পাউন্ডের প্ল্যাটিনাম—যাতে আনলিমিটেড সনা, স্টিম রুম এবং সব যোগব্যায়াম ক্লাস অন্তর্ভুক্ত।",
                "ipa": "/ˈwelkəm tuː ˈaɪənfɪt səˈmɪə wiː ˈɒfə tuː ˈfleksəbl tɪəz ˈstændəd ˈækses fɔː ˈfɔːti faɪv paʊndz/",
                "bn_pron": "ওয়েলকাম টু আয়রনফিট! উই অফার টু ফ্লেক্সিবল টিয়ার্স: স্ট্যান্ডার্ড ফর ফোর্টি ফাইভ, অ্যান্ড প্ল্যাটিনাম ফর সিক্সটি।"
            },
            {
                "id": "3", "speaker": "Samir", "role": "A", "roleTitle": "Member / সমীর",
                "en": "Platinum sounds tempting! Because I sit for eight hours coding, my main focus is shedding belly fat and fixing my lower-back stiffness.",
                "bn": "প্ল্যাটিনাম প্যাকেজটা বেশ আকর্ষণীয় লাগছে! যেহেতু আমি সারাদিন বসে কোডিং করি, তাই আমার মূল লক্ষ্য পেটের চর্বি কমানো আর কোমরের জড়তা দূর করা।",
                "ipa": "/ˈplætɪnəm saʊndz ˈtemptɪŋ bɪˈkɒz aɪ sɪt fɔːr eɪt ˈaʊəz ˈkəʊdɪŋ maɪ meɪn ˈfəʊkəs ɪz ˈʃedɪŋ ˈbeli fæt/",
                "bn_pron": "প্ল্যাটিনাম সাউন্ডস টেম্পটিং! মাই মেইন ফোকাস ইজ শেডিং বেলি ফ্যাট অ্যান্ড ফিক্সিং লোয়ার ব্যাক স্টিফনেস।"
            },
            {
                "id": "4", "speaker": "Chloe", "role": "B", "roleTitle": "Consultant / ক্লোয়ি",
                "en": "That is extremely common among tech professionals. Every new member receives a complimentary one-on-one fitness assessment with a certified trainer to evaluate your posture and core strength.",
                "bn": "আইটি প্রফেশনালদের মধ্যে এই সমস্যা অত্যন্ত সাধারণ। প্রতিটি নতুন সদস্য একজন সার্টিফাইড ট্রেইনারের সাথে ফ্রি ফিটনেস অ্যাসেসমেন্ট পান যাতে শরীরের পশ্চার ও কোর শক্তি পরিমাপ করা হয়।",
                "ipa": "/ðæt ɪz ɪkˈstriːmli ˈkɒmən əˈmʌŋ tek prəˈfeʃənlz ˈevri njuː ˈmembə rɪˈsiːvz ə ˌkɒmplɪˈmentri wʌn-ɒn-wʌn ˈfɪtnəs əˈsesmənt/",
                "bn_pron": "দ্যাট ইজ এক্সট্রিমলি কমন। এভরি নিউ মেম্বার রিসিভস আ কমপ্লিমেন্টারি ওয়ান-অন-ওয়ান অ্যাসেসমেন্ট।"
            },
            {
                "id": "5", "speaker": "Samir", "role": "A", "roleTitle": "Member / সমীর",
                "en": "That is awesome! What are your peak hours? I want to avoid overcrowding when doing dumbbell sets.",
                "bn": "দারুণ তো! আপনাদের সবচেয়ে বেশি ভিড় থাকে কোন সময়ে? ডাম্বেল দিয়ে ব্যায়াম করার সময় অতিরিক্ত ভিড় এড়িয়ে চলতে চাচ্ছিলাম।",
                "ipa": "/ðæt ɪz ˈɔːsəm wɒt ɑː jɔː piːk ˈaʊəz aɪ wɒnt tuː əˈvɔɪd ˌəʊvəˈkraʊdɪŋ/",
                "bn_pron": "দ্যাট ইজ অসাম! হোয়াট আর ইউর পিক আওয়ার্স? আই ওয়ান্ট টু এভয়েড ওভারক্রাউডিং।"
            },
            {
                "id": "6", "speaker": "Chloe", "role": "B", "roleTitle": "Consultant / ক্লোয়ি",
                "en": "Peak rush is between five thirty and seven thirty in the evening. If you can train before nine in the morning or during lunch, the weight floor is wonderfully quiet.",
                "bn": "সবচেয়ে বেশি ভিড় থাকে বিকেল সাড়ে পাঁচটা থেকে সাড়ে সাতটার মধ্যে। আপনি যদি সকাল নয়টার আগে অথবা দুপুরের লাঞ্চের সময় আসতে পারেন, তবে ওয়েট সেকশন চমৎকার ফাঁকা থাকে।",
                "ipa": "/piːk rʌʃ ɪz bɪˈtwiːn faɪv ˈθɜːti ænd ˈsevən ˈθɜːti ɪn ði ˈiːvnɪŋ ɪf juː kæn treɪn bɪˈfɔː naɪn/",
                "bn_pron": "পিক রাশ ইজ বিটুইন ফাইভ থার্টি অ্যান্ড সেভেন থার্টি। মর্নিং অ্যান্ড লাঞ্চ টাইম ইজ ওয়ান্ডারফুলি কোয়াইট।"
            },
            {
                "id": "7", "speaker": "Samir", "role": "A", "roleTitle": "Member / সমীর",
                "en": "Morning workouts actually suit my schedule perfectly. Is there a long-term contract, or can I cancel anytime?",
                "bn": "সকালের ব্যায়াম আমার রুটিনের সাথে একদম মানিয়ে যাবে। এখানে কি দীর্ঘমেয়াদী চুক্তির বাধ্যবাধকতা আছে, নাকি যখন ইচ্ছা বাতিল করা যায়?",
                "ipa": "/ˈmɔːnɪŋ ˈwɜːkaʊts ˈæktʃuəli suːt maɪ ˈskedʒuːl ˈpɜːfɪktli ɪz ðeər ə lɒŋ tɜːm ˈkɒntrækt/",
                "bn_pron": "মর্নিং ওয়ার্কআউটস স্যুট মাই স্কেজিউল পারফেক্টলি। ইজ দেয়ার আ লং-টার্ম কন্ট্রাক্ট?"
            },
            {
                "id": "8", "speaker": "Chloe", "role": "B", "roleTitle": "Consultant / ক্লোয়ি",
                "en": "Our memberships operate on a rolling monthly direct debit. You can freeze or cancel anytime with just thirty days' notice on our mobile app.",
                "bn": "আমাদের মেম্বারশিপ প্রতি মাসে ডিরেক্ট ডেবিটে চলে। আমাদের মোবাইল অ্যাপে মাত্র ৩০ দিনের নোটিশ দিয়ে আপনি যেকোনো সময় মেম্বারশিপ স্থগিত বা বাতিল করতে পারেন।",
                "ipa": "/ˈaʊə ˈmembəʃɪps ˈɒpəreɪt ɒn ə ˈrəʊlɪŋ ˈmʌnθli daɪˈrekt ˈdebɪt juː kæn friːz ɔː ˈkænsl ˈenitaɪm/",
                "bn_pron": "ইট অপারেটস অন আ রোলিং মান্থলি ডেবিট। ইউ ক্যান ফ্রিজ অর ক্যানসেল উইথ থার্টি ডেজ নোটিস।"
            },
            {
                "id": "9", "speaker": "Samir", "role": "A", "roleTitle": "Member / সমীর",
                "en": "Zero lock-in contract is exactly what I was hoping for. Let's sign me up for the Platinum membership starting today!",
                "bn": "কোনো মেয়াদের বাধ্যবাধকতা না থাকাটাই আমি মনে মনে খুঁজছিলাম। আজ থেকেই আমাকে প্ল্যাটিনাম মেম্বারশিপে ভর্তি করিয়ে নিন!",
                "ipa": "/ˈzɪərəʊ lɒk ɪn ˈkɒntrækt ɪz ɪɡˈzæktli wɒt aɪ wɒz ˈhəʊpɪŋ fɔː lets saɪn miː ʌp fɔː ðə ˈplætɪnəm/",
                "bn_pron": "জিরো লক-ইন কন্ট্রাক্ট ইজ এক্সাক্টলি হোয়াট আই ওয়াজ হোপিং ফর। লেটস সাইন মি আপ!"
            },
            {
                "id": "10", "speaker": "Chloe", "role": "B", "roleTitle": "Consultant / ক্লোয়ি",
                "en": "Fantastic decision! Here is your digital RFID entry pass on your phone, and I have booked your trainer induction for tomorrow at eight AM.",
                "bn": "চমৎকার সিদ্ধান্ত! এই যে আপনার ফোনের ডিজিটাল আরএফআইডি এন্ট্রি পাস, এবং আগামীকাল সকাল আটটায় আপনার ট্রেইনার ওরিয়েন্টেশন বুক করে দিলাম।",
                "ipa": "/fænˈtæstɪk dɪˈsɪʒn hɪər ɪz jɔː ˈdɪdʒɪtl ɑːr-ef-aɪ-diː ˈentri pɑːs ɒn jɔː fəʊn/",
                "bn_pron": "ফ্যান্টাস্টিক ডিসিশন! হিয়ার ইজ ইউর আরএফআইডি পাস, অ্যান্ড ইউর ইনডাকশন ইজ বুকড ফর টুমরো।"
            }
        ],
        "followUps": [
            { "en": "Do I need to bring my own padlock for the gym lockers?", "bn": "জিমের লকারের জন্য কি আমাকে নিজের তালা সাথে আনতে হবে?" },
            { "en": "Are towels and filtered water dispensers provided on every floor?", "bn": "প্রতি ফ্লোরে কি তোয়ালে আর ফিল্টার করা পানির ডিসপেনসার আছে?" },
            { "en": "Can I bring a guest friend once a month with the Platinum plan?", "bn": "প্ল্যাটিনাম প্ল্যানে কি মাসে একদিন কোনো বন্ধুকে ফ্রি গেস্ট হিসেবে আনতে পারব?" }
        ],
        "closers": [
            { "en": "Thank you for the warm introduction, Chloe. See you tomorrow morning!", "bn": "এত সুন্দরভাবে সবকিছু বুঝিয়ে দেওয়ার জন্য ধন্যবাদ ক্লোয়ি। কাল সকালে দেখা হচ্ছে!" },
            { "en": "I'm pumped to get back into shape! Have a great afternoon.", "bn": "আবার ফিট হতে পারছি ভেবে খুব রোমাঞ্চ লাগছে! শুভ বিকেল।" },
            { "en": "Bye for now!", "bn": "আজকের মতো বিদায়!" }
        ],
        "nativePhrases": [
            { "phrase": "Get back into shape", "meaning": "আবার সুস্থ, মেদহীন ও সুন্দর শরীরের গঠনে ফিরে আসা", "context": "অনেকদিন ব্যায়াম বন্ধ থাকার পর নতুন করে শুরু করতে চাওয়া।" },
            { "phrase": "Zero lock-in contract", "meaning": "কোনো নির্দিষ্ট মেয়াদের বাধ্যবাধকতাহীন চুক্তি", "context": "ভোক্তা যখন ইচ্ছা কোনো জরিমানা ছাড়া সাবস্ক্রিপশন বাতিল করতে পারেন।" },
            { "phrase": "Peak rush", "meaning": "দিনের সবচেয়ে ভিড় বা ব্যস্ততম সময়", "context": "জিম, রেস্তোরাঁ বা রাস্তায় অতিরিক্ত মানুষের আনাগোনা।" }
        ]
    },

    # 47. Event Catering Booking & Custom Menu Negotiation
    {
        "id": "conv-47-event-catering-custom-menu",
        "number": 47,
        "title": "Event Catering Booking & Custom Dietary Menu",
        "titleBn": "অনুষ্ঠানের জন্য ক্যাটারিং বুকিং ও বিশেষ মেনু নির্ধারণ",
        "level": "Intermediate",
        "category": "Services",
        "imageUrl": "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80",
        "sceneDescription": "পারিবারিক বিয়ে বা কর্পোরেট সেলিব্রেশনের জন্য ৬০ জন অতিথির ক্যাটারিং সার্ভিসে হালাল, ভেজিটেরিয়ান ও গ্লুটেন-ফ্রি খাবারের সমন্বয়ে পারফেক্ট মেনু ও ডেকোরেশন ফাইনাল করা।",
        "briefing": {
            "setting": "একটি স্বনামধন্য বুটিক ক্যাটারিং কোম্পানির টেস্টিং রুম (Catering Studio Tasting Room)",
            "roleA": { "name": "Event Host", "titleBn": "আয়োজক (Sadia)", "descBn": "স্বামীর ৪০তম জন্মদিনের ডিনারের জন্য ক্যাটারিং খুঁজছেন" },
            "roleB": { "name": "Executive Chef / Manager", "titleBn": "হেড ক্যাটারার (Chef Antoine)", "descBn": "মেনুর স্বাদ চেখে দেখাচ্ছেন ও পরিবেশন পরিকল্পনা করছেন" },
            "overviewBn": "ক্যাটারিং অর্ডারের সময় অতিথিদের ফুড অ্যালার্জি (Nut allergy, gluten intolerance, lactose) এবং ডায়টারি রেস্ট্রিকশন (Halal, Vegan) স্পষ্ট করা জরুরি। সেই সাথে সার্ভিং স্টাফ, কাটলারি ও টেবিলওয়্যার অন্তর্ভুক্ত কিনা তা জেনে নেওয়া আবশ্যক।",
            "politenessTips": [
                "অতিথিদের খাদ্যনিরাপত্তা আগে নিশ্চিত করুন: 'We have four guests with severe peanut allergies and eight needing strictly Halal meat.'",
                "স্বাদ চেখে দেখে বিনয়ের সাথে মতামত দিন: 'The sea bass is beautifully seasoned, but could we add slightly more acidity to the salsa?'",
                "প্যাকেজে কী কী অন্তর্ভুক্ত তা লিখিত নিন: 'Does this quote cover waitstaff, premium dinnerware, and cleanup?'"
            ],
            "keyVocabulary": [
                { "word": "Dietary restriction", "meaning": "খাদ্যাভ্যাস বা অ্যালার্জির বিধিনিষেধ", "pron": "ডায়েটারি রেস্ট্রিকশন" },
                { "word": "Finger foods / Canapés", "meaning": "হাতে তুলে খাওয়ার ছোট সুস্বাদু স্টার্টার বা নাস্তা", "pron": "ক্যানাপেইজ" },
                { "word": "Buffet vs Plated service", "meaning": "বুফে পরিবেশন বনাম টেবিলে পরিবেশিত ডিনার", "pron": "বুফে ভার্সেস প্লেইটেড" },
                { "word": "Tasting session", "meaning": "চূড়ান্ত অর্ডারের আগে খাবার চেখে দেখার সেশন", "pron": "টেস্টিং সেশন" }
            ]
        },
        "starters": [
            { "en": "Good afternoon Chef Antoine. We are so excited for today's menu tasting session.", "bn": "শুভ দুপুর শেফ আঁতোয়ান। আজকের মেনু চেখে দেখার সেশনের জন্য আমরা খুব রোমাঞ্চিত।" },
            { "en": "Hello, we are planning a milestone anniversary dinner for fifty guests next month.", "bn": "হ্যালো, আগামী মাসে পঞ্চাশ জন অতিথির জন্য একটি স্মরণীয় বিবাহবার্ষিকীর ডিনারের পরিকল্পনা করছি।" },
            { "en": "Hi, we love your catering portfolio and want to discuss custom dietary options.", "bn": "হাই, আপনাদের ক্যাটারিংয়ের কাজ আমাদের খুব পছন্দ হয়েছে এবং স্পেশাল ডায়েটারি অপশন নিয়ে কথা বলতে চাই।" }
        ],
        "dialogue": [
            {
                "id": "1", "speaker": "Sadia", "role": "A", "roleTitle": "Host / সাদিয়া",
                "en": "Good afternoon, Chef Antoine! Thank you for hosting this private tasting session. The mini lamb samosas and smoked salmon canapés look exquisite.",
                "bn": "শুভ দুপুর, শেফ আঁতোয়ান! এই প্রাইভেট টেস্টিংয়ের আয়োজন করার জন্য ধন্যবাদ। মিনি ল্যাম্ব সমুচা আর স্মোকড স্যামন ক্যানাপেইগুলো দেখতে অসাধারণ লাগছে।",
                "ipa": "/ɡʊd ˌɑːftəˈnuːn ʃef ænˈtwɑːn θæŋk juː fɔː ˈhəʊstɪŋ ðɪs ˈpraɪvət ˈteɪstɪŋ ˈseʃn/",
                "bn_pron": "গুড আফটারনুন, শেফ আঁতোয়ান! দ্য মিনি ল্যাম্ব সামোসাস অ্যান্ড স্যালমন ক্যানাপেইজ লুক এক্সকুইজিট।"
            },
            {
                "id": "2", "speaker": "Chef Antoine", "role": "B", "roleTitle": "Caterer / শেফ আঁতোয়ান",
                "en": "Welcome, Sadia! It is an honor. Please taste both starters while warm. Before we finalize the three courses, what specific dietary considerations should we accommodate?",
                "bn": "স্বাগতম, সাদিও! এটা আমার জন্য সম্মানের। গরম গরম থাকতেই দুটি স্টার্টার চেখে দেখুন। তিন ধাপের মেইন কোর্স চূড়ান্ত করার আগে, আপনার অতিথিদের কী কী বিশেষ খাদ্যাভ্যাস আমাদের খেয়াল রাখতে হবে?",
                "ipa": "/ˈwelkəm səˈdiːə ɪt ɪz ən ˈɒnə pliːz teɪst bəʊθ ˈstɑːtəz waɪl wɔːm bɪˈfɔː wiː ˈfaɪnəlaɪz/",
                "bn_pron": "ওয়েলকাম, সাদিও! প্লিজ টেস্ট বোথ স্টার্টারস। হোয়াট স্পেসিফিক ডায়েটারি কনসিডারেশনস শুড উই একমোডেট?"
            },
            {
                "id": "3", "speaker": "Sadia", "role": "A", "roleTitle": "Host / সাদিয়া",
                "en": "All poultry and beef must be certified Halal. Furthermore, we have three vegan guests and two with severe celiac disease who require strict gluten-free preparation.",
                "bn": "মুরগি ও গরুর সব মাংস অবশ্যই সার্টিফাইড হালাল হতে হবে। এছাড়া আমাদের তিনজন ভেগান অতিথি আছেন এবং দুজনের মারাত্মক সিলিয়াক রোগ আছে যাদের জন্য পুরোপুরি গ্লুটেন-মুক্ত খাবার প্রয়োজন।",
                "ipa": "/ɔːl ˈpəʊltri ænd biːf mʌst biː ˈsɜːtɪfaɪd həˈlɑːl ˈfɜːðəmɔː wiː hæv θriː ˈviːɡən ɡests/",
                "bn_pron": "অল মিট মাস্ট বি সার্টিফাইড হালাল। উই হ্যাভ থ্রি ভিগান গেস্টস অ্যান্ড টু স্ট্রিক্ট গ্লুটেন-ফ্রি গেস্টস।"
            },
            {
                "id": "4", "speaker": "Chef Antoine", "role": "B", "roleTitle": "Caterer / শেফ আঁতোয়ান",
                "en": "Rest assured, all our premium meat is sourced from HMC-certified suppliers. For the celiac guests, we prepare their meals in a sanitized separate kitchen station to prevent cross-contamination.",
                "bn": "একদম নিশ্চিন্ত থাকুন, আমাদের সব প্রিমিয়াম মাংস এইচএমসি-স্বীকৃত বিশ্বস্ত সাপ্লায়ার থেকে নেওয়া হয়। আর সিলিয়াক অতিথিদের জন্য আমরা আলাদা জীবাণুমুক্ত কিচেন স্টেশনে রান্না করি যাতে সামান্য গ্লুটেনও না মেশে।",
                "ipa": "/rest əˈʃʊəd ɔːl ˈaʊə ˈpriːmiəm miːt ɪz sɔːst frəm ˈsɜːtɪfaɪd səˈplaɪəz/",
                "bn_pron": "রেস্ট অ্যাশিওর্ড, অল আওয়ার মিট ইজ হালাল সার্টিফাইড। উই প্রিপেয়ার সিলিয়াক মিলস ইন সেপারেট কিচেনস।"
            },
            {
                "id": "5", "speaker": "Sadia", "role": "A", "roleTitle": "Host / সাদিয়া",
                "en": "That gives me tremendous confidence in your safety standards. For the main entree, between the slow-braised beef short ribs and rosemary chicken, which pairs better with winter vegetables?",
                "bn": "খাবারের সুরক্ষার ব্যাপারে আপনাদের এই সতর্কতা আমাকে অনেক স্বস্তি দিল। মেইন কোর্সে ধীরে ধীরে সেদ্ধ করা বিফ শর্ট রিবস আর রোজমেরি চিকেন—শীতের সবজির সাথে কোনটা বেশি ভালো জমবে?",
                "ipa": "/ðæt ɡɪvz miː trɪˈmendəs ˈkɒnfɪdəns ɪn jɔː ˈseɪfti ˈstændədz fɔː ðə meɪn ˈɒntreɪ/",
                "bn_pron": "দ্যাট গিভস মি ট্রিমেন্ডাস কনফিডেন্স। হুইচ মেইন এন্ট্রে পেয়ার্স বেটার উইথ উইন্টার ভেজিটেবলস?"
            },
            {
                "id": "6", "speaker": "Chef Antoine", "role": "B", "roleTitle": "Caterer / শেফ আঁতোয়ান",
                "en": "The short ribs are braised for twelve hours in rich pomegranate jus and melt like butter. In our experience, guests rave about it at formal gatherings.",
                "bn": "শর্ট রিবসগুলো ডালিমের রসে টানা বারো ঘণ্টা ধরে মৃদু আঁচে রান্না করা হয়, মুখে দিলে একদম মাখনের মতো মিলিয়ে যায়। আমাদের অভিজ্ঞতায়, যে কোনো বড় অনুষ্ঠানে অতিথিরা এর ভীষণ প্রশংসা করেন।",
                "ipa": "/ðə ʃɔːt rɪbz ɑː breɪzd fɔː twelv ˈaʊəz ɪn rɪtʃ ˈpɒmɪɡrænɪt ʒuː ænd melt laɪk ˈbʌtə/",
                "bn_pron": "দ্য শর্ট রিবস আর ব্লেইজড ফর টুয়েলভ আওয়ার্স অ্যান্ড মেল্ট লাইক বাটার। গেস্টস রেইভ অ্যাবাউট ইট!"
            },
            {
                "id": "7", "speaker": "Sadia", "role": "A", "roleTitle": "Host / সাদিয়া",
                "en": "Mmm, this taste test confirms it—the meat is extraordinarily tender! Let's lock in the braised short ribs as our primary entree.",
                "bn": "হুম, খেয়েই প্রমাণ পেলাম—মাংসটা সত্যিই অসাধারণ নরম ও রসালো! চলুন আমাদের মূল প্রধান খাবার হিসেবে এই ব্রেজড শর্ট রিবসকেই ফাইনাল করি।",
                "ipa": "/ðɪs teɪst test kənˈfɜːmz ɪt ðə miːt ɪz ɪkˈstrɔːdnrəli ˈtendə lets lɒk ɪn ðə breɪzd ʃɔːt rɪbz/",
                "bn_pron": "দিস টেস্ট কনফার্মস ইট—দ্য মিট ইজ এক্সট্রাঅর্ডিন্যারিলি টেন্ডার! লেটস লক ইন দ্য শর্ট রিবস।"
            },
            {
                "id": "8", "speaker": "Chef Antoine", "role": "B", "roleTitle": "Caterer / শেফ আঁতোয়ান",
                "en": "A stellar choice. Does your venue have full kitchen warming ovens, or should we bring our mobile catering heating trucks?",
                "bn": "দুর্দান্ত পছন্দ। আপনার বুক করা ভেন্যুতে কি খাবার গরম রাখার ওভেন আছে, নাকি আমরা আমাদের নিজস্ব মোবাইল ক্যাটারিং হিটিং ট্রাক নিয়ে আসব?",
                "ipa": "/ə ˈstelə tʃɔɪs dʌz jɔː ˈvenjuː hæv fʊl ˈkɪtʃɪn ˈwɔːmɪŋ ˈʌvnz/",
                "bn_pron": "আ স্টেলার চয়েস। ডাজ ইউর ভেন্যু হ্যাভ ফুল কিচেন ওভেনস, অর শুড উই ব্রিং মোবাইল হিটিং ট্রাকস?"
            },
            {
                "id": "9", "speaker": "Sadia", "role": "A", "roleTitle": "Host / সাদিয়া",
                "en": "The venue has basic prep counters, but no heavy ovens, so please include your self-contained warming equipment and four servers in the final invoice.",
                "bn": "ভেন্যুতে খাবার পরিবেশনের সাধারণ টেবিল আছে তবে বড় ওভেন নেই, তাই ফাইনাল বিলে দয়া করে আপনাদের হিটিং ইকুইপমেন্ট এবং চারজন সার্ভারের খরচ অন্তর্ভুক্ত করবেন।",
                "ipa": "/ðə ˈvenjuː hæz ˈbeɪsɪk prep ˈkaʊntəz bʌt nəʊ ˈhevi ˈʌvnz səʊ pliːz ɪnˈkluːd jɔːr ɪˈkwɪpmənt/",
                "bn_pron": "প্লিজ ইনক্লুড ইউর সেলফ-কন্টেইন্ড ওয়ার্মিং ইকুইপমেন্ট অ্যান্ড ফোর সার্ভারস ইন দ্য কোটেশন।"
            },
            {
                "id": "10", "speaker": "Chef Antoine", "role": "B", "roleTitle": "Caterer / শেফ আঁতোয়ান",
                "en": "Understood. I will adjust the contract to cover dinnerware, waitstaff, and kitchen trucks, and email the revised package tonight.",
                "bn": "একদম বুঝেছি। আমি প্লেট-গ্লাস, পরিবেশন কর্মী এবং মোবাইল কিচেন ট্রাক অন্তর্ভুক্ত করে নতুন চুক্তিটি ড্রাফট করে আজ রাতেই আপনাকে ইমেইল পাঠিয়ে দিচ্ছি।",
                "ipa": "/ˌʌndəˈstʊd aɪ wɪl əˈdʒʌst ðə ˈkɒntrækt tuː ˈkʌvə ˈdɪnəweə ˈweɪtstɑːf ænd ˈkɪtʃɪn trʌks/",
                "bn_pron": "আন্ডারস্টুড। আই উইল অ্যাডজাস্ট দ্য কন্ট্রাক্ট অ্যান্ড ইমেইল ইউ দ্য রিভাইজড প্যাকেজ টুনাইট।"
            }
        ],
        "followUps": [
            { "en": "Do you also manage the bar service, or should we supply our own non-alcoholic mocktails?", "bn": "আপনারা কি ড্রিংকস বা মকটেল ম্যানেজ করবেন, নাকি আমরা নিজেরাই নন-অ্যালকোহলিক ড্রিংকস আনব?" },
            { "en": "What is the deposit policy, and until when can we adjust final guest headcounts?", "bn": "বুকিং মানির নিয়ম কী, এবং অনুষ্ঠানের কয়দিন আগ পর্যন্ত চূড়ান্ত অতিথি সংখ্যা পরিবর্তন করা যাবে?" },
            { "en": "Could you provide miniature sample boxes for the two celiac guests to inspect beforehand?", "bn": "সিলিয়াক দুই অতিথির আগে দেখার জন্য কি ছোট স্যাম্পল বক্স দেওয়া সম্ভব?" }
        ],
        "closers": [
            { "en": "The food tasted divine, Chef Antoine. We cannot wait for our guests to experience it!", "bn": "খাবারের স্বাদ এক কথায় স্বর্গীয় ছিল শেফ আঁতোয়ান। আমাদের অতিথিরা এটা খেলে মুগ্ধ হয়ে যাবেন!" },
            { "en": "I'll keep an eye out for the contract. Have a fantastic evening!", "bn": "আমি চুক্তির ইমেইলের অপেক্ষায় থাকব। শুভ সন্ধ্যা!" },
            { "en": "Thank you so much! Goodbye.", "bn": "অনেক ধন্যবাদ! বিদায়।" }
        ],
        "nativePhrases": [
            { "phrase": "Melt like butter", "meaning": "মুখে দিলেই নরম হয়ে মিলিয়ে যাওয়া", "context": "অসাধারণ সুস্বাদু ও নরম মাংসের প্রশংসা করতে বলা।" },
            { "phrase": "Cross-contamination", "meaning": "অ্যালার্জিযুক্ত খাবারের সংস্পর্শে অন্য খাবার দূষিত হওয়া", "context": "খাদ্যনিরাপত্তা ও হাইজিন বজায় রাখার আন্তর্জাতিক টার্ম।" },
            { "phrase": "Rave about it", "meaning": "অত্যন্ত উচ্ছ্বসিত হয়ে প্রশংসা করা", "context": "কোনো অভিজ্ঞতা বা খাবারের ব্যাপারে মানুষ মুগ্ধ হয়ে ইতিবাচক কথা বললে।" }
        ]
    },

    # 48. Airport Desk: Urgent Rebooking after Abrupt Cancellation
    {
        "id": "conv-48-flight-cancellation-urgent-rebooking",
        "number": 48,
        "title": "Airline Desk: Urgent Rebooking after Sudden Flight Cancellation",
        "titleBn": "ফ্লাইট বাতিলের পর এয়ারপোর্টে জরুরি রিবুকিং ও হোটেল ভাউচার দাবি",
        "level": "Intermediate",
        "category": "Travel",
        "imageUrl": "https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=800&q=80",
        "sceneDescription": "আন্তর্জাতিক এয়ারপোর্টে খারাপ আবহাওয়া বা যান্ত্রিক ত্রুটির কারণে কানেক্টিং ফ্লাইট বাতিল হয়ে গেলে এয়ারলাইন্স ডেস্কে শান্ত কিন্তু দৃঢ়ভাবে কথা বলে বিকল্প ফ্লাইট ও হোটেল নিশ্চিত করা।",
        "briefing": {
            "setting": "লন্ডন হিথ্রো বা ফ্রাঙ্কফুর্ট এয়ারপোর্টের এয়ারলাইন্স কাস্টমার রি-বুকিং ডেস্ক (Heathrow Terminal 5 Customer Desk)",
            "roleA": { "name": "Stranded Passenger", "titleBn": "যাত্রী (Tariq)", "descBn": "নিউইয়র্কগামী ফ্লাইট বাতিল হওয়ায় চরম বিপাকে পড়েছেন" },
            "roleB": { "name": "Airline Duty Manager", "titleBn": "এয়ারলাইন ম্যানেজার (Sarah)", "descBn": "বিকল্প ফ্লাইট খুঁজে টিকিট রি-ইস্যু করছেন" },
            "overviewBn": "ফ্লাইট বাতিল হলে চিৎকার-চেঁচামেচি না করে শান্ত অথচ দৃঢ়ভাবে আন্তর্জাতিক এভিয়েশন অধিকার (যেমন UK261 / EU261 রুলস) অনুযায়ী খাবার, হোটেল থাকার ব্যবস্থা এবং পার্টনার এয়ারলাইন্সে সরাসরি ট্রান্সফারের দাবি জানাতে হয়।",
            "politenessTips": [
                "কর্মীদের ওপর রাগ না দেখিয়ে শান্তভাবে বলুন: 'I understand this disruption is stressful for you too, but I urgently need to reach New York today.'",
                "পার্টনার এয়ারলাইন্সের সিট দেখতে অনুরোধ করুন: 'Could you please check availability on your SkyTeam / Oneworld alliance partner flights?'",
                "হোটেল ও ভাউচার নিশ্চিত করুন: 'Under passenger duty of care regulations, will the airline provide dinner vouchers and overnight accommodation?'"
            ],
            "keyVocabulary": [
                { "word": "Involuntary rerouting", "meaning": "ফ্লাইট বাতিলের কারণে এয়ারলাইন্স কর্তৃক বিকল্প রুটে পাঠানো", "pron": "ইনভলান্টারি রিরুটিং" },
                { "word": "Duty of care voucher", "meaning": "যাত্রীর খাবার ও হোটেল খরচের এয়ারলাইন ভাউচার", "pron": "ডিউটি অফ কেয়ার ভাউচার" },
                { "word": "Codeshare / Alliance partner", "meaning": "জোটভুক্ত সহযোগী এয়ারলাইন্স", "pron": "কোডশেয়ার / অ্যালায়েন্স পার্টনার" },
                { "word": "Standby vs Confirmed seat", "meaning": "অপেক্ষমাণ আসন বনাম শতভাগ নিশ্চিত আসন", "pron": "স্ট্যান্ডবাই ভার্সেস কনফার্মড" }
            ]
        },
        "starters": [
            { "en": "Good evening, my flight BA-178 to New York was just abruptly canceled on the departures screen.", "bn": "শুভ সন্ধ্যা, ডিপার্চার স্ক্রিনে দেখলাম নিউইয়র্কগামী আমার BA-178 ফ্লাইটটি হঠাৎ বাতিল করা হয়েছে।" },
            { "en": "Hello, I am holding a confirmed ticket for the canceled 8 PM departure to JFK.", "bn": "হ্যালো, রাত আটটার জেএফকে-গামী বাতিল হওয়া ফ্লাইটের কনফার্মড টিকিটধারী যাত্রী আমি।" },
            { "en": "Hi, I have a critical connecting flight tomorrow morning and need immediate rerouting assistance.", "bn": "হাই, আগামীকাল সকালে আমার একটি অত্যন্ত জরুরি কানেক্টিং ফ্লাইট আছে এবং অবিলম্বে বিকল্প ফ্লাইটের সহায়তা দরকার।" }
        ],
        "dialogue": [
            {
                "id": "1", "speaker": "Tariq", "role": "A", "roleTitle": "Passenger / তারিক",
                "en": "Good evening, miss. I was just notified that British Airways flight 178 to JFK has been canceled due to a technical glitch. I have an indispensable medical conference tomorrow morning.",
                "bn": "শুভ সন্ধ্যা, আপা। আমি এইমাত্র নোটিফিকেশন পেলাম যে যান্ত্রিক ত্রুটির কারণে জেএফকে-গামী বিএ-১৭৮ ফ্লাইটটি বাতিল করা হয়েছে। আগামীকাল সকালে আমার একটি অত্যন্ত জরুরি মেডিকেল সম্মেলন আছে।",
                "ipa": "/ɡʊd ˈiːvnɪŋ mɪs aɪ wɒz dʒʌst ˈnəʊtɪfaɪd ðæt ˈbrɪtɪʃ ˈeəweɪz flaɪt hæz biːn ˈkænsld/",
                "bn_pron": "গুড ইভনিং, মিস। আই ওয়াজ জাস্ট নোটিফাইড দ্যাট মাই ফ্লাইট টু জেএফকে হ্যাজ বিন ক্যানসেলড।"
            },
            {
                "id": "2", "speaker": "Sarah", "role": "B", "roleTitle": "Duty Manager / সারাহ",
                "en": "I sincerely apologize for the distress, sir. The aircraft suffered hydraulic failure on arrival. Let me scan your boarding pass to pull up your booking reference.",
                "bn": "এই অনাকাঙ্ক্ষিত কষ্টের জন্য আমি আন্তরিকভাবে ক্ষমা চাইছি স্যার। বিমানটি অবতরণের সময় হাইড্রোলিক সমস্যায় পড়েছে। আপনার বোর্ডিং পাসটি দিন যাতে বুকিং ডিটেলস বের করতে পারি।",
                "ipa": "/aɪ sɪnˈsɪəli əˈpɒlədʒaɪz fɔː ðə dɪˈstres sɜːr ði ˈeəkrɑːft ˈsʌfəd haɪˈdrɔːlɪk ˈfeɪljə/",
                "bn_pron": "আই সিনসিয়ারলি অ্যাপোলোজাইজ। দ্য এয়ারক্রাফট সাফার্ড হাইড্রোলিক ফেইলিউর। লেট মি স্ক্যান ইউর পাস।"
            },
            {
                "id": "3", "speaker": "Tariq", "role": "A", "roleTitle": "Passenger / তারিক",
                "en": "Here is my passport and boarding stub. The app suggested putting me on tomorrow afternoon's flight, but that completely defeats my purpose of traveling.",
                "bn": "এই যে আমার পাসপোর্ট আর বোর্ডিং পাসের অংশ। অ্যাপে দেখাচ্ছে আমাকে নাকি কাল দুপুরের ফ্লাইটে নেওয়া হবে, কিন্তু ততক্ষণে আমার ভ্রমণের আসল উদ্দেশ্যই ব্যর্থ হয়ে যাবে।",
                "ipa": "/hɪər ɪz maɪ ˈpɑːspɔːt ænd ˈbɔːdɪŋ stʌb ði æp səˈdʒestɪd ˈpʊtɪŋ miː ɒn təˈmɒrəʊ ˌɑːftəˈnuːn/",
                "bn_pron": "হিয়ার ইজ মাই পাসপোর্ট। দ্য অ্যাপ সাজেস্টেড টুমরো আফটারনুন, বাট দ্যাট ডিফিটস মাই পারপাস।"
            },
            {
                "id": "4", "speaker": "Sarah", "role": "B", "roleTitle": "Duty Manager / সারাহ",
                "en": "I understand your urgency. The automated rebooker only checks direct BA flights. Let me look into our alliance partners like American Airlines and Virgin Atlantic.",
                "bn": "আমি আপনার তাগিদ বুঝতে পারছি। স্বয়ংক্রিয় সিস্টেম কেবল আমাদের সরাসরি ফ্লাইটগুলো খোঁজে। আমাকে একটু আমাদের পার্টনার আমেরিকান এয়ারলাইন্স বা ভার্জিন আটলান্টিকের সিট দেখতে দিন।",
                "ipa": "/aɪ ˌʌndəˈstænd jɔːr ˈɜːdʒənsi ði ˈɔːtəmeɪtɪd ˌriːˈbʊkə ˈəʊnli tʃeks daɪˈrekt biː-eɪ flaɪts/",
                "bn_pron": "আই আন্ডারস্ট্যান্ড ইউর আর্জেন্সি। লেট মি লুক ইনটু আমেরিকান এয়ারলাইন্স অ্যান্ড ভার্জিন আটলান্টিক।"
            },
            {
                "id": "5", "speaker": "Tariq", "role": "A", "roleTitle": "Passenger / তারিক",
                "en": "I would be immensely grateful if you could transfer my seat to American Airlines flight AA-105 departing at nine forty-five tonight. I noticed online they have two open seats.",
                "bn": "রাত ৯টা ৪৫ মিনিটে ছেড়ে যাওয়া আমেরিকান এয়ারলাইন্সের AA-105 ফ্লাইটে যদি আমার সিটটা ট্রান্সফার করে দিতে পারেন তবে আমি চিরকৃতজ্ঞ থাকব। অনলাইনে দেখলাম তাদের দুটি সিট খালি আছে।",
                "ipa": "/aɪ wʊd biː ɪˈmensli ˈɡreɪtfl ɪf juː kʊd trænsˈfɜː maɪ siːt tuː əˈmerɪkən ˈeəlaɪnz/",
                "bn_pron": "আই উড বি ইমেন্সলি গ্রেটফুল ইফ ইউ কুড ট্রান্সফার মাই সিট টু আমেরিকান এয়ারলাইন্স ডিপার্টিং টুনাইট।"
            },
            {
                "id": "6", "speaker": "Sarah", "role": "B", "roleTitle": "Duty Manager / সারাহ",
                "en": "Checking now... Yes! Slot is showing open in our interline ticketing system. I am capturing that seat right now for you before it sells out.",
                "bn": "আমি এখনই দেখছি... হ্যাঁ! আমাদের এয়ারলাইন সিস্টেমে সিটটি খালি দেখাচ্ছে। সিটটি অন্য কারও বুক হওয়ার আগেই আমি এটি আপনার নামে কনফার্ম করে নিচ্ছি।",
                "ipa": "/ˈtʃekɪŋ naʊ jes slɒt ɪz ˈʃəʊɪŋ ˈəʊpən ɪn ˈaʊər ˈɪntəlaɪn ˈtɪkɪtɪŋ ˈsɪstəm aɪ æm ˈkæptʃərɪŋ ðæt siːt/",
                "bn_pron": "চেকিং নাও... ইয়েস! আই অ্যাম ক্যাপচারিং দ্যাট সিট রাইট নাও বিফোর ইট সেলস আউট।"
            },
            {
                "id": "7", "speaker": "Tariq", "role": "A", "roleTitle": "Passenger / তারিক",
                "en": "That is phenomenal work, Sarah! What about my checked luggage? Will it be rerouted seamlessly onto the American flight?",
                "bn": "অসাধারণ কাজ করেছেন সারাহ! আমার চেক-ইন করা লাগেজের কী হবে? ওটা কি স্বয়ংক্রিয়ভাবে আমেরিকান এয়ারলাইন্সের ফ্লাইটে ট্রান্সফার হয়ে যাবে?",
                "ipa": "/ðæt ɪz fəˈnɒmɪnl wɜːk ˈseərə wɒt əˈbaʊt maɪ tʃekt ˈlʌɡɪdʒ wɪl ɪt biː ˌriːˈruːtɪd ˈsiːmləsli/",
                "bn_pron": "দ্যাট ইজ ফেনোমেনাল ওয়ার্ক! হোয়াট অ্যাবাউট মাই লাগেজ? উইল ইট বি রিরুটেড সিমলেসলি?"
            },
            {
                "id": "8", "speaker": "Sarah", "role": "B", "roleTitle": "Duty Manager / সারাহ",
                "en": "I have electronically redirected your baggage tag to flight AA-105. Both your suitcases will arrive on carousel four in New York terminal eight.",
                "bn": "আমি সিস্টেমে আপনার লাগেজ ট্যাগটি AA-105 ফ্লাইটের সাথে যুক্ত করে দিয়েছি। আপনার দুটি স্যুটকেসই নিউইয়র্কের টার্মিনাল আটের চার নম্বর বেল্টে গিয়ে পৌঁছাবে।",
                "ipa": "/aɪ hæv ɪˌlekˈtrɒnɪkli ˌdiːˈrektɪd jɔː ˈbæɡɪdʒ tæɡ tuː flaɪt bəʊθ jɔː ˈsuːtkeɪsɪz wɪl əˈraɪv/",
                "bn_pron": "আই হ্যাভ ইলেকট্রনিক্যালি রিডিরেক্টেড ইউর ব্যাগেজ ট্যাগ। বোথ সুটকেসেস উইল অ্যারাইভ ইন নিউইয়র্ক।"
            },
            {
                "id": "9", "speaker": "Tariq", "role": "A", "roleTitle": "Passenger / তারিক",
                "en": "Could you also issue a dinner voucher for the three-hour wait since the delay falls under passenger care?",
                "bn": "যাত্রী সেবা নীতিমালার আওতায় এই তিন ঘণ্টা অপেক্ষার জন্য কি একটি ডিনার ভাউচার ইস্যু করে দেওয়া যাবে?",
                "ipa": "/kʊd juː ˈɔːlsəʊ ˈɪʃuː ə ˈdɪnə ˈvaʊtʃə fɔː ðə θriː ˈaʊə weɪt sɪns ðə dɪˈleɪ fɔːlz ˈʌndə ˈpæsɪndʒə keə/",
                "bn_pron": "কুড ইউ অলসো ইস্যু আ ডিনার ভাউচার ফর দ্য থ্রি-আওয়ার ওয়েট আন্ডার প্যাসেঞ্জার কেয়ার?"
            },
            {
                "id": "10", "speaker": "Sarah", "role": "B", "roleTitle": "Duty Manager / সারাহ",
                "en": "Certainly. Here is your new boarding pass and a twenty-pound dining voucher valid at any terminal restaurant. Gate twenty-two boards at nine PM. Have a safe flight!",
                "bn": "অবশ্যই। এই যে আপনার নতুন বোর্ডিং পাস এবং যেকোনো রেস্তোরাঁয় ব্যবহারযোগ্য ২০ পাউন্ডের ডিনার ভাউচার। রাত নয়টায় ২২ নম্বর গেটে বোর্ডিং শুরু হবে। আপনার যাত্রা শুভ হোক!",
                "ipa": "/ˈsɜːtnli hɪər ɪz jɔː njuː ˈbɔːdɪŋ pɑːs ænd ə ˈtwenti paʊnd ˈdaɪnɪŋ ˈvaʊtʃə ˈvælɪd æt ˈeni ˈrestərɒnt/",
                "bn_pron": "সার্টেনলি। হিয়ার ইজ ইউর বোর্ডিং পাস অ্যান্ড ফুড ভাউচার। হ্যাভ আ সেইফ ফ্লাইট!"
            }
        ],
        "followUps": [
            { "en": "Do I need to go through security again, or can I stay airside?", "bn": "আমাকে কি আবার সিকিউরিটি চেক পার হতে হবে, নাকি এয়ারসাইডেই থাকতে পারব?" },
            { "en": "How do I claim EU261 compensation for the mechanical cancellation later?", "bn": "যান্ত্রিক ত্রুটির কারণে বাতিলের ক্ষতিপূরণ দাবি আমি পরে কীভাবে অনলাইনে জমা দেব?" },
            { "en": "Could you confirm my frequent flyer mileage number is recorded on the new ticket?", "bn": "আমার ফ্রিকোয়েন্ট ফ্লায়ার মাইলস নম্বরটি কি নতুন টিকিটে রেকর্ড হয়েছে?" }
        ],
        "closers": [
            { "en": "You were so calm and efficient under pressure, Sarah. Thank you so much!", "bn": "চাপের মধ্যেও আপনি এত শান্ত ও দক্ষভাবে কাজ করলেন সারাহ। অনেক ধন্যবাদ!" },
            { "en": "Thanks for finding that flight. I can still make my conference!", "bn": "ফ্লাইটটি খুঁজে দেওয়ার জন্য ধন্যবাদ। আমি এখনও আমার কনফারেন্স ধরতে পারব!" },
            { "en": "Have a peaceful rest of your shift. Goodbye!", "bn": "আপনার শিফট নির্বিঘ্ন হোক। বিদায়!" }
        ],
        "nativePhrases": [
            { "phrase": "Duty of care", "meaning": "যাত্রীদের খাবার ও আশ্রয়ের আইনি এয়ারলাইন দায়িত্ব", "context": "ফ্লাইট বিলম্ব বা বাতিল হলে এয়ারলাইন্স খাবার ও হোটেল দিতে বাধ্য থাকে।" },
            { "phrase": "Airside", "meaning": "সিকিউরিটি ও পাসপোর্ট চেক পার হওয়ার পরের ট্রানজিট এলাকা", "context": "বিমানবন্দরের ভেতরের লাউঞ্জ ও গেটের এলাকা।" },
            { "phrase": "Interline ticketing", "meaning": "এক এয়ারলাইন্স থেকে অন্য পার্টনার এয়ারলাইন্সে টিকিট রি-ইস্যু করা", "context": "যাত্রীকে জরুরি ভিত্তিতে অন্য এয়ারলাইন্সের বিমানে পাঠানোর প্রযুক্তি।" }
        ]
    },

    # 49. Casual Small Talk with a Stranger at an Art Exhibition / Museum
    {
        "id": "conv-49-small-talk-art-exhibition",
        "number": 49,
        "title": "Casual Small Talk with a Stranger at an Art Museum",
        "titleBn": "আর্ট গ্যালারি বা প্রদর্শনীতে অপরিচিত ব্যক্তির সাথে শিল্প নিয়ে স্বাভাবিক আড্ডা",
        "level": "Easy",
        "category": "Social",
        "imageUrl": "https://images.unsplash.com/photo-1544967082-d9d25d867d66?auto=format&fit=crop&w=800&q=80",
        "sceneDescription": "লন্ডনের টেট মডার্ন বা প্যারিসের মিউজিয়ামে বিখ্যাত চিত্রকর্মের সামনে দাঁড়িয়ে পাশে থাকা কোনো শিল্পপ্রেমীর সাথে সাবলীলভাবে কথা শুরু করা, পেইন্টিংয়ের অর্থ ব্যাখ্যা করা এবং চমৎকার সামাজিক বন্ধন তৈরি করা।",
        "briefing": {
            "setting": "লন্ডনের টেট মডার্ন আর্ট মিউজিয়াম গ্যালারি (Tate Modern Gallery Hall)",
            "roleA": { "name": "Curious Visitor", "titleBn": "শিল্পানুরাগী দর্শক (Zubair)", "descBn": "একটি আধুনিক অ্যাবস্ট্রাক্ট পেইন্টিংয়ের গভীর অর্থ বোঝার চেষ্টা করছেন" },
            "roleB": { "name": "Fellow Art Enthusiast", "titleBn": "সহ-দর্শক (Clara)", "descBn": "চিত্রকর্মটির ইতিহাস ও রঙের ব্যবহার নিয়ে আলোচনা করছেন" },
            "overviewBn": "মিউজিয়াম বা প্রদর্শনীতে অচেনা ব্যক্তির সাথে কথা শুরু করার সবচেয়ে সুন্দর উপায় হলো সরাসরি কোনো পেইন্টিং বা ভাস্কর্য নিয়ে মন্তব্য করা ('The use of light here is mesmerizing, isn't it?'). এতে কোনো অপ্রস্তুত ভাব ছাড়াই প্রাণবন্ত আলোচনা গড়ে ওঠে।",
            "politenessTips": [
                "অপরের ভাবনায় বাধা না দিয়ে মৃদু কণ্ঠে বলুন: 'Excuse me, but the texture on this canvas caught my eye...'",
                "নিজের ব্যাখ্যা চাপিয়ে না দিয়ে প্রশ্ন করুন: 'What do you think the artist was feeling here?'",
                "কথার গতি স্বাভাবিক রাখতে ওপেন-এন্ডেড মন্তব্য দিন: 'Art is so subjective, which makes conversations like this wonderful!'"
            ],
            "keyVocabulary": [
                { "word": "Mesmerizing", "meaning": "মুগ্ধকর বা সম্মোহিত করার মতো সুন্দর", "pron": "মেসমারাইজিং" },
                { "word": "Brushstroke & Texture", "meaning": "তুলির আঁচড় ও ক্যানভাসের খসখসে ভাব", "pron": "ব্রাশস্ট্রোক অ্যান্ড টেক্সচার" },
                { "word": "Abstract expressionism", "meaning": "বিমূর্ত অভিব্যক্তিবাদ শিল্পরীতি", "pron": "অ্যাবস্ট্রাক্ট এক্সপ্রেসোনিজিম" },
                { "word": "Subjective interpretation", "meaning": "ব্যক্তিগত দৃষ্টিকোণ থেকে মূল্যায়ন", "pron": "সাবজেক্টিভ ইন্টারপ্রিটেশন" }
            ]
        },
        "starters": [
            { "en": "The contrast between the deep cobalt blue and gold in this piece is mesmerizing, don't you think?", "bn": "এই চিত্রকর্মের গাঢ় নীল আর সোনালী রঙের বৈপরীত্যটা সত্যি মুগ্ধকর, তাই না?" },
            { "en": "Excuse me, I've been staring at this installation for five minutes trying to decipher the hidden message.", "bn": "মাফ করবেন, পাঁচ মিনিট ধরে আমি এই ইনস্টলেশনটির দিকে তাকিয়ে এর ভেতরের অন্তর্নিহিত বার্তা বোঝার চেষ্টা করছি।" },
            { "en": "Hi! Do you happen to know if this artist is part of the post-war European movement?", "bn": "হ্যালো! আপনি কি জানেন এই শিল্পী যুদ্ধোত্তর ইউরোপীয় আন্দোলনের অংশ ছিলেন কিনা?" }
        ],
        "dialogue": [
            {
                "id": "1", "speaker": "Zubair", "role": "A", "roleTitle": "Visitor / জুবায়ের",
                "en": "Excuse me, I couldn't help noticing how long you have been observing this piece. The aggressive red brushstrokes in the center almost feel like an emotional scream, don't they?",
                "bn": "মাফ করবেন, খেয়াল না করে পারলাম না আপনি কত মনোযোগ দিয়ে ছবিটা দেখছেন। মাঝখানের আক্রমণাত্মক লাল রঙের তুলির টানগুলো দেখে মনে হয় যেন কোনো তীব্র আবেগের চিৎকার, তাই না?",
                "ipa": "/ɪkˈskjuːz miː aɪ ˈkʊdnt help ˈnəʊtɪsɪŋ haʊ lɒŋ juː hæv biːn əbˈzɜːvɪŋ ðɪs piːs/",
                "bn_pron": "ইক্সকিউজ মি, দ্য রেড ব্রাশস্ট্রোকস অলমোস্ট ফিল লাইক অ্যান ইমোশনাল স্ক্রিম, ডোন্ট দে?"
            },
            {
                "id": "2", "speaker": "Clara", "role": "B", "roleTitle": "Enthusiast / ক্লারা",
                "en": "You captured it brilliantly! I was actually thinking the exact same thing. The artist painted this right after surviving the 1968 protests in Paris.",
                "bn": "আপনি দারুণভাবে বিষয়টি ধরেছেন! আমিও ঠিক এটাই ভাবছিলাম। শিল্পী ১৯৬৮ সালের প্যারিস গণবিক্ষোভ প্রত্যক্ষ করার ঠিক পরপরই এই ছবিটি এঁকেছিলেন।",
                "ipa": "/juː ˈkæptʃəd ɪt ˈbrɪliəntli aɪ wɒz ˈæktʃuəli ˈθɪŋkɪŋ ði ɪɡˈzækt seɪm θɪŋ/",
                "bn_pron": "ইউ ক্যাপচার্ড ইট ব্রিলিয়ান্টলি! দ্য আর্টিস্ট পেইন্টেড দিস রাইট আফটার দ্য প্যারিস প্রটেস্টস।"
            },
            {
                "id": "3", "speaker": "Zubair", "role": "A", "roleTitle": "Visitor / জুবায়ের",
                "en": "Ah, that historical context suddenly illuminates everything! Without knowing that backstory, one might just see chaotic paint splatters.",
                "bn": "আহ, ঐতিহাসিক পটভূমি জানার পর হঠাৎ সবকিছু স্পষ্ট হয়ে গেল! এই পেছনের গল্পটা না জানলে যে কেউ এটাকে কেবল রঙের বিশৃঙ্খল ছিটকে পড়া বলে মনে করত।",
                "ipa": "/ɑː ðæt hɪˈstɒrɪkl ˈkɒntekst ˈsʌdənli ɪˈluːmɪneɪts ˈevrɪθɪŋ wɪðˈaʊt ˈnəʊɪŋ ðæt ˈbækˌstɔːri/",
                "bn_pron": "আহ, দ্যাট হিস্টোরিক্যাল কনটেক্সট সাডেনলি ইলুমিনেটস এভরিথিং!"
            },
            {
                "id": "4", "speaker": "Clara", "role": "B", "roleTitle": "Enthusiast / ক্লারা",
                "en": "Exactly! If you look closely at the bottom-left corner, there is actual newspaper clippings embedded into the thick oil texture.",
                "bn": "ঠিক তাই! আপনি যদি নিচের বাঁদিকের কোণায় একটু ভালো করে লক্ষ্য করেন, দেখবেন পুরু তেলের রঙের আবরণের মধ্যে আসল খবরের কাগজের টুকরো বসানো আছে।",
                "ipa": "/ɪɡˈzæktli ɪf juː lʊk ˈkləʊsli æt ðə ˈbɒtəm left ˈkɔːnə ðeər ɪz ˈæktʃuəl ˈnjuːzˌpeɪpə ˈklɪpɪŋz/",
                "bn_pron": "এক্সাক্টলি! দেয়ার ইজ অ্যাকচুয়াল নিউজপেপার ক্লিপিংস এমবেডেড ইনটু দ্য অয়েল টেক্সচার।"
            },
            {
                "id": "5", "speaker": "Zubair", "role": "A", "roleTitle": "Visitor / জুবায়ের",
                "en": "Wow, I would have completely missed that detail if you hadn't pointed it out. Are you an art historian or curator yourself?",
                "bn": "অসাধারণ, আপনি ধরিয়ে না দিলে আমি এই সূক্ষ্ম বিষয়টি সম্পূর্ণ মিস করতাম। আপনি কি নিজে শিল্প ইতিহাসবিদ বা কোনো গ্যালারির কিউরেটর?",
                "ipa": "/waʊ aɪ wʊd hæv kəmˈpliːtli mɪst ðæt ˈdiːteɪl ɪf juː hædnt ˈpɔɪntɪd ɪt aʊt ɑː juː ən ɑːt hɪˈstɔːriən/",
                "bn_pron": "ওয়াও, আই উড হ্যাভ কমপ্লিটলি মিসড দ্যাট ডিটেল। আর ইউ অ্যান আর্ট হিস্টোরিয়ান?"
            },
            {
                "id": "6", "speaker": "Clara", "role": "B", "roleTitle": "Enthusiast / ক্লারা",
                "en": "Haha, no, just an architect who loves spending quiet Sunday afternoons wandering through galleries. What about you?",
                "bn": "হা হা, না না, আমি একজন আর্কিটেক্ট যে রবিবারের অলস দুপুরে নিরিবিলিতে গ্যালারি ঘুরে বেড়াতে ভালোবাসে। আপনি কী করেন?",
                "ipa": "/ˈhɑːhɑː nəʊ dʒʌst ən ˈɑːkɪtekt huː lʌvz ˈspendɪŋ ˈkwaɪət ˈsʌndeɪ ˌɑːftəˈnuːnz ˈwɒndərɪŋ θruː ˈɡæləriz/",
                "bn_pron": "হাহা, নো, জাস্ট অ্যান আর্কিটেক্ট হু লাভস ওয়ান্ডারিং থ্রু গ্যালারিজ। হোয়াট অ্যাবাউট ইউ?"
            },
            {
                "id": "7", "speaker": "Zubair", "role": "A", "roleTitle": "Visitor / জুবায়ের",
                "en": "I'm a software engineer visiting from Dhaka for a tech seminar, taking a breather to immerse in London's rich cultural scene.",
                "bn": "আমি সফটওয়্যার ইঞ্জিনিয়ার, ঢাকা থেকে একটা টেক সেমিনারে অংশ নিতে লন্ডনে এসেছি, আর কাজের ফাঁকে লন্ডনের সমৃদ্ধ সাংস্কৃতিক আবহে একটু মন জুড়িয়ে নিচ্ছি।",
                "ipa": "/aɪm ə ˈsɒftweər ˌendʒɪˈnɪə ˈvɪzɪtɪŋ frəm ˈdɑːkə fɔːr ə tek ˈsemɪnɑː ˈteɪkɪŋ ə ˈbriːðə/",
                "bn_pron": "আইম আ সফটওয়্যার ইঞ্জিনিয়ার ভিজিটিং ফ্রম ঢাকা ফর আ টেক সেমিনার।"
            },
            {
                "id": "8", "speaker": "Clara", "role": "B", "roleTitle": "Enthusiast / ক্লারা",
                "en": "Welcome to London! In that case, you definitely cannot miss the Rothko room on the fourth floor—it has the most transcendent lighting in the entire building.",
                "bn": "লন্ডনে স্বাগতম! তাহলে কিন্তু চারতলার রথকো রুম কোনোভাবেই মিস করবেন না—পুরো বিল্ডিংয়ের মধ্যে ওখানকার আলোর পরিবেশ সবচেয়ে অপার্থিব ও প্রশান্তিময়।",
                "ipa": "/ˈwelkəm tuː ˈlʌndən ɪn ðæt keɪs juː ˈdefɪnətli ˈkænɒt mɪs ðə ˈrɒθkəʊ ruːm ɒn ðə fɔːθ flɔː/",
                "bn_pron": "ওয়েলকাম টু লন্ডন! ইউ ক্যাননট মিস দ্য রথকো রুম অন দ্য ফোর্থ ফ্লোর।"
            },
            {
                "id": "9", "speaker": "Zubair", "role": "A", "roleTitle": "Visitor / জুবায়ের",
                "en": "Thank you so much for the brilliant recommendation, Clara! Would you care to head up together and see it?",
                "bn": "এত দারুণ একটা পরামর্শ দেওয়ার জন্য অনেক ধন্যবাদ ক্লারা! আপনি চাইলে কি আমরা একসাথেই উপরে গিয়ে ওটা দেখতে পারি?",
                "ipa": "/θæŋk juː səʊ mʌtʃ fɔː ðə ˈbrɪliənt ˌrekəmenˈdeɪʃn ˈkleərə wʊd juː keə tuː hed ʌp təˈɡeðər ænd siː ɪt/",
                "bn_pron": "থ্যাংক ইউ সো মাচ ফর দ্য রেকমেন্ডেশন! উড ইউ কেয়ার টু হেড আপ টুগেদার অ্যান্ড সি ইট?"
            },
            {
                "id": "10", "speaker": "Clara", "role": "B", "roleTitle": "Enthusiast / ক্লারা",
                "en": "I would love to! It is always much more enjoyable exploring art alongside someone who truly appreciates it. Lead the way!",
                "bn": "অবশ্যই, চলুন! শিল্পের সমঝদার কারও সাথে প্রদর্শনী দেখার আনন্দই আলাদা। আপনি সামনে চলুন!",
                "ipa": "/aɪ wʊd lʌv tuː ɪt ɪz ˈɔːlweɪz mʌtʃ mɔːr ɪnˈdʒɔɪəbl ɪkˈsplɔːrɪŋ ɑːt əˈlɒŋsaɪd ˈsʌmwʌn huː ˈtruːli əˈpriːʃieɪts ɪt/",
                "bn_pron": "আই উড লাভ টু! ইট ইজ অলওয়েজ মোর এনজয়েবল এক্সপ্লোরিং আর্ট টুগেদার। লিড দ্য ওয়ে!"
            }
        ],
        "followUps": [
            { "en": "Have you visited the National Gallery near Trafalgar Square as well?", "bn": "ট্রাফালগার স্কয়ারের পাশের ন্যাশনাল গ্যালারি কি আপনার যাওয়া হয়েছে?" },
            { "en": "What do you think makes contemporary architecture blend so harmoniously with historic cities?", "bn": "ঐতিহাসিক শহরের সাথে আধুনিক স্থাপত্য কীভাবে এত সুন্দরভাবে খাপ খায় বলে আপনার মনে হয়?" },
            { "en": "Is the museum rooftop cafe worth checking out for a panoramic skyline view?", "bn": "লন্ডনের পুরো স্কাইলাইন দেখার জন্য কি মিউজিয়ামের ছাদের ক্যাফেতে যাওয়া যায়?" }
        ],
        "closers": [
            { "en": "It was such a pleasure meeting you, Clara. Let's take the stairs to the fourth floor!", "bn": "আপনার সাথে পরিচয় হয়ে খুব ভালো লাগল ক্লারা। চলুন সিঁড়ি দিয়ে চারতলায় উঠি!" },
            { "en": "I really enjoyed our spontaneous art chat. Thanks for being so welcoming!", "bn": "হঠাৎ জমে ওঠা এই আর্ট আড্ডাটা দারুণ উপভোগ করলাম। এত আন্তরিকতার জন্য ধন্যবাদ!" },
            { "en": "Lead on! I'm excited to see the Rothko room.", "bn": "চলুন যাই! রথকো রুম দেখার জন্য আমি উদগ্রীব হয়ে আছি।" }
        ],
        "nativePhrases": [
            { "phrase": "Couldn't help noticing", "meaning": "নজর না দিয়ে পারলাম না", "context": "অপরিচিত ব্যক্তির সাথে ভদ্রভাবে কথা শুরু করার সেরা মার্জিত ভূমিকা।" },
            { "phrase": "Take a breather", "meaning": "ক্লান্তি দূর করতে ছোট বিরতি নেওয়া", "context": "কাজ বা পড়াশোনা থেকে বিশ্রাম নিয়ে রিফ্রেশ হওয়া।" },
            { "phrase": "Lead the way", "meaning": "আপনি আগে আগে চলুন, আমি পেছনে আসছি", "context": "একসাথে কোথাও হাঁটার সময় ভদ্রভাবে সঙ্গ দেওয়া।" }
        ]
    },

    # 50. Workplace Conflict Resolution: Clearing Miscommunication Peacefully
    {
        "id": "conv-50-workplace-conflict-resolution",
        "number": 50,
        "title": "Workplace Conflict Resolution: Clearing Misunderstandings",
        "titleBn": "অফিসে ভুল বোঝাবুঝি দূর করে পেশাদার সম্পর্ক স্বাভাবিক করা",
        "level": "Intermediate",
        "category": "Professional",
        "imageUrl": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
        "sceneDescription": "প্রজেক্টের কাজের ভাগাভাগি নিয়ে সহকর্মীর সাথে তৈরি হওয়া মৃদু মনোমালিন্য বা ভুল বোঝাবুঝি মিটিয়ে ফেলার জন্য একান্তে এক কাপ কফি নিয়ে বসে খোলামেলা ও মার্জিত আলোচনা।",
        "briefing": {
            "setting": "অফিসের নিরিবিলি কনফারেন্স রুম বা লাউঞ্জ (Private Meeting Huddle)",
            "roleA": { "name": "Team Lead / Peer", "titleBn": "সহকর্মী (Salman)", "descBn": "সরাসরি কথা বলে গত সপ্তাহের মিটিংয়ের অস্বস্তি দূর করতে চান" },
            "roleB": { "name": "Project Colleague", "titleBn": "সহকর্মী (Jessica)", "descBn": "ডেডলাইন নিয়ে ভুল বোঝাবুঝির পর নিজের অবস্থান শেয়ার করছেন" },
            "overviewBn": "কর্পোরেট জীবনে কারো ওপর রাগ পুষে রাখলে টিমের কাজ ব্যাহত হয়। 'I feel...' স্টেটমেন্ট ব্যবহার করে অভিযোগ ছাড়াই নিজের অনুভূতি প্রকাশ করা এবং উভয়ের কাজকে সম্মান দিয়ে দীর্ঘমেয়াদী পেশাদারিত্ব রক্ষা করা পেশাদার সাফল্যের মূল চাবিকাঠি।",
            "politenessTips": [
                "আক্রমণাত্মক ভাষা ('You never listen') পরিহার করে বলুন: 'I felt our communication got a bit wires crossed last Thursday.'",
                "অপরের কাজের গুরুত্ব স্বীকার করুন: 'I deeply value your expertise and want us to be completely synchronized.'",
                "সমাধানমুখী প্রশ্ন করুন: 'How can we structure our handoffs so neither of us feels overwhelmed?'"
            ],
            "keyVocabulary": [
                { "word": "Clear the air", "meaning": "ভুল বোঝাবুঝি বা মনের ক্ষোভ মিটিয়ে ফেলা", "pron": "ক্লিয়ার দি এয়ার" },
                { "word": "Wires crossed", "meaning": "যোগাযোগের ঘাটতিতে ভুল বোঝাবুঝি হওয়া", "pron": "ওয়্যারস ক্রসড" },
                { "word": "Constructive alignment", "meaning": "কাজে একমত হয়ে গঠনমূলক ঐক্য", "pron": "কনস্ট্রাকটিভ অ্যালাইনমেন্ট" },
                { "word": "Mutual respect", "meaning": "পারস্পরিক শ্রদ্ধা ও সৌহার্দ্য", "pron": "মিউচুয়াল রেসপেক্ট" }
            ]
        },
        "starters": [
            { "en": "Hi Jessica, do you have ten minutes for a private chat over coffee? I'd love to clear the air regarding yesterday's sprint meeting.", "bn": "হাই জেসিকা, কফি খেতে খেতে কি দশ মিনিট একান্তে কথা বলা যাবে? গতকালের মিটিং নিয়ে মনের ভুল বোঝাবুঝিটা একটু মিটিয়ে ফেলতে চাচ্ছিলাম।" },
            { "en": "Hello Jessica, I wanted to touch base so we can ensure our project milestones are completely aligned.", "bn": "হ্যালো জেসিকা, প্রজেক্টের কাজগুলো যাতে আমরা দুজন একই তালে চালাতে পারি সেজন্য একটু কথা বলতে চেয়েছিলাম।" },
            { "en": "Hey, I felt things got slightly tense during the client presentation, and I wanted to check in personally.", "bn": "আরে, ক্লায়েন্ট প্রেজেন্টেশনের সময় পরিবেশটা একটু অস্বস্তিকর লেগেছিল, তাই ব্যক্তিগতভাবে একটু খোঁজ নিতে এলাম।" }
        ],
        "dialogue": [
            {
                "id": "1", "speaker": "Salman", "role": "A", "roleTitle": "Colleague / সালমান",
                "en": "Hey Jessica, thanks for stepping into the huddle room with me. I felt that our communication got a bit wires-crossed during Thursday's roadmap presentation, and I wanted to talk it through openly.",
                "bn": "আরে জেসিকা, আমার সাথে একটু এই মিটিং রুমে বসার জন্য ধন্যবাদ। বৃহস্পতিবারের রোডম্যাপ প্রেজেন্টেশনের সময় আমাদের কথায় মনে হয় কিছুটা ভুল বোঝাবুঝি হয়েছিল, তাই বিষয়টা খোলামেলা আলোচনা করতে চেয়েছিলাম।",
                "ipa": "/heɪ ˈdʒesɪkə θæŋks fɔː ˈstepɪŋ ˈɪntuː ðə ˈhʌdl ruːm wɪð miː aɪ felt ðæt ˈaʊə kəˌmjuːnɪˈkeɪʃn ɡɒt ə bɪt waɪəz krɒst/",
                "bn_pron": "হেই জেসিকা, থ্যাংকস ফর স্টেপিং ইনটু দ্য রুম। আই ফেল্ট আওয়ার কমিউনিকেশন গট আ বিট ওয়্যারস ক্রসড।"
            },
            {
                "id": "2", "speaker": "Jessica", "role": "B", "roleTitle": "Colleague / জেসিকা",
                "en": "I appreciate you taking the initiative to speak directly, Salman. Honestly, when you interjected about the launch delays in front of the director, I felt slightly undermined.",
                "bn": "সরাসরি কথা বলার এই উদ্যোগ নেওয়ার জন্য আমি তোমার প্রশংসা করছি সালমান। সত্যি বলতে, পরিচালকের সামনে যখন তুমি লঞ্চের বিলম্ব নিয়ে হঠাৎ মাঝখানে কথা বলে উঠলে, তখন নিজেকে একটু অপ্রস্তুত ও অবমূল্যায়িত লেগেছিল।",
                "ipa": "/aɪ əˈpriːʃieɪt juː ˈteɪkɪŋ ði ɪˈnɪʃətɪv tuː spiːk dɪˈrektli ˈsælmən ˈɒnɪstli wen juː ˌɪntəˈdʒektɪd aɪ felt ˈslaɪtli ˌʌndəˈmaɪnd/",
                "bn_pron": "আই অ্যাপ্রিশিয়েট ইউর ইনিশিয়েটিভ। অনেস্টলি, হোয়েন ইউ ইন্টারজেক্টেড, আই ফেল্ট স্লাইটলি আন্ডারমাইন্ড।"
            },
            {
                "id": "3", "speaker": "Salman", "role": "A", "roleTitle": "Colleague / সালমান",
                "en": "I am so glad you told me that, Jessica. I sincerely apologize. My intent was purely to shield our engineering capacity, but I recognize that speaking up without syncing with you beforehand was tactless.",
                "bn": "তুমি যে কথাটা স্পষ্ট করে বললে তার জন্য আমি কৃতজ্ঞ জেসিকা। আমি মন থেকে ক্ষমা চাইছি। আমার উদ্দেশ্য ছিল শুধু আমাদের ইঞ্জিনিয়ারিং টিমের ওপর অতিরিক্ত চাপ না ফেলা, তবে তোমার সাথে আগে আলাপ না করে বলাটা সত্যিই অসাবধানতা ছিল।",
                "ipa": "/aɪ æm səʊ ɡlæd juː təʊld miː ðæt ˈdʒesɪkə aɪ sɪnˈsɪəli əˈpɒlədʒaɪz maɪ ɪnˈtent wɒz ˈpjʊəli tuː ʃiːld ˈaʊər ˌendʒɪˈnɪərɪŋ/",
                "bn_pron": "আই অ্যাম সো গ্ল্যাড ইউ টোল্ড মি দ্যাট। আই সিনসিয়ারলি অ্যাপোলোজাইজ। মাই ইনটেন্ট ওয়াজ নট টু আন্ডারমাইন ইউ।"
            },
            {
                "id": "4", "speaker": "Jessica", "role": "B", "roleTitle": "Colleague / জেসিকা",
                "en": "Thank you for acknowledging that. It means a lot to hear you say it. I also understand your stress regarding sprint deliverables and technical debt.",
                "bn": "বিষয়টি উপলব্ধি করার জন্য ধন্যবাদ। তোমার মুখ থেকে এই স্বীকারোক্তি শোনাটা আমার কাছে অনেক বড় বিষয়। স্প্রিন্টের ডেডলাইন আর টেকনিক্যাল ঘাটতি নিয়ে তোমার যে মানসিক চাপ ছিল সেটাও আমি বুঝি।",
                "ipa": "/θæŋk juː fɔːr əkˈnɒlɪdʒɪŋ ðæt ɪt miːnz ə lɒt tuː hɪə juː seɪ ɪt aɪ ˈɔːlsəʊ ˌʌndəˈstænd jɔː stres/",
                "bn_pron": "থ্যাংক ইউ ফর একনলেজিং দ্যাট। ইট মিন্স আ লট। আই অলসো আন্ডারস্ট্যান্ড ইউর স্ট্রেস।"
            },
            {
                "id": "5", "speaker": "Salman", "role": "A", "roleTitle": "Colleague / সালমান",
                "en": "I hold your product leadership in very high regard. Moving forward, how about we hold a ten-minute pre-alignment sync before any leadership presentation?",
                "bn": "প্রোডাক্ট লিডার হিসেবে তোমার যোগ্যতার প্রতি আমার গভীর শ্রদ্ধা রয়েছে। ভবিষ্যতে এমন ঝামেলা এড়াতে বড় কোনো প্রেজেন্টেশনের আগে কি আমরা দশ মিনিটের একটি ছোট্ট অভ্যন্তরীণ আলোচনা করে নিতে পারি?",
                "ipa": "/aɪ həʊld jɔː ˈprɒdʌkt ˈliːdəʃɪp ɪn ˈveri haɪ rɪˈɡɑːd ˈmuːvɪŋ ˈfɔːwəd haʊ əˈbaʊt wiː həʊld ə ten ˈmɪnɪt ˌpriː əˈlaɪnmənt sɪŋk/",
                "bn_pron": "আই হোল্ড ইউর লিডারশিপ ইন ভেরি হাই রিগার্ড। হাউ অ্যাবাউট উই হোল্ড আ টেন মিনিট প্রি-অ্যালাইনমেন্ট সিঙ্ক?"
            },
            {
                "id": "6", "speaker": "Jessica", "role": "B", "roleTitle": "Colleague / জেসিকা",
                "en": "That would be fantastic. If we iron out any discrepancies behind closed doors first, we will always present a completely unified front to the executives.",
                "bn": "এটা চমৎকার হবে। কোনো মতবিরোধ থাকলে আগেই বন্ধ দরজার পেছনে নিজেদের মধ্যে ঠিক করে নিলে পরিচালকদের সামনে আমরা সবসময় একটি ঐক্যবদ্ধ টিম হিসেবে দাঁড়াতে পারব।",
                "ipa": "/ðæt wʊd biː fænˈtæstɪk ɪf wiː ˈaɪən aʊt ˈeni dɪˈskrepənsiz bɪˈhaɪnd kləʊzd dɔːz fɜːst wiː wɪl ˈɔːlweɪz prɪˈzent/",
                "bn_pron": "দ্যাট উড বি ফ্যান্টাস্টিক। উই উইল অলওয়েজ প্রেজেন্ট আ ইউনিফাইড ফ্রন্ট টু দ্য এক্সিকিউটিভস।"
            },
            {
                "id": "7", "speaker": "Salman", "role": "A", "roleTitle": "Colleague / সালমান",
                "en": "Exactly. A united front protects both of our teams. Also, if there are ever any blind spots in my communication, please call me out privately anytime.",
                "bn": "একদম ঠিক। ঐক্যবদ্ধ থাকলে আমাদের উভয় দলেরই সম্মান বজায় থাকে। তাছাড়া আমার কথায় যদি কখনো কোনো ভুলত্রুটি বা দুর্বলতা চোখে পড়ে, দয়া করে যে কোনো সময় একান্তে আমাকে ডেকে ধরিয়ে দিও।",
                "ipa": "/ɪɡˈzæktli ə juːˈnaɪtɪd frʌnt prəˈtekts bəʊθ ɒv ˈaʊə tiːmz ˈɔːlsəʊ ɪf ðeər ɑːr ˈevər ˈeni blaɪnd spɒts/",
                "bn_pron": "এক্সাক্টলি। আ ইউনাইটেড ফ্রন্ট প্রোটেক্টস আস। প্লিজ কল মি আউট প্রাইভেটলি এনিটাইম।"
            },
            {
                "id": "8", "speaker": "Jessica", "role": "B", "roleTitle": "Colleague / জেসিকা",
                "en": "I promise I will, and I expect you to do the same for me. Mutual candor is how great working relationships are built.",
                "bn": "আমি কথা দিচ্ছি করব, এবং তোমার কাছ থেকেও আমি একই খোলামেলা আচরণ প্রত্যাশা করি। পারস্পরিক অকপটতার মাধ্যমেই তো সেরা কর্মপরিবেশ গড়ে ওঠে।",
                "ipa": "/aɪ ˈprɒmɪs aɪ wɪl ænd aɪ ɪkˈspekt juː tuː duː ðə seɪm fɔː miː ˈmjuːtʃuəl ˈkændər ɪz haʊ ɡreɪt ˈwɜːkɪŋ/",
                "bn_pron": "আই প্রমিস আই উইল। মিউচুয়াল ক্যান্ডার ইজ হাউ গ্রেট ওয়ার্কিং রিলেশনশিপস আর বিল্ট।"
            },
            {
                "id": "9", "speaker": "Salman", "role": "A", "roleTitle": "Colleague / সালমান",
                "en": "I feel so much lighter having talked this through with you. Shall we grab a quick espresso before our next team standup?",
                "bn": "তোমার সাথে বিষয়টি পরিষ্কার করে কথা বলতে পেরে মনটা খুব হালকা লাগছে। পরবর্তী টিম মিটিংয়ের আগে কি চট করে এক কাপ এসপ্রেসো খেয়ে আসব?",
                "ipa": "/aɪ fiːl səʊ mʌtʃ ˈlaɪtə ˈhævɪŋ tɔːkt ðɪs θruː wɪð juː ʃæl wiː ɡræb ə kwɪk eˈspresəʊ/",
                "bn_pron": "আই ফিল সো মাচ লাইটার হ্যাভিং টকড দিস থ্রু। শ্যাল উই গ্র্যাব আ কুইক এস্প্রেসো?"
            },
            {
                "id": "10", "speaker": "Jessica", "role": "B", "roleTitle": "Colleague / জেসিকা",
                "en": "Count me in! Coffee on me this time. Let's make this quarter our most successful sprint yet!",
                "bn": "অবশ্যই! এবারের কফির বিল আমার। চলো এই কোয়ার্টারটাকে আমাদের সবচেয়ে সফল স্প্রিন্টে পরিণত করি!",
                "ipa": "/kaʊnt miː ɪn ˈkɒfi ɒn miː ðɪs taɪm lets meɪk ðɪs ˈkwɔːtər ˈaʊə məʊst səkˈsesfl sprɪnt jet/",
                "bn_pron": "কাউন্ট মি ইন! কফি অন মি দিস টাইম। লেটস মেক দিস আওয়ার মোস্ট সাকসেসফুল স্প্রিন্ট!"
            }
        ],
        "followUps": [
            { "en": "Should we set up a shared document to jot down any pre-meeting talking points?", "bn": "মিটিংয়ের আগের মূল পয়েন্টগুলো টুকে রাখার জন্য কি একটি শেয়ার্ড গুগল ডক খুলে নেব?" },
            { "en": "Do you want to co-present the Q3 roadmap slides at next Monday's all-hands?", "bn": "আগামী সোমবারের কোম্পানির অল-হ্যান্ডস মিটিংয়ে কি আমরা দুজন একসাথে কিউ-থ্রি স্লাইড প্রেজেন্ট করব?" },
            { "en": "How are you feeling about the revised timeline for the mobile app redesign?", "bn": "মোবাইল অ্যাপ নতুন করে ডিজাইনের সংশোধিত সময়সীমা নিয়ে তোমার কী মতামত?" }
        ],
        "closers": [
            { "en": "Thank you for the openness, Jessica. Let's grab that coffee!", "bn": "এত আন্তরিকতার জন্য ধন্যবাদ জেসিকা। চলো কফি খেয়ে আসি!" },
            { "en": "Great chatting with you. We make a formidable team!", "bn": "তোমার সাথে কথা বলে দারুণ লাগল। আমরা দুজনে মিলে দুর্দান্ত একটা টিম!" },
            { "en": "See you at the standup!", "bn": "স্ট্যান্ডআপ মিটিংয়ে দেখা হচ্ছে!" }
        ],
        "nativePhrases": [
            { "phrase": "Clear the air", "meaning": "সরাসরি আলোচনা করে মনের দ্বিধা বা ক্ষোভ দূর করা", "context": "কর্মক্ষেত্রে কোনো ভুল বোঝাবুঝি বা তিক্ততা দূর করার আদর্শ বাক্য।" },
            { "phrase": "Wires crossed", "meaning": "যোগাযোগের ভুলে একে অপরকে ভুল বোঝা", "context": "তথ্য আদান-প্রদানে অসাবধানতাবশত বিভ্রান্তি সৃষ্টি হলে বলা।" },
            { "phrase": "United front", "meaning": "বাইরের মানুষের সামনে মতবিরোধ না দেখিয়ে ঐক্যবদ্ধ থাকা", "context": "ক্লায়েন্ট বা বসের সামনে টিমের একতা বজায় রাখার কৌশল।" }
        ]
    }
]

print("Loaded 10 situations (41 to 50)")
