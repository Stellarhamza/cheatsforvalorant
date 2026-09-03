import { siteConfig } from './site';
import { valorantImages } from './valorant';
import { englishPaths, sitemapPageIds, type PageId } from './i18n/routing';
import { pageSitemapMeta } from './sitemap-meta';

export type SitemapImage = {
	url: string;
	title: string;
	caption: string;
};

export type PageSitemapEntry = {
	path: string;
	priority: number;
	changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly';
	lastmod: string;
	images: SitemapImage[];
};

const abs = (path: string) => new URL(path, siteConfig.url).href;

const img = (path: string, title: string, caption: string): SitemapImage => ({
	url: abs(path),
	title,
	caption,
});

/** Sitemap image assignments for indexable pages only (see sitemapPageIds in routing.ts). */
const sitemapImagesByPageId: Partial<Record<PageId, SitemapImage[]>> = {
	home: [
		img(valorantImages.hero, 'Valorant Cheats', 'Valorant Cheats homepage hero'),
		img(valorantImages.espWallhack, 'Valorant ESP', 'Valorant ESP wallhack overlay'),
		img(valorantImages.aimbotCombat, 'Valorant Aimbot', 'Valorant Aimbot combat preview'),
	],
	hacks: [
		img(valorantImages.battleRoyaleCombat, 'Valorant Cheats', 'Valorant cheats Competitive match fight preview'),
		img(valorantImages.espWallhack, 'Valorant Cheats ESP', 'Valorant wallhack ESP on enemy agents'),
	],
	'valorant-esp': [
		img(valorantImages.espWallhack, 'Valorant ESP', 'Valorant ESP wallhack overlay'),
		img(valorantImages.playerEsp, 'Valorant Enemy ESP', 'Valorant Enemy ESP markers'),
	],
	'valorant-aimbot': [
		img(valorantImages.aimbotCombat, 'Valorant Aimbot', 'Valorant Aimbot combat preview'),
		img(valorantImages.squadFight, 'Valorant Aimbot squad fight', 'Valorant Aimbot in squad combat'),
	],
	wallhack: [
		img(valorantImages.espWallhack, 'Valorant Wallhack', 'Valorant wallhack ESP view'),
		img(valorantImages.cover, 'Valorant Wallhack overlay', 'Valorant ESP boxes through terrain'),
	],
	radar: [
		img(valorantImages.radarHack, 'Valorant Radar Hack', 'Valorant radar hack minimap overlay'),
		img(valorantImages.rebootFight, 'Valorant Radar Hack overlay', 'Valorant 2D radar for flank detection'),
	],
	features: [
		img(valorantImages.hero, 'Valorant Cheats Features', 'Valorant Cheats feature overview'),
		img(valorantImages.loadoutBuilder, 'Valorant Cheats menu', 'Valorant Cheats in-client controls'),
	],
	pricing: [
		img(valorantImages.cover, 'Valorant Cheats Pricing', 'Valorant Cheats license plans'),
		img(valorantImages.cheatsPackage, 'Valorant Cheats package', 'Valorant Cheats product package'),
	],
	setup: [
		img(valorantImages.squadFight, 'Valorant Cheats Setup', 'Valorant Cheats installation guide'),
	],
	updates: [
		img(valorantImages.hero, 'Valorant Cheats Updates', 'Valorant Cheats patch status'),
	],
	faq: [
		img(valorantImages.loadoutBuilder, 'Valorant Cheats FAQ', 'Valorant Cheats frequently asked questions'),
	],
	support: [
		img(valorantImages.headerArt, 'Valorant Cheats Support', 'Valorant Cheats help center'),
	],
	privacy: [
		img(valorantImages.cover, 'Valorant Cheats Privacy Policy', 'Valorant Cheats privacy policy'),
	],
	refund: [
		img(valorantImages.cover, 'Valorant Cheats Refund Policy', 'Valorant Cheats refund policy'),
	],
	terms: [
		img(valorantImages.squadFight, 'Valorant Cheats Terms', 'Valorant Cheats terms of use'),
	],
};

for (const pageId of sitemapPageIds) {
	if (!sitemapImagesByPageId[pageId]?.length) {
		throw new Error(`[sitemap] No images configured for sitemap pageId: ${pageId}`);
	}
}

/** Canonical English sitemap entries — core valorant-cheats URLs only. */
export const pageSitemapEntries: PageSitemapEntry[] = sitemapPageIds.map((pageId) => {
	const meta = pageSitemapMeta[pageId];
	return {
		path: englishPaths[pageId],
		priority: meta.priority,
		changefreq: meta.changefreq,
		lastmod: meta.lastmod,
		images: sitemapImagesByPageId[pageId]!,
	};
});

/** Unique keyword images for the dedicated image sitemap. */
export const imageSitemapEntries: SitemapImage[] = valorantImages.sitemap.map((entry) =>
	img(entry.src, entry.title, entry.caption),
);

export function absolutePageUrl(path: string): string {
	return abs(path);
}

export function absoluteAssetUrl(path: string): string {
	return abs(path);
}
