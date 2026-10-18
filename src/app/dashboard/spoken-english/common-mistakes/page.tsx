'use client';

import { useState, useMemo, useRef, useEffect } from 'react';
import Link from 'next/link';
import {
    ArrowLeft, Volume2, Search, CheckCircle2, XCircle, AlertCircle,
    Sparkles, HelpCircle, Trophy, RefreshCw, Bookmark, Share2, Lightbulb
} from 'lucide-react';

interface MistakeItem {
    id: number;
    category: 'verbs' | 'prepositions' | 'bengali-slang' | 'grammar' | 'confusing-words';
    categoryLabel: string;
    bengaliHabit: string;
    incorrect: string;
    correct: string;
    explanationBn: string;
    exampleWrong: string;
    exampleRight: string;
    exampleRightBn: string;
}

const COMMON_MISTAKES: MistakeItem[] = [
    // 1. Verbs & Tenses
    {
        id: 1,
        category: 'verbs',
        categoryLabel: 'Verbs & Tense',
        bengaliHabit: '"আমি একমত" বোঝাতে be verb (am) যোগ করার ভুল অভ্যাস',
        incorrect: 'I am agree with you.',
        correct: 'I agree with you.',
        explanationBn: '"Agree" নিজেই একটি মূল Verb (ক্রিয়া)। তাই এর সাথে "am" ব্যবহার করা সম্পূর্ণ ভুল। নেগেটিভ করতে বললে বলতে হবে "I don\'t agree" (I am not agree নয়)।',
        exampleWrong: 'I am agree with your opinion.',
        exampleRight: 'I agree with your opinion completely.',
        exampleRightBn: 'আমি আপনার মতামতের সাথে সম্পূর্ণ একমত।'
    },
    {
        id: 2,
        category: 'verbs',
        categoryLabel: 'Verbs & Tense',
        bengaliHabit: 'Told-এর পর to বসানোর ভুল',
        incorrect: 'He told to me that he was busy.',
        correct: 'He told me that he was busy.',
        explanationBn: '"Tell/Told"-এর পর কোনো Preposition (to) বসে না, সরাসরি ব্যক্তি বসে (He told me)। কিন্তু "Say/Said" ব্যবহার করলে "to" বসে (He said to me)।',
        exampleWrong: 'She told to her father.',
        exampleRight: 'She told her father the good news.',
        exampleRightBn: 'সে তার বাবাকে সুখবরটি জানিয়েছিল।'
    },
    {
        id: 3,
        category: 'verbs',
        categoryLabel: 'Verbs & Tense',
        bengaliHabit: 'Did বা Didn\'t-এর পর Past Form ব্যবহারের ভুল',
        incorrect: 'I didn\'t knew the answer.',
        correct: 'I didn\'t know the answer.',
        explanationBn: 'Did বা Didn\'t নিজেই Past Tense নির্দেশ করে। তাই Did-এর পরে সবসময় Verb-এর Base Form (V1) বসে, Past Form (knew) নয়।',
        exampleWrong: 'Did you went there yesterday?',
        exampleRight: 'Did you go there yesterday?',
        exampleRightBn: 'তুমি কি গতকাল সেখানে গিয়েছিলে?'
    },
    {
        id: 4,
        category: 'verbs',
        categoryLabel: 'Verbs & Tense',
        bengaliHabit: 'পরীক্ষা দেয়া বোঝাতে Give exam বলা',
        incorrect: 'I will give the IELTS exam next month.',
        correct: 'I will take the IELTS exam next month. (or sit for)',
        explanationBn: 'বাংলায় আমরা বলি "পরীক্ষা দেওয়া", কিন্তু ইংরেজিতে ছাত্ররা পরীক্ষা "Take" করে বা "Sit for" করে। শিক্ষক বা কর্তৃপক্ষ পরীক্ষা "Give" বা পরিচালনা করে।',
        exampleWrong: 'He is giving his final exams.',
        exampleRight: 'He is taking his final exams this week.',
        exampleRightBn: 'সে এই সপ্তাহে তার ফাইনাল পরীক্ষা দিচ্ছে।'
    },
    {
        id: 5,
        category: 'verbs',
        categoryLabel: 'Verbs & Tense',
        bengaliHabit: 'Stative Verb-এ ing যোগ করার ভুল',
        incorrect: 'I am knowing him very well.',
        correct: 'I know him very well.',
        explanationBn: 'Know, Understand, Believe, Love, Like, Want ইত্যাদি Stative Verb (অনুভূতি ও মানসিক অবস্থার ভার্ব)। এগুলো সাধারণত Continuous Tense (-ing) এ বসে না।',
        exampleWrong: 'Are you understanding me?',
        exampleRight: 'Do you understand me?',
        exampleRightBn: 'তুমি কি আমার কথা বুঝতে পারছ?'
    },
    {
        id: 6,
        category: 'verbs',
        categoryLabel: 'Verbs & Tense',
        bengaliHabit: 'Have দিয়ে মালিকানা বোঝাতে Continuous ফর্ম',
        incorrect: 'I am having a car.',
        correct: 'I have a car.',
        explanationBn: 'কোনো কিছু থাকা বা অধিকার বোঝাতে "have" ব্যবহৃত হলে -ing হয় না। তবে খাওয়া বা সময় কাটানো বোঝাতে -ing হতে পারে (যেমন: I am having lunch).',
        exampleWrong: 'She is having two brothers.',
        exampleRight: 'She has two brothers.',
        exampleRightBn: 'তার দুই ভাই আছে।'
    },

    // 2. Prepositions
    {
        id: 7,
        category: 'prepositions',
        categoryLabel: 'Prepositions',
        bengaliHabit: 'Discuss-এর পর বাংলায় "সম্পর্কে" ভেবে about বসানো',
        incorrect: 'Let\'s discuss about the project.',
        correct: 'Let\'s discuss the project.',
        explanationBn: '"Discuss" শব্দের অর্থই "কোনো বিষয়ে বা সম্পর্কে আলোচনা করা"। তাই Discuss-এর পর "about" দেওয়া বাহুল্য ও ব্যাকরণগত ভুল।',
        exampleWrong: 'We discussed about climate change.',
        exampleRight: 'We discussed climate change in detail.',
        exampleRightBn: 'আমরা জলবায়ু পরিবর্তন নিয়ে বিস্তারিত আলোচনা করেছি।'
    },
    {
        id: 8,
        category: 'prepositions',
        categoryLabel: 'Prepositions',
        bengaliHabit: 'বিবাহের ক্ষেত্রে with ব্যবহারের ভুল',
        incorrect: 'She is married with a doctor.',
        correct: 'She is married to a doctor.',
        explanationBn: 'কারও সাথে বিবাহিত বোঝাতে Married-এর সাথে সর্বদা "to" Preposition ব্যবহৃত হয়, "with" নয়।',
        exampleWrong: 'He was married with his classmate.',
        exampleRight: 'He was married to his classmate.',
        exampleRightBn: 'সে তার সহপাঠীর সাথে বিবাহবন্ধনে আবদ্ধ হয়েছিল।'
    },
    {
        id: 9,
        category: 'prepositions',
        categoryLabel: 'Prepositions',
        bengaliHabit: 'Listen-এর পর to বাদ দেওয়া',
        incorrect: 'Please listen me carefully.',
        correct: 'Please listen to me carefully.',
        explanationBn: '"Listen"-এর পর কোনো ব্যক্তি বা বিষয় থাকলে অবশ্যই "to" যুক্ত করতে হবে। Listen to music, Listen to the teacher, Listen to me.',
        exampleWrong: 'Nobody listens him.',
        exampleRight: 'Nobody listens to him when he shouts.',
        exampleRightBn: 'সে যখন চিৎকার করে তখন কেউ তার কথা শোনে না।'
    },
    {
        id: 10,
        category: 'prepositions',
        categoryLabel: 'Prepositions',
        bengaliHabit: 'রোগে মৃত্যুর ক্ষেত্রে with/from ব্যবহার',
        incorrect: 'He died with cancer / from cancer.',
        correct: 'He died of cancer.',
        explanationBn: 'কোনো নির্দিষ্ট রোগে মৃত্যুবরণ করলে "died of" ব্যবহৃত হয়। অন্য কোনো কারণে (যেমন আঘাত, ক্ষুধা) মারা গেলে "died from" হতে পারে।',
        exampleWrong: 'The old man died from cholera.',
        exampleRight: 'The old man died of cholera.',
        exampleRightBn: 'বৃদ্ধ লোকটি কলেরায় মারা গিয়েছিলেন।'
    },
    {
        id: 11,
        category: 'prepositions',
        categoryLabel: 'Prepositions',
        bengaliHabit: 'পছন্দের তুলনায় Prefer-এর সাথে than বলা',
        incorrect: 'I prefer tea than coffee.',
        correct: 'I prefer tea to coffee.',
        explanationBn: 'Prefer, Senior, Junior, Prior, Superior এগুলোর তুলনামূলক অর্থে "than" বসে না, সর্বদা "to" বসে।',
        exampleWrong: 'He prefers reading books than watching TV.',
        exampleRight: 'He prefers reading books to watching TV.',
        exampleRightBn: 'সে টিভি দেখার চেয়ে বই পড়া বেশি পছন্দ করে।'
    },
    {
        id: 12,
        category: 'prepositions',
        categoryLabel: 'Prepositions',
        bengaliHabit: 'Look forward to-এর পর base verb বসানো',
        incorrect: 'I look forward to meet you.',
        correct: 'I look forward to meeting you.',
        explanationBn: '"Look forward to", "With a view to", "Used to", "Get accustomed to"-এর পর Verb আসলে Verb-এর সাথে সর্বদা -ing যুক্ত হয়।',
        exampleWrong: 'I look forward to hear from you.',
        exampleRight: 'I look forward to hearing from you soon.',
        exampleRightBn: 'আমি আপনার কাছ থেকে দ্রুত উত্তরের অপেক্ষায় রইলাম।'
    },

    // 3. Bengali Slang & False Friends
    {
        id: 13,
        category: 'bengali-slang',
        categoryLabel: 'Bangladeshi Slang & False Habits',
        bengaliHabit: 'কাজিন বোঝাতে "Cousin brother" বা "Cousin sister" বলা',
        incorrect: 'He is my cousin brother.',
        correct: 'He is my cousin. (or He is my male cousin)',
        explanationBn: 'ইংরেজি ভাষায় "Cousin brother" বা "Cousin sister" বলে কোনো শব্দ নেই। Cousin নিজেই একটি জেন্ডার নিরপেক্ষ শব্দ। বাক্য থেকেই বোঝা যায় সে ছেলে নাকি মেয়ে (যেমন: He is my cousin).',
        exampleWrong: 'My cousin sister came to our house.',
        exampleRight: 'My cousin came to our house yesterday.',
        exampleRightBn: 'গতকাল আমার কাজিন আমাদের বাসায় এসেছিল।'
    },
    {
        id: 14,
        category: 'bengali-slang',
        categoryLabel: 'Bangladeshi Slang & False Habits',
        bengaliHabit: 'গ্র্যাজুয়েশন সম্পন্ন করা বোঝাতে "Pass out" বলা',
        incorrect: 'I passed out from Dhaka University in 2022.',
        correct: 'I graduated from Dhaka University in 2022.',
        explanationBn: 'ইংরেজিতে "Pass out" একটি Phrasal verb যার অর্থ "বেহুঁশ বা অচেতন হয়ে যাওয়া" (Faint)। পড়ালেখা শেষ করা বোঝাতে "Graduated from" বলতে হবে।',
        exampleWrong: 'Which college did you pass out from?',
        exampleRight: 'Which university did you graduate from?',
        exampleRightBn: 'তুমি কোন বিশ্ববিদ্যালয় থেকে স্নাতক শেষ করেছ?'
    },
    {
        id: 15,
        category: 'bengali-slang',
        categoryLabel: 'Bangladeshi Slang & False Habits',
        bengaliHabit: 'অফিসিয়াল ইমেইলে "Revert back" লেখা',
        incorrect: 'Please revert back as soon as possible.',
        correct: 'Please reply as soon as possible. (or Please respond)',
        explanationBn: '"Revert" শব্দের অর্থই "আগের অবস্থায় ফিরে যাওয়া বা সাড়া দেওয়া"। তাই এর সাথে "back" যোগ করা সম্পূর্ণ বাহুল্য ও রিডানড্যান্ট। সুন্দরতম রূপ হলো "Please reply" বা "Please respond".',
        exampleWrong: 'Kindly revert back with the documents.',
        exampleRight: 'Kindly reply with the attached documents.',
        exampleRightBn: 'দয়া করে সংযুক্ত ডকুমেন্টস সহ উত্তর প্রদান করুন।'
    },
    {
        id: 16,
        category: 'bengali-slang',
        categoryLabel: 'Bangladeshi Slang & False Habits',
        bengaliHabit: 'নিজের মতামত দিতে "According to me" বলা',
        incorrect: 'According to me, this is a bad idea.',
        correct: 'In my opinion, this is a bad idea. (or From my perspective)',
        explanationBn: '"According to" সাধারণত অন্য কারও বক্তব্য বা রিপোর্টের ক্ষেত্রে ব্যবহৃত হয় (According to the WHO / According to Einstein)। নিজের ক্ষেত্রে "In my opinion" বা "I think" বলা শুদ্ধ।',
        exampleWrong: 'According to me, honesty is the best policy.',
        exampleRight: 'In my opinion, honesty is the best policy.',
        exampleRightBn: 'আমার মতে, সততাই সর্বোৎকৃষ্ট পন্থা।'
    },
    {
        id: 17,
        category: 'bengali-slang',
        categoryLabel: 'Bangladeshi Slang & False Habits',
        bengaliHabit: 'আবার বলার অনুরোধে "Repeat again" বলা',
        incorrect: 'Could you please repeat again?',
        correct: 'Could you please repeat that? (or Could you say that again?)',
        explanationBn: '"Repeat" শব্দের মধ্যেই "Again" (আবার) অর্থটি লুকায়িত রয়েছে। তাই Repeat again বললে এর অর্থ দাঁড়ায় "আবার আবার বলা"।',
        exampleWrong: 'Repeat again what you said.',
        exampleRight: 'Could you please repeat what you just said?',
        exampleRightBn: 'আপনি যা মাত্র বললেন তা কি দয়া করে আরেকবার বলবেন?'
    },
    {
        id: 18,
        category: 'bengali-slang',
        categoryLabel: 'Bangladeshi Slang & False Habits',
        bengaliHabit: 'ধন্যবাদ গ্রহণের জবাবে শুধু "No mention" বলা',
        incorrect: 'No mention.',
        correct: 'You\'re welcome. / Don\'t mention it. / My pleasure.',
        explanationBn: 'ধন্যবাদ গ্রহণের উত্তরে শুধু "No mention" বলা ব্যাকরণগতভাবে অসম্পূর্ণ। সঠিক হলো "Don\'t mention it" অথবা "You are welcome" অথবা "My pleasure"।',
        exampleWrong: 'Thanks a lot! — No mention.',
        exampleRight: 'Thank you! — Don\'t mention it, happy to help.',
        exampleRightBn: 'ধন্যবাদ! — আরে এটা কোনো ব্যাপারই না, সাহায্য করতে পেরে ভালো লাগল।'
    },

    // 4. Grammar & Plurals
    {
        id: 19,
        category: 'grammar',
        categoryLabel: 'Grammar & Agreement',
        bengaliHabit: '"One of the"-র পর Singular Noun ব্যবহারের ভুল',
        incorrect: 'One of my friend is a software engineer.',
        correct: 'One of my friends is a software engineer.',
        explanationBn: '"One of the..." মানে "অনেকের মধ্য থেকে একজন"। তাই One of the-এর পর Noun সবসময় Plural (friends) হবে, কিন্তু Verb হবে Singular (is).',
        exampleWrong: 'One of the student was absent.',
        exampleRight: 'One of the students was absent today.',
        exampleRightBn: 'শিক্ষার্থীদের মধ্য থেকে একজন আজকে অনুপস্থিত ছিল।'
    },
    {
        id: 20,
        category: 'grammar',
        categoryLabel: 'Grammar & Agreement',
        bengaliHabit: '"Every" বা "Each"-এর সাথে Plural শব্দ ব্যবহারের ভুল',
        incorrect: 'Every students are hardworking.',
        correct: 'Every student is hardworking.',
        explanationBn: '"Every" এবং "Each" সবসময় Singular অর্থ প্রকাশ করে। তাই এদের পর Singular Noun (student) এবং Singular Verb (is) বসে।',
        exampleWrong: 'Each members have an ID card.',
        exampleRight: 'Each member has an ID card.',
        exampleRightBn: 'প্রত্যেক সদস্যের একটি আইডি কার্ড রয়েছে।'
    },
    {
        id: 21,
        category: 'grammar',
        categoryLabel: 'Grammar & Agreement',
        bengaliHabit: 'Uncountable Noun-এ -s যোগ করা (Poetries, Furnitures)',
        incorrect: 'I bought many furnitures for my new flat.',
        correct: 'I bought a lot of furniture for my new flat.',
        explanationBn: 'Furniture, Luggage, Baggage, Information, Advice, Poetry এগুলো Uncountable Noun। এদের সাথে কখনোই "s" বা "es" যোগ করা যায় না। সংখ্যা বোঝাতে "pieces of furniture" বলতে হয়।',
        exampleWrong: 'He gave me many advices.',
        exampleRight: 'He gave me some good advice.',
        exampleRightBn: 'তিনি আমাকে কিছু চমৎকার উপদেশ দিয়েছিলেন।'
    },
    {
        id: 22,
        category: 'grammar',
        categoryLabel: 'Grammar & Agreement',
        bengaliHabit: 'People শব্দে অযথা "s" যোগ করা',
        incorrect: 'Many peoples attended the seminar.',
        correct: 'Many people attended the seminar.',
        explanationBn: '"People" শব্দটি নিজেই Plural (Person-এর বহুবচন)। তাই সাধারণ মানুষ বোঝাতে Peoples বলা ভুল। (Peoples কেবলমাত্র বিভিন্ন জাতি বোঝাতে ব্যবহৃত হয়)।',
        exampleWrong: 'The peoples were shouting.',
        exampleRight: 'The people were very welcoming.',
        exampleRightBn: 'মানুষজন খুবই অমায়িক ও আন্তরিক ছিলেন।'
    },

    // 5. Confusing Word Pairs
    {
        id: 23,
        category: 'confusing-words',
        categoryLabel: 'Confusing Words',
        bengaliHabit: 'Say, Tell, Speak, Talk এর মধ্যে গুলিয়ে ফেলা',
        incorrect: 'She said me the truth.',
        correct: 'She told me the truth.',
        explanationBn: 'Tell-এর পর সরাসরি ব্যক্তি বসে (Tell someone)। Say-এর পর বিষয়বস্তু বসে (Say something to someone)। Speak সাধারণত ভাষা বা গম্ভীর আলোচনায় (Speak English), আর Talk অনানুষ্ঠানিক কথপোকথনে (Talk to someone).',
        exampleWrong: 'Can you speak me what happened?',
        exampleRight: 'Can you tell me what happened?',
        exampleRightBn: 'কি ঘটেছে তুমি কি আমাকে বলতে পারবে?'
    },
    {
        id: 24,
        category: 'confusing-words',
        categoryLabel: 'Confusing Words',
        bengaliHabit: 'Lend (ধার দেওয়া) এবং Borrow (ধার নেওয়া) গুলিয়ে ফেলা',
        incorrect: 'Can you borrow me some money?',
        correct: 'Can you lend me some money? (or Can I borrow some money?)',
        explanationBn: '"Lend" মানে সাময়িকভাবে কাউকে কোনো কিছু ধার দেওয়া (Give)। "Borrow" মানে অন্যের কাছ থেকে কোনো কিছু ধার নেওয়া (Take)।',
        exampleWrong: 'I will borrow you my car for today.',
        exampleRight: 'I will lend you my car for today.',
        exampleRightBn: 'আজকের জন্য আমি তোমাকে আমার গাড়িটি ধার দেব।'
    },
    {
        id: 25,
        category: 'confusing-words',
        categoryLabel: 'Confusing Words',
        bengaliHabit: 'Hear (স্বাভাবিক শোনা) এবং Listen (মন দিয়ে শোনা) গুলিয়ে ফেলা',
        incorrect: 'I am hearing to the news.',
        correct: 'I am listening to the news.',
        explanationBn: '"Hear" হলো কানে কোনো শব্দ এমনিতেই আসা (অনিচ্ছাকৃত শ্রবণ)। "Listen" হলো মনোযোগ দিয়ে স্বেচ্ছায় কোনো কথা বা গান শোনা।',
        exampleWrong: 'Did you listen that thunder noise?',
        exampleRight: 'Did you hear that thunder noise?',
        exampleRightBn: 'তুমি কি মেঘ ডাকার আওয়াজটি শুনতে পেয়েছিলে?'
    }
];

