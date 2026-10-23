import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const topics=['','legal/privacy/','legal/terms/','legal/cookies/'];
const root='https://costaneractes.com';
test('all eight bilingual pages have topic metadata, real content, stylesheet and matching language links',()=>{
 const titles=new Set();for(const prefix of ['','en/'])for(const topic of topics){const route='/'+prefix+topic;const html=fs.readFileSync('dist'+route+'index.html','utf8');const title=html.match(/<title>(.*?)<\/title>/s)?.[1];assert.ok(title);assert.ok(!titles.has(title));titles.add(title);assert.equal((html.match(/<h1\b/g)||[]).length,1);assert.ok(html.includes(`rel="canonical" href="${root+route}"`));assert.ok(html.includes(`hreflang="x-default" href="${root+'/'+topic}"`));assert.ok(html.includes(`href="/en/${topic}"`));assert.ok(html.includes(`href="/${topic}"`));assert.match(html,/<link rel="stylesheet" href="\/_astro\/[^\"]+\.css"/);assert.ok(html.includes('src="/analytics.js"'));for(const [,url]of html.matchAll(/(?:src|href)="(\/[^"?#]*)(?:[?#][^"]*)?"/g)){if(url.startsWith('//')||url==='/api/weather')continue;assert.ok(fs.existsSync('dist'+url)||fs.existsSync('dist'+url+'index.html'),url);}if(topic)assert.match(html,/noindex,follow/);else{assert.match(html,/16,479/);assert.doesNotMatch(html,/aggregateRating|openingHoursSpecification|3\.4 km/);assert.match(html,/2026/);for(const [,json]of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g))JSON.parse(json);}}
 const sitemap=fs.readFileSync('dist/sitemap-0.xml','utf8');assert.ok(sitemap.includes(root+'/en/'));assert.ok(!sitemap.includes('/legal/'));assert.ok(!sitemap.includes('404'));assert.ok(fs.readdirSync('dist/images').every(name=>name.endsWith('.svg')));
});
