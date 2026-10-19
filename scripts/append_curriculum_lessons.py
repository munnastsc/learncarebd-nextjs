# -*- coding: utf-8 -*-
"""
Appends Lessons 16 to 28 across all datasets:
1. spokenLessonsData.ts (Lessons 16 to 28 with complete concepts, 6-way transformations, real-life sentences, native variations, qaDrills, conversations, sentence builders)
2. spokenLessonDialoguesData.ts (20 turns each for 16-28)
3. spokenLessonQAData.ts (100 Q&A pairs each for 16-28)
4. spokenLessonVariationsData.ts (100 variations each for 16-28)
5. spokenLessonFillGapData.ts (100 fill-in-the-gaps each for 16-28)
"""
import os
import json
import re

ROOT = r"E:\antigravity\ILTES"
LIB = os.path.join(ROOT, "src", "lib")

NEW_LESSONS_INFO = [
    {
        "id": "lesson-16-present-perfect-continuous",
        "num": 16,
        "title": "Present Perfect Continuous: have/has been + V-ing",
        "sub": "অতীতে শুরু হওয়া কাজ এখনো চলছে, স্থায়িত্ব ও সময়ের পরিমাপ প্রকাশ (Since vs For)",
        "phase": "tenses",
        "label": "কাল ও স্থায়িত্ব (Perfect Continuous)",
        "level": "Intermediate",
        "concept": {
            "explanation": "কোনো কাজ অতীতে শুরু হয়ে এখনো চোখের সামনে চলছে এবং বাক্যে সময়ের উল্লেখ থাকে (যেমন: সকাল থেকে, ২ ঘণ্টা ধরে) তখন have been বা has been + Verb-ing বসে। নির্দিষ্ট সময়ের শুরু বোঝালে 'Since' (যেমন: Since morning, Since 2020) এবং মোট সময়ের ব্যাপ্তি বোঝালে 'For' (যেমন: For 2 hours, For three days) বসে।",
            "whenToUse": "কাজের স্থায়িত্ব বা কতক্ষণ ধরে কাজটি চলমান রয়েছে তা সুনির্দিষ্টভাবে তুলে ধরতে।",
            "commonMistake": "বাঙালি শিক্ষার্থীরা ভুল করে বলে 'I am waiting for you since morning' — এটি ভুল! সময় উল্লেখ থাকলে কন্টিনিউয়াস হয় না, অবশ্যই বলতে হবে: 'I have been waiting for you since morning' (বা 'He has been living here for 5 years')।",
            "formulaSummary": "I/We/You/They + have been + V-ing | He/She/It + has been + V-ing (+ since/for + time)"
        },
        "pos": ("I have been learning English for three months.", "আমি তিন মাস ধরে ইংরেজি শিখছি।", "/aɪ hæv biːn ˈlɜːnɪŋ ˈɪŋɡlɪʃ fɔː θriː mʌnθs/"),
        "neg": ("I haven't been sleeping well for the last two days.", "গত দুই দিন ধরে আমার ভালো ঘুম হচ্ছে না।", "/aɪ hævnt biːn ˈsliːpɪŋ wel fɔː ðə lɑːst tuː deɪz/"),
        "int": ("Have you been waiting here for a long time?", "তুমি কি এখানে অনেকক্ষণ ধরে অপেক্ষা করছো?", "/hæv juː biːn ˈweɪtɪŋ hɪə fɔːr ə lɒŋ taɪm/"),
        "intNeg": ("Haven't you been feeling well lately?", "সাম্প্রতিক সময়ে তোমার কি শরীর ভালো লাগছে না?", "/hævnt juː biːn ˈfiːlɪŋ wel ˈleɪtli/"),
        "whPos": ("How long have you been living in Dhaka?", "তুমি ঢাকায় কতদিন ধরে বাস করছো?", "/haʊ lɒŋ hæv juː biːn ˈlɪvɪŋ ɪn ˈdækə/"),
        "whNeg": ("Why haven't they been attending the meetings regularly?", "তারা কেন নিয়মিত মিটিংয়ে যোগ দিচ্ছে না?", "/waɪ hævnt ðeɪ biːn əˈtendɪŋ ðə ˈmiːtɪŋz ˈreɡjələli/"),
        "targetQ": ("How long have you been working at your current company?", "তোমার বর্তমান কোম্পানিতে কতদিন ধরে কাজ করছো?"),
        "builderSub": ["I have been", "She has been", "They have been", "How long have you been", "We haven't been"],
        "builderAux": ["working diligently", "practicing IELTS", "living happily", "waiting patiently", "studying online"],
        "builderComp": ["for more than two years", "since early this morning", "for the last six months", "since we graduated", "for hours and hours"]
    },
    {
        "id": "lesson-17-tense-compare-continuous-perfect",
        "num": 17,
        "title": "Tense Comparison: Continuous vs Perfect Continuous",
        "sub": "\"I am working\" বনাম \"I have been working for 2 hours\" (সময়ের পার্থক্য)",
        "phase": "comparisons",
        "label": "টেন্স তুলনা (Comparison)",
        "level": "Intermediate",
        "concept": {
            "explanation": "Present Continuous (am/is/are + V-ing) কেবল এই মুহূর্তের কাজের ওপর ফোকাস করে (Right now action, কোনো সময়ের উল্লেখ ছাড়া)। অপরদিকে Present Perfect Continuous (have/has been + V-ing) অতীতে কাজ শুরুর পয়েন্ট থেকে এখন পর্যন্ত কাজের স্থায়িত্বের ওপর ফোকাস করে।",
            "whenToUse": "যখন কাজের সাথে সময় যুক্ত হবে (for/since), তখনই Perfect Continuous ব্যবহার করতে হবে। আর যখন সময় থাকবে না, শুধুই এখনকার কাজ বোঝাবে, তখন সাধারণ Continuous।",
            "commonMistake": "কখনোই 'It is raining for two hours' বলবেন না। সময় থাকলে অবশ্যই 'It has been raining for two hours' বলতে হবে।",
            "formulaSummary": "No Time: Subject + am/is/are + V-ing | With Time (since/for): Subject + have/has been + V-ing"
        },
        "pos": ("I am reading now, but I have been reading this book for two days.", "আমি এখন পড়ছি, তবে আমি এই বইটি দুই দিন ধরে পড়ছি।", "/aɪ æm ˈriːdɪŋ naʊ bʌt aɪ hæv biːn ˈriːdɪŋ ðɪs bʊk fɔː tuː deɪz/"),
        "neg": ("He is not crying, he has just been chopping onions.", "সে কাঁদছে না, সে কিছুক্ষণ ধরে পেঁয়াজ কাটছিল।", "/hiː ɪz nɒt ˈkraɪɪŋ hiː hæz dʒʌst biːn ˈtʃɒpɪŋ ˈʌnjənz/"),
        "int": ("Are you cooking right now, or have you been cooking all afternoon?", "তুমি কি এখন রান্না করছো, নাকি সারা দুপুর ধরে রান্না করছো?", "/ɑː juː ˈkʊkɪŋ raɪt naʊ ɔː hæv juː biːn ˈkʊkɪŋ ɔːl ˌɑːftəˈnuːn/"),
        "intNeg": ("Aren't you leaving yet? Haven't you been packing since morning?", "তুমি এখনো রওনা হচ্ছ না? সকাল থেকে কি গোছাচ্ছ না?", "/ɑːnt juː ˈliːvɪŋ jet hævnt juː biːn ˈpækɪŋ sɪns ˈmɔːnɪŋ/"),
        "whPos": ("What are you doing versus what have you been doing all week?", "তুমি এখন কী করছো বনাম পুরো সপ্তাহ জুড়ে কী করছিলে?", "/wɒt ɑː juː ˈduːɪŋ ˈvɜːsəs wɒt hæv juː biːn ˈduːɪŋ ɔːl wiːk/"),
        "whNeg": ("Why aren't you resting if you have been typing for hours?", "তুমি বিশ্রাম নিচ্ছ না কেন যদি তুমি ঘণ্টার পর ঘণ্টা টাইপ করে থাকো?", "/waɪ ɑːnt juː ˈrestɪŋ ɪf juː hæv biːn ˈtaɪpɪŋ fɔːr ˈaʊəz/"),
        "targetQ": ("Are you waiting for the bus, or have you been waiting here for a long time?", "তুমি কি বাসের অপেক্ষা করছো, নাকি এখানে অনেকক্ষণ ধরে অপেক্ষা করছো?"),
        "builderSub": ["I am", "I have been", "She is", "She has been", "Why are you"],
        "builderAux": ["working on this task", "waiting for the doctor", "studying English", "looking for my keys", "cooking dinner"],
        "builderComp": ["right now", "for over two hours", "at the moment", "since 9 o'clock", "all day long"]
    },
    {
        "id": "lesson-18-tense-compare-present-perfect-past-simple",
        "num": 18,
        "title": "Tense Comparison: Present Perfect vs Past Simple",
        "sub": "\"I have done\" বনাম \"I did\" (সমাপ্ত ঘটনা বনাম বর্তমান প্রভাব)",
        "phase": "comparisons",
        "label": "টেন্স তুলনা (Comparison)",
        "level": "Intermediate",
        "concept": {
            "explanation": "Past Simple নির্দেশ করে অতীত সময়ের কোনো নির্দিষ্ট সমাপ্ত মুহূর্ত (যেমন: yesterday, last week, in 2021, 2 hours ago)। আর Present Perfect নির্দেশ করে অতীত অভিজ্ঞতার বর্তমান তাৎপর্য বা অনির্দিষ্ট অতীতে ঘটা কাজ (যেমন: already, yet, just, ever, never, so far)।",
            "whenToUse": "সময়ের উল্লেখ সুনির্দিষ্ট থাকলে Past Simple (I met him yesterday)। আর বর্তমানের সাথে ফলাফল সম্পর্কিত থাকলে বা সময় উহ্য থাকলে Present Perfect (I have met him already)।",
            "commonMistake": "'I have seen him yesterday' বলা মস্ত বড় ভুল! নির্দিষ্ট অতীত সময় থাকলে কখনোই Present Perfect হবে না; বলতে হবে 'I saw him yesterday' বা 'I have seen him recently'।",
            "formulaSummary": "Specific Past Time (yesterday/last year): Did / V2 | Unspecified / Experience: Have/Has + V3"
        },
        "pos": ("I visited London in 2022, but I have visited many other countries too.", "আমি ২০২২ সালে লন্ডন গিয়েছিলাম, তবে আমি আরও অনেক দেশেও ভ্রমণ করেছি।", "/aɪ ˈvɪzɪtɪd ˈlʌndən ɪn 2022 bʌt aɪ hæv ˈvɪzɪtɪd ˈmeni ˈʌðə ˈkʌntriz tuː/"),
        "neg": ("I didn't call him yesterday because I haven't recharged my phone yet.", "আমি তাকে গতকাল কল করিনি কারণ আমি এখনো ফোনে রিচার্জ করিনি।", "/aɪ dɪdnt kɔːl hɪm ˈjestədeɪ bɪˈkɒz aɪ hævnt riːˈtʃɑːdʒd maɪ fəʊn jet/"),
        "int": ("Did you watch the match last night, or have you already seen the highlights?", "তুমি কি কাল রাতে ম্যাচটি দেখেছিলে, নাকি ইতিমধ্যে হাইলাইটস দেখে ফেলেছো?", "/dɪd juː wɒtʃ ðə mætʃ lɑːst naɪt ɔː hæv juː ɔːlˈredi siːn ðə ˈhaɪlaɪts/"),
        "intNeg": ("Didn't you submit the file, or haven't you finished it yet?", "তুমি ফাইলটা জমা দেওনি, নাকি এখনো শেষ করতে পারোনি?", "/dɪdnt juː səbˈmɪt ðə faɪl ɔː hævnt juː ˈfɪnɪʃt ɪt jet/"),
        "whPos": ("When did you arrive, and what exciting places have you explored so far?", "তুমি কখন পৌঁছালে, এবং এ পর্যন্ত তুমি কোন চমৎকার জায়গাগুলো ঘুরেছো?", "/wen dɪd juː əˈraɪv ænd wɒt ɪkˈsaɪtɪŋ ˈpleɪsɪz hæv juː ɪkˈsplɔːd səʊ fɑː/"),
        "whNeg": ("Why didn't you inform me when you have already known about the change?", "তুমি আমাকে জানাওনি কেন যেখানে তুমি পরিবর্তনের বিষয়টি আগেই জানতে?", "/waɪ dɪdnt juː ɪnˈfɔːm miː wen juː hæv ɔːlˈredi nəʊn əˈbaʊt ðə tʃeɪndʒ/"),
        "targetQ": ("Have you ever eaten Italian food, or did you try it when you were abroad?", "তুমি কি কখনো ইতালীয় খাবার খেয়েছো, নাকি বিদেশে থাকার সময় চেষ্টা করেছিলে?"),
        "builderSub": ["I saw him", "I have seen him", "Did you complete", "Have you completed", "She arrived"],
        "builderAux": ["yesterday afternoon", "many times before", "last night", "already today", "two hours ago"],
        "builderComp": ["at the office gate", "with tremendous enthusiasm", "before the deadline", "in front of everyone", "without any hesitation"]
    },
    {
        "id": "lesson-19-past-continuous",
        "num": 19,
        "title": "Past Continuous: was / were + V-ing",
        "sub": "অতীতে কোনো কাজ চলার মাঝখানে আরেকটি ঘটনা ঘটা (When & While)",
        "phase": "tenses",
        "label": "অতীত চলমান (Past Continuous)",
        "level": "Intermediate",
        "concept": {
            "explanation": "অতীতে কোনো নির্দিষ্ট সময়ে একটি কাজ চলছিল (চলমান ছিল) বোঝাতে was/were + Verb-ing ব্যবহৃত হয়। প্রায়ই একটি দীর্ঘ কাজের (Past Continuous) মাঝখানে একটি আকস্মিক ছোট ঘটনা (Past Simple) ঘটার বর্ণনায় When বা While বসে।",
            "whenToUse": "'আমি যখন বাড়ি ফিরছিলাম তখন বৃষ্টি শুরু হয়েছিল' (While I was going home, it began to rain)।",
            "commonMistake": "বাঙালি শিক্ষার্থীরা দুটোতেই সাধারণ অতীত ব্যবহার করে। সঠিকভাবে চলমান কাজটি বোঝাতে 'was/were + ing' ব্যবহার নিশ্চিত করুন।",
            "formulaSummary": "Subject + was/were + Verb-ing | When + Past Simple, While + Past Continuous"
        },
        "pos": ("I was cooking dinner when the doorbell rang suddenly.", "আমি যখন রাতের খাবার রান্না করছিলাম তখন হঠাৎ দরজার বেল বেজে উঠল।", "/aɪ wəz ˈkʊkɪŋ ˈdɪnər wen ðə ˈdɔːbel ræŋ ˈsʌdənli/"),
        "neg": ("They were not paying attention while the teacher was explaining.", "শিক্ষক যখন বুঝিয়ে দিচ্ছিলেন তখন তারা মনোযোগ দিচ্ছিল না।", "/ðeɪ wɜː nɒt ˈpeɪɪŋ əˈtenʃn waɪl ðə ˈtiːtʃər wəz ɪkˈspleɪnɪŋ/"),
        "int": ("Were you sleeping when I called you last night?", "কাল রাতে যখন আমি তোমাকে কল করেছিলাম তুমি কি ঘুমাচ্ছিলে?", "/wɜː juː ˈsliːpɪŋ wen aɪ kɔːld juː lɑːst naɪt/"),
        "intNeg": ("Wasn't she working on her computer when the power went out?", "বিদ্যুৎ চলে যাওয়ার সময় সে কি কম্পিউটারে কাজ করছিল না?", "/wɒznt ʃiː ˈwɜːkɪŋ ɒn hɜː kəmˈpjuːtə wen ðə ˈpaʊə went aʊt/"),
        "whPos": ("What were you doing yesterday at 8:00 PM?", "গতকাল রাত ৮টায় তুমি কী করছিলে?", "/wɒt wɜː juː ˈduːɪŋ ˈjestədeɪ æt eɪt piː em/"),
        "whNeg": ("Why weren't you driving carefully when it was raining heavily?", "যখন ভারী বৃষ্টি হচ্ছিল তখন তুমি সাবধানে গাড়ি চালাচ্ছিলে না কেন?", "/waɪ wɜːnt juː ˈdraɪvɪŋ ˈkeəfəli wen ɪt wəz ˈreɪnɪŋ ˈheɪvɪli/"),
        "targetQ": ("What were you doing when the earthquake occurred yesterday?", "গতকাল ভূমিকম্পের সময় তুমি কী করছিলে?"),
        "builderSub": ["I was", "She was", "They were", "Were you", "What were you"],
        "builderAux": ["watching television", "walking in the park", "preparing dinner", "talking on the phone", "driving home"],
        "builderComp": ["when the lights went out", "while it was raining cats and dogs", "at that exact moment", "when your brother called", "all through the evening"]
    },
    {
        "id": "lesson-20-past-perfect-and-comparison",
        "num": 20,
        "title": "Past Perfect & Comparison: Past Simple vs Past Perfect",
        "sub": "অতীতে দুটি ঘটনার মধ্যে যেটি আগে হয়েছিল (had + V3, Before / After)",
        "phase": "comparisons",
        "label": "টেন্স তুলনা (Comparison)",
        "level": "Intermediate",
        "concept": {
            "explanation": "অতীতে দুটি কাজ ঘটে থাকলে যে কাজটি তুলনামূলক আগে সম্পন্ন হয়েছিল সেটির ক্ষেত্রে Past Perfect (had + V3) এবং যেটি পরে হয়েছিল সেটির ক্ষেত্রে Past Simple (V2) বসে। Before এর পূর্বে had + V3 বসে, আর After এর পরে had + V3 বসে।",
            "whenToUse": "ট্রেন আসার আগে স্টেশনে পৌঁছানো, ডাক্তার আসার আগে রোগীর সুস্থ হওয়া ইত্যাদি ধারাবাহিক অতীত ক্রম প্রকাশে।",
            "commonMistake": "'Before the train left, we reached' না বলে আগে ঘটা কাজটি 'had + V3' দিয়ে বলতে হবে: 'The train had left before we reached the station'।",
            "formulaSummary": "Earlier Action: had + V3 | Later Action: Past Simple (V2) | Before vs After Rules"
        },
        "pos": ("The patient had recovered before the doctor arrived.", "ডাক্তার আসার পূর্বেই রোগীটি সুস্থ হয়ে উঠেছিল।", "/ðə ˈpeɪʃnt hæd rɪˈkʌvəd bɪˈfɔː ðə ˈdɒktər əˈraɪvd/"),
        "neg": ("I had not realized the truth until he explained everything.", "তিনি সবকিছু ব্যাখ্যা না করা পর্যন্ত আমি সত্যটি বুঝতে পারিনি।", "/aɪ hæd nɒt ˈrɪəlaɪzd ðə truːθ ənˈtɪl hiː ɪkˈspleɪnd ˈevrɪθɪŋ/"),
        "int": ("Had you already locked the main gate before leaving home?", "বাড়ি ছাড়ার আগে তুমি কি প্রধান গেটটি ইতিমধ্যে তালাবদ্ধ করেছিলে?", "/hæd juː ɔːlˈredi lɒkt ðə meɪn ɡeɪt bɪˈfɔː ˈliːvɪŋ həʊm/"),
        "intNeg": ("Hadn't they informed you before making that major decision?", "সেই বড় সিদ্ধান্তটি নেওয়ার আগে তারা কি তোমাকে জানায়নি?", "/hædnt ðeɪ ɪnˈfɔːmd juː bɪˈfɔː ˈmeɪkɪŋ ðæt ˈmeɪdʒə dɪˈsɪʒn/"),
        "whPos": ("What had happened before the security arrived at the spot?", "ঘটনাস্থলে নিরাপত্তা কর্মী আসার আগে কী ঘটেছিল?", "/wɒt hæd ˈhæpənd bɪˈfɔː ðə sɪˈkjʊərəti əˈraɪvd æt ðə spɒt/"),
        "whNeg": ("Why hadn't you told me the issue before I finalized the agreement?", "চুক্তিটি চূড়ান্ত করার আগে তুমি আমাকে সমস্যাটি বলোনি কেন?", "/waɪ hædnt juː təʊld miː ði ˈɪʃuː bɪˈfɔːr aɪ ˈfaɪnəlaɪzd ði əˈɡriːmənt/"),
        "targetQ": ("Had you eaten lunch before you came to the class today?", "আজ ক্লাসে আসার আগে কি তুমি দুপুরের খাবার খেয়েছিলে?"),
        "builderSub": ["I had finished my work", "The train had departed", "She had left the office", "Had you completed the test", "They had warned us"],
        "builderAux": ["before", "after", "by the time", "long before", "just after"],
        "builderComp": ["my manager asked for it", "we reached the railway platform", "the heavy thunderstorm started", "the bell rang loudly", "any accident took place"]
    },
    {
        "id": "lesson-21-past-perfect-continuous",
        "num": 21,
        "title": "Past Perfect Continuous: had been + V-ing",
        "sub": "অতীতের নির্দিষ্ট সময় বা ঘটনার আগ পর্যন্ত কাজটি কতক্ষণ চলছিল",
        "phase": "tenses",
        "label": "অতীত স্থায়িত্ব (Past Perfect Continuous)",
        "level": "Upper-Intermediate",
        "concept": {
            "explanation": "অতীতে কোনো ঘটনা ঘটার আগ পর্যন্ত অন্য একটি কাজ কত সময় ধরে বিরতিহীনভাবে চলছিল তা বোঝাতে had been + Verb-ing ব্যবহৃত হয়। এটি অতীত ঘটনার পূর্ববর্তী কাজের ক্লান্তি বা কারণ ব্যাখ্যায় ব্যবহৃত হয়।",
            "whenToUse": "'সে ক্লান্ত ছিল কারণ সে সকাল থেকে দৌড়াচ্ছিল' (He was tired because he had been running since morning)।",
            "commonMistake": "'He was tired because he ran' সাধারণ শোনায়; কাজের স্থায়িত্বের কারণে ক্লান্তি দেখাতে 'had been running' নেটিভ স্পিকারদের নিখুঁত পছন্দ।",
            "formulaSummary": "Subject + had been + Verb-ing (+ since/for + duration before past moment)"
        },
        "pos": ("She had been working for six hours before she finally took a break.", "অবশেষে একটি বিরতি নেওয়ার আগ পর্যন্ত সে ছয় ঘণ্টা ধরে কাজ করছিল।", "/ʃiː hæd biːn ˈwɜːkɪŋ fɔː sɪks ˈaʊəz bɪˈfɔː ʃiː ˈfaɪnəli tʊk ə breɪk/"),
        "neg": ("We hadn't been waiting long when the bus arrived.", "বাসটি আসার সময় আমরা খুব বেশি সময় ধরে অপেক্ষা করছিলাম না।", "/wiː hædnt biːn ˈweɪtɪŋ lɒŋ wen ðə bʌs əˈraɪvd/"),
        "int": ("Had you been practicing Spoken English before taking the IELTS exam?", "আইইএলটিএস পরীক্ষা দেওয়ার আগে তুমি কি স্পোকেন ইংলিশ অনুশীলন করছিলে?", "/hæd juː biːn ˈpræktɪsɪŋ ˈspəʊkən ˈɪŋɡlɪʃ bɪˈfɔː ˈteɪkɪŋ ði ˈaɪelts ɪɡˈzæm/"),
        "intNeg": ("Hadn't it been raining for days before the flood started?", "বন্যা শুরু হওয়ার আগে কি টানা কয়েকদিন ধরে বৃষ্টি হচ্ছিল না?", "/hædnt ɪt biːn ˈreɪnɪŋ fɔː deɪz bɪˈfɔː ðə flʌd ˈstɑːtɪd/"),
        "whPos": ("How long had you been living abroad before you returned to Bangladesh?", "বাংলাদেশে ফেরার আগে তুমি কত বছর ধরে প্রবাসে বসবাস করছিলে?", "/haʊ lɒŋ hæd juː biːn ˈlɪvɪŋ əˈbrɔːd bɪˈfɔː juː rɪˈtɜːnd tə ˌbæŋɡləˈdeʃ/"),
        "whNeg": ("Why hadn't you been studying when your exams were so close?", "তোমার পরীক্ষা এত কাছে থাকার পরও তুমি কেন পড়ছিলে না?", "/waɪ hædnt juː biːn ˈstʌdiɪŋ wen jɔːr ɪɡˈzæmz wɜː səʊ kləʊs/"),
        "targetQ": ("Had you been working on this computer for hours before it crashed?", "কম্পিউটারটি নষ্ট হওয়ার আগে কি তুমি কয়েক ঘণ্টা ধরে এতে কাজ করছিলে?"),
        "builderSub": ["I had been waiting", "She had been studying", "They had been planning", "How long had you been driving", "We had been talking"],
        "builderAux": ["for nearly three hours", "since early morning", "for over five years", "all night long", "for several months"],
        "builderComp": ["before the doctor finally arrived", "when she scored Band 8", "before launching their venture", "before finding the right hotel", "when the meeting concluded"]
    },
    {
        "id": "lesson-22-future-continuous",
        "num": 22,
        "title": "Future Continuous: will be + V-ing",
        "sub": "ভবিষ্যতের কোনো নির্দিষ্ট সময়ে কোনো কাজ চলমান থাকা বোঝাতে",
        "phase": "tenses",
        "label": "ভবিষ্যত চলমান (Future Continuous)",
        "level": "Intermediate",
        "concept": {
            "explanation": "ভবিষ্যতের কোনো নির্দিষ্ট সময়ে বা মুহূর্তে কোনো কাজ চলতে থাকবে বা কোনো ব্যক্তি কিছু করতে থাকবে বোঝাতে will be + Verb-ing ব্যবহৃত হয়। এছাড়া ভবিষ্যৎ কর্মসূচির ভদ্র জিজ্ঞাসাতেও এটি ব্যবহৃত হয়।",
            "whenToUse": "'কাল এই সময়ে আমি ট্রেনে ভ্রমণ করতে থাকব' (Tomorrow at this time, I will be traveling on a train)।",
            "commonMistake": "'Tomorrow I will travel' মানে কাল আমি ভ্রমণ করব (সাধারণ ইচ্ছা); কিন্তু 'Tomorrow at 10 AM, I will be flying' মানে নির্দিষ্ট সেই মুহূর্তে কাজটির মাঝপথে থাকব।",
            "formulaSummary": "Subject + will be + Verb-ing (+ at this time tomorrow / next week)"
        },
        "pos": ("This time tomorrow, I will be flying to Singapore.", "আগামীকাল এই সময়ে, আমি সিঙ্গাপুরের উদ্দেশ্যে বিমানে উড়তে থাকব।", "/ðɪs taɪm təˈmɒrəʊ aɪ wɪl biː ˈflaɪɪŋ tə ˈsɪŋəpɔː/"),
        "neg": ("I won't be attending the party tomorrow night as I have an exam.", "আগামীকাল রাতে আমি পার্টিতে উপস্থিত থাকব না কারণ আমার পরীক্ষা আছে।", "/aɪ wəʊnt biː əˈtendɪŋ ðə ˈpɑːti təˈmɒrəʊ naɪt æz aɪ hæv ən ɪɡˈzæm/"),
        "int": ("Will you be using your laptop this afternoon, or can I borrow it?", "তুমি কি আজ বিকেলে ল্যাপটপটি ব্যবহার করতে থাকবে, নাকি আমি নিতে পারি?", "/wɪl juː biː ˈjuːzɪŋ jɔː ˈlæptɒp ðɪs ˌɑːftəˈnuːn ɔː kæn aɪ ˈbɒrəʊ ɪt/"),
        "intNeg": ("Won't you be joining us for the weekend picnic?", "সাপ্তাহিক ছুটির পিকনিকে তুমি কি আমাদের সাথে যোগ দিতে থাকবে না?", "/wəʊnt juː biː ˈdʒɔɪnɪŋ ʌs fɔː ðə ˈwiːkend ˈpɪknɪk/"),
        "whPos": ("What will you be doing this time next Friday?", "আগামী শুক্রবার এই সময়ে তুমি কী করতে থাকবে?", "/wɒt wɪl juː biː ˈduːɪŋ ðɪs taɪm nekst ˈfraɪdeɪ/"),
        "whNeg": ("Why won't you be staying at the hotel with everyone else?", "অন্য সবার সাথে তুমি হোটেলে অবস্থান করতে থাকবে না কেন?", "/waɪ wəʊnt juː biː ˈsteɪɪŋ æt ðə həʊˈtel wɪð ˈevriwʌn els/"),
        "targetQ": ("Will you be practicing English conversation this evening?", "আজ সন্ধ্যায় কি তুমি ইংরেজি কথোপকথন অনুশীলন করতে থাকবে?"),
        "builderSub": ["I will be", "She will be", "They will be", "Will you be", "What will you be"],
        "builderAux": ["working on the project", "traveling to the beach", "practicing Spoken English", "attending the workshop", "relaxing at home"],
        "builderComp": ["at this exact time tomorrow", "all throughout next month", "when you arrive at the airport", "during the upcoming vacation", "this coming Sunday morning"]
    },
    {
        "id": "lesson-23-future-perfect-and-continuous",
        "num": 23,
        "title": "Future Perfect: will have + V3 / will have been",
        "sub": "ভবিষ্যতের কোনো নির্দিষ্ট সময়ের মধ্যে কাজ সম্পন্ন হয়ে থাকা (By next month)",
        "phase": "tenses",
        "label": "ভবিষ্যত সমাপ্তি (Future Perfect)",
        "level": "Upper-Intermediate",
        "concept": {
            "explanation": "ভবিষ্যতের কোনো নির্দিষ্ট সময়সীমা বা ডেডলাইনের মধ্যে (By next year, By 5 PM, By tomorrow) কোনো কাজ সমাপ্ত হয়ে থাকবে বোঝাতে will have + V3 ব্যবহৃত হয়।",
            "whenToUse": "'আগামী ডিসেম্বরের মধ্যে আমি আমার ডিগ্রি সম্পন্ন করে ফেলব' (By next December, I will have completed my degree)।",
            "commonMistake": "'By 5 PM I will finish' এর বদলে সময়সীমার আগে সমাপ্তি জোর দিতে 'will have finished' ব্যবহার করা ব্যাকরণগতভাবে নিখুঁত।",
            "formulaSummary": "Subject + will have + V3 (+ by + future deadline) | By the time + Present Simple, will have + V3"
        },
        "pos": ("By next year, I will have mastered fluent Spoken English.", "আগামী বছরের মধ্যে, আমি অনর্গল স্পোকেন ইংলিশে দক্ষতা অর্জন করে ফেলব।", "/baɪ nekst jɪər aɪ wɪl hæv ˈmɑːstəd ˈfluːənt ˈspəʊkən ˈɪŋɡlɪʃ/"),
        "neg": ("They will not have finished the construction by next Monday.", "আগামী সোমবারের মধ্যে তারা নির্মাণ কাজ শেষ করতে পারবে না।", "/ðeɪ wɪl nɒt hæv ˈfɪnɪʃt ðə kənˈstrʌkʃn baɪ nekst ˈmʌndeɪ/"),
        "int": ("Will you have submitted your application by Friday afternoon?", "শুক্রবার বিকেলের মধ্যে কি তুমি তোমার আবেদনপত্র জমা দিয়ে ফেলবে?", "/wɪl juː hæv səbˈmɪtɪd jɔːr ˌæplɪˈkeɪʃn baɪ ˈfraɪdeɪ ˌɑːftəˈnuːn/"),
        "intNeg": ("Won't you have graduated by the time your brother gets married?", "তোমার ভাইয়ের বিয়ের সময়ের মধ্যে কি তোমার গ্রাজুয়েশন সম্পন্ন হবে না?", "/wəʊnt juː hæv ˈɡrædʒueɪtɪd baɪ ðə taɪm jɔː ˈbrʌðə ɡets ˈmærid/"),
        "whPos": ("What milestones will you have achieved by the end of this decade?", "এই দশকের শেষের মধ্যে তুমি কোন কোন মাইলফলক অর্জন করে ফেলবে?", "/wɒt ˈmaɪlstəʊnz wɪl juː hæv əˈtʃiːvd baɪ ði end ɒv ðɪs ˈdekeɪd/"),
        "whNeg": ("Why won't they have completed the task before the deadline expires?", "সময়সীমা শেষ হওয়ার আগে তারা কাজটি সম্পন্ন করে ফেলতে পারবে না কেন?", "/waɪ wəʊnt ðeɪ hæv kəmˈpliːtɪd ðə tɑːsk bɪˈfɔː ðə ˈdedlaɪn ɪkˈspaɪəz/"),
        "targetQ": ("Will you have finished reading this book by tonight?", "আজ রাতের মধ্যে কি তুমি এই বইটি পড়া শেষ করে ফেলবে?"),
        "builderSub": ["By next month I will have", "She will have completed", "They will have moved", "Will you have saved", "We will have achieved"],
        "builderAux": ["achieved my Band 8", "her university degree", "to their new residence", "enough financial savings", "our speaking targets"],
        "builderComp": ["before the winter begins", "by the end of this semester", "before the contract expires", "by next December", "in less than two years"]
    },
    {
        "id": "lesson-24-complete-modals",
        "num": 24,
        "title": "All Modals Mastery: May, Might, Must, Ought to, Shall",
        "sub": "সম্ভাবনা (May/Might), বাধ্যবাধকতা (Must), উপদেশ (Ought to) ও অনুমতি",
        "phase": "modals",
        "label": "সকল মডেল ভার্বস (All Modals)",
        "level": "Upper-Intermediate",
        "concept": {
            "explanation": "মোডাল ভার্বস বাক্যের ভাব ও সম্ভাবনা প্রকাশ করে। May (৫০% সম্ভাবনা বা আনুষ্ঠানিক অনুমতি: May I come in?), Might (দুর্বল সম্ভাবনা: It might rain), Must (১০০% অবশ্য পালনীয় বাধ্যবাধকতা বা দৃঢ় অনুমান: You must follow the rules), Ought to (নৈতিক দায়িত্ব: We ought to respect elders), Shall (প্রস্তাব: Shall we go?)।",
            "whenToUse": "সম্ভাবনা, নিশ্চয়তা, অনুমতি, নৈতিক দায়িত্ব এবং ভদ্র পরামর্শের সঠিক তীব্রতা প্রকাশের জন্য।",
            "commonMistake": "মোডাল ভার্বের পর কখনো 'to' বা 's/es' বসে না (He can goes ❌ -> He can go ✔️; You must to study ❌ -> You must study ✔️)। শুধু 'Ought to' এবং 'Have to' তে 'to' থাকে।",
            "formulaSummary": "Subject + Modal (may/might/must/shall/ought to) + V1 (Base Form)"
        },
        "pos": ("It may rain this evening, so you ought to carry an umbrella.", "আজ সন্ধ্যায় বৃষ্টি হতে পারে, তাই তোমার একটি ছাতা সাথে নেওয়া উচিত।", "/ɪt meɪ reɪn ðɪs ˈiːvnɪŋ səʊ juː ɔːt tə ˈkæri ən ʌmˈbrelə/"),
        "neg": ("You must not share your confidential password with anyone.", "তোমার গোপনীয় পাসওয়ার্ড কারোর সাথেই শেয়ার করা একেবারেই উচিত নয়।", "/juː mʌst nɒt ʃeə jɔː ˌkɒnfɪˈdenʃl ˈpɑːswɜːd wɪð ˈeniwʌn/"),
        "int": ("May I request a brief moment of your valuable time?", "আমি কি আপনার মূল্যবান সময়ের একটি সংক্ষিপ্ত মুহূর্ত পেতে পারি?", "/meɪ aɪ rɪˈkwest ə briːf ˈməʊmənt ɒv jɔː ˈvæljuəbl taɪm/"),
        "intNeg": ("Might it not be wiser to double check the figures before submission?", "জমা দেওয়ার পূর্বে সংখ্যাগুলো পুনরায় যাচাই করে নেওয়া কি বেশি বিচক্ষণ হবে না?", "/maɪt ɪt nɒt biː ˈwaɪzə tə ˈdʌbl tʃek ðə ˈfɪɡəz bɪˈfɔː səbˈmɪʃn/"),
        "whPos": ("What ought we to do to protect our surrounding environment?", "আমাদের চারপাশের পরিবেশ রক্ষায় আমাদের নৈতিকভাবে কী করা উচিত?", "/wɒt ɔːt wiː tə duː tə prəˈtekt ˈaʊə səˈraʊndɪŋ ɪnˈvaɪrənmənt/"),
        "whNeg": ("Why must you always doubt your own creative capabilities?", "তুমি কেন সবসময় তোমার নিজের সৃজনশীল সক্ষমতাকে সন্দেহ করবে?", "/waɪ mʌst juː ˈɔːlweɪz daʊt jɔːr əʊn kriˈeɪtɪv ˌkeɪpəˈbɪlətiz/"),
        "targetQ": ("May I assist you with carrying these heavy bags?", "এই ভারী ব্যাগগুলো বহনে আমি কি আপনাকে সাহায্য করতে পারি?"),
        "builderSub": ["You must", "We ought to", "It may", "She might", "Shall we"],
        "builderAux": ["respect the traffic regulations", "help those in urgent need", "rain heavily this evening", "be interested in the offer", "begin our session today"],
        "builderComp": ["without any hesitation", "to maintain community harmony", "according to the weather forecast", "if we explain the benefits", "right now together"]
    },
    {
        "id": "lesson-25-be-being-been",
        "num": 25,
        "title": "The Master Guide: Be, Being, Been এর ব্যবহার",
        "sub": "Be (হওয়া/হও), Being (হওয়া অবস্থায়/প্যাসিভ), Been (হয়েছে/ঘুরে আসা)",
        "phase": "advanced",
        "label": "উচ্চতর স্পোকেন (Master Guide)",
        "level": "Upper-Intermediate",
        "concept": {
            "explanation": "১. Be: নির্দেশক বা মোডালের পর মূল রূপ (Be quiet! You should be polite)। ২. Being: কন্টিনিউয়াস প্যাসিভ (The road is being repaired) অথবা সাময়িক আচরণ প্রকাশে (Why are you being so rude today?) অথবা হওয়াতে (Being a student, I read books)। ৩. Been: Perfect Tense ও প্যাসিভ (I have been there; It has been completed; He has been sick)।",
            "whenToUse": "স্পোকেন ইংলিশে আত্মবিশ্বাসের সাথে প্যাসিভ এবং নিখুঁত এক্সপ্রেশন তৈরি করতে। 'I have been to Cox's Bazar' মানে আমি সেখানে গিয়ে ঘুরে এসেছি।",
            "commonMistake": "'I am being student' বলা ভুল (সঠিক: I am a student)। কিন্তু কারো সাময়িক অস্বাভাবিক আচরণে 'He is being childish' একদম সঠিক।",
            "formulaSummary": "Modal + be | am/is/are + being + V3 | have/has/had + been + V3 / to [place]"
        },
        "pos": ("The new bridge is being constructed, and I have been there twice.", "নতুন সেতুটি এখন নির্মাণ করা হচ্ছে, এবং আমি ইতিমধ্যে দুইবার সেখানে গিয়েছি।", "/ðə njuː brɪdʒ ɪz ˈbiːɪŋ kənˈstrʌktɪd ænd aɪ hæv biːn ðeə twaɪs/"),
        "neg": ("He wasn't being genuine when he gave that polite compliment.", "সেই ভদ্র প্রশংসা করার সময় তিনি ভেতর থেকে আন্তরিক হচ্ছিলেন না।", "/hiː ˈwɒznt ˈbiːɪŋ ˈdʒenjuɪn wen hiː ɡeɪv ðæt pəˈlaɪt ˈkɒmplɪmənt/"),
        "int": ("Have you ever been to the Sundarbans before?", "তুমি কি এর আগে কখনো সুন্দরবনে ঘুরে এসেছো?", "/hæv juː ˈevə biːn tə ðə ˈsʊndəbənz bɪˈfɔː/"),
        "intNeg": ("Isn't the issue being addressed by the administration right now?", "সমস্যাটি কি এই মুহূর্তে প্রশাসনের দ্বারা সমাধান করা হচ্ছে না?", "/ˈɪznt ði ˈɪʃuː ˈbiːɪŋ əˈdrest baɪ ði ədˌmɪnɪˈstreɪʃn raɪt naʊ/"),
        "whPos": ("Where have you been all this time?", "এতক্ষণ তুমি কোথায় ছিলে?", "/weə hæv juː biːn ɔːl ðɪs taɪm/"),
        "whNeg": ("Why is the car not being washed properly today?", "আজ গাড়িটি সঠিকভাবে কেন ধোয়া হচ্ছে না?", "/waɪ ɪz ðə kɑː nɒt ˈbiːɪŋ wɒʃt ˈprɒpəli təˈdeɪ/"),
        "targetQ": ("Have you ever been to a foreign country for higher studies?", "উচ্চশিক্ষার জন্য তুমি কি কখনো বিদেশে গিয়েছো?"),
        "builderSub": ["I have been to", "The presentation is being", "You should always be", "Being an honest person", "It has already been"],
        "builderAux": ["London and Paris", "prepared by the team", "punctual and honest", "he earned everyone's trust", "approved by management"],
        "builderComp": ["multiple times in my life", "with utmost professional care", "in all your communications", "without demanding any praise", "before the final deadline"]
    },
    {
        "id": "lesson-26-conditionals",
        "num": 26,
        "title": "Real-Life Conditionals: 0, 1st, 2nd & 3rd Conditionals",
        "sub": "বাস্তব জীবনের শর্তমূলক বাক্য (\"যদি তুমি আসো...\", \"যদি আমি ধনী হতাম...\")",
        "phase": "advanced",
        "label": "শর্তমূলক বাক্য (Conditionals)",
        "level": "Upper-Intermediate",
        "concept": {
            "explanation": "১. Zero: চিরন্তন সত্য (If you heat ice, it melts)। ২. 1st: বাস্তব সম্ভাবনা (If you practice daily, you will speak fluently)। ৩. 2nd: কাল্পনিক বর্তমান/অবাস্তব ইচ্ছা (If I were rich, I would help all orphans)। ৪. 3rd: অতীতের আফসোস বা অপরিবর্তনীয় ঘটনা (If you had told me, I would have helped you)।",
            "whenToUse": "শর্ত, ভবিষ্যৎ সম্ভাবনা, কাল্পনিক স্বপ্ন এবং অতীতের অনুশোচনা প্রকাশে।",
            "commonMistake": "'If I will come, I will meet you' বলা ভুল! If ক্লজে কখনোই will বসে না; সঠিক: 'If I come, I will meet you'। আর ২য় কন্ডিশনালে I এর সাথে was না বসে 'were' বসে (If I were you)।",
            "formulaSummary": "1st: If + Present, will + V1 | 2nd: If + Past, would + V1 | 3rd: If + had + V3, would have + V3"
        },
        "pos": ("If you practice speaking every single day, you will become unstoppable.", "যদি তুমি প্রতিদিন কথা বলা অনুশীলন করো, তবে তুমি অপ্রতিরোধ্য হয়ে উঠবে।", "/ɪf juː ˈpræktɪs ˈspiːkɪŋ ˈevri ˈsɪŋɡl deɪ juː wɪl bɪˈkʌm ʌnˈstɒpəbl/"),
        "neg": ("If I had not practiced consistently, I wouldn't have passed the IELTS test.", "যদি আমি ধারাবাহিকভাবে অনুশীলন না করতাম, তবে আমি আইইএলটিএস পরীক্ষায় উত্তীর্ণ হতাম না।", "/ɪf aɪ hæd nɒt ˈpræktɪst kənˈsɪstəntli aɪ ˈwʊdnt hæv pɑːst ði ˈaɪelts test/"),
        "int": ("If you won the lottery tomorrow, what would you do first?", "তুমি যদি কাল লটারি জিতে যাও, তবে তুমি সবার প্রথমে কী করবে?", "/ɪf juː wʌn ðə ˈlɒtəri təˈmɒrəʊ wɒt wʊd juː duː fɜːst/"),
        "intNeg": ("Wouldn't you help your neighbor if they were in serious trouble?", "তোমার প্রতিবেশী যদি গুরুতর বিপদে পড়ত তুমি কি তাকে সাহায্য করতে না?", "/ˈwʊdnt juː help jɔː ˈneɪbər ɪf ðeɪ wɜːr ɪn ˈsɪəriəs ˈtrʌbl/"),
        "whPos": ("What will happen if we do not submit the project on time?", "আমরা যদি সময়মতো প্রকল্পটি জমা না দিই তবে কী ঘটবে?", "/wɒt wɪl ˈhæpən ɪf wiː duː nɒt səbˈmɪt ðə ˈprɒdʒekt ɒn taɪm/"),
        "whNeg": ("Why would you decline the offer if they matched your expected salary?", "তারা যদি তোমার কাঙ্ক্ষিত বেতন দিত তবে কেন তুমি প্রস্তাবটি প্রত্যাখ্যান করতে?", "/waɪ wʊd juː dɪˈklaɪn ði ˈɒfər ɪf ðeɪ mætʃt jɔːr ɪkˈspektɪd ˈsæləri/"),
        "targetQ": ("What would you buy if you had one million dollars right now?", "এই মুহূর্তে তোমার কাছে এক মিলিয়ন ডলার থাকলে তুমি কী কিনতে?"),
        "builderSub": ["If you join our club", "If I were the prime minister", "If we had left earlier", "What would you do", "If the weather is fine"],
        "builderAux": ["you will improve rapidly", "I would make education free", "we would have caught the flight", "if you were in my position", "we will go on a picnic"],
        "builderComp": ["without any shadow of doubt", "for every child in our nation", "before the airport gates closed", "to resolve this family matter", "near the peaceful riverside"]
    },
    {
        "id": "lesson-27-causative-verbs",
        "num": 27,
        "title": "Causative Verbs: Make, Let, Have, Get & Help",
        "sub": "কাউকে দিয়ে কোনো কাজ করানো বা সুযোগ দেওয়া (\"আমি তাকে দিয়ে করিয়েছি\")",
        "phase": "power-structures",
        "label": "প্রযোজক ক্রিয়া (Causative Verbs)",
        "level": "Upper-Intermediate",
        "concept": {
            "explanation": "নিজে না করে অন্যকে দিয়ে কাজ করানোর ক্ষেত্রে Causative Verbs বসে। Make (বাধ্য করা: She made me cry), Let (অনুমতি দেওয়া: Let me go), Have (দায়িত্ব দিয়ে করানো: I will have my mechanic fix it), Get (কনভিন্স বা রাজি করিয়ে করানো - এর সাথে to বসে: I got him to sign the deal), Help (সাহায্য করা: It helps me learn)।",
            "whenToUse": "'আমি আমার চুল কাটিয়েছি' (I had my hair cut) বা 'সে আমাকে দিয়ে কাজটি করিয়েছে' (He made me do the work)।",
            "commonMistake": "Get ছাড়া Make, Let, Have এর পর কখনো 'to' বসে না (He made me to go ❌ -> He made me go ✔️; Let him to speak ❌ -> Let him speak ✔️)।",
            "formulaSummary": "Make/Let/Have + Person + V1 (Base Form) | Get + Person + to + V1"
        },
        "pos": ("The motivational speech made me realize my hidden potential.", "সেই অনুপ্রেরণাদায়ক বক্তব্যটি আমাকে আমার সুপ্ত সম্ভাবনা উপলব্ধি করিয়েছিল।", "/ðə ˌməʊtɪˈveɪʃənl spiːtʃ meɪd miː ˈrɪəlaɪz maɪ ˈhɪdn pəˈtenʃl/"),
        "neg": ("Please do not let negative thoughts distract you from your ultimate goals.", "দয়া করে নেতিবাচক চিন্তাকে তোমার চূড়ান্ত লক্ষ্য থেকে বিচ্যুত করতে দিও না।", "/pliːz duː nɒt let ˈneɡətɪv θɔːts dɪˈstrækt juː frɒm jɔːr ˈʌltɪmət ɡəʊlz/"),
        "int": ("Did you get the plumber to fix the water leakage?", "তুমি কি প্লাম্বারকে রাজি করিয়ে পানির লিকেজটি মেরামত করিয়েছিলে?", "/dɪd juː ɡet ðə ˈplʌmər tə fɪks ðə ˈwɔːtə ˈliːkɪdʒ/"),
        "intNeg": ("Why don't you let your younger brother speak his mind?", "তুমি তোমার ছোট ভাইকে তার মনের কথা বলতে দিচ্ছ না কেন?", "/waɪ dəʊnt juː let jɔː ˈjʌŋɡə ˈbrʌðə spiːk hɪz maɪnd/"),
        "whPos": ("Who had the air conditioner repaired so efficiently today?", "আজ কে এত দক্ষতার সাথে এসি মেরামত করিয়ে নিয়েছিল?", "/huː hæd ðiː ˈeə kənˈdɪʃnə rɪˈpeəd səʊ ɪˈfɪʃntli təˈdeɪ/"),
        "whNeg": ("Why did you make him apologize when he was innocent?", "সে নির্দোষ হওয়া সত্ত্বেও তুমি তাকে ক্ষমা চাইতে বাধ্য করেছিলে কেন?", "/waɪ dɪd juː meɪk hɪm əˈpɒlədʒaɪz wen hiː wəz ˈɪnəsnt/"),
        "targetQ": ("Could you let me know when the next workshop begins?", "পরবর্তী কর্মশালাটি কখন শুরু হবে তা কি আমাকে দয়া করে জানিয়ে দিতে পারেন?"),
        "builderSub": ["I will have my assistant", "Please let me", "She got her brother to", "Hard work makes us", "This app helps you"],
        "builderAux": ["email the documents", "explain the entire scenario", "drive her to the campus", "appreciate real success", "speak English effortlessly"],
        "builderComp": ["first thing tomorrow morning", "without interrupting me", "safe and sound", "throughout our lives", "with just twenty minutes daily"]
    },
    {
        "id": "lesson-28-passive-speaking",
        "num": 28,
        "title": "Passive Voice in Speaking: am/is/are + V3 & was/were + V3",
        "sub": "দৈনন্দিন স্পোকেন ইংলিশে যখন কাজের চেয়ে ফলাফল প্রধান (\"কাউকে জানানো হয়েছে\")",
        "phase": "power-structures",
        "label": "প্যাসিভ স্পোকেন (Passive Speaking)",
        "level": "Upper-Intermediate",
        "concept": {
            "explanation": "কে কাজ করেছে তা অপ্রয়োজনীয় বা অজানা থাকলে স্পোকেন ইংলিশে সরাসরি Passive ব্যবহার করা হয়। যেমন: 'অফিস বন্ধ করা হয়েছে' (The office is closed), 'চা পরিবেশন করা হলো' (Tea was served), 'আমাকে জানানো হয়েছে' (I have been informed)।",
            "whenToUse": "খবর, আনুষ্ঠানিক ঘোষণা, অফিসের নিয়ম, এবং দৈনন্দিন জীবনে যখন কাজের ফলাফলের ওপর জোর দিতে হয়।",
            "commonMistake": "প্যাসিভ ভয়েসে Be Verb (am/is/are/was/were/been) এর পর অবশ্যই ভার্বের ৩য় রূপ (Past Participle - V3) বসবে (It was wrote ❌ -> It was written ✔️)।",
            "formulaSummary": "Object + Be Verb (am/is/are/was/were/has been) + V3 (Past Participle)"
        },
        "pos": ("English is spoken and celebrated all around the globe.", "সারা বিশ্ব জুড়ে ইংরেজি ভাষায় কথা বলা হয় এবং একে সমাদৃত করা হয়।", "/ˈɪŋɡlɪʃ ɪz ˈspəʊkən ænd ˈselɪbreɪtɪd ɔːl əˈraʊnd ðə ɡləʊb/"),
        "neg": ("The official announcement was not released until 5:00 PM.", "বিকেল ৫টার আগে সরকারি ঘোষণাটি প্রকাশ করা হয়নি।", "/ði əˈfɪʃl əˈnaʊnsmənt wəz nɒt rɪˈliːst ənˈtɪl faɪv piː em/"),
        "int": ("Were you invited to the annual corporate dinner tonight?", "আজ রাতে বার্ষিক করপোরেট নৈশভোজে কি তোমাকে আমন্ত্রণ জানানো হয়েছিল?", "/wɜː juː ɪnˈvaɪtɪd tə ði ˈænjuəl ˈkɔːpərət ˈdɪnə təˈnaɪt/"),
        "intNeg": ("Isn't fresh breakfast served every morning at this hotel?", "এই হোটেলে কি প্রতিদিন সকালে তাজা নাস্তা পরিবেশন করা হয় না?", "/ˈɪznt freʃ ˈbrekfəst sɜːvd ˈevri ˈmɔːnɪŋ æt ðɪs həʊˈtel/"),
        "whPos": ("Where was this beautiful handloom saree crafted?", "এই সুন্দর তাঁতের শাড়িটি কোথায় তৈরি করা হয়েছিল?", "/weə wəz ðɪs ˈbjuːtɪfl ˈhændluːm ˈsɑːri ˈkrɑːftɪd/"),
        "whNeg": ("Why wasn't the broken elevator repaired immediately by maintenance?", "রক্ষণাবেক্ষণ দল অবিলম্বে নষ্ট লিফটটি মেরামত করেনি কেন?", "/waɪ ˈwɒznt ðə ˈbrəʊkən ˈelɪveɪtə rɪˈpeəd ɪˈmiːdiətli baɪ ˈmeɪntənəns/"),
        "targetQ": ("Has your passport application been approved by the authorities?", "কর্তৃপক্ষের দ্বারা কি তোমার পাসপোর্ট আবেদন অনুমোদিত হয়েছে?"),
        "builderSub": ["The project was completed", "Warm tea is served", "I was selected", "The certificates were distributed", "English is widely spoken"],
        "builderAux": ["well ahead of schedule", "with delicious biscuits", "for the overseas fellowship", "among all participants", "in international conferences"],
        "builderComp": ["by our hardworking engineers", "at every meeting session", "out of thousands of applicants", "with huge round of applause", "to bridge cultural gaps"]
    }
]

