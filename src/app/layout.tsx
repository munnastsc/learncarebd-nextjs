import './globals.css';
import type { Metadata } from 'next';
import ChatWidget from '../components/ChatWidget';

export const metadata: Metadata = {
    title: 'LearnCareBD AI - IELTS & Spoken English Academy',
    description: 'Learn IELTS and Spoken English with automated tools, practice exercises, and grammar.',
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
            </body>
        </html>
    );
}
