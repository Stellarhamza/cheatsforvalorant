#!/usr/bin/env node
/**
 * Download Valorant / Riot media referenced in the saved Riot Games HTML.
 * Run: node scripts/fetch-valorant-media.mjs
 */
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const IMAGES = path.join(ROOT, 'public', 'images');
const VIDEOS = path.join(ROOT, 'public', 'videos');

/** @type {Array<{ url: string; dest: string }>} */
const ASSETS = [
	{
		url: 'https://www.riotgames.com/darkroom/original/eedccd01fe642a9a6f5b5a4725c3c1c7:cab5f0653154a0cf9a07d7dc3334a71e/rg-brand-cinematic.mp4',
		dest: 'videos/hero-cinematic.mp4',
	},
	{
		url: 'https://www.riotgames.com/darkroom/1920/0dce4baaabd175f7ed1e08426653769d:14f2af5f5c8bf0cd1bc87af1c7730ed3/homepage-hero-general-brand.png',
		dest: 'images/hero-poster.png',
	},
	{
		url: 'https://www.riotgames.com/darkroom/350/10ff840f188f48f5ff651cd7d5adfb7e:8b53c2387dc0e60232af20e07dad71b9/val-homepagecarousellogo.png',
		dest: 'images/valorant-logo.png',
	},
	{
		url: 'https://www.riotgames.com/darkroom/1800/92106967d04f052541279c8fd46ec1c9:0099c0e2f640db56f02ff36b31de1f5f/v26-a5-websiteproductcardvisual.jpg',
		dest: 'images/valorant-cheats-hero.jpg',
	},
	{
		url: 'https://www.riotgames.com/darkroom/900/04b5a562c761723d7ad0bad304fb64d8:7773489bad911b8352791c806a2104db/vct23-megamenu-vct-image.jpg',
		dest: 'images/valorant-competitive-esp.jpg',
	},
	{
		url: 'https://www.riotgames.com/darkroom/900/92106967d04f052541279c8fd46ec1c9:659b6d1580e610417f8433742449861d/v26-a5-websiteproductcardvisual.jpg',
		dest: 'images/valorant-esp-wallhack-overlay.jpg',
	},
	{
		url: 'https://www.riotgames.com/darkroom/564/92106967d04f052541279c8fd46ec1c9:1978a347a51d0f6006c80a6e04d16a9c/v26-a5-websiteproductcardvisual.jpg',
		dest: 'images/valorant-esp-enemy-boxes.jpg',
	},
	{
		url: 'https://www.riotgames.com/darkroom/900/04b5a562c761723d7ad0bad304fb64d8:7773489bad911b8352791c806a2104db/vct23-megamenu-vct-image.jpg',
		dest: 'images/valorant-aimbot-combat.jpg',
	},
	{
		url: 'https://www.riotgames.com/darkroom/350/db6de7b0d36f10e06831c0224e37c41c:f1af8e3f4a1b9e7e531d57c46cbb1eac/vct-logo-v-full-rgb-white.png',
		dest: 'images/valorant-vct-logo.png',
	},
];

async function download(url, destPath) {
	const res = await fetch(url, {
		headers: { 'User-Agent': 'Mozilla/5.0 (compatible; ValorantCheatsSite/1.0)' },
	});
	if (!res.ok) throw new Error(`${url} → HTTP ${res.status}`);
	const buf = Buffer.from(await res.arrayBuffer());
	await writeFile(destPath, buf);
	console.log('✓', path.relative(ROOT, destPath), `(${(buf.length / 1024).toFixed(0)} KB)`);
}

async function main() {
	await mkdir(IMAGES, { recursive: true });
	await mkdir(VIDEOS, { recursive: true });

	for (const { url, dest } of ASSETS) {
		const destPath = path.join(ROOT, 'public', dest);
		try {
			await download(url, destPath);
		} catch (err) {
			console.error('✗', dest, err.message);
		}
	}

	// Symlink-style copies for gallery filenames
	const copies = [
		['valorant-cheats-hero.jpg', 'valorant-cheats-main-menu.jpg'],
		['valorant-competitive-esp.jpg', 'valorant-cheats-combat-esp.jpg'],
		['valorant-aimbot-combat.jpg', 'valorant-aimbot-targeting-menu.jpg'],
		['valorant-vct-logo.png', 'valorant-radar-hack-minimap.png'],
		['valorant-esp-wallhack-overlay.jpg', 'valorant-map-radar.jpg'],
		['valorant-esp-enemy-boxes.jpg', 'valorant-ability-esp.jpg'],
		['valorant-cheats-hero.jpg', 'valorant-cheats-settings-panel.jpg'],
		['valorant-logo.png', 'valorant-esp-overlay.png'],
	];

	for (const [from, to] of copies) {
		const src = path.join(IMAGES, from);
		const dst = path.join(IMAGES, to);
		try {
			const { copyFile } = await import('node:fs/promises');
			await copyFile(src, dst);
			console.log('→ copied', to);
		} catch {
			// source may have failed download
		}
	}

	// Favicon sizes from logo
	try {
		const sharp = (await import('sharp')).default;
		const logo = path.join(IMAGES, 'valorant-logo.png');
		const sizes = [
			[16, 'favicon-16x16.png'],
			[32, 'favicon-32x32.png'],
			[48, 'favicon-48x48.png'],
			[192, 'favicon.png'],
			[512, 'android-chrome-512x512.png'],
		];
		for (const [size, name] of sizes) {
			await sharp(logo)
				.resize(size, size, { fit: 'contain', background: { r: 15, g: 25, b: 35, alpha: 1 } })
				.png()
				.toFile(path.join(ROOT, 'public', name));
			console.log('✓ favicon', name);
		}
	} catch (err) {
		console.warn('sharp favicon generation skipped:', err.message);
	}
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
