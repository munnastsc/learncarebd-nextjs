export const dynamic = 'force-dynamic';

import AdminSidebar from './AdminSidebar';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-slate-950 flex flex-col lg:flex-row">
            <AdminSidebar />
            <main className="flex-1 lg:ml-64 w-full min-w-0">
                {children}
            </main>
        </div>
    );
}