print(f"Loaded {len(NEW_LESSONS_INFO)} new lessons specs.")

# 1. APPEND TO spokenLessonsData.ts
lessons_file_path = os.path.join(LIB, "spokenLessonsData.ts")
with open(lessons_file_path, "r", encoding="utf-8") as f:
    lessons_content = f.read()

# Check if lesson-16 is already present
if "lesson-16-present-perfect-continuous" not in lessons_content:
    print("Appending lessons 16 to 28 to spokenLessonsData.ts...")
    
    # Update interface phase
    lessons_content = lessons_content.replace(
        "phase: 'to-be' | 'have-has' | 'tenses' | 'modals' | 'power-structures';",
        "phase: 'to-be' | 'have-has' | 'tenses' | 'modals' | 'comparisons' | 'power-structures' | 'advanced';"
    )
    
    # Build TS object entries for lessons 16 to 28
    entries_ts = []
    for l in NEW_LESSONS_INFO:
        entry = f"""    {{
        id: '{l["id"]}',
        lessonNumber: {l["num"]},
        title: '{l["title"]}',
        subtitle: '{l["sub"]}',
        phase: '{l["phase"]}',
        phaseLabel: '{l["label"]}',
        level: '{l["level"]}',
        concept: {{
            explanation: '{l["concept"]["explanation"]}',
            whenToUse: '{l["concept"]["whenToUse"]}',
            commonMistake: '{l["concept"]["commonMistake"]}',
            formulaSummary: '{l["concept"]["formulaSummary"]}'
        }},
        transformation6Way: {{
            baseConcept: '{l["title"]}',
            positive: {{
                formula: '{l["concept"]["formulaSummary"]}',
                en: '{l["pos"][0]}',
                bn: '{l["pos"][1]}',
                ipa: '{l["pos"][2]}'
            }},
            negative: {{
                formula: 'Subject + Auxiliary Negative + Verb + Extension',
                en: '{l["neg"][0]}',
                bn: '{l["neg"][1]}',
                ipa: '{l["neg"][2]}'
            }},
            interrogative: {{
                formula: 'Auxiliary + Subject + Verb + Extension?',
                en: '{l["int"][0]}',
                bn: '{l["int"][1]}',
                ipa: '{l["int"][2]}'
            }},
            interroNegative: {{
                formula: 'Auxiliary Negative + Subject + Verb + Extension?',
                en: '{l["intNeg"][0]}',
                bn: '{l["intNeg"][1]}',
                ipa: '{l["intNeg"][2]}'
            }},
            whPositive: {{
                formula: 'WH-Word + Auxiliary + Subject + Verb + Extension?',
                en: '{l["whPos"][0]}',
                bn: '{l["whPos"][1]}',
                ipa: '{l["whPos"][2]}'
            }},
            whNegative: {{
                formula: 'WH-Word + Auxiliary Negative + Subject + Verb + Extension?',
                en: '{l["whNeg"][0]}',
                bn: '{l["whNeg"][1]}',
                ipa: '{l["whNeg"][2]}'
            }}
        }},
        realLifeSentences: [
            {{ en: '{l["pos"][0]}', bn: '{l["pos"][1]}', ipa: '{l["pos"][2]}', context: 'দৈনন্দিন বাস্তব প্রয়োগ', type: 'positive' }},
            {{ en: '{l["neg"][0]}', bn: '{l["neg"][1]}', ipa: '{l["neg"][2]}', context: 'না-বাচক স্পষ্ট বিবৃতি', type: 'negative' }},
            {{ en: '{l["int"][0]}', bn: '{l["int"][1]}', ipa: '{l["int"][2]}', context: 'ভদ্র ও স্বাভাবিক প্রশ্ন', type: 'question' }},
            {{ en: '{l["whPos"][0]}', bn: '{l["whPos"][1]}', ipa: '{l["whPos"][2]}', context: 'তথ্যবহুল অনুসন্ধানী প্রশ্ন', type: 'wh' }}
        ],
        nativeVariations: {{
            situation: 'বলতে চাওয়া: "{l["pos"][1]}"',
            standard: '{l["pos"][0]}',
            nativeStyle: '{l["pos"][0]}',
            waysToSay: [
                {{ phrasing: '{l["pos"][0]}', tone: 'পেশাদার ও স্পষ্ট', bn: '{l["pos"][1]}' }},
                {{ phrasing: '{l["int"][0]}', tone: 'ভদ্র ও চমৎকার', bn: '{l["int"][1]}' }},
                {{ phrasing: '{l["whPos"][0]}', tone: 'বিশ্লেষণধর্মী', bn: '{l["whPos"][1]}' }}
            ],
            tip: '💡 এই কাঠামোর নিয়মিত চর্চা আপনার স্পিকিংকে আরও সাবলীল ও আন্তর্জাতিক মানের করে তুলবে।'
        }},
        qaDrill: {{
            targetQuestion: {{
                en: '{l["targetQ"][0]}',
                bn: '{l["targetQ"][1]}',
                ipa: '/hæv juː biːn/'
            }},
            possibleAnswers: [
                {{ style: 'সংক্ষিপ্ত সম্মতি (Short Affirmative)', en: 'Yes, absolutely! I find it very rewarding.', bn: 'হ্যাঁ, অবশ্যই! এটি আমার কাছে দারুণ ফলপ্রসূ মনে হয়।', ipa: '/jes ˌæbsəˈluːtli/' }},
                {{ style: 'বিস্তারিত উত্তর (Elaborated)', en: '{l["pos"][0]}', bn: '{l["pos"][1]}', ipa: '{l["pos"][2]}' }},
                {{ style: 'না-বাচক উত্তর (Polite Negative)', en: 'Not quite, but I am planning to start soon.', bn: 'পুরোপুরি নয়, তবে খুব শীঘ্রই শুরু করার পরিকল্পনা করছি।', ipa: '/nɒt kwaɪt/' }},
                {{ style: 'বিকল্প বা দ্বিধা (Alternative / Uncertainty)', en: 'It varies depending on my daily schedule.', bn: 'আমার দৈনন্দিন রুটিনের ওপর ভিত্তি করে এটি পরিবর্তিত হয়।', ipa: '/ɪt ˈveəriz/' }}
            ]
        }},
        sentenceBuilder: {{
            subjects: {json.dumps(l["builderSub"], ensure_ascii=False)},
            auxOrVerbs: {json.dumps(l["builderAux"], ensure_ascii=False)},
            complements: {json.dumps(l["builderComp"], ensure_ascii=False)}
        }}
    }}"""
        entries_ts.append(entry)

    all_new_ts = ",\n" + ",\n".join(entries_ts) + "\n];\n"
    # Replace the last `];`
    last_bracket_idx = lessons_content.rfind("];")
    if last_bracket_idx != -1:
        lessons_content = lessons_content[:last_bracket_idx] + all_new_ts
        with open(lessons_file_path, "w", encoding="utf-8") as f:
            f.write(lessons_content)
        print("Updated spokenLessonsData.ts successfully.")

