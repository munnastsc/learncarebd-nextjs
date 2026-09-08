'use client';
import { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, Video, CheckCircle2, Layout, LayoutList, ListOrdered, Quote, X } from 'lucide-react';

type SectionType = 'HERO' | 'FEATURES' | 'TESTIMONIALS';

interface Section {
    id: string;
    type: SectionType;
    data: any;
}

export default function StoreBooksAdmin() {
    const [books, setBooks] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [activeTab, setActiveTab] = useState<'basic' | 'landing'>('basic');

    const [formData, setFormData] = useState({
        title: '', slug: '', description: '', imageUrl: '', price: '', originalPrice: '', features: '', isAvailable: true, videoUrl: ''
    });

    // Landing Page sections
    const [sections, setSections] = useState<Section[]>([]);

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = async () => {
        const res = await fetch('/api/books');
        if (res.ok) {
            const data = await res.json();
            setBooks(data);
        }
        setLoading(false);
    };

    const addSection = (type: SectionType) => {
        let newData = {};
        if (type === 'HERO') newData = { title: '', subtitle: '' };
        if (type === 'FEATURES') newData = { title: '', items: [] };
        if (type === 'TESTIMONIALS') newData = { reviews: [] };
        setSections([...sections, { id: Math.random().toString(), type, data: newData }]);
    };

    const removeSection = (id: string) => {
        setSections(sections.filter(s => s.id !== id));
    };

    const updateSection = (id: string, newData: any) => {
        setSections(sections.map(s => s.id === id ? { ...s, data: newData } : s));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const url = editingId ? `/api/books/${editingId}` : '/api/books';
        const method = editingId ? 'PUT' : 'POST';
        
        const payload = {
            ...formData,
            features: formData.features.split('\n').filter(f => f.trim()),
            price: parseFloat(formData.price),
            originalPrice: formData.originalPrice ? parseFloat(formData.originalPrice) : null,
            landingPageConfig: sections
        };

        const res = await fetch(url, {
            method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (res.ok) {
            resetForm();
            fetchBooks();
        } else {
            alert('Error saving book');
        }
    };

    const resetForm = () => {
        setFormData({ title: '', slug: '', description: '', imageUrl: '', price: '', originalPrice: '', features: '', isAvailable: true, videoUrl: '' });
        setSections([]);
        setEditingId(null);
        setActiveTab('basic');
    }

    const handleEdit = (book: any) => {
        setFormData({
            title: book.title,
            slug: book.slug,
            description: book.description,
            imageUrl: book.imageUrl || '',
            price: book.price.toString(),
            originalPrice: book.originalPrice ? book.originalPrice.toString() : '',
            features: book.features ? book.features.join('\n') : '',
            isAvailable: book.isAvailable,
            videoUrl: book.videoUrl || ''
        });
        setSections(book.landingPageConfig || []);
        setEditingId(book.id);
        setActiveTab('basic');
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this book?')) return;
        const res = await fetch(`/api/books/${id}`, { method: 'DELETE' });
        if (res.ok) fetchBooks();
    };

    return (
        <div className="p-8 pb-32">
            <h1 className="text-3xl font-black text-white mb-8">🛒 Book Landing Page Builder</h1>
            
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                {/* FORM PANEL */}
                <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 h-fit">
                    <div className="flex justify-between items-center mb-6 border-b border-slate-700 pb-4">
                        <h2 className="text-xl font-bold text-white">{editingId ? 'Edit Book' : 'Add New Book'}</h2>
                        <div className="flex gap-2">
                            <button onClick={() => setActiveTab('basic')} className={`px-4 py-2 rounded-lg text-sm font-bold transition ${activeTab === 'basic' ? 'bg-brand text-white' : 'bg-slate-700 text-slate-300'}`}>1. Basic Info</button>
                            <button onClick={() => setActiveTab('landing')} className={`px-4 py-2 rounded-lg text-sm font-bold transition ${activeTab === 'landing' ? 'bg-brand text-white' : 'bg-slate-700 text-slate-300'}`}>2. Landing Page Layout</button>
                        </div>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {activeTab === 'basic' && (
                            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
                                <div>
                                    <label className="block text-xs font-bold text-slate-400 mb-1">Title</label>
                                    <input required type="text" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-white outline-none focus:border-brand" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-400 mb-1">Slug (URL)</label>
                                    <input required type="text" value={formData.slug} onChange={e => setFormData({...formData, slug: e.target.value})} className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-white outline-none focus:border-brand" placeholder="e.g. 3000-words" />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-bold text-slate-400 mb-1">Price (৳)</label>
                                        <input required type="number" value={formData.price} onChange={e => setFormData({...formData, price: e.target.value})} className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-white outline-none focus:border-brand" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-slate-400 mb-1">Original Price (৳)</label>
                                        <input type="number" value={formData.originalPrice} onChange={e => setFormData({...formData, originalPrice: e.target.value})} className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-white outline-none focus:border-brand" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-400 mb-1">Image URL</label>
                                    <input type="text" value={formData.imageUrl} onChange={e => setFormData({...formData, imageUrl: e.target.value})} className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-white outline-none focus:border-brand" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-400 mb-1">Video Demo URL (YouTube/Vimeo Embed Link)</label>
                                    <input type="text" value={formData.videoUrl} onChange={e => setFormData({...formData, videoUrl: e.target.value})} className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-white outline-none focus:border-brand" placeholder="https://www.youtube.com/embed/..." />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-400 mb-1">Short Description (HTML allowed)</label>
                                    <textarea required value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} rows={4} className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-white outline-none focus:border-brand" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-400 mb-1">Basic Features (One per line)</label>
                                    <textarea value={formData.features} onChange={e => setFormData({...formData, features: e.target.value})} rows={4} className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-white outline-none focus:border-brand" />
                                </div>
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" checked={formData.isAvailable} onChange={e => setFormData({...formData, isAvailable: e.target.checked})} id="avail" className="w-4 h-4 rounded text-brand" />
                                    <label htmlFor="avail" className="text-sm font-bold text-white cursor-pointer">Is Available in Stock</label>
                                </div>
                                <div className="pt-4 flex justify-end">
                                    <button type="button" onClick={() => setActiveTab('landing')} className="bg-brand text-white px-6 py-2 rounded-lg font-bold">Next: Landing Page 👉</button>
                                </div>
                            </div>
                        )}

                        {activeTab === 'landing' && (
                            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                                <p className="text-slate-400 text-sm">Build dynamic sections for this book's landing page. They will appear below the main video/description area.</p>
                                
                                {sections.map((section, index) => (
                                    <div key={section.id} className="bg-slate-900 p-4 rounded-xl border border-slate-700 relative group">
                                        <button type="button" onClick={() => removeSection(section.id)} className="absolute top-2 right-2 text-slate-500 hover:text-red-400 opacity-0 group-hover:opacity-100 transition"><X size={20}/></button>
                                        <div className="flex items-center gap-2 mb-4 text-brand font-bold uppercase text-xs tracking-wider">
                                            {section.type === 'HERO' && <Layout size={16}/>}
                                            {section.type === 'FEATURES' && <ListOrdered size={16}/>}
                                            {section.type === 'TESTIMONIALS' && <Quote size={16}/>}
                                            {section.type} Section
                                        </div>
                                        
                                        {section.type === 'HERO' && (
                                            <div className="space-y-3">
                                                <input type="text" value={section.data.title} onChange={e => updateSection(section.id, {...section.data, title: e.target.value})} placeholder="Main Headline" className="w-full bg-slate-800 border-none rounded-lg p-2 text-white outline-none" />
                                                <textarea value={section.data.subtitle} onChange={e => updateSection(section.id, {...section.data, subtitle: e.target.value})} placeholder="Sub headline or description" rows={2} className="w-full bg-slate-800 border-none rounded-lg p-2 text-white outline-none" />
                                            </div>
                                        )}

                                        {section.type === 'FEATURES' && (
                                            <div className="space-y-3">
                                                <input type="text" value={section.data.title} onChange={e => updateSection(section.id, {...section.data, title: e.target.value})} placeholder="Section Title (e.g. Why you need this book?)" className="w-full bg-slate-800 border-none rounded-lg p-2 text-white font-bold outline-none" />
                                                <div className="space-y-2">
                                                    {section.data.items?.map((item: string, i: number) => (
                                                        <div key={i} className="flex gap-2">
                                                            <input type="text" value={item} onChange={e => {
                                                                const newItems = [...section.data.items];
                                                                newItems[i] = e.target.value;
                                                                updateSection(section.id, {...section.data, items: newItems});
                                                            }} className="flex-1 bg-slate-800 border-none rounded-lg p-2 text-sm text-white outline-none" placeholder={`Feature ${i+1}`} />
                                                            <button type="button" onClick={() => {
                                                                const newItems = section.data.items.filter((_:any, idx:number) => idx !== i);
                                                                updateSection(section.id, {...section.data, items: newItems});
                                                            }} className="text-red-400 hover:bg-slate-800 px-2 rounded"><Trash2 size={16}/></button>
                                                        </div>
                                                    ))}
                                                    <button type="button" onClick={() => updateSection(section.id, {...section.data, items: [...(section.data.items||[]), '']})} className="text-sm text-brand font-bold mt-2">+ Add Feature Point</button>
                                                </div>
                                            </div>
                                        )}

                                        {section.type === 'TESTIMONIALS' && (
                                            <div className="space-y-3">
                                                <h4 className="text-white font-bold text-sm">Customer Reviews</h4>
                                                <div className="space-y-4">
                                                    {section.data.reviews?.map((review: any, i: number) => (
                                                        <div key={i} className="bg-slate-800 p-3 rounded-lg relative">
                                                            <button type="button" onClick={() => {
                                                                const newRev = section.data.reviews.filter((_:any, idx:number) => idx !== i);
                                                                updateSection(section.id, {...section.data, reviews: newRev});
                                                            }} className="absolute top-2 right-2 text-red-400"><Trash2 size={14}/></button>
                                                            <input type="text" value={review.name} onChange={e => {
                                                                const newRev = [...section.data.reviews];
                                                                newRev[i].name = e.target.value;
                                                                updateSection(section.id, {...section.data, reviews: newRev});
                                                            }} className="w-full bg-slate-900 border-none rounded p-2 text-sm text-white mb-2" placeholder="Customer Name" />
                                                            <textarea value={review.text} onChange={e => {
                                                                const newRev = [...section.data.reviews];
                                                                newRev[i].text = e.target.value;
                                                                updateSection(section.id, {...section.data, reviews: newRev});
                                                            }} className="w-full bg-slate-900 border-none rounded p-2 text-sm text-white" placeholder="Review Text" rows={2} />
                                                        </div>
                                                    ))}
                                                    <button type="button" onClick={() => updateSection(section.id, {...section.data, reviews: [...(section.data.reviews||[]), {name:'', text:''}]})} className="text-sm text-brand font-bold mt-2">+ Add Review</button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}

                                <div className="flex gap-2 pt-4 flex-wrap">
                                    <button type="button" onClick={() => addSection('HERO')} className="bg-slate-700 hover:bg-slate-600 text-white px-3 py-1.5 rounded text-xs font-bold transition flex items-center gap-1"><Layout size={14}/> Add Hero</button>
                                    <button type="button" onClick={() => addSection('FEATURES')} className="bg-slate-700 hover:bg-slate-600 text-white px-3 py-1.5 rounded text-xs font-bold transition flex items-center gap-1"><ListOrdered size={14}/> Add Features List</button>
                                    <button type="button" onClick={() => addSection('TESTIMONIALS')} className="bg-slate-700 hover:bg-slate-600 text-white px-3 py-1.5 rounded text-xs font-bold transition flex items-center gap-1"><Quote size={14}/> Add Reviews</button>
                                </div>

                                <div className="pt-8 flex gap-2 border-t border-slate-700">
                                    <button type="submit" className="flex-1 bg-accent hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition text-lg flex items-center justify-center gap-2">
                                        <CheckCircle2 size={20}/> {editingId ? 'Save All Changes' : 'Publish New Book'}
                                    </button>
                                    {editingId && (
                                        <button type="button" onClick={resetForm} className="bg-slate-700 hover:bg-slate-600 text-white font-bold px-6 py-3 rounded-lg transition">Cancel</button>
                                    )}
                                </div>
                            </div>
                        )}
                    </form>
                </div>

                {/* LIST PANEL */}
                <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6">
                    <h2 className="text-xl font-bold text-white mb-6">Published Books</h2>
                    {loading ? <p className="text-slate-400">Loading...</p> : (
                        <div className="space-y-4">
                            {books.map(book => (
                                <div key={book.id} className="bg-slate-800 p-4 rounded-xl border border-slate-700 flex gap-4 items-center group transition hover:border-brand">
                                    <img src={book.imageUrl || 'https://placehold.co/400x600/e2e8f0/475569?text=Cover'} alt={book.title} className="w-16 h-20 rounded object-cover" />
                                    <div className="flex-1">
                                        <h3 className="text-white font-bold">{book.title}</h3>
                                        <p className="text-slate-400 text-sm mb-1">/{book.slug}</p>
                                        <div className="flex items-center gap-2">
                                            <span className="text-accent font-black">৳ {book.price}</span>
                                            {book.landingPageConfig?.length > 0 && <span className="bg-brand/20 text-brand text-[10px] px-2 py-0.5 rounded font-bold uppercase">Landing Page Active</span>}
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <button onClick={() => handleEdit(book)} className="bg-slate-700 hover:bg-slate-600 text-white p-2 rounded transition"><Edit2 size={16}/></button>
                                        <button onClick={() => handleDelete(book.id)} className="bg-red-900/50 hover:bg-red-800/80 text-red-400 p-2 rounded transition"><Trash2 size={16}/></button>
                                    </div>
                                </div>
                            ))}
                            {books.length === 0 && <p className="text-slate-500 text-center py-10">No books found.</p>}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
