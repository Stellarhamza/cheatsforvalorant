#!/usr/bin/env node
/**
 * Bulk rebrand Warframe → Valorant across source and i18n generator files.
 * Run: node scripts/rebrand-valorant.mjs
 */
import { readFile, writeFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const SKIP_DIRS = new Set(['node_modules', 'dist', '.git', '.astro']);

const REPLACEMENTS = [
	['Warframe Cheats', 'Valorant Cheats'],
	['warframecheats.net', 'cheatsforvalorant.com'],
	['Warframe Cheats logo', 'Valorant Cheats logo'],
	['/products/warframe', '/products/valorant'],
	['warframe-cheats-hero', 'valorant-cheats-hero'],
	['warframe-cheats-main-menu', 'valorant-cheats-main-menu'],
	['warframe-esp-wallhack-overlay', 'valorant-esp-wallhack-overlay'],
	['warframe-esp-enemy-boxes', 'valorant-esp-enemy-boxes'],
	['warframe-aimbot-targeting-menu', 'valorant-aimbot-targeting-menu'],
	['warframe-radar-hack-minimap', 'valorant-radar-hack-minimap'],
	['warframe-cheats-combat-esp', 'valorant-cheats-combat-esp'],
	['warframe-steel-path-mission-esp', 'valorant-competitive-esp'],
	['warframe-sortie-aimbot-combat', 'valorant-aimbot-combat'],
	['warframe-open-world-radar', 'valorant-map-radar'],
	['warframe-loot-pickup-esp', 'valorant-ability-esp'],
	['warframe-cheats-settings-panel', 'valorant-cheats-settings-panel'],
	['warframe-esp-overlay', 'valorant-esp-overlay'],
	['warframe-mission', 'valorant-match'],
	['/warframe-cheats/', '/valorant-cheats/'],
	['/warframe-esp/', '/valorant-esp/'],
	['/warframe-aimbot/', '/valorant-aimbot/'],
	['/warframe-wallhack/', '/valorant-wallhack/'],
	['/warframe-radar/', '/valorant-radar/'],
	['warframe-cheats', 'valorant-cheats'],
	['warframe-esp', 'valorant-esp'],
	['warframe-aimbot', 'valorant-aimbot'],
	['warframe-wallhack', 'valorant-wallhack'],
	['warframe-radar', 'valorant-radar'],
	['Warframe Game Guides', 'Valorant Game Guides'],
	['Warframe Wiki', 'Valorant Wiki'],
	['Digital Extremes', 'Riot Games'],
	['Digital Extremes anti-cheat', 'Riot Vanguard anti-cheat'],
	['Digital-Extremes', 'Riot-Games'],
	['https://www.digitalextremes.com/', 'https://www.riotgames.com/'],
	['https://www.warframe.com/', 'https://playvalorant.com/'],
	['https://forums.warframe.com/forum/3-pc-update-notes/', 'https://playvalorant.com/en-us/news/'],
	['https://warframe.fandom.com/wiki/WARFRAME_Wiki', 'https://valorant.fandom.com/wiki/VALORANT_Wiki'],
	['https://www.warframe.com/game-guide', 'https://playvalorant.com/en-us/agents/'],
	['Steel Path', 'Competitive'],
	['Sorties', 'Spike Rush'],
	['Sortie', 'Spike Rush'],
	['open world', 'map rotations'],
	['Open World', 'Map Rotations'],
	['Plains of Eidolon', 'Ascent'],
	['Orb Vallis', 'Bind'],
	['Deimos', 'Haven'],
	['Grineer', 'enemy'],
	['Corpus', 'enemy'],
	['Infested', 'enemy'],
	['Sentient', 'enemy'],
	['Warframe', 'Valorant'],
	['warframe', 'valorant'],
	['WF', 'VAL'],
	['support@cheatsforvalorant.com', 'support@cheatsforvalorant.com'],
];

const TARGET_GLOBS = [
	'src',
	'scripts/i18n-data',
	'public',
	'astro.config.mjs',
];

const EXTENSIONS = new Set(['.ts', '.mjs', '.js', '.astro', '.css', '.xml', '.txt', '.md', '_redirects', '.htaccess']);

async function walk(dir, files = []) {
	const entries = await readdir(dir, { withFileTypes: true });
	for (const entry of entries) {
		if (SKIP_DIRS.has(entry.name)) continue;
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			await walk(full, files);
		} else {
			const ext = path.extname(entry.name);
			if (EXTENSIONS.has(ext) || entry.name === '_redirects' || entry.name === '_headers') {
				files.push(full);
			}
		}
	}
	return files;
}

function applyReplacements(text) {
	let out = text;
	for (const [from, to] of REPLACEMENTS) {
		out = out.split(from).join(to);
	}
	return out;
}

async function main() {
	const files = [];
	for (const rel of TARGET_GLOBS) {
		const abs = path.join(ROOT, rel);
		try {
			const s = await stat(abs);
			if (s.isDirectory()) {
				files.push(...(await walk(abs)));
			} else {
				files.push(abs);
			}
		} catch {
			// skip missing
		}
	}

	let changed = 0;
	for (const file of files) {
		const original = await readFile(file, 'utf8');
		const updated = applyReplacements(original);
		if (updated !== original) {
			await writeFile(file, updated, 'utf8');
			changed++;
			console.log('updated:', path.relative(ROOT, file));
		}
	}
	console.log(`Done. ${changed} files updated.`);
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
