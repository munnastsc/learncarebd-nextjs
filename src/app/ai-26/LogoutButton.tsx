'use client';

import { useRouter } from 'next/navigation';

export default function LogoutButton() {
    const router = useRouter();

    async function handleLogout() {
        await fetch('/api/ai-26/login', { method: 'DELETE' });
        router.push('/ai-26/login');
    }

    return (
        <button onClick={handleLogout}
            className="text-xs text-slate-400 hover:text-rose-400 transition font-semibold">
            Logout
        </button>
    );
}
