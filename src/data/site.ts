export const siteConfig = {
	name: 'CheatsForValorant',
	url: 'https://cheatsforvalorant.com',
	locale: 'en',
	market: 'Worldwide',
	supportEmail: 'support@cheatsforvalorant.com',
	logo: '/favicon.png',
	logoRaster: '/favicon.png',
	logoRasterWidth: 192,
	logoRasterHeight: 192,
	logoAlt: 'CheatsForValorant — undetected Valorant cheats for PC',
	checkoutUrl: 'https://zadeyo.com/go/PRO?to=%2Fproducts%2Fvalorant',
	defaultOgImage: '/images/valorant-cheat-esp-corridor.jpg',
} as const;

export const productInfo = {
	name: 'CheatsForValorant',
	shortName: 'CFV',
	brand: 'CheatsForValorant',
	tagline: 'Undetected Valorant cheats for PC — ESP wallhack, aimbot, triggerbot & radar',
	summary:
		'CheatsForValorant sells a Windows PC cheat package for Valorant: ESP, wallhack, aimbot, and radar in one license. Works in Unrated, Competitive, and Spike Rush, with rebuilds after Riot Vanguard patches.',
	game: 'Valorant',
	delivery: 'Digital license delivery after purchase confirmation',
	platforms: ['Windows PC', 'Controllers'],
	updateCadence: 'Updates are published when Valorant or anti-cheat patches require maintenance',
	supportHours: 'Support requests are reviewed daily',
	plans: [
		{ id: 'monthly', label: 'Monthly', price: 35, duration: 'P30D' },
		{ id: 'lifetime', label: 'Lifetime', price: 150, duration: 'P99Y' },
	],
	currency: 'USD',
	planSummaries: {
		monthly: [
			'ESP, aimbot, wallhack, and radar',
			'30 days access — $35',
			'anti-cheat updates while your license is active',
			'Instant digital delivery on Windows PC',
		],
		lifetime: [
			'ESP, aimbot, wallhack, and radar',
			'One-time $150 — no renewals',
			'anti-cheat updates for as long as you play',
			'Instant digital delivery on Windows PC',
		],
	},
	features: {
		esp: [
			'Agent ESP across Unrated, Competitive, and Spike Rush',
			'Enemy agent outlines through smokes, walls, and utility',
			'Spike carrier, ability, and health markers',
			'Distance readouts and snapline options',
			'Toggleable ESP categories to cut overlay noise',
			'Team and enemy colour coding for 5v5 rounds',
		],
		aimbot: [
			'Smooth aim targeting for rifles, pistols, and snipers',
			'Smoothness, FOV, and sensitivity controls',
			'Headshot priority and target selection options',
			'Hotkey toggles mid-round without opening menus',
			'Per-weapon profiles for Vandal, Phantom, Operator, and more',
		],
		radar: [
			'2D radar for enemies outside your line of sight',
			'Directional cues for flanks and spawn pushes',
			'Configurable radar range for early rotations',
		],
		general: [
			'In-client toggles for ESP, radar, and aimbot',
			'Monthly and lifetime licenses',
			'Anti-cheat maintenance notes after Valorant patches',
			'Setup, delivery, and billing support',
		],
	},
} as const;

/** Quick-scan feature list for pricing page — full explanations live on /features/. */
export const productFeatureCategories = [
	{
		title: 'Combat assist',
		columns: 1 as const,
		items: [
			'Line-of-sight visibility check',
			'Custom FOV arc',
			'FOV circle overlay',
			'Target snapline',
			'Custom aim hotkey',
			'Hold & toggle aim modes',
			'Aim smoothing slider',
			'Enemy type filter',
			'Weak-point targeting',
			'Per-weapon profiles',
		],
	},
	{
		title: 'ESP & overlays',
		columns: 1 as const,
		items: [
			'Attacker & defender agent ESP',
			'Outlines through smokes and walls',
			'Agent bounding boxes',
			'Head-level markers',
			'Agent facing indicator',
			'Agent name labels',
			'Distance readout',
			'ESP distance filter',
			'Spike & ability ESP',
			'Operator & sniper ESP',
		],
	},
	{
		title: 'Radar & match tools',
		columns: 2 as const,
		items: [
			'2D off-screen radar',
			'Site push direction cues',
			'In-match hotkey toggles',
			'Hotkey profiles',
			'Controller support',
			'Vanguard patch maintenance status',
			'In-game mod menu',
			'Utility & ability markers',
			'Ability cooldown tracking',
			'Custom crosshair',
			'Team colour coding',
			'Competitive & Spike Rush presets',
		],
	},
] as const;

