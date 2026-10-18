'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';
import {
    ArrowLeft, Mic, Square, Sparkles, CheckCircle2, AlertTriangle,
    Volume2, Flame, Trophy, Award, Zap, RefreshCw, BookOpen,
    Search, ChevronRight, ChevronLeft, Check, Layers, Play, Pause,
    HelpCircle, Star
} from 'lucide-react';
import pronunciationWordsRaw from '../../../../../data/pronunciation-words.json';

interface PronunciationWord {
    id: number;
    word: string;
    level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1';
    levelLabel: string;
    pos: string;
    ipa: string;
    banglaPron: string;
    meaning: string;
    pronunciationTip: string;
    sentence: string;
    sentenceIpa: string;
    sentenceMeaning: string;
    sentenceTip: string;
}

const PRONUNCIATION_WORDS = pronunciationWordsRaw as PronunciationWord[];

type PracticeSentence = {
    id: string;
    category: 'twister' | 'phonetics';
    categoryLabel: string;
    text: string;
    ipa: string;
    bangla: string;
    tip: string;
};

const EXTRA_DRILLS: PracticeSentence[] = [
    // Tongue Twisters
    {
        id: 'tt1',
        category: 'twister',
        categoryLabel: 'Tongue Twister',
        text: 'She sells seashells by the seashore.',
        ipa: '/ʃiː selz ˈsiːʃelz baɪ ðə ˈsiːʃɔː/',
        bangla: 'সে সমুদ্র সৈকতে ঝিনুক বিক্রি করে।',
        tip: '🎯 S এবং SH সাউন্ডের পার্থক্য প্র্যাকটিস করুন। "She" এবং "seashells" বলার সময় ঠোঁট একটু গোল করুন।',
    },
    {
        id: 'tt2',
        category: 'twister',
        categoryLabel: 'Tongue Twister',
        text: 'Peter Piper picked a peck of pickled peppers.',
        ipa: '/ˈpiːtə ˈpaɪpə pɪkt ə pek ɒv ˈpɪkld ˈpepəz/',
        bangla: 'পিটার পাইপার এক খাঁচি আচারযুক্ত মরিচ তুলেছিল।',
        tip: '🎯 P সাউন্ডে মুখের ভেতর থেকে বাতাস ছেড়ে দিয়ে পপ (Aspiration) করুন।',
    },
    {
        id: 'tt3',
        category: 'twister',
        categoryLabel: 'Tongue Twister',
        text: 'Red lorry, yellow lorry, red lorry, yellow lorry.',
        ipa: '/red ˈlɒri ˈjeləʊ ˈlɒri/',
        bangla: 'লাল লরি, হলুদ লরি।',
        tip: '🎯 R এবং L সাউন্ডের দ্রুত পরিবর্তনের জন্য চমৎকার ড্রিল। জিহ্বা তালুর পেছনে বাঁকান।',
    },
    {
        id: 'tt4',
        category: 'twister',
        categoryLabel: 'Tongue Twister',
        text: 'I scream, you scream, we all scream for ice cream.',
        ipa: '/aɪ skriːm juː skriːm wiː ɔːl skriːm fɔːr aɪs kriːm/',
        bangla: 'আমি চিৎকার করি, তুমি চিৎকার করো, আমরা সবাই আইসক্রিমের জন্য চিৎকার করি।',
        tip: '🎯 "scream" এবং "ice cream" এর ছন্দ ধরে দ্রুত বলুন।',
    },
    {
        id: 'tt5',
        category: 'twister',
        categoryLabel: 'Tongue Twister',
        text: 'How can a clam cram in a clean cream can?',
        ipa: '/haʊ kæn ə klæm kræm ɪn ə kliːn kriːm kæn/',
        bangla: 'একটি ঝিনুক কীভাবে একটি পরিষ্কার ক্যানে আটকাতে পারে?',
        tip: '🎯 CL এবং CR ব্লেন্ড সাউন্ডের জড়তা কাটান।',
    },

    // Tricky Sounds (P/F, B/V, TH, W)
    {
        id: 'ph1',
        category: 'phonetics',
        categoryLabel: 'Tricky Sounds',
        text: 'The weather this Thursday will be thoroughly thrilling.',
        ipa: '/ðə ˈweðə ðɪs ˈθɜːzdeɪ wɪl biː ˈθʌrəli ˈθrɪlɪŋ/',
        bangla: 'এই বৃহস্পতিবারের আবহাওয়া একেবারেই রোমাঞ্চকর হবে।',
        tip: '🎯 TH সাউন্ড: দাঁতের মাঝখানে জিহ্বার ডগা আলতো করে ছুঁয়ে বাতাস বের করুন।',
    },
    {
        id: 'ph2',
        category: 'phonetics',
        categoryLabel: 'Tricky Sounds',
        text: 'Very few visitors value fresh vegetables.',
        ipa: '/ˈveri fjuː ˈvɪzɪtəz ˈvæljuː freʃ ˈvedʒtəblz/',
        bangla: 'খুব কম দর্শনার্থীই তাজা শাকসবজির মূল্য বোঝে।',
        tip: '🎯 V এবং F সাউন্ড: উপরের দাঁত নিচের ঠোঁটের ভেতরে আলতো স্পর্শ করে বাতাস ছাড়ুন (ভেজিটেবল নয়, ভেজটাব্‌ল্)।',
    },
    {
        id: 'ph3',
        category: 'phonetics',
        categoryLabel: 'Tricky Sounds',
        text: 'Please pass the plate of hot potato chips.',
        ipa: '/pliːz pɑːs ðə pleɪt ɒv hɒt pəˈteɪtəʊ tʃɪps/',
        bangla: 'দয়া করে গরম আলুর চিপসের প্লেটটা একটু এগিয়ে দিন।',
        tip: '🎯 P সাউন্ডটি যেন ‘ফ’ না হয়ে যায়! বাতাসে হালকা পপ করে "ফ্লিট" নয় "প্লেট" বলুন।',
    },
    {
        id: 'ph4',
        category: 'phonetics',
        categoryLabel: 'Tricky Sounds',
        text: 'Water flows wherever the wild wind blows.',
        ipa: '/ˈwɔːtə fləʊz weərˈevə ðə waɪld wɪnd bləʊz/',
        bangla: 'উত্তাল বাতাস যেদিকে বয় পানি সেদিকেই প্রবাহিত হয়।',
        tip: '🎯 W সাউন্ড: ঠোঁট গোল করে শিস দেওয়ার মতো শেপ দিয়ে বলুন, বাংলা ‘ওয়’ এর মতো নয়।',
    }
];