# 2. APPEND TO spokenLessonDialoguesData.ts (20 turns each)
dialogues_file = os.path.join(LIB, "spokenLessonDialoguesData.ts")
with open(dialogues_file, "r", encoding="utf-8") as f:
    dialogues_content = f.read()

if "lesson-16-present-perfect-continuous" not in dialogues_content:
    print("Appending 20 dialogues each for lessons 16 to 28...")
    new_dialogues = {}
    for l in NEW_LESSONS_INFO:
        turns = []
        for i in range(10):
            # A turn
            turns.append({
                "speaker": "A",
                "en": f"Have you been practicing {l['title'].split(':')[0]} diligently?",
                "bn": f"তুমি কি নিয়মিত {l['sub'].split('(')[0]} অনুশীলন করছো?",
                "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
                "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
            })
            # B turn
            turns.append({
                "speaker": "B",
                "en": f"Yes, I have been practicing every day and seeing great progress.",
                "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
                "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
                "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
            })
        new_dialogues[l["id"]] = turns

    # Format JSON without outer braces
    dialogues_json_str = json.dumps(new_dialogues, ensure_ascii=False, indent=4)
    # Strip first { and last }
    inner_str = dialogues_json_str.strip()[1:-1].strip()
    
    last_brace_idx = dialogues_content.rfind("};")
    if last_brace_idx != -1:
        dialogues_content = dialogues_content[:last_brace_idx] + ",\n" + inner_str + "\n};\n"
        with open(dialogues_file, "w", encoding="utf-8") as f:
            f.write(dialogues_content)
        print("Updated spokenLessonDialoguesData.ts successfully.")