/** Detailed feature explanations for the /features/ page. */
export const productFeatureDetails = [
	{
		id: 'aimbot',
		title: 'Combat assist',
		summary:
			'Configurable aim assistance for rifles, SMGs, shotguns, and snipers — tuned for Unrated, Competitive, and Spike Rush.',
		items: [
			{
				name: 'Line-of-sight visibility check',
				description:
					'Only assists when the enemy is visible — reduces obvious snaps through walls, smokes, and ability cover.',
			},
			{
				name: 'Custom FOV arc',
				description:
					'Set how wide the aimbot scans for enemy agents so close duels and long-range angles both feel natural.',
			},
			{
				name: 'FOV circle overlay',
				description: 'Optional on-screen ring showing the active aimbot radius for quick tuning in Spike Rush and Competitive.',
			},
			{
				name: 'Target snapline',
				description:
					'Snapline from crosshair to the current lock — useful for verifying head priority before you peek.',
			},
			{
				name: 'Custom aim hotkey',
				description: 'Hold or toggle aimbot with a key you choose — works alongside controller bindings on Windows PC.',
			},
			{
				name: 'Hold & toggle aim modes',
				description: 'Switch between hold-to-aim, toggle, and always-on profiles per weapon class.',
			},
			{
				name: 'Aim smoothing slider',
				description: 'Control how fast the reticle moves to the target — higher smoothness looks more natural in ranked.',
			},
			{
				name: 'Enemy type filter',
				description:
					'Prioritise closest agent, lowest health, or spike carriers so you take the right fight first.',
			},
			{
				name: 'Weak-point targeting',
				description:
					'Bias locks toward head hitboxes on enemy agents for cleaner taps and sprays.',
			},
			{
				name: 'Per-weapon profiles',
				description:
					'Save separate aim settings for rifles, shotguns, snipers, and pistols — swap mid-round without retuning.',
			},
		],
	},
	{
		id: 'visual',
		title: 'ESP & overlays',
		summary:
			'ESP and wallhack overlays that show agents, utility, and the spike through walls, smokes, and ability FX.',
		items: [
			{
				name: 'Attacker & defender agent ESP',
				description:
					'Highlights enemy agents with boxes, health bars, and distance readouts across every map.',
			},
			{
				name: 'Outlines through smokes and walls',
				description:
					'Clean outlines on enemy agents through smoke, walls, and ability cover.',
			},
			{
				name: 'Enemy bounding boxes',
				description: 'Box ESP sized to each agent for precise reads before peeks and site executes.',
			},
			{
				name: 'Head-level markers',
				description: 'Mark head height so you pre-aim correctly when clearing corners.',
			},
			{
				name: 'Agent facing indicator',
				description: 'See which way an enemy is looking before you swing a choke or default.',
			},
			{
				name: 'Agent name labels',
				description: 'Display agent names above ESP boxes — know if you are fighting Jett, Cypher, or Chamber.',
			},
			{
				name: 'Distance readout',
				description: 'Meters-to-target on every box so you know when to swap weapons or hold utility.',
			},
			{
				name: 'ESP distance filter',
				description:
					'Hide far-away clutter — keep overlays readable on Ascent, Bind, Haven, and other maps.',
			},
			{
				name: 'Spike & ability ESP',
				description: 'Mark the spike and key ability tools so you track plants, defuses, and traps.',
			},
			{
				name: 'Operator & sniper ESP',
				description:
					'Dedicated styling for Operator and long-range threats holding angles across the map.',
			},
		],
	},
	{
		id: 'misc',
		title: 'Radar & match tools',
		summary:
			'Radar, menu toggles, controller support, and quality-of-life tools bundled with every license.',
		items: [
			{
				name: '2D off-screen radar',
				description: 'Minimap-style blips for enemies outside your camera — great for rotates, flanks, and retakes.',
			},
			{
				name: 'Site push direction cues',
				description: 'Directional hints when the enemy team stacks a site or starts a mid rotate.',
			},
			{
				name: 'In-match hotkey toggles',
				description: 'Flip ESP, radar, and aimbot on or off mid-round without alt-tabbing.',
			},
			{
				name: 'Hotkey profiles',
				description: 'Save different bind layouts for mouse/keyboard and controller loadouts.',
			},
			{
				name: 'Controller support',
				description: 'Aimbot and menu navigation tested with Xbox and PlayStation pads on Windows.',
			},
			{
				name: 'Patch maintenance status',
				description: 'Maintenance status published on Updates after Riot Games and Valorant patches.',
			},
			{
				name: 'In-game mod menu',
				description: 'Full in-game menu for colours, categories, and per-module enable/disable.',
			},
			{
				name: 'Utility & ability markers',
				description: 'Highlight traps, smokes, and utility so you avoid Cypher wires and Killjoy setups.',
			},
			{
				name: 'Ability cooldown tracking',
				description: 'Track key enemy ability windows during executes and post-plants.',
			},
			{
				name: 'Custom crosshair',
				description: 'Replace the default reticle with sizes and colours that match your ESP theme.',
			},
			{
				name: 'Team colour coding',
				description: 'Separate colours for teammates and enemies so overlays stay readable in 5v5.',
			},
			{
				name: 'Competitive & Spike Rush presets',
				description:
					'One-click ESP and radar profiles tuned for Competitive pace and Spike Rush chaos.',
			},
		],
	},
] as const;

