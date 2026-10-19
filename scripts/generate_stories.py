# -*- coding: utf-8 -*-
"""
Generates src/lib/spokenLessonStoriesData.ts with 10 stories per lesson for all 28 lessons.
Stories 1-5: Full Guided Story with Step-by-Step Bangla to English breakdown, Sentence Expansion, and Key Vocab.
Stories 6-10: Guided Practice Challenges with Starter, Bangla Plot Hints, Keyword Bank, Grammar Clues, Connectors, Model Solution, and Expansion Tip.
"""
import os
import json

ROOT_DIR = r"E:\antigravity\ILTES"
TARGET_FILE = os.path.join(ROOT_DIR, "src", "lib", "spokenLessonStoriesData.ts")

# 28 Lessons definitions
LESSON_THEMES = [
    ("lesson-01-present-to-be", "Present To-Be (am/is/are)", "পরিচয়, বর্তমান অবস্থা ও অনুভূতি", "am, is, are"),
    ("lesson-02-past-to-be", "Past To-Be (was/were)", "অতীতের অবস্থা, স্মৃতি ও অতীত পরিচয়", "was, were"),
    ("lesson-03-have-has", "Possession: have / has (Have got)", "মালিকানা, অধিকার, অসুস্থতা ও সম্পর্ক", "have, has"),
    ("lesson-04-there-is-are", "Existence: There is / There are", "কোনো স্থানে কিছু থাকা বা থাকা না থাকা", "there is, there are"),
    ("lesson-05-present-simple", "Present Simple: Routine & Habits", "দৈনন্দিন অভ্যাস, রুটিন ও চিরন্তন সত্য", "do, does"),
    ("lesson-06-present-continuous", "Present Continuous: Right Now", "এই মুহূর্তে চোখের সামনে চলমান কাজ", "am/is/are + V-ing"),
    ("lesson-07-past-simple", "Past Simple: Finished Events", "অতীতের সমাপ্ত ঘটনা ও গতকালের গল্প", "did, V2"),
    ("lesson-08-present-perfect", "Present Perfect: have / has + V3", "কাজ শেষ কিন্তু তার প্রভাব বা অভিজ্ঞতা বর্তমান", "have/has + V3"),
    ("lesson-09-future-simple", "Future: will vs be going to", "ভবিষ্যত পরিকল্পনা ও তাৎক্ষণিক সিদ্ধান্ত", "will, be going to"),
    ("lesson-10-can-could", "Ability & Politeness: can vs could", "সক্ষমতা, সম্ভাবনা ও মার্জিত অনুরোধ", "can, could"),
    ("lesson-11-should-must", "Advice & Obligation: should vs must", "উপদেশ, করণীয় ও অবশ্য কর্তব্য", "should, must, have to"),
    ("lesson-12-would-like", "Polite Offers & Desires: would like / mind", "ভদ্র প্রস্তাব, চা-কফি অফার ও বিনম্র চাওয়া", "would like, would you mind"),
    ("lesson-13-used-to", "Habits: used to vs be used to", "অতীতের নিয়মিত অভ্যাস ও নতুন পরিস্থিতিতে অভ্যস্ততা", "used to, be used to"),
    ("lesson-14-want-to", "Desires: want to (wanna) vs feel like", "ইচ্ছা, আকাঙ্ক্ষা ও তাৎক্ষণিক মন চাওয়া", "want to, feel like"),
    ("lesson-15-it-takes", "Time & Duration: It takes to do", "কোনো কাজ করতে সময় ও শ্রম পরিমাপ", "it takes, it took"),
    ("lesson-16-present-perfect-continuous", "Present Perfect Continuous: have/has been + V-ing", "অতীতে শুরু হয়ে এখনো চলা কাজ (Since & For)", "have/has been + V-ing"),
    ("lesson-17-tense-compare-continuous-perfect", "Continuous vs Perfect Continuous", "মুহূর্তের কাজ বনাম ২ ঘণ্টা ধরে চলা কাজের পার্থক্য", "am doing vs have been doing"),
    ("lesson-18-tense-compare-present-perfect-past-simple", "Present Perfect vs Past Simple", "নির্দিষ্ট অতীত (yesterday) বনাম বর্তমান প্রভাব (I have seen)", "have done vs did"),
    ("lesson-19-past-continuous", "Past Continuous: was / were + V-ing", "অতীতে কোনো কাজ চলার সময়ে অন্য কিছু ঘটা (When / While)", "was/were + V-ing"),
    ("lesson-20-past-perfect-and-comparison", "Past Perfect & Comparison (had + V3)", "অতীতের দুটি কাজের মধ্যে আগের কাজ (Before / After)", "had + V3 vs did"),
    ("lesson-21-past-perfect-continuous", "Past Perfect Continuous: had been + V-ing", "অতীতের নির্দিষ্ট সময়ের আগ পর্যন্ত কোনো কাজ কতক্ষণ চলছিল", "had been + V-ing"),
    ("lesson-22-future-continuous", "Future Continuous: will be + V-ing", "ভবিষ্যতে কোনো নির্দিষ্ট সময়ে কিছু চলতে থাকবে", "will be + V-ing"),
    ("lesson-23-future-perfect-and-continuous", "Future Perfect: will have + V3", "ভবিষ্যতের নির্দিষ্ট সময়ের মধ্যে কোনো কাজ সম্পন্ন হয়ে থাকা", "will have + V3"),
    ("lesson-24-complete-modals", "All Modals Mastery (May, Might, Must, Ought to)", "সম্ভাবনা, নিশ্চয়তা, অনুমতি ও নৈতিক দায়িত্ব", "may, might, must, ought to"),
    ("lesson-25-be-being-been", "The Master Guide: Be, Being, Been", "হওয়া (Be), হওয়া অবস্থায় (Being), হয়েছে/ঘুরে আসা (Been)", "be, being, been"),
    ("lesson-26-conditionals", "Real-Life Conditionals (0, 1st, 2nd & 3rd)", "শর্তমূলক বাস্তব ও কাল্পনিক বাক্যসমূহ", "If + condition"),
    ("lesson-27-causative-verbs", "Causative Verbs: Make, Let, Have, Get & Help", "কাউকে দিয়ে কোনো কাজ করানো বা করার সুযোগ দেওয়া", "make, let, have, get, help"),
    ("lesson-28-passive-speaking", "Passive Voice in Speaking: am/is/are + V3", "স্পোকেন ইংলিশে যখন কাজের শিকার বা ফলাফল প্রধান", "be + V3")
]

