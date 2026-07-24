'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Lock, Sparkles, LogOut, CreditCard } from 'lucide-react';

interface SubscriptionGuardProps {
    children: React.ReactNode;
    isSubscribed: boolean;
    subscriptionEnd: string | null;
    hasExpired: boolean;
}

export default function SubscriptionGuard({
    children,
    isSubscribed,
    subscriptionEnd,
    hasExpired,
}: SubscriptionGuardProps) {
    const pathname = usePathname();
    const router = useRouter();

    // Allow access to the payment page without restriction
    if (pathname === '/dashboard/payment') {
        return <>{children}</>;
    }

    const formattedDate = subscriptionEnd
        ? new Date(subscriptionEnd).toLocaleDateString('bn-BD', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
          })
        : null;

    const handleLogout = async () => {
        // Clear student session cookie by calling standard logout or simply setting cookie expire
        document.cookie = 'student_session=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        router.push('/login');
    };

    // If student is not subscribed or subscription is expired, lock the screen
    if (!isSubscribed || hasExpired) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 flex items-center justify-center px-4 relative overflow-hidden">
                {/* Background glowing effects */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" />

                <div className="w-full max-w-lg relative z-10">
                    <div className="bg-slate-900/70 backdrop-blur-2xl border border-slate-800/80 rounded-3xl p-8 shadow-2xl text-center">
                        <div className="flex justify-center mb-6">
                            <div className="relative">
                                <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-pink-600 to-indigo-500 blur opacity-40 animate-pulse" />
                                <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-slate-950 border border-slate-800 text-pink-400">
                                    <Lock size={28} />
                                </div>
                            </div>
                        </div>

                        <span className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-indigo-300 mb-4">
                            <Sparkles size={10} />
                            Access Locked — Subscription Required
                        </span>

                        <h2 className="text-2xl font-black text-white tracking-tight mb-3">
                            {hasExpired ? 'তোমার মেয়াদ শেষ হয়ে গেছে!' : 'প্রিমিয়াম অ্যাক্সেস প্রয়োজন!'}
                        </h2>

                        <p className="text-sm text-slate-300 leading-relaxed mb-6">
                            {hasExpired
                                ? `তোমার LearnCareBD AI মেম্বারশিপের মেয়াদ ${formattedDate ? formattedDate : ''} তারিখে শেষ হয়েছে। পড়াশোনা ও প্র্যাকটিস চালিয়ে যেতে দয়া করে সাবস্ক্রিপশনটি রিনিউ করো।`
                                : 'এই কোর্স এবং AI Tutor এর সমস্ত ফিচার ব্যবহার করতে হলে তোমাকে প্রিমিয়াম সাবস্ক্রিপশন নিতে হবে। নিচে থাকা বাটনে ক্লিক করে পেমেন্ট সম্পন্ন করো।'}
                        </p>

                        <div className="grid gap-3 sm:grid-cols-2">
                            <button
                                onClick={() => router.push('/dashboard/payment')}
                                className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-pink-600 to-indigo-600 px-5 py-3 text-sm font-bold text-white hover:from-pink-500 hover:to-indigo-500 transition shadow-lg shadow-pink-500/20"
                            >
                                <CreditCard size={16} /> Subscription রিনিউ করো
                            </button>

                            <button
                                onClick={handleLogout}
                                className="flex items-center justify-center gap-2 rounded-xl border border-slate-800 bg-slate-950/60 px-5 py-3 text-sm font-bold text-slate-400 hover:text-white hover:bg-slate-900 transition"
                            >
                                <LogOut size={16} /> Logout (লগআউট)
                            </button>
                        </div>

                        <div className="mt-8 pt-6 border-t border-slate-800/60 text-xs text-slate-500">
                            যে কোনো সমস্যায় আমাদের সাথে যোগাযোগ করো: support@learncarebd.com
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return <>{children}</>;
}
