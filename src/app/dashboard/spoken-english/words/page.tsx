'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';
import {
    ArrowLeft, Volume2, ChevronLeft, ChevronRight, Check, X,
    RefreshCw, Play, Trash2, Heart, BookOpen, GraduationCap, Sparkles, Lock
} from 'lucide-react';
import spokenVocabRaw from '../../../../../data/spoken-vocab.json';
import { useSubscription } from '../../../../components/SubscriptionGuard';

interface WordItem {
    word: string;
    pos: string;
    ipa: string;
    pronunciation: string;
    meaning: string;
    example: string;
    example_meaning: string;
    v1?: string;
    v2?: string;
    v3?: string;
    v_ing?: string;
    v_s_es?: string;
}

interface WordContext {
    situation: string;
    situation_meaning: string;
    story: string;
    story_meaning: string;
}

const CATEGORIES = [
    { id: 'phrasal_verb', label: 'Phrasal Verbs', icon: '⚡' },
    { id: 'verb', label: 'Important Verbs', icon: '🏃' },
    { id: 'noun', label: 'Nouns', icon: '📦' },
    { id: 'adjective', label: 'Adjectives', icon: '🎨' },
    { id: 'adverb', label: 'Adverbs', icon: '⏱️' },
    { id: 'preposition', label: 'Prepositions', icon: '📍' },
    { id: 'conjunction', label: 'Conjunctions', icon: '🔗' },
    { id: 'interjection', label: 'Interjections', icon: '📢' },
    { id: 'saved', label: 'Saved Words', icon: '💖' }
];

// Fallback generator for verbs missing pre-parsed 5 forms
function getFallbackVerbForms(word: string) {
    const w = word.trim();
    const lower = w.toLowerCase();
    
    // v_s_es
    let v_s_es = w + 's';
    if (/[sxz]$|ch$|sh$/i.test(lower)) {
        v_s_es = w + 'es';
    } else if (/[bcdfghjklmnpqrstvwxyz]y$/i.test(lower)) {
        v_s_es = w.slice(0, -1) + 'ies';
    }

    // v_ing
    let v_ing = w + 'ing';
    if (/e$/i.test(lower) && !/ee$|oe$|ye$/i.test(lower)) {
        v_ing = w.slice(0, -1) + 'ing';
    } else if (/[bcdfghjklmnpqrstvwxyz][aeiou][bdgklmnprst]$/i.test(lower)) {
        v_ing = w + w.slice(-1) + 'ing';
    }

    // v2 & v3
    let v2 = w + 'ed';
    if (/e$/i.test(lower)) {
        v2 = w + 'd';
    } else if (/[bcdfghjklmnpqrstvwxyz]y$/i.test(lower)) {
        v2 = w.slice(0, -1) + 'ied';
    } else if (/[bcdfghjklmnpqrstvwxyz][aeiou][bdgklmnprst]$/i.test(lower)) {
        v2 = w + w.slice(-1) + 'ed';
    }

    return {
        v1: w,
        v2: v2,
        v3: v2,
        v_ing: v_ing,
        v_s_es: v_s_es
    };
}