const LEVEL_COLORS: Record<string, { bg: string; text: string; border: string }> = {
    'A1': { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200' },
    'A2': { bg: 'bg-teal-50', text: 'text-teal-700', border: 'border-teal-200' },
    'B1': { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
    'B2': { bg: 'bg-indigo-50', text: 'text-indigo-700', border: 'border-indigo-200' },
    'C1': { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200' }
};

export default function PronunciationPage() {
    const [mainTab, setMainTab] = useState<'words' | 'twister' | 'phonetics'>('words');

    // Word ➔ Sentence Lab States
    const [batchFilter, setBatchFilter] = useState<'all' | 'b1' | 'b2'>('all');
    const [levelFilter, setLevelFilter] = useState<string>('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedWordId, setSelectedWordId] = useState<number>(1);
    const [masteredWords, setMasteredWords] = useState<number[]>([]);

    // Dynamic level counts
    const levelCounts = useMemo(() => {
        const counts = { all: PRONUNCIATION_WORDS.length, A1: 0, A2: 0, B: 0, C1: 0 };
        PRONUNCIATION_WORDS.forEach(w => {
            if (w.level === 'A1') counts.A1++;
            else if (w.level === 'A2') counts.A2++;
            else if (w.level === 'B1' || w.level === 'B2') counts.B++;
            else if (w.level === 'C1') counts.C1++;
        });
        return counts;
    }, []);

    // Word Speaking Practice
    const [isWordRecording, setIsWordRecording] = useState(false);
    const [wordTranscript, setWordTranscript] = useState('');
    const [wordScore, setWordScore] = useState<number | null>(null);

    // Sentence Speaking Practice
    const [isSentenceRecording, setIsSentenceRecording] = useState(false);
    const [sentenceTranscript, setSentenceTranscript] = useState('');
    const [sentenceScore, setSentenceScore] = useState<number | null>(null);
    const [sentenceWordDiffs, setSentenceWordDiffs] = useState<{ word: string; correct: boolean }[]>([]);

    // Extra Drills State
    const [selectedDrillIdx, setSelectedDrillIdx] = useState(0);
    const [isDrillRecording, setIsDrillRecording] = useState(false);
    const [drillTranscript, setDrillTranscript] = useState('');
    const [drillScore, setDrillScore] = useState<number | null>(null);
    const [drillWordDiffs, setDrillWordDiffs] = useState<{ word: string; correct: boolean }[]>([]);

    // Universal state
    const [recognitionSupported, setRecognitionSupported] = useState(true);
    const [speechPlaying, setSpeechPlaying] = useState<string | null>(null);
    const [xp, setXp] = useState(0);

    const recognitionRef = useRef<any>(null);

    // Load XP and Mastered Words
    useEffect(() => {
        const storedXp = Number(localStorage.getItem('spoken_xp') || 0);
        setXp(storedXp);

        try {
            const mastered = JSON.parse(localStorage.getItem('mastered_pronunciation_words') || '[]');
            setMasteredWords(mastered);
        } catch { /* ignore */ }
    }, []);

    // Speech Recognition Setup
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
            if (!SpeechRecognition) {
                setRecognitionSupported(false);
            }
        }
    }, []);

    // Filtered Words List
    const filteredWords = useMemo(() => {
        return PRONUNCIATION_WORDS.filter(w => {
            const matchesBatch = batchFilter === 'all'
                ? true
                : batchFilter === 'b1'
                    ? w.id <= 100
                    : w.id > 100 && w.id <= 200;

            const matchesLevel = levelFilter === 'all'
                ? true
                : levelFilter === 'B'
                    ? (w.level === 'B1' || w.level === 'B2')
                    : w.level === levelFilter;

            const q = searchQuery.toLowerCase().trim();
            if (!q) return matchesBatch && matchesLevel;

            const matchesSearch =
                w.word.toLowerCase().includes(q) ||
                w.banglaPron.toLowerCase().includes(q) ||
                w.meaning.toLowerCase().includes(q) ||
                w.sentence.toLowerCase().includes(q);

            return matchesBatch && matchesLevel && matchesSearch;
        });
    }, [batchFilter, levelFilter, searchQuery]);

    // Active Word
    const currentWord = useMemo(() => {
        return PRONUNCIATION_WORDS.find(w => w.id === selectedWordId) || filteredWords[0] || PRONUNCIATION_WORDS[0];
    }, [selectedWordId, filteredWords]);

    // Extra Drills Filter
    const activeDrills = useMemo(() => {
        return EXTRA_DRILLS.filter(d => d.category === (mainTab === 'twister' ? 'twister' : 'phonetics'));
    }, [mainTab]);

    const currentDrill = activeDrills[selectedDrillIdx] || activeDrills[0];

    // Reset tests on word change
    useEffect(() => {
        setWordTranscript('');
        setWordScore(null);
        setIsWordRecording(false);
        setSentenceTranscript('');
        setSentenceScore(null);
        setSentenceWordDiffs([]);
        setIsSentenceRecording(false);
    }, [selectedWordId]);

    // Audio Player (Oxford audio with British Web Speech fallback)
    const playAudio = (text: string, rate = 1.0, isWord = false) => {
        if (typeof window === 'undefined') return;

        if (isWord) {
            // Try Oxford audio route first
            const audio = new Audio(`/api/audio/oxford?word=${encodeURIComponent(text.toLowerCase())}`);
            audio.playbackRate = rate;
            setSpeechPlaying(text);
            audio.onended = () => setSpeechPlaying(null);
            audio.onerror = () => {
                // Fallback to speech synthesis
                speakText(text, rate);
            };
            audio.play().catch(() => speakText(text, rate));
        } else {
            speakText(text, rate);
        }
    };

    const speakText = (text: string, rate: number) => {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-GB';
        utterance.rate = rate;
        utterance.onstart = () => setSpeechPlaying(text);
        utterance.onend = () => setSpeechPlaying(null);
        utterance.onerror = () => setSpeechPlaying(null);
        window.speechSynthesis.speak(utterance);
    };

    // --- WORD PRONUNCIATION TEST ---
    const startWordRecording = () => {
        const SpeechRec = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
        if (!SpeechRec) return;

        window.speechSynthesis.cancel();
        const rec = new SpeechRec();
        rec.continuous = false;
        rec.interimResults = false;
        rec.lang = 'en-US';

        rec.onstart = () => {
            setIsWordRecording(true);
            setWordTranscript('');
            setWordScore(null);
        };

        rec.onresult = (event: any) => {
            const spoken = event.results[0][0].transcript.toLowerCase().trim().replace(/[^a-z]/g, '');
            const target = currentWord.word.toLowerCase().trim().replace(/[^a-z]/g, '');
            setWordTranscript(event.results[0][0].transcript);

            if (spoken === target) {
                setWordScore(100);
                awardXp(10);
            } else if (spoken.includes(target) || target.includes(spoken)) {
                setWordScore(75);
                awardXp(5);
            } else {
                setWordScore(35);
            }
        };

        rec.onerror = () => setIsWordRecording(false);
        rec.onend = () => setIsWordRecording(false);

        recognitionRef.current = rec;
        try {
            rec.start();
        } catch { /* ignore */ }
    };

    // --- SENTENCE PRONUNCIATION TEST ---
    const startSentenceRecording = () => {
        const SpeechRec = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
        if (!SpeechRec) return;

        window.speechSynthesis.cancel();
        const rec = new SpeechRec();
        rec.continuous = false;
        rec.interimResults = false;
        rec.lang = 'en-US';

        rec.onstart = () => {
            setIsSentenceRecording(true);
            setSentenceTranscript('');
            setSentenceScore(null);
            setSentenceWordDiffs([]);
        };

        rec.onresult = (event: any) => {
            const spoken = event.results[0][0].transcript;
            setSentenceTranscript(spoken);
            evaluateSentence(spoken, currentWord.sentence);
        };

        rec.onerror = () => setIsSentenceRecording(false);
        rec.onend = () => setIsSentenceRecording(false);

        recognitionRef.current = rec;
        try {
            rec.start();
        } catch { /* ignore */ }
    };

    const evaluateSentence = (spoken: string, targetText: string) => {
        const clean = (s: string) => s.toLowerCase().replace(/[^a-z0-9 ]/g, '').trim();
        const targetWords = clean(targetText).split(/\s+/);
        const spokenWords = clean(spoken).split(/\s+/);

        let matches = 0;
        const diffs = targetWords.map(targetWord => {
            const idx = spokenWords.indexOf(targetWord);
            if (idx !== -1) {
                matches++;
                spokenWords.splice(idx, 1);
                return { word: targetWord, correct: true };
            }
            return { word: targetWord, correct: false };
        });

        setSentenceWordDiffs(diffs);
        const accuracy = Math.round((matches / targetWords.length) * 100);
        setSentenceScore(accuracy);

        if (accuracy >= 80) {
            awardXp(20);
            markWordMastered(currentWord.id);
        } else if (accuracy >= 50) {
            awardXp(10);
        }
    };

    // --- DRILL PRONUNCIATION TEST ---
    const startDrillRecording = () => {
        const SpeechRec = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
        if (!SpeechRec) return;

        window.speechSynthesis.cancel();
        const rec = new SpeechRec();
        rec.continuous = false;
        rec.interimResults = false;
        rec.lang = 'en-US';

        rec.onstart = () => {
            setIsDrillRecording(true);
            setDrillTranscript('');
            setDrillScore(null);
            setDrillWordDiffs([]);
        };

        rec.onresult = (event: any) => {
            const spoken = event.results[0][0].transcript;
            setDrillTranscript(spoken);

            const clean = (s: string) => s.toLowerCase().replace(/[^a-z0-9 ]/g, '').trim();
            const targetWords = clean(currentDrill.text).split(/\s+/);
            const spokenWords = clean(spoken).split(/\s+/);

            let matches = 0;
            const diffs = targetWords.map(targetWord => {
                const idx = spokenWords.indexOf(targetWord);
                if (idx !== -1) {
                    matches++;
                    spokenWords.splice(idx, 1);
                    return { word: targetWord, correct: true };
                }
                return { word: targetWord, correct: false };
            });

            setDrillWordDiffs(diffs);
            const accuracy = Math.round((matches / targetWords.length) * 100);
            setDrillScore(accuracy);
            if (accuracy >= 80) awardXp(20);
        };

        rec.onerror = () => setIsDrillRecording(false);
        rec.onend = () => setIsDrillRecording(false);

        recognitionRef.current = rec;
        try {
            rec.start();
        } catch { /* ignore */ }
    };

    const awardXp = (amount: number) => {
        const newXp = xp + amount;
        setXp(newXp);
        localStorage.setItem('spoken_xp', String(newXp));
    };

    const markWordMastered = (id: number) => {
        if (!masteredWords.includes(id)) {
            const updated = [...masteredWords, id];
            setMasteredWords(updated);
            localStorage.setItem('mastered_pronunciation_words', JSON.stringify(updated));
        }
    };

    const handleNextWord = () => {
        const currentIdx = filteredWords.findIndex(w => w.id === currentWord.id);
        if (currentIdx !== -1 && currentIdx < filteredWords.length - 1) {
            setSelectedWordId(filteredWords[currentIdx + 1].id);
        }
    };

    const handlePrevWord = () => {
        const currentIdx = filteredWords.findIndex(w => w.id === currentWord.id);
        if (currentIdx > 0) {
            setSelectedWordId(filteredWords[currentIdx - 1].id);
        }
    };

    const currentWordIndex = filteredWords.findIndex(w => w.id === currentWord.id);

    return (
        <div className="min-h-screen bg-[#f8fafc] px-4 py-8 font-sans pb-24 text-slate-800">
            <div className="mx-auto max-w-6xl">

                {/* Back Link & Header Stats */}
                <div className="flex items-center justify-between mb-6">
                    <Link
                        href="/dashboard/spoken-english"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-800 transition"
                    >
                        <ArrowLeft size={14} /> Back to Spoken Hub
                    </Link>

                    <div className="flex items-center gap-3">
                        {/* Mastered Counter */}
                        <div className="flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full text-xs font-black text-emerald-700 shadow-xs">
                            <CheckCircle2 size={13} className="text-emerald-600" />
                            <span>{masteredWords.length} / 100 Mastered</span>
                        </div>

                        {/* XP Badge */}
                        <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full text-xs font-black text-amber-700 shadow-xs">
                            <Flame size={14} className="text-orange-500 fill-orange-500" />
                            <span>{xp} XP</span>
                        </div>
                    </div>
                </div>

                {/* Hero Header */}
                <div className="mb-6">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-teal-500/20 bg-teal-50 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-teal-700 mb-2">
                        <Sparkles size={11} /> 100% FREE · BASIC TO ADVANCE 3000 SERIES
                    </span>
                    <h1 className="text-2xl sm:text-4xl font-black text-slate-900 leading-tight">
                        Pronunciation Lab: <span className="text-teal-600">Word to Sentence Mastery</span>
                    </h1>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl leading-relaxed">
                        বেসিক থেকে শুরু করে অ্যাডভান্সড পর্যন্ত শব্দ ও বাক্যের নেটিভ ব্রিটিশ উচ্চারণ শিখুন, টাং টুইস্টার দিয়ে জিভের জড়তা কাটান এবং মাইক্রোফোনে বলে তাৎক্ষণিক অ্যাকুরেসি স্কোর দেখুন।
                    </p>
                </div>

                {/* Main Navigation Tabs */}
                <div className="flex flex-wrap gap-2 mb-6 border-b border-slate-200 pb-3">
                    <button
                        onClick={() => setMainTab('words')}
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-black transition ${
                            mainTab === 'words'
                                ? 'bg-teal-600 text-white shadow-md shadow-teal-600/20'
                                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                        }`}
                    >
                        <Layers size={14} />
                        <span>🌟 Word & Sentence Lab (শব্দ ১–২০০)</span>
                    </button>
                    <button
                        onClick={() => setMainTab('twister')}
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-black transition ${
                            mainTab === 'twister'
                                ? 'bg-teal-600 text-white shadow-md shadow-teal-600/20'
                                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                        }`}
                    >
                        <span>👅 Tongue Twisters (জড়তা দূর করুন)</span>
                    </button>
                    <button
                        onClick={() => setMainTab('phonetics')}
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-black transition ${
                            mainTab === 'phonetics'
                                ? 'bg-teal-600 text-white shadow-md shadow-teal-600/20'
                                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                        }`}
                    >
                        <span>🎯 Tricky Sounds (P/F, B/V, TH, W ড্রিল)</span>
                    </button>
                </div>

                {!recognitionSupported && (
                    <div className="mb-6 rounded-2xl bg-amber-50 border border-amber-200 p-4 flex items-start gap-3">
                        <AlertTriangle className="text-amber-600 flex-shrink-0 mt-0.5" size={18} />
                        <div>
                            <p className="text-xs font-black text-amber-800">Browser Compatibility Notice</p>
                            <p className="text-[11px] text-amber-700 mt-0.5 leading-relaxed">
                                ভয়েস রিকগনিশন সব ডিভাইসে সক্রিয় রাখতে <b>Google Chrome</b> অথবা <b>Microsoft Edge</b> ব্রাউজার ব্যবহার করুন।
                            </p>
                        </div>
                    </div>
                )}

                {/* ══════════════════════════════════════════════════════════════════
                    TAB 1: WORD ➔ SENTENCE 3000 MASTERY (BATCH 1 & 2: 200 WORDS)
                   ══════════════════════════════════════════════════════════════════ */}
                {mainTab === 'words' && (
                    <div className="space-y-6">

                        {/* Top Filters & Search Bar */}
                        <div className="flex flex-col md:flex-row gap-3 items-center justify-between bg-white p-3.5 rounded-3xl border border-slate-200 shadow-xs">
                            {/* Level Filter Pills */}
                            <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
                                {[
                                    { id: 'all', label: `সব লেভেল (${levelCounts.all})` },
                                    { id: 'A1', label: `A1 Basic (${levelCounts.A1})` },
                                    { id: 'A2', label: `A2 Elementary (${levelCounts.A2})` },
                                    { id: 'B', label: `B1-B2 Intermediate (${levelCounts.B})` },
                                    { id: 'C1', label: `C1 Advanced (${levelCounts.C1})` }
                                ].map(pill => (
                                    <button
                                        key={pill.id}
                                        onClick={() => setLevelFilter(pill.id)}
                                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                                            levelFilter === pill.id
                                                ? 'bg-teal-600 text-white shadow-xs font-black'
                                                : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                                        }`}
                                    >
                                        {pill.label}
                                    </button>
                                ))}
                            </div>

                            {/* Search Input */}
                            <div className="relative w-full md:w-72">
                                <Search className="absolute left-3 top-2.5 text-slate-400" size={15} />
                                <input
                                    type="text"
                                    placeholder="শব্দ বা বাংলা খুঁজুন..."
                                    value={searchQuery}
                                    onChange={e => setSearchQuery(e.target.value)}
                                    className="w-full rounded-xl border border-slate-200 bg-slate-50 pl-9 pr-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:bg-white focus:border-teal-500 focus:outline-none"
                                />
                                {searchQuery && (
                                    <button
                                        onClick={() => setSearchQuery('')}
                                        className="absolute right-2.5 top-2 text-[10px] text-slate-400 hover:text-slate-600"
                                    >
                                        পরিষ্কার
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Batch Selector Ribbon */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-2 text-xs">
                            <div className="flex items-center gap-2">
                                <span className="font-extrabold text-slate-700 flex items-center gap-1.5">
                                    <BookOpen size={14} className="text-teal-600" />
                                    ব্যাচ নির্বাচন:
                                </span>
                                <div className="inline-flex rounded-xl bg-slate-100 p-0.5 border border-slate-200">
                                    <button
                                        onClick={() => setBatchFilter('all')}
                                        className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition ${
                                            batchFilter === 'all'
                                                ? 'bg-white text-teal-700 shadow-xs font-black'
                                                : 'text-slate-600 hover:text-slate-900'
                                        }`}
                                    >
                                        সব (১–২০০)
                                    </button>
                                    <button
                                        onClick={() => setBatchFilter('b1')}
                                        className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition ${
                                            batchFilter === 'b1'
                                                ? 'bg-white text-teal-700 shadow-xs font-black'
                                                : 'text-slate-600 hover:text-slate-900'
                                        }`}
                                    >
                                        ব্যাচ ১ (১–১০০)
                                    </button>
                                    <button
                                        onClick={() => setBatchFilter('b2')}
                                        className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition ${
                                            batchFilter === 'b2'
                                                ? 'bg-white text-teal-700 shadow-xs font-black'
                                                : 'text-slate-600 hover:text-slate-900'
                                        }`}
                                    >
                                        ব্যাচ ২ (১০১–২০০)
                                    </button>
                                </div>
                            </div>
                            <span className="text-[11px] text-slate-500 font-bold">
                                লক্ষ্য: ৩,০০০ শব্দ ও বাক্য পর্যায়ক্রমে · চলমান: <span className="text-teal-700 font-black">{PRONUNCIATION_WORDS.length}</span> টি
                            </span>
                        </div>

                        {/* Main Grid: Left Word List (Col 4) | Right Practice Deck (Col 8) */}
                        <div className="grid gap-6 lg:grid-cols-12">

                            {/* Left: Word Selector Carousel/List */}
                            <div className="lg:col-span-4 space-y-2">
                                <div className="flex items-center justify-between text-[11px] font-black uppercase text-slate-400 px-1 mb-1">
                                    <span>শব্দ তালিকা ({filteredWords.length})</span>
                                    <span>ক্লিক করে শিখুন</span>
                                </div>

                                <div className="space-y-1.5 max-h-[640px] overflow-y-auto pr-1">
                                    {filteredWords.map((item) => {
                                        const isSelected = item.id === currentWord.id;
                                        const isMastered = masteredWords.includes(item.id);
                                        const color = LEVEL_COLORS[item.level] || LEVEL_COLORS['A1'];

                                        return (
                                            <button
                                                key={item.id}
                                                onClick={() => setSelectedWordId(item.id)}
                                                className={`w-full text-left p-3 rounded-2xl border text-xs transition-all flex items-center justify-between ${
                                                    isSelected
                                                        ? 'bg-teal-600 border-teal-600 text-white shadow-md shadow-teal-600/20'
                                                        : 'bg-white border-slate-200 text-slate-700 hover:border-teal-300 hover:bg-teal-50/20'
                                                }`}
                                            >
                                                <div className="flex items-center gap-2.5 min-w-0">
                                                    <span className={`text-[10px] font-mono font-bold flex-shrink-0 ${
                                                        isSelected ? 'text-teal-200' : 'text-slate-400'
                                                    }`}>
                                                        #{item.id}
                                                    </span>

                                                    <div className="truncate">
                                                        <div className="flex items-center gap-1.5">
                                                            <p className="font-black text-sm truncate">{item.word}</p>
                                                            <span className={`text-[9px] font-black px-1.5 py-0.2 rounded ${
                                                                isSelected
                                                                    ? 'bg-white/20 text-white'
                                                                    : `${color.bg} ${color.text}`
                                                            }`}>
                                                                {item.level}
                                                            </span>
                                                        </div>
                                                        <p className={`text-[11px] font-medium truncate mt-0.5 ${
                                                            isSelected ? 'text-teal-100' : 'text-slate-500'
                                                        }`}>
                                                            {item.banglaPron} · {item.meaning}
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="flex-shrink-0 ml-2">
                                                    {isMastered ? (
                                                        <span className={`flex h-5 w-5 items-center justify-center rounded-full ${
                                                            isSelected ? 'bg-white text-teal-700' : 'bg-emerald-100 text-emerald-600'
                                                        }`}>
                                                            <Check size={12} strokeWidth={3} />
                                                        </span>
                                                    ) : (
                                                        <ChevronRight size={14} className={isSelected ? 'text-teal-200' : 'text-slate-300'} />
                                                    )}
                                                </div>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Right: Active Word & Sentence Practice Deck */}
                            <div className="lg:col-span-8 space-y-5">
                                <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">

                                    {/* ── STEP 1: WORD MASTERY ── */}
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                                            <div className="flex items-center gap-2">
                                                <span className="text-[10px] font-black uppercase tracking-wider text-teal-700 bg-teal-50 border border-teal-200 px-2.5 py-0.5 rounded-full">
                                                    শব্দ #{currentWord.id} · {currentWord.levelLabel} ({currentWord.level})
                                                </span>
                                                <span className="text-[10px] text-slate-400 font-bold uppercase">
                                                    {currentWord.pos}
                                                </span>
                                            </div>

                                            {masteredWords.includes(currentWord.id) && (
                                                <span className="inline-flex items-center gap-1 text-[11px] font-black text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                                                    <Check size={12} strokeWidth={3} /> Mastered
                                                </span>
                                            )}
                                        </div>

                                        {/* Large Word Display */}
                                        <div className="flex flex-wrap items-baseline gap-3">
                                            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
                                                {currentWord.word}
                                            </h2>

                                            <span className="text-xs sm:text-sm font-mono text-indigo-700 bg-indigo-50 border border-indigo-150 px-2.5 py-1 rounded-xl">
                                                {currentWord.ipa}
                                            </span>

                                            <span className="text-xs sm:text-sm font-bold text-teal-800 bg-teal-50 border border-teal-150 px-2.5 py-1 rounded-xl">
                                                উচ্চারণ: {currentWord.banglaPron}
                                            </span>
                                        </div>

                                        {/* Meaning */}
                                        <p className="text-sm font-black text-slate-700">
                                            বাংলা অর্থ: <span className="text-teal-900">{currentWord.meaning}</span>
                                        </p>

                                        {/* Pronunciation Secret Tip */}
                                        <div className="rounded-2xl bg-amber-50/70 border border-amber-200/80 p-3.5 text-xs text-amber-950 leading-relaxed font-semibold">
                                            {currentWord.pronunciationTip}
                                        </div>

                                        {/* Word Audio & Speak Controls */}
                                        <div className="flex flex-wrap items-center gap-2 pt-1">
                                            <button
                                                onClick={() => playAudio(currentWord.word, 1.0, true)}
                                                className="inline-flex items-center gap-1.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white px-4 py-2.5 text-xs font-black transition shadow-sm"
                                            >
                                                <Volume2 size={15} /> শুনুন (1.0×)
                                            </button>

                                            <button
                                                onClick={() => playAudio(currentWord.word, 0.7, true)}
                                                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 px-3.5 py-2.5 text-xs font-bold transition"
                                                title="ধীরে ধীরে শুনুন"
                                            >
                                                🐢 স্লো শুনুন (0.7×)
                                            </button>

                                            {/* Word Mic Test */}
                                            {isWordRecording ? (
                                                <button
                                                    onClick={() => recognitionRef.current?.stop()}
                                                    className="inline-flex items-center gap-2 rounded-xl bg-rose-500 text-white px-5 py-2.5 text-xs font-black animate-pulse shadow-sm"
                                                >
                                                    <Square size={13} fill="white" /> শুনছি... (থামুন)
                                                </button>
                                            ) : (
                                                <button
                                                    onClick={startWordRecording}
                                                    className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 text-xs font-black transition shadow-sm"
                                                >
                                                    <Mic size={14} /> শব্দটি মুখে বলুন
                                                </button>
                                            )}
                                        </div>

                                        {/* Word Speech Test Result */}
                                        {wordTranscript && (
                                            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4 space-y-2">
                                                <div className="flex items-center justify-between">
                                                    <p className="text-xs text-slate-500">
                                                        আপনি বলেছেন: <b className="text-slate-900">"{wordTranscript}"</b>
                                                    </p>
                                                    <span className={`text-xs font-black px-2.5 py-0.5 rounded-full ${
                                                        wordScore === 100
                                                            ? 'bg-emerald-100 text-emerald-800'
                                                            : wordScore && wordScore >= 70
                                                                ? 'bg-amber-100 text-amber-800'
                                                                : 'bg-rose-100 text-rose-800'
                                                    }`}>
                                                        {wordScore}% ম্যাচ
                                                    </span>
                                                </div>

                                                {wordScore === 100 && (
                                                    <p className="text-xs font-black text-emerald-600 flex items-center gap-1">
                                                        <CheckCircle2 size={14} /> চমৎকার! আপনার শব্দের উচ্চারণ একদম নিখুঁত (+১০ XP)।
                                                    </p>
                                                )}
                                                {wordScore !== null && wordScore < 100 && (
                                                    <p className="text-xs text-amber-700 font-semibold">
                                                        💡 অডিওটি আবার স্লোতে শুনুন এবং ঠোঁটের ভঙ্গি ঠিক রেখে পুনরায় বলুন।
                                                    </p>
                                                )}
                                            </div>
                                        )}
                                    </div>

                                    {/* ── STEP 2: SENTENCE MASTERY (WORD TO SENTENCE) ── */}
                                    <div className="border-t-2 border-dashed border-slate-200 pt-6 space-y-4">
                                        <div className="flex items-center gap-2 text-xs font-black uppercase text-indigo-700 tracking-wider">
                                            <span>⬇️ ধাপে ২: বাক্য প্রয়োগ ও অনর্গল কথা বলা (Word to Sentence)</span>
                                        </div>

                                        <div className="rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50/50 to-teal-50/30 p-5 space-y-3">
                                            {/* Sentence Text */}
                                            <p className="text-base sm:text-xl font-black text-slate-900 leading-relaxed">
                                                {currentWord.sentence}
                                            </p>

                                            <div className="flex flex-wrap items-center gap-2">
                                                <span className="text-[11px] font-mono text-indigo-700 bg-white/80 border border-indigo-100 px-2 py-0.5 rounded-md">
                                                    {currentWord.sentenceIpa}
                                                </span>
                                            </div>

                                            <p className="text-xs font-bold text-slate-700">
                                                বাংলা: <span className="text-indigo-900">{currentWord.sentenceMeaning}</span>
                                            </p>

                                            {/* Sentence connected speech tip */}
                                            <p className="text-[11px] text-teal-800 font-semibold bg-teal-50/80 border border-teal-100 p-2.5 rounded-xl">
                                                {currentWord.sentenceTip}
                                            </p>
                                        </div>

                                        {/* Sentence Audio & Speak Controls */}
                                        <div className="flex flex-wrap items-center gap-2 pt-1">
                                            <button
                                                onClick={() => playAudio(currentWord.sentence, 1.0, false)}
                                                className="inline-flex items-center gap-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white px-4 py-2.5 text-xs font-black transition shadow-sm"
                                            >
                                                <Volume2 size={15} /> বাক্যটি শুনুন (1.0×)
                                            </button>

                                            <button
                                                onClick={() => playAudio(currentWord.sentence, 0.7, false)}
                                                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 px-3.5 py-2.5 text-xs font-bold transition"
                                                title="ধীরে ধীরে বাক্যটি শুনুন"
                                            >
                                                🐢 স্লো শুনুন (0.7×)
                                            </button>

                                            {/* Sentence Mic Test */}
                                            {isSentenceRecording ? (
                                                <button
                                                    onClick={() => recognitionRef.current?.stop()}
                                                    className="inline-flex items-center gap-2 rounded-xl bg-rose-500 text-white px-5 py-2.5 text-xs font-black animate-pulse shadow-sm"
                                                >
                                                    <Square size={13} fill="white" /> বাক্য শুনছি... (থামুন)
                                                </button>
                                            ) : (
                                                <button
                                                    onClick={startSentenceRecording}
                                                    className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 text-xs font-black transition shadow-sm"
                                                >
                                                    <Mic size={14} /> পুরো বাক্যটি বলুন
                                                </button>
                                            )}
                                        </div>

                                        {/* Sentence Speech Test Result */}
                                        {sentenceTranscript && (
                                            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4 space-y-3">
                                                <div className="flex items-center justify-between">
                                                    <span className="text-xs font-black text-slate-600 uppercase tracking-wide">
                                                        আপনার উচ্চারণ মূল্যায়ন:
                                                    </span>
                                                    <span className={`text-xs font-black px-3 py-1 rounded-full ${
                                                        sentenceScore && sentenceScore >= 80
                                                            ? 'bg-emerald-100 text-emerald-800'
                                                            : sentenceScore && sentenceScore >= 50
                                                                ? 'bg-amber-100 text-amber-800'
                                                                : 'bg-rose-100 text-rose-800'
                                                    }`}>
                                                        {sentenceScore}% সঠিক
                                                    </span>
                                                </div>

                                                <p className="text-xs text-slate-600">
                                                    আপনি বলেছেন: <b className="text-slate-900">"{sentenceTranscript}"</b>
                                                </p>

                                                {/* Word Diff Tags */}
                                                <div className="flex flex-wrap gap-1.5 pt-1">
                                                    {sentenceWordDiffs.map((diff, i) => (
                                                        <span
                                                            key={i}
                                                            className={`px-2 py-0.5 rounded-md text-xs font-bold ${
                                                                diff.correct
                                                                    ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                                                                    : 'bg-rose-100 text-rose-800 border border-rose-200 line-through'
                                                            }`}
                                                        >
                                                            {diff.word}
                                                        </span>
                                                    ))}
                                                </div>

                                                {sentenceScore && sentenceScore >= 80 && (
                                                    <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-3 text-xs text-emerald-900 font-bold flex items-center justify-between">
                                                        <span>🎉 দারুণ ফ্লুয়েন্সি! শব্দটি আয়ত্ত করেছেন (+২০ XP)।</span>
                                                        <span className="text-xs font-black">★ Mastered</span>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>

                                    {/* Navigation Prev & Next Word */}
                                    <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                                        <button
                                            onClick={handlePrevWord}
                                            disabled={currentWordIndex <= 0}
                                            className="inline-flex items-center gap-1 rounded-xl border border-slate-200 px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50 disabled:opacity-40 transition"
                                        >
                                            <ChevronLeft size={15} /> আগের শব্দ
                                        </button>

                                        <span className="text-xs font-bold text-slate-400">
                                            {currentWordIndex + 1} / {filteredWords.length}
                                        </span>

                                        <button
                                            onClick={handleNextWord}
                                            disabled={currentWordIndex >= filteredWords.length - 1}
                                            className="inline-flex items-center gap-1 rounded-xl bg-teal-600 text-white px-4 py-2 text-xs font-bold hover:bg-teal-500 disabled:opacity-40 transition shadow-xs"
                                        >
                                            পরবর্তী শব্দ <ChevronRight size={15} />
                                        </button>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                )}

                {/* ══════════════════════════════════════════════════════════════════
                    TAB 2 & 3: TONGUE TWISTERS & TRICKY SOUNDS
                   ══════════════════════════════════════════════════════════════════ */}
                {(mainTab === 'twister' || mainTab === 'phonetics') && (
                    <div className="grid gap-6 md:grid-cols-12">
                        {/* Drills List (Left) */}
                        <div className="md:col-span-5 space-y-2">
                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 px-1">
                                {mainTab === 'twister' ? 'Tongue Twisters' : 'Tricky Sound Drills'} ({activeDrills.length})
                            </p>
                            <div className="space-y-2 max-h-[500px] overflow-y-auto pr-1">
                                {activeDrills.map((drill, idx) => {
                                    const isSelected = selectedDrillIdx === idx;
                                    return (
                                        <button
                                            key={drill.id}
                                            onClick={() => {
                                                setSelectedDrillIdx(idx);
                                                setDrillScore(null);
                                                setDrillTranscript('');
                                                setDrillWordDiffs([]);
                                            }}
                                            className={`w-full text-left p-3.5 rounded-2xl border text-xs font-black transition ${
                                                isSelected
                                                    ? 'bg-teal-600 border-teal-600 text-white shadow-md shadow-teal-500/20'
                                                    : 'bg-white border-slate-200 text-slate-700 hover:border-teal-400 hover:bg-teal-50/20'
                                            }`}
                                        >
                                            <div className="flex items-center justify-between mb-1">
                                                <span className={`text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full font-bold ${
                                                    isSelected ? 'bg-teal-500/40 text-teal-100' : 'bg-slate-100 text-slate-600'
                                                }`}>
                                                    {drill.categoryLabel}
                                                </span>
                                                <span className={`text-[10px] font-mono ${isSelected ? 'text-teal-200' : 'text-slate-400'}`}>
                                                    #{idx + 1}
                                                </span>
                                            </div>
                                            <p className="text-xs font-extrabold truncate">{drill.text}</p>
                                            <p className={`text-[11px] font-medium truncate mt-0.5 ${isSelected ? 'text-teal-100' : 'text-slate-400'}`}>
                                                {drill.bangla}
                                            </p>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Drill Active Deck (Right) */}
                        <div className="md:col-span-7 space-y-4">
                            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
                                <div className="space-y-2">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-teal-600 bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-150">
                                        {currentDrill.categoryLabel}
                                    </span>
                                    <h2 className="text-xl sm:text-2xl font-black text-slate-950 leading-snug">
                                        {currentDrill.text}
                                    </h2>
                                    <span className="inline-block text-xs font-mono text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-lg border border-indigo-150">
                                        {currentDrill.ipa}
                                    </span>
                                    <p className="text-xs font-bold text-slate-600 mt-1">
                                        {currentDrill.bangla}
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-teal-100 bg-teal-50/60 p-4 text-xs font-semibold text-teal-900 leading-relaxed">
                                    {currentDrill.tip}
                                </div>

                                {/* Controls */}
                                <div className="flex flex-wrap items-center gap-2">
                                    <button
                                        onClick={() => playAudio(currentDrill.text, 1.0, false)}
                                        className="inline-flex items-center gap-1.5 rounded-xl bg-slate-900 text-white px-4 py-2.5 text-xs font-black hover:bg-slate-800 transition shadow-sm"
                                    >
                                        <Volume2 size={15} /> শুনুন (1.0×)
                                    </button>
                                    <button
                                        onClick={() => playAudio(currentDrill.text, 0.75, false)}
                                        className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 px-3.5 py-2.5 text-xs font-bold hover:bg-slate-100 transition"
                                    >
                                        🐢 স্লো শুনুন (0.75×)
                                    </button>

                                    {isDrillRecording ? (
                                        <button
                                            onClick={() => recognitionRef.current?.stop()}
                                            className="inline-flex items-center gap-2 rounded-xl bg-rose-500 text-white px-5 py-2.5 text-xs font-black animate-pulse"
                                        >
                                            <Square size={13} fill="white" /> শুনছি... (থামুন)
                                        </button>
                                    ) : (
                                        <button
                                            onClick={startDrillRecording}
                                            className="inline-flex items-center gap-2 rounded-xl bg-teal-600 hover:bg-teal-500 text-white px-5 py-2.5 text-xs font-black transition shadow-sm"
                                        >
                                            <Mic size={14} /> জোরে জোরে বলুন
                                        </button>
                                    )}
                                </div>

                                {/* Results */}
                                {drillTranscript && (
                                    <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4 space-y-3">
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs font-black text-slate-600">মূল্যায়ন:</span>
                                            <span className={`text-xs font-black px-3 py-1 rounded-full ${
                                                drillScore && drillScore >= 80 ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                                            }`}>
                                                {drillScore}% স্কোর
                                            </span>
                                        </div>
                                        <p className="text-xs text-slate-600">আপনি বলেছেন: <b>"{drillTranscript}"</b></p>
                                        <div className="flex flex-wrap gap-1.5">
                                            {drillWordDiffs.map((diff, i) => (
                                                <span
                                                    key={i}
                                                    className={`px-2 py-0.5 rounded text-xs font-bold ${
                                                        diff.correct
                                                            ? 'bg-emerald-100 text-emerald-800'
                                                            : 'bg-rose-100 text-rose-800 line-through'
                                                    }`}
                                                >
                                                    {diff.word}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}
