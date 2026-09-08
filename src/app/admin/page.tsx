import { prisma } from '../../lib/prisma';
import Link from 'next/link';
import { Users, ShoppingBag, BookOpen, FileText, ArrowRight } from 'lucide-react';

export default async function AdminDashboard() {
    const [userCount, orderCount, bookCount, postCount] = await Promise.all([
        prisma.user.count(),
        prisma.bookOrder.count(),
        prisma.book.count(),
        prisma.customPost.count()
    ]);

    const recentOrders = await prisma.bookOrder.findMany({
        orderBy: { createdAt: 'desc' },
        take: 5,
        include: { book: true }
    });

    const recentUsers = await prisma.user.findMany({
        orderBy: { createdAt: 'desc' },
        take: 5
    });

    return (
        <div className="p-6 md:p-8 space-y-8 max-w-7xl mx-auto">
            <div>
                <h1 className="text-2xl font-black text-white">Dashboard Overview</h1>
                <p className="text-slate-400 mt-1 text-sm">Welcome to the ILTES Administration Panel</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex items-start justify-between">
                    <div>
                        <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Total Users</p>
                        <h3 className="text-3xl font-black text-white">{userCount}</h3>
                    </div>
                    <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-400">
                        <Users size={24} />
                    </div>
                </div>

                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex items-start justify-between">
                    <div>
                        <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Store Orders</p>
                        <h3 className="text-3xl font-black text-white">{orderCount}</h3>
                    </div>
                    <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400">
                        <ShoppingBag size={24} />
                    </div>
                </div>

                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex items-start justify-between">
                    <div>
                        <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Store Books</p>
                        <h3 className="text-3xl font-black text-white">{bookCount}</h3>
                    </div>
                    <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-400">
                        <BookOpen size={24} />
                    </div>
                </div>

                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex items-start justify-between">
                    <div>
                        <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Pages & Posts</p>
                        <h3 className="text-3xl font-black text-white">{postCount}</h3>
                    </div>
                    <div className="w-12 h-12 bg-rose-500/10 rounded-xl flex items-center justify-center text-rose-400">
                        <FileText size={24} />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
                    <div className="px-6 py-4 border-b border-slate-800 flex justify-between items-center bg-slate-900/50">
                        <h3 className="font-bold text-white">Recent Orders</h3>
                        <Link href="/admin/store/orders" className="text-xs text-teal-400 hover:text-teal-300 flex items-center gap-1 font-semibold">
                            View All <ArrowRight size={14} />
                        </Link>
                    </div>
                    <div className="divide-y divide-slate-800">
                        {recentOrders.map(order => (
                            <div key={order.id} className="p-4 px-6 flex justify-between items-center hover:bg-slate-800/30 transition">
                                <div>
                                    <p className="font-bold text-sm text-slate-200">{order.customerName}</p>
                                    <p className="text-xs text-slate-500 truncate max-w-[200px]">{order.book?.title}</p>
                                </div>
                                <div className="text-right">
                                    <p className="font-bold text-emerald-400 text-sm">৳{order.totalAmount}</p>
                                    <span className="text-[10px] uppercase font-bold text-slate-400">{order.status}</span>
                                </div>
                            </div>
                        ))}
                        {recentOrders.length === 0 && (
                            <div className="p-8 text-center text-slate-500 text-sm">No orders yet.</div>
                        )}
                    </div>
                </div>

                <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
                    <div className="px-6 py-4 border-b border-slate-800 flex justify-between items-center bg-slate-900/50">
                        <h3 className="font-bold text-white">Recent Users</h3>
                        <Link href="/admin/orders" className="text-xs text-teal-400 hover:text-teal-300 flex items-center gap-1 font-semibold">
                            View All <ArrowRight size={14} />
                        </Link>
                    </div>
                    <div className="divide-y divide-slate-800">
                        {recentUsers.map(user => (
                            <div key={user.id} className="p-4 px-6 flex justify-between items-center hover:bg-slate-800/30 transition">
                                <div>
                                    <p className="font-bold text-sm text-slate-200">{user.name || 'Anonymous'}</p>
                                    <p className="text-xs text-slate-500">{user.email}</p>
                                </div>
                                <div className="text-right">
                                    <span className={`text-[10px] px-2 py-1 rounded-full uppercase font-bold ${user.isSubscribed ? 'bg-indigo-500/20 text-indigo-400' : 'bg-slate-800 text-slate-400'}`}>
                                        {user.isSubscribed ? 'Subscribed' : 'Free'}
                                    </span>
                                </div>
                            </div>
                        ))}
                        {recentUsers.length === 0 && (
                            <div className="p-8 text-center text-slate-500 text-sm">No users yet.</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
