import { siteConfig } from '../site';
import {
	defaultLocale,
	localeCodes,
	type LocaleCode,
	locales,
} from './locales';

/** Canonical page identifiers shared across all locales. */
export type PageId =
	| 'home'
	| 'valorant-esp'
	| 'valorant-aimbot'
	| 'features'
	| 'pricing'
	| 'setup'
	| 'updates'
	| 'faq'
	| 'support'
	| 'undetected'
	| 'wallhack'
	| 'radar'
	| 'eac-bypass'
	| 'cheats-2026'
	| 'hacks'
	| 'cheat-download'
	| 'mod-menu'
	| 'soft-aim'
	| 'best-cheats'
	| 'aimbot-hack'
	| 'esp-hack'
	| 'unlock-all'
	| 'privacy'
	| 'refund'
	| 'terms';

/** English (official) paths — served at site root without /en/ prefix. */
export const englishPaths: Record<PageId, string> = {
	home: '/',
	'valorant-esp': '/valorant-esp/',
	'valorant-aimbot': '/valorant-aimbot/',
	features: '/features/',
	pricing: '/pricing/',
	setup: '/setup/',
	updates: '/updates/',
	faq: '/faq/',
	support: '/support/',
	undetected: '/valorant-cheats/',
	wallhack: '/valorant-wallhack/',
	radar: '/valorant-radar/',
	'eac-bypass': '/valorant-cheats/',
	'cheats-2026': '/valorant-cheats/',
	hacks: '/valorant-cheats/',
	'cheat-download': '/pricing/',
	'mod-menu': '/features/',
	'soft-aim': '/valorant-aimbot/',
	'best-cheats': '/valorant-cheats/',
	'aimbot-hack': '/valorant-aimbot/',
	'esp-hack': '/valorant-esp/',
	'unlock-all': '/features/',
	privacy: '/privacy-policy/',
	refund: '/refund-policy/',
	terms: '/terms/',
};

/**
 * Core English pages for sitemap.xml — focused valorant-cheats URLs only.
 * Thin keyword-duplicate landings redirect to these canonical pages.
 */
export const sitemapPageIds: PageId[] = [
	'home',
	'hacks',
	'valorant-esp',
	'valorant-aimbot',
	'wallhack',
	'radar',
	'features',
	'pricing',
	'setup',
	'updates',
	'faq',
	'support',
	'privacy',
	'refund',
	'terms',
];

/**
 * Localized URL slugs (path after /{lang}/).
 * English uses englishPaths at root; other locales use these slugs under /{lang}/.
 */
