import { customerReviewStats, productInfo, siteConfig } from './site';
import type { PageId } from './i18n/routing';

/** Page-specific FAQ clusters for FAQ rich results on pillar landing pages. */
export const pageFaqClusters: Partial<
	Record<PageId, ReadonlyArray<{ question: string; answer: string }>>
> = {
	hacks: [
		{
			question: 'What are Valorant cheats?',
			answer:
				'Valorant cheats are Windows PC tools for Valorant with ESP, wallhack, aimbot, triggerbot, and radar. CheatsForValorant licenses include Vanguard maintenance updates and setup support.',
		},
		{
			question: 'Are Valorant cheats permanently undetected?',
			answer:
				'No package can promise that. We rebuild after Riot Vanguard and game patches and post status on Updates. Check there before you load into Competitive.',
		},
		{
			question: 'What is included in the Valorant Cheats package?',
			answer:
				'Agent ESP, spike and ability markers, 2D radar, triggerbot, and configurable aimbot in one license. See Features, ESP, and Aimbot for control detail.',
		},
	],
	'valorant-esp': [
		{
			question: 'What is a Valorant wallhack?',
			answer:
				'A Valorant wallhack is an ESP overlay that shows enemy agents through walls and smokes. CheatsForValorant wallhack includes distance readouts, category toggles, and team colours for Competitive, Unrated, and Spike Rush.',
		},
		{
			question: 'Does Valorant Cheats include a radar hack?',
			answer:
				'Yes. CheatsForValorant includes 2D radar overlays that highlight nearby threats outside your view — useful for lurks, rotates, and site executes.',
		},
		{
			question: 'Does ESP work in Competitive and Spike Rush?',
			answer:
				'Yes. ESP and radar help you read nearby agents and utility; aimbot covers the gunfight. Tuned for solo queue and 5-stack play.',
		},
	],
	'valorant-aimbot': [
		{
			question: 'What is Valorant aimbot?',
			answer:
				'Valorant aimbot is configurable aim assist with smoothness, FOV, and bone priority. It ships with ESP and radar in the CheatsForValorant license for Windows PC.',
		},
		{
			question: 'Can I use Valorant aimbot with a controller?',
			answer:
				'Yes. CheatsForValorant supports controller play on Windows PC. Tune FOV and smoothness per weapon profile after setup.',
		},
		{
			question: 'Are Valorant cheats permanently undetected?',
			answer:
				'No package can promise that. We rebuild after Vanguard and game patches and post status on Updates. Check there before you queue.',
		},
	],
	wallhack: [
		{
			question: 'What is Valorant wallhack ESP?',
			answer:
				'Wallhack ESP draws boxes, health, and distance on enemy agents through walls, smokes, and ability cover in Unrated, Competitive, and Spike Rush.',
		},
		{
			question: 'Can I hide some ESP categories?',
			answer:
				'Yes. Toggle agent boxes, spike ESP, utility markers, and distance filters so overlays stay readable on maps like Ascent, Bind, and Haven.',
		},
	],
	radar: [
		{
			question: 'What is a Valorant radar hack?',
			answer:
				'A radar hack is a 2D overlay of nearby enemy positions outside your camera — useful for flanks, rotates, and post-plants.',
		},
		{
			question: 'Does radar work with ESP?',
			answer:
				'Yes. Radar and ESP ship in one CheatsForValorant license so you can combine minimap intel with on-screen wallhack.',
		},
	],
	pricing: [
		{
			question: 'How are Valorant Cheats licenses delivered?',
			answer:
				'Digitally after payment confirmation. Timing can vary by payment method — keep your order confirmation if you contact support.',
		},
		{
			question: 'What does the $35/month plan include?',
			answer:
				'The monthly license includes ESP, wallhack, radar, triggerbot, and aimbot with Vanguard maintenance updates for Valorant on Windows PC.',
		},
		{
			question: 'Is the $150 lifetime license worth it?',
			answer:
				'Lifetime pays off if you play Valorant across multiple episodes. It includes the same feature stack as monthly with long-term maintenance after patches.',
		},
	],
	features: [
		{
			question: 'What is included in Valorant Cheats?',
			answer:
				'Agent ESP, spike markers, radar, triggerbot, and configurable aimbot in one license. See Features, ESP, and Aimbot for control detail.',
		},
		{
			question: 'Does Valorant Cheats work on Windows PC?',
			answer:
				'Yes — CheatsForValorant is built for Valorant on Windows 10 and 11 with in-client toggles for ESP, radar, and aimbot.',
		},
		{
			question: 'How does Vanguard affect Valorant Cheats?',
			answer:
				'Riot Vanguard monitors Valorant on Windows PC. We publish maintenance notes after patches that may require a rebuild. Read Updates before you queue.',
		},
	],
	setup: [
		{
			question: 'How do I install Valorant cheats?',
			answer:
				'Buy a license, download the loader from your order email, run as administrator, enter your key, then launch Valorant. Full steps are on the Setup page.',
		},
		{
			question: 'What if Windows Defender flags the loader?',
			answer:
				'Game cheat loaders are often flagged. Follow the Setup guide, then contact Support with your order ID if inject fails.',
		},
	],
	updates: [
		{
			question: 'Where do I check status after a Valorant patch?',
			answer:
				'Start on our Updates page, then confirm official Valorant PC patch notes. Do not queue Competitive until the build is listed as live.',
		},
	],
	support: [
		{
			question: 'How do I contact CheatsForValorant support?',
			answer:
				'Use the Support page or email support@cheatsforvalorant.com with your order ID, Windows version, and a short description of the issue.',
		},
	],
	undetected: [
		{
			question: 'Are CheatsForValorant cheats undetected?',
			answer:
				'The package is actively maintained against Riot Vanguard. Status is posted on Updates. No cheat can promise permanent undetected play.',
		},
	],
	'best-cheats': [
		{
			question: 'What are the best Valorant cheats in 2026?',
			answer:
				'Look for ESP, aimbot, radar, Vanguard rebuilds, and clear pricing. CheatsForValorant includes that stack at $35/month or $150 lifetime.',
		},
	],
	'cheats-2026': [
		{
			question: 'Do Valorant cheats still work in 2026?',
			answer:
				'Yes if the seller rebuilds after Vanguard and game patches. CheatsForValorant publishes status on Updates before you queue.',
		},
	],
	'cheat-download': [
		{
			question: 'How do I download Valorant cheats?',
			answer:
				'After checkout, license details arrive by email. Follow Setup to run the loader on Windows 10 or 11.',
		},
	],
	'mod-menu': [
		{
			question: 'Does CheatsForValorant have a mod menu?',
			answer:
				'Yes. In-client toggles cover ESP categories, radar range, and aimbot profiles without alt-tabbing.',
		},
	],
	'soft-aim': [
		{
			question: 'What is Valorant silent aim or soft aim?',
			answer:
				'Soft aim is smoothed aimbot tracking with FOV and bone priority. CheatsForValorant includes per-weapon profiles for Vandal, Phantom, and Operator.',
		},
	],
	'eac-bypass': [
		{
			question: 'Does CheatsForValorant bypass Vanguard?',
			answer:
				'We maintain the package after Vanguard patches. That is ongoing maintenance, not a permanent bypass guarantee.',
		},
	],
};

