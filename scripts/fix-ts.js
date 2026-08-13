const fs = require('fs');
let c = fs.readFileSync('src/app/books/page.tsx', 'utf8');
c = c.replace(/onerror=/g, 'onError=');
c = c.replace(/rows="3"/g, 'rows={3}');
fs.writeFileSync('src/app/books/page.tsx', c);
