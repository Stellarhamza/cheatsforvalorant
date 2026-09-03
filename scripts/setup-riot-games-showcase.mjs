import fs from 'node:fs';
import { writeFile, copyFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const FILES_DIR =
	'C:/Users/ii/Downloads/Riot Games. Developer of League of Legends, VALORANT, Teamfight Tactics, Legends of Runeterra, and Wild Rift. Creators of Arcane. Home of LOL and VALORANT Esports. _ Riot Games_files';
const htmlPath =
	'C:/Users/ii/Downloads/Riot Games. Developer of League of Legends, VALORANT, Teamfight Tactics, Legends of Runeterra, and Wild Rift. Creators of Arcane. Home of LOL and VALORANT Esports. _ Riot Games.html';

const html = fs.readFileSync(htmlPath, 'utf8');

const blockRe =
	/<a title="Drag to explore" href="([^"]+)" class="embla__slide"[^>]*>([\s\S]*?)<\/a>/g;
const platformRe = /icon--([a-z]+)/g;

const games = [];
const seen = new Set();
let m;

while ((m = blockRe.exec(html))) {
	const href = m[1];
	if (seen.has(href)) continue;
	seen.add(href);

	const block = m[2];
	const bgMatch = block.match(/content-showcase__main__slide__bkg-image"[^>]*src="[^"]*\/([^"/]+)"/);
	const logoMatch = block.match(/content-showcase__main__slide__logo"><img src="[^"]*\/([^"/]+)"/);
	const platforms = [...block.matchAll(platformRe)]
		.map((x) => x[1])
		.filter((p) => p !== 'platform')
		.map((p) => (p === 'trading' ? 'tradingCard' : p));

	games.push({
		href,
		bgFile: bgMatch?.[1] ?? '',
		logoFile: logoMatch?.[1] ?? '',
		platforms: [...new Set(platforms)],
	});
}

const outDir = path.join(ROOT, 'public', 'images', 'games');
await mkdir(outDir, { recursive: true });

for (const game of games) {
	for (const file of [game.bgFile, game.logoFile]) {
		if (!file) continue;
		const src = path.join(FILES_DIR, file);
		const dest = path.join(outDir, file);
		try {
			await copyFile(src, dest);
			console.log('copied', file);
		} catch {
			console.warn('missing', file);
		}
	}
}

const showcase = games.map((g) => ({
	href: g.href,
	platforms: g.platforms,
	backgroundImage: `/images/games/${g.bgFile}`,
	logoImage: `/images/games/${g.logoFile}`,
}));

await writeFile(path.join(ROOT, 'src', 'data', 'riot-games-showcase.ts'), `export const riotGamesShowcase = ${JSON.stringify(showcase, null, '\t')} as const;\n`);

console.log(JSON.stringify(showcase, null, 2));
