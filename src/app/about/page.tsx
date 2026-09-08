import { getDynamicPageContent } from '../../lib/dynamicPages';
import { Metadata } from 'next';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
    title: 'About Us - ILTES',
    description: 'Learn more about ILTES and our mission.',
};

export default async function AboutPage() {
    const data = await getDynamicPageContent('ABOUT_US');
    const html = data?.html || '<div class="text-center py-20 text-slate-500">Content coming soon. Please update from the admin panel.</div>';

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 bg-white">
                <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
                    <div 
                        className="prose prose-slate prose-lg max-w-none prose-headings:font-bold prose-a:text-blue-600 hover:prose-a:text-blue-500"
                        dangerouslySetInnerHTML={{ __html: html }}
                    />
                </div>
            </main>
            <Footer />
        </div>
    );
}
