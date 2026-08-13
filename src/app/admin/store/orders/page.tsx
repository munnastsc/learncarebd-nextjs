'use client';
import { useState, useEffect } from 'react';

export default function StoreOrdersAdmin() {
    const [orders, setOrders] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        const res = await fetch('/api/book-orders');
        if (res.ok) {
            const data = await res.json();
            setOrders(data);
        }
        setLoading(false);
    };

    const updateStatus = async (id: string, status: string) => {
        const res = await fetch(`/api/book-orders/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status })
        });
        if (res.ok) fetchOrders();
    };

    return (
        <div className="p-8">
            <h1 className="text-3xl font-black text-white mb-8">📦 Book Orders</h1>
            
            <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-x-auto">
                <table className="w-full text-left text-sm text-slate-400">
                    <thead className="bg-slate-800 text-xs uppercase text-slate-300">
                        <tr>
                            <th className="px-6 py-4">Date</th>
                            <th className="px-6 py-4">Customer</th>
                            <th className="px-6 py-4">Book</th>
                            <th className="px-6 py-4">Amount</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? <tr><td colSpan={6} className="text-center py-10">Loading...</td></tr> : null}
                        {!loading && orders.length === 0 ? <tr><td colSpan={6} className="text-center py-10">No orders yet.</td></tr> : null}
                        {orders.map(order => (
                            <tr key={order.id} className="border-b border-slate-800 hover:bg-slate-800/50">
                                <td className="px-6 py-4 whitespace-nowrap">{new Date(order.createdAt).toLocaleDateString()}</td>
                                <td className="px-6 py-4">
                                    <p className="font-bold text-white">{order.customerName}</p>
                                    <p className="text-emerald-400">{order.phone}</p>
                                    <p className="text-xs max-w-[200px] truncate" title={order.address}>{order.address}</p>
                                </td>
                                <td className="px-6 py-4">
                                    {order.book?.title} <span className="text-slate-500">(x{order.quantity})</span>
                                </td>
                                <td className="px-6 py-4 font-bold text-accent">৳ {order.totalAmount}</td>
                                <td className="px-6 py-4">
                                    <select 
                                        value={order.status}
                                        onChange={(e) => updateStatus(order.id, e.target.value)}
                                        className={`bg-slate-800 border rounded px-3 py-1 outline-none text-xs font-bold ${
                                            order.status === 'PENDING' ? 'text-orange-400 border-orange-500/30' :
                                            order.status === 'DELIVERED' ? 'text-emerald-400 border-emerald-500/30' :
                                            order.status === 'CANCELLED' ? 'text-red-400 border-red-500/30' :
                                            'text-blue-400 border-blue-500/30'
                                        }`}
                                    >
                                        <option value="PENDING">Pending</option>
                                        <option value="CONFIRMED">Confirmed</option>
                                        <option value="SHIPPED">Shipped</option>
                                        <option value="DELIVERED">Delivered</option>
                                        <option value="CANCELLED">Cancelled</option>
                                    </select>
                                </td>
                                <td className="px-6 py-4">
                                    {/* Action button if needed */}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
