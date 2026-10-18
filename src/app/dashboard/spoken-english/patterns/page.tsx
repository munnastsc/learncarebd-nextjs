'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import {
    ArrowLeft, Volume2, Sparkles, Mic, CheckCircle2, RotateCcw,
    BookOpen, Layers, Lightbulb, Play, Copy, Check
} from 'lucide-react';

type Pattern = {
    id: string;
    title: string;
    formula: string;
    banglaMeaning: string;
    description: string;
    tag: 'Desire' | 'Habit' | 'Polite' | 'Problem' | 'Time' | 'Opinion';
    examples: {
        en: string;
        bn: string;
    }[];
    builder: {
        subjects: string[];
        verbs: { en: string; bn: string }[];
        complements: string[];
    };
};

const PATTERNS: Pattern[] = [
    {
        id: 'feel-like',
        title: 'I feel like...',
        formula: 'Subject + feel/feels like + Verb(ing) + Extension',
        banglaMeaning: 'আমার ... করতে ইচ্ছে করছে / মন চাইছে',
        description: 'কোনো কিছু করার তাৎক্ষণিক ইচ্ছা বা মুড প্রকাশ করতে এই ফর্মুলাটি সবচেয়ে জনপ্রিয়।',
        tag: 'Desire',
        examples: [
            { en: 'I feel like having a hot cup of tea.', bn: 'আমার এক কাপ গরম চা খেতে ইচ্ছে করছে।' },
            { en: 'I feel like going for a long walk.', bn: 'আমার অনেকক্ষণ হাঁটতে ইচ্ছে করছে।' },
            { en: 'Do you feel like watching a movie tonight?', bn: 'আজ রাতে কি তোমার সিনেমা দেখতে ইচ্ছে করছে?' },
            { en: 'I don\'t feel like talking to anyone right now.', bn: 'এখন আমার কারো সাথে কথা বলতে ইচ্ছে করছে না।' },
            { en: 'He feels like taking a short nap.', bn: 'তার একটু ঘুমিয়ে নিতে ইচ্ছে করছে।' },
        ],
        builder: {
            subjects: ['I feel like', 'She feels like', 'We feel like', 'Do you feel like'],
            verbs: [
                { en: 'eating', bn: 'খাওয়া' },
                { en: 'learning', bn: 'শেখা' },
                { en: 'traveling to', bn: 'ভ্রমণ করা' },
                { en: 'practicing', bn: 'অনুশীলন করা' },
                { en: 'drinking', bn: 'পান করা' },
            ],
            complements: ['some delicious food', 'spoken English daily', 'new places with friends', 'pronunciation with AI', 'cold coffee'],
        },
    },
    {
        id: 'looking-forward',
        title: 'Looking forward to...',
        formula: 'Subject + am/is/are looking forward to + Verb(ing) / Noun',
        banglaMeaning: 'আমি আগ্রহ নিয়ে / উন্মুখ হয়ে অপেক্ষা করছি',
        description: 'ভবিষ্যতের কোনো আনন্দদায়ক কাজের জন্য অধীর আগ্রহে অপেক্ষা করা বোঝাতে ব্যবহৃত হয়। মনে রাখবেন, to এর পর Verb-এর সাথে ing যোগ হবে।',
        tag: 'Desire',
        examples: [
            { en: 'I am looking forward to meeting you soon.', bn: 'আমি শীঘ্রই আপনার সাথে দেখা করার জন্য আগ্রহ নিয়ে অপেক্ষা করছি।' },
            { en: 'We are looking forward to joining the English club.', bn: 'আমরা ইংলিশ ক্লাবে যুক্ত হওয়ার জন্য উন্মুখ হয়ে আছি।' },
            { en: 'She is looking forward to starting her new job.', bn: 'সে তার নতুন চাকরি শুরু করার জন্য অধীর আগ্রহে আছে।' },
            { en: 'I am looking forward to receiving your reply.', bn: 'আমি আপনার উত্তরের অপেক্ষায় রইলাম।' },
        ],
        builder: {
            subjects: ['I am looking forward to', 'We are looking forward to', 'He is looking forward to'],
            verbs: [
                { en: 'meeting', bn: 'সাক্ষাৎ করা' },
                { en: 'hearing', bn: 'শোনা' },
                { en: 'visiting', bn: 'ঘুরতে যাওয়া' },
                { en: 'celebrating', bn: 'উদযাপন করা' },
            ],
            complements: ['you very soon', 'from your side', 'the historic places', 'our success together'],
        },
    },
    {
        id: 'trouble-in',
        title: 'Have trouble...',
        formula: 'Subject + have/has trouble + Verb(ing)',
        banglaMeaning: 'আমার ... করতে সমস্যা / অসুবিধা হচ্ছে',
        description: 'কোনো কাজ করতে বেগ পেতে হলে বা অসুবিধা হলে এই প্যাটার্নটি ব্যবহার করুন।',
        tag: 'Problem',
        examples: [
            { en: 'I have trouble speaking English fluently.', bn: 'আমার সাবলীলভাবে ইংরেজিতে কথা বলতে সমস্যা হচ্ছে।' },
            { en: 'She has trouble understanding native British accent.', bn: 'তার ব্রিটিশ অ্যাকসেন্ট বুঝতে সমস্যা হয়।' },
            { en: 'Do you have trouble memorizing new vocabulary?', bn: 'আপনার কি নতুন ভোকাবুলারি মনে রাখতে কষ্ট হয়?' },
            { en: 'I have trouble waking up early in the morning.', bn: 'সকালে তাড়াতাড়ি উঠতে আমার সমস্যা হয়।' },
        ],
        builder: {
            subjects: ['I have trouble', 'Many students have trouble', 'He has trouble'],
            verbs: [
                { en: 'pronouncing', bn: 'উচ্চারণ করা' },
                { en: 'remembering', bn: 'মনে রাখা' },
                { en: 'understanding', bn: 'বোঝা' },
                { en: 'answering', bn: 'উত্তর দেওয়া' },
            ],
            complements: ['difficult English words', 'grammar rules', 'fast native speakers', 'IELTS speaking questions'],
        },
    },
    {
        id: 'no-point',
        title: 'There is no point in...',
        formula: 'There is no point in + Verb(ing) + Extension',
        banglaMeaning: '... করে কোনো লাভ নেই / কোনো অর্থ হয় না',
        description: 'কোনো কাজের কোনো সার্থকতা বা প্রয়োজনীয়তা নেই বোঝাতে ব্যবহৃত চমৎকার ফ্রেজ।',
        tag: 'Problem',
        examples: [
            { en: 'There is no point in crying over spilt milk.', bn: 'যা হওয়ার হয়ে গেছে, তা নিয়ে অনুশোচনা করে কোনো লাভ নেই।' },
            { en: 'There is no point in arguing with someone who won\'t listen.', bn: 'যে শুনবে না তার সাথে তর্ক করে কোনো লাভ নেই।' },
            { en: 'There is no point in waiting here anymore.', bn: 'এখানে আর অপেক্ষা করে কোনো লাভ নেই।' },
            { en: 'There is no point in wasting valuable time on social media.', bn: 'সোশ্যাল মিডিয়ায় মূল্যবান সময় নষ্ট করে কোনো লাভ নেই।' },
        ],
        builder: {
            subjects: ['There is no point in', 'Is there any point in'],
            verbs: [
                { en: 'worrying about', bn: 'দুশ্চিন্তা করা' },
                { en: 'delaying', bn: 'দেরি করা' },
                { en: 'arguing about', bn: 'তর্ক করা' },
                { en: 'giving up', bn: 'ছেড়ে দেওয়া' },
            ],
            complements: ['what you cannot change', 'your English speaking practice', 'useless matters', 'your biggest dream'],
        },
    },
    {
        id: 'used-to',
        title: 'Be used to...',
        formula: 'Subject + am/is/are used to + Verb(ing) / Noun',
        banglaMeaning: 'আমার ... করার অভ্যাস আছে / আমি অভ্যস্ত',
        description: 'বর্তমানে কোনো কাজে অভ্যস্ত বোঝাতে "be used to + V(ing)" বসে। (অতীতের নিয়মিত অভ্যাসের জন্য "used to + Base Verb" বসে)।',
        tag: 'Habit',
        examples: [
            { en: 'I am used to speaking in English with my colleagues.', bn: 'আমি আমার সহকর্মীদের সাথে ইংরেজিতে কথা বলতে অভ্যস্ত।' },
            { en: 'She is used to working under pressure.', bn: 'সে চাপের মধ্যে কাজ করতে অভ্যস্ত।' },
            { en: 'Are you used to driving on the left side of the road?', bn: 'আপনি কি রাস্তার বাম দিক দিয়ে গাড়ি চালাতে অভ্যস্ত?' },
            { en: 'I am not used to eating such spicy food.', bn: 'আমি এত ঝাল খাবার খাওয়ায় অভ্যস্ত নই।' },
        ],
        builder: {
            subjects: ['I am used to', 'She is used to', 'We are used to', 'I am getting used to'],
            verbs: [
                { en: 'practicing', bn: 'অনুশীলন করা' },
                { en: 'speaking', bn: 'কথা বলা' },
                { en: 'listening to', bn: 'শোনা' },
                { en: 'reading', bn: 'পড়া' },
            ],
            complements: ['English every single day', 'in front of people', 'British audio podcasts', 'English news daily'],
        },
    },
    {
        id: 'would-you-mind',
        title: 'Would you mind...?',
        formula: 'Would you mind + Verb(ing) + Extension?',
        banglaMeaning: 'আপনি কি কিছু মনে করবেন ... করলে? (অত্যন্ত বিনম্র অনুরোধ)',
        description: 'কাউকে অত্যন্ত ভদ্রভাবে কোনো কাজ করার অনুরোধ করতে এই গঠনটি আন্তর্জাতিকভাবে সবচেয়ে বেশি ব্যবহৃত হয়।',
        tag: 'Polite',
        examples: [
            { en: 'Would you mind repeating that once again, please?', bn: 'দয়া করে আরেকবার বলবেন কি?' },
            { en: 'Would you mind turning down the volume a bit?', bn: 'আওয়াজটা একটু কমিয়ে দিলে কিছু মনে করবেন কি?' },
            { en: 'Would you mind speaking a little more slowly?', bn: 'আরেকটু আস্তে কথা বললে আপনার অসুবিধা হবে কি?' },
            { en: 'Would you mind helping me with this sentence?', bn: 'এই বাক্যটিতে আমাকে একটু সাহায্য করবেন কি?' },
        ],
        builder: {
            subjects: ['Would you mind', 'Do you mind'],
            verbs: [
                { en: 'repeating', bn: 'পুনরাবৃত্তি করা' },
                { en: 'sharing', bn: 'শেয়ার করা' },
                { en: 'explaining', bn: 'ব্যাখ্যা করা' },
                { en: 'opening', bn: 'খোলা' },
            ],
            complements: ['that point once again', 'your experience with me', 'this grammar topic', 'the door please'],
        },
    },
    {
        id: 'how-about',
        title: 'How about...?',
        formula: 'How about + Verb(ing) / Noun + ?',
        banglaMeaning: 'কেমন হয় যদি ... করি? / কী বলো ... করলে?',
        description: 'কোনো আইডিয়া বা পরামর্শ প্রস্তাব করতে এই ফ্রেন্ডলি এক্সপ্রেশনটি ব্যবহার করুন।',
        tag: 'Polite',
        examples: [
            { en: 'How about practicing English for thirty minutes right now?', bn: 'এখনই ৩০ মিনিট ইংরেজি প্র্যাকটিস করলে কেমন হয়?' },
            { en: 'How about having dinner together tonight?', bn: 'আজ রাতে একসাথে রাতের খাবার খেলে কেমন হয়?' },
            { en: 'How about trying a different approach?', bn: 'ভিন্ন কোনো পদ্ধতি চেষ্টা করে দেখলে কেমন হয়?' },
            { en: 'How about visiting the book fair this Friday?', bn: 'এই শুক্রবারে বইমেলায় ঘুরতে গেলে কেমন হয়?' },
        ],
        builder: {
            subjects: ['How about', 'What about'],
            verbs: [
                { en: 'joining', bn: 'যুক্ত হওয়া' },
                { en: 'ordering', bn: 'অর্ডার করা' },
                { en: 'taking', bn: 'নেওয়া' },
                { en: 'starting', bn: 'শুরু করা' },
            ],
            complements: ['the speaking session today', 'some delicious coffee', 'a short mock test', 'our daily mission now'],
        },
    },
    {
        id: 'likely-to',
        title: 'Likely to...',
        formula: 'Subject + am/is/are likely to + Verb(Base)',
        banglaMeaning: '... হওয়ার বা করার সম্ভাবনা আছে',
        description: 'কোনো ঘটনা ঘটার ভালো সম্ভাবনা রয়েছে বোঝাতে likely to ব্যবহৃত হয়। (বিপরীত: unlikely to = সম্ভাবনা কম)।',
        tag: 'Opinion',
        examples: [
            { en: 'It is likely to rain in the evening.', bn: 'সন্ধ্যায় বৃষ্টি হওয়ার সম্ভাবনা আছে।' },
            { en: 'He is likely to pass the IELTS test with Band 8.', bn: 'তার আইইএলটিএস পরীক্ষায় ব্যান্ড ৮ পাওয়ার জোরালো সম্ভাবনা রয়েছে।' },
            { en: 'Prices are likely to increase next month.', bn: 'আগামী মাসে দাম বাড়ার সম্ভাবনা রয়েছে।' },
            { en: 'I am likely to get a promotion this year.', bn: 'এই বছর আমার পদোন্নতি পাওয়ার সম্ভাবনা আছে।' },
        ],
        builder: {
            subjects: ['I am likely to', 'He is likely to', 'It is likely to', 'They are likely to'],
            verbs: [
                { en: 'achieve', bn: 'অর্জন করা' },
                { en: 'score', bn: 'স্কোর করা' },
                { en: 'travel to', bn: 'ভ্রমণ করা' },
                { en: 'improve', bn: 'উন্নত করা' },
            ],
            complements: ['fluency within three months', 'a high band in speaking', 'London next winter', 'English communication'],
        },
    },
    {
        id: 'it-takes',
        title: 'It takes (time) to...',
        formula: 'It takes + (Person) + (Time duration) + to + Verb(Base)',
        banglaMeaning: '... করতে সময় লাগে',
        description: 'কোনো কাজ সম্পন্ন করতে কতটুকু সময় প্রয়োজন তা প্রকাশের স্বাভাবিক ইংরেজি গঠন।',
        tag: 'Time',
        examples: [
            { en: 'It takes time to build genuine speaking fluency.', bn: 'সত্যিকারের স্পিকিং ফ্লুয়েন্সি গড়ে তুলতে সময় লাগে।' },
            { en: 'It takes only twenty minutes to reach the station.', bn: 'স্টেশনে পৌঁছাতে মাত্র ২০ মিনিট সময় লাগে।' },
            { en: 'How long does it take to learn British pronunciation?', bn: 'ব্রিটিশ উচ্চারণ শিখতে কতদিন সময় লাগে?' },
            { en: 'It takes hard work and patience to succeed.', bn: 'সফল হতে কঠোর পরিশ্রম ও ধৈর্যের প্রয়োজন হয়।' },
        ],
        builder: {
            subjects: ['It takes', 'Does it take', 'How long does it take'],
            verbs: [
                { en: 'time to master', bn: 'আয়ত্ত করতে' },
                { en: 'effort to speak', bn: 'বলতে চেষ্টা' },
                { en: 'patience to develop', bn: 'ধৈর্য গড়ে তুলতে' },
                { en: 'dedication to crack', bn: 'ক্র্যাক করার নিষ্ঠা' },
            ],
            complements: ['spoken English naturally', 'confidently in public', 'a clear accent', 'the IELTS exam'],
        },
    },
    {
        id: 'no-wonder',
        title: 'No wonder...',
        formula: 'No wonder + Complete Sentence',
        banglaMeaning: 'এতে অবাক হওয়ার কিছু নেই! / তাই তো বলি!',
        description: 'কোনো কারণ জানার পর "এতে অবাক হওয়ার কিছু নেই" বা "স্বাভাবিক ব্যাপার" বোঝাতে নো ওয়ান্ডার বলা হয়।',
        tag: 'Opinion',
        examples: [
            { en: 'No wonder your English is so fluent; you practice every day!', bn: 'তোমার ইংরেজি এত ভালো এতে অবাক হওয়ার কিছু নেই, তুমি তো প্রতিদিন প্র্যাকটিস করো!' },
            { en: 'No wonder you feel exhausted; you worked all night.', bn: 'তুমি ক্লান্তিবোধ করছ এতে আশ্চর্য হওয়ার কিছু নেই, তুমি সারা রাত কাজ করেছো।' },
            { en: 'No wonder he passed with flying colors.', bn: 'সে দুর্দান্ত ফলাফল করেছে এতে অবাক হওয়ার কিছু নেই।' },
        ],
        builder: {
            subjects: ['No wonder', 'It is no wonder that'],
            verbs: [
                { en: 'you speak', bn: 'তুমি কথা বলো' },
                { en: 'she achieved', bn: 'সে অর্জন করেছে' },
                { en: 'they improved', bn: 'তারা উন্নত করেছে' },
            ],
            complements: ['so naturally and clearly', 'her dream IELTS score', 'their pronunciation skills'],
        },
    },
];