# Daily relatable story archetypes for guided stories (1 to 5)
GUIDED_STORY_TEMPLATES = [
    {
        "title": "Morning Routine and A Cup of Tea",
        "titleBn": "সকালের রুটিন ও এক কাপ চা",
        "situation": "সকালে ঘুম থেকে ওঠা এবং পরিবারের সাথে চা খাওয়ার অনুভূতি",
        "storyEn": "Every morning brings a fresh start. I enjoy drinking hot milk tea on our balcony. The cool morning breeze is very refreshing. It gives me endless energy for the entire day.",
        "storyBn": "প্রতিটি সকাল নিয়ে আসে এক নতুন সূচনা। আমি আমাদের বারান্দায় বসে গরম দুধ চা খেতে দারুণ পছন্দ করি। সকালের স্নিগ্ধ বাতাস ভীষণ সতেজতাদায়ক। এটি আমাকে পুরো দিনের জন্য অফুরন্ত শক্তি জোগায়।",
        "sentences": [
            ("Every morning brings a fresh start.", "প্রতিটি সকাল নিয়ে আসে এক নতুন সূচনা।", "/ˈevri ˈmɔːnɪŋ brɪŋz ə freʃ stɑːt/", "এভরি মর্নিং ব্রিংস আ ফ্রেশ স্টার্ট।", "সাধারণ সত্য বোঝাতে Present Simple এ 'brings' বসেছে।"),
            ("I enjoy drinking hot milk tea on our balcony.", "আমি আমাদের বারান্দায় বসে গরম দুধ চা খেতে পছন্দ করি।", "/aɪ ɪnˈdʒɔɪ ˈdrɪŋkɪŋ hɒt mɪlk tiː ɒn ˈaʊə ˈbælkəni/", "আই এনজয় ড্রিংকিং হট মিল্ক টি অন আওয়ার ব্যালকনি।", "'enjoy' এর পর পরবর্তী ভার্বের সাথে -ing যুক্ত হয় (drinking)।"),
            ("The cool morning breeze is very refreshing.", "সকালের স্নিগ্ধ বাতাস ভীষণ সতেজতাদায়ক।", "/ðə kuːl ˈmɔːnɪŋ briːz ɪz ˈveri rɪˈfreʃɪŋ/", "দ্য কুল মর্নিং ব্রিজ ইজ ভেরি রিফ্রেশিং।", "বাতাসের গুণ বর্ণনা করতে 'is refreshing' বসেছে।"),
            ("It gives me endless energy for the entire day.", "এটি আমাকে পুরো দিনের জন্য অফুরন্ত শক্তি জোগায়।", "/ɪt ɡɪvz miː ˈendləs ˈenədʒi fɔːr ði ɪnˈtaɪə deɪ/", "ইট গিভস মি এন্ডলেস এনার্জি ফর দি এনটায়ার ডে।", "'It' এর সাথে Verb এ 'gives' এবং পরিমাপ হিসেবে 'endless energy' বসেছে।")
        ],
        "baseSmall": "I drink tea.",
        "baseSmallBn": "আমি চা খাই।",
        "expL2": "I drink hot milk tea on the balcony.",
        "expL2Bn": "আমি বারান্দায় বসে গরম দুধ চা খাই।",
        "expL3": "I drink hot milk tea on the balcony with my family every morning.",
        "expL3Bn": "আমি প্রতিদিন সকালে আমার পরিবারের সাথে বারান্দায় গরম দুধ চা খাই।",
        "expL4": "To welcome a productive new day, I drink hot milk tea on the balcony with my family every morning.",
        "expL4Bn": "একটি ফলপ্রসূ নতুন দিনকে স্বাগত জানাতে, আমি প্রতিদিন সকালে আমার পরিবারের সাথে বারান্দায় গরম দুধ চা খাই।",
        "explanation": "ধাপ ১: মূল বেস বাক্য (Subject + Verb)। ধাপ ২: স্থান যোগ (on the balcony)। ধাপ ৩: কার সাথে ও কখন যোগ (with family, every morning)। ধাপ ৪: চমৎকার উদ্দেশ্য যোগ (To welcome a productive new day...)। এভাবেই সাধারণ ৩ শব্দের বাক্যকে আকর্ষণীয় বড় বাক্যে রূপান্তর করা যায়।",
        "vocab": [
            ("refreshing", "/rɪˈfreʃɪŋ/", "Adjective", "সতেজতাদায়ক / উদ্দীপক", "A cold shower is very refreshing in summer.", "গ্রীষ্মকালে ঠান্ডা পানিতে গোসল ভীষণ সতেজতাদায়ক।"),
            ("balcony", "/ˈbælkəni/", "Noun", "বারান্দা", "We have lovely plants on our balcony.", "আমাদের বারান্দায় সুন্দর গাছপালা আছে।"),
            ("productive", "/prəˈdʌktɪv/", "Adjective", "ফলপ্রসূ / কর্মময়", "Let's make today a productive day.", "চলো আজকের দিনটিকে একটি ফলপ্রসূ দিন বানাই।"),
            ("endless", "/ˈendləs/", "Adjective", "অফুরন্ত / অন্তহীন", "A mother has endless love for her children.", "সন্তানের প্রতি মায়ের থাকে অফুরন্ত ভালোবাসা।")
        ]
    },
    {
        "title": "A Friendly Chat with an Old Colleague",
        "titleBn": "পুরোনো সহকর্মীর সাথে একটি অমায়িক আড্ডা",
        "situation": "অনেকদিন পর কফি শপে পুরোনো সহকর্মীর সাথে দেখা হওয়া",
        "storyEn": "Yesterday I met my old colleague at a quiet café. We talked about our college memories and new career goals. His advice was deeply encouraging for me. It is truly wonderful to stay connected with true friends.",
        "storyBn": "গতকাল একটি নিরিবিলি ক্যাফেতে আমার পুরোনো সহকর্মীর সাথে দেখা হয়েছিল। আমরা আমাদের কলেজের স্মৃতি ও নতুন ক্যারিয়ারের লক্ষ্য নিয়ে কথা বলেছিলাম। তার পরামর্শ আমার জন্য ভীষণ অনুপ্রেরণাদায়ক ছিল। প্রকৃত বন্ধুদের সাথে যোগাযোগ রাখা সত্যিই চমৎকার।",
        "sentences": [
            ("Yesterday I met my old colleague at a quiet café.", "গতকাল একটি নিরিবিলি ক্যাফেতে আমার পুরোনো সহকর্মীর সাথে দেখা হয়েছিল।", "/ˈjestədeɪ aɪ met maɪ əʊld ˈkɒliːɡ æt ə ˈkwaɪət kæfeɪ/", "ইয়েস্টারডে আই মেট মাই ওল্ড কলিগ অ্যাট আ কোয়ায়েট ক্যাফে।", "অতীত ঘটনা হওয়ায় meet এর V2 'met' এবং সময় 'Yesterday' বসেছে।"),
            ("We talked about our college memories and new career goals.", "আমরা আমাদের কলেজের স্মৃতি ও নতুন ক্যারিয়ারের লক্ষ্য নিয়ে কথা বলেছিলাম।", "/wiː tɔːkt əˈbaʊt ˈaʊə ˈkɒlɪdʒ ˈmeməriz ænd njuː kəˈrɪə ɡəʊlz/", "উই টকড অ্যাবাউট আওয়ার কলেজ মেমোরিজ অ্যান্ড নিউ ক্যারিয়ার গোলস।", "কোনো বিষয়ে কথা বলা বোঝাতে 'talked about' ব্যবহার করা হয়।"),
            ("His advice was deeply encouraging for me.", "তার পরামর্শ আমার জন্য ভীষণ অনুপ্রেরণাদায়ক ছিল।", "/hɪz ədˈvaɪs wəz ˈdiːpli ɪnˈkʌrɪdʒɪŋ fɔː miː/", "হিজ অ্যাডভাইস ওয়াজ ডিপলি এনকারেজিং ফর মি।", "Advice হলো Uncountable Noun, তাই এর সাথে 'was' বসেছে।"),
            ("It is truly wonderful to stay connected with true friends.", "প্রকৃত বন্ধুদের সাথে যোগাযোগ রাখা সত্যিই চমৎকার।", "/ɪt ɪz ˈtruːli ˈwʌndəfl tə steɪ kəˈnektɪd wɪð truː frendz/", "ইট ইজ ট্রুলি ওয়ান্ডারফুল টু স্টে কানেক্টেড উইথ ট্রু ফ্রেন্ডস।", "'It is wonderful to + Verb' একটি চমৎকার স্পোকেন কাঠামো।")
        ],
        "baseSmall": "We talked.",
        "baseSmallBn": "আমরা কথা বলেছিলাম।",
        "expL2": "We talked about our career goals.",
        "expL2Bn": "আমরা আমাদের ক্যারিয়ারের লক্ষ্য নিয়ে কথা বলেছিলাম।",
        "expL3": "We talked about our career goals at a quiet coffee shop yesterday.",
        "expL3Bn": "গতকাল একটি নিরিবিলি কফি শপে আমরা আমাদের ক্যারিয়ারের লক্ষ্য নিয়ে কথা বলেছিলাম।",
        "expL4": "Over a warm cup of cappuccino, we talked about our career goals at a quiet coffee shop yesterday.",
        "expL4Bn": "এক কাপ গরম ক্যাপুচিনো উপভোগ করতে করতে, গতকাল একটি নিরিবিলি কফি শপে আমরা আমাদের ক্যারিয়ার নিয়ে কথা বলেছিলাম।",
        "explanation": "'Over a cup of coffee' ফ্রেজটি দিয়ে নেটিভ স্পিকারদের মতো বাক্য শুরু করে বড় ও প্রাণবন্ত করে তোলা হয়েছে।",
        "vocab": [
            ("colleague", "/ˈkɒliːɡ/", "Noun", "সহকর্মী", "She is respected by all her colleagues.", "তার সকল সহকর্মীর কাছে তিনি শ্রদ্ধেয়।"),
            ("encouraging", "/ɪnˈkʌrɪdʒɪŋ/", "Adjective", "অনুপ্রেরণাদায়ক", "The teacher's words were very encouraging.", "শিক্ষকের কথাগুলো খুবই অনুপ্রেরণাদায়ক ছিল।"),
            ("connected", "/kəˈnektɪd/", "Adjective", "যুক্ত / যোগাযোগ রক্ষা করা", "We remain connected through social media.", "আমরা সোশ্যাল মিডিয়ার মাধ্যমে যোগাযোগ বজায় রাখি।"),
            ("advice", "/ədˈvaɪs/", "Noun", "পরামর্শ / উপদেশ", "Take his advice seriously.", "তার পরামর্শ গুরুত্বের সাথে গ্রহণ করুন।")
        ]
    },
    {
        "title": "Shopping at the Local Supermarket",
        "titleBn": "স্থানীয় সুপারমার্কেটে কেনাকাটা",
        "situation": "সাপ্তাহিক বাজার ও পরিবারের জন্য তাজা ফলমূল কেনা",
        "storyEn": "On Friday evenings, I go to the local supermarket. The vegetable section has fresh green spinach and red tomatoes. The prices are quite reasonable this week. Preparing a home-cooked meal brings immense joy to my family.",
        "storyBn": "শুক্রবার সন্ধ্যায় আমি স্থানীয় সুপারমার্কেটে যাই। সবজি বিভাগে তাজা সবুজ পালংশাক ও লাল টমেটো রয়েছে। এই সপ্তাহে দামগুলো বেশ যুক্তিসঙ্গত। ঘরে রান্না করা খাবার আমার পরিবারের জন্য অপরিসীম আনন্দ বয়ে আনে।",
        "sentences": [
            ("On Friday evenings, I go to the local supermarket.", "শুক্রবার সন্ধ্যায় আমি স্থানীয় সুপারমার্কেটে যাই।", "/ɒn ˈfraɪdeɪ ˈiːvnɪŋz aɪ ɡəʊ tə ðə ˈləʊkl ˈsuːpəmɑːkɪt/", "অন ফ্রাইডে ইভনিংস আই গো টু দ্য লোকাল সুপারমার্কেট।", "বার ও সময়ের পূর্বে 'On Friday evenings' বসেছে।"),
            ("The vegetable section has fresh green spinach and red tomatoes.", "সবজি বিভাগে তাজা সবুজ পালংশাক ও লাল টমেটো রয়েছে।", "/ðə ˈvedʒtəbl ˈsekʃn hæz freʃ ɡriːn ˈspɪnɪdʒ ænd red təˈmɑːtəʊz/", "দ্য ভেজিটেবল সেকশন হ্যাজ ফ্রেশ গ্রিন স্পিনাচ অ্যান্ড রেড টমেটোজ।", "বিভাগে কোনো কিছু থাকা প্রকাশে 'has' বসেছে।"),
            ("The prices are quite reasonable this week.", "এই সপ্তাহে দামগুলো বেশ যুক্তিসঙ্গত।", "/ðə ˈpraɪsɪz ɑːr kwaɪt ˈriːznəbl ðɪs wiːk/", "দ্য প্রাইসেস আর কোয়াইট রিজনেবল দিস উইক।", "Prices বহুবচন হওয়ায় 'are reasonable' বসেছে।"),
            ("Preparing a home-cooked meal brings immense joy to my family.", "ঘরে রান্না করা খাবার আমার পরিবারের জন্য অপরিসীম আনন্দ বয়ে আনে।", "/prɪˈpeərɪŋ ə həʊm kʊkt miːl brɪŋz ɪˈmens dʒɔɪ tə maɪ ˈfæməli/", "প্রিপিয়ারিং আ হোম কুকড মিল ব্রিংস ইমেন্স জয় টু মাই ফ্যামিলি।", "Gerund (Preparing) সাবজেক্ট হিসেবে একবচন ভার্ব 'brings' গ্রহণ করেছে।")
        ],
        "baseSmall": "I buy vegetables.",
        "baseSmallBn": "আমি শাকসবজি কিনি।",
        "expL2": "I buy fresh organic vegetables.",
        "expL2Bn": "আমি তাজা অর্গানিক শাকসবজি কিনি।",
        "expL3": "I buy fresh organic vegetables from the local supermarket every Friday.",
        "expL3Bn": "আমি প্রতি শুক্রবার স্থানীয় সুপারমার্কেট থেকে তাজা অর্গানিক শাকসবজি কিনি।",
        "expL4": "To ensure a healthy lifestyle for my family, I buy fresh organic vegetables from the local supermarket every Friday.",
        "expL4Bn": "আমার পরিবারের জন্য একটি সুস্থ জীবনধারা নিশ্চিত করতে, আমি প্রতি শুক্রবার স্থানীয় সুপারমার্কেট থেকে তাজা অর্গানিক শাকসবজি কিনি।",
        "explanation": "To ensure + Purpose দিয়ে শুরু করে বাক্যটিকে প্রফেশনাল ও বড় করা হয়েছে।",
        "vocab": [
            ("reasonable", "/ˈriːznəbl/", "Adjective", "যুক্তিসঙ্গত / সহনশীল দাম", "Their service fee is very reasonable.", "তাদের সার্ভিস ফি খুবই যুক্তিসঙ্গত।"),
            ("immense", "/ɪˈmens/", "Adjective", "অপরিসীম / বিশাল", "This success brought immense happiness.", "এই সাফল্য অপরিসীম আনন্দ এনে দিয়েছিল।"),
            ("spinach", "/ˈspɪnɪdʒ/", "Noun", "পালংশাক", "Spinach is rich in iron.", "পালংশাকে প্রচুর আয়রন রয়েছে।"),
            ("home-cooked", "/ˌhəʊm ˈkʊkt/", "Adjective", "ঘরে রান্না করা", "Nothing beats a home-cooked dinner.", "ঘরে রান্না করা রাতের খাবারের কোনো বিকল্প নেই।")
        ]
    },
    {
        "title": "Traveling on the Modern Metro Rail",
        "titleBn": "আধুনিক মেট্রোরেলে ভ্রমণ",
        "situation": "শহরের জ্যাম এড়িয়ে মেট্রোরেলে দ্রুত গন্তব্যে পৌঁছানো",
        "storyEn": "The new metro rail has made our daily commute effortless. The air-conditioned train is clean, fast, and punctual. Commuters can read books or relax comfortably. It saves valuable working hours every single day.",
        "storyBn": "নতুন মেট্রোরেল আমাদের দৈনন্দিন যাতায়াতকে ঝামেলাহীন করেছে। শীতাতপ নিয়ন্ত্রিত ট্রেনটি পরিচ্ছন্ন, দ্রুতগামী ও সময়নিষ্ঠ। যাত্রীরা স্বাচ্ছন্দ্যে বই পড়তে বা বিশ্রাম নিতে পারেন। এটি প্রতিদিন মূল্যবান কাজের সময় বাঁচায়।",
        "sentences": [
            ("The new metro rail has made our daily commute effortless.", "নতুন মেট্রোরেল আমাদের দৈনন্দিন যাতায়াতকে ঝামেলাহীন করেছে।", "/ðə njuː ˈmetrəʊ reɪl hæz meɪd ˈaʊə ˈdeɪli kəˈmjuːt ˈefətləs/", "দ্য নিউ মেট্রো রেল হ্যাজ মেড আওয়ার ডেইলি কমিউট এফোর্টলেস।", "বর্তমান প্রভাব বোঝাতে Present Perfect (has made) বসেছে।"),
            ("The air-conditioned train is clean, fast, and punctual.", "শীতাতপ নিয়ন্ত্রিত ট্রেনটি পরিচ্ছন্ন, দ্রুতগামী ও সময়নিষ্ঠ।", "/ðiː ˈeə kənˈdɪʃnd treɪn ɪz kliːn fɑːst ænd ˈpʌŋktʃuəl/", "দি এয়ার কন্ডিশনড ট্রেন ইজ ক্লিন, ফাস্ট অ্যান্ড পাঙ্কচুয়াল।", "গুণ প্রকাশে তিনটি শক্তিশালী Adjective ব্যবহৃত হয়েছে।"),
            ("Commuters can read books or relax comfortably.", "যাত্রীরা স্বাচ্ছন্দ্যে বই পড়তে বা বিশ্রাম নিতে পারেন।", "/kəˈmjuːtəz kæn riːd bʊks ɔː rɪˈlæks ˈkʌmftəbli/", "কমিউটার্স ক্যান রিড বুকস অর রিল্যাক্স কমফোর্টেবলি।", "সক্ষমতা প্রকাশে 'can + V1' বসেছে।"),
            ("It saves valuable working hours every single day.", "এটি প্রতিদিন মূল্যবান কাজের সময় বাঁচায়।", "/ɪt seɪvz ˈvæljuəbl ˈwɜːkɪŋ ˈaʊəz ˈevri ˈsɪŋɡl deɪ/", "ইট সেভস ভ্যালুয়েবল ওয়ার্কিং আওয়ার্স এভরি সিঙ্গেল ডে।", "'It saves' এর সাথে 'every single day' জোর দেওয়ার জন্য ব্যবহৃত হয়েছে।")
        ],
        "baseSmall": "I travel by metro.",
        "baseSmallBn": "আমি মেট্রোতে ভ্রমণ করি।",
        "expL2": "I travel to my office by metro rail.",
        "expL2Bn": "আমি মেট্রোরেলে করে আমার অফিসে যাতায়াত করি।",
        "expL3": "I travel to my office by metro rail within twenty minutes.",
        "expL3Bn": "আমি মাত্র বিশ মিনিটের মধ্যে মেট্রোরেলে করে অফিসে যাতায়াত করি।",
        "expL4": "Instead of getting stuck in traffic jams, I travel to my office by metro rail within twenty minutes.",
        "expL4Bn": "ট্রাফিক জ্যামে আটকে থাকার পরিবর্তে, আমি মাত্র বিশ মিনিটের মধ্যে মেট্রোরেলে করে অফিসে যাতায়াত করি।",
        "explanation": "'Instead of getting stuck in traffic...' ফ্রেজ যুক্ত করে অসাধারণ একটি জটিল ও চমৎকার স্পোকেন বাক্য গঠিত হলো।",
        "vocab": [
            ("commute", "/kəˈmjuːt/", "Noun/Verb", "কর্মস্থলে নিয়মিত যাতায়াত", "My daily commute takes 30 minutes.", "আমার কর্মস্থলের যাতায়াতে ৩০ মিনিট সময় লাগে।"),
            ("effortless", "/ˈefətləs/", "Adjective", "সহজ / অনায়াসসাধ্য", "She makes public speaking look effortless.", "সে পাবলিক স্পিকিংকে অত্যন্ত সহজবোধ্য করে তোলে।"),
            ("punctual", "/ˈpʌŋktʃuəl/", "Adjective", "সময়নিষ্ঠ / নিয়মানুবর্তী", "Trains here are remarkably punctual.", "এখানের ট্রেনগুলো লক্ষণীয়ভাবে সময়নিষ্ঠ।"),
            ("valuable", "/ˈvæljuəbl/", "Adjective", "মূল্যবান / গুরুত্বপূর্ণ", "Time is our most valuable asset.", "সময় আমাদের সবচেয়ে মূল্যবান সম্পদ।")
        ]
    },
    {
        "title": "Learning a New Skill with Determination",
        "titleBn": "দৃঢ় সংকল্পের সাথে নতুন দক্ষতা অর্জন",
        "situation": "প্রতিদিন নিয়ম করে স্পোকেন ইংলিশ অনুশীলন করে আত্মবিশ্বাস অর্জন",
        "storyEn": "Learning Spoken English requires patience and continuous practice. I practice speaking out loud for thirty minutes every night. Little by little, my fear of speaking is fading away. Dedication always opens new doors of international opportunities.",
        "storyBn": "স্পোকেন ইংলিশ শেখার জন্য প্রয়োজন ধৈর্য ও অবিরাম অনুশীলন। আমি প্রতিদিন রাতে ত্রিশ মিনিট জোরে জোরে কথা বলার অনুশীলন করি। একটু একটু করে, আমার বলার ভয় কেটে যাচ্ছে। নিষ্ঠা সবসময় আন্তর্জাতিক সুযোগের নতুন দরজা খুলে দেয়।",
        "sentences": [
            ("Learning Spoken English requires patience and continuous practice.", "স্পোকেন ইংলিশ শেখার জন্য প্রয়োজন ধৈর্য ও অবিরাম অনুশীলন।", "/ˈlɜːnɪŋ ˈspəʊkən ˈɪŋɡlɪʃ rɪˈkwaɪəz ˈpeɪʃns ænd kənˈtɪnjuəs ˈpræktɪs/", "লার্নিং স্পোকেন ইংলিশ রিকুয়ার্স পেশেন্স অ্যান্ড কন্টিনিউয়াস প্র্যাকটিস।", "Gerund সাবজেক্ট হিসেবে 'requires' একবচন ভার্ব নিয়েছে।"),
            ("I practice speaking out loud for thirty minutes every night.", "আমি প্রতিদিন রাতে ত্রিশ মিনিট জোরে জোরে কথা বলার অনুশীলন করি।", "/aɪ ˈpræktɪs ˈspiːkɪŋ aʊt laʊd fɔː ˈθɜːti ˈmɪnɪts ˈevri naɪt/", "আই প্র্যাকটিস স্পিকিং আউট লাউড ফর থার্টি মিনিটস এভরি নাইট।", "সময়ের ব্যাপ্তি প্রকাশে 'for thirty minutes' বসেছে।"),
            ("Little by little, my fear of speaking is fading away.", "একটু একটু করে, আমার বলার ভয় কেটে যাচ্ছে।", "/ˈlɪtl baɪ ˈlɪtl maɪ fɪər ɒv ˈspiːkɪŋ ɪz ˈfeɪdɪŋ əˈweɪ/", "লিটল বাই লিটল মাই ফিয়ার অফ স্পিকিং ইজ ফেডিং অ্যাওয়ে।", "চলমান অবস্থা প্রকাশে 'is fading away' বসেছে।"),
            ("Dedication always opens new doors of international opportunities.", "নিষ্ঠা সবসময় আন্তর্জাতিক সুযোগের নতুন দরজা খুলে দেয়।", "/ˌdedɪˈkeɪʃn ˈɔːlweɪz ˈəʊpənz njuː dɔːz ɒv ˌɪntəˈnæʃnəl ˌɒpəˈtjuːnətiz/", "ডেডিকেশন অলওয়েজ ওপেনস নিউ ডোরস অফ ইন্টারন্যাশনাল অপারচুনিটিজ।", "চিরন্তন সত্য হিসেবে Present Simple এ 'opens' বসেছে।")
        ],
        "baseSmall": "I practice English.",
        "baseSmallBn": "আমি ইংরেজি প্র্যাকটিস করি।",
        "expL2": "I practice speaking English out loud.",
        "expL2Bn": "আমি জোরে জোরে ইংরেজি বলার অনুশীলন করি।",
        "expL3": "I practice speaking English out loud in my room every evening.",
        "expL3Bn": "আমি প্রতিদিন সন্ধ্যায় আমার ঘরে বসে জোরে জোরে ইংরেজি বলার অনুশীলন করি।",
        "expL4": "To build unstoppable confidence for IELTS, I practice speaking English out loud in my room every evening.",
        "expL4Bn": "আইইএলটিএস-এর জন্য অদম্য আত্মবিশ্বাস অর্জন করতে, আমি প্রতিদিন সন্ধ্যায় আমার ঘরে বসে জোরে জোরে ইংরেজি বলার অনুশীলন করি।",
        "explanation": "To build unstoppable confidence + for IELTS যোগ করে বড় আন্তর্জাতিক মানের বাক্য গঠন করা হয়েছে।",
        "vocab": [
            ("patience", "/ˈpeɪʃns/", "Noun", "ধৈর্য", "Success demands consistency and patience.", "সাফল্য ধারাবাহিকতা ও ধৈর্য দাবি করে।"),
            ("fading away", "/ˈfeɪdɪŋ əˈweɪ/", "Phrasal Verb", "ক্রমান্বয়ে মিলিয়ে যাওয়া / দূর হওয়া", "Her hesitation is gradually fading away.", "তার জড়তা আস্তে আস্তে দূর হয়ে যাচ্ছে।"),
            ("dedication", "/ˌdedɪˈkeɪʃn/", "Noun", "একনিষ্ঠতা / নিষ্ঠা", "His dedication to his craft is remarkable.", "কাজের প্রতি তার নিষ্ঠা প্রশংসনীয়।"),
            ("opportunity", "/ˌɒpəˈtjuːnəti/", "Noun", "সুযোগ / সম্ভাবনা", "Never miss a good opportunity to learn.", "শেখার কোনো ভালো সুযোগ কখনো হাতছাড়া করবেন না।")
        ]
    }
]