const priceValidUntil = '2027-12-31';

/** Plain text for FAQ rich results — schema.org Answer.text must not contain HTML. */
function stripHtml(html: string): string {
	return html
		.replace(/<[^>]+>/g, '')
		.replace(/&nbsp;/g, ' ')
		.replace(/\s+/g, ' ')
		.trim();
}

export function buildAggregateOffer(canonicalURL: string) {
	return {
		'@type': 'AggregateOffer',
		lowPrice: Math.min(...productInfo.plans.map((p) => p.price)).toFixed(2),
		highPrice: Math.max(...productInfo.plans.map((p) => p.price)).toFixed(2),
		priceCurrency: productInfo.currency,
		offerCount: productInfo.plans.length,
		url: canonicalURL,
		offers: productInfo.plans.map((plan) => ({
			'@type': 'Offer',
			name: `${productInfo.name} ${plan.label}`,
			price: plan.price.toFixed(2),
			priceCurrency: productInfo.currency,
			priceValidUntil,
			availability: 'https://schema.org/InStock',
			itemCondition: 'https://schema.org/NewCondition',
			url: siteConfig.checkoutUrl,
			seller: { '@id': `${siteConfig.url}/#organization` },
		})),
	};
}

export function buildAggregateRating() {
	return {
		'@type': 'AggregateRating',
		ratingValue: customerReviewStats.averageRating.toFixed(1),
		reviewCount: customerReviewStats.totalCount,
		bestRating: '5',
		worstRating: '1',
	};
}

