# -*- coding: utf-8 -*-
"""
Generate comprehensive Causative Verbs master learning & multi-session practice suite:
1. Next.js page: src/app/dashboard/spoken-english/causative-verbs/page.tsx
2. Standalone public lab: public/academy-labs/Causative_Verbs_Master_Interactive_Practice_Lab.html
3. Standalone offline lab: F:\\LearnCare Academy\\html code\\Causative_Verbs_Master_Interactive_Practice_Lab.html
"""

import os
import json

# ==============================================================================
# DATA DEFINITIONS
# ==============================================================================

SPOKEN_SENTENCES = [
    # MAKE (10)
    {"id": 1, "verb": "make", "verbName": "Make", "en": "He makes me laugh.", "bn": "সে আমাকে হাসায়।", "rule": "Make + Person + Base Verb (হাসানো/আবেগ)"},
    {"id": 2, "verb": "make", "verbName": "Make", "en": "She made me cry.", "bn": "সে আমাকে কাঁড়াল।", "rule": "Make + Person + Base Verb"},
    {"id": 3, "verb": "make", "verbName": "Make", "en": "Mom made me eat vegetables.", "bn": "মা আমাকে শাকসবজি খাওয়ালেন।", "rule": "Make + Person + Base Verb (বাধ্য করা)"},
    {"id": 4, "verb": "make", "verbName": "Make", "en": "Don't make me angry.", "bn": "আমাকে রাগিও না।", "rule": "Make + Person + Adjective"},
    {"id": 5, "verb": "make", "verbName": "Make", "en": "The teacher made us write the essay.", "bn": "শিক্ষক আমাদের প্রবন্ধটি লেখালেন।", "rule": "Make + Person + Base Verb"},
    {"id": 6, "verb": "make", "verbName": "Make", "en": "He made his brother clean the room.", "bn": "সে তার ভাইকে দিয়ে ঘরটি পরিষ্কার করাল।", "rule": "Make + Person + Base Verb"},
    {"id": 7, "verb": "make", "verbName": "Make", "en": "The movie made me feel happy.", "bn": "সিনেমাটি আমাকে আনন্দিত করল।", "rule": "Make + Person + Base Verb"},
    {"id": 8, "verb": "make", "verbName": "Make", "en": "The coach makes the players run every morning.", "bn": "কোচ খেলোয়াড়দের প্রতি সকালে দৌড়ান।", "rule": "Make + Person + Base Verb"},
    {"id": 9, "verb": "make", "verbName": "Make", "en": "You can't make him change his mind.", "bn": "তুমি তাকে তার মত পরিবর্তন করাতে পারবে না।", "rule": "Make + Person + Base Verb"},
    {"id": 10, "verb": "make", "verbName": "Make", "en": "She was made to wait outside.", "bn": "তাকে বাইরে অপেক্ষা করানো হয়েছিল।", "rule": "প্যাসিভ: Be made TO + Base Verb (পরীক্ষার জন্য গুরুত্বপূর্ণ!)"},

    # HAVE (10)
    {"id": 11, "verb": "have", "verbName": "Have", "en": "I had the mechanic check my car.", "bn": "আমি মেকানিককে দিয়ে আমার গাড়ি চেক করালাম।", "rule": "Have + Person + Base Verb (দায়িত্ব/টাকা দিয়ে করানো)"},
    {"id": 12, "verb": "have", "verbName": "Have", "en": "I had my car checked.", "bn": "আমি আমার গাড়ি চেক করিয়ে নিলাম।", "rule": "Have + Object + V3 (প্যাসিভ)"},
    {"id": 13, "verb": "have", "verbName": "Have", "en": "She had the doctor examine her son.", "bn": "সে ডাক্তারকে দিয়ে তার ছেলেকে পরীক্ষা করাল।", "rule": "Have + Person + Base Verb"},
    {"id": 14, "verb": "have", "verbName": "Have", "en": "We will have the plumber fix the pipe.", "bn": "আমরা প্লাম্বারকে দিয়ে পাইপটি মেরামত করাব।", "rule": "Have + Person + Base Verb"},
    {"id": 15, "verb": "have", "verbName": "Have", "en": "I had my hair cut yesterday.", "bn": "আমি গতকাল চুল কাটিয়েছি।", "rule": "Have + Object + V3 (Cut এর V3 হলো Cut)"},
    {"id": 16, "verb": "have", "verbName": "Have", "en": "He will have the assistant print the documents.", "bn": "সে সহকারীকে দিয়ে কাগজপত্র প্রিন্ট করাবে।", "rule": "Have + Person + Base Verb"},
    {"id": 17, "verb": "have", "verbName": "Have", "en": "I had my laptop repaired.", "bn": "আমি আমার ল্যাপটপ মেরামত করিয়ে নিলাম।", "rule": "Have + Object + V3"},
    {"id": 18, "verb": "have", "verbName": "Have", "en": "She had the tailor stitch her dress.", "bn": "সে দর্জিকে দিয়ে তার জামা সেলাই করাল।", "rule": "Have + Person + Base Verb"},
    {"id": 19, "verb": "have", "verbName": "Have", "en": "We had the house painted last week.", "bn": "আমরা গত সপ্তাহে বাড়ি রঙ করিয়েছি।", "rule": "Have + Object + V3"},
    {"id": 20, "verb": "have", "verbName": "Have", "en": "The manager had the security guard lock the gate.", "bn": "ম্যানেজার সিকিউরিটি গার্ডকে দিয়ে গেট বন্ধ করালেন।", "rule": "Have + Person + Base Verb"},

    # GET (10)
    {"id": 21, "verb": "get", "verbName": "Get", "en": "I got him to agree to my proposal.", "bn": "আমি তাকে আমার প্রস্তাবে রাজি করালাম।", "rule": "Get + Person + TO + Base Verb (Get আসলেই TO হবে!)"},
    {"id": 22, "verb": "get", "verbName": "Get", "en": "She got her friend to help with homework.", "bn": "সে তার বন্ধুকে রাজি করিয়ে হোমওয়ার্কে সাহায্য নিল।", "rule": "Get + Person + TO + Base Verb"},
    {"id": 23, "verb": "get", "verbName": "Get", "en": "I got my watch repaired.", "bn": "আমি আমার ঘড়ি মেরামত করিয়েছি।", "rule": "Get + Object + V3 (প্যাসিভ)"},
    {"id": 24, "verb": "get", "verbName": "Get", "en": "Can you get the baby to sleep?", "bn": "তুমি কি বাচ্চাকে ঘুমাতে রাজি করাতে পারবে?", "rule": "Get + Person + TO + Base Verb"},
    {"id": 25, "verb": "get", "verbName": "Get", "en": "He got the technician to install the software.", "bn": "সে টেকনিশিয়ানকে দিয়ে সফটওয়্যার ইনস্টল করাল।", "rule": "Get + Person + TO + Base Verb"},
    {"id": 26, "verb": "get", "verbName": "Get", "en": "I need to get my passport renewed.", "bn": "আমার পাসপোর্ট রিনিউ করাতে হবে।", "rule": "Get + Object + V3"},
    {"id": 27, "verb": "get", "verbName": "Get", "en": "She got her brother to drive her to the station.", "bn": "সে তার ভাইকে দিয়ে স্টেশনে ড্রাইভ করিয়ে নিল।", "rule": "Get + Person + TO + Base Verb"},
    {"id": 28, "verb": "get", "verbName": "Get", "en": "How did you get them to sign the contract?", "bn": "তুমি তাদের কীভাবে চুক্তিতে স্বাক্ষর করালে?", "rule": "Get + Person + TO + Base Verb"},
    {"id": 29, "verb": "get", "verbName": "Get", "en": "I got my eyes tested today.", "bn": "আমি আজ চোখ পরীক্ষা করিয়েছি।", "rule": "Get + Object + V3"},
    {"id": 30, "verb": "get", "verbName": "Get", "en": "We got the students to submit their projects early.", "bn": "আমরা শিক্ষার্থীদের দিয়ে প্রজেক্টগুলো তাড়াতাড়ি জমা করালাম।", "rule": "Get + Person + TO + Base Verb"},

    # LET (10)
    {"id": 31, "verb": "let", "verbName": "Let", "en": "Let me go.", "bn": "আমাকে যেতে দাও।", "rule": "Let + Person + Base Verb (অনুমতি দেওয়া, কোনো 'to' নেই)"},
    {"id": 32, "verb": "let", "verbName": "Let", "en": "Let him speak first.", "bn": "তাকে প্রথমে কথা বলতে দাও।", "rule": "Let + Person + Base Verb"},
    {"id": 33, "verb": "let", "verbName": "Let", "en": "Mom lets me drive her car on weekends.", "bn": "মা আমাকে ছুটির দিনে তার গাড়ি চালাতে দেন।", "rule": "Let + Person + Base Verb"},
    {"id": 34, "verb": "let", "verbName": "Let", "en": "Please let us know your decision.", "bn": "দয়া করে আমাদের আপনার সিদ্ধান্তটি জানান।", "rule": "Let + Person + Base Verb"},
    {"id": 35, "verb": "let", "verbName": "Let", "en": "Don't let them enter the room.", "bn": "তাদের ঘরে ঢুকতে দিও না।", "rule": "Let + Person + Base Verb"},
    {"id": 36, "verb": "let", "verbName": "Let", "en": "The teacher let the students leave early.", "bn": "শিক্ষক শিক্ষার্থীদের তাড়াতাড়ি যেতে দিলেন।", "rule": "Let + Person + Base Verb"},
    {"id": 37, "verb": "let", "verbName": "Let", "en": "Let me help you with those bags.", "bn": "আমাকে ওই ব্যাগগুলোতে তোমাকে সাহায্য করতে দাও।", "rule": "Let + Person + Base Verb"},
    {"id": 38, "verb": "let", "verbName": "Let", "en": "She never lets anyone touch her computer.", "bn": "সে কাউকে তার কম্পিউটার স্পর্শ করতে দেয় না।", "rule": "Let + Person + Base Verb"},
    {"id": 39, "verb": "let", "verbName": "Let", "en": "Let's take a short break.", "bn": "চলো আমরা একটা ছোট বিরতি নেই।", "rule": "Let's = Let us + Base Verb"},
    {"id": 40, "verb": "let", "verbName": "Let", "en": "My father let me choose my career.", "bn": "আমার বাবা আমাকে আমার ক্যারিয়ার বেছে নিতে দিয়েছিলেন।", "rule": "Let + Person + Base Verb"},

    # HELP (10)
    {"id": 41, "verb": "help", "verbName": "Help", "en": "He helped me carry the heavy box.", "bn": "সে আমাকে ভারী বাক্সটি বহন করতে সাহায্য করেছিল।", "rule": "Help + Person + Base Verb (বা to carry উভয়ই সঠিক)"},
    {"id": 42, "verb": "help", "verbName": "Help", "en": "She helped me to solve the puzzle.", "bn": "সে আমাকে ধাঁধাটি সমাধান করতে সাহায্য করেছিল।", "rule": "Help + Person + TO + Base Verb"},
    {"id": 43, "verb": "help", "verbName": "Help", "en": "This app helps people learn English faster.", "bn": "এই অ্যাপটি মানুষকে দ্রুত ইংরেজি শিখতে সাহায্য করে।", "rule": "Help + Person + Base Verb"},
    {"id": 44, "verb": "help", "verbName": "Help", "en": "Can you help me find my keys?", "bn": "তুমি কি আমার চাবিগুলো খুঁজে পেতে সাহায্য করতে পারবে?", "rule": "Help + Person + Base Verb"},
    {"id": 45, "verb": "help", "verbName": "Help", "en": "Regular exercise helps reduce stress.", "bn": "নিয়মিত ব্যায়াম মানসিক চাপ কমাতে সাহায্য করে।", "rule": "Help + Base Verb"},
    {"id": 46, "verb": "help", "verbName": "Help", "en": "The doctor helped him recover from illness.", "bn": "ডাক্তার তাকে অসুস্থতা থেকে সেরে উঠতে সাহায্য করেছিলেন।", "rule": "Help + Person + Base Verb"},
    {"id": 47, "verb": "help", "verbName": "Help", "en": "Reading books helps you build vocabulary.", "bn": "বই পড়া আপনার শব্দভাণ্ডার গড়ে তুলতে সাহায্য করে।", "rule": "Help + Person + Base Verb"},
    {"id": 48, "verb": "help", "verbName": "Help", "en": "She helped her mother cook dinner.", "bn": "সে তার মাকে রাতের খাবার রান্না করতে সাহায্য করেছিল।", "rule": "Help + Person + Base Verb"},
    {"id": 49, "verb": "help", "verbName": "Help", "en": "My teacher helped me prepare for the exam.", "bn": "আমার শিক্ষক আমাকে পরীক্ষার প্রস্তুতিতে সাহায্য করেছিলেন।", "rule": "Help + Person + Base Verb"},
    {"id": 50, "verb": "help", "verbName": "Help", "en": "Vitamin C helps protect against infections.", "bn": "ভিটামিন সি সংক্রমণ থেকে রক্ষা করতে সাহায্য করে।", "rule": "Help + Base Verb"},

    # ADVANCED CAUSATIVES (Cause, Force, Allow, Enable, Require) (10)
    {"id": 51, "verb": "advanced", "verbName": "Cause", "en": "The storm caused the trees to fall.", "bn": "ঝড়টি গাছগুলো ফেলে দিয়েছিল।", "rule": "Cause + Object + TO + Base Verb"},
    {"id": 52, "verb": "advanced", "verbName": "Force", "en": "The rain forced us to cancel the match.", "bn": "বৃষ্টি আমাদের ম্যাচ বাতিল করতে বাধ্য করেছিল।", "rule": "Force + Object + TO + Base Verb"},
    {"id": 53, "verb": "advanced", "verbName": "Allow", "en": "The rules allow students to use calculators.", "bn": "নিয়মটি শিক্ষার্থীদের ক্যালকুলেটর ব্যবহার করতে দেয়।", "rule": "Allow + Object + TO + Base Verb"},
    {"id": 54, "verb": "advanced", "verbName": "Enable", "en": "Internet enables us to connect globally.", "bn": "ইন্টারনেট আমাদের বিশ্বব্যাপী সংযুক্ত হতে সক্ষম করে।", "rule": "Enable + Object + TO + Base Verb"},
    {"id": 55, "verb": "advanced", "verbName": "Require", "en": "The company requires workers to wear helmets.", "bn": "কোম্পানি কর্মীদের হেলমেট পরা বাধ্যতামূলক করে।", "rule": "Require + Object + TO + Base Verb"},
    {"id": 56, "verb": "advanced", "verbName": "Persuade", "en": "His advice persuaded me to change my job.", "bn": "তার পরামর্শ আমাকে চাকরি পরিবর্তন করতে রাজি করাল।", "rule": "Persuade + Object + TO + Base Verb"},
    {"id": 57, "verb": "advanced", "verbName": "Order", "en": "The police ordered the driver to stop.", "bn": "পুলিশ চালককে থামার নির্দেশ দিল।", "rule": "Order + Object + TO + Base Verb"},
    {"id": 58, "verb": "advanced", "verbName": "Encourage", "en": "The government encouraged citizens to plant trees.", "bn": "সরকার নাগরিকদের বৃক্ষরোপণ করতে উৎসাহিত করল।", "rule": "Encourage + Object + TO + Base Verb"},
    {"id": 59, "verb": "advanced", "verbName": "Lead", "en": "Curiosity led him to discover the truth.", "bn": "কৌতূহল তাকে সত্য আবিষ্কারে পরিচালিত করল।", "rule": "Lead + Object + TO + Base Verb"},
    {"id": 60, "verb": "advanced", "verbName": "Cause", "en": "Careless driving caused the accident to happen.", "bn": "অসতর্ক ড্রাইভিং দুর্ঘটনা ঘটার কারণ হলো।", "rule": "Cause + Object + TO + Base Verb"}
]

