const { createServer } = require('http');
const { parse } = require('url');
const path = require('path');

process.chdir(path.dirname(require.resolve('./package.json')));

const next = require('next');
const app = next({ dev: false, dir: __dirname });
const handle = app.getRequestHandler();
const PORT = process.env.PORT || 3000;

app.prepare()
    .then(() => {
        createServer((req, res) => {
            const parsedUrl = parse(req.url, true);
            handle(req, res, parsedUrl);
        }).listen(PORT, '0.0.0.0', () => {
            console.log(`> Ready on port ${PORT}`);
        });
    })
    .catch(err => {
        console.error('Failed to start:', err);
        process.exit(1);
    });