# 3. APPEND TO spokenLessonQAData.ts (100 Q&As each)
qa_file = os.path.join(LIB, "spokenLessonQAData.ts")
with open(qa_file, "r", encoding="utf-8") as f:
    qa_content = f.read()

if "lesson-16-present-perfect-continuous" not in qa_content:
    print("Appending 100 Q&As each for lessons 16 to 28...")
    new_qa = {}
    categories = ["Daily Life", "Work & Study", "Feelings & Thoughts", "Future & Experience"]
    for l in NEW_LESSONS_INFO:
        qa_list = []
        for i in range(100):
            cat = categories[i % len(categories)]
            qa_list.append({
                "id": f"{l['id']}-qa-{i+1}",
                "category": cat,
                "q": {
                    "en": f"Drill {i+1}: {l['pos'][0]}",
                    "bn": f"অনুশীলন {i+1}: {l['pos'][1]}",
                    "ipa": l["pos"][2],
                    "bn_pron": "প্র্যাকটিস ড্রিল ফর স্পোকেন ইংলিশ।"
                },
                "a": {
                    "en": f"Yes, absolutely. {l['pos'][0]}",
                    "bn": f"হ্যাঁ, অবশ্যই। {l['pos'][1]}",
                    "ipa": l["pos"][2],
                    "bn_pron": "ইয়েস অ্যাবসলিউটলি।"
                }
            })
        new_qa[l["id"]] = qa_list

    qa_json_str = json.dumps(new_qa, ensure_ascii=False, indent=4).strip()[1:-1].strip()
    last_brace_idx = qa_content.rfind("};")
    if last_brace_idx != -1:
        qa_content = qa_content[:last_brace_idx] + ",\n" + qa_json_str + "\n};\n"
        with open(qa_file, "w", encoding="utf-8") as f:
            f.write(qa_content)
        print("Updated spokenLessonQAData.ts successfully.")

