/**
 * Site-wide SEO keyword cluster — optimized for cheatsforvalorant.com / CheatsForValorant
 */
export const primaryKeyword = 'Valorant cheats';

export const siteBrand = 'CheatsForValorant';
export const siteDomain = 'cheatsforvalorant.com';
export const siteOrigin = `https://${siteDomain}`;

/** Core keyword targets (title, meta, schema). */
export const metaKeywords = [
	'valorant cheats',
	'cheats for valorant',
	'cheatsforvalorant',
	'undetected valorant cheats',
	'valorant hacks',
	'valorant esp',
	'valorant wallhack',
	'valorant aimbot',
	'valorant silent aim',
	'valorant triggerbot',
	'valorant radar hack',
	'buy valorant cheats',
	'valorant cheats pc',
	'valorant cheats 2026',
	'vanguard valorant cheats',
] as const;

export const metaKeywordsContent = metaKeywords.join(', ');

export const defaultTitle =
	'CheatsForValorant | Valorant Cheats — ESP & Aimbot';
export const defaultDescription =
	'Buy undetected Valorant cheats for PC — ESP wallhack, aimbot, triggerbot & radar. Instant delivery, Vanguard updates, $35/mo or $150 lifetime.';

/** Append brand + domain to page titles when under the SEO limit. */
export function buildPageTitle(topic: string): string {
	const withBrand = `${topic} | CheatsForValorant`;
	if (withBrand.length <= 60) return withBrand;
	const short = `${topic} | Valorant Cheats PC`;
	return short.length <= 60 ? short : topic.slice(0, 60);
}

/** Clamp meta description with primary keyword near the front. */
export function buildPageDescription(body: string): string {
	const lead = body.trim();
	if (/valorant cheat/i.test(lead)) return lead.slice(0, 160);
	return `Valorant cheats — ${lead}`.slice(0, 160);
}

export function ogImageMime(src: string): string {
	const path = src.split('?')[0].toLowerCase();
	if (path.endsWith('.jpg') || path.endsWith('.jpeg')) return 'image/jpeg';
	if (path.endsWith('.webp')) return 'image/webp';
	if (path.endsWith('.svg')) return 'image/svg+xml';
	if (path.endsWith('.gif')) return 'image/gif';
	return 'image/png';
}
