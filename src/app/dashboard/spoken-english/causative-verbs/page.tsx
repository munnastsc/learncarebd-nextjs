'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
    ArrowLeft, Zap, Sparkles, BookOpen, CheckCircle2,
    Trophy, Volume2, RotateCcw, Lightbulb, Check, X,
    Layers, Award, Play, ChevronRight, HelpCircle, Eye,
    MessageSquare, AlertTriangle, ArrowRightLeft, ShieldCheck, Flame
} from 'lucide-react';

interface SpokenItem {
    id: number;
    verb: string;
    verbName: string;
    en: string;
    bn: string;
    rule: string;
}

interface QuickQuizItem {
    id: number;
    q: string;
    options: string[];
    correct: string;
    exp: string;
}

interface ChipFillItem {
    id: number;
    sentence: string;
    bn: string;
    options: string[];
    correctAns: string;
    rule: string;
}

interface SpotErrorItem {
    id: number;
    wrong: string;
    correct: string;
    bn: string;
    exp: string;
}

interface PairItem {
    id: number;
    active: string;
    activeBn: string;
    passive: string;
    passiveBn: string;
    note: string;
}

interface DialogueLine {
    speaker: string;
    en: string;
    bn: string;
    causative: string;
}

interface DialogueItem {
    id: number;
    title: string;
    lines: DialogueLine[];
}

