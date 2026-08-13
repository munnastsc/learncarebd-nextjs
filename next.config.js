/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cloudinary.com',
            },
        ],
    },
    // Include data/ directory in serverless function bundle (for Vercel)
    outputFileTracingIncludes: {
        '/api/chat': ['./data/**/*'],
    },
    async rewrites() {
        return [
            {
                source: '/%E0%A6%B6%E0%A6%BF%E0%A6%96%E0%A6%A4%E0%A7%87%E0%A6%87-%E0%A6%B9%E0%A6%AC%E0%A7%87-%E0%A7%A9%E0%A7%A6%E0%A7%A6%E0%A7%A6-%E0%A6%B6%E0%A6%AC%E0%A7%8D%E0%A6%A6',
                destination: '/3000-words',
            },
            {
                source: '/শিখতেই-হবে-৩০০০-শব্দ',
                destination: '/3000-words',
            }
        ];
    }
};

module.exports = nextConfig;