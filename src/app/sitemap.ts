import { MetadataRoute } from 'next';
import { prisma } from '../lib/prisma';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://learncarebd.com';

    // Static commercial & public learning pages
    const routes = [
        '',
        '/courses',
        '/courses/one-on-one-english-mentorship',
        '/courses/mastering-spoken-english-pronunciation-challenge-90-day-bootcamp',
        '/courses/oxford-3000-vocabulary-mastery',
        '/books',
        '/level-test',
        '/login',
        '/about',
        '/terms',
        '/privacy',
        '/dashboard/spoken-english',
        '/dashboard/spoken-english/patterns',
        '/dashboard/spoken-english/pronunciation',
        '/dashboard/spoken-english/common-mistakes',
        '/dashboard/spoken-english/solo-speech',
        '/dashboard/spoken-english/conversations',
        '/dashboard/spoken-english/headway',
        '/dashboard/spoken-english/words',
        '/dashboard/stories',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1.0 : route.startsWith('/courses') ? 0.9 : 0.7,
    }));

    try {
        const books = await prisma.book.findMany({
            select: { id: true, updatedAt: true },
        });

        const bookRoutes = books.map((book) => ({
            url: `${baseUrl}/books/${book.id}`,
            lastModified: book.updatedAt || new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        }));

        return [...routes, ...bookRoutes];
    } catch {
        return routes;
    }
}
