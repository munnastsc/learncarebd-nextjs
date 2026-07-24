'use client';

import { useEffect, useState } from 'react';
import { Sparkles, BookOpen, Layers, Menu, Trash2, Plus, Edit, X, Save, RefreshCw } from 'lucide-react';

type CustomPost = {
    id: string;
    title: string;
    content: string;
    type: 'SERVICE' | 'BOOK' | 'POST' | string;
    link: string | null;
    imageUrl: string | null;
    price: number | null;
    createdAt: string;
};

type MenuLink = {
    id: string;
    label: string;
    url: string;
    order: number;
};

export default function ContentAdminPage() {
    const [posts, setPosts] = useState<CustomPost[]>([]);
    const [menuLinks, setMenuLinks] = useState<MenuLink[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState<'posts' | 'menu'>('posts');

    // Modals
    const [showPostModal, setShowPostModal] = useState(false);
    const [editingPost, setEditingPost] = useState<CustomPost | null>(null);
    const [postForm, setPostForm] = useState({
        title: '',
        content: '',
        type: 'SERVICE',
        link: '',
        imageUrl: '',
        price: ''
    });

    const [showMenuModal, setShowMenuModal] = useState(false);
    const [editingMenu, setEditingMenu] = useState<MenuLink | null>(null);
    const [menuForm, setMenuForm] = useState({
        label: '',
        url: '',
        order: '0'
    });

    const loadAll = async () => {
        setLoading(true);
        try {
            const [postsRes, linksRes] = await Promise.all([
                fetch('/api/custom-posts'),
                fetch('/api/menu-links')
            ]);
            if (postsRes.ok) setPosts(await postsRes.json());
            if (linksRes.ok) setMenuLinks(await linksRes.json());
        } catch (e) {
            console.error('Failed to load admin content:', e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadAll();
    }, []);

    // Post handlers
    const openNewPost = () => {
        setEditingPost(null);
        setPostForm({
            title: '',
            content: '',
            type: 'SERVICE',
            link: '',
            imageUrl: '',
            price: ''
        });
        setShowPostModal(true);
    };

    const openEditPost = (post: CustomPost) => {
        setEditingPost(post);
        setPostForm({
            title: post.title,
            content: post.content,
            type: post.type,
            link: post.link || '',
            imageUrl: post.imageUrl || '',
            price: post.price !== null ? String(post.price) : ''
        });
        setShowPostModal(true);
    };

    const savePost = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const payload = {
                id: editingPost?.id,
                ...postForm,
                price: postForm.price ? Number(postForm.price) : null
            };
            const method = editingPost ? 'PUT' : 'POST';
            const res = await fetch('/api/custom-posts', {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            if (res.ok) {
                setShowPostModal(false);
                loadAll();
            }
        } catch (error) {
            console.error('Error saving post:', error);
        }
    };

    const deletePost = async (id: string) => {
        if (!confirm('Are you sure you want to delete this content?')) return;
        try {
            const res = await fetch(`/api/custom-posts?id=${id}`, { method: 'DELETE' });
            if (res.ok) loadAll();
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    };

    // Menu handlers
    const openNewMenu = () => {
        setEditingMenu(null);
        setMenuForm({
            label: '',
            url: '',
            order: String(menuLinks.length)
        });
        setShowMenuModal(true);
    };

    const openEditMenu = (menu: MenuLink) => {
        setEditingMenu(menu);
        setMenuForm({
            label: menu.label,
            url: menu.url,
            order: String(menu.order)
        });
        setShowMenuModal(true);
    };

    const saveMenu = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const payload = {
                id: editingMenu?.id,
                ...menuForm,
                order: Number(menuForm.order) || 0
            };
            const method = editingMenu ? 'PUT' : 'POST';
            const res = await fetch('/api/menu-links', {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            if (res.ok) {
                setShowMenuModal(false);
                loadAll();
            }
        } catch (error) {
            console.error('Error saving menu link:', error);
        }
    };

    const deleteMenu = async (id: string) => {
        if (!confirm('Are you sure you want to delete this menu link?')) return;
        try {
            const res = await fetch(`/api/menu-links?id=${id}`, { method: 'DELETE' });
            if (res.ok) loadAll();
        } catch (error) {
            console.error('Error deleting menu link:', error);
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 p-6">
            <div className="max-w-6xl mx-auto">
                
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6 mb-8">
                    <div>
                        <h1 className="text-2xl font-black text-white flex items-center gap-2">
                            <Layers className="text-teal-400" size={24} />
                            WordPress Content & Menu Control Panel
                        </h1>
                        <p className="text-xs text-slate-400 mt-1">
                            হোমপেজের Dynamic Menu Links, Premium Services এবং Preparation Books কাস্টমাইজ ও কন্ট্রোল করো।
                        </p>
                    </div>
                    <button 
                        onClick={loadAll}
                        className="self-start flex items-center gap-2 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-850 px-4 py-2 text-xs font-bold text-slate-300 transition"
                    >
                        <RefreshCw size={14} /> Refresh & Sync
                    </button>
                </div>

                {/* Tabs */}
                <div className="flex gap-2 border-b border-slate-800/80 mb-6">
                    <button
                        onClick={() => setActiveTab('posts')}
                        className={`px-5 py-3 text-xs font-bold transition-all relative ${
                            activeTab === 'posts' 
                                ? 'text-teal-400 border-b-2 border-teal-400' 
                                : 'text-slate-400 hover:text-slate-200'
                        }`}
                    >
                        Services & Books ({posts.length})
                    </button>
                    <button
                        onClick={() => setActiveTab('menu')}
                        className={`px-5 py-3 text-xs font-bold transition-all relative ${
                            activeTab === 'menu' 
                                ? 'text-teal-400 border-b-2 border-teal-400' 
                                : 'text-slate-400 hover:text-slate-200'
                        }`}
                    >
                        Menu Links ({menuLinks.length})
                    </button>
                </div>

                {loading ? (
                    <div className="flex justify-center items-center py-20">
                        <span className="w-10 h-10 rounded-full border-2 border-slate-800 border-t-teal-500 animate-spin" />
                    </div>
                ) : activeTab === 'posts' ? (
                    
                    /* Services & Books Tab */
                    <div>
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-sm font-black text-slate-400 uppercase tracking-wider">
                                Active Services & Books
                            </h2>
                            <button
                                onClick={openNewPost}
                                className="flex items-center gap-1.5 rounded-xl bg-teal-500 text-slate-950 font-black px-4 py-2 text-xs hover:bg-teal-400 transition"
                            >
                                <Plus size={14} /> Add Custom Item
                            </button>
                        </div>

                        {posts.length === 0 ? (
                            <div className="text-center py-12 border border-dashed border-slate-850 rounded-2xl bg-slate-900/10">
                                <p className="text-sm text-slate-500">কোনো সার্ভিস বা বুকস পাওয়া যায়নি। এপিআই রিফ্রেশ করো অথবা ম্যানুয়ালি অ্যাড করো।</p>
                            </div>
                        ) : (
                            <div className="grid gap-4">
                                {posts.map((post) => (
                                    <div key={post.id} className="bg-slate-900/60 border border-slate-850 rounded-2xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-slate-800 transition">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded ${
                                                    post.type === 'BOOK' 
                                                        ? 'bg-pink-500/10 text-pink-300 border border-pink-500/20' 
                                                        : 'bg-teal-500/10 text-teal-300 border border-teal-500/20'
                                                }`}>
                                                    {post.type}
                                                </span>
                                                {post.link && (
                                                    <span className="text-[10px] text-slate-500 font-mono">
                                                        WordPress Synced
                                                    </span>
                                                )}
                                            </div>
                                            <h3 className="font-bold text-white text-sm">{post.title}</h3>
                                            <p className="text-xs text-slate-400 mt-1 line-clamp-2">{post.content}</p>
                                            {post.price !== null && (
                                                <p className="text-xs text-pink-400 font-black mt-2">৳{post.price} BDT</p>
                                            )}
                                        </div>
                                        <div className="flex items-center gap-2 self-end md:self-center">
                                            <button
                                                onClick={() => openEditPost(post)}
                                                className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-teal-400 hover:bg-slate-750 transition"
                                            >
                                                <Edit size={16} />
                                            </button>
                                            <button
                                                onClick={() => deletePost(post.id)}
                                                className="p-2 rounded-lg bg-slate-850/50 text-slate-400 hover:text-rose-400 hover:bg-rose-950/20 transition"
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ) : (
                    
                    /* Menu Links Tab */
                    <div>
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-sm font-black text-slate-400 uppercase tracking-wider">
                                Navigation Menu Links
                            </h2>
                            <button
                                onClick={openNewMenu}
                                className="flex items-center gap-1.5 rounded-xl bg-teal-500 text-slate-950 font-black px-4 py-2 text-xs hover:bg-teal-400 transition"
                            >
                                <Plus size={14} /> Add Menu Link
                            </button>
                        </div>

                        {menuLinks.length === 0 ? (
                            <div className="text-center py-12 border border-dashed border-slate-850 rounded-2xl bg-slate-900/10">
                                <p className="text-sm text-slate-500">কোনো মেনু লিংক পাওয়া যায়নি।</p>
                            </div>
                        ) : (
                            <div className="bg-slate-900/40 border border-slate-850 rounded-2xl overflow-hidden">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="border-b border-slate-850 bg-slate-900/60 text-slate-400 text-xs font-bold">
                                            <th className="p-4">Label</th>
                                            <th className="p-4">URL</th>
                                            <th className="p-4">Sort Order</th>
                                            <th className="p-4 text-right">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-850">
                                        {menuLinks.map((link) => (
                                            <tr key={link.id} className="text-xs hover:bg-slate-900/20 transition">
                                                <td className="p-4 font-bold text-white">{link.label}</td>
                                                <td className="p-4 text-slate-400 font-mono">{link.url}</td>
                                                <td className="p-4 text-slate-300">{link.order}</td>
                                                <td className="p-4 text-right flex justify-end gap-2">
                                                    <button
                                                        onClick={() => openEditMenu(link)}
                                                        className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-teal-400 transition"
                                                    >
                                                        <Edit size={14} />
                                                    </button>
                                                    <button
                                                        onClick={() => deleteMenu(link.id)}
                                                        className="p-2 rounded-lg bg-slate-850/50 text-slate-400 hover:text-rose-450 hover:bg-rose-950/20 transition"
                                                    >
                                                        <Trash2 size={14} />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                )}

                {/* Post Modal */}
                {showPostModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4">
                        <div className="bg-slate-900 border border-slate-800 w-full max-w-lg rounded-3xl p-6 shadow-2xl relative">
                            <button 
                                onClick={() => setShowPostModal(false)}
                                className="absolute top-4 right-4 text-slate-400 hover:text-white"
                            >
                                <X size={20} />
                            </button>
                            <h2 className="text-lg font-black text-white mb-6">
                                {editingPost ? 'Edit Service / Book' : 'Add New Service / Book'}
                            </h2>
                            <form onSubmit={savePost} className="space-y-4">
                                <div>
                                    <label className="block text-xs font-bold text-slate-400 mb-1.5">Type</label>
                                    <select
                                        value={postForm.type}
                                        onChange={(e) => setPostForm({ ...postForm, type: e.target.value })}
                                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:border-teal-500 focus:outline-none"
                                    >
                                        <option value="SERVICE">SERVICE (সেবাসমূহ)</option>
                                        <option value="BOOK">BOOK (বই/লেকচার শিট)</option>
                                        <option value="POST">POST (জেনারেল পোস্ট)</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-400 mb-1.5">Title (শিরোনাম)</label>
                                    <input
                                        type="text"
                                        required
                                        value={postForm.title}
                                        onChange={(e) => setPostForm({ ...postForm, title: e.target.value })}
                                        placeholder="e.g. Spoken English Complete Course"
                                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:border-teal-500 focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-400 mb-1.5">Content (বিবরণ)</label>
                                    <textarea
                                        rows={4}
                                        value={postForm.content}
                                        onChange={(e) => setPostForm({ ...postForm, content: e.target.value })}
                                        placeholder="Enter description here..."
                                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:border-teal-500 focus:outline-none resize-none"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-bold text-slate-400 mb-1.5">Price (BDT) - Optional</label>
                                        <input
                                            type="number"
                                            value={postForm.price}
                                            onChange={(e) => setPostForm({ ...postForm, price: e.target.value })}
                                            placeholder="e.g. 120"
                                            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:border-teal-500 focus:outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-slate-400 mb-1.5">External Link (লিংক)</label>
                                        <input
                                            type="text"
                                            value={postForm.link}
                                            onChange={(e) => setPostForm({ ...postForm, link: e.target.value })}
                                            placeholder="https://..."
                                            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:border-teal-500 focus:outline-none"
                                        />
                                    </div>
                                </div>
                                <div className="pt-4 flex justify-end gap-3 border-t border-slate-800">
                                    <button
                                        type="button"
                                        onClick={() => setShowPostModal(false)}
                                        className="rounded-xl border border-slate-800 bg-slate-950/60 px-5 py-2.5 text-xs font-bold text-slate-400 hover:text-white"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="rounded-xl bg-teal-500 text-slate-950 font-black px-5 py-2.5 text-xs hover:bg-teal-400"
                                    >
                                        Save Content
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

                {/* Menu Modal */}
                {showMenuModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4">
                        <div className="bg-slate-900 border border-slate-800 w-full max-w-md rounded-3xl p-6 shadow-2xl relative">
                            <button 
                                onClick={() => setShowMenuModal(false)}
                                className="absolute top-4 right-4 text-slate-400 hover:text-white"
                            >
                                <X size={20} />
                            </button>
                            <h2 className="text-lg font-black text-white mb-6">
                                {editingMenu ? 'Edit Menu Link' : 'Add New Menu Link'}
                            </h2>
                            <form onSubmit={saveMenu} className="space-y-4">
                                <div>
                                    <label className="block text-xs font-bold text-slate-400 mb-1.5">Menu Label (নাম)</label>
                                    <input
                                        type="text"
                                        required
                                        value={menuForm.label}
                                        onChange={(e) => setMenuForm({ ...menuForm, label: e.target.value })}
                                        placeholder="e.g. Our Services"
                                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:border-teal-500 focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-400 mb-1.5">Target URL/Anchor (লিংক)</label>
                                    <input
                                        type="text"
                                        required
                                        value={menuForm.url}
                                        onChange={(e) => setMenuForm({ ...menuForm, url: e.target.value })}
                                        placeholder="e.g. #services or /dashboard/payment"
                                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:border-teal-500 focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-400 mb-1.5">Order (ক্রম)</label>
                                    <input
                                        type="number"
                                        required
                                        value={menuForm.order}
                                        onChange={(e) => setMenuForm({ ...menuForm, order: e.target.value })}
                                        placeholder="e.g. 0"
                                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:border-teal-500 focus:outline-none"
                                    />
                                </div>
                                <div className="pt-4 flex justify-end gap-3 border-t border-slate-800">
                                    <button
                                        type="button"
                                        onClick={() => setShowMenuModal(false)}
                                        className="rounded-xl border border-slate-800 bg-slate-950/60 px-5 py-2.5 text-xs font-bold text-slate-400 hover:text-white"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="rounded-xl bg-teal-500 text-slate-950 font-black px-5 py-2.5 text-xs hover:bg-teal-400"
                                    >
                                        Save Menu
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}