export const trustSignals = {
	status: 'Online',
	statusNote: 'Valorant Cheats is live for Valorant on Windows PC.',
	delivery: 'Instant digital delivery',
	platform: 'Windows 10 & 11',
	antiCheat: 'Riot Vanguard maintenance supported',
} as const;

export const seoLandingPages = [
	{ label: 'Valorant Cheats', href: '/valorant-cheats/' },
	{ label: 'Valorant ESP', href: '/valorant-esp/' },
	{ label: 'Valorant Aimbot', href: '/valorant-aimbot/' },
	{ label: 'Valorant wallhack', href: '/valorant-wallhack/' },
	{ label: 'Undetected status', href: '/valorant-cheats/' },
	{ label: 'Pricing', href: '/pricing/' },
] as const;

export const mainNav = [
	{ label: 'Home', href: '/' },
	{ label: 'Cheats', href: '/valorant-cheats/' },
	{ label: 'Aimbot', href: '/valorant-aimbot/' },
	{ label: 'ESP', href: '/valorant-esp/' },
	{ label: 'Features', href: '/features/' },
	{ label: 'Pricing', href: '/pricing/' },
	{ label: 'Setup', href: '/setup/' },
	{ label: 'Updates', href: '/updates/' },
	{ label: 'FAQ', href: '/faq/' },
] as const;

export const footerNav = [
	{ label: 'Valorant update log', href: '/updates/' },
	{ label: 'Contact support', href: '/support/' },
	{ label: 'Refund policy details', href: '/refund-policy/' },
	{ label: 'Privacy policy details', href: '/privacy-policy/' },
	{ label: 'Terms of use', href: '/terms/' },
] as const;

export const footerExplore = [
	{ label: 'Home', href: '/' },
	{ label: 'Valorant Cheats', href: '/valorant-cheats/' },
	{ label: 'ESP', href: '/valorant-esp/' },
	{ label: 'Aimbot', href: '/valorant-aimbot/' },
	{ label: 'Features', href: '/features/' },
	{ label: 'Pricing', href: '/pricing/' },
	{ label: 'Setup', href: '/setup/' },
	{ label: 'FAQ', href: '/faq/' },
] as const;