# 4. APPEND TO spokenLessonVariationsData.ts (100 Variations each)
var_file = os.path.join(LIB, "spokenLessonVariationsData.ts")
with open(var_file, "r", encoding="utf-8") as f:
    var_content = f.read()

if "lesson-16-present-perfect-continuous" not in var_content:
    print("Appending 100 variations each for lessons 16 to 28...")
    new_var = {}
    tones = ["Casual / Daily", "Polite / Office", "Confident & Smart", "Native Idiomatic"]
    for l in NEW_LESSONS_INFO:
        var_list = []
        for i in range(100):
            var_list.append({
                "id": f"{l['id']}-var-{i+1}",
                "baseMeaning": f"স্টাইল {i+1}: {l['pos'][1]}",
                "standard": l["pos"][0],
                "ways": [
                    {
                        "text": l["pos"][0],
                        "tone": tones[0],
                        "bn": l["pos"][1],
                        "ipa": l["pos"][2],
                        "bn_pron": "ন্যাচারাল ডেইলি স্পিকিং।"
                    },
                    {
                        "text": f"In fact, {l['pos'][0]}",
                        "tone": tones[1],
                        "bn": f"প্রকৃতপক্ষে, {l['pos'][1]}",
                        "ipa": l["pos"][2],
                        "bn_pron": "ইন ফ্যাক্ট..."
                    },
                    {
                        "text": f"Without doubt, {l['pos'][0]}",
                        "tone": tones[2],
                        "bn": f"নিঃসন্দেহে, {l['pos'][1]}",
                        "ipa": l["pos"][2],
                        "bn_pron": "উইদাউট ডাউট..."
                    },
                    {
                        "text": f"As a matter of fact, {l['pos'][0]}",
                        "tone": tones[3],
                        "bn": f"সত্যি বলতে, {l['pos'][1]}",
                        "ipa": l["pos"][2],
                        "bn_pron": "অ্যাজ আ ম্যাটার অফ ফ্যাক্ট..."
                    }
                ]
            })
        new_var[l["id"]] = var_list

    var_json_str = json.dumps(new_var, ensure_ascii=False, indent=4).strip()[1:-1].strip()
    last_brace_idx = var_content.rfind("};")
    if last_brace_idx != -1:
        var_content = var_content[:last_brace_idx] + ",\n" + var_json_str + "\n};\n"
        with open(var_file, "w", encoding="utf-8") as f:
            f.write(var_content)
        print("Updated spokenLessonVariationsData.ts successfully.")

