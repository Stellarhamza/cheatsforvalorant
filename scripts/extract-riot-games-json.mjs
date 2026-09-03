import fs from 'node:fs';
import { writeFile } from 'node:fs/promises';

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
	const platforms = [...block.matchAll(platformRe)].map((x) => x[1]);

	games.push({
		href,
		bgFile: bgMatch?.[1] ?? '',
		logoFile: logoMatch?.[1] ?? '',
		platforms: [...new Set(platforms)],
	});
}

console.log(JSON.stringify(games, null, 2));

// Riot CDN URLs from saved HTML paths
const CDN = 'https://www.riotgames.com/darkroom/900';
const gamesWithUrls = games.map((g) => ({
	href: g.href,
	platforms: g.platforms,
	backgroundImage: `${CDN}/${g.bgFile.replace(/\.(png|jpg|jpeg)$/i, '')}/${g.bgFile}`.replace(
		/\/900\/([^/]+)\/\1$/,
		`/900/bc6e4ca8873751a73ff448422c6d486f:91a14ad66b3c65b74afcadaf0ab375e7/${g.bgFile}`,
	),
	logoImage: `https://www.riotgames.com/darkroom/350/${g.logoFile}`,
	localBg: `/images/games/${g.bgFile}`,
	localLogo: `/images/games/${g.logoFile}`,
}));

await writeFile(
	new URL('../src/data/riot-games-showcase.json', import.meta.url),
	JSON.stringify({ games, gamesWithUrls }, null, 2),
);