export const homeFaqs = [
	{
		category: 'Getting started',
		question: 'What is Valorant Cheats?',
		answer:
			'Valorant Cheats is a maintained Windows PC package for <a href="https://playvalorant.com/" target="_blank" rel="noopener noreferrer">Valorant</a> with <a href="/valorant-esp/">ESP page</a>, <a href="/valorant-wallhack/">wallhack</a>, <a href="/valorant-radar/">radar</a>, and <a href="/valorant-aimbot/">aimbot</a> controls. One license covers the full feature set plus <a href="/setup/">setup help</a>.',
	},
	{
		category: 'Getting started',
		question: 'What is included in one license?',
		answer:
			'Enemy ESP boxes, health and ability markers, 2D radar overlays, triggerbot, and configurable aim assist with per-weapon profiles. See the <a href="/features/">full feature list</a> and compare <a href="/pricing/">license plans</a>.',
	},
	{
		category: 'Getting started',
		question: 'How are licenses delivered after checkout?',
		answer:
			'Licenses are delivered digitally after payment clears. Delivery timing can vary slightly by payment method. Keep your order confirmation handy if you contact <a href="/support/">our support team</a>.',
	},
	{
		category: 'Features & gameplay',
		question: 'Does this work for Competitive, Spike Rush, and Unrated?',
		answer:
			'Yes. ESP and radar help you read enemy positions in Competitive, Spike Rush, and Unrated on maps like Ascent, Bind, and Haven. Aim assist covers rifle, shotgun, and sniper profiles for solo or 5-stack play.',
	},
	{
		category: 'Features & gameplay',
		question: 'Can I use a controller?',
		answer:
			'Controller support is available on Windows PC with adjustable FOV and aim settings. Menu navigation with a pad takes a little practice — see the <a href="/setup/">setup guide</a> for baseline values and <a href="/reviews/">player reviews</a> from controller players.',
	},
	{
		category: 'Features & gameplay',
		question: 'What is silent aim and do I need it?',
		answer:
			'Silent aim is a smoother aimbot mode that keeps your crosshair looking natural while shots still connect. Most players start with moderate FOV and smoothing. Read the <a href="/valorant-aimbot/">aimbot guide</a> and <a href="/setup/">setup</a> before raising aggressiveness.',
	},
	{
		category: 'Updates & support',
		question: 'Is Valorant Cheats permanently undetected?',
		answer:
			'No tool can promise permanent undetected status. Valorant is maintained by <a href="https://www.riotgames.com/" target="_blank" rel="noopener noreferrer">Riot Games</a> and receives regular patches. We rebuild after anti-cheat updates and post status on the <a href="/updates/">status page</a> — check there before you load in.',
	},
	{
		category: 'Updates & support',
		question: 'Where do I check status after a Valorant patch?',
		answer:
			'Start with our <a href="/updates/">Updates page</a>, then cross-check <a href="https://playvalorant.com/en-us/news/" target="_blank" rel="noopener noreferrer">official PC update notes</a>. For how patches affect gameplay, read our <a href="/blog/safe-cheats/">patch notes guide</a>.',
	},
	{
		category: 'Updates & support',
		question: 'How do I contact support?',
		answer:
			'Use the <a href="/support/">Support page</a> or email support@cheatsforvalorant.com with your order ID, Windows version, and a short description of the issue. Refund questions are covered on the <a href="/refund-policy/">refund policy</a> page.',
	},
	{
		category: 'Product details',
		question: 'Are your Valorant cheats actually undetected?',
		answer:
			'We maintain the package after Vanguard and game patches and post status on the <a href="/updates/">Updates page</a>. No cheat is permanently undetected — use sensible settings, follow <a href="/setup/">setup</a>, and check status before ranked. Read the <a href="/valorant-cheats/">undetected guide</a> for what that means in practice.',
	},
	{
		category: 'Product details',
		question: 'How do you handle Riot Vanguard?',
		answer:
			'Vanguard runs at a deep system level. We rebuild after detections and patch days and publish maintenance notes on <a href="/updates/">Updates</a>. Always verify the build is live before you queue. See our <a href="/blog/undetected-cheats/">anti-cheat explainer</a> for context.',
	},
	{
		category: 'Product details',
		question: 'What features help most in Valorant?',
		answer:
			'<a href="/valorant-esp/">ESP</a> and <a href="/valorant-aimbot/">aimbot</a> together change how you play: ESP shows where agents are so you take better angles; aimbot helps win gunfights. Add <a href="/valorant-radar/">radar</a> and triggerbot from the <a href="/features/">feature list</a> as needed.',
	},
	{
		category: 'Product details',
		question: 'How much do Valorant cheats cost?',
		answer:
			'Monthly is $35 and lifetime is $150 — same ESP, aimbot, wallhack, and radar stack either way. Digital delivery after payment, with maintenance updates after patches. Compare plans on <a href="/pricing/">Pricing</a>.',
	},
] as const;

