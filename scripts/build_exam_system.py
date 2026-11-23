# scripts/build_exam_system.py
# Generates 100 short, high-yield questions for Tenses and Modals (without had better / would rather)
# Outputs:
# 1. src/lib/examQuestionsData.ts
# 2. public/academy-labs/Tenses_and_Modals_100_Master_Exam_Lab.html
# 3. F:/LearnCare Academy/html code/Tenses_and_Modals_100_Master_Exam_Lab.html

import json
import os

questions = [
    # ==========================================
    # TENSES: PRESENT (1 - 25)
    # ==========================================
    # Present Simple (1 - 10)
    {
        "id": 1,
        "category": "tenses",
        "subCategory": "Present Simple",
        "pattern": "fill_blank",
        "patternBn": "শূন্যস্থান পূরণ",
        "promptBn": "সে প্রতিদিন অফিসে যায়।",
        "sentence": "He ______ to the office every morning.",
        "options": ["go", "goes", "is going", "went"],
        "correctAnswer": 1,
        "explanationBn": "Third person singular (He) হলে Present Simple-এ verb-এর সাথে s/es বসে (goes)।"
    },
    {
        "id": 2,
        "category": "tenses",
        "subCategory": "Present Simple",
        "pattern": "fill_blank",
        "patternBn": "শূন্যস্থান পূরণ",
        "promptBn": "তারা চা পান করে না।",
        "sentence": "They ______ drink tea in the evening.",
        "options": ["doesn't", "don't", "not", "aren't"],
        "correctAnswer": 1,
        "explanationBn": "Subject 'They' প্লুরাল হওয়ায় নেগেটিভ করতে 'don't' বসে।"
    },
    {
        "id": 3,
        "category": "tenses",
        "subCategory": "Present Simple",
        "pattern": "translation",
        "patternBn": "বাংলা টু ইংলিশ",
        "promptBn": "তুমি কি ঢাকায় থাকো?",
        "sentence": "Select the correct English translation:",
        "options": ["Are you live in Dhaka?", "Do you live in Dhaka?", "Did you live in Dhaka?", "Do you living in Dhaka?"],
        "correctAnswer": 1,
        "explanationBn": "Present Simple-এ প্রশ্ন করার নিয়ম: Do/Does + Subject + Base Verb (Do you live)।"
    },
    {
        "id": 4,
        "category": "tenses",
        "subCategory": "Present Simple",
        "pattern": "error_detection",
        "patternBn": "ভুল সংশোধন",
        "promptBn": "ভুল অংশটি সংশোধন করুন:",
        "sentence": "Incorrect: \"She study very hard for exams.\"",
        "options": ["She studies very hard for exams.", "She studying very hard for exams.", "She is study very hard for exams.", "She has study very hard for exams."],
        "correctAnswer": 0,
        "explanationBn": "She এর পর y পরিবর্তন হয়ে 'ies' হয় (studies)।"
    },
    {
        "id": 5,
        "category": "tenses",
        "subCategory": "Present Simple",
        "pattern": "fill_blank",
        "patternBn": "শূন্যস্থান পূরণ",
        "promptBn": "পানি ১০০ ডিগ্রিতে ফুটে। (চিরন্তন সত্য)",
        "sentence": "Water ______ at 100 degrees Celsius.",
        "options": ["boil", "boils", "is boiling", "boiled"],
        "correctAnswer": 1,
        "explanationBn": "চিরন্তন সত্য ও বৈজ্ঞানিক নিয়মে সবসময় Present Simple (boils) বসে।"
    },
    {
        "id": 6,
        "category": "tenses",
        "subCategory": "Present Simple",
        "pattern": "situational",
        "patternBn": "পরিস্থিতি ভিত্তিক",
        "promptBn": "ট্রেন ছাড়ার সময়সূচি বলতে:",
        "sentence": "The morning train ______ at 7:00 AM sharp.",
        "options": ["leaves", "is leaving", "left", "leaving"],
        "correctAnswer": 0,
        "explanationBn": "স্থির সময়সূচি (Timetable) প্রকাশ করতে Present Simple (leaves) ব্যবহৃত হয়।"
    },
    {
        "id": 7,
        "category": "tenses",
        "subCategory": "Present Simple",
        "pattern": "error_detection",
        "patternBn": "ভুল সংশোধন",
        "promptBn": "সাধারণ স্পোকেন ভুল ঠিক করুন:",
        "sentence": "Incorrect: \"Does he has a car?\"",
        "options": ["Does he have a car?", "Does he having a car?", "Is he has a car?", "Does he had a car?"],
        "correctAnswer": 0,
        "explanationBn": "Does ব্যবহারের পর মূল verb-এর Base form 'have' বসে, 'has' নয়।"
    },
    {
        "id": 8,
        "category": "tenses",
        "subCategory": "Present Simple",
        "pattern": "fill_blank",
        "patternBn": "শূন্যস্থান পূরণ",
        "promptBn": "আমার ভাই রাতে দেরিতে ঘুমায়।",
        "sentence": "My brother usually ______ late at night.",
        "options": ["sleep", "sleeps", "sleeping", "is sleep"],
        "correctAnswer": 1,
        "explanationBn": "Usually নির্দেশক শব্দ থাকলে অভ্যাসগত কাজে Present Simple (sleeps) বসে।"
    },
    {
        "id": 9,
        "category": "tenses",
        "subCategory": "Present Simple",
        "pattern": "translation",
        "patternBn": "বাংলা টু ইংলিশ",
        "promptBn": "আমি কফি পছন্দ করি না।",
        "sentence": "Select the natural spoken translation:",
        "options": ["I am not like coffee.", "I don't like coffee.", "I not like coffee.", "I didn't like coffee."],
        "correctAnswer": 1,
        "explanationBn": "'Like' একটি action verb, তাই নেগেটিভ হবে 'I don't like' (am not like নয়)।"
    },
    {
        "id": 10,
        "category": "tenses",
        "subCategory": "Present Simple",
        "pattern": "fill_blank",
        "patternBn": "শূন্যস্থান পূরণ",
        "promptBn": "সূর্য পূর্ব দিকে ওঠে।",
        "sentence": "The sun ______ in the east.",
        "options": ["rise", "rises", "is rising", "rose"],
        "correctAnswer": 1,
        "explanationBn": "The sun (singular) এর সাথে verb-এ s যোগ হয়ে 'rises' হয়।"
    },

    # Present Continuous (11 - 18)
    {
        "id": 11,
        "category": "tenses",
        "subCategory": "Present Continuous",
        "pattern": "fill_blank",
        "patternBn": "শূন্যস্থান পূরণ",
        "promptBn": "এখন কথা বলো না, সে ঘুমাচ্ছে।",
        "sentence": "Please be quiet, the baby ______ right now.",
        "options": ["sleeps", "is sleeping", "was sleeping", "slept"],
        "correctAnswer": 1,
        "explanationBn": "Right now বর্তমান মুহূর্ত নির্দেশ করায় 'is sleeping' বসবে।"
    },
    {
        "id": 12,
        "category": "tenses",
        "subCategory": "Present Continuous",
        "pattern": "fill_blank",
        "patternBn": "শূন্যস্থান পূরণ",
        "promptBn": "আমরা এখন ক্রিকেট খেলছি।",
        "sentence": "We ______ cricket at the moment.",
        "options": ["are playing", "is playing", "play", "played"],
        "correctAnswer": 0,
        "explanationBn": "Subject 'We' প্লুরাল, তাই 'are playing' বসবে।"
    },
    {
        "id": 13,
        "category": "tenses",
        "subCategory": "Present Continuous",
        "pattern": "translation",
        "patternBn": "বাংলা টু ইংলিশ",
        "promptBn": "তুমি কি এখন বাজারে যাচ্ছ?",
        "sentence": "Select the correct spoken English:",
        "options": ["Do you go to the market now?", "Are you going to the market now?", "Were you going to the market now?", "Have you gone to the market now?"],
        "correctAnswer": 1,
        "explanationBn": "বর্তমানে চলমান কাজে প্রশ্ন: Am/Is/Are + Sub + V-ing (Are you going)?"
    },
    {
        "id": 14,
        "category": "tenses",
        "subCategory": "Present Continuous",
        "pattern": "error_detection",
        "patternBn": "ভুল সংশোধন",
        "promptBn": "Stative verb-এর ভুল সংশোধন করুন:",
        "sentence": "Incorrect: \"I am knowing the answer.\"",
        "options": ["I know the answer.", "I was knowing the answer.", "I am known the answer.", "I have know the answer."],
        "correctAnswer": 0,
        "explanationBn": "Know একটি stative verb, এর সাথে Continuous হয় না। শুদ্ধ রূপ: 'I know'।"
    },
    {
        "id": 15,
        "category": "tenses",
        "subCategory": "Present Continuous",
        "pattern": "fill_blank",
        "patternBn": "শূন্যস্থান পূরণ",
        "promptBn": "বাইরে বৃষ্টি হচ্ছে।",
        "sentence": "Look outside! It ______ heavily.",
        "options": ["rains", "is raining", "rained", "rain"],
        "correctAnswer": 1,
        "explanationBn": "Look/Listen দিয়ে দৃষ্টি আকর্ষণ করলে সবসময় Present Continuous (is raining) হয়।"
    },
    {
        "id": 16,
        "category": "tenses",
        "subCategory": "Present Continuous",
        "pattern": "situational",
        "patternBn": "পরিস্থিতি ভিত্তিক",
        "promptBn": "নির্ধারিত ভবিষ্যত পরিকল্পনা:",
        "sentence": "I ______ my doctor tomorrow morning.",
        "options": ["am seeing", "saw", "see", "have seen"],
        "correctAnswer": 0,
        "explanationBn": "নিকট ভবিষ্যতের নিশ্চিত অ্যাপয়েন্টমেন্ট বোঝাতে Present Continuous (am seeing) বসে।"
    },
    {
        "id": 17,
        "category": "tenses",
        "subCategory": "Present Continuous",
        "pattern": "fill_blank",
        "patternBn": "শূন্যস্থান পূরণ",
        "promptBn": "তারা আজ রাতে আসছে না।",
        "sentence": "They ______ to the party tonight.",
        "options": ["aren't coming", "isn't coming", "don't coming", "not come"],
        "correctAnswer": 0,
        "explanationBn": "They এর সাথে negative continuous: 'aren't coming'। "
    },
    {
        "id": 18,
        "category": "tenses",
        "subCategory": "Present Continuous",
        "pattern": "error_detection",
        "patternBn": "ভুল সংশোধন",
        "promptBn": "সাধারণ স্পোকেন ভুল ঠিক করুন:",
        "sentence": "Incorrect: \"Why you are crying?\"",
        "options": ["Why are you crying?", "Why do you crying?", "Why you crying?", "Why is you crying?"],
        "correctAnswer": 0,
        "explanationBn": "WH-প্রশ্নে auxiliary verb সাবজেক্টের আগে আসে: 'Why are you crying?'।"
    },

    # Present Perfect (19 - 25)
    {
        "id": 19,
        "category": "tenses",
        "subCategory": "Present Perfect",
        "pattern": "fill_blank",
        "patternBn": "শূন্যস্থান পূরণ",
        "promptBn": "আমি মাত্র দুপুরের খাবার খেয়েছি।",
        "sentence": "I have just ______ my lunch.",
        "options": ["finish", "finished", "finishing", "finishes"],
        "correctAnswer": 1,
        "explanationBn": "Have/Has এর পর verb-এর Past Participle (V3) 'finished' বসে।"
    },
    {
        "id": 20,
        "category": "tenses",
        "subCategory": "Present Perfect",
        "pattern": "fill_blank",
        "patternBn": "শূন্যস্থান পূরণ",
        "promptBn": "সে তার চাবি হারিয়ে ফেলেছে। (এখনও পাচ্ছে না)",
        "sentence": "She ______ her house keys.",
        "options": ["has lost", "have lost", "losts", "is losing"],
        "correctAnswer": 0,
        "explanationBn": "She এর সাথে 'has' বসে এবং V3 'lost' বসে (has lost)।"
    },
    {
        "id": 21,
        "category": "tenses",
        "subCategory": "Present Perfect",
        "pattern": "translation",
        "patternBn": "বাংলা টু ইংলিশ",
        "promptBn": "তুমি কি কখনো কক্সবাজার গিয়েছ?",
        "sentence": "Select the correct spoken English question:",
        "options": ["Did you ever go to Cox's Bazar?", "Have you ever been to Cox's Bazar?", "Were you ever to Cox's Bazar?", "Do you ever go to Cox's Bazar?"],
        "correctAnswer": 1,
        "explanationBn": "জীবনে কোথাও ভ্রমণ অভিজ্ঞতা জানতে 'Have you ever been to...?' বসে।"
    },
    {
        "id": 22,
        "category": "tenses",
        "subCategory": "Present Perfect",
        "pattern": "error_detection",
        "patternBn": "ভুল সংশোধন",
        "promptBn": "ভুল বাক্যটি ঠিক করুন:",
        "sentence": "Incorrect: \"I have saw that movie already.\"",
        "options": ["I have seen that movie already.", "I have see that movie already.", "I am seen that movie already.", "I saw that movie already."],
        "correctAnswer": 0,
        "explanationBn": "Have এর পর V2 (saw) বসে না, V3 (seen) বসে: 'have seen'।"
    },
    {
        "id": 23,
        "category": "tenses",
        "subCategory": "Present Perfect",
        "pattern": "fill_blank",
        "patternBn": "শূন্যস্থান পূরণ",
        "promptBn": "তারা এখনও পৌঁছায়নি।",
        "sentence": "They haven't arrived ______.",
        "options": ["already", "yet", "still", "since"],
        "correctAnswer": 1,
        "explanationBn": "Present Perfect-এর নেগেটিভ বাক্যের শেষে 'yet' ব্যবহৃত হয়।"
    },
    {
        "id": 24,
        "category": "tenses",
        "subCategory": "Present Perfect",
        "pattern": "situational",
        "patternBn": "পরিস্থিতি ভিত্তিক",
        "promptBn": "বিল পরিশোধের পর ম্যানেজারকে বলতে:",
        "sentence": "\"Don't worry, sir. The bill ______ already.\"",
        "options": ["has been paid", "was paid", "is paying", "has pay"],
        "correctAnswer": 0,
        "explanationBn": "ফলাফল বর্তমানে বিদ্যমান থাকায় Present Perfect Passive: 'has been paid'।"
    },
    {
        "id": 25,
        "category": "tenses",
        "subCategory": "Present Perfect",
        "pattern": "error_detection",
        "patternBn": "ভুল সংশোধন",
        "promptBn": "অতীত সময়ের সাথে ভুল ঠিক করুন:",
        "sentence": "Incorrect: \"I have met him yesterday.\"",
        "options": ["I met him yesterday.", "I have meet him yesterday.", "I am meeting him yesterday.", "I had meet him yesterday."],
        "correctAnswer": 0,
        "explanationBn": "Yesterday অতীত নির্দিষ্ট সময়, তাই Present Perfect হবে না; Past Simple (I met) হবে।"
    },

    # ==========================================
    # TENSES: PAST (26 - 42)
    # ==========================================
    # Past Simple (26 - 33)
    {
        "id": 26,
        "category": "tenses",
        "subCategory": "Past Simple",
        "pattern": "fill_blank",
        "patternBn": "শূন্যস্থান পূরণ",
        "promptBn": "আমরা গতকাল সিনেমাটি দেখেছিলাম।",
        "sentence": "We ______ a great movie yesterday.",
        "options": ["watch", "watched", "watching", "have watched"],
        "correctAnswer": 1,
        "explanationBn": "Yesterday অতীত নির্দেশক শব্দ, তাই verb-এর Past form 'watched' বসবে।"
    },
    {
        "id": 27,
        "category": "tenses",
        "subCategory": "Past Simple",
        "pattern": "fill_blank",
        "patternBn": "শূন্যস্থান পূরণ",
        "promptBn": "সে গত রাতে ফোন রিসিভ করেনি।",
        "sentence": "She ______ answer my phone call last night.",
        "options": ["didn't", "doesn't", "wasn't", "hasn't"],
        "correctAnswer": 0,
        "explanationBn": "অতীতের সাধারণ নেগেটিভ বাক্যে 'didn't + V1' বসে।"
    },
    {
        "id": 28,
        "category": "tenses",
        "subCategory": "Past Simple",
        "pattern": "translation",
        "patternBn": "বাংলা টু ইংলিশ",
        "promptBn": "তুমি কি গতকাল ক্লাসে গিয়েছিলে?",
        "sentence": "Select the correct spoken English:",
        "options": ["Did you go to class yesterday?", "Did you went to class yesterday?", "Were you go to class yesterday?", "Do you went to class yesterday?"],
        "correctAnswer": 0,
        "explanationBn": "Did দিয়ে প্রশ্ন করলে মূল verb-এর Base form 'go' বসে (Did you go)।"
    },
    {
        "id": 29,
        "category": "tenses",
        "subCategory": "Past Simple",
        "pattern": "error_detection",
        "patternBn": "ভুল সংশোধন",
        "promptBn": "Did-এর পর ভুল সংশোধন করুন:",
        "sentence": "Incorrect: \"I didn't saw you at the party.\"",
        "options": ["I didn't see you at the party.", "I didn't seen you at the party.", "I not saw you at the party.", "I wasn't see you at the party."],
        "correctAnswer": 0,
        "explanationBn": "Didn't-এর পর verb-এর Base form 'see' বসে (didn't see)।"
    },
    {
        "id": 30,
        "category": "tenses",
        "subCategory": "Past Simple",
        "pattern": "fill_blank",
        "patternBn": "শূন্যস্থান পূরণ",
        "promptBn": "রহিম গত বছর একটি নতুন গাড়ি কিনেছিল।",
        "sentence": "Rahim ______ a new car last year.",
        "options": ["buy", "bought", "buys", "has bought"],
        "correctAnswer": 1,
        "explanationBn": "Last year থাকায় Buy-এর Past form 'bought' বসবে।"
    },
    {
        "id": 31,
        "category": "tenses",
        "subCategory": "Past Simple",
        "pattern": "situational",
        "patternBn": "পরিস্থিতি ভিত্তিক",
        "promptBn": "সকাল ১০ টায় কী ঘটেছিল জানতে:",
        "sentence": "\"Where ______ you when the alarm rang?\"",
        "options": ["were", "was", "did", "are"],
        "correctAnswer": 0,
        "explanationBn": "Subject 'you'-এর সাথে অতীত নির্দেশ করতে 'were' বসে।"
    },
    {
        "id": 32,
        "category": "tenses",
        "subCategory": "Past Simple",
        "pattern": "error_detection",
        "patternBn": "ভুল সংশোধন",
        "promptBn": "সাধারণ স্পোকেন ভুল ঠিক করুন:",
        "sentence": "Incorrect: \"She didn't told me anything.\"",
        "options": ["She didn't tell me anything.", "She not told me anything.", "She wasn't told me anything.", "She don't told me anything."],
        "correctAnswer": 0,
        "explanationBn": "Didn't-এর পর V1 'tell' বসবে: 'She didn't tell me'।"
    },
    {
        "id": 33,
        "category": "tenses",
        "subCategory": "Past Simple",
        "pattern": "translation",
        "patternBn": "বাংলা টু ইংলিশ",
        "promptBn": "আমি গত রাতে খুব ক্লান্ত ছিলাম।",
        "sentence": "Select the correct English translation:",
        "options": ["I was very tired last night.", "I am very tired last night.", "I were very tired last night.", "I had very tired last night."],
        "correctAnswer": 0,
        "explanationBn": "অতীত অবস্থার বর্ণনায় I-এর সাথে 'was' বসে।"
    },

    # Past Continuous (34 - 38)
    {
        "id": 34,
        "category": "tenses",
        "subCategory": "Past Continuous",
        "pattern": "fill_blank",
        "patternBn": "শূন্যস্থান পূরণ",
        "promptBn": "আমি যখন পৌঁছালাম, সে রান্না করছিল।",
        "sentence": "When I arrived, she ______ dinner.",
        "options": ["cooked", "was cooking", "is cooking", "cooks"],
        "correctAnswer": 1,
        "explanationBn": "অতীতের একটি কাজের সময় অন্য একটি কাজ চলছিল বোঝাতে Past Continuous (was cooking) বসে।"
    },
    {
        "id": 35,
        "category": "tenses",
        "subCategory": "Past Continuous",
        "pattern": "fill_blank",
        "patternBn": "শূন্যস্থান পূরণ",
        "promptBn": "গতকাল রাত ৮টায় তারা টিভি দেখছিল।",
        "sentence": "At 8 PM yesterday, they ______ TV.",
        "options": ["watched", "were watching", "are watching", "was watching"],
        "correctAnswer": 1,
        "explanationBn": "They প্লুরাল এবং নির্দিষ্ট অতীত সময়ে কাজ চলছিল, তাই 'were watching'।"
    },
    {
        "id": 36,
        "category": "tenses",
        "subCategory": "Past Continuous",
        "pattern": "translation",
        "patternBn": "বাংলা টু ইংলিশ",
        "promptBn": "বৃষ্টি হওয়ার সময় তুমি কী করছিলে?",
        "sentence": "Select the correct spoken English:",
        "options": ["What were you doing when it rained?", "What did you doing when it rained?", "What are you doing when it rained?", "What was you doing when it rained?"],
        "correctAnswer": 0,
        "explanationBn": "You-এর সাথে Past Continuous প্রশ্ন: 'What were you doing...?'"
    },
    {
        "id": 37,
        "category": "tenses",
        "subCategory": "Past Continuous",
        "pattern": "error_detection",
        "patternBn": "ভুল সংশোধন",
        "promptBn": "Subject-verb agreement ঠিক করুন:",
        "sentence": "Incorrect: \"We was waiting for you.\"",
        "options": ["We were waiting for you.", "We are waiting for you yesterday.", "We did waiting for you.", "We had waiting for you."],
        "correctAnswer": 0,
        "explanationBn": "We-এর সাথে 'was' নয়, 'were' বসে: 'We were waiting'।"
    },
    {
        "id": 38,
        "category": "tenses",
        "subCategory": "Past Continuous",
        "pattern": "situational",
        "patternBn": "পরিস্থিতি ভিত্তিক",
        "promptBn": "ফোন বাজার মুহূর্তের ঘটনা:",
        "sentence": "\"I couldn't hear the doorbell because I ______ to music.\"",
        "options": ["listened", "was listening", "am listening", "listen"],
        "correctAnswer": 1,
        "explanationBn": "দরজার বেল বাজার সময় কাজটি চলছিল: 'was listening'।"
    },

    # Past Perfect (39 - 42)
    {
        "id": 39,
        "category": "tenses",
        "subCategory": "Past Perfect",
        "pattern": "fill_blank",
        "patternBn": "শূন্যস্থান পূরণ",
        "promptBn": "ডাক্তার আসার পূর্বেই রোগী মারা গেল।",
        "sentence": "The patient had ______ before the doctor arrived.",
        "options": ["die", "died", "dead", "dying"],
        "correctAnswer": 1,
        "explanationBn": "Past Perfect-এ Had-এর পর V3 'died' বসে।"
    },
    {
        "id": 40,
        "category": "tenses",
        "subCategory": "Past Perfect",
        "pattern": "fill_blank",
        "patternBn": "শূন্যস্থান পূরণ",
        "promptBn": "আমরা স্টেশনে পৌঁছানোর আগেই ট্রেনটি ছেড়ে দিয়েছিল।",
        "sentence": "The train ______ before we reached the station.",
        "options": ["had left", "has left", "left", "was left"],
        "correctAnswer": 0,
        "explanationBn": "অতীতের দুটি কাজের মধ্যে পূর্বে ঘটা কাজে 'had left' বসে।"
    },
    {
        "id": 41,
        "category": "tenses",
        "subCategory": "Past Perfect",
        "pattern": "translation",
        "patternBn": "বাংলা টু ইংলিশ",
        "promptBn": "সে আসার আগেই আমি হোমওয়ার্ক শেষ করেছিলাম।",
        "sentence": "Select the correct sentence:",
        "options": ["I had finished my homework before he came.", "I finished my homework before he had came.", "I have finished my homework before he came.", "I was finishing my homework before he came."],
        "correctAnswer": 0,
        "explanationBn": "Before-এর আগের অংশে Past Perfect (had finished) এবং পরের অংশে Past Simple (came) বসে।"
    },
    {
        "id": 42,
        "category": "tenses",
        "subCategory": "Past Perfect",
        "pattern": "error_detection",
        "patternBn": "ভুল সংশোধন",
        "promptBn": "টেন্সের ভুল সংশোধন করুন:",
        "sentence": "Incorrect: \"She had never saw snow before she visited Nepal.\"",
        "options": ["She had never seen snow before she visited Nepal.", "She had never see snow before she visited Nepal.", "She has never seen snow before she visited Nepal.", "She never saw snow before she had visited Nepal."],
        "correctAnswer": 0,
        "explanationBn": "Had-এর পর Verb-এর V3 'seen' বসবে (had never seen)।"
    },

    # ==========================================
    # TENSES: FUTURE (43 - 50)
    # ==========================================
    # Future Simple (43 - 46)
    {
        "id": 43,
        "category": "tenses",
        "subCategory": "Future Simple",
        "pattern": "fill_blank",
        "patternBn": "শূন্যস্থান পূরণ",
        "promptBn": "আমি আগামীকাল তোমাকে সাহায্য করব।",
        "sentence": "I ______ you with your work tomorrow.",
        "options": ["help", "will help", "am help", "helped"],
        "correctAnswer": 1,
        "explanationBn": "Tomorrow থাকায় Future Simple-এ 'will help' বসবে।"
    },
    {
        "id": 44,
        "category": "tenses",
        "subCategory": "Future Simple",
        "pattern": "fill_blank",
        "patternBn": "শূন্যস্থান পূরণ",
        "promptBn": "সে আগামীকাল ক্লাসে আসবে না।",
        "sentence": "He ______ come to class tomorrow.",
        "options": ["won't", "don't", "isn't", "wasn't"],
        "correctAnswer": 0,
        "explanationBn": "Future-এ নেগেটিভ করতে will not-এর সংক্ষেপ 'won't' বসে।"
    },
    {
        "id": 45,
        "category": "tenses",
        "subCategory": "Future Simple",
        "pattern": "translation",
        "patternBn": "বাংলা টু ইংলিশ",
        "promptBn": "তুমি কি আগামীকাল অনুষ্ঠানে যাবে?",
        "sentence": "Select the correct spoken English:",
        "options": ["Will you go to the event tomorrow?", "Do you go to the event tomorrow?", "Are you go to the event tomorrow?", "Will you going to the event tomorrow?"],
        "correctAnswer": 0,
        "explanationBn": "Future Simple প্রশ্ন: 'Will + Subject + V1' (Will you go)?"
    },
    {
        "id": 46,
        "category": "tenses",
        "subCategory": "Future Simple",
        "pattern": "situational",
        "patternBn": "পরিস্থিতি ভিত্তিক",
        "promptBn": "দরজার বেল বাজার সাথে সাথে তাৎক্ষণিক সিদ্ধান্ত:",
        "sentence": "\"The doorbell is ringing.\" — \"I ______ it!\"",
        "options": ["will get", "get", "got", "am getting"],
        "correctAnswer": 0,
        "explanationBn": "কথা বলার মুহূর্তে তাৎক্ষণিক সিদ্ধান্ত (Instant Decision) নিতে 'will get' বসে।"
    },

    # Future Continuous (47 - 48)
    {
        "id": 47,
        "category": "tenses",
        "subCategory": "Future Continuous",
        "pattern": "fill_blank",
        "patternBn": "শূন্যস্থান পূরণ",
        "promptBn": "আগামীকাল এই সময়ে আমি ভ্রমণ করতে থাকব।",
        "sentence": "This time tomorrow, I ______ to Sylhet.",
        "options": ["will travel", "will be travelling", "travel", "am travel"],
        "correctAnswer": 1,
        "explanationBn": "ভবিষ্যতে নির্দিষ্ট সময়ে চলতে থাকবে বোঝাতে Future Continuous: 'will be travelling'। "
    },
    {
        "id": 48,
        "category": "tenses",
        "subCategory": "Future Continuous",
        "pattern": "translation",
        "patternBn": "বাংলা টু ইংলিশ",
        "promptBn": "কাল বিকেলে আমরা তোমার জন্য অপেক্ষা করতে থাকব।",
        "sentence": "Select the correct sentence:",
        "options": ["We will be waiting for you tomorrow afternoon.", "We will waiting for you tomorrow afternoon.", "We are wait for you tomorrow afternoon.", "We wait for you tomorrow afternoon."],
        "correctAnswer": 0,
        "explanationBn": "Future Continuous-এর গঠন: 'will be + V-ing' (will be waiting)।"
    },

    # Future Perfect (49 - 50)
    {
        "id": 49,
        "category": "tenses",
        "subCategory": "Future Perfect",
        "pattern": "fill_blank",
        "patternBn": "শূন্যস্থান পূরণ",
        "promptBn": "শুক্রবার নাগাদ আমি কাজটি শেষ করে ফেলব।",
        "sentence": "By Friday, I ______ the project.",
        "options": ["will finish", "will have finished", "finished", "have finish"],
        "correctAnswer": 1,
        "explanationBn": "By + Future time থাকলে Future Perfect বসে: 'will have finished'। "
    },
    {
        "id": 50,
        "category": "tenses",
        "subCategory": "Future Perfect",
        "pattern": "translation",
        "patternBn": "বাংলা টু ইংলিশ",
        "promptBn": "তুমি পৌঁছানোর আগেই সে চলে গিয়ে থাকবে।",
        "sentence": "Select the correct English translation:",
        "options": ["He will have left before you arrive.", "He will leave before you will arrive.", "He has left before you arrive.", "He will be leaving before you arrive."],
        "correctAnswer": 0,
        "explanationBn": "Future Perfect-এ Before-এর পূর্বের অংশে 'will have + V3' এবং পরের অংশে Present Simple বসে।"
    },

    # ==========================================
    # MODALS: PRIMARY & ADVANCED (51 - 100)
    # (Without had better and without would rather)
    # ==========================================
    # Can / Could (51 - 58)
    {
        "id": 51,
        "category": "modals",
        "subCategory": "Can",
        "pattern": "fill_blank",
        "patternBn": "শূন্যস্থান পূরণ",
        "promptBn": "সে সাবলীলভাবে তিনটি ভাষা বলতে পারে।",
        "sentence": "She ______ speak three languages fluently.",
        "options": ["can", "cans", "can to", "is can"],
        "correctAnswer": 0,
        "explanationBn": "Modal verb-এর সাথে কখনো s/es বা to বসে না, সরাসরি 'can speak'।"
    },
    {
        "id": 52,
        "category": "modals",
        "subCategory": "Can",
        "pattern": "translation",
        "patternBn": "বাংলা টু ইংলিশ",
        "promptBn": "তুমি কি আমাকে একটু সাহায্য করতে পারবে?",
        "sentence": "Select the natural spoken question:",
        "options": ["Can you help me for a moment?", "Are you can help me?", "Do you can help me?", "Can you helping me?"],
        "correctAnswer": 0,
        "explanationBn": "সহজ অনুরোধ ও সক্ষমতা জানতে: 'Can you help...?'"
    },
    {
        "id": 53,
        "category": "modals",
        "subCategory": "Could",
        "pattern": "situational",
        "patternBn": "পরিস্থিতি ভিত্তিক",
        "promptBn": "রেস্তোরাঁয় মার্জিত ও বিনম্র অনুরোধ করতে:",
        "sentence": "\"______ you please pass me the salt?\"",
        "options": ["Could", "Did", "Do", "Should have"],
        "correctAnswer": 0,
        "explanationBn": "ভদ্র ও মার্জিত অনুরোধ (Polite request) জানাতে 'Could' সবচেয়ে মানানসই।"
    },
    {
        "id": 54,
        "category": "modals",
        "subCategory": "Could",
        "pattern": "fill_blank",
        "patternBn": "শূন্যস্থান পূরণ",
        "promptBn": "ছোটবেলায় আমি খুব দ্রুত দৌড়াতে পারতাম।",
        "sentence": "When I was young, I ______ run very fast.",
        "options": ["can", "could", "may", "might"],
        "correctAnswer": 1,
        "explanationBn": "অতীতের সাধারণ সক্ষমতা (Past ability) বোঝাতে 'could' বসে।"
    },
    {
        "id": 55,
        "category": "modals",
        "subCategory": "Could have",
        "pattern": "fill_blank",
        "patternBn": "শূন্যস্থান পূরণ",
        "promptBn": "তুমি আমাকে ফোন করতে পারতে! (কিন্তু করোনি)",
        "sentence": "You ______ called me yesterday! Why didn't you?",
        "options": ["could have", "could", "can have", "can"],
        "correctAnswer": 0,
        "explanationBn": "অতীতের সুযোগ ছিল কিন্তু করা হয়নি বোঝাতে 'Could have + V3' বসে।"
    },
    {
        "id": 56,
        "category": "modals",
        "subCategory": "Could have",
        "pattern": "translation",
        "patternBn": "বাংলা টু ইংলিশ",
        "promptBn": "সে পরীক্ষায় প্রথম হতে পারত। (কিন্তু হয়নি)",
        "sentence": "Select the correct spoken English:",
        "options": ["He could have stood first in the exam.", "He can stand first in the exam.", "He could stood first in the exam.", "He must stand first in the exam."],
        "correctAnswer": 0,
        "explanationBn": "অতীতের অপ্রাপ্তি বা সুযোগ বোঝাতে 'could have + V3 (stood)' বসে।"
    },
    {
        "id": 57,
        "category": "modals",
        "subCategory": "Can",
        "pattern": "error_detection",
        "patternBn": "ভুল সংশোধন",
        "promptBn": "Modal verb-এর ভুল সংশোধন করুন:",
        "sentence": "Incorrect: \"I cannot to solve this problem.\"",
        "options": ["I cannot solve this problem.", "I cannot solving this problem.", "I can to not solve this problem.", "I am not can solve this problem."],
        "correctAnswer": 0,
        "explanationBn": "Cannot-এর পর 'to' বসে না, সরাসরি Base verb 'solve' বসে।"
    },
    {
        "id": 58,
        "category": "modals",
        "subCategory": "Could have",
        "pattern": "error_detection",
        "patternBn": "ভুল সংশোধন",
        "promptBn": "Past modal-এর ভুল ঠিক করুন:",
        "sentence": "Incorrect: \"We could have win the match.\"",
        "options": ["We could have won the match.", "We could won the match.", "We could have winning the match.", "We can have won the match."],
        "correctAnswer": 0,
        "explanationBn": "Could have-এর পর V1 (win) নয়, Past Participle V3 (won) বসে।"
    },

    # May / Might (59 - 64)
    {
        "id": 59,
        "category": "modals",
        "subCategory": "May",
        "pattern": "situational",
        "patternBn": "পরিস্থিতি ভিত্তিক",
        "promptBn": "অফিসে বসের রুমে প্রবেশের অনুমতি চাইতে:",
        "sentence": "\"______ I come in, sir?\"",
        "options": ["May", "Might", "Must", "Will"],
        "correctAnswer": 0,
        "explanationBn": "ফরমাল অনুমতি চাওয়ার ক্ষেত্রে 'May I...' সবচেয়ে মার্জিত।"
    },
    {
        "id": 60,
        "category": "modals",
        "subCategory": "May",
        "pattern": "fill_blank",
        "patternBn": "শূন্যস্থান পূরণ",
        "promptBn": "আজ বিকেলে বৃষ্টি হতেও পারে। (সম্ভাবনা)",
        "sentence": "Take an umbrella. It ______ rain later.",
        "options": ["may", "must to", "can to", "ought"],
        "correctAnswer": 0,
        "explanationBn": "বর্তমান বা ভবিষ্যতের ৫০% সম্ভাবনা প্রকাশে 'may + V1' বসে।"
    },
    {
        "id": 61,
        "category": "modals",
        "subCategory": "Might",
        "pattern": "fill_blank",
        "patternBn": "শূন্যস্থান পূরণ",
        "promptBn": "সে হয়তো আজ রাতে আসবে। (খুব কম সম্ভাবনা)",
        "sentence": "He is very busy, but he ______ come tonight.",
        "options": ["might", "must", "should have", "can to"],
        "correctAnswer": 0,
        "explanationBn": "কম সম্ভাবনা (weak possibility) প্রকাশ করতে 'might' ব্যবহৃত হয়।"
    },
    {
        "id": 62,
        "category": "modals",
        "subCategory": "May have",
        "pattern": "fill_blank",
        "patternBn": "শূন্যস্থান পূরণ",
        "promptBn": "সে হয়তো ট্রেনটি মিস করে ফেলেছে। (অতীত অনুমান)",
        "sentence": "He isn't here yet. He may have ______ the train.",
        "options": ["miss", "missed", "missing", "misses"],
        "correctAnswer": 1,
        "explanationBn": "May have-এর পর verb-এর V3 'missed' বসে।"
    },
    {
        "id": 63,
        "category": "modals",
        "subCategory": "Might",
        "pattern": "translation",
        "patternBn": "বাংলা টু ইংলিশ",
        "promptBn": "আমি হয়তো আগামীকাল মিটিংয়ে নাও যেতে পারি।",
        "sentence": "Select the correct spoken English:",
        "options": ["I might not go to the meeting tomorrow.", "I may not to go to the meeting tomorrow.", "I cannot to go to the meeting tomorrow.", "I am might not go to the meeting tomorrow."],
        "correctAnswer": 0,
        "explanationBn": "ভবিষ্যতে অনিচ্ছাকৃত কম সম্ভাবনায় নেগেটিভ: 'might not + V1'।"
    },
    {
        "id": 64,
        "category": "modals",
        "subCategory": "May",
        "pattern": "error_detection",
        "patternBn": "ভুল সংশোধন",
        "promptBn": "সাধারণ স্পোকেন ভুল ঠিক করুন:",
        "sentence": "Incorrect: \"May you please to sign here?\"",
        "options": ["Could you please sign here?", "May you please sign here?", "Might you to sign here?", "Must you sign here?"],
        "correctAnswer": 0,
        "explanationBn": "অন্য কাউকে অনুরোধ করার ক্ষেত্রে 'May you' বলা যায় না; 'Could you please sign' বলতে হয়।"
    },

    # Shall / Should (65 - 72)
    {
        "id": 65,
        "category": "modals",
        "subCategory": "Should",
        "pattern": "fill_blank",
        "patternBn": "শূন্যস্থান পূরণ",
        "promptBn": "তোমার প্রতিদিন ইংরেজি অনুশীলন করা উচিত।",
        "sentence": "You ______ practice English every single day.",
        "options": ["should", "should to", "ought", "must to"],
        "correctAnswer": 0,
        "explanationBn": "উচিত উপদেশ বা পরামর্শ দিতে 'should + V1' বসে।"
    },
    {
        "id": 66,
        "category": "modals",
        "subCategory": "Should have",
        "pattern": "fill_blank",
        "patternBn": "শূন্যস্থান পূরণ",
        "promptBn": "তোমার ডাক্তারের কাছে যাওয়া উচিত ছিল। (কিন্তু যাওনি)",
        "sentence": "You looked very sick. You ______ seen a doctor.",
        "options": ["should have", "should", "must", "can have"],
        "correctAnswer": 0,
        "explanationBn": "অতীতে কোনো কাজ করা উচিত ছিল কিন্তু করা হয়নি বোঝাতে 'should have + V3' বসে।"
    },
    {
        "id": 67,
        "category": "modals",
        "subCategory": "Shall",
        "pattern": "situational",
        "patternBn": "পরিস্থিতি ভিত্তিক",
        "promptBn": "বন্ধু বা সহকর্মীকে প্রস্তাব (Offer) দিতে:",
        "sentence": "\"______ I carry that heavy bag for you?\"",
        "options": ["Shall", "Will", "Must", "Might"],
        "correctAnswer": 0,
        "explanationBn": "সাহায্যের প্রস্তাব বা অভিমত চাওয়ায় First Person-এর সাথে 'Shall I...?' বসে।"
    },
    {
        "id": 68,
        "category": "modals",
        "subCategory": "Should",
        "pattern": "translation",
        "patternBn": "বাংলা টু ইংলিশ",
        "promptBn": "আমাদের কারও সাথে খারাপ ব্যবহার করা উচিত নয়।",
        "sentence": "Select the correct spoken English:",
        "options": ["We shouldn't misbehave with anyone.", "We don't should misbehave with anyone.", "We shouldn't to misbehave with anyone.", "We are not should misbehave with anyone."],
        "correctAnswer": 0,
        "explanationBn": "Should-এর নেগেটিভ রূপ 'shouldn't + V1'।"
    },
    {
        "id": 69,
        "category": "modals",
        "subCategory": "Should have",
        "pattern": "error_detection",
        "patternBn": "ভুল সংশোধন",
        "promptBn": "Past modal ভুল ঠিক করুন:",
        "sentence": "Incorrect: \"I should have go there earlier.\"",
        "options": ["I should have gone there earlier.", "I should have went there earlier.", "I should went there earlier.", "I should go there earlier yesterday."],
        "correctAnswer": 0,
        "explanationBn": "Should have-এর পর V1 (go) নয়, V3 (gone) বসবে।"
    },
    {
        "id": 70,
        "category": "modals",
        "subCategory": "Should",
        "pattern": "situational",
        "patternBn": "পরিস্থিতি ভিত্তিক",
        "promptBn": "কারও কাছে মূল্যবান মতামত বা পরামর্শ চাইতে:",
        "sentence": "\"What do you think I ______ do now?\"",
        "options": ["should", "shall", "ought", "must have"],
        "correctAnswer": 0,
        "explanationBn": "কারও পরামর্শ বা গাইডেন্স চাইতে 'What should I do?' বসে।"
    },
    {
        "id": 71,
        "category": "modals",
        "subCategory": "Should have",
        "pattern": "translation",
        "patternBn": "বাংলা টু ইংলিশ",
        "promptBn": "আমার এটি তাকে বলা উচিত হয়নি।",
        "sentence": "Select the correct translation:",
        "options": ["I shouldn't have told him that.", "I shouldn't told him that.", "I didn't should have told him that.", "I shouldn't tell him that yesterday."],
        "correctAnswer": 0,
        "explanationBn": "অতীতে করা কোনো কাজের জন্য অনুশোচনায়: 'I shouldn't have + V3 (told)'।"
    },
    {
        "id": 72,
        "category": "modals",
        "subCategory": "Should",
        "pattern": "error_detection",
        "patternBn": "ভুল সংশোধন",
        "promptBn": "সাধারণ স্পোকেন ভুল ঠিক করুন:",
        "sentence": "Incorrect: \"You should to obey your parents.\"",
        "options": ["You should obey your parents.", "You should obeying your parents.", "You should obeyed your parents.", "You are should obey your parents."],
        "correctAnswer": 0,
        "explanationBn": "Should-এর পর 'to' বসে না, সরাসরি Base verb 'obey' বসে।"
    },

    # Will / Would (73 - 78)
    {
        "id": 73,
        "category": "modals",
        "subCategory": "Would",
        "pattern": "situational",
        "patternBn": "পরিস্থিতি ভিত্তিক",
        "promptBn": "কাউকে কোনো খাবার বা পানীয় অফার করতে:",
        "sentence": "\"______ you like a cup of hot coffee?\"",
        "options": ["Would", "Do", "Will", "Are"],
        "correctAnswer": 0,
        "explanationBn": "ভদ্রভাবে কাউকে কোনো কিছুর প্রস্তাব দিতে 'Would you like...?' ব্যবহৃত হয়।"
    },
    {
        "id": 74,
        "category": "modals",
        "subCategory": "Would",
        "pattern": "fill_blank",
        "patternBn": "শূন্যস্থান পূরণ",
        "promptBn": "যদি আমি ধনী হতাম, তবে বিশ্ব ভ্রমণ করতাম।",
        "sentence": "If I were rich, I ______ travel the world.",
        "options": ["would", "will", "would have", "can"],
        "correctAnswer": 0,
        "explanationBn": "Second Conditional (If + Past Simple)-এর ফলাফল অংশে 'would + V1' বসে।"
    },
    {
        "id": 75,
        "category": "modals",
        "subCategory": "Would have",
        "pattern": "fill_blank",
        "patternBn": "শূন্যস্থান পূরণ",
        "promptBn": "তুমি ডাকলে আমি অবশ্যই আসতাম। (কিন্তু ডাকোনি)",
        "sentence": "If you had invited me, I ______ come to your party.",
        "options": ["would have", "will have", "would", "had"],
        "correctAnswer": 0,
        "explanationBn": "Third Conditional (If + Past Perfect)-এ ফলাফল অংশে 'would have + V3' বসে।"
    },
    {
        "id": 76,
        "category": "modals",
        "subCategory": "Would",
        "pattern": "translation",
        "patternBn": "বাংলা টু ইংলিশ",
        "promptBn": "আপনি কি দয়া করে দরজাটি বন্ধ করবেন?",
        "sentence": "Select the polite spoken English:",
        "options": ["Would you mind closing the door?", "Would you closing the door?", "Will you mind to close the door?", "Do you mind to close the door?"],
        "correctAnswer": 0,
        "explanationBn": "'Would you mind'-এর পর verb-এর সাথে 'ing' যুক্ত হয় (closing)।"
    },
    {
        "id": 77,
        "category": "modals",
        "subCategory": "Would have",
        "pattern": "error_detection",
        "patternBn": "ভুল সংশোধন",
        "promptBn": "Third conditional ভুল ঠিক করুন:",
        "sentence": "Incorrect: \"I would helped you if I knew.\"",
        "options": ["I would have helped you if I had known.", "I will helped you if I knew.", "I would help you if I knew.", "I would had helped you if I knew."],
        "correctAnswer": 0,
        "explanationBn": "অতীতের অপূর্ণ শর্তে 'would have helped ... if I had known' বসে।"
    },
    {
        "id": 78,
        "category": "modals",
        "subCategory": "Would",
        "pattern": "fill_blank",
        "patternBn": "শূন্যস্থান পূরণ",
        "promptBn": "আমি বরং পানি খাব।",
        "sentence": "I ______ like some water, please.",
        "options": ["would", "will", "could", "must"],
        "correctAnswer": 0,
        "explanationBn": "মার্জিতভাবে নিজের ইচ্ছা প্রকাশ করতে 'I would like...' বসে।"
    },

    # Must (79 - 83)
    {
        "id": 79,
        "category": "modals",
        "subCategory": "Must",
        "pattern": "fill_blank",
        "patternBn": "শূন্যস্থান পূরণ",
        "promptBn": "তোমাকে অবশ্যই ট্রাফিক নিয়ম মানতে হবে। (বাধ্যতামূলক)",
        "sentence": "Drivers ______ follow traffic rules strictly.",
        "options": ["must", "must to", "might", "could"],
        "correctAnswer": 0,
        "explanationBn": "আইন বা কঠোর বাধ্যবাধকতা বোঝাতে 'must + V1' বসে।"
    },
    {
        "id": 80,
        "category": "modals",
        "subCategory": "Must have",
        "pattern": "situational",
        "patternBn": "পরিস্থিতি ভিত্তিক",
        "promptBn": "রাস্তা ভিজে কাদা হয়ে আছে দেখে নিশ্চিত অনুমান:",
        "sentence": "The road is completely wet. It ______ rained heavily.",
        "options": ["must have", "should have", "would have", "can have"],
        "correctAnswer": 0,
        "explanationBn": "অকাট্য প্রমাণের ভিত্তিতে অতীতের নিশ্চিত অনুমান প্রকাশে 'must have + V3' বসে।"
    },
    {
        "id": 81,
        "category": "modals",
        "subCategory": "Must",
        "pattern": "translation",
        "patternBn": "বাংলা টু ইংলিশ",
        "promptBn": "তোমার এখানে ধূমপান করা একদমই নিষেধ।",
        "sentence": "Select the correct spoken English:",
        "options": ["You mustn't smoke here.", "You don't must smoke here.", "You mustn't to smoke here.", "You are not must smoke here."],
        "correctAnswer": 0,
        "explanationBn": "কঠোর নিষেধাজ্ঞা (Strong prohibition) বোঝাতে 'mustn't + V1' বসে।"
    },
    {
        "id": 82,
        "category": "modals",
        "subCategory": "Must have",
        "pattern": "fill_blank",
        "patternBn": "শূন্যস্থান পূরণ",
        "promptBn": "সারাদিন কাজ করার পর সে নিশ্চয় খুব ক্লান্ত ছিল।",
        "sentence": "He worked for 14 hours. He must have ______ exhausted.",
        "options": ["been", "be", "was", "being"],
        "correctAnswer": 0,
        "explanationBn": "Must have-এর পর Be verb-এর V3 রূপ 'been' বসে।"
    },
    {
        "id": 83,
        "category": "modals",
        "subCategory": "Must",
        "pattern": "error_detection",
        "patternBn": "ভুল সংশোধন",
        "promptBn": "সাধারণ স্পোকেন ভুল ঠিক করুন:",
        "sentence": "Incorrect: \"Everyone must to wear a mask.\"",
        "options": ["Everyone must wear a mask.", "Everyone must wearing a mask.", "Everyone musts wear a mask.", "Everyone is must wear a mask."],
        "correctAnswer": 0,
        "explanationBn": "Must-এর পর কখনোই 'to' বসে না; সরাসরি Base verb 'wear' বসে।"
    },

    # Be supposed to (84 - 87)
    {
        "id": 84,
        "category": "modals",
        "subCategory": "Be supposed to",
        "pattern": "fill_blank",
        "patternBn": "শূন্যস্থান পূরণ",
        "promptBn": "আজ সকালে তার এখানে আসার কথা ছিল। (কিন্তু আসেনি)",
        "sentence": "He ______ arrive here at 9 AM this morning.",
        "options": ["was supposed to", "is supposed to", "supposed to", "were supposed to"],
        "correctAnswer": 0,
        "explanationBn": "অতীতের কথা ছিল কিন্তু হয়নি বোঝাতে 'was supposed to' বসে।"
    },
    {
        "id": 85,
        "category": "modals",
        "subCategory": "Be supposed to",
        "pattern": "translation",
        "patternBn": "বাংলা টু ইংলিশ",
        "promptBn": "আমাদের এখন কাজ শুরু করার কথা।",
        "sentence": "Select the correct spoken English:",
        "options": ["We are supposed to start work now.", "We supposed to start work now.", "We were supposed to start work now.", "We are suppose to start work now."],
        "correctAnswer": 0,
        "explanationBn": "বর্তমানে কোনো কিছু করার কথা বা প্রত্যাশা থাকলে 'am/is/are supposed to' বসে।"
    },
    {
        "id": 86,
        "category": "modals",
        "subCategory": "Be supposed to",
        "pattern": "error_detection",
        "patternBn": "ভুল সংশোধন",
        "promptBn": "স্পেলিং ও গ্রামার ভুল ঠিক করুন:",
        "sentence": "Incorrect: \"You are suppose to submit the report today.\"",
        "options": ["You are supposed to submit the report today.", "You are suppose submitting the report today.", "You supposed to submit the report today.", "You are to suppose submit the report today."],
        "correctAnswer": 0,
        "explanationBn": "কাঠামোটি হলো 'be supposed to' (d যুক্ত হবে), 'suppose to' নয়।"
    },
    {
        "id": 87,
        "category": "modals",
        "subCategory": "Be supposed to",
        "pattern": "situational",
        "patternBn": "পরিস্থিতি ভিত্তিক",
        "promptBn": "অফিসের নিয়ম অনুযায়ী যা করার কথা নয়:",
        "sentence": "\"You ______ share your password with anyone.\"",
        "options": ["aren't supposed to", "don't suppose to", "weren't supposed", "not supposed to"],
        "correctAnswer": 0,
        "explanationBn": "নেগেটিভে নিয়ম বা প্রত্যাশা না থাকা বোঝাতে 'aren't supposed to' বসে।"
    },

    # Be able to (88 - 91)
    {
        "id": 88,
        "category": "modals",
        "subCategory": "Be able to",
        "pattern": "fill_blank",
        "patternBn": "শূন্যস্থান পূরণ",
        "promptBn": "আমি আগামী সপ্তাহে কাজটি শেষ করতে সক্ষম হব।",
        "sentence": "I will ______ finish the task next week.",
        "options": ["be able to", "can", "could", "able to"],
        "correctAnswer": 0,
        "explanationBn": "ভবিষ্যতের সক্ষমতা প্রকাশে 'will can' বলা যায় না; 'will be able to' বলতে হয়।"
    },
    {
        "id": 89,
        "category": "modals",
        "subCategory": "Be able to",
        "pattern": "fill_blank",
        "patternBn": "শূন্যস্থান পূরণ",
        "promptBn": "কঠিন পরিস্থিতি সত্ত্বেও তারা চুক্তিটি জিততে পেরেছিল।",
        "sentence": "Despite the storm, the ship ______ reach the port safely.",
        "options": ["was able to", "could to", "can", "is able"],
        "correctAnswer": 0,
        "explanationBn": "অতীতের কোনো নির্দিষ্ট বাধার মুখে সফলভাবে সম্পন্ন হওয়া কাজে 'was able to' বসে।"
    },
    {
        "id": 90,
        "category": "modals",
        "subCategory": "Be able to",
        "pattern": "translation",
        "patternBn": "বাংলা টু ইংলিশ",
        "promptBn": "তুমি কি আমাকে সাহায্য করতে পারবে?",
        "sentence": "Select the formal expression:",
        "options": ["Will you be able to help me?", "Will you can help me?", "Are you able help me?", "Do you able to help me?"],
        "correctAnswer": 0,
        "explanationBn": "ভবিষ্যত সক্ষমতা যাচাইয়ের ফরমাল প্রশ্ন: 'Will you be able to help me?'"
    },
    {
        "id": 91,
        "category": "modals",
        "subCategory": "Be able to",
        "pattern": "error_detection",
        "patternBn": "ভুল সংশোধন",
        "promptBn": "সাধারণ স্পোকেন ভুল ঠিক করুন:",
        "sentence": "Incorrect: \"She is not able for do this.\"",
        "options": ["She is not able to do this.", "She is not able doing this.", "She cannot able to do this.", "She does not able to do this."],
        "correctAnswer": 0,
        "explanationBn": "Able-এর পর Infinitive 'to + V1' বসে: 'able to do'।"
    },

    # Used to (92 - 95)
    {
        "id": 92,
        "category": "modals",
        "subCategory": "Used to",
        "pattern": "fill_blank",
        "patternBn": "শূন্যস্থান পূরণ",
        "promptBn": "আমি গ্রামে বাস করতাম। (এখন আর করি না)",
        "sentence": "I ______ live in a small village when I was a child.",
        "options": ["used to", "use to", "am used to", "was used to"],
        "correctAnswer": 0,
        "explanationBn": "অতীতের নিয়মিত অভ্যাস যা বর্তমানে আর নেই বোঝাতে 'used to + V1' বসে।"
    },
    {
        "id": 93,
        "category": "modals",
        "subCategory": "Used to",
        "pattern": "error_detection",
        "patternBn": "ভুল সংশোধন",
        "promptBn": "Didn't-এর পর Used to-র ভুল সংশোধন করুন:",
        "sentence": "Incorrect: \"I didn't used to like vegetables.\"",
        "options": ["I didn't use to like vegetables.", "I wasn't used to like vegetables.", "I didn't used to liked vegetables.", "I not used to like vegetables."],
        "correctAnswer": 0,
        "explanationBn": "Didn't-এর পর d বাদ গিয়ে Base form 'use to' বসে: 'didn't use to'."
    },
    {
        "id": 94,
        "category": "modals",
        "subCategory": "Used to",
        "pattern": "translation",
        "patternBn": "বাংলা টু ইংলিশ",
        "promptBn": "তিনি কি ধূমপান করতেন?",
        "sentence": "Select the correct spoken English question:",
        "options": ["Did he use to smoke?", "Did he used to smoke?", "Was he used to smoke?", "Did he use to smoking?"],
        "correctAnswer": 0,
        "explanationBn": "Did দিয়ে প্রশ্ন করলে 'use to' বসে (Did he use to smoke)?"
    },
    {
        "id": 95,
        "category": "modals",
        "subCategory": "Used to",
        "pattern": "situational",
        "patternBn": "পরিস্থিতি ভিত্তিক",
        "promptBn": "অতীতের অভ্যাসের বিপরীতে বর্তমান অবস্থা:",
        "sentence": "\"He used to play football, but now he ______ tennis.\"",
        "options": ["plays", "played", "is used to play", "playing"],
        "correctAnswer": 0,
        "explanationBn": "Used to অতীতের কাজ প্রকাশ করে, আর Now নির্দেশ করায় বর্তমানে Present Simple (plays) বসবে।"
    },

    # Ought to (96 - 97)
    {
        "id": 96,
        "category": "modals",
        "subCategory": "Ought to",
        "pattern": "fill_blank",
        "patternBn": "শূন্যস্থান পূরণ",
        "promptBn": "আমাদের প্রবীণদের সম্মান করা উচিত। (নৈতিক দায়িত্ব)",
        "sentence": "We ______ respect our elders.",
        "options": ["ought to", "ought", "should to", "must to"],
        "correctAnswer": 0,
        "explanationBn": "নৈতিক দায়িত্ব বা কর্তব্য বোঝাতে 'ought to + V1' বসে।"
    },
    {
        "id": 97,
        "category": "modals",
        "subCategory": "Ought to",
        "pattern": "translation",
        "patternBn": "বাংলা টু ইংলিশ",
        "promptBn": "তোমার সত্য কথা বলা উচিত।",
        "sentence": "Select the correct formal expression:",
        "options": ["You ought to speak the truth.", "You ought speak the truth.", "You ought to speaking the truth.", "You are ought to speak the truth."],
        "correctAnswer": 0,
        "explanationBn": "Ought-এর সাথে বাধ্যতামূলকভাবে 'to' বসে: 'ought to speak'."
    },

    # Need to / Dare to (98 - 100)
    {
        "id": 98,
        "category": "modals",
        "subCategory": "Need to",
        "pattern": "fill_blank",
        "patternBn": "শূন্যস্থান পূরণ",
        "promptBn": "তোমার এতো তাড়াহুড়ো করার দরকার নেই।",
        "sentence": "You ______ worry about it. Everything is fine.",
        "options": ["needn't", "needn't to", "don't need", "not need"],
        "correctAnswer": 0,
        "explanationBn": "Semi-modal হিসেবে 'needn't'-এর পর সরাসরি V1 বসে (needn't worry)।"
    },
    {
        "id": 99,
        "category": "modals",
        "subCategory": "Dare",
        "pattern": "situational",
        "patternBn": "পরিস্থিতি ভিত্তিক",
        "promptBn": "তোমার এমন কথা বলার সাহস হলো কী করে?",
        "sentence": "\"How ______ you speak to me like that?\"",
        "options": ["dare", "dares", "dared to", "can to"],
        "correctAnswer": 0,
        "explanationBn": "স্পোকেন এক্সপ্রেশনে তীব্র প্রতিবাদ বা বিস্ময় প্রকাশে 'How dare you...?' বসে।"
    },
    {
        "id": 100,
        "category": "modals",
        "subCategory": "Need to",
        "pattern": "error_detection",
        "patternBn": "ভুল সংশোধন",
        "promptBn": "Need-এর সাধারণ ভুল সংশোধন করুন:",
        "sentence": "Incorrect: \"You needn't to come tomorrow.\"",
        "options": ["You needn't come tomorrow.", "You don't needn't come tomorrow.", "You needn't coming tomorrow.", "You are not needn't come tomorrow."],
        "correctAnswer": 0,
        "explanationBn": "Modal হিসেবে 'needn't'-এর পর 'to' বসে না; সরাসরি Base verb 'come' বসে।"
    }
]

print(f"Total questions generated: {len(questions)}")
assert len(questions) == 100, f"Expected 100 questions, got {len(questions)}"

# Write src/lib/examQuestionsData.ts
ts_code = f"""// src/lib/examQuestionsData.ts
// 100 High-Yield Tenses & Modals Diagnostic Exam Questions (Without had better / would rather)

export interface ExamQuestion {{
    id: number;
    category: 'tenses' | 'modals';
    subCategory: string;
    pattern: 'fill_blank' | 'translation' | 'error_detection' | 'situational';
    patternBn: string;
    promptBn?: string;
    sentence: string;
    options: string[];
    correctAnswer: number;
    explanationBn: string;
}}

export const EXAM_100_QUESTIONS: ExamQuestion[] = {json.dumps(questions, indent=4, ensure_ascii=False)};
"""

with open("E:/antigravity/ILTES/src/lib/examQuestionsData.ts", "w", encoding="utf-8") as f:
    f.write(ts_code)
print("Successfully generated E:/antigravity/ILTES/src/lib/examQuestionsData.ts")
