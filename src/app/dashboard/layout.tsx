import { cookies } from 'next/headers';
import { prisma } from '../../lib/prisma';
import SubscriptionGuard from '../../components/SubscriptionGuard';

export const dynamic = 'force-dynamic';

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
    const cookieStore = await cookies();
    const email = cookieStore.get('student_session')?.value;

    let isSubscribed = false;
    let subscriptionEnd: string | null = null;
    let hasExpired = true;
    let plan: string | null = null;

    if (email) {
        const user = await prisma.user.findUnique({
            where: { email: email.trim().toLowerCase() },
            select: { isSubscribed: true, subscriptionEnd: true, plan: true }
        });

        if (user) {
            isSubscribed = user.isSubscribed;
            subscriptionEnd = user.subscriptionEnd ? user.subscriptionEnd.toISOString() : null;
            hasExpired = user.subscriptionEnd ? new Date() > new Date(user.subscriptionEnd) : true;
            plan = user.plan;
        }
    }

    return (
        <SubscriptionGuard
            isSubscribed={isSubscribed}
            subscriptionEnd={subscriptionEnd}
            hasExpired={hasExpired}
            plan={plan}
        >
            {children}
        </SubscriptionGuard>
    );
}