const SPOKEN_SENTENCES: SpokenItem[] = [
  {
    "id": 1,
    "verb": "make",
    "verbName": "Make",
    "en": "He makes me laugh.",
    "bn": "সে আমাকে হাসায়।",
    "rule": "Make + Person + Base Verb (হাসানো/আবেগ)"
  },
  {
    "id": 2,
    "verb": "make",
    "verbName": "Make",
    "en": "She made me cry.",
    "bn": "সে আমাকে কাঁড়াল।",
    "rule": "Make + Person + Base Verb"
  },
  {
    "id": 3,
    "verb": "make",
    "verbName": "Make",
    "en": "Mom made me eat vegetables.",
    "bn": "মা আমাকে শাকসবজি খাওয়ালেন।",
    "rule": "Make + Person + Base Verb (বাধ্য করা)"
  },
  {
    "id": 4,
    "verb": "make",
    "verbName": "Make",
    "en": "Don't make me angry.",
    "bn": "আমাকে রাগিও না।",
    "rule": "Make + Person + Adjective"
  },
  {
    "id": 5,
    "verb": "make",
    "verbName": "Make",
    "en": "The teacher made us write the essay.",
    "bn": "শিক্ষক আমাদের প্রবন্ধটি লেখালেন।",
    "rule": "Make + Person + Base Verb"
  },
  {
    "id": 6,
    "verb": "make",
    "verbName": "Make",
    "en": "He made his brother clean the room.",
    "bn": "সে তার ভাইকে দিয়ে ঘরটি পরিষ্কার করাল।",
    "rule": "Make + Person + Base Verb"
  },
  {
    "id": 7,
    "verb": "make",
    "verbName": "Make",
    "en": "The movie made me feel happy.",
    "bn": "সিনেমাটি আমাকে আনন্দিত করল।",
    "rule": "Make + Person + Base Verb"
  },
  {
    "id": 8,
    "verb": "make",
    "verbName": "Make",
    "en": "The coach makes the players run every morning.",
    "bn": "কোচ খেলোয়াড়দের প্রতি সকালে দৌড়ান।",
    "rule": "Make + Person + Base Verb"
  },
  {
    "id": 9,
    "verb": "make",
    "verbName": "Make",
    "en": "You can't make him change his mind.",
    "bn": "তুমি তাকে তার মত পরিবর্তন করাতে পারবে না।",
    "rule": "Make + Person + Base Verb"
  },
  {
    "id": 10,
    "verb": "make",
    "verbName": "Make",
    "en": "She was made to wait outside.",
    "bn": "তাকে বাইরে অপেক্ষা করানো হয়েছিল।",
    "rule": "প্যাসিভ: Be made TO + Base Verb (পরীক্ষার জন্য গুরুত্বপূর্ণ!)"
  },
  {
    "id": 11,
    "verb": "have",
    "verbName": "Have",
    "en": "I had the mechanic check my car.",
    "bn": "আমি মেকানিককে দিয়ে আমার গাড়ি চেক করালাম।",
    "rule": "Have + Person + Base Verb (দায়িত্ব/টাকা দিয়ে করানো)"
  },
  {
    "id": 12,
    "verb": "have",
    "verbName": "Have",
    "en": "I had my car checked.",
    "bn": "আমি আমার গাড়ি চেক করিয়ে নিলাম।",
    "rule": "Have + Object + V3 (প্যাসিভ)"
  },
  {
    "id": 13,
    "verb": "have",
    "verbName": "Have",
    "en": "She had the doctor examine her son.",
    "bn": "সে ডাক্তারকে দিয়ে তার ছেলেকে পরীক্ষা করাল।",
    "rule": "Have + Person + Base Verb"
  },
  {
    "id": 14,
    "verb": "have",
    "verbName": "Have",
    "en": "We will have the plumber fix the pipe.",
    "bn": "আমরা প্লাম্বারকে দিয়ে পাইপটি মেরামত করাব।",
    "rule": "Have + Person + Base Verb"
  },
  {
    "id": 15,
    "verb": "have",
    "verbName": "Have",
    "en": "I had my hair cut yesterday.",
    "bn": "আমি গতকাল চুল কাটিয়েছি।",
    "rule": "Have + Object + V3 (Cut এর V3 হলো Cut)"
  },
  {
    "id": 16,
    "verb": "have",
    "verbName": "Have",
    "en": "He will have the assistant print the documents.",
    "bn": "সে সহকারীকে দিয়ে কাগজপত্র প্রিন্ট করাবে।",
    "rule": "Have + Person + Base Verb"
  },
  {
    "id": 17,
    "verb": "have",
    "verbName": "Have",
    "en": "I had my laptop repaired.",
    "bn": "আমি আমার ল্যাপটপ মেরামত করিয়ে নিলাম।",
    "rule": "Have + Object + V3"
  },
  {
    "id": 18,
    "verb": "have",
    "verbName": "Have",
    "en": "She had the tailor stitch her dress.",
    "bn": "সে দর্জিকে দিয়ে তার জামা সেলাই করাল।",
    "rule": "Have + Person + Base Verb"
  },
  {
    "id": 19,
    "verb": "have",
    "verbName": "Have",
    "en": "We had the house painted last week.",
    "bn": "আমরা গত সপ্তাহে বাড়ি রঙ করিয়েছি।",
    "rule": "Have + Object + V3"
  },
  {
    "id": 20,
    "verb": "have",
    "verbName": "Have",
    "en": "The manager had the security guard lock the gate.",
    "bn": "ম্যানেজার সিকিউরিটি গার্ডকে দিয়ে গেট বন্ধ করালেন।",
    "rule": "Have + Person + Base Verb"
  },
  {
    "id": 21,
    "verb": "get",
    "verbName": "Get",
    "en": "I got him to agree to my proposal.",
    "bn": "আমি তাকে আমার প্রস্তাবে রাজি করালাম।",
    "rule": "Get + Person + TO + Base Verb (Get আসলেই TO হবে!)"
  },
  {
    "id": 22,
    "verb": "get",
    "verbName": "Get",
    "en": "She got her friend to help with homework.",
    "bn": "সে তার বন্ধুকে রাজি করিয়ে হোমওয়ার্কে সাহায্য নিল।",
    "rule": "Get + Person + TO + Base Verb"
  },
  {
    "id": 23,
    "verb": "get",
    "verbName": "Get",
    "en": "I got my watch repaired.",
    "bn": "আমি আমার ঘড়ি মেরামত করিয়েছি।",
    "rule": "Get + Object + V3 (প্যাসিভ)"
  },
  {
    "id": 24,
    "verb": "get",
    "verbName": "Get",
    "en": "Can you get the baby to sleep?",
    "bn": "তুমি কি বাচ্চাকে ঘুমাতে রাজি করাতে পারবে?",
    "rule": "Get + Person + TO + Base Verb"
  },
  {
    "id": 25,
    "verb": "get",
    "verbName": "Get",
    "en": "He got the technician to install the software.",
    "bn": "সে টেকনিশিয়ানকে দিয়ে সফটওয়্যার ইনস্টল করাল।",
    "rule": "Get + Person + TO + Base Verb"
  },
  {
    "id": 26,
    "verb": "get",
    "verbName": "Get",
    "en": "I need to get my passport renewed.",
    "bn": "আমার পাসপোর্ট রিনিউ করাতে হবে।",
    "rule": "Get + Object + V3"
  },
  {
    "id": 27,
    "verb": "get",
    "verbName": "Get",
    "en": "She got her brother to drive her to the station.",
    "bn": "সে তার ভাইকে দিয়ে স্টেশনে ড্রাইভ করিয়ে নিল।",
    "rule": "Get + Person + TO + Base Verb"
  },
  {
    "id": 28,
    "verb": "get",
    "verbName": "Get",
    "en": "How did you get them to sign the contract?",
    "bn": "তুমি তাদের কীভাবে চুক্তিতে স্বাক্ষর করালে?",
    "rule": "Get + Person + TO + Base Verb"
  },
  {
    "id": 29,
    "verb": "get",
    "verbName": "Get",
    "en": "I got my eyes tested today.",
    "bn": "আমি আজ চোখ পরীক্ষা করিয়েছি।",
    "rule": "Get + Object + V3"
  },
  {
    "id": 30,
    "verb": "get",
    "verbName": "Get",
    "en": "We got the students to submit their projects early.",
    "bn": "আমরা শিক্ষার্থীদের দিয়ে প্রজেক্টগুলো তাড়াতাড়ি জমা করালাম।",
    "rule": "Get + Person + TO + Base Verb"
  },
  {
    "id": 31,
    "verb": "let",
    "verbName": "Let",
    "en": "Let me go.",
    "bn": "আমাকে যেতে দাও।",
    "rule": "Let + Person + Base Verb (অনুমতি দেওয়া, কোনো 'to' নেই)"
  },
  {
    "id": 32,
    "verb": "let",
    "verbName": "Let",
    "en": "Let him speak first.",
    "bn": "তাকে প্রথমে কথা বলতে দাও।",
    "rule": "Let + Person + Base Verb"
  },
  {
    "id": 33,
    "verb": "let",
    "verbName": "Let",
    "en": "Mom lets me drive her car on weekends.",
    "bn": "মা আমাকে ছুটির দিনে তার গাড়ি চালাতে দেন।",
    "rule": "Let + Person + Base Verb"
  },
  {
    "id": 34,
    "verb": "let",
    "verbName": "Let",
    "en": "Please let us know your decision.",
    "bn": "দয়া করে আমাদের আপনার সিদ্ধান্তটি জানান।",
    "rule": "Let + Person + Base Verb"
  },
  {
    "id": 35,
    "verb": "let",
    "verbName": "Let",
    "en": "Don't let them enter the room.",
    "bn": "তাদের ঘরে ঢুকতে দিও না।",
    "rule": "Let + Person + Base Verb"
  },
  {
    "id": 36,
    "verb": "let",
    "verbName": "Let",
    "en": "The teacher let the students leave early.",
    "bn": "শিক্ষক শিক্ষার্থীদের তাড়াতাড়ি যেতে দিলেন।",
    "rule": "Let + Person + Base Verb"
  },
  {
    "id": 37,
    "verb": "let",
    "verbName": "Let",
    "en": "Let me help you with those bags.",
    "bn": "আমাকে ওই ব্যাগগুলোতে তোমাকে সাহায্য করতে দাও।",
    "rule": "Let + Person + Base Verb"
  },
  {
    "id": 38,
    "verb": "let",
    "verbName": "Let",
    "en": "She never lets anyone touch her computer.",
    "bn": "সে কাউকে তার কম্পিউটার স্পর্শ করতে দেয় না।",
    "rule": "Let + Person + Base Verb"
  },
  {
    "id": 39,
    "verb": "let",
    "verbName": "Let",
    "en": "Let's take a short break.",
    "bn": "চলো আমরা একটা ছোট বিরতি নেই।",
    "rule": "Let's = Let us + Base Verb"
  },
  {
    "id": 40,
    "verb": "let",
    "verbName": "Let",
    "en": "My father let me choose my career.",
    "bn": "আমার বাবা আমাকে আমার ক্যারিয়ার বেছে নিতে দিয়েছিলেন।",
    "rule": "Let + Person + Base Verb"
  },
  {
    "id": 41,
    "verb": "help",
    "verbName": "Help",
    "en": "He helped me carry the heavy box.",
    "bn": "সে আমাকে ভারী বাক্সটি বহন করতে সাহায্য করেছিল।",
    "rule": "Help + Person + Base Verb (বা to carry উভয়ই সঠিক)"
  },
  {
    "id": 42,
    "verb": "help",
    "verbName": "Help",
    "en": "She helped me to solve the puzzle.",
    "bn": "সে আমাকে ধাঁধাটি সমাধান করতে সাহায্য করেছিল।",
    "rule": "Help + Person + TO + Base Verb"
  },
  {
    "id": 43,
    "verb": "help",
    "verbName": "Help",
    "en": "This app helps people learn English faster.",
    "bn": "এই অ্যাপটি মানুষকে দ্রুত ইংরেজি শিখতে সাহায্য করে।",
    "rule": "Help + Person + Base Verb"
  },
  {
    "id": 44,
    "verb": "help",
    "verbName": "Help",
    "en": "Can you help me find my keys?",
    "bn": "তুমি কি আমার চাবিগুলো খুঁজে পেতে সাহায্য করতে পারবে?",
    "rule": "Help + Person + Base Verb"
  },
  {
    "id": 45,
    "verb": "help",
    "verbName": "Help",
    "en": "Regular exercise helps reduce stress.",
    "bn": "নিয়মিত ব্যায়াম মানসিক চাপ কমাতে সাহায্য করে।",
    "rule": "Help + Base Verb"
  },
  {
    "id": 46,
    "verb": "help",
    "verbName": "Help",
    "en": "The doctor helped him recover from illness.",
    "bn": "ডাক্তার তাকে অসুস্থতা থেকে সেরে উঠতে সাহায্য করেছিলেন।",
    "rule": "Help + Person + Base Verb"
  },
  {
    "id": 47,
    "verb": "help",
    "verbName": "Help",
    "en": "Reading books helps you build vocabulary.",
    "bn": "বই পড়া আপনার শব্দভাণ্ডার গড়ে তুলতে সাহায্য করে।",
    "rule": "Help + Person + Base Verb"
  },
  {
    "id": 48,
    "verb": "help",
    "verbName": "Help",
    "en": "She helped her mother cook dinner.",
    "bn": "সে তার মাকে রাতের খাবার রান্না করতে সাহায্য করেছিল।",
    "rule": "Help + Person + Base Verb"
  },
  {
    "id": 49,
    "verb": "help",
    "verbName": "Help",
    "en": "My teacher helped me prepare for the exam.",
    "bn": "আমার শিক্ষক আমাকে পরীক্ষার প্রস্তুতিতে সাহায্য করেছিলেন।",
    "rule": "Help + Person + Base Verb"
  },
  {
    "id": 50,
    "verb": "help",
    "verbName": "Help",
    "en": "Vitamin C helps protect against infections.",
    "bn": "ভিটামিন সি সংক্রমণ থেকে রক্ষা করতে সাহায্য করে।",
    "rule": "Help + Base Verb"
  },
  {
    "id": 51,
    "verb": "advanced",
    "verbName": "Cause",
    "en": "The storm caused the trees to fall.",
    "bn": "ঝড়টি গাছগুলো ফেলে দিয়েছিল।",
    "rule": "Cause + Object + TO + Base Verb"
  },
  {
    "id": 52,
    "verb": "advanced",
    "verbName": "Force",
    "en": "The rain forced us to cancel the match.",
    "bn": "বৃষ্টি আমাদের ম্যাচ বাতিল করতে বাধ্য করেছিল।",
    "rule": "Force + Object + TO + Base Verb"
  },
  {
    "id": 53,
    "verb": "advanced",
    "verbName": "Allow",
    "en": "The rules allow students to use calculators.",
    "bn": "নিয়মটি শিক্ষার্থীদের ক্যালকুলেটর ব্যবহার করতে দেয়।",
    "rule": "Allow + Object + TO + Base Verb"
  },
  {
    "id": 54,
    "verb": "advanced",
    "verbName": "Enable",
    "en": "Internet enables us to connect globally.",
    "bn": "ইন্টারনেট আমাদের বিশ্বব্যাপী সংযুক্ত হতে সক্ষম করে।",
    "rule": "Enable + Object + TO + Base Verb"
  },
  {
    "id": 55,
    "verb": "advanced",
    "verbName": "Require",
    "en": "The company requires workers to wear helmets.",
    "bn": "কোম্পানি কর্মীদের হেলমেট পরা বাধ্যতামূলক করে।",
    "rule": "Require + Object + TO + Base Verb"
  },
  {
    "id": 56,
    "verb": "advanced",
    "verbName": "Persuade",
    "en": "His advice persuaded me to change my job.",
    "bn": "তার পরামর্শ আমাকে চাকরি পরিবর্তন করতে রাজি করাল।",
    "rule": "Persuade + Object + TO + Base Verb"
  },
  {
    "id": 57,
    "verb": "advanced",
    "verbName": "Order",
    "en": "The police ordered the driver to stop.",
    "bn": "পুলিশ চালককে থামার নির্দেশ দিল।",
    "rule": "Order + Object + TO + Base Verb"
  },
  {
    "id": 58,
    "verb": "advanced",
    "verbName": "Encourage",
    "en": "The government encouraged citizens to plant trees.",
    "bn": "সরকার নাগরিকদের বৃক্ষরোপণ করতে উৎসাহিত করল।",
    "rule": "Encourage + Object + TO + Base Verb"
  },
  {
    "id": 59,
    "verb": "advanced",
    "verbName": "Lead",
    "en": "Curiosity led him to discover the truth.",
    "bn": "কৌতূহল তাকে সত্য আবিষ্কারে পরিচালিত করল।",
    "rule": "Lead + Object + TO + Base Verb"
  },
  {
    "id": 60,
    "verb": "advanced",
    "verbName": "Cause",
    "en": "Careless driving caused the accident to happen.",
    "bn": "অসতর্ক ড্রাইভিং দুর্ঘটনা ঘটার কারণ হলো।",
    "rule": "Cause + Object + TO + Base Verb"
  }
];
const QUICK_QUIZ: QuickQuizItem[] = [
  {
    "id": 1,
    "q": "Mom made me _____ my room before going out.",
    "options": [
      "clean",
      "to clean"
    ],
    "correct": "clean",
    "exp": "Make + ব্যক্তি এর পর সর্বদা Base Verb বসে, 'to' বসে না।"
  },
  {
    "id": 2,
    "q": "I got the mechanic _____ the brakes of my car.",
    "options": [
      "to check",
      "check"
    ],
    "correct": "to check",
    "exp": "Get + ব্যক্তি থাকলে অবশ্যই 'to + Base Verb' হবে।"
  },
  {
    "id": 3,
    "q": "I had my hair _____ yesterday at the new salon.",
    "options": [
      "cut",
      "cutting"
    ],
    "correct": "cut",
    "exp": "Have + বস্তু (চুল) হলে Passive অর্থে V3 বসে। Cut এর V3 হলো Cut।"
  },
  {
    "id": 4,
    "q": "Please let him _____ his speech without interruption.",
    "options": [
      "finish",
      "to finish"
    ],
    "correct": "finish",
    "exp": "Let এর পর সরাসরি Base Verb বসে, কোনো 'to' বসে না।"
  },
  {
    "id": 5,
    "q": "She was made _____ the fine by the traffic officer.",
    "options": [
      "to pay",
      "pay"
    ],
    "correct": "to pay",
    "exp": "Make যখন Passive Voice-এ যায় (was made), তখন 'to + Base Verb' বসে!"
  },
  {
    "id": 6,
    "q": "I will have my assistant _____ the urgent email today.",
    "options": [
      "send",
      "to send"
    ],
    "correct": "send",
    "exp": "Have + ব্যক্তি (সহকারী) কাজ করলে Base Verb (send) বসে।"
  },
  {
    "id": 7,
    "q": "She got her laptop _____ at the computer shop.",
    "options": [
      "repaired",
      "repair"
    ],
    "correct": "repaired",
    "exp": "Get + বস্তু (ল্যাপটপ) থাকলে Passive অর্থে V3 (repaired) বসে।"
  },
  {
    "id": 8,
    "q": "Don't let the dog _____ into the bedroom.",
    "options": [
      "come",
      "to come"
    ],
    "correct": "come",
    "exp": "Let এর পর 'to' ছাড়া সরাসরি Base Verb বসে।"
  },
  {
    "id": 9,
    "q": "The teacher made the students _____ the grammar rules.",
    "options": [
      "memorize",
      "to memorize"
    ],
    "correct": "memorize",
    "exp": "Make + Person এর পর Base Verb বসে।"
  },
  {
    "id": 10,
    "q": "Can you help me _____ this heavy luggage?",
    "options": [
      "carry",
      "carried"
    ],
    "correct": "carry",
    "exp": "Help এর পর Base Verb (বা to carry) বসে।"
  },
  {
    "id": 11,
    "q": "He got his friend _____ his car yesterday.",
    "options": [
      "to wash",
      "wash"
    ],
    "correct": "to wash",
    "exp": "Get + Person থাকলেই 'to + V1' বসে।"
  },
  {
    "id": 12,
    "q": "We had our house _____ before Eid.",
    "options": [
      "painted",
      "paint"
    ],
    "correct": "painted",
    "exp": "Have + Object (বাড়ি) হলে V3 (painted) বসে।"
  },
  {
    "id": 13,
    "q": "The emotional movie made everyone _____.",
    "options": [
      "cry",
      "to cry"
    ],
    "correct": "cry",
    "exp": "Make এর পর কোনো 'to' বসে না।"
  },
  {
    "id": 14,
    "q": "Did you have the plumber _____ the water leak?",
    "options": [
      "fix",
      "fixed"
    ],
    "correct": "fix",
    "exp": "Have + Person (প্লাম্বার) নিজে কাজ করলে Base Verb (fix) বসে।"
  },
  {
    "id": 15,
    "q": "She got her brother _____ her to the railway station.",
    "options": [
      "to drive",
      "drive"
    ],
    "correct": "to drive",
    "exp": "Get + Person থাকলে 'to + Base Verb' হয়।"
  },
  {
    "id": 16,
    "q": "I will have the important parcel _____ tomorrow morning.",
    "options": [
      "delivered",
      "deliver"
    ],
    "correct": "delivered",
    "exp": "Have + Object (পার্সেল) হলে V3 (delivered) বসে।"
  },
  {
    "id": 17,
    "q": "The boss let all employees _____ early on Friday.",
    "options": [
      "leave",
      "to leave"
    ],
    "correct": "leave",
    "exp": "Let এর পর সরাসরি Base Verb বসে।"
  },
  {
    "id": 18,
    "q": "Heavy storm caused the flight _____ delayed.",
    "options": [
      "to be",
      "be"
    ],
    "correct": "to be",
    "exp": "Cause এর পর সর্বদাই 'to + Base Verb' বসে।"
  },
  {
    "id": 19,
    "q": "He was made _____ the truth under oath in court.",
    "options": [
      "to speak",
      "speak"
    ],
    "correct": "to speak",
    "exp": "Passive ভয়েসে 'be made to speak' হয়।"
  },
  {
    "id": 20,
    "q": "I went to the clinic and got my teeth _____.",
    "options": [
      "cleaned",
      "clean"
    ],
    "correct": "cleaned",
    "exp": "Get + Object (দাঁত) হলে প্যাসিভ অর্থে V3 (cleaned) বসে।"
  }
];
const CHIP_FILL_DATA: ChipFillItem[] = [
  {
    "id": 1,
    "sentence": "The strict teacher made all students _____ the homework twice.",
    "bn": "কঠোর শিক্ষক সকল ছাত্র-ছাত্রীকে দুইবার হোমওয়ার্ক করালেন।",
    "options": [
      "rewrite",
      "to rewrite",
      "rewritten"
    ],
    "correctAns": "rewrite",
    "rule": "Make + Person + Base Verb (কোনো 'to' বা 'ing' নেই)"
  },
  {
    "id": 2,
    "sentence": "I persuaded him and got him _____ with us to the picnic.",
    "bn": "আমি তাকে রাজি করিয়ে আমাদের সাথে পিকনিকে নিয়ে গেলাম।",
    "options": [
      "to come",
      "come",
      "came"
    ],
    "correctAns": "to come",
    "rule": "Get + Person থাকলে অবশ্যই 'to + Base Verb' হবে"
  },
  {
    "id": 3,
    "sentence": "My mobile screen was cracked, so I had it _____.",
    "bn": "আমার মোবাইলের স্ক্রিন ভেঙে গিয়েছিল, তাই আমি তা ঠিক করিয়ে নিয়েছি।",
    "options": [
      "replaced",
      "replace",
      "to replace"
    ],
    "correctAns": "replaced",
    "rule": "Have + Object (মোবাইল) হলে Passive অর্থে V3 বসে"
  },
  {
    "id": 4,
    "sentence": "Mom never lets me _____ out alone late at night.",
    "bn": "মা আমাকে কখনো গভীর রাতে একা বাইরে যেতে দেন না।",
    "options": [
      "stay",
      "to stay",
      "staying"
    ],
    "correctAns": "stay",
    "rule": "Let + Person + Base Verb"
  },
  {
    "id": 5,
    "sentence": "The funny clown made the little children _____ loudly.",
    "bn": "মজার জোকারটি ছোট বাচ্চাদের জোরে জোরে হাসাল।",
    "options": [
      "laugh",
      "to laugh",
      "laughed"
    ],
    "correctAns": "laugh",
    "rule": "Make + Person + Base Verb"
  },
  {
    "id": 6,
    "sentence": "She managed to get her dad _____ her a new laptop.",
    "bn": "সে তার বাবাকে রাজি করিয়ে একটি নতুন ল্যাপটপ কিনে নিল।",
    "options": [
      "to buy",
      "buy",
      "bought"
    ],
    "correctAns": "to buy",
    "rule": "Get + Person + TO + Base Verb"
  },
  {
    "id": 7,
    "sentence": "We will have our new house _____ by professional painters.",
    "bn": "আমরা প্রফেশনাল পেইন্টারদের দিয়ে আমাদের নতুন বাড়ি রঙ করাব।",
    "options": [
      "painted",
      "paint",
      "to paint"
    ],
    "correctAns": "painted",
    "rule": "Have + Object + V3"
  },
  {
    "id": 8,
    "sentence": "Could you please let me _____ your dictionary for a minute?",
    "bn": "আপনি কি দয়া করে আমাকে এক মিনিটের জন্য আপনার ডিকশনারিটি ব্যবহার করতে দেবেন?",
    "options": [
      "use",
      "to use",
      "using"
    ],
    "correctAns": "use",
    "rule": "Let + Person + Base Verb"
  },
  {
    "id": 9,
    "sentence": "He helped the old blind man _____ the busy street.",
    "bn": "সে অন্ধ বৃদ্ধ লোকটিকে ব্যস্ত রাস্তা পার হতে সাহায্য করেছিল।",
    "options": [
      "cross",
      "crossed",
      "crossing"
    ],
    "correctAns": "cross",
    "rule": "Help + Person + Base Verb"
  },
  {
    "id": 10,
    "sentence": "The bank manager had the cashier _____ the cash carefully.",
    "bn": "ব্যাংক ম্যানেজার ক্যাশিয়ারকে দিয়ে টাকাগুলো যত্নসহকারে গণনা করালেন।",
    "options": [
      "count",
      "to count",
      "counted"
    ],
    "correctAns": "count",
    "rule": "Have + Person + Base Verb"
  },
  {
    "id": 11,
    "sentence": "I must get my broken car _____ before the long trip.",
    "bn": "লম্বা ভ্রমণের আগে আমাকে অবশ্যই ভাঙা গাড়িটি মেরামত করিয়ে নিতে হবে।",
    "options": [
      "serviced",
      "service",
      "to service"
    ],
    "correctAns": "serviced",
    "rule": "Get + Object + V3"
  },
  {
    "id": 12,
    "sentence": "Bad road condition caused the truck _____ over.",
    "bn": "খারাপ রাস্তার কারণে ট্রাকটি উল্টে গিয়েছিল।",
    "options": [
      "to roll",
      "roll",
      "rolled"
    ],
    "correctAns": "to roll",
    "rule": "Cause + Object + TO + Base Verb"
  },
  {
    "id": 13,
    "sentence": "The security guard didn't let anyone _____ the building without an ID.",
    "bn": "আইডি কার্ড ছাড়া সিকিউরিটি গার্ড কাউকে ভবনে প্রবেশ করতে দেয়নি।",
    "options": [
      "enter",
      "to enter",
      "entering"
    ],
    "correctAns": "enter",
    "rule": "Let + Person + Base Verb"
  },
  {
    "id": 14,
    "sentence": "The kidnapper was made _____ where the victim was kept.",
    "bn": "অপহরণকারীকে বলতে বাধ্য করা হয়েছিল ভিকটিমকে কোথায় রাখা হয়েছিল।",
    "options": [
      "to confess",
      "confess",
      "confessed"
    ],
    "correctAns": "to confess",
    "rule": "Be made (প্যাসিভ) এর পর 'to + Base Verb' বসে"
  },
  {
    "id": 15,
    "sentence": "She has her assistant _____ all her travel tickets.",
    "bn": "সে তার সহকারীকে দিয়ে তার সব ভ্রমণের টিকিট বুক করায়।",
    "options": [
      "book",
      "to book",
      "booked"
    ],
    "correctAns": "book",
    "rule": "Have + Person + Base Verb"
  },
  {
    "id": 16,
    "sentence": "Can you get your sister _____ us some fresh tea?",
    "bn": "তুমি কি তোমার বোনকে দিয়ে আমাদের জন্য কিছুটা চা বানিয়ে দিতে রাজি করাতে পারবে?",
    "options": [
      "to make",
      "make",
      "made"
    ],
    "correctAns": "to make",
    "rule": "Get + Person + TO + Base Verb"
  },
  {
    "id": 17,
    "sentence": "I will get my suit _____ before the wedding ceremony.",
    "bn": "বিয়ের অনুষ্ঠানের আগে আমি আমার স্যুটটি ড্রাই ক্লিন করিয়ে নেব।",
    "options": [
      "dry-cleaned",
      "dry-clean",
      "to dry-clean"
    ],
    "correctAns": "dry-cleaned",
    "rule": "Get + Object + V3"
  },
  {
    "id": 18,
    "sentence": "The sergeant made the soldiers _____ ten miles with backpacks.",
    "bn": "সার্জেন্ট সেনাদের ব্যাকপ্যাক নিয়ে দশ মাইল মার্চ করালেন।",
    "options": [
      "march",
      "to march",
      "marched"
    ],
    "correctAns": "march",
    "rule": "Make + Person + Base Verb"
  },
  {
    "id": 19,
    "sentence": "Please help us _____ these heavy desks to the next room.",
    "bn": "দয়া করে এই ভারী ডেস্কগুলো পাশের রুমে নিয়ে যেতে আমাদের সাহায্য করুন।",
    "options": [
      "move",
      "moved",
      "moving"
    ],
    "correctAns": "move",
    "rule": "Help + Person + Base Verb"
  },
  {
    "id": 20,
    "sentence": "The company allows staff _____ from home twice a week.",
    "bn": "কোম্পানি কর্মীদের সপ্তাহে দুই দিন বাসা থেকে কাজ করার অনুমতি দেয়।",
    "options": [
      "to work",
      "work",
      "worked"
    ],
    "correctAns": "to work",
    "rule": "Allow + Person + TO + Base Verb"
  }
];
const SPOT_ERRORS: SpotErrorItem[] = [
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
];
const ACTIVE_PASSIVE_PAIRS: PairItem[] = [
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
];
const REAL_DIALOGUES: DialogueItem[] = [
  {
    "id": 1,
    "title": "গাড়ির মেকানিকের দোকানে (At the Car Repair Shop)",
    "lines": [
      {
        "speaker": "Customer",
        "en": "Hi, I need to have my car checked today.",
        "bn": "হ্যালো, আজ আমার গাড়িটি একটু চেক করিয়ে নেওয়া দরকার।",
        "causative": "have my car checked"
      },
      {
        "speaker": "Mechanic",
        "en": "Sure! Did you have someone replace the engine oil recently?",
        "bn": "অবশ্যই! সম্প্রতি কাউকে দিয়ে ইঞ্জিন অয়েল পরিবর্তন করিয়েছিলেন?",
        "causative": "have someone replace"
      },
      {
        "speaker": "Customer",
        "en": "No, I had my brother check it last month, but he couldn't get the engine to start properly.",
        "bn": "না, গত মাসে ভাইকে দিয়ে দেখিয়েছিলাম, কিন্তু সে ইঞ্জিন ঠিকমতো স্টার্ট করাতে পারেনি।",
        "causative": "get the engine to start"
      },
      {
        "speaker": "Mechanic",
        "en": "Don't worry. I will have my assistant inspect the battery right away.",
        "bn": "চিন্তা করবেন না। আমি এখনই সহকারীকে দিয়ে ব্যাটারি পরীক্ষা করাচ্ছি।",
        "causative": "have my assistant inspect"
      }
    ]
  },
  {
    "id": 2,
    "title": "অফিসে বস ও সহকারীর কথোপকথন (At the Office)",
    "lines": [
      {
        "speaker": "Boss",
        "en": "Rahim, please have the finance team prepare the annual report.",
        "bn": "রহিম, দয়া করে ফিন্যান্স টিমকে দিয়ে বার্ষিক রিপোর্টটি প্রস্তুত করাও।",
        "causative": "have the finance team prepare"
      },
      {
        "speaker": "Rahim",
        "en": "Yes sir. Should I also get the designer to design the cover page?",
        "bn": "হ্যাঁ স্যার। ডিজাইনারকে দিয়ে কি কভার পেজটিও ডিজাইন করিয়ে নেব?",
        "causative": "get the designer to design"
      },
      {
        "speaker": "Boss",
        "en": "Yes, and don't let anyone see the draft until it's finalized.",
        "bn": "হ্যাঁ, এবং চূড়ান্ত হওয়ার আগে কাউকে ড্রাফটটি দেখতে দেবে না।",
        "causative": "don't let anyone see"
      },
      {
        "speaker": "Rahim",
        "en": "Understood! I will get the printed copies delivered to your desk by 4 PM.",
        "bn": "বুঝেছি! আমি বিকাল ৪টার মধ্যে প্রিন্ট কপি আপনার টেবিলে পৌঁছে দেওয়ার ব্যবস্থা করব।",
        "causative": "get the printed copies delivered"
      }
    ]
  },
  {
    "id": 3,
    "title": "সেলুনে চুল কাটানো (At the Barber Shop)",
    "lines": [
      {
        "speaker": "Customer",
        "en": "Hello, I want to have my hair cut short.",
        "bn": "হ্যালো, আমি আমার চুল ছোট করে কাটাতে চাই।",
        "causative": "have my hair cut"
      },
      {
        "speaker": "Barber",
        "en": "Certainly sir! Would you also like to have your beard trimmed?",
        "bn": "অবশ্যই স্যার! আপনি কি দাড়িও ট্রিম করিয়ে নিতে চান?",
        "causative": "have your beard trimmed"
      },
      {
        "speaker": "Customer",
        "en": "Yes please. And don't make it too short, just keep it neat.",
        "bn": "হ্যাঁ দয়া করে। এবং খুব বেশি ছোট করবেন না, শুধু পরিপাটি রাখুন।",
        "causative": "don't make it too short"
      },
      {
        "speaker": "Barber",
        "en": "Got it! Relax and let me do the styling.",
        "bn": "ঠিক আছে! রিল্যাক্স করুন এবং আমাকে স্টাইলিং করতে দিন।",
        "causative": "let me do"
      }
    ]
  },
  {
    "id": 4,
    "title": "বাসায় মা ও সন্তানের কথোপকথন (At Home with Mom)",
    "lines": [
      {
        "speaker": "Mom",
        "en": "Tanvir, your room is a mess! I will make you clean it right now.",
        "bn": "তানভীর, তোমার ঘর পুরো অগোছালো! আমি এখনই তোমাকে দিয়ে এটা পরিষ্কার করাব।",
        "causative": "make you clean"
      },
      {
        "speaker": "Tanvir",
        "en": "Mom, please let me finish this level of the video game first!",
        "bn": "মা, দয়া করে আমাকে আগে ভিডিও গেমের এই লেভেলটা শেষ করতে দাও!",
        "causative": "let me finish"
      },
      {
        "speaker": "Mom",
        "en": "No more excuses! Yesterday you got your sister to do your homework.",
        "bn": "আর কোনো অজুহাত নয়! গতকাল তুমি তোমার বোনকে দিয়ে তোমার হোমওয়ার্ক করিয়ে নিয়েছিলে।",
        "causative": "got your sister to do"
      },
      {
        "speaker": "Tanvir",
        "en": "Okay Mom, I'm cleaning it. Will you help me fold the blankets?",
        "bn": "আচ্ছা মা, পরিষ্কার করছি। তুমি কি কম্বল ভাজ করতে আমাকে সাহায্য করবে?",
        "causative": "help me fold"
      }
    ]
  }
];