export const localizedSlugs: Record<PageId, Record<LocaleCode, string>> = {
	home: {
		en: '',
		es: '',
		fr: '',
		de: '',
		pt: '',
		it: '',
		nl: '',
		pl: '',
		ru: '',
		tr: '',
		ar: '',
		ja: '',
		ko: '',
		zh: '',
		hi: '',
		id: '',
		th: '',
		vi: '',
		uk: '',
		cs: '',
		ro: '',
		sv: '',
	},
	'valorant-esp': {
		en: 'valorant-esp',
		es: 'trucos-valorant-esp',
		fr: 'triche-valorant-esp',
		de: 'valorant-esp-wallhack',
		pt: 'cheats-valorant-esp',
		it: 'trucchi-valorant-esp',
		nl: 'valorant-esp-wallhack',
		pl: 'cheaty-valorant-esp',
		ru: 'valorant-esp-chity',
		tr: 'valorant-esp-hile',
		ar: 'valorant-esp-wallhack',
		ja: 'valorant-esp-wallhack',
		ko: 'valorant-esp-wallhack',
		zh: 'valorant-esp-wallhack',
		hi: 'valorant-esp-wallhack',
		id: 'valorant-esp-wallhack',
		th: 'valorant-esp-wallhack',
		vi: 'valorant-esp-wallhack',
		uk: 'valorant-esp-chity',
		cs: 'valorant-esp-wallhack',
		ro: 'valorant-esp-wallhack',
		sv: 'valorant-esp-wallhack',
	},
	'valorant-aimbot': {
		en: 'valorant-aimbot',
		es: 'trucos-valorant-aimbot',
		fr: 'triche-valorant-aimbot',
		de: 'valorant-aimbot',
		pt: 'cheats-valorant-aimbot',
		it: 'trucchi-valorant-aimbot',
		nl: 'valorant-aimbot',
		pl: 'cheaty-valorant-aimbot',
		ru: 'valorant-aimbot-chity',
		tr: 'valorant-aimbot-hile',
		ar: 'valorant-aimbot',
		ja: 'valorant-aimbot',
		ko: 'valorant-aimbot',
		zh: 'valorant-aimbot',
		hi: 'valorant-aimbot',
		id: 'valorant-aimbot',
		th: 'valorant-aimbot',
		vi: 'valorant-aimbot',
		uk: 'valorant-aimbot-chity',
		cs: 'valorant-aimbot',
		ro: 'valorant-aimbot',
		sv: 'valorant-aimbot',
	},
	features: {
		en: 'features',
		es: 'caracteristicas-trucos-valorant',
		fr: 'fonctionnalites-triche-valorant',
		de: 'valorant-cheats-funktionen',
		pt: 'recursos-cheats-valorant',
		it: 'funzioni-trucchi-valorant',
		nl: 'valorant-cheats-functies',
		pl: 'funkcje-cheatow-valorant',
		ru: 'funkcii-chitov-valorant',
		tr: 'valorant-hile-ozellikleri',
		ar: 'valorant-cheats-features',
		ja: 'valorant-cheats-features',
		ko: 'valorant-cheats-features',
		zh: 'valorant-cheats-features',
		hi: 'valorant-cheats-features',
		id: 'valorant-cheats-features',
		th: 'valorant-cheats-features',
		vi: 'valorant-cheats-features',
		uk: 'funkcii-chitiv-valorant',
		cs: 'valorant-cheats-funkce',
		ro: 'functii-cheats-valorant',
		sv: 'valorant-cheats-funktioner',
	},
	pricing: {
		en: 'pricing',
		es: 'precios-trucos-valorant',
		fr: 'prix-triche-valorant',
		de: 'valorant-cheats-preise',
		pt: 'precos-cheats-valorant',
		it: 'prezzi-trucchi-valorant',
		nl: 'valorant-cheats-prijzen',
		pl: 'ceny-cheatow-valorant',
		ru: 'ceny-chitov-valorant',
		tr: 'valorant-hile-fiyatlari',
		ar: 'valorant-cheats-pricing',
		ja: 'valorant-cheats-pricing',
		ko: 'valorant-cheats-pricing',
		zh: 'valorant-cheats-pricing',
		hi: 'valorant-cheats-pricing',
		id: 'valorant-cheats-pricing',
		th: 'valorant-cheats-pricing',
		vi: 'valorant-cheats-pricing',
		uk: 'ciny-chitiv-valorant',
		cs: 'valorant-cheats-ceny',
		ro: 'preturi-cheats-valorant',
		sv: 'valorant-cheats-priser',
	},
	setup: {
		en: 'setup',
		es: 'instalacion-trucos-valorant',
		fr: 'installation-triche-valorant',
		de: 'valorant-cheats-installation',
		pt: 'instalacao-cheats-valorant',
		it: 'installazione-trucchi-valorant',
		nl: 'valorant-cheats-installatie',
		pl: 'instalacja-cheatow-valorant',
		ru: 'ustanovka-chitov-valorant',
		tr: 'valorant-hile-kurulum',
		ar: 'valorant-cheats-setup',
		ja: 'valorant-cheats-setup',
		ko: 'valorant-cheats-setup',
		zh: 'valorant-cheats-setup',
		hi: 'valorant-cheats-setup',
		id: 'valorant-cheats-setup',
		th: 'valorant-cheats-setup',
		vi: 'valorant-cheats-setup',
		uk: 'vstanovka-chitiv-valorant',
		cs: 'valorant-cheats-instalace',
		ro: 'instalare-cheats-valorant',
		sv: 'valorant-cheats-installation',
	},
	updates: {
		en: 'updates',
		es: 'actualizaciones-trucos-valorant',
		fr: 'mises-a-jour-triche-valorant',
		de: 'valorant-cheats-updates',
		pt: 'atualizacoes-cheats-valorant',
		it: 'aggiornamenti-trucchi-valorant',
		nl: 'valorant-cheats-updates',
		pl: 'aktualizacje-cheatow-valorant',
		ru: 'obnovleniya-chitov-valorant',
		tr: 'valorant-hile-guncellemeleri',
		ar: 'valorant-cheats-updates',
		ja: 'valorant-cheats-updates',
		ko: 'valorant-cheats-updates',
		zh: 'valorant-cheats-updates',
		hi: 'valorant-cheats-updates',
		id: 'valorant-cheats-updates',
		th: 'valorant-cheats-updates',
		vi: 'valorant-cheats-updates',
		uk: 'onovlennya-chitiv-valorant',
		cs: 'valorant-cheats-aktualizace',
		ro: 'actualizari-cheats-valorant',
		sv: 'valorant-cheats-uppdateringar',
	},
	faq: {
		en: 'faq',
		es: 'preguntas-trucos-valorant',
		fr: 'faq-triche-valorant',
		de: 'valorant-cheats-faq',
		pt: 'faq-cheats-valorant',
		it: 'faq-trucchi-valorant',
		nl: 'valorant-cheats-faq',
		pl: 'faq-cheatow-valorant',
		ru: 'faq-chitov-valorant',
		tr: 'valorant-hile-sss',
		ar: 'valorant-cheats-faq',
		ja: 'valorant-cheats-faq',
		ko: 'valorant-cheats-faq',
		zh: 'valorant-cheats-faq',
		hi: 'valorant-cheats-faq',
		id: 'valorant-cheats-faq',
		th: 'valorant-cheats-faq',
		vi: 'valorant-cheats-faq',
		uk: 'faq-chitiv-valorant',
		cs: 'valorant-cheats-faq',
		ro: 'faq-cheats-valorant',
		sv: 'valorant-cheats-faq',
	},
	support: {
		en: 'support',
		es: 'soporte-trucos-valorant',
		fr: 'support-triche-valorant',
		de: 'valorant-cheats-support',
		pt: 'suporte-cheats-valorant',
		it: 'supporto-trucchi-valorant',
		nl: 'valorant-cheats-support',
		pl: 'wsparcie-cheatow-valorant',
		ru: 'podderzhka-chitov-valorant',
		tr: 'valorant-hile-destek',
		ar: 'valorant-cheats-support',
		ja: 'valorant-cheats-support',
		ko: 'valorant-cheats-support',
		zh: 'valorant-cheats-support',
		hi: 'valorant-cheats-support',
		id: 'valorant-cheats-support',
		th: 'valorant-cheats-support',
		vi: 'valorant-cheats-support',
		uk: 'pidtrymka-chitiv-valorant',
		cs: 'valorant-cheats-podpora',
		ro: 'suport-cheats-valorant',
		sv: 'valorant-cheats-support',
	},
	undetected: {
		en: 'undetected-valorant-cheats',
		es: 'trucos-valorant-indetectables',
		fr: 'triche-valorant-indetectable',
		de: 'unentdeckte-valorant-cheats',
		pt: 'cheats-valorant-indetectaveis',
		it: 'trucchi-valorant-indetectabili',
		nl: 'undetected-valorant-cheats',
		pl: 'niewykrywalne-cheats-valorant',
		ru: 'nedecektiruemye-chity-valorant',
		tr: 'tespit-edilemeyen-valorant-hileleri',
		ar: 'undetected-valorant-cheats',
		ja: 'undetected-valorant-cheats',
		ko: 'undetected-valorant-cheats',
		zh: 'undetected-valorant-cheats',
		hi: 'undetected-valorant-cheats',
		id: 'undetected-valorant-cheats',
		th: 'undetected-valorant-cheats',
		vi: 'undetected-valorant-cheats',
		uk: 'nedecektovani-chity-valorant',
		cs: 'undetected-valorant-cheats',
		ro: 'cheats-valorant-nedetectabile',
		sv: 'undetected-valorant-cheats',
	},
	wallhack: {
		en: 'valorant-wallhack',
		es: 'wallhack-trucos-valorant',
		fr: 'wallhack-triche-valorant',
		de: 'valorant-wallhack',
		pt: 'wallhack-cheats-valorant',
		it: 'wallhack-trucchi-valorant',
		nl: 'valorant-wallhack',
		pl: 'wallhack-cheatow-valorant',
		ru: 'wallhack-chity-valorant',
		tr: 'valorant-wallhack-hile',
		ar: 'valorant-wallhack',
		ja: 'valorant-wallhack',
		ko: 'valorant-wallhack',
		zh: 'valorant-wallhack',
		hi: 'valorant-wallhack',
		id: 'valorant-wallhack',
		th: 'valorant-wallhack',
		vi: 'valorant-wallhack',
		uk: 'wallhack-chity-valorant',
		cs: 'valorant-wallhack',
		ro: 'wallhack-cheats-valorant',
		sv: 'valorant-wallhack',
	},
	radar: {
		en: 'valorant-radar-hack',
		es: 'radar-hack-trucos-valorant',
		fr: 'radar-hack-triche-valorant',
		de: 'valorant-radar-hack',
		pt: 'radar-hack-cheats-valorant',
		it: 'radar-hack-trucchi-valorant',
		nl: 'valorant-radar-hack',
		pl: 'radar-hack-cheatow-valorant',
		ru: 'radar-hack-chity-valorant',
		tr: 'valorant-radar-hack',
		ar: 'valorant-radar-hack',
		ja: 'valorant-radar-hack',
		ko: 'valorant-radar-hack',
		zh: 'valorant-radar-hack',
		hi: 'valorant-radar-hack',
		id: 'valorant-radar-hack',
		th: 'valorant-radar-hack',
		vi: 'valorant-radar-hack',
		uk: 'radar-hack-chity-valorant',
		cs: 'valorant-radar-hack',
		ro: 'radar-hack-cheats-valorant',
		sv: 'valorant-radar-hack',
	},
	'eac-bypass': {
		en: 'eac-bypass-valorant',
		es: 'eac-bypass-valorant-trucos',
		fr: 'eac-bypass-valorant-triche',
		de: 'eac-bypass-valorant',
		pt: 'eac-bypass-valorant-cheats',
		it: 'eac-bypass-valorant-trucchi',
		nl: 'eac-bypass-valorant',
		pl: 'eac-bypass-valorant-cheatow',
		ru: 'eac-bypass-valorant-chity',
		tr: 'eac-bypass-valorant',
		ar: 'eac-bypass-valorant',
		ja: 'eac-bypass-valorant',
		ko: 'eac-bypass-valorant',
		zh: 'eac-bypass-valorant',
		hi: 'eac-bypass-valorant',
		id: 'eac-bypass-valorant',
		th: 'eac-bypass-valorant',
		vi: 'eac-bypass-valorant',
		uk: 'eac-bypass-valorant-chity',
		cs: 'eac-bypass-valorant',
		ro: 'eac-bypass-valorant-cheats',
		sv: 'eac-bypass-valorant',
	},
	'cheats-2026': {
		en: 'valorant-cheats-2026',
		es: 'trucos-valorant-2026',
		fr: 'triche-valorant-2026',
		de: 'valorant-cheats-2026',
		pt: 'cheats-valorant-2026',
		it: 'trucchi-valorant-2026',
		nl: 'valorant-cheats-2026',
		pl: 'cheaty-valorant-2026',
		ru: 'chity-valorant-2026',
		tr: 'valorant-hileleri-2026',
		ar: 'valorant-cheats-2026',
		ja: 'valorant-cheats-2026',
		ko: 'valorant-cheats-2026',
		zh: 'valorant-cheats-2026',
		hi: 'valorant-cheats-2026',
		id: 'valorant-cheats-2026',
		th: 'valorant-cheats-2026',
		vi: 'valorant-cheats-2026',
		uk: 'chity-valorant-2026',
		cs: 'valorant-cheats-2026',
		ro: 'cheats-valorant-2026',
		sv: 'valorant-cheats-2026',
	},
	hacks: {
		en: 'valorant-cheats',
		es: 'hacks-trucos-valorant',
		fr: 'hacks-triche-valorant',
		de: 'valorant-cheats',
		pt: 'hacks-cheats-valorant',
		it: 'hacks-trucchi-valorant',
		nl: 'valorant-cheats',
		pl: 'hacks-cheatow-valorant',
		ru: 'haksy-chity-valorant',
		tr: 'valorant-hile-hacks',
		ar: 'valorant-cheats',
		ja: 'valorant-cheats',
		ko: 'valorant-cheats',
		zh: 'valorant-cheats',
		hi: 'valorant-cheats',
		id: 'valorant-cheats',
		th: 'valorant-cheats',
		vi: 'valorant-cheats',
		uk: 'haksy-chity-valorant',
		cs: 'valorant-cheats',
		ro: 'hacks-cheats-valorant',
		sv: 'valorant-cheats',
	},
	'cheat-download': {
		en: 'valorant-cheat-download',
		es: 'descarga-trucos-valorant',
		fr: 'telechargement-triche-valorant',
		de: 'valorant-cheat-download',
		pt: 'download-cheats-valorant',
		it: 'download-trucchi-valorant',
		nl: 'valorant-cheat-download',
		pl: 'pobieranie-cheatow-valorant',
		ru: 'skachat-chity-valorant',
		tr: 'valorant-hile-indir',
		ar: 'valorant-cheat-download',
		ja: 'valorant-cheat-download',
		ko: 'valorant-cheat-download',
		zh: 'valorant-cheat-download',
		hi: 'valorant-cheat-download',
		id: 'valorant-cheat-download',
		th: 'valorant-cheat-download',
		vi: 'valorant-cheat-download',
		uk: 'zavantazhennya-chitiv-valorant',
		cs: 'valorant-cheat-download',
		ro: 'descarcare-cheats-valorant',
		sv: 'valorant-cheat-download',
	},
	'mod-menu': {
		en: 'valorant-mod-menu',
		es: 'menu-mod-trucos-valorant',
		fr: 'menu-mod-triche-valorant',
		de: 'valorant-mod-menu',
		pt: 'menu-mod-cheats-valorant',
		it: 'menu-mod-trucchi-valorant',
		nl: 'valorant-mod-menu',
		pl: 'menu-mod-cheatow-valorant',
		ru: 'mod-menu-chity-valorant',
		tr: 'valorant-mod-menu',
		ar: 'valorant-mod-menu',
		ja: 'valorant-mod-menu',
		ko: 'valorant-mod-menu',
		zh: 'valorant-mod-menu',
		hi: 'valorant-mod-menu',
		id: 'valorant-mod-menu',
		th: 'valorant-mod-menu',
		vi: 'valorant-mod-menu',
		uk: 'mod-menu-chity-valorant',
		cs: 'valorant-mod-menu',
		ro: 'meniu-mod-cheats-valorant',
		sv: 'valorant-mod-menu',
	},
	'soft-aim': {
		en: 'valorant-soft-aim',
		es: 'soft-aim-trucos-valorant',
		fr: 'soft-aim-triche-valorant',
		de: 'valorant-soft-aim',
		pt: 'soft-aim-cheats-valorant',
		it: 'soft-aim-trucchi-valorant',
		nl: 'valorant-soft-aim',
		pl: 'soft-aim-cheatow-valorant',
		ru: 'soft-aim-chity-valorant',
		tr: 'valorant-soft-aim',
		ar: 'valorant-soft-aim',
		ja: 'valorant-soft-aim',
		ko: 'valorant-soft-aim',
		zh: 'valorant-soft-aim',
		hi: 'valorant-soft-aim',
		id: 'valorant-soft-aim',
		th: 'valorant-soft-aim',
		vi: 'valorant-soft-aim',
		uk: 'soft-aim-chity-valorant',
		cs: 'valorant-soft-aim',
		ro: 'soft-aim-cheats-valorant',
		sv: 'valorant-soft-aim',
	},
	'best-cheats': {
		en: 'best-valorant-cheats',
		es: 'mejores-trucos-valorant',
		fr: 'meilleures-triches-valorant',
		de: 'beste-valorant-cheats',
		pt: 'melhores-cheats-valorant',
		it: 'migliori-trucchi-valorant',
		nl: 'beste-valorant-cheats',
		pl: 'najlepsze-cheats-valorant',
		ru: 'luchshie-chity-valorant',
		tr: 'en-iyi-valorant-hileleri',
		ar: 'best-valorant-cheats',
		ja: 'best-valorant-cheats',
		ko: 'best-valorant-cheats',
		zh: 'best-valorant-cheats',
		hi: 'best-valorant-cheats',
		id: 'best-valorant-cheats',
		th: 'best-valorant-cheats',
		vi: 'best-valorant-cheats',
		uk: 'naykrashchi-chity-valorant',
		cs: 'nejlepsi-valorant-cheats',
		ro: 'cele-mai-bune-cheats-valorant',
		sv: 'basta-valorant-cheats',
	},
	'aimbot-hack': {
		en: 'valorant-aimbot-hack',
		es: 'aimbot-hack-trucos-valorant',
		fr: 'aimbot-hack-triche-valorant',
		de: 'valorant-aimbot-hack',
		pt: 'aimbot-hack-cheats-valorant',
		it: 'aimbot-hack-trucchi-valorant',
		nl: 'valorant-aimbot-hack',
		pl: 'aimbot-hack-cheatow-valorant',
		ru: 'aimbot-hack-chity-valorant',
		tr: 'valorant-aimbot-hack',
		ar: 'valorant-aimbot-hack',
		ja: 'valorant-aimbot-hack',
		ko: 'valorant-aimbot-hack',
		zh: 'valorant-aimbot-hack',
		hi: 'valorant-aimbot-hack',
		id: 'valorant-aimbot-hack',
		th: 'valorant-aimbot-hack',
		vi: 'valorant-aimbot-hack',
		uk: 'aimbot-hack-chity-valorant',
		cs: 'valorant-aimbot-hack',
		ro: 'aimbot-hack-cheats-valorant',
		sv: 'valorant-aimbot-hack',
	},
	'esp-hack': {
		en: 'valorant-esp-hack',
		es: 'esp-hack-trucos-valorant',
		fr: 'esp-hack-triche-valorant',
		de: 'valorant-esp-hack',
		pt: 'esp-hack-cheats-valorant',
		it: 'esp-hack-trucchi-valorant',
		nl: 'valorant-esp-hack',
		pl: 'esp-hack-cheatow-valorant',
		ru: 'esp-hack-chity-valorant',
		tr: 'valorant-esp-hack',
		ar: 'valorant-esp-hack',
		ja: 'valorant-esp-hack',
		ko: 'valorant-esp-hack',
		zh: 'valorant-esp-hack',
		hi: 'valorant-esp-hack',
		id: 'valorant-esp-hack',
		th: 'valorant-esp-hack',
		vi: 'valorant-esp-hack',
		uk: 'esp-hack-chity-valorant',
		cs: 'valorant-esp-hack',
		ro: 'esp-hack-cheats-valorant',
		sv: 'valorant-esp-hack',
	},
	'unlock-all': {
		en: 'valorant-unlock-all',
		es: 'unlock-all-trucos-valorant',
		fr: 'unlock-all-triche-valorant',
		de: 'valorant-unlock-all',
		pt: 'unlock-all-cheats-valorant',
		it: 'unlock-all-trucchi-valorant',
		nl: 'valorant-unlock-all',
		pl: 'unlock-all-cheatow-valorant',
		ru: 'unlock-all-chity-valorant',
		tr: 'valorant-unlock-all',
		ar: 'valorant-unlock-all',
		ja: 'valorant-unlock-all',
		ko: 'valorant-unlock-all',
		zh: 'valorant-unlock-all',
		hi: 'valorant-unlock-all',
		id: 'valorant-unlock-all',
		th: 'valorant-unlock-all',
		vi: 'valorant-unlock-all',
		uk: 'unlock-all-chity-valorant',
		cs: 'valorant-unlock-all',
		ro: 'unlock-all-cheats-valorant',
		sv: 'valorant-unlock-all',
	},
	privacy: {
		en: 'privacy-policy',
		es: 'politica-privacidad',
		fr: 'politique-confidentialite',
		de: 'datenschutz',
		pt: 'politica-privacidade',
		it: 'privacy-policy',
		nl: 'privacybeleid',
		pl: 'polityka-prywatnosci',
		ru: 'politika-konfidencialnosti',
		tr: 'gizlilik-politikasi',
		ar: 'privacy-policy',
		ja: 'privacy-policy',
		ko: 'privacy-policy',
		zh: 'privacy-policy',
		hi: 'privacy-policy',
		id: 'privacy-policy',
		th: 'privacy-policy',
		vi: 'privacy-policy',
		uk: 'polityka-konfidentsijnosti',
		cs: 'ochrana-osobnich-udaju',
		ro: 'politica-confidentialitate',
		sv: 'integritetspolicy',
	},
	refund: {
		en: 'refund-policy',
		es: 'politica-reembolso',
		fr: 'politique-remboursement',
		de: 'rueckerstattung',
		pt: 'politica-reembolso',
		it: 'politica-rimborso',
		nl: 'terugbetalingsbeleid',
		pl: 'polityka-zwrotow',
		ru: 'politika-vozvrata',
		tr: 'iade-politikasi',
		ar: 'refund-policy',
		ja: 'refund-policy',
		ko: 'refund-policy',
		zh: 'refund-policy',
		hi: 'refund-policy',
		id: 'refund-policy',
		th: 'refund-policy',
		vi: 'refund-policy',
		uk: 'polityka-povorennya',
		cs: 'refund-policy',
		ro: 'politica-rambursare',
		sv: 'aterbetalningspolicy',
	},
	terms: {
		en: 'terms',
		es: 'terminos-uso',
		fr: 'conditions-utilisation',
		de: 'nutzungsbedingungen',
		pt: 'termos-uso',
		it: 'termini-uso',
		nl: 'gebruiksvoorwaarden',
		pl: 'regulamin',
		ru: 'usloviya-ispolzovaniya',
		tr: 'kullanim-kosullari',
		ar: 'terms',
		ja: 'terms',
		ko: 'terms',
		zh: 'terms',
		hi: 'terms',
		id: 'terms',
		th: 'terms',
		vi: 'terms',
		uk: 'umovy-vykorystannya',
		cs: 'podminky-uziti',
		ro: 'termeni-utilizare',
		sv: 'anvandarvillkor',
	},
};

