'use client';

import { useState, useEffect } from 'react';
import { Save, Loader2, Layout, FileText, Shield, HelpCircle, PanelBottom } from 'lucide-react';
import toast from 'react-hot-toast';

type PageType = 'ABOUT_US' | 'TERMS_PRIVACY' | 'FOOTER_SETTINGS' | 'FAQ_SETTINGS';

const TABS = [
    { id: 'ABOUT_US', label: 'About Us', icon: Layout },
    { id: 'TERMS_PRIVACY', label: 'Terms & Privacy', icon: Shield },
    { id: 'FAQ_SETTINGS', label: 'FAQ Section', icon: HelpCircle },
    { id: 'FOOTER_SETTINGS', label: 'Footer Links', icon: PanelBottom },
] as const;

export default function DynamicPagesEditor() {
    const [activeTab, setActiveTab] = useState<PageType>('ABOUT_US');
    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);
    const [content, setContent] = useState<any>({});

    // Tab specific states
    const [htmlContent, setHtmlContent] = useState(''); // For About & Terms
    const [faqList, setFaqList] = useState<{ q: string; a: string }[]>([]); // For FAQ
    const [footerLinks, setFooterLinks] = useState<{ title: string; links: { label: string; url: string }[] }[]>([]); // For Footer

    useEffect(() => {
        loadData(activeTab);
    }, [activeTab]);

    async function loadData(type: PageType) {
        setIsLoading(true);
        try {
            const res = await fetch(`/api/ai-26/pages?type=${type}`);
            const data = await res.json();
            setContent(data);

            if (type === 'ABOUT_US' || type === 'TERMS_PRIVACY') {
                setHtmlContent(data.html || '');
            } else if (type === 'FAQ_SETTINGS') {
                setFaqList(data.faqs || []);
            } else if (type === 'FOOTER_SETTINGS') {
                setFooterLinks(data.columns || [
                    { title: 'Company', links: [] },
                    { title: 'Support', links: [] }
                ]);
            }
        } catch (error) {
            toast.error('Failed to load data');
        } finally {
            setIsLoading(false);
        }
    }

    async function handleSave() {
        setIsSaving(true);
        let payload: any = {};

        if (activeTab === 'ABOUT_US' || activeTab === 'TERMS_PRIVACY') {
            payload = { html: htmlContent };
        } else if (activeTab === 'FAQ_SETTINGS') {
            payload = { faqs: faqList };
        } else if (activeTab === 'FOOTER_SETTINGS') {
            payload = { columns: footerLinks };
        }

        try {
            const res = await fetch('/api/ai-26/pages', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ type: activeTab, content: payload })
            });

            if (res.ok) {
                toast.success('Saved successfully!');
            } else {
                toast.error('Failed to save');
            }
        } catch (error) {
            toast.error('Something went wrong');
        } finally {
            setIsSaving(false);
        }
    }

    return (
        <div className="p-6 max-w-5xl mx-auto space-y-6">
            <div className="flex justify-between items-center bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">Dynamic Pages</h1>
                    <p className="text-slate-500 mt-1">Manage static page contents globally</p>
                </div>
                <button
                    onClick={handleSave}
                    disabled={isSaving || isLoading}
                    className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-xl hover:bg-blue-700 transition font-medium disabled:opacity-50"
                >
                    {isSaving ? <Loader2 className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
                    Save Changes
                </button>
            </div>

            <div className="flex gap-6">
                {/* Sidebar Tabs */}
                <div className="w-64 flex-shrink-0 space-y-2">
                    {TABS.map(tab => {
                        const Icon = tab.icon;
                        const isActive = activeTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as PageType)}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition font-medium ${
                                    isActive 
                                        ? 'bg-blue-50 text-blue-700 border border-blue-200 shadow-sm' 
                                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 border border-transparent'
                                }`}
                            >
                                <Icon className="w-5 h-5" />
                                {tab.label}
                            </button>
                        );
                    })}
                </div>

                {/* Editor Content */}
                <div className="flex-1 bg-white p-6 rounded-2xl shadow-sm border border-slate-100 min-h-[500px]">
                    {isLoading ? (
                        <div className="h-full flex flex-col items-center justify-center text-slate-400">
                            <Loader2 className="w-8 h-8 animate-spin mb-4" />
                            Loading...
                        </div>
                    ) : (
                        <div className="animate-in fade-in duration-300">
                            {(activeTab === 'ABOUT_US' || activeTab === 'TERMS_PRIVACY') && (
                                <div className="space-y-4">
                                    <h3 className="text-lg font-semibold mb-4">HTML Content Editor</h3>
                                    <textarea
                                        value={htmlContent}
                                        onChange={(e) => setHtmlContent(e.target.value)}
                                        placeholder="<h1>Welcome to ILTES</h1><p>Write your HTML content here...</p>"
                                        className="w-full h-[400px] p-4 border border-slate-200 rounded-xl font-mono text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                                    />
                                    <p className="text-sm text-slate-500">You can use standard HTML tags like &lt;h1&gt;, &lt;p&gt;, &lt;br&gt;, &lt;strong&gt;.</p>
                                </div>
                            )}

                            {activeTab === 'FAQ_SETTINGS' && (
                                <div className="space-y-6">
                                    <div className="flex justify-between items-center">
                                        <h3 className="text-lg font-semibold">Frequently Asked Questions</h3>
                                        <button 
                                            onClick={() => setFaqList([...faqList, { q: '', a: '' }])}
                                            className="text-sm bg-slate-100 px-3 py-1.5 rounded-lg font-medium hover:bg-slate-200"
                                        >
                                            + Add FAQ
                                        </button>
                                    </div>
                                    <div className="space-y-4">
                                        {faqList.map((faq, i) => (
                                            <div key={i} className="p-4 border border-slate-100 rounded-xl bg-slate-50 relative group">
                                                <button 
                                                    onClick={() => setFaqList(faqList.filter((_, idx) => idx !== i))}
                                                    className="absolute top-2 right-2 text-red-500 opacity-0 group-hover:opacity-100 transition p-1 hover:bg-red-50 rounded"
                                                >
                                                    Remove
                                                </button>
                                                <input
                                                    type="text"
                                                    value={faq.q}
                                                    onChange={e => {
                                                        const newL = [...faqList];
                                                        newL[i].q = e.target.value;
                                                        setFaqList(newL);
                                                    }}
                                                    placeholder="Question?"
                                                    className="w-full mb-3 p-2 border border-slate-200 rounded-lg outline-none focus:border-blue-500 bg-white"
                                                />
                                                <textarea
                                                    value={faq.a}
                                                    onChange={e => {
                                                        const newL = [...faqList];
                                                        newL[i].a = e.target.value;
                                                        setFaqList(newL);
                                                    }}
                                                    placeholder="Answer..."
                                                    className="w-full p-2 border border-slate-200 rounded-lg outline-none focus:border-blue-500 h-24 bg-white"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {activeTab === 'FOOTER_SETTINGS' && (
                                <div className="space-y-8">
                                    <div className="flex justify-between items-center mb-4">
                                        <h3 className="text-lg font-semibold">Footer Columns</h3>
                                        <button 
                                            onClick={() => setFooterLinks([...footerLinks, { title: 'New Column', links: [] }])}
                                            className="text-sm bg-slate-100 px-3 py-1.5 rounded-lg font-medium hover:bg-slate-200"
                                        >
                                            + Add Column
                                        </button>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {footerLinks.map((col, i) => (
                                            <div key={i} className="p-5 border border-slate-200 rounded-2xl bg-white shadow-sm">
                                                <div className="flex items-center gap-2 mb-4">
                                                    <input
                                                        type="text"
                                                        value={col.title}
                                                        onChange={e => {
                                                            const newL = [...footerLinks];
                                                            newL[i].title = e.target.value;
                                                            setFooterLinks(newL);
                                                        }}
                                                        className="font-bold text-lg p-1 border-b border-transparent hover:border-slate-300 focus:border-blue-500 outline-none w-full"
                                                    />
                                                    <button onClick={() => setFooterLinks(footerLinks.filter((_, idx) => idx !== i))} className="text-red-500 text-sm">Delete</button>
                                                </div>
                                                
                                                <div className="space-y-3">
                                                    {col.links.map((link, j) => (
                                                        <div key={j} className="flex gap-2">
                                                            <input 
                                                                placeholder="Label" 
                                                                value={link.label}
                                                                onChange={e => {
                                                                    const newL = [...footerLinks];
                                                                    newL[i].links[j].label = e.target.value;
                                                                    setFooterLinks(newL);
                                                                }}
                                                                className="flex-1 p-2 text-sm border border-slate-200 rounded-lg"
                                                            />
                                                            <input 
                                                                placeholder="URL" 
                                                                value={link.url}
                                                                onChange={e => {
                                                                    const newL = [...footerLinks];
                                                                    newL[i].links[j].url = e.target.value;
                                                                    setFooterLinks(newL);
                                                                }}
                                                                className="flex-1 p-2 text-sm border border-slate-200 rounded-lg"
                                                            />
                                                            <button onClick={() => {
                                                                const newL = [...footerLinks];
                                                                newL[i].links.splice(j, 1);
                                                                setFooterLinks(newL);
                                                            }} className="text-red-400 font-bold px-2">×</button>
                                                        </div>
                                                    ))}
                                                </div>
                                                <button 
                                                    onClick={() => {
                                                        const newL = [...footerLinks];
                                                        newL[i].links.push({ label: '', url: '' });
                                                        setFooterLinks(newL);
                                                    }}
                                                    className="mt-4 text-sm text-blue-600 font-medium hover:underline"
                                                >
                                                    + Add Link
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
