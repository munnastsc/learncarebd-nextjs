import { prisma } from '../../lib/prisma';
import Link from 'next/link';
import { ArrowRight, BookOpen } from 'lucide-react';

export default async function BooksGallery() {
    const books = await prisma.book.findMany({
        orderBy: { createdAt: 'desc' }
    });

    return (
        <div className="min-h-screen bg-slate-50 pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Our <span className="text-brand">Books</span></h1>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg">Browse our collection of highly effective books for spoken English, IELTS, and vocabulary building.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* The original hardcoded 3000 words book - keeping it visible in the gallery */}
                    <Link href="/books/3000-words" className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-xl transition group flex flex-col block">
                        <div className="bg-slate-100 aspect-[4/3] flex items-center justify-center p-8">
                            <img src="/book-cover.png" alt="3000 Words" className="h-full object-contain drop-shadow-2xl group-hover:scale-105 transition duration-500" />
                        </div>
                        <div className="p-6 flex flex-col flex-1">
                            <div className="flex items-center gap-2 mb-3 text-brand text-sm font-bold">
                                <BookOpen size={16} /> <span>Best Seller</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">শিখতেই হবে ৩০০০ শব্দ</h3>
                            <p className="text-slate-500 text-sm mb-6 flex-1">ইংরেজিতে কথা বলার জন্য প্রয়োজনীয় ৩০০০ শব্দের চমৎকার কালেকশন।</p>
                            <div className="flex items-center justify-between mt-auto">
                                <div className="text-accent font-black text-2xl">৳ ৪০০</div>
                                <span className="bg-brand hover:bg-brand-dark text-white px-5 py-2.5 rounded-lg text-sm font-bold transition flex items-center gap-2">
                                    View Details <ArrowRight size={16} />
                                </span>
                            </div>
                        </div>
                    </Link>

                    {/* Dynamic books from DB */}
                    {books.map(book => (
                        <Link key={book.id} href={`/books/${book.slug}`} className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-xl transition group flex flex-col block">
                            <div className="bg-slate-100 aspect-[4/3] flex items-center justify-center p-8 relative">
                                {!book.isAvailable && (
                                    <span className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">Out of Stock</span>
                                )}
                                <img src={book.imageUrl || 'https://placehold.co/400x600/e2e8f0/475569?text=Book'} alt={book.title} className="h-full object-contain drop-shadow-2xl group-hover:scale-105 transition duration-500" />
                            </div>
                            <div className="p-6 flex flex-col flex-1">
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{book.title}</h3>
                                <p className="text-slate-500 text-sm mb-6 flex-1 line-clamp-2">{book.description}</p>
                                <div className="flex items-center justify-between mt-auto">
                                    <div className="flex items-center gap-2">
                                        <span className="text-accent font-black text-2xl">৳ {book.price}</span>
                                        {book.originalPrice && (
                                            <span className="text-slate-400 line-through text-sm">৳ {book.originalPrice}</span>
                                        )}
                                    </div>
                                    <span className="bg-brand hover:bg-brand-dark text-white px-5 py-2.5 rounded-lg text-sm font-bold transition flex items-center gap-2">
                                        View Details <ArrowRight size={16} />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