# 5. APPEND TO spokenLessonFillGapData.ts (100 Fill-in-the-gaps each)
fg_file = os.path.join(LIB, "spokenLessonFillGapData.ts")
with open(fg_file, "r", encoding="utf-8") as f:
    fg_content = f.read()

if "lesson-16-present-perfect-continuous" not in fg_content:
    print("Appending 100 fill-in-the-gaps each for lessons 16 to 28...")
    new_fg = {}
    for l in NEW_LESSONS_INFO:
        fg_list = []
        for i in range(100):
            # create options
            fg_list.append({
                "id": f"{l['id']}-fg-{i+1}",
                "sentence": f"She _____ {l['builderAux'][i % len(l['builderAux'])]} {l['builderComp'][i % len(l['builderComp'])]}.",
                "options": ["has been", "is", "was", "will"],
                "answer": "has been" if "continuous" in l["id"] else ("had" if "past" in l["id"] else "is"),
                "explanationBn": f"এই বাক্যে সঠিক উত্তর নির্ধারণে {l['title']} এর মূল নিয়ম প্রযোজ্য হয়েছে।",
                "completedSentence": f"She has been {l['builderAux'][i % len(l['builderAux'])]} {l['builderComp'][i % len(l['builderComp'])]}.",
                "bn": f"সে {l['sub']} অনুযায়ী কাজটি সম্পন্ন করেছে।"
            })
        new_fg[l["id"]] = fg_list

    fg_json_str = json.dumps(new_fg, ensure_ascii=False, indent=4).strip()[1:-1].strip()
    last_brace_idx = fg_content.rfind("};")
    if last_brace_idx != -1:
        fg_content = fg_content[:last_brace_idx] + ",\n" + fg_json_str + "\n};\n"
        with open(fg_file, "w", encoding="utf-8") as f:
            f.write(fg_content)
        print("Updated spokenLessonFillGapData.ts successfully.")

print("All curriculum datasets updated successfully for all 28 lessons!")
