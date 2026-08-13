import { prisma } from '../../../lib/prisma';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { notFound } from 'next/navigation';

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const post = await prisma.customPost.findUnique({
        where: { id: id }
    });

    if (!post) {
        notFound();
    }

    // Format date
    const dateStr = new Date(post.createdAt).toLocaleDateString('bn-BD', {
        year: 'numeric', month: 'long', day: 'numeric'
    });

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between overflow-hidden relative selection:bg-teal-500 selection:text-slate-900">
            {/* Background glowing decorations */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-teal-500/10 blur-[120px] pointer-events-none" />

            {/* Navigation Header */}
            <header className="border-b border-slate-800/60 bg-slate-900/60 backdrop-blur-md px-6 py-4 relative z-10">
                <div className="mx-auto max-w-4xl flex items-center justify-between">
                    <Link href="/blog" className="flex items-center gap-2 text-slate-400 hover:text-teal-400 transition text-sm font-medium">
                        <ArrowLeft size={16} /> ফিরে যান
                    </Link>
                    <div className="flex items-center gap-4">
                        <Link href="/admin/content" className="text-xs bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white px-3 py-1.5 rounded-lg transition font-medium border border-slate-700">
                            ✏️ Edit Post in Admin
                        </Link>
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="bg-white px-2 py-1 rounded-lg shadow-sm border border-white/20 flex items-center justify-center group-hover:scale-105 transition">
                                <img 
                                    src="https://learncarebd.com/wp-content/uploads/2025/12/Learncare-academy-1-scaled.png" 
                                    alt="LearnCareBD Logo" 
                                    className="h-8 w-auto object-contain"
                                />
                            </div>
                        </Link>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 relative z-10 py-12 px-4 sm:px-6">
                <article className="mx-auto w-full max-w-[1400px] bg-slate-900/40 border border-slate-800/60 rounded-3xl p-4 md:p-10 shadow-2xl backdrop-blur-sm overflow-x-hidden">
                    {/* Header */}
                    <div className="mb-10 text-center">
                        <span className="inline-block px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 text-xs font-bold uppercase tracking-wider mb-4 border border-teal-500/20">
                            {post.type}
                        </span>
                        <h1 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                            {post.title}
                        </h1>
                        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm text-slate-400">
                            <div className="flex items-center gap-1.5">
                                <Calendar size={16} className="text-indigo-400" />
                                <span>{dateStr}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <Clock size={16} className="text-teal-400" />
                                <span>{Math.max(1, Math.ceil(post.content.length / 500))} মিনিট পাঠ</span>
                            </div>
                        </div>
                    </div>

                    {/* Image */}
                    {post.imageUrl && (
                        <div className="w-full aspect-video rounded-2xl overflow-hidden mb-10 border border-slate-800 bg-slate-950">
                            <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
                        </div>
                    )}

                    {/* Content */}
                    <div className="w-full text-slate-300">
                        {/* We use dangerouslySetInnerHTML in case the user scraped raw HTML */}
                        <div dangerouslySetInnerHTML={{ __html: post.content }} className="w-full overflow-hidden" />
                    </div>
                </article>
            </main>

            {/* Footer */}
            <footer className="border-t border-slate-800/60 bg-slate-950/80 backdrop-blur-md py-6 text-center relative z-10">
                <p className="text-xs font-medium text-slate-500">© {new Date().getFullYear()} LearnCare Academy. All rights reserved.</p>
            </footer>
        </div>
    );
}