export function buildSoftwareApplicationSchema(canonicalURL: string, heroImage: string) {
	return {
		'@type': 'SoftwareApplication',
		'@id': `${canonicalURL}#software`,
		name: productInfo.name,
		applicationCategory: 'GameApplication',
		applicationSubCategory: 'Valorant cheats',
		operatingSystem: 'Windows 10, Windows 11',
		inLanguage: 'en',
		description: productInfo.summary,
		url: canonicalURL,
		image: heroImage,
		screenshot: heroImage,
		brand: { '@type': 'Brand', name: productInfo.brand },
		offers: buildAggregateOffer(canonicalURL),
		aggregateRating: buildAggregateRating(),
		featureList: [
			'Valorant ESP wallhack',
			'Valorant aimbot',
			'Silent aim',
			'Triggerbot',
			'Radar hack',
			'Vanguard maintenance updates',
		].join(', '),
	};
}

export function buildFaqSchemaNode(
	canonicalURL: string,
	faqs: ReadonlyArray<{ question: string; answer: string }>,
) {
	return {
		'@type': 'FAQPage',
		'@id': `${canonicalURL}#faq`,
		mainEntity: faqs.map((item) => ({
			'@type': 'Question',
			name: item.question,
			acceptedAnswer: { '@type': 'Answer', text: stripHtml(item.answer) },
		})),
	};
}

export function buildSetupHowToSchema(canonicalURL: string) {
	return {
		'@type': 'HowTo',
		'@id': `${canonicalURL}#howto`,
		name: 'How to install CheatsForValorant on Windows PC',
		description:
			'Install undetected Valorant cheats with ESP, aimbot, and radar after buying a CheatsForValorant license.',
		totalTime: 'PT10M',
		estimatedCost: {
			'@type': 'MonetaryAmount',
			currency: productInfo.currency,
			value: String(Math.min(...productInfo.plans.map((p) => p.price))),
		},
		tool: [{ '@type': 'HowToTool', name: 'Windows 10 or Windows 11 PC' }],
		step: [
			{
				'@type': 'HowToStep',
				position: 1,
				name: 'Buy a license',
				text: 'Purchase monthly or lifetime Valorant cheats on Pricing and complete checkout.',
			},
			{
				'@type': 'HowToStep',
				position: 2,
				name: 'Download the loader',
				text: 'Open your order email, download the loader, and run it as administrator.',
			},
			{
				'@type': 'HowToStep',
				position: 3,
				name: 'Activate the key',
				text: 'Enter your license key and wait for inject to finish.',
			},
			{
				'@type': 'HowToStep',
				position: 4,
				name: 'Launch Valorant',
				text: 'Start Valorant, open the in-game menu, then enable ESP and aimbot as needed.',
			},
		],
	};
}

const schemaRichPages = new Set<PageId>([
	'hacks',
	'valorant-esp',
	'valorant-aimbot',
	'wallhack',
	'radar',
	'pricing',
	'features',
	'setup',
	'updates',
	'support',
	'faq',
	'undetected',
	'best-cheats',
	'cheats-2026',
	'cheat-download',
	'mod-menu',
	'soft-aim',
	'eac-bypass',
	'aimbot-hack',
	'esp-hack',
]);

export function buildPageExtraGraph(
	pageId: PageId,
	canonicalURL: string,
	heroImage: string,
	allFaqs: ReadonlyArray<{ question: string; answer: string }>,
	includeFaq = true,
): Record<string, unknown>[] {
	if (!schemaRichPages.has(pageId)) return [];

	const nodes: Record<string, unknown>[] = [];

	if (pageId !== 'faq') {
		nodes.push(buildSoftwareApplicationSchema(canonicalURL, heroImage));
	}

	if (includeFaq) {
		const faqs = pageId === 'faq' ? allFaqs : (pageFaqClusters[pageId] ?? []);
		if (faqs.length > 0) {
			nodes.push(buildFaqSchemaNode(canonicalURL, faqs));
		}
	}

	if (pageId === 'setup') {
		nodes.push(buildSetupHowToSchema(canonicalURL));
	}

	return nodes;
}
