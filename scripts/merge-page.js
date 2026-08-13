const fs = require('fs');

let pageTsx = fs.readFileSync('src/app/page.tsx', 'utf8');
let jsx = fs.readFileSync('public/wordpress-jsx.jsx', 'utf8');

// Remove hydration marker if present
jsx = jsx.replace(/<div hidden="">\{\/\*\$\*\/}\{\/\*\/\$\*\/}<\/div>/, '');

// Replace Notice Text
jsx = jsx.replace(/📢 নোটিশ: LearnCare Academy-র নতুন স্পেশাল ব্যাচে ভর্তি চলছে! Spoken English, Pronunciation Challenge &amp; IELTS কোর্সে সীমিত সময়ের জন্য বিশেষ ছাড় পেতে আজই রেজিস্টার করুন। ওয়ান-টু-ওয়ান মেন্টরশিপের নতুন স্লট উন্মুক্ত!/g, '{noticeText}');

// Replace Phone Number (Display)
jsx = jsx.replace(/01714740430/g, "{settings.contact?.hotlinePhone || '01714740430'}");

// In href="tel:..." and href="https://wa.me/88..." we need to fix the quotes since we injected {}
jsx = jsx.replace(/href="tel:\{settings\.contact\?\.hotlinePhone \|\| '01714740430'\}"/g, "href={`tel:${settings.contact?.hotlinePhone || '01714740430'}`}");
jsx = jsx.replace(/href="https:\/\/wa\.me\/88\{settings\.contact\?\.hotlinePhone \|\| '01714740430'\}"/g, "href={`https://wa.me/88${settings.contact?.whatsappNumber || '01714740430'}`}");

// Replace Email
jsx = jsx.replace(/support@learncarebd\.com/g, "{settings.contact?.emailAddress || 'support@learncarebd.com'}");
jsx = jsx.replace(/href="mailto:\{settings\.contact\?\.emailAddress \|\| 'support@learncarebd\.com'\}"/g, "href={`mailto:${settings.contact?.emailAddress || 'support@learncarebd.com'}`}");

// Replace standard links
jsx = jsx.replace(/href="https:\/\/ielts\.learncarebd\.com\/"/g, 'href="/"');
jsx = jsx.replace(/href="https:\/\/ielts\.learncarebd\.com\/books"/g, 'href="/books"');
jsx = jsx.replace(/href="https:\/\/ielts\.learncarebd\.com\/blog"/g, 'href="/blog"');
jsx = jsx.replace(/href="https:\/\/ielts\.learncarebd\.com\/login"/g, 'href="/login"');
jsx = jsx.replace(/href="https:\/\/ielts\.learncarebd\.com\/admin\/login"/g, 'href="/admin/login"');
jsx = jsx.replace(/href="https:\/\/ielts\.learncarebd\.com\/dashboard\/spoken-english"/g, 'href="/dashboard/spoken-english"');
jsx = jsx.replace(/href="https:\/\/ielts\.learncarebd\.com\/dashboard"/g, 'href="/dashboard"');
jsx = jsx.replace(/href="https:\/\/ielts\.learncarebd\.com\/courses\/([^"]+)"/g, 'href="/courses/$1"');

// Fix class to className if any escaped
jsx = jsx.replace(/ class=/g, ' className=');

// Map wpPosts? Actually the user said they want it exactly like the HTML, and the HTML has static "Premium Flagship Courses".
// If they want to keep it static for now, that's fine. I will just embed the JSX.

// Extract top part of pageTsx
const returnIndex = pageTsx.indexOf('return (');
if (returnIndex === -1) {
    console.error("Could not find 'return (' in page.tsx");
    process.exit(1);
}

const beforeReturn = pageTsx.substring(0, returnIndex);

const newPageTsx = `${beforeReturn}return (\n        <>\n            ${jsx}\n        </>\n    );\n}`;

fs.writeFileSync('src/app/page.tsx', newPageTsx);
console.log("Updated src/app/page.tsx");
