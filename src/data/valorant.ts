const img = (name: string) => `/images/${name}`;

/** Homepage hero poster — from Riot Games HTML. */
export const valorantHeroImage = '/images/valorant-cheat-esp-corridor.jpg';
export const valorantHeroPoster = '/images/hero-poster.jpg';
export const valorantHeroVideo = '/videos/hero-cinematic.mp4';
export const valorantBrandLogo = '/images/valorant-logo-mark.png';

export type ValorantScreenshot = {
	src: string;
	alt: string;
	title: string;
};

/** In-game Valorant cheat screenshots (ESP, aimbot, wallhack overlays). */
export const valorantScreenshots = {
	mainMenu: {
		src: img('valorant-cheat-esp-stairs.jpg'),
		alt: 'Valorant ESP wallhack showing enemy skeletons and HP through stairs',
		title: 'Valorant ESP through stairs',
	},
	espOverlay: {
		src: img('valorant-cheat-esp-corridor.jpg'),
		alt: 'Valorant ESP wallhack with agent names, distance, and health bars through walls',
		title: 'Valorant ESP corridor wallhack',
	},
	espBoxes: {
		src: img('valorant-cheat-esp-gekko.jpg'),
		alt: 'Valorant bone ESP and bounding boxes revealing enemies behind geometry',
		title: 'Valorant bone ESP boxes',
	},
	aimbotMenu: {
		src: img('valorant-cheat-aimbot-reyna.jpg'),
		alt: 'Valorant aimbot lock with skeleton ESP and health bar on Reyna',
		title: 'Valorant aimbot targeting',
	},
	radarMinimap: {
		src: img('valorant-cheat-esp-stairs.jpg'),
		alt: 'Valorant ESP radar-style awareness with agent distance markers',
		title: 'Valorant ESP awareness',
	},
	combatEsp: {
		src: img('valorant-cheat-aimbot-knife.jpg'),
		alt: 'Valorant aimbot FOV and ESP overlay during knife fight',
		title: 'Valorant combat ESP',
	},
	competitiveEsp: {
		src: img('valorant-cheat-esp-stairs.jpg'),
		alt: 'Valorant Competitive ESP showing enemy HP and positions through walls',
		title: 'Valorant Competitive ESP',
	},
	aimbotCombat: {
		src: img('valorant-cheat-aimbot-reyna.jpg'),
		alt: 'Valorant aimbot head-lock flare with bounding box ESP in combat',
		title: 'Valorant aimbot combat',
	},
	mapRadar: {
		src: img('valorant-cheat-esp-corridor.jpg'),
		alt: 'Valorant multi-enemy ESP labels with distance and weapon info',
		title: 'Valorant multi-target ESP',
	},
	abilityEsp: {
		src: img('valorant-cheat-scope-yoru.jpg'),
		alt: 'Valorant sniper-scope view with ESP box and skeleton on enemy',
		title: 'Valorant scoped ESP',
	},
	settingsPanel: {
		src: img('valorant-cheat-scope-yoru.jpg'),
		alt: 'Valorant cheat visuals with aimbot reticle and wallhack skeleton ESP',
		title: 'Valorant cheat overlay',
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
