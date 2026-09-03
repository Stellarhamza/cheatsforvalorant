#!/usr/bin/env node
/**
 * SEO audit for cheatsforvalorant.com — Valorant cheats keyword focus.
 * Run: node scripts/seo-audit.mjs
 * Exit 1 on critical failures.
 */
import { readFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { englishPagesFinal } from './i18n-data/pages-en.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const DOMAIN = 'cheatsforvalorant.com';
const ORIGIN = `https://${DOMAIN}`;
const PRIMARY_KW = 'valorant cheats';
const BRAND_KW = 'valorant';

const BANNED = [
	/islecheat/i,
	/the isle/i,
	/\bfacepunch\b/i,
	/fortnitehack/i,
	/rusthacks\.net/i,
	/islecheat\.net/i,
	/arcraidershacks\.com/i,
	/overwatchhacks\.com/i,
	/\boverwatch hacks\b/i,
	/\bwar thunder\b/i,
	/\bwarframe\b/i,
	/\bsteel path\b/i,
];

const warnings = [];
const errors = [];

function warn(msg) {
	warnings.push(msg);
}
function fail(msg) {
	errors.push(msg);
}

function hasKeyword(text, kw = PRIMARY_KW) {
	return text.toLowerCase().includes(kw);
}

function checkBanned(label, text) {
	for (const re of BANNED) {
		if (re.test(text)) fail(`${label}: banned match ${re} → "${text.slice(0, 80)}..."`);
	}
}

const pageIds = Object.keys(englishPagesFinal);
for (const id of pageIds) {
	const p = englishPagesFinal[id];
	const label = `en/${id}`;

	checkBanned(label, `${p.title} ${p.description} ${p.h1} ${p.intro}`);

	if (p.title.length > 60) fail(`${label}: title too long (${p.title.length}): ${p.title}`);
	if (p.title.length < 20) warn(`${label}: title short (${p.title.length}): ${p.title}`);

	if (p.description.length > 160) fail(`${label}: description too long (${p.description.length})`);
	if (p.description.length < 100) warn(`${label}: description short (${p.description.length})`);

	if (!hasKeyword(p.title, BRAND_KW) && !['privacy', 'refund', 'terms'].includes(id)) {
		fail(`${label}: title missing "valorant" → ${p.title}`);
	}
	if (!hasKeyword(p.description, BRAND_KW)) {
		fail(`${label}: description missing "valorant" → ${p.description.slice(0, 80)}`);
	}
	if (!hasKeyword(p.h1, BRAND_KW) && !['privacy', 'refund', 'terms'].includes(id)) {
		fail(`${label}: h1 missing "valorant" → ${p.h1}`);
	}

	if (['home', 'hacks', 'valorant-esp', 'valorant-aimbot', 'pricing'].includes(id)) {
		if (!hasKeyword(p.description, PRIMARY_KW) && !hasKeyword(p.description, 'valorant cheat')) {
			warn(`${label}: description should include primary keyword "valorant cheats"`);
		}
	}
}

const siteTs = readFileSync(join(root, 'src/data/site.ts'), 'utf8');
if (!siteTs.includes(ORIGIN)) fail(`site.ts missing canonical origin ${ORIGIN}`);
if (!siteTs.includes(`support@${DOMAIN}`)) fail(`site.ts missing support@${DOMAIN}`);
checkBanned('site.ts', siteTs);

const astroConfig = readFileSync(join(root, 'astro.config.mjs'), 'utf8');
if (!astroConfig.includes(ORIGIN)) fail(`astro.config.mjs missing site ${ORIGIN}`);

const robots = readFileSync(join(root, 'public/robots.txt'), 'utf8');
if (!robots.includes(DOMAIN)) fail(`robots.txt missing sitemap for ${DOMAIN}`);
checkBanned('robots.txt', robots);

const layout = readFileSync(join(root, 'src/layouts/Layout.astro'), 'utf8');
if (!layout.includes('application/ld+json')) fail('Layout.astro missing JSON-LD');
if (!layout.includes('hreflang') && !existsSync(join(root, 'src/components/I18nHead.astro'))) {
	fail('Missing hreflang implementation');
}
if (!layout.includes('rel="canonical"') && !layout.includes('rel="canonical"')) {
	fail('Layout.astro missing canonical link');
}
if (!layout.includes('og:locale:alternate')) fail('Layout.astro missing og:locale:alternate');
if (!layout.includes('site.webmanifest')) fail('Layout.astro missing web app manifest');

const middleware = readFileSync(join(root, 'functions/_middleware.js'), 'utf8');
if (!middleware.includes(ORIGIN)) fail(`_middleware.js missing ${ORIGIN}`);
if (middleware.includes('warframecheats.net')) fail('_middleware.js still points at warframecheats.net');

const distIndex = join(root, 'dist/index.html');
if (existsSync(distIndex)) {
	const html = readFileSync(distIndex, 'utf8');
	if (!html.includes(`href="${ORIGIN}/"`)) fail('dist/index.html canonical missing apex URL');
	if (!/valorant/i.test(html)) fail('dist/index.html missing Valorant in title/meta');
	if (!html.includes('application/ld+json')) fail('dist/index.html missing JSON-LD');

	const distGuidesHub = join(root, 'dist/guides/index.html');
	if (existsSync(distGuidesHub)) {
		const hubHtml = readFileSync(distGuidesHub, 'utf8');
		if (hubHtml.includes('noindex')) fail('dist/guides/index.html hub must remain indexable');
	}

	const distSitemap = join(root, 'dist/sitemap.xml');
	if (existsSync(distSitemap)) {
		const sitemapXml = readFileSync(distSitemap, 'utf8');
		const guideUrls = (sitemapXml.match(/\/guides\/guide-[^<]+/g) ?? []).length;
		if (guideUrls > 0) {
			fail(`dist/sitemap.xml lists ${guideUrls} external guide URLs — hub only expected`);
		}
		if (!sitemapXml.includes('/guides/')) {
			warn('dist/sitemap.xml: /guides/ hub not found in sitemap');
		}
	}
}

for (const file of ['src/pages/reviews/index.astro', 'src/pages/reviews/[slug]/index.astro']) {
	const src = readFileSync(join(root, file), 'utf8');
	checkBanned(file, src);
	if (!/valorant cheats/i.test(src)) warn(`${file}: consider adding "Valorant Cheats" keyword`);
}

const valorantTs = join(root, 'src/data/valorant.ts');
if (!existsSync(valorantTs)) fail('src/data/valorant.ts missing');
const valorantSrc = readFileSync(valorantTs, 'utf8');
if (!/Valorant/i.test(valorantSrc)) fail('valorant.ts image alts missing Valorant keyword');
checkBanned('valorant.ts', valorantSrc);

console.log('\n=== SEO Audit: cheatsforvalorant.com ===\n');
console.log(`Pages checked: ${pageIds.length} EN landing pages`);
console.log(`Primary keyword: "${PRIMARY_KW}"`);
console.log(`Canonical: ${ORIGIN}\n`);

if (warnings.length) {
	console.log(`Warnings (${warnings.length}):`);
	for (const w of warnings) console.log(`  ⚠ ${w}`);
	console.log('');
}

if (errors.length) {
	console.log(`Errors (${errors.length}):`);
	for (const e of errors) console.log(`  ✗ ${e}`);
	console.log('\nAudit FAILED.\n');
	process.exit(1);
}

console.log('✓ All critical SEO checks passed.\n');