# Guided Practice Challenges (Stories 6 to 10)
CHALLENGE_TEMPLATES = [
    {
        "storyNumber": 6,
        "title": "Practice 6: Rain in Dhaka City",
        "titleBn": "অনুশীলন ৬: ঢাকা শহরে এক পশলা বৃষ্টি",
        "situation": "হঠাৎ বৃষ্টিতে শহরের শীতল পরিবেশ ও এক কাপ গরম চায়ের অভিজ্ঞতা",
        "starterEn": "Suddenly, dark clouds covered the Dhaka sky this afternoon...",
        "starterBn": "আজ বিকেলে হঠাৎ কালো মেঘ ঢাকা শহরের আকাশ ঢেকে ফেলল...",
        "plotBn": "ঠান্ডা বাতাস বইতে শুরু করল এবং ভারী বৃষ্টি নামল। গরমের পর মানুষ স্বস্তি পেল। আমি জানালার পাশে বসে গরম খিচুড়ি ও চায়ের কথা ভাবছিলাম। শহরের ধুলোবালি ধুয়ে সবকিছু সতেজ হয়ে উঠল।",
        "keywords": [
            ("downpour", "ভারী বর্ষণ"),
            ("relief", "স্বস্তি"),
            ("pleasant", "মনোরম"),
            ("drizzle", "গুঁড়ি গুঁড়ি বৃষ্টি"),
            ("refresh", "সতেজ করা")
        ],
        "grammarClue": "এখানে Past Simple (covered, began) এবং Present Continuous বা To-Be (The air is cool) ব্যবহার করুন।",
        "connectors": ["Within a few minutes", "After the rain", "Fortunately", "In the end"],
        "solutionEn": "Suddenly, dark clouds covered the Dhaka sky this afternoon. Within a few minutes, a refreshing downpour cooled down the entire city. People felt tremendous relief from the scorching heat. Sitting by the window with a cup of tea, I enjoyed the fresh petrichor and peaceful atmosphere.",
        "solutionBn": "আজ বিকেলে হঠাৎ কালো মেঘ ঢাকা শহরের আকাশ ঢেকে ফেলল। কয়েক মিনিটের মধ্যেই এক পশলা সতেজ বৃষ্টি পুরো শহরকে শীতল করে দিল। তীব্র গরম থেকে মানুষ দারুণ স্বস্তি পেল। জানালার পাশে এক কাপ চা নিয়ে বসে আমি বৃষ্টির ভেজা মাটির সুবাস ও শান্ত পরিবেশ উপভোগ করলাম।",
        "tip": "'It rained' না বলে 'a refreshing downpour cooled down the city' বললে স্পিকিং অনেক অ্যাডভান্সড শোনায়।"
    },
    {
        "storyNumber": 7,
        "title": "Practice 7: Overcoming Hesitation on Stage",
        "titleBn": "অনুশীলন ৭: স্টেজের জড়তা কাটিয়ে চমৎকার বক্তব্য",
        "situation": "অফিস বা ক্লাসের সামনে প্রথম প্রেজেন্টেশন দেওয়ার অভিজ্ঞতা",
        "starterEn": "My hands were trembling as I walked toward the microphone...",
        "starterBn": "মাইক্রোফোনের দিকে এগিয়ে যাওয়ার সময় আমার হাত কাঁপছিল...",
        "plotBn": "শুরুতে আমার বুক ধড়ফড় করছিল। কিন্তু গভীর শ্বাস নিয়ে আমি প্রথম বাক্যটি আত্মবিশ্বাসের সাথে বললাম। দর্শকরা মনোযোগ দিয়ে শুনছিল। শেষে সবাই হাততালি দিল এবং আমার ভয় চিরতরে কেটে গেল।",
        "keywords": [
            ("tremble", "ভয়ে বা উত্তেজনায় কাঁপা"),
            ("deep breath", "গভীর শ্বাস"),
            ("applause", "করতালি"),
            ("milestone", "স্মরণীয় অর্জন"),
            ("triumph", "বিজয় / সাফল্য")
        ],
        "grammarClue": "অতীত অনুভূতি প্রকাশে 'was/were' এবং কাজের বর্ণনায় Past Simple (took a breath, smiled, spoke) ব্যবহার করুন।",
        "connectors": ["However", "Taking a deep breath", "Gradually", "Finally"],
        "solutionEn": "My hands were trembling as I walked toward the microphone. However, I paused, took a deep breath, and greeted the audience with a warm smile. Gradually, my nervousness transformed into energy. When the presentation ended, the hearty applause of the audience made me feel proud.",
        "solutionBn": "মাইক্রোফোনের দিকে এগিয়ে যাওয়ার সময় আমার হাত কাঁপছিল। তবে আমি এক মুহূর্ত থামলাম, গভীর শ্বাস নিলাম এবং মুখে মিষ্টি হাসি নিয়ে শ্রোতাদের শুভেচ্ছা জানালাম। আস্তে আস্তে আমার নার্ভাসনেস শক্তিতে রূপান্তরিত হলো। প্রেজেন্টেশন শেষ হলে দর্শকদের আন্তরিক করতালি আমাকে গর্বিত করল।",
        "tip": "নিজের অনুভূতি বর্ণনায় 'nervousness transformed into energy' এর মতো শক্তিশালী অভিব্যক্তি ব্যবহার করুন।"
    },
    {
        "storyNumber": 8,
        "title": "Practice 8: Preparing for an International Flight",
        "titleBn": "অনুশীলন ৮: আন্তর্জাতিক ফ্লাইটের প্রস্তুতি",
        "situation": "উচ্চশিক্ষার জন্য বিদেশে যাওয়ার আগের রাতের প্রস্তুতি ও পরিবারের অনুভূতি",
        "starterEn": "With my passport and visa in hand, I checked my luggage one last time...",
        "starterBn": "হাতে পাসপোর্ট ও ভিসা নিয়ে আমি শেষবারের মতো আমার লাগেজ পরীক্ষা করলাম...",
        "plotBn": "সব প্রয়োজনীয় কাগজপত্র ব্যাগে ছিল। আমার মা আমার জন্য বিশেষ খাবার প্যাক করে দিয়েছিলেন। আত্মীয়রা শুভকামনা জানাতে এসেছিল। একটি নতুন দেশের স্বপ্ন দেখার সাথে সাথে দেশকে ছেড়ে যাওয়ার আবেগও কাজ করছিল।",
        "keywords": [
            ("luggage", "ভ্রমণের ব্যাগ / লাগেজ"),
            ("boarding pass", "বিমানে ওঠার পাস"),
            ("mixed emotions", "আনন্দ ও বেদনার মিশ্র অনুভূতি"),
            ("well-wisher", "শুভাকাঙ্ক্ষী"),
            ("anticipation", "আগ্রহ ও প্রতীক্ষা")
        ],
        "grammarClue": "Present Perfect (have checked) বা Past Simple (packed, wished) এর সংমিশ্রণ ব্যবহার করুন।",
        "connectors": ["Naturally", "On one hand", "Meanwhile", "All in all"],
        "solutionEn": "With my passport and visa in hand, I checked my luggage one last time. My mother packed homemade snacks, and close relatives gathered to wish me luck. Naturally, I felt mixed emotions—sadness to leave home, yet tremendous excitement for my overseas academic journey.",
        "solutionBn": "হাতে পাসপোর্ট ও ভিসা নিয়ে আমি শেষবারের মতো আমার লাগেজ পরীক্ষা করলাম। আমার মা বাড়ির তৈরি নাস্তা প্যাক করে দিয়েছিলেন, এবং কাছের আত্মীয়রা শুভকামনা জানাতে জড়ো হয়েছিলেন। স্বভাবতই আমার মনে মিশ্র অনুভূতি কাজ করছিল—দেশ ছাড়ার বিষাদ, আবার বিদেশের পড়াশোনার যাত্রার দারুণ রোমাঞ্চ।",
        "tip": "'On one hand... on the other hand' ব্যবহার করে বড় এবং ভারসাম্যপূর্ণ বাক্য গঠন করা যায়।"
    },
    {
        "storyNumber": 9,
        "title": "Practice 9: A Weekend Trip to Cox's Bazar",
        "titleBn": "অনুশীলন ৯: কক্সবাজারে একটি ছুটির ভ্রমণ",
        "situation": "বিশ্বের দীর্ঘতম সমুদ্র সৈকতে সূর্যাস্ত দেখা ও বন্ধুদের সাথে আনন্দ",
        "starterEn": "The roar of the ocean waves greeted us the moment we reached the beach...",
        "starterBn": "সৈকতে পৌঁছানোর সাথে সাথেই সমুদ্রের ঢেউয়ের গর্জন আমাদের স্বাগত জানাল...",
        "plotBn": "বালুকাময় সৈকত জুড়ে সূর্যাস্তের লাল আভা ছড়িয়ে পড়েছিল। আমরা খালি পায়ে হাঁটছিলাম এবং ছবি তুলছিলাম। স্থানীয় সামুদ্রিক মাছের ফ্রাই ছিল অত্যন্ত সুস্বাদু। এই ভ্রমণ আমাদের মানসিক ক্লান্তি পুরোপুরি দূর করে দিয়েছিল।",
        "keywords": [
            ("horizon", "দিগন্ত"),
            ("sunset", "সূর্যাস্ত"),
            ("barefoot", "খালি পায়ে"),
            ("mouth-watering", "জিভে জল আনা সুস্বাদু"),
            ("unforgettable", "অবিস্মরণীয়")
        ],
        "grammarClue": "প্রকৃতির সৌন্দর্য ও বন্ধুদের অভিজ্ঞতার জন্য Past Simple ও Past Continuous ব্যবহার করুন।",
        "connectors": ["As the sun went down", "Along the shoreline", "Undoubtedly"],
        "solutionEn": "The roar of the ocean waves greeted us the moment we reached the beach. As the crimson sun slowly sank below the horizon, we walked barefoot on the soft golden sand. The grilled seafood for dinner was mouth-watering. It was truly an unforgettable weekend getaway.",
        "solutionBn": "সৈকতে পৌঁছানোর সাথে সাথেই সমুদ্রের ঢেউয়ের গর্জন আমাদের স্বাগত জানাল। রক্তিম সূর্য যখন ধীরে ধীরে দিগন্তে ডুবে যাচ্ছিল, আমরা নরম সোনালী বালির উপর খালি পায়ে হাঁটলাম। রাতের খাবারের গ্রিল করা সামুদ্রিক মাছ ছিল মুখে জল আনার মতো সুস্বাদু। এটি সত্যিই এক অবিস্মরণীয় ছুটির ভ্রমণ ছিল।",
        "tip": "'The food was good' না বলে 'The seafood was mouth-watering' বললে ইংরেজি অনেক বেশি আকর্ষক হয়।"
    },
    {
        "storyNumber": 10,
        "title": "Practice 10: Building an Early Morning Habit",
        "titleBn": "অনুশীলন ১০: ভোরে ওঠার অভ্যাস গড়ে তোলা",
        "situation": "সকালে তাড়াতাড়ি ঘুম থেকে উঠে কীভাবে জীবন সুন্দর ও সুশৃঙ্খল করা যায়",
        "starterEn": "Waking up at 5:30 AM was nearly impossible for me a month ago...",
        "starterBn": "এক মাস আগেও সকাল ৫:৩০ এ ঘুম থেকে ওঠা আমার কাছে প্রায় অসম্ভব ছিল...",
        "plotBn": "কিন্তু আমি প্রতিদিন একটু একটু করে সময় এগিয়ে নিয়েছিলাম। ভোরে হালকা ব্যায়াম ও পড়াশোনা আমার মনোযোগ দ্বিগুণ করে দিয়েছে। এখন পুরো দিনটি অনেক বড় মনে হয়। একটি ভালো অভ্যাস মানুষের পুরো জীবনযাত্রাকে বদলে দিতে পারে।",
        "keywords": [
            ("discipline", "শৃঙ্খলা"),
            ("gradual", "ধীরে ধীরে / ক্রমিক"),
            ("clarity", "মনের স্বচ্ছতা"),
            ("energized", "উজ্জীবিত / শক্তিসম্পন্ন"),
            ("transformation", "আমূল পরিবর্তন")
        ],
        "grammarClue": "অতীতের সাথে বর্তমানের তুলনা করতে 'used to', 'now I am', এবং Present Simple ব্যবহার করুন।",
        "connectors": ["However", "Step by step", "Consequently", "In fact"],
        "solutionEn": "Waking up at 5:30 AM was nearly impossible for me a month ago. However, through gradual discipline, I made it my natural routine. The quiet morning hours give me unmatched mental clarity and energy. This single small habit has brought a complete positive transformation to my life.",
        "solutionBn": "এক মাস আগেও সকাল ৫:৩০ এ ঘুম থেকে ওঠা আমার কাছে প্রায় অসম্ভব ছিল। কিন্তু ধীরে ধীরে শৃঙ্খলার মাধ্যমে আমি এটিকে আমার স্বাভাবিক রুটিন বানিয়ে ফেলেছি। সকালের শান্ত প্রহর আমাকে অতুলনীয় মানসিক স্বচ্ছতা ও শক্তি দেয়। এই একটি ছোট অভ্যাস আমার জীবনে এক সম্পূর্ণ ইতিবাচক পরিবর্তন এনে দিয়েছে।",
        "tip": "'unmatched mental clarity and energy' ফ্রেজটি স্পোকেনে দারুণ আভিজাত্য এনে দেয়।"
    }
]

