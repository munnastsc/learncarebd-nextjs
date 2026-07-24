'use client';

import { useEffect, useState } from 'react';
import { CheckCircle2, XCircle, Clock, RefreshCw, Users, CreditCard, Trash2, Key, UserPlus } from 'lucide-react';

type Order = {
    id: string;
    email: string;
    transactionId: string;
    amount: number;
    plan: string | null;
    status: string;
    createdAt: string;
};

type User = {
    id: string;
    email: string;
    password?: string | null;
    isSubscribed: boolean;
    plan: string | null;
    subscriptionEnd: string | null;
    createdAt: string;
};

const PLAN_LABELS: Record<string, string> = {
    spoken: 'Spoken English (৳199)',
    ielts_spoken: 'IELTS + Spoken (৳499)',
    unlimited_chat: 'Unlimited AI Chat (৳799)',
};

const STATUS_COLORS: Record<string, string> = {
    PENDING: 'bg-amber-100 text-amber-700 border border-amber-200',
    APPROVED: 'bg-emerald-100 text-emerald-700 border border-emerald-200',
    REJECTED: 'bg-red-100 text-red-700 border border-red-200',
};

export default function AdminDashboardPage() {
    const [activeTab, setActiveTab] = useState<'orders' | 'students' | 'add_student'>('orders');
    const [orders, setOrders] = useState<Order[]>([]);
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [updating, setUpdating] = useState<string | null>(null);
    const [message, setMessage] = useState('');

    // Add Student Form State
    const [newEmail, setNewEmail] = useState('');
    const [newPassword, setNewPassword] = useState('123456');
    const [newPlan, setNewPlan] = useState('spoken');
    const [newSubscribed, setNewSubscribed] = useState(true);

    const fetchData = async () => {
        setLoading(true);
        setMessage('');
        try {
            // Fetch Orders
            const ordersRes = await fetch('/api/admin/payment-requests');
            const ordersData = await ordersRes.json();
            setOrders(ordersData.items || []);

            // Fetch Users
            const usersRes = await fetch('/api/admin/users');
            const usersData = await usersRes.json();
            setUsers(usersData.items || []);
        } catch {
            setMessage('Failed to load data.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const updateOrderStatus = async (id: string, status: 'APPROVED' | 'REJECTED') => {
        setUpdating(id);
        try {
            const res = await fetch('/api/admin/payment-requests', {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id, status }),
            });
            if (res.ok) {
                setOrders(prev => prev.map(o => o.id === id ? { ...o, status } : o));
                setMessage(`${status === 'APPROVED' ? '✅ Order Approved' : '❌ Order Rejected'}!`);
                setTimeout(() => setMessage(''), 3000);
                fetchData(); // Reload to sync users
            }
        } catch {
            setMessage('Update failed.');
        } finally {
            setUpdating(null);
        }
    };

    const toggleStudentSubscription = async (user: User) => {
        setUpdating(user.id);
        const nextState = !user.isSubscribed;
        try {
            const res = await fetch('/api/admin/users', {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id: user.id,
                    isSubscribed: nextState,
                    plan: user.plan || 'spoken'
                }),
            });
            if (res.ok) {
                setUsers(prev => prev.map(u => u.id === user.id ? { ...u, isSubscribed: nextState, subscriptionEnd: nextState ? new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString() : null } : u));
                setMessage(`Student subscription ${nextState ? 'Activated' : 'Deactivated'}!`);
                setTimeout(() => setMessage(''), 3000);
            }
        } catch {
            setMessage('Failed to update student.');
        } finally {
            setUpdating(null);
        }
    };

    const resetStudentPassword = async (userId: string) => {
        const newPass = prompt('নতুন পাসওয়ার্ড টাইপ করুন:', '123456');
        if (!newPass) return;
        setUpdating(userId);
        try {
            const res = await fetch('/api/admin/users', {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: userId, password: newPass }),
            });
            if (res.ok) {
                setUsers(prev => prev.map(u => u.id === userId ? { ...u, password: newPass } : u));
                setMessage('✅ পাসওয়ার্ড রিসেট সফল হয়েছে!');
                setTimeout(() => setMessage(''), 3000);
            }
        } catch {
            setMessage('Failed to reset password.');
        } finally {
            setUpdating(null);
        }
    };

    const deleteStudent = async (userId: string) => {
        if (!confirm('আপনি কি নিশ্চিত যে এই শিক্ষার্থীর অ্যাকাউন্ট ডিলিট করতে চান? (সব প্রগ্রেস ও চ্যাট হিস্টোরি মুছে যাবে!)')) return;
        setUpdating(userId);
        try {
            const res = await fetch(`/api/admin/users?id=${userId}`, {
                method: 'DELETE'
            });
            if (res.ok) {
                setUsers(prev => prev.filter(u => u.id !== userId));
                setMessage('❌ শিক্ষার্থী অ্যাকাউন্ট ডিলিট করা হয়েছে!');
                setTimeout(() => setMessage(''), 3000);
            }
        } catch {
            setMessage('Failed to delete student.');
        } finally {
            setUpdating(null);
        }
    };

    const createStudent = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch('/api/admin/users', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: newEmail,
                    password: newPassword,
                    plan: newPlan,
                    isSubscribed: newSubscribed
                }),
            });
            const data = await res.json();
            if (res.ok) {
                setMessage('✅ নতুন শিক্ষার্থী সফলভাবে যোগ করা হয়েছে!');
                setNewEmail('');
                setNewPassword('123456');
                fetchData();
                setActiveTab('students');
            } else {
                setMessage(`Error: ${data.error}`);
            }
        } catch {
            setMessage('Failed to create student.');
        } finally {
            setLoading(false);
        }
    };

    const pendingOrders = orders.filter(o => o.status === 'PENDING');

    return (
        <div className="min-h-screen bg-[#f8fafc] text-slate-800">
            {/* Top Branding Header */}
            <div className="bg-gradient-to-r from-slate-900 to-indigo-950 px-6 py-8 text-white border-b border-indigo-900/40">
                <div className="mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h1 className="text-3xl font-black tracking-tight">LearnCareBD AI Admin</h1>
                        <p className="text-indigo-200 text-sm mt-1">কোর্স ম্যানেজমেন্ট, পেমেন্ট অনুমোদন এবং শিক্ষার্থীদের ডেটাবেজ</p>
                    </div>
                    <button
                        onClick={fetchData}
                        className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white hover:bg-white/25 backdrop-blur transition-all"
                    >
                        <RefreshCw size={15} /> Refresh Data
                    </button>
                </div>
            </div>

            <div className="mx-auto max-w-6xl px-6 py-8">
                {/* Statistics Overview Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                    <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">পেন্ডিং অর্ডার (Pending)</p>
                        <p className="text-3xl font-black text-amber-600 mt-2">{pendingOrders.length}</p>
                    </div>
                    <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">মোট পেমেন্ট (Orders)</p>
                        <p className="text-3xl font-black text-slate-900 mt-2">{orders.length}</p>
                    </div>
                    <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">মোট শিক্ষার্থী (Students)</p>
                        <p className="text-3xl font-black text-indigo-600 mt-2">{users.length}</p>
                    </div>
                    <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">প্রিমিয়াম শিক্ষার্থী (Paid)</p>
                        <p className="text-3xl font-black text-emerald-600 mt-2">
                            {users.filter(u => u.isSubscribed).length}
                        </p>
                    </div>
                </div>

                {/* Tabs Selector Navigation */}
                <div className="flex gap-2 border-b border-slate-200 pb-3 mb-6">
                    <button
                        onClick={() => setActiveTab('orders')}
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${activeTab === 'orders'
                                ? 'bg-indigo-650 text-white shadow-md shadow-indigo-650/15'
                                : 'text-slate-500 hover:bg-slate-100 hover:text-slate-800'
                            }`}
                    >
                        <CreditCard size={16} />
                        পেমেন্ট অর্ডার ({orders.length})
                    </button>
                    <button
                        onClick={() => setActiveTab('students')}
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${activeTab === 'students'
                                ? 'bg-indigo-650 text-white shadow-md shadow-indigo-650/15'
                                : 'text-slate-500 hover:bg-slate-100 hover:text-slate-800'
                            }`}
                    >
                        <Users size={16} />
                        শিক্ষার্থী ডেটাবেজ ({users.length})
                    </button>
                    <button
                        onClick={() => setActiveTab('add_student')}
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${activeTab === 'add_student'
                                ? 'bg-indigo-650 text-white shadow-md shadow-indigo-650/15'
                                : 'text-slate-500 hover:bg-slate-100 hover:text-slate-800'
                            }`}
                    >
                        <UserPlus size={16} />
                        নতুন শিক্ষার্থী যোগ
                    </button>
                </div>

                {message && (
                    <div className="mb-6 rounded-xl bg-indigo-50 border border-indigo-100 px-4 py-3.5 text-sm font-bold text-indigo-900 shadow-sm flex items-center justify-between">
                        <span>{message}</span>
                        <button onClick={() => setMessage('')} className="text-indigo-400 hover:text-indigo-700">✕</button>
                    </div>
                )}

                {loading ? (
                    <div className="text-center py-20 text-slate-400 font-medium">লোড হচ্ছে, অনুগ্রহ করে অপেক্ষা করুন...</div>
                ) : (
                    <>
                        {/* Tab 1: Orders */}
                        {activeTab === 'orders' && (
                            <div className="space-y-6">
                                {pendingOrders.length > 0 && (
                                    <div>
                                        <h3 className="text-xs font-black uppercase tracking-widest text-amber-600 mb-3">
                                            🔔 পেন্ডিং পেমেন্ট ({pendingOrders.length})
                                        </h3>
                                        <div className="grid gap-3">
                                            {pendingOrders.map(order => (
                                                <OrderCard key={order.id} order={order} updating={updating} onUpdate={updateOrderStatus} />
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <div>
                                    <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-3">
                                        হিস্টরি (All Payment Records)
                                    </h3>
                                    <div className="grid gap-3">
                                        {orders.filter(o => o.status !== 'PENDING').length === 0 ? (
                                            <div className="bg-white border border-slate-200 rounded-2xl py-8 text-center text-slate-400 text-sm">কোনো পূর্ববর্তী রেকর্ড পাওয়া যায়নি।</div>
                                        ) : (
                                            orders.filter(o => o.status !== 'PENDING').map(order => (
                                                <OrderCard key={order.id} order={order} updating={updating} onUpdate={updateOrderStatus} />
                                            ))
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Tab 2: Students Database */}
                        {activeTab === 'students' && (
                            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left border-collapse text-sm">
                                        <thead>
                                            <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold">
                                                <th className="p-4">Email</th>
                                                <th className="p-4">Password</th>
                                                <th className="p-4">Subscribed Plan</th>
                                                <th className="p-4">End Date</th>
                                                <th className="p-4">Registered At</th>
                                                <th className="p-4 text-right">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100">
                                            {users.length === 0 ? (
                                                <tr>
                                                    <td colSpan={6} className="p-8 text-center text-slate-400 font-medium">কোনো শিক্ষার্থী নিবন্ধিত নেই।</td>
                                                </tr>
                                            ) : (
                                                users.map(user => {
                                                    const date = new Date(user.createdAt).toLocaleDateString('bn-BD', { day: 'numeric', month: 'short', year: 'numeric' });
                                                    const subEnd = user.subscriptionEnd ? new Date(user.subscriptionEnd).toLocaleDateString('bn-BD', { day: 'numeric', month: 'short', year: 'numeric' }) : 'Expired/None';

                                                    return (
                                                        <tr key={user.id} className="hover:bg-slate-50/50">
                                                            <td className="p-4 font-bold text-slate-900">{user.email}</td>
                                                            <td className="p-4 text-xs font-mono text-slate-500">{user.password || '123456'}</td>
                                                            <td className="p-4">
                                                                <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-bold ${user.isSubscribed ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-600'}`}>
                                                                    {user.isSubscribed ? `${PLAN_LABELS[user.plan || ''] || user.plan || 'Active'}` : 'Not Subscribed'}
                                                                </span>
                                                            </td>
                                                            <td className="p-4 text-xs text-slate-500">{subEnd}</td>
                                                            <td className="p-4 text-xs text-slate-500">{date}</td>
                                                            <td className="p-4 text-right">
                                                                <div className="flex justify-end gap-1.5">
                                                                    <button
                                                                        onClick={() => toggleStudentSubscription(user)}
                                                                        disabled={updating === user.id}
                                                                        className={`rounded-lg px-2.5 py-1.5 text-xs font-bold border transition ${user.isSubscribed
                                                                                ? 'border-red-200 bg-red-50 text-red-600 hover:bg-red-100'
                                                                                : 'border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
                                                                            }`}
                                                                        title="সাবস্ক্রিপশন টগল করুন"
                                                                    >
                                                                        {user.isSubscribed ? 'Disable' : 'Enable'}
                                                                    </button>
                                                                    <button
                                                                        onClick={() => resetStudentPassword(user.id)}
                                                                        disabled={updating === user.id}
                                                                        className="rounded-lg border border-slate-200 bg-white p-1.5 text-slate-600 hover:bg-slate-50"
                                                                        title="পাসওয়ার্ড বদলান"
                                                                    >
                                                                        <Key size={14} />
                                                                    </button>
                                                                    <button
                                                                        onClick={() => deleteStudent(user.id)}
                                                                        disabled={updating === user.id}
                                                                        className="rounded-lg border border-red-100 bg-red-50 p-1.5 text-red-500 hover:bg-red-100"
                                                                        title="অ্যাকাউন্ট ডিলিট"
                                                                    >
                                                                        <Trash2 size={14} />
                                                                    </button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    );
                                                })
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}

                        {/* Tab 3: Create Student Form */}
                        {activeTab === 'add_student' && (
                            <div className="mx-auto max-w-lg bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                                    <UserPlus size={18} className="text-indigo-600" />
                                    নতুন শিক্ষার্থী অ্যাকাউন্ট যুক্ত করুন
                                </h3>
                                <form onSubmit={createStudent} className="space-y-4">
                                    <div>
                                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Email Address</label>
                                        <input
                                            type="email"
                                            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:border-indigo-500"
                                            placeholder="Enter student email"
                                            value={newEmail}
                                            onChange={e => setNewEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Password</label>
                                        <input
                                            type="text"
                                            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:border-indigo-500"
                                            placeholder="Enter student password"
                                            value={newPassword}
                                            onChange={e => setNewPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Select Subscription Plan</label>
                                        <select
                                            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:border-indigo-500"
                                            value={newPlan}
                                            onChange={e => setNewPlan(e.target.value)}
                                        >
                                            <option value="spoken">Spoken English (৳199)</option>
                                            <option value="ielts_spoken">IELTS + Spoken English (৳499)</option>
                                            <option value="unlimited_chat">Unlimited AI Chat (৳799)</option>
                                        </select>
                                    </div>
                                    <div className="flex items-center gap-2.5 pt-2">
                                        <input
                                            type="checkbox"
                                            id="newSubscribed"
                                            checked={newSubscribed}
                                            onChange={e => setNewSubscribed(e.target.checked)}
                                            className="h-4.5 w-4.5 text-indigo-600 border-slate-200 rounded focus:ring-indigo-500"
                                        />
                                        <label htmlFor="newSubscribed" className="text-sm font-semibold text-slate-700">অ্যাকাউন্টে ইনস্ট্যান্ট প্রিমিয়াম সাবস্ক্রিপশন চালু করুন</label>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full rounded-xl bg-indigo-650 py-3 text-sm font-black text-white hover:bg-indigo-600 mt-4 transition-all"
                                    >
                                        যুক্ত করুন (Create Student)
                                    </button>
                                </form>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}

function OrderCard({ order, updating, onUpdate }: {
    order: Order;
    updating: string | null;
    onUpdate: (id: string, status: 'APPROVED' | 'REJECTED') => void;
}) {
    const date = new Date(order.createdAt).toLocaleString('bn-BD', {
        day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit'
    });

    return (
        <div className={`rounded-2xl bg-white border p-5 transition ${order.status === 'PENDING' ? 'border-amber-250 shadow-sm shadow-amber-50' : 'border-slate-200'}`}>
            <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                        <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold ${STATUS_COLORS[order.status] || 'bg-slate-100 text-slate-600'}`}>
                            {order.status}
                        </span>
                        <span className="text-xs text-slate-400">{date}</span>
                    </div>
                    <p className="mt-2 font-bold text-slate-900 truncate">{order.email}</p>
                    <div className="mt-1.5 flex items-center gap-3 text-xs text-slate-500">
                        <span>TxID: <span className="font-mono font-semibold text-slate-700">{order.transactionId}</span></span>
                        <span>৳{order.amount}</span>
                        <span className="rounded bg-indigo-50 text-indigo-750 px-1.5 py-0.5 font-bold">
                            {PLAN_LABELS[order.plan || ''] || order.plan || 'Unknown'}
                        </span>
                    </div>
                </div>

                {order.status === 'PENDING' && (
                    <div className="flex gap-2 shrink-0">
                        <button
                            onClick={() => onUpdate(order.id, 'APPROVED')}
                            disabled={updating === order.id}
                            className="flex items-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white hover:bg-emerald-500 disabled:opacity-50 transition-all"
                        >
                            <CheckCircle2 size={13} />
                            {updating === order.id ? '...' : 'Approve'}
                        </button>
                        <button
                            onClick={() => onUpdate(order.id, 'REJECTED')}
                            disabled={updating === order.id}
                            className="flex items-center gap-1.5 rounded-xl border border-red-200 bg-red-50 px-3 py-2.5 text-xs font-bold text-red-600 hover:bg-red-100 disabled:opacity-50 transition-all"
                        >
                            <XCircle size={13} />
                            Reject
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