export const pageIds = Object.keys(englishPaths) as PageId[];

export function getLocalizedPath(pageId: PageId, locale: LocaleCode): string {
	if (locale === defaultLocale) {
		return englishPaths[pageId];
	}
	const slug = localizedSlugs[pageId][locale];
	return slug ? `/${locale}/${slug}/` : `/${locale}/`;
}

/** Map English root paths to the correct locale URL (for CTAs and inline links). */
export function localizeInternalHref(href: string, locale: LocaleCode): string {
	if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('#')) {
		return href;
	}
	const trimmed = href.replace(/\/+$/, '') || '/';
	const withSlash = trimmed === '/' ? '/' : `${trimmed}/`;
	for (const pageId of pageIds) {
		const english = englishPaths[pageId];
		if (english === withSlash || english.replace(/\/+$/, '') === trimmed) {
			return getLocalizedPath(pageId, locale);
		}
	}
	return href;
}

export function absoluteLocalizedUrl(pageId: PageId, locale: LocaleCode): string {
	return new URL(getLocalizedPath(pageId, locale), siteConfig.url).href;
}

/**
 * Canonical path for SEO — each locale page canonicalizes to its own localized URL.
 */
export function getCanonicalPath(pageId: PageId, locale: LocaleCode = defaultLocale): string {
	return getLocalizedPath(pageId, locale);
}

