const fs = require('fs');

let html = fs.readFileSync('wordpress-homepage.html', 'utf8');

// 1. Extract body content
const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
if (!bodyMatch) {
    console.error("No body tag found");
    process.exit(1);
}
let jsx = bodyMatch[1];

// 2. Class to className
jsx = jsx.replace(/class=/g, 'className=');

// 3. For to htmlFor
jsx = jsx.replace(/for=/g, 'htmlFor=');

// 4. SVG attributes
const svgAttrs = [
    'stroke-width', 'stroke-linecap', 'stroke-linejoin', 'fill-rule', 'clip-rule',
    'stroke-miterlimit', 'stroke-dasharray', 'stroke-dashoffset', 'stop-color', 'stop-opacity',
    'viewBox' // Make sure viewBox is correct case
];
for (let attr of svgAttrs) {
    const camel = attr.split('-').map((part, i) => i === 0 ? part : part.charAt(0).toUpperCase() + part.slice(1)).join('');
    const regex = new RegExp(attr + '=', 'gi');
    jsx = jsx.replace(regex, camel + '=');
}
// Fix viewBox case
jsx = jsx.replace(/viewbox=/g, 'viewBox=');
jsx = jsx.replace(/xmlns:xlink=/g, 'xmlnsXlink=');

// 5. Self-closing tags (img, input, br, hr)
// Simple regex to close them if they are not closed
jsx = jsx.replace(/<(img|input|br|hr)([^>]*?)(?<!\/)>/g, '<$1$2 />');

// 6. Comments
jsx = jsx.replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}');

// 7. Inline styles
// E.g. style="width: 100%; height: 200px;" -> style={{width: '100%', height: '200px'}}
jsx = jsx.replace(/style="([^"]*)"/g, (match, p1) => {
    let styles = p1.split(';').filter(s => s.trim() !== '').map(s => {
        let [key, val] = s.split(':');
        if(!key || !val) return '';
        key = key.trim();
        val = val.trim();
        // kebab-case to camelCase
        key = key.split('-').map((part, i) => i === 0 ? part : part.charAt(0).toUpperCase() + part.slice(1)).join('');
        return `${key}: '${val}'`;
    }).filter(s => s !== '');
    return `style={{${styles.join(', ')}}}`;
});

fs.writeFileSync('public/wordpress-jsx.jsx', jsx);
console.log("Written to public/wordpress-jsx.jsx");
