const http = require('http');

const routes = [
  '/',
  '/about/',
  '/testimonials/',
  '/our-team/',
  '/our-team/platinum-roof-restorations-team/',
  '/services/',
  '/roof-restoration/',
  '/roof-painting/',
  '/roof-cleaning/',
  '/roof-rescrews/',
  '/repointing/',
  '/request-a-quote/',
  '/contact/',
  '/blog/',
  '/blog/roof-restoration-cairns/',
  '/blog/choosing-a-roof-colour/',
  '/blog/when-to-clean-a-roof/',
  '/robots.txt',
  '/sitemap.xml',
];

async function checkRoute(path) {
  return new Promise((resolve) => {
    http.get(`http://localhost:3000${path}`, (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => {
        resolve({
          path,
          status: res.statusCode,
          hasH1: data.includes('<h1'),
          hasSchema: data.includes('application/ld+json') || path.endsWith('.xml') || path.endsWith('.txt'),
          contentLength: data.length,
        });
      });
    }).on('error', (err) => {
      resolve({ path, error: err.message });
    });
  });
}

async function main() {
  console.log('--- AUDITING ALL ROUTES ---');
  const results = [];
  for (const r of routes) {
    const res = await checkRoute(r);
    results.push(res);
  }
  console.table(results);
  const all200 = results.every((r) => r.status === 200);
  console.log(`All routes returned HTTP 200: ${all200}`);
}

main();
