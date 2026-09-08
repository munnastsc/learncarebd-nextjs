'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
    LayoutDashboard, 
    Home, 
    FileText, 
    BookOpen, 
    ShoppingCart, 
    Users, 
    Settings,
    Menu,
    X
} from 'lucide-react';
import { useState } from 'react';
import LogoutButton from './LogoutButton';

export default function AdminSidebar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'Dashboard', href: '/ai-26', icon: LayoutDashboard },
        { name: 'Homepage Editor', href: '/ai-26/homepage', icon: Home, highlight: true },
        { name: 'Dynamic Pages', href: '/ai-26/pages', icon: Settings, highlight: true },
        { name: 'Posts & Courses', href: '/ai-26/content', icon: FileText },
        { name: 'IELTS Books', href: '/ai-26/books', icon: BookOpen },
        { name: 'Store Books', href: '/ai-26/store/books', icon: ShoppingCart },
        { name: 'Store Orders', href: '/ai-26/store/orders', icon: ShoppingCart },
        { name: 'Users & Orders', href: '/ai-26/orders', icon: Users },
    ];

    return (
        <>
            {/* Mobile Header */}
            <div className="lg:hidden flex items-center justify-between bg-slate-900 border-b border-slate-800 p-4 sticky top-0 z-50">
                <span className="text-sm font-black text-white">ILTES Admin</span>
                <button onClick={() => setIsOpen(!isOpen)} className="text-slate-400 hover:text-white">
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Sidebar */}
            <aside className={`
                fixed inset-y-0 left-0 z-40 w-64 bg-slate-900 border-r border-slate-800 transform transition-transform duration-300 ease-in-out flex flex-col
                ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
            `}>
                <div className="p-6 border-b border-slate-800 hidden lg:block">
                    <span className="text-xl font-black text-white tracking-wider flex items-center gap-2">
                        <span className="bg-teal-500 w-2 h-6 rounded-full inline-block"></span>
                        ILTES Admin
                    </span>
                </div>

                <div className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
                    <div className="text-xs font-bold text-slate-500 mb-4 px-3 uppercase tracking-wider">Main Menu</div>
                    
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        const Icon = item.icon;
                        
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className={`
                                    flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200
                                    ${isActive 
                                        ? 'bg-teal-500/10 text-teal-400 border border-teal-500/20' 
                                        : item.highlight 
                                            ? 'text-amber-400 hover:bg-slate-800 hover:text-amber-300' 
                                            : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'}
                                `}
                            >
                                <Icon size={18} className={isActive ? "text-teal-400" : ""} />
                                {item.name}
                            </Link>
                        );
                    })}
                </div>

                <div className="p-4 border-t border-slate-800">
                    <LogoutButton />
                </div>
            </aside>

            {/* Mobile Overlay */}
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-black/50 z-30 lg:hidden backdrop-blur-sm"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    );
}
