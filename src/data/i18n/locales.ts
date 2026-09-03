export type LocaleCode =
	| 'en'
	| 'es'
	| 'fr'
	| 'de'
	| 'pt'
	| 'it'
	| 'nl'
	| 'pl'
	| 'ru'
	| 'tr'
	| 'ar'
	| 'ja'
	| 'ko'
	| 'zh'
	| 'hi'
	| 'id'
	| 'th'
	| 'vi'
	| 'uk'
	| 'cs'
	| 'ro'
	| 'sv';

export type LocaleMeta = {
	code: LocaleCode;
	name: string;
	nativeName: string;
	hreflang: string;
	ogLocale: string;
	dir: 'ltr' | 'rtl';
	region: string;
};

/**
 * UI locales (language switcher / `/{lang}/…` routes).
 * All locales are included in sitemaps and indexable.
 * @see `seoIndexableLocales`, `includeLocaleUrlsInSitemap`
 */
export const locales: LocaleMeta[] = [
	{ code: 'en', name: 'English', nativeName: 'English', hreflang: 'en', ogLocale: 'en_US', dir: 'ltr', region: 'Worldwide' },
	{ code: 'es', name: 'Spanish', nativeName: 'Español', hreflang: 'es', ogLocale: 'es_ES', dir: 'ltr', region: 'Spain & Latin America' },
	{ code: 'fr', name: 'French', nativeName: 'Français', hreflang: 'fr', ogLocale: 'fr_FR', dir: 'ltr', region: 'France & Africa' },
	{ code: 'de', name: 'German', nativeName: 'Deutsch', hreflang: 'de', ogLocale: 'de_DE', dir: 'ltr', region: 'Germany & DACH' },
	{ code: 'pt', name: 'Portuguese', nativeName: 'Português', hreflang: 'pt', ogLocale: 'pt_BR', dir: 'ltr', region: 'Brazil & Portugal' },
	{ code: 'it', name: 'Italian', nativeName: 'Italiano', hreflang: 'it', ogLocale: 'it_IT', dir: 'ltr', region: 'Italy' },
	{ code: 'nl', name: 'Dutch', nativeName: 'Nederlands', hreflang: 'nl', ogLocale: 'nl_NL', dir: 'ltr', region: 'Netherlands & Belgium' },
	{ code: 'pl', name: 'Polish', nativeName: 'Polski', hreflang: 'pl', ogLocale: 'pl_PL', dir: 'ltr', region: 'Poland' },
	{ code: 'ru', name: 'Russian', nativeName: 'Русский', hreflang: 'ru', ogLocale: 'ru_RU', dir: 'ltr', region: 'Russia & CIS' },
	{ code: 'tr', name: 'Turkish', nativeName: 'Türkçe', hreflang: 'tr', ogLocale: 'tr_TR', dir: 'ltr', region: 'Turkey' },
	{ code: 'ar', name: 'Arabic', nativeName: 'العربية', hreflang: 'ar', ogLocale: 'ar_SA', dir: 'rtl', region: 'Middle East & North Africa' },
	{ code: 'ja', name: 'Japanese', nativeName: '日本語', hreflang: 'ja', ogLocale: 'ja_JP', dir: 'ltr', region: 'Japan' },
	{ code: 'ko', name: 'Korean', nativeName: '한국어', hreflang: 'ko', ogLocale: 'ko_KR', dir: 'ltr', region: 'South Korea' },
	{ code: 'zh', name: 'Chinese', nativeName: '中文', hreflang: 'zh', ogLocale: 'zh_CN', dir: 'ltr', region: 'China & Singapore' },
	{ code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', hreflang: 'hi', ogLocale: 'hi_IN', dir: 'ltr', region: 'India' },
	{ code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia', hreflang: 'id', ogLocale: 'id_ID', dir: 'ltr', region: 'Indonesia' },
	{ code: 'th', name: 'Thai', nativeName: 'ไทย', hreflang: 'th', ogLocale: 'th_TH', dir: 'ltr', region: 'Thailand' },
	{ code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt', hreflang: 'vi', ogLocale: 'vi_VN', dir: 'ltr', region: 'Vietnam' },
	{ code: 'uk', name: 'Ukrainian', nativeName: 'Українська', hreflang: 'uk', ogLocale: 'uk_UA', dir: 'ltr', region: 'Ukraine' },
	{ code: 'cs', name: 'Czech', nativeName: 'Čeština', hreflang: 'cs', ogLocale: 'cs_CZ', dir: 'ltr', region: 'Czech Republic' },
	{ code: 'ro', name: 'Romanian', nativeName: 'Română', hreflang: 'ro', ogLocale: 'ro_RO', dir: 'ltr', region: 'Romania' },
	{ code: 'sv', name: 'Swedish', nativeName: 'Svenska', hreflang: 'sv', ogLocale: 'sv_SE', dir: 'ltr', region: 'Sweden & Nordics' },
];

/** Official / canonical locale — English global pages at site root. */
export const defaultLocale: LocaleCode = 'en';

export const localeCodes = locales.map((l) => l.code);

/** All locales are indexable and listed in per-locale sitemaps. */
export const seoIndexableLocales: readonly LocaleCode[] = localeCodes;

/** Include localized URLs in per-locale sitemaps and sitemap-i18n.xml. */
export const includeLocaleUrlsInSitemap = true;

export const localeMap = Object.fromEntries(locales.map((l) => [l.code, l])) as Record<
	LocaleCode,
	LocaleMeta
>;

export function isLocaleCode(value: string): value is LocaleCode {
	return localeCodes.includes(value as LocaleCode);
}

export function getLocale(code: string): LocaleMeta | undefined {
	return isLocaleCode(code) ? localeMap[code] : undefined;
}

/** UI strings for blog index pages per locale. */
export const blogUi: Record<
	LocaleCode,
	{
		blogTitle: string;
		blogDescription: string;
		blogH1: string;
		blogIntro: string;
		readMore: string;
		published: string;
		updated: string;
		relatedPosts: string;
		allPosts: string;
		home: string;
		language: string;
	}
> = {
	en: {
		blogTitle: 'Valorant Guides & Blog | Game Tips & Product Intel',
		blogDescription:
			'Valorant game guides on Competitive, map rotations, factions, missions, and patch notes — plus ESP, aimbot, and anti-cheat product guides with official Wiki links.',
		blogH1: 'Valorant Guides & Intel',
		blogIntro:
			'Game guides for Competitive, map rotations farming, factions, mission types, and patch notes — linked to the Valorant Wiki and Riot Games. Plus product guides for ESP, soft aim, radar, and anti-cheat maintenance.',
		readMore: 'Read guide',
		published: 'Published',
		updated: 'Updated',
		relatedPosts: 'Related Valorant guides',
		allPosts: 'All blog posts',
		home: 'Valorant Cheats home',
		language: 'Language',
	},
	es: {
		blogTitle: 'Blog Valorant Cheats 2026 | Guías en 22 idiomas',
		blogDescription:
			'Blog de Valorant Cheats con guías de trucos indetectables, ESP wallhack, radar y Aimbot para Valorant en PC Windows.',
		blogH1: 'Blog Valorant Cheats — Guías globales',
		blogIntro:
			'Guías SEO de trucos Valorant indetectables, ESP wallhack, radar hack, Aimbot y mantenimiento Riot Games anti-cheat (EAC) en 22 idiomas.',
		readMore: 'Leer guía',
		published: 'Publicado',
		updated: 'Actualizado',
		relatedPosts: 'Guías Valorant relacionadas',
		allPosts: 'Todos los artículos',
		home: 'Inicio Valorant Cheats',
		language: 'Idioma',
	},
	fr: {
		blogTitle: 'Blog Valorant Cheats 2026 | Guides en 22 langues',
		blogDescription:
			'Blog Valorant Cheats : triches indétectables, ESP wallhack, radar et Aimbot pour Valorant sur PC Windows.',
		blogH1: 'Blog Valorant Cheats — Guides mondiaux',
		blogIntro:
			'Guides SEO triches Valorant indétectables, ESP wallhack, radar hack, Aimbot et Riot Games anti-cheat (EAC) en 22 langues.',
		readMore: 'Lire le guide',
		published: 'Publié',
		updated: 'Mis à jour',
		relatedPosts: 'Guides Valorant associés',
		allPosts: 'Tous les articles',
		home: 'Accueil Valorant Cheats',
		language: 'Langue',
	},
	de: {
		blogTitle: 'Valorant Cheats Blog 2026 | Guides in 22 Sprachen',
		blogDescription:
			'Valorant Cheats Blog mit undetected ESP, Wallhack, Radar und Aimbot Guides für Valorant auf Windows PC.',
		blogH1: 'Valorant Cheats Blog — Globale Guides',
		blogIntro:
			'SEO-Guides für undetected Valorant Cheats, ESP Wallhack, Radar Hack, Aimbot und Riot Games anti-cheat (EAC) in 22 Sprachen.',
		readMore: 'Guide lesen',
		published: 'Veröffentlicht',
		updated: 'Aktualisiert',
		relatedPosts: 'Verwandte Valorant Guides',
		allPosts: 'Alle Beiträge',
		home: 'Valorant Cheats Start',
		language: 'Sprache',
	},
	pt: {
		blogTitle: 'Blog Valorant Cheats 2026 | Guias em 22 idiomas',
		blogDescription:
			'Blog Valorant Cheats com guias de cheats indetectáveis, ESP wallhack, radar e Aimbot para Valorant no PC.',
		blogH1: 'Blog Valorant Cheats — Guias globais',
		blogIntro:
			'Guias SEO de cheats Valorant indetectáveis, ESP wallhack, radar hack, Aimbot e Riot Games anti-cheat (EAC) em 22 idiomas.',
		readMore: 'Ler guia',
		published: 'Publicado',
		updated: 'Atualizado',
		relatedPosts: 'Guias Valorant relacionados',
		allPosts: 'Todos os posts',
		home: 'Início Valorant Cheats',
		language: 'Idioma',
	},
	it: {
		blogTitle: 'Blog Valorant Cheats 2026 | Guide in 22 lingue',
		blogDescription:
			'Blog Valorant Cheats con guide cheat indetectable, ESP wallhack, radar e Aimbot per Valorant su PC Windows.',
		blogH1: 'Blog Valorant Cheats — Guide globali',
		blogIntro:
			'Guide SEO cheat Valorant indetectable, ESP wallhack, radar hack, Aimbot e Riot Games anti-cheat (EAC) in 22 lingue.',
		readMore: 'Leggi guida',
		published: 'Pubblicato',
		updated: 'Aggiornato',
		relatedPosts: 'Guide Valorant correlate',
		allPosts: 'Tutti gli articoli',
		home: 'Home Valorant Cheats',
		language: 'Lingua',
	},
	nl: {
		blogTitle: 'Valorant Cheats Blog 2026 | Gidsen in 22 talen',
		blogDescription:
			'Valorant Cheats blog met undetected ESP, wallhack, radar en Aimbot gidsen voor Valorant op Windows PC.',
		blogH1: 'Valorant Cheats Blog — Wereldwijde gidsen',
		blogIntro:
			'SEO-gidsen voor undetected Valorant cheats, ESP wallhack, radar hack, Aimbot en Riot Games anti-cheat (EAC) in 22 talen.',
		readMore: 'Lees gids',
		published: 'Gepubliceerd',
		updated: 'Bijgewerkt',
		relatedPosts: 'Gerelateerde Valorant gidsen',
		allPosts: 'Alle posts',
		home: 'Valorant Cheats home',
		language: 'Taal',
	},
	pl: {
		blogTitle: 'Blog Valorant Cheats 2026 | Poradniki w 22 językach',
		blogDescription:
			'Blog Valorant Cheats z poradnikami undetected ESP, wallhack, radar i Aimbot dla Valorant na PC.',
		blogH1: 'Blog Valorant Cheats — Globalne poradniki',
		blogIntro:
			'Poradniki SEO undetected cheatów Valorant, ESP wallhack, radar hack, Aimbot i Riot Games anti-cheat (EAC) w 22 językach.',
		readMore: 'Czytaj poradnik',
		published: 'Opublikowano',
		updated: 'Zaktualizowano',
		relatedPosts: 'Powiązane poradniki Valorant',
		allPosts: 'Wszystkie artykuły',
		home: 'Strona główna Valorant Cheats',
		language: 'Język',
	},
	ru: {
		blogTitle: 'Блог Valorant Cheats 2026 | Гайды на 22 языках',
		blogDescription:
			'Блог Valorant Cheats: undetected ESP, wallhack, radar и Aimbot для Valorant на Windows PC.',
		blogH1: 'Блог Valorant Cheats — Глобальные гайды',
		blogIntro:
			'SEO-гайды по undetected читам Valorant, ESP wallhack, radar hack, Aimbot и Riot Games anti-cheat (EAC) на 22 языках.',
		readMore: 'Читать гайд',
		published: 'Опубликовано',
		updated: 'Обновлено',
		relatedPosts: 'Похожие гайды Valorant',
		allPosts: 'Все статьи',
		home: 'Главная Valorant Cheats',
		language: 'Язык',
	},
	tr: {
		blogTitle: 'Valorant Cheats Blog 2026 | 22 dilde rehberler',
		blogDescription:
			'Valorant Cheats blog: undetected ESP, wallhack, radar ve Aimbot rehberleri Valorant Windows PC.',
		blogH1: 'Valorant Cheats Blog — Küresel rehberler',
		blogIntro:
			'Undetected Valorant hileleri, ESP wallhack, radar hack, Aimbot ve Riot Games anti-cheat (EAC) SEO rehberleri 22 dilde.',
		readMore: 'Rehberi oku',
		published: 'Yayınlandı',
		updated: 'Güncellendi',
		relatedPosts: 'İlgili Valorant rehberleri',
		allPosts: 'Tüm yazılar',
		home: 'Valorant Cheats ana sayfa',
		language: 'Dil',
	},
	ar: {
		blogTitle: 'مدونة Valorant Cheats 2026 | أدلة بـ 22 لغة',
		blogDescription:
			'مدونة Valorant Cheats: غش undetected وESP wallhack ورadar وAimbot لـ Valorant على Windows PC.',
		blogH1: 'مدونة Valorant Cheats — أدلة عالمية',
		blogIntro:
			'أدلة SEO لغش Valorant undetected وESP wallhack ورadar hack وAimbot وRiot Games anti-cheat (EAC) بـ 22 لغة.',
		readMore: 'اقرأ الدليل',
		published: 'نُشر',
		updated: 'تم التحديث',
		relatedPosts: 'أدلة Valorant ذات صلة',
		allPosts: 'جميع المقالات',
		home: 'الرئيسية Valorant Cheats',
		language: 'اللغة',
	},
	ja: {
		blogTitle: 'Valorant Cheats ブログ 2026 | 22言語ガイド',
		blogDescription:
			'Valorant Cheatsブログ：undetected ESP、wallhack、radar、Aimbotガイド。Valorant Windows PC向け。',
		blogH1: 'Valorant Cheats ブログ — グローバルガイド',
		blogIntro:
			'undetected Valorantチート、ESP wallhack、radar hack、Aimbot、Riot Games anti-cheat (EAC)のSEOガイドを22言語で提供。',
		readMore: 'ガイドを読む',
		published: '公開日',
		updated: '更新日',
		relatedPosts: '関連Valorantガイド',
		allPosts: 'すべての記事',
		home: 'Valorant Cheats ホーム',
		language: '言語',
	},
	ko: {
		blogTitle: 'Valorant Cheats 블로그 2026 | 22개 언어 가이드',
		blogDescription:
			'Valorant Cheats 블로그: undetected ESP, wallhack, radar, Aimbot 가이드. Valorant Windows PC.',
		blogH1: 'Valorant Cheats 블로그 — 글로벌 가이드',
		blogIntro:
			'undetected Valorant 치트, ESP wallhack, radar hack, Aimbot, Riot Games anti-cheat (EAC) SEO 가이드를 22개 언어로 제공.',
		readMore: '가이드 읽기',
		published: '게시일',
		updated: '업데이트',
		relatedPosts: '관련 Valorant 가이드',
		allPosts: '모든 게시물',
		home: 'Valorant Cheats 홈',
		language: '언어',
	},
	zh: {
		blogTitle: 'Valorant Cheats 博客 2026 | 22种语言指南',
		blogDescription:
			'Valorant Cheats博客：undetected ESP、wallhack、radar和Aimbot指南，适用于Valorant Windows PC。',
		blogH1: 'Valorant Cheats 博客 — 全球指南',
		blogIntro:
			'undetected Valorant作弊、ESP wallhack、radar hack、Aimbot和Riot Games anti-cheat (EAC)的SEO指南，共22种语言。',
		readMore: '阅读指南',
		published: '发布',
		updated: '更新',
		relatedPosts: '相关Valorant指南',
		allPosts: '所有文章',
		home: 'Valorant Cheats 首页',
		language: '语言',
	},
	hi: {
		blogTitle: 'Valorant Cheats ब्लॉग 2026 | 22 भाषाओं में गाइड',
		blogDescription:
			'Valorant Cheats ब्लॉग: undetected ESP, wallhack, radar और Aimbot गाइड Valorant Windows PC के लिए।',
		blogH1: 'Valorant Cheats ब्लॉग — वैश्विक गाइड',
		blogIntro:
			'undetected Valorant cheats, ESP wallhack, radar hack, Aimbot और Riot Games anti-cheat (EAC) SEO गाइड 22 भाषाओं में।',
		readMore: 'गाइड पढ़ें',
		published: 'प्रकाशित',
		updated: 'अपडेट',
		relatedPosts: 'संबंधित Valorant गाइड',
		allPosts: 'सभी पोस्ट',
		home: 'Valorant Cheats होम',
		language: 'भाषा',
	},
	id: {
		blogTitle: 'Blog Valorant Cheats 2026 | Panduan 22 bahasa',
		blogDescription:
			'Blog Valorant Cheats: panduan undetected ESP, wallhack, radar dan Aimbot untuk Valorant di PC Windows.',
		blogH1: 'Blog Valorant Cheats — Panduan global',
		blogIntro:
			'Panduan SEO cheat Valorant undetected, ESP wallhack, radar hack, Aimbot dan Riot Games anti-cheat (EAC) dalam 22 bahasa.',
		readMore: 'Baca panduan',
		published: 'Dipublikasikan',
		updated: 'Diperbarui',
		relatedPosts: 'Panduan Valorant terkait',
		allPosts: 'Semua artikel',
		home: 'Beranda Valorant Cheats',
		language: 'Bahasa',
	},
	th: {
		blogTitle: 'บล็อก Valorant Cheats 2026 | คู่มือ 22 ภาษา',
		blogDescription:
			'บล็อก Valorant Cheats: คู่มือ undetected ESP, wallhack, radar และ Aimbot สำหรับ Valorant บน PC',
		blogH1: 'บล็อก Valorant Cheats — คู่มือทั่วโลก',
		blogIntro:
			'คู่มือ SEO สำหรับ cheat Valorant undetected, ESP wallhack, radar hack, Aimbot และ Riot Games anti-cheat (EAC) 22 ภาษา',
		readMore: 'อ่านคู่มือ',
		published: 'เผยแพร่',
		updated: 'อัปเดต',
		relatedPosts: 'คู่มือ Valorant ที่เกี่ยวข้อง',
		allPosts: 'บทความทั้งหมด',
		home: 'หน้าแรก Valorant Cheats',
		language: 'ภาษา',
	},
	vi: {
		blogTitle: 'Blog Valorant Cheats 2026 | Hướng dẫn 22 ngôn ngữ',
		blogDescription:
			'Blog Valorant Cheats: hướng dẫn undetected ESP, wallhack, radar và Aimbot cho Valorant trên PC.',
		blogH1: 'Blog Valorant Cheats — Hướng dẫn toàn cầu',
		blogIntro:
			'Hướng dẫn SEO cheat Valorant undetected, ESP wallhack, radar hack, Aimbot và Riot Games anti-cheat (EAC) bằng 22 ngôn ngữ.',
		readMore: 'Đọc hướng dẫn',
		published: 'Xuất bản',
		updated: 'Cập nhật',
		relatedPosts: 'Hướng dẫn Valorant liên quan',
		allPosts: 'Tất cả bài viết',
		home: 'Trang chủ Valorant Cheats',
		language: 'Ngôn ngữ',
	},
	uk: {
		blogTitle: 'Блог Valorant Cheats 2026 | Гайди 22 мовами',
		blogDescription:
			'Блог Valorant Cheats: undetected ESP, wallhack, radar та Aimbot для Valorant на Windows PC.',
		blogH1: 'Блог Valorant Cheats — Глобальні гайди',
		blogIntro:
			'SEO-гайди з undetected читів Valorant, ESP wallhack, radar hack, Aimbot та Riot Games anti-cheat (EAC) 22 мовами.',
		readMore: 'Читати гайд',
		published: 'Опубліковано',
		updated: 'Оновлено',
		relatedPosts: "Пов'язані гайди Valorant",
		allPosts: 'Усі статті',
		home: 'Головна Valorant Cheats',
		language: 'Мова',
	},
	cs: {
		blogTitle: 'Blog Valorant Cheats 2026 | Průvodce ve 22 jazycích',
		blogDescription:
			'Blog Valorant Cheats: undetected ESP, wallhack, radar a Aimbot pro Valorant na Windows PC.',
		blogH1: 'Blog Valorant Cheats — Globální průvodce',
		blogIntro:
			'SEO průvodce undetected Valorant cheaty, ESP wallhack, radar hack, Aimbot a Riot Games anti-cheat (EAC) ve 22 jazycích.',
		readMore: 'Číst průvodce',
		published: 'Publikováno',
		updated: 'Aktualizováno',
		relatedPosts: 'Související Valorant průvodce',
		allPosts: 'Všechny články',
		home: 'Domů Valorant Cheats',
		language: 'Jazyk',
	},
	ro: {
		blogTitle: 'Blog Valorant Cheats 2026 | Ghiduri în 22 de limbi',
		blogDescription:
			'Blog Valorant Cheats: ghiduri undetected ESP, wallhack, radar și Aimbot pentru Valorant pe PC.',
		blogH1: 'Blog Valorant Cheats — Ghiduri globale',
		blogIntro:
			'Ghiduri SEO cheat-uri Valorant undetected, ESP wallhack, radar hack, Aimbot și Riot Games anti-cheat (EAC) în 22 de limbi.',
		readMore: 'Citește ghidul',
		published: 'Publicat',
		updated: 'Actualizat',
		relatedPosts: 'Ghiduri Valorant related',
		allPosts: 'Toate articolele',
		home: 'Acasă Valorant Cheats',
		language: 'Limbă',
	},
	sv: {
		blogTitle: 'Valorant Cheats Blogg 2026 | Guider på 22 språk',
		blogDescription:
			'Valorant Cheats blogg med undetected ESP, wallhack, radar och Aimbot guider för Valorant på PC.',
		blogH1: 'Valorant Cheats Blogg — Globala guider',
		blogIntro:
			'SEO-guider för undetected Valorant cheats, ESP wallhack, radar hack, Aimbot och Riot Games anti-cheat (EAC) på 22 språk.',
		readMore: 'Läs guide',
		published: 'Publicerad',
		updated: 'Uppdaterad',
		relatedPosts: 'Relaterade Valorant guider',
		allPosts: 'Alla inlägg',
		home: 'Valorant Cheats hem',
		language: 'Språk',
	},
};
