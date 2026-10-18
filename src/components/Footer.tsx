import Link from 'next/link';
import { getDynamicPageContent } from '../lib/dynamicPages';

export default async function Footer() {
    const data = await getDynamicPageContent('FOOTER_SETTINGS');
    
    // Default columns if none exist
    const columns = data?.columns || [
        {
            title: 'Important Links',
            links: [
                { label: 'সকল কোর্স', url: '/#courses' },
                { label: 'ফ্রি লেভেল টেস্ট', url: '/level-test' },
                { label: 'বই সম্ভার (Store)', url: '/books' },
                { label: 'স্টুডেন্ট লগইন', url: '/login' }
            ]
        },
        {
            title: 'Services',
            links: [
                { label: 'Spoken Hub', url: '/dashboard/spoken-english' },
                { label: 'IELTS Hub', url: '/dashboard' }
            ]
        }
    ];

    return (
        <footer className="bg-slate-900 border-t border-slate-800">
            <div className="max-w-6xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-b border-slate-800 pb-16">
                    <div className="lg:col-span-1 space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 bg-gradient-to-tr from-teal-500 to-emerald-400 rounded-xl flex items-center justify-center shadow-lg shadow-teal-500/20">
                                <span className="text-white font-black text-xl tracking-tighter">IL</span>
                            </div>
                            <span className="text-2xl font-black text-white tracking-tight">LearnCare</span>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                            Empowering students with smart learning tools, AI assistance, and premium courses for IELTS and Spoken English.
                        </p>
                    </div>

                    {columns.map((col: any, idx: number) => (
                        <div key={idx}>
                            <h4 className="font-bold text-white mb-5 uppercase tracking-wider text-xs">{col.title}</h4>
                            <ul className="space-y-3 text-slate-400 text-sm">
                                {col.links.map((link: any, lIdx: number) => (
                                    <li key={lIdx}>
                                        <Link href={link.url} className="hover:text-emerald-400 transition">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
                    <p>© {new Date().getFullYear()} LearnCare Academy. All rights reserved.</p>
                    <div className="flex gap-4">
                        <Link href="/terms" className="hover:text-slate-300">Terms</Link>
                        <Link href="/privacy" className="hover:text-slate-300">Privacy Policy</Link>
                        <Link href="/about" className="hover:text-slate-300">About Us</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