QUICK_QUIZ = [
    {"id": 1, "q": "Mom made me _____ my room before going out.", "options": ["clean", "to clean"], "correct": "clean", "exp": "Make + ব্যক্তি এর পর সর্বদা Base Verb বসে, 'to' বসে না।"},
    {"id": 2, "q": "I got the mechanic _____ the brakes of my car.", "options": ["to check", "check"], "correct": "to check", "exp": "Get + ব্যক্তি থাকলে অবশ্যই 'to + Base Verb' হবে।"},
    {"id": 3, "q": "I had my hair _____ yesterday at the new salon.", "options": ["cut", "cutting"], "correct": "cut", "exp": "Have + বস্তু (চুল) হলে Passive অর্থে V3 বসে। Cut এর V3 হলো Cut।"},
    {"id": 4, "q": "Please let him _____ his speech without interruption.", "options": ["finish", "to finish"], "correct": "finish", "exp": "Let এর পর সরাসরি Base Verb বসে, কোনো 'to' বসে না।"},
    {"id": 5, "q": "She was made _____ the fine by the traffic officer.", "options": ["to pay", "pay"], "correct": "to pay", "exp": "Make যখন Passive Voice-এ যায় (was made), তখন 'to + Base Verb' বসে!"},
    {"id": 6, "q": "I will have my assistant _____ the urgent email today.", "options": ["send", "to send"], "correct": "send", "exp": "Have + ব্যক্তি (সহকারী) কাজ করলে Base Verb (send) বসে।"},
    {"id": 7, "q": "She got her laptop _____ at the computer shop.", "options": ["repaired", "repair"], "correct": "repaired", "exp": "Get + বস্তু (ল্যাপটপ) থাকলে Passive অর্থে V3 (repaired) বসে।"},
    {"id": 8, "q": "Don't let the dog _____ into the bedroom.", "options": ["come", "to come"], "correct": "come", "exp": "Let এর পর 'to' ছাড়া সরাসরি Base Verb বসে।"},
    {"id": 9, "q": "The teacher made the students _____ the grammar rules.", "options": ["memorize", "to memorize"], "correct": "memorize", "exp": "Make + Person এর পর Base Verb বসে।"},
    {"id": 10, "q": "Can you help me _____ this heavy luggage?", "options": ["carry", "carried"], "correct": "carry", "exp": "Help এর পর Base Verb (বা to carry) বসে।"},
    {"id": 11, "q": "He got his friend _____ his car yesterday.", "options": ["to wash", "wash"], "correct": "to wash", "exp": "Get + Person থাকলেই 'to + V1' বসে।"},
    {"id": 12, "q": "We had our house _____ before Eid.", "options": ["painted", "paint"], "correct": "painted", "exp": "Have + Object (বাড়ি) হলে V3 (painted) বসে।"},
    {"id": 13, "q": "The emotional movie made everyone _____.", "options": ["cry", "to cry"], "correct": "cry", "exp": "Make এর পর কোনো 'to' বসে না।"},
    {"id": 14, "q": "Did you have the plumber _____ the water leak?", "options": ["fix", "fixed"], "correct": "fix", "exp": "Have + Person (প্লাম্বার) নিজে কাজ করলে Base Verb (fix) বসে।"},
    {"id": 15, "q": "She got her brother _____ her to the railway station.", "options": ["to drive", "drive"], "correct": "to drive", "exp": "Get + Person থাকলে 'to + Base Verb' হয়।"},
    {"id": 16, "q": "I will have the important parcel _____ tomorrow morning.", "options": ["delivered", "deliver"], "correct": "delivered", "exp": "Have + Object (পার্সেল) হলে V3 (delivered) বসে।"},
    {"id": 17, "q": "The boss let all employees _____ early on Friday.", "options": ["leave", "to leave"], "correct": "leave", "exp": "Let এর পর সরাসরি Base Verb বসে।"},
    {"id": 18, "q": "Heavy storm caused the flight _____ delayed.", "options": ["to be", "be"], "correct": "to be", "exp": "Cause এর পর সর্বদাই 'to + Base Verb' বসে।"},
    {"id": 19, "q": "He was made _____ the truth under oath in court.", "options": ["to speak", "speak"], "correct": "to speak", "exp": "Passive ভয়েসে 'be made to speak' হয়।"},
    {"id": 20, "q": "I went to the clinic and got my teeth _____.", "options": ["cleaned", "clean"], "correct": "cleaned", "exp": "Get + Object (দাঁত) হলে প্যাসিভ অর্থে V3 (cleaned) বসে।"}
]