export default function CommonMistakesPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [viewMode, setViewMode] = useState<'cards' | 'quiz'>('cards');
    const [savedMistakes, setSavedMistakes] = useState<number[]>([]);
    const [playingId, setPlayingId] = useState<number | null>(null);

    // Quiz states
    const [quizIndex, setQuizIndex] = useState(0);
    const [quizScore, setQuizScore] = useState(0);
    const [quizAnswered, setQuizAnswered] = useState(false);
    const [selectedQuizOption, setSelectedQuizOption] = useState<string | null>(null);
    const [quizComplete, setQuizComplete] = useState(false);

    // Audio synthesis speech
    const playAudio = (text: string, id: number) => {
        if (typeof window === 'undefined') return;
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.9;
        utterance.pitch = 1.0;
        utterance.lang = 'en-GB';

        setPlayingId(id);
        utterance.onend = () => setPlayingId(null);
        utterance.onerror = () => setPlayingId(null);

        window.speechSynthesis.speak(utterance);
    };

    // Load saved bookmarks from localStorage
    useEffect(() => {
        try {
            const saved = JSON.parse(localStorage.getItem('saved_mistakes') || '[]');
            setSavedMistakes(saved);
        } catch { /* ignore */ }
    }, []);

    const toggleBookmark = (id: number) => {
        const updated = savedMistakes.includes(id)
            ? savedMistakes.filter(i => i !== id)
            : [...savedMistakes, id];
        setSavedMistakes(updated);
        localStorage.setItem('saved_mistakes', JSON.stringify(updated));
    };

    // Filtered mistakes
    const filteredMistakes = useMemo(() => {
        return COMMON_MISTAKES.filter(item => {
            const matchesCat = selectedCategory === 'all'
                ? true
                : selectedCategory === 'saved'
                    ? savedMistakes.includes(item.id)
                    : item.category === selectedCategory;

            const q = searchQuery.toLowerCase().trim();
            if (!q) return matchesCat;

            const matchesSearch =
                item.incorrect.toLowerCase().includes(q) ||
                item.correct.toLowerCase().includes(q) ||
                item.bengaliHabit.toLowerCase().includes(q) ||
                item.explanationBn.toLowerCase().includes(q);

            return matchesCat && matchesSearch;
        });
    }, [searchQuery, selectedCategory, savedMistakes]);

    // Generate randomized quiz questions from mistakes list
    const quizList = useMemo(() => {
        return [...COMMON_MISTAKES].sort(() => 0.5 - Math.random()).slice(0, 10);
    }, [viewMode]);

    const currentQuizItem = quizList[quizIndex];

    const quizOptions = useMemo(() => {
        if (!currentQuizItem) return [];
        // Show wrong vs correct
        return [
            { text: currentQuizItem.incorrect, isCorrect: false },
            { text: currentQuizItem.correct, isCorrect: true }
        ].sort(() => 0.5 - Math.random());
    }, [currentQuizItem]);

    const handleAnswerQuiz = (selectedText: string, isCorrect: boolean) => {
        if (quizAnswered) return;
        setSelectedQuizOption(selectedText);
        setQuizAnswered(true);

        if (isCorrect) {
            setQuizScore(s => s + 10);
            playAudio(selectedText, 9999);
        }
    };

    const handleNextQuiz = () => {
        if (quizIndex < quizList.length - 1) {
            setQuizIndex(i => i + 1);
            setQuizAnswered(false);
            setSelectedQuizOption(null);
        } else {
            setQuizComplete(true);
            // Award XP to user
            const currentXp = Number(localStorage.getItem('spoken_xp') || 100);
            localStorage.setItem('spoken_xp', String(currentXp + quizScore));
        }
    };

    const resetQuiz = () => {
        setQuizIndex(0);
        setQuizScore(0);
        setQuizAnswered(false);
        setSelectedQuizOption(null);
        setQuizComplete(false);
    };

    return (
        <div className="min-h-screen bg-[#f8fafc] text-slate-800 pb-20">
            {/* Top Navigation Banner */}
            <div className="bg-gradient-to-br from-rose-950 via-slate-900 to-indigo-950 px-5 py-8 text-white shadow-md">
                <div className="mx-auto max-w-5xl">
                    <Link
                        href="/dashboard/spoken-english"
                        className="inline-flex items-center gap-1.5 text-xs text-rose-300 hover:text-white transition font-bold mb-4"
                    >
                        <ArrowLeft size={15} /> Back to Spoken Hub
                    </Link>

                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <div>
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-rose-500/30 bg-rose-500/10 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-rose-300 mb-2">
                                <Sparkles size={12} />
                                100% FREE ESSENTIAL FLUENCY GUIDE
                            </span>
                            <h1 className="text-2xl lg:text-4xl font-black tracking-tight">
                                বাঙালিদের ২৫টি কমন ইংরেজি ভুল ও শুদ্ধ রূপ
                            </h1>
                            <p className="mt-2 text-xs lg:text-sm text-slate-300 max-w-2xl leading-relaxed">
                                বাংলা থেকে হুবহু ইংরেজি অনুবাদ করতে গিয়ে আমরা অবচেতনভাবে যে ভুলগুলো করি, সেগুলোর সুস্পষ্ট নিয়ম ও নেটিভ উচ্চারণের সমন্বিত গাইড।
                            </p>
                        </div>

                        {/* View Switcher */}
                        <div className="flex bg-white/10 p-1 rounded-xl border border-white/10 backdrop-blur-sm">
                            <button
                                onClick={() => setViewMode('cards')}
                                className={`rounded-lg px-4 py-2 text-xs font-bold transition ${
                                    viewMode === 'cards'
                                        ? 'bg-rose-600 text-white shadow'
                                        : 'text-slate-300 hover:text-white'
                                }`}
                            >
                                📚 কার্ড মোড (শিখুন)
                            </button>
                            <button
                                onClick={() => {
                                    setViewMode('quiz');
                                    resetQuiz();
                                }}
                                className={`rounded-lg px-4 py-2 text-xs font-bold transition ${
                                    viewMode === 'quiz'
                                        ? 'bg-rose-600 text-white shadow'
                                        : 'text-slate-300 hover:text-white'
                                }`}
                            >
                                🎯 ভুল ধরার কুইজ গেম
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="mx-auto max-w-5xl px-5 py-6">

                {viewMode === 'cards' ? (
                    <>
                        {/* Search & Filters */}
                        <div className="mb-6 space-y-4">
                            <div className="flex flex-col md:flex-row gap-3">
                                {/* Search input */}
                                <div className="relative flex-1">
                                    <Search className="absolute left-3.5 top-3 text-slate-400" size={17} />
                                    <input
                                        type="text"
                                        placeholder="ভুল বা শুদ্ধ বাক্য খুঁজুন (যেমন: agree, told, cousin, pass out)..."
                                        value={searchQuery}
                                        onChange={e => setSearchQuery(e.target.value)}
                                        className="w-full rounded-2xl border border-slate-200 bg-white pl-10 pr-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:border-rose-500 focus:outline-none shadow-sm"
                                    />
                                    {searchQuery && (
                                        <button
                                            onClick={() => setSearchQuery('')}
                                            className="absolute right-3 top-2.5 text-xs text-slate-400 hover:text-slate-600"
                                        >
                                            পরিষ্কার
                                        </button>
                                    )}
                                </div>
                            </div>

                            {/* Category Filter Pills */}
                            <div className="flex flex-wrap gap-1.5">
                                {[
                                    { id: 'all', label: `সব ভুল (${COMMON_MISTAKES.length})` },
                                    { id: 'verbs', label: 'Verbs & Tense' },
                                    { id: 'prepositions', label: 'Prepositions' },
                                    { id: 'bengali-slang', label: 'False Habits & Slang' },
                                    { id: 'grammar', label: 'Grammar & Plurals' },
                                    { id: 'confusing-words', label: 'Confusing Words' },
                                    { id: 'saved', label: `সংরক্ষিত (${savedMistakes.length})` },
                                ].map(cat => (
                                    <button
                                        key={cat.id}
                                        onClick={() => setSelectedCategory(cat.id)}
                                        className={`rounded-xl px-3 py-1.5 text-xs font-bold transition ${
                                            selectedCategory === cat.id
                                                ? 'bg-rose-600 text-white shadow-sm'
                                                : 'bg-white border border-slate-200 text-slate-600 hover:border-rose-300'
                                        }`}
                                    >
                                        {cat.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Cards Grid */}
                        {filteredMistakes.length === 0 ? (
                            <div className="rounded-3xl border border-slate-200 bg-white p-12 text-center text-slate-500 shadow-sm">
                                <AlertCircle size={40} className="mx-auto text-slate-300 mb-3" />
                                <p className="text-sm font-bold text-slate-700">কোনো ফলাফল পাওয়া যায়নি!</p>
                                <p className="text-xs text-slate-400 mt-1">অন্য কোনো শব্দ দিয়ে সার্চ করে দেখুন।</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {filteredMistakes.map(item => {
                                    const isBookmarked = savedMistakes.includes(item.id);
                                    const isSpeaking = playingId === item.id;

                                    return (
                                        <div
                                            key={item.id}
                                            className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                                        >
                                            <div>
                                                {/* Header row */}
                                                <div className="flex items-center justify-between mb-3">
                                                    <span className="text-[10px] font-black uppercase tracking-wider text-rose-700 bg-rose-50 border border-rose-100 px-2 py-0.5 rounded-md">
                                                        #{item.id} · {item.categoryLabel}
                                                    </span>

                                                    <div className="flex items-center gap-1.5">
                                                        <button
                                                            onClick={() => toggleBookmark(item.id)}
                                                            className={`p-1.5 rounded-lg border transition ${
                                                                isBookmarked
                                                                    ? 'bg-amber-50 border-amber-300 text-amber-600'
                                                                    : 'bg-slate-50 border-slate-200 text-slate-400 hover:text-amber-500'
                                                            }`}
                                                            title={isBookmarked ? 'রিমুভ করুন' : 'সেভ করুন'}
                                                        >
                                                            <Bookmark size={13} fill={isBookmarked ? 'currentColor' : 'none'} />
                                                        </button>

                                                        <button
                                                            onClick={() => playAudio(item.correct, item.id)}
                                                            className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold transition ${
                                                                isSpeaking
                                                                    ? 'bg-rose-600 text-white animate-pulse'
                                                                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                                            }`}
                                                            title="শুদ্ধ উচ্চারণ শুনুন"
                                                        >
                                                            <Volume2 size={13} />
                                                            {isSpeaking ? 'শোনাচ্ছে...' : 'উচ্চারণ'}
                                                        </button>
                                                    </div>
                                                </div>

                                                {/* Bengali habit note */}
                                                <p className="text-[11px] font-bold text-slate-400 mb-3 flex items-center gap-1">
                                                    <Lightbulb size={12} className="text-amber-500 flex-shrink-0" />
                                                    ভুলের কারণ: {item.bengaliHabit}
                                                </p>

                                                {/* Wrong vs Right comparison */}
                                                <div className="space-y-2 mb-3">
                                                    <div className="flex items-start gap-2 rounded-xl bg-rose-50/70 border border-rose-100 p-3">
                                                        <XCircle size={16} className="text-rose-500 flex-shrink-0 mt-0.5" />
                                                        <div>
                                                            <p className="text-[10px] font-black uppercase text-rose-700 tracking-wider">ভুল রূপ (Never say):</p>
                                                            <p className="text-sm font-black text-rose-900 line-through decoration-rose-500">{item.incorrect}</p>
                                                        </div>
                                                    </div>

                                                    <div className="flex items-start gap-2 rounded-xl bg-emerald-50/70 border border-emerald-100 p-3">
                                                        <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                                                        <div>
                                                            <p className="text-[10px] font-black uppercase text-emerald-700 tracking-wider">শুদ্ধ রূপ (Always say):</p>
                                                            <p className="text-sm font-black text-emerald-950">{item.correct}</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Bengali Explanation */}
                                                <div className="rounded-xl bg-slate-50 border border-slate-100 p-3 text-xs leading-relaxed text-slate-700">
                                                    <p className="font-bold text-slate-900 mb-1">💡 ব্যাকরণের সহজ নিয়ম:</p>
                                                    <p>{item.explanationBn}</p>
                                                </div>
                                            </div>

                                            {/* Practical Example */}
                                            <div className="mt-3 pt-3 border-t border-slate-100 text-xs">
                                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-wide mb-1">কথোপকথনে ব্যবহার:</p>
                                                <p className="font-bold text-slate-800">"{item.exampleRight}"</p>
                                                <p className="text-[11px] text-slate-500 mt-0.5">{item.exampleRightBn}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </>
                ) : (
                    /* QUIZ GAME MODE */
                    <div className="mx-auto max-w-xl">
                        {!quizComplete ? (
                            <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
                                {/* Quiz Header */}
                                <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
                                    <div>
                                        <span className="text-[10px] font-black uppercase tracking-wider text-rose-600 bg-rose-50 px-2 py-0.5 rounded">
                                            Question {quizIndex + 1} of {quizList.length}
                                        </span>
                                        <p className="text-xs text-slate-400 mt-1">সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs font-bold text-slate-400">Score</p>
                                        <p className="text-lg font-black text-emerald-600">{quizScore} XP</p>
                                    </div>
                                </div>

                                {/* Context */}
                                <div className="rounded-2xl bg-amber-50/70 border border-amber-200 p-4 mb-6">
                                    <p className="text-xs font-bold text-amber-900 mb-1">🎯 প্রেক্ষাপট (Context):</p>
                                    <p className="text-sm font-black text-slate-900">{currentQuizItem.bengaliHabit}</p>
                                </div>

                                {/* Options */}
                                <div className="space-y-3 mb-6">
                                    {quizOptions.map((opt, i) => {
                                        const isSelected = selectedQuizOption === opt.text;
                                        let btnStyle = 'border-slate-200 bg-slate-50 hover:border-slate-300 text-slate-700';

                                        if (quizAnswered) {
                                            if (opt.isCorrect) {
                                                btnStyle = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-bold';
                                            } else if (isSelected && !opt.isCorrect) {
                                                btnStyle = 'border-rose-500 bg-rose-50 text-rose-900 line-through';
                                            } else {
                                                btnStyle = 'border-slate-100 bg-slate-50 text-slate-400 opacity-60';
                                            }
                                        }

                                        return (
                                            <button
                                                key={i}
                                                disabled={quizAnswered}
                                                onClick={() => handleAnswerQuiz(opt.text, opt.isCorrect)}
                                                className={`w-full text-left rounded-2xl border p-4 transition text-sm flex items-center justify-between ${btnStyle}`}
                                            >
                                                <span>{opt.text}</span>
                                                {quizAnswered && opt.isCorrect && (
                                                    <CheckCircle2 size={18} className="text-emerald-600 flex-shrink-0" />
                                                )}
                                                {quizAnswered && isSelected && !opt.isCorrect && (
                                                    <XCircle size={18} className="text-rose-500 flex-shrink-0" />
                                                )}
                                            </button>
                                        );
                                    })}
                                </div>

                                {/* Explanation feedback */}
                                {quizAnswered && (
                                    <div className="rounded-2xl border border-indigo-100 bg-indigo-50/60 p-4 mb-6 text-xs text-indigo-950 leading-relaxed">
                                        <p className="font-black text-indigo-900 mb-1">💡 ব্যাখ্যা:</p>
                                        <p>{currentQuizItem.explanationBn}</p>
                                    </div>
                                )}

                                {/* Next Button */}
                                {quizAnswered && (
                                    <button
                                        onClick={handleNextQuiz}
                                        className="w-full rounded-2xl bg-rose-600 py-3 text-xs font-black text-white hover:bg-rose-500 transition shadow-md"
                                    >
                                        {quizIndex < quizList.length - 1 ? 'পরবর্তী প্রশ্ন ➔' : 'ফলাফল দেখুন 🏆'}
                                    </button>
                                )}
                            </div>
                        ) : (
                            /* Quiz Result Screen */
                            <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm space-y-5">
                                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
                                    <Trophy size={32} />
                                </div>

                                <div>
                                    <h3 className="text-2xl font-black text-slate-900">দারুণ অনুশীলন!</h3>
                                    <p className="text-xs text-slate-500 mt-1">
                                        আপনি ১০টি প্রশ্নের মধ্যে সঠিক উত্তর দিয়ে অর্জন করেছেন:
                                    </p>
                                    <p className="text-3xl font-black text-emerald-600 mt-2">+{quizScore} XP</p>
                                </div>

                                <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4 text-xs text-slate-600 text-left space-y-1">
                                    <p className="font-bold text-slate-800">💡 একা একা স্পিকিং উন্নতির পরামর্শ:</p>
                                    <p>• যে ভুলগুলো চিহ্নিত করলেন, সেগুলো আজ অন্তত ৩ বার নিজের সাথে জোরে জোরে বলুন।</p>
                                    <p>• বাক্যগুলো প্রতিদিন আপনার ডায়েরি বা নোটবুকে লিখে রাখুন।</p>
                                </div>

                                <div className="flex gap-2 justify-center">
                                    <button
                                        onClick={resetQuiz}
                                        className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 px-5 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-100 transition"
                                    >
                                        <RefreshCw size={13} /> আবার খেলুন
                                    </button>
                                    <button
                                        onClick={() => setViewMode('cards')}
                                        className="rounded-xl bg-rose-600 px-5 py-2.5 text-xs font-bold text-white hover:bg-rose-500 transition shadow"
                                    >
                                        সব কার্ড দেখুন
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
