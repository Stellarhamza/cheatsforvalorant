import { siteConfig } from './site';

const img = (name: string) => `/images/${name}`;

/** Homepage hero poster — from Riot Games HTML. */
export const valorantHeroImage = '/images/valorant-cheats-hero.jpg';
export const valorantHeroPoster = '/images/hero-poster.png';
export const valorantHeroVideo = '/videos/hero-cinematic.mp4';
export const valorantBrandLogo = '/images/valorant-logo-mark.png';

export type ValorantScreenshot = {
	src: string;
	alt: string;
	title: string;
};

/** Valorant visuals — sourced from Riot / Valorant press assets. */
export const valorantScreenshots = {
	mainMenu: {
		src: img('valorant-cheats-main-menu.jpg'),
		alt: 'Valorant cheats menu preview on Windows PC',
		title: 'Valorant Cheats main menu',
	},
	espOverlay: {
		src: img('valorant-esp-wallhack-overlay.jpg'),
		alt: 'Valorant agent lineup with ESP wallhack overlay concept',
		title: 'Valorant ESP wallhack overlay',
	},
	espBoxes: {
		src: img('valorant-esp-enemy-boxes.jpg'),
		alt: 'Valorant agent ESP bounding boxes in Competitive',
		title: 'Valorant ESP enemy boxes',
	},
	aimbotMenu: {
		src: img('valorant-aimbot-targeting-menu.jpg'),
		alt: 'Valorant Champions Tour arena with aimbot targeting overlay',
		title: 'Valorant aimbot targeting',
	},
	radarMinimap: {
		src: img('valorant-radar-hack-minimap.png'),
		alt: 'Valorant Champions Tour branding for radar hack module',
		title: 'Valorant radar hack',
	},
	combatEsp: {
		src: img('valorant-cheats-combat-esp.jpg'),
		alt: 'Valorant Competitive match with ESP overlays active',
		title: 'Valorant combat ESP',
	},
	competitiveEsp: {
		src: img('valorant-competitive-esp.jpg'),
		alt: 'Valorant Champions Tour stage with competitive ESP preview',
		title: 'Valorant Competitive ESP',
	},
	aimbotCombat: {
		src: img('valorant-aimbot-combat.jpg'),
		alt: 'Valorant esports combat scene with aimbot assist preview',
		title: 'Valorant aimbot combat',
	},
	mapRadar: {
		src: img('valorant-map-radar.jpg'),
		alt: 'Valorant agent roster with map radar overlay concept',
		title: 'Valorant map radar',
	},
	abilityEsp: {
		src: img('valorant-ability-esp.jpg'),
		alt: 'Valorant agent ability and utility ESP markers',
		title: 'Valorant ability ESP',
	},
	settingsPanel: {
		src: img('valorant-cheats-settings-panel.jpg'),
		alt: 'Valorant cheats settings panel with hotkeys and module toggles',
		title: 'Valorant cheats settings panel',
	},
} as const satisfies Record<string, ValorantScreenshot>;

/** Pricing gallery — main viewer + thumbnail strip. */
export const pricingGallery: ValorantScreenshot[] = [
	valorantScreenshots.mainMenu,
	valorantScreenshots.espOverlay,
	valorantScreenshots.espBoxes,
	valorantScreenshots.aimbotMenu,
	valorantScreenshots.radarMinimap,
	valorantScreenshots.combatEsp,
	valorantScreenshots.competitiveEsp,
	valorantScreenshots.aimbotCombat,
	valorantScreenshots.mapRadar,
	valorantScreenshots.abilityEsp,
	valorantScreenshots.settingsPanel,
];

/** Feature page section screenshots keyed to productFeatureDetails ids. */
export const featureSectionImages: Record<'aimbot' | 'visual' | 'misc', ValorantScreenshot> = {
	aimbot: valorantScreenshots.aimbotCombat,
	visual: valorantScreenshots.espOverlay,
	misc: valorantScreenshots.radarMinimap,
};

