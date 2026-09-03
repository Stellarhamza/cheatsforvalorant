import type { PageId } from './i18n/routing';

export type SitemapFreq = 'daily' | 'weekly' | 'monthly' | 'yearly';

export type PageSitemapMeta = {
	priority: number;
	changefreq: SitemapFreq;
	/** Priority for non-English locale URLs in sitemap-i18n.xml */
	i18nPriority: number;
	/** Real content modification date (YYYY-MM-DD) — update when the page content changes. */
	lastmod: string;
};

/**
 * SEO priority and crawl hints per page — keyed by PageId (single source of truth).
 * English URLs use `priority`; localized URLs use `i18nPriority`.
 * `lastmod` reflects when each page's content actually changed — do NOT reset all
 * pages to the same date on deploy, only bump pages whose content was edited.
 */
export const pageSitemapMeta: Record<PageId, PageSitemapMeta> = {
	home: { priority: 1.0, changefreq: 'daily', i18nPriority: 0.88, lastmod: '2026-09-02' },
	undetected: { priority: 0.98, changefreq: 'weekly', i18nPriority: 0.87, lastmod: '2026-09-02' },
	'cheats-2026': { priority: 0.98, changefreq: 'weekly', i18nPriority: 0.87, lastmod: '2026-09-02' },
	hacks: { priority: 0.97, changefreq: 'weekly', i18nPriority: 0.86, lastmod: '2026-09-02' },
	'cheat-download': { priority: 0.96, changefreq: 'weekly', i18nPriority: 0.85, lastmod: '2026-09-02' },
	'mod-menu': { priority: 0.96, changefreq: 'weekly', i18nPriority: 0.85, lastmod: '2026-09-02' },
	'soft-aim': { priority: 0.95, changefreq: 'weekly', i18nPriority: 0.85, lastmod: '2026-09-02' },
	'best-cheats': { priority: 0.98, changefreq: 'weekly', i18nPriority: 0.87, lastmod: '2026-09-02' },
	'aimbot-hack': { priority: 0.95, changefreq: 'weekly', i18nPriority: 0.85, lastmod: '2026-09-02' },
	'esp-hack': { priority: 0.97, changefreq: 'weekly', i18nPriority: 0.86, lastmod: '2026-09-02' },
	'unlock-all': { priority: 0.94, changefreq: 'weekly', i18nPriority: 0.84, lastmod: '2026-09-02' },
	wallhack: { priority: 0.97, changefreq: 'weekly', i18nPriority: 0.86, lastmod: '2026-09-02' },
	radar: { priority: 0.97, changefreq: 'weekly', i18nPriority: 0.86, lastmod: '2026-09-02' },
	'eac-bypass': { priority: 0.96, changefreq: 'weekly', i18nPriority: 0.85, lastmod: '2026-09-02' },
	'valorant-esp': { priority: 0.95, changefreq: 'weekly', i18nPriority: 0.85, lastmod: '2026-09-02' },
	'valorant-aimbot': { priority: 0.95, changefreq: 'weekly', i18nPriority: 0.85, lastmod: '2026-09-02' },
	pricing: { priority: 0.95, changefreq: 'weekly', i18nPriority: 0.85, lastmod: '2026-09-02' },
	features: { priority: 0.9, changefreq: 'weekly', i18nPriority: 0.84, lastmod: '2026-09-02' },
	setup: { priority: 0.9, changefreq: 'weekly', i18nPriority: 0.84, lastmod: '2026-09-02' },
	updates: { priority: 0.9, changefreq: 'daily', i18nPriority: 0.84, lastmod: '2026-09-02' },
	faq: { priority: 0.8, changefreq: 'monthly', i18nPriority: 0.82, lastmod: '2026-09-02' },
	support: { priority: 0.8, changefreq: 'monthly', i18nPriority: 0.82, lastmod: '2026-09-02' },
	privacy: { priority: 0.4, changefreq: 'yearly', i18nPriority: 0.35, lastmod: '2026-06-08' },
	refund: { priority: 0.4, changefreq: 'yearly', i18nPriority: 0.35, lastmod: '2026-06-14' },
	terms: { priority: 0.4, changefreq: 'yearly', i18nPriority: 0.35, lastmod: '2026-05-22' },
};

/** Most recent page lastmod — used as the sitemap index <lastmod> for page sitemaps. */
export function latestPageLastmod(): string {
	return Object.values(pageSitemapMeta).reduce(
		(max, meta) => (meta.lastmod > max ? meta.lastmod : max),
		'0000-00-00',
	);
}

/** Expected URL counts for sitemap validation. */
export const SITEMAP_COUNTS = {
	englishPages: 15,
	i18nLocales: 21,
	pagesPerLocale: 25,
	i18nUrls: 21 * 25,
	totalIndexablePages: 15 + 21 * 25,
	hreflangLinksPerUrl: 23,
	sitemapIndexEntries: 23,
} as const;
