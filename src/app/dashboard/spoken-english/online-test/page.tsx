'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';
import {
    ArrowLeft, Clock, CheckCircle2, XCircle, AlertCircle,
    Trophy, Sparkles, RefreshCw, Award, ArrowRight,
    HelpCircle, ChevronRight, ChevronLeft, Bookmark,
    Send, Eye, Check, Flame, Shield, BookOpen, Volume2, Printer
} from 'lucide-react';
import { EXAM_100_QUESTIONS, type ExamQuestion } from '../../../../lib/examQuestionsData';

export default function OnlineTestPage() {
    // Stage: 'intro' | 'exam' | 'result'
    const [stage, setStage] = useState<'intro' | 'exam' | 'result'>('intro');
    const [studentName, setStudentName] = useState<string>('');
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
    const [categoryFilter, setCategoryFilter] = useState<'all' | 'tenses' | 'modals' | 'unanswered'>('all');

    // 30 Minutes Timer = 1800 Seconds
    const TOTAL_SECONDS = 30 * 60;
    const [timeLeft, setTimeLeft] = useState<number>(TOTAL_SECONDS);
    const [timeTaken, setTimeTaken] = useState<number>(0);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    // Result & Submission state
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [submissionResult, setSubmissionResult] = useState<any>(null);
    const [reviewFilter, setReviewFilter] = useState<'all' | 'mistakes'>('mistakes');

    // Load initial student name
    useEffect(() => {
        try {
            const savedName = localStorage.getItem('spoken_student_name') || '';
            setStudentName(savedName);
        } catch {
            // ignore
        }
    }, []);

    // Timer Logic
    useEffect(() => {
        if (stage === 'exam') {
            timerRef.current = setInterval(() => {
                setTimeLeft((prev) => {
                    if (prev <= 1) {
                        if (timerRef.current) clearInterval(timerRef.current);
                        handleSubmitExam();
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        } else {
            if (timerRef.current) clearInterval(timerRef.current);
        }

        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [stage]);

    // Format time (MM:SS)
    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    // Filter questions during exam
    const filteredQuestions = useMemo(() => {
        return EXAM_100_QUESTIONS.filter((q, idx) => {
            if (categoryFilter === 'tenses') return q.category === 'tenses';
            if (categoryFilter === 'modals') return q.category === 'modals';
            if (categoryFilter === 'unanswered') return userAnswers[q.id] === undefined;
            return true;
        });
    }, [categoryFilter, userAnswers]);

    const currentQuestion = EXAM_100_QUESTIONS[currentIndex] || EXAM_100_QUESTIONS[0];
    const answeredCount = Object.keys(userAnswers).length;
    const progressPercent = Math.round((answeredCount / EXAM_100_QUESTIONS.length) * 100);

    // Handle Option Selection
    const handleSelectOption = (qId: number, optIndex: number) => {
        setUserAnswers((prev) => ({
            ...prev,
            [qId]: optIndex,
        }));
    };

    // Start Exam
    const handleStartExam = () => {
        if (studentName.trim()) {
            try {
                localStorage.setItem('spoken_student_name', studentName.trim());
            } catch {}
        }
        setUserAnswers({});
        setTimeLeft(TOTAL_SECONDS);
        setCurrentIndex(0);
        setStage('exam');
    };

    // Submit Exam & Calculate Result
    const handleSubmitExam = async () => {
        if (timerRef.current) clearInterval(timerRef.current);
        setIsSubmitting(true);

        const duration = TOTAL_SECONDS - timeLeft;
        setTimeTaken(duration);

        // Grade calculation
        let correctCount = 0;
        let tensesCorrect = 0;
        let modalsCorrect = 0;
        const mistakesList: any[] = [];
        const weaknessMap: Record<string, number> = {};

        EXAM_100_QUESTIONS.forEach((q) => {
            const userPick = userAnswers[q.id];
            const isCorrect = userPick === q.correctAnswer;

            if (isCorrect) {
                correctCount++;
                if (q.category === 'tenses') tensesCorrect++;
                if (q.category === 'modals') modalsCorrect++;
            } else {
                // Record mistake
                mistakesList.push({
                    questionId: q.id,
                    category: q.category,
                    subCategory: q.subCategory,
                    patternBn: q.patternBn,
                    promptBn: q.promptBn,
                    sentence: q.sentence,
                    userChoice: userPick !== undefined ? q.options[userPick] : 'উত্তর দেওয়া হয়নি',
                    correctChoice: q.options[q.correctAnswer],
                    explanationBn: q.explanationBn,
                });

                // Track weakness
                weaknessMap[q.subCategory] = (weaknessMap[q.subCategory] || 0) + 1;
            }
        });

        // Determine Grade
        const percent = Math.round((correctCount / EXAM_100_QUESTIONS.length) * 100);
        let calculatedGrade = 'C';
        if (percent >= 90) calculatedGrade = 'A+ (Elite Master)';
        else if (percent >= 80) calculatedGrade = 'A (Fluent Practitioner)';
        else if (percent >= 70) calculatedGrade = 'B+ (Competent)';
        else if (percent >= 60) calculatedGrade = 'B (Developing)';
        else calculatedGrade = 'Needs Practice';

        // Generate AI Compliments
        let complimentText = '';
        if (percent >= 90) {
            complimentText = `অসাধারণ ও অবিশ্বাস্য পারফরম্যান্স! আপনি ১০০ নম্বরের কঠিন পরীক্ষায় ${percent}% মার্কস পেয়ে টপ মাস্টার ক্যাটাগরিতে স্থান পেয়েছেন। Tenses এবং Modals-এর বাস্তব প্রয়োগে আপনার দখল অত্যন্ত প্রশংসনীয়!`;
        } else if (percent >= 80) {
            complimentText = `চমৎকার ফলাফল! আপনার ইংরেজি ব্যাকরণের ভিত্তি বেশ সুদৃঢ়। বিশেষ করে ${tensesCorrect >= 40 ? 'টেন্সের বাক্য রূপান্তর' : 'মোডাল ব্যবহারের সূক্ষ্ম প্রয়োগ'}-এ আপনি দুর্দান্ত দক্ষতা দেখিয়েছেন। অল্প কিছু ভুলের সংশোধন করলেই আপনি ১০০% পারফেক্ট হতে পারবেন!`;
        } else if (percent >= 65) {
            complimentText = `খুবই ভালো চেষ্টা! আপনার মধ্যে সাবলীল ইংরেজি বলার মতো পর্যাপ্ত সম্ভাবনা রয়েছে। বেশিরভাগ মৌলিক প্রশ্নের উত্তর আপনি নিখুঁতভাবে দিয়েছেন। শুধু কিছু জটিল পারফেক্ট মোডাল ও অতীতের বাক্য গঠনে একটু সচেতন হলে আপনি ৮০+ স্কোর করতে পারবেন।`;
        } else {
            complimentText = `পরীক্ষাটি সম্পন্ন করায় আপনাকে সাধুবাদ জানাই! আপনি ইতোমধ্যে বেশ কিছু গুরুত্বপূর্ণ রুল আয়ত্ত করেছেন। নিচে প্রদর্শিত ভুলগুলো ও ব্যাখ্যাগুলো ভালো করে রিভিশন দিলে খুব শীঘ্রই আপনার আত্মবিশ্বাস দ্বিগুণ হয়ে যাবে!`;
        }

        // Top weaknesses
        const sortedWeaknesses = Object.entries(weaknessMap)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5)
            .map(([topic, count]) => `${topic} (${count}টি ভুল)`);

        const payload = {
            studentName: studentName.trim() || 'Learner',
            score: correctCount,
            total: 100,
            percentage: percent,
            grade: calculatedGrade,
            timeTakenSeconds: duration,
            tensesScore: tensesCorrect,
            modalsScore: modalsCorrect,
            compliment: complimentText,
            weaknesses: sortedWeaknesses,
            mistakes: mistakesList,
        };

        setSubmissionResult(payload);

        // Send to backend API so teacher/admin can view it
        try {
            await fetch('/api/exam-submissions', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });
        } catch (err) {
            console.error('Failed to save submission to server:', err);
        }

        setIsSubmitting(false);
        setStage('result');
    };

    return (
        <div className="min-h-screen bg-[#f8fafc] font-sans pb-28 text-slate-800">
            {/* Top Header */}
            <header className="border-b border-slate-800 bg-slate-950 px-5 py-3.5 text-white sticky top-0 z-40">
                <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <Link
                            href="/dashboard/spoken-english"
                            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition"
                        >
                            <ArrowLeft size={18} />
                        </Link>
                        <div>
                            <div className="flex items-center gap-2">
                                <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 bg-amber-950/80 px-2 py-0.5 rounded border border-amber-800/60">
                                    স্পোকেন ১০০ মার্কস মেগা টেস্ট
                                </span>
                                <span className="text-xs text-slate-400 hidden sm:inline">LearnCare Academy</span>
                            </div>
                            <h1 className="text-sm sm:text-base font-black text-white flex items-center gap-2 mt-0.5">
                                <Trophy className="text-amber-400" size={17} /> ১০০টি Tenses ও Modal Verbs অনলাইন ডায়াগনস্টিক টেস্ট
                            </h1>
                        </div>
                    </div>

                    {stage === 'exam' && (
                        <div className="flex items-center gap-3">
                            {/* Live Timer */}
                            <div
                                className={`flex items-center gap-2 px-3 py-1.5 rounded-xl font-mono text-sm font-black border transition ${
                                    timeLeft < 300
                                        ? 'bg-rose-500/20 text-rose-300 border-rose-500/50 animate-pulse'
                                        : timeLeft < 600
                                        ? 'bg-amber-500/20 text-amber-300 border-amber-500/50'
                                        : 'bg-slate-800 text-teal-300 border-slate-700'
                                }`}
                            >
                                <Clock size={16} />
                                <span>{formatTime(timeLeft)}</span>
                            </div>

                            {/* Submit Button */}
                            <button
                                onClick={handleSubmitExam}
                                disabled={isSubmitting}
                                className="bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs px-4 py-2 rounded-xl transition shadow-md shadow-emerald-900/40 flex items-center gap-1.5 cursor-pointer"
                            >
                                <Send size={13} />
                                <span>{isSubmitting ? 'মূল্যায়ন হচ্ছে...' : 'সাবমিট করুন'}</span>
                            </button>
                        </div>
                    )}
                </div>
            </header>

            {/* STAGE 1: INTRO SCREEN */}
            {stage === 'intro' && (
                <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-12 space-y-8">
                    <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 border-2 border-indigo-500/30 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

                        <div className="relative z-10 space-y-6">
                            <div className="flex flex-wrap items-center gap-2">
                                <span className="bg-amber-400/20 text-amber-300 border border-amber-400/30 px-3 py-1 rounded-full text-xs font-bold">
                                    ⏱️ ৩০ মিনিট সময়সীমা
                                </span>
                                <span className="bg-emerald-400/20 text-emerald-300 border border-emerald-400/30 px-3 py-1 rounded-full text-xs font-bold">
                                    🎯 মোট ১০০টি সংক্ষিপ্ত প্রশ্ন
                                </span>
                                <span className="bg-cyan-400/20 text-cyan-300 border border-cyan-400/30 px-3 py-1 rounded-full text-xs font-bold">
                                    🤖 এআই মূল্যায়ন ও দুর্বলতা বিশ্লেষণ
                                </span>
                            </div>

                            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                                ১০০ মার্কসের আল্টিমেট স্পোকেন ইংলিশ টেস্ট
                            </h2>

                            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                                এই পরীক্ষায় <strong>৯টি টেন্স</strong> (Present, Past, Future: Simple, Continuous, Perfect) এবং 
                                <strong> Had better ও Would rather বাদ দিয়ে বাকি সকল গুরুত্বপূর্ণ মোডাল ভার্বস</strong>-এর বাস্তব প্রয়োগ পরীক্ষা করা হবে।
                                বাক্যগুলো বাস্তব জীবনের মতো সংক্ষিপ্ত ও সাবলীল।
                            </p>

                            {/* Features Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs">
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                                    <p className="font-bold text-amber-300">১. ৫০টি Tenses প্রশ্ন</p>
                                    <p className="text-slate-400 mt-1">Present, Past ও Future-এর ৯টি রূপের ব্যবহারিক প্রশ্ন।</p>
                                </div>
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                                    <p className="font-bold text-teal-300">২. ৫০টি Modals প্রশ্ন</p>
                                    <p className="text-slate-400 mt-1">Can, Could, May, Should, Must, Used to, Be supposed to ইত্যাদি।</p>
                                </div>
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                                    <p className="font-bold text-cyan-300">৩. এআই মার্কস ও ফিডব্যাক</p>
                                    <p className="text-slate-400 mt-1">সাবমিট করলেই সঠিক উত্তর, ভুল ব্যাখ্যা ও দুর্বলতা চার্ট।</p>
                                </div>
                            </div>

                            {/* Name Input & Start Button */}
                            <div className="pt-4 space-y-4 max-w-md">
                                <div>
                                    <label className="block text-xs font-bold text-slate-300 mb-1.5">
                                        আপনার নাম লিখুন (রেজাল্ট শিটে দেখাবে):
                                    </label>
                                    <input
                                        type="text"
                                        value={studentName}
                                        onChange={(e) => setStudentName(e.target.value)}
                                        placeholder="আপনার নাম (যেমন: তানভীর আহমেদ)"
                                        className="w-full bg-slate-800/90 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    />
                                </div>

                                <button
                                    onClick={handleStartExam}
                                    className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-black text-base py-4 rounded-2xl shadow-xl shadow-emerald-900/40 transition-all hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer"
                                >
                                    <span>পরীক্ষা শুরু করুন (Start 30-Min Test)</span>
                                    <ArrowRight size={18} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* STAGE 2: ACTIVE EXAM SCREEN */}
            {stage === 'exam' && (
                <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-6 space-y-6">
                    {/* Top Progress Bar & Filter Pills */}
                    <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="w-full sm:w-1/2 space-y-1.5">
                            <div className="flex justify-between text-xs font-bold text-slate-600">
                                <span>উত্তর সম্পন্ন: {answeredCount} / ১০০ ({progressPercent}%)</span>
                                <span className="text-indigo-600">প্রশ্ন নং #{currentIndex + 1}</span>
                            </div>
                            <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-gradient-to-r from-indigo-500 to-teal-500 transition-all duration-300"
                                    style={{ width: `${progressPercent}%` }}
                                />
                            </div>
                        </div>

                        {/* Category Jumpers */}
                        <div className="flex flex-wrap items-center gap-1.5 text-xs font-bold">
                            <button
                                onClick={() => setCategoryFilter('all')}
                                className={`px-2.5 py-1 rounded-lg transition ${
                                    categoryFilter === 'all'
                                        ? 'bg-slate-900 text-white'
                                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                }`}
                            >
                                All (১০০)
                            </button>
                            <button
                                onClick={() => setCategoryFilter('tenses')}
                                className={`px-2.5 py-1 rounded-lg transition ${
                                    categoryFilter === 'tenses'
                                        ? 'bg-indigo-600 text-white'
                                        : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100'
                                }`}
                            >
                                Tenses (৫০)
                            </button>
                            <button
                                onClick={() => setCategoryFilter('modals')}
                                className={`px-2.5 py-1 rounded-lg transition ${
                                    categoryFilter === 'modals'
                                        ? 'bg-teal-600 text-white'
                                        : 'bg-teal-50 text-teal-700 hover:bg-teal-100'
                                }`}
                            >
                                Modals (৫০)
                            </button>
                            <button
                                onClick={() => setCategoryFilter('unanswered')}
                                className={`px-2.5 py-1 rounded-lg transition ${
                                    categoryFilter === 'unanswered'
                                        ? 'bg-rose-600 text-white'
                                        : 'bg-rose-50 text-rose-700 hover:bg-rose-100'
                                }`}
                            >
                                বাকি আছে ({100 - answeredCount})
                            </button>
                        </div>
                    </div>

                    {/* Main Question Card */}
                    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md space-y-6">
                        {/* Question Badges */}
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4">
                            <div className="flex items-center gap-2">
                                <span className="bg-slate-900 text-white font-mono text-xs font-black px-2.5 py-1 rounded-lg">
                                    Q{currentQuestion.id} / 100
                                </span>
                                <span
                                    className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${
                                        currentQuestion.category === 'tenses'
                                            ? 'bg-indigo-50 text-indigo-700 border-indigo-200'
                                            : 'bg-teal-50 text-teal-700 border-teal-200'
                                    }`}
                                >
                                    {currentQuestion.subCategory}
                                </span>
                                <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                                    {currentQuestion.patternBn}
                                </span>
                            </div>

                            <span className="text-xs font-bold text-slate-400">১ মার্ক</span>
                        </div>

                        {/* Question Prompt */}
                        <div className="space-y-2">
                            {currentQuestion.promptBn && (
                                <p className="text-xs sm:text-sm font-bold text-slate-500">
                                    💡 বাংলা ইঙ্গিত / প্রসঙ্গ: <span className="text-slate-800">{currentQuestion.promptBn}</span>
                                </p>
                            )}
                            <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-snug">
                                {currentQuestion.sentence}
                            </h3>
                        </div>

                        {/* Options Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                            {currentQuestion.options.map((option, optIdx) => {
                                const isSelected = userAnswers[currentQuestion.id] === optIdx;
                                return (
                                    <button
                                        key={optIdx}
                                        onClick={() => handleSelectOption(currentQuestion.id, optIdx)}
                                        className={`p-4 rounded-2xl border-2 text-left transition-all flex items-center justify-between cursor-pointer ${
                                            isSelected
                                                ? 'border-indigo-600 bg-indigo-50/70 text-indigo-950 font-black shadow-sm ring-2 ring-indigo-500/20'
                                                : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold'
                                        }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <span
                                                className={`h-7 w-7 rounded-lg flex items-center justify-center font-bold text-xs ${
                                                    isSelected
                                                        ? 'bg-indigo-600 text-white'
                                                        : 'bg-slate-100 text-slate-600'
                                                }`}
                                            >
                                                {String.fromCharCode(65 + optIdx)}
                                            </span>
                                            <span className="text-sm">{option}</span>
                                        </div>
                                        {isSelected && (
                                            <CheckCircle2 size={18} className="text-indigo-600 flex-shrink-0" />
                                        )}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Navigation Footer */}
                        <div className="pt-6 border-t border-slate-100 flex items-center justify-between gap-3">
                            <button
                                onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
                                disabled={currentIndex === 0}
                                className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-bold transition flex items-center gap-1.5 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                            >
                                <ChevronLeft size={16} /> পূর্ববর্তী প্রশ্ন
                            </button>

                            <div className="text-xs font-bold text-slate-500">
                                {userAnswers[currentQuestion.id] !== undefined ? (
                                    <span className="text-emerald-600 font-black">✓ উত্তর রেকর্ড করা হয়েছে</span>
                                ) : (
                                    <span className="text-amber-600">বাকি আছে</span>
                                )}
                            </div>

                            <button
                                onClick={() => setCurrentIndex((prev) => Math.min(EXAM_100_QUESTIONS.length - 1, prev + 1))}
                                disabled={currentIndex === EXAM_100_QUESTIONS.length - 1}
                                className="px-4 py-2.5 rounded-xl bg-slate-900 text-white hover:bg-slate-800 text-xs font-bold transition flex items-center gap-1.5 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                            >
                                পরবর্তী প্রশ্ন <ChevronRight size={16} />
                            </button>
                        </div>
                    </div>

                    {/* Question Palette / Matrix Drawer (1 - 100) */}
                    <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-3">
                        <div className="flex items-center justify-between">
                            <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                                <Bookmark size={14} className="text-indigo-600" /> প্রশ্ন প্যানেল (১ - ১০০) — সরাসরি লাফ দিতে ক্লিক করুন
                            </h4>
                            <span className="text-xs text-slate-500 font-bold">
                                {answeredCount} টি উত্তর দেওয়া হয়েছে
                            </span>
                        </div>

                        <div className="grid grid-cols-10 sm:grid-cols-20 gap-1.5 pt-1">
                            {EXAM_100_QUESTIONS.map((q, idx) => {
                                const isAns = userAnswers[q.id] !== undefined;
                                const isCur = idx === currentIndex;
                                return (
                                    <button
                                        key={q.id}
                                        onClick={() => setCurrentIndex(idx)}
                                        className={`h-7 rounded-md text-[11px] font-bold transition flex items-center justify-center cursor-pointer ${
                                            isCur
                                                ? 'ring-2 ring-indigo-600 bg-indigo-600 text-white'
                                                : isAns
                                                ? 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'
                                                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                        }`}
                                        title={`প্রশ্ন ${q.id}: ${q.subCategory}`}
                                    >
                                        {q.id}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}

            {/* STAGE 3: RESULT & EVALUATION SCREEN */}
            {stage === 'result' && submissionResult && (
                <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 space-y-8">
                    {/* Header Score Card */}
                    <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 border-2 border-indigo-400/30 shadow-2xl space-y-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-indigo-800/60 pb-8">
                            <div>
                                <span className="bg-amber-400/20 text-amber-300 border border-amber-400/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                    🏆 ডায়াগনস্টিক পরীক্ষার চূড়ান্ত ফলাফল
                                </span>
                                <h2 className="text-2xl sm:text-3xl font-black text-white mt-2">
                                    {submissionResult.studentName}-এর ফলাফল শিট
                                </h2>
                                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                                    সময় লেগেছে: {Math.floor(submissionResult.timeTakenSeconds / 60)} মিনিট {submissionResult.timeTakenSeconds % 60} সেকেন্ড
                                </p>
                            </div>

                            {/* Big Score Dial */}
                            <div className="flex items-center gap-4 bg-white/10 border border-white/15 px-6 py-4 rounded-3xl backdrop-blur-md">
                                <div className="text-center">
                                    <p className="text-3xl sm:text-5xl font-black text-amber-400">
                                        {submissionResult.score} <span className="text-xl sm:text-2xl text-slate-300 font-normal">/ ১০০</span>
                                    </p>
                                    <p className="text-[11px] font-bold text-slate-300 mt-1">
                                        গ্রেড: {submissionResult.grade}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Breakdown Pills */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                                <p className="text-slate-400 font-bold">টেন্স স্কোর (৫০-এ)</p>
                                <p className="text-xl font-black text-emerald-400 mt-0.5">{submissionResult.tensesScore} / ৫০</p>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                                <p className="text-slate-400 font-bold">মোডাল স্কোর (৫০-এ)</p>
                                <p className="text-xl font-black text-teal-400 mt-0.5">{submissionResult.modalsScore} / ৫০</p>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                                <p className="text-slate-400 font-bold">সঠিক উত্তর</p>
                                <p className="text-xl font-black text-emerald-400 mt-0.5">{submissionResult.score} টি</p>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                                <p className="text-slate-400 font-bold">ভুল উত্তর</p>
                                <p className="text-xl font-black text-rose-400 mt-0.5">{submissionResult.mistakes.length} টি</p>
                            </div>
                        </div>

                        {/* AI Compliment Box */}
                        <div className="bg-white/10 border border-amber-400/30 rounded-2xl p-6">
                            <h4 className="text-sm font-black text-amber-300 flex items-center gap-2 mb-2">
                                <Sparkles size={16} /> শিক্ষকের প্রশংসা ও পর্যবেক্ষণ (AI Compliment):
                            </h4>
                            <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
                                {submissionResult.compliment}
                            </p>
                        </div>

                        {/* Weakness Analysis */}
                        {submissionResult.weaknesses.length > 0 && (
                            <div className="bg-rose-500/10 border border-rose-400/30 rounded-2xl p-6">
                                <h4 className="text-sm font-black text-rose-300 flex items-center gap-2 mb-2">
                                    <AlertCircle size={16} /> আপনার যে জায়গাগুলোতে দুর্বলতা দেখা গেছে (Weakness Map):
                                </h4>
                                <div className="flex flex-wrap gap-2 mt-3">
                                    {submissionResult.weaknesses.map((w: string, idx: number) => (
                                        <span key={idx} className="bg-rose-950/80 text-rose-200 border border-rose-800 px-3 py-1 rounded-xl text-xs font-bold">
                                            ⚠️ {w}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Action Buttons */}
                        <div className="pt-2 flex flex-wrap gap-3">
                            <button
                                onClick={() => window.print()}
                                className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 transition flex items-center gap-2 cursor-pointer"
                            >
                                <Printer size={15} /> রেজাল্ট শিট প্রিন্ট / সেভ করুন
                            </button>
                            <button
                                onClick={handleStartExam}
                                className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition shadow-md flex items-center gap-2 cursor-pointer"
                            >
                                <RefreshCw size={15} /> পুনরায় পরীক্ষা দিন (Retake)
                            </button>
                            <Link
                                href="/dashboard/spoken-english"
                                className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-bold text-xs transition flex items-center gap-2"
                            >
                                স্পোকেন হাবে ফিরে যান →
                            </Link>
                        </div>
                    </div>

                    {/* Detailed Mistakes & Explanations Review */}
                    <div className="space-y-4">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                            <div>
                                <h3 className="text-xl font-black text-slate-900">
                                    📝 প্রশ্নোত্তরের চুলচেরা পর্যালোচনা ও ব্যাকরণিক ব্যাখ্যা
                                </h3>
                                <p className="text-xs text-slate-500 mt-0.5">
                                    প্রতিটি ভুলের কারণ ও সঠিক নিয়ম বাংলায় পড়ে নিন।
                                </p>
                            </div>

                            <div className="flex rounded-xl bg-slate-200 p-0.5 text-xs font-bold">
                                <button
                                    onClick={() => setReviewFilter('mistakes')}
                                    className={`px-3 py-1.5 rounded-lg transition ${
                                        reviewFilter === 'mistakes'
                                            ? 'bg-white text-slate-900 shadow-xs'
                                            : 'text-slate-600 hover:text-slate-900'
                                    }`}
                                >
                                    শুধু ভুলগুলো ({submissionResult.mistakes.length})
                                </button>
                                <button
                                    onClick={() => setReviewFilter('all')}
                                    className={`px-3 py-1.5 rounded-lg transition ${
                                        reviewFilter === 'all'
                                            ? 'bg-white text-slate-900 shadow-xs'
                                            : 'text-slate-600 hover:text-slate-900'
                                    }`}
                                >
                                    সকল ১০০টি প্রশ্ন
                                </button>
                            </div>
                        </div>

                        {/* List of Questions / Mistakes */}
                        <div className="space-y-3">
                            {reviewFilter === 'mistakes' ? (
                                submissionResult.mistakes.length === 0 ? (
                                    <div className="bg-white rounded-2xl p-8 text-center border border-emerald-200 text-emerald-800 font-bold">
                                        🎉 অবিশ্বাস্য! আপনার একটি ভুলও হয়নি। পূর্ণ ১০০ মার্কস!
                                    </div>
                                ) : (
                                    submissionResult.mistakes.map((m: any, idx: number) => (
                                        <div key={idx} className="bg-white rounded-2xl p-6 border-2 border-rose-200 shadow-sm space-y-3">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <span className="bg-rose-100 text-rose-800 text-xs font-black px-2.5 py-0.5 rounded-lg">
                                                        প্রশ্ন #{m.questionId}
                                                    </span>
                                                    <span className="text-xs font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                                                        {m.subCategory}
                                                    </span>
                                                    <span className="text-xs text-slate-400">
                                                        ({m.patternBn})
                                                    </span>
                                                </div>
                                                <span className="text-xs font-bold text-rose-600 flex items-center gap-1">
                                                    <XCircle size={15} /> ভুল উত্তর
                                                </span>
                                            </div>

                                            {m.promptBn && (
                                                <p className="text-xs text-slate-500 font-semibold">
                                                    বাংলা ইঙ্গিত: {m.promptBn}
                                                </p>
                                            )}

                                            <h4 className="text-base font-black text-slate-900">
                                                {m.sentence}
                                            </h4>

                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
                                                <div className="p-3 rounded-xl bg-rose-50 border border-rose-200">
                                                    <p className="font-bold text-rose-800">আপনার দেওয়া উত্তর: ❌</p>
                                                    <p className="text-sm font-bold text-rose-950 mt-1">{m.userChoice}</p>
                                                </div>

                                                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200">
                                                    <p className="font-bold text-emerald-800">সঠিক উত্তর: ✔️</p>
                                                    <p className="text-sm font-bold text-emerald-950 mt-1">{m.correctChoice}</p>
                                                </div>
                                            </div>

                                            {/* Explanation */}
                                            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs leading-relaxed text-slate-700">
                                                <span className="font-bold text-slate-900">💡 কেন এই উত্তরটি সঠিক:</span> {m.explanationBn}
                                            </div>
                                        </div>
                                    ))
                                )
                            ) : (
                                EXAM_100_QUESTIONS.map((q) => {
                                    const userPick = userAnswers[q.id];
                                    const isCorrect = userPick === q.correctAnswer;
                                    return (
                                        <div
                                            key={q.id}
                                            className={`bg-white rounded-2xl p-6 border shadow-sm space-y-3 ${
                                                isCorrect ? 'border-emerald-200' : 'border-rose-200'
                                            }`}
                                        >
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <span className={`text-xs font-black px-2.5 py-0.5 rounded-lg ${
                                                        isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                                                    }`}>
                                                        প্রশ্ন #{q.id}
                                                    </span>
                                                    <span className="text-xs font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                                                        {q.subCategory}
                                                    </span>
                                                </div>
                                                <span className={`text-xs font-bold flex items-center gap-1 ${
                                                    isCorrect ? 'text-emerald-600' : 'text-rose-600'
                                                }`}>
                                                    {isCorrect ? <CheckCircle2 size={15} /> : <XCircle size={15} />}
                                                    {isCorrect ? 'সঠিক উত্তর (+১)' : 'ভুল উত্তর (০)'}
                                                </span>
                                            </div>

                                            <h4 className="text-base font-black text-slate-900">
                                                {q.sentence}
                                            </h4>

                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
                                                <div className={`p-3 rounded-xl border ${
                                                    isCorrect ? 'bg-emerald-50 border-emerald-200' : 'bg-rose-50 border-rose-200'
                                                }`}>
                                                    <p className={`font-bold ${isCorrect ? 'text-emerald-800' : 'text-rose-800'}`}>
                                                        আপনার উত্তর: {isCorrect ? '✔️' : '❌'}
                                                    </p>
                                                    <p className="text-sm font-bold mt-1">
                                                        {userPick !== undefined ? q.options[userPick] : 'উত্তর দেওয়া হয়নি'}
                                                    </p>
                                                </div>

                                                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200">
                                                    <p className="font-bold text-emerald-800">সঠিক উত্তর: ✔️</p>
                                                    <p className="text-sm font-bold text-emerald-950 mt-1">{q.options[q.correctAnswer]}</p>
                                                </div>
                                            </div>

                                            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs leading-relaxed text-slate-700">
                                                <span className="font-bold text-slate-900">💡 ব্যাখ্যা:</span> {q.explanationBn}
                                            </div>
                                        </div>
                                    );
                                })
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