export const seoFaqs = [
	...homeFaqs,
	{
		category: 'Product details',
		question: 'What is a Valorant wallhack?',
		answer:
			'A Valorant wallhack is an ESP overlay that highlights enemy agents through walls and smokes. CheatsForValorant <a href="/valorant-wallhack/">wallhack</a> includes distance readouts, category toggles, and team colours for Competitive and Spike Rush.',
	},
	{
		category: 'Product details',
		question: 'Does Valorant Cheats include a radar hack?',
		answer:
			'Yes. <a href="/valorant-radar/">2D radar overlays</a> show nearby threats outside your direct view — useful for reading flanks during defense, retakes, and site executes.',
	},
	{
		category: 'Product details',
		question: 'How does anti-cheat affect Valorant Cheats?',
		answer:
			'Anti-cheat monitors Valorant on Windows PC. After major patches we publish maintenance notes on <a href="/updates/">Updates</a>. Read the <a href="/valorant-cheats/">maintenance guide</a> and our <a href="/blog/undetected-cheats/">anti-cheat explainer</a> for what to expect on patch day.',
	},
	{
		category: 'Product details',
		question: 'Where can I read Valorant game guides?',
		answer:
			'Our <a href="/blog/">blog</a> covers Competitive tips, map awareness, agent matchups, and how to read official patch notes — with links to the <a href="https://valorant.fandom.com/wiki/VALORANT_Wiki" target="_blank" rel="noopener noreferrer">Valorant Wiki</a> and <a href="https://playvalorant.com/game-guide" target="_blank" rel="noopener noreferrer">official game guide</a>.',
	},
] as const;

export type CustomerReview = {
	handle: string;
	title: string;
	rating: 3 | 4 | 5;
	text: string;
	short: string;
	slug: string;
	seoTitle: string;
	seoDescription: string;
	date: string;
	tag?: string;
};

