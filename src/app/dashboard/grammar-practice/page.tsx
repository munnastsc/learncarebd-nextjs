'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, XCircle, RotateCcw, Trophy } from 'lucide-react';

import { QUESTIONS, type Question, type Difficulty } from '../../../lib/grammarQuestions';

const DIFFICULTY_META: Record<Difficulty, { label: string; textColor: string; bgColor: string }> = {
    easy:   { label: 'Easy',   textColor: 'text-emerald-700', bgColor: 'bg-emerald-100' },
    medium: { label: 'Medium', textColor: 'text-amber-700',   bgColor: 'bg-amber-100'   },
    hard:   { label: 'Hard',   textColor: 'text-rose-700',    bgColor: 'bg-rose-100'    },
};

const ALL_TOPICS = ['All', ...Array.from(new Set(QUESTIONS.map(q => q.topic)))];

export default function GrammarPracticePage() {
    const [difficulty, setDifficulty] = useState<Difficulty | 'all'>('easy');
    const [topic, setTopic] = useState('All');
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [revealed, setRevealed] = useState<Record<string, boolean>>({});
    const [quizMode, setQuizMode] = useState(false);
    const [quizQs, setQuizQs] = useState<Question[]>([]);
    const [quizIdx, setQuizIdx] = useState(0);
    const [quizScore, setQuizScore] = useState(0);
    const [quizPicked, setQuizPicked] = useState<string | null>(null);
    const [quizDone, setQuizDone] = useState(false);

    const filtered = useMemo(() => {
        let q = QUESTIONS;
        if (difficulty !== 'all') q = q.filter(x => x.difficulty === difficulty);
        if (topic !== 'All') q = q.filter(x => x.topic === topic);
        return q;
    }, [difficulty, topic]);

    const correctCount = Object.entries(answers).filter(([id, ans]) => QUESTIONS.find(q => q.id === id)?.answer === ans).length;

    function startQuiz() {
        const pool = difficulty === 'all' ? QUESTIONS : QUESTIONS.filter(x => x.difficulty === difficulty);
        const shuffled = [...pool].sort(() => Math.random() - 0.5).slice(0, 1000);
        setQuizQs(shuffled);
        setQuizIdx(0);
        setQuizScore(0);
        setQuizPicked(null);
        setQuizDone(false);
        setQuizMode(true);
    }

    function pickQuiz(opt: string) {
        if (quizPicked !== null) return;
        setQuizPicked(opt);
        if (opt === quizQs[quizIdx].answer) setQuizScore(s => s + 1);
    }

    function nextQuiz() {
        if (quizIdx + 1 >= quizQs.length) { setQuizDone(true); return; }
        setQuizIdx(i => i + 1);
        setQuizPicked(null);
    }

    if (quizMode) {
        if (quizDone) {
            const percentage = (quizScore / quizQs.length) * 100;
            return (
                <div className="min-h-screen bg-slate-50 flex items-center justify-center px-5">
                    <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center max-w-md w-full shadow-lg">
                        <Trophy size={48} className="mx-auto text-amber-500 mb-4" />
                        <h2 className="text-2xl font-black text-slate-900">Quiz শেষ!</h2>
                        <p className="text-5xl font-black text-indigo-600 my-4">{quizScore}/{quizQs.length}</p>
                        <p className="text-sm text-slate-600 mb-6">
                            {percentage >= 80 ? '🎉 দারুণ! Grammar শক্ত হচ্ছে!' : percentage >= 60 ? '👍 ভালো! আরো practice করো।' : '📚 আরো practice দরকার।'}
                        </p>
                        <div className="flex gap-3 justify-center flex-wrap">
                            <button onClick={startQuiz} className="rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-bold text-white">আবার Quiz</button>
                            <button onClick={() => setQuizMode(false)} className="rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-bold text-slate-700">Practice Mode</button>
                        </div>
                    </div>
                </div>
            );
        }

        const q = quizQs[quizIdx];
        const meta = DIFFICULTY_META[q.difficulty];
        return (
            <div className="min-h-screen bg-slate-50 px-5 py-8">
                <div className="mx-auto max-w-xl">
                    <div className="mb-4 flex items-center justify-between">
                        <button onClick={() => setQuizMode(false)} className="text-sm text-slate-500">← Exit</button>
                        <span className="text-sm font-bold text-slate-700">{quizIdx + 1} / {quizQs.length}</span>
                        <span className="text-sm font-bold text-indigo-600">✓ {quizScore}</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-100 mb-6 overflow-hidden">
                        <div className="h-full rounded-full bg-indigo-500 transition-all" style={{ width: `${((quizIdx + 1) / quizQs.length) * 100}%` }} />
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                        <div className="flex items-center gap-2 mb-4">
                            <span className={`text-[11px] font-bold uppercase px-2 py-0.5 rounded-full ${meta.bgColor} ${meta.textColor}`}>{q.topic}</span>
                        </div>
                        <p className="text-lg font-semibold text-slate-900 leading-relaxed mb-5">{q.sentence}</p>
                        <div className="grid gap-2">
                            {q.options.map(opt => {
                                let cls = 'rounded-xl border-2 px-4 py-3 text-sm font-semibold text-left transition-all ';
                                if (quizPicked === null) {
                                    cls += 'border-slate-200 hover:border-indigo-400 hover:bg-indigo-50 text-slate-700 cursor-pointer';
                                } else if (opt === q.answer) {
                                    cls += 'border-emerald-500 bg-emerald-50 text-emerald-800';
                                } else if (opt === quizPicked) {
                                    cls += 'border-rose-400 bg-rose-50 text-rose-700';
                                } else {
                                    cls += 'border-slate-100 text-slate-400';
                                }
                                return <button key={opt} className={cls} onClick={() => pickQuiz(opt)}>{opt}</button>;
                            })}
                        </div>
                        {quizPicked && (
                            <div className={`mt-4 rounded-xl p-3 ${quizPicked === q.answer ? 'bg-emerald-50 border border-emerald-200' : 'bg-rose-50 border border-rose-200'}`}>
                                <p className="text-sm font-bold mb-1">{quizPicked === q.answer ? '✓ সঠিক!' : `✗ সঠিক: "${q.answer}"`}</p>
                                <p className="text-xs text-slate-700">{q.explanation}</p>
                                <p className="text-xs text-indigo-700 font-semibold mt-1">📌 {q.banglaRule}</p>
                            </div>
                        )}
                        {quizPicked && (
                            <button onClick={nextQuiz} className="mt-4 w-full rounded-xl bg-indigo-600 py-2.5 text-sm font-bold text-white">
                                {quizIdx + 1 >= quizQs.length ? 'Result দেখো' : 'পরের প্রশ্ন →'}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 px-5 py-8">
            <div className="mx-auto max-w-3xl">
                <Link href="/dashboard" className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-slate-700 mb-5">
                    <ArrowLeft size={16} /> Back
                </Link>
                <div className="flex flex-wrap items-end justify-between gap-3 mb-6">
                    <div>
                        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-violet-700">Grammar Practice</p>
                        <h1 className="mt-1 text-3xl font-black text-slate-900">ব্যাকরণ অনুশীলন</h1>
                        <p className="mt-1 text-sm text-slate-500">Easy → Hard। প্রতিটি উত্তরে বাংলায় rule।</p>
                    </div>
                    <button onClick={startQuiz} className="rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-indigo-200">
                        🎯 Quiz Mode (1000Q)
                    </button>
                </div>

                {/* Filters */}
                <div className="mb-5 space-y-2">
                    <div className="flex flex-wrap gap-2">
                        {(['all', 'easy', 'medium', 'hard'] as const).map(d => (
                            <button key={d} onClick={() => setDifficulty(d)}
                                className={`rounded-full px-3 py-1 text-sm font-bold transition ${difficulty === d ? 'bg-indigo-600 text-white' : 'bg-white border border-slate-200 text-slate-600 hover:border-indigo-300'}`}>
                                {d === 'all' ? 'All Levels' : DIFFICULTY_META[d].label}
                            </button>
                        ))}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                        {ALL_TOPICS.map(t => (
                            <button key={t} onClick={() => setTopic(t)}
                                className={`rounded-full px-2.5 py-0.5 text-xs font-bold transition ${topic === t ? 'bg-violet-600 text-white' : 'bg-white border border-slate-200 text-slate-600 hover:border-violet-300'}`}>
                                {t}
                            </button>
                        ))}
                    </div>
                </div>

                {Object.keys(answers).length > 0 && (
                    <div className="mb-4 rounded-xl bg-indigo-50 border border-indigo-200 px-4 py-2.5 flex items-center justify-between">
                        <p className="text-sm font-bold text-indigo-800">Score: {correctCount} / {Object.keys(answers).length}</p>
                        <button onClick={() => { setAnswers({}); setRevealed({}); }} className="text-xs text-rose-600 font-bold flex items-center gap-1">
                            <RotateCcw size={11} /> Reset
                        </button>
                    </div>
                )}

                <div className="space-y-4">
                    {filtered.map((q, idx) => {
                        const picked = answers[q.id];
                        const isRevealed = revealed[q.id];
                        const isCorrect = picked === q.answer;
                        const meta = DIFFICULTY_META[q.difficulty];
                        return (
                            <div key={q.id} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs font-black text-slate-400">{idx + 1}.</span>
                                        <span className={`text-[11px] font-bold uppercase px-2 py-0.5 rounded-full ${meta.bgColor} ${meta.textColor}`}>{meta.label}</span>
                                        <span className="text-[11px] text-slate-500">{q.topic}</span>
                                    </div>
                                    {isRevealed && (isCorrect ? <CheckCircle2 size={18} className="text-emerald-500" /> : <XCircle size={18} className="text-rose-500" />)}
                                </div>
                                <p className="text-base font-semibold text-slate-900 mb-4 leading-relaxed">{q.sentence}</p>
                                <div className="grid grid-cols-2 gap-2">
                                    {q.options.map(opt => {
                                        let cls = 'rounded-xl border-2 px-3 py-2 text-sm font-semibold text-left transition-all ';
                                        if (!isRevealed) {
                                            cls += picked === opt ? 'border-indigo-500 bg-indigo-50 text-indigo-800 cursor-pointer' : 'border-slate-200 hover:border-indigo-300 hover:bg-indigo-50 text-slate-700 cursor-pointer';
                                        } else if (opt === q.answer) {
                                            cls += 'border-emerald-500 bg-emerald-50 text-emerald-800';
                                        } else if (opt === picked && opt !== q.answer) {
                                            cls += 'border-rose-400 bg-rose-50 text-rose-700';
                                        } else {
                                            cls += 'border-slate-100 text-slate-400';
                                        }
                                        return (
                                            <button key={opt} className={cls}
                                                onClick={() => { if (!isRevealed) setAnswers(a => ({ ...a, [q.id]: opt })); }}>
                                                {opt}
                                            </button>
                                        );
                                    })}
                                </div>
                                {picked && !isRevealed && (
                                    <button onClick={() => setRevealed(r => ({ ...r, [q.id]: true }))}
                                        className="mt-3 w-full rounded-xl bg-indigo-600 py-2 text-sm font-bold text-white">
                                        Check Answer
                                    </button>
                                )}
                                {isRevealed && (
                                    <div className={`mt-3 rounded-xl p-3 ${isCorrect ? 'bg-emerald-50 border border-emerald-100' : 'bg-rose-50 border border-rose-100'}`}>
                                        <p className="text-sm font-bold mb-1">{isCorrect ? '✓ সঠিক!' : `✗ সঠিক উত্তর: "${q.answer}"`}</p>
                                        <p className="text-xs text-slate-700">{q.explanation}</p>
                                        <p className="text-xs text-indigo-700 font-semibold mt-1">📌 Rule: {q.banglaRule}</p>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
