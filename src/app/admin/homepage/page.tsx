'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
    Save, Megaphone, Sparkles, Radio, GraduationCap,
    HelpCircle, BarChart3, Phone, CheckCircle2, AlertCircle,
    ArrowLeft, Eye, RefreshCw, Layers, Plus, Trash2, Code2,
    Image, DollarSign, BookOpen
} from 'lucide-react';
import { DEFAULT_HOMEPAGE_SETTINGS, HomepageSettings, CourseItem } from '../../../lib/homepageTypes';

export default function AdminHomepageEditor() {
    const [settings, setSettings] = useState<HomepageSettings>(DEFAULT_HOMEPAGE_SETTINGS);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [activeTab, setActiveTab] = useState<'notice' | 'hero' | 'courses' | 'hubs' | 'why' | 'stats' | 'contact'>('courses');
    const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

    useEffect(() => {
        const fetchSettings = async () => {
            try {
                const res = await fetch('/api/homepage-settings');
                if (res.ok) {
                    const data = await res.json();
                    setSettings({ ...DEFAULT_HOMEPAGE_SETTINGS, ...data });
                }
            } catch (err) {
                console.error('Failed to load settings:', err);
            } finally {
                setLoading(false);
            }
        };
        fetchSettings();
    }, []);

    const handleSave = async () => {
        setSaving(true);
        setStatusMessage(null);
        try {
            const res = await fetch('/api/homepage-settings', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(settings)
            });

            if (res.ok) {
                setStatusMessage({ type: 'success', text: '✅ সকল পরিবর্তন সফলভাবে সংরক্ষিত হয়েছে!' });
            } else {
                setStatusMessage({ type: 'error', text: '❌ সংরক্ষণ করতে সমস্যা হয়েছে। আবার চেষ্টা করুন।' });
            }
        } catch {
            setStatusMessage({ type: 'error', text: '❌ সার্ভার সংযোগ ব্যর্থ হয়েছে।' });
        } finally {
            setSaving(false);
            setTimeout(() => setStatusMessage(null), 5000);
        }
    };

    // Helper functions for courses
    const handleCourseChange = (index: number, field: keyof CourseItem, value: any) => {
        const updated = [...(settings.coursesSection?.items || [])];
        updated[index] = { ...updated[index], [field]: value };
        setSettings({
            ...settings,
            coursesSection: {
                ...settings.coursesSection,
                items: updated
            }
        });
    };

    const handleAddCourse = () => {
        const newCourse: CourseItem = {
            id: `course-${Date.now()}`,
            title: 'New Course Title',
            subtitle: 'Course subtitle and brief description here.',
            image: 'https://learncarebd.com/wp-content/uploads/2026/02/3-768x432.png',
            price: '2,500',
            originalPrice: '3,500',
            instructor: 'admin',
            rating: 5,
            url: `/courses/course-${Date.now()}`,
            isInternal: true,
            htmlContent: '<div class="p-6 bg-slate-900 rounded-2xl text-white"><h2>Welcome to this course</h2><p>Paste your full landing page HTML here.</p></div>'
        };

        setSettings({
            ...settings,
            coursesSection: {
                ...settings.coursesSection,
                items: [...(settings.coursesSection?.items || []), newCourse]
            }
        });
    };

    const handleRemoveCourse = (index: number) => {
        if (!confirm('Are you sure you want to remove this course?')) return;
        const updated = (settings.coursesSection?.items || []).filter((_, i) => i !== index);
        setSettings({
            ...settings,
            coursesSection: {
                ...settings.coursesSection,
                items: updated
            }
        });
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">
                <RefreshCw className="animate-spin text-teal-400" size={32} />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 pb-20">
            {/* Top Bar */}
            <div className="border-b border-slate-800 bg-slate-900/80 px-6 py-4 sticky top-0 z-30 backdrop-blur-md">
                <div className="mx-auto max-w-6xl flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <Link href="/admin/orders" className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition">
                            <ArrowLeft size={16} />
                        </Link>
                        <div>
                            <h1 className="text-lg font-black text-white flex items-center gap-2">
                                🏠 Full Homepage Editor
                                <span className="text-[10px] bg-teal-500/20 border border-teal-500/30 text-teal-300 px-2 py-0.5 rounded-full font-bold uppercase">
                                    Live Customizer
                                </span>
                            </h1>
                            <p className="text-xs text-slate-400">কোর্স কার্ড, হিরো ব্যানার, নোটিশ এবং কাস্টম HTML ল্যান্ডিং পেজ এখান থেকেই কন্ট্রোল করুন।</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <Link
                            href="/"
                            target="_blank"
                            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-700 bg-slate-800 px-4 py-2 text-xs font-bold text-slate-300 hover:bg-slate-700 transition"
                        >
                            <Eye size={14} /> লাইভ সাইট দেখুন
                        </Link>
                        <button
                            onClick={handleSave}
                            disabled={saving}
                            className="inline-flex items-center gap-2 rounded-xl bg-teal-500 px-5 py-2 text-xs font-black text-slate-950 hover:bg-teal-400 transition disabled:opacity-50 shadow-lg shadow-teal-500/20"
                        >
                            {saving ? <RefreshCw className="animate-spin" size={14} /> : <Save size={14} />}
                            {saving ? 'সংরক্ষণ হচ্ছে...' : 'সেভ করুন (Save Settings)'}
                        </button>
                    </div>
                </div>
            </div>

            {/* Notification alert */}
            {statusMessage && (
                <div className={`mx-auto max-w-6xl mt-4 px-6`}>
                    <div className={`p-4 rounded-2xl flex items-center gap-3 text-xs font-bold ${
                        statusMessage.type === 'success' 
                            ? 'bg-emerald-950/80 border border-emerald-500/40 text-emerald-300' 
                            : 'bg-rose-950/80 border border-rose-500/40 text-rose-300'
                    }`}>
                        {statusMessage.type === 'success' ? <CheckCircle2 size={16} /> : <AlertCircle size={16} />}
                        <span>{statusMessage.text}</span>
                    </div>
                </div>
            )}

            <div className="mx-auto max-w-6xl px-6 pt-8">
                {/* Navigation Tabs */}
                <div className="flex flex-wrap gap-2 mb-8 border-b border-slate-800 pb-4">
                    <button
                        onClick={() => setActiveTab('courses')}
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold transition ${
                            activeTab === 'courses'
                                ? 'bg-teal-500 text-slate-950 shadow-md shadow-teal-500/20'
                                : 'bg-slate-900/80 text-slate-400 hover:bg-slate-800 hover:text-white'
                        }`}
                    >
                        <Layers size={14} /> 🎓 কোর্স কার্ড ও HTML পেজ ({settings.coursesSection?.items?.length || 0})
                    </button>

                    <button
                        onClick={() => setActiveTab('hero')}
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold transition ${
                            activeTab === 'hero'
                                ? 'bg-teal-500 text-slate-950 shadow-md shadow-teal-500/20'
                                : 'bg-slate-900/80 text-slate-400 hover:bg-slate-800 hover:text-white'
                        }`}
                    >
                        <Sparkles size={14} /> 🚀 হিরো ব্যানার
                    </button>

                    <button
                        onClick={() => setActiveTab('notice')}
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold transition ${
                            activeTab === 'notice'
                                ? 'bg-teal-500 text-slate-950 shadow-md shadow-teal-500/20'
                                : 'bg-slate-900/80 text-slate-400 hover:bg-slate-800 hover:text-white'
                        }`}
                    >
                        <Megaphone size={14} /> 📢 নোটিশ টিকার
                    </button>

                    <button
                        onClick={() => setActiveTab('hubs')}
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold transition ${
                            activeTab === 'hubs'
                                ? 'bg-teal-500 text-slate-950 shadow-md shadow-teal-500/20'
                                : 'bg-slate-900/80 text-slate-400 hover:bg-slate-800 hover:text-white'
                        }`}
                    >
                        <Radio size={14} /> 💡 এআই লার্নিং হাবস
                    </button>

                    <button
                        onClick={() => setActiveTab('why')}
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold transition ${
                            activeTab === 'why'
                                ? 'bg-teal-500 text-slate-950 shadow-md shadow-teal-500/20'
                                : 'bg-slate-900/80 text-slate-400 hover:bg-slate-800 hover:text-white'
                        }`}
                    >
                        <HelpCircle size={14} /> ⭐ Why Choose Us
                    </button>

                    <button
                        onClick={() => setActiveTab('stats')}
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold transition ${
                            activeTab === 'stats'
                                ? 'bg-teal-500 text-slate-950 shadow-md shadow-teal-500/20'
                                : 'bg-slate-900/80 text-slate-400 hover:bg-slate-800 hover:text-white'
                        }`}
                    >
                        <BarChart3 size={14} /> 📊 পরিসংখ্যান
                    </button>

                    <button
                        onClick={() => setActiveTab('contact')}
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold transition ${
                            activeTab === 'contact'
                                ? 'bg-teal-500 text-slate-950 shadow-md shadow-teal-500/20'
                                : 'bg-slate-900/80 text-slate-400 hover:bg-slate-800 hover:text-white'
                        }`}
                    >
                        <Phone size={14} /> 📞 কন্টাক্ট ও সোশ্যাল
                    </button>
                </div>

                {/* ==================== TAB: COURSES MANAGER ==================== */}
                {activeTab === 'courses' && (
                    <div className="space-y-8">
                        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8">
                            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                                <div>
                                    <h2 className="text-base font-bold text-white flex items-center gap-2">
                                        <Layers className="text-teal-400" size={18} />
                                        আমাদের জনপ্রিয় কোর্সসমূহ (Homepage Course Cards)
                                    </h2>
                                    <p className="text-xs text-slate-400 mt-1">
                                        হোমপেজের কোর্স কার্ডগুলোর ছবি, নাম, মূল্য এবং বিস্তারিত ল্যান্ডিং পেজের HTML কোড এখান থেকেই এডিট করুন।
                                    </p>
                                </div>
                                <button
                                    type="button"
                                    onClick={handleAddCourse}
                                    className="inline-flex items-center gap-2 rounded-2xl bg-teal-500 hover:bg-teal-400 px-4 py-2.5 text-xs font-black text-slate-950 transition shadow-md shadow-teal-500/20"
                                >
                                    <Plus size={14} /> নতুন কোর্স যুক্ত করুন (Add Course)
                                </button>
                            </div>

                            {/* Section Title & Subtitle */}
                            <div className="grid gap-4 sm:grid-cols-2 mb-8 p-4 bg-slate-950/60 rounded-2xl border border-slate-800">
                                <div>
                                    <label className="block text-xs font-bold text-slate-300 mb-1.5">সেকশন টাইটেল (Title)</label>
                                    <input
                                        type="text"
                                        value={settings.coursesSection?.title || ''}
                                        onChange={(e) => setSettings({
                                            ...settings,
                                            coursesSection: { ...settings.coursesSection, title: e.target.value }
                                        })}
                                        className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-2.5 text-xs text-white focus:border-teal-500 focus:outline-none"
                                        placeholder="আমাদের জনপ্রিয় কোর্সসমূহ"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-300 mb-1.5">সাবটাইটেল (Subtitle)</label>
                                    <input
                                        type="text"
                                        value={settings.coursesSection?.subtitle || ''}
                                        onChange={(e) => setSettings({
                                            ...settings,
                                            coursesSection: { ...settings.coursesSection, subtitle: e.target.value }
                                        })}
                                        className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-2.5 text-xs text-white focus:border-teal-500 focus:outline-none"
                                        placeholder="আপনার লক্ষ্য অনুযায়ী সঠিক কোর্সটি নির্বাচন করুন"
                                    />
                                </div>
                            </div>

                            {/* Course Items List */}
                            <div className="space-y-6">
                                {(settings.coursesSection?.items || []).map((course, idx) => (
                                    <div key={course.id || idx} className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 relative overflow-hidden">
                                        <div className="flex flex-wrap items-center justify-between gap-4 mb-4 pb-3 border-b border-slate-800/80">
                                            <span className="inline-flex items-center gap-2 text-xs font-black text-teal-400">
                                                <span className="h-6 w-6 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-300 text-xs">
                                                    {idx + 1}
                                                </span>
                                                {course.title || 'Course Card'}
                                            </span>
                                            <div className="flex items-center gap-2">
                                                <Link
                                                    href={course.url || `/courses/${course.id}`}
                                                    target="_blank"
                                                    className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white text-xs inline-flex items-center gap-1"
                                                >
                                                    <Eye size={12} /> প্রিভিউ
                                                </Link>
                                                <button
                                                    type="button"
                                                    onClick={() => handleRemoveCourse(idx)}
                                                    className="p-1.5 rounded-lg bg-rose-500/10 text-rose-400 hover:bg-rose-500/20 hover:text-rose-300 text-xs inline-flex items-center gap-1"
                                                >
                                                    <Trash2 size={12} /> রিমুভ
                                                </button>
                                            </div>
                                        </div>

                                        <div className="grid gap-4 sm:grid-cols-3 mb-4">
                                            {/* Image Preview & URL */}
                                            <div className="sm:col-span-1">
                                                <label className="block text-[11px] font-bold text-slate-400 mb-1.5">Course Image URL</label>
                                                <input
                                                    type="text"
                                                    value={course.image || ''}
                                                    onChange={(e) => handleCourseChange(idx, 'image', e.target.value)}
                                                    className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-white focus:border-teal-500 focus:outline-none mb-2"
                                                    placeholder="https://...png"
                                                />
                                                {course.image && (
                                                    <div className="h-28 w-full rounded-xl overflow-hidden bg-slate-900 border border-slate-800">
                                                        <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                                                    </div>
                                                )}
                                            </div>

                                            {/* Title & Description */}
                                            <div className="sm:col-span-2 space-y-3">
                                                <div>
                                                    <label className="block text-[11px] font-bold text-slate-400 mb-1">কোর্সের নাম (Course Title)</label>
                                                    <input
                                                        type="text"
                                                        value={course.title || ''}
                                                        onChange={(e) => handleCourseChange(idx, 'title', e.target.value)}
                                                        className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-white focus:border-teal-500 focus:outline-none"
                                                    />
                                                </div>

                                                <div>
                                                    <label className="block text-[11px] font-bold text-slate-400 mb-1">সংক্ষিপ্ত বিবরণ (Subtitle / Short Description)</label>
                                                    <textarea
                                                        rows={2}
                                                        value={course.subtitle || ''}
                                                        onChange={(e) => handleCourseChange(idx, 'subtitle', e.target.value)}
                                                        className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-white focus:border-teal-500 focus:outline-none"
                                                    />
                                                </div>

                                                <div className="grid grid-cols-3 gap-3">
                                                    <div>
                                                        <label className="block text-[11px] font-bold text-slate-400 mb-1">মূল্য (Price ৳)</label>
                                                        <input
                                                            type="text"
                                                            value={course.price || ''}
                                                            onChange={(e) => handleCourseChange(idx, 'price', e.target.value)}
                                                            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-emerald-400 font-bold focus:border-teal-500 focus:outline-none"
                                                            placeholder="5,000"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-[11px] font-bold text-slate-400 mb-1">আগের মূল্য (Discount Price)</label>
                                                        <input
                                                            type="text"
                                                            value={course.originalPrice || ''}
                                                            onChange={(e) => handleCourseChange(idx, 'originalPrice', e.target.value)}
                                                            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-slate-400 line-through focus:border-teal-500 focus:outline-none"
                                                            placeholder="6,000"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-[11px] font-bold text-slate-400 mb-1">ইন্সট্রাক্টর (Instructor)</label>
                                                        <input
                                                            type="text"
                                                            value={course.instructor || ''}
                                                            onChange={(e) => handleCourseChange(idx, 'instructor', e.target.value)}
                                                            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-white focus:border-teal-500 focus:outline-none"
                                                            placeholder="admin"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Link & HTML Content Option */}
                                        <div className="pt-3 border-t border-slate-800/80 space-y-3">
                                            <div>
                                                <label className="block text-[11px] font-bold text-slate-400 mb-1">
                                                    ক্লিক করলে যে পেজ আসবে (Details URL / Page Slug)
                                                </label>
                                                <input
                                                    type="text"
                                                    value={course.url || ''}
                                                    onChange={(e) => handleCourseChange(idx, 'url', e.target.value)}
                                                    className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-teal-300 font-mono focus:border-teal-500 focus:outline-none"
                                                    placeholder="/courses/one-on-one-english-mentorship"
                                                />
                                            </div>

                                            <div>
                                                <div className="flex items-center justify-between mb-1.5">
                                                    <label className="text-[11px] font-bold text-amber-400 flex items-center gap-1.5">
                                                        <Code2 size={13} />
                                                        কাস্টম HTML কোড পেস্ট করার অপশন (Custom Landing Page HTML)
                                                    </label>
                                                    <span className="text-[10px] text-slate-500">
                                                        এখানে আপনি যেকোনো HTML, ইউটিউব ভিডিও, ফর্ম বা ডিজাইন কোড পেস্ট করতে পারেন
                                                    </span>
                                                </div>
                                                <textarea
                                                    rows={4}
                                                    value={course.htmlContent || ''}
                                                    onChange={(e) => handleCourseChange(idx, 'htmlContent', e.target.value)}
                                                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-2.5 text-xs text-emerald-300 font-mono focus:border-teal-500 focus:outline-none"
                                                    placeholder="<div><h3>কোর্সটির বিশেষ সুবিধা...</h3><p>এখানে যেকোনো HTML কোড পেস্ট করতে পারেন।</p></div>"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* ==================== TAB: HERO BANNER ==================== */}
                {activeTab === 'hero' && (
                    <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
                        <div>
                            <h2 className="text-base font-bold text-white flex items-center gap-2">
                                <Sparkles className="text-teal-400" size={18} />
                                হিরো ব্যানার ও হেডলাইন (Hero Section)
                            </h2>
                            <p className="text-xs text-slate-400 mt-1">হোমপেজের প্রধান হেডলাইন, ব্যাজ এবং অ্যাকশন বাটন টেক্সট পরিবর্তন করুন।</p>
                        </div>

                        <div className="grid gap-5 sm:grid-cols-2">
                            <div className="sm:col-span-2">
                                <label className="block text-xs font-bold text-slate-300 mb-1.5">টপ ব্যাজ (Top Badge)</label>
                                <input
                                    type="text"
                                    value={settings.hero?.badge || ''}
                                    onChange={(e) => setSettings({
                                        ...settings,
                                        hero: { ...settings.hero, badge: e.target.value }
                                    })}
                                    className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-2.5 text-xs text-white focus:border-teal-500 focus:outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-300 mb-1.5">প্রধান টাইটেল (Title Text)</label>
                                <input
                                    type="text"
                                    value={settings.hero?.title || ''}
                                    onChange={(e) => setSettings({
                                        ...settings,
                                        hero: { ...settings.hero, title: e.target.value }
                                    })}
                                    className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-2.5 text-xs text-white focus:border-teal-500 focus:outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-teal-300 mb-1.5">হাইলাইট গ্রেডিয়েন্ট টেক্সট (Highlight Text)</label>
                                <input
                                    type="text"
                                    value={settings.hero?.highlightText || ''}
                                    onChange={(e) => setSettings({
                                        ...settings,
                                        hero: { ...settings.hero, highlightText: e.target.value }
                                    })}
                                    className="w-full rounded-xl border border-teal-500/50 bg-slate-900 px-4 py-2.5 text-xs text-teal-300 focus:border-teal-500 focus:outline-none"
                                />
                            </div>

                            <div className="sm:col-span-2">
                                <label className="block text-xs font-bold text-slate-300 mb-1.5">সাবটাইটেল / বর্ণনা (Subtitle)</label>
                                <textarea
                                    rows={2}
                                    value={settings.hero?.subtitle || ''}
                                    onChange={(e) => setSettings({
                                        ...settings,
                                        hero: { ...settings.hero, subtitle: e.target.value }
                                    })}
                                    className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-2.5 text-xs text-white focus:border-teal-500 focus:outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-300 mb-1.5">বাটন ১ টেক্সট (CTA 1 Text)</label>
                                <input
                                    type="text"
                                    value={settings.hero?.cta1Text || ''}
                                    onChange={(e) => setSettings({
                                        ...settings,
                                        hero: { ...settings.hero, cta1Text: e.target.value }
                                    })}
                                    className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-2.5 text-xs text-white focus:border-teal-500 focus:outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-300 mb-1.5">বাটন ১ লিংক (CTA 1 Link)</label>
                                <input
                                    type="text"
                                    value={settings.hero?.cta1Link || ''}
                                    onChange={(e) => setSettings({
                                        ...settings,
                                        hero: { ...settings.hero, cta1Link: e.target.value }
                                    })}
                                    className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-2.5 text-xs text-white focus:border-teal-500 focus:outline-none"
                                />
                            </div>
                        </div>
                    </div>
                )}

                {/* ==================== TAB: NOTICE ==================== */}
                {activeTab === 'notice' && (
                    <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
                        <div>
                            <h2 className="text-base font-bold text-white flex items-center gap-2">
                                <Megaphone className="text-rose-400" size={18} />
                                টপ চলমান নোটিশ ব্যানার (Running Notice Ticker)
                            </h2>
                            <p className="text-xs text-slate-400 mt-1">ওয়েবসাইটের সবচেয়ে ওপরে লাল ব্যানারে চলমান নোটিশ টেক্সট এডিট করুন।</p>
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-slate-300 mb-2">নোটিশ টেক্সট (Notice Text)</label>
                            <textarea
                                rows={3}
                                value={settings.noticeText || ''}
                                onChange={(e) => setSettings({ ...settings, noticeText: e.target.value })}
                                className="w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-xs text-white focus:border-teal-500 focus:outline-none"
                                placeholder="📢 নোটিশ..."
                            />
                        </div>
                    </div>
                )}

                {/* ==================== TAB: HUBS ==================== */}
                {activeTab === 'hubs' && (
                    <div className="grid gap-8 lg:grid-cols-2">
                        {/* Spoken English Hub Settings */}
                        <div className="bg-slate-900/60 border border-teal-500/20 rounded-3xl p-6 sm:p-8 space-y-5">
                            <h3 className="text-sm font-bold text-teal-400 flex items-center gap-2">
                                <Radio size={16} /> Spoken English Hub Card
                            </h3>
                            <div>
                                <label className="block text-xs font-bold text-slate-300 mb-1">কার্ড টাইটেল</label>
                                <input
                                    type="text"
                                    value={settings.spokenHub?.title || ''}
                                    onChange={(e) => setSettings({
                                        ...settings,
                                        spokenHub: { ...settings.spokenHub, title: e.target.value }
                                    })}
                                    className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-white"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-300 mb-1">বর্ণনা</label>
                                <textarea
                                    rows={2}
                                    value={settings.spokenHub?.description || ''}
                                    onChange={(e) => setSettings({
                                        ...settings,
                                        spokenHub: { ...settings.spokenHub, description: e.target.value }
                                    })}
                                    className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-white"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-300 mb-1">বাটন টেক্সট</label>
                                <input
                                    type="text"
                                    value={settings.spokenHub?.buttonText || ''}
                                    onChange={(e) => setSettings({
                                        ...settings,
                                        spokenHub: { ...settings.spokenHub, buttonText: e.target.value }
                                    })}
                                    className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-white"
                                />
                            </div>
                        </div>

                        {/* IELTS Academic Hub Settings */}
                        <div className="bg-slate-900/60 border border-indigo-500/20 rounded-3xl p-6 sm:p-8 space-y-5">
                            <h3 className="text-sm font-bold text-indigo-400 flex items-center gap-2">
                                <GraduationCap size={16} /> Cambridge IELTS Hub Card
                            </h3>
                            <div>
                                <label className="block text-xs font-bold text-slate-300 mb-1">কার্ড টাইটেল</label>
                                <input
                                    type="text"
                                    value={settings.ieltsHub?.title || ''}
                                    onChange={(e) => setSettings({
                                        ...settings,
                                        ieltsHub: { ...settings.ieltsHub, title: e.target.value }
                                    })}
                                    className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-white"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-300 mb-1">বর্ণনা</label>
                                <textarea
                                    rows={2}
                                    value={settings.ieltsHub?.description || ''}
                                    onChange={(e) => setSettings({
                                        ...settings,
                                        ieltsHub: { ...settings.ieltsHub, description: e.target.value }
                                    })}
                                    className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-white"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-300 mb-1">বাটন টেক্সট</label>
                                <input
                                    type="text"
                                    value={settings.ieltsHub?.buttonText || ''}
                                    onChange={(e) => setSettings({
                                        ...settings,
                                        ieltsHub: { ...settings.ieltsHub, buttonText: e.target.value }
                                    })}
                                    className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-white"
                                />
                            </div>
                        </div>
                    </div>
                )}

                {/* ==================== TAB: WHY CHOOSE US ==================== */}
                {activeTab === 'why' && (
                    <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
                        <div>
                            <h2 className="text-base font-bold text-white flex items-center gap-2">
                                <HelpCircle className="text-amber-400" size={18} />
                                Why Choose Us (৪টি সুবিধা কার্ড)
                            </h2>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2">
                            {(settings.whyChooseUs?.cards || []).map((card, idx) => (
                                <div key={idx} className="p-4 rounded-2xl border border-slate-800 bg-slate-950 space-y-3">
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-bold text-teal-400">Card #{idx + 1}</span>
                                        <input
                                            type="text"
                                            value={card.badge}
                                            onChange={(e) => {
                                                const newCards = [...settings.whyChooseUs.cards];
                                                newCards[idx].badge = e.target.value;
                                                setSettings({
                                                    ...settings,
                                                    whyChooseUs: { ...settings.whyChooseUs, cards: newCards }
                                                });
                                            }}
                                            className="rounded-lg border border-slate-700 bg-slate-900 px-2.5 py-1 text-[10px] text-amber-300 font-bold uppercase w-20 text-center"
                                        />
                                    </div>
                                    <input
                                        type="text"
                                        value={card.title}
                                        onChange={(e) => {
                                            const newCards = [...settings.whyChooseUs.cards];
                                            newCards[idx].title = e.target.value;
                                            setSettings({
                                                ...settings,
                                                whyChooseUs: { ...settings.whyChooseUs, cards: newCards }
                                            });
                                        }}
                                        className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-white font-bold"
                                    />
                                    <textarea
                                        rows={2}
                                        value={card.description}
                                        onChange={(e) => {
                                            const newCards = [...settings.whyChooseUs.cards];
                                            newCards[idx].description = e.target.value;
                                            setSettings({
                                                ...settings,
                                                whyChooseUs: { ...settings.whyChooseUs, cards: newCards }
                                            });
                                        }}
                                        className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-slate-300"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* ==================== TAB: STATS ==================== */}
                {activeTab === 'stats' && (
                    <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
                        <h2 className="text-base font-bold text-white flex items-center gap-2">
                            <BarChart3 className="text-cyan-400" size={18} />
                            পরিসংখ্যান ও ট্রাস্ট কাউন্টার
                        </h2>
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                                <label className="block text-[11px] font-bold text-slate-400">Stat 1 Value</label>
                                <input
                                    type="text"
                                    value={settings.stats?.stat1Value || ''}
                                    onChange={(e) => setSettings({
                                        ...settings,
                                        stats: { ...settings.stats, stat1Value: e.target.value }
                                    })}
                                    className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-white font-black"
                                />
                                <input
                                    type="text"
                                    value={settings.stats?.stat1Label || ''}
                                    onChange={(e) => setSettings({
                                        ...settings,
                                        stats: { ...settings.stats, stat1Label: e.target.value }
                                    })}
                                    className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs text-slate-400"
                                />
                            </div>

                            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                                <label className="block text-[11px] font-bold text-teal-400">Stat 2 Value</label>
                                <input
                                    type="text"
                                    value={settings.stats?.stat2Value || ''}
                                    onChange={(e) => setSettings({
                                        ...settings,
                                        stats: { ...settings.stats, stat2Value: e.target.value }
                                    })}
                                    className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-teal-400 font-black"
                                />
                                <input
                                    type="text"
                                    value={settings.stats?.stat2Label || ''}
                                    onChange={(e) => setSettings({
                                        ...settings,
                                        stats: { ...settings.stats, stat2Label: e.target.value }
                                    })}
                                    className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs text-slate-400"
                                />
                            </div>

                            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                                <label className="block text-[11px] font-bold text-indigo-400">Stat 3 Value</label>
                                <input
                                    type="text"
                                    value={settings.stats?.stat3Value || ''}
                                    onChange={(e) => setSettings({
                                        ...settings,
                                        stats: { ...settings.stats, stat3Value: e.target.value }
                                    })}
                                    className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-indigo-400 font-black"
                                />
                                <input
                                    type="text"
                                    value={settings.stats?.stat3Label || ''}
                                    onChange={(e) => setSettings({
                                        ...settings,
                                        stats: { ...settings.stats, stat3Label: e.target.value }
                                    })}
                                    className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs text-slate-400"
                                />
                            </div>

                            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                                <label className="block text-[11px] font-bold text-cyan-400">Stat 4 Value</label>
                                <input
                                    type="text"
                                    value={settings.stats?.stat4Value || ''}
                                    onChange={(e) => setSettings({
                                        ...settings,
                                        stats: { ...settings.stats, stat4Value: e.target.value }
                                    })}
                                    className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-cyan-400 font-black"
                                />
                                <input
                                    type="text"
                                    value={settings.stats?.stat4Label || ''}
                                    onChange={(e) => setSettings({
                                        ...settings,
                                        stats: { ...settings.stats, stat4Label: e.target.value }
                                    })}
                                    className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs text-slate-400"
                                />
                            </div>
                        </div>
                    </div>
                )}

                {/* ==================== TAB: CONTACT ==================== */}
                {activeTab === 'contact' && (
                    <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
                        <h2 className="text-base font-bold text-white flex items-center gap-2">
                            <Phone className="text-teal-400" size={18} />
                            যোগাযোগ ও সোশ্যাল মিডিয়া লিংক (Contact & Social Links)
                        </h2>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <div>
                                <label className="block text-xs font-bold text-emerald-400 mb-1">WhatsApp Number</label>
                                <input
                                    type="text"
                                    value={settings.contact?.whatsappNumber || ''}
                                    onChange={(e) => setSettings({
                                        ...settings,
                                        contact: { ...settings.contact, whatsappNumber: e.target.value }
                                    })}
                                    className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-white"
                                    placeholder="01714740430"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-300 mb-1">Hotline Phone</label>
                                <input
                                    type="text"
                                    value={settings.contact?.hotlinePhone || ''}
                                    onChange={(e) => setSettings({
                                        ...settings,
                                        contact: { ...settings.contact, hotlinePhone: e.target.value }
                                    })}
                                    className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-white"
                                    placeholder="01714740430"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-blue-400 mb-1">Facebook Page URL</label>
                                <input
                                    type="text"
                                    value={settings.contact?.facebookUrl || ''}
                                    onChange={(e) => setSettings({
                                        ...settings,
                                        contact: { ...settings.contact, facebookUrl: e.target.value }
                                    })}
                                    className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-white"
                                    placeholder="https://www.facebook.com/learncarebd"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-rose-400 mb-1">YouTube Channel URL</label>
                                <input
                                    type="text"
                                    value={settings.contact?.youtubeUrl || ''}
                                    onChange={(e) => setSettings({
                                        ...settings,
                                        contact: { ...settings.contact, youtubeUrl: e.target.value }
                                    })}
                                    className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-white"
                                    placeholder="https://youtube.com/@learncarebd"
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
