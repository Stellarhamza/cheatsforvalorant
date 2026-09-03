import { HERO_IMAGES, clampTitle, clampDesc, section, stripZadeyoFromMeta, EXT } from './constants.mjs';

/** Richest English page content — source of truth for structure. */
export const enPages = {
	home: {
		title: 'CheatsForValorant | Valorant Cheats — ESP & Aimbot',
		description:
			'Buy undetected Valorant cheats for PC — ESP wallhack, aimbot, triggerbot & radar. $35/mo or $150 lifetime. Instant delivery & Vanguard updates.',
		h1: 'Undetected Valorant Cheats for PC',
		intro:
			'CheatsForValorant is a paid Windows cheat for Valorant. One license includes ESP wallhack, aimbot, triggerbot, and radar — built for Unrated, Competitive, and Spike Rush, with rebuilds after Riot Vanguard patches.',
		imageAlt: 'Valorant cheat menu with ESP wallhack and aimbot toggles on Windows PC',
		galleryTitle: 'Valorant cheat screenshots',
		ctaPrimary: 'Buy Valorant Cheats',
		ctaSecondary: 'See all cheat features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'Built for Competitive pressure',
				'Valorant punishes incomplete information. Valorant Cheats puts ESP, wallhack, and aimbot in one license so you can read flanks, lurkers, and site pushes before you commit.',
				`Client and anti-cheat updates come from ${EXT.epic} and ${EXT.eac}. When a patch needs a rebuild, we post status on the <a href="/updates/">Updates page</a> — no permanent “undetected forever” promises.`,
				'Monthly ($35) and lifetime ($150) licenses ship digitally after payment confirmation, with maintenance rebuilds when anti-cheat or game updates require them.',
				'Compare the <a href="/valorant-cheats/">Valorant Cheats guide</a>, <a href="/valorant-esp/">ESP</a>, <a href="/valorant-aimbot/">Aimbot</a>, and <a href="/valorant-cheats/">undetected status</a> pages before checkout.',
			),
			section(
				'One license, clear controls',
				'Instead of stacking separate tools, you get agent ESP, spike markers, radar cues, and aimbot profiles in a single package for Competitive, Unrated, and Spike Rush.',
				'Details live on the <a href="/valorant-esp/">ESP</a>, <a href="/valorant-aimbot/">Aimbot</a>, <a href="/valorant-wallhack/">wallhack</a>, and <a href="/features/">features</a> pages — or jump to <a href="/pricing/">Pricing</a> for plans.',
				`On patch mornings, check ${EXT.status}, then confirm our maintenance notes so you are not loading an outdated build.`,
				'Ready? Open <a href="/pricing/">Pricing</a>, follow <a href="/setup/">Setup</a> after delivery, and keep <a href="/faq/">FAQ</a> / <a href="/support/">Support</a> handy.',
			),
		],
	},
	'valorant-esp': {
		title: 'Valorant ESP 2026 | Wallhack & Enemy Boxes for PC',
		description:
			'Valorant cheats ESP wallhack — enemy boxes, health, utility markers & distance. Bundled with aimbot & radar in one license.',
		h1: 'Valorant ESP — Wallhack & Enemy Boxes',
		intro:
			'Visibility tools for Valorant. See enemy agents, utility, and the spike through walls and smokes — with toggleable ESP wallhack overlays for Competitive, Unrated, and Spike Rush.',
		imageAlt: 'Valorant ESP overlay with enemy outline boxes, health bars, and distance readouts',
		galleryTitle: 'Valorant ESP overlay visuals',
		ctaPrimary: 'Buy Valorant Cheats',
		ctaSecondary: 'Valorant wallhack guide',
		ctaSecondaryHref: '/valorant-wallhack/',
		sections: [
			section(
				'What Valorant ESP solves in Competitive',
				'Valorant rounds punish incomplete information. Valorant Cheats ESP wallhack helps you spot enemy agents early, spot duelists before they push your position, and mark the spike and abilities worth the detour.',
				'On Competitive, Unrated, and Spike Rush, that visibility gap is often the difference between a clean flanking and a wiped squad. ESP ships bundled with radar overlays and Aimbot in one license.',
				`Valorant live updates and map changes are published by ${EXT.epic}. When maps or loot rules shift, ESP categories stay useful because they track enemies and containers — not a single static landmark.`,
			),
			section(
				'Enemy, duelist, and ability ESP wallhack categories',
				'Toggle enemy agent outlines, duelist threat cues, pickup awareness markers, and spike markers so only round-critical ESP wallhack overlays stay active during rotations.',
				'Distance readouts and snapline options help you control engagement range. Team and enemy colour coding supports Spike Rush and co-op squads alike.',
				'Compare category detail on the <a href="/valorant-wallhack/">wallhack page</a> and pair visibility with the <a href="/valorant-radar/">radar hack</a> for flanks outside your FOV.',
				[
					'enemy agent ESP outlines with distance',
					'spike and utility markers for faster rotations',
					'duelist and pickup threat cues',
					'Toggleable categories to reduce overlay noise',
				],
			),
			section(
				'Undetected ESP with anti-cheat maintenance',
				'Valorant Cheats ESP wallhack is maintained for Valorant with rebuilds after Riot Games anti-cheat patches. Check the <a href="/updates/">Updates page</a> before you queue — no cheat guarantees permanent undetected status.',
				`Read ${EXT.eac} for how anti-cheat updates ship, then cross-check our <a href="/valorant-cheats/">anti-cheat maintenance guide</a> after major patches.`,
				'Checkout includes instant digital delivery for Windows 10 and 11. After purchase, follow the <a href="/setup/">Setup guide</a> and tune overlays before your first mission session.',
			),
			section(
				'ESP next steps — Aimbot, pricing, and support',
				'ESP alone wins information wars; Aimbot covers the firefight. Review <a href="/valorant-aimbot/">Aimbot controls</a> if you want one license for visibility and assist.',
				'Compare monthly ($35) and lifetime ($150) on <a href="/pricing/">Pricing</a>, then keep <a href="/support/">Support</a> ready if activation needs a human reply.',
				'Still researching? The <a href="/valorant-cheats/">best Valorant cheats guide</a> and <a href="/valorant-cheats/">2026 buyer guide</a> summarize the full stack.',
			),
		],
	},
	'valorant-aimbot': {
		title: 'Valorant Aimbot 2026 | Soft Aim for PC & Controller',
		description:
			'Valorant cheats aimbot with FOV, smoothing & head priority. Per-weapon profiles for rifles, pistols & snipers on Windows PC.',
		h1: 'Valorant Aimbot — Soft Aim for PC & Controller',
		intro:
			'Configurable Aimbot tools for Valorant firefights. Smoothness, FOV, bone priority, and per-weapon profiles — bundled with ESP wallhack and radar in one undetected license.',
		imageAlt: 'Valorant cheats cheat menu with soft aim, FOV slider, and bone priority settings',
		galleryTitle: 'Valorant Aimbot combat previews',
		ctaPrimary: 'Buy Valorant Cheats',
		ctaSecondary: 'See ESP wallhack',
		ctaSecondaryHref: '/valorant-esp/',
		sections: [
			section(
				'Aimbot tuned for Valorant combat pace',
				'Valorant mixes long-range rifle fights with close-quarters shotgun pushes. Valorant Cheats Aimbot includes smoothness, FOV, and sensitivity controls tuned for that pace — with hotkey toggles mid-round.',
				'Bone priority and target selection options cover closest enemy, lowest health, or highest-threat targets during squad fights and defense waves and Spike Rush modifiers.',
				`Weapon balance and season rules change via ${EXT.rust}. Revisit Aimbot FOV and smoothness after major combat patches so assist still matches the live TTK windows.`,
			),
			section(
				'Per-weapon Aimbot profiles',
				'Save separate Aimbot profiles for rifles, shotguns, and snipers. Switch between long-range rifle beams and close-quarters room clears without reopening menus every spawn.',
				'Prefer softer tracking? Read the <a href="/valorant-aimbot/">soft aim guide</a>. Want the search term most players use? See <a href="/valorant-aimbot/">aimbot hack</a>.',
				'Aimbot ships alongside <a href="/valorant-esp/">ESP wallhack</a> and <a href="/valorant-radar/">2D radar</a> in the same Valorant Cheats license.',
				[
					'Smoothness, FOV, and sensitivity sliders',
					'Bone priority and threat-based targeting',
					'Hotkeys to toggle Aimbot mid-round',
					'Per-weapon profile slots for rifle/ shotgun / sniper',
				],
			),
			section(
				'anti-cheat maintenance for undetected Aimbot',
				'Valorant Cheats rebuilds Aimbot behavior when Riot Games anti-cheat or major Valorant patches land. Maintenance notes appear on the <a href="/updates/">Updates page</a> so you know when a new build is live.',
				`Cross-check service health on ${EXT.status} and anti-cheat context on ${EXT.eac}, then follow our <a href="/valorant-cheats/">anti-cheat maintenance guide</a> before queueing on patch day.`,
				'Responsible settings matter — undetected status requires ongoing maintenance, not set-and-forget configs. Start with conservative smoothness, then tune.',
			),
			section(
				'Buy Aimbot with ESP — pricing and setup',
				'Every plan includes Aimbot plus ESP and radar. Compare options on <a href="/pricing/">Pricing</a>, then activate with the <a href="/setup/">Setup guide</a>.',
				'Questions about delivery or profiles? Use <a href="/faq/">FAQ</a> or email <a href="/support/">Support</a> with your order ID.',
				'Want the full control list first? Open <a href="/features/">Features</a> before checkout.',
			),
		],
	},
	features: {
		title: 'Valorant Cheats Features | ESP, Aimbot & Radar',
		description:
			'Full Valorant cheats feature list — ESP, soft aim, radar, hotkeys & controller support. Review every toggle before checkout.',
		h1: 'Valorant Cheats Features — Full Control List',
		intro:
			'Every ESP wallhack, radar hack, and Aimbot control included in the Valorant Cheats package for Valorant on Windows PC — with anti-cheat maintenance after major patches.',
		imageAlt: 'Valorant ESP overlay with hero boxes and health bars',
		galleryTitle: 'Valorant Cheats feature gallery',
		ctaPrimary: 'Buy Valorant Cheats',
		ctaSecondary: 'View pricing',
		ctaSecondaryHref: '/pricing/',
		sections: [
			section(
				'ESP wallhack and visibility features',
				'enemy agent ESP wallhack, duelist and pickup threat cues, spike and utility markers, distance readouts, snaplines, and toggleable ESP categories for round-critical overlays only.',
				'Team and enemy colour coding supports Spike Rush and Competitive. Deep-dive the <a href="/valorant-esp/">ESP page</a> and <a href="/valorant-wallhack/">wallhack guide</a> for category-level detail.',
				`Map and loot systems evolve with ${EXT.epic} season updates — toggleable ESP categories keep overlays useful when maps rotate.`,
			),
			section(
				'Radar hack and Aimbot controls',
				'2D radar overlay with directional threat cues, configurable range for rotations and post-plants, plus Aimbot smoothness, FOV, bone priority, hotkeys, and per-weapon profiles.',
				'All tools share in-client toggles so you can adjust ESP, radar, and Aimbot during live Valorant sessions. See <a href="/valorant-radar/">radar</a> and <a href="/valorant-aimbot/">Aimbot</a> for settings walkthroughs.',
				'Prefer a menu-first workflow? The <a href="/features/">mod menu page</a> explains mid-round toggles without alt-tabbing.',
			),
			section(
				'Licensing, delivery, and anti-cheat maintenance',
				'Monthly ($35) and lifetime ($150) licenses with instant digital delivery. anti-cheat maintenance rebuilds publish on the <a href="/updates/">Updates page</a> after anti-cheat or game patches.',
				`Monitor ${EXT.status} on patch days, then confirm rebuild notes before you queue. Setup and billing help lives on <a href="/support/">Support</a> and support@cheatsforvalorant.com.`,
				'Next step: compare plans on <a href="/pricing/">Pricing</a> or read <a href="/valorant-cheats/">how undetected maintenance works</a>.',
			),
		],
	},
	pricing: {
		title: 'Buy Valorant Cheats | $35/mo or $150 Lifetime',
		description:
			'Buy Valorant cheats — $35/month or $150 lifetime. ESP, aimbot & wallhack included. Instant digital delivery on Windows PC.',
		h1: 'Valorant Cheats Pricing — Monthly & Lifetime',
		intro:
			'Choose monthly or lifetime access to undetected Valorant Cheats — ESP wallhack, radar hack, and Aimbot for Valorant on Windows PC. Instant digital delivery after payment.',
		imageAlt: 'Valorant wallhack ESP showing enemy agents through objective corners',
		galleryTitle: 'Valorant Cheats package visuals',
		ctaPrimary: 'Buy Valorant Cheats',
		ctaSecondary: 'Read setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'Monthly and lifetime Valorant Cheats plans',
				'Monthly license: $35 USD for 30 days of full ESP wallhack, radar hack, and Aimbot access with anti-cheat maintenance included during your term.',
				'Lifetime license: $150 USD for long-term access to the same undetected Valorant Cheats package — ideal if you play Valorant regularly across seasons.',
				'Both plans unlock the same feature stack described on <a href="/features/">Features</a>. Choose monthly to test, or lifetime if you already know you want the full toolkit.',
			),
			section(
				'What every plan includes',
				'enemy ESP wallhack, health bars, 2D radar overlays, Aimbot controls, in-client toggles, and maintenance rebuilds after Riot Games anti-cheat or major Valorant patches.',
				`update calendars and client updates come from ${EXT.rust}. Active licenses receive rebuild access when we publish maintenance on <a href="/updates/">Updates</a>.`,
				'Digital delivery starts after payment confirmation. Keep your order reference for <a href="/support/">Support</a> requests and follow <a href="/setup/">Setup</a> for first launch.',
			),
			section(
				'Refund, billing, and buying checklist',
				'Review the <a href="/refund-policy/">Refund Policy</a> before purchase. For billing or delivery issues, contact Support with your order details.',
				'Prices are listed in USD. Availability is worldwide for Windows 10 and 11 PCs.',
				'Still comparing tools? Read <a href="/valorant-cheats/">best Valorant cheats</a>, <a href="/valorant-cheats/">undetected status</a>, and <a href="/faq/">FAQ</a> before you checkout.',
			),
		],
	},
	setup: {
		title: 'Valorant Cheats Setup | Install Guide for Windows PC',
		description:
			'Install Valorant cheats on Windows 10/11. Activate your license, tune ESP & aimbot profiles, check patch status before queueing.',
		h1: 'Valorant Cheats Setup — PC & Controller Guide',
		intro:
			'Install and configure Valorant Cheats for Valorant on Windows 10 or 11. Activate your license, load ESP wallhack and Aimbot profiles, and verify anti-cheat maintenance status before queueing.',
		imageAlt: 'Valorant aimbot hitbox lock on enemy agent during Competitive mission fight',
		galleryTitle: 'Valorant Cheats setup visuals',
		ctaPrimary: 'Buy Valorant Cheats',
		ctaSecondary: 'Contact support',
		ctaSecondaryHref: '/support/',
		sections: [
			section(
				'Before you install Valorant Cheats',
				'Confirm your order email and license details. Check the <a href="/updates/">Updates page</a> for the latest anti-cheat maintenance build before launching Valorant.',
				`Also glance at ${EXT.status} if Valorant servers look unstable on patch day — a platform outage is not a license fault.`,
				'Valorant Cheats requires Windows 10 or 11. Close conflicting overlay software that may interfere with ESP wallhack or Aimbot toggles.',
			),
			section(
				'Activate ESP wallhack and Aimbot profiles',
				'Follow the delivery instructions in your license email. Load default ESP wallhack categories for agents, utility, and the spike — then tune radar range and Aimbot smoothness to your playstyle.',
				'Use in-client hotkeys to toggle ESP, radar, and Aimbot mid-round. Details for each module live on <a href="/valorant-esp/">ESP</a>, <a href="/valorant-aimbot/">Aimbot</a>, and <a href="/features/">mod menu</a>.',
				'Prefer a soft tracking feel? Start with the <a href="/valorant-aimbot/">soft aim</a> recommendations before raising aggressiveness.',
			),
			section(
				'After Valorant or Riot Games anti-cheat patches',
				'When Riot Games ships a major Valorant update or Riot Games anti-cheat patch, revisit Updates before queueing. Download maintenance rebuilds when posted.',
				`Official anti-cheat background: ${EXT.eac}. Our practical workflow is documented on the <a href="/valorant-cheats/">anti-cheat maintenance page</a> and <a href="/valorant-cheats/">undetected guide</a>.`,
				'Contact <a href="/support/">Support</a> with your order ID if activation fails after a patch — include Windows version and error details for faster replies.',
			),
		],
	},
	updates: {
		title: 'Valorant Cheats Updates | Patch & Status Log',
		description:
			'Valorant cheats update log — check build status after game patches. Maintenance notes for ESP, aimbot & radar rebuilds.',
		h1: 'Valorant Cheats Updates — Maintenance Log',
		intro:
			'Track anti-cheat maintenance and Valorant patch rebuilds for the undetected ESP wallhack, radar hack, and Aimbot package. Check here before queueing after major updates.',
		imageAlt: 'Valorant wallhack ESP skeleton on enemy duelist hero in Competitive',
		galleryTitle: 'Valorant patch and maintenance visuals',
		ctaPrimary: 'Buy Valorant Cheats',
		ctaSecondary: 'Undetected status guide',
		ctaSecondaryHref: '/valorant-cheats/',
		sections: [
			section(
				'Why the Updates page matters',
				'Valorant and Riot Games anti-cheat receive frequent patches. Valorant Cheats publishes maintenance notes when ESP wallhack, radar, or Aimbot behavior needs a rebuild.',
				`Use ${EXT.status} for Valorant launcher health and this page for Valorant Cheats build status — both matter on big update days.`,
				'Checking this log before you queue reduces surprises after game days or seasonal launches on Competitive and Spike Rush.',
			),
			section(
				'What maintenance entries cover',
				'Entries note Riot Games anti-cheat compatibility status, rebuilt ESP wallhack overlays, radar range fixes, Aimbot tuning after weapon balance changes, and digital delivery of new builds to active licenses.',
				'Lifetime and monthly subscribers receive rebuild access during active license terms. See <a href="/pricing/">Pricing</a> if you need to renew.',
				'For context on why rebuilds happen, read the <a href="/valorant-cheats/">anti-cheat maintenance guide</a> and <a href="/valorant-cheats/">undetected Valorant cheats</a> explainer.',
			),
			section(
				'Staying undetected after patches',
				'No cheat guarantees permanent undetected status. Combine maintenance updates with responsible in-game settings and patch awareness.',
				`Follow patch notes from ${EXT.rust}, then confirm our rebuild is live before Competitive.`,
				'For urgent status questions after an anti-cheat update, contact <a href="/support/">Support</a> with your license tier and last played build version.',
			),
		],
	},
	faq: {
		title: 'Valorant Cheats FAQ | ESP, Aimbot & Safety',
		description:
			'Valorant cheats FAQ — licensing, ESP, aimbot, controller support, patch-day status & pricing. Clear answers before you buy.',
		h1: 'Valorant Cheats FAQ — Common Questions',
		intro:
			'Answers about undetected Valorant Cheats — ESP wallhack, radar hack, Aimbot, anti-cheat maintenance, checkout, and Valorant compatibility on Windows PC.',
		imageAlt: 'Valorant radar hack 2D minimap overlay showing spawn routes and enemy agents',
		galleryTitle: 'Valorant Cheats FAQ visuals',
		ctaPrimary: 'Buy Valorant Cheats',
		ctaSecondary: 'Contact support',
		ctaSecondaryHref: '/support/',
		sections: [
			section(
				'What is Valorant Cheats?',
				'Valorant Cheats is an undetected cheat package for Valorant on Windows PC. It includes ESP wallhack, 2D radar-style awareness, and Aimbot controls with anti-cheat maintenance updates.',
				'Packages cover Competitive and Spike Rush. Explore <a href="/features/">Features</a> for the full control list and <a href="/valorant-esp/">ESP</a> / <a href="/valorant-aimbot/">Aimbot</a> for module detail.',
				`Valorant is developed and published by ${EXT.epic}. Cheats are third-party tools and may violate Riot Games' Terms of Service — use is at your own risk.`,
			),
			section(
				'Are Valorant Cheats undetected in 2026?',
				'Valorant Cheats is maintained with rebuilds after Riot Games anti-cheat and game patches. Check the <a href="/updates/">Updates page</a> for current status — no cheat can guarantee permanent undetected operation.',
				'Read <a href="/valorant-cheats/">undetected Valorant cheats</a> and the <a href="/valorant-cheats/">anti-cheat guide</a> for the maintenance workflow.',
				'Responsible settings and reading maintenance notes before queueing are essential.',
			),
			section(
				'Delivery, pricing, and support',
				'Licenses deliver digitally after payment confirmation. Monthly is $35; lifetime is $150 USD — see <a href="/pricing/">Pricing</a>.',
				'Contact support@cheatsforvalorant.com or the <a href="/support/">Support page</a> with order details for setup or billing help. First launch steps are on <a href="/setup/">Setup</a>.',
				'Refund eligibility is covered in the <a href="/refund-policy/">Refund Policy</a>.',
			),
		],
	},
	support: {
		title: 'Valorant Cheats Support | Contact & Help',
		description:
			'Contact Valorant Cheats support for licenses, setup & billing. Email support@cheatsforvalorant.com with your order ID.',
		h1: 'Valorant Cheats Support — Contact Us',
		intro:
			'Get help with Valorant Cheats licenses, checkout, ESP wallhack setup, Aimbot profiles, and anti-cheat maintenance for Valorant on Windows PC.',
		imageAlt: 'Valorant cheats Competitive objective fight with ESP boxes and aimbot active',
		galleryTitle: 'Valorant Cheats support resources',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'When to contact support',
				'Reach out for order issues, license activation failures, ESP wallhack or Aimbot setup questions, and post-patch problems after anti-cheat maintenance rebuilds.',
				'Include your order ID, license tier (monthly or lifetime), Windows version, and a clear description of the issue.',
				'Many answers already live in <a href="/faq/">FAQ</a>, <a href="/setup/">Setup</a>, and <a href="/updates/">Updates</a> — check those first for faster resolution.',
			),
			section(
				'Response times and scope',
				'Support requests are reviewed daily. Valorant Cheats support covers delivery, billing, setup, and maintenance — not in-game coaching or account recovery for Riot Games bans.',
				`Account and game policy questions belong with ${EXT.epic}. We can help with license delivery and product configuration only.`,
				'Check the Updates page and FAQ before opening a ticket — many post-patch questions are answered there.',
			),
			section(
				'Self-service resources',
				'Setup guide, Features list, Updates log, Refund Policy, and Terms of Use are linked from the footer. anti-cheat maintenance notes live on the dedicated <a href="/valorant-cheats/">Riot Games anti-cheat page</a>.',
				'Email: support@cheatsforvalorant.com',
				'Ready to purchase or renew? Open <a href="/pricing/">Pricing</a>. Need feature detail first? See <a href="/features/">Features</a>.',
			),
		],
	},
	undetected: {
		title: 'Undetected Valorant Cheats 2026 | Anti-cheat safe',
		description:
			'Undetected Valorant Cheats with anti-cheat maintenance for ESP boxes, soft aim, and radar on PC and controllers. Check status before you queue.',
		h1: 'Undetected Valorant Cheats — Anti-cheat maintenance',
		intro:
			'How Valorant Cheats stays maintained for Valorant after Riot Games anti-cheat patches — ESP wallhack, radar hack, and Aimbot rebuilds for Windows PC.',
		imageAlt: 'Valorant wallhack ESP skeleton boxes on enemy agents through map geometry',
		galleryTitle: 'Undetected Valorant Cheats visuals',
		ctaPrimary: 'Buy Valorant Cheats',
		ctaSecondary: 'anti-cheat maintenance guide',
		ctaSecondaryHref: '/valorant-cheats/',
		sections: [
			section(
				'What undetected means for Valorant Cheats',
				'Undetected Valorant Cheats means the package is actively maintained against Riot Games anti-cheat and major Valorant patches — not that detection is impossible forever.',
				'Rebuilds target ESP wallhack overlays, radar behavior, and Aimbot signatures after Riot Games anti-cheat updates.',
				`Anti-cheat technology is documented by ${EXT.eac}; Valorant client updates ship through ${EXT.epic}. Undetected status is an ongoing process tied to those releases.`,
			),
			section(
				'anti-cheat maintenance workflow',
				'When Riot Games anti-cheat or Valorant updates ship, the team assesses ESP, radar, and Aimbot modules, publishes status on the <a href="/updates/">Updates page</a>, and delivers rebuilt builds to active licenses.',
				`On patch mornings, also check ${EXT.status} for Valorant outages that can look like product failures.`,
				'Deep technical workflow: <a href="/valorant-cheats/">anti-cheat maintenance Valorant guide</a>. Feature stack: <a href="/features/">Features</a>.',
			),
			section(
				'Responsible use and next steps',
				'Combine maintenance with conservative in-game settings. Read the <a href="/faq/">FAQ</a> and Updates log regularly — undetected status is not a one-time promise.',
				'Lifetime and monthly plans include rebuild access during active terms — see <a href="/pricing/">Pricing</a>.',
				'New buyers should also read <a href="/valorant-cheats/">Valorant cheats 2026</a> and complete <a href="/setup/">Setup</a> after delivery.',
			),
		],
	},
	wallhack: {
		title: 'Valorant Wallhack 2026 | ESP Boxes Through Terrain',
		description:
			'Valorant wallhack ESP highlights enemy agents through cover. Toggle categories for Competitive & Unrated.',
		h1: 'Valorant Wallhack — ESP Boxes & Visibility',
		intro:
			'Valorant wallhack ESP for Valorant — see agents, utility, and the spike through toggleable wallhack overlays built for Unrated, Competitive, and Spike Rush.',
		imageAlt: 'Valorant wallhack ESP skeleton boxes on enemy agent hero in Competitive',
		galleryTitle: 'Valorant wallhack ESP gallery',
		ctaPrimary: 'Buy Valorant Cheats',
		ctaSecondary: 'Valorant ESP page',
		ctaSecondaryHref: '/valorant-esp/',
		sections: [
			section(
				'Wallhack ESP vs raw aim tools',
				'A Valorant wallhack focuses on information — enemy outlines, spike markers, duelist threat cues — rather than automatic aiming. Valorant Cheats bundles wallhack ESP with radar and optional Aimbot in one license.',
				'Toggle categories so only the wallhack overlays you need stay active during rotations and defense waves.',
				'For the broader ESP keyword page see <a href="/valorant-esp/">Valorant ESP</a>; for combat assist see <a href="/valorant-aimbot/">Aimbot</a>.',
			),
			section(
				'Map coverage for wallhack ESP',
				'Wallhack overlays support Competitive, Unrated, and Spike Rush with distance readouts and snaplines for engagement control.',
				`map updates and map changes are announced via ${EXT.rust}. Wallhack remains useful because it tracks entities, not fixed landmarks alone.`,
				'Pair wallhack awareness with <a href="/valorant-radar/">radar hack</a> cues for flanks during building and rooftop fights.',
			),
			section(
				'Undetected wallhack maintenance',
				'ESP wallhack modules rebuild after Riot Games anti-cheat patches. Follow the <a href="/updates/">Updates page</a> and complete checkout for instant license delivery on Windows PC.',
				'Learn the full maintenance story on <a href="/valorant-cheats/">undetected Valorant cheats</a> and <a href="/valorant-cheats/">anti-cheat maintenance</a>.',
				'Ready to buy? Compare <a href="/pricing/">Pricing</a> or continue to the <a href="/valorant-esp/">ESP hack</a> landing for alternate search wording.',
			),
		],
	},
	radar: {
		title: 'Valorant Radar Hack 2026 | 2D Minimap for Valorant',
		description:
			'Valorant radar hack shows off-screen enemies on a 2D minimap. Directional cues for defense, survival & squad play.',
		h1: 'Valorant Radar Hack — 2D Threat Awareness',
		intro:
			'2D radar-style overlay for Valorant — directional threat cues for nearby players outside your line of sight, bundled with ESP wallhack and Aimbot.',
		imageAlt: 'Valorant ESP distance markers and hero health readouts in Competitive',
		galleryTitle: 'Valorant radar hack visuals',
		ctaPrimary: 'Buy Valorant Cheats',
		ctaSecondary: 'See ESP wallhack',
		ctaSecondaryHref: '/valorant-esp/',
		sections: [
			section(
				'Why radar hack matters in Valorant',
				'Multi-floor maps stack vertical fights — catwalks, doorways, and side spawns. A 2D radar overlay shows nearby enemy threats outside direct line of sight so you can reposition before a flank wave.',
				'Valorant Cheats radar complements <a href="/valorant-esp/">ESP wallhack</a> markers during squad pushes and post-plant scrims.',
				`Mode rules and seasonal changes come from ${EXT.epic}. Radar range remains configurable when map scale or mobility meta shifts.`,
			),
			section(
				'Configurable radar range',
				'Adjust radar range for early rotations versus tight defense waves. Directional cues highlight flanks during map clears and duelist pushes across Competitive and Spike Rush.',
				'Toggle radar alongside ESP and Aimbot with in-client hotkeys during live rounds — see the <a href="/features/">mod menu</a> page.',
				'Combat follow-up lives on <a href="/valorant-aimbot/">Aimbot</a> when you convert radar info into a fight.',
			),
			section(
				'Maintenance and licensing',
				'Radar hack modules receive anti-cheat maintenance rebuilds with the full Valorant Cheats package. Monthly and lifetime licenses include digital delivery — see <a href="/pricing/">Pricing</a>.',
				'Check <a href="/updates/">Updates</a> after major Valorant patches before relying on previous radar configs.',
				'New to the stack? Start at <a href="/features/">Features</a> or <a href="/valorant-cheats/">undetected status</a>.',
			),
		],
	},
	'eac-bypass': {
		title: 'Valorant Anti-Cheat Maintenance | Patch Guide',
		description:
			'How Valorant Cheats rebuild after Riot Games anti-cheat patches — ESP, aimbot & radar maintenance for PC. Read before queueing.',
		h1: 'Valorant Anti-Cheat — Maintenance Guide',
		intro:
			'Understand Riot Games anti-cheat maintenance for Valorant Cheats — how ESP wallhack, radar hack, and Aimbot rebuild after Valorant security updates.',
		imageAlt: 'Valorant undetected hacks status with ESP overlay on enemy agents',
		galleryTitle: 'anti-cheat maintenance visuals',
		ctaPrimary: 'Buy Valorant Cheats',
		ctaSecondary: 'Check updates',
		ctaSecondaryHref: '/updates/',
		sections: [
			section(
				'Riot Games anti-cheat overview',
				`Riot Games anti-cheat is Riot Games’ anti-cheat for Valorant on PC (see ${EXT.eac}). Security updates can affect ESP wallhack, radar, and Aimbot behavior — requiring maintenance rebuilds for undetected packages.`,
				`Valorant Cheats monitors anti-cheat patch notes and Valorant seasonal updates from ${EXT.epic} to schedule module reviews.`,
				'“anti-cheat maintenance” in our wording means timely maintenance — not a permanent free pass around anti-cheat.',
			),
			section(
				'What happens after an anti-cheat patch',
				'The team tests ESP overlays, radar signatures, and Aimbot profiles against the new build, publishes status on <a href="/updates/">Updates</a>, and ships rebuilt packages to active licenses.',
				`Confirm Valorant service health on ${EXT.status} if the launcher or matchmaking fails during the same window.`,
				'Avoid queueing on old builds after major patch days until maintenance notes confirm a new release. Related reading: <a href="/valorant-cheats/">undetected Valorant cheats</a>.',
			),
			section(
				'No permanent bypass guarantee',
				'anti-cheat maintenance in practice means timely maintenance. Read the undetected guide, <a href="/faq/">FAQ</a>, and Updates log before every session.',
				'Contact <a href="/support/">Support</a> if activation fails immediately after a posted rebuild.',
				'Buying for the first time? Compare <a href="/pricing/">Pricing</a> and finish <a href="/setup/">Setup</a> only after Updates shows a live build.',
			),
		],
	},
	'cheats-2026': {
		title: 'Valorant Cheats 2026 | Hacks with ESP & Radar',
		description:
			'Best Valorant cheats 2026: ESP boxes, soft aim, and radar for PC and controllers. Undetected Valorant Cheats with anti-cheat maintenance — compare and buy.',
		h1: 'Valorant Cheats 2026 — ESP, Soft Aim & Radar',
		intro:
			'The 2026 Valorant Cheats package for Valorant — undetected ESP wallhack, radar hack, and Aimbot with anti-cheat maintenance, instant delivery, and Windows PC support.',
		imageAlt: 'Valorant cheats main menu with ESP wallhack and soft aim toggles on PC',
		galleryTitle: 'Valorant Cheats 2026 gallery',
		ctaPrimary: 'Buy Valorant Cheats',
		ctaSecondary: 'Compare features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'Why Valorant Cheats leads in 2026',
				'2026 seasons bring new maps, weapons, and Riot Games anti-cheat updates. Valorant Cheats bundles ESP wallhack, radar hack, and Aimbot with active maintenance — not a stale prior-year build.',
				`Track official official patch messaging on ${EXT.rust}, then use our <a href="/updates/">Updates log</a> for product rebuild timing.`,
				'Monthly ($35) and lifetime ($150) plans cover Competitive and Spike Rush loops — see <a href="/pricing/">Pricing</a>.',
			),
			section(
				'Full feature stack for 2026 buyers',
				'enemy ESP wallhack, health bars, 2D radar overlays, Aimbot profiles, in-client toggles, and post-patch rebuilds — one license instead of stacking separate tools.',
				'Deep links: <a href="/valorant-cheats/">Valorant Cheats pillar</a>, <a href="/valorant-esp/">ESP</a>, <a href="/valorant-aimbot/">Aimbot</a>, <a href="/valorant-wallhack/">wallhack</a>, <a href="/valorant-radar/">radar</a>, <a href="/valorant-cheats/">undetected</a>.',
				'Instant digital delivery after checkout confirmation worldwide.',
			),
			section(
				'Before you buy in 2026',
				'Read the <a href="/valorant-cheats/">Valorant Cheats</a> pillar, Features, Pricing, Setup, and Updates pages. Check undetected status notes after every major patch — responsible use and maintenance awareness matter.',
				'Also compare the <a href="/valorant-cheats/">best Valorant cheats</a> checklist, <a href="/blog/valorant-cheats-2026-whats-new/">2026 blog guide</a>, and <a href="/faq/">FAQ</a>.',
				'Support is available at support@cheatsforvalorant.com via the <a href="/support/">Support page</a>.',
			),
		],
	},
	hacks: {
		title: 'Undetected Valorant Cheats 2026 | PC Hacks Guide',
		description:
			'Undetected Valorant cheats with ESP, aimbot & wallhack for PC. Maintenance after patches, pricing & setup — no permanent undetected promises.',
		h1: 'Valorant Cheats & Hacks — ESP, Aimbot & Wallhack',
		intro:
			'Valorant cheats and hacks for Competitive, Spike Rush, and rotates combine ESP wallhack visibility, 2D radar threat cues, and aimbot controls in one Windows PC license — maintained after Riot Games anti-cheat patches. This is the pillar guide for Valorant Cheats in 2026.',
		imageAlt: 'Valorant cheats Competitive objective fight with ESP boxes and aimbot active',
		galleryTitle: 'Valorant Cheats gallery — ESP, Aimbot, wallhack',
		ctaPrimary: 'Buy Valorant Cheats',
		ctaSecondary: 'See undetected guide',
		ctaSecondaryHref: '/valorant-cheats/',
		sections: [
			section(
				'What Valorant Cheats include in 2026',
				'Players searching for Valorant Cheats usually want visibility and combat tools without stacking separate downloads. Valorant Cheats bundles enemy ESP wallhack, health bars, 2D radar overlays, and configurable Aimbot in one maintained package — the same toolkit often called Valorant cheats.',
				'Coverage spans Competitive and Spike Rush with in-client toggles for live rounds. Monthly ($35) and lifetime ($150) licenses unlock the full stack.',
				`Official game updates come from ${EXT.epic}; our hacks package tracks those releases via the <a href="/updates/">Updates page</a>. Cross-check platform health on ${EXT.status} before patch-day queues.`,
			),
			section(
				'Valorant Cheats vs Valorant cheats — same stack, clear pages',
				'Searchers use Valorant Cheats and Valorant cheats interchangeably. This pillar focuses on hacks language; the <a href="/valorant-cheats/">Valorant cheats 2026</a> and <a href="/valorant-cheats/">best Valorant cheats</a> pages cover buyer comparisons in cheats wording.',
				'Deep-dive modules: <a href="/valorant-esp/">Valorant ESP</a>, <a href="/valorant-aimbot/">Valorant Aimbot</a>, <a href="/valorant-wallhack/">wallhack</a>, <a href="/valorant-radar/">radar hack</a>, and <a href="/valorant-aimbot/">soft aim</a>.',
				'Blog guides expand each keyword: <a href="/blog/valorant-cheats-complete-guide-2026/">hacks complete guide</a>, <a href="/blog/valorant-cheats-buyers-guide/">cheats buyers guide</a>, and <a href="/blog/undetected-valorant-cheats-eac/">undetected anti-cheat notes</a>.',
			),
			section(
				'Valorant Cheats vs single-feature tools',
				'Standalone hacks often cover only wallhack or only aim assist. Valorant Cheats maps the full mission loop: read enemy agents, track the spike and abilities, spot flanks on radar, and tune Aimbot per weapon class.',
				'Compare the <a href="/valorant-esp/">ESP</a>, <a href="/valorant-aimbot/">Aimbot</a>, and <a href="/features/">Features</a> pages — or review <a href="/pricing/">Pricing</a> for monthly and lifetime licenses.',
				'Related landings: <a href="/pricing/">cheat download</a>, <a href="/features/">mod menu</a>, <a href="/valorant-aimbot/">aimbot hack</a>, <a href="/valorant-esp/">ESP hack</a>.',
			),
			section(
				'Undetected Valorant Cheats with anti-cheat maintenance',
				'Undetected Valorant Cheats require rebuilds after Riot Games anti-cheat and major Valorant patches. Check Updates before queueing — maintenance notes confirm when a new build is live. No package can promise permanent undetected status.',
				`See ${EXT.eac} for anti-cheat background and our <a href="/valorant-cheats/">anti-cheat maintenance guide</a> for the practical workflow. Pair with <a href="/valorant-cheats/">undetected Valorant cheats</a> for status language buyers expect.`,
				'Digital delivery runs after checkout for Windows 10 and 11 PCs worldwide. After purchase, follow <a href="/setup/">Setup</a> and keep <a href="/support/">Support</a> ready with your order ID.',
			),
		],
	},
	'cheat-download': {
		title: 'Valorant Hack Download 2026 | Instant Access',
		description:
			'Valorant cheat download with instant license delivery — ESP boxes, soft aim, and radar for PC and controllers. Buy, activate, and play.',
		h1: 'Valorant Hack Download — Instant License Delivery',
		intro:
			'How Valorant cheat download works for Valorant — digital license delivery after payment confirmation, with ESP wallhack, radar hack, and Aimbot access on Windows PC.',
		imageAlt: 'Valorant wallhack ESP showing enemy agents through objective corners',
		galleryTitle: 'Valorant cheat download visuals',
		ctaPrimary: 'Buy Valorant Cheats',
		ctaSecondary: 'Setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'How Valorant cheat download delivery works',
				'After checkout confirms payment, Valorant Cheats license details arrive digitally by email. No physical shipment — access begins once activation instructions are delivered.',
				'Keep your order confirmation and license email ready for the <a href="/setup/">Setup guide</a> and Support requests.',
				`If Valorant servers are down, check ${EXT.status} before assuming a download failure.`,
			),
			section(
				'What your download unlocks',
				'Every Valorant cheat download includes enemy ESP wallhack, spike and utility markers, 2D radar overlays, Aimbot profiles, and in-client toggles for Unrated, Competitive, and Spike Rush.',
				'Monthly ($35) and lifetime ($150) plans share the same feature stack — compare options on the <a href="/pricing/">Pricing page</a>.',
				'Feature detail: <a href="/features/">Features</a>. Module pages: <a href="/valorant-esp/">ESP</a>, <a href="/valorant-aimbot/">Aimbot</a>.',
			),
			section(
				'After purchase — setup and updates',
				'Follow Setup to activate ESP wallhack and Aimbot on Windows 10 or 11. When Valorant or Riot Games anti-cheat patches ship, check the <a href="/updates/">Updates page</a> for maintenance rebuilds.',
				'Contact <a href="/support/">Support</a> with your order ID if delivery or activation fails within 24 hours of purchase.',
				'Also read <a href="/valorant-cheats/">undetected status</a> so you know what “download ready” means after a patch.',
			),
		],
	},
	'mod-menu': {
		title: 'Valorant Mod Menu 2026 | ESP & Soft Aim Toggles',
		description:
			'Valorant mod menu for in-match toggles — ESP boxes, soft aim, radar, and radar on PC and controllers. Undetected Valorant Cheats package.',
		h1: 'Valorant Mod Menu — In-Client Control Panel',
		intro:
			'Valorant mod menu controls for Valorant — toggle ESP wallhack categories, radar range, and Aimbot profiles mid-round without leaving your Valorant session on Windows PC.',
		imageAlt: 'Valorant cheats mod menu with soft aim profiles and ESP toggles',
		galleryTitle: 'Valorant mod menu gallery',
		ctaPrimary: 'Buy Valorant Cheats',
		ctaSecondary: 'Full feature list',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'What a Valorant mod menu controls',
				'A Valorant mod menu is the in-client panel where you enable ESP wallhack overlays, adjust radar range, and switch Aimbot profiles during live rounds. Valorant Cheats keeps those toggles accessible with hotkeys.',
				'Toggle enemy outlines, health bars, duelist cues, and per-weapon Aimbot settings without alt-tabbing out of Valorant.',
				'Control deep-dives: <a href="/valorant-esp/">ESP</a>, <a href="/valorant-aimbot/">Aimbot</a>, <a href="/valorant-radar/">radar</a>.',
			),
			section(
				'Mod menu categories for Unrated, Competitive, and Spike Rush',
				'Separate ESP wallhack categories for players, agents, utility, and the spike let you reduce overlay noise during rotations and defense waves.',
				'Radar hack range and Aimbot smoothness adjust from the same mod menu — useful when Valorant balance patches change fight distances and mobility.',
				'Soft tracking players should start with <a href="/valorant-aimbot/">soft aim</a> profiles before aggressive FOV.',
			),
			section(
				'Maintained mod menu after anti-cheat patches',
				'Valorant mod menu behavior is rebuilt when Riot Games anti-cheat or major Valorant updates land. Follow the <a href="/updates/">Updates page</a> and <a href="/valorant-cheats/">anti-cheat maintenance guide</a> before queueing on patch days.',
				'Checkout with instant digital delivery for monthly and lifetime licenses — see <a href="/pricing/">Pricing</a>.',
				'Need install steps? Open <a href="/setup/">Setup</a> after your license email arrives.',
			),
		],
	},
	'soft-aim': {
		title: 'Valorant Soft Aim 2026 | Smooth Aimbot Settings',
		description:
			'Valorant aimbot settings for natural tracking on PC and controllers. Smoothness, FOV, and bone priority — included in our Valorant Cheats with ESP boxes.',
		h1: 'Valorant Soft Aim — Smooth Aimbot Controls',
		intro:
			'Valorant aimbot settings for Valorant — configurable Aimbot smoothness, FOV, bone priority, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.',
		imageAlt: 'Valorant aimbot ESP boxes and FOV circle on enemy agents in Unrated and Competitive',
		galleryTitle: 'Valorant aimbot gallery',
		ctaPrimary: 'Buy Valorant Cheats',
		ctaSecondary: 'Aimbot controls',
		ctaSecondaryHref: '/valorant-aimbot/',
		sections: [
			section(
				'What Valorant aimbot means',
				'Valorant aimbot refers to Aimbot behavior tuned for smooth, natural-looking tracking rather than instant snap. Valorant Cheats exposes smoothness, FOV, and sensitivity sliders so you control how assist feels in missions firefights.',
				'Bone priority and target selection cover closest enemy, lowest health, or highest-threat targets during squad fights.',
				'Full Aimbot documentation: <a href="/valorant-aimbot/">Valorant Aimbot</a>. Alternate wording: <a href="/valorant-aimbot/">aimbot hack</a>.',
			),
			section(
				'Soft aim profiles per weapon class',
				'Save separate soft aim profiles for rifles, shotguns, and snipers. Switch between long-range rifle beams and close-quarters room clears with hotkeys mid-round.',
				`Weapon TTKs shift with ${EXT.rust} balance patches — retune smoothness after major combat updates.`,
				'Soft aim ships alongside <a href="/valorant-esp/">ESP wallhack</a> and <a href="/valorant-radar/">2D radar</a> overlays.',
			),
			section(
				'Undetected soft aim with anti-cheat maintenance',
				'Aimbot modules rebuild after Riot Games anti-cheat patches. Check the <a href="/updates/">Updates page</a> before queueing — responsible settings and maintenance awareness matter for undetected play.',
				'Monthly and lifetime licenses checkout with digital delivery on Windows PC — <a href="/pricing/">Pricing</a>.',
				'Activation help: <a href="/setup/">Setup</a> · status questions: <a href="/support/">Support</a>.',
			),
		],
	},
	'best-cheats': {
		title: 'Best Valorant Cheats 2026 | Buyer Guide',
		description:
			'Best Valorant Cheats for 2026: ESP boxes, soft aim, radar, and anti-cheat maintenance on PC and controllers. Use this checklist before checkout.',
		h1: 'Best Valorant Cheats — 2026 Buyer Guide',
		intro:
			'Compare the best Valorant cheats for Valorant in 2026 — undetected ESP wallhack, radar hack, and Aimbot in one maintained package with Riot Games anti-cheat rebuilds and instant delivery.',
		imageAlt: 'Valorant wallhack ESP showing enemy agents through objective corners',
		galleryTitle: 'Best Valorant cheats gallery',
		ctaPrimary: 'Buy Valorant Cheats',
		ctaSecondary: 'Compare pricing',
		ctaSecondaryHref: '/pricing/',
		sections: [
			section(
				'What makes the best Valorant cheats in 2026',
				'The best Valorant cheats combine active anti-cheat maintenance, a full ESP wallhack and radar stack, configurable Aimbot, and clear update communication — not a stale build from a prior season.',
				'Valorant Cheats covers Competitive and Spike Rush with in-client toggles and post-patch rebuilds.',
				`Verify the live game is healthy via ${EXT.status}, then confirm our <a href="/updates/">Updates</a> note before you judge any package “best.”`,
			),
			section(
				'Best Valorant cheats feature checklist',
				'Look for enemy ESP wallhack, health bars, 2D radar overlays, Aimbot profiles, hotkey toggles, and documented maintenance after Valorant patches.',
				'Review <a href="/features/">Features</a>, <a href="/valorant-cheats/">undetected status</a>, and <a href="/valorant-cheats/">Valorant cheats 2026</a> before checkout — monthly ($35) and lifetime ($150) plans available.',
				'Module pages worth opening: <a href="/valorant-esp/">ESP</a>, <a href="/valorant-aimbot/">Aimbot</a>, <a href="/valorant-cheats/">hacks</a>.',
			),
			section(
				'Buying the best Valorant cheats safely',
				'Purchase through secure checkout for instant digital delivery. Read Setup, FAQ, and Updates pages before your first queue — and contact Support with order details if activation needs help.',
				'No cheat guarantees permanent undetected status — combine maintenance with responsible in-game settings.',
				`Remember: using cheats can violate Riot Games terms. Proceed only if you accept that risk.`,
			),
		],
	},
	'aimbot-hack': {
		title: 'Valorant Aimbot Hack 2026 | Soft Aim Assist',
		description:
			'Valorant aimbot hack with soft aim for PC and controllers. FOV, bone priority, and hotkeys — bundled with ESP boxes in our Valorant Cheats package.',
		h1: 'Valorant Aimbot Hack — Soft Aim Assist',
		intro:
			'Valorant aimbot hack tools for Valorant — smoothness, FOV, bone priority, per-weapon profiles, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.',
		imageAlt: 'Valorant aimbot hack menu with silent aim and bone priority toggles',
		galleryTitle: 'Valorant aimbot hack gallery',
		ctaPrimary: 'Buy Valorant Cheats',
		ctaSecondary: 'Aimbot settings',
		ctaSecondaryHref: '/valorant-aimbot/',
		sections: [
			section(
				'Valorant aimbot hack vs visibility tools',
				'A Valorant aimbot hack focuses on assisted targeting during firefights — while ESP wallhack and radar handle map awareness. Valorant Cheats bundles aimbot hack modules with visibility overlays in one license.',
				'Smoothness, FOV, and sensitivity controls tune assist for Valorant combat pace across Unrated, Competitive, and Spike Rush.',
				'Prefer softer tracking language? See <a href="/valorant-aimbot/">soft aim</a>. Full settings: <a href="/valorant-aimbot/">Aimbot page</a>.',
			),
			section(
				'Aimbot hack controls and hotkeys',
				'Bone priority options cover head, chest, or dynamic targets. Hotkeys enable or disable aimbot hack mid-round without opening menus during rotations or post-plants.',
				'Per-weapon profile slots separate long-range rifle tuning from close-quarters shotgun settings.',
				`Balance patches from ${EXT.rust} can change ideal FOV — retune after major weapon updates.`,
			),
			section(
				'Undetected aimbot hack maintenance',
				'Aimbot hack signatures rebuild after Riot Games anti-cheat updates. Follow the <a href="/updates/">Updates page</a> and <a href="/valorant-cheats/">anti-cheat maintenance guide</a> before queueing after patch days.',
				'Checkout with instant digital delivery for Windows 10 and 11 — <a href="/pricing/">Pricing</a>.',
				'Pair with <a href="/valorant-esp/">ESP</a> for the full information + assist loop.',
			),
		],
	},
	'esp-hack': {
		title: 'Valorant ESP Hack 2026 | enemy boxes & Loot',
		description:
			'Valorant ESP hack with enemy boxes and health bars for PC and controllers. Undetected Valorant cheats with radar — see overlays and buy.',
		h1: 'Valorant ESP Hack — enemy boxes Guide',
		intro:
			'Valorant ESP hack overlays for Valorant — enemy outlines, duelist threat cues, spike and utility markers with distance readouts across Competitive and Spike Rush.',
		imageAlt: 'Valorant ESP hack with hero skeleton, bounding box, and ult tracking labels',
		galleryTitle: 'Valorant ESP hack gallery',
		ctaPrimary: 'Buy Valorant Cheats',
		ctaSecondary: 'ESP controls',
		ctaSecondaryHref: '/valorant-esp/',
		sections: [
			section(
				'What a Valorant ESP hack shows',
				'A Valorant ESP hack renders enemy agent outlines, duelist positions, and spike markers through walls and terrain — closing the information gap before you commit to a fight.',
				'Distance readouts and snapline options help control engagement range during squad pushes and flanking scenarios.',
				'Canonical visibility guide: <a href="/valorant-esp/">Valorant ESP</a>. Wallhack wording: <a href="/valorant-wallhack/">wallhack</a>.',
			),
			section(
				'ESP hack categories for Competitive',
				'Toggle Enemy ESP hack, health bars, chest pins, and duelist cues independently so only round-critical overlays stay active during rotations.',
				'Team and enemy colour coding supports Spike Rush and Competitive.',
				`map and loot changes publish through ${EXT.epic} — keep categories toggled to what the current map rewards.`,
			),
			section(
				'Undetected ESP hack with anti-cheat maintenance',
				'ESP hack modules rebuild after Riot Games anti-cheat and Valorant patches. Check the <a href="/updates/">Updates page</a> before queueing — pair ESP hack awareness with <a href="/valorant-radar/">radar hack</a> for flank reads.',
				'Licenses deliver digitally after checkout on Windows PC — see <a href="/pricing/">Pricing</a>.',
				'Install steps: <a href="/setup/">Setup</a>. Status questions: <a href="/valorant-cheats/">undetected guide</a>.',
			),
		],
	},
	'unlock-all': {
		title: 'Valorant Unlock All 2026 | What It Really Means',
		description:
			'Valorant unlock all explained vs real Valorant Cheats — ESP boxes, soft aim, and radar for PC and controllers. Know what you are buying.',
		h1: 'Valorant Unlock All — What Players Search For',
		intro:
			'Valorant unlock all is a common search term for Valorant — this page clarifies what unlock-all tools claim versus the ESP wallhack, radar hack, and Aimbot tools Valorant Cheats actually provides on Windows PC.',
		imageAlt: 'Valorant ESP boxes and distances on enemy agents in Competitive mission',
		galleryTitle: 'Valorant unlock all guide visuals',
		ctaPrimary: 'Buy Valorant Cheats',
		ctaSecondary: 'See features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'What Valorant unlock all usually means',
				'Valorant unlock all searches often refer to instant access to weapons, camos, skins, or Prime Access tiers. Those claims differ from visibility and combat-assist tools like ESP wallhack and Aimbot.',
				'Valorant Cheats focuses on in-match awareness — Enemy ESP, health bars, radar overlays, and configurable Aimbot — not account-wide cosmetic unlocks.',
				`Cosmetics and Prime Access items are sold through ${EXT.rust}. Be wary of unlock-all downloads that promise free skins — they are often scams.`,
			),
			section(
				'Visibility tools vs unlock-all claims',
				'ESP wallhack helps you spot enemy agents, utility, and the spike during live rounds. Radar hack adds flank awareness; Aimbot covers combat assist with smoothness and hotkey controls.',
				'For loadout planning during a match, spike and utility markers speed site rotates — see the <a href="/valorant-esp/">ESP</a> and <a href="/features/">Features</a> pages for the full tool list.',
				'Related: <a href="/valorant-cheats/">Valorant Cheats</a> and <a href="/valorant-cheats/">best Valorant cheats</a>.',
			),
			section(
				'Buying Valorant Cheats for the right reasons',
				'If you need undetected ESP wallhack, radar hack, and Aimbot for Valorant on Windows PC, compare <a href="/pricing/">Pricing</a> and read the <a href="/setup/">Setup guide</a> before checkout.',
				'Check the <a href="/updates/">Updates page</a> after Riot Games anti-cheat patches — maintenance rebuilds publish for active licenses.',
				'Questions? <a href="/faq/">FAQ</a> and <a href="/support/">Support</a> cover delivery and configuration — not cosmetic unlocks.',
			),
		],
	},
	privacy: {
		title: 'Privacy Policy | Valorant Cheats',
		description:
			'Privacy policy for Valorant Cheats. How we handle support emails, order data, and checkout for Valorant cheats licenses on cheatsforvalorant.com.',
		h1: 'Valorant Cheats Privacy Policy',
		intro: 'How Valorant Cheats handles information when you browse cheatsforvalorant.com or contact support about a Valorant license.',
		imageAlt: 'Valorant ESP overlay visual for privacy policy page',
		galleryTitle: 'Valorant Cheats legal resources',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read terms of use',
		ctaSecondaryHref: '/terms/',
		sections: [
			section(
				'Information we may collect',
				'We may collect contact details you send by email, order references needed to resolve support requests, and basic technical data used to operate and secure the website.',
				'We do not sell personal data. Checkout payment details are processed by the checkout provider — review their privacy terms for transaction data.',
				['Contact details you send by email', 'Order references for support requests', 'Basic technical data for site security'],
			),
			section(
				'How information is used',
				'Information is used to respond to support requests, process order issues, improve site reliability, and meet legal obligations when required.',
				'Analytics may use aggregated traffic data without identifying individual Valorant Cheats customers.',
			),
			section(
				'Your choices and contact',
				'You may request correction or deletion of support email data by contacting support@cheatsforvalorant.com with your request details.',
				'Policy updates publish on this page. Continued use of cheatsforvalorant.com after updates means you accept the revised policy. Also see <a href="/terms/">Terms of Use</a> and <a href="/refund-policy/">Refund Policy</a>.',
			),
		],
	},
	refund: {
		title: 'Refund Policy | Valorant Cheats',
		description:
			'Refund policy for Valorant Cheats. Digital delivery terms and eligibility for Valorant Cheats packages with ESP, soft aim, and radar.',
		h1: 'Valorant Cheats Refund Policy',
		intro:
			'Refund terms for Valorant Cheats licenses — ESP wallhack, radar hack, and Aimbot packages purchased through checkout for Valorant.',
		imageAlt: 'Valorant ESP overlay visual for refund policy page',
		galleryTitle: 'Valorant Cheats billing resources',
		ctaPrimary: 'Contact support',
		ctaSecondary: 'Read privacy policy',
		ctaSecondaryHref: '/privacy-policy/',
		sections: [
			section(
				'Digital delivery and eligibility',
				'Valorant Cheats licenses deliver digitally after payment confirmation. Because access begins immediately, refunds are limited to cases outlined below.',
				'Submit refund requests within 24 hours of purchase with your order ID and reason.',
			),
			section(
				'When refunds may be approved',
				'Duplicate charges, failed delivery despite confirmed payment, or technical activation failures verified by support may qualify for review.',
				'Refund decisions are final. Chargebacks without contacting support first may result in license revocation. See also <a href="/terms/">Terms of Use</a>.',
			),
			section(
				'How to request a refund',
				'Email support@cheatsforvalorant.com with subject "Refund Request", your order ID, purchase date, and issue summary — or use the <a href="/support/">Support page</a>.',
				'Approved refunds process back to the original payment method when possible. Pricing details live on <a href="/pricing/">Pricing</a>.',
			),
		],
	},
	terms: {
		title: 'Terms of Use 2026 | Valorant Cheats Rules',
		description:
			'Terms of use for cheatsforvalorant.com and Valorant Cheats licenses. Usage rules, anti-cheat risk, and liability for PC and controller cheats.',
		h1: 'Valorant Cheats Terms of Use',
		intro: 'Terms governing use of cheatsforvalorant.com and Valorant Cheats licenses for Valorant on Windows PC.',
		imageAlt: 'Valorant ESP overlay visual for terms of use page',
		galleryTitle: 'Valorant Cheats legal pages',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read privacy policy',
		ctaSecondaryHref: '/privacy-policy/',
		sections: [
			section(
				'Acceptance and license scope',
				'By purchasing or using Valorant Cheats you agree to these terms. Licenses grant personal use of ESP wallhack, radar, and Aimbot tools for Valorant on Windows PC only.',
				'Sharing, reselling, or reverse-engineering the package violates these terms and may revoke access.',
			),
			section(
				'Risk and anti-cheat disclaimer',
				`Using cheats in Valorant may violate Riot Games terms and result in account penalties. Valorant Cheats provides maintenance but does not guarantee undetected status or account safety.`,
				'You assume all risk. We are not liable for bans, data loss, or damages arising from product use. See also <a href="/valorant-cheats/">undetected status</a>.',
			),
			section(
				'Changes and governing law',
				'We may update these terms by posting revisions on this page. Continued use after changes constitutes acceptance.',
				'Contact support@cheatsforvalorant.com for questions. Related policies: <a href="/privacy-policy/">Privacy</a> and <a href="/refund-policy/">Refunds</a>.',
			),
		],
	},
};

/** Attach heroImage paths and clamp meta lengths. */
export function finalizePage(pageId, page) {
	return {
		...page,
		title: clampTitle(stripZadeyoFromMeta(page.title)),
		description: clampDesc(stripZadeyoFromMeta(page.description)),
		heroImage: HERO_IMAGES[pageId],
	};
}

export function finalizePages(pages) {
	const out = {};
	for (const [id, page] of Object.entries(pages)) {
		out[id] = finalizePage(id, page);
	}
	return out;
}

export const englishPagesFinal = finalizePages(enPages);
