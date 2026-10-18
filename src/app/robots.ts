import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://learncarebd.com';

    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/ai-26/', '/api/'],
            },
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
