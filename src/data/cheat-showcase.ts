import { getLocalizedPath } from './i18n/routing';
import type { LocaleCode } from './i18n/locales';
import { valorantScreenshots } from './valorant';

export type ModuleIcon = 'esp' | 'aimbot' | 'wallhack' | 'radar' | 'package' | 'setup' | 'pricing';

export type CheatShowcaseItem = {
	href: string;
	label: string;
	desc: string;
	icon: ModuleIcon;
	image: string;
	alt: string;
	featured?: boolean;
};

/** Homepage module grid — cheat features with readable cards. */
export function getCheatShowcase(locale: LocaleCode): CheatShowcaseItem[] {
	const s = valorantScreenshots;

	return [
		{
			href: getLocalizedPath('valorant-esp', locale),
			label: 'ESP',
			desc: 'Enemy outlines, health, and utility through smokes and walls.',
			icon: 'esp',
			image: s.espOverlay.src,
			alt: s.espOverlay.alt,
			featured: true,
		},
		{
			href: getLocalizedPath('valorant-aimbot', locale),
			label: 'Aimbot',
			desc: 'Smooth aim assist with FOV, smoothing, and weapon profiles.',
			icon: 'aimbot',
			image: s.aimbotCombat.src,
			alt: s.aimbotCombat.alt,
			featured: true,
		},
		{
			href: getLocalizedPath('wallhack', locale),
			label: 'Wallhack',
			desc: 'Track enemy positions through map geometry in real time.',
			icon: 'wallhack',
			image: s.espBoxes.src,
			alt: s.espBoxes.alt,
			featured: true,
		},
		{
			href: getLocalizedPath('radar', locale),
			label: 'Radar',
			desc: 'Off-screen radar for flanks, rotates, and spike plants.',
			icon: 'radar',
			image: s.radarMinimap.src,
			alt: s.radarMinimap.alt,
			featured: true,
		},
		{
			href: getLocalizedPath('hacks', locale),
			label: 'Full package',
			desc: 'ESP, aimbot, wallhack, and radar in one license.',
			icon: 'package',
			image: s.combatEsp.src,
			alt: s.combatEsp.alt,
		},
		{
			href: getLocalizedPath('setup', locale),
			label: 'Setup',
			desc: 'Install, configure, and tune modules on Windows PC.',
			icon: 'setup',
			image: s.settingsPanel.src,
			alt: s.settingsPanel.alt,
		},
		{
			href: getLocalizedPath('pricing', locale),
			label: 'Pricing',
			desc: '$35 monthly or $150 lifetime — instant delivery.',
			icon: 'pricing',
			image: s.mainMenu.src,
			alt: s.mainMenu.alt,
		},
	];
}