print("Building stories dataset...")

all_stories_output = {}

for lesson_id, lesson_name, lesson_topic, lesson_grammar in LESSON_THEMES:
    lesson_stories = []
    
    # Generate 5 Guided Stories
    for idx, g in enumerate(GUIDED_STORY_TEMPLATES):
        story_obj = {
            "id": f"{lesson_id}-story-{idx + 1}",
            "storyNumber": idx + 1,
            "type": "guided",
            "title": f"Story {idx + 1}: {g['title']}",
            "titleBn": f"গল্প {idx + 1}: {g['titleBn']} ({lesson_name})",
            "situation": f"{g['situation']} — [{lesson_topic}]",
            "fullStoryEn": g['storyEn'],
            "fullStoryBn": g['storyBn'],
            "breakdown": [
                {
                    "step": s_idx + 1,
                    "enSentence": sent[0],
                    "bnSentence": sent[1],
                    "ipa": sent[2],
                    "bn_pron": sent[3],
                    "grammarNote": f"{sent[4]} (এই লেসনের ফোকাস: {lesson_grammar})"
                }
                for s_idx, sent in enumerate(g['sentences'])
            ],
            "expansion": {
                "level1": {"en": g['baseSmall'], "bn": g['baseSmallBn'], "label": "লেভেল ১: প্রাথমিক ছোট কথা (Base Subject + Verb)"},
                "level2": {"en": g['expL2'], "bn": g['expL2Bn'], "label": "লেভেল ২: স্থান বা মাধ্যম যোগ (+ Place / Means)"},
                "level3": {"en": g['expL3'], "bn": g['expL3Bn'], "label": "লেভেল ৩: সময় ও সঙ্গী যোগ (+ Time / Companion)"},
                "level4": {"en": g['expL4'], "bn": g['expL4Bn'], "label": "লেভেল ৪: উদ্দেশ্য ও নিখুঁত সমাপ্তি (+ Purpose / Smart Linker)"},
                "techniqueExplanation": f"{g['explanation']} [লেসনের বিশেষ প্রয়োগ: {lesson_grammar}]"
            },
            "vocabulary": [
                {
                    "word": v[0],
                    "ipa": v[1],
                    "pos": v[2],
                    "meaningBn": v[3],
                    "exampleEn": v[4],
                    "exampleBn": v[5]
                }
                for v in g['vocab']
            ]
        }
        lesson_stories.append(story_obj)
        
    # Generate 5 Guided Practice Challenges (Stories 6 to 10)
    for c in CHALLENGE_TEMPLATES:
        challenge_obj = {
            "id": f"{lesson_id}-challenge-{c['storyNumber']}",
            "storyNumber": c['storyNumber'],
            "type": "practice",
            "title": f"Story {c['storyNumber']}: {c['title']}",
            "titleBn": f"গল্প {c['storyNumber']}: {c['titleBn']} ({lesson_name})",
            "situation": f"{c['situation']} — [{lesson_topic}]",
            "starterEn": c['starterEn'],
            "starterBn": c['starterBn'],
            "challengePlotBn": c['plotBn'],
            "hints": {
                "keywords": [
                    {"word": kw[0], "meaningBn": kw[1]}
                    for kw in c['keywords']
                ],
                "grammarClue": f"{c['grammarClue']} বিশেষ নজর দিন: {lesson_grammar}।",
                "connectors": c['connectors']
            },
            "modelSolutionEn": c['solutionEn'],
            "modelSolutionBn": c['solutionBn'],
            "practiceExpansionTip": f"{c['tip']} [লেসনের মূল সূত্র: {lesson_grammar}]"
        }
        lesson_stories.append(challenge_obj)
        
    all_stories_output[lesson_id] = lesson_stories

