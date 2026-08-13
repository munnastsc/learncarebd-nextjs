const fs = require('fs');

async function exportHTML() {
    try {
        console.log('Fetching page from localhost:3000...');
        const res = await fetch('http://localhost:3000');
        let html = await res.text();
        
        console.log('Processing HTML...');
        
        // Find the start of <body> and end of </body>
        const bodyStart = html.indexOf('<body');
        const bodyEnd = html.indexOf('</body>');
        
        if (bodyStart === -1 || bodyEnd === -1) {
            throw new Error('Could not find body tags');
        }
        
        // Extract body content
        let bodyContent = html.substring(bodyStart, bodyEnd + 7);
        
        // Remove Next.js hydration scripts
        bodyContent = bodyContent.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
        // Remove Next.js injected iframes or next-route-announcer
        bodyContent = bodyContent.replace(/<next-route-announcer>.*?<\/next-route-announcer>/gi, '');
        
        // Replace relative paths with absolute paths for the new subdomain
        const subdomain = 'https://ielts.learncarebd.com';
        bodyContent = bodyContent.replace(/href="\/([^"]*)"/g, `href="${subdomain}/$1"`);
        bodyContent = bodyContent.replace(/src="\/([^"]*)"/g, `src="${subdomain}/$1"`);
        
        // Replace empty absolute links if any (e.g. href="/")
        bodyContent = bodyContent.replace(/href="\/"/g, `href="${subdomain}/"`);
        
        // Add Tailwind CSS CDN inside a proper HTML skeleton
        const finalHTML = `<!DOCTYPE html>
<html lang="bn">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LearnCare Academy - IELTS & Spoken English</title>
    <!-- Tailwind CSS for styling -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                    }
                }
            }
        }
    </script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Inter', sans-serif; }
        /* Add basic animations */
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: .5; } }
        .animate-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        @keyframes marquee { 0% { transform: translateX(100%); } 100% { transform: translateX(-100%); } }
        .animate-marquee { animation: marquee 20s linear infinite; }
        .mask-image-fade { -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent); mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent); }
    </style>
</head>
${bodyContent}
</html>`;

        fs.writeFileSync('wordpress-homepage.html', finalHTML);
        console.log('Successfully wrote wordpress-homepage.html');
        
    } catch (err) {
        console.error('Error:', err);
    }
}

exportHTML();