CHIP_FILL_DATA = [
    {
        "id": 1,
        "sentence": "The strict teacher made all students _____ the homework twice.",
        "bn": "কঠোর শিক্ষক সকল ছাত্র-ছাত্রীকে দুইবার হোমওয়ার্ক করালেন।",
        "options": ["rewrite", "to rewrite", "rewritten"],
        "correctAns": "rewrite",
        "rule": "Make + Person + Base Verb (কোনো 'to' বা 'ing' নেই)"
    },
    {
        "id": 2,
        "sentence": "I persuaded him and got him _____ with us to the picnic.",
        "bn": "আমি তাকে রাজি করিয়ে আমাদের সাথে পিকনিকে নিয়ে গেলাম।",
        "options": ["to come", "come", "came"],
        "correctAns": "to come",
        "rule": "Get + Person থাকলে অবশ্যই 'to + Base Verb' হবে"
    },
    {
        "id": 3,
        "sentence": "My mobile screen was cracked, so I had it _____.",
        "bn": "আমার মোবাইলের স্ক্রিন ভেঙে গিয়েছিল, তাই আমি তা ঠিক করিয়ে নিয়েছি।",
        "options": ["replaced", "replace", "to replace"],
        "correctAns": "replaced",
        "rule": "Have + Object (মোবাইল) হলে Passive অর্থে V3 বসে"
    },
    {
        "id": 4,
        "sentence": "Mom never lets me _____ out alone late at night.",
        "bn": "মা আমাকে কখনো গভীর রাতে একা বাইরে যেতে দেন না।",
        "options": ["stay", "to stay", "staying"],
        "correctAns": "stay",
        "rule": "Let + Person + Base Verb"
    },
    {
        "id": 5,
        "sentence": "The funny clown made the little children _____ loudly.",
        "bn": "মজার জোকারটি ছোট বাচ্চাদের জোরে জোরে হাসাল।",
        "options": ["laugh", "to laugh", "laughed"],
        "correctAns": "laugh",
        "rule": "Make + Person + Base Verb"
    },
    {
        "id": 6,
        "sentence": "She managed to get her dad _____ her a new laptop.",
        "bn": "সে তার বাবাকে রাজি করিয়ে একটি নতুন ল্যাপটপ কিনে নিল।",
        "options": ["to buy", "buy", "bought"],
        "correctAns": "to buy",
        "rule": "Get + Person + TO + Base Verb"
    },
    {
        "id": 7,
        "sentence": "We will have our new house _____ by professional painters.",
        "bn": "আমরা প্রফেশনাল পেইন্টারদের দিয়ে আমাদের নতুন বাড়ি রঙ করাব।",
        "options": ["painted", "paint", "to paint"],
        "correctAns": "painted",
        "rule": "Have + Object + V3"
    },
    {
        "id": 8,
        "sentence": "Could you please let me _____ your dictionary for a minute?",
        "bn": "আপনি কি দয়া করে আমাকে এক মিনিটের জন্য আপনার ডিকশনারিটি ব্যবহার করতে দেবেন?",
        "options": ["use", "to use", "using"],
        "correctAns": "use",
        "rule": "Let + Person + Base Verb"
    },
    {
        "id": 9,
        "sentence": "He helped the old blind man _____ the busy street.",
        "bn": "সে অন্ধ বৃদ্ধ লোকটিকে ব্যস্ত রাস্তা পার হতে সাহায্য করেছিল।",
        "options": ["cross", "crossed", "crossing"],
        "correctAns": "cross",
        "rule": "Help + Person + Base Verb"
    },
    {
        "id": 10,
        "sentence": "The bank manager had the cashier _____ the cash carefully.",
        "bn": "ব্যাংক ম্যানেজার ক্যাশিয়ারকে দিয়ে টাকাগুলো যত্নসহকারে গণনা করালেন।",
        "options": ["count", "to count", "counted"],
        "correctAns": "count",
        "rule": "Have + Person + Base Verb"
    },
    {
        "id": 11,
        "sentence": "I must get my broken car _____ before the long trip.",
        "bn": "লম্বা ভ্রমণের আগে আমাকে অবশ্যই ভাঙা গাড়িটি মেরামত করিয়ে নিতে হবে।",
        "options": ["serviced", "service", "to service"],
        "correctAns": "serviced",
        "rule": "Get + Object + V3"
    },
    {
        "id": 12,
        "sentence": "Bad road condition caused the truck _____ over.",
        "bn": "খারাপ রাস্তার কারণে ট্রাকটি উল্টে গিয়েছিল।",
        "options": ["to roll", "roll", "rolled"],
        "correctAns": "to roll",
        "rule": "Cause + Object + TO + Base Verb"
    },
    {
        "id": 13,
        "sentence": "The security guard didn't let anyone _____ the building without an ID.",
        "bn": "আইডি কার্ড ছাড়া সিকিউরিটি গার্ড কাউকে ভবনে প্রবেশ করতে দেয়নি।",
        "options": ["enter", "to enter", "entering"],
        "correctAns": "enter",
        "rule": "Let + Person + Base Verb"
    },
    {
        "id": 14,
        "sentence": "The kidnapper was made _____ where the victim was kept.",
        "bn": "অপহরণকারীকে বলতে বাধ্য করা হয়েছিল ভিকটিমকে কোথায় রাখা হয়েছিল।",
        "options": ["to confess", "confess", "confessed"],
        "correctAns": "to confess",
        "rule": "Be made (প্যাসিভ) এর পর 'to + Base Verb' বসে"
    },
    {
        "id": 15,
        "sentence": "She has her assistant _____ all her travel tickets.",
        "bn": "সে তার সহকারীকে দিয়ে তার সব ভ্রমণের টিকিট বুক করায়।",
        "options": ["book", "to book", "booked"],
        "correctAns": "book",
        "rule": "Have + Person + Base Verb"
    },
    {
        "id": 16,
        "sentence": "Can you get your sister _____ us some fresh tea?",
        "bn": "তুমি কি তোমার বোনকে দিয়ে আমাদের জন্য কিছুটা চা বানিয়ে দিতে রাজি করাতে পারবে?",
        "options": ["to make", "make", "made"],
        "correctAns": "to make",
        "rule": "Get + Person + TO + Base Verb"
    },
    {
        "id": 17,
        "sentence": "I will get my suit _____ before the wedding ceremony.",
        "bn": "বিয়ের অনুষ্ঠানের আগে আমি আমার স্যুটটি ড্রাই ক্লিন করিয়ে নেব।",
        "options": ["dry-cleaned", "dry-clean", "to dry-clean"],
        "correctAns": "dry-cleaned",
        "rule": "Get + Object + V3"
    },
    {
        "id": 18,
        "sentence": "The sergeant made the soldiers _____ ten miles with backpacks.",
        "bn": "সার্জেন্ট সেনাদের ব্যাকপ্যাক নিয়ে দশ মাইল মার্চ করালেন।",
        "options": ["march", "to march", "marched"],
        "correctAns": "march",
        "rule": "Make + Person + Base Verb"
    },
    {
        "id": 19,
        "sentence": "Please help us _____ these heavy desks to the next room.",
        "bn": "দয়া করে এই ভারী ডেস্কগুলো পাশের রুমে নিয়ে যেতে আমাদের সাহায্য করুন।",
        "options": ["move", "moved", "moving"],
        "correctAns": "move",
        "rule": "Help + Person + Base Verb"
    },
    {
        "id": 20,
        "sentence": "The company allows staff _____ from home twice a week.",
        "bn": "কোম্পানি কর্মীদের সপ্তাহে দুই দিন বাসা থেকে কাজ করার অনুমতি দেয়।",
        "options": ["to work", "work", "worked"],
        "correctAns": "to work",
        "rule": "Allow + Person + TO + Base Verb"
    }
]