/** Extra visuals shown below the feature breakdown grid. */
export const featureGallery: ValorantScreenshot[] = [
	valorantScreenshots.mainMenu,
	valorantScreenshots.espBoxes,
	valorantScreenshots.aimbotMenu,
	valorantScreenshots.combatEsp,
	valorantScreenshots.competitiveEsp,
	valorantScreenshots.mapRadar,
	valorantScreenshots.abilityEsp,
	valorantScreenshots.settingsPanel,
];

const s = valorantScreenshots;

export const valorantImages = {
	hero: valorantHeroImage,
	heroPoster: valorantHeroPoster,
	heroVideo: valorantHeroVideo,
	cover: s.espOverlay.src,
	logo: valorantBrandLogo,
	loadoutBuilder: s.aimbotMenu.src,
	aimbotCombat: s.aimbotCombat.src,
	squadFight: s.combatEsp.src,
	espWallhack: s.espBoxes.src,
	cheatsPackage: s.mainMenu.src,
	headerArt: s.settingsPanel.src,
	battleRoyaleCombat: s.competitiveEsp.src,
	rebootFight: s.radarMinimap.src,
	playerEsp: s.espOverlay.src,
	radarHack: s.radarMinimap.src,
	zeroBuildCombat: s.combatEsp.src,
	zeroBuildMode: s.espBoxes.src,
	openWorldTileset: s.mapRadar.src,
	battleRoyaleIsland: s.competitiveEsp.src,
	product: [
		{ src: s.espOverlay.src, alt: s.espOverlay.alt },
		{ src: s.espBoxes.src, alt: s.espBoxes.alt },
		{ src: s.aimbotCombat.src, alt: s.aimbotCombat.alt },
		{ src: s.aimbotMenu.src, alt: s.aimbotMenu.alt },
		{ src: s.radarMinimap.src, alt: s.radarMinimap.alt },
	],
	gallery: [
		{ src: s.mainMenu.src, alt: s.mainMenu.alt, href: '/valorant-cheats/' },
		{ src: s.espOverlay.src, alt: s.espOverlay.alt, href: '/valorant-esp/' },
		{ src: s.espBoxes.src, alt: s.espBoxes.alt, href: '/valorant-wallhack/' },
		{ src: s.aimbotCombat.src, alt: s.aimbotCombat.alt, href: '/valorant-aimbot/' },
		{ src: s.settingsPanel.src, alt: s.settingsPanel.alt, href: '/features/' },
		{ src: s.radarMinimap.src, alt: s.radarMinimap.alt, href: '/valorant-radar/' },
		{ src: s.combatEsp.src, alt: s.combatEsp.alt, href: '/valorant-cheats/' },
	],
	sitemap: [
		{ src: s.mainMenu.src, title: 'Valorant Cheats | Undetected ESP & Aimbot', caption: s.mainMenu.alt },
		{ src: s.espOverlay.src, title: 'Valorant ESP overlay', caption: s.espOverlay.alt },
		{ src: s.espBoxes.src, title: 'Valorant wallhack ESP', caption: s.espBoxes.alt },
		{ src: s.aimbotCombat.src, title: 'Valorant aimbot targeting', caption: s.aimbotCombat.alt },
		{ src: s.aimbotMenu.src, title: 'Valorant aimbot menu', caption: s.aimbotMenu.alt },
		{ src: s.radarMinimap.src, title: 'Valorant radar hack', caption: s.radarMinimap.alt },
		{ src: s.combatEsp.src, title: 'Valorant Competitive cheats', caption: s.combatEsp.alt },
		{ src: s.competitiveEsp.src, title: 'Valorant Competitive ESP', caption: s.competitiveEsp.alt },
		{ src: s.mapRadar.src, title: 'Valorant map radar', caption: s.mapRadar.alt },
		{ src: s.abilityEsp.src, title: 'Valorant ability ESP', caption: s.abilityEsp.alt },
		{ src: s.settingsPanel.src, title: 'Valorant cheats settings panel', caption: s.settingsPanel.alt },
	],
} as const;
