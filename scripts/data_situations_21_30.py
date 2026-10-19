# -*- coding: utf-8 -*-
"""
Situations 21 to 30 for Spoken English Lab
"""

SITUATIONS_21_30 = [
    # 21. Job Interview: Background & Strengths
    {
        "id": "conv-21-job-interview-background-strengths",
        "number": 21,
        "title": "Job Interview: Background & Strengths",
        "titleBn": "চাকরির ইন্টারভিউ: নিজের দক্ষতা ও অভিজ্ঞতা তুলে ধরা",
        "level": "Intermediate",
        "category": "Professional",
        "imageUrl": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
        "sceneDescription": "চাকরির ইন্টারভিউ বোর্ডে নিজের প্রজেক্ট অভিজ্ঞতা, দলগত কাজের দক্ষতা এবং চাপ সামলানোর ক্ষমতা তুলে ধরার বাস্তব কথপোকথন।",
        "briefing": {
            "setting": "ইন্টারভিউ রুম (Executive Interview Boardroom)",
            "roleA": { "name": "Interviewer", "titleBn": "ইন্টারভিউয়ার / হায়ারার", "descBn": "প্রার্থীর অভিজ্ঞতা ও সমস্যা সমাধানের দক্ষতা যাচাই করছেন" },
            "roleB": { "name": "Candidate", "titleBn": "চাকরিপ্রার্থী / ক্যান্ডিডেট", "descBn": "স্পষ্ট ও আত্মবিশ্বাসের সাথে নিজের অবদান ও অর্জন জানাচ্ছেন" },
            "overviewBn": "জব ইন্টারভিউতে 'Walk me through your background', 'What are your greatest strengths?' এবং 'How do you handle deadlines?' ইত্যাদি প্রশ্নের উত্তর স্ট্রাকচার্ডভাবে (STAR মেথড) দেওয়ার কৌশল অনুশীলন করতে হয়।",
            "politenessTips": [
                "আত্মবিশ্বাসের সাথে চোখে চোখ রেখে সোজা হয়ে বসুন।",
                "শুধু দাবি না করে সুনির্দিষ্ট উদাহরণ দিন: 'For example, in my previous role, I reduced loading time by 40%.'",
                "ইন্টারভিউ শেষে ধন্যবাদ জানিয়ে প্রশ্ন করুন: 'What does success look like in this role over the first six months?'"
            ],
            "keyVocabulary": [
                { "word": "Track record", "meaning": "অতীতে সফল কাজের প্রামাণ্য রেকর্ড", "pron": "ট্র্যাক রেকর্ড" },
                { "word": "Cross-functional", "meaning": "বিভিন্ন বিভাগের সাথে সমন্বিত কাজ", "pron": "ক্রস-ফাংশনাল" },
                { "word": "Problem-solving mindset", "meaning": "সমস্যা দ্রুত সমাধানের ইতিবাচক মানসিকতা", "pron": "প্রবলেম-সলভিং মাইন্ডসেট" },
                { "word": "Measurable results", "meaning": "পরিমাপযোগ্য বাস্তব সাফল্য", "pron": "মেযারেবল রেজাল্টস" }
            ]
        },
        "starters": [
            { "en": "Good morning, thank you so much for inviting me for this interview opportunity.", "bn": "শুভ সকাল, এই ইন্টারভিউয়ের সুযোগে আমাকে আমন্ত্রণ জানানোর জন্য অনেক ধন্যবাদ।", "tip": "ইন্টারভিউ শুরু করার আদর্শ সূচনা।" },
            { "en": "I'm very excited about this role and how my background aligns with your team's mission.", "bn": "এই পদের ব্যাপারে এবং আপনাদের টিমের লক্ষ্যের সাথে আমার অভিজ্ঞতা যেভাবে মিলে যায় তা নিয়ে আমি খুবই উচ্ছ্বসিত।", "tip": "উৎসাহ ও আগ্রহ প্রকাশের উপায়।" },
            { "en": "May I walk you through the key milestones of my career so far?", "bn": "আমার ক্যারিয়ারের মূল মাইলফলকগুলো কি আমি সংক্ষেপে তুলে ধরতে পারি?", "tip": "নিজের ব্যাকগ্রাউন্ড বলার অনুমতি নেওয়া।" }
        ],
        "dialogue": [
            { "id": "1", "speaker": "Interviewer", "role": "A", "roleTitle": "Interviewer / হায়ারার", "en": "Good morning and welcome! To kick things off, could you walk me through your professional background?", "bn": "শুভ সকাল এবং স্বাগতম! আলোচনা শুরু করতে আপনার পেশাগত ব্যাকগ্রাউন্ডটি কি সংক্ষেপে তুলে ধরবেন?", "ipa": "/ɡʊd ˈmɔːnɪŋ ænd ˈwelkəm tuː kɪk θɪŋz ɒf kʊd juː wɔːk miː θruː jɔː prəˈfeʃənl ˈbækɡraʊnd/", "bn_pron": "গুড মর্নিং অ্যান্ড ওয়েলকাম! টু কিক থিংস অফ, কুড ইউ ওয়াক মি থ্রু ইউর প্রফেশনাল ব্যাকগ্রাউন্ড?" },
            { "id": "2", "speaker": "Candidate", "role": "B", "roleTitle": "Candidate / প্রার্থী", "en": "Good morning! I have spent the last five years specializing in full-stack web applications and scalable software systems.", "bn": "শুভ সকাল! গত পাঁচ বছর ধরে আমি ফুল-স্ট্যাক ওয়েব অ্যাপ্লিকেশন এবং স্কেলেবল সফটওয়্যার সিস্টেমে দক্ষতার সাথে কাজ করছি।", "ipa": "/ɡʊd ˈmɔːnɪŋ aɪ hæv spent ðə lɑːst faɪv jɪəz ˈspeʃəlaɪzɪŋ ɪn fʊl stæk web ˌæplɪˈkeɪʃnz/", "bn_pron": "গুড মর্নিং! আই হ্যাভ স্পেন্ট দ্য লাস্ট ফাইভ ইয়ার্স স্পেশালাইজিং ইন ফুল স্ট্যাক ওয়েব অ্যাপ্লিকেশনস।" },
            { "id": "3", "speaker": "Interviewer", "role": "A", "roleTitle": "Interviewer / হায়ারার", "en": "Impressive. What would you consider to be your greatest professional strength?", "bn": "বেশ প্রশংসনীয়। আপনার সবচেয়ে বড় পেশাগত শক্তি বা দক্ষতা কোনটি বলে আপনি মনে করেন?", "ipa": "/ɪmˈpresɪv wɒt wʊd juː kənˈsɪdə tuː biː jɔː ˈɡreɪtɪst prəˈfeʃənl streŋθ/", "bn_pron": "ইমপ্রেসিভ। ওয়াট উড ইউ কনসিডার টু বি ইউর গ্রেটেস্ট প্রফেশনাল স্ট্রেংথ?" },
            { "id": "4", "speaker": "Candidate", "role": "B", "roleTitle": "Candidate / প্রার্থী", "en": "My greatest strength is my problem-solving ability and bridging technical details with business goals.", "bn": "আমার সবচেয়ে বড় শক্তি হলো জটিল সমস্যা সমাধানের দক্ষতা এবং টেকনিক্যাল কাজের সাথে ব্যবসায়িক লক্ষ্যের চমৎকার সমন্বয় ঘটানো।", "ipa": "/maɪ ˈɡreɪtɪst streŋθ ɪz maɪ ˈprɒbləm ˈsɒlvɪŋ əˈbɪləti ænd ˈbrɪdʒɪŋ ˈteknɪkl ˈdiːteɪlz wɪð ˈbɪznəs ɡəʊlz/", "bn_pron": "মাই গ্রেটেস্ট স্ট্রেংথ ইজ মাই প্রবলেম সলভিং অ্যাবিলিটি অ্যান্ড ব্রিজিং টেকনিক্যাল ডিটেইলস উইথ বিজনেস গোলস।" },
            { "id": "5", "speaker": "Interviewer", "role": "A", "roleTitle": "Interviewer / হায়ারার", "en": "Could you share an example where you handled high pressure or an urgent deadline?", "bn": "চাপের মুখে বা জরুরি ডেডলাইনের মধ্যে কাজ সামলানোর কোনো বাস্তব উদাহরণ কি দিতে পারবেন?", "ipa": "/kʊd juː ʃeər ən ɪɡˈzɑːmpl weə juː ˈhændld haɪ ˈpreʃər ɔːr ən ˈɜːdʒənt ˈdedlaɪn/", "bn_pron": "কুড ইউ শেয়ার অ্যান এক্সাম্পল হোয়ার ইউ হ্যান্ডেলড হাই প্রেশার অর অ্যান আর্জেন্ট ডেডলাইন?" },
            { "id": "6", "speaker": "Candidate", "role": "B", "roleTitle": "Candidate / প্রার্থী", "en": "During our Black Friday product launch, our payment gateway failed. I quickly diagnosed the latency bottleneck and deployed a failover server within 15 minutes.", "bn": "ব্ল্যাক ফ্রাইডে লঞ্চের সময় আমাদের পেমেন্ট গেটওয়ে ডাউন হয়েছিল। আমি দ্রুত সমস্যার উৎস শনাক্ত করে ১৫ মিনিটের মধ্যে ব্যাকআপ সার্ভার চালু করি।", "ipa": "/ˈdjʊərɪŋ ˈaʊə blæk ˈfraɪdeɪ ˈprɒdʌkt lɔːntʃ ˈaʊə ˈpeɪmənt ˈɡeɪtweɪ feɪld aɪ ˈkwɪkli ˈdaɪəɡnəʊzd ðə ˈleɪtənsi/", "bn_pron": "ডিউরিং আওয়ার ব্ল্যাক ফ্রাইডে প্রোডাক্ট লঞ্চ, আওয়ার পেমেন্ট গেইটওয়ে ফেইল্ড। আই কুইকলি ডায়াগনোজড দ্য লেটেন্সি।" },
            { "id": "7", "speaker": "Interviewer", "role": "A", "roleTitle": "Interviewer / হায়ারার", "en": "That shows remarkable composure and speed! How do you handle feedback or disagreements?", "bn": "এটি সত্যিই চমৎকার মানসিক দৃঢ়তা ও ক্ষিপ্রতার প্রমাণ! সহকর্মীদের মতামত বা মতবিরোধ কীভাবে সামলান?", "ipa": "/ðæt ʃəʊz rɪˈmɑːkəbl kəmˈpəʊʒər ænd spiːd haʊ duː juː ˈhændl ˈfiːdbæk ɔː ˌdɪsəˈɡriːmənts/", "bn_pron": "দ্যাট শোজ রিমার্কেবল কম্পোজার অ্যান্ড স্পিড! হাউ ডু ইউ হ্যান্ডেল ফিডব্যাক অর ডিসএগ্রিমেন্টস?" },
            { "id": "8", "speaker": "Candidate", "role": "B", "roleTitle": "Candidate / প্রার্থী", "en": "I welcome constructive feedback as a catalyst for growth, and I focus on data rather than personal opinions.", "bn": "আমি গঠনমূলক সমালোচনাকে উন্নতির সেরা মাধ্যম হিসেবে স্বাগত জানাই, এবং ব্যক্তিগত মতের চেয়ে সবসময় ডেটার ওপর গুরুত্ব দিই।", "ipa": "/aɪ ˈwelkəm kənˈstrʌktɪv ˈfiːdbæk æz ə ˈkætəlɪst fɔː ɡrəʊθ ænd aɪ ˈfəʊkəs ɒn ˈdeɪtə ˈrɑːðə ðæn ˈpɜːsənl əˈpɪnjənz/", "bn_pron": "আই ওয়েলকাম কনস্ট্রাক্টিভ ফিডব্যাক অ্যাজ আ ক্যাটালিস্ট ফর গ্রোথ, অ্যান্ড আই ফোকাস অন ডেইটা।" },
            { "id": "9", "speaker": "Interviewer", "role": "A", "roleTitle": "Interviewer / হায়ারার", "en": "Fantastic. Do you have any questions for us regarding the team culture or role expectations?", "bn": "দারুণ। আমাদের টিমের কালচার বা এই পদের দায়িত্ব নিয়ে কি আপনার কোনো প্রশ্ন আছে?", "ipa": "/fænˈtæstɪk duː juː hæv ˈeni ˈkwestʃənz fɔːr ʌs rɪˈɡɑːdɪŋ ðə tiːm ˈkʌltʃər ɔː rəʊl ˌekspekˈteɪʃnz/", "bn_pron": "ফ্যান্টাস্টিক। ডু ইউ হ্যাভ এনি কোয়েশ্চেনস ফর আস রিগার্ডিং দ্য টিম কালচার অর রোল এক্সপেকটেশনস?" },
            { "id": "10", "speaker": "Candidate", "role": "B", "roleTitle": "Candidate / প্রার্থী", "en": "Yes! What are the primary milestones you'd want this role to accomplish in the first 90 days?", "bn": "হ্যাঁ! প্রথম ৯০ দিনের মধ্যে এই পদে আপনারা প্রধান কোন কোন লক্ষ্য অর্জন দেখতে চান?", "ipa": "/jes wɒt ɑː ðə ˈpraɪməri ˈmaɪlstəʊnz juːd wɒnt ðɪs rəʊl tuː əˈkʌmplɪʃ ɪn ðə fɜːst ˈnaɪnti deɪz/", "bn_pron": "ইয়েস! ওয়াট আর দ্য প্রাইমারি মাইলস্টোনস ইউড ওয়ান্ট দিস রোল টু অ্যাকমপ্লিশ ইন দ্য ফার্স্ট নাইনটি ডেইজ?" }
        ],
        "followUps": [
            { "en": "What is the expected compensation range for this level?", "bn": "এই লেভেলের জন্য নির্ধারিত বেতন স্কেল বা সুবিধা কেমন?" },
            { "en": "Does the engineering team operate on a hybrid or fully remote schedule?", "bn": "ইঞ্জিনিয়ারিং টিম কি হাইব্রিড নাকি সম্পূর্ণ রিমোট মোডে কাজ করে?" },
            { "en": "When can I expect to hear back regarding the next interview round?", "bn": "পরবর্তী রাউন্ডের ফলাফল কতদিনের মধ্যে পাওয়ার আশা করতে পারি?" }
        ],
        "closers": [
            { "en": "Thank you so much for this insightful conversation! I look forward to hearing from you.", "bn": "এই চমৎকার আলোচনার জন্য অনেক ধন্যবাদ! আপনাদের উত্তরের অপেক্ষায় রইলাম।" },
            { "en": "It was a real pleasure meeting you and learning about the company vision.", "bn": "আপনার সাথে পরিচিত হয়ে এবং কোম্পানির লক্ষ্য সম্পর্কে জানতে পেরে দারুণ লাগল।" },
            { "en": "Have a wonderful rest of your week! Goodbye.", "bn": "সপ্তাহের বাকি দিনগুলো সুন্দর কাটুক! বিদায়।" }
        ],
        "nativePhrases": [
            { "phrase": "Hit the ground running", "meaning": "কাজে যোগ দিয়েই কোনো সময় নষ্ট না করে পূর্ণ গতিতে পারফর্ম করা", "context": "ইন্টারভিউতে নিজের প্রস্তুতি বোঝাতে।" },
            { "phrase": "Think on your feet", "meaning": "চাপের মুখে উপস্থিত বুদ্ধি খাটিয়ে চটজলদি সঠিক সিদ্ধান্ত নেওয়া", "context": "যোগ্যতা তুলে ধরতে।" },
            { "phrase": "Bring to the table", "meaning": "কোম্পানি বা টিমের জন্য কী কী মূল্য বা অবদান সাথে নিয়ে আসা", "context": "দক্ষতা ব্যাখ্যার ক্ষেত্রে।" }
        ]
    },

    # 22. Office Meeting: Presenting Project Ideas
    {
        "id": "conv-22-office-meeting-presenting-project-ideas",
        "number": 22,
        "title": "Office Meeting: Presenting Project Ideas",
        "titleBn": "অফিস মিটিংয়ে নতুন প্রজেক্ট আইডিয়া উপস্থাপন",
        "level": "Intermediate",
        "category": "Professional",
        "imageUrl": "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
        "sceneDescription": "বোর্ডরুম মিটিংয়ে সহকর্মীদের সামনে নতুন অটোমেশন প্রজেক্টের স্লাইড উপস্থাপন, কাজের সময় বাঁচানো ও বাজেট নিয়ে যুক্তি দেওয়ার দৃশ্যপট।",
        "briefing": {
            "setting": "অফিস বোর্ডরুম (Corporate Conference Boardroom)",
            "roleA": { "name": "Team Lead", "titleBn": "টিম লিড / প্রেজেন্টার (Farhan)", "descBn": "স্লাইড শো করে নতুন প্রজেক্টের কার্যকারিতা তুলে ধরছেন" },
            "roleB": { "name": "Stakeholder", "titleBn": "অংশীদার / সহকর্মী (Reza)", "descBn": "বাস্তবায়নের সময়সীমা ও আরওআই (ROI) নিয়ে প্রশ্ন করছেন" },
            "overviewBn": "মিটিংয়ে প্রেজেন্টেশন দেওয়ার সময় পয়েন্টগুলো স্পষ্টভাবে বলা (Today I'd like to pitch...), সুবিধা তুলে ধরা (This will save 15 hours a week), এবং প্রশ্নের উত্তর আত্মবিশ্বাসের সাথে দেওয়া অত্যন্ত দরকারি।",
            "politenessTips": [
                "শুরুতে মনোযোগ আকর্ষণ করতে বলুন: 'Thank you all for joining. Today I'm excited to present our Q3 automation initiative.'",
                "পরিসংখ্যান তুলে ধরুন: 'As you can see on slide 4, our pilot reduced processing time by 35%.'",
                "প্রশ্ন আহ্বান করুন: 'I'd be glad to open the floor to any thoughts or feedback.'"
            ],
            "keyVocabulary": [
                { "word": "Return on Investment (ROI)", "meaning": "বিনিয়োগের বিপরীতে লাভ বা সুবিধা", "pron": "রিটার্ন অন ইনভেস্টমেন্ট" },
                { "word": "Bottleneck", "meaning": "যেখানে কাজের গতি থমকে যায়", "pron": "বটলনেক" },
                { "word": "Implementation timeline", "meaning": "প্রজেক্ট বাস্তবায়নের সময়সূচি", "pron": "ইমপ্লিমেন্টেশন টাইমলাইন" },
                { "word": "Open the floor", "meaning": "উপস্থিত সবাইকে মতামত দেওয়ার সুযোগ দেওয়া", "pron": "ওপেন দ্য ফ্লোর" }
            ]
        },
        "starters": [
            { "en": "Good morning team! Thank you all for making time for this project walkthrough.", "bn": "শুভ সকাল টিম! এই প্রজেক্টের আলোচনার জন্য সময় দেওয়ার জন্য সবাইকে ধন্যবাদ।", "tip": "মিটিং শুরুর সবচেয়ে ফরমাল ও শক্তিশালী বাক্য।" },
            { "en": "Today, I'd like to propose a workflow redesign that will dramatically cut down manual errors.", "bn": "আজ আমি কাজের এমন এক নতুন নকশা প্রস্তাব করব যা মানুষের ভুলগুলো নাটকীয়ভাবে কমিয়ে দেবে।", "tip": "আইডিয়া পিচ করার সূচনা।" },
            { "en": "If you look at the slide on the main screen, you'll see our current turnaround bottlenecks.", "bn": "প্রধান স্ক্রিনের স্লাইডটি দেখলে আপনারা বুঝতে পারবেন আমাদের বর্তমান গতি কোথায় আটকে যাচ্ছে।", "tip": "স্লাইডে মনোযোগ আকর্ষণের বাক্য।" }
        ],
        "dialogue": [
            { "id": "1", "speaker": "Farhan", "role": "A", "roleTitle": "Presenter / ফারহান", "en": "Good morning everyone. Today I'm thrilled to pitch our new automated customer onboarding workflow.", "bn": "শুভ সকাল সবাইকে। আজ আমাদের নতুন অটোমেটেড কাস্টমার অনবোর্ডিং ওয়ার্কফ্লো প্রস্তাব করতে পেরে আমি আনন্দিত।", "ipa": "/ɡʊd ˈmɔːnɪŋ ˈevriwʌn təˈdeɪ aɪm θrɪld tuː pɪtʃ ˈaʊə njuː ˈɔːtəmeɪtɪd ˈkʌstəmər ˈɒnbɔːdɪŋ ˈwɜːkfləʊ/", "bn_pron": "গুড মর্নিং এভরিওয়ান। টুডেই আইম থ্রিল্ড টু পিচ আওয়ার নিউ অটোমেটেড কাস্টমার অনবোর্ডিং।" },
            { "id": "2", "speaker": "Reza", "role": "B", "roleTitle": "Stakeholder / রেজা", "en": "Morning Farhan. We're very keen to hear how this addresses our current 3-day turnaround delay.", "bn": "শুভ সকাল ফারহান। আমাদের বর্তমান তিন দিনের কাজের বিলম্ব এটি কীভাবে সমাধান করবে তা শুনতে আগ্রহী।", "ipa": "/ˈmɔːnɪŋ fɑːˈhɑːn wiː ɑː ˈveri kiːn tuː hɪə haʊ ðɪs əˈdresɪz ˈaʊə ˈkʌrənt θriː deɪ ˈtɜːnəraʊnd dɪˈleɪ/", "bn_pron": "মর্নিং ফারহান। উই আর ভেরি কিন টু হিয়ার হাউ দিস অ্যাড্রেসেস আওয়ার কারেন্ট থ্রি ডেই টার্নঅ্যারাউন্ড ডিলে।" },
            { "id": "3", "speaker": "Farhan", "role": "A", "roleTitle": "Presenter / ফারহান", "en": "As you can see on Slide 3, manual data entry accounts for 70% of that delay. Our tool automates form verification.", "bn": "স্লাইড ৩-এ দেখতেই পাচ্ছেন, মানুষের হাতে টাইপ করার কারণেই ৭০% দেরি হয়। আমাদের টুলটি স্বয়ংক্রিয়ভাবে ফর্ম যাচাই করবে।", "ipa": "/æz juː kæn siː ɒn slaɪd θriː ˈmænjuəl ˈdeɪtə ˈentri əˈkaʊnts fɔː ˈsevnti pəˈsent ɒv ðæt dɪˈleɪ/", "bn_pron": "অ্যাজ ইউ ক্যান সি অন স্লাইড থ্রি, ম্যানুয়াল ডেইটা এন্ট্রি অ্যাকাউন্টস ফর সেভেন্টি পার্সেন্ট।" },
            { "id": "4", "speaker": "Reza", "role": "B", "roleTitle": "Stakeholder / রেজা", "en": "What kind of time savings are we projecting once this goes live?", "bn": "এটি চালু হওয়ার পর আমরা ঠিক কতখানি সময় বাঁচাতে পারব বলে প্রজেকশন দেখাচ্ছে?", "ipa": "/wɒt kaɪnd ɒv taɪm ˈseɪvɪŋz ɑː wiː prəˈdʒektɪŋ wʌns ðɪs ɡəʊz laɪv/", "bn_pron": "ওয়াট কাইন্ড অফ টাইম সেভিংস আর উই প্রজেক্টিং ওয়ান্স দিস গোজ লাইভ?" },
            { "id": "5", "speaker": "Farhan", "role": "A", "roleTitle": "Presenter / ফারহান", "en": "Onboarding time drops from 72 hours down to just 15 minutes, saving over 40 staff hours per week.", "bn": "অনবোর্ডিংয়ের সময় ৭২ ঘণ্টা থেকে কমে মাত্র ১৫ মিনিটে নেমে আসবে, যা সপ্তাহে ৪০ ঘণ্টারও বেশি কর্মী শ্রম বাঁচাবে।", "ipa": "/ˈɒnbɔːdɪŋ taɪm drɒps frəm ˈsevnti tuː ˈaʊəz daʊn tuː dʒʌst ˌfɪfˈtiːn ˈmɪnɪts/", "bn_pron": "অনবোর্ডিং টাইম ড্রপস ফ্রম সেভেন্টি টু আওয়ার্স ডাউন টু জাস্ট ফিফটিন মিনিটস।" },
            { "id": "6", "speaker": "Reza", "role": "B", "roleTitle": "Stakeholder / রেজা", "en": "That is a significant ROI. What about integration with our legacy database?", "bn": "এ তো বিরাট আরওআই বা লাভ। আমাদের পুরনো মূল ডেটাবেজের সাথে ইন্টিগ্রেশনের কী হবে?", "ipa": "/ðæt ɪz ə sɪɡˈnɪfɪkənt ɑːr əʊ aɪ wɒt əˈbaʊt ˌɪntɪˈɡreɪʃn wɪð ˈaʊə ˈleɡəsi ˈdeɪtəbeɪs/", "bn_pron": "দ্যাট ইজ আ সিগনিফিক্যান্ট আরওআই। ওয়াট অ্যাবাউট ইন্টিগ্রেশন উইথ আওয়ার লেগ্যাসি ডেইটাবেজ?" },
            { "id": "7", "speaker": "Farhan", "role": "A", "roleTitle": "Presenter / ফারহান", "en": "We've built secure REST APIs with backward compatibility, so no database migration is required.", "bn": "আমরা ব্যাকওয়ার্ড কমপ্যাটিবিলিটি সহ নিরাপদ REST API তৈরি করেছি, তাই ডেটাবেজ স্থানান্তরের কোনো ঝামেলা নেই।", "ipa": "/wiːv bɪlt sɪˈkjʊə rest eɪ piː aɪz wɪð ˈbækwəd kəmˌpætəˈbɪləti səʊ nəʊ ˈdeɪtəbeɪs maɪˈɡreɪʃn ɪz rɪˈkwaɪəd/", "bn_pron": "উইভ বিল্ট সিকিউর রেস্ট এপিআই উইথ ব্যাকওয়ার্ড কম্প্যাটিবিলিটি।" },
            { "id": "8", "speaker": "Reza", "role": "B", "roleTitle": "Stakeholder / রেজা", "en": "That mitigates our biggest technical risk. What does the rollout timeline look like?", "bn": "এটি আমাদের সবচেয়ে বড় টেকনিক্যাল ঝুঁকি দূর করল। বাস্তবায়নের সময়সূচি কেমন দেখাচ্ছে?", "ipa": "/ðæt ˈmɪtɪɡeɪts ˈaʊə ˈbɪɡɪst ˈteknɪkl rɪsk wɒt dʌz ðə ˈrəʊlaʊt ˈtaɪmlaɪn lʊk laɪk/", "bn_pron": "দ্যাট মিটিগেটস আওয়ার বিগেস্ট টেকনিক্যাল রিস্ক। ওয়াট ডাজ দ্য রোলআউট টাইমলাইন লুক লাইক?" },
            { "id": "9", "speaker": "Farhan", "role": "A", "roleTitle": "Presenter / ফারহান", "en": "Two weeks for internal user acceptance testing, followed by a gradual 20% rollout next month.", "bn": "অভ্যন্তরীণ ইউজার টেস্টিংয়ের জন্য দুই সপ্তাহ, এবং পরের মাসে ধাপে ধাপে ২০% দিয়ে মূল উদ্বোধন শুরু হবে।", "ipa": "/tuː wiːks fɔːr ɪnˈtɜːnl ˈjuːzər əkˈseptəns ˈtestɪŋ ˈfɒləʊd baɪ ə ˈɡrædʒuəl ˈtwenti pəˈsent ˈrəʊlaʊt/", "bn_pron": "টু উইকস ফর ইন্টারনাল ইউজার অ্যাকসেপ্টেন্স টেস্টিং, ফলোড বাই আ গ্র্যাজুয়াল টোয়েন্টি পার্সেন্ট রোলআউট।" },
            { "id": "10", "speaker": "Reza", "role": "B", "roleTitle": "Stakeholder / রেজা", "en": "I'm fully on board. Let's greenlight the testing phase immediately. Excellent presentation Farhan!", "bn": "আমি সম্পূর্ণরূপে সম্মত। টেস্টিং পর্বের জন্য এখনই অনুমোদন দিয়ে দেওয়া হোক। দারুণ প্রেজেন্টেশন ফারহান!", "ipa": "/aɪm ˈfʊli ɒn bɔːd lets ˈɡriːnlaɪt ðə ˈtestɪŋ feɪz ɪˈmiːdiətli ˈeksələnt ˌpreznˈteɪʃn fɑːˈhɑːn/", "bn_pron": "আইম ফুলি অন বোর্ড। লেটস গ্রীনলাইট দ্য টেস্টিং ফেইজ ইমিডিয়েটলি। এক্সেলেন্ট প্রেজেন্টেশন ফারহান!" }
        ],
        "followUps": [
            { "en": "Will the support staff require comprehensive training sessions before launch?", "bn": "চালু করার আগে কাস্টমার সাপোর্ট কর্মীদের কি প্রশিক্ষণের প্রয়োজন হবে?" },
            { "en": "Can we prepare a backup manual rollback plan in case of unexpected edge cases?", "bn": "কোনো অপ্রত্যাশিত সমস্যার জন্য কি ম্যানুয়াল ব্যাকআপ প্ল্যান প্রস্তুত রাখা যায়?" },
            { "en": "Could you circulate these presentation slides via email to the leadership team?", "bn": "এই স্লাইডগুলোর একটি কপি কি ইমেইলে লিডারশিপ টিমের কাছে পাঠানো যাবে?" }
        ],
        "closers": [
            { "en": "Thank you all for your constructive feedback and greenlight!", "bn": "আপনাদের মূল্যবান গঠনমূলক মতামত ও অনুমোদনের জন্য সবাইকে ধন্যবাদ!" },
            { "en": "I will send out the meeting minutes and action items by end of day.", "bn": "আজ দিনের শেষেই আমি মিটিংয়ের সিদ্ধান্ত ও পরবর্তী পদক্ষেপগুলো ইমেইল করে দেব।" },
            { "en": "Excited to get this project off the ground. Have a great day everyone!", "bn": "এই প্রজেক্টটি বাস্তবায়নের জন্য অধীর আগ্রহে অপেক্ষা করছি। সবার দিনটি ভালো কাটুক!" }
        ],
        "nativePhrases": [
            { "phrase": "On board", "meaning": "সম্পূর্ণ একমত ও সম্মত হওয়া", "context": "প্রজেক্টের প্রস্তাবে রাজি হলে।" },
            { "phrase": "Greenlight", "meaning": "কোনো কাজ শুরু করার জন্য চূড়ান্ত আনুষ্ঠানিক অনুমোদন দেওয়া", "context": "মিটিংয়ে কোনো প্রজেক্ট পাস হলে।" },
            { "phrase": "Get off the ground", "meaning": "কোনো পরিকল্পনা শুরু হয়ে সফলভাবে চালু হওয়া", "context": "নতুন শুরুর ক্ষেত্রে।" }
        ]
    },

    # 23. Polite Disagreement in a Meeting
    {
        "id": "conv-23-polite-disagreement-in-a-meeting",
        "number": 23,
        "title": "Polite Disagreement in a Meeting",
        "titleBn": "ভদ্র ও যুক্তিপূর্ণভাবে দ্বিমত পোষণ করা",
        "level": "Intermediate",
        "category": "Professional",
        "imageUrl": "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80",
        "sceneDescription": "মিটিংয়ে ম্যানেজারের কোনো সিদ্ধান্তের সাথে বিনয়ের সাথে দ্বিমত প্রকাশ করে বিকল্প বাস্তবসম্মত সমাধান দেওয়ার পেশাদার কৌশল।",
        "briefing": {
            "setting": "টিম স্ট্র্যাটেজি মিটিং (Team Strategy Meeting)",
            "roleA": { "name": "Manager", "titleBn": "ম্যানেজার (Tariq)", "descBn": "লঞ্চের ডেট দুই সপ্তাহ এগিয়ে আনার প্রস্তাব দিচ্ছেন" },
            "roleB": { "name": "Lead Developer", "titleBn": "লিড ডেভেলপার (Nadia)", "descBn": "ভদ্রভাবে কোয়ালিটি ও টেস্টিং ঝুঁকির কথা তুলে ধরছেন" },
            "overviewBn": "কর্মক্ষেত্রে মতের অমিল হতেই পারে। কিন্তু আক্রমণাত্মক না হয়ে 'I see your point, but...', 'Have we considered...', 'From a technical standpoint...' বলে যুক্তি দিলে পেশাদারিত্ব বজায় থাকে।",
            "politenessTips": [
                "আগে অপর পক্ষের দৃষ্টিভঙ্গিকে স্বীকৃতি দিন: 'I understand the urgency to capture market share, however...'",
                "ব্যক্তিগত না করে বিষয়ের ওপর যুক্তি রাখুন: 'My concern is primarily around security and testing stability.'",
                "সমস্যার পাশাপাশি সমাধান প্রস্তাব করুন: 'Alternatively, we could launch an MVP with core features first.'"
            ],
            "keyVocabulary": [
                { "word": "I see where you're coming from", "meaning": "আপনার যুক্তির জায়গাটি আমি বুঝতে পারছি", "pron": "আই সি হোয়ার ইউর কামিং ফ্রম" },
                { "word": "Quality assurance (QA)", "meaning": "গুণগত মান ও নিরাপত্তা পরীক্ষা", "pron": "কোয়ালিটি অ্যাসিউরেন্স" },
                { "word": "Cut corners", "meaning": "তাড়াহুড়ো করে নিয়মের কমতি করা বা ফাঁকি দেওয়া", "pron": "কাট কর্নার্স" },
                { "word": "Meet in the middle", "meaning": "আপস করে উভয় পক্ষের সুবিধাজনক সমাধান বের করা", "pron": "মিট ইন দ্য মিডল" }
            ]
        },
        "starters": [
            { "en": "I understand the goal behind this, but may I raise a quick concern regarding stability?", "bn": "আমি পেছনের উদ্দেশ্যটি বুঝতে পারছি, তবে স্থায়িত্ব নিয়ে একটি ছোট উদ্বেগের কথা কি বলতে পারি?", "tip": "দ্বিমত পোষণের সবচেয়ে মার্জিত রূপ।" },
            { "en": "I see your point, but looking at our testing timeline, that might introduce serious bugs.", "bn": "আপনার যুক্তি আমি মানছি, কিন্তু টেস্টিং সময়সূচি দেখলে এটা বড় কোনো ত্রুটি তৈরি করতে পারে।", "tip": "যুক্তিনির্ভর দ্বিমত প্রকাশের বাক্য।" },
            { "en": "Could we look at this from a slightly different angle before finalizing?", "bn": "চূড়ান্ত করার আগে বিষয়টি কি আমরা একটু অন্য দৃষ্টিভঙ্গি থেকে বিবেচনা করতে পারি?", "tip": "বিকল্প আলোচনার প্রস্তাব।" }
        ],
        "dialogue": [
            { "id": "1", "speaker": "Tariq", "role": "A", "roleTitle": "Manager / ম্যানেজার", "en": "To beat our competitor's announcement, I propose moving the product launch forward by two weeks.", "bn": "প্রতিযোগীদের পেছনে ফেলতে আমি প্রস্তাব করছি প্রডাক্ট লঞ্চের তারিখ দুই সপ্তাহ এগিয়ে আনার জন্য।", "ipa": "/tuː biːt ˈaʊə kəmˈpetɪtəz əˈnaʊnsmənt aɪ prəˈpəʊz ˈmuːvɪŋ ðə ˈprɒdʌkt lɔːntʃ ˈfɔːwəd baɪ tuː wiːks/", "bn_pron": "টু বিট আওয়ার কম্পিটিটরস অ্যানাউন্সমেন্ট, আই প্রপোজ মুভিং দ্য প্রোডাক্ট লঞ্চ ফরওয়ার্ড।" },
            { "id": "2", "speaker": "Nadia", "role": "B", "roleTitle": "Lead Dev / নাদিয়া", "en": "I definitely see where you're coming from regarding speed to market, Tariq. However, I have some reservations from a technical standpoint.", "bn": "মার্কেটে দ্রুত যাওয়ার গুরুত্ব আমি পুরোপুরি বুঝতে পারছি তারিক ভাই। তবে টেকনিক্যাল দিক থেকে আমার কিছু সংশয় রয়েছে।", "ipa": "/aɪ ˈdefɪnətli siː weə jɔː ˈkʌmɪŋ frəm rɪˈɡɑːdɪŋ spiːd tuː ˈmɑːkɪt təˈriːk haʊˈevər aɪ hæv sʌm ˌrezəˈveɪʃnz/", "bn_pron": "আই ডেফিনিটলি সি হোয়ার ইউর কামিং ফ্রম রিগার্ডিং স্পিড টু মার্কেট। হাউএভার, আই হ্যাভ সাম রিজার্ভেশনস।" },
            { "id": "3", "speaker": "Tariq", "role": "A", "roleTitle": "Manager / ম্যানেজার", "en": "What specifically are you concerned about, Nadia?", "bn": "কোন বিষয়টি নিয়ে তোমার সুনির্দিষ্ট উদ্বেগ রয়েছে নাদিয়া?", "ipa": "/wɒt spəˈsɪfɪkli ɑː juː kənˈsɜːnd əˈbaʊt ˈnɑːdiə/", "bn_pron": "ওয়াট স্পেসিফিকালি আর ইউ কনসার্নড অ্যাবাউট, নাদিয়া?" },
            { "id": "4", "speaker": "Nadia", "role": "B", "roleTitle": "Lead Dev / নাদিয়া", "en": "If we cut the testing cycle in half, we risk releasing unpatched security vulnerabilities to our users.", "bn": "আমরা যদি টেস্টিং সময় অর্ধেকে নামিয়ে আনি, তবে গ্রাহকদের কাছে ত্রুটিযুক্ত নিরাপত্তা ঝুঁকি সহ রিলিজ দেওয়ার বড় ঝুঁকি তৈরি হবে।", "ipa": "/ɪf wiː kʌt ðə ˈtestɪŋ ˈsaɪkl ɪn hɑːf wiː rɪsk rɪˈliːsɪŋ ʌnˈpætʃt sɪˈkjʊərəti ˌvʌlnərəˈbɪlətiz/", "bn_pron": "ইফ উই কাট দ্য টেস্টিং সাইকেল ইন হাফ, উই রিস্ক রিলিজিং আনপ্যাচড সিকিউরিটি ভালনারেবিলিটিজ।" },
            { "id": "5", "speaker": "Tariq", "role": "A", "roleTitle": "Manager / ম্যানেজার", "en": "A security breach would certainly destroy customer trust. What middle ground do you suggest?", "bn": "নিরাপত্তাজনিত ত্রুটি নিঃসন্দেহে গ্রাহকের আস্থা নষ্ট করবে। তাহলে এর মাঝামাঝি কী সমাধান তুমি সাজেস্ট করো?", "ipa": "/ə sɪˈkjʊərəti briːtʃ wʊd ˈsɜːtnli dɪˈstrɔɪ ˈkʌstəmə trʌst wɒt ˈmɪdl ɡraʊnd duː juː səˈdʒest/", "bn_pron": "আ সিকিউরিটি ব্রীচ উড সার্টেনলি ডেস্ট্রয় কাস্টমার ট্রাস্ট। ওয়াট মিডল গ্রাউন্ড ডু ইউ সাজেস্ট?" },
            { "id": "6", "speaker": "Nadia", "role": "B", "roleTitle": "Lead Dev / নাদিয়া", "en": "I suggest launching a closed beta for 500 VIP users on the early date, while preserving full QA for public release.", "bn": "আমি প্রস্তাব করছি নির্ধারিত আগের তারিখে ৫০০ জন ভিআইপি ইউজারের জন্য ক্লোজড বেটা লঞ্চ করা হোক, আর পাবলিক রিলিজের জন্য ফুল টেস্টিং বহাল থাকুক।", "ipa": "/aɪ səˈdʒest ˈlɔːntʃɪŋ ə kləʊzd ˈbiːtə fɔː faɪv ˈhʌndrəd viː aɪ piː ˈjuːzəz ɒn ðə ˈɜːli deɪt/", "bn_pron": "আই সাজেস্ট লঞ্চিং আ ক্লোজড বেটা ফর ফাইভ হান্ড্রেড ভিআইপি ইউজার্স অন দ্য আর্লি ডেইট।" },
            { "id": "7", "speaker": "Tariq", "role": "A", "roleTitle": "Manager / ম্যানেজার", "en": "That would still give us strong press buzz without gambling on code quality!", "bn": "তাতে কোডের কোয়ালিটি নিয়ে জুয়া না খেলেও আমাদের প্রচারণার দারুণ সুবিধা পাওয়া যাবে!", "ipa": "/ðæt wʊd stɪl ɡɪv ʌs strɒŋ pres bʌz wɪˈðaʊt ˈɡæmblɪŋ ɒn kəʊd ˈkwɒləti/", "bn_pron": "দ্যাট উড স্টিল গিভ আস স্ট্রং প্রেস বাজ উইদাউট গ্যাম্বলিং অন কোড কোয়ালিটি!" },
            { "id": "8", "speaker": "Nadia", "role": "B", "roleTitle": "Lead Dev / নাদিয়া", "en": "Exactly. And the beta group will help us catch real-world edge cases ahead of time.", "bn": "একদম ঠিক। আর বেটা ইউজাররাই সময়ের আগেই বাস্তব জীবনের খুঁটিনাটি ভুলগুলো ধরিয়ে দিতে সাহায্য করবে।", "ipa": "/ɪɡˈzæktli ænd ðə ˈbiːtə ɡruːp wɪl help ʌs kætʃ ˈrɪəl wɜːld edʒ ˈkeɪsɪz əˈhed ɒv taɪm/", "bn_pron": "এক্স্যাক্টলি। অ্যান্ড দ্য বেটা গ্রুপ উইল হেল্প আস ক্যাচ রিয়্যাল ওয়ার্ল্ড এজ কেইসেস।" },
            { "id": "9", "speaker": "Tariq", "role": "A", "roleTitle": "Manager / ম্যানেজার", "en": "I really appreciate you speaking up with data instead of remaining silent, Nadia. That's true leadership.", "bn": "চুপ না থেকে ডেটা সহকারে কথা বলার জন্য আমি তোমার সাহসের প্রশংসা করছি নাদিয়া। এটাই প্রকৃত লিডারশিপ।", "ipa": "/aɪ ˈrɪəli əˈpriːʃieɪt juː ˈspiːkɪŋ ʌp wɪð ˈdeɪtə ɪnˈsted ɒv rɪˈmeɪnɪŋ ˈsaɪlənt ˈnɑːdiə/", "bn_pron": "আই রিয়ালি অ্যাপ্রিশিয়েট ইউ স্পিকিং আপ উইথ ডেইটা ইনস্টেড অফ রিমেইনিং সাইলেন্ট।" },
            { "id": "10", "speaker": "Nadia", "role": "B", "roleTitle": "Lead Dev / নাদিয়া", "en": "Thank you Tariq. We all want the launch to be an undeniable commercial success!", "bn": "ধন্যবাদ তারিক ভাই। আমরা সবাই তো দিনশেষে লঞ্চের এক অবিস্মরণীয় বাণিজ্যিক সাফল্যই চাই!", "ipa": "/θæŋk juː təˈriːk wiː ɔːl wɒnt ðə lɔːntʃ tuː biː ən ˌʌndɪˈnaɪəbl kəˈmɜːʃl səkˈses/", "bn_pron": "থ্যাংক ইউ তারিক। উই অল ওয়ান্ট দ্য লঞ্চ টু বি অ্যান আনডিনাইয়েবল কমার্শিয়াল সাকসেস!" }
        ],
        "followUps": [
            { "en": "How many engineers will be assigned to monitor the beta user metrics?", "bn": "বেটা ইউজারদের মেট্রিকস মনিটর করার জন্য কতজন ইঞ্জিনিয়ারকে দায়িত্ব দেওয়া হবে?" },
            { "en": "Do we have an automated rollback script ready in case of unexpected crashes?", "bn": "অপ্রত্যাশিত ক্র্যাশ হলে কি অটোমেটেড রোলব্যাক স্ক্রিপ্ট রেডি আছে?" },
            { "en": "Should we draft a communication template for the closed beta participants?", "bn": "ক্লোজড বেটা অংশগ্রহণকারীদের জন্য কি একটি মেসেজ টেমপ্লেট ড্রাফট করে রাখা উচিত?" }
        ],
        "closers": [
            { "en": "Thank you for creating an environment where healthy debate is encouraged!", "bn": "সুস্থ যুক্তিপূর্ণ বিতর্ককে উৎসাহিত করার পরিবেশ তৈরি করার জন্য ধন্যবাদ!" },
            { "en": "I'll align the engineering team on the closed beta scope today.", "bn": "আমি আজই ইঞ্জিনিয়ারিং টিমকে ক্লোজড বেটার পরিকল্পনায় যুক্ত করে দিচ্ছি।" },
            { "en": "Great team alignment. Let's make this launch legendary!", "bn": "টিমের দারুণ সমঝোতা হলো। চলুন এই লঞ্চটিকে স্মরণীয় করে তুলি!" }
        ],
        "nativePhrases": [
            { "phrase": "See eye to eye", "meaning": "সম্পূর্ণ একমত পোষণ করা", "context": "মতৈক্য নিয়ে কথা বলতে।" },
            { "phrase": "Cut corners", "meaning": "তাড়াহুড়ো করতে গিয়ে গুণগত মানের ক্ষতি করা", "context": "কাজের কোয়ালিটি নিয়ে সতর্ক করতে।" },
            { "phrase": "Middle ground", "meaning": "উভয় পক্ষের সুবিধাজনক সমঝোতা বা আপসরফা", "context": "দ্বিমত দূর করার ক্ষেত্রে।" }
        ]
    },

    # 24. Airport: Baggage Drop & Boarding Pass
    {
        "id": "conv-24-airport-baggage-drop-boarding-pass",
        "number": 24,
        "title": "Airport: Baggage Drop & Boarding Pass",
        "titleBn": "এয়ারপোর্টে লাগেজ ড্রপ ও বোর্ডিং পাস সংগ্রহ",
        "level": "Intermediate",
        "category": "Travel",
        "imageUrl": "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&w=800&q=80",
        "sceneDescription": "আন্তর্জাতিক বিমানবন্দরে এয়ারলাইন্সের চেক-ইন ডেস্কে গিয়ে পাসপোর্ট দেখানো, লাগেজ ওজন করানো, উইন্ডো সিট চাওয়া ও বোর্ডিং গেট জানার দৃশ্যপট।",
        "briefing": {
            "setting": "এয়ারপোর্ট চেক-ইন কাউন্টার (Airport Check-in Counter)",
            "roleA": { "name": "Passenger", "titleBn": "বিমানযাত্রী (Passenger)", "descBn": "লন্ডনের ফ্লাইটের জন্য লাগেজ ড্রপ ও উইন্ডো সিট চাচ্ছেন" },
            "roleB": { "name": "Check-in Agent", "titleBn": "এয়ারলাইন স্টাফ (Agent)", "descBn": "পাসপোর্ট চেক করে লাগেজ ওজন করছেন ও বোর্ডিং পাস দিচ্ছেন" },
            "overviewBn": "এয়ারপোর্টে পাসপোর্ট ও ভিসা দেখানো, চেকড লাগেজ (Checked luggage vs Carry-on baggage) ওজন করা, সিট পছন্দ করা (Window or aisle seat) এবং বোর্ডিং টাইম ও গেট নম্বর নিশ্চিত করা অপরিহার্য।",
            "politenessTips": [
                "ডেস্কে হাসিমুখে পাসপোর্ট দিয়ে বলুন: 'Good morning, checking in for flight BG201 to London Heathrow.'",
                "পছন্দের সিট চাইতে বলুন: 'Could I please get a window seat if one is available?'",
                "গেটের ব্যাপারে নিশ্চিত হোন: 'Which gate is the flight departing from, and what time does boarding begin?'"
            ],
            "keyVocabulary": [
                { "word": "Boarding pass", "meaning": "বিমানে ওঠার আনুষ্ঠানিক ছাড়পত্র", "pron": "বোর্ডিং পাস" },
                { "word": "Checked baggage / Carry-on", "meaning": "বড় মালামাল / সাথে নেওয়া ছোট কেবিন ব্যাগ", "pron": "চেকড ব্যাগেজ / ক্যারি-অন" },
                { "word": "Window seat / Aisle seat", "meaning": "জানালার পাশের সিট / হাঁটার গলির পাশের সিট", "pron": "উইন্ডো সিট / আইল সিট" },
                { "word": "Security check", "meaning": "বিমানবন্দরের নিরাপত্তা তল্লাশি", "pron": "সিকিউরিটি চেক" }
            ]
        },
        "starters": [
            { "en": "Good morning, I'd like to check in for the Qatar Airways flight to London.", "bn": "শুভ সকাল, আমি লন্ডনের কাতার এয়ারওয়েজ ফ্লাইটের জন্য চেক-ইন করতে চাই।", "tip": "চেক-ইন কাউন্টারে সূচনা বাক্য।" },
            { "en": "Hello, I have completed online check-in and just need to drop off my checked luggage.", "bn": "হ্যালো, আমি অনলাইনে চেক-ইন করেছি, শুধু লাগেজ জমা দিতে এসেছি।", "tip": "ব্যাগ ড্রপের বাক্য।" },
            { "en": "Could you check if there are any complimentary exit row seats remaining?", "bn": "সামনে বেশি খালি জায়গা সহ এক্সিট রো-তে কি কোনো সিট পাওয়া যাবে?", "tip": "বিশেষ সিট চাওয়ার উপায়।" }
        ],
        "dialogue": [
            { "id": "1", "speaker": "Passenger", "role": "A", "roleTitle": "Passenger / যাত্রী", "en": "Good morning! I'm checking in for British Airways flight 142 to London Heathrow.", "bn": "শুভ সকাল! আমি লন্ডন হিথ্রোগামী ব্রিটিশ এয়ারওয়েজের ১৪২ নম্বর ফ্লাইটের চেক-ইন করতে এসেছি।", "ipa": "/ɡʊd ˈmɔːnɪŋ aɪm ˈtʃekɪŋ ɪn fɔː ˈbrɪtɪʃ ˈeəweɪz flaɪt wʌn fɔː tuː tuː ˈlʌndən ˈhiːθrəʊ/", "bn_pron": "গুড মর্নিং! আইম চেকিং ইন ফর ব্রিটিশ এয়ারওয়েজ ফ্লাইট ওয়ান ফোর টু টু লন্ডন হিথ্রো।" },
            { "id": "2", "speaker": "Agent", "role": "B", "roleTitle": "Agent / স্টাফ", "en": "Good morning! Welcome. May I please see your passport and valid visa?", "bn": "শুভ সকাল! স্বাগতম। আমি কি আপনার পাসপোর্ট এবং বৈধ ভিসাটি দেখতে পারি?", "ipa": "/ɡʊd ˈmɔːnɪŋ ˈwelkəm meɪ aɪ pliːz siː jɔː ˈpɑːspɔːt ænd ˈvælɪd ˈviːzə/", "bn_pron": "গুড মর্নিং! ওয়েলকাম। মে আই প্লীয সি ইউর পাসপোর্ট অ্যান্ড ভ্যালিড ভিসা?" },
            { "id": "3", "speaker": "Passenger", "role": "A", "roleTitle": "Passenger / যাত্রী", "en": "Here is my passport with the UK visa stamp. Do you need my printed e-ticket?", "bn": "এই যে ইউকে ভিসা স্ট্যাম্পসহ আমার পাসপোর্ট। আমার প্রিন্ট করা ই-টিকিট কি লাগবে?", "ipa": "/hɪər ɪz maɪ ˈpɑːspɔːt wɪð ðə juː keɪ ˈviːzə stæmp duː juː niːd maɪ ˈprɪntɪd ˈiːtɪkɪt/", "bn_pron": "হিয়ার ইয মাই পাসপোর্ট উইথ দ্য ইউকে ভিসা স্ট্যাম্প। ডু ইউ নিড মাই প্রিন্টেড ই-টিকেট?" },
            { "id": "4", "speaker": "Agent", "role": "B", "roleTitle": "Agent / স্টাফ", "en": "The passport is sufficient! How many bags are you checking in today?", "bn": "পাসপোর্টই যথেষ্ট! আজ কতগুলো বড় লাগেজ বিমানে চেক-ইন করতে দিচ্ছেন?", "ipa": "/ðə ˈpɑːspɔːt ɪz səˈfɪʃnt haʊ ˈmeni bæɡz ɑː juː ˈtʃekɪŋ ɪn təˈdeɪ/", "bn_pron": "দ্য পাসপোর্ট ইজ সাফিশিয়েন্ট! হাউ মেনি ব্যাগস আর ইউ চেকিং ইন টুডেই?" },
            { "id": "5", "speaker": "Passenger", "role": "A", "roleTitle": "Passenger / যাত্রী", "en": "Just this one large suitcase. And I have one small backpack as my carry-on.", "bn": "শুধু এই একটি বড় স্যুটকেস। আর সাথে একটি ছোট ব্যাকপ্যাক আছে যা আমি কেবিনে নেব।", "ipa": "/dʒʌst ðɪs wʌn lɑːdʒ ˈsuːtkeɪs ænd aɪ hæv wʌn smɔːl ˈbækpæk æz maɪ ˈkæri ɒn/", "bn_pron": "জাস্ট দিস ওয়ান লার্জ স্যুটকেস। অ্যান্ড আই হ্যাভ ওয়ান স্মল ব্যাকপ্যাক অ্যাজ মাই ক্যারি-অন।" },
            { "id": "6", "speaker": "Agent", "role": "B", "roleTitle": "Agent / স্টাফ", "en": "Please place the suitcase on the scale. 21.5 kg—well under our 23 kg allowance!", "bn": "অনুগ্রহ করে স্যুটকেসটি স্কেলের ওপর রাখুন। ২১.৫ কেজি—আমাদের ২৩ কেজি সীমার মধ্যেই আছে!", "ipa": "/pliːz pleɪs ðə ˈsuːtkeɪs ɒn ðə skeɪl ˈtwenti wʌn pɔɪnt faɪv ˈkɪləɡræmz wel ˈʌndə/", "bn_pron": "প্লীয প্লেস দ্য স্যুটকেস অন দ্য স্কেল। টোয়েন্টি ওয়ান পয়েন্ট ফাইভ কেজি।" },
            { "id": "7", "speaker": "Passenger", "role": "A", "roleTitle": "Passenger / যাত্রী", "en": "What a relief! By any chance, is there a window seat available towards the front?", "bn": "যাক স্বস্তি পেলাম! সামনের দিকে কোনো জানালার পাশের উইন্ডো সিট কি পাওয়া যাবে?", "ipa": "/wɒt ə rɪˈliːf baɪ ˈeni tʃɑːns ɪz ðeər ə ˈwɪndəʊ siːt əˈveɪləbl təˈwɔːdz ðə frʌnt/", "bn_pron": "ওয়াট আ রিলিফ! বাই এনি চান্স, ইজ দেয়ার আ উইন্ডো সিট অ্যাভেইলেবল?" },
            { "id": "8", "speaker": "Agent", "role": "B", "roleTitle": "Agent / স্টাফ", "en": "Yes! I have assigned you seat 14A, a window seat with great wing clearance.", "bn": "হ্যাঁ! আমি আপনাকে ১৪A সিটটি দিয়ে দিচ্ছি, যা চমৎকার দৃশ্যসহ জানালার সিট।", "ipa": "/jes aɪ hæv əˈsaɪnd juː siːt ˌfɔːˈtiːn eɪ ə ˈwɪndəʊ siːt wɪð ɡreɪt wɪŋ ˈklɪərəns/", "bn_pron": "ইয়েস! আই হ্যাভ অ্যাসাইন্ড ইউ সিট ফোরটিন এ, আ উইন্ডো সিট।" },
            { "id": "9", "speaker": "Passenger", "role": "A", "roleTitle": "Passenger / যাত্রী", "en": "Thank you so much! What time does boarding begin, and which gate is it?", "bn": "অনেক অনেক ধন্যবাদ! বিমানে ওঠা কয়টায় শুরু হবে এবং কোন গেটে যেতে হবে?", "ipa": "/θæŋk juː səʊ mʌtʃ wɒt taɪm dʌz ˈbɔːdɪŋ bɪˈɡɪn ænd wɪtʃ ɡeɪt ɪz ɪt/", "bn_pron": "থ্যাংক ইউ সো মাচ! ওয়াট টাইম ডাজ বোর্ডিং বিগিন, অ্যান্ড উইচ গেইট ইজ ইট?" },
            { "id": "10", "speaker": "Agent", "role": "B", "roleTitle": "Agent / স্টাফ", "en": "Boarding starts at 10:15 AM at Gate 24. Please head straight through security. Have a wonderful flight!", "bn": "সকাল ১০:১৫ মিনিটে ২৪ নম্বর গেটে বোর্ডিং শুরু হবে। এখনই সিকিউরিটি পার হয়ে যান। শুভ ভ্রমণ!", "ipa": "/ˈbɔːdɪŋ stɑːts æt ten ˌfɪfˈtiːn eɪ em æt ɡeɪt ˈtwenti fɔː pliːz hed streɪt θruː sɪˈkjʊərəti/", "bn_pron": "বোর্ডিং স্টার্টস অ্যাট টেন ফিফটিন এএম অ্যাট গেইট টোয়েন্টি ফোর। হ্যাভ আ ওয়ান্ডারফুল ফ্লাইট!" }
        ],
        "followUps": [
            { "en": "Do I need to collect my checked luggage during the Frankfurt transit layover?", "bn": "ফ্রাঙ্কফুর্ট ট্রানজিটের সময় কি আমাকে লাগেজ আবার সংগ্রহ করতে হবে?" },
            { "en": "Is the airline lounge located before or after the duty-free shopping area?", "bn": "এয়ারলাইন্সের ভিআইপি লাউঞ্জটি কি ডিউটি-ফ্রি শপিংয়ের আগে নাকি পরে?" },
            { "en": "Can I carry a stainless steel refillable water bottle through airport security?", "bn": "সিকিউরিটি তল্লাশির মধ্য দিয়ে কি খালি পানির বোতল নিয়ে যাওয়া যাবে?" }
        ],
        "closers": [
            { "en": "Thank you for the friendly and seamless check-in service!", "bn": "আন্তরিক ও ঝামেলাহীন চেক-ইন সেবার জন্য অনেক ধন্যবাদ!" },
            { "en": "I'll head over to immigration and security right away. Goodbye!", "bn": "আমি এখনই ইমিগ্রেশন ও সিকিউরিটির দিকে যাচ্ছি। বিদায়!" },
            { "en": "Have a wonderful shift at the airport! Take care.", "bn": "এয়ারপোর্টে আপনার দিনটি সুন্দর কাটুক! ভালো থাকবেন।" }
        ],
        "nativePhrases": [
            { "phrase": "Well under the limit", "meaning": "অনুমোদিত সীমার চেয়ে বেশ কম ও নিরাপদ", "context": "ব্যাগেজের ওজন মাপার পর।" },
            { "phrase": "Safe travels", "meaning": "আপনার যাত্রা নিরাপদ ও আনন্দদায়ক হোক", "context": "যাত্রীদের বিদায় জানানোর ঐতিহ্যবাহী নেটিভ বাক্য।" },
            { "phrase": "Clear security", "meaning": "নিরাপত্তা তল্লাশি সফলভাবে পার হওয়া", "context": "বোর্ডিং গেটে যাওয়ার আগে।" }
        ]
    },

    # 25. Flight Delay, Missed Connection & Rebooking
    {
        "id": "conv-25-flight-delay-missed-connection-rebooking",
        "number": 25,
        "title": "Flight Delay, Missed Connection & Rebooking",
        "titleBn": "ফ্লাইট বিলম্ব ও বিকল্প টিকিট নিয়ে কথা বলা",
        "level": "Intermediate",
        "category": "Travel",
        "imageUrl": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80",
        "sceneDescription": "খারাপ আবহাওয়ার কারণে প্রথম ফ্লাইট ৩ ঘণ্টা দেরি করায় কানেক্টিং ফ্লাইট মিস করার পর ট্রানজিট হেল্পডেস্কে বিকল্প ফ্লাইট ও হোটেল ব্যবস্থার কথোপকথন।",
        "briefing": {
            "setting": "ট্রানজিট এয়ারলাইন্স হেল্পডেস্ক (Airline Customer Care Transit Desk)",
            "roleA": { "name": "Passenger", "titleBn": "যাত্রী (Passenger)", "descBn": "বিলম্বের কারণে টরন্টোগামী কানেক্টিং ফ্লাইট মিস করেছেন" },
            "roleB": { "name": "Airline Agent", "titleBn": "এয়ারলাইন্স কাস্টমার রিপ্রেজেন্টেটিভ", "descBn": "শান্তভাবে পরবর্তী ফ্লাইটে আসন নিশ্চিত ও হোটেল ভাউচার দিচ্ছেন" },
            "overviewBn": "ফ্লাইট মিস হলে শান্ত থেকে 'My flight was delayed, which caused me to miss my connection', বিকল্প ফ্লাইট রিবুক করা (Rebook on the next flight), এবং মিল/হোটেল ভাউচার (Meal voucher, hotel accommodation) দাবি করতে হয়।",
            "politenessTips": [
                "উত্তেজিত না হয়ে শান্ত ও দৃঢ় কণ্ঠে কথা বলুন। দোষ সাধারণত ফ্রন্ট ডেস্কে থাকা কর্মীর নয়।",
                "পরিস্থিতি স্পষ্ট করে বলুন: 'My incoming flight arrived 3 hours late, so I missed flight BA98.'",
                "আপনার অধিকারের কথা ভদ্রভাবে জানান: 'Since the next flight is tomorrow morning, are hotel vouchers provided?'"
            ],
            "keyVocabulary": [
                { "word": "Missed connection", "meaning": "দেরির কারণে পরবর্তী কানেক্টিং ফ্লাইট ধরতে না পারা", "pron": "মিসড কানেকশন" },
                { "word": "Rebook on the next flight", "meaning": "পরবর্তী ফ্লাইটে নতুন টিকিট করে দেওয়া", "pron": "রিবুক অন দ্য নেক্সট ফ্লাইট" },
                { "word": "Complimentary hotel voucher", "meaning": "এয়ারলাইন্সের খরচে হোটেল থাকার ভাউচার", "pron": "কমপ্লিমেন্টারি হোটেল ভাউচার" },
                { "word": "Meal coupon", "meaning": "খাবারের ফ্রি কুপন", "pron": "মিল কুপন" }
            ]
        },
        "starters": [
            { "en": "Excuse me, our flight arrived three hours late, and I have missed my connecting flight to Toronto.", "bn": "মাফ করবেন, আমাদের ফ্লাইট ৩ ঘণ্টা দেরিতে আসায় টরন্টোর কানেক্টিং ফ্লাইটটি মিস হয়ে গেছে।", "tip": "সমস্যা সরাসরি তুলে ধরার স্পষ্ট বাক্য।" },
            { "en": "Hello, I need immediate assistance rebooking my missed onward journey.", "bn": "হ্যালো, আমার মিস হওয়া পরবর্তী যাত্রার টিকিট পরিবর্তনের জন্য জরুরি সহায়তা দরকার।", "tip": "জরুরি সহায়তা চাওয়ার বাক্য।" },
            { "en": "Could you please check what alternate routing is available for tonight?", "bn": "আজ রাতের জন্য অন্য কোনো বিকল্প ফ্লাইট পাওয়া যাবে কি না একটু দেখবেন?", "tip": "বিকল্প রুট খোঁজার অনুরোধ।" }
        ],
        "dialogue": [
            { "id": "1", "speaker": "Passenger", "role": "A", "roleTitle": "Passenger / যাত্রী", "en": "Good evening. Our incoming flight was delayed by three hours, and I've missed my connection to Toronto.", "bn": "শুভ সন্ধ্যা। আমাদের আসার ফ্লাইটটি ৩ ঘণ্টা দেরি করায় আমি টরন্টোগামী কানেক্টিং ফ্লাইটটি মিস করেছি।", "ipa": "/ɡʊd ˈiːvnɪŋ ˈaʊər ˈɪnkʌmɪŋ flaɪt wɒz dɪˈleɪd baɪ θriː ˈaʊəz ænd aɪv mɪst maɪ kəˈnekʃn tuː təˈrɒntəʊ/", "bn_pron": "গুড ইভনিং। আওয়ার ইনকামিং ফ্লাইট ওয়াজ ডিলয়েড বাই থ্রি আওয়ার্স।" },
            { "id": "2", "speaker": "Agent", "role": "B", "roleTitle": "Agent / কর্মী", "en": "I'm so sorry for the inconvenience caused by the severe weather delay. May I have your boarding pass and passport?", "bn": "খারাপ আবহাওয়ার কারণে সৃষ্ট এই ভোগান্তির জন্য আমি আন্তরিক দুঃখিত। আপনার বোর্ডিং পাস ও পাসপোর্টটি দেখতে পারি?", "ipa": "/aɪm səʊ ˈsɒri fɔː ðə ˌɪnkənˈviːniəns kɔːzd baɪ ðə sɪˈvɪə ˈweðə dɪˈleɪ meɪ aɪ hæv jɔː ˈbɔːdɪŋ pɑːs/", "bn_pron": "আইম সো সরি ফর দ্য ইনকনভিনিয়েন্স। মে আই হ্যাভ ইউর বোর্ডিং পাস অ্যান্ড পাসপোর্ট?" },
            { "id": "3", "speaker": "Passenger", "role": "A", "roleTitle": "Passenger / যাত্রী", "en": "Here they are. Are there any other flights to Toronto departing tonight?", "bn": "এই যে নিন। আজ রাতে টরন্টো যাওয়ার মতো অন্য কোনো ফ্লাইট কি আর আছে?", "ipa": "/hɪə ðeɪ ɑːr ɑː ðeər ˈeni ˈʌðə flaɪts tuː təˈrɒntəʊ dɪˈpɑːtɪŋ təˈnaɪt/", "bn_pron": "হিয়ার দেই আর। আর দেয়ার এনি আদার ফ্লাইটস টু টরন্টো ডিপার্টিং টুনাইট?" },
            { "id": "4", "speaker": "Agent", "role": "B", "roleTitle": "Agent / কর্মী", "en": "Unfortunately tonight's last flight is fully booked. However, I can rebook you on tomorrow's direct 8:30 AM flight.", "bn": "দুর্ভাগ্যবশত আজ রাতের শেষ ফ্লাইটটি সম্পূর্ণ বুকড। তবে আমি কাল সকাল ৮:৩০ মিনিটের সরাসরি ফ্লাইটে রিবুক করে দিতে পারছি।", "ipa": "/ʌnˈfɔːtʃənətli təˈnaɪts lɑːst flaɪt ɪz ˈfʊli bʊkt haʊˈevər aɪ kæn ˌriːˈbʊk juː ɒn təˈmɒrəʊz/", "bn_pron": "আনফরচুনেটলি টুনাইটস লাস্ট ফ্লাইট ইজ ফুলি বুকড। হাউএভার, আই ক্যান রিবুক ইউ।" },
            { "id": "5", "speaker": "Passenger", "role": "A", "roleTitle": "Passenger / যাত্রী", "en": "Since that is an overnight layover of 12 hours, will the airline provide hotel accommodation?", "bn": "যেহেতু এটি ১২ ঘণ্টার একটি রাতকালীন বিরতি, তাই এয়ারলাইন্স কি হোটেলের ব্যবস্থা করে দেবে?", "ipa": "/sɪns ðæt ɪz ən ˌəʊvəˈnaɪt ˈleɪəʊvər ɒv twelv ˈaʊəz wɪl ðə ˈeəlaɪn prəˈvaɪd həʊˈtel əˌkɒməˈdeɪʃn/", "bn_pron": "সিন্স দ্যাট ইজ অ্যান ওভারনাইট লেওভার অফ টুয়েলভ আওয়ার্স, উইল দ্য এয়ারলাইন প্রোভাইড হোটেল?" },
            { "id": "6", "speaker": "Agent", "role": "B", "roleTitle": "Agent / কর্মী", "en": "Yes, absolutely. We will provide a complimentary room at the Marriott Airport Hotel with free shuttle service.", "bn": "হ্যাঁ, অবশ্যই। আমরা ফ্রি শাটল সার্ভিস সহ ম্যারিয়ট এয়ারপোর্ট হোটেলে একটি কমপ্লিমেন্টারি রুমের ব্যবস্থা করছি।", "ipa": "/jes ˌæbsəˈluːtli wiː wɪl prəˈvaɪd ə ˌkɒmplɪˈmentri ruːm æt ðə ˈmæriət ˈeəpɔːt həʊˈtel/", "bn_pron": "ইয়েস, অ্যাবসলিউটলি। উই উইল প্রোভাইড আ কমপ্লিমেন্টারি রুম অ্যাট দ্য ম্যারিয়ট এয়ারপোর্ট হোটেল।" },
            { "id": "7", "speaker": "Passenger", "role": "A", "roleTitle": "Passenger / যাত্রী", "en": "That is very reassuring. What about dinner and breakfast?", "bn": "তাতে অনেকটাই নিশ্চিন্ত হওয়া গেল। রাতের ডিনার এবং সকালের নাস্তার কী হবে?", "ipa": "/ðæt ɪz ˈveri ˌriːəˈʃʊərɪŋ wɒt əˈbaʊt ˈdɪnər ænd ˈbrekfəst/", "bn_pron": "দ্যাট ইজ ভেরি রিঅ্যাসুরিং। ওয়াট অ্যাবাউট ডিনার অ্যান্ড ব্রেকফাস্ট?" },
            { "id": "8", "speaker": "Agent", "role": "B", "roleTitle": "Agent / কর্মী", "en": "Here are two meal vouchers valued at $30 each, valid at the hotel restaurant or any airport eatery.", "bn": "এই যে ৩০ ডলার মূল্যের দুইটি মিল ভাউচার, যা হোটেল রেস্তোরাঁ বা এয়ারপোর্টের যেকোনো দোকানে ব্যবহারযোগ্য।", "ipa": "/hɪər ɑː tuː miːl ˈvaʊtʃəz ˈvæljuːd æt ˈθɜːti ˈdɒləz iːtʃ ˈvælɪd æt ðə həʊˈtel ˈrestrɒnt/", "bn_pron": "হিয়ার আর টু মিল ভাউচার্স ভ্যালুড অ্যাট থার্টি ডলার্স ইচ।" },
            { "id": "9", "speaker": "Passenger", "role": "A", "roleTitle": "Passenger / যাত্রী", "en": "Will my checked baggage automatically transfer to tomorrow morning's flight?", "bn": "আমার চেক-ইন করা বড় লাগেজটি কি কাল সকালের ফ্লাইটে স্বয়ংক্রিয়ভাবে চলে যাবে?", "ipa": "/wɪl maɪ tʃekt ˈbæɡɪdʒ ˌɔːtəˈmætɪkli trænsˈfɜː tuː təˈmɒrəʊz ˈmɔːnɪŋz flaɪt/", "bn_pron": "উইল মাই চেকড ব্যাগেজ অটোমেটিক্যালি ট্রান্সফার টু টুমরোজ মর্নিংস ফ্লাইট?" },
            { "id": "10", "speaker": "Agent", "role": "B", "roleTitle": "Agent / কর্মী", "en": "Yes, your bags remain safely checked in through to Toronto. Here is your new boarding pass and hotel key voucher!", "bn": "হ্যাঁ, আপনার লাগেজ সরাসরি টরন্টোতেই ট্রান্সফার হবে। এই যে নতুন বোর্ডিং পাস ও হোটেলের ভাউচার!", "ipa": "/jes jɔː bæɡz rɪˈmeɪn ˈseɪfli tʃekt ɪn θruː tuː təˈrɒntəʊ hɪər ɪz jɔː njuː ˈbɔːdɪŋ pɑːs/", "bn_pron": "ইয়েস, ইউর ব্যাগস রিমেইন সেইফলি চেকড ইন থ্রু টু টরন্টো। হিয়ার ইয ইউর নিউ বোর্ডিং পাস!" }
        ],
        "followUps": [
            { "en": "Where exactly does the hotel shuttle van pick up passengers from?", "bn": "হোটেলের ফ্রি শাটল গাড়িটি ঠিক কোন গেট থেকে যাত্রীদের তোলে?" },
            { "en": "Could you provide a written letter stating the flight delay for my travel insurance claim?", "bn": "ট্রাভেল ইন্স্যুরেন্সের ক্ষতিপূরণ দাবির জন্য কি একটি অফিসিয়াল লেটার দেওয়া যাবে?" },
            { "en": "Is there a place where I can purchase basic toiletries like a toothbrush and toothpaste?", "bn": "টুথব্রাশ ও পেস্টের মতো জরুরি জিনিস কেনার কোনো শপ কাছে আছে কি?" }
        ],
        "closers": [
            { "en": "Thank you for handling this stressful situation with such calm professionalism!", "bn": "এত মানসিক চাপের মধ্যেও শান্ত পেশাদারিত্বের সাথে সামলানোর জন্য ধন্যবাদ!" },
            { "en": "I really appreciate you arranging the hotel and meal vouchers so quickly.", "bn": "এত দ্রুত হোটেল ও খাবারের ব্যবস্থা করে দেওয়ার জন্য সত্যি কৃতজ্ঞ।" },
            { "en": "I'll head over to the shuttle stand now. Good night!", "bn": "আমি এবার শাটল গাড়ির দিকে যাচ্ছি। শুভ রাত্রি!" }
        ],
        "nativePhrases": [
            { "phrase": "Silver lining", "meaning": "খারাপ পরিস্থিতির মাঝেও কোনো ভালো দিক বা সান্ত্বনা", "context": "দেরির মাঝেও আরামদায়ক হোটেল পেলে।" },
            { "phrase": "Seamless transition", "meaning": "ঝামেলাহীন ও সাবলীলভাবে এক ধাপ থেকে অন্য ধাপে যাওয়া", "context": "রিবুকিংয়ের সন্তুষ্টি প্রকাশে।" },
            { "phrase": "Layover", "meaning": "দুই ফ্লাইটের মধ্যবর্তী যাত্রা বিরতি", "context": "ট্রানজিট নিয়ে কথা বলতে।" }
        ]
    },

    # 26. Customer Care: Reporting Broadband Outage
    {
        "id": "conv-26-customer-care-reporting-broadband-outage",
        "number": 26,
        "title": "Customer Care: Reporting Broadband Outage",
        "titleBn": "কাস্টমার কেয়ারে ইন্টারনেট বিভ্রাটের অভিযোগ",
        "level": "Intermediate",
        "category": "Services",
        "imageUrl": "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
        "sceneDescription": "বাসার ওয়াইফাই রাউটারে লাল বাতি জ্বলে ইন্টারনেট বন্ধ থাকায় কাস্টমার কেয়ার হেল্পলাইনে কল করে ট্রাবলশুটিং ও টেকনিশিয়ান পাঠানোর কথপোকথন।",
        "briefing": {
            "setting": "ব্রডব্যান্ড কাস্টমার কেয়ার কল (Internet Support Helpline)",
            "roleA": { "name": "Customer", "titleBn": "গ্রাহক (Arif)", "descBn": "সকাল থেকে হোম অফিস করার সময় ইন্টারনেট বন্ধ থাকায় অভিযোগ করছেন" },
            "roleB": { "name": "Support Agent", "titleBn": "কাস্টমার সাপোর্ট রিপ্রেজেন্টেটিভ", "descBn": "রাউটার রিস্টার্ট করিয়ে লাইন চেক করছেন ও কমপ্লেন টিকিট খুলছেন" },
            "overviewBn": "ইন্টারনেট না থাকলে সংযোগ বিচ্ছিন্ন (Broadband outage / Los light blinking red), রাউটার রিবুট করা (Power cycle / restart the router) এবং টিকিট ট্র্যাকিং নম্বর নেওয়া জরুরি প্র্যাকটিক্যাল দক্ষতা।",
            "politenessTips": [
                "কলের শুরুতে কাস্টমার আইডি বলুন: 'Hello, my user account ID is NET-55829.'",
                "লক্ষণ বুঝিয়ে বলুন: 'The optical fiber LOS light is blinking red since 9 AM.'",
                "টিকেট নম্বর ও সময় জেনে নিন: 'What is the ticket complaint number, and when can I expect resolution?'"
            ],
            "keyVocabulary": [
                { "word": "Broadband outage", "meaning": "ইন্টারনেট সংযোগ সম্পূর্ণ বিচ্ছিন্ন হওয়া", "pron": "ব্রডব্যান্ড আউটেজ" },
                { "word": "Power cycle / Reboot", "meaning": "পাওয়ার অফ করে কিছুক্ষণ পর আবার চালু করা", "pron": "পাওয়ার সাইকেল / রিবুট" },
                { "word": "Optical line (LOS)", "meaning": "ফাইবার অপটিক কেবলের লাইট সিগন্যাল", "pron": "অপটিক্যাল লাইন" },
                { "word": "Complaint ticket", "meaning": "অভিযোগের অফিসিয়াল ট্র্যাকিং নম্বর", "pron": "কমপ্লেন টিকিট" }
            ]
        },
        "starters": [
            { "en": "Hello, I'm calling to report a complete broadband outage at my residence.", "bn": "হ্যালো, আমার বাসার ইন্টারনেট সম্পূর্ণ বন্ধ হয়ে যাওয়ায় অভিযোগ জানাতে কল করেছি।", "tip": "সাপোর্ট সেন্টারে কথা শুরুর স্পষ্ট বাক্য।" },
            { "en": "Hi, my Wi-Fi router shows a blinking red LOS light. Is there an area-wide outage?", "bn": "হাই, আমার রাউটারে লাল বাতি জ্বলছে। এলাকায় কি কোনো নেটওয়ার্ক সমস্যা চলছে?", "tip": "লক্ষণ উল্লেখ করার বাক্য।" },
            { "en": "Could you run a quick line diagnostic on account number CUST-90210?", "bn": "আমার কাস্টমার অ্যাকাউন্টে কি একটি দ্রুত লাইন ডায়াগনস্টিক টেস্ট চালাবেন?", "tip": "ডায়াগনস্টিক পরীক্ষার অনুরোধ।" }
        ],
        "dialogue": [
            { "id": "1", "speaker": "Customer", "role": "A", "roleTitle": "Customer / গ্রাহক", "en": "Hello, I'm calling to report that my fiber internet connection has been completely down since 9:00 AM.", "bn": "হ্যালো, আমি জানাতে কল করেছি যে আজ সকাল ৯টা থেকে আমার ফাইবার ইন্টারনেট সংযোগটি সম্পূর্ণ বন্ধ রয়েছে।", "ipa": "/həˈləʊ aɪm ˈkɔːlɪŋ tuː rɪˈpɔːt ðæt maɪ ˈfaɪbər ˈɪntənet kəˈnekʃn hæz biːn kəmˈpliːtli daʊn/", "bn_pron": "হ্যালো, আইম কলিং টু রিপোর্ট দ্যাট মাই ফাইবার ইন্টারনেট কানেকশন হ্যাজ বিন কমপ্লিটলি ডাউন।" },
            { "id": "2", "speaker": "Agent", "role": "B", "roleTitle": "Agent / সাপোর্ট কর্মী", "en": "Good morning! I apologize for the disruption. May I have your registered Customer ID or phone number?", "bn": "শুভ সকাল! বিঘ্ন ঘটার জন্য ক্ষমা চেয়ে নিচ্ছি। আপনার নিবন্ধিত কাস্টমার আইডি বা ফোন নম্বরটি কি পেতে পারি?", "ipa": "/ɡʊd ˈmɔːnɪŋ aɪ əˈpɒlədʒaɪz fɔː ðə dɪsˈrʌpʃn meɪ aɪ hæv jɔː ˈredʒɪstəd ˈkʌstəmər aɪˈdiː/", "bn_pron": "গুড মর্নিং! আই অ্যাপোলোজাইজ ফর দ্য ডিসরাপশন। মে আই হ্যাভ ইউর রেজিস্টার্ড কাস্টমার আইডি?" },
            { "id": "3", "speaker": "Customer", "role": "A", "roleTitle": "Customer / গ্রাহক", "en": "My Customer ID is FTTH-4492, registered under Arif Hossain in Banani.", "bn": "আমার কাস্টমার আইডি হলো FTTH-4492, বনানীতে আরিফ হোসেন নামে রেজিস্টার্ড।", "ipa": "/maɪ ˈkʌstəmər aɪˈdiː ɪz ef tiː tiː eɪtʃ fɔː fɔː naɪn tuː ˈredʒɪstəd ˈʌndər ˈærɪf/", "bn_pron": "মাই কাস্টমার আইডি ইজ এফ টি টি এইচ ফোর ফোর নাইন টু, বনানী।" },
            { "id": "4", "speaker": "Agent", "role": "B", "roleTitle": "Agent / সাপোর্ট কর্মী", "en": "Thank you Mr. Hossain. What lights are currently visible on your optical fiber ONU router?", "bn": "ধন্যবাদ জনাব হোসেন। আপনার ফাইবার অপটিক রাউটারে বর্তমানে কোন কোন বাতি জ্বলছে?", "ipa": "/θæŋk juː ˈmɪstə hʊˈseɪn wɒt laɪts ɑː ˈkʌrəntli ˈvɪzəbl ɒn jɔːr ˈɒptɪkl ˈfaɪbər ˈruːtə/", "bn_pron": "থ্যাংক ইউ মিস্টার হোসেন। ওয়াট লাইটস আর কারেন্টলি ভিজিবল অন ইউর অপটিক্যাল ফাইবার রাউটার?" },
            { "id": "5", "speaker": "Customer", "role": "A", "roleTitle": "Customer / গ্রাহক", "en": "The Power light is steady green, but the LOS light is blinking a bright red.", "bn": "পাওয়ার বাতিটি স্থির সবুজ হয়ে আছে, তবে LOS বাতিটি উজ্জ্বল লাল রঙে জ্বলছে আর নিভছে।", "ipa": "/ðə ˈpaʊə laɪt ɪz ˈstedi ɡriːn bʌt ðə el əʊ es laɪt ɪz ˈblɪŋkɪŋ ə braɪt red/", "bn_pron": "দ্য পাওয়ার লাইট ইজ স্টেডি গ্রিন, বাট দ্য এল ও এস লাইট ইজ ব্লিঙ্কিং আ ব্রাইট রেড।" },
            { "id": "6", "speaker": "Agent", "role": "B", "roleTitle": "Agent / সাপোর্ট কর্মী", "en": "A blinking red LOS means the optical laser signal from the street distribution box has been cut or interrupted.", "bn": "লাল এলওএস বাতির অর্থ হলো রাস্তার মূল বক্স থেকে আসা ফাইবার অপটিক তারে সংযোগ বিচ্ছিন্ন হয়েছে।", "ipa": "/ə ˈblɪŋkɪŋ red el əʊ es miːnz ðə ˈɒptɪkl ˈleɪzə ˈsɪɡnl frəm ðə striːt ˌdɪstrɪˈbjuːʃn bɒks/", "bn_pron": "আ ব্লিঙ্কিং রেড এল ও এস মিনস দ্য অপটিক্যাল লেজার সিগন্যাল হ্যাজ বিন কাট অর ইন্টারাপ্টেড।" },
            { "id": "7", "speaker": "Customer", "role": "A", "roleTitle": "Customer / গ্রাহক", "en": "I work remotely from home and have critical video meetings today. How quickly can a technician inspect it?", "bn": "আমি বাসা থেকে রিমোট জব করি এবং আজ গুরুত্বপূর্ণ মিটিং আছে। টেকনিশিয়ান কত দ্রুত এসে দেখতে পারবেন?", "ipa": "/aɪ wɜːk rɪˈməʊtli frəm həʊm ænd hæv ˈkrɪtɪkl ˈvɪdiəʊ ˈmiːtɪŋz təˈdeɪ haʊ ˈkwɪkli kæn ə tekˈnɪʃn/", "bn_pron": "আই ওয়ার্ক রিমোটলি ফ্রম হোম অ্যান্ড হ্যাভ ক্রিটিক্যাল ভিডিও মিটিংস টুডেই।" },
            { "id": "8", "speaker": "Agent", "role": "B", "roleTitle": "Agent / সাপোর্ট কর্মী", "en": "I am escalating this as a high-priority ticket. Our field engineer team in Banani will visit within two hours.", "bn": "আমি এটিকে হাই-প্রায়োরিটি টিকিট হিসেবে এস্কেলেট করছি। বনানীর ফিল্ড টিম দুই ঘণ্টার মধ্যেই আপনার ঠিকানায় পৌঁছাবে।", "ipa": "/aɪ æm ˈeskəleɪtɪŋ ðɪs æz ə haɪ praɪˈɒrəti ˈtɪkɪt ˈaʊə fiːld ˌendʒɪˈnɪə tiːm wɪl ˈvɪzɪt wɪˈðɪn tuː ˈaʊəz/", "bn_pron": "আই এম এস্কেলেইটিং দিস অ্যাজ আ হাই প্রায়োরিটি টিকিট। ফিল্ড টিম উইল ভিজিট উইদিন টু আওয়ার্স।" },
            { "id": "9", "speaker": "Customer", "role": "A", "roleTitle": "Customer / গ্রাহক", "en": "What is the ticket complaint number so I can follow up?", "bn": "অভিযোগের টিকিট ট্র্যাকিং নম্বরটি কত যাতে আমি পরে খোঁজ নিতে পারি?", "ipa": "/wɒt ɪz ðə ˈtɪkɪt kəmˈpleɪnt ˈnʌmbə səʊ aɪ kæn ˈfɒləʊ ʌp/", "bn_pron": "ওয়াট ইজ দ্য টিকিট কমপ্লেন নাম্বার সো আই ক্যান ফলো আপ?" },
            { "id": "10", "speaker": "Agent", "role": "B", "roleTitle": "Agent / সাপোর্ট কর্মী", "en": "Your ticket number is TKT-8831. I've sent you an SMS confirmation with the technician's direct phone number.", "bn": "আপনার টিকিট নম্বর TKT-8831। টেকনিশিয়ানের সরাসরি নম্বর সহ একটি এসএমএস আমি আপনার ফোনে পাঠিয়ে দিয়েছি।", "ipa": "/jɔː ˈtɪkɪt ˈnʌmbər ɪz tiː keɪ tiː eɪt eɪt θriː wʌn aɪv sent juː ən es em es ˌkɒnfəˈmeɪʃn/", "bn_pron": "ইউর টিকিট নাম্বার ইজ টি কে টি এইট এইট থ্রি ওয়ান। আইভ সেন্ট ইউ অ্যান এসএমএস।" }
        ],
        "followUps": [
            { "en": "Will I receive bill credits for the hours the internet service was unavailable?", "bn": "ইন্টারনেট বন্ধ থাকার সময়ের জন্য কি বিলে কোনো ডিসকাউন্ট বা ক্রেডিট সমন্বয় করা হবে?" },
            { "en": "Can I receive an automated text alert as soon as the line is restored?", "bn": "লাইন ঠিক হওয়ার সাথে সাথে কি আমার মোবাইলে স্বয়ংক্রিয় মেসেজ আসবে?" },
            { "en": "Is the issue localized only to my flat, or is the entire street building affected?", "bn": "সমস্যাটি কি শুধু আমার বাসাতেই, নাকি পুরো বিল্ডিংয়েরই সংযোগ বিচ্ছিন্ন?" }
        ],
        "closers": [
            { "en": "Thank you for the prompt handling and ticket confirmation! Have a good day.", "bn": "দ্রুত পদক্ষেপ ও টিকিট কনফার্মেশনের জন্য ধন্যবাদ! দিনটি ভালো কাটুক।" },
            { "en": "I'll wait for the technician's call. Thanks for your help!", "bn": "আমি টেকনিশিয়ানের কলের অপেক্ষায় রইলাম। সহায়তার জন্য ধন্যবাদ!" },
            { "en": "Goodbye and thank you for the speedy response.", "bn": "বিদায় এবং দ্রুত রেসপন্স করার জন্য ধন্যবাদ।" }
        ],
        "nativePhrases": [
            { "phrase": "Escalate the issue", "meaning": "সমস্যাটিকে উচ্চতর বিভাগে বা জরুরি তালিকায় পাঠানো", "context": "কাস্টমার সাপোর্টে দ্রুত সমাধানের জন্য।" },
            { "phrase": "Up and running", "meaning": "ত্রুটি সেরে আবার স্বাভাবিকভাবে চালু হওয়া", "context": "নেটওয়ার্ক রিস্টোর হওয়ার পর।" },
            { "phrase": "Down time", "meaning": "সার্ভিস বন্ধ থাকার সময়কাল", "context": "ইন্টারনেট বিভ্রাটের ক্ষেত্রে।" }
        ]
    },

    # 27. Declining an Invitation Politely Without Offense
    {
        "id": "conv-27-declining-an-invitation-politely-without-offense",
        "number": 27,
        "title": "Declining an Invitation Politely Without Offense",
        "titleBn": "সম্মান বজায় রেখে ভদ্রভাবে কোনো দাওয়াত ফিরিয়ে দেওয়া",
        "level": "Intermediate",
        "category": "Social",
        "imageUrl": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80",
        "sceneDescription": "ঘনিষ্ঠ বন্ধু বা সহকর্মীর জন্মদিনের বড় পার্টিতে অন্য জরুরি পারিবারিক প্রতিশ্রুতির কারণে যেতে না পারলে সম্পর্ক অটুট রেখে ভদ্রভাবে না বলার কথোপকথন।",
        "briefing": {
            "setting": "আন্তরিক ফোন কল বা মুখোমুখি আড্ডা (Polite Personal Chat)",
            "roleA": { "name": "Host", "titleBn": "দাওয়াতদাতা (Shihab)", "descBn": "শনিবার সন্ধ্যায় জন্মদিনের পার্টিতে আন্তরিকভাবে ডাকছেন" },
            "roleB": { "name": "Invited Friend", "titleBn": "অসম্মতি জ্ঞাপনকারী (Kamrul)", "descBn": "পূর্বনির্ধারিত পারিবারিক ব্যস্ততার কথা জানিয়ে শুভেচ্ছা জানাচ্ছেন" },
            "overviewBn": "কারো দাওয়াত সরাসরি 'No' না বলে আগে ধন্যবাদ দেওয়া (Thank you so much for the invite), কারণ সংক্ষেপে স্পষ্ট করা (I have a prior family commitment), এবং বিকল্প হিসেবে পরে দেখা করার অফার দেওয়া (Can I take a raincheck?) ভদ্রতার প্রতীক।",
            "politenessTips": [
                "আগে আন্তরিক ধন্যবাদ জানান: 'I'm so touched that you invited me!'",
                "অক্ষমতা প্রকাশ করে দুঃখ প্রকাশ করুন: 'Unfortunately, I have a prior family obligation on Saturday.'",
                "পরে অন্যদিন কফি খাওয়ার প্রস্তাব দিন: 'Could I take a rain check and treat you to lunch next Tuesday?'"
            ],
            "keyVocabulary": [
                { "word": "Prior commitment", "meaning": "আগে থেকেই নির্ধারিত থাকা কোনো প্রতিশ্রুতি", "pron": "প্রাইয়র কমিটমেন্ট" },
                { "word": "Take a rain check", "meaning": "এখন অপারগতা জানিয়ে পরবর্তীতে অন্যদিন আমন্ত্রণ গ্রহণ করা", "pron": "টেক আ রেইন চেক" },
                { "word": "Touched / Flattered", "meaning": "কারো আন্তরিকতায় মনে আনন্দ ও কৃতজ্ঞতা অনুভব করা", "pron": "টাচড / ফ্ল্যাটার্ড" },
                { "word": "Make it up to you", "meaning": "উপস্থিত না থাকার ঘাটতি অন্যভাবে পূরণ করে দেওয়া", "pron": "মেইক ইট আপ টু ইউ" }
            ]
        },
        "starters": [
            { "en": "Thank you so much for the invitation Shihab! It sounds like it's going to be an awesome party.", "bn": "দাওয়াতের জন্য অনেক ধন্যবাদ শিহাব! পার্টিটা নিশ্চয়ই দারুণ জমবে।", "tip": "দাওয়াত নাকচ করার আগে প্রশংসা করার কৌশল।" },
            { "en": "I wish I had better news, but unfortunately I won't be able to make it this Saturday.", "bn": "ভালো কোনো খবর দিতে পারলে খুশি হতাম, তবে দুর্ভাগ্যবশত এই শনিবারে আমি যেতে পারছি না।", "tip": "ভদ্রভাবে অপারগতা প্রকাশের বাক্য।" },
            { "en": "I'm so sorry, I already promised my family I'd attend my nephew's birthday that same evening.", "bn": "আমি সত্যিই দুঃখিত, ঠিক ওই দিন সন্ধ্যায় আমার ভাগ্নের জন্মদিনে যাওয়ার কথা পাকা করা আছে।", "tip": "নির্দিষ্ট কারণ স্পষ্ট করার উপায়।" }
        ],
        "dialogue": [
            { "id": "1", "speaker": "Shihab", "role": "A", "roleTitle": "Host / শিহাব", "en": "Hey Kamrul! I'm throwing a big 30th birthday dinner this Saturday at 8 PM, and I'd love to see you there!", "bn": "আরে কামরুল! এই শনিবার রাত ৮টায় আমার ৩০তম জন্মদিনের বড় ডিনারের আয়োজন করছি, তুই আসলে ভীষণ খুশি হব!", "ipa": "/heɪ ˈkæmrʊl aɪm ˈθrəʊɪŋ ə bɪɡ ˈθɜːtiəθ ˈbɜːθdeɪ ˈdɪnə ðɪs ˈsætədeɪ æt eɪt piː em/", "bn_pron": "হেই কামরুল! আইম থ্রোয়িং আ বিগ থার্টিয়াত্থ বার্থডে ডিনার দিস স্যাটারডে।" },
            { "id": "2", "speaker": "Kamrul", "role": "B", "roleTitle": "Friend / কামরুল", "en": "Happy 30th birthday in advance, Shihab! Thank you so much for thinking of me and inviting me.", "bn": "আগাম ৩০তম জন্মদিনের শুভেচ্ছা শিহাব! আমার কথা মনে রেখে আমন্ত্রণ জানানোর জন্য অনেক ধন্যবাদ রে দোস্ত।", "ipa": "/ˈhæpi ˈθɜːtiəθ ˈbɜːθdeɪ ɪn ədˈvɑːns ˈʃɪhɑːb θæŋk juː səʊ mʌtʃ fɔː ˈθɪŋkɪŋ ɒv miː/", "bn_pron": "হ্যাপি থার্টিয়াত্থ বার্থডে ইন অ্যাডভান্স, শিহাব! থ্যাংক ইউ সো মাচ ফর থিংকিং অফ মি।" },
            { "id": "3", "speaker": "Shihab", "role": "A", "roleTitle": "Host / শিহাব", "en": "Thanks man! It's going to be a lively night with all our old college friends.", "bn": "ধন্যবাদ দোস্ত! আমাদের কলেজের সব পুরনো বন্ধুদের নিয়ে দারুণ এক প্রাণবন্ত রাত কাটবে।", "ipa": "/θæŋks mæn ɪts ˈɡəʊɪŋ tuː biː ə ˈlaɪvli naɪt wɪð ɔːl ˈaʊər əʊld ˈkɒlɪdʒ frendz/", "bn_pron": "থ্যাংকস ম্যান! ইটস গোয়িং টু বি আ লাইভলি নাইট উইথ অল আওয়ার ওল্ড কলেজ ফ্রেন্ডস।" },
            { "id": "4", "speaker": "Kamrul", "role": "B", "roleTitle": "Friend / কামরুল", "en": "That sounds incredible, which makes it even harder to say this, but I won't be able to make it.", "bn": "শুনেই মন ভালো হয়ে গেল, যার কারণে এটা বলা আমার জন্য আরও কঠিন লাগছে, তবে আমি উপস্থিত থাকতে পারছি না।", "ipa": "/ðæt saʊndz ɪnˈkredəbl wɪtʃ meɪks ɪt ˈiːvn ˈhɑːdə tuː seɪ ðɪs bʌt aɪ wəʊnt biː ˈeɪbl tuː meɪk ɪt/", "bn_pron": "দ্যাট সাউন্ডস ইনক্রেডিবল, বাট আই ওন্ট বি এবল টু মেইক ইট।" },
            { "id": "5", "speaker": "Shihab", "role": "A", "roleTitle": "Host / শিহাব", "en": "Oh no! Is everything alright? You'll be sorely missed!", "bn": "আরে বলিস কী রে! সব ঠিকঠাক আছে তো? তোকে কিন্তু আমরা খুব মিস করব!", "ipa": "/əʊ nəʊ ɪz ˈevriθɪŋ ɔːlˈraɪt juːl biː ˈsɔːli mɪst/", "bn_pron": "ওহ নো! ইজ এভরিথিং অলরাইট? ইউল বি সোরলি মিসড!" },
            { "id": "6", "speaker": "Kamrul", "role": "B", "roleTitle": "Friend / কামরুল", "en": "Everything is fine, but it's my parents' 40th wedding anniversary dinner that exact evening.", "bn": "সব ঠিক আছে, কিন্তু ঠিক ওই দিন সন্ধ্যায় আমার বাবা-মায়ের ৪০তম বিবাহবার্ষিকীর পারিবারিক ডিনার রয়েছে।", "ipa": "/ˈevriθɪŋ ɪz faɪn bʌt ɪts maɪ ˈpeərənts ˈfɔːtiəθ ˈwedɪŋ ˌænɪˈvɜːsəri ˈdɪnə ðæt ɪɡˈzækt ˈiːvnɪŋ/", "bn_pron": "এভরিথিং ইজ ফাইন, বাট ইটস মাই প্যারেন্টস ফোর্টিয়েথ ওয়েডিং অ্যানিভার্সারি ডিনার।" },
            { "id": "7", "speaker": "Shihab", "role": "A", "roleTitle": "Host / শিহাব", "en": "Oh, 40 years! That is a milestone that absolutely comes first. You definitely must be with family.", "bn": "আরে, ৪০ বছর! এমন পারিবারিক মাইলফলক তো অবশ্যই সবার আগে অগ্রাধিকার পাবে। তোকে অবশ্যই পরিবারের সাথে থাকতে হবে।", "ipa": "/əʊ ˈfɔːti jɪəz ðæt ɪz ə ˈmaɪlstəʊn ðæt ˌæbsəˈluːtli kʌmz fɜːst juː ˈdefɪnətli mʌst biː wɪð ˈfæməli/", "bn_pron": "ওহ, ফোরটি ইয়ার্স! দ্যাট ইজ আ মাইলস্টোন দ্যাট অ্যাবসলিউটলি কামস ফার্স্ট।" },
            { "id": "8", "speaker": "Kamrul", "role": "B", "roleTitle": "Friend / কামরুল", "en": "Thank you for being so understanding! Could I take a rain check and treat you to lunch next Tuesday?", "bn": "আমার পরিস্থিতি বোঝার জন্য অনেক ধন্যবাদ রে! এই দাওয়াতটা তোলা রইল, আগামী মঙ্গলবার তোকে লাঞ্চ খাওয়াচ্ছি আমি?", "ipa": "/θæŋk juː fɔː ˈbiːɪŋ səʊ ˌʌndəˈstændɪŋ kʊd aɪ teɪk ə reɪn tʃek ænd triːt juː tuː lʌntʃ nekst ˈtjuːzdeɪ/", "bn_pron": "থ্যাংক ইউ ফর বিয়িং সো আন্ডারস্ট্যান্ডিং! কুড আই টেক আ রেইন চেক অ্যান্ড ট্রিট ইউ?" },
            { "id": "9", "speaker": "Shihab", "role": "A", "roleTitle": "Host / শিহাব", "en": "I'd love that! Tuesday lunch sounds like a plan. We'll have a private catch-up session.", "bn": "আমি ভীষণ খুশি হব! মঙ্গলবার দুপুরে লাঞ্চ তাহলে পাকা হলো। আমরা দুজন মিলে জমিয়ে আড্ডা দেব।", "ipa": "/aɪd lʌv ðæt ˈtjuːzdeɪ lʌntʃ saʊndz laɪk ə plæn wiːl hæv ə ˈpraɪvət ˈkætʃʌp ˈseʃn/", "bn_pron": "আইড লাভ দ্যাট! টিউজডে লাঞ্চ সাউন্ডস লাইক আ প্ল্যান।" },
            { "id": "10", "speaker": "Kamrul", "role": "B", "roleTitle": "Friend / কামরুল", "en": "Deal! Have an unforgettable celebration on Saturday. I'll call you Sunday morning to hear all about it!", "bn": "ডান! শনিবারে তোর পার্টি দারুণ স্মরণীয় কাটুক। রবিবার সকালে ফোন দিয়ে সব গল্প শুনব!", "ipa": "/diːl hæv ən ˌʌnfəˈɡetəbl ˌselɪˈbreɪʃn ɒn ˈsætədeɪ aɪl kɔːl juː ˈsʌndeɪ ˈmɔːnɪŋ tuː hɪər ɔːl əˈbaʊt ɪt/", "bn_pron": "ডিল! হ্যাভ অ্যান আনফরগেটেবল সেলিব্রেশন অন স্যাটারডে। আইল কল ইউ সানডে মর্নিং!" }
        ],
        "followUps": [
            { "en": "Can I send over a birthday gift cake to your party venue on Saturday?", "bn": "শনিবার পার্টির ঠিকানায় কি আমি একটি সুন্দর বার্থডে কেক ডেলিভারি পাঠাতে পারি?" },
            { "en": "Please convey my warmest congratulations to your wife and family as well.", "bn": "তোর স্ত্রী ও পরিবারের সবাইকে আমার আন্তরিক শুভেচ্ছা ও ভালোবাসা পৌঁছে দিস।" },
            { "en": "Take lots of photos with the college gang so I can see what I missed!", "bn": "ভার্সিটির বন্ধুদের সাথে প্রচুর ছবি তুলিস যেন আমি দেখতে পারি কী মিস করলাম!" }
        ],
        "closers": [
            { "en": "Happy birthday once again my friend! Have a blast.", "bn": "আবারও জন্মদিনের প্রাণঢালা শুভেচ্ছা বন্ধু! ফাটিয়ে আনন্দ কর।" },
            { "en": "Thanks for being such an understanding buddy. See you Tuesday!", "bn": "এমন দারুণ ও অমায়িক বন্ধু হওয়ার জন্য ধন্যবাদ। মঙ্গলবারে দেখা হচ্ছে!" },
            { "en": "Celebrate hard! Bye for now.", "bn": "জমিয়ে উৎসব কর! আপাতত রাখছি রে।" }
        ],
        "nativePhrases": [
            { "phrase": "Take a rain check", "meaning": "দাওয়াত বা প্রস্তাব এই মুহূর্তে নাকচ করে ভবিষ্যতে নেওয়ার অনুরোধ করা", "context": "ভদ্রভাবে দাওয়াত পেছানোর সেরা ইংরেজি বাগধারা।" },
            { "phrase": "Have a blast", "meaning": "চূড়ান্ত আনন্দ ও হইচই করে উপভোগ করা", "context": "পার্টিতে বন্ধুদের শুভকামনা জানাতে।" },
            { "phrase": "Make it up to you", "meaning": "অনুপস্থিতির ক্ষতিপূরণ অন্য কোনো সুন্দর উপায়ে পূরণ করা", "context": "পরে ট্রিট দেওয়ার প্রতিশ্রুতিতে।" }
        ]
    },

    # 28. Negotiating Freelance Rates & Scope of Work
    {
        "id": "conv-28-negotiating-freelance-rates-scope-of-work",
        "number": 28,
        "title": "Negotiating Freelance Rates & Scope of Work",
        "titleBn": "ফ্রিল্যান্স কাজের বাজেট ও পারিশ্রমিক নিয়ে সম্মানজনক দরদাম",
        "level": "Intermediate",
        "category": "Professional",
        "imageUrl": "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
        "sceneDescription": "আন্তর্জাতিক ক্লায়েন্টের সাথে জুম কলে ওয়েব ডেভেলপমেন্ট প্রজেক্টের বাজেট, ডেলিভারি ডেট এবং স্কোপ অব ওয়ার্ক নিয়ে সম্মানজনক দরকষাকষির কথপোকথন।",
        "briefing": {
            "setting": "অনলাইন জুম মিটিং (Freelance Client Video Call)",
            "roleA": { "name": "Freelancer", "titleBn": "ফ্রিল্যান্স কনসালটেন্ট (Nafis)", "descBn": "ওয়েবসাইট রিডিজাইনের জন্য $১,৫০০ কোটেশন দিয়েছেন" },
            "roleB": { "name": "Client", "titleBn": "ক্লায়েন্ট / বিজনেস ওনার (David)", "descBn": "$১,২০০ বাজেটের প্রস্তাব করছেন" },
            "overviewBn": "ফ্রিল্যান্সিংয়ে দরদামের সময় সরাসরি দাম না কমিয়ে কাজের পরিধি বা রিভিশন সমন্বয় করা (Adjust the scope of work to fit your budget) পেশাদার ফ্রিল্যান্সারদের প্রধান বৈশিষ্ট্য।",
            "politenessTips": [
                "বাজেট কম বললে মূল্য কমিয়ে দেবেন না, স্কোপ সমন্বয় করুন: 'If your budget is capped at $1,200, we can omit the automated blog migration.'",
                "কাজের মান তুলে ধরুন: 'My rate reflects custom responsive design and high SEO performance.'",
                "পেমেন্ট মাইলস্টোন স্পষ্ট করুন: 'We can structure this with a 50% deposit and 50% upon final launch.'"
            ],
            "keyVocabulary": [
                { "word": "Scope of work (SOW)", "meaning": "চুক্তিতে নির্ধারিত কাজের পূর্ণাঙ্গ পরিধি", "pron": "স্কোপ অফ ওয়ার্ক" },
                { "word": "Milestone payments", "meaning": "কাজের অগ্রগতির ধাপে ধাপে টাকা ছাড়", "pron": "মাইলস্টোন পেমেন্টস" },
                { "word": "Deliverables", "meaning": "ক্লায়েন্টকে হস্তান্তরযোগ্য কাজের চূড়ান্ত ফাইল", "pron": "ডেলিভারেবলস" },
                { "word": "Win-win solution", "meaning": "উভয় পক্ষের জন্য লাভজনক ও সন্তোষজনক সমাধান", "pron": "উইন-উইন সলিউশন" }
            ]
        },
        "starters": [
            { "en": "Hello David, thank you for reviewing the project proposal I sent over on Monday.", "bn": "হ্যালো ডেভিড, সোমবারে পাঠানো প্রজেক্ট প্রস্তাবনাটি পর্যালোচনা করায় ধন্যবাদ।", "tip": "দরদাম আলোচনার পেশাদার সূচনা।" },
            { "en": "I'd love to discuss how we can tailor the project deliverables to align with your target budget.", "bn": "আপনার নির্ধারিত বাজেটের সাথে মিলিয়ে কাজের পরিধি কীভাবে সাজানো যায় তা নিয়ে আলোচনা করতে চাই।", "tip": "বাজেট সমন্বয়ের বাক্য।" },
            { "en": "Let's review the milestones to ensure we both have complete clarity on the timeline.", "bn": "সময়সূচির স্পষ্টতার জন্য চলুন মাইলস্টোনগুলো একবার চোখ বুলিয়ে নিই।", "tip": "ক্ল্যারিটি নিশ্চিত করার প্রশ্ন।" }
        ],
        "dialogue": [
            { "id": "1", "speaker": "Nafis", "role": "A", "roleTitle": "Freelancer / নাফিস", "en": "Hello David, great to speak with you today! Did you have a chance to review the website redesign proposal?", "bn": "হ্যালো ডেভিড, আপনার সাথে কথা বলে ভালো লাগল! ওয়েবসাইট রিডিজাইনের প্রস্তাবনাটি কি দেখার সুযোগ হয়েছিল?", "ipa": "/həˈləʊ ˈdeɪvɪd ɡreɪt tuː spiːk wɪð juː təˈdeɪ dɪd juː hæv ə tʃɑːns tuː rɪˈvjuː ðə ˈwebsaɪt ˌriːdɪˈzaɪn prəˈpəʊzl/", "bn_pron": "হ্যালো ডেভিড, গ্রেট টু স্পিক উইথ ইউ টুডেই! ডিড ইউ হ্যাভ আ চান্স টু রিভিউ দ্য প্রপোজাল?" },
            { "id": "2", "speaker": "David", "role": "B", "roleTitle": "Client / ডেভিড", "en": "Hi Nafis! Yes, your portfolio and technical architecture look stellar. However, your quote of $1,800 is slightly over our budget.", "bn": "হাই নাফিস! হ্যাঁ, তোমার পোর্টফোলিও আর আর্কিটেকচার সত্যিই অসাধারণ। তবে তোমার দেওয়া ১,৮০০ ডলার আমাদের বাজেটের চেয়ে একটু বেশি।", "ipa": "/haɪ ˈnæfɪs jes jɔː pɔːtˈfəʊliəʊ ænd ˈteknɪkl ˈɑːkɪtektʃə lʊk ˈstelə haʊˈevə jɔː kwəʊt ɒv/", "bn_pron": "হাই নাফিস! ইয়েস, ইউর পোর্টফোলিও লুকস স্টেলার। হাউএভার, ইউর কোট ইজ স্লাইটলি ওভার আওয়ার বাজেট।" },
            { "id": "3", "speaker": "Nafis", "role": "A", "roleTitle": "Freelancer / নাফিস", "en": "I appreciate your transparency David. What target budget did your team have in mind for this initial phase?", "bn": "আপনার খোলামেলা বক্তব্যের জন্য ধন্যবাদ ডেভিড। এই প্রথম পর্বের জন্য আপনাদের টিমের কেমন বাজেট নির্ধারিত ছিল?", "ipa": "/aɪ əˈpriːʃieɪt jɔː trænsˈpærənsi ˈdeɪvɪd wɒt ˈtɑːɡɪt ˈbʌdʒɪt dɪd jɔː tiːm hæv ɪn maɪnd/", "bn_pron": "আই অ্যাপ্রিশিয়েট ইউর ট্রান্সপারেন্সি ডেভিড। ওয়াট টার্গেট বাজেট ডিড ইউর টিম হ্যাভ ইন মাইন্ড?" },
            { "id": "4", "speaker": "David", "role": "B", "roleTitle": "Client / ডেভিড", "en": "We have an approved cap of $1,400 for this quarter. Is there any flexibility on your pricing?", "bn": "এই প্রান্তিকের জন্য আমাদের সর্বোচ্চ ১,৪০০ ডলার অনুমোদিত আছে। তোমার প্রাইসিংয়ে কি কোনো ছাড় দেওয়া সম্ভব?", "ipa": "/wiː hæv ən əˈpruːvd kæp ɒv wʌn ˈθaʊznd fɔː ˈhʌndrəd ˈdɒləz fɔː ðɪs ˈkwɔːtə ɪz ðeər ˈeni ˌfleksəˈbɪləti/", "bn_pron": "উই হ্যাভ অ্যান অ্যাপ্রুভড ক্যাপ অফ ফোরটিন হান্ড্রেড ডলার্স। ইজ দেয়ার এনি ফ্লেক্সিবিলিটি?" },
            { "id": "5", "speaker": "Nafis", "role": "A", "roleTitle": "Freelancer / নাফিস", "en": "I can certainly work within your $1,400 budget if we adjust the scope slightly.", "bn": "আমরা যদি কাজের পরিধি কিছুটা সমন্বয় করি, তবে আমি নিশ্চয়ই আপনাদের ১,৪০০ ডলার বাজেটের মধ্যে কাজটি করে দিতে পারব।", "ipa": "/aɪ kæn ˈsɜːtnli wɜːk wɪˈðɪn jɔː wʌn ˈθaʊznd fɔː ˈhʌndrəd ˈbʌdʒɪt ɪf wiː əˈdʒʌst ðə skəʊp ˈslaɪtli/", "bn_pron": "আই ক্যান সার্টেনলি ওয়ার্ক উইদিন ইউর ফোরটিন হান্ড্রেড বাজেট ইফ উই অ্যাডজাস্ট দ্য স্কোপ।" },
            { "id": "6", "speaker": "David", "role": "B", "roleTitle": "Client / ডেভিড", "en": "What scope adjustments would you recommend to keep the core functionality intact?", "bn": "মূল ফিচারগুলো ঠিক রেখে কাজের পরিধিতে ঠিক কী ধরনের পরিবর্তনের প্রস্তাব করছ তুমি?", "ipa": "/wɒt skəʊp əˈdʒʌstmənts wʊd juː ˌrekəˈmend tuː kiːp ðə kɔː ˌfʌŋkʃəˈnæləti ɪnˈtækt/", "bn_pron": "ওয়াট স্কোপ অ্যাডজাস্টমেন্টস উড ইউ রেকমেন্ড টু কীপ দ্য কোর ফাংশনালিটি ইনট্যাক্ট?" },
            { "id": "7", "speaker": "Nafis", "role": "A", "roleTitle": "Freelancer / নাফিস", "en": "We can build the custom design and responsive frontend now, but postpone the automated CRM integration to Phase 2 next month.", "bn": "আমরা এখন কাস্টম ডিজাইন আর ফুল রেসপনসিভ ফ্রন্টএন্ড শেষ করব, তবে অটোমেটেড সিআরএম ইন্টিগ্রেশনটি আগামী মাসে ফেজ-২ এ করব।", "ipa": "/wiː kæn bɪld ðə ˈkʌstəm dɪˈzaɪn ænd rɪˈspɒnsɪv ˈfrʌntend naʊ bʌt pəʊstˈpəʊn ðə ˈɔːtəmeɪtɪd siː ɑːr em/", "bn_pron": "উই ক্যান বিল্ড দ্য কাস্টম ডিজাইন অ্যান্ড রেসপনসিভ ফ্রন্টএন্ড নাও, বাট পোস্টপোন দ্য অটোমেটেড সিআরএম।" },
            { "id": "8", "speaker": "David", "role": "B", "roleTitle": "Client / ডেভিড", "en": "That makes complete sense! The CRM is not essential for day-one launch. That's a fair compromise.", "bn": "একদম যুক্তিযুক্ত কথা! প্রথম দিনের লঞ্চের জন্য সিআরএম অপরিহার্য নয়। এটি একটি চমৎকার ভারসাম্যপূর্ণ সমাধান।", "ipa": "/ðæt meɪks kəmˈpliːt sens ðə siː ɑːr em ɪz nɒt ɪˈsenʃl fɔː deɪ wʌn lɔːntʃ ðæts ə feə ˈkɒmprəmaɪz/", "bn_pron": "দ্যাট মেইকস কমপ্লিট সেন্স! দ্য সিআরএম ইজ নট এসেনশিয়াল ফর ডেই ওয়ান লঞ্চ।" },
            { "id": "9", "speaker": "Nafis", "role": "A", "roleTitle": "Freelancer / নাফিস", "en": "Awesome! We can structure the payment as 50% upfront deposit to begin, and 50% upon final sign-off.", "bn": "দারুণ! পেমেন্টের ক্ষেত্রে কাজ শুরুর জন্য ৫০% অগ্রিম ডিপোজিট এবং কাজ সম্পূর্ণ বুঝিয়ে দেওয়ার পর বাকি ৫০% নেওয়া যেতে পারে।", "ipa": "/ˈɔːsəm wiː kæn ˈstrʌktʃə ðə ˈpeɪmənt æz ˈfɪfti pəˈsent ˈʌpfrʌnt dɪˈpɒzɪt tuː bɪˈɡɪn ænd ˈfɪfti/", "bn_pron": "অসাম! উই ক্যান স্ট্রাকচার দ্য পেমেন্ট অ্যাজ ফিফটি পার্সেন্ট আপফ্রন্ট ডিপোজিট।" },
            { "id": "10", "speaker": "David", "role": "B", "roleTitle": "Client / ডেভিড", "en": "You have a deal, Nafis! Please update the contract agreement with those terms and send it over for signature.", "bn": "চুক্তি পাকা নাফিস! এই শর্তগুলো দিয়ে কন্ট্রাক্ট পেপারটি আপডেট করে স্বাক্ষরের জন্য পাঠিয়ে দাও।", "ipa": "/juː hæv ə diːl ˈnæfɪs pliːz ʌpˈdeɪt ðə ˈkɒntrækt əˈɡriːmənt wɪð ðəʊz tɜːmz ænd send ɪt ˈəʊvə/", "bn_pron": "ইউ হ্যাভ আ ডিল, নাফিস! প্লীয আপডেট দ্য কন্ট্রাক্ট এগ্রিমেন্ট অ্যান্ড সেন্ড ইট ওভার।" }
        ],
        "followUps": [
            { "en": "How many rounds of design revisions are included within this revised scope?", "bn": "এই নতুন স্কোপের মধ্যে কত দফা ডিজাইন রিভিশন অন্তর্ভুক্ত থাকবে?" },
            { "en": "What is the targeted delivery date for the completed clickable Figma prototype?", "bn": "সম্পূর্ণ ক্লিকেবল ফিগমা প্রোটোটাইপ ডেলিভারির সম্ভাব্য তারিখ কোনটি?" },
            { "en": "Will you be providing weekly asynchronous video updates via Loom?", "bn": "লুম ভিডিওর মাধ্যমে কি প্রতি সপ্তাহে কাজের অগ্রগতির আপডেট শেয়ার করবেন?" }
        ],
        "closers": [
            { "en": "Thank you David! I'll revise the contract and send the invoice link today.", "bn": "ধন্যবাদ ডেভিড! আমি আজই কন্ট্রাক্ট সংশোধন করে ইনভয়েস লিংক পাঠিয়ে দেব।" },
            { "en": "Excited to partner on this project and elevate your online presence!", "bn": "এই প্রজেক্টে আপনাদের সাথে কাজ করতে এবং ওয়েবসাইটটিকে বিশ্বমানের রূপ দিতে মুখিয়ে আছি!" },
            { "en": "Have a wonderful week ahead David. Let's build something great!", "bn": "সামনের দিনগুলো চমৎকার কাটুক ডেভিড। চলুন দারুণ কিছু তৈরি করি!" }
        ],
        "nativePhrases": [
            { "phrase": "Win-win situation", "meaning": "উভয় পক্ষের জন্যই লাভজনক ও সম্মানজনক সমাধান", "context": "সফল দরদামের পর।" },
            { "phrase": "Sign on the dotted line", "meaning": "চুক্তিতে আনুষ্ঠানিকভাবে স্বাক্ষর করা", "context": "কন্ট্রাক্ট চূড়ান্ত করতে।" },
            { "phrase": "Scope creep", "meaning": "চুক্তির বাইরে অতিরিক্ত কাজ ক্রমাগত চাপানো", "context": "কাজের সীমানা নির্দিষ্ট রাখার আলোচনায়।" }
        ]
    },

    # 29. Discussing Weekend Plans & Road Trip
    {
        "id": "conv-29-discussing-weekend-plans-road-trip",
        "number": 29,
        "title": "Discussing Weekend Plans & Road Trip",
        "titleBn": "ছুটির দিনে বন্ধুদের সাথে ভ্রমণের রুট প্ল্যান করা",
        "level": "Intermediate",
        "category": "Social",
        "imageUrl": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
        "sceneDescription": "লং উইকেন্ডে বন্ধুদের দল মিলে পাহাড়ে রোড ট্রিপে যাওয়ার রুট, গাড়ি চালানো ভাগাভাগি, গান ও ক্যাম্পিংয়ের রসদ গোছানোর পরিকল্পনা।",
        "briefing": {
            "setting": "বন্ধুদের আড্ডা বা ক্যাফে (Friends Travel Planning Hangout)",
            "roleA": { "name": "Planner", "titleBn": "ট্রিপ প্ল্যানার (Adnan)", "descBn": "সকালের দিকে জ্যাম ছাড়া রওনা হওয়া ও রুট প্রস্তাব করছেন" },
            "roleB": { "name": "Travel Buddy", "titleBn": "সহযাত্রী বন্ধু (Sami)", "descBn": "গাড়ি ড্রাইভ শেয়ার ও ক্যাম্পিং গিয়ার গোছানোর দায়িত্ব নিচ্ছেন" },
            "overviewBn": "রোড ট্রিপের প্ল্যান করার সময় রওনা হওয়ার সময় (Hit the road early), গাড়ি চালানো ভাগাভাগি (Take turns driving), জ্বালানি খরচ শেয়ার (Split the gas money) এবং স্পটিফাই প্লেলিস্ট আলোচনা করতে হয়।",
            "politenessTips": [
                "ভ্রমণের প্রস্তাব দিয়ে বলুন: 'Are you guys up for a scenic road trip this long weekend?'",
                "ড্রাইভিং ভাগাভাগি নিশ্চিত করুন: 'We should take turns behind the wheel so nobody gets exhausted.'",
                "খরচ শেয়ারের কথা তুলুন: 'Let's split all fuel, tolls, and food costs evenly through Splitwise.'"
            ],
            "keyVocabulary": [
                { "word": "Hit the road", "meaning": "যাত্রা শুরু করা বা গাড়িতে রওনা দেওয়া", "pron": "হিট দ্য রোড" },
                { "word": "Scenic route", "meaning": "প্রাকৃতিক সৌন্দর্যে ঘেরা মনোরম সড়ক", "pron": "সিনিক রুট" },
                { "word": "Take turns behind the wheel", "meaning": "পালা করে একজন একজন করে গাড়ি চালানো", "pron": "টেইক টার্নস বিহাইন্ড দ্য হুইল" },
                { "word": "Road trip playlist", "meaning": "গাড়িতে শোনার পছন্দের গানের তালিকা", "pron": "রোড ট্রিপ প্লেলিস্ট" }
            ]
        },
        "starters": [
            { "en": "Are you up for an adventure? Let's take a road trip to the hills this long weekend!", "bn": "রোমাঞ্চকর ভ্রমণের জন্য তৈরি? চলো এই লং উইকেন্ডে পাহাড়ে রোড ট্রিপে যাই!", "tip": "ভ্রমণের প্রস্তাব দেওয়ার আকর্ষণীয় বাক্য।" },
            { "en": "Have you guys mapped out the driving route for Saturday morning yet?", "bn": "শনিবার সকালের ড্রাইভিং রুটটি কি তোমরা ম্যাপে চূড়ান্ত করেছ?", "tip": "রুট আলোচনার বাক্য।" },
            { "en": "I've already curated the ultimate road trip music playlist for our journey!", "bn": "আমাদের ভ্রমণের জন্য আমি ইতিমধ্যে সেরা গানের প্লেলিস্ট রেডি করে ফেলেছি!", "tip": "আড্ডার আমেজ বাড়ানোর উপায়।" }
        ],
        "dialogue": [
            { "id": "1", "speaker": "Adnan", "role": "A", "roleTitle": "Adnan / আদনান", "en": "Sami! With the upcoming three-day weekend, are you up for a road trip to Sreemangal?", "bn": "সামি! সামনে তো তিন দিনের টানা ছুটি, চলো না শ্রীমঙ্গলে একটা রোড ট্রিপ দিয়ে আসি?", "ipa": "/ˈsɑːmi wɪð ðə ˈʌpkʌmɪŋ θriː deɪ ˈwiːkend ɑː juː ʌp fɔːr ə rəʊd trɪp tuː ˈsriːmɒŋɡəl/", "bn_pron": "সামি! উইথ দ্য আপকামিং থ্রি ডেই উইকেন্ড, আর ইউ আপ ফর আ রোড ট্রিপ?" },
            { "id": "2", "speaker": "Sami", "role": "B", "roleTitle": "Sami / সামি", "en": "I am 100% in! The tea gardens must look breathtakingly green after the recent rains.", "bn": "আমি তো ১০০% রাজি! সাম্প্রতিক বৃষ্টির পর চা বাগানগুলো এখন অবিশ্বাস্য সবুজ আর মনোরম দেখাচ্ছে।", "ipa": "/aɪ æm wʌn ˈhʌndrəd pəˈsent ɪn ðə tiː ˈɡɑːdnz mʌst lʊk ˈbreθteɪkɪŋli ɡriːn/", "bn_pron": "আই অ্যাম ওয়ান হান্ড্রেড পার্সেন্ট ইন! দ্য টি গার্ডেনস মাস্ট লুক ব্রেথটেকিংলি গ্রিন।" },
            { "id": "3", "speaker": "Adnan", "role": "A", "roleTitle": "Adnan / আদনান", "en": "If we hit the road by 6:00 AM on Friday, we will completely beat the city traffic bottleneck.", "bn": "আমরা যদি শুক্রবার সকাল ৬টার মধ্যে গাড়িতে রওনা দিই, তবে শহরের জ্যাম পড়ার আগেই বেরিয়ে যেতে পারব।", "ipa": "/ɪf wiː hɪt ðə rəʊd baɪ sɪks eɪ em ɒn ˈfraɪdeɪ wiː wɪl kəmˈpliːtli biːt ðə ˈsɪti ˈtræfɪk ˈbɒtlnek/", "bn_pron": "ইফ উই হিট দ্য রোড বাই সিক্স এএম, উই উইল কমপ্লিটলি বিট দ্য সিটি ট্রাফিক।" },
            { "id": "4", "speaker": "Sami", "role": "B", "roleTitle": "Sami / সামি", "en": "Smart move. My SUV is newly serviced, so we can take my car. Can you share the driving with me?", "bn": "বুদ্ধিমানের মতো সিদ্ধান্ত। আমার এসইউভি সদ্য সার্ভিসিং করানো হয়েছে, তাই আমার গাড়িতেই যাওয়া যায়। ড্রাইভিংয়ে সঙ্গ দিবি তো?", "ipa": "/smɑːt muːv maɪ ˌes juː ˈviː ɪz ˈnjuːli ˈsɜːvɪst səʊ wiː kæn teɪk maɪ kɑː kæn juː ʃeə ðə ˈdraɪvɪŋ/", "bn_pron": "স্মার্ট মুভ। মাই এসইউভি ইজ নিউলি সার্ভিসড। ক্যান ইউ শেয়ার দ্য ড্রাইভিং?" },
            { "id": "5", "speaker": "Adnan", "role": "A", "roleTitle": "Adnan / আদনান", "en": "Definitely! We will take two-hour shifts behind the wheel so neither of us gets tired.", "bn": "অবশ্যই! আমরা দুই ঘণ্টা পর পর পালা করে ড্রাইভ করব, যাতে কারো একার ওপর ক্লান্তি না আসে।", "ipa": "/ˈdefɪnətli wiː wɪl teɪk tuː ˈaʊə ʃɪfts bɪˈhaɪnd ðə wiːl səʊ ˈnaɪðər ɒv ʌs ɡets ˈtaɪəd/", "bn_pron": "ডেফিনিটলি! উই উইল টেক টু আওয়ার শিফটস বিহাইন্ড দ্য হুইল।" },
            { "id": "6", "speaker": "Sami", "role": "B", "roleTitle": "Sami / সামি", "en": "What route should we take? The highway or the scenic rural bypass?", "bn": "আমরা কোন পথ দিয়ে যাব? হাইওয়ে ধরে নাকি গ্রামীণ মনোরম বাইপাস দিয়ে?", "ipa": "/wɒt ruːt ʃʊd wiː teɪk ðə ˈhaɪweɪ ɔː ðə ˈsiːnɪk ˈrʊərəl ˈbaɪpɑːs/", "bn_pron": "ওয়াট রুট শুড উই টেক? দ্য হাইওয়ে অর দ্য সিনিক রুরাল বাইপাস?" },
            { "id": "7", "speaker": "Adnan", "role": "A", "roleTitle": "Adnan / আদনান", "en": "The scenic route through the forest! We can stop at the famous highway dhaba for hot parathas and chai.", "bn": "বনের মধ্য দিয়ে যাওয়া মনোরম রুটটা! পথে হাইওয়ের বিখ্যাত ধাবায় থেমে গরম গরম পরোটা আর চা খাওয়া যাবে।", "ipa": "/ðə ˈsiːnɪk ruːt θruː ðə ˈfɒrɪst wiː kæn stɒp æt ðə ˈfeɪməs ˈhaɪweɪ ˈdɑːbə fɔː hɒt pəˈrɑːtəz/", "bn_pron": "দ্য সিনিক রুট থ্রু দ্য ফরেস্ট! উই ক্যান স্টপ অ্যাট দ্য ফেইমাস হাইওয়ে ধাবা।" },
            { "id": "8", "speaker": "Sami", "role": "B", "roleTitle": "Sami / সামি", "en": "That sounds mouthwatering! Who's in charge of the travel playlist and snacks?", "bn": "শুনতেই তো জিভে জল চলে এলো! গানের প্লেলিস্ট আর ড্রাইভিং স্ন্যাকসের দায়িত্বে কে থাকছে?", "ipa": "/ðæt saʊndz ˈmaʊθˌwɔːtərɪŋ huːz ɪn tʃɑːdʒ ɒv ðə ˈtrævl ˈpleɪlɪst ænd snæks/", "bn_pron": "দ্যাট সাউন্ডস মাউথওয়াটারিং! হুজ ইন চার্জ অফ দ্য ট্রাভেল প্লেলিস্ট অ্যান্ড স্ন্যাকস?" },
            { "id": "9", "speaker": "Adnan", "role": "A", "roleTitle": "Adnan / আদনান", "en": "I've already prepared an eight-hour Spotify playlist of classic rock and indie tunes, plus a cooler box of drinks.", "bn": "আমি ইতিমধ্যেই ক্লাসিক রক ও ইন্ডি গানের আট ঘণ্টার স্পটিফাই প্লেলিস্ট বানিয়েছি, সাথে কোল্ড ড্রিঙ্কসের বক্স থাকবে।", "ipa": "/aɪv ɔːlˈredi prɪˈpeəd ən eɪt ˈaʊə ˈspɒtɪfaɪ ˈpleɪlɪst ɒv ˈklæsɪk rɒk ænd ˈɪndi tjuːnz/", "bn_pron": "আইভ অলরেডি প্রিপেয়ার্ড অ্যান এইট আওয়ার স্পটিফাই প্লেলিস্ট।" },
            { "id": "10", "speaker": "Sami", "role": "B", "roleTitle": "Sami / সামি", "en": "You're a legend! I'll get the car tank filled up with fuel on Thursday night. Ready to roll!", "bn": "তুই সত্যিই বস রে! আমি বৃহস্পতিবার রাতেই গাড়ির পুরো ট্যাংক তেল ভরে রাখব। জার্নি শুরু করতে আর তর সইছে না!", "ipa": "/jɔːr ə ˈledʒənd aɪl ɡet ðə kɑː tæŋk fɪld ʌp wɪð ˈfjuːəl ɒn ˈθɜːzdeɪ naɪt ˈredi tuː rəʊl/", "bn_pron": "ইউর আ লিজেন্ড! আইল গেট দ্য কার ট্যাংক ফিল্ড আপ। রেডি টু রোল!" }
        ],
        "followUps": [
            { "en": "Did you book our eco-resort wooden cottage near the tea estate?", "bn": "চা বাগানের কাছে কাঠের ইকো-রিসোর্ট কটেজটা কি বুকিং দেওয়া হয়েছে?" },
            { "en": "Should we bring our portable power banks and camera tripod?", "bn": "পোর্টেবল পাওয়ার ব্যাংক আর ক্যামেরার ট্রাইপড কি সাথে নেওয়া উচিত?" },
            { "en": "Let's log all toll and gas expenses in Splitwise so we can settle up easily.", "bn": "সহজে হিসাব মেটাতে টোল আর তেলের সব খরচ স্প্লিটওয়াইজে তুলে রাখি চলো।" }
        ],
        "closers": [
            { "en": "This is going to be an epic weekend! Rest up before Friday.", "bn": "এই উইকেন্ডটা অবিস্মরণীয় হতে যাচ্ছে! শুক্রবারের আগে ভালো করে ঘুমিয়ে বিশ্রাম নে।" },
            { "en": "I'll be at your doorstep by 5:45 AM sharp. Don't oversleep!", "bn": "আমি ঠিক ভোর ৫:৪৫ এ তোর দরজায় থাকব। আবার ঘুমিয়ে থাকিস না যেন!" },
            { "en": "See you Friday morning buddy. Safe driving until then!", "bn": "শুক্রবার সকালে দেখা হচ্ছে দোস্ত। ততক্ষণ নিরাপদে থাকিস!" }
        ],
        "nativePhrases": [
            { "phrase": "Hit the road", "meaning": "যাত্রা শুরু করা বা গাড়িতে চড়ে বের হওয়া", "context": "ভ্রমণের শুরুতে অতি পরিচিত উক্তি।" },
            { "phrase": "Ready to roll", "meaning": "পুরোপুরি প্রস্তুত হয়ে রওনা দেওয়ার অপেক্ষায় থাকা", "context": "সব গোছগাছ শেষ হলে।" },
            { "phrase": "Scenic route", "meaning": "প্রকৃতির রূপ দেখতে দেখতে যাওয়া মনোরম পথ", "context": "হাইওয়ের বদলে সুন্দর সড়ক বেছে নিলে।" }
        ]
    },

    # 30. Congratulating Someone on Promotion or Success
    {
        "id": "conv-30-congratulating-someone-on-promotion-or-success",
        "number": 30,
        "title": "Congratulating Someone on Promotion or Success",
        "titleBn": "নতুন চাকরি বা প্রমোশনে সহকর্মীকে প্রাণঢালা অভিনন্দন",
        "level": "Intermediate",
        "category": "Professional",
        "imageUrl": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
        "sceneDescription": "অফিসে বা ক্যাফেটেরিয়ায় সহকর্মীর সিনিয়র ডিরেক্টর পদে পদোন্নতির খবর শুনে উষ্ণ ও আন্তরিকভাবে শুভেচ্ছা জানানোর দৃশ্যপট।",
        "briefing": {
            "setting": "অফিস ক্যাফেটেরিয়া (Office Lounge / Pantry)",
            "roleA": { "name": "Colleague", "titleBn": "সহকর্মী (Tania)", "descBn": "সিনিয়র ডিরেক্টর পদে প্রমোশনের জন্য প্রাণঢালা অভিনন্দন জানাচ্ছেন" },
            "roleB": { "name": "Promoted Colleague", "titleBn": "পদোন্নতিপ্রাপ্ত কর্মী (Rashid)", "descBn": "বিনয়ের সাথে ধন্যবাদ জানিয়ে পুরো টিমের অবদানের কথা বলছেন" },
            "overviewBn": "কর্মক্ষেত্রে কারো সাফল্যে আনন্দ প্রকাশ করতে 'Congratulations on your well-deserved promotion!', 'Nobody worked harder for this than you', 'Wishing you tremendous success in this new role' ইত্যাদি বাক্য আন্তরিকতা প্রকাশ করে।",
            "politenessTips": [
                "দেরি না করে দ্রুত শুভেচ্ছা জানান: 'I just heard the wonderful news about your promotion!'",
                "যোগ্যতার স্বীকৃতি দিন: 'It is so well-deserved after the incredible year you've had.'",
                "ভবিষ্যতের জন্য শুভকামনা জানান: 'I have no doubt you'll excel in leading the regional team.'"
            ],
            "keyVocabulary": [
                { "word": "Well-deserved promotion", "meaning": "কঠোর পরিশ্রমের পর সম্পূর্ণ যোগ্য পদোন্নতি", "pron": "ওয়েল ডিজার্ভড প্রমোশন" },
                { "word": "Stepping stone", "meaning": "আরও বড় সাফল্যের পথে একটি গুরুত্বপূর্ণ ধাপ", "pron": "স্টেপিং স্টোন" },
                { "word": "Leadership mantle", "meaning": "নেতৃত্বের বড় দায়িত্ব গ্রহণ করা", "pron": "লিডারশিপ ম্যান্টল" },
                { "word": "Raise a toast", "meaning": "কারো সাফল্যে শুভকামনা জানিয়ে গ্লাস তোলা বা উদযাপন করা", "pron": "রেইয আ টোস্ট" }
            ]
        },
        "starters": [
            { "en": "Rashid! Huge congratulations on your promotion to Senior Director!", "bn": "রশিদ! সিনিয়র ডিরেক্টর পদে পদোন্নতি পাওয়ায় অনেক অনেক শুভকামনা ও অভিনন্দন!", "tip": "সহকর্মীকে অভিনন্দন জানানোর সেরা রূপ।" },
            { "en": "I just saw the company-wide announcement email. Nobody deserves this more than you!", "bn": "কোম্পানির অফিশিয়াল ঘোষণার ইমেইলটা দেখলাম। তোমার চেয়ে যোগ্য আর কেউ ছিল না!", "tip": "যোগ্যতার প্রশংসা করার বাক্য।" },
            { "en": "We are all so incredibly thrilled for your well-earned career milestone!", "bn": "তোমার ক্যারিয়ারের এই অর্জিত মাইলফলকে আমরা সবাই ভীষণ আনন্দিত!", "tip": "টিমের পক্ষ থেকে শুভেচ্ছা জানানোর বাক্য।" }
        ],
        "dialogue": [
            { "id": "1", "speaker": "Tania", "role": "A", "roleTitle": "Colleague / তানিয়া", "en": "Rashid! I just read the company announcement. Huge congratulations on your promotion to Senior Director!", "bn": "রশিদ! আমি এইমাত্র কোম্পানির ইমেইল ঘোষণাটি পড়লাম। সিনিয়র ডিরেক্টর পদে পদোন্নতির জন্য তোমাকে অনেক অভিনন্দন!", "ipa": "/rəˈʃiːd aɪ dʒʌst red ðə ˈkʌmpəni əˈnaʊnsmənt hjuːdʒ kənˌɡrætʃuˈleɪʃnz ɒn jɔː prəˈməʊʃn/", "bn_pron": "রশিদ! আই জাস্ট রেড দ্য কোম্পানি অ্যানাউন্সমেন্ট। হিউজ কনগ্র্যাচুলেশনস অন ইউর প্রমোশন!" },
            { "id": "2", "speaker": "Rashid", "role": "B", "roleTitle": "Promoted / রশিদ", "en": "Thank you so much Tania! That truly means a lot coming from you.", "bn": "তোমাকে অনেক ধন্যবাদ তানিয়া! তোমার মতো গুণী সহকর্মীর মুখের এই কথা আমার কাছে অনেক বড় অর্থ বহন করে।", "ipa": "/θæŋk juː səʊ mʌtʃ ˈtɑːniə ðæt ˈtruːli miːnz ə lɒt ˈkʌmɪŋ frəm juː/", "bn_pron": "থ্যাংক ইউ সো মাচ তানিয়া! দ্যাট ট্রুলি মিনস আ লট কামিং ফ্রম ইউ।" },
            { "id": "3", "speaker": "Tania", "role": "A", "roleTitle": "Colleague / তানিয়া", "en": "It is so well-deserved! The way you steered the international expansion project last quarter was masterclass leadership.", "bn": "তুমি সত্যিই এটি ডিজার্ভ করো! গত কোয়ার্টারে আন্তর্জাতিক সম্প্রসারণ প্রজেক্ট তুমি যেভাবে নেতৃত্ব দিয়েছ তা ছিল অনবদ্য।", "ipa": "/ɪt ɪz səʊ wel dɪˈzɜːvd ðə weɪ juː stɪəd ðə ˌɪntəˈnæʃnəl ɪkˈspænʃn ˈprɒdʒekt lɑːst ˈkwɔːtə/", "bn_pron": "ইট ইজ সো ওয়েল ডিজার্ভড! দ্য ওয়ে ইউ স্টিয়ার্ড দ্য ইন্টারন্যাশনাল এক্সপ্যানশন প্রজেক্ট।" },
            { "id": "4", "speaker": "Rashid", "role": "B", "roleTitle": "Promoted / রশিদ", "en": "I couldn't have pulled it off without the dedication of the entire team, including your brilliant marketing analytics.", "bn": "পুরো টিমের আন্তরিক প্রচেষ্টা এবং তোমার চমৎকার মার্কেটিং অ্যানালিটিক্স ছাড়া আমি একা কখনোই এটা অর্জন করতে পারতাম না।", "ipa": "/aɪ ˈkʊdnt hæv pʊld ɪt ɒf wɪˈðaʊt ðə ˌdedɪˈkeɪʃn ɒv ðə ɪnˈtaɪə tiːm/", "bn_pron": "আই কুডন্ট হ্যাভ পুলড ইট অফ উইদাউট দ্য ডেডিকেশন অফ দ্য এনটায়ার টিম।" },
            { "id": "5", "speaker": "Tania", "role": "A", "roleTitle": "Colleague / তানিয়া", "en": "Always so humble! What new strategic initiatives will you be spearheading in your expanded role?", "bn": "সবসময়ই কত অমায়িক তুমি! নতুন পদে দায়িত্ব বেড়ে যাওয়ায় কোন কোন কৌশলগত প্রজেক্ট তুমি পরিচালনা করবে?", "ipa": "/ˈɔːlweɪz səʊ ˈhʌmbl wɒt njuː strəˈtiːdʒɪk ɪˈnɪʃətɪvz wɪl juː biː ˈspɪəhedɪŋ ɪn jɔːr ɪkˈspændɪd rəʊl/", "bn_pron": "অলওয়েজ সো হাম্বল! ওয়াট নিউ স্ট্র্যাটেজিক ইনিশিয়েটিভস উইল ইউ বি স্পিয়ারহেডিং?" },
            { "id": "6", "speaker": "Rashid", "role": "B", "roleTitle": "Promoted / রশিদ", "en": "I'll be overseeing our Southeast Asian regional offices and building our new AI integration division.", "bn": "আমি আমাদের দক্ষিণ-পূর্ব এশিয়ার আঞ্চলিক অফিসগুলোর তদারকি করব এবং নতুন এআই ইন্টিগ্রেশন বিভাগ গড়ে তুলব।", "ipa": "/aɪl biː ˌəʊvəˈsiːɪŋ ˈaʊə saʊθˈiːst ˈeɪʒn ˈriːdʒənl ˈɒfɪsɪz ænd ˈbɪldɪŋ ˈaʊə njuː eɪ aɪ ˌɪntɪˈɡreɪʃn/", "bn_pron": "আইল বি ওভারসিয়িং আওয়ার সাউথইস্ট এশিয়ান রিজিওনাল অফিসেস।" },
            { "id": "7", "speaker": "Tania", "role": "A", "roleTitle": "Colleague / তানিয়া", "en": "That sounds exhilarating! If anyone can build and scale that division from scratch, it's definitely you.", "bn": "শুনেই তো ভীষণ রোমাঞ্চকর লাগছে! শূন্য থেকে একটি বিভাগ সফলভাবে গড়ে তোলার মতো দক্ষতা যদি কারো থাকে, তবে তা তোমারই আছে।", "ipa": "/ðæt saʊndz ɪɡˈzɪləreɪtɪŋ ɪf ˈeniwʌn kæn bɪld ænd skeɪl ðæt dɪˈvɪʒn frəm skrætʃ ɪts ˈdefɪnətli juː/", "bn_pron": "দ্যাট সাউন্ডস এক্সিলারেটিং! ইফ এনিওয়ান ক্যান বিল্ড অ্যান্ড স্কেল, ইটস ডেফিনিটলি ইউ।" },
            { "id": "8", "speaker": "Rashid", "role": "B", "roleTitle": "Promoted / রশিদ", "en": "Thank you for having such immense faith in me Tania. It keeps me energized.", "bn": "আমার ওপর এত গভীর আস্থা রাখার জন্য ধন্যবাদ তানিয়া। এটি আমাকে নতুন উদ্যমে কাজ করতে সাহস জোগায়।", "ipa": "/θæŋk juː fɔː ˈhævɪŋ sʌtʃ ɪˈmens feɪθ ɪn miː ˈtɑːniə ɪt kiːps miː ˈenədʒaɪzd/", "bn_pron": "থ্যাংক ইউ ফর হ্যাভিং সাচ ইমেন্স ফেইথ ইন মি তানিয়া। ইট কীপস মি এনার্জাইজড।" },
            { "id": "9", "speaker": "Tania", "role": "A", "roleTitle": "Colleague / তানিয়া", "en": "The whole team wants to take you out for dinner this Friday to celebrate properly. Are you free?", "bn": "টিমের সবাই মিলে এই শুক্রবার তোমাকে নিয়ে জমকালো উদযাপনের ডিনারে যেতে চায়। তুমি ফ্রি আছ তো?", "ipa": "/ðə həʊl tiːm wɒnts tuː teɪk juː aʊt fɔː ˈdɪnə ðɪs ˈfraɪdeɪ tuː ˈselɪbreɪt ˈprɒpəli ɑː juː friː/", "bn_pron": "দ্য হোল টিম ওয়ান্টস টু টেক ইউ আউট ফর ডিনার দিস ফ্রাইডে। আর ইউ ফ্রি?" },
            { "id": "10", "speaker": "Rashid", "role": "B", "roleTitle": "Promoted / রশিদ", "en": "The dinner is 100% on me! It will be my privilege to treat everyone this Friday. See you all then!", "bn": "ডিনারের পুরো বিল কিন্তু আমার পক্ষ থেকে! শুক্রবার সবাইকে ট্রিট দিতে পারা আমার জন্য আনন্দের। দেখা হচ্ছে তাহলে!", "ipa": "/ðə ˈdɪnər ɪz wʌn ˈhʌndrəd pəˈsent ɒn miː ɪt wɪl biː maɪ ˈprɪvəlɪdʒ tuː triːt ˈevriwʌn ðɪs ˈfraɪdeɪ/", "bn_pron": "দ্য ডিনার ইজ ওয়ান হান্ড্রেড পার্সেন্ট অন মি! ইট উইল বি মাই প্রিভিলেজ টু ট্রিট এভরিওয়ান।" }
        ],
        "followUps": [
            { "en": "Will you be relocating to the Singapore regional headquarters, or staying in Dhaka?", "bn": "তুমি কি সিঙ্গাপুর রিজিওনাল হেডকোয়ার্টারে চলে যাবে, নাকি ঢাকায় থাকবে?" },
            { "en": "How soon will your successor be announced for the current team lead position?", "bn": "তোমার বর্তমান টিম লিড পদের জন্য নতুন দায়িত্বপ্রাপ্ত ব্যক্তির নাম কতদিনের মধ্যে ঘোষণা হবে?" },
            { "en": "Let's organize a personalized card and gift from the entire floor!", "bn": "পুরো ফ্লোরের সহকর্মীদের পক্ষ থেকে চলো একটি শুভেচ্ছা কার্ড আর উপহারের ব্যবস্থা করি!" }
        ],
        "closers": [
            { "en": "Heartiest congratulations once again Rashid! Wishing you boundless success.", "bn": "আবারও মন থেকে প্রাণঢালা অভিনন্দন রশিদ! তোমার অশেষ সাফল্য কামনা করি।" },
            { "en": "Proud to work alongside a leader like you. Have a fantastic day!", "bn": "তোমার মতো একজন যোগ্য নেতার সাথে কাজ করতে পেরে গর্বিত। দিনটি চমৎকার কাটুক!" },
            { "en": "Looking forward to Friday's celebratory dinner. Cheers!", "bn": "শুক্রবার রাতের সেলিব্রেশন ডিনারের জন্য মুখিয়ে রইলাম। শুভকামনা!" }
        ],
        "nativePhrases": [
            { "phrase": "Well-deserved", "meaning": "কঠোর পরিশ্রমের পর সম্পূর্ণ পাওয়ার যোগ্য সাফল্য", "context": "প্রমোশন বা পুরস্কার পাওয়ার পর অভিনন্দনে।" },
            { "phrase": "Pull it off", "meaning": "কঠিন কোনো চ্যালেঞ্জ সফলভাবে সম্পন্ন করা", "context": "বড় প্রজেক্ট বাস্তবায়নে।" },
            { "phrase": "On me", "meaning": "আমার পক্ষ থেকে মেহমানদারি বা খরচ দেওয়া", "context": "খাবার বিল দেওয়ার প্রতিশ্রুতিতে।" }
        ]
    }
]

print(f"Loaded {len(SITUATIONS_21_30)} situations (21 to 30)")