export default function CausativeVerbsPage() {
    const [activeTab, setActiveTab] = useState<'guide' | 'builder' | 'spoken' | 'quiz' | 'chips' | 'errors' | 'pairs' | 'dialogues'>('guide');

    // 1. BUILDER STATE
    const [bSubject, setBSubject] = useState('He');
    const [bVerb, setBVerb] = useState<'made' | 'had' | 'got' | 'let' | 'helped'>('made');
    const [bPerson, setBPerson] = useState('me');
    const [bAction, setBAction] = useState('laugh');

    // 2. SPOKEN FLASHCARDS STATE
    const [spokenFilter, setSpokenFilter] = useState<string>('all');
    const [revealedSpoken, setRevealedSpoken] = useState<{ [key: number]: boolean }>({});

    // 3. QUIZ STATE
    const [quizIndex, setQuizIndex] = useState(0);
    const [quizAnswered, setQuizAnswered] = useState<string | null>(null);
    const [quizScore, setQuizScore] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);

    // 4. CHIP FILL STATE
    const [chipAnswers, setChipAnswers] = useState<{ [key: number]: string }>({});

    // 5. DIALOGUE STATE
    const [activeDialogueId, setActiveDialogueId] = useState(1);

    // Audio TTS playback
    const playAudio = (text: string) => {
        if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'en-US';
            utterance.rate = 0.9;
            window.speechSynthesis.speak(utterance);
        }
    };

    // Calculate builder sentence & bangla
    const getBuilderResult = () => {
        let actionForm = bAction;
        let isPassive = false;

        if (['the car', 'my laptop', 'my hair'].includes(bPerson)) {
            isPassive = true;
            if (bAction.includes('wash')) actionForm = 'washed';
            else if (bAction.includes('clean')) actionForm = 'cleaned';
            else if (bAction.includes('fix') || bAction.includes('repair')) actionForm = 'repaired';
            else actionForm = 'done';
        } else {
            if (bVerb === 'got') {
                actionForm = 'to ' + bAction;
            }
        }

        const en = `${bSubject} ${bVerb} ${bPerson} ${actionForm}.`;

        let bn = '';
        const subBn = bSubject === 'I' ? 'আমি' : bSubject === 'He' ? 'সে' : bSubject === 'She' ? 'সে' : bSubject === 'Mom' ? 'মা' : bSubject === 'The boss' ? 'বস' : 'তারা';
        const perBn = bPerson === 'me' ? 'আমাকে' : bPerson === 'him' ? 'তাকে' : bPerson === 'us' ? 'আমাদের' : bPerson;

        if (isPassive) {
            bn = `${subBn} ${perBn} করিয়ে নিল/নেবে।`;
        } else {
            if (bVerb === 'made') bn = `${subBn} ${perBn} দিয়ে কাজটি করাল (বাধ্য বা আবেগ সৃষ্টি করল)।`;
            else if (bVerb === 'had') bn = `${subBn} ${perBn} দিয়ে কাজটি করাল (দায়িত্ব/পেমেন্ট দিয়ে)।`;
            else if (bVerb === 'got') bn = `${subBn} ${perBn} বুঝিয়ে রাজি করিয়ে কাজটি করাল।`;
            else if (bVerb === 'let') bn = `${subBn} ${perBn} কাজটি করতে দিল (অনুমতি দিল)।`;
            else bn = `${subBn} ${perBn} কাজটি করতে সাহায্য করল।`;
        }

        return { en, bn, isPassive };
    };

    const filteredSpoken = spokenFilter === 'all'
        ? SPOKEN_SENTENCES
        : SPOKEN_SENTENCES.filter(s => s.verb === spokenFilter);

    const handleQuizOption = (opt: string) => {
        if (quizAnswered) return;
        setQuizAnswered(opt);
        if (opt === QUICK_QUIZ[quizIndex].correct) {
            setQuizScore(prev => prev + 1);
        }
    };

    const nextQuizQuestion = () => {
        if (quizIndex < QUICK_QUIZ.length - 1) {
            setQuizIndex(prev => prev + 1);
            setQuizAnswered(null);
        } else {
            setQuizCompleted(true);
        }
    };

    const resetQuiz = () => {
        setQuizIndex(0);
        setQuizAnswered(null);
        setQuizScore(0);
        setQuizCompleted(false);
    };

    const builderRes = getBuilderResult();

    return (
        <div className="min-h-screen bg-[#f8fafc] text-slate-800 pb-28 font-sans">
            {/* Header */}
            <header className="sticky top-0 z-40 bg-slate-950 text-white border-b border-slate-800 px-4 py-3 shadow-md">
                <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                        <Link
                            href="/dashboard/spoken-english"
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-xs font-bold text-slate-300 hover:text-white transition"
                        >
                            <ArrowLeft size={16} />
                            <span>স্পোকেন হাব</span>
                        </Link>
                        <div>
                            <span className="text-[10px] font-black uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800/60">
                                অল-ইন-ওয়ান স্পোকেন ল্যাব
                            </span>
                            <h1 className="text-sm sm:text-base font-black text-white flex items-center gap-1.5">
                                <Zap className="text-cyan-400 fill-cyan-400" size={17} /> Causative Verbs: Make, Have, Get, Let, Help
                            </h1>
                        </div>
                    </div>

                    <Link
                        href="/dashboard/spoken-english/online-test"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-black hover:opacity-95 transition shadow-sm"
                    >
                        <Award size={15} />
                        <span>১০০ নম্বরের মেগা টেস্ট</span>
                    </Link>
                </div>
            </header>

            {/* Quick Summary Formula Banner */}
            <section className="bg-gradient-to-r from-slate-950 via-slate-900 to-cyan-950 text-white border-b border-cyan-900/40 py-6 px-4">
                <div className="max-w-7xl mx-auto space-y-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 text-xs font-bold">
                        <Sparkles size={13} />
                        <span>জাদুকরী ট্রিক: নিজে না করে অন্যকে দিয়ে করানো</span>
                    </div>

                    <h2 className="text-xl sm:text-3xl font-black text-white">
                        Causative Verbs <span className="text-cyan-400">সহজে শিখুন ও আনলিমিটেড প্র্যাকটিস করুন</span>
                    </h2>

                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-2">
                        <div className="bg-slate-900/80 border border-cyan-500/30 rounded-xl p-2.5 text-center">
                            <span className="text-sm font-black text-cyan-400">1. MAKE</span>
                            <p className="text-[11px] text-slate-300 font-bold">বাধ্য করা / হাসানো</p>
                            <span className="text-[10px] bg-cyan-950 text-cyan-300 px-2 py-0.5 rounded font-mono mt-1 inline-block">No 'to' (Base)</span>
                        </div>
                        <div className="bg-slate-900/80 border border-indigo-500/30 rounded-xl p-2.5 text-center">
                            <span className="text-sm font-black text-indigo-400">2. HAVE</span>
                            <p className="text-[11px] text-slate-300 font-bold">দায়িত্ব দেওয়া / সেবা</p>
                            <span className="text-[10px] bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded font-mono mt-1 inline-block">No 'to' (Base)</span>
                        </div>
                        <div className="bg-slate-900/80 border border-amber-500/30 rounded-xl p-2.5 text-center">
                            <span className="text-sm font-black text-amber-400">3. GET</span>
                            <p className="text-[11px] text-slate-300 font-bold">রাজি করানো</p>
                            <span className="text-[10px] bg-amber-950 text-amber-300 px-2 py-0.5 rounded font-mono mt-1 inline-block font-black">অবশ্যই 'TO' হবে</span>
                        </div>
                        <div className="bg-slate-900/80 border border-emerald-500/30 rounded-xl p-2.5 text-center">
                            <span className="text-sm font-black text-emerald-400">4. LET</span>
                            <p className="text-[11px] text-slate-300 font-bold">অনুমতি দেওয়া</p>
                            <span className="text-[10px] bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded font-mono mt-1 inline-block">No 'to' (Base)</span>
                        </div>
                        <div className="bg-slate-900/80 border border-pink-500/30 rounded-xl p-2.5 text-center col-span-2 sm:col-span-1">
                            <span className="text-sm font-black text-pink-400">5. HELP</span>
                            <p className="text-[11px] text-slate-300 font-bold">সাহায্য করা</p>
                            <span className="text-[10px] bg-pink-950 text-pink-300 px-2 py-0.5 rounded font-mono mt-1 inline-block">Base / To V1</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Navigation Tabs Bar */}
            <div className="sticky top-[57px] z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm px-4">
                <div className="max-w-7xl mx-auto flex items-center gap-1.5 overflow-x-auto py-2.5 no-scrollbar">
                    <button
                        onClick={() => setActiveTab('guide')}
                        className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition ${
                            activeTab === 'guide'
                                ? 'bg-cyan-600 text-white shadow-sm'
                                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                    >
                        <BookOpen size={14} />
                        <span>১. বেসিক গাইড ও রুলস</span>
                    </button>

                    <button
                        onClick={() => setActiveTab('builder')}
                        className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition ${
                            activeTab === 'builder'
                                ? 'bg-cyan-600 text-white shadow-sm'
                                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                    >
                        <Zap size={14} />
                        <span>২. ৩-ক্লিক সেন্টেন্স মেকার</span>
                    </button>

                    <button
                        onClick={() => setActiveTab('spoken')}
                        className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition ${
                            activeTab === 'spoken'
                                ? 'bg-cyan-600 text-white shadow-sm'
                                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                    >
                        <Volume2 size={14} />
                        <span>৩. ৬০টি স্পোকেন ড্রিলস</span>
                    </button>

                    <button
                        onClick={() => setActiveTab('quiz')}
                        className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition ${
                            activeTab === 'quiz'
                                ? 'bg-cyan-600 text-white shadow-sm'
                                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                    >
                        <Flame size={14} />
                        <span>৪. ১-ট্যাপ কুইজ (২০টি)</span>
                    </button>

                    <button
                        onClick={() => setActiveTab('chips')}
                        className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition ${
                            activeTab === 'chips'
                                ? 'bg-cyan-600 text-white shadow-sm'
                                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                    >
                        <Layers size={14} />
                        <span>৫. ফিল-ইন-চিপস (২০টি)</span>
                    </button>

                    <button
                        onClick={() => setActiveTab('errors')}
                        className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition ${
                            activeTab === 'errors'
                                ? 'bg-cyan-600 text-white shadow-sm'
                                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                    >
                        <AlertTriangle size={14} />
                        <span>৬. ভুল বনাম সঠিক (১০টি)</span>
                    </button>

                    <button
                        onClick={() => setActiveTab('pairs')}
                        className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition ${
                            activeTab === 'pairs'
                                ? 'bg-cyan-600 text-white shadow-sm'
                                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                    >
                        <ArrowRightLeft size={14} />
                        <span>৭. একটিভ বনাম প্যাসিভ</span>
                    </button>

                    <button
                        onClick={() => setActiveTab('dialogues')}
                        className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition ${
                            activeTab === 'dialogues'
                                ? 'bg-cyan-600 text-white shadow-sm'
                                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                    >
                        <MessageSquare size={14} />
                        <span>৮. স্পোকেন ডায়ালগ</span>
                    </button>
                </div>
            </div>

            {/* Main Container */}
            <main className="max-w-7xl mx-auto px-4 py-6">
                {/* 1. GUIDE */}
                {activeTab === 'guide' && (
                    <div className="space-y-6">
                        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                            <span className="text-xs font-black text-cyan-600 uppercase tracking-wider bg-cyan-50 px-2.5 py-1 rounded-md">
                                ভূমিকা ও ধারণা
                            </span>
                            <h3 className="text-xl font-black text-slate-900 mt-2">Causative Verb (প্রযোজক ক্রিয়া) কী?</h3>
                            <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                                যখন কোনো ব্যক্তি নিজে কোনো কাজ না করে <strong>অন্য কাউকে দিয়ে কাজটি করায় বা ঘটায়</strong>, তখন সেই বাক্য প্রকাশের জন্য যে বিশেষ ভার্বগুলো ব্যবহার করা হয়, তাদের <strong>Causative Verbs</strong> বলা হয়।
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
                                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                                    <span className="text-xs font-bold text-slate-500 uppercase">সাধারণ বাক্য (Normal)</span>
                                    <p className="text-base font-bold text-slate-800 mt-1">I washed my car.</p>
                                    <p className="text-xs text-slate-500 mt-0.5">অর্থ: আমি নিজে আমার গাড়ি ধুয়েছি।</p>
                                </div>
                                <div className="p-4 rounded-xl bg-cyan-50 border border-cyan-200">
                                    <span className="text-xs font-bold text-cyan-700 uppercase">কজেটিভ বাক্য (Causative)</span>
                                    <p className="text-base font-bold text-cyan-950 mt-1">I had the cleaner wash my car.</p>
                                    <p className="text-xs text-cyan-800 mt-0.5">অর্থ: আমি ক্লিনারকে দিয়ে আমার গাড়ি ধুইয়ে নিয়েছি।</p>
                                </div>
                            </div>
                        </div>

                        {/* 5 Core Verbs Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {/* MAKE */}
                            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-black bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full">1. MAKE</span>
                                    <span className="text-xs text-slate-500 font-bold">বাধ্য করা / অনুভূতি সৃষ্টি করা</span>
                                </div>
                                <p className="text-xs text-slate-600">কাউকে কোনো কাজ করতে বাধ্য করা বা কারো মাঝে আবেগ/হাসি/কান্না সৃষ্টি করা।</p>
                                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 font-mono text-xs text-cyan-900 font-bold">
                                    Subject + MAKE + Person + Base Verb (V1)
                                </div>
                                <div className="space-y-1.5 text-xs">
                                    <p className="text-slate-700">✔️ He <strong>made me laugh</strong>. (সে আমাকে হাসাল।)</p>
                                    <p className="text-slate-700">✔️ Mom <strong>makes me eat</strong> vegetables. (মা আমাকে শাকসবজি খাওয়ান।)</p>
                                    <p className="text-rose-600">❌ He made me <strong>to</strong> laugh. (ভুল! Make এর সাথে 'to' বসে না)</p>
                                </div>
                            </div>

                            {/* HAVE */}
                            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-black bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full">2. HAVE</span>
                                    <span className="text-xs text-slate-500 font-bold">দায়িত্ব দেওয়া / সেবা নেওয়া</span>
                                </div>
                                <p className="text-xs text-slate-600">কাউকে পারিশ্রমিক দিয়ে বা স্বাভাবিক দায়িত্ব দিয়ে কোনো কাজ করানো।</p>
                                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 font-mono text-xs text-indigo-900 font-bold">
                                    Active: Subject + HAVE + Person + Base Verb (V1)<br />
                                    Passive: Subject + HAVE + Object + V3
                                </div>
                                <div className="space-y-1.5 text-xs">
                                    <p className="text-slate-700">✔️ I <strong>had the mechanic fix</strong> my car. (মেকানিককে দিয়ে ঠিক করালাম)</p>
                                    <p className="text-slate-700">✔️ I <strong>had my hair cut</strong>. (চুল কাটিয়েছি - Passive V3)</p>
                                </div>
                            </div>

                            {/* GET */}
                            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-black bg-amber-100 text-amber-800 px-3 py-1 rounded-full">3. GET</span>
                                    <span className="text-xs text-slate-500 font-bold">অনুরোধ / রাজি করানো</span>
                                </div>
                                <p className="text-xs text-slate-600">কাউকে বুঝিয়ে বা অনুরোধ করে কাজটি করতে রাজি করানো।</p>
                                <div className="bg-amber-50 p-3 rounded-xl border border-amber-200 font-mono text-xs text-amber-950 font-black">
                                    Active: Subject + GET + Person + TO + Base Verb<br />
                                    Passive: Subject + GET + Object + V3
                                </div>
                                <div className="space-y-1.5 text-xs">
                                    <p className="text-slate-700">✔️ I <strong>got him to help</strong> me. (Get আসলেই 'to' হবে)</p>
                                    <p className="text-slate-700">✔️ I <strong>got my watch repaired</strong>. (ঘড়ি ঠিক করিয়েছি - V3)</p>
                                </div>
                            </div>

                            {/* LET */}
                            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-black bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full">4. LET</span>
                                    <span className="text-xs text-slate-500 font-bold">অনুমতি দেওয়া</span>
                                </div>
                                <p className="text-xs text-slate-600">কাউকে কোনো কাজ করার অনুমতি বা সুযোগ প্রদান করা।</p>
                                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 font-mono text-xs text-emerald-900 font-bold">
                                    Subject + LET + Person + Base Verb (V1)
                                </div>
                                <div className="space-y-1.5 text-xs">
                                    <p className="text-slate-700">✔️ <strong>Let me go</strong>. (আমাকে যেতে দাও।)</p>
                                    <p className="text-slate-700">✔️ Mom <strong>lets me drive</strong>. (মা আমাকে গাড়ি চালাতে দেন।)</p>
                                </div>
                            </div>
                        </div>

                        {/* Advanced Causatives */}
                        <div className="bg-gradient-to-r from-slate-900 to-indigo-950 text-white rounded-2xl p-6 shadow-sm">
                            <h4 className="text-base font-black flex items-center gap-2">
                                <Sparkles size={16} className="text-cyan-400" />
                                অ্যাডভান্সড কজেটিভ ভার্বস (সবসময় 'to + V1' বসে)
                            </h4>
                            <p className="text-slate-300 text-xs mt-1">
                                Force, Cause, Allow, Enable, Require, Order, Persuade — এদের পর সর্বদাই <strong>to + Base Verb</strong> বসে:
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4 text-xs">
                                <div className="bg-white/10 p-3 rounded-xl border border-white/10">
                                    <strong className="text-cyan-300">Force:</strong> Rain forced us <strong>to stay</strong> inside.
                                </div>
                                <div className="bg-white/10 p-3 rounded-xl border border-white/10">
                                    <strong className="text-cyan-300">Cause:</strong> Storm caused trees <strong>to fall</strong>.
                                </div>
                                <div className="bg-white/10 p-3 rounded-xl border border-white/10">
                                    <strong className="text-cyan-300">Allow:</strong> Rules allow us <strong>to leave</strong>.
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* 2. BUILDER */}
                {activeTab === 'builder' && (
                    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
                        <div className="border-b border-slate-200 pb-4">
                            <span className="text-xs font-black text-cyan-600 uppercase tracking-wider bg-cyan-50 px-2.5 py-1 rounded-md">
                                নো টাইপিং • জাস্ট ক্লিক
                            </span>
                            <h3 className="text-xl font-black text-slate-900 mt-2">৩-ক্লিক সেন্টেন্স মেকার</h3>
                            <p className="text-slate-600 text-xs mt-1">
                                নিচে দেওয়া চিপগুলোতে ট্যাপ করে নিজের ইচ্ছেমতো বাক্য তৈরি করুন, অর্থ দেখুন এবং অডিও শুনুন:
                            </p>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-black text-slate-500 uppercase tracking-wider">১. সাবজেক্ট (Subject)</label>
                            <div className="flex flex-wrap gap-2">
                                {['I', 'We', 'You', 'He', 'She', 'Mom', 'The boss', 'They'].map(s => (
                                    <button
                                        key={s}
                                        onClick={() => setBSubject(s)}
                                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                                            bSubject === s
                                                ? 'bg-slate-900 text-white shadow'
                                                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                        }`}
                                    >
                                        {s}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-black text-slate-500 uppercase tracking-wider">২. কজেটিভ ভার্ব (Causative Verb)</label>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    { v: 'made', name: 'made (বাধ্য/আবেগ)' },
                                    { v: 'had', name: 'had (দায়িত্ব/সেবা)' },
                                    { v: 'got', name: 'got (রাজি করানো - to হবে)' },
                                    { v: 'let', name: 'let (অনুমতি দেওয়া)' },
                                    { v: 'helped', name: 'helped (সাহায্য করা)' }
                                ].map(item => (
                                    <button
                                        key={item.v}
                                        onClick={() => setBVerb(item.v as any)}
                                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                                            bVerb === item.v
                                                ? 'bg-cyan-600 text-white shadow'
                                                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                        }`}
                                    >
                                        {item.name}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-black text-slate-500 uppercase tracking-wider">৩. ব্যক্তি বা বস্তু (Person / Object)</label>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    { p: 'me', label: 'me (আমাকে)' },
                                    { p: 'him', label: 'him (তাকে)' },
                                    { p: 'us', label: 'us (আমাদের)' },
                                    { p: 'the car', label: 'the car (গাড়ি - বস্তু)' },
                                    { p: 'my laptop', label: 'my laptop (ল্যাপটপ - বস্তু)' },
                                    { p: 'my hair', label: 'my hair (চুল - বস্তু)' }
                                ].map(item => (
                                    <button
                                        key={item.p}
                                        onClick={() => setBPerson(item.p)}
                                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                                            bPerson === item.p
                                                ? 'bg-indigo-600 text-white shadow'
                                                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                        }`}
                                    >
                                        {item.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-black text-slate-500 uppercase tracking-wider">৪. মূল কাজ (Action)</label>
                            <div className="flex flex-wrap gap-2">
                                {['laugh', 'cry', 'clean the room', 'wash the car', 'fix the phone', 'repair the laptop'].map(act => (
                                    <button
                                        key={act}
                                        onClick={() => setBAction(act)}
                                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                                            bAction === act
                                                ? 'bg-emerald-600 text-white shadow'
                                                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                        }`}
                                    >
                                        {act}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-900 to-cyan-950 text-white space-y-3 shadow-lg">
                            <div className="flex items-center justify-between">
                                <span className="text-[11px] font-bold text-cyan-300 uppercase tracking-wider">তৈরি হওয়া বাক্য:</span>
                                <button
                                    onClick={() => playAudio(builderRes.en)}
                                    className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 text-xs font-bold transition"
                                >
                                    <Volume2 size={14} />
                                    <span>শুনুন</span>
                                </button>
                            </div>
                            <p className="text-2xl font-black text-cyan-300 font-mono tracking-wide">{builderRes.en}</p>
                            <p className="text-slate-300 text-sm font-semibold">{builderRes.bn}</p>
                            <div className="pt-2 border-t border-cyan-800/60 flex items-center gap-2 text-xs text-cyan-400">
                                <Sparkles size={14} />
                                <span>
                                    {bVerb === 'got' && !builderRes.isPassive
                                        ? "রুল: Get + Person এর পর অবশ্যই 'to' যোগ করা হয়েছে!"
                                        : builderRes.isPassive
                                        ? "রুল: অবজেক্ট (বস্তু) থাকায় V3 (প্যাসিভ ফর্ম) ব্যবহার হয়েছে!"
                                        : "রুল: স্বাভাবিকভাবে Base Verb ব্যবহৃত হয়েছে।"}
                                </span>
                            </div>
                        </div>
                    </div>
                )}

                {/* 3. SPOKEN FLASHCARDS */}
                {activeTab === 'spoken' && (
                    <div className="space-y-6">
                        <div className="flex flex-wrap items-center gap-2 bg-white p-3 rounded-2xl border border-slate-200 shadow-sm">
                            <span className="text-xs font-bold text-slate-500 mr-1">ক্যাটাগরি ফিল্টার:</span>
                            {[
                                { id: 'all', name: 'সবগুলো (৬০টি)' },
                                { id: 'make', name: 'Make (১০টি)' },
                                { id: 'have', name: 'Have (১০টি)' },
                                { id: 'get', name: 'Get (১০টি)' },
                                { id: 'let', name: 'Let (১০টি)' },
                                { id: 'help', name: 'Help (১০টি)' },
                                { id: 'advanced', name: 'Advanced (১০টি)' }
                            ].map(btn => (
                                <button
                                    key={btn.id}
                                    onClick={() => setSpokenFilter(btn.id)}
                                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                                        spokenFilter === btn.id
                                            ? 'bg-slate-900 text-white shadow'
                                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                    }`}
                                >
                                    {btn.name}
                                </button>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {filteredSpoken.map(item => (
                                <div key={item.id} className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm hover:shadow transition space-y-3">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] font-black uppercase tracking-wider bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                                            #{item.id} • {item.verbName}
                                        </span>
                                        <button
                                            onClick={() => playAudio(item.en)}
                                            className="p-1.5 rounded-lg bg-cyan-50 text-cyan-600 hover:bg-cyan-100 transition"
                                            title="উচ্চারণ শুনুন"
                                        >
                                            <Volume2 size={16} />
                                        </button>
                                    </div>

                                    <p className="text-base font-bold text-slate-900">{item.en}</p>

                                    <div className="pt-1">
                                        {revealedSpoken[item.id] ? (
                                            <p className="text-xs font-semibold text-cyan-800 bg-cyan-50/70 p-2 rounded-lg border border-cyan-100">
                                                বাংলা: {item.bn}
                                            </p>
                                        ) : (
                                            <button
                                                onClick={() => setRevealedSpoken(prev => ({ ...prev, [item.id]: true }))}
                                                className="text-xs font-bold text-cyan-600 hover:text-cyan-700 flex items-center gap-1"
                                            >
                                                <Eye size={13} />
                                                <span>বাংলা অর্থ দেখুন</span>
                                            </button>
                                        )}
                                    </div>

                                    <div className="text-[11px] text-slate-500 font-mono bg-slate-50 px-2.5 py-1 rounded border border-slate-100">
                                        {item.rule}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* 4. QUIZ */}
                {activeTab === 'quiz' && (
                    <div className="max-w-2xl mx-auto space-y-6">
                        {!quizCompleted ? (
                            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-5">
                                <div className="flex items-center justify-between text-xs font-bold text-slate-500">
                                    <span>প্রশ্ন {quizIndex + 1} / {QUICK_QUIZ.length}</span>
                                    <span>স্কোর: {quizScore}</span>
                                </div>

                                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                                    <div
                                        className="bg-cyan-600 h-full transition-all duration-300"
                                        style={{ width: `${((quizIndex + 1) / QUICK_QUIZ.length) * 100}%` }}
                                    />
                                </div>

                                <div className="py-3">
                                    <h3 className="text-lg font-black text-slate-900 leading-snug">
                                        {QUICK_QUIZ[quizIndex].q}
                                    </h3>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {QUICK_QUIZ[quizIndex].options.map(opt => {
                                        const isSelected = quizAnswered === opt;
                                        const isCorrect = opt === QUICK_QUIZ[quizIndex].correct;

                                        let btnClass = 'bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100';
                                        if (quizAnswered) {
                                            if (isCorrect) btnClass = 'bg-emerald-50 border-emerald-500 text-emerald-800 font-black';
                                            else if (isSelected) btnClass = 'bg-rose-50 border-rose-500 text-rose-800 font-bold';
                                        }

                                        return (
                                            <button
                                                key={opt}
                                                onClick={() => handleQuizOption(opt)}
                                                disabled={Boolean(quizAnswered)}
                                                className={`p-4 rounded-xl border-2 text-center text-sm font-bold transition flex items-center justify-center gap-2 ${btnClass}`}
                                            >
                                                <span>{opt}</span>
                                                {quizAnswered && isCorrect && <Check size={16} className="text-emerald-600" />}
                                                {quizAnswered && isSelected && !isCorrect && <X size={16} className="text-rose-600" />}
                                            </button>
                                        );
                                    })}
                                </div>

                                {quizAnswered && (
                                    <div className="p-4 rounded-xl bg-cyan-50 border border-cyan-200 space-y-2">
                                        <div className="flex items-center gap-1.5 text-xs font-black text-cyan-900">
                                            <Lightbulb size={15} />
                                            <span>শর্টকাট নিয়ম ও ব্যাখ্যা:</span>
                                        </div>
                                        <p className="text-xs text-cyan-800 leading-relaxed font-semibold">
                                            {QUICK_QUIZ[quizIndex].exp}
                                        </p>
                                        <div className="pt-2 flex justify-end">
                                            <button
                                                onClick={nextQuizQuestion}
                                                className="px-4 py-2 rounded-xl bg-cyan-600 text-white text-xs font-bold hover:bg-cyan-700 transition flex items-center gap-1 shadow"
                                            >
                                                <span>{quizIndex < QUICK_QUIZ.length - 1 ? 'পরবর্তী প্রশ্ন' : 'ফলাফল দেখুন'}</span>
                                                <ChevronRight size={15} />
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center space-y-5 shadow-sm">
                                <div className="inline-flex p-4 rounded-full bg-cyan-50 text-cyan-600">
                                    <Trophy size={48} />
                                </div>
                                <h3 className="text-2xl font-black text-slate-900">কুইজ সম্পন্ন হয়েছে!</h3>
                                <p className="text-sm text-slate-600">
                                    আপনার মোট স্কোর: <strong className="text-cyan-600 text-lg">{quizScore} / {QUICK_QUIZ.length}</strong>
                                </p>
                                <button
                                    onClick={resetQuiz}
                                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition"
                                >
                                    <RotateCcw size={15} />
                                    <span>পুনরায় পরীক্ষা দিন</span>
                                </button>
                            </div>
                        )}
                    </div>
                )}

                {/* 5. CHIP FILL */}
                {activeTab === 'chips' && (
                    <div className="space-y-4">
                        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
                            <span className="text-xs font-black text-cyan-600 uppercase tracking-wider bg-cyan-50 px-2.5 py-1 rounded-md">
                                শূন্যস্থান পূরণ
                            </span>
                            <h3 className="text-xl font-black text-slate-900 mt-2">চিপে ক্লিক করে উত্তর পূরণ করুন</h3>
                            <p className="text-slate-600 text-xs mt-1">
                                কোনো টাইপিং নেই! নিচে দেওয়া ৩টি অপশন চিপের মধ্যে সঠিকটিতে ক্লিক করলেই উত্তর ফিল হয়ে যাবে।
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {CHIP_FILL_DATA.map(item => {
                                const selected = chipAnswers[item.id];
                                const isCorrect = selected === item.correctAns;

                                return (
                                    <div key={item.id} className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm space-y-3">
                                        <div className="flex items-center justify-between text-xs font-bold text-slate-500">
                                            <span>#{item.id}</span>
                                            {selected && (
                                                <span className={`px-2 py-0.5 rounded text-[11px] font-black ${
                                                    isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                                                }`}>
                                                    {isCorrect ? 'সঠিক ✔️' : 'ভুল ❌'}
                                                </span>
                                            )}
                                        </div>

                                        <p className="text-sm font-bold text-slate-900 leading-relaxed">
                                            {item.sentence}
                                        </p>
                                        <p className="text-xs text-slate-500">বাংলা: {item.bn}</p>

                                        <div className="flex flex-wrap gap-2 pt-1">
                                            {item.options.map(opt => {
                                                const optChosen = selected === opt;
                                                return (
                                                    <button
                                                        key={opt}
                                                        onClick={() => setChipAnswers(prev => ({ ...prev, [item.id]: opt }))}
                                                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                                                            optChosen
                                                                ? opt === item.correctAns
                                                                    ? 'bg-emerald-600 text-white shadow'
                                                                    : 'bg-rose-600 text-white shadow'
                                                                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                                        }`}
                                                    >
                                                        {opt}
                                                    </button>
                                                );
                                            })}
                                        </div>

                                        {selected && (
                                            <div className="text-[11px] text-cyan-900 bg-cyan-50 p-2 rounded-lg border border-cyan-100 font-semibold">
                                                নিয়ম: {item.rule}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* 6. SPOT THE ERROR */}
                {activeTab === 'errors' && (
                    <div className="space-y-4">
                        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
                            <span className="text-xs font-black text-rose-600 uppercase tracking-wider bg-rose-50 px-2.5 py-1 rounded-md">
                                কমন ভুল ও সমাধান
                            </span>
                            <h3 className="text-xl font-black text-slate-900 mt-2">স্পট দ্য মিসটেক (১০টি প্রচলিত ভুল)</h3>
                            <p className="text-slate-600 text-xs mt-1">
                                পরীক্ষায় ও কথা বলার সময় শিক্ষার্থীরা যেসব মারাত্মক ভুল করে থাকে, সেগুলো পাশাপাশি দেওয়া হলো:
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {SPOT_ERRORS.map(item => (
                                <div key={item.id} className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm space-y-3">
                                    <div className="text-xs font-bold text-slate-400">ভুল #{item.id}</div>

                                    <div className="p-3 rounded-xl bg-rose-50 border border-rose-200">
                                        <div className="flex items-center gap-1.5 text-xs font-black text-rose-700">
                                            <X size={15} />
                                            <span>ভুল বাক্য (Wrong):</span>
                                        </div>
                                        <p className="text-sm font-bold text-rose-950 mt-1 line-through">{item.wrong}</p>
                                    </div>

                                    <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200">
                                        <div className="flex items-center gap-1.5 text-xs font-black text-emerald-700">
                                            <Check size={15} />
                                            <span>সঠিক বাক্য (Correct):</span>
                                        </div>
                                        <p className="text-sm font-bold text-emerald-950 mt-1">{item.correct}</p>
                                        <p className="text-xs text-emerald-800 mt-0.5">বাংলা: {item.bn}</p>
                                    </div>

                                    <p className="text-xs text-slate-600 font-semibold bg-slate-50 p-2 rounded-lg">
                                        💡 কারণ: {item.exp}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* 7. PAIRS */}
                {activeTab === 'pairs' && (
                    <div className="space-y-4">
                        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
                            <span className="text-xs font-black text-indigo-600 uppercase tracking-wider bg-indigo-50 px-2.5 py-1 rounded-md">
                                তুলনা ও পার্থক্য
                            </span>
                            <h3 className="text-xl font-black text-slate-900 mt-2">অ্যাক্টিভ বনাম প্যাসিভ কজেটিভ পেয়ার্স</h3>
                            <p className="text-slate-600 text-xs mt-1">
                                ব্যক্তি নিজে কাজ করলে Active (Base Verb), কিন্তু বস্তু কাজ করিয়ে নিলে Passive (V3):
                            </p>
                        </div>

                        <div className="space-y-3">
                            {ACTIVE_PASSIVE_PAIRS.map(pair => (
                                <div key={pair.id} className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                                        <span className="text-[10px] font-black uppercase text-slate-500">অ্যাক্টিভ (ব্যক্তি নিজে করছে)</span>
                                        <p className="text-sm font-bold text-slate-900">{pair.active}</p>
                                        <p className="text-xs text-slate-600">বাংলা: {pair.activeBn}</p>
                                    </div>

                                    <div className="p-3.5 rounded-xl bg-cyan-50 border border-cyan-200 space-y-1">
                                        <span className="text-[10px] font-black uppercase text-cyan-700">প্যাসিভ (কাজ করিয়ে নেওয়া হচ্ছে)</span>
                                        <p className="text-sm font-bold text-cyan-950">{pair.passive}</p>
                                        <p className="text-xs text-cyan-800">বাংলা: {pair.passiveBn}</p>
                                    </div>

                                    <div className="md:col-span-2 text-xs text-slate-500 font-semibold border-t border-slate-100 pt-2">
                                        💡 {pair.note}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* 8. DIALOGUES */}
                {activeTab === 'dialogues' && (
                    <div className="space-y-6">
                        <div className="flex flex-wrap gap-2">
                            {REAL_DIALOGUES.map(d => (
                                <button
                                    key={d.id}
                                    onClick={() => setActiveDialogueId(d.id)}
                                    className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                                        activeDialogueId === d.id
                                            ? 'bg-slate-900 text-white shadow'
                                            : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                                    }`}
                                >
                                    {d.title}
                                </button>
                            ))}
                        </div>

                        {(() => {
                            const dia = REAL_DIALOGUES.find(d => d.id === activeDialogueId) || REAL_DIALOGUES[0];
                            return (
                                <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
                                    <h4 className="text-base font-black text-slate-900 border-b border-slate-100 pb-3">
                                        {dia.title}
                                    </h4>

                                    <div className="space-y-3">
                                        {dia.lines.map((l, idx) => (
                                            <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                                                <div className="flex items-center justify-between">
                                                    <span className="text-xs font-black text-cyan-700 uppercase">{l.speaker}</span>
                                                    <button
                                                        onClick={() => playAudio(l.en)}
                                                        className="text-slate-400 hover:text-cyan-600 transition"
                                                    >
                                                        <Volume2 size={15} />
                                                    </button>
                                                </div>
                                                <p className="text-sm font-bold text-slate-900">{l.en}</p>
                                                <p className="text-xs text-slate-600">বাংলা: {l.bn}</p>
                                                <span className="text-[10px] bg-cyan-100 text-cyan-800 px-2 py-0.5 rounded font-mono inline-block mt-1">
                                                    কজেটিভ ব্যবহার: {l.causative}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );
                        })()}
                    </div>
                )}
            </main>
        </div>
    );
}