export default function SpokenPatternsPage() {
    const [selectedPatternId, setSelectedPatternId] = useState<string>('feel-like');
    const [activeFilter, setActiveFilter] = useState<string>('ALL');
    const [speechPlaying, setSpeechPlaying] = useState<string | null>(null);

    // Interactive sentence builder state
    const currentPattern = PATTERNS.find(p => p.id === selectedPatternId)!;
    const [selectedSubject, setSelectedSubject] = useState(currentPattern.builder.subjects[0]);
    const [selectedVerb, setSelectedVerb] = useState(currentPattern.builder.verbs[0].en);
    const [selectedComplement, setSelectedComplement] = useState(currentPattern.builder.complements[0]);
    const [isRecording, setIsRecording] = useState(false);
    const [spokenText, setSpokenText] = useState('');
    const [accuracyScore, setAccuracyScore] = useState<number | null>(null);
    const [copied, setCopied] = useState(false);

    const recognitionRef = useRef<any>(null);

    // Reset builder selection when pattern changes
    useEffect(() => {
        setSelectedSubject(currentPattern.builder.subjects[0]);
        setSelectedVerb(currentPattern.builder.verbs[0].en);
        setSelectedComplement(currentPattern.builder.complements[0]);
        setSpokenText('');
        setAccuracyScore(null);
    }, [selectedPatternId]);

    // Setup speech recognition
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
            if (SpeechRecognition) {
                const rec = new SpeechRecognition();
                rec.continuous = false;
                rec.lang = 'en-US';

                rec.onresult = (e: any) => {
                    const text = e.results[0][0].transcript;
                    setSpokenText(text);
                    evaluateSpoken(text);
                };

                rec.onend = () => setIsRecording(false);
                rec.onerror = () => setIsRecording(false);

                recognitionRef.current = rec;
            }
        }
    }, [selectedSubject, selectedVerb, selectedComplement]);

    const constructedSentence = `${selectedSubject} ${selectedVerb} ${selectedComplement}${currentPattern.formula.includes('?') ? '?' : '.'}`;

    const playAudio = (text: string, rate = 1.0) => {
        if (typeof window === 'undefined') return;
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-GB'; // British English by default
        utterance.rate = rate;
        utterance.onstart = () => setSpeechPlaying(text);
        utterance.onend = () => setSpeechPlaying(null);
        utterance.onerror = () => setSpeechPlaying(null);
        window.speechSynthesis.speak(utterance);
    };

    const toggleSpeechRecognition = () => {
        if (!recognitionRef.current) return;
        if (isRecording) {
            recognitionRef.current.stop();
        } else {
            setSpokenText('');
            setAccuracyScore(null);
            setIsRecording(true);
            try {
                recognitionRef.current.start();
            } catch (err) {
                console.error('Mic start error:', err);
                setIsRecording(false);
            }
        }
    };

    const evaluateSpoken = (spoken: string) => {
        const clean = (str: string) => str.toLowerCase().replace(/[^a-z0-9 ]/g, '').trim();
        const targetWords = clean(constructedSentence).split(/\s+/);
        const spokenWords = clean(spoken).split(/\s+/);

        let matches = 0;
        targetWords.forEach(w => {
            if (spokenWords.includes(w)) matches++;
        });

        const score = Math.min(100, Math.round((matches / targetWords.length) * 100));
        setAccuracyScore(score);
    };

    const copySentence = () => {
        navigator.clipboard.writeText(constructedSentence);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const filteredPatterns = activeFilter === 'ALL'
        ? PATTERNS
        : PATTERNS.filter(p => p.tag.toUpperCase() === activeFilter.toUpperCase());

    return (
        <div className="min-h-screen bg-[#f8fafc] pb-20 font-sans">
            {/* Header */}
            <div className="bg-gradient-to-br from-slate-900 via-teal-950 to-indigo-950 text-white px-6 py-10 lg:px-12">
                <div className="max-w-6xl mx-auto">
                    <Link href="/dashboard/spoken-english" className="inline-flex items-center gap-1.5 text-xs text-teal-300 hover:underline mb-4 font-semibold">
                        <ArrowLeft size={14} /> Back to Spoken Hub
                    </Link>
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <div>
                            <span className="flex items-center gap-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-teal-300 mb-2 w-fit">
                                <Sparkles size={11} /> 100+ SENTENCE FORMULA ENGINE
                            </span>
                            <h1 className="text-3xl lg:text-4xl font-black">
                                Spoken Sentence <span className="text-teal-400">Formulas & Patterns</span>
                            </h1>
                            <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
                                মুখস্থ নয়, মাত্র একটি ফর্মুলা দিয়ে শত শত বাক্য নিজে নিজে বানিয়ে মুখে বলার ম্যাজিক মেথড!
                            </p>
                        </div>

                        {/* Quick filter tags */}
                        <div className="flex flex-wrap gap-1.5 bg-white/10 p-1.5 rounded-2xl border border-white/10 backdrop-blur-md">
                            {['ALL', 'Desire', 'Habit', 'Polite', 'Problem', 'Time', 'Opinion'].map(tag => (
                                <button
                                    key={tag}
                                    onClick={() => setActiveFilter(tag)}
                                    className={`px-3 py-1 rounded-xl text-xs font-bold transition ${
                                        activeFilter === tag
                                            ? 'bg-teal-500 text-slate-950 shadow-sm'
                                            : 'text-slate-300 hover:text-white hover:bg-white/10'
                                    }`}
                                >
                                    {tag}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="max-w-6xl mx-auto px-6 py-8">
                <div className="grid lg:grid-cols-12 gap-8 items-start">

                    {/* Left: Patterns List */}
                    <div className="lg:col-span-4 space-y-2.5">
                        <p className="text-xs font-black uppercase tracking-widest text-slate-400 px-1 mb-3 flex items-center justify-between">
                            <span>Select Formula ({filteredPatterns.length})</span>
                            <span className="text-[10px] text-teal-600 lowercase">100% Free Forever</span>
                        </p>

                        <div className="space-y-2 max-h-[680px] overflow-y-auto pr-1">
                            {filteredPatterns.map(pattern => {
                                const isSelected = pattern.id === selectedPatternId;
                                return (
                                    <button
                                        key={pattern.id}
                                        onClick={() => setSelectedPatternId(pattern.id)}
                                        className={`w-full text-left p-4 rounded-2xl border transition-all ${
                                            isSelected
                                                ? 'bg-white border-teal-500 shadow-md ring-2 ring-teal-500/20'
                                                : 'bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white'
                                        }`}
                                    >
                                        <div className="flex items-center justify-between mb-1.5">
                                            <span className="text-sm font-black text-slate-900">{pattern.title}</span>
                                            <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                                                {pattern.tag}
                                            </span>
                                        </div>
                                        <p className="text-xs font-medium text-emerald-700">{pattern.banglaMeaning}</p>
                                        <p className="text-[11px] text-slate-400 mt-1 font-mono truncate">{pattern.formula}</p>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right: Active Pattern Detail & Interactive Builder */}
                    <div className="lg:col-span-8 space-y-6">

                        {/* 1. Formula Card */}
                        <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-xs">
                            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                                <span className="bg-teal-50 text-teal-700 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border border-teal-200">
                                    FORMULA #{PATTERNS.findIndex(p => p.id === currentPattern.id) + 1}
                                </span>
                                <span className="text-xs font-bold text-slate-500">{currentPattern.tag} Expression</span>
                            </div>

                            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2">
                                {currentPattern.title}
                            </h2>
                            <p className="text-lg font-bold text-teal-700 mb-4">
                                {currentPattern.banglaMeaning}
                            </p>

                            {/* Structure Box */}
                            <div className="bg-slate-900 text-teal-300 p-4 rounded-2xl font-mono text-xs sm:text-sm font-semibold tracking-wide border border-slate-800 flex items-center justify-between gap-3">
                                <span>{currentPattern.formula}</span>
                                <span className="text-[10px] uppercase text-slate-400 font-sans tracking-normal bg-slate-800 px-2 py-1 rounded-lg">Rule</span>
                            </div>

                            <p className="text-xs sm:text-sm text-slate-600 mt-4 leading-relaxed bg-teal-50/40 p-4 rounded-2xl border border-teal-100/60">
                                <span className="font-bold text-teal-900">💡 কীভাবে ব্যবহার করবেন:</span> {currentPattern.description}
                            </p>
                        </div>

                        {/* 2. Interactive Sentence Builder Engine (The Magic Feature!) */}
                        <div className="bg-gradient-to-br from-indigo-50/80 via-white to-teal-50/80 border-2 border-indigo-200/80 rounded-3xl p-6 md:p-8 shadow-md">
                            <div className="flex items-center gap-2 text-indigo-700 text-xs font-black uppercase tracking-wider mb-2">
                                <Layers size={16} /> Interactive Sentence Builder
                            </div>
                            <h3 className="text-xl font-black text-slate-950 mb-1">নিজে বাক্য তৈরি করুন ও বলুন</h3>
                            <p className="text-xs text-slate-500 mb-6">নিচের অপশনগুলো সিলেক্ট করে বাক্য তৈরি করুন এবং মাইক্রোফোন দিয়ে বলে প্র্যাকটিস করুন।</p>

                            {/* Options Selector Grid */}
                            <div className="grid sm:grid-cols-3 gap-4 mb-6">
                                {/* Subject / Starter */}
                                <div>
                                    <label className="block text-[11px] font-black uppercase tracking-wider text-slate-500 mb-2">১. Subject বা প্রারম্ভ</label>
                                    <select
                                        value={selectedSubject}
                                        onChange={e => setSelectedSubject(e.target.value)}
                                        className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-xs font-bold text-slate-800 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                                    >
                                        {currentPattern.builder.subjects.map(s => (
                                            <option key={s} value={s}>{s}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Verb */}
                                <div>
                                    <label className="block text-[11px] font-black uppercase tracking-wider text-slate-500 mb-2">২. Verb (ক্রিয়া)</label>
                                    <select
                                        value={selectedVerb}
                                        onChange={e => setSelectedVerb(e.target.value)}
                                        className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-xs font-bold text-slate-800 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                                    >
                                        {currentPattern.builder.verbs.map(v => (
                                            <option key={v.en} value={v.en}>{v.en} ({v.bn})</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Complement */}
                                <div>
                                    <label className="block text-[11px] font-black uppercase tracking-wider text-slate-500 mb-2">৩. Complement (বাক্যাংশ)</label>
                                    <select
                                        value={selectedComplement}
                                        onChange={e => setSelectedComplement(e.target.value)}
                                        className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-xs font-bold text-slate-800 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                                    >
                                        {currentPattern.builder.complements.map(c => (
                                            <option key={c} value={c}>{c}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Generated Live Sentence Result Box */}
                            <div className="bg-white border-2 border-indigo-500/30 rounded-2xl p-5 mb-6 shadow-sm">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-indigo-600">Your Sentence</span>
                                    <button onClick={copySentence} className="text-slate-400 hover:text-slate-700 flex items-center gap-1 text-[11px] font-bold">
                                        {copied ? <Check size={12} className="text-emerald-600" /> : <Copy size={12} />}
                                        {copied ? 'Copied!' : 'Copy'}
                                    </button>
                                </div>

                                <p className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
                                    "{constructedSentence}"
                                </p>

                                {/* Action Buttons */}
                                <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-3">
                                    <button
                                        onClick={() => playAudio(constructedSentence, 1.0)}
                                        className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-4 py-2 rounded-xl text-xs transition shadow-sm"
                                    >
                                        <Volume2 size={15} /> ব্রিটিশ উচ্চারণ শুনুন
                                    </button>

                                    <button
                                        onClick={() => playAudio(constructedSentence, 0.75)}
                                        className="inline-flex items-center gap-1.5 bg-slate-150 hover:bg-slate-200 text-slate-700 font-bold px-3 py-2 rounded-xl text-xs transition"
                                        title="Slow speed for clear listening"
                                    >
                                        🐢 আস্তে শুনুন (0.75x)
                                    </button>

                                    <button
                                        onClick={toggleSpeechRecognition}
                                        className={`inline-flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-black transition ${
                                            isRecording
                                                ? 'bg-rose-600 text-white animate-pulse'
                                                : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm'
                                        }`}
                                    >
                                        <Mic size={15} /> {isRecording ? 'শুনছি... কথা বলুন' : 'মুখে বলে পরীক্ষা করুন'}
                                    </button>
                                </div>

                                {/* Speech Result & Score */}
                                {spokenText && (
                                    <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="font-bold text-slate-600">আপনি যা বললেন:</span>
                                            {accuracyScore !== null && (
                                                <span className={`font-black px-2 py-0.5 rounded-full ${
                                                    accuracyScore >= 80 ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                                                }`}>
                                                    {accuracyScore}% Accuracy {accuracyScore >= 80 ? '🎉 সাবাশ!' : '💪 আবার চেষ্টা করুন'}
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-slate-800 font-medium italic">"{spokenText}"</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* 3. Everyday Examples Showcase */}
                        <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-xs">
                            <h3 className="text-lg font-black text-slate-900 mb-1 flex items-center gap-2">
                                <BookOpen size={18} className="text-teal-600" /> বাস্তব জীবনের উদাহরণসমূহ (Everyday Examples)
                            </h3>
                            <p className="text-xs text-slate-500 mb-5">প্রতিটি উদাহরণ মনোযোগ দিয়ে শুনুন এবং জোরে জোরে মুখে বলুন:</p>

                            <div className="space-y-3">
                                {currentPattern.examples.map((ex, idx) => (
                                    <div
                                        key={idx}
                                        className="p-4 rounded-2xl bg-slate-50 hover:bg-teal-50/50 border border-slate-100 hover:border-teal-200 transition group flex items-start justify-between gap-4"
                                    >
                                        <div>
                                            <p className="text-sm font-bold text-slate-900 mb-1">{ex.en}</p>
                                            <p className="text-xs text-slate-500 font-medium">{ex.bn}</p>
                                        </div>
                                        <button
                                            onClick={() => playAudio(ex.en)}
                                            className="p-2.5 rounded-xl bg-white text-slate-600 group-hover:bg-teal-600 group-hover:text-white transition shadow-xs shrink-0"
                                            title="Listen native pronunciation"
                                        >
                                            <Volume2 size={16} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
