'use client';

import { useState, useRef, useCallback } from 'react';
import Link from 'next/link';
import { ArrowLeft, BookOpen, ChevronDown, ChevronUp, Trophy } from 'lucide-react';
import { STORIES, type Story, type Vocab } from './data';

type PopupState = {
    x: number; y: number;
    word: string;
    bangla: string;
    partOfSpeech: string;
    loading: boolean;
};

const LEVEL_STYLE: Record<string, { bg: string; text: string }> = {
    emerald: { bg: 'bg-emerald-100', text: 'text-emerald-700' },
    amber:   { bg: 'bg-amber-100',   text: 'text-amber-700'   },
    rose:    { bg: 'bg-rose-100',    text: 'text-rose-700'    },
};

function StoryReader({ story, onBack }: { story: Story; onBack: () => void }) {
    const [popup, setPopup] = useState<PopupState | null>(null);
    const [qaAnswers, setQaAnswers] = useState<Record<number, string>>({});
    const [showAnswers, setShowAnswers] = useState(false);
    const [showVocab, setShowVocab] = useState(false);
    const [activeTab, setActiveTab] = useState<'grammar' | 'story' | 'quiz' | 'summary'>('grammar');
    const [expandedSentences, setExpandedSentences] = useState<Record<number, boolean>>({});

    const toggleSentence = (idx: number) => {
        setExpandedSentences(prev => ({ ...prev, [idx]: !prev[idx] }));
    };

    const correctCount = story.questions.filter((q, i) => qaAnswers[i] === q.answer).length;
    const allAnswered = Object.keys(qaAnswers).length === story.questions.length;
    const lc = LEVEL_STYLE[story.levelColor];

    function renderSentence(eng: string, idx: number) {
        const tokens = eng.split(/(\s+)/);
        const isExpanded = !!expandedSentences[idx];
        return (
            <div key={idx} className="mb-4 p-3 rounded-xl border border-slate-100 hover:bg-slate-50 transition-all cursor-pointer bg-white" onClick={() => toggleSentence(idx)}>
                <p className="leading-8 text-slate-800 text-[16px]">
                    {tokens.map((token, ti) => {
                        const clean = token.toLowerCase().replace(/[^a-z'-]/g, '');
                        const vocabItem = story.vocabulary.find(v => v.word.toLowerCase() === clean);
                        if (vocabItem) {
                            return (
                                <span key={ti}
                                    className="font-bold text-indigo-700 underline decoration-indigo-400 decoration-dotted hover:text-indigo-900 cursor-help px-0.5"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        const rect = (e.target as HTMLElement).getBoundingClientRect();
                                        const x = Math.min(rect.left + window.scrollX, window.innerWidth - 240);
                                        const y = rect.bottom + window.scrollY + 6;
                                        setPopup({
                                            x, y,
                                            word: vocabItem.word,
                                            bangla: vocabItem.bangla,
                                            partOfSpeech: vocabItem.partOfSpeech,
                                            loading: false
                                        });
                                    }}>
                                    {token}
                                </span>
                            );
                        }
                        return <span key={ti}>{token}</span>;
                    })}
                </p>
                {isExpanded && (
                    <p className="text-[14px] text-emerald-700 font-bold mt-2 pl-3 border-l-2 border-emerald-500 leading-relaxed">
                        {story.sentences[idx].bng}
                    </p>
                )}
            </div>
        );
    }

    return (
        <div className="mx-auto max-w-3xl" onClick={() => setPopup(null)}>
            <button onClick={onBack} className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-slate-700 mb-5">
                <ArrowLeft size={16} /> All Stories
            </button>

            {/* Header card */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 mb-5 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                    <span className={`text-[11px] font-bold uppercase px-2.5 py-1 rounded-full ${lc.bg} ${lc.text}`}>{story.level}</span>
                    <span className="text-[11px] text-slate-500">{story.topic}</span>
                </div>
                <h1 className="text-2xl font-black text-slate-900">{story.title}</h1>
                <p className="text-sm text-slate-500 mt-1">{story.subtitle}</p>

                <div className="mt-4 rounded-xl bg-indigo-50 border border-indigo-100 p-4">
                    <p className="text-xs font-black text-indigo-800 uppercase tracking-wide mb-2">📚 এই story থেকে যা শিখবে:</p>
                    <ul className="space-y-1.5">
                        {story.learningObjectives.map((obj, i) => (
                            <li key={i} className="text-xs text-indigo-700 flex items-start gap-1.5">
                                <span className="text-indigo-400 mt-0.5 flex-shrink-0">→</span> {obj}
                            </li>
                        ))}
                    </ul>
                    <div className="mt-3 flex flex-wrap gap-1">
                        {story.grammarFocus.map(g => (
                            <span key={g} className="bg-indigo-100 text-indigo-700 text-[10px] font-bold px-2 py-0.5 rounded-full">{g}</span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Progressive Learning Tabs */}
            <div className="flex border-b border-slate-200 mb-6 flex-wrap bg-white rounded-xl p-1 shadow-sm border">
                {[
                    { key: 'grammar', label: '📖 Step 1: Grammar Rules' },
                    { key: 'story', label: '📝 Step 2: Read Story' },
                    { key: 'quiz', label: '🧠 Step 3: Quiz' },
                    { key: 'summary', label: '📊 Step 4: Summary' }
                ].map(t => (
                    <button key={t.key} onClick={() => setActiveTab(t.key as any)}
                        className={`flex-1 min-w-[120px] py-2.5 text-xs font-bold text-center rounded-lg transition-all ${activeTab === t.key ? 'bg-indigo-600 text-white shadow' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'}`}>
                        {t.label}
                    </button>
                ))}
            </div>

            {/* Tab Contents */}
            {activeTab === 'grammar' && (
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm mb-5">
                    <h3 className="text-lg font-black text-slate-800 mb-3">Grammar & Structure Lesson (গল্পের মূল গঠন ও নিয়ম)</h3>
                    <div className="mb-4 rounded-xl bg-violet-50 border border-violet-100 p-4">
                        <p className="text-sm font-bold text-violet-800 mb-1">গঠন (Structure): {story.grammarTeach.structure}</p>
                        <p className="text-sm font-mono bg-white px-3 py-1.5 rounded-lg border border-slate-200 text-slate-800 font-semibold my-2">সূত্র (Formula): {story.grammarTeach.formula}</p>
                        <p className="text-xs text-slate-600 leading-relaxed">{story.grammarTeach.explanation}</p>
                    </div>
                    <div>
                        <p className="text-xs font-black text-slate-500 uppercase tracking-wider mb-2">উদাহরণসমূহ (Examples):</p>
                        <div className="space-y-2">
                            {story.grammarTeach.examples.map((ex, i) => (
                                <div key={i} className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                                    <p className="text-sm font-bold text-slate-800">{ex.eng}</p>
                                    <p className="text-xs text-indigo-700 font-semibold mt-0.5">↳ {ex.bng}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button onClick={() => setActiveTab('story')} className="mt-6 w-full rounded-xl bg-indigo-600 py-3 text-sm font-bold text-white shadow-md shadow-indigo-100">
                        গল্প পড়া শুরু করো →
                    </button>
                </div>
            )}

            {activeTab === 'story' && (
                <div>
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 mb-5 shadow-sm relative" onClick={e => e.stopPropagation()}>
                        <p className="text-xs font-black text-slate-500 uppercase tracking-wide mb-3 px-1">
                            💡 যেকোনো সেন্টেন্সে ক্লিক করুন বাংলা অনুবাদের জন্য। গুরুত্বপূর্ণ শব্দসমূহ গাঢ় নীল কালারে হাইলাইট করা আছে, ক্লিক করলে বাংলা অর্থ দেখাবে।
                        </p>
                        {story.sentences.map((s, idx) => renderSentence(s.eng, idx))}

                        {/* Word popup */}
                        {popup && (
                            <div className="fixed z-50 rounded-xl bg-slate-900 text-white shadow-xl p-3 w-52 pointer-events-none"
                                style={{ left: popup.x, top: popup.y }}>
                                <p className="font-black text-base text-indigo-300">{popup.word}</p>
                                <p className="text-sm text-emerald-300 font-bold">{popup.bangla}</p>
                                {popup.partOfSpeech && (
                                    <p className="text-[11px] text-slate-400 capitalize mt-0.5">{popup.partOfSpeech}</p>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Vocab list */}
                    <div className="rounded-2xl border border-slate-200 bg-white p-5 mb-5 shadow-sm">
                        <button className="flex items-center justify-between w-full" onClick={() => setShowVocab(v => !v)}>
                            <p className="text-sm font-black text-slate-800">📖 Key Vocabulary ({story.vocabulary.length} words)</p>
                            {showVocab ? <ChevronUp size={16} className="text-slate-400" /> : <ChevronDown size={16} className="text-slate-400" />}
                        </button>
                        {showVocab && (
                            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2">
                                {story.vocabulary.map(v => (
                                    <div key={v.word} className="rounded-lg bg-slate-50 border border-slate-100 p-2.5">
                                        <p className="text-sm font-bold text-slate-800">{v.word}</p>
                                        <p className="text-xs text-indigo-700 font-medium">{v.bangla}</p>
                                        <p className="text-[10px] text-slate-400 capitalize mt-0.5">{v.partOfSpeech}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <button onClick={() => setActiveTab('quiz')} className="w-full rounded-xl bg-indigo-600 py-3 text-sm font-bold text-white shadow-md shadow-indigo-100 mb-5">
                        কুইজ টেস্ট দাও →
                    </button>
                </div>
            )}

            {activeTab === 'quiz' && (
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm mb-5">
                    <p className="text-sm font-black text-slate-800 mb-4">🧠 Comprehension Questions</p>
                    <div className="space-y-5">
                        {story.questions.map((q, qi) => (
                            <div key={qi}>
                                <p className="text-sm font-semibold text-slate-800 mb-2">{qi + 1}. {q.q}</p>
                                <div className="grid gap-1.5">
                                    {q.options.map(opt => {
                                        let cls = 'rounded-xl border px-3 py-2 text-sm text-left font-medium transition-all ';
                                        if (!showAnswers) {
                                            cls += qaAnswers[qi] === opt
                                                ? 'border-indigo-400 bg-indigo-50 text-indigo-800 cursor-pointer'
                                                : 'border-slate-200 hover:border-indigo-300 text-slate-700 cursor-pointer';
                                        } else if (opt === q.answer) {
                                            cls += 'border-emerald-400 bg-emerald-50 text-emerald-800';
                                        } else if (qaAnswers[qi] === opt) {
                                            cls += 'border-rose-400 bg-rose-50 text-rose-700';
                                        } else {
                                            cls += 'border-slate-100 text-slate-400';
                                        }
                                        return (
                                            <button key={opt} className={cls}
                                                onClick={() => { if (!showAnswers) setQaAnswers(a => ({ ...a, [qi]: opt })); }}>
                                                {opt}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                    {!showAnswers && allAnswered && (
                        <button onClick={() => setShowAnswers(true)}
                            className="mt-5 w-full rounded-xl bg-indigo-600 py-2.5 text-sm font-bold text-white">
                            উত্তর দেখো
                        </button>
                    )}
                    {showAnswers && (
                        <div className="mt-4 rounded-xl bg-indigo-50 border border-indigo-200 px-4 py-3 text-center">
                            <p className="text-lg font-black text-indigo-800">Score: {correctCount}/{story.questions.length}</p>
                            <p className="text-xs text-slate-500 mt-1">
                                {correctCount === story.questions.length ? '🎉 Perfect!' :
                                 correctCount >= Math.ceil(story.questions.length * 0.75) ? '👍 ভালো! একটু আরো মনোযোগ দাও।' :
                                 '📖 Story another time.'}
                            </p>
                            <div className="flex gap-2 justify-center mt-3">
                                <button onClick={() => { setQaAnswers({}); setShowAnswers(false); }}
                                    className="text-xs font-bold text-indigo-600 underline">আবার চেষ্টা করো</button>
                                <span className="text-slate-300 text-xs">|</span>
                                <button onClick={() => setActiveTab('summary')}
                                    className="text-xs font-bold text-indigo-600 underline">সারসংক্ষেপ ও প্রয়োগ দেখাও →</button>
                            </div>
                        </div>
                    )}
                </div>
            )}

            {activeTab === 'summary' && (
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm mb-5">
                    <h3 className="text-lg font-black text-slate-800 mb-4">Summary & Real-Life Use (সারসংক্ষেপ ও প্রয়োগ)</h3>
                    <div className="mb-4">
                        <p className="text-xs font-black text-slate-400 uppercase tracking-wide mb-2">গল্পের মূল শিক্ষা (Takeaways):</p>
                        <ul className="space-y-1.5">
                            {story.summary.takeaways.map((take, i) => (
                                <li key={i} className="text-xs text-slate-700 flex items-start gap-1.5">
                                    <span className="text-indigo-500 mt-0.5">•</span> {take}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="border-t border-slate-100 pt-4">
                        <p className="text-xs font-black text-slate-400 uppercase tracking-wide mb-3">বাস্তব জীবনে ব্যবহার (Real-life Conversations):</p>
                        <div className="space-y-3">
                            {story.summary.realLifeUsage.map((usage, i) => (
                                <div key={i} className="p-3 rounded-lg bg-indigo-50 border border-indigo-100">
                                    <p className="text-xs font-bold text-indigo-900">{usage.context}</p>
                                    <p className="text-sm font-mono text-slate-800 font-bold mt-1.5 bg-white p-2 rounded border border-slate-200">
                                        {usage.example}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button onClick={onBack} className="mt-6 w-full rounded-xl bg-indigo-600 py-3 text-sm font-bold text-white shadow-md shadow-indigo-100">
                        সব গল্প তালিকায় ফিরে যাও
                    </button>
                </div>
            )}
        </div>
    );
}

export default function StoriesPage() {
    const [selected, setSelected] = useState<Story | null>(null);
    const [levelFilter, setLevelFilter] = useState('All');

    const filtered = levelFilter === 'All' ? STORIES : STORIES.filter(s => s.level === levelFilter);
    const beginnerCount = STORIES.filter(s => s.level === 'Beginner').length;
    const intermediateCount = STORIES.filter(s => s.level === 'Intermediate').length;
    const advancedCount = STORIES.filter(s => s.level === 'Advanced').length;

    if (selected) {
        return (
            <div className="min-h-screen bg-slate-50 px-5 py-8">
                <StoryReader story={selected} onBack={() => setSelected(null)} />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 px-5 py-8">
            <div className="mx-auto max-w-3xl">
                <Link href="/dashboard" className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-slate-700 mb-5">
                    <ArrowLeft size={16} /> Back
                </Link>
                <div className="mb-6">
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-violet-700">English Stories</p>
                    <h1 className="mt-1 text-3xl font-black text-slate-900">গল্পের মাধ্যমে ইংরেজি শিক্ষা</h1>
                    <p className="mt-1 text-sm text-slate-500">
                        গল্পের মূল গ্রামার স্ট্রাকচার শিখুন, প্রতিটি লাইনে ক্লিক করে বাংলা অনুবাদ দেখুন এবং প্র্যাকটিস কুইজ টেস্ট দিন।
                    </p>
                </div>

                {/* Level filter */}
                <div className="flex gap-2 mb-6 flex-wrap">
                    {[
                        { key: 'All', label: `All (${STORIES.length})` },
                        { key: 'Beginner', label: `Beginner (${beginnerCount})` },
                        { key: 'Intermediate', label: `Intermediate (${intermediateCount})` },
                        { key: 'Advanced', label: `Advanced (${advancedCount})` }
                    ].map(({ key, label }) => (
                        <button key={key} onClick={() => setLevelFilter(key)}
                            className={`rounded-full px-3 py-1 text-sm font-bold transition ${levelFilter === key ? 'bg-indigo-600 text-white' : 'bg-white border border-slate-200 text-slate-600 hover:border-indigo-300'}`}>
                            {label}
                        </button>
                    ))}
                </div>

                <div className="space-y-3">
                    {filtered.map((story, idx) => {
                        const lc = LEVEL_STYLE[story.levelColor];
                        const num = STORIES.indexOf(story) + 1;
                        return (
                            <button key={story.id} onClick={() => setSelected(story)}
                                className="w-full text-left rounded-2xl border border-slate-200 bg-white p-5 hover:border-indigo-300 hover:shadow-md transition-all shadow-sm group">
                                <div className="flex items-start justify-between gap-3">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1.5">
                                            <span className="text-xs font-black text-slate-400">#{num}</span>
                                            <span className={`text-[11px] font-bold uppercase px-2 py-0.5 rounded-full ${lc.bg} ${lc.text}`}>{story.level}</span>
                                            <span className="text-[11px] text-slate-500">{story.topic}</span>
                                        </div>
                                        <p className="text-base font-black text-slate-900 group-hover:text-indigo-700 transition-colors">{story.title}</p>
                                        <p className="text-sm text-slate-500">{story.subtitle}</p>
                                        <div className="mt-2 flex flex-wrap gap-1">
                                            {story.grammarFocus.map(g => (
                                                <span key={g} className="bg-slate-100 text-slate-600 text-[10px] font-semibold px-1.5 py-0.5 rounded">{g}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 group-hover:bg-indigo-200 transition">
                                        <BookOpen size={18} className="text-indigo-600" />
                                    </div>
                                </div>
                                <p className="mt-2 text-xs text-slate-500 flex items-center gap-3">
                                    <span>📖 {story.vocabulary.length} key words</span>
                                    <span>❓ {story.questions.length} questions</span>
                                </p>
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
