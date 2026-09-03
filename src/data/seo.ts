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
	'Valorant cheats',
	'cheats for valorant',
	'valorant hacks',
	'valorant esp',
	'valorant aimbot',
	'valorant wallhack',
	'valorant radar hack',
	'undetected valorant cheats',
	'buy valorant cheats',
	'valorant cheats pc',
	'valorant cheats 2026',
	'valorant soft aim',
	'valorant triggerbot',
	'vanguard bypass valorant',
] as const;

export const metaKeywordsContent = metaKeywords.join(', ');

export const defaultTitle =
	'CheatsForValorant | Undetected Valorant Cheats — ESP, Aimbot & Wallhack';
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
