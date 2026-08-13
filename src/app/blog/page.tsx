'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Clock, Calendar, Sparkles, ChevronRight, X } from 'lucide-react';

type BlogPost = {
    id: string;
    title: string;
    content: string;
    type: string;
    link: string | null;
    imageUrl: string | null;
    createdAt: string;
};

export default function BlogPage() {
    const [blogs, setBlogs] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await fetch('/api/custom-posts');
                if (res.ok) {
                    const data = await res.json();
                    // Filter for type BLOG or general POST
                    const blogPosts = data.filter((p: any) => p.type === 'BLOG' || p.type === 'POST');
                    setBlogs(blogPosts);
                }
            } catch (e) {
                console.error('Failed to load blog posts:', e);
            } finally {
                setLoading(false);
            }
        };
        fetchBlogs();
    }, []);

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between overflow-hidden relative selection:bg-teal-500 selection:text-slate-900">
            {/* Background glowing decorations */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-teal-500/10 blur-[120px] pointer-events-none" />

            {/* Navigation Header */}
            <header className="border-b border-slate-800/60 bg-slate-900/60 backdrop-blur-md px-6 py-4 relative z-10">
                <div className="mx-auto max-w-6xl flex flex-wrap items-center justify-between gap-4">
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="bg-white px-2 py-1 rounded-lg shadow-sm border border-white/20 flex items-center justify-center group-hover:scale-105 transition">
                            <img 
                                src="https://learncarebd.com/wp-content/uploads/2025/12/Learncare-academy-1-scaled.png" 
                                alt="LearnCareBD Logo" 
                                className="h-8 w-auto object-contain"
                            />
                        </div>
                        <div>
                            <p className="text-xs font-black uppercase tracking-wider text-teal-400">Learncare Academy</p>
                            <p className="text-[10px] text-slate-400">Official Blog</p>
                        </div>
                    </Link>

                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                        <Link 
                            href="/" 
                            className="inline-flex items-center gap-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 px-3.5 py-1.5 text-xs font-bold transition border border-slate-700"
                        >
                            🏠 হোম পেজ (Home)
                        </Link>
                        <Link 
                            href="/dashboard/spoken-english" 
                            className="inline-flex items-center gap-1.5 rounded-xl bg-teal-500/10 hover:bg-teal-500/20 text-teal-300 px-3 py-1.5 text-xs font-bold transition border border-teal-500/30"
                        >
                            🗣️ Spoken English
                        </Link>
                        <Link 
                            href="/dashboard" 
                            className="inline-flex items-center gap-1.5 rounded-xl bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 px-3 py-1.5 text-xs font-bold transition border border-indigo-500/30"
                        >
                            🎓 IELTS Academic
                        </Link>
                        <a 
                            href="https://wa.me/8801714740430" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hidden sm:inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-1.5 text-xs font-black transition shadow-sm"
                        >
                            💬 WA: 01714740430
                        </a>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="mx-auto max-w-6xl px-6 py-12 lg:py-20 flex-1 relative z-10 w-full">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-teal-300 mb-4">
                        <Sparkles size={10} />
                        LATEST INSIGHTS & ARTICLES
                    </span>
                    <h2 className="text-4xl font-black tracking-tight sm:text-5xl text-white">
                        Official Blog
                    </h2>
                    <p className="mt-4 text-xs text-slate-400 leading-relaxed">
                        ইংরেজি শেখা, আইইএলটিএস প্রস্তুতি এবং গ্রামার সম্পর্কিত আমাদের সর্বশেষ টিপস, ট্রিকস এবং রিসোর্স পড়ুন।
                    </p>
                </div>

                {loading ? (
                    <div className="flex justify-center py-20">
                        <span className="w-10 h-10 rounded-full border-4 border-slate-800 border-t-teal-500 animate-spin" />
                    </div>
                ) : blogs.length === 0 ? (
                    <div className="text-center py-20 border border-dashed border-slate-800 rounded-3xl bg-slate-900/10 max-w-md mx-auto">
                        <BookOpen size={44} className="mx-auto text-slate-550 mb-4" />
                        <p className="text-sm font-bold text-slate-400">কোনো ব্লগ পোস্ট পাওয়া যায়নি।</p>
                        <p className="text-xs text-slate-500 mt-1">শীঘ্রই আমাদের প্রথম ব্লগ পোস্ট প্রকাশ করা হবে।</p>
                    </div>
                ) : (
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {blogs.map((blog) => (
                            <div key={blog.id} className="group relative rounded-3xl border border-slate-800 bg-slate-900/40 overflow-hidden flex flex-col justify-between hover:border-slate-700 transition duration-300">
                                <div>
                                    {blog.imageUrl ? (
                                        <div className="h-48 w-full overflow-hidden border-b border-slate-800 relative">
                                            <img src={blog.imageUrl} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                        </div>
                                    ) : (
                                        <div className="h-48 w-full bg-slate-900 flex items-center justify-center border-b border-slate-800">
                                            <BookOpen size={36} className="text-slate-750" />
                                        </div>
                                    )}
                                    <div className="p-6">
                                        <div className="flex items-center gap-3 text-[10px] text-slate-500 font-semibold mb-3">
                                            <span className="flex items-center gap-1">
                                                <Calendar size={12} />
                                                {new Date(blog.createdAt).toLocaleDateString('bn-BD', { year: 'numeric', month: 'long', day: 'numeric' })}
                                            </span>
                                            <span className="bg-teal-500/15 text-teal-300 border border-teal-500/20 px-2 py-0.5 rounded text-[9px] uppercase font-black">
                                                {blog.type}
                                            </span>
                                        </div>
                                        <h3 className="font-bold text-white group-hover:text-teal-400 transition text-base leading-snug line-clamp-2">
                                            {blog.title}
                                        </h3>
                                        <div 
                                            className="mt-3 text-xs text-slate-400 leading-relaxed line-clamp-3 prose prose-invert animate-fade-in"
                                            dangerouslySetInnerHTML={{ __html: blog.content.replace(/<[^>]*>/g, '').slice(0, 150) + '...' }}
                                        />
                                    </div>
                                </div>
                                <div className="p-6 pt-0">
                                    <button 
                                        onClick={() => setSelectedBlog(blog)}
                                        className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-750 bg-slate-800/40 py-2.5 text-xs font-bold text-slate-300 hover:text-teal-400 hover:border-teal-500/40 transition"
                                    >
                                        বিস্তারিত পড়ুন <ChevronRight size={12} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>

            {/* Read Blog Modal */}
            {selectedBlog && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4 overflow-y-auto">
                    <div className="bg-slate-900 border border-slate-800 w-full max-w-3xl rounded-3xl p-6 md:p-8 shadow-2xl relative max-h-[90vh] flex flex-col my-8">
                        <button 
                            onClick={() => setSelectedBlog(null)}
                            className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition"
                        >
                            <X size={20} />
                        </button>
                        
                        <div className="overflow-y-auto pr-2 space-y-6">
                            <div className="flex items-center gap-3 text-xs text-slate-500 font-semibold mt-2">
                                <span className="flex items-center gap-1">
                                    <Calendar size={13} />
                                    {new Date(selectedBlog.createdAt).toLocaleDateString('bn-BD', { year: 'numeric', month: 'long', day: 'numeric' })}
                                </span>
                                <span className="bg-teal-500/15 text-teal-300 border border-teal-500/20 px-2.5 py-0.5 rounded text-[10px] uppercase font-black">
                                    {selectedBlog.type}
                                </span>
                            </div>

                            <h2 className="text-xl md:text-3xl font-black text-white leading-snug">
                                {selectedBlog.title}
                            </h2>

                            {selectedBlog.imageUrl && (
                                <img src={selectedBlog.imageUrl} alt={selectedBlog.title} className="w-full max-h-[300px] object-cover rounded-2xl border border-slate-800" />
                            )}

                            <div 
                                className="text-xs md:text-sm text-slate-300 leading-relaxed space-y-4 prose prose-invert max-w-none pt-4 border-t border-slate-800"
                                dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
                            />
                        </div>
                    </div>
                </div>
            )}

            {/* Footer */}
            <footer className="border-t border-slate-900/60 bg-slate-950 px-6 py-6 text-center text-xs text-slate-600 relative z-10">
                <p>© {new Date().getFullYear()} LearnCareBD AI. All rights reserved. Empowered by Gemini AI.</p>
            </footer>
        </div>
    );
}
