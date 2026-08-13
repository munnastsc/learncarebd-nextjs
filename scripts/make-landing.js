const fs = require('fs');
const jsx = fs.readFileSync('public/wordpress-jsx.jsx', 'utf8');
const componentCode = `import Link from 'next/link';\nimport React from 'react';\n\nexport default function SpokenBookLanding() {\n    return (\n        <>\n            ${jsx}\n        </>\n    );\n}\n`;
fs.writeFileSync('src/app/books/[id]/SpokenBookLanding.tsx', componentCode);