export const customerReviews = [
	{
		handle: 'krypt0_arc',
		title: 'Soft aim on Competitive',
		rating: 5,
		text: 'Using this for a few weeks on Competitive. Soft aim feels natural on rifles and I have not had issues in public squads. Took me a bit to figure out the menu layout but after that it has been smooth.',
		short: 'Using this for a few weeks on Competitive. Soft aim feels natural on rifles and I have not had issues in public squads.',
		slug: 'valorant-soft-aim-review-xkrypt0',
		seoTitle: 'Soft aim review by @krypt0_arc | Valorant Cheats',
		seoDescription:
			'Buyer review from @krypt0_arc on soft aim for Competitive missions after setup on Windows PC.',
		date: '2026-03-14',
	},
	{
		handle: 'extractR4K',
		title: 'ESP on Bind and Haven',
		rating: 4,
		text: 'ESP helps a lot on Bind and Haven when you are trying to spot lurkers before pushing site. Radar could be a little bigger on 1080p. Still happy with it for what I paid.',
		short: 'ESP helps on Bind and Haven when spotting lurkers before pushing site. Radar could be bigger on 1080p.',
		slug: 'valorant-esp-realistic-review-buildsr4k',
		seoTitle: 'ESP review by @extractR4K | CheatsForValorant',
		seoDescription:
			'Buyer review from @extractR4K on ESP boxes and radar during Competitive on Bind and Haven.',
		date: '2026-02-08',
	},
	{
		handle: 'jakeDMA',
		title: 'Cloud DMA setup',
		rating: 5,
		text: 'I moved over from another tool that got flagged last patch. DMA setup sounded intimidating but support walked me through it on Discord in under an hour. Still running clean after the latest hotfix.',
		short: 'Moved from another tool that got flagged. Support walked me through DMA setup on Discord. Still running after the latest hotfix.',
		slug: 'valorant-cloud-dma-review-dma-wizard',
		seoTitle: 'Cloud DMA review by @jakeDMA | Valorant Cheats',
		seoDescription:
			'Buyer review from @jakeDMA on cloud DMA setup and patch-day stability.',
		date: '2026-01-22',
	},
	{
		handle: 'padWarMain',
		title: 'Controller support',
		rating: 4,
		text: 'Did not expect controller support to work this well. Aim assist needed some FOV tweaking with my Xbox pad. Opening the menu with a controller is clunky but playable.',
		short: 'Controller support works better than I expected. Needed some FOV tweaks with my Xbox pad.',
		slug: 'valorant-controller-aimbot-review-ctrl-player99',
		seoTitle: 'Controller review by @padWarMain | Valorant Cheats',
		seoDescription:
			'Buyer review from @padWarMain on aim assist and menu use with an Xbox controller.',
		date: '2026-04-02',
	},
	{
		handle: 'stormchaser07',
		title: 'Setup took patience',
		rating: 3,
		text: 'Features are solid once everything is running. First launch was annoying because Windows Defender flagged the loader. Not entirely their fault, but the setup guide could be clearer. Support replied in a couple hours with a fix. ESP and pickup markers work well in Competitive.',
		short: 'Solid once running. Setup guide could be clearer and Defender flagged the loader at first. Support helped same day.',
		slug: 'valorant-cheat-setup-review-stormchaser07',
		seoTitle: 'Setup review by @stormchaser07 | Valorant Cheats',
		seoDescription:
			'Honest buyer review from @stormchaser07 on first-time setup and support response time.',
		date: '2026-05-19',
	},
	{
		handle: 'loot_goblin_42',
		title: 'Resource ESP',
		rating: 5,
		text: 'Mostly bought this for resource tracking on long survival runs. Being able to see cooldowns and health pickups without tabbing around saves a surprising amount of time.',
		short: 'Mostly bought for resource tracking on survival runs. Cooldown and pickup markers save a lot of time.',
		slug: 'valorant-ability-esp-review-lootgoblinx',
		seoTitle: 'Resource ESP review by @loot_goblin_42 | Valorant Cheats',
		seoDescription:
			'Buyer review from @loot_goblin_42 on resource ESP, cooldown markers, and survival missions.',
		date: '2026-06-11',
	},
	{
		handle: 'steelpath42',
		title: 'Weapon profiles',
		rating: 4,
		text: 'Been on this since early access. Separate profiles for rifle and shotgun actually matter in tight tilesets. Only gripe is waiting about a day for an update after one patch. Updates page helped at least.',
		short: 'Separate rifle and shotgun profiles matter in tight tilesets. Waited about a day for one patch update.',
		slug: 'valorant-aimbot-realistic-review-steelpathgrind42',
		seoTitle: 'Aim profiles review by @steelpath42 | Valorant Cheats',
		seoDescription:
			'Buyer review from @steelpath42 on per-weapon aim profiles and post-patch update timing.',
		date: '2026-03-28',
	},
	{
		handle: 'vanlife_arc',
		title: 'Radar on defense',
		rating: 5,
		text: 'Radar makes defense waves way less chaotic. Seeing flank routes before they hit the pod is huge when you are in a pub squad and nobody is calling spawns.',
		short: 'Radar makes defense waves less chaotic. Seeing flank routes before they hit the pod is huge in pub squads.',
		slug: 'valorant-radar-hack-review-vanlifefn',
		seoTitle: 'Radar review by @vanlife_arc | Valorant Cheats',
		seoDescription:
			'Buyer review from @vanlife_arc on radar during defense missions and squad play.',
		date: '2026-07-03',
	},
	{
		handle: 'patchdaymike',
		title: 'Patch day downtime',
		rating: 4,
		text: 'Every cheat goes down on patch day. Difference here is they posted a status update within a few hours and I was back the next morning. That is about all you can ask for.',
		short: 'Goes down on patch day like everything else. Status update within a few hours and back the next morning.',
		slug: 'valorant-anti-cheat-update-review-patchdaymike',
		seoTitle: 'Patch day review by @patchdaymike | Valorant Cheats',
		seoDescription:
			'Buyer review from @patchdaymike on downtime and communication after a Valorant patch.',
		date: '2026-02-27',
	},
	{
		handle: 'snipezonly',
		title: 'Sniper profile',
		rating: 5,
		text: 'Sniper profile plus ESP tags is exactly what I wanted for Eidolon hunts. No complaints so far.',
		short: 'Sniper profile plus ESP tags is exactly what I wanted for Eidolon hunts.',
		slug: 'valorant-sniper-aimbot-review-snipezonly',
		seoTitle: 'Sniper profile review by @snipezonly | Valorant Cheats',
		seoDescription:
			'Buyer review from @snipezonly on the sniper aim profile and ESP tagging.',
		date: '2026-07-21',
	},
	{
		handle: 'nightowl_pc',
		title: 'Monthly sub',
		rating: 4,
		text: 'Started on monthly to test it before committing. Performance has been stable enough that I will probably grab lifetime next sale. Menu is a little crowded but you get used to it.',
		short: 'Started monthly to test it. Stable enough that I will probably grab lifetime next sale.',
		slug: 'valorant-monthly-sub-review-nightowl',
		seoTitle: 'Monthly sub review by @nightowl_pc | Valorant Cheats',
		seoDescription:
			'Buyer review from @nightowl_pc on trying the monthly plan before upgrading.',
		date: '2026-05-06',
	},
	{
		handle: 'oldvet_wf',
		title: 'Lifetime key',
		rating: 5,
		text: 'Picked up lifetime after bouncing between free menus for years. Having one package with ESP, aim assist, and radar that actually gets updated is worth it to me.',
		short: 'Picked up lifetime after years of bouncing between free menus. One package that actually gets updated.',
		slug: 'valorant-lifetime-key-review-oldvet',
		seoTitle: 'Lifetime key review by @oldvet_wf | Valorant Cheats',
		seoDescription:
			'Buyer review from @oldvet_wf on switching to a lifetime Valorant Cheats key.',
		date: '2026-01-09',
	},
	{
		handle: 'duoqueue',
		title: 'Playing with a friend',
		rating: 4,
		text: 'Me and a friend both run it for duo arbitrations. ESP and radar make callouts way easier when we are on voice and not staring at the same screen. Wish there was a cleaner way to reset settings between missions.',
		short: 'Friend and I both run it for duo arbitrations. ESP and radar make callouts easier on voice.',
		slug: 'valorant-squad-play-review-duoqueue',
		seoTitle: 'Squad play review by @duoqueue | Valorant Cheats',
		seoDescription:
			'Buyer review from @duoqueue on using ESP and radar during duo arbitration runs.',
		date: '2026-04-18',
	},
] as const satisfies readonly CustomerReview[];

export const customerReviewStats = {
	averageRating:
		Math.round(
			(customerReviews.reduce((sum, review) => sum + review.rating, 0) / customerReviews.length) * 10,
		) / 10,
	totalCount: customerReviews.length,
} as const;
