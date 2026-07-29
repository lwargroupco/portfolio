// Custom entry point for Passenger-based Node.js hosting (Hostinger hPanel,
// cPanel, Plesk). These hosts run a single JS file that starts an HTTP
// server on process.env.PORT, rather than executing `next start` directly.
// Point hPanel's "Application startup file" at this file.
const { createServer } = require("http");
const next = require("next");

const port = process.env.PORT || 3000;
const app = next({ dev: false });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    handle(req, res);
  }).listen(port, () => {
    console.log(`Ready on port ${port}`);
  });
});
