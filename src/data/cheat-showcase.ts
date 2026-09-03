import { getLocalizedPath } from './i18n/routing';
import type { LocaleCode } from './i18n/locales';

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

/**
 * Homepage module grid — one unique screenshot per card.
 * Paths are explicit so shared keys in valorantScreenshots cannot collapse the grid.
 */
export function getCheatShowcase(locale: LocaleCode): CheatShowcaseItem[] {
	return [
		{
			href: getLocalizedPath('valorant-esp', locale),
			label: 'ESP',
			desc: 'Enemy outlines, health, and utility through smokes and walls.',
			icon: 'esp',
			image: '/images/valorant-cheat-esp-corridor.jpg',
			alt: 'Valorant ESP wallhack with agent names, distance, and health bars through walls',
			featured: true,
		},
		{
			href: getLocalizedPath('valorant-aimbot', locale),
			label: 'Aimbot',
			desc: 'Smooth aim assist with FOV, smoothing, and weapon profiles.',
			icon: 'aimbot',
			image: '/images/valorant-cheat-aimbot-reyna.jpg',
			alt: 'Valorant aimbot head-lock with bounding box ESP in combat',
			featured: true,
		},
		{
			href: getLocalizedPath('wallhack', locale),
			label: 'Wallhack',
			desc: 'Track enemy positions through map geometry in real time.',
			icon: 'wallhack',
			image: '/images/valorant-cheat-esp-gekko.jpg',
			alt: 'Valorant bone ESP and bounding boxes revealing enemies behind geometry',
			featured: true,
		},
		{
			href: getLocalizedPath('radar', locale),
			label: 'Radar',
			desc: 'Off-screen radar for flanks, rotates, and spike plants.',
			icon: 'radar',
			image: '/images/valorant-cheat-esp-stairs.jpg',
			alt: 'Valorant ESP distance markers showing enemies through stairs and walls',
			featured: true,
		},
		{
			href: getLocalizedPath('hacks', locale),
			label: 'Full package',
			desc: 'ESP, aimbot, wallhack, and radar in one license.',
			icon: 'package',
			image: '/images/valorant-cheat-aimbot-knife.jpg',
			alt: 'Valorant cheat package overlay with aimbot FOV and ESP during a fight',
		},
		{
			href: getLocalizedPath('setup', locale),
			label: 'Setup',
			desc: 'Install, configure, and tune modules on Windows PC.',
			icon: 'setup',
			image: '/images/valorant-cheat-scope-yoru.jpg',
			alt: 'Valorant scoped ESP view used for setup and aim tuning',
		},
	];
}
