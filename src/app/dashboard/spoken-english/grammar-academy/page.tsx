'use client';

import { useState, useEffect, useMemo, useRef } from 'react';
import Link from 'next/link';
import { useSubscription } from '../../../../components/SubscriptionGuard';
import {
    ArrowLeft, Check, CheckCircle2, XCircle, ChevronRight, GraduationCap,
    BookMarked, HelpCircle, Trophy, RefreshCw, Sparkles, X, ChevronDown, Menu, Play,
    Mic, MicOff, Volume2, Info, CheckCircle, Award, Target, HelpCircle as HelpIcon, ArrowUpRight, Lock
} from 'lucide-react';
import { GRAMMAR_UNITS, type Chapter, type Unit, type QuizQuestion } from '../../../../lib/grammarAcademyData';
import { SENTENCE_MAKING_RULES, type SentenceRule } from '../../../../lib/sentenceMakingRules';

interface LabExercise {
    type: 'mcq' | 'gap' | 'translation';
    question: string;
    options: string[];
    answer: number;
    correctText?: string;
    explanation: string;
}

// Defined translation challenges for all 12 chapters (Duolingo Stage)
const TRANSLATION_CHALLENGES: Record<number, { bengali: string; english: string }> = {
    1: { bengali: "সাঁথি আইইএলটিএস মক টেস্ট সফলভাবে শেষ করেছে।", english: "Sathi completed the IELTS mock test successfully" },
    2: { bengali: "একটি উচ্চ ব্যান্ড স্কোর অর্জন করতে নিয়মিত অনুশীলন প্রয়োজন।", english: "Attaining a high band score requires consistent practice" },
    3: { bengali: "আমি গত জানুয়ারি থেকে আইইএলটিএস পরীক্ষার জন্য প্রস্তুতি নিচ্ছি।", english: "I have been preparing for the IELTS exam since last January" },
    4: { bengali: "পরীক্ষা শেষ হওয়ার আগেই সাঁথি সব প্রশ্নের উত্তর দিয়েছিল।", english: "Sathi had answered all questions before the exam finished" },
    5: { bengali: "যদিও পরীক্ষাটি কঠিন ছিল সাঁথি আত্মবিশ্বাসী ছিল।", english: "Although the exam was difficult Sathi remained confident" },
    6: { bengali: "সরকার কর্তৃক কঠোর নিয়ম বাস্তবায়ন করা উচিত।", english: "Strict rules should be implemented by the government" },
    7: { bengali: "যদি সাঁথি প্রতিদিন অনুশীলন করে সে ব্যান্ড ৮ পাবে।", english: "If Sathi practices daily she will score band 8" },
    8: { bengali: "এই নতুন স্পিকিং ছাত্রদের পারফরম্যান্স অসামান্য।", english: "The performance of these new speaking students is outstanding" },
    9: { bengali: "যে বইটি সাঁথি সুপারিশ করেছিল তা চমৎকার ছিল।", english: "The book which Sathi recommended was wonderful" },
    10: { bengali: "গণপরিবহন ব্যবহার করা শহরের যানজট কমাতে পারে।", english: "Using public transport could reduce traffic congestion" },
    11: { bengali: "অনলাইন ক্লাস সুবিধাজনক তবে তারা আলোচনার অভাব করতে পারে।", english: "Online classes are convenient however they can lack interaction" },
    12: { bengali: "প্রযুক্তি আমাদের জীবনে একটি গুরুত্বপূর্ণ ভূমিকা পালন করে।", english: "Technology plays an important role in our lives" }
};

