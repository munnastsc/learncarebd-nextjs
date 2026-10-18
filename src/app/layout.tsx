import './globals.css';
import type { Metadata } from 'next';
import ChatWidget from '../components/ChatWidget';
import WhatsAppFloating from '../components/WhatsAppFloating';

export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://learncarebd.com'),
    title: {
        default: 'LearnCare Academy - স্পোকেন ইংলিশ ও IELTS এআই লার্নিং প্ল্যাটফর্ম',
        template: '%s | LearnCare Academy',
    },
    description: 'ব্রিটিশ উচ্চারণ (IPA), New Headway ডিকটেশন, Cambridge 9-20 টেস্ট এবং AI স্পিকিং-রাইটিং মূল্যায়নে সাবলীল ইংরেজি শিখুন ঘরে বসেই।',
    keywords: [
        'IELTS preparation bangladesh',
        'spoken english course bd',
        'british pronunciation course',
        'learncare academy',
        'cambridge ielts mock test',
        'ai english tutor bangladesh',
    ],
    authors: [{ name: 'LearnCare Academy' }],
    openGraph: {
        title: 'LearnCare Academy - স্পোকেন ইংলিশ ও IELTS এআই লার্নিং প্ল্যাটফর্ম',
        description: 'সহজ পদ্ধতিতে স্পোকেন ইংলিশ ও IELTS Band 7.5+ প্রস্তুতি। রিয়েল-টাইম এআই স্পিকিং ও রাইটিং ইভ্যালুয়েশন।',
        url: 'https://learncarebd.com',
        siteName: 'LearnCare Academy',
        images: [
            {
                url: 'https://learncarebd.com/wp-content/uploads/2025/12/Learncare-academy-1-scaled.png',
                width: 1200,
                height: 630,
                alt: 'LearnCare Academy',
            },
        ],
        locale: 'bn_BD',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'LearnCare Academy - IELTS & Spoken English AI Platform',
        description: 'সহজ পদ্ধতিতে স্পোকেন ইংলিশ ও IELTS Band 7.5+ প্রস্তুতি।',
        images: ['https://learncarebd.com/wp-content/uploads/2025/12/Learncare-academy-1-scaled.png'],
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="bn" suppressHydrationWarning>
            <body suppressHydrationWarning className="antialiased bg-slate-50 text-slate-900">
                {children}
                <ChatWidget />
                <WhatsAppFloating />
            </body>
        </html>
    );
}
