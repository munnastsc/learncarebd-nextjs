'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
    Award, Search, RefreshCw, Trash2, Eye, X, Clock,
    CheckCircle2, XCircle, AlertCircle, Sparkles, Filter,
    Download, ArrowLeft, User, FileText
} from 'lucide-react';

interface SubmissionItem {
    id: string;
    studentName: string;
    studentEmail: string;
    score: number;
    total: number;
    percentage: number;
    grade: string;
    timeTakenSeconds: number;
    tensesScore: number;
    modalsScore: number;
    compliment: string;
    weaknesses: string[];
    mistakes: Array<{
        questionId: number;
        subCategory: string;
        patternBn: string;
        promptBn?: string;
        sentence: string;
        userChoice: string;
        correctChoice: string;
        explanationBn: string;
    }>;
    completedAt: string;
}

export default function ExamSubmissionsPage() {
    const [submissions, setSubmissions] = useState<SubmissionItem[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [selectedSubmission, setSelectedSubmission] = useState<SubmissionItem | null>(null);
    const [filterGrade, setFilterGrade] = useState<string>('all');

    const fetchSubmissions = async () => {
        setIsLoading(true);
        try {
            const res = await fetch('/api/exam-submissions');
            const data = await res.json();
            if (data.success) {
                setSubmissions(data.submissions || []);
            }
        } catch (err) {
            console.error('Failed to load submissions:', err);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchSubmissions();
    }, []);

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this submission?')) return;
        try {
            const res = await fetch(`/api/exam-submissions?id=${id}`, { method: 'DELETE' });
            const data = await res.json();
            if (data.success) {
                setSubmissions((prev) => prev.filter((s) => s.id !== id));
                if (selectedSubmission?.id === id) setSelectedSubmission(null);
            }
        } catch (err) {
            alert('Failed to delete submission');
        }
    };

    const filteredSubmissions = submissions.filter((s) => {
        const matchesQuery = s.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            s.studentEmail.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesGrade = filterGrade === 'all' || s.grade.startsWith(filterGrade);
        return matchesQuery && matchesGrade;
    });

    const totalExams = submissions.length;
    const avgScore = totalExams > 0
        ? Math.round(submissions.reduce((acc, s) => acc + s.score, 0) / totalExams)
        : 0;
    const highScoresCount = submissions.filter((s) => s.score >= 80).length;

    return (
        <div className="p-6 max-w-7xl mx-auto space-y-6">
            {/* Top Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5">
                <div>
                    <div className="flex items-center gap-2">
                        <span className="bg-amber-100 text-amber-800 text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase">
                            Teacher & Admin Evaluation
                        </span>
                    </div>
                    <h1 className="text-2xl font-black text-slate-900 mt-1 flex items-center gap-2">
                        <Award className="text-amber-500" size={24} /> Student Exam Submissions (১০০ মার্কস টেস্ট)
                    </h1>
                    <p className="text-xs text-slate-500 mt-0.5">
                        সকল শিক্ষার্থীর দেওয়া পরীক্ষা, প্রাপ্ত নম্বর, ভুলসমূহ ও দুর্বলতা বিশ্লেষণ।
                    </p>
                </div>

                <div className="flex items-center gap-2">
                    <button
                        onClick={fetchSubmissions}
                        className="px-3.5 py-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-xs transition flex items-center gap-1.5 cursor-pointer shadow-xs"
                    >
                        <RefreshCw size={14} className={isLoading ? 'animate-spin' : ''} /> Refresh
                    </button>
                    <Link
                        href="/dashboard/spoken-english/online-test"
                        target="_blank"
                        className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition flex items-center gap-1.5 shadow-xs"
                    >
                        Live Test View ↗
                    </Link>
                </div>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">মোট পরীক্ষা সম্পন্ন</p>
                    <p className="text-3xl font-black text-slate-900 mt-1">{totalExams} জন</p>
                </div>
                <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">গড় স্কোর (Average)</p>
                    <p className="text-3xl font-black text-indigo-600 mt-1">{avgScore} / ১০০</p>
                </div>
                <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">৮০+ মার্কস প্রাপ্ত (Mastery)</p>
                    <p className="text-3xl font-black text-emerald-600 mt-1">{highScoresCount} জন</p>
                </div>
            </div>

            {/* Filters Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white p-3.5 rounded-2xl border border-slate-200 shadow-xs">
                <div className="relative w-full sm:w-80">
                    <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="শিক্ষার্থীর নাম বা ইমেইল দিয়ে খুঁজুন..."
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-4 py-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    />
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                    <span className="text-xs font-bold text-slate-500">গ্রেড ফিল্টার:</span>
                    <select
                        value={filterGrade}
                        onChange={(e) => setFilterGrade(e.target.value)}
                        className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 text-xs font-bold text-slate-700 cursor-pointer"
                    >
                        <option value="all">সকল গ্রেড</option>
                        <option value="A+">Grade A+</option>
                        <option value="A">Grade A</option>
                        <option value="B">Grade B</option>
                        <option value="C">Grade C</option>
                    </select>
                </div>
            </div>

            {/* Submissions Table */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-xs">
                        <thead>
                            <tr className="bg-slate-50/80 border-b border-slate-200 text-slate-500 uppercase tracking-wider font-bold">
                                <th className="p-3.5">শিক্ষার্থীর নাম</th>
                                <th className="p-3.5">স্কোর / ১০০</th>
                                <th className="p-3.5">টেন্স / মোডাল</th>
                                <th className="p-3.5">গ্রেড</th>
                                <th className="p-3.5">সময়</th>
                                <th className="p-3.5">তারিখ</th>
                                <th className="p-3.5 text-right">অ্যাকশন</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 font-medium">
                            {isLoading ? (
                                <tr>
                                    <td colSpan={7} className="p-8 text-center text-slate-400">
                                        লোড হচ্ছে...
                                    </td>
                                </tr>
                            ) : filteredSubmissions.length === 0 ? (
                                <tr>
                                    <td colSpan={7} className="p-8 text-center text-slate-400">
                                        কোনো সাবমিশন পাওয়া যায়নি। শিক্ষার্থীরা পরীক্ষা দিলেই এখানে প্রদর্শিত হবে।
                                    </td>
                                </tr>
                            ) : (
                                filteredSubmissions.map((s) => (
                                    <tr key={s.id} className="hover:bg-slate-50/80 transition">
                                        <td className="p-3.5">
                                            <p className="font-bold text-slate-900">{s.studentName}</p>
                                            <p className="text-[11px] text-slate-400">{s.studentEmail}</p>
                                        </td>
                                        <td className="p-3.5">
                                            <span className={`inline-block px-2.5 py-1 rounded-lg font-black text-xs ${
                                                s.score >= 80
                                                    ? 'bg-emerald-100 text-emerald-800'
                                                    : s.score >= 60
                                                    ? 'bg-indigo-100 text-indigo-800'
                                                    : 'bg-rose-100 text-rose-800'
                                            }`}>
                                                {s.score} / ১০০ ({s.percentage}%)
                                            </span>
                                        </td>
                                        <td className="p-3.5 text-slate-600">
                                            <span>T: {s.tensesScore}/50</span> · <span>M: {s.modalsScore}/50</span>
                                        </td>
                                        <td className="p-3.5 font-bold text-slate-800">
                                            {s.grade}
                                        </td>
                                        <td className="p-3.5 text-slate-500">
                                            {Math.floor(s.timeTakenSeconds / 60)}m {s.timeTakenSeconds % 60}s
                                        </td>
                                        <td className="p-3.5 text-slate-500">
                                            {new Date(s.completedAt).toLocaleDateString('bn-BD', {
                                                day: 'numeric',
                                                month: 'short',
                                                hour: '2-digit',
                                                minute: '2-digit'
                                            })}
                                        </td>
                                        <td className="p-3.5 text-right space-x-1">
                                            <button
                                                onClick={() => setSelectedSubmission(s)}
                                                className="px-3 py-1.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold transition cursor-pointer"
                                            >
                                                রিপোর্ট দেখুন
                                            </button>
                                            <button
                                                onClick={() => handleDelete(s.id)}
                                                className="p-1.5 rounded-lg hover:bg-rose-50 text-slate-400 hover:text-rose-600 transition cursor-pointer"
                                                title="মুছে ফেলুন"
                                            >
                                                <Trash2 size={14} />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Student Diagnostic Full Report Modal */}
            {selectedSubmission && (
                <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
                    <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl border border-slate-200">
                        {/* Modal Header */}
                        <div className="bg-slate-900 text-white p-5 flex items-center justify-between">
                            <div>
                                <span className="bg-amber-400/20 text-amber-300 border border-amber-400/30 text-[10px] font-black px-2 py-0.5 rounded-full uppercase">
                                    শিক্ষার্থীর সম্পূর্ণ রিপোর্ট
                                </span>
                                <h3 className="text-base font-black text-white mt-1">
                                    {selectedSubmission.studentName}-এর ফলাফল বিস্তারিত
                                </h3>
                            </div>
                            <button
                                onClick={() => setSelectedSubmission(null)}
                                className="p-1.5 rounded-xl hover:bg-slate-800 text-slate-400 hover:text-white transition cursor-pointer"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="p-6 overflow-y-auto space-y-5 text-xs">
                            {/* Summary Cards */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                                    <p className="text-slate-400 font-bold">প্রাপ্ত মার্কস</p>
                                    <p className="text-xl font-black text-indigo-600 mt-0.5">{selectedSubmission.score} / ১০০</p>
                                </div>
                                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                                    <p className="text-slate-400 font-bold">গ্রেড</p>
                                    <p className="text-sm font-black text-slate-800 mt-1">{selectedSubmission.grade}</p>
                                </div>
                                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                                    <p className="text-slate-400 font-bold">টেন্স স্কোর</p>
                                    <p className="text-lg font-black text-emerald-600 mt-0.5">{selectedSubmission.tensesScore} / ৫০</p>
                                </div>
                                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                                    <p className="text-slate-400 font-bold">মোডাল স্কোর</p>
                                    <p className="text-lg font-black text-teal-600 mt-0.5">{selectedSubmission.modalsScore} / ৫০</p>
                                </div>
                            </div>

                            {/* Compliment */}
                            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200">
                                <p className="font-bold text-amber-900 flex items-center gap-1.5 mb-1">
                                    <Sparkles size={14} /> শিক্ষকের মন্তব্য ও পর্যবেক্ষণ:
                                </p>
                                <p className="text-slate-700 leading-relaxed">
                                    {selectedSubmission.compliment}
                                </p>
                            </div>

                            {/* Weaknesses */}
                            {selectedSubmission.weaknesses.length > 0 && (
                                <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200">
                                    <p className="font-bold text-rose-900 flex items-center gap-1.5 mb-2">
                                        <AlertCircle size={14} /> দুর্বলতার স্থানসমূহ (যেগুলোতে ভুল হয়েছে):
                                    </p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {selectedSubmission.weaknesses.map((w, idx) => (
                                            <span key={idx} className="bg-white border border-rose-200 text-rose-800 px-2.5 py-1 rounded-lg font-bold">
                                                {w}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Mistakes List */}
                            <div className="space-y-3 pt-2">
                                <h4 className="text-sm font-black text-slate-900">
                                    ভুল উত্তরের বিস্তারিত তালিকা ({selectedSubmission.mistakes.length}টি ভুল):
                                </h4>
                                {selectedSubmission.mistakes.length === 0 ? (
                                    <p className="text-emerald-700 font-bold p-4 bg-emerald-50 rounded-xl">
                                        কোনো ভুল হয়নি! পারফেক্ট স্কোর।
                                    </p>
                                ) : (
                                    selectedSubmission.mistakes.map((m, idx) => (
                                        <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
                                            <div className="flex items-center justify-between">
                                                <span className="font-bold text-slate-800">
                                                    প্রশ্ন #{m.questionId} ({m.subCategory})
                                                </span>
                                                <span className="text-[10px] text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                                                    {m.patternBn}
                                                </span>
                                            </div>
                                            <p className="font-bold text-slate-900">{m.sentence}</p>
                                            <div className="grid grid-cols-2 gap-2 text-[11px] pt-1">
                                                <div className="p-2 bg-rose-50 border border-rose-200 rounded-lg">
                                                    <span className="font-bold text-rose-700">ছাত্রের উত্তর:</span> {m.userChoice}
                                                </div>
                                                <div className="p-2 bg-emerald-50 border border-emerald-200 rounded-lg">
                                                    <span className="font-bold text-emerald-700">সঠিক উত্তর:</span> {m.correctChoice}
                                                </div>
                                            </div>
                                            <p className="text-[11px] text-slate-600 bg-white p-2 rounded-lg border border-slate-100">
                                                💡 <span className="font-bold text-slate-800">ব্যাখ্যা:</span> {m.explanationBn}
                                            </p>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>

                        {/* Modal Footer */}
                        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
                            <button
                                onClick={() => setSelectedSubmission(null)}
                                className="px-4 py-2 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition cursor-pointer"
                            >
                                বন্ধ করুন
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