export default function GrammarAcademyPage() {
    const { isTrial } = useSubscription();
    const [activeChapterId, setActiveChapterId] = useState<number>(1);
    const [activeTab, setActiveTab] = useState<'lesson' | 'builder' | 'quiz'>('lesson');
    
    // Collapsed units state on sidebar
    const [collapsedUnits, setCollapsedUnits] = useState<Record<number, boolean>>({});
    
    // User progress state (localStorage)
    const [completedChapters, setCompletedChapters] = useState<Record<number, boolean>>({});

    // Mobile sidebar toggle
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // --- Quiz States ---
    const [quizStarted, setQuizStarted] = useState(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
    const [quizScore, setQuizScore] = useState(0);
    const [isQuizFinished, setIsQuizFinished] = useState(false);

    // --- Translation Challenge States (Duolingo Style) ---
    const [isTranslationStage, setIsTranslationStage] = useState(false);
    const [scrambledTiles, setScrambledTiles] = useState<{ id: string; word: string }[]>([]);
    const [selectedTiles, setSelectedTiles] = useState<{ id: string; word: string }[]>([]);
    const [translationChecked, setTranslationChecked] = useState(false);
    const [translationIsCorrect, setTranslationIsCorrect] = useState<boolean | null>(null);

    // --- Mic/Speaking Challenge States ---
    const [isMicStage, setIsMicStage] = useState(false);
    const [isRecording, setIsRecording] = useState(false);
    const [recordedTranscript, setRecordedTranscript] = useState('');
    const [micFeedback, setMicFeedback] = useState<{ status: 'success' | 'fail' | 'idle'; message: string }>({ status: 'idle', message: '' });
    const recognitionRef = useRef<any>(null);

    // --- 🧪 Rule Practice Lab States ---
    const [activeLabRule, setActiveLabRule] = useState<SentenceRule | null>(null);
    const [labExercises, setLabExercises] = useState<LabExercise[]>([]);
    const [isLoadingLab, setIsLoadingLab] = useState(false);
    const [currentLabIndex, setCurrentLabIndex] = useState(0);
    const [labScore, setLabScore] = useState(0);
    const [labChecked, setLabChecked] = useState(false);
    const [labIsCorrect, setLabIsCorrect] = useState<boolean | null>(null);
    const [labSelectedOption, setLabSelectedOption] = useState<number | null>(null);
    
    // Scrambled tiles for lab translation
    const [labScrambledTiles, setLabScrambledTiles] = useState<{ id: string; word: string }[]>([]);
    const [labSelectedTiles, setLabSelectedTiles] = useState<{ id: string; word: string }[]>([]);
    const [labFinished, setLabFinished] = useState(false);

    // Load progress
    useEffect(() => {
        try {
            const savedProgress = JSON.parse(localStorage.getItem('grammar_academy_progress') || '{}');
            setCompletedChapters(savedProgress);
        } catch { /* ignore */ }
    }, []);

    // Get active chapter
    const activeChapter = useMemo(() => {
        for (const unit of GRAMMAR_UNITS) {
            const ch = unit.chapters.find(c => c.id === activeChapterId);
            if (ch) return ch;
        }
        return GRAMMAR_UNITS[0].chapters[0];
    }, [activeChapterId]);

    // Get sentence making rules for active chapter
    const activeSentenceRules = useMemo(() => {
        return SENTENCE_MAKING_RULES[activeChapterId] || [];
    }, [activeChapterId]);

    const activeTranslationChallenge = useMemo(() => {
        return TRANSLATION_CHALLENGES[activeChapterId] || {
            bengali: "সাঁথি নিয়মিত অনুশীলন করে।",
            english: "Sathi practices regularly"
        };
    }, [activeChapterId]);

    // Total chapters count
    const totalChaptersCount = useMemo(() => {
        return GRAMMAR_UNITS.reduce((sum, unit) => sum + unit.chapters.length, 0);
    }, []);

    // Completed chapters count
    const completedCount = useMemo(() => {
        return Object.values(completedChapters).filter(Boolean).length;
    }, [completedChapters]);

    const progressPercentage = useMemo(() => {
        if (totalChaptersCount === 0) return 0;
        return Math.round((completedCount / totalChaptersCount) * 100);
    }, [completedCount, totalChaptersCount]);

    // Reset states when changing chapters
    useEffect(() => {
        setQuizStarted(false);
        setCurrentQuestionIndex(0);
        setSelectedOptionIndex(null);
        setQuizScore(0);
        setIsQuizFinished(false);
        setIsMicStage(false);
        setIsTranslationStage(false);
        setTranslationChecked(false);
        setTranslationIsCorrect(null);
        setSelectedTiles([]);
        setScrambledTiles([]);
        setIsRecording(false);
        setRecordedTranscript('');
        setMicFeedback({ status: 'idle', message: '' });
        setActiveTab('lesson');
        setSidebarOpen(false);
        setActiveLabRule(null);

        if (recognitionRef.current) {
            try {
                recognitionRef.current.stop();
            } catch { /* ignore */ }
        }
    }, [activeChapterId]);

    // Initialize Scrambled Tiles for Chapter Translation Stage
    const initTranslationChallenge = () => {
        const words = activeTranslationChallenge.english.split(' ');
        const tiles = words.map((w, idx) => ({
            id: `${w}-${idx}`,
            word: w
        }));
        const shuffled = [...tiles].sort(() => Math.random() - 0.5);
        setScrambledTiles(shuffled);
        setSelectedTiles([]);
        setTranslationChecked(false);
        setTranslationIsCorrect(null);
    };

    useEffect(() => {
        if (isTranslationStage) {
            initTranslationChallenge();
        }
    }, [isTranslationStage, activeChapterId]);

    // Save completion progress
    const markChapterCompleted = (chapterId: number) => {
        const updated = { ...completedChapters, [chapterId]: true };
        setCompletedChapters(updated);
        localStorage.setItem('grammar_academy_progress', JSON.stringify(updated));
    };

    const handleOptionSelect = (optionIndex: number) => {
        if (selectedOptionIndex !== null) return;
        setSelectedOptionIndex(optionIndex);
        if (optionIndex === activeChapter.quiz[currentQuestionIndex].answer) {
            setQuizScore(prev => prev + 1);
        }
    };

    const handleNextQuestion = () => {
        setSelectedOptionIndex(null);
        if (currentQuestionIndex < activeChapter.quiz.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
        } else {
            setIsTranslationStage(true);
        }
    };

    // --- Scrambled Tiles for main quiz ---
    const handleSelectTile = (tile: { id: string; word: string }) => {
        if (translationChecked) return;
        setScrambledTiles(prev => prev.filter(t => t.id !== tile.id));
        setSelectedTiles(prev => [...prev, tile]);
    };

    const handleDeselectTile = (tile: { id: string; word: string }) => {
        if (translationChecked) return;
        setSelectedTiles(prev => prev.filter(t => t.id !== tile.id));
        setScrambledTiles(prev => [...prev, tile]);
    };

    const handleCheckTranslation = () => {
        const userSentence = selectedTiles.map(t => t.word).join(' ').trim().toLowerCase();
        const correctSentence = activeTranslationChallenge.english.trim().toLowerCase();
        
        const isCorrect = userSentence === correctSentence;
        setTranslationIsCorrect(isCorrect);
        setTranslationChecked(true);
        
        if (isCorrect) {
            setQuizScore(prev => prev + 1);
        }
    };

    const handleNextFromTranslation = () => {
        setIsTranslationStage(false);
        setIsMicStage(true);
    };

    // --- 🧪 Rule Practice Lab Functions (Dynamic Exercise Loader) ---
    const enterPracticeLab = async (rule: SentenceRule) => {
        setActiveLabRule(rule);
        setIsLoadingLab(true);
        setLabExercises([]);
        setCurrentLabIndex(0);
        setLabScore(0);
        setLabChecked(false);
        setLabIsCorrect(null);
        setLabSelectedOption(null);
        setLabSelectedTiles([]);
        setLabScrambledTiles([]);
        setLabFinished(false);

        try {
            const res = await fetch('/api/generate-exercises', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ruleTitle: rule.title,
                    ruleConcept: rule.conceptBn,
                    ruleFormula: rule.formula,
                    count: 10 // Let's load 10 custom exercises to build up practice
                })
            });
            if (res.ok) {
                const data = await res.json();
                if (data && Array.isArray(data) && data.length > 0) {
                    setLabExercises(data);
                    if (data[0]?.type === 'translation') {
                        initLabTranslation(data[0]);
                    }
                    setIsLoadingLab(false);
                    return;
                }
            }
        } catch (err) {
            console.warn('Failed to load lab exercises from API, using fallback exercises:', err);
        }

        // Fallback logic
        if (rule.fallbackExercises && rule.fallbackExercises.length > 0) {
            setLabExercises(rule.fallbackExercises);
            if (rule.fallbackExercises[0]?.type === 'translation') {
                initLabTranslation(rule.fallbackExercises[0]);
            }
        }
        setIsLoadingLab(false);
    };

    const initLabTranslation = (exercise: LabExercise) => {
        const tiles = exercise.options.map((w, idx) => ({
            id: `${w}-${idx}`,
            word: w
        }));
        const shuffled = [...tiles].sort(() => Math.random() - 0.5);
        setLabScrambledTiles(shuffled);
        setLabSelectedTiles([]);
        setLabChecked(false);
        setLabIsCorrect(null);
    };

    const handleLabOptionSelect = (idx: number) => {
        if (labChecked) return;
        setLabSelectedOption(idx);
        const isCorrect = idx === labExercises[currentLabIndex].answer;
        setLabIsCorrect(isCorrect);
        setLabChecked(true);
        if (isCorrect) setLabScore(s => s + 1);
    };

    const handleLabSelectTile = (tile: { id: string; word: string }) => {
        if (labChecked) return;
        setLabScrambledTiles(prev => prev.filter(t => t.id !== tile.id));
        setLabSelectedTiles(prev => [...prev, tile]);
    };

    const handleLabDeselectTile = (tile: { id: string; word: string }) => {
        if (labChecked) return;
        setLabSelectedTiles(prev => prev.filter(t => t.id !== tile.id));
        setLabScrambledTiles(prev => [...prev, tile]);
    };

    const handleCheckLabTranslation = () => {
        const exercise = labExercises[currentLabIndex];
        const userSentence = labSelectedTiles.map(t => t.word).join(' ').trim().toLowerCase();
        const correctSentence = (exercise.correctText || '').trim().toLowerCase();
        
        const isCorrect = userSentence === correctSentence || correctSentence.includes(userSentence);
        setLabIsCorrect(isCorrect);
        setLabChecked(true);
        if (isCorrect) setLabScore(s => s + 1);
    };

    const handleNextLabExercise = () => {
        setLabChecked(false);
        setLabIsCorrect(null);
        setLabSelectedOption(null);
        setLabSelectedTiles([]);
        setLabScrambledTiles([]);

        if (currentLabIndex < labExercises.length - 1) {
            const nextIdx = currentLabIndex + 1;
            setCurrentLabIndex(nextIdx);
            if (labExercises[nextIdx].type === 'translation') {
                initLabTranslation(labExercises[nextIdx]);
            }
        } else {
            setLabFinished(true);
        }
    };

    // Load another batch of exercises
    const generateMoreLabExercises = async () => {
        if (!activeLabRule) return;
        setIsLoadingLab(true);
        setLabChecked(false);
        setLabIsCorrect(null);
        setLabSelectedOption(null);
        setLabSelectedTiles([]);
        setLabScrambledTiles([]);
        setLabFinished(false);

        try {
            const res = await fetch('/api/generate-exercises', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ruleTitle: activeLabRule.title,
                    ruleConcept: activeLabRule.conceptBn,
                    ruleFormula: activeLabRule.formula,
                    count: 10 // Another 10 exercises
                })
            });
            if (res.ok) {
                const data = await res.json();
                if (data && Array.isArray(data) && data.length > 0) {
                    setLabExercises(data);
                    setCurrentLabIndex(0);
                    if (data[0]?.type === 'translation') {
                        initLabTranslation(data[0]);
                    }
                    setIsLoadingLab(false);
                    return;
                }
            }
        } catch (err) {
            console.warn('Failed to load more exercises from API, using fallback exercises:', err);
        }

        // Fallback local exercises
        if (activeLabRule.fallbackExercises && activeLabRule.fallbackExercises.length > 0) {
            setLabExercises(activeLabRule.fallbackExercises);
            setCurrentLabIndex(0);
            if (activeLabRule.fallbackExercises[0]?.type === 'translation') {
                initLabTranslation(activeLabRule.fallbackExercises[0]);
            }
        }
        setIsLoadingLab(false);
    };

    // --- Speech Recognition / Mic Q Logic ---
    const startRecording = () => {
        const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
        if (!SpeechRecognition) {
            alert('আপনার ব্রাউজারটি Speech Recognition সমর্থন করে না। অনুগ্রহ করে Chrome ব্যবহার করুন।');
            return;
        }

        try {
            const recognition = new SpeechRecognition();
            recognition.continuous = false;
            recognition.lang = 'en-US';
            recognition.interimResults = false;

            recognition.onstart = () => {
                setIsRecording(true);
                setRecordedTranscript('Listening...');
                setMicFeedback({ status: 'idle', message: '' });
            };

            recognition.onresult = (event: any) => {
                const transcriptText = event.results[0][0].transcript;
                setRecordedTranscript(transcriptText);

                const spokenLower = transcriptText.toLowerCase();
                const missingKeywords = activeChapter.micChallenge.targetKeywords.filter(
                    kw => !spokenLower.includes(kw.toLowerCase())
                );

                if (missingKeywords.length === 0) {
                    setMicFeedback({
                        status: 'success',
                        message: '🎉 চমৎকার! আপনি বাক্যটি ব্যাকরণগতভাবে সঠিকভাবে উচ্চারণ করেছেন।'
                    });
                } else {
                    setMicFeedback({
                        status: 'fail',
                        message: `কিছু গুরুত্বপূর্ণ শব্দ বাদ পড়েছে: ${missingKeywords.join(', ')}। আবার চেষ্টা করুন!`
                    });
                }
            };

            recognition.onerror = () => {
                setIsRecording(false);
                setRecordedTranscript('Error occurred. Try speaking again.');
            };

            recognition.onend = () => {
                setIsRecording(false);
            };

            recognition.start();
            recognitionRef.current = recognition;
        } catch (err) {
            console.error(err);
            setIsRecording(false);
        }
    };

    const stopRecording = () => {
        if (recognitionRef.current) {
            try {
                recognitionRef.current.stop();
            } catch { /* ignore */ }
        }
        setIsRecording(false);
    };

    const playNativePronunciation = (text: string) => {
        if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'en-US';
            utterance.rate = 0.9;
            window.speechSynthesis.speak(utterance);
        }
    };

    const handleFinishQuiz = () => {
        setIsQuizFinished(true);
        markChapterCompleted(activeChapterId);
    };

    const handleRestartQuiz = () => {
        setCurrentQuestionIndex(0);
        setSelectedOptionIndex(null);
        setQuizScore(0);
        setIsQuizFinished(false);
        setIsMicStage(false);
        setIsTranslationStage(false);
        setRecordedTranscript('');
        setMicFeedback({ status: 'idle', message: '' });
        setQuizStarted(true);
    };

    const toggleUnitCollapse = (unitId: number) => {
        setCollapsedUnits(prev => ({
            ...prev,
            [unitId]: !prev[unitId]
        }));
    };

    return (
        <div className="min-h-screen bg-[#f8fafc] flex flex-col font-sans">
            {/* Header Banner */}
            <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 px-6 py-6 text-white border-b border-indigo-500/10 shadow-md">
                <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-between gap-4">
                    <div>
                        <Link href="/dashboard/spoken-english" className="inline-flex items-center gap-1.5 text-xs text-indigo-300 hover:underline mb-2 font-semibold">
                            <ArrowLeft size={14} /> Back to Spoken Hub
                        </Link>
                        <div className="flex items-center gap-2">
                            <span className="flex items-center gap-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-2.5 py-0.5 text-[9px] font-black uppercase tracking-widest text-indigo-300">
                                <Sparkles size={8} /> LEARNCAREBD AI GRAMMAR ACADEMY
                            </span>
                            <span className="text-[10px] text-slate-350 font-bold bg-slate-800/80 px-2.5 py-0.5 rounded-full border border-slate-700/30">
                                {progressPercentage}% Complete ({completedCount}/{totalChaptersCount} units)
                            </span>
                        </div>
                        <h1 className="text-xl font-black lg:text-3xl leading-tight mt-1.5 flex items-center gap-2">
                            Grammar & Sentence Academy <GraduationCap size={28} className="text-indigo-400" />
                        </h1>
                    </div>

                    {/* Progress Bar Header */}
                    <div className="w-full md:w-64 bg-slate-800/80 rounded-full h-3.5 border border-slate-755 p-0.5 overflow-hidden">
                        <div
                            className="bg-gradient-to-r from-indigo-400 to-teal-400 h-full rounded-full transition-all duration-500"
                            style={{ width: `${progressPercentage}%` }}
                        />
                    </div>
                </div>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-3 flex items-center justify-between shadow-sm">
                <button
                    onClick={() => setSidebarOpen(true)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 bg-slate-105 hover:bg-slate-200 px-3 py-2 rounded-lg transition"
                >
                    <Menu size={16} /> Course Syllabus
                </button>
                <span className="text-xs font-bold text-indigo-600 truncate max-w-[200px]">
                    Active: {activeChapter.title}
                </span>
            </div>

            {/* Content Grid */}
            <div className="flex-1 flex max-w-7xl w-full mx-auto relative">
                
                {/* Sidebar */}
                <div className={`
                    fixed inset-y-0 left-0 z-40 w-72 bg-white border-r border-slate-200 p-5 flex flex-col transform transition-transform duration-300 lg:relative lg:transform-none lg:z-0
                    ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
                `}>
                    <div className="flex items-center justify-between mb-5 lg:hidden">
                        <span className="font-black text-slate-800 text-sm">Grammar Syllabus</span>
                        <button onClick={() => setSidebarOpen(false)} className="p-1 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600">
                            <X size={20} />
                        </button>
                    </div>

                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">
                        Syllabus & Course Map
                    </p>

                    <div className="flex-1 overflow-y-auto space-y-4 pr-1">
                        {GRAMMAR_UNITS.map(unit => {
                            const isCollapsed = collapsedUnits[unit.id];
                            return (
                                <div key={unit.id} className="border border-slate-150 bg-slate-50/50 rounded-2xl p-2.5 shadow-sm">
                                    <button
                                        onClick={() => toggleUnitCollapse(unit.id)}
                                        className="w-full flex items-start justify-between text-left p-1 gap-2"
                                    >
                                        <div>
                                            <p className="text-xs font-black text-slate-800 leading-tight">
                                                {unit.title}
                                            </p>
                                            <p className="text-[10px] text-slate-500 font-semibold mt-0.5">
                                                {unit.titleBn}
                                            </p>
                                        </div>
                                        <ChevronDown
                                            size={14}
                                            className={`text-slate-400 transition-transform ${isCollapsed ? 'rotate-180' : ''}`}
                                        />
                                    </button>

                                    {!isCollapsed && (
                                        <div className="mt-3.5 space-y-1.5 border-t border-slate-150 pt-2.5">
                                            {unit.chapters.map(ch => {
                                                const isActive = activeChapterId === ch.id;
                                                const isCompleted = completedChapters[ch.id];
                                                const isLocked = false;
                                                return (
                                                    <button
                                                        key={ch.id}
                                                        onClick={() => {
                                                            setActiveChapterId(ch.id);
                                                        }}
                                                        className={`w-full flex items-center justify-between text-left p-2.5 rounded-xl transition ${
                                                            isActive
                                                                ? 'bg-indigo-650 text-white font-bold shadow-md shadow-indigo-600/10'
                                                                : 'hover:bg-slate-100 text-slate-600'
                                                        }`}
                                                    >
                                                        <div className="flex items-center gap-2.5 truncate">
                                                            <span className={`flex-shrink-0 h-5 w-5 rounded-full flex items-center justify-center text-[10px] border ${
                                                                isActive
                                                                    ? 'bg-white/20 border-white/20 text-white font-bold'
                                                                    : isCompleted
                                                                        ? 'bg-emerald-500 border-emerald-500 text-white'
                                                                        : 'bg-slate-200/85 border-slate-300 text-slate-500'
                                                            }`}>
                                                                {isCompleted ? <Check size={10} strokeWidth={3} /> : ch.id}
                                                            </span>
                                                            <span className="text-xs leading-none truncate block">
                                                                {ch.title}
                                                            </span>
                                                        </div>
                                                        <ChevronRight size={12} className={isActive ? 'text-white' : 'text-slate-300'} />
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Mobile sidebar overlay */}
                {sidebarOpen && (
                    <div
                        onClick={() => setSidebarOpen(false)}
                        className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-30 lg:hidden"
                    />
                )}

                {/* Main panel */}
                <div className="flex-1 p-6 lg:p-8 overflow-y-auto space-y-6">
                    {/* Header */}
                    <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-md relative">
                        <span className="text-[10px] font-black uppercase tracking-widest text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full w-fit">
                            Chapter {activeChapter.id}
                        </span>
                        
                        <h2 className="text-2xl lg:text-3xl font-black text-slate-900 mt-2.5">
                            {activeChapter.title}
                        </h2>
                        <p className="text-sm font-semibold text-slate-505 mt-0.5">
                            {activeChapter.titleBn}
                        </p>
                        <p className="text-xs text-slate-650 mt-2 max-w-xl">
                            {activeChapter.desc}
                        </p>

                        {/* IELTS Tip Box */}
                        <div className="mt-4 bg-amber-50/60 border border-amber-200/65 rounded-2xl p-4 flex gap-3 shadow-inner">
                            <span className="text-2xl leading-none">💡</span>
                            <div>
                                <p className="text-[10px] font-black text-amber-800 uppercase tracking-widest">
                                    IELTS EXAM PRO-TIP (পরামর্শ)
                                </p>
                                <p className="text-xs text-slate-700 mt-1 font-semibold leading-relaxed">
                                    {activeChapter.ieltsTip}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Mode Tabs */}
                    <div className="flex bg-slate-200/70 p-1 rounded-xl w-fit gap-1 border border-slate-205 shadow-sm">
                        <button
                            onClick={() => setActiveTab('lesson')}
                            className={`flex items-center gap-1.5 rounded-lg px-4.5 py-2.5 text-xs font-bold transition-all ${
                                activeTab === 'lesson'
                                    ? 'bg-white text-slate-900 shadow-md font-black'
                                    : 'text-slate-600 hover:text-slate-955'
                             }`}
                        >
                            <BookMarked size={14} /> Lesson (ব্যাকরণ পাঠ)
                        </button>
                        <button
                            onClick={() => setActiveTab('builder')}
                            className={`flex items-center gap-1.5 rounded-lg px-4.5 py-2.5 text-xs font-bold transition-all ${
                                activeTab === 'builder'
                                    ? 'bg-white text-slate-900 shadow-md font-black'
                                    : 'text-slate-600 hover:text-slate-955'
                             }`}
                        >
                            <Sparkles size={14} className="text-indigo-500" /> Sentence Builder (বাক্য তৈরি - ১৩২টি নিয়ম)
                        </button>
                        <button
                            onClick={() => setActiveTab('quiz')}
                            className={`flex items-center gap-1.5 rounded-lg px-4.5 py-2.5 text-xs font-bold transition-all ${
                                activeTab === 'quiz'
                                    ? 'bg-white text-slate-900 shadow-md font-black'
                                    : 'text-slate-600 hover:text-slate-955'
                             }`}
                        >
                            <HelpCircle size={14} /> Practice & Speak (অনুশীলন)
                        </button>
                    </div>

                    {/* Tab Contents */}
                    {activeTab === 'lesson' && (
                        /* --- LESSON CONTENT --- */
                        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-md p-6 lg:p-8 space-y-6">
                            <div className="flex items-center gap-2 text-xs font-bold text-slate-400 border-b border-slate-105 pb-3">
                                <Info size={14} className="text-indigo-500" />
                                <span>Raymond Murphy এর "Grammar in Use" অনুসারে তৈরি ব্যাখ্যা ও উদাহরণ।</span>
                            </div>

                            <div className="prose prose-slate max-w-none text-xs lg:text-sm text-slate-750 leading-relaxed space-y-4">
                                {activeChapter.lessonContent.split('\n\n').map((block, idx) => {
                                    if (block.startsWith('### ')) {
                                        return (
                                            <h3 key={idx} className="text-lg lg:text-xl font-black text-slate-900 border-b border-slate-100 pb-2 mt-6">
                                                {block.replace('### ', '')}
                                            </h3>
                                        );
                                    }
                                    if (block.startsWith('#### ')) {
                                        return (
                                            <h4 key={idx} className="text-sm lg:text-base font-black text-indigo-700 mt-4">
                                                {block.replace('#### ', '')}
                                            </h4>
                                        );
                                    }
                                    if (block.startsWith('*   ')) {
                                        return (
                                            <ul key={idx} className="list-disc pl-5 space-y-1.5 my-2">
                                                {block.split('\n').map((li, lIdx) => (
                                                    <li key={lIdx} dangerouslySetInnerHTML={{
                                                        __html: li.replace(/^\*\s+/, '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\*(.*?)\*/g, '<em>$1</em>')
                                                    }} />
                                                ))}
                                            </ul>
                                        );
                                    }
                                    if (block.includes('*   *') || block.startsWith('*')) {
                                        return (
                                            <div key={idx} className="bg-indigo-50/15 border border-indigo-500/10 rounded-xl p-3.5 my-2 text-xs italic" dangerouslySetInnerHTML={{
                                                __html: block.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\*(.*?)\*/g, '<em>$1</em>')
                                            }} />
                                        );
                                    }
                                    return (
                                        <p key={idx} className="leading-relaxed font-medium" dangerouslySetInnerHTML={{
                                            __html: block.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\*(.*?)\*/g, '<em>$1</em>')
                                        }} />
                                    );
                                })}
                            </div>

                            <div className="mt-8 pt-6 border-t border-slate-100 flex justify-end">
                                <button
                                    onClick={() => setActiveTab('builder')}
                                    className="inline-flex items-center gap-1.5 rounded-2xl bg-indigo-600 px-6 py-3 text-xs font-black text-white hover:bg-indigo-500 transition shadow-lg shadow-indigo-600/10"
                                >
                                    Sentence Building Rules <ChevronRight size={14} />
                                </button>
                            </div>
                        </div>
                    )}

                    {activeTab === 'builder' && (
                        /* --- SENTENCE BUILDER TAB --- */
                        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-md p-6 lg:p-8 space-y-6">
                            <div className="flex items-center gap-2 text-xs font-bold text-slate-400 border-b border-slate-100 pb-3">
                                <Sparkles size={14} className="text-amber-500 animate-pulse" />
                                <span>বাক্য তৈরির নিয়মগুলি শিখুন এবং "Practice Lab"-এ গিয়ে ৩০টিরও বেশি অনুশীলন সম্পন্ন করুন।</span>
                            </div>

                            {activeSentenceRules.length === 0 ? (
                                <div className="text-center py-10 text-slate-400 text-xs font-semibold">
                                    এই চ্যাপ্টারের জন্য বাক্য তৈরির বিশেষ নিয়ম শীঘ্রই যুক্ত হচ্ছে!
                                </div>
                            ) : (
                                <div className="space-y-8">
                                    {activeSentenceRules.map((rule) => (
                                        <div key={rule.id} className="border border-slate-200 rounded-3xl p-5 lg:p-6 bg-slate-50/50 shadow-inner relative overflow-hidden flex flex-col justify-between">
                                            <span className="absolute top-0 right-0 bg-indigo-650 text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-bl-2xl">
                                                RULE {rule.id}
                                            </span>

                                            <div>
                                                <h3 className="text-base lg:text-lg font-black text-slate-900">
                                                    {rule.title}
                                                </h3>
                                                <p className="text-xs text-indigo-600 font-bold mt-0.5">
                                                    {rule.titleBn}
                                                </p>

                                                {/* Formula Card */}
                                                <div className="mt-4 bg-indigo-900 text-indigo-100 font-mono text-xs lg:text-sm p-4 rounded-2xl shadow">
                                                    <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest block mb-1">FORMULA / স্ট্রাকচার:</span>
                                                    {rule.formula}
                                                </div>

                                                <p className="text-xs text-slate-650 font-medium leading-relaxed mt-4">
                                                    {rule.conceptBn}
                                                </p>

                                                {/* Step-by-Step Transition */}
                                                <div className="mt-5 border-t border-slate-200 pt-5 space-y-4">
                                                    <h4 className="text-xs font-black text-slate-800 uppercase tracking-wider">
                                                        Sentence Extension (ধাপে ধাপে বাক্য বড় করা):
                                                    </h4>
                                                    
                                                    <div className="space-y-3 pl-3 border-l-2 border-indigo-500">
                                                        {rule.steps.map((step, sIdx) => (
                                                            <div key={sIdx} className="space-y-1">
                                                                <p className="text-xs font-bold text-slate-400">
                                                                    ধাপ {sIdx + 1}:
                                                                </p>
                                                                <div className="flex flex-wrap items-center gap-2">
                                                                    <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                                                                        {step.bengali}
                                                                    </span>
                                                                    <ChevronRight size={12} className="text-slate-400" />
                                                                    <span className="text-xs font-black text-indigo-650">
                                                                        {step.english}
                                                                    </span>
                                                                </div>
                                                                <p className="text-[10px] text-slate-550 font-semibold italic">
                                                                    ({step.explanation})
                                                                </p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* 10 Detailed Examples */}
                                                {rule.examples && rule.examples.length > 0 && (
                                                    <div className="mt-6 border-t border-slate-200 pt-5 space-y-3">
                                                        <h4 className="text-xs font-black text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                                                            <Info size={14} className="text-indigo-500" />
                                                            ১০টি বিশদ উদাহরণ (10 Detailed Examples):
                                                        </h4>
                                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                            {rule.examples.map((ex, exIdx) => (
                                                                <div key={exIdx} className="bg-white border border-slate-150 rounded-xl p-3 shadow-sm hover:shadow transition-shadow">
                                                                    <div className="flex items-start gap-2">
                                                                        <span className="flex-shrink-0 h-5 w-5 bg-indigo-50 text-indigo-700 rounded-full flex items-center justify-center text-[10px] font-black">
                                                                            {exIdx + 1}
                                                                        </span>
                                                                        <div>
                                                                            <p className="text-xs text-slate-500 font-semibold">
                                                                                {ex.bengali}
                                                                            </p>
                                                                            <p className="text-xs font-black text-indigo-650 mt-0.5">
                                                                                {ex.english}
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Practice Lab button */}
                                            <div className="mt-6 pt-4 border-t border-slate-200 flex justify-between items-center gap-4">
                                                <span className="text-[10px] font-bold text-slate-450">
                                                    Gemini-Powered AI Exercise Lab
                                                </span>
                                                <button
                                                    onClick={() => enterPracticeLab(rule)}
                                                    className="inline-flex items-center gap-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 px-4 py-2.5 text-xs font-black text-white transition shadow shadow-indigo-600/10"
                                                >
                                                    🧪 Enter Practice Lab
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    {activeTab === 'quiz' && (
                        /* --- MAIN CHAPTER QUIZ --- */
                        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-md p-6 lg:p-8">
                            {/* MCQ, Scrambled, and Mic Stage handles like before */}
                            {!quizStarted ? (
                                <div className="text-center py-8 max-w-md mx-auto">
                                    <HelpCircle size={44} className="text-indigo-600 mx-auto mb-3" />
                                    <h3 className="text-lg font-black text-slate-900 mb-2">
                                        Practice Quiz: {activeChapter.title}
                                    </h3>
                                    <p className="text-xs text-slate-500 mb-6 max-w-xs mx-auto leading-relaxed">
                                        Test your skills in three stages: **MCQ test**, **Scrambled Sentence Translation**, and **🎙️ Speaking Speech Test**.
                                    </p>
                                    <button
                                        onClick={() => setQuizStarted(true)}
                                        className="inline-flex items-center gap-2 rounded-2xl bg-indigo-600 px-6 py-3 text-xs font-black text-white hover:bg-indigo-500 transition shadow-lg shadow-indigo-600/10 w-full justify-center"
                                    >
                                        Start Practice <Play size={14} />
                                    </button>
                                </div>
                            ) : isQuizFinished ? (
                                <div className="text-center py-6 max-w-xs mx-auto animate-fade-in">
                                    <div className="inline-flex items-center justify-center h-16 w-16 bg-indigo-100 text-indigo-750 rounded-full mb-4">
                                        <Trophy size={32} />
                                    </div>
                                    <h3 className="text-xl font-black text-slate-900 mb-1">
                                        All Exercises Completed!
                                    </h3>
                                    <p className="text-xs text-slate-500 mb-5">
                                        You completed MCQ, Translation, and Speaking Challenges!
                                    </p>

                                    <div className="border border-slate-105 bg-slate-50 rounded-2xl p-5 mb-6 shadow-inner">
                                        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                                            MCQ Score Summary
                                        </p>
                                        <p className="text-5xl font-black text-indigo-650 mt-1">
                                            {quizScore} / {activeChapter.quiz.length}
                                        </p>
                                    </div>

                                    <div className="flex gap-2 justify-center">
                                        <button
                                            onClick={handleRestartQuiz}
                                            className="inline-flex items-center gap-1.5 rounded-xl bg-indigo-600 px-5 py-2.5 text-xs font-black text-white hover:bg-indigo-500 transition shadow"
                                        >
                                            <RefreshCw size={12} /> Retry
                                        </button>
                                        <button
                                            onClick={() => setActiveTab('lesson')}
                                            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-xs font-bold text-slate-600 hover:bg-slate-50 transition"
                                        >
                                            Review Lesson
                                        </button>
                                    </div>
                                </div>
                            ) : isMicStage ? (
                                /* STAGE 3: SPEAKING */
                                <div className="max-w-xl mx-auto space-y-6">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] font-black text-indigo-650 bg-indigo-50 px-2.5 py-1 rounded-full uppercase tracking-widest">
                                            Stage 3: Speaking Challenge 🎙️
                                        </span>
                                    </div>
                                    <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 text-center">
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-2">Speak this sentence aloud:</p>
                                        <p className="text-lg font-black text-slate-900 leading-snug">
                                            {activeChapter.micChallenge.prompt}
                                        </p>
                                        <p className="text-xs text-slate-500 mt-2 italic font-semibold">
                                            "{activeChapter.micChallenge.promptBn}"
                                        </p>
                                    </div>
                                    <div className="flex flex-col items-center justify-center p-6 border border-slate-150 bg-white rounded-3xl shadow-sm space-y-4">
                                        <div className="flex items-center gap-3">
                                            <button
                                                onClick={isRecording ? stopRecording : startRecording}
                                                className={`h-16 w-16 rounded-full flex items-center justify-center text-white transition-all ${
                                                    isRecording ? 'bg-rose-600 animate-pulse' : 'bg-indigo-600'
                                                }`}
                                            >
                                                {isRecording ? <MicOff size={24} /> : <Mic size={24} />}
                                            </button>
                                            <button
                                                onClick={() => playNativePronunciation(activeChapter.micChallenge.sampleAnswer)}
                                                className="h-10 w-10 rounded-full border border-slate-200 bg-slate-50 hover:bg-slate-100 flex items-center justify-center text-slate-650 transition"
                                            >
                                                <Volume2 size={16} />
                                            </button>
                                        </div>
                                        {isRecording && <span className="text-xs font-black text-rose-600 animate-pulse">Listening... Speak now!</span>}
                                        {recordedTranscript && (
                                            <div className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4">
                                                <p className="text-[10px] text-slate-400 uppercase font-black mb-1">You Said:</p>
                                                <p className="text-sm font-bold text-slate-800 italic">"{recordedTranscript}"</p>
                                            </div>
                                        )}
                                        {micFeedback.status !== 'idle' && (
                                            <div className={`w-full border rounded-2xl p-4 flex gap-3 ${
                                                micFeedback.status === 'success' ? 'border-emerald-250 bg-emerald-50 text-emerald-805' : 'border-amber-250 bg-amber-50 text-amber-805'
                                            }`}>
                                                <Info size={16} className="flex-shrink-0 mt-0.5" />
                                                <div>
                                                    <p className="text-xs font-semibold leading-relaxed">{micFeedback.message}</p>
                                                    <p className="text-[10px] text-slate-500 mt-1">{activeChapter.micChallenge.explanation}</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <button onClick={() => { setIsMicStage(false); setIsTranslationStage(true); }} className="text-xs font-bold text-slate-400">
                                            ← Back to Translation
                                        </button>
                                        <button onClick={handleFinishQuiz} className="inline-flex items-center gap-1.5 rounded-2xl bg-indigo-650 px-6 py-3 text-xs font-black text-white hover:bg-indigo-500 transition shadow">
                                            Finish Challenge <CheckCircle size={14} />
                                        </button>
                                    </div>
                                </div>
                            ) : isTranslationStage ? (
                                /* STAGE 2: TRANSLATION */
                                <div className="max-w-xl mx-auto space-y-6">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] font-black text-indigo-650 bg-indigo-50 px-2.5 py-1 rounded-full uppercase tracking-widest">
                                            Stage 2: Translation Challenge ✍️
                                        </span>
                                    </div>
                                    <div className="bg-slate-50 border border-slate-200 rounded-3xl p-5 shadow-inner">
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-1">Translate this sentence:</p>
                                        <p className="text-lg font-black text-slate-900 leading-snug">{activeTranslationChallenge.bengali}</p>
                                    </div>
                                    <div className="min-h-24 w-full bg-white border-2 border-dashed border-slate-200 rounded-3xl p-4 flex flex-wrap gap-2 items-center content-center shadow-inner relative">
                                        {selectedTiles.length === 0 ? (
                                            <span className="text-xs text-slate-400 font-semibold absolute inset-0 flex items-center justify-center pointer-events-none">
                                                Tap words to build translation
                                            </span>
                                        ) : (
                                            selectedTiles.map(tile => (
                                                <button key={tile.id} onClick={() => handleDeselectTile(tile)} className="bg-indigo-50 text-indigo-700 border border-indigo-200 text-xs font-bold px-3 py-2 rounded-xl">
                                                    {tile.word}
                                                </button>
                                            ))
                                        )}
                                    </div>
                                    <div className="flex flex-wrap gap-2 justify-center py-4 bg-slate-50/50 rounded-2xl p-4 border border-slate-100">
                                        {scrambledTiles.map(tile => (
                                            <button key={tile.id} onClick={() => handleSelectTile(tile)} className="bg-white border border-slate-200 text-xs font-bold px-3 py-2 rounded-xl shadow-sm">
                                                {tile.word}
                                            </button>
                                        ))}
                                    </div>
                                    {translationChecked && (
                                        <div className={`border rounded-2xl p-4 flex gap-3 ${translationIsCorrect ? 'border-emerald-250 bg-emerald-50 text-emerald-805' : 'border-rose-250 bg-rose-50 text-rose-805'}`}>
                                            {translationIsCorrect ? <CheckCircle2 size={20} className="text-emerald-600 flex-shrink-0" /> : <XCircle size={20} className="text-rose-600 flex-shrink-0" />}
                                            <div>
                                                <p className="text-xs font-black">{translationIsCorrect ? '🎉 Correct!' : '❌ Incorrect!'}</p>
                                                <p className="text-[10px] text-slate-550 mt-1">Correct sentence: "{activeTranslationChallenge.english}"</p>
                                            </div>
                                        </div>
                                    )}
                                    <div className="flex justify-between items-center">
                                        <button onClick={initTranslationChallenge} className="text-xs font-bold text-slate-400">Reset Tiles</button>
                                        {!translationChecked ? (
                                            <button onClick={handleCheckTranslation} disabled={selectedTiles.length === 0} className="inline-flex items-center gap-1.5 rounded-2xl bg-indigo-650 px-6 py-3 text-xs font-black text-white transition shadow disabled:opacity-50">
                                                Check Answer
                                            </button>
                                        ) : (
                                            <button onClick={handleNextFromTranslation} className="inline-flex items-center gap-1.5 rounded-2xl bg-indigo-650 px-6 py-3 text-xs font-black text-white transition shadow">
                                                Next Challenge <ChevronRight size={14} />
                                            </button>
                                        )}
                                    </div>
                                </div>
                            ) : (
                                /* STAGE 1: MCQ */
                                <div>
                                    <div className="flex items-center justify-between mb-6">
                                        <span className="text-[10px] font-black text-indigo-650 bg-indigo-50 px-2 py-0.5 rounded-full uppercase tracking-widest">Stage 1: MCQ Test 📝</span>
                                        <span className="text-xs font-bold text-slate-400">Question {currentQuestionIndex + 1} of {activeChapter.quiz.length}</span>
                                    </div>
                                    <div className="h-1.5 rounded-full bg-slate-100 mb-6 overflow-hidden">
                                        <div className="h-full rounded-full bg-indigo-650 transition-all duration-300" style={{ width: `${((currentQuestionIndex + 1) / activeChapter.quiz.length) * 100}%` }} />
                                    </div>
                                    <div className="mb-6 bg-slate-50/80 border border-slate-200 rounded-3xl p-6 text-center">
                                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">QUESTION</p>
                                        <p className="text-lg lg:text-xl font-bold text-slate-900">{activeChapter.quiz[currentQuestionIndex].question}</p>
                                    </div>
                                    <div className="grid gap-2.5">
                                        {activeChapter.quiz[currentQuestionIndex].options.map((opt, oIdx) => {
                                            const correctIdx = activeChapter.quiz[currentQuestionIndex].answer;
                                            const answered = selectedOptionIndex !== null;
                                            const isCorrect = oIdx === correctIdx;
                                            const isSelected = oIdx === selectedOptionIndex;
                                            let btnStyle = 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700';
                                            let icon = null;
                                            if (answered) {
                                                if (isCorrect) {
                                                    btnStyle = 'border-emerald-250 bg-emerald-50 text-emerald-800 font-bold';
                                                    icon = <CheckCircle2 size={16} className="text-emerald-600" />;
                                                } else if (isSelected) {
                                                    btnStyle = 'border-rose-250 bg-rose-50 text-rose-800 font-bold';
                                                    icon = <XCircle size={16} className="text-rose-600" />;
                                                } else {
                                                    btnStyle = 'border-slate-100 bg-slate-50/50 text-slate-400';
                                                }
                                            }
                                            return (
                                                <button key={oIdx} onClick={() => handleOptionSelect(oIdx)} disabled={answered} className={`w-full flex items-center justify-between border rounded-2xl px-5 py-3.5 text-xs lg:text-sm transition-all duration-200 ${btnStyle}`}>
                                                    <span>{opt}</span>
                                                    {icon}
                                                </button>
                                            );
                                        })}
                                    </div>
                                    {selectedOptionIndex !== null && (
                                        <div className="mt-6 bg-indigo-50/10 border border-indigo-500/10 rounded-2xl p-4">
                                            <p className="text-[10px] font-black text-indigo-700 uppercase tracking-widest mb-1">💡 Explanation (ব্যাখ্যা)</p>
                                            <p className="text-xs text-slate-705 leading-relaxed font-semibold">{activeChapter.quiz[currentQuestionIndex].explanation}</p>
                                        </div>
                                    )}
                                    {selectedOptionIndex !== null && (
                                        <div className="mt-6 flex justify-end">
                                            <button onClick={handleNextQuestion} className="inline-flex items-center gap-1.5 rounded-xl bg-indigo-600 px-5 py-2.5 text-xs font-black text-white hover:bg-indigo-500 transition shadow">
                                                Next Question <ChevronRight size={14} />
                                            </button>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/* --- 🧪 AI RULE PRACTICE LAB MODAL OVERLAY --- */}
            {activeLabRule && (
                <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden border border-slate-200 animate-scale-up">
                        {/* Lab Modal Header */}
                        <div className="bg-gradient-to-r from-indigo-900 to-indigo-950 px-6 py-4 text-white flex items-center justify-between">
                            <div>
                                <span className="text-[9px] font-black uppercase tracking-widest bg-indigo-500/20 border border-indigo-500/30 px-2 py-0.5 rounded text-indigo-350">
                                    RULE PRACTICE LAB
                                </span>
                                <h3 className="text-sm lg:text-base font-black truncate max-w-sm">
                                    {activeLabRule.title}
                                </h3>
                            </div>
                            <button
                                onClick={() => setActiveLabRule(null)}
                                className="p-1.5 rounded-lg hover:bg-white/10 text-indigo-200 hover:text-white"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Lab Content */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            {isLoadingLab ? (
                                <div className="py-20 text-center space-y-4">
                                    <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-indigo-650 border-r-transparent align-[-0.125em]" />
                                    <p className="text-xs font-bold text-slate-500 animate-pulse">
                                        Gemini-2.0 is generating 10 fresh exercises for this rule...
                                    </p>
                                </div>
                            ) : labFinished ? (
                                <div className="text-center py-8 max-w-sm mx-auto space-y-4">
                                    <div className="inline-flex items-center justify-center h-16 w-16 bg-emerald-100 text-emerald-700 rounded-full shadow-sm shadow-emerald-250">
                                        <Award size={32} />
                                    </div>
                                    <h4 className="text-lg font-black text-slate-900">
                                        Lab Completed!
                                    </h4>
                                    <p className="text-xs text-slate-500 leading-relaxed">
                                        You successfully completed 10 interactive exercises specifically generated for this grammatical rule.
                                    </p>
                                    
                                    <div className="border border-slate-100 bg-slate-50 rounded-2xl p-5 shadow-inner">
                                        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                                            Practice Lab Score
                                        </p>
                                        <p className="text-5xl font-black text-indigo-600 mt-1">
                                            {labScore} / {labExercises.length}
                                        </p>
                                    </div>

                                    <div className="flex gap-2 justify-center">
                                        <button
                                            onClick={generateMoreLabExercises}
                                            className="inline-flex items-center gap-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 px-5 py-2.5 text-xs font-black text-white transition shadow shadow-indigo-600/10"
                                        >
                                            ⚡ Generate 10 More Exercises
                                        </button>
                                        <button
                                            onClick={() => setActiveLabRule(null)}
                                            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-xs font-bold text-slate-650 hover:bg-slate-50 transition"
                                        >
                                            Close Lab
                                        </button>
                                    </div>
                                </div>
                            ) : labExercises.length > 0 ? (
                                /* Running Lab Exercise */
                                <div>
                                    {/* Exercise header */}
                                    <div className="flex items-center justify-between mb-4 text-[10px] font-black text-slate-400 uppercase tracking-wider">
                                        <span>Exercise {currentLabIndex + 1} of {labExercises.length}</span>
                                        <span className="text-indigo-600">Lab Score: {labScore}</span>
                                    </div>

                                    <div className="h-1.5 rounded-full bg-slate-100 mb-6 overflow-hidden">
                                        <div
                                            className="h-full rounded-full bg-indigo-600 transition-all duration-300"
                                            style={{ width: `${((currentLabIndex + 1) / labExercises.length) * 100}%` }}
                                        />
                                    </div>

                                    {/* Exercise Question */}
                                    <div className="bg-slate-50/80 border border-slate-200 rounded-3xl p-5 text-center mb-6 shadow-inner">
                                        <span className="inline-block text-[9px] font-black uppercase tracking-widest text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full mb-2">
                                            {labExercises[currentLabIndex].type === 'mcq' ? '📝 Multiple Choice' : labExercises[currentLabIndex].type === 'gap' ? '🔤 Fill in the Gap' : '✍️ Sentence Translation'}
                                        </span>
                                        <p className="text-base lg:text-lg font-bold text-slate-900 leading-snug">
                                            {labExercises[currentLabIndex].question}
                                        </p>
                                    </div>

                                    {/* MCQ / Gap options layout */}
                                    {(labExercises[currentLabIndex].type === 'mcq' || labExercises[currentLabIndex].type === 'gap') && (
                                        <div className="grid gap-2.5">
                                            {labExercises[currentLabIndex].options.map((opt, oIdx) => {
                                                const correctIdx = labExercises[currentLabIndex].answer;
                                                const answered = labChecked;
                                                const isCorrect = oIdx === correctIdx;
                                                const isSelected = oIdx === labSelectedOption;

                                                let btnStyle = 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 hover:scale-[1.01]';
                                                let icon = null;

                                                if (answered) {
                                                    if (isCorrect) {
                                                        btnStyle = 'border-emerald-250 bg-emerald-50 text-emerald-800 font-bold';
                                                        icon = <CheckCircle2 size={16} className="text-emerald-600" />;
                                                    } else if (isSelected) {
                                                        btnStyle = 'border-rose-250 bg-rose-50 text-rose-805 font-bold';
                                                        icon = <XCircle size={16} className="text-rose-600" />;
                                                    } else {
                                                        btnStyle = 'border-slate-100 bg-slate-50/50 text-slate-400';
                                                    }
                                                }

                                                return (
                                                    <button
                                                        key={oIdx}
                                                        onClick={() => handleLabOptionSelect(oIdx)}
                                                        disabled={answered}
                                                        className={`w-full flex items-center justify-between border rounded-2xl px-5 py-3.5 text-xs lg:text-sm transition-all duration-200 ${btnStyle}`}
                                                    >
                                                        <span>{opt}</span>
                                                        {icon}
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    )}

                                    {/* Translation scrambled tiles layout */}
                                    {labExercises[currentLabIndex].type === 'translation' && (
                                        <div className="space-y-4">
                                            {/* Response Area */}
                                            <div className="min-h-20 w-full bg-slate-50 border-2 border-dashed border-slate-200 rounded-2xl p-4 flex flex-wrap gap-2 items-center shadow-inner relative">
                                                {labSelectedTiles.length === 0 ? (
                                                    <span className="text-xs text-slate-400 font-semibold absolute inset-0 flex items-center justify-center">
                                                        Tap word tiles below to translate
                                                    </span>
                                                ) : (
                                                    labSelectedTiles.map(tile => (
                                                        <button
                                                            key={tile.id}
                                                            onClick={() => handleLabDeselectTile(tile)}
                                                            className="bg-indigo-55 text-indigo-705 border border-indigo-200 text-xs font-bold px-3 py-2 rounded-xl transition"
                                                        >
                                                            {tile.word}
                                                        </button>
                                                    ))
                                                )}
                                            </div>

                                            {/* Scrambled Area */}
                                            <div className="flex flex-wrap gap-2 justify-center py-3 bg-slate-50/30 border border-slate-100 rounded-xl p-3">
                                                {labScrambledTiles.map(tile => (
                                                    <button
                                                        key={tile.id}
                                                        onClick={() => handleLabSelectTile(tile)}
                                                        className="bg-white border border-slate-200 text-xs font-bold px-3 py-2 rounded-xl shadow-sm transition"
                                                    >
                                                        {tile.word}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Lab Answer Feedback & Explanation */}
                                    {labChecked && (
                                        <div className={`mt-5 border rounded-2xl p-4 flex gap-3 ${
                                            labIsCorrect
                                                ? 'border-emerald-250 bg-emerald-50 text-emerald-805'
                                                : 'border-rose-250 bg-rose-50 text-rose-805'
                                        }`}>
                                            {labIsCorrect ? (
                                                <CheckCircle2 size={18} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                                            ) : (
                                                <XCircle size={18} className="text-rose-600 flex-shrink-0 mt-0.5" />
                                            )}
                                            <div>
                                                <p className="text-xs font-black">
                                                    {labIsCorrect ? '🎉 Correct Answer!' : '❌ Incorrect!'}
                                                </p>
                                                {labExercises[currentLabIndex].type === 'translation' && (
                                                    <p className="text-[10px] text-slate-650 mt-0.5 font-bold">
                                                        Correct English: "{labExercises[currentLabIndex].correctText}"
                                                    </p>
                                                )}
                                                <p className="text-[10px] text-slate-500 mt-1 font-semibold leading-relaxed">
                                                    {labExercises[currentLabIndex].explanation}
                                                </p>
                                            </div>
                                        </div>
                                    )}

                                    {/* Action Buttons */}
                                    <div className="mt-6 flex justify-between items-center border-t border-slate-100 pt-4">
                                        <span className="text-[10px] text-slate-400 font-bold">
                                            IELTS Grammar Lab
                                        </span>
                                        
                                        {labExercises[currentLabIndex].type === 'translation' && !labChecked ? (
                                            <button
                                                onClick={handleCheckLabTranslation}
                                                disabled={labSelectedTiles.length === 0}
                                                className="inline-flex items-center gap-1.5 rounded-xl bg-indigo-650 px-5 py-2.5 text-xs font-black text-white transition disabled:opacity-50"
                                            >
                                                Check Translation
                                            </button>
                                        ) : (
                                            (labChecked || labExercises[currentLabIndex].type !== 'translation') && (
                                                <button
                                                    onClick={handleNextLabExercise}
                                                    disabled={!labChecked}
                                                    className="inline-flex items-center gap-1.5 rounded-xl bg-indigo-650 px-5 py-2.5 text-xs font-black text-white hover:bg-indigo-500 transition shadow disabled:opacity-50"
                                                >
                                                    {currentLabIndex === labExercises.length - 1 ? 'Finish Lab' : 'Next Question'}
                                                    <ChevronRight size={14} />
                                                </button>
                                            )
                                        )}
                                    </div>
                                </div>
                            ) : (
                                <div className="py-20 text-center text-slate-400 text-xs font-semibold">
                                    No exercises available.
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
