'use client';
import { useState } from 'react';
import { CheckCircle2, ArrowRight, PlayCircle, Star, Quote } from 'lucide-react';
import Link from 'next/link';

export default function GenericBookDetails({ book }: { book: any }) {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch('/api/book-orders', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    bookId: book.id,
                    customerName: name,
                    phone,
                    address,
                    totalAmount: book.price
                })
            });
            if (res.ok) {
                setSuccess(true);
            }
        } catch (err) {
            console.error(err);
            alert('Failed to place order. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    if (success) {
        return (
            <div className="min-h-screen bg-slate-50 py-20 flex items-center justify-center">
                <div className="bg-white p-10 rounded-2xl shadow-xl text-center max-w-md">
                    <CheckCircle2 size={64} className="text-emerald-500 mx-auto mb-6" />
                    <h2 className="text-3xl font-bold text-slate-800 mb-4">Order Confirmed!</h2>
                    <p className="text-slate-600 mb-8">Thank you for ordering <strong>{book.title}</strong>. Our team will contact you shortly.</p>
                    <Link href="/books" className="inline-flex items-center gap-2 bg-brand text-white px-8 py-3 rounded-full font-bold">
                        Browse More Books <ArrowRight size={20} />
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 pt-24 pb-20 font-sans">
            <div className="max-w-6xl mx-auto px-4 md:px-6">
                
                {/* Main Hero Section */}
                <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-[2rem] shadow-xl overflow-hidden mb-16">
                    <div className="lg:w-1/2 p-10 bg-slate-100 flex items-center justify-center relative overflow-hidden">
                        {/* Decorative blob */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
                        
                        <img 
                            src={book.imageUrl || 'https://placehold.co/400x600/e2e8f0/475569?text=Book+Cover'} 
                            alt={book.title}
                            className="w-full max-w-sm rounded-xl shadow-2xl relative z-10 hover:scale-105 transition duration-500"
                        />
                    </div>
                    
                    <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 leading-tight">{book.title}</h1>
                        <div className="flex items-center gap-4 mb-6">
                            <span className="text-4xl font-black text-brand">৳ {book.price}</span>
                            {book.originalPrice && (
                                <span className="text-2xl text-slate-400 line-through font-bold">৳ {book.originalPrice}</span>
                            )}
                            {book.originalPrice && book.price < book.originalPrice && (
                                <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-bold">
                                    Save ৳{book.originalPrice - book.price}
                                </span>
                            )}
                        </div>
                        
                        <div 
                            className="text-slate-700 leading-relaxed mb-8 text-lg"
                            dangerouslySetInnerHTML={{ __html: book.description }}
                        />
                        
                        {book.features && book.features.length > 0 && (
                            <div className="mb-10 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                <h3 className="font-bold text-slate-900 text-xl mb-4">What you will get:</h3>
                                <ul className="space-y-3">
                                    {book.features.map((feature: string, i: number) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-700 font-medium">
                                            <CheckCircle2 size={24} className="text-emerald-500 shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <a href="#checkout" className="bg-accent hover:bg-orange-600 text-white text-center py-4 rounded-xl font-black text-xl transition shadow-lg shadow-accent/30 flex items-center justify-center gap-2">
                            Order Now <ArrowRight size={24} />
                        </a>
                    </div>
                </div>

                {/* Video Section (If Available) */}
                {book.videoUrl && (
                    <div className="mb-16 max-w-4xl mx-auto">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-black text-slate-900">Watch Video Demo</h2>
                            <p className="text-slate-500 mt-2">See what's inside the book before you buy</p>
                        </div>
                        <div className="aspect-video w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 relative">
                            <iframe 
                                src={book.videoUrl} 
                                className="absolute inset-0 w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                            />
                        </div>
                    </div>
                )}

                {/* Dynamic Landing Page Sections */}
                {book.landingPageConfig?.map((section: any) => {
                    if (section.type === 'HERO') {
                        return (
                            <div key={section.id} className="bg-brand text-white rounded-3xl p-12 text-center mb-16 shadow-xl relative overflow-hidden">
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                                <div className="relative z-10">
                                    <h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight">{section.data.title}</h2>
                                    {section.data.subtitle && <p className="text-xl md:text-2xl text-brand-light font-medium max-w-3xl mx-auto">{section.data.subtitle}</p>}
                                </div>
                            </div>
                        );
                    }
                    if (section.type === 'FEATURES') {
                        return (
                            <div key={section.id} className="mb-16">
                                <h2 className="text-3xl font-black text-center text-slate-900 mb-10">{section.data.title}</h2>
                                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                                    {section.data.items?.map((item: string, i: number) => (
                                        <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4 transition hover:shadow-md hover:border-brand/30">
                                            <div className="bg-brand/10 p-3 rounded-xl text-brand shrink-0">
                                                <Star size={24} className="fill-brand" />
                                            </div>
                                            <p className="text-slate-700 font-bold text-lg pt-1">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    }
                    if (section.type === 'TESTIMONIALS') {
                        return (
                            <div key={section.id} className="mb-16 max-w-5xl mx-auto bg-slate-900 rounded-[3rem] p-12 text-center relative">
                                <Quote size={120} className="absolute top-0 left-0 -translate-x-4 -translate-y-8 text-white/5" />
                                <h2 className="text-3xl font-black text-white mb-10 relative z-10">What our students say</h2>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                                    {section.data.reviews?.map((review: any, i: number) => (
                                        <div key={i} className="bg-slate-800 p-8 rounded-3xl text-left border border-slate-700">
                                            <div className="flex text-yellow-400 mb-4">
                                                <Star size={16} className="fill-yellow-400" /><Star size={16} className="fill-yellow-400" /><Star size={16} className="fill-yellow-400" /><Star size={16} className="fill-yellow-400" /><Star size={16} className="fill-yellow-400" />
                                            </div>
                                            <p className="text-slate-300 italic mb-6 leading-relaxed">"{review.text}"</p>
                                            <p className="text-white font-bold">— {review.name}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    }
                    return null;
                })}

                {/* Checkout Section */}
                <div className="max-w-xl mx-auto" id="checkout">
                    <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border-2 border-brand/20">
                        <div className="text-center mb-8">
                            <h3 className="text-3xl font-black text-slate-900 mb-2">Order Now</h3>
                            <p className="text-slate-500 font-medium">Fill out the form below and we will deliver it to you.</p>
                        </div>
                        
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                                <input required type="text" value={name} onChange={e => setName(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 outline-none focus:border-brand focus:ring-4 focus:ring-brand/10 transition font-medium" placeholder="Enter your full name" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                                <input required type="tel" value={phone} onChange={e => setPhone(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 outline-none focus:border-brand focus:ring-4 focus:ring-brand/10 transition font-medium" placeholder="0171XXXXXXX" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Full Address</label>
                                <textarea required value={address} onChange={e => setAddress(e.target.value)} rows={3} className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 outline-none focus:border-brand focus:ring-4 focus:ring-brand/10 transition font-medium" placeholder="House no, Road no, Area, City" />
                            </div>
                            
                            <div className="bg-slate-50 p-4 rounded-xl flex justify-between items-center border border-slate-200 mt-6">
                                <span className="font-bold text-slate-600">Total Amount:</span>
                                <span className="text-2xl font-black text-brand">৳ {book.price}</span>
                            </div>

                            <button 
                                type="submit" 
                                disabled={loading}
                                className="w-full bg-accent hover:bg-orange-600 text-white font-black text-xl py-5 rounded-xl transition mt-4 disabled:opacity-70 shadow-lg shadow-accent/30"
                            >
                                {loading ? 'Processing...' : 'Confirm Order'}
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
}