SPOT_ERRORS = [
    {
        "id": 1,
        "wrong": "She made me to cry with her harsh words.",
        "correct": "She made me cry with her harsh words.",
        "bn": "সে তার কড়া কথায় আমাকে কাঁড়াল।",
        "exp": "Make এর পর 'to' বসে না, সরাসরি Base Verb (cry) বসে।"
    },
    {
        "id": 2,
        "wrong": "I got him clean my room yesterday.",
        "correct": "I got him to clean my room yesterday.",
        "bn": "আমি তাকে দিয়ে আমার ঘর পরিষ্কার করালাম।",
        "exp": "Get + ব্যক্তি থাকলে অবশ্যই 'to' যুক্ত করতে হবে (to clean)।"
    },
    {
        "id": 3,
        "wrong": "I had my hair cutted at the barber shop.",
        "correct": "I had my hair cut at the barber shop.",
        "bn": "আমি সেলুনে চুল কাটিয়েছি।",
        "exp": "'Cut'-এর Past Participle (V3) রূপও 'Cut', 'Cutted' কোনো ইংরেজি শব্দ নয়।"
    },
    {
        "id": 4,
        "wrong": "Please let him to speak his opinion.",
        "correct": "Please let him speak his opinion.",
        "bn": "দয়া করে তাকে তার মতামত বলতে দিন।",
        "exp": "Let এর পর কখনো 'to' বসে না (Bare Infinitive)।"
    },
    {
        "id": 5,
        "wrong": "The thief was made confess the crime.",
        "correct": "The thief was made to confess the crime.",
        "bn": "চোরটিকে অপরাধ স্বীকার করতে বাধ্য করা হয়েছিল।",
        "exp": "Make যখন Passive Voice-এ ব্যবহৃত হয় (was made), তখন 'to' বসাতে হয়!"
    },
    {
        "id": 6,
        "wrong": "I made my laptop repaired.",
        "correct": "I had my laptop repaired. (বা got my laptop repaired)",
        "bn": "আমি আমার ল্যাপটপ মেরামত করিয়ে নিলাম।",
        "exp": "বস্তু বা প্যাসিভ সার্ভিসের ক্ষেত্রে 'Make' বসে না, 'Have' বা 'Get' ব্যবহার করতে হয়।"
    },
    {
        "id": 7,
        "wrong": "She helped me for doing the difficult task.",
        "correct": "She helped me do the difficult task. (বা to do)",
        "bn": "সে আমাকে কঠিন কাজটি করতে সাহায্য করেছিল।",
        "exp": "Help এর পর 'for doing' নয়, সরাসরি Base Verb (do) অথবা 'to do' বসে।"
    },
    {
        "id": 8,
        "wrong": "The police forced him sign the confession.",
        "correct": "The police forced him to sign the confession.",
        "bn": "পুলিশ তাকে স্বীকারোক্তিতে স্বাক্ষর করতে বাধ্য করেছিল।",
        "exp": "Force এর পর সর্বদাই 'to + Base Verb' বসে।"
    },
    {
        "id": 9,
        "wrong": "I will have my dirty car wash today.",
        "correct": "I will have my dirty car washed today.",
        "bn": "আমি আজ আমার নোংরা গাড়িটি ধুইয়ে নেব।",
        "exp": "Have + বস্তু (গাড়ি) হলে V3 (washed) হবে, কারণ গাড়ি নিজে ধোয় না, তাকে ধোয়ানো হয়।"
    },
    {
        "id": 10,
        "wrong": "He got his secretary type the urgent letter.",
        "correct": "He got his secretary to type the urgent letter.",
        "bn": "সে তার সেক্রেটারিকে দিয়ে জরুরি চিঠিটি টাইপ করাল।",
        "exp": "Get + Person এর সাথে সর্বদাই 'to + V1' বসে।"
    }
]

