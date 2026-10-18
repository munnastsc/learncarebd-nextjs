import { Metadata } from 'next';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Privacy Policy - LearnCare Academy',
    description: 'Privacy Policy and data security measures of LearnCare Academy & AI Platform.',
};

export default function PrivacyPage() {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar />
            <main className="flex-1">
                <div className="max-w-4xl mx-auto px-6 py-12 md:py-20 font-sans text-slate-800 space-y-8">
                    <div>
                        <span className="text-xs font-bold text-teal-600 uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                            Data Protection & Privacy
                        </span>
                        <h1 className="text-3xl sm:text-4xl font-black text-slate-950 mt-3 mb-2">গোপনীয়তা নীতিমালা (Privacy Policy)</h1>
                        <p className="text-sm text-slate-500">সর্বশেষ আপডেট: অক্টোবর ২০২৬ | LearnCare Academy</p>
                    </div>

                    <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl text-sm leading-relaxed text-slate-700">
                        LearnCare Academy (<a href="https://learncarebd.com" className="text-teal-600 font-semibold underline">learncarebd.com</a>) আপনার ব্যক্তিগত তথ্যের নিরাপত্তা এবং গোপনীয়তা বজায় রাখতে প্রতিশ্রুতিবদ্ধ। আমাদের প্ল্যাটফর্ম ব্যবহার করার সময় আমরা কীভাবে আপনার তথ্য সংগ্রহ, সংরক্ষণ ও সুরক্ষা করি, তা নিচে স্পষ্ট করা হয়েছে।
                    </div>

                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-2">১. আমরা কী কী তথ্য সংগ্রহ করি</h2>
                        <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700 leading-relaxed">
                            <li><b>অ্যাকাউন্ট সংক্রান্ত তথ্য:</b> রেজিস্ট্রেশন করার সময় আপনার নাম, ইমেইল ঠিকানা ও পাসওয়ার্ড।</li>
                            <li><b>পেমেন্ট তথ্য:</b> সাবস্ক্রিপশন এবং বই অর্ডারের ক্ষেত্রে বিকাশ/নগদ ট্রানজেকশন আইডি (TrxID) এবং বই ডেলিভারির জন্য আপনার মোবাইল নম্বর ও ঠিকানা।</li>
                            <li><b>মাইক্রোফোন ও অডিও ডেটা:</b> এআই স্পিকিং টেস্ট ও শ্যাডোয়িং প্র্যাকটিসের জন্য শিক্ষার্থী যখন ব্রাউজারে মাইক্রোফোনের অনুমতি প্রদান করেন, শুধুমাত্র তখনই অডিও রেকর্ড ও তাৎক্ষণিক মূল্যায়নের জন্য প্রসেস করা হয়।</li>
                            <li><b>শিক্ষণ অগ্রগতি (Learning Progress):</b> আপনার কুইজ স্কোর, লেভেল টেস্টের ফলাফল ও ভোকাবুলারি রিভিশন ডেটা।</li>
                        </ul>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-2">২. তথ্যের ব্যবহার ও উদ্দেশ্য</h2>
                        <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700 leading-relaxed">
                            <li>আপনার ব্যক্তিগত লার্নিং ড্যাশবোর্ড ও প্রিমিয়াম ফিচার আনলক রাখা।</li>
                            <li>স্পিকিং ও রাইটিং প্র্যাকটিসে রিয়েল-টাইম এআই স্কোরিং এবং ফিডব্যাক প্রদান।</li>
                            <li>অর্ডার স্ট্যাটাস এবং সাবস্ক্রিপশন অ্যাক্টিভেশন সংক্রান্ত WhatsApp/ইমেইল নোটিফিকেশন প্রদান।</li>
                            <li>আমাদের এআই ও প্ল্যাটফর্মের নির্ভুলতা এবং গতি আরও উন্নত করা।</li>
                        </ul>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-2">৩. অডিও ও ভয়েস ডেটা নিরাপত্তা</h2>
                        <div className="bg-emerald-50 border border-emerald-200 p-5 rounded-2xl text-sm text-emerald-900 leading-relaxed space-y-2">
                            <p className="font-bold">🔒 অডিও প্রসেসিং নিশ্চয়তা:</p>
                            <p>আপনার উচ্চারিত ভয়েস অডিও ফাইল কোনো থার্ড পার্টির কাছে বিক্রি বা অপ্রয়োজনীয়ভাবে সংরক্ষণ করা হয় না। এটি শুধুমাত্র এআই স্পিচ রিকগনিশন ও উচ্চারণ ত্রুটি চিহ্নিত করার জন্য ব্যবহৃত হয়।</p>
                        </div>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-2">৪. থার্ড-পার্টি ও ডেটা শেয়ারিং</h2>
                        <p className="text-sm text-slate-700 leading-relaxed">
                            আমরা কোনো অবস্থাতেই আপনার ফোন নম্বর, ইমেইল বা ব্যক্তিগত তথ্য বিজ্ঞাপনদাতা বা বাইরের কোনো বাণিজ্যিক প্রতিষ্ঠানের কাছে হস্তান্তর করি না। কেবল পেমেন্ট ভেরিফিকেশন ও ডেলিভারি ছাড়া অন্য কোথাও তথ্য শেয়ার করা হয় না।
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-2">৫. যোগাযোগ করুন</h2>
                        <p className="text-sm text-slate-700 leading-relaxed">আপনার অ্যাকাউন্ট বা ডেটা সংক্রান্ত যেকোনো প্রশ্ন বা ডেটা মুছে ফেলার অনুরোধের জন্য আমাদের সাথে যোগাযোগ করুন:</p>
                        <div className="bg-slate-50 p-4 rounded-xl text-sm text-slate-700 space-y-1">
                            <p>📧 <b>ইমেইল:</b> learncareofficial@gmail.com</p>
                            <p>📞 <b>WhatsApp সাপোর্ট:</b> +8801714740430</p>
                            <p>📄 <b>শর্তাবলী:</b> <Link href="/terms" className="text-teal-600 underline font-semibold">Terms of Service ও রিফান্ড পলিসি দেখুন</Link></p>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}
