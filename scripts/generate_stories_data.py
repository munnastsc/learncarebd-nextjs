# -*- coding: utf-8 -*-
"""
Generates rich, authentic, beginner-friendly 10 stories per lesson for all 28 Spoken English lessons:
- Stories 1 to 5: Guided stories with step-by-step Bangla to English translation,
  sentence expanding breakdown (ছোট কথা থেকে কীভাবে বড় বাক্য করতে হয়), and
  highlighted vocabulary cards (meaning & example usage).
- Stories 6 to 10: Guided practice challenges where students are given a starter,
  Bengali plot hints, vocabulary clues, and an interactive reveal of the model solution.
"""
import json
import os

LESSONS_INFO = [
    {
        "id": "lesson-01-present-to-be",
        "name": "Present To-Be (am/is/are)",
        "theme": "Introduction, Current State, Happiness and Profession",
        "grammarFocus": "am, is, are for identity, state, emotion and profession",
        "stories": [
            {
                "title": "A New Student in Class",
                "titleBn": "ক্লাসে একজন নতুন শিক্ষার্থী",
                "situation": "প্রথম দিন ক্লাসে এসে নিজের ও বন্ধুদের পরিচয় দেওয়া",
                "fullStoryEn": "I am a new student in this English club. The teacher is very kind and supportive. My classmates are friendly and energetic. We are excited to learn Spoken English together.",
                "fullStoryBn": "আমি এই ইংরেজি ক্লাবের একজন নতুন শিক্ষার্থী। শিক্ষক খুবই দয়ালু ও সাহায্যকারী। আমার সহপাঠীরা বন্ধুত্বপূর্ণ ও প্রাণবন্ত। আমরা একসাথে স্পোকেন ইংলিশ শিখতে রোমাঞ্চিত।",
                "breakdown": [
                    {
                        "step": 1,
                        "bnSentence": "আমি এই ইংরেজি ক্লাবের একজন নতুন শিক্ষার্থী।",
                        "enSentence": "I am a new student in this English club.",
                        "ipa": "/aɪ æm ə njuː ˈstjuːdnt ɪn ðɪs ˈɪŋɡlɪʃ klʌb/",
                        "bn_pron": "আই অ্যাম আ নিউ স্টুডেন্ট ইন দিস ইংলিশ ক্লাব।",
                        "grammarNote": "নিজের পরিচয় প্রকাশ করতে Subject 'I' এর সাথে 'am' ব্যবহৃত হয়েছে।"
                    },
                    {
                        "step": 2,
                        "bnSentence": "শিক্ষক খুবই দয়ালু ও সাহায্যকারী।",
                        "enSentence": "The teacher is very kind and supportive.",
                        "ipa": "/ðə ˈtiːtʃər ɪz ˈveri kaɪnd ænd səˈpɔːtɪv/",
                        "bn_pron": "দ্য টিচার ইজ ভেরি কাইন্ড অ্যান্ড সাপোর্টিভ।",
                        "grammarNote": "শিক্ষক একজন একক ব্যক্তি (3rd Person Singular), তাই 'is' বসেছে।"
                    },
                    {
                        "step": 3,
                        "bnSentence": "আমার সহপাঠীরা বন্ধুত্বপূর্ণ ও প্রাণবন্ত।",
                        "enSentence": "My classmates are friendly and energetic.",
                        "ipa": "/maɪ ˈklɑːsmeɪts ɑːr ˈfrendli ænd ˌenəˈdʒetɪk/",
                        "bn_pron": "মাই ক্লাসমেটস আর ফ্রেন্ডলি অ্যান্ড এনার্জেটিক।",
                        "grammarNote": "সহপাঠীরা বহুবচন (Plural Noun), তাই গুণ প্রকাশে 'are' ব্যবহৃত হয়েছে।"
                    },
                    {
                        "step": 4,
                        "bnSentence": "আমরা একসাথে স্পোকেন ইংলিশ শিখতে রোমাঞ্চিত।",
                        "enSentence": "We are excited to learn Spoken English together.",
                        "ipa": "/wiː ɑːr ɪkˈsaɪtɪd tə lɜːn ˈspəʊkən ˈɪŋɡlɪʃ təˈɡeðər/",
                        "bn_pron": "উই আর এক্সাইটেড টু লার্ন স্পোকেন ইংলিশ টুগেদার।",
                        "grammarNote": "মানসিক অবস্থা বোঝাতে 'We are excited' এর সাথে উদ্দেশ্য হিসেবে 'to learn' বসেছে।"
                    }
                ],
                "expansion": {
                    "level1": {"en": "I am a student.", "bn": "আমি একজন ছাত্র।", "label": "ধাপ ১: মূল বেস বাক্য (Subject + To-Be)"},
                    "level2": {"en": "I am an enthusiastic student.", "bn": "আমি একজন উৎসাহী ছাত্র।", "label": "ধাপ ২: বিশেষণ যোগ (+ Adjective)"},
                    "level3": {"en": "I am an enthusiastic student in this English club.", "bn": "আমি এই ইংরেজি ক্লাবের একজন উৎসাহী ছাত্র।", "label": "ধাপ ৩: স্থান/পরিবেশ যোগ (+ Place)"},
                    "level4": {"en": "To speak fluently, I am an enthusiastic student in this English club.", "bn": "অনর্গল কথা বলার লক্ষ্যে, আমি এই ইংরেজি ক্লাবের একজন উৎসাহী ছাত্র।", "label": "ধাপ ৪: উদ্দেশ্য ও সুন্দর সূচনা (+ Purpose)"},
                    "techniqueExplanation": "লক্ষ্য করুন কীভাবে সাধারণ ৩ শব্দের 'I am a student' এর সাথে গুণ (enthusiastic), অবস্থান (in this English club) এবং শুরুতে জীবনের লক্ষ্য (To speak fluently) জুড়ে দিয়ে একটি চমৎকার প্রেজেন্টেশন লেভেল বাক্য তৈরি করা হলো।"
                },
                "vocabulary": [
                    {"word": "supportive", "ipa": "/səˈpɔːtɪv/", "pos": "Adjective", "meaningBn": "সহানুভূতিশীল / সাহায্যকারী", "exampleEn": "My parents are always supportive of my dreams.", "exampleBn": "আমার বাবা-মা সবসময় আমার স্বপ্নের পাশে থাকেন।"},
                    {"word": "energetic", "ipa": "/ˌenəˈdʒetɪk/", "pos": "Adjective", "meaningBn": "কর্মচঞ্চল / প্রাণবন্ত", "exampleEn": "She is very energetic in the morning.", "exampleBn": "সকালে সে ভীষণ প্রাণবন্ত থাকে।"},
                    {"word": "excited", "ipa": "/ɪkˈsaɪtɪd/", "pos": "Adjective", "meaningBn": "আনন্দিত / রোমাঞ্চিত", "exampleEn": "Are you excited about the picnic?", "exampleBn": "পিকনিক নিয়ে তুমি কি রোমাঞ্চিত?"},
                    {"word": "classmate", "ipa": "/ˈklɑːsmeɪt/", "pos": "Noun", "meaningBn": "সহপাঠী", "exampleEn": "Rohan is my best classmate.", "exampleBn": "রোহন আমার সবচেয়ে ভালো সহপাঠী।"}
                ]
            },
            {
                "title": "A Peaceful Morning at Home",
                "titleBn": "বাড়িতে একটি শান্ত সকাল",
                "situation": "সকালে ঘুম থেকে উঠে আবহাওয়া ও পরিবারের অবস্থা বর্ণনা",
                "fullStoryEn": "Today is a sunny morning. The weather is cool and breezy. My father is in the garden with flowers. I am happy and relaxed at home.",
                "fullStoryBn": "আজ একটি রৌদ্রোজ্জ্বল সকাল। আবহাওয়া শীতল ও মৃদু বাতাসযুক্ত। আমার বাবা বাগানে ফুলের সাথে আছেন। আমি বাড়িতে বেশ সুখী ও নিশ্চিন্ত।",
                "breakdown": [
                    {"step": 1, "bnSentence": "আজ একটি রৌদ্রোজ্জ্বল সকাল।", "enSentence": "Today is a sunny morning.", "ipa": "/təˈdeɪ ɪz ə ˈsʌni ˈmɔːnɪŋ/", "bn_pron": "টুডে ইজ আ সানি মর্নিং।", "grammarNote": "দিনের অবস্থা বোঝাতে 'Today is...' ব্যবহৃত হয়।"},
                    {"step": 2, "bnSentence": "আবহাওয়া শীতল ও মৃদু বাতাসযুক্ত।", "enSentence": "The weather is cool and breezy.", "ipa": "/ðə ˈweðər ɪz kuːl ænd ˈbriːzi/", "bn_pron": "দ্য ওয়েদার ইজ কুল অ্যান্ড ব্রিজি।", "grammarNote": "আবহাওয়ার বর্ণনা দিতে 'is' এর পর দুটি Adjective যুক্ত করা হয়েছে।"},
                    {"step": 3, "bnSentence": "আমার বাবা বাগানে আছেন।", "enSentence": "My father is in the garden.", "ipa": "/maɪ ˈfɑːðər ɪz ɪn ðə ˈɡɑːdn/", "bn_pron": "মাই ফাদার ইজ ইন দ্য গার্ডেন।", "grammarNote": "কারো অবস্থান প্রকাশ করতে 'is in the [place]' স্ট্রাকচার ব্যবহার করা হয়।"},
                    {"step": 4, "bnSentence": "আমি বাড়িতে বেশ সুখী ও নিশ্চিন্ত।", "enSentence": "I am happy and relaxed at home.", "ipa": "/aɪ æm ˈhæpi ænd rɪˈlækst æt həʊm/", "bn_pron": "আই অ্যাম হ্যাপি অ্যান্ড রিল্যাক্সড অ্যাট হোম।", "grammarNote": "'I am' এর সাথে মনের প্রশান্ত অবস্থা প্রকাশ করা হয়েছে।"}
                ],
                "expansion": {
                    "level1": {"en": "The weather is nice.", "bn": "আবহাওয়া সুন্দর।", "label": "ধাপ ১: ছোট বাক্য"},
                    "level2": {"en": "The weather is cool and pleasant.", "bn": "আবহাওয়া শীতল ও মনোরম।", "label": "ধাপ ২: বিস্তারিত বিশেষণ"},
                    "level3": {"en": "The weather is cool and pleasant in the garden.", "bn": "বাগানে আবহাওয়া শীতল ও মনোরম।", "label": "ধাপ ৩: অবস্থান যোগ"},
                    "level4": {"en": "Early in the morning, the weather is cool and pleasant in the garden.", "bn": "খুব ভোরে, বাগানে আবহাওয়া শীতল ও মনোরম।", "label": "ধাপ ৪: সময় ও পরিবেশ যোগ"},
                    "techniqueExplanation": "সাধারণ 'nice' শব্দের বদলে 'cool and pleasant' ব্যবহার করুন এবং সময়ের উল্লেখ (Early in the morning) যোগ করুন।"
                },
                "vocabulary": [
                    {"word": "breezy", "ipa": "/ˈbriːzi/", "pos": "Adjective", "meaningBn": "মৃদুমন্দ বাতাসযুক্ত", "exampleEn": "It is a breezy afternoon by the river.", "exampleBn": "নদীর পাড়ে এটি একটি ফুরফুরে বাতাসের বিকেল।"},
                    {"word": "relaxed", "ipa": "/rɪˈlækst/", "pos": "Adjective", "meaningBn": "চিন্তামুক্ত / রিল্যাক্সড", "exampleEn": "I am very relaxed on weekends.", "exampleBn": "ছুটির দিনে আমি বেশ চিন্তামুক্ত থাকি।"},
                    {"word": "sunny", "ipa": "/ˈsʌni/", "pos": "Adjective", "meaningBn": "রৌদ্রোজ্জ্বল", "exampleEn": "Dhaka is bright and sunny today.", "exampleBn": "আজ ঢাকা বেশ উজ্জ্বল ও রৌদ্রোজ্জ্বল।"}
                ]
            },
            {
                "title": "At the Doctor's Clinic",
                "titleBn": "ডাক্তারের চেম্বারে",
                "situation": "শারীরিক অবস্থা ও ডাক্তারের পরামর্শ নিয়ে কথা",
                "fullStoryEn": "Kamal is at the doctor's clinic today. He is a bit unwell and tired. The doctor is polite and experienced. He says Kamal's condition is completely normal.",
                "fullStoryBn": "কামাল আজ ডাক্তারের চেম্বারে আছে। সে কিছুটা অসুস্থ ও ক্লান্ত। ডাক্তার বেশ ভদ্র ও অভিজ্ঞ। তিনি বললেন কামালের অবস্থা সম্পূর্ণ স্বাভাবিক।",
                "breakdown": [
                    {"step": 1, "bnSentence": "কামাল আজ ডাক্তারের চেম্বারে আছে।", "enSentence": "Kamal is at the doctor's clinic today.", "ipa": "/kəˈmɑːl ɪz æt ðə ˈdɒktəz ˈklɪnɪk təˈdeɪ/", "bn_pron": "কামাল ইজ অ্যাট দ্য ডক্টরস ক্লিনিক টুডে।", "grammarNote": "স্থান প্রকাশে 'is at...' বসেছে।"},
                    {"step": 2, "bnSentence": "সে কিছুটা অসুস্থ ও ক্লান্ত।", "enSentence": "He is a bit unwell and tired.", "ipa": "/hiː ɪz ə bɪt ʌnˈwel ænd ˈtaɪəd/", "bn_pron": "হি ইজ আ বিট আনওয়েল অ্যান্ড টায়ার্ড।", "grammarNote": "শারীরিক দুর্বলতা বোঝাতে 'unwell and tired' ব্যবহার করা হয়েছে।"},
                    {"step": 3, "bnSentence": "ডাক্তার বেশ ভদ্র ও অভিজ্ঞ।", "enSentence": "The doctor is polite and experienced.", "ipa": "/ðə ˈdɒktər ɪz pəˈlaɪt ænd ɪkˈspɪəriənst/", "bn_pron": "দ্য ডক্টর ইজ পোলাইট অ্যান্ড এক্সপেরিয়েন্সড।", "grammarNote": "ব্যক্তির গুণ প্রকাশে 'is + Adjective' বসেছে।"},
                    {"step": 4, "bnSentence": "কামালের অবস্থা সম্পূর্ণ স্বাভাবিক।", "enSentence": "Kamal's condition is completely normal.", "ipa": "/kəˈmɑːlz kənˈdɪʃn ɪz kəmˈpliːtli ˈnɔːml/", "bn_pron": "কামালস কন্ডিশন ইজ কমপ্লিটলি নরমাল।", "grammarNote": "অবস্থা প্রকাশে 'is normal' বসেছে।"}
                ],
                "expansion": {
                    "level1": {"en": "He is sick.", "bn": "সে অসুস্থ।", "label": "ধাপ ১: সাধারণ বাক্য"},
                    "level2": {"en": "He is tired and unwell.", "bn": "সে ক্লান্ত এবং অসুস্থ।", "label": "ধাপ ২: বিস্তারিত অনুভূতি"},
                    "level3": {"en": "He is slightly tired and unwell due to the cold weather.", "bn": "ঠান্ডা আবহাওয়ার কারণে সে কিছুটা ক্লান্ত ও অসুস্থ।", "label": "ধাপ ৩: কারণ যোগ (+ due to)"},
                    "level4": {"en": "Fortunately, he is only slightly tired and unwell due to the cold weather.", "bn": "সৌভাগ্যবশত, ঠান্ডা আবহাওয়ার কারণে সে কেবল সামান্য ক্লান্ত ও অসুস্থ।", "label": "ধাপ ৪: চমৎকার বাক্য সূচনা (+ Adverb)"},
                    "techniqueExplanation": "বাক্যের শুরুতে 'Fortunately' বা 'Unfortunately' যোগ করলে ইংরেজির মান আন্তর্জাতিক মানের হয়ে ওঠে।"
                },
                "vocabulary": [
                    {"word": "unwell", "ipa": "/ʌnˈwel/", "pos": "Adjective", "meaningBn": "অসুস্থ / শরীর খারাপ", "exampleEn": "She is feeling unwell today.", "exampleBn": "আজ তার শরীর কিছুটা খারাপ লাগছে।"},
                    {"word": "experienced", "ipa": "/ɪkˈspɪəriənst/", "pos": "Adjective", "meaningBn": "অভিজ্ঞ", "exampleEn": "Our manager is highly experienced.", "exampleBn": "আমাদের ম্যানেজার অত্যন্ত অভিজ্ঞ।"},
                    {"word": "condition", "ipa": "/kənˈdɪʃn/", "pos": "Noun", "meaningBn": "অবস্থা / শারীরিক পরিস্থিতি", "exampleEn": "His health condition is good now.", "exampleBn": "তার স্বাস্থ্যের অবস্থা এখন ভালো।"}
                ]
            },
            {
                "title": "Meeting a Polite Shopkeeper",
                "titleBn": "একজন ভদ্র দোকানদারের সাথে দেখা",
                "situation": "দোকানে কেনাকাটা করার সময় দোকানদারের ব্যবহার ও পণ্যের মান",
                "fullStoryEn": "This grocery shop is very clean. The shopkeeper is honest and courteous. The mangoes are fresh and sweet. Customers are always satisfied with his items.",
                "fullStoryBn": "এই মুদি দোকানটি খুবই পরিষ্কার। দোকানদার সৎ ও বিনয়ী। আমগুলো তাজা ও মিষ্টি। ক্রেতারা সবসময় তার পণ্যে সন্তুষ্ট।",
                "breakdown": [
                    {"step": 1, "bnSentence": "এই মুদি দোকানটি খুবই পরিষ্কার।", "enSentence": "This grocery shop is very clean.", "ipa": "/ðɪs ˈɡrəʊsəri ʃɒp ɪz ˈveri kliːn/", "bn_pron": "দিস গ্রোসারি শপ ইজ ভেরি ক্লিন।", "grammarNote": "দোকানের অবস্থা বর্ণনায় 'is clean' বসেছে।"},
                    {"step": 2, "bnSentence": "দোকানদার সৎ ও বিনয়ী।", "enSentence": "The shopkeeper is honest and courteous.", "ipa": "/ðə ˈʃɒpˌkiːpər ɪz ˈɒnɪst ænd ˈkɜːtiəs/", "bn_pron": "দ্য শপকিপার ইজ অনেস্ট অ্যান্ড কার্টিয়াস।", "grammarNote": "ব্যক্তিত্ব বর্ণনায় 'honest and courteous' বসেছে।"},
                    {"step": 3, "bnSentence": "আমগুলো তাজা ও মিষ্টি।", "enSentence": "The mangoes are fresh and sweet.", "ipa": "/ðə ˈmæŋɡəʊz ɑːr freʃ ænd swiːt/", "bn_pron": "দ্য ম্যাঙ্গোজ আর ফ্রেশ অ্যান্ড সুইট।", "grammarNote": "বহুবচন (mangoes) হওয়ায় 'are' বসেছে।"},
                    {"step": 4, "bnSentence": "ক্রেতারা সবসময় তার পণ্যে সন্তুষ্ট।", "enSentence": "Customers are always satisfied with his items.", "ipa": "/ˈkʌstəməz ɑːr ˈɔːlweɪz ˈsætɪsfaɪd wɪð hɪz ˈaɪtəmz/", "bn_pron": "কাস্টমার্স আর অলওয়েজ স্যাটিসফাইড উইথ হিজ আইটেমস।", "grammarNote": "'satisfied with' একটি নির্দিষ্ট প্রিপজিশনাল ব্যবহার।"}
                ],
                "expansion": {
                    "level1": {"en": "The fruits are good.", "bn": "ফলগুলো ভালো।", "label": "ধাপ ১: সাধারণ বাক্য"},
                    "level2": {"en": "The fruits are remarkably fresh and sweet.", "bn": "ফলগুলো লক্ষণীয়ভাবে তাজা ও মিষ্টি।", "label": "ধাপ ২: চমৎকার বর্ণনাবাচক শব্দ"},
                    "level3": {"en": "The fruits in this shop are remarkably fresh and sweet.", "bn": "এই দোকানের ফলগুলো লক্ষণীয়ভাবে তাজা ও মিষ্টি।", "label": "ধাপ ৩: সুনির্দিষ্ট স্থান"},
                    "level4": {"en": "Because of natural sourcing, the fruits in this shop are remarkably fresh and sweet.", "bn": "প্রাকৃতিক সংগ্রহের কারণে, এই দোকানের ফলগুলো লক্ষণীয়ভাবে তাজা ও মিষ্টি।", "label": "ধাপ ৪: কারণ দর্শিয়ে সমৃদ্ধ বাক্য"},
                    "techniqueExplanation": "কারণ যোগ করার জন্য 'Because of + Noun phrase' যুক্ত করে সেন্টেন্সটি বহুগুণে আকর্ষণীয় করা হয়েছে।"
                },
                "vocabulary": [
                    {"word": "courteous", "ipa": "/ˈkɜːtiəs/", "pos": "Adjective", "meaningBn": "ভদ্র ও সদালাপী", "exampleEn": "The hotel staff are extremely courteous.", "exampleBn": "হোটেলের কর্মীরা অত্যন্ত মার্জিত ও বিনয়ী।"},
                    {"word": "satisfied", "ipa": "/ˈsætɪsfaɪd/", "pos": "Adjective", "meaningBn": "সন্তুষ্ট", "exampleEn": "Are you satisfied with this answer?", "exampleBn": "তুমি কি এই উত্তরে সন্তুষ্ট?"},
                    {"word": "honest", "ipa": "/ˈɒnɪst/", "pos": "Adjective", "meaningBn": "সৎ", "exampleEn": "He is an honest businessman.", "exampleBn": "তিনি একজন সৎ ব্যবসায়ী।"}
                ]
            },
            {
                "title": "A Productive Afternoon at Office",
                "titleBn": "অফিসে একটি ফলপ্রসূ বিকেল",
                "situation": "অফিসের কাজের পরিবেশ ও সহকর্মীদের সক্রিয়তা",
                "fullStoryEn": "Our office is busy this afternoon. The manager is focused on the new report. The team members are collaborative and serious. We are ready for tomorrow's big meeting.",
                "fullStoryBn": "আজ বিকেলে আমাদের অফিস বেশ ব্যস্ত। ম্যানেজার নতুন প্রতিবেদনের প্রতি মনোযোগী। দলের সদস্যরা সহযোগী ও কাজের প্রতি যত্নশীল। আমরা আগামীকালের বড় মিটিংয়ের জন্য প্রস্তুত।",
                "breakdown": [
                    {"step": 1, "bnSentence": "আজ বিকেলে আমাদের অফিস বেশ ব্যস্ত।", "enSentence": "Our office is busy this afternoon.", "ipa": "/ˈaʊər ˈɒfɪs ɪz ˈbɪzi ðɪs ˌɑːftəˈnuːn/", "bn_pron": "আওয়ার অফিস ইজ বিজি দিস আফটারনুন।", "grammarNote": "অফিসের কর্মব্যস্ততা বোঝাতে 'is busy' ব্যবহার করা হয়েছে।"},
                    {"step": 2, "bnSentence": "ম্যানেজার নতুন প্রতিবেদনের প্রতি মনোযোগী।", "enSentence": "The manager is focused on the new report.", "ipa": "/ðə ˈmænɪdʒər ɪz ˈfəʊkəst ɒn ðə njuː rɪˈpɔːt/", "bn_pron": "দ্য ম্যানেজার ইজ ফোকাসড অন দ্য নিউ রিপোর্ট।", "grammarNote": "'focused on' মানে কোনো বিষয়ে নিবিষ্ট থাকা।"},
                    {"step": 3, "bnSentence": "দলের সদস্যরা সহযোগী ও কাজের প্রতি যত্নশীল।", "enSentence": "The team members are collaborative and serious.", "ipa": "/ðə tiːm ˈmembəz ɑːr kəˈlæbərətɪv ænd ˈsɪəriəs/", "bn_pron": "দ্য টিম মেম্বারস আর কোলাবোরেটিভ অ্যান্ড সিরিয়াস।", "grammarNote": "বহুবচন হওয়ায় 'are' বসেছে।"},
                    {"step": 4, "bnSentence": "আমরা আগামীকালের বড় মিটিংয়ের জন্য প্রস্তুত।", "enSentence": "We are ready for tomorrow's big meeting.", "ipa": "/wiː ɑːr ˈredi fɔːr təˈmɒrəʊz bɪɡ ˈmiːtɪŋ/", "bn_pron": "উই আর রেডি ফর টুমরোজ বিগ মিটিং।", "grammarNote": "প্রস্তুতি বোঝাতে 'are ready for...' ব্যবহৃত হয়।"}
                ],
                "expansion": {
                    "level1": {"en": "We are ready.", "bn": "আমরা প্রস্তুত।", "label": "ধাপ ১: ৩ শব্দের বেস বাক্য"},
                    "level2": {"en": "We are completely ready.", "bn": "আমরা পুরোপুরি প্রস্তুত।", "label": "ধাপ ২: তীব্রতা যোগ (+ Adverb)"},
                    "level3": {"en": "We are completely ready for the client presentation.", "bn": "আমরা ক্লায়েন্ট প্রেজেন্টেশনের জন্য পুরোপুরি প্রস্তুত।", "label": "ধাপ ৩: কাজের বিষয় যোগ"},
                    "level4": {"en": "With thorough preparation, we are completely ready for the client presentation.", "bn": "পুঙ্খানুপুঙ্খ প্রস্তুতির সাথে, আমরা ক্লায়েন্ট প্রেজেন্টেশনের জন্য পুরোপুরি প্রস্তুত।", "label": "ধাপ ৪: পেশাদার প্রারম্ভ যোগ"},
                    "techniqueExplanation": "পেশাদার পরিবেশে কথা বলার জন্য শুরুতে 'With thorough preparation' এর মতো শক্তিশালী ফ্রেজ ব্যবহার দারুণ ফল দেয়।"
                },
                "vocabulary": [
                    {"word": "collaborative", "ipa": "/kəˈlæbərətɪv/", "pos": "Adjective", "meaningBn": "পারস্পরিক সহযোগিতাপূর্ণ", "exampleEn": "Our workplace is very collaborative.", "exampleBn": "আমাদের কর্মক্ষেত্র খুবই সহযোগিতাপূর্ণ।"},
                    {"word": "focused", "ipa": "/ˈfəʊkəst/", "pos": "Adjective", "meaningBn": "মনোযোগী / একাগ্র", "exampleEn": "She is deeply focused on her studies.", "exampleBn": "সে তার পড়াশোনায় গভীরভাবে একাগ্র।"},
                    {"word": "productive", "ipa": "/prəˈdʌktɪv/", "pos": "Adjective", "meaningBn": "ফলপ্রসূ / উৎপাদনশীল", "exampleEn": "Today was a productive day.", "exampleBn": "আজকের দিনটি বেশ ফলপ্রসূ ছিল।"}
                ]
            }
        ],
        "challenges": [
            {
                "id": "challenge-1",
                "storyNumber": 6,
                "title": "Practice 1: My Best Friend's New Job",
                "titleBn": "অনুশীলন ১: বন্ধুর নতুন চাকরি",
                "situation": "বন্ধু একটি শীর্ষস্থানীয় কোম্পানিতে চাকরি পেয়েছে, তার আনন্দ ও অনুভূতি নিয়ে গল্প সম্পূর্ণ করুন।",
                "starterEn": "My best friend Fahim is on cloud nine today...",
                "starterBn": "আমার প্রিয় বন্ধু ফাহিম আজ ভীষণ আনন্দিত...",
                "challengePlotBn": "ফাহিম কেন এত খুশি? কারণ সে একটি আন্তর্জাতিক কোম্পানিতে সফটওয়্যার ইঞ্জিনিয়ার হিসেবে সুযোগ পেয়েছে। তার বাবা-মা খুবই গর্বিত। সে আগামী সোমবার থেকেই কাজ শুরু করার জন্য প্রস্তুত।",
                "hints": {
                    "keywords": [
                        {"word": "thrilled / on cloud nine", "meaningBn": "অত্যন্ত আনন্দিত"},
                        {"word": "proud of", "meaningBn": "গর্বিত"},
                        {"word": "eager to", "meaningBn": "আগ্রহী"},
                        {"word": "multinational", "meaningBn": "বহুজাতিক কোম্পানি"},
                        {"word": "confident", "meaningBn": "আত্মবিশ্বাসী"}
                    ],
                    "grammarClue": "এখানে শুধুমাত্র Present To-Be (am/is/are) ব্যবহার করুন। যেমন: He is proud, His parents are happy, He is ready.",
                    "connectors": ["Because", "In fact", "Therefore", "Moreover"]
                },
                "modelSolutionEn": "My best friend Fahim is on cloud nine today. He is now a software engineer at a reputed multinational software company. His parents are very proud of his hard work. Fahim is totally confident and ready to begin his professional journey next Monday.",
                "modelSolutionBn": "আমার প্রিয় বন্ধু ফাহিম আজ ভীষণ আনন্দিত। সে এখন একটি স্বনামধন্য বহুজাতিক সফটওয়্যার কোম্পানির সফটওয়্যার ইঞ্জিনিয়ার। তার বাবা-মা তার পরিশ্রমে দারুণ গর্বিত। ফাহিম পুরোপুরি আত্মবিশ্বাসী এবং আগামী সোমবার তার পেশাদার যাত্রা শুরু করতে প্রস্তুত।",
                "practiceExpansionTip": "ছোট করে 'He is happy' না লিখে 'He is now a software engineer...' দিয়ে বিস্তার করুন।"
            },
            {
                "id": "challenge-2",
                "storyNumber": 7,
                "title": "Practice 2: The New Neighborhood",
                "titleBn": "অনুশীলন ২: নতুন আবাসিক এলাকা",
                "situation": "নতুন একটি এলাকায় বাসা নেওয়া হয়েছে, পরিবেশ ও প্রতিবেশীদের চমৎকার ব্যবহার বর্ণনা করুন।",
                "starterEn": "Our new neighborhood is quiet and peaceful...",
                "starterBn": "আমাদের নতুন এলাকাটি বেশ শান্ত ও মনোরম...",
                "challengePlotBn": "রাস্তাগুলো প্রশস্ত ও পরিষ্কার। কাছাকাছি একটি সুন্দর খেলার মাঠ ও লাইব্রেরি রয়েছে। প্রতিবেশীরা বেশ অমায়িক ও সাহায্যকারী। আমরা এখানে এসে খুবই স্বাচ্ছন্দ্যবোধ করছি।",
                "hints": {
                    "keywords": [
                        {"word": "peaceful", "meaningBn": "শান্তিপূর্ণ"},
                        {"word": "spacious", "meaningBn": "প্রশস্ত / খোলামেলা"},
                        {"word": "welcoming", "meaningBn": "আন্তরিক / গ্রহণীয়"},
                        {"word": "convenient", "meaningBn": "সুবিধাজনক"},
                        {"word": "comfortable", "meaningBn": "আরামদায়ক / স্বাচ্ছন্দ্যময়"}
                    ],
                    "grammarClue": "রাস্তা, পার্ক এবং মানুষের গুণ প্রকাশে 'is' এবং 'are' ব্যবহার করুন।",
                    "connectors": ["Additionally", "Not only that", "Overall"]
                },
                "modelSolutionEn": "Our new neighborhood is quiet and peaceful. The streets are wide, green, and spotless. The neighbors are genuinely welcoming and courteous. Overall, we are extremely comfortable in this new environment.",
                "modelSolutionBn": "আমাদের নতুন এলাকাটি বেশ শান্ত ও মনোরম। রাস্তাগুলো প্রশস্ত, সবুজ ও পরিচ্ছন্ন। প্রতিবেশীরা আন্তরিকভাবেই অমায়িক ও বিনয়ী। সামগ্রিকভাবে, এই নতুন পরিবেশে আমরা অত্যন্ত স্বাচ্ছন্দ্য বোধ করছি।",
                "practiceExpansionTip": "গুণবাচক শব্দগুলো যেমন 'wide, green, and spotless' একসাথে ব্যবহার করলে বর্ণনা প্রাণবন্ত হয়ে ওঠে।"
            },
            {
                "id": "challenge-3",
                "storyNumber": 8,
                "title": "Practice 3: Overcoming English Speaking Fear",
                "titleBn": "অনুশীলন ৩: ইংরেজি বলার ভয় জয়",
                "situation": "আগে ইংরেজিতে কথা বলতে জড়তা কাজ করত, কিন্তু নিয়মিত অনুশীলনে এখন কেমন আত্মবিশ্বাস এসেছে তা নিয়ে লিখুন।",
                "starterEn": "At first, Spoken English was intimidating for me...",
                "starterBn": "শুরুতে স্পোকেন ইংলিশ আমার কাছে কিছুটা ভীতিকর ছিল...",
                "challengePlotBn": "কিন্তু এখন আমার প্রতিদিনের অনুশীলন খুবই নিয়মিত। ইংরেজি বাক্যগুলো এখন আমার কাছে সহজ ও পরিচিত। আমার শিক্ষকের পরামর্শগুলো খুবই কার্যকরী। আমি এখন স্টেজে কথা বলতে পুরোপুরি নির্ভীক।",
                "hints": {
                    "keywords": [
                        {"word": "hesitant", "meaningBn": "দ্বিধান্বিত / জড়তাপূর্ণ"},
                        {"word": "consistent", "meaningBn": "ধারাবাহিক / নিয়মিত"},
                        {"word": "fearless", "meaningBn": "ভয়হীন / নির্ভীক"},
                        {"word": "effective", "meaningBn": "কার্যকরী"},
                        {"word": "optimistic", "meaningBn": "আশাবাদী"}
                    ],
                    "grammarClue": "বর্তমান মনের অবস্থা বোঝাতে 'I am confident', 'Rules are simple' ইত্যাদি ব্যবহার করুন।",
                    "connectors": ["However", "Day by day", "As a result"]
                },
                "modelSolutionEn": "At first, Spoken English was intimidating for me. However, my daily speaking practice is now very consistent. The sentences are simple, and my mindset is completely positive. Today, I am fearless whenever I speak with others in English.",
                "modelSolutionBn": "শুরুতে স্পোকেন ইংলিশ আমার কাছে ভীতিকর ছিল। তবে, আমার দৈনন্দিন স্পোকেন প্র্যাকটিস এখন খুবই নিয়মিত। বাক্যগুলো সহজ এবং আমার মানসিকতা সম্পূর্ণ ইতিবাচক। আজ যখনই অন্যদের সাথে ইংরেজিতে কথা বলি, আমি পুরোপুরি ভয়হীন।",
                "practiceExpansionTip": "'I am not afraid' এর চেয়ে 'I am fearless and positive' অনেক বেশি প্রভাবশালী শোনায়।"
            },
            {
                "id": "challenge-4",
                "storyNumber": 9,
                "title": "Practice 4: A Weekend Hobby",
                "titleBn": "অনুশীলন ৪: ছুটির দিনের শখ (বাগান করা)",
                "situation": "ছুটির দিনে ছাদে বাগান করার ভালোলাগা ও পরিবেশের বর্ণনা।",
                "starterEn": "Rooftop gardening is my favorite pastime...",
                "starterBn": "ছাদবাগান করা আমার সবচেয়ে প্রিয় শখ...",
                "challengePlotBn": "গাছগুলো সবুজ ও তাজা। গোলাপ এবং জবা ফুলগুলো চমৎকার রঙিন। বিকেলে ছাদের আবহাওয়া বেশ মনোরম। গাছের পরিচর্যা করে মন খুব শান্ত ও আনন্দিত থাকে।",
                "hints": {
                    "keywords": [
                        {"word": "pastime", "meaningBn": "অবসর বিনোদন / শখ"},
                        {"word": "vibrant", "meaningBn": "উজ্জ্বল ও সতেজ"},
                        {"word": "fragrant", "meaningBn": "সুগন্ধিময়"},
                        {"word": "therapeutic", "meaningBn": "মানসিক প্রশান্তি দেয় এমন"},
                        {"word": "refreshing", "meaningBn": "সতেজতাদায়ক"}
                    ],
                    "grammarClue": "গাছপালা ও পরিবেশের গুণ বোঝাতে 'are vibrant', 'is fragrant' ব্যবহার করুন।",
                    "connectors": ["Especially", "For this reason", "Truly"]
                },
                "modelSolutionEn": "Rooftop gardening is my favorite pastime. The plants are lush green, and the roses are fragrant and vibrant. The gentle breeze in the evening is truly refreshing. It is a wonderful source of mental peace for me.",
                "modelSolutionBn": "ছাদবাগান করা আমার সবচেয়ে প্রিয় শখ। গাছগুলো ঘন সবুজ এবং গোলাপগুলো সুগন্ধি ও উজ্জ্বল। বিকেলের মৃদু বাতাস সত্যিই সতেজতাদায়ক। এটি আমার জন্য এক অপার মানসিক প্রশান্তির উৎস।",
                "practiceExpansionTip": "'It is good' না বলে 'It is a wonderful source of mental peace' বলুন।"
            },
            {
                "id": "challenge-5",
                "storyNumber": 10,
                "title": "Practice 5: Preparing for an Interview",
                "titleBn": "অনুশীলন ৫: চাকরির ইন্টারভিউয়ের প্রস্তুতি",
                "situation": "আগামীকাল সকালে ইন্টারভিউ, নিজের মানসিক প্রস্তুতি ও আত্মবিশ্বাস প্রকাশ করুন।",
                "starterEn": "Tomorrow morning is a crucial milestone for my career...",
                "starterBn": "আগামীকাল সকালটি আমার ক্যারিয়ারের জন্য একটি গুরুত্বপূর্ণ মুহূর্ত...",
                "challengePlotBn": "আমার সিভি এবং সার্টিফিকেট ফাইলগুলো সব প্রস্তুত। আমার পোশাক পরিপাটি। যদিও সামান্য উত্তেজনা আছে, তবুও আমি শান্ত ও আত্মবিশ্বাসী। আমি সফল হওয়ার ব্যাপারে অত্যন্ত আশাবাদী।",
                "hints": {
                    "keywords": [
                        {"word": "crucial", "meaningBn": "অত্যন্ত গুরুত্বপূর্ণ"},
                        {"word": "organized", "meaningBn": "পরিপাটি ও সাজানো"},
                        {"word": "calm and composed", "meaningBn": "শান্ত ও স্থির"},
                        {"word": "hopeful / optimistic", "meaningBn": "আশাবাদী"},
                        {"word": "prepared", "meaningBn": "প্রস্তুত"}
                    ],
                    "grammarClue": "'I am calm', 'Everything is ready', 'Documents are in order' ইত্যাদি To-Be স্ট্রাকচার ব্যবহার করুন।",
                    "connectors": ["Naturally", "Yet", "In conclusion"]
                },
                "modelSolutionEn": "Tomorrow morning is a crucial milestone for my career. All my academic certificates and CV are neatly organized. Naturally, a little nervous energy is present, but I am calm and composed. I am optimistic about achieving a positive outcome.",
                "modelSolutionBn": "আগামীকাল সকালটি আমার ক্যারিয়ারের জন্য একটি অত্যন্ত গুরুত্বপূর্ণ মুহূর্ত। আমার সকল শিক্ষাগত সনদ ও সিভি পরিপাটিভাবে সাজানো আছে। স্বভাবতই কিছুটা উত্তেজনা থাকলেও, আমি শান্ত ও স্থির আছি। আমি একটি ইতিবাচক ফলাফল অর্জনের ব্যাপারে ভীষণ আশাবাদী।",
                "practiceExpansionTip": "পরিস্থিতির ভারসাম্য প্রকাশ করতে 'a little nervous, but calm and composed' ফ্রেজটি ব্যবহার করুন।"
            }
        ]
    }
]

print("Script template ready.")