export default function SpokenVocabPage() {
    const { isTrial } = useSubscription();
    const [selectedCategory, setSelectedCategory] = useState<string>('phrasal_verb');
    const [mode, setMode] = useState<'learn' | 'quiz' | 'flashcard'>('learn');

    // Word list based on selected category
    const [savedWords, setSavedWords] = useState<WordItem[]>([]);
    
    // Load saved words from localStorage
    useEffect(() => {
        try {
            const saved = JSON.parse(localStorage.getItem('saved_spoken_words') || '[]');
            setSavedWords(saved);
        } catch { /* ignore */ }
    }, []);

    const wordsList = useMemo(() => {
        if (selectedCategory === 'saved') {
            return savedWords;
        }
        const filtered = (spokenVocabRaw as WordItem[]).filter(w => w.pos === selectedCategory);
        return isTrial ? filtered.slice(0, 3) : filtered;
    }, [selectedCategory, savedWords, isTrial]);

    // --- Learn Mode State ---
    const [currentIndex, setCurrentIndex] = useState(0);

    // Reset index on category change
    useEffect(() => {
        setCurrentIndex(0);
    }, [selectedCategory]);

    const currentWord = wordsList[currentIndex] || null;

    // --- Dynamic Context (Situation + Story) ---
    const [contextCache, setContextCache] = useState<Record<string, WordContext>>({});
    const [currentContext, setCurrentContext] = useState<WordContext | null>(null);
    const [isLoadingContext, setIsLoadingContext] = useState(false);

    // Load context cache from localstorage
    useEffect(() => {
        try {
            const cached = JSON.parse(localStorage.getItem('spoken_word_context_cache') || '{}');
            setContextCache(cached);
        } catch { /* ignore */ }
    }, []);

    // Fetch context when currentWord changes
    useEffect(() => {
        if (!currentWord) {
            setCurrentContext(null);
            return;
        }

        const cacheKey = currentWord.word.toLowerCase();
        if (contextCache[cacheKey]) {
            setCurrentContext(contextCache[cacheKey]);
            setIsLoadingContext(false);
            return;
        }

        setIsLoadingContext(true);
        setCurrentContext(null);

        // Fetch from API
        fetch(`/api/word-context?word=${encodeURIComponent(currentWord.word)}&pos=${encodeURIComponent(currentWord.pos)}&meaning=${encodeURIComponent(currentWord.meaning)}`)
            .then(res => res.json())
            .then((data: WordContext) => {
                setCurrentContext(data);
                const updatedCache = { ...contextCache, [cacheKey]: data };
                setContextCache(updatedCache);
                localStorage.setItem('spoken_word_context_cache', JSON.stringify(updatedCache));
                setIsLoadingContext(false);
            })
            .catch(() => {
                // Fallback context
                const fallback: WordContext = {
                    situation: 'Used in general communication.',
                    situation_meaning: 'সাধারণ কথোপকথনে ব্যবহৃত হয়।',
                    story: `"${currentWord.example}"`,
                    story_meaning: currentWord.example_meaning
                };
                setCurrentContext(fallback);
                setIsLoadingContext(false);
            });

    }, [currentWord, contextCache]);

    // --- Verb Forms resolver ---
    const verbForms = useMemo(() => {
        if (!currentWord || currentWord.pos !== 'verb') return null;
        if (currentWord.v2 && currentWord.v3 && currentWord.v_ing && currentWord.v_s_es) {
            return {
                v1: currentWord.v1 || currentWord.word,
                v2: currentWord.v2,
                v3: currentWord.v3,
                v_ing: currentWord.v_ing,
                v_s_es: currentWord.v_s_es
            };
        }
        return getFallbackVerbForms(currentWord.word);
    }, [currentWord]);

    // --- Audio Playing ---
    const [isPlayingAudio, setIsPlayingAudio] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const playPronunciation = (word: string) => {
        if (!audioRef.current) {
            audioRef.current = new Audio();
            audioRef.current.onended = () => setIsPlayingAudio(false);
            audioRef.current.onerror = () => setIsPlayingAudio(false);
        }
        setIsPlayingAudio(true);
        audioRef.current.src = `/api/audio/oxford?word=${encodeURIComponent(word)}`;
        audioRef.current.play().catch(() => setIsPlayingAudio(false));
    };

    // --- Save / Bookmark Word ---
    const isSaved = useMemo(() => {
        if (!currentWord) return false;
        return savedWords.some(w => w.word.toLowerCase() === currentWord.word.toLowerCase());
    }, [currentWord, savedWords]);

    const toggleSaveWord = () => {
        if (!currentWord) return;
        let updated: WordItem[];
        if (isSaved) {
            updated = savedWords.filter(w => w.word.toLowerCase() !== currentWord.word.toLowerCase());
        } else {
            updated = [...savedWords, currentWord];
        }
        setSavedWords(updated);
        localStorage.setItem('saved_spoken_words', JSON.stringify(updated));
    };

    const removeSavedWordDirectly = (wordText: string) => {
        const updated = savedWords.filter(w => w.word.toLowerCase() !== wordText.toLowerCase());
        setSavedWords(updated);
        localStorage.setItem('saved_spoken_words', JSON.stringify(updated));
    };

    // --- Flashcard Mode State ---
    const [isFlipped, setIsFlipped] = useState(false);

    useEffect(() => {
        setIsFlipped(false);
    }, [currentIndex]);

    // --- Quiz Mode State ---
    const [quizStarted, setQuizStarted] = useState(false);
    const [quizIndex, setQuizIndex] = useState(0);
    const [quizScore, setQuizScore] = useState(0);
    const [quizQuestions, setQuizQuestions] = useState<Array<{
        wordItem: WordItem;
        options: string[];
        correctIndex: number;
        selectedIndex: number | null;
    }>>([]);

    const startQuiz = () => {
        if (wordsList.length < 4) {
            alert('কুইজ শুরু করার জন্য এই ক্যাটাগরিতে অন্তত ৪টি শব্দ থাকতে হবে।');
            return;
        }

        const shuffledList = [...wordsList].sort(() => 0.5 - Math.random());
        const selectedForQuiz = shuffledList.slice(0, Math.min(10, shuffledList.length));

        const questions = selectedForQuiz.map(wordItem => {
            const correctOption = wordItem.meaning;
            const pool = (spokenVocabRaw as WordItem[]).filter(w => w.meaning !== correctOption);
            const incorrectOptions = [...new Set(pool.map(w => w.meaning))]
                .sort(() => 0.5 - Math.random())
                .slice(0, 3);

            const options = [correctOption, ...incorrectOptions].sort(() => 0.5 - Math.random());
            const correctIndex = options.indexOf(correctOption);

            return {
                wordItem,
                options,
                correctIndex,
                selectedIndex: null
            };
        });

        setQuizQuestions(questions);
        setQuizIndex(0);
        setQuizScore(0);
        setQuizStarted(true);
    };

    const selectOption = (optIdx: number) => {
        if (quizQuestions[quizIndex].selectedIndex !== null) return;
        
        const nextQuestions = [...quizQuestions];
        nextQuestions[quizIndex].selectedIndex = optIdx;
        setQuizQuestions(nextQuestions);

        if (optIdx === quizQuestions[quizIndex].correctIndex) {
            setQuizScore(s => s + 1);
        }
    };

    const nextQuizQuestion = () => {
        if (quizIndex < quizQuestions.length - 1) {
            setQuizIndex(i => i + 1);
        } else {
            setQuizIndex(quizQuestions.length);
        }
    };

    return (
        <div className="min-h-screen bg-[#f8fafc]">
            {/* Header Banner */}
            <div className="bg-gradient-to-br from-slate-900 via-teal-950 to-indigo-950 px-6 py-8 text-white relative">
                <div className="mx-auto max-w-5xl">
                    <Link href="/dashboard/spoken-english" className="inline-flex items-center gap-1.5 text-xs text-teal-300 hover:underline mb-4 font-semibold">
                        <ArrowLeft size={14} /> Back to Spoken Hub
                    </Link>
                    <span className="flex items-center gap-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-teal-300 mb-3 w-fit">
                        <Sparkles size={10} />
                        WORD & FLUENCY BUILDER
                    </span>
                    <h1 className="text-2xl font-black lg:text-4xl leading-tight">
                        Vocabulary & Parts of Speech
                    </h1>
                    <p className="mt-2 text-xs text-slate-300 max-w-xl leading-relaxed">
                        Learn phrasal verbs, prepositions, conjunctions, and important words with real Oxford pronunciation sound and interactive practice tests.
                    </p>
                </div>
            </div>

            {/* Main Area */}
            <div className="mx-auto max-w-5xl px-6 py-8">
                {/* Category Grid */}
                <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-2 mb-8 bg-white p-3 rounded-2xl border border-slate-200/80 shadow-sm">
                    {CATEGORIES.map(cat => {
                        const isSelected = selectedCategory === cat.id;
                        return (
                            <button
                                key={cat.id}
                                onClick={() => {
                                    setSelectedCategory(cat.id);
                                    setQuizStarted(false);
                                }}
                                className={`flex flex-col items-center justify-center py-2 px-1 rounded-xl text-center transition-all ${
                                    isSelected
                                        ? 'bg-teal-600 text-white font-bold shadow-md shadow-teal-600/15'
                                        : 'hover:bg-slate-50 text-slate-600'
                                }`}
                            >
                                <span className="text-lg mb-1">{cat.icon}</span>
                                <span className="text-[10px] whitespace-nowrap leading-none truncate max-w-full">
                                    {cat.label}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Sub-modes control */}
                {selectedCategory !== 'saved' && !quizStarted && (
                    <div className="flex bg-slate-200/60 p-1 rounded-xl w-fit gap-1 mb-6 border border-slate-200">
                        {([
                            ['learn', '📖 Learn Mode'],
                            ['flashcard', '🎴 Flashcards'],
                            ['quiz', '🧠 MCQ Quiz']
                        ] as const).map(([m, label]) => (
                            <button
                                key={m}
                                onClick={() => {
                                    if (isTrial && m === 'quiz') {
                                        window.location.href = '/dashboard/payment?required=spoken';
                                        return;
                                    }
                                    setMode(m);
                                }}
                                className={`rounded-lg px-4 py-1.5 text-xs font-bold transition-all ${
                                    mode === m
                                        ? 'bg-white text-slate-900 shadow-sm'
                                        : 'text-slate-600 hover:text-slate-950'
                                }`}
                            >
                                {label}
                            </button>
                        ))}
                    </div>
                )}

                {/* --- DISPLAY CONTENTS --- */}
                {wordsList.length === 0 ? (
                    <div className="flex flex-col items-center justify-center p-12 text-center bg-white border border-slate-200 rounded-3xl shadow-sm">
                        <BookOpen size={44} className="text-slate-300 mb-3" />
                        <p className="text-slate-500 font-bold text-sm">কোনো শব্দ পাওয়া যায়নি।</p>
                        {selectedCategory === 'saved' ? (
                            <p className="text-xs text-slate-400 mt-1 max-w-xs">
                                Learn Mode-এ পড়ার সময় কোনো শব্দের পাশে থাকা হৃদযন্ত্র (💖) চিহ্নে ক্লিক করে শব্দ সংরক্ষণ করো।
                            </p>
                        ) : null}
                    </div>
                ) : quizStarted ? (
                    /* --- QUIZ LAYOUT --- */
                    <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm p-6 lg:p-8 max-w-xl mx-auto">
                        {quizIndex < quizQuestions.length ? (
                            <div>
                                <div className="flex items-center justify-between mb-6">
                                    <span className="text-xs font-black text-slate-400 uppercase tracking-widest">
                                        Question {quizIndex + 1} of {quizQuestions.length}
                                    </span>
                                    <span className="text-xs font-bold text-teal-600">
                                        Score: {quizScore}
                                    </span>
                                </div>

                                <div className="mb-6 text-center">
                                    <p className="text-3xl font-black text-slate-900 mb-1">
                                        {quizQuestions[quizIndex].wordItem.word}
                                    </p>
                                    <div className="flex items-center justify-center gap-1.5 mt-2">
                                        <span className="text-xs font-medium text-slate-500 bg-slate-100 rounded-full px-2 py-0.5">
                                            {quizQuestions[quizIndex].wordItem.ipa}
                                        </span>
                                        <button
                                            onClick={() => playPronunciation(quizQuestions[quizIndex].wordItem.word)}
                                            className="rounded-full bg-slate-100 hover:bg-slate-200 p-1.5 text-slate-600 transition"
                                            title="Pronunciation sound"
                                        >
                                            <Volume2 size={13} />
                                        </button>
                                    </div>
                                </div>

                                <div className="space-y-2.5">
                                    {quizQuestions[quizIndex].options.map((opt, oIdx) => {
                                        const q = quizQuestions[quizIndex];
                                        const answered = q.selectedIndex !== null;
                                        const isCorrect = oIdx === q.correctIndex;
                                        const isSelected = oIdx === q.selectedIndex;

                                        let btnStyle = 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700';
                                        let icon = null;

                                        if (answered) {
                                            if (isCorrect) {
                                                btnStyle = 'border-emerald-200 bg-emerald-50 text-emerald-800 font-bold';
                                                icon = <Check size={16} className="text-emerald-600" />;
                                            } else if (isSelected) {
                                                btnStyle = 'border-rose-200 bg-rose-50 text-rose-800 font-bold';
                                                icon = <X size={16} className="text-rose-600" />;
                                            } else {
                                                btnStyle = 'border-slate-100 bg-slate-50/50 text-slate-400';
                                            }
                                        }

                                        return (
                                            <button
                                                key={oIdx}
                                                onClick={() => selectOption(oIdx)}
                                                disabled={answered}
                                                className={`w-full flex items-center justify-between border rounded-2xl px-5 py-3.5 text-sm transition-all ${btnStyle}`}
                                            >
                                                <span>{opt}</span>
                                                {icon}
                                            </button>
                                        );
                                    })}
                                </div>

                                {quizQuestions[quizIndex].selectedIndex !== null && (
                                    <div className="mt-6 flex justify-end">
                                        <button
                                            onClick={nextQuizQuestion}
                                            className="inline-flex items-center gap-1.5 rounded-xl bg-teal-600 px-5 py-2.5 text-xs font-black text-white hover:bg-teal-500 transition shadow"
                                        >
                                            {quizIndex === quizQuestions.length - 1 ? 'Finish Quiz' : 'Next Question'}
                                            <ChevronRight size={14} />
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="text-center py-6">
                                <div className="inline-flex items-center justify-center h-16 w-16 bg-teal-100 text-teal-700 rounded-full mb-4">
                                    <GraduationCap size={32} />
                                </div>
                                <h3 className="text-xl font-black text-slate-900 mb-1">Quiz Completed!</h3>
                                <p className="text-xs text-slate-500 mb-5">Your knowledge score card</p>
                                
                                <div className="border border-slate-100 bg-slate-50 rounded-2xl p-5 mb-6 max-w-xs mx-auto">
                                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Correct Answers</p>
                                    <p className="text-5xl font-black text-teal-600 mt-1">{quizScore} / {quizQuestions.length}</p>
                                    <p className="text-[11px] text-slate-400 mt-2">
                                        {Math.round((quizScore / quizQuestions.length) * 100)}% accuracy score
                                    </p>
                                </div>

                                <div className="flex gap-3 justify-center">
                                    <button
                                        onClick={startQuiz}
                                        className="inline-flex items-center gap-1.5 rounded-xl bg-teal-600 px-5 py-2.5 text-xs font-black text-white hover:bg-teal-500 transition shadow"
                                    >
                                        <RefreshCw size={14} /> Retry Quiz
                                    </button>
                                    <button
                                        onClick={() => setQuizStarted(false)}
                                        className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-xs font-bold text-slate-600 hover:bg-slate-50 transition"
                                    >
                                        Back to Learning
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                ) : mode === 'quiz' ? (
                    /* --- ENTER QUIZ PROMPT --- */
                    <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm p-8 text-center max-w-md mx-auto">
                        <GraduationCap size={44} className="text-teal-600 mx-auto mb-3" />
                        <h3 className="text-lg font-black text-slate-900 mb-2">Practice {CATEGORIES.find(c => c.id === selectedCategory)?.label}</h3>
                        <p className="text-xs text-slate-500 mb-6 max-w-xs mx-auto leading-relaxed">
                            Take a quick 10-question multiple choice vocabulary practice test to assess your recall and learning.
                        </p>
                        <button
                            onClick={startQuiz}
                            className="inline-flex items-center gap-2 rounded-2xl bg-teal-600 px-6 py-3 text-xs font-black text-white hover:bg-teal-500 transition shadow-lg shadow-teal-600/10 w-full justify-center"
                        >
                            Start Practice Quiz <Play size={14} />
                        </button>
                    </div>
                ) : mode === 'flashcard' ? (
                    /* --- FLASHCARD LAYOUT --- */
                    <div className="max-w-md mx-auto">
                        <div
                            onClick={() => setIsFlipped(f => !f)}
                            className="h-[340px] w-full cursor-pointer relative perspective-1000 mb-6 group"
                        >
                            <div className={`relative w-full h-full duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
                                {/* Front: Word */}
                                <div className="absolute inset-0 backface-hidden bg-white border border-slate-200/80 rounded-3xl shadow-sm p-8 flex flex-col items-center justify-center text-center gap-4 hover:border-teal-400 transition-all duration-300">
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest absolute top-6">
                                        Front Card
                                    </span>
                                    <p className="text-4xl font-black text-slate-900 group-hover:scale-105 transition-all">
                                        {currentWord.word}
                                    </p>
                                    <div className="flex items-center gap-1.5 bg-slate-100 rounded-full px-3 py-1">
                                        <span className="text-xs font-medium text-slate-500">
                                            {currentWord.ipa}
                                        </span>
                                    </div>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wide mt-2">
                                        💡 Click to Reveal Meaning & Context
                                    </p>
                                </div>

                                {/* Back: Meaning & AI Context */}
                                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-teal-50/50 border-2 border-teal-500/20 rounded-3xl shadow-sm p-6 flex flex-col items-center justify-center text-center gap-3 overflow-y-auto">
                                    <span className="text-[10px] font-bold text-teal-600 uppercase tracking-widest absolute top-6">
                                        Back Card
                                    </span>
                                    <p className="text-2xl font-black text-teal-900 mt-4">
                                        {currentWord.meaning}
                                    </p>
                                    <p className="text-xs text-slate-600 font-medium">
                                        {currentWord.pronunciation}
                                    </p>
                                    
                                    {isLoadingContext ? (
                                        <div className="w-full space-y-2 mt-2">
                                            <div className="h-3 bg-slate-200 rounded animate-pulse w-3/4 mx-auto"></div>
                                            <div className="h-3 bg-slate-200 rounded animate-pulse w-5/6 mx-auto"></div>
                                        </div>
                                    ) : currentContext ? (
                                        <div className="border-t border-slate-200/80 pt-3 w-full mt-2 text-left space-y-2">
                                            <div>
                                                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">SITUATION</p>
                                                <p className="text-xs text-slate-700 leading-tight">{currentContext.situation}</p>
                                                <p className="text-[10px] text-slate-500">{currentContext.situation_meaning}</p>
                                            </div>
                                            <div className="border-t border-slate-100 pt-2">
                                                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">SHORT STORY</p>
                                                <p className="text-xs italic font-bold text-slate-700 leading-snug">"{currentContext.story}"</p>
                                                <p className="text-[10px] text-slate-500">{currentContext.story_meaning}</p>
                                            </div>
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                        </div>

                        {/* Controls */}
                        <div className="flex items-center justify-between px-2">
                            <button
                                onClick={() => setCurrentIndex(i => Math.max(0, i - 1))}
                                disabled={currentIndex === 0}
                                className="rounded-xl border border-slate-200 bg-white p-3 hover:bg-slate-50 disabled:opacity-40 transition shadow-sm"
                            >
                                <ChevronLeft size={18} />
                            </button>
                            <span className="text-xs font-bold text-slate-500">
                                Card {currentIndex + 1} of {wordsList.length}
                            </span>
                            <button
                                onClick={() => setCurrentIndex(i => Math.min(wordsList.length - 1, i + 1))}
                                disabled={currentIndex === wordsList.length - 1}
                                className="rounded-xl border border-slate-200 bg-white p-3 hover:bg-slate-50 disabled:opacity-40 transition shadow-sm"
                            >
                                <ChevronRight size={18} />
                            </button>
                        </div>

                        {isTrial && currentIndex === 2 && selectedCategory !== 'saved' && (
                            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center space-y-4 shadow-sm mt-6">
                                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                                    <Lock size={20} />
                                </div>
                                <div>
                                    <h3 className="text-sm font-black text-slate-900">🔒 ফ্রী ট্রায়ালে আরও শব্দ লকড!</h3>
                                    <p className="text-xs text-slate-500 mt-1">
                                        আপনি বর্তমানে ফ্রি ট্রায়াল মোডে আছেন। এই ক্যাটাগরির সমস্ত শব্দ ও বাক্য প্র্যাকটিস করতে সাবস্ক্রিপশন প্ল্যানটি অ্যাক্টিভেট করুন।
                                    </p>
                                </div>
                                <Link href="/dashboard/payment?required=spoken" className="inline-flex items-center gap-1.5 rounded-xl bg-teal-600 px-5 py-2.5 text-xs font-bold text-white hover:bg-teal-500 transition shadow">
                                    আনলক করুন ↗
                                </Link>
                            </div>
                        )}
                    </div>
                ) : (
                    /* --- LEARN MODE LAYOUT --- */
                    <div className="max-w-2xl mx-auto space-y-6">
                        {/* Word Box */}
                        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm p-6 lg:p-8 relative">
                            {/* Saved Badge */}
                            {selectedCategory !== 'saved' && (
                                <button
                                    onClick={toggleSaveWord}
                                    className={`absolute top-6 right-6 p-2 rounded-xl border transition ${
                                        isSaved
                                            ? 'border-rose-100 bg-rose-50 text-rose-600'
                                            : 'border-slate-200 bg-slate-50 text-slate-400 hover:text-rose-500 hover:bg-rose-50/50'
                                    }`}
                                    title={isSaved ? 'Remove from Saved Words' : 'Save Word'}
                                >
                                    <Heart size={18} className={isSaved ? 'fill-rose-500' : ''} />
                                </button>
                            )}

                            {selectedCategory === 'saved' && (
                                <button
                                    onClick={() => removeSavedWordDirectly(currentWord.word)}
                                    className="absolute top-6 right-6 p-2 rounded-xl border border-slate-200 bg-slate-50 text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition"
                                    title="Remove from Saved Words"
                                >
                                    <Trash2 size={16} />
                                </button>
                            )}

                            <span className="text-[10px] font-black uppercase tracking-widest text-teal-600 bg-teal-50 px-2.5 py-1 rounded-full w-fit">
                                {CATEGORIES.find(c => c.id === currentWord.pos)?.label || 'Vocabulary'}
                            </span>

                            <h2 className="text-4xl font-black text-slate-900 mt-4">
                                {currentWord.word}
                            </h2>

                            <div className="flex items-center gap-2 mt-2 flex-wrap">
                                <span className="text-xs font-semibold text-slate-500 bg-slate-100 rounded-full px-3 py-1">
                                    IPA: {currentWord.ipa}
                                </span>
                                <span className="text-xs font-semibold text-slate-500 bg-slate-100 rounded-full px-3 py-1">
                                    উচ্চারণ: {currentWord.pronunciation}
                                </span>
                                <button
                                    onClick={() => playPronunciation(currentWord.word)}
                                    disabled={isPlayingAudio}
                                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold transition ${
                                        isPlayingAudio
                                            ? 'bg-teal-50 text-teal-600 animate-pulse'
                                            : 'bg-teal-600 text-white hover:bg-teal-500 shadow-sm'
                                    }`}
                                >
                                    <Volume2 size={12} /> {isPlayingAudio ? 'Playing...' : 'Pronounce'}
                                </button>
                            </div>

                            <div className="mt-6 border-t border-slate-100 pt-6">
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1.5">অর্থ (Bengali Meaning)</p>
                                <p className="text-xl font-black text-slate-800">
                                    {currentWord.meaning}
                                </p>
                            </div>

                            {/* AI Context: Situation & Short Story */}
                            <div className="mt-6 border-t border-slate-100 pt-6 space-y-4">
                                {isLoadingContext ? (
                                    <div className="space-y-3">
                                        <div className="h-3 bg-slate-100 rounded animate-pulse w-1/4"></div>
                                        <div className="h-4 bg-slate-100 rounded animate-pulse w-3/4"></div>
                                        <div className="h-3.5 bg-slate-150 rounded animate-pulse w-1/2"></div>
                                        <div className="h-4 bg-slate-100 rounded animate-pulse w-5/6 mt-4"></div>
                                        <div className="h-3.5 bg-slate-150 rounded animate-pulse w-2/3"></div>
                                    </div>
                                ) : currentContext ? (
                                    <>
                                        <div className="bg-slate-50/80 rounded-2xl p-4 border border-slate-100/50">
                                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
                                                💡 Situation (কোন পরিস্থিতিতে ব্যবহার করবে)
                                            </p>
                                            <p className="text-sm font-semibold text-slate-800 leading-snug">
                                                {currentContext.situation}
                                            </p>
                                            <p className="text-xs text-slate-500 mt-1">
                                                {currentContext.situation_meaning}
                                            </p>
                                        </div>

                                        <div className="bg-teal-50/20 border border-teal-500/10 rounded-2xl p-4">
                                            <p className="text-xs font-bold text-teal-600/80 uppercase tracking-widest mb-1">
                                                📖 Apply in Short Story (গল্পে প্রয়োগ)
                                            </p>
                                            <p className="text-sm font-bold text-slate-800 leading-relaxed italic">
                                                "{currentContext.story}"
                                            </p>
                                            <p className="text-xs text-slate-600 mt-1.5 font-medium leading-relaxed">
                                                {currentContext.story_meaning}
                                            </p>
                                        </div>
                                    </>
                                ) : null}
                            </div>
                        </div>

                        {/* Verb Forms block */}
                        {selectedCategory === 'verb' && verbForms && (
                            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm p-6 lg:p-8">
                                <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">
                                    5 Forms of the Verb (ক্রিয়ার ৫টি রূপ)
                                </h3>
                                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                                    {[
                                        ['V1 (Base)', verbForms.v1, 'সাধারণ রূপ'],
                                        ['V2 (Past)', verbForms.v2, 'অতীত কাল'],
                                        ['V3 (Participle)', verbForms.v3, 'পুরাঘটিত রূপ'],
                                        ['V-ing (Continuous)', verbForms.v_ing, 'চলমান রূপ'],
                                        ['V-s/es (Singular)', verbForms.v_s_es, 'নাম পুরুষ রূপ']
                                    ].map(([title, val, desc]) => (
                                        <div key={title} className="bg-slate-50 rounded-2xl p-4 border border-slate-100 text-center">
                                            <p className="text-[10px] font-black text-teal-600 uppercase tracking-wider">{title}</p>
                                            <p className="text-sm font-black text-slate-900 mt-1.5 truncate" title={val}>
                                                {val}
                                            </p>
                                            <p className="text-[9px] text-slate-400 mt-0.5">{desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Navigation controls */}
                        <div className="flex items-center justify-between px-4">
                            <button
                                onClick={() => setCurrentIndex(i => Math.max(0, i - 1))}
                                disabled={currentIndex === 0}
                                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50 disabled:opacity-40 transition shadow-sm"
                            >
                                <ChevronLeft size={16} /> Prev
                            </button>
                            <span className="text-xs font-bold text-slate-500">
                                {currentIndex + 1} / {wordsList.length}
                            </span>
                            <button
                                onClick={() => setCurrentIndex(i => Math.min(wordsList.length - 1, i + 1))}
                                disabled={currentIndex === wordsList.length - 1}
                                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50 disabled:opacity-40 transition shadow-sm"
                            >
                                Next <ChevronRight size={16} />
                            </button>
                        </div>

                        {isTrial && currentIndex === 2 && selectedCategory !== 'saved' && (
                            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center space-y-4 shadow-sm mt-6">
                                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                                    <Lock size={20} />
                                </div>
                                <div>
                                    <h3 className="text-sm font-black text-slate-900">🔒 ফ্রী ট্রায়ালে আরও শব্দ লকড!</h3>
                                    <p className="text-xs text-slate-500 mt-1">
                                        আপনি বর্তমানে ফ্রি ট্রায়াল মোডে আছেন। এই ক্যাটাগরির সমস্ত শব্দ ও বাক্য প্র্যাকটিস করতে সাবস্ক্রিপশন প্ল্যানটি অ্যাক্টিভেট করুন।
                                    </p>
                                </div>
                                <Link href="/dashboard/payment?required=spoken" className="inline-flex items-center gap-1.5 rounded-xl bg-teal-600 px-5 py-2.5 text-xs font-bold text-white hover:bg-teal-500 transition shadow">
                                    আনলক করুন ↗
                                </Link>
                            </div>
                        )}
                    </div>
                )}
            </div>
            
            <style jsx global>{`
                .perspective-1000 {
                    perspective: 1000px;
                }
                .transform-style-3d {
                    transform-style: preserve-3d;
                }
                .backface-hidden {
                    backface-visibility: hidden;
                }
                .rotate-y-180 {
                    transform: rotateY(180deg);
                }
            `}</style>
        </div>
    );
}