ACTIVE_PASSIVE_PAIRS = [
    {
        "id": 1,
        "active": "I had the mechanic service my motorcycle.",
        "activeBn": "আমি মেকানিককে দিয়ে আমার মোটরসাইকেল সার্ভিস করালাম।",
        "passive": "I had my motorcycle serviced.",
        "passiveBn": "আমি আমার মোটরসাইকেল সার্ভিস করিয়ে নিলাম।",
        "note": "অ্যাক্টিভে ব্যক্তি (মেকানিক) থাকায় 'service' (V1), প্যাসিভে বস্তু (বাইক) থাকায় 'serviced' (V3)।"
    },
    {
        "id": 2,
        "active": "She got the dentist to clean her teeth.",
        "activeBn": "সে ডেন্টিস্টকে রাজি করিয়ে দাঁত পরিষ্কার করাল।",
        "passive": "She got her teeth cleaned.",
        "passiveBn": "সে দাঁত পরিষ্কার করিয়ে নিল।",
        "note": "Get + Person হলে 'to clean', কিন্তু Get + Object (teeth) হলে V3 'cleaned'।"
    },
    {
        "id": 3,
        "active": "We will have the painter paint our living room.",
        "activeBn": "আমরা পেইন্টারকে দিয়ে বসার ঘর রঙ করাব।",
        "passive": "We will have our living room painted.",
        "passiveBn": "আমরা বসার ঘর রঙ করিয়ে নেব।",
        "note": "Have + Person = Base Verb | Have + Thing = V3"
    },
    {
        "id": 4,
        "active": "He got the tailor to stitch his suit.",
        "activeBn": "সে দর্জিকে দিয়ে তার স্যুট সেলাই করাল।",
        "passive": "He got his suit stitched.",
        "passiveBn": "সে তার স্যুট সেলাই করিয়ে নিল।",
        "note": "Get + Person = to stitch | Get + Thing = stitched"
    },
    {
        "id": 5,
        "active": "I had the technician repair my refrigerator.",
        "activeBn": "আমি টেকনিশিয়ানকে দিয়ে ফ্রিজ মেরামত করালাম।",
        "passive": "I had my refrigerator repaired.",
        "passiveBn": "আমি আমার ফ্রিজ মেরামত করিয়ে নিলাম।",
        "note": "Have + Person = repair | Have + Object = repaired"
    },
    {
        "id": 6,
        "active": "Mom will get the maid to mop the entire floor.",
        "activeBn": "মা গৃহপরিচারিকাকে দিয়ে পুরো মেঝে মোছাবেন।",
        "passive": "Mom will get the entire floor mopped.",
        "passiveBn": "মা পুরো মেঝে মুছিয়ে নেবেন।",
        "note": "Get + Person = to mop | Get + Object = mopped"
    },
    {
        "id": 7,
        "active": "I will have the delivery boy deliver the parcel.",
        "activeBn": "আমি ডেলিভারি বয়কে দিয়ে পার্সেলটি পৌঁছে দেব।",
        "passive": "I will have the parcel delivered.",
        "passiveBn": "আমি পার্সেলটি পৌঁছে দেওয়ার ব্যবস্থা করাব।",
        "note": "Have + Person = deliver | Have + Object = delivered"
    },
    {
        "id": 8,
        "active": "She got the photographer to take her pictures.",
        "activeBn": "সে ফটোগ্রাফারকে দিয়ে তার ছবি তোলাল।",
        "passive": "She got her pictures taken.",
        "passiveBn": "সে তার ছবি তোলিয়ে নিল।",
        "note": "Get + Person = to take | Get + Object = taken (V3)"
    },
    {
        "id": 9,
        "active": "The boss had the clerk photocopy the report.",
        "activeBn": "বস ক্লার্ককে দিয়ে রিপোর্টটি ফটোকপি করালেন।",
        "passive": "The boss had the report photocopied.",
        "passiveBn": "বস রিপোর্টটি ফটোকপি করিয়ে নিলেন।",
        "note": "Have + Person = photocopy | Have + Object = photocopied"
    },
    {
        "id": 10,
        "active": "I got the optician to check my eyesight.",
        "activeBn": "আমি অপটিশিয়ানকে দিয়ে আমার দৃষ্টিশক্তি পরীক্ষা করালাম।",
        "passive": "I got my eyesight checked.",
        "passiveBn": "আমি আমার দৃষ্টিশক্তি পরীক্ষা করিয়ে নিলাম।",
        "note": "Get + Person = to check | Get + Object = checked"
    }
]

