# -*- coding: utf-8 -*-
"""
Injects Stories Tab & 28-lessons Phase navigation into src/app/dashboard/spoken-english/lessons/page.tsx
"""
import os
import re

PAGE_PATH = r"E:\antigravity\ILTES\src\app\dashboard\spoken-english\lessons\page.tsx"

with open(PAGE_PATH, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Add import for LESSON_10_STORIES
if "spokenLessonStoriesData" not in content:
    content = content.replace(
        "import { LESSON_100_FILL_GAPS } from '../../../../lib/spokenLessonFillGapData';",
        "import { LESSON_100_FILL_GAPS } from '../../../../lib/spokenLessonFillGapData';\nimport { LESSON_10_STORIES, type LessonStory } from '../../../../lib/spokenLessonStoriesData';"
    )

# 2. Add extra Lucide icons if missing
icons_to_add = ["PenTool", "Edit3", "Eye", "EyeOff"]
for icon in icons_to_add:
    if icon not in content:
        content = content.replace(
            "Search, CheckCircle, XCircle",
            f"Search, CheckCircle, XCircle, {icon}"
        )

# 3. Update activeTab type
content = content.replace(
    "activeTab, setActiveTab] = useState<'conversation' | 'qa' | 'variations' | 'fillgap' | 'transform' | 'concept' | 'builder'>('conversation');",
    "activeTab, setActiveTab] = useState<'conversation' | 'qa' | 'variations' | 'fillgap' | 'stories' | 'transform' | 'concept' | 'builder'>('conversation');"
)

# 4. Add story states
story_state_code = """    // Stories State (10 Stories per lesson)
    const [activeStoryIndex, setActiveStoryIndex] = useState<number>(0);
    const [storyTypeFilter, setStoryTypeFilter] = useState<'all' | 'guided' | 'practice'>('all');
    const [revealedSolutions, setRevealedSolutions] = useState<Record<string, boolean>>({});
    const [userStoryInputs, setUserStoryInputs] = useState<Record<string, string>>({});
"""

if "activeStoryIndex" not in content:
    content = content.replace(
        "// Fill in the Gap State (100 Fill-in-the-blanks)",
        story_state_code + "\n    // Fill in the Gap State (100 Fill-in-the-blanks)"
    )

# 5. Add currentStories useMemo
stories_memo_code = """    // Current 10 Stories
    const currentStories = useMemo(() => {
        return LESSON_10_STORIES[selectedLessonId] || LESSON_10_STORIES['lesson-01-present-to-be'] || [];
    }, [selectedLessonId]);
"""

if "currentStories" not in content:
    content = content.replace(
        "const currentFillGaps = useMemo(() => {",
        stories_memo_code + "\n    const currentFillGaps = useMemo(() => {"
    )

# 6. Reset story state in useEffect
reset_code = """        setActiveStoryIndex(0);
        setStoryTypeFilter('all');
        setRevealedSolutions({});
        setUserStoryInputs({});
        setFgBatch(1);"""

content = content.replace(
    "setFgBatch(1);",
    reset_code
)

# 7. Update Phase Selection Ribbon to include all 28 lessons phases
old_phase_ribbon = """                    {[
                        { id: 'all', label: 'সকল ধাপ' },
                        { id: 'to-be', label: '১. To-Be (am/is/are, was/were)' },
                        { id: 'have-has', label: '২. মালিকানা (have/has, there is/are)' },
                        { id: 'tenses', label: '৩. ডেইলি টেন্স (Present, Past, Future)' },
                        { id: 'modals', label: '৪. মোডাল ভার্ব (can/could, should, would)' },
                        { id: 'power-structures', label: '৫. পাওয়ার স্ট্রাকচার (used to, feel like, it takes)' }
                    ].map(tab => ("""

new_phase_ribbon = """                    {[
                        { id: 'all', label: 'সকল ২৮টি লেসন' },
                        { id: 'to-be', label: '১. To-Be (am/is/are, was/were)' },
                        { id: 'have-has', label: '২. মালিকানা (have/has, there is/are)' },
                        { id: 'tenses', label: '৩. সকল ১২টি Tenses' },
                        { id: 'comparisons', label: '৪. টেন্সের তুলনা (Continuous vs Perfect, Past Simple vs Perfect)' },
                        { id: 'modals', label: '৫. সকল মোডালস (can, could, should, must, may, might, shall)' },
                        { id: 'power-structures', label: '৬. পাওয়ার স্ট্রাকচার্স ও Causatives (make, let, get)' },
                        { id: 'advanced', label: '৭. Be/Being/Been ও Conditionals (০, ১ম, ২য়, ৩য়)' }
                    ].map(tab => ("""

if old_phase_ribbon in content:
    content = content.replace(old_phase_ribbon, new_phase_ribbon)

# 8. Add Stories tab to navigation tabs
old_nav_tabs = """                                {[
                                    { id: 'conversation', label: '💬 ২০-লাইনের ডায়ালগ (Chat)', icon: MessageSquare },
                                    { id: 'qa', label: '❓ ১০০টি প্রশ্ন ও উত্তর (Q&A)', icon: HelpCircle },
                                    { id: 'variations', label: '🌟 ১০০টি ভিন্ন স্টাইলে বলা', icon: Lightbulb },
                                    { id: 'fillgap', label: '✏️ ১০০টি গ্রামার কুইজ (Fill-in-gap)', icon: Sparkles },
                                    { id: 'transform', label: '🔄 ৬-ধাপের রূপান্তর (+, -, ?)', icon: Layers },
                                    { id: 'concept', label: '📘 কনসেপ্ট ও রুলস', icon: BookOpen },
                                    { id: 'builder', label: '🧩 বাক্য তৈরি ড্রিল', icon: RefreshCw }
                                ].map(tab => {"""

new_nav_tabs = """                                {[
                                    { id: 'conversation', label: '💬 ২০-লাইনের ডায়ালগ (Chat)', icon: MessageSquare },
                                    { id: 'qa', label: '❓ ১০০টি প্রশ্ন ও উত্তর (Q&A)', icon: HelpCircle },
                                    { id: 'variations', label: '🌟 ১০০টি ভিন্ন স্টাইলে বলা', icon: Lightbulb },
                                    { id: 'fillgap', label: '✏️ ১০০টি গ্রামার কুইজ (Fill-in-gap)', icon: Sparkles },
                                    { id: 'stories', label: '📖 ১০টি গল্প ও বাক্য বড় করার কৌশল', icon: BookOpen },
                                    { id: 'transform', label: '🔄 ৬-ধাপের রূপান্তর (+, -, ?)', icon: Layers },
                                    { id: 'concept', label: '📘 কনসেপ্ট ও রুলস', icon: Award },
                                    { id: 'builder', label: '🧩 বাক্য তৈরি ড্রিল', icon: RefreshCw }
                                ].map(tab => {"""

if old_nav_tabs in content:
    content = content.replace(old_nav_tabs, new_nav_tabs)

# 9. Add the Stories Tab JSX
stories_tab_jsx = """
                        {/* ══════════════════════════════════════════════════════════════
                            TAB: 10 STORIES & SENTENCE EXPANSION (ছোট কথা থেকে বড় বাক্য)
                           ══════════════════════════════════════════════════════════════ */}
                        {activeTab === 'stories' && (
                            <div className="space-y-6">
                                {/* Header Banner */}
                                <div className="bg-gradient-to-r from-purple-700 via-indigo-700 to-indigo-900 text-white p-6 sm:p-7 rounded-3xl shadow-sm space-y-2">
                                    <div className="flex items-center gap-2 text-xs font-black uppercase text-purple-200 tracking-wider">
                                        <Sparkles size={16} />
                                        <span>১০টি গল্প, ধাপে ধাপে অনুবাদ ও বাক্য বড় করার ম্যাজিক</span>
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-black">
                                        {currentLesson.title} - গল্প ও অনুবাদ কৌশল
                                    </h3>
                                    <p className="text-xs sm:text-sm text-purple-100/90 font-medium max-w-3xl">
                                        গল্প ১-৫: বাংলা থেকে ইংরেজি অনুবাদের নিখুঁত বিশ্লেষণ, ছোট কথা থেকে বড় বাক্য তৈরির কৌশল এবং গুরুত্বপূর্ণ শব্দার্থ। গল্প ৬-১০: শুরু ও হিন্ট দেখে নিজে লিখে সমাধান মিলিয়ে নেওয়ার প্র্যাকটিস চ্যালেঞ্জ!
                                    </p>
                                </div>

                                {/* Stories Navigation Pills (1 to 10) */}
                                <div className="bg-white p-4 rounded-3xl border border-slate-200/90 shadow-2xs space-y-3">
                                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                                        <div className="flex items-center gap-1.5">
                                            {[
                                                { id: 'all', label: 'সকল ১০টি গল্প' },
                                                { id: 'guided', label: 'গাইডসহ সম্পূর্ণ গল্প (১-৫)' },
                                                { id: 'practice', label: 'প্র্যাকটিস চ্যালেঞ্জ (৬-১০)' }
                                            ].map(f => (
                                                <button
                                                    key={f.id}
                                                    onClick={() => setStoryTypeFilter(f.id as any)}
                                                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                                                        storyTypeFilter === f.id
                                                            ? 'bg-[#5B4DFB] text-white shadow-2xs'
                                                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                                    }`}
                                                >
                                                    {f.label}
                                                </button>
                                            ))}
                                        </div>

                                        <span className="text-xs font-black text-slate-400">
                                            গল্প নির্বাচন করুন:
                                        </span>
                                    </div>

                                    {/* 10 Story Badges */}
                                    <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-2">
                                        {currentStories.map((st, idx) => {
                                            const isSelected = activeStoryIndex === idx;
                                            const isFilteredOut = (storyTypeFilter === 'guided' && st.type !== 'guided') ||
                                                                  (storyTypeFilter === 'practice' && st.type !== 'practice');

                                            return (
                                                <button
                                                    key={st.id}
                                                    disabled={isFilteredOut}
                                                    onClick={() => setActiveStoryIndex(idx)}
                                                    className={`p-2.5 rounded-2xl text-xs font-bold text-center transition-all flex flex-col items-center justify-center gap-1 ${
                                                        isFilteredOut
                                                            ? 'opacity-30 cursor-not-allowed bg-slate-50 text-slate-400'
                                                            : isSelected
                                                            ? 'bg-[#5B4DFB] text-white shadow-md shadow-indigo-600/30 scale-105'
                                                            : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200/70'
                                                    }`}
                                                >
                                                    <span className="text-[11px] font-black">গল্প {idx + 1}</span>
                                                    <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-bold ${
                                                        st.type === 'guided'
                                                            ? isSelected ? 'bg-white/20 text-white' : 'bg-indigo-100 text-indigo-700'
                                                            : isSelected ? 'bg-emerald-400/30 text-white' : 'bg-emerald-100 text-emerald-700'
                                                    }`}>
                                                        {st.type === 'guided' ? 'গাইড' : 'চ্যালেঞ্জ'}
                                                    </span>
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Active Story Details */}
                                {currentStories[activeStoryIndex] && (() => {
                                    const story = currentStories[activeStoryIndex];
                                    const isGuided = story.type === 'guided';

                                    return (
                                        <div className="space-y-6">
                                            {/* Story Main Header Card */}
                                            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-2xs space-y-4">
                                                <div className="flex flex-wrap items-center justify-between gap-3">
                                                    <div className="flex items-center gap-2">
                                                        <span className={`px-3 py-1 rounded-full text-xs font-black ${
                                                            isGuided
                                                                ? 'bg-purple-100 text-purple-700 border border-purple-200'
                                                                : 'bg-emerald-100 text-emerald-700 border border-emerald-200'
                                                        }`}>
                                                            {isGuided ? '📖 গাইডসহ সম্পূর্ণ গল্প ও অনুবাদ' : '✍️ অনুশীলন চ্যালেঞ্জ — নিজে শেষ করুন'}
                                                        </span>
                                                        <span className="text-xs font-black text-slate-400">
                                                            গল্প #{story.storyNumber}
                                                        </span>
                                                    </div>

                                                    {isGuided && story.fullStoryEn && (
                                                        <button
                                                            onClick={() => playAudio(story.fullStoryEn!)}
                                                            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#5B4DFB] text-white text-xs font-black shadow-sm hover:bg-indigo-600 transition"
                                                        >
                                                            <Volume2 size={15} />
                                                            <span>সম্পূর্ণ গল্প শুনুন (Full Audio)</span>
                                                        </button>
                                                    )}
                                                </div>

                                                <div>
                                                    <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                                                        {story.title}
                                                    </h3>
                                                    <p className="text-sm sm:text-base font-bold text-slate-600 mt-0.5">
                                                        {story.titleBn}
                                                    </p>
                                                    <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-100 text-xs font-bold text-slate-600">
                                                        <span>প্রেক্ষাপট:</span>
                                                        <span className="text-slate-800">{story.situation}</span>
                                                    </div>
                                                </div>

                                                {/* Full Story Content Display */}
                                                {isGuided && story.fullStoryEn && (
                                                    <div className="grid sm:grid-cols-2 gap-4 pt-3 border-t border-slate-100">
                                                        <div className="bg-indigo-50/60 p-4 sm:p-5 rounded-2xl border border-indigo-100/80">
                                                            <span className="text-[11px] font-black text-indigo-700 uppercase tracking-wider block mb-2">
                                                                English Story (ইংরেজি মূল গল্প):
                                                            </span>
                                                            <p className="text-sm sm:text-base font-semibold text-slate-900 leading-relaxed">
                                                                {story.fullStoryEn}
                                                            </p>
                                                        </div>

                                                        <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200/80">
                                                            <span className="text-[11px] font-black text-slate-600 uppercase tracking-wider block mb-2">
                                                                বাংলা অর্থ ও ভাবার্থ:
                                                            </span>
                                                            <p className="text-sm sm:text-base font-semibold text-slate-800 leading-relaxed">
                                                                {story.fullStoryBn}
                                                            </p>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>

                                            {/* ════════════════════════════════════════════════════════
                                                FOR GUIDED STORIES:
                                                1. SENTENCE EXPANSION (ছোট কথা থেকে বড় বাক্য)
                                                2. STEP-BY-STEP BANGLA TO ENGLISH BREAKDOWN
                                                3. KEY VOCABULARY & USAGE
                                               ════════════════════════════════════════════════════════ */}
                                            {isGuided && (
                                                <>
                                                    {/* 1. Sentence Expansion Breakdown */}
                                                    {story.expansion && (
                                                        <div className="bg-white rounded-3xl p-6 sm:p-7 border border-indigo-100 shadow-2xs space-y-4">
                                                            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                                                                <div className="flex items-center gap-2">
                                                                    <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-black">
                                                                        🪄
                                                                    </div>
                                                                    <div>
                                                                        <h4 className="text-base font-black text-slate-900">
                                                                            ছোট কথা থেকে কীভাবে বড় বাক্য করতে হয় (Sentence Expanding)
                                                                        </h4>
                                                                        <p className="text-xs text-slate-500 font-medium">
                                                                            ধাপে ধাপে শব্দ ও ফ্রেজ যুক্ত করে সাধারণ ৩ শব্দের বাক্যকে আকর্ষণীয় ও বড় বাক্যে রূপান্তরের নিয়ম
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            {/* 4 Expansion Steps */}
                                                            <div className="space-y-3 pt-1">
                                                                {[
                                                                    { lvl: story.expansion.level1, color: 'border-slate-200 bg-slate-50/70 text-slate-800', badge: 'bg-slate-200 text-slate-700' },
                                                                    { lvl: story.expansion.level2, color: 'border-blue-200 bg-blue-50/50 text-blue-900', badge: 'bg-blue-100 text-blue-700' },
                                                                    { lvl: story.expansion.level3, color: 'border-indigo-200 bg-indigo-50/50 text-indigo-900', badge: 'bg-indigo-100 text-indigo-700' },
                                                                    { lvl: story.expansion.level4, color: 'border-purple-200 bg-purple-50/50 text-purple-900', badge: 'bg-purple-100 text-purple-700' }
                                                                ].map((step, sIdx) => (
                                                                    <div key={sIdx} className={`p-4 rounded-2xl border ${step.color} transition-all`}>
                                                                        <div className="flex items-center justify-between mb-1">
                                                                            <span className={`text-[11px] font-black px-2.5 py-0.5 rounded-full ${step.badge}`}>
                                                                                {step.lvl.label}
                                                                            </span>
                                                                            <button
                                                                                onClick={() => playAudio(step.lvl.en)}
                                                                                className="p-1.5 rounded-lg bg-white/80 hover:bg-white text-slate-600 transition"
                                                                                title="শুনুন"
                                                                            >
                                                                                <Volume2 size={14} />
                                                                            </button>
                                                                        </div>
                                                                        <p className="text-base sm:text-lg font-black text-slate-900 mt-1">
                                                                            "{step.lvl.en}"
                                                                        </p>
                                                                        <p className="text-xs sm:text-sm font-bold text-slate-600 mt-0.5">
                                                                            অর্থ: {step.lvl.bn}
                                                                        </p>
                                                                    </div>
                                                                ))}
                                                            </div>

                                                            {/* Technique Explanation Tip */}
                                                            <div className="bg-amber-50/80 p-4 rounded-2xl border border-amber-200/80 text-xs text-amber-900 font-medium leading-relaxed flex items-start gap-2.5">
                                                                <Lightbulb className="text-amber-600 flex-shrink-0 mt-0.5" size={18} />
                                                                <div>
                                                                    <span className="font-black text-amber-800 block mb-0.5">ম্যাজিক ফর্মুলা নোট:</span>
                                                                    {story.expansion.techniqueExplanation}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}

                                                    {/* 2. Step-by-Step Translation Breakdown */}
                                                    {story.breakdown && story.breakdown.length > 0 && (
                                                        <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-2xs space-y-4">
                                                            <div className="pb-2 border-b border-slate-100 flex items-center justify-between">
                                                                <div>
                                                                    <h4 className="text-base font-black text-slate-900">
                                                                        বাংলা থেকে ইংরেজি অনুবাদের প্রতিটি বাক্য (Sentence Breakdown)
                                                                    </h4>
                                                                    <p className="text-xs text-slate-500 font-medium">
                                                                        প্রতিটি বাক্যের সঠিক ব্যাকরণ, উচ্চারণ গাইড এবং আইপিএ ফনেটিক্স
                                                                    </p>
                                                                </div>
                                                                <span className="text-xs font-black bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full border border-indigo-200">
                                                                    {story.breakdown.length} টি বাক্য
                                                                </span>
                                                            </div>

                                                            <div className="space-y-4">
                                                                {story.breakdown.map((item, bIdx) => (
                                                                    <div
                                                                        key={bIdx}
                                                                        className="p-4 sm:p-5 rounded-2xl border border-slate-200/80 bg-slate-50/60 hover:bg-slate-50 transition-all space-y-2.5"
                                                                    >
                                                                        <div className="flex items-center justify-between">
                                                                            <span className="w-6 h-6 rounded-full bg-[#5B4DFB] text-white font-black text-xs flex items-center justify-center">
                                                                                {item.step}
                                                                            </span>
                                                                            <button
                                                                                onClick={() => playAudio(item.enSentence)}
                                                                                className="flex items-center gap-1 px-3 py-1 rounded-xl bg-white text-xs font-bold text-slate-700 hover:text-indigo-600 border border-slate-200 shadow-2xs transition"
                                                                            >
                                                                                <Volume2 size={14} />
                                                                                <span>উচ্চারণ শুনুন</span>
                                                                            </button>
                                                                        </div>

                                                                        <div>
                                                                            <p className="text-sm font-bold text-slate-600">
                                                                                বাংলা: <span className="text-slate-900">{item.bnSentence}</span>
                                                                            </p>
                                                                            <p className="text-base sm:text-lg font-black text-[#5B4DFB] mt-0.5">
                                                                                ইংরেজি: "{item.enSentence}"
                                                                            </p>
                                                                        </div>

                                                                        <div className="flex flex-wrap items-center gap-3 text-xs pt-1 border-t border-slate-200/50">
                                                                            <span className="font-mono text-purple-600 bg-purple-50 px-2 py-0.5 rounded-md">
                                                                                IPA: {item.ipa}
                                                                            </span>
                                                                            <span className="text-orange-600 font-semibold bg-orange-50 px-2 py-0.5 rounded-md">
                                                                                উচ্চারণ: {item.bn_pron}
                                                                            </span>
                                                                        </div>

                                                                        <div className="text-xs text-slate-600 bg-white p-2.5 rounded-xl border border-slate-200/60 font-medium">
                                                                            <span className="font-bold text-indigo-700">💡 গ্রামার রুল:</span> {item.grammarNote}
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    )}

                                                    {/* 3. Key Vocabulary & Daily Usage */}
                                                    {story.vocabulary && story.vocabulary.length > 0 && (
                                                        <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-2xs space-y-4">
                                                            <div className="pb-2 border-b border-slate-100">
                                                                <h4 className="text-base font-black text-slate-900">
                                                                    গল্পের গুরুত্বপূর্ণ শব্দভাণ্ডার, অর্থ ও স্পোকেনে বাস্তব প্রয়োগ (Vocabulary Cards)
                                                                </h4>
                                                                <p className="text-xs text-slate-500 font-medium">
                                                                    প্রতিটি শব্দের পার্টস অফ স্পিচ, অর্থ এবং উদাহরণ বাক্য জোরে জোরে পড়ে আয়ত্ত করুন
                                                                </p>
                                                            </div>

                                                            <div className="grid sm:grid-cols-2 gap-4">
                                                                {story.vocabulary.map((vocab, vIdx) => (
                                                                    <div
                                                                        key={vIdx}
                                                                        className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-indigo-300 hover:shadow-2xs transition-all space-y-2"
                                                                    >
                                                                        <div className="flex items-center justify-between">
                                                                            <div className="flex items-center gap-2">
                                                                                <span className="text-base font-black text-slate-900">
                                                                                    {vocab.word}
                                                                                </span>
                                                                                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-200 text-slate-700">
                                                                                    {vocab.pos}
                                                                                </span>
                                                                            </div>
                                                                            <button
                                                                                onClick={() => playAudio(vocab.word)}
                                                                                className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition"
                                                                                title="শব্দ শুনুন"
                                                                            >
                                                                                <Volume2 size={14} />
                                                                            </button>
                                                                        </div>

                                                                        <p className="text-xs font-mono text-purple-600">
                                                                            IPA: {vocab.ipa}
                                                                        </p>

                                                                        <p className="text-sm font-bold text-emerald-700">
                                                                            বাংলা অর্থ: {vocab.meaningBn}
                                                                        </p>

                                                                        <div className="pt-2 border-t border-slate-200/60 text-xs space-y-1">
                                                                            <div className="flex items-center justify-between">
                                                                                <span className="font-bold text-slate-800">উদাহরণ প্রয়োগ:</span>
                                                                                <button
                                                                                    onClick={() => playAudio(vocab.exampleEn)}
                                                                                    className="text-indigo-600 hover:underline text-[11px] font-bold"
                                                                                >
                                                                                    শুনুন
                                                                                </button>
                                                                            </div>
                                                                            <p className="text-slate-900 font-semibold">
                                                                                "{vocab.exampleEn}"
                                                                            </p>
                                                                            <p className="text-slate-500 font-medium">
                                                                                ({vocab.exampleBn})
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    )}
                                                </>
                                            )}

                                            {/* ════════════════════════════════════════════════════════
                                                FOR PRACTICE CHALLENGES (STORIES 6 TO 10):
                                                1. STARTER SENTENCE
                                                2. PLOT CLUE IN BENGALI
                                                3. KEYWORD BANK & GRAMMAR CLUES
                                                4. STUDENT WRITING INPUT BOX
                                                5. REVEAL MODEL SOLUTION BUTTON
                                               ════════════════════════════════════════════════════════ */}
                                            {!isGuided && (
                                                <div className="bg-white rounded-3xl p-6 sm:p-7 border border-emerald-100 shadow-2xs space-y-5">
                                                    {/* Starter sentence */}
                                                    {story.starterEn && (
                                                        <div className="p-4 sm:p-5 rounded-2xl bg-indigo-50/70 border border-indigo-200/80 space-y-2">
                                                            <div className="flex items-center justify-between">
                                                                <span className="text-[11px] font-black text-indigo-700 uppercase tracking-wider">
                                                                    গল্পের শুরুর বাক্য (Starter Sentence):
                                                                </span>
                                                                <button
                                                                    onClick={() => playAudio(story.starterEn!)}
                                                                    className="flex items-center gap-1 px-3 py-1 rounded-xl bg-white text-xs font-bold text-indigo-700 border border-indigo-200 shadow-2xs transition"
                                                                >
                                                                    <Volume2 size={14} />
                                                                    <span>শুনুন</span>
                                                                </button>
                                                            </div>
                                                            <p className="text-base sm:text-lg font-black text-slate-900">
                                                                "{story.starterEn}"
                                                            </p>
                                                            <p className="text-xs sm:text-sm font-bold text-slate-600">
                                                                অনুবাদ: {story.starterBn}
                                                            </p>
                                                        </div>
                                                    )}

                                                    {/* Challenge Plot Guide */}
                                                    {story.challengePlotBn && (
                                                        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                                                            <span className="text-xs font-black text-slate-800 uppercase tracking-wider block">
                                                                💡 গল্পের পরবর্তী প্লট (বাংলায় চিন্তা করে ইংরেজিতে সাজান):
                                                            </span>
                                                            <p className="text-xs sm:text-sm font-medium text-slate-700 leading-relaxed">
                                                                {story.challengePlotBn}
                                                            </p>
                                                        </div>
                                                    )}

                                                    {/* Hints Box */}
                                                    {story.hints && (
                                                        <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-3">
                                                            <span className="text-xs font-black text-amber-900 uppercase tracking-wider block">
                                                                🔑 ক্লু ও সহায়িকা (Hints & Clues):
                                                            </span>

                                                            {/* Keywords */}
                                                            <div>
                                                                <span className="text-xs font-bold text-amber-800 block mb-1">প্রয়োজনীয় শব্দভাণ্ডার:</span>
                                                                <div className="flex flex-wrap gap-1.5">
                                                                    {story.hints.keywords.map((kw, kwIdx) => (
                                                                        <span
                                                                            key={kwIdx}
                                                                            className="px-2.5 py-1 rounded-xl bg-white border border-amber-200 text-xs font-bold text-slate-800 shadow-2xs"
                                                                        >
                                                                            <strong className="text-indigo-700">{kw.word}</strong>: {kw.meaningBn}
                                                                        </span>
                                                                    ))}
                                                                </div>
                                                            </div>

                                                            {/* Grammar Clue & Connectors */}
                                                            <div className="grid sm:grid-cols-2 gap-3 pt-2 border-t border-amber-200/60 text-xs">
                                                                <div>
                                                                    <span className="font-bold text-amber-800 block">ব্যাকরণ ক্লু:</span>
                                                                    <span className="text-slate-700 font-medium">{story.hints.grammarClue}</span>
                                                                </div>
                                                                <div>
                                                                    <span className="font-bold text-amber-800 block">কানেক্টর শব্দ:</span>
                                                                    <span className="text-slate-700 font-medium">{story.hints.connectors.join(', ')}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}

                                                    {/* Student Writing Box */}
                                                    <div className="space-y-2">
                                                        <label className="text-xs font-black text-slate-700 block">
                                                            আপনার লেখার খসড়া (এখানে ইংরেজিতে ৩-৪টি বাক্য দিয়ে গল্পটি সম্পূর্ণ করুন):
                                                        </label>
                                                        <textarea
                                                            value={userStoryInputs[story.id] || ''}
                                                            onChange={(e) => setUserStoryInputs({ ...userStoryInputs, [story.id]: e.target.value })}
                                                            rows={4}
                                                            placeholder="Starter বাক্যের সাথে মিলিয়ে আপনার ইংরেজি বাক্যগুলো এখানে লিখুন..."
                                                            className="w-full p-4 rounded-2xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#5B4DFB] text-sm font-semibold text-slate-900 bg-slate-50/50"
                                                        />
                                                    </div>

                                                    {/* Reveal Model Solution Toggle */}
                                                    <div className="pt-2">
                                                        <button
                                                            onClick={() => setRevealedSolutions({
                                                                ...revealedSolutions,
                                                                [story.id]: !revealedSolutions[story.id]
                                                            })}
                                                            className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs shadow-sm transition"
                                                        >
                                                            {revealedSolutions[story.id] ? <EyeOff size={16} /> : <Eye size={16} />}
                                                            <span>
                                                                {revealedSolutions[story.id] ? 'আদর্শ সমাধান লুকান' : '💡 আদর্শ সমাধান দেখুন (Reveal Model Solution)'}
                                                            </span>
                                                        </button>

                                                        {revealedSolutions[story.id] && story.modelSolutionEn && (
                                                            <div className="mt-4 p-5 rounded-2xl bg-emerald-50/80 border border-emerald-200/90 space-y-3 animate-in fade-in duration-200">
                                                                <div className="flex items-center justify-between">
                                                                    <span className="text-xs font-black text-emerald-800 uppercase tracking-wider">
                                                                        আদর্শ সমাধান (Model Story):
                                                                    </span>
                                                                    <button
                                                                        onClick={() => playAudio(story.modelSolutionEn!)}
                                                                        className="flex items-center gap-1 px-3 py-1 rounded-xl bg-white text-xs font-bold text-emerald-700 border border-emerald-200 shadow-2xs transition"
                                                                    >
                                                                        <Volume2 size={14} />
                                                                        <span>সমাধানের অডিও শুনুন</span>
                                                                    </button>
                                                                </div>

                                                                <p className="text-base font-black text-slate-900 leading-relaxed">
                                                                    "{story.modelSolutionEn}"
                                                                </p>

                                                                <p className="text-xs sm:text-sm font-bold text-slate-700 pt-2 border-t border-emerald-200/60">
                                                                    বাংলা অনুবাদ: {story.modelSolutionBn}
                                                                </p>

                                                                {story.practiceExpansionTip && (
                                                                    <div className="bg-white p-3 rounded-xl border border-emerald-200 text-xs text-slate-600 font-medium">
                                                                        <span className="font-bold text-emerald-700">💡 বাক্য বৃদ্ধির টিপ:</span> {story.practiceExpansionTip}
                                                                    </div>
                                                                )}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })()}
                            </div>
                        )}
"""

# Find boundary for transform tab and insert stories tab
boundary = "{/* ══════════════════════════════════════════════════════════════\n                            TAB 5: 6-WAY TRANSFORMATION FLOW"
if boundary in content and "TAB: 10 STORIES & SENTENCE EXPANSION" not in content:
    content = content.replace(boundary, stories_tab_jsx + "\n" + boundary)

with open(PAGE_PATH, "w", encoding="utf-8") as f:
    f.write(content)

print("Injected Stories tab and phase updates into lessons page.tsx successfully!")