# Write out to TypeScript file
ts_content = """export interface StorySentenceBreakdown {
    step: number;
    bnSentence: string;
    enSentence: string;
    ipa: string;
    bn_pron: string;
    grammarNote: string;
}

export interface SentenceExpansionLevel {
    en: string;
    bn: string;
    label: string;
}

export interface SentenceExpansion {
    level1: SentenceExpansionLevel;
    level2: SentenceExpansionLevel;
    level3: SentenceExpansionLevel;
    level4: SentenceExpansionLevel;
    techniqueExplanation: string;
}

export interface StoryVocabulary {
    word: string;
    ipa: string;
    pos: string;
    meaningBn: string;
    exampleEn: string;
    exampleBn: string;
}

export interface StoryPracticeKeyword {
    word: string;
    meaningBn: string;
}

export interface StoryPracticeHints {
    keywords: StoryPracticeKeyword[];
    grammarClue: string;
    connectors: string[];
}

export interface LessonStory {
    id: string;
    storyNumber: number; // 1 to 10
    type: 'guided' | 'practice'; // 1-5 guided, 6-10 practice challenge
    title: string;
    titleBn: string;
    situation: string;
    
    // For Guided Stories (1 to 5):
    fullStoryEn?: string;
    fullStoryBn?: string;
    breakdown?: StorySentenceBreakdown[];
    expansion?: SentenceExpansion;
    vocabulary?: StoryVocabulary[];
    
    // For Practice Challenges (6 to 10):
    starterEn?: string;
    starterBn?: string;
    challengePlotBn?: string;
    hints?: StoryPracticeHints;
    modelSolutionEn?: string;
    modelSolutionBn?: string;
    practiceExpansionTip?: string;
}

export const LESSON_10_STORIES: Record<string, LessonStory[]> = """ + json.dumps(all_stories_output, ensure_ascii=False, indent=2) + ";\n"

with open(TARGET_FILE, "w", encoding="utf-8") as f:
    f.write(ts_content)

print(f"Successfully generated spokenLessonStoriesData.ts! Total lessons: {len(all_stories_output)}, Total stories: {len(all_stories_output) * 10}")