export function absoluteCanonicalUrl(pageId: PageId, locale: LocaleCode = defaultLocale): string {
	return absoluteLocalizedUrl(pageId, locale);
}

/** Full hreflang cluster — all locales plus x-default (English). */
export function getHreflangAlternates(pageId: PageId) {
	return [
		...locales.map((locale) => ({
			hreflang: locale.hreflang,
			href: absoluteLocalizedUrl(pageId, locale.code),
		})),
		{ hreflang: 'x-default' as const, href: absoluteLocalizedUrl(pageId, defaultLocale) },
	];
}

export function resolvePageIdFromPath(path: string): PageId | undefined {
	const normalized = path.endsWith('/') ? path : `${path}/`;
	for (const id of pageIds) {
		if (englishPaths[id] === normalized) return id;
	}
	return undefined;
}

export function hreflangLinksXml(pageId: PageId, escapeXml: (v: string) => string): string {
	return getHreflangAlternates(pageId)
		.map(
			(alt) =>
				`    <xhtml:link rel="alternate" hreflang="${escapeXml(alt.hreflang)}" href="${escapeXml(alt.href)}"/>`,
		)
		.join('\n');
}

export function resolvePageFromLocalizedPath(
	locale: LocaleCode,
	slug: string | undefined,
): PageId | undefined {
	if (!slug) return 'home';
	for (const pageId of pageIds) {
		if (localizedSlugs[pageId][locale] === slug) return pageId;
	}
	return undefined;
}

/** Map Accept-Language header to preferred locale (region-aware). */
export function localeFromAcceptLanguage(header: string | null): LocaleCode {
	if (!header) return defaultLocale;
	const prefs = header
		.split(',')
		.map((part) => {
			const [tag, qPart] = part.trim().split(';');
			const q = qPart?.startsWith('q=') ? Number.parseFloat(qPart.slice(2)) : 1;
			return { tag: tag.toLowerCase(), q };
		})
		.sort((a, b) => b.q - a.q);

	for (const { tag } of prefs) {
		const primary = tag.split('-')[0];
		if (localeCodes.includes(primary as LocaleCode)) return primary as LocaleCode;
	}
	return defaultLocale;
}

export function getNavForLocale(locale: LocaleCode, labels: Record<string, string>) {
	const items: { label: string; href: string; pageId?: PageId }[] = [
		{ label: labels.cheats ?? 'Cheats', href: getLocalizedPath('hacks', locale), pageId: 'hacks' },
		{ label: labels.pricing, href: getLocalizedPath('pricing', locale), pageId: 'pricing' },
		{ label: labels.reviews ?? 'Reviews', href: '/reviews/' },
	];
	return items;
}