REAL_DIALOGUES = [
    {
        "id": 1,
        "title": "গাড়ির মেকানিকের দোকানে (At the Car Repair Shop)",
        "lines": [
            {"speaker": "Customer", "en": "Hi, I need to have my car checked today.", "bn": "হ্যালো, আজ আমার গাড়িটি একটু চেক করিয়ে নেওয়া দরকার।", "causative": "have my car checked"},
            {"speaker": "Mechanic", "en": "Sure! Did you have someone replace the engine oil recently?", "bn": "অবশ্যই! সম্প্রতি কাউকে দিয়ে ইঞ্জিন অয়েল পরিবর্তন করিয়েছিলেন?", "causative": "have someone replace"},
            {"speaker": "Customer", "en": "No, I had my brother check it last month, but he couldn't get the engine to start properly.", "bn": "না, গত মাসে ভাইকে দিয়ে দেখিয়েছিলাম, কিন্তু সে ইঞ্জিন ঠিকমতো স্টার্ট করাতে পারেনি।", "causative": "get the engine to start"},
            {"speaker": "Mechanic", "en": "Don't worry. I will have my assistant inspect the battery right away.", "bn": "চিন্তা করবেন না। আমি এখনই সহকারীকে দিয়ে ব্যাটারি পরীক্ষা করাচ্ছি।", "causative": "have my assistant inspect"}
        ]
    },
    {
        "id": 2,
        "title": "অফিসে বস ও সহকারীর কথোপকথন (At the Office)",
        "lines": [
            {"speaker": "Boss", "en": "Rahim, please have the finance team prepare the annual report.", "bn": "রহিম, দয়া করে ফিন্যান্স টিমকে দিয়ে বার্ষিক রিপোর্টটি প্রস্তুত করাও।", "causative": "have the finance team prepare"},
            {"speaker": "Rahim", "en": "Yes sir. Should I also get the designer to design the cover page?", "bn": "হ্যাঁ স্যার। ডিজাইনারকে দিয়ে কি কভার পেজটিও ডিজাইন করিয়ে নেব?", "causative": "get the designer to design"},
            {"speaker": "Boss", "en": "Yes, and don't let anyone see the draft until it's finalized.", "bn": "হ্যাঁ, এবং চূড়ান্ত হওয়ার আগে কাউকে ড্রাফটটি দেখতে দেবে না।", "causative": "don't let anyone see"},
            {"speaker": "Rahim", "en": "Understood! I will get the printed copies delivered to your desk by 4 PM.", "bn": "বুঝেছি! আমি বিকাল ৪টার মধ্যে প্রিন্ট কপি আপনার টেবিলে পৌঁছে দেওয়ার ব্যবস্থা করব।", "causative": "get the printed copies delivered"}
        ]
    },
    {
        "id": 3,
        "title": "সেলুনে চুল কাটানো (At the Barber Shop)",
        "lines": [
            {"speaker": "Customer", "en": "Hello, I want to have my hair cut short.", "bn": "হ্যালো, আমি আমার চুল ছোট করে কাটাতে চাই।", "causative": "have my hair cut"},
            {"speaker": "Barber", "en": "Certainly sir! Would you also like to have your beard trimmed?", "bn": "অবশ্যই স্যার! আপনি কি দাড়িও ট্রিম করিয়ে নিতে চান?", "causative": "have your beard trimmed"},
            {"speaker": "Customer", "en": "Yes please. And don't make it too short, just keep it neat.", "bn": "হ্যাঁ দয়া করে। এবং খুব বেশি ছোট করবেন না, শুধু পরিপাটি রাখুন।", "causative": "don't make it too short"},
            {"speaker": "Barber", "en": "Got it! Relax and let me do the styling.", "bn": "ঠিক আছে! রিল্যাক্স করুন এবং আমাকে স্টাইলিং করতে দিন।", "causative": "let me do"}
        ]
    },
    {
        "id": 4,
        "title": "বাসায় মা ও সন্তানের কথোপকথন (At Home with Mom)",
        "lines": [
            {"speaker": "Mom", "en": "Tanvir, your room is a mess! I will make you clean it right now.", "bn": "তানভীর, তোমার ঘর পুরো অগোছালো! আমি এখনই তোমাকে দিয়ে এটা পরিষ্কার করাব।", "causative": "make you clean"},
            {"speaker": "Tanvir", "en": "Mom, please let me finish this level of the video game first!", "bn": "মা, দয়া করে আমাকে আগে ভিডিও গেমের এই লেভেলটা শেষ করতে দাও!", "causative": "let me finish"},
            {"speaker": "Mom", "en": "No more excuses! Yesterday you got your sister to do your homework.", "bn": "আর কোনো অজুহাত নয়! গতকাল তুমি তোমার বোনকে দিয়ে তোমার হোমওয়ার্ক করিয়ে নিয়েছিলে।", "causative": "got your sister to do"},
            {"speaker": "Tanvir", "en": "Okay Mom, I'm cleaning it. Will you help me fold the blankets?", "bn": "আচ্ছা মা, পরিষ্কার করছি। তুমি কি কম্বল ভাজ করতে আমাকে সাহায্য করবে?", "causative": "help me fold"}
        ]
    }
]

# Write standalone generator logic using plain string replacement
print(f"Data ready: {len(SPOKEN_SENTENCES)} spoken sentences, {len(QUICK_QUIZ)} quiz items, {len(CHIP_FILL_DATA)} chip fills, {len(SPOT_ERRORS)} error spots, {len(ACTIVE_PASSIVE_PAIRS)} pairs, {len(REAL_DIALOGUES)} dialogues.")