const fs = require('fs');
let c = fs.readFileSync('src/app/books/page.tsx', 'utf8');
c = c.replace(/onError="[^"]+"/g, "onError={(e) => { e.currentTarget.src='https://placehold.co/600x800/e2e8f0/475569?text=Cover+Image'; }}");
fs.writeFileSync('src/app/books/page.tsx', c);
console.log('Fixed onError in books/page.tsx');
