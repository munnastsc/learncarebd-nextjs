import { getDynamicPageContent } from '../../lib/dynamicPages';
import { Metadata } from 'next';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
    title: 'Terms & Privacy - ILTES',
    description: 'Terms of service and privacy policy for ILTES.',
};

export default async function TermsPage() {
    const data = await getDynamicPageContent('TERMS_PRIVACY');
    const defaultContent = `
        <div class="space-y-8 font-sans text-slate-800">
            <div>
                <h1 class="text-3xl font-black text-slate-950 mb-2">সেবার শর্তাবলী ও নীতিমালা (Terms & Conditions)</h1>
                <p class="text-sm text-slate-500">সর্বশেষ আপডেট: অক্টোবর ২০২৬ | LearnCare Academy</p>
            </div>

            <div class="bg-indigo-50/60 border border-indigo-150 p-6 rounded-2xl text-sm leading-relaxed">
                <p class="font-bold text-indigo-950 mb-1">স্বাগতম LearnCare Academy-তে!</p>
                LearnCare Academy (learncarebd.com) বাংলাদেশের শিক্ষার্থীদের স্পোকেন ইংলিশ, ব্রিটিশ ফনেটিক্স (IPA) এবং Cambridge IELTS প্রস্তুতির জন্য একটি স্বয়ংক্রিয় এআই-চালিত ডিজিটাল শিক্ষা প্ল্যাটফর্ম। এই প্ল্যাটফর্ম ব্যবহার করে আপনি নিচের শর্তাবলী মেনে নিতে সম্মত হচ্ছেন।
            </div>

            <section class="space-y-4">
                <h2 class="text-xl font-bold text-slate-900 border-b border-slate-200 pb-2">১. শিক্ষার্থী অ্যাকাউন্ট ও প্রবেশাধিকার</h2>
                <ul class="list-disc pl-5 space-y-2 text-sm text-slate-700 leading-relaxed">
                    <li>প্ল্যাটফর্মের সুবিধা নিতে শিক্ষার্থীকে তার সঠিক ইমেইল ও পাসওয়ার্ড দিয়ে একাউন্ট তৈরি করতে হবে।</li>
                    <li>একটি অ্যাকাউন্ট কেবলমাত্র একজন শিক্ষার্থীর ব্যক্তিগত ব্যবহারের জন্য। অ্যাকাউন্টের অ্যাক্সেস অন্য কারো সাথে শেয়ার করা সম্পূর্ণ নিষিদ্ধ।</li>
                    <li>অ্যাকাউন্টের পাসওয়ার্ড ও তথ্যের গোপনীয়তা রক্ষার দায়িত্ব শিক্ষার্থীর নিজের।</li>
                </ul>
            </section>

            <section class="space-y-4">
                <h2 class="text-xl font-bold text-slate-900 border-b border-slate-200 pb-2">২. কোর্স ও সাবস্ক্রিপশন ফি (Payments)</h2>
                <ul class="list-disc pl-5 space-y-2 text-sm text-slate-700 leading-relaxed">
                    <li>প্ল্যাটফর্মের প্রিমিয়াম ফিচার (Headway ডিকটেশন, AI Speaking, Writing ব্যান্ড স্কোরিং, Cambridge টেস্ট ইত্যাদি) অ্যাক্সেস পেতে নির্ধারিত মাসিক সাবস্ক্রিপশন বা কোর্স ফি বিকাশ/নগদে পরিশোধ করতে হবে।</li>
                    <li>পেমেন্ট সম্পন্ন করার পর প্রাপ্ত ট্রানজেকশন আইডি (TrxID) দিয়ে সাবমিট করার পর আমাদের অটোমেটেড সিস্টেম বা অ্যাডমিন ভেরিফিকেশনের মাধ্যমে অ্যাক্সেস উন্মুক্ত করা হয়।</li>
                </ul>
            </section>

            <section class="space-y-4">
                <h2 class="text-xl font-bold text-slate-900 border-b border-slate-200 pb-2">৩. রিফান্ড ও বাতিলকরণ পলিসি (Refund Policy)</h2>
                <div class="bg-emerald-50/70 border border-emerald-200 p-5 rounded-2xl space-y-2 text-sm text-slate-800 leading-relaxed">
                    <p class="font-bold text-emerald-950">আমাদের রিফান্ড অঙ্গীকার:</p>
                    <p>LearnCare Academy শিক্ষার্থীদের সর্বোচ্চ সন্তুষ্টি নিশ্চিত করতে প্রতিশ্রুতিবদ্ধ। সাবস্ক্রিপশন ফি বা কোর্স ফি প্রদানের পর যদি কারিগরি কোনো সমস্যার কারণে সার্ভিস অ্যাক্সেস করতে না পারেন এবং আমাদের টেকনিক্যাল টিম ২৪ ঘণ্টার মধ্যে তা সমাধান করতে ব্যর্থ হয়, তবে আপনি রিফান্ডের আবেদন করতে পারবেন।</p>
                    <p>বই অর্ডারের ক্ষেত্রে যদি ক্ষতিগ্রস্ত বা ভুল বই পৌঁছায়, তবে কোনো অতিরিক্ত ডেলিভারি চার্জ ছাড়াই ৩ দিনের মধ্যে বই পরিবর্তন অথবা সম্পূর্ণ অর্থ ফেরত দেওয়া হবে।</p>
                    <p>রিফান্ডের আবেদনের জন্য ট্রানজেকশন বিবরণসহ ইমেইল করুন: <a href="mailto:learncareofficial@gmail.com" class="text-emerald-700 font-bold underline">learncareofficial@gmail.com</a> অথবা হোয়াটসঅ্যাপে যোগাযোগ করুন: <b>01714740430</b>।</p>
                </div>
            </section>

            <section class="space-y-4">
                <h2 class="text-xl font-bold text-slate-900 border-b border-slate-200 pb-2">৪. মেধা ও কপিরাইট স্বত্ব (Intellectual Property)</h2>
                <p class="text-sm text-slate-700 leading-relaxed">
                    LearnCare Academy-র সকল স্টাডি ম্যাটেরিয়ালস, সফটওয়্যার কোড, ডিজাইন, অডিও ডিকটেশন ও এআই মডেলের আউটপুট কপিরাইট আইনের আওতায় সংরক্ষিত। কোনো কনটেন্ট বাণিজ্যিক উদ্দেশ্যে পুনঃউৎপাদন, পাইরেসি বা বিনা অনুমতিতে বিতরণ আইনত দণ্ডনীয়।
                </p>
            </section>

            <section class="space-y-4">
                <h2 class="text-xl font-bold text-slate-900 border-b border-slate-200 pb-2">৫. যোগাযোগ ও হেল্পলাইন</h2>
                <p class="text-sm text-slate-700 leading-relaxed">যেকোনো প্রশ্ন, অভিযোগ বা সহযোগিতার জন্য আমাদের হেল্পলাইনে যোগাযোগ করতে পারেন:</p>
                <div class="text-sm text-slate-700 bg-slate-50 p-4 rounded-xl space-y-1">
                    <p>📧 <b>ইমেইল:</b> learncareofficial@gmail.com</p>
                    <p>📞 <b>হটলাইন / WhatsApp:</b> +8801714740430</p>
                    <p>🌐 <b>ওয়েবসাইট:</b> learncarebd.com</p>
                </div>
            </section>
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
