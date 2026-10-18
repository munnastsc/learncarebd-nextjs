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
    const defaultContent = `
        <div class="space-y-8 font-sans text-slate-800">
            <div>
                <span class="text-xs font-bold text-teal-600 uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                    Our Mission & Vision
                </span>
                <h1 class="text-3xl sm:text-4xl font-black text-slate-950 mt-3 mb-2">আমাদের সম্পর্কে (About LearnCare Academy)</h1>
                <p class="text-sm text-slate-500">ইংরেজি শেখা ও ক্যারিয়ার গড়ার বিশ্বস্ত এআই এডটেক প্ল্যাটফর্ম</p>
            </div>

            <div class="bg-gradient-to-r from-teal-50 to-indigo-50 border border-teal-150 p-6 md:p-8 rounded-2xl text-slate-700 leading-relaxed text-base space-y-3">
                <p class="font-bold text-slate-900 text-lg">💡 আমাদের লক্ষ্য:</p>
                <p>
                    LearnCare Academy বাংলাদেশের সাধারণ শিক্ষার্থীদের ভাষাভীতি দূর করে আত্মবিশ্বাসের সাথে সাবলীল ইংরেজি কথা বলা এবং IELTS-এ Band 7.5+ অর্জন করতে সক্ষম করে তোলার এক অনন্য শিক্ষামূলক উদ্যোগ। 
                </p>
                <p>
                    গতানুগতিক নিয়মের বাইরে এসে আধুনিক ব্রিটিশ ফনেটিক্স (IPA), New Headway ইন্টারেক্টিভ অডিও ডিকটেশন এবং সর্বাধুনিক কৃত্রিম বুদ্ধিমত্তা (AI)-চালিত স্পিকিং ও রাইটিং ইভ্যালুয়েশন সিস্টেমকে আমরা দেশের প্রতিটি প্রান্তে প্রতিটি শিক্ষার্থীর হাতের মুঠোয় পৌঁছে দিয়েছি।
                </p>
            </div>

            <div class="grid sm:grid-cols-2 gap-4">
                <div class="bg-white border border-slate-200 p-6 rounded-2xl shadow-xs space-y-2">
                    <span class="text-2xl">🎯</span>
                    <h3 class="font-bold text-slate-900 text-base">স্মার্ট এআই লার্নিং</h3>
                    <p class="text-xs text-slate-600 leading-relaxed">
                        মুখস্থ না করে বাস্তব কথোপকথন ও এআই টিউটরের সাথে ভয়েস চ্যাটের মাধ্যমে ভুলগুলো তাৎক্ষণিকভাবে শুধরে নেওয়ার সুযোগ।
                    </p>
                </div>
                <div class="bg-white border border-slate-200 p-6 rounded-2xl shadow-xs space-y-2">
                    <span class="text-2xl">🎧</span>
                    <h3 class="font-bold text-slate-900 text-base">ব্রিটিশ অ্যাকসেন্ট ও ডিকটেশন</h3>
                    <p class="text-xs text-slate-600 leading-relaxed">
                        সঠিক উচ্চারণ, স্ট্রেস ও ইনটোনেশন আয়ত্ত করতে Cambridge ও Oxford স্ট্যান্ডার্ড অডিও ল্যাব সুবিধা।
                    </p>
                </div>
                <div class="bg-white border border-slate-200 p-6 rounded-2xl shadow-xs space-y-2">
                    <span class="text-2xl">📚</span>
                    <h3 class="font-bold text-slate-900 text-base">Cambridge 9-20 Hub</h3>
                    <p class="text-xs text-slate-600 leading-relaxed">
                        IELTS পরীক্ষার সম্পূর্ণ মক টেস্ট, প্যাসেজ অ্যানালাইসিস এবং ব্যান্ড প্রেডিক্টরের সমন্বয়ে আন্তর্জাতিক মানের প্রস্তুতি।
                    </p>
                </div>
                <div class="bg-white border border-slate-200 p-6 rounded-2xl shadow-xs space-y-2">
                    <span class="text-2xl">👨‍🏫</span>
                    <h3 class="font-bold text-slate-900 text-base">ওয়ান-অন-ওয়ান কেয়ার</h3>
                    <p class="text-xs text-slate-600 leading-relaxed">
                        ব্যক্তিগত দুর্বলতা চিহ্নিত করে অভিজ্ঞ মেন্টরের নিবিড় তত্ত্বাবধানে দ্রুত ফ্লুয়েন্সি অর্জনের নিশ্চয়তা।
                    </p>
                </div>
            </div>

            <div class="bg-slate-50 border border-slate-200 p-6 rounded-2xl space-y-2 text-sm text-slate-700">
                <h3 class="font-bold text-slate-900 text-base">📞 আমাদের সাথে যোগাযোগ</h3>
                <p>আমাদের যেকোনো কোর্স, বই অথবা একাডেমি সম্পর্কে বিস্তারিত জানতে সরাসরি কল বা হোয়াটসঅ্যাপ করুন:</p>
                <div class="pt-2 space-y-1">
                    <p>📱 <b>হটলাইন / WhatsApp:</b> +8801714740430</p>
                    <p>📧 <b>অফিসিয়াল ইমেইল:</b> learncareofficial@gmail.com</p>
                    <p>🌐 <b>ওয়েবসাইট:</b> learncarebd.com</p>
                </div>
            </div>
        </div>
    `;
    const html = data?.html && data.html.trim().length > 50 ? data.html : defaultContent;

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar />
            <main className="flex-1">
                <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
                    <div 
                        className="prose prose-slate max-w-none"
                        dangerouslySetInnerHTML={{ __html: html }}
                    />
                </div>
            </main>
            <Footer />
        </div>
    );
}
