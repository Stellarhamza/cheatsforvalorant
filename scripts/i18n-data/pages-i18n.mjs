import { HERO_IMAGES, clampTitle, clampDesc, section, stripZadeyoFromMeta } from './constants.mjs';
import { phrases } from './phrases.mjs';

/** Page-specific translated meta for home across locales. */
const PAGE_META_HOME = {
	es: { title: 'Valorant Cheats 2026 | ESP, Wallhack y Aimbot', desc: 'Trucos Valorant indetectables para Valorant en PC. ESP wallhack, radar hack y Aimbot con mantenimiento Riot Games anti-cheat. Entrega digital instantánea.', h1: 'Valorant Cheats — ESP, Wallhack y Aimbot indetectables', intro: 'Paquete undetected para Valorant en Windows PC: ESP wallhack, radar y Aimbot con mantenimiento Riot Games anti-cheat tras cada parche.', imageAlt: 'Hero valorant-cheats con ESP wallhack y Aimbot indetectables', gallery: 'Galería Valorant Cheats — ESP, Aimbot y wallhack', cta2: 'Ver funciones', h2a: 'Por qué eligen Valorant Cheats en 2026', h2b: 'ESP wallhack, radar y Aimbot en una licencia', topicA: 'Ideal para leer escuadrones enemigos en misiones y co-op missions.', topicB: 'Una licencia en lugar de herramientas separadas.' },
	fr: { title: 'Valorant Cheats 2026 | ESP, Wallhack et Aimbot', desc: 'Triches Valorant indétectables pour Valorant sur PC. ESP wallhack, radar hack et Aimbot avec maintenance Riot Games anti-cheat. Livraison numérique instantanée.', h1: 'Valorant Cheats — ESP, Wallhack et Aimbot indétectables', intro: 'Pack undetected pour Valorant sur PC Windows : ESP wallhack, radar et Aimbot avec maintenance Riot Games anti-cheat après chaque patch.', imageAlt: 'Hero valorant-cheats avec ESP wallhack et Aimbot indétectables', gallery: 'Galerie Valorant Cheats — ESP, Aimbot et wallhack', cta2: 'Voir les fonctions', h2a: 'Pourquoi choisir Valorant Cheats en 2026', h2b: 'ESP wallhack, radar et Aimbot en une licence', topicA: 'Idéal pour repérer les escouades ennemies en Competitive, Spike Rush et missions en coop.', topicB: 'Une licence au lieu d\'outils séparés.' },
	de: { title: 'Valorant Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected Valorant Cheats für Valorant auf PC. ESP Wallhack, Radar Hack und Aimbot mit Riot Games anti-cheat-Wartung. Sofortige digitale Lieferung.', h1: 'Valorant Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected Windows PC Paket für Valorant: ESP Wallhack, Radar und Aimbot mit Riot Games anti-cheat-Wartung nach jedem Patch.', imageAlt: 'Valorant-cheats Hero mit ESP Wallhack und Aimbot undetected', gallery: 'Valorant Cheats Galerie — ESP, Aimbot und Wallhack', cta2: 'Features ansehen', h2a: 'Warum Valorant Cheats 2026 führt', h2b: 'ESP Wallhack, Radar und Aimbot in einer Lizenz', topicA: 'Ideal um feindliche Squads in missions und co-op missions zu lesen.', topicB: 'Eine Lizenz statt separater Tools.' },
	pt: { title: 'Valorant Cheats 2026 | ESP, Wallhack e Aimbot', desc: 'Cheats Valorant indetectáveis para Valorant no PC. ESP wallhack, radar hack e Aimbot com manutenção Riot Games anti-cheat. Entrega digital instantánea.', h1: 'Valorant Cheats — ESP, Wallhack e Aimbot indetectáveis', intro: 'Pacote undetected para Valorant no Windows PC: ESP wallhack, radar e Aimbot com manutenção Riot Games anti-cheat após cada patch.', imageAlt: 'Hero valorant-cheats com ESP wallhack e Aimbot indetectáveis', gallery: 'Galeria Valorant Cheats — ESP, Aimbot e wallhack', cta2: 'Ver recursos', h2a: 'Por que escolher Valorant Cheats em 2026', h2b: 'ESP wallhack, radar e Aimbot numa licença', topicA: 'Ideal para ler esquadrões inimigos em BR e co-op missions.', topicB: 'Uma licença em vez de ferramentas separadas.' },
	it: { title: 'Valorant Cheats 2026 | ESP, Wallhack e Aimbot', desc: 'Cheat Valorant indetectable per Valorant su PC. ESP wallhack, radar hack e Aimbot con manutenzione Riot Games anti-cheat. Consegna digitale istantanea.', h1: 'Valorant Cheats — ESP, Wallhack e Aimbot indetectable', intro: 'Pacchetto undetected per Valorant su PC Windows: ESP wallhack, radar e Aimbot con manutenzione Riot Games anti-cheat dopo ogni patch.', imageAlt: 'Hero valorant-cheats con ESP wallhack e Aimbot indetectable', gallery: 'Galleria Valorant Cheats — ESP, Aimbot e wallhack', cta2: 'Vedi funzioni', h2a: 'Perché scegliere Valorant Cheats nel 2026', h2b: 'ESP wallhack, radar e Aimbot in una licenza', topicA: 'Ideale per leggere squadre nemiche in missions e co-op missions.', topicB: 'Una licenza invece di tool separati.' },
	nl: { title: 'Valorant Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected Valorant cheats voor Valorant op PC. ESP wallhack, radar hack en Aimbot met Riot Games anti-cheat-onderhoud. Directe digitale levering.', h1: 'Valorant Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected Windows PC pakket voor Valorant: ESP wallhack, radar en Aimbot met Riot Games anti-cheat-onderhoud na elke patch.', imageAlt: 'Valorant-cheats hero met ESP wallhack en Aimbot undetected', gallery: 'Valorant Cheats galerij — ESP, Aimbot en wallhack', cta2: 'Bekijk functies', h2a: 'Waarom Valorant Cheats in 2026', h2b: 'ESP wallhack, radar en Aimbot in één licentie', topicA: 'Ideaal om vijandelijke squads te lezen in missions en co-op missions.', topicB: 'Eén licentie in plaats van losse tools.' },
	pl: { title: 'Valorant Cheats 2026 | ESP, Wallhack i Aimbot', desc: 'Undetected cheaty Valorant dla Valorant na PC. ESP wallhack, radar hack i Aimbot z konserwacją Riot Games anti-cheat. Natychmiastowa dostawa cyfrowa.', h1: 'Valorant Cheats — Undetected ESP, Wallhack i Aimbot', intro: 'Pakiet undetected dla Valorant na Windows PC: ESP wallhack, radar i Aimbot z konserwacją Riot Games anti-cheat po każdym patchu.', imageAlt: 'Hero valorant-cheats z ESP wallhack i Aimbot undetected', gallery: 'Galeria Valorant Cheats — ESP, Aimbot i wallhack', cta2: 'Zobacz funkcje', h2a: 'Dlaczego Valorant Cheats w 2026', h2b: 'ESP wallhack, radar i Aimbot w jednej licencji', topicA: 'Idealny do czytania wrogich squadów w BR i co-op missions.', topicB: 'Jedna licencja zamiast osobnych narzędzi.' },
	ru: { title: 'Valorant Cheats 2026 | ESP, Wallhack и Aimbot', desc: 'Undetected читы Valorant для Valorant на PC. ESP wallhack, radar hack и Aimbot с обслуживанием Riot Games anti-cheat. Мгновенная цифровая доставка.', h1: 'Valorant Cheats — Undetected ESP, Wallhack и Aimbot', intro: 'Undetected пакет для Valorant на Windows PC: ESP wallhack, radar и Aimbot с обслуживанием Riot Games anti-cheat после патчей.', imageAlt: 'Hero valorant-cheats с ESP wallhack и Aimbot undetected', gallery: 'Галерея Valorant Cheats — ESP, Aimbot и wallhack', cta2: 'Смотреть функции', h2a: 'Почему выбирают Valorant Cheats в 2026', h2b: 'ESP wallhack, radar и Aimbot в одной лицензии', topicA: 'Идеально для чтения вражеских отрядов в BR и co-op missions.', topicB: 'Одна лицензия вместо отдельных инструментов.' },
	tr: { title: 'Valorant Cheats 2026 | ESP, Wallhack ve Aimbot', desc: 'Valorant için undetected hileler. ESP wallhack, radar hack ve Aimbot — Riot Games anti-cheat bakımı. Anında dijital teslimat.', h1: 'Valorant Cheats — Undetected ESP, Wallhack ve Aimbot', intro: 'Valorant Windows PC undetected paketi: ESP wallhack, radar ve Aimbot — Riot Games anti-cheat bakımı dahil.', imageAlt: 'Valorant-cheats frame ESP wallhack ve Aimbot undetected', gallery: 'Valorant Cheats galeri — ESP, Aimbot ve wallhack', cta2: 'Özellikleri gör', h2a: '2026\'da neden Valorant Cheats', h2b: 'ESP wallhack, radar ve Aimbot tek lisans', topicA: 'BR ve co-op missions\'da düşman squad okumak için ideal.', topicB: 'Ayrı araçlar yerine tek lisans.' },
	ar: { title: 'Valorant Cheats 2026 | ESP وWallhack وAimbot', desc: 'غش Valorant undetected لـ Valorant على PC. ESP wallhack ورadar hack وAimbot مع صيانة Riot Games anti-cheat. تسليم رقمي فوري.', h1: 'Valorant Cheats — ESP وWallhack وAimbot غير مكتشف', intro: 'حزمة undetected لـ Valorant على Windows PC: ESP wallhack ورadar وAimbot مع صيانة Riot Games anti-cheat.', imageAlt: 'Hero valorant-cheats مع ESP wallhack وAimbot undetected', gallery: 'معرض Valorant Cheats — ESP وAimbot وwallhack', cta2: 'عرض الميزات', h2a: 'لماذا Valorant Cheats في 2026', h2b: 'ESP wallhack ورadar وAimbot في ترخيص واحد', topicA: 'مثالي لقراءة فرق العدو في BR وco-op missions.', topicB: 'ترخيص واحد بدلاً من أدوات منفصلة.' },
	ja: { title: 'Valorant Cheats 2026 | ESP・Wallhack・Aimbot', desc: 'Valorant向けundetectedチート。ESP wallhack、radar hack、Aimbot、Riot Games anti-cheatメンテナンス。即時デジタル配信。', h1: 'Valorant Cheats — Undetected ESP・Wallhack・Aimbot', intro: 'Valorant Windows PC向けundetectedパッケージ：ESP wallhack、radar、Aimbot、Riot Games anti-cheatメンテナンス付き。', imageAlt: 'valorant-cheats frame ESP wallhackとAimbot undetected', gallery: 'Valorant Cheatsギャラリー — ESP、Aimbot、wallhack', cta2: '機能を見る', h2a: '2026年にValorant Cheatsを選ぶ理由', h2b: 'ESP wallhack、radar、Aimbotが1ライセンス', topicA: 'BRとco-op missionsで敵スクワッドを読むのに最適。', topicB: '別ツールではなく1ライセンス。' },
	ko: { title: 'Valorant Cheats 2026 | ESP, Wallhack, Aimbot', desc: 'Valorant undetected 치트. ESP wallhack, radar hack, Aimbot, Riot Games anti-cheat 유지보수. 즉시 디지털 배송.', h1: 'Valorant Cheats — Undetected ESP, Wallhack, Aimbot', intro: 'Valorant Windows PC undetected 패키지: ESP wallhack, radar, Aimbot, Riot Games anti-cheat 유지보수 포함.', imageAlt: 'valorant-cheats frame ESP wallhack 및 Aimbot undetected', gallery: 'Valorant Cheats 갤러리 — ESP, Aimbot, wallhack', cta2: '기능 보기', h2a: '2026년 Valorant Cheats를 선택하는 이유', h2b: 'ESP wallhack, radar, Aimbot 단일 라이선스', topicA: 'BR 및 co-op missions에서 적 분대 읽기에 이상적.', topicB: '별도 도구 대신 단일 라이선스.' },
	zh: { title: 'Valorant Cheats 2026 | ESP、Wallhack、Aimbot', desc: 'Valorant undetected作弊。ESP wallhack、radar hack、Aimbot、Riot Games anti-cheat维护。即时数字交付。', h1: 'Valorant Cheats — Undetected ESP、Wallhack、Aimbot', intro: 'Valorant Windows PC undetected套餐：ESP wallhack、radar、Aimbot，含Riot Games anti-cheat维护。', imageAlt: 'valorant-cheats frame ESP wallhack与Aimbot undetected', gallery: 'Valorant Cheats图库 — ESP、Aimbot、wallhack', cta2: '查看功能', h2a: '2026年选择Valorant Cheats的原因', h2b: 'ESP wallhack、radar、Aimbot单一许可证', topicA: '适合在BR和co-op missions中读取敌方小队。', topicB: '一个许可证而非多个工具。' },
	hi: { title: 'Valorant Cheats 2026 | ESP, Wallhack और Aimbot', desc: 'Valorant undetected cheats. ESP wallhack, radar hack, Aimbot, anti-cheat maintenance. Instant digital delivery.', h1: 'Valorant Cheats — Undetected ESP, Wallhack और Aimbot', intro: 'Valorant Windows PC undetected पैकेज: ESP wallhack, radar, Aimbot, anti-cheat maintenance सहित.', imageAlt: 'valorant-cheats frame ESP wallhack और Aimbot undetected', gallery: 'Valorant Cheats gallery — ESP, Aimbot, wallhack', cta2: 'फ़ीचर्स देखें', h2a: '2026 में Valorant Cheats क्यों', h2b: 'ESP wallhack, radar, Aimbot एक लाइसेंस में', topicA: 'BR और co-op missions में दुश्मन squad पढ़ने के लिए आदर्श.', topicB: 'अलग टूल्स के बजाय एक लाइसेंस.' },
	id: { title: 'Valorant Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Cheat Valorant undetected untuk Valorant di PC. ESP wallhack, radar hack, Aimbot, pemeliharaan Riot Games anti-cheat. Pengiriman digital instan.', h1: 'Valorant Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Paket undetected Valorant di Windows PC: ESP wallhack, radar, Aimbot dengan pemeliharaan Riot Games anti-cheat.', imageAlt: 'Hero valorant-cheats ESP wallhack dan Aimbot undetected', gallery: 'Galeri Valorant Cheats — ESP, Aimbot, wallhack', cta2: 'Lihat fitur', h2a: 'Mengapa Valorant Cheats di 2026', h2b: 'ESP wallhack, radar, Aimbot dalam satu lisensi', topicA: 'Ideal membaca squad musuh di BR dan co-op missions.', topicB: 'Satu lisensi alih-alih alat terpisah.' },
	th: { title: 'Valorant Cheats 2026 | ESP, Wallhack และ Aimbot', desc: 'Cheat Valorant undetected สำหรับ Valorant บน PC. ESP wallhack, radar hack, Aimbot, anti-cheat maintenance. จัดส่งดิจิทัลทันที.', h1: 'Valorant Cheats — Undetected ESP, Wallhack และ Aimbot', intro: 'แพ็ก undetected สำหรับ Valorant บน Windows PC: ESP wallhack, radar, Aimbot พร้อม anti-cheat maintenance', imageAlt: 'Hero valorant-cheats ESP wallhack และ Aimbot undetected', gallery: 'แกลเลอรี Valorant Cheats — ESP, Aimbot, wallhack', cta2: 'ดูฟีเจอร์', h2a: 'ทำไมเลือก Valorant Cheats ปี 2026', h2b: 'ESP wallhack, radar, Aimbot ในใบอนุญาตเดียว', topicA: 'เหมาะสำหรับอ่าน squad ศัตรูใน BR และ co-op missions', topicB: 'ใบอนุญาตเดียวแทนเครื่องมือแยก' },
	vi: { title: 'Valorant Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Cheat Valorant undetected cho Valorant trên PC. ESP wallhack, radar hack, Aimbot, bảo trì Riot Games anti-cheat. Giao hàng kỹ thuật số tức thì.', h1: 'Valorant Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Gói undetected Valorant trên Windows PC: ESP wallhack, radar, Aimbot với bảo trì Riot Games anti-cheat.', imageAlt: 'Hero valorant-cheats ESP wallhack và Aimbot undetected', gallery: 'Thư viện Valorant Cheats — ESP, Aimbot, wallhack', cta2: 'Xem tính năng', h2a: 'Vì sao chọn Valorant Cheats 2026', h2b: 'ESP wallhack, radar, Aimbot trong một giấy phép', topicA: 'Lý tưởng đọc squad địch trong BR và co-op missions.', topicB: 'Một giấy phép thay vì công cụ riêng.' },
	uk: { title: 'Valorant Cheats 2026 | ESP, Wallhack і Aimbot', desc: 'Undetected чіти Valorant для Valorant на PC. ESP wallhack, radar hack, Aimbot, обслуговування Riot Games anti-cheat. Мгновенная цифровая доставка.', h1: 'Valorant Cheats — Undetected ESP, Wallhack і Aimbot', intro: 'Undetected пакет для Valorant на Windows PC: ESP wallhack, radar, Aimbot з обслуговуванням Riot Games anti-cheat.', imageAlt: 'Hero valorant-cheats з ESP wallhack і Aimbot undetected', gallery: 'Галерея Valorant Cheats — ESP, Aimbot, wallhack', cta2: 'Дивитися функції', h2a: 'Чому Valorant Cheats у 2026', h2b: 'ESP wallhack, radar і Aimbot в одній ліцензії', topicA: 'Ідеально для читання ворожих загонів у BR і co-op missions.', topicB: 'Одна ліцензія замість окремих інструментів.' },
	cs: { title: 'Valorant Cheats 2026 | ESP, Wallhack a Aimbot', desc: 'Undetected Valorant cheaty pro Valorant na PC. ESP wallhack, radar hack, Aimbot, údržba Riot Games anti-cheat. Okamžité digitální doručení.', h1: 'Valorant Cheats — Undetected ESP, Wallhack a Aimbot', intro: 'Undetected balíček pro Valorant na Windows PC: ESP wallhack, radar, Aimbot s údržbou Riot Games anti-cheat.', imageAlt: 'Hero valorant-cheats s ESP wallhack a Aimbot undetected', gallery: 'Galerie Valorant Cheats — ESP, Aimbot, wallhack', cta2: 'Zobrazit funkce', h2a: 'Proč Valorant Cheats v roce 2026', h2b: 'ESP wallhack, radar a Aimbot v jedné licenci', topicA: 'Ideální pro čtení nepřátelských squadů v BR a co-op missions.', topicB: 'Jedna licence místo samostatných nástrojů.' },
	ro: { title: 'Valorant Cheats 2026 | ESP, Wallhack și Aimbot', desc: 'Cheats Valorant undetected pentru Valorant pe PC. ESP wallhack, radar hack, Aimbot, mentenanță Riot Games anti-cheat. Livrare digitală instantă.', h1: 'Valorant Cheats — Undetected ESP, Wallhack și Aimbot', intro: 'Pachet undetected Valorant pe Windows PC: ESP wallhack, radar, Aimbot cu mentenanță Riot Games anti-cheat.', imageAlt: 'Hero valorant-cheats cu ESP wallhack și Aimbot undetected', gallery: 'Galerie Valorant Cheats — ESP, Aimbot, wallhack', cta2: 'Vezi funcții', h2a: 'De ce Valorant Cheats în 2026', h2b: 'ESP wallhack, radar și Aimbot într-o licență', topicA: 'Ideal pentru citirea squad-urilor inamice în BR și co-op missions.', topicB: 'O licență în loc de instrumente separate.' },
	sv: { title: 'Valorant Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected Valorant cheats för Valorant på PC. ESP wallhack, radar hack, Aimbot, Riot Games anti-cheat-underhåll. Omedelbar digital leverans.', h1: 'Valorant Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected paket för Valorant på Windows PC: ESP wallhack, radar, Aimbot med Riot Games anti-cheat-underhåll.', imageAlt: 'Valorant-cheats hero med ESP wallhack och Aimbot undetected', gallery: 'Valorant Cheats galleri — ESP, Aimbot, wallhack', cta2: 'Se funktioner', h2a: 'Varför Valorant Cheats 2026', h2b: 'ESP wallhack, radar och Aimbot i en licens', topicA: 'Ideal för att läsa fiendesquads i BR och co-op missions.', topicB: 'En licens istället för separata verktyg.' },
};

function buildHome(locale) {
	const p = phrases[locale];
	const m = PAGE_META_HOME[locale];
	return {
		title: clampTitle(stripZadeyoFromMeta(m.title)),
		description: clampDesc(stripZadeyoFromMeta(m.desc)),
		h1: m.h1,
		intro: m.intro,
		imageAlt: m.imageAlt,
		galleryTitle: m.gallery,
		heroImage: HERO_IMAGES.home,
		ctaPrimary: p.buy,
		ctaSecondary: m.cta2,
		ctaSecondaryHref: '/features/',
		sections: [
			section(m.h2a, p.s1(m.topicA), p.s2()),
			section(m.h2b, p.s1(m.topicB), p.s3()),
		],
	};
}

/** Unique English title/desc tails per page — avoids identical "| ESP wallhack & Aimbot" across locales. */
const PAGE_META_TAILS = {
	'valorant-esp': { suffix: 'enemy boxes & Wallhack', focus: 'enemy boxes, health pickup markers, and wallhack overlays' },
	'valorant-aimbot': { suffix: 'Soft Aim Controls', focus: 'soft aim, FOV, and per-weapon Aimbot profiles' },
	features: { suffix: 'Full Feature List', focus: 'ESP, soft aim, radar, and cloud DMA controls' },
	pricing: { suffix: 'Monthly & Lifetime', focus: '$35 monthly or $150 lifetime licenses' },
	setup: { suffix: 'PC Setup Guide', focus: 'Windows PC activation and first-launch setup' },
	updates: { suffix: 'Anti-cheat maintenance Log', focus: 'anti-cheat patch status and rebuild notes' },
	faq: { suffix: 'Common Answers', focus: 'ESP, soft aim, delivery, and anti-cheat questions' },
	support: { suffix: 'Help & Contact', focus: 'order help and license support contact' },
	undetected: { suffix: 'Anti-cheat safe Status', focus: 'undetected maintenance after Riot Games anti-cheat patches' },
	wallhack: { suffix: 'ESP Visibility', focus: 'wallhack ESP for players, loot, and distance' },
	radar: { suffix: '2D Threat Overlay', focus: '2D radar cues for flanks and rotations' },
	'eac-bypass': { suffix: 'Patch Maintenance', focus: 'how anti-cheat updates are handled for Valorant Cheats' },
	'cheats-2026': { suffix: 'Buyer Guide', focus: '2026 Valorant cheats checklist before checkout' },
	hacks: { suffix: 'ESP Aimbot Guide', focus: 'the Valorant Cheats pillar for ESP and Aimbot' },
	'cheat-download': { suffix: 'Instant Access', focus: 'digital license download after payment' },
	'mod-menu': { suffix: 'In-Game Toggles', focus: 'in-client ESP and soft aim toggles' },
	'soft-aim': { suffix: 'Smooth Aim Settings', focus: 'smooth soft aim settings for PC and controllers' },
	'best-cheats': { suffix: 'Buyer Checklist', focus: 'what to compare before buying Valorant cheats' },
	'aimbot-hack': { suffix: 'Soft Aim Assist', focus: 'undetected Aimbot hack assist for Valorant' },
	'esp-hack': { suffix: 'Boxes & Loot', focus: 'ESP hack boxes, loot pins, and distance' },
	'unlock-all': { suffix: 'What It Means', focus: 'unlock-all searches vs real ESP and Aimbot tools' },
};

function productPage(locale, pageKey, topicName, cta2href) {
	const p = phrases[locale];
	const home = PAGE_META_HOME[locale];
	const meta = PAGE_META_TAILS[pageKey] ?? { suffix: 'Valorant Cheats', focus: 'ESP wallhack, radar, and Aimbot' };
	let titleBase = topicName.includes('2026')
		? `${topicName} | ${meta.suffix}`
		: `${topicName} 2026 | ${meta.suffix}`;
	// Short topic labels (FAQ, Support, etc.) need brand context for usable SERP titles.
	if (titleBase.length < 35) {
		titleBase = `${topicName} 2026 | Valorant Cheats ${meta.suffix}`;
	}
	return {
		title: clampTitle(stripZadeyoFromMeta(titleBase)),
		description: clampDesc(
			stripZadeyoFromMeta(
				`${topicName}: ${meta.focus} for Valorant. ${p.delivery}. anti-cheat maintenance included.`,
			),
		),
		h1: `${topicName} — ${meta.suffix}`,
		intro: p.s1(`${topicName} for ${p.maps}: ${meta.focus}.`),
		imageAlt: `valorant-cheats ${pageKey} ${meta.focus} preview`,
		galleryTitle: `Valorant Cheats ${topicName} gallery`,
		heroImage: HERO_IMAGES[pageKey],
		ctaPrimary: p.buy,
		ctaSecondary: home.cta2,
		ctaSecondaryHref: cta2href,
		sections: [
			section(`${topicName} — ${p.maps}`, p.s1(`Read enemy units with ESP wallhack.`), p.s2()),
			section(`ESP wallhack & ${p.undetected}`, p.s1('Toggle overlays for map rotations missions and Competitive missions.'), p.s3()),
			section(`${p.delivery}`, p.s2(), p.s3()),
		],
	};
}

const TOPIC_NAMES = {
	'valorant-esp': { en: 'Valorant ESP', es: 'Valorant ESP', fr: 'Valorant ESP', de: 'Valorant ESP', pt: 'Valorant ESP', it: 'Valorant ESP', nl: 'Valorant ESP', pl: 'Valorant ESP', ru: 'Valorant ESP', tr: 'Valorant ESP', ar: 'Valorant ESP', ja: 'Valorant ESP', ko: 'Valorant ESP', zh: 'Valorant ESP', hi: 'Valorant ESP', id: 'Valorant ESP', th: 'Valorant ESP', vi: 'Valorant ESP', uk: 'Valorant ESP', cs: 'Valorant ESP', ro: 'Valorant ESP', sv: 'Valorant ESP' },
	'valorant-aimbot': { en: 'Valorant Aimbot', es: 'Valorant Aimbot', fr: 'Valorant Aimbot', de: 'Valorant Aimbot', pt: 'Valorant Aimbot', it: 'Valorant Aimbot', nl: 'Valorant Aimbot', pl: 'Valorant Aimbot', ru: 'Valorant Aimbot', tr: 'Valorant Aimbot', ar: 'Valorant Aimbot', ja: 'Valorant Aimbot', ko: 'Valorant Aimbot', zh: 'Valorant Aimbot', hi: 'Valorant Aimbot', id: 'Valorant Aimbot', th: 'Valorant Aimbot', vi: 'Valorant Aimbot', uk: 'Valorant Aimbot', cs: 'Valorant Aimbot', ro: 'Valorant Aimbot', sv: 'Valorant Aimbot' },
	features: { en: 'Features', es: 'Funciones', fr: 'Fonctions', de: 'Features', pt: 'Recursos', it: 'Funzioni', nl: 'Functies', pl: 'Funkcje', ru: 'Функции', tr: 'Özellikler', ar: 'الميزات', ja: '機能', ko: '기능', zh: '功能', hi: 'फ़ीचर्स', id: 'Fitur', th: 'ฟีเจอร์', vi: 'Tính năng', uk: 'Функції', cs: 'Funkce', ro: 'Funcții', sv: 'Funktioner' },
	pricing: { en: 'Pricing', es: 'Precios', fr: 'Tarifs', de: 'Preise', pt: 'Preços', it: 'Prezzi', nl: 'Prijzen', pl: 'Cennik', ru: 'Цены', tr: 'Fiyatlar', ar: 'الأسعار', ja: '料金', ko: '가격', zh: '价格', hi: 'कीमत', id: 'Harga', th: 'ราคา', vi: 'Giá', uk: 'Ціни', cs: 'Ceny', ro: 'Prețuri', sv: 'Priser' },
	setup: { en: 'Setup', es: 'Instalación', fr: 'Installation', de: 'Setup', pt: 'Instalação', it: 'Setup', nl: 'Setup', pl: 'Instalacja', ru: 'Установка', tr: 'Kurulum', ar: 'التثبيت', ja: 'セットアップ', ko: '설치', zh: '安装', hi: 'सेटअप', id: 'Setup', th: 'ติดตั้ง', vi: 'Cài đặt', uk: 'Встановлення', cs: 'Instalace', ro: 'Instalare', sv: 'Installation' },
	updates: { en: 'Updates', es: 'Actualizaciones', fr: 'Mises à jour', de: 'Updates', pt: 'Atualizações', it: 'Aggiornamenti', nl: 'Updates', pl: 'Aktualizacje', ru: 'Обновления', tr: 'Güncellemeler', ar: 'التحديثات', ja: '更新', ko: '업데이트', zh: '更新', hi: 'अपडेट', id: 'Pembaruan', th: 'อัปเดต', vi: 'Cập nhật', uk: 'Оновлення', cs: 'Aktualizace', ro: 'Actualizări', sv: 'Uppdateringar' },
	faq: { en: 'FAQ', es: 'FAQ', fr: 'FAQ', de: 'FAQ', pt: 'FAQ', it: 'FAQ', nl: 'FAQ', pl: 'FAQ', ru: 'FAQ', tr: 'SSS', ar: 'الأسئلة', ja: 'FAQ', ko: 'FAQ', zh: '常见问题', hi: 'FAQ', id: 'FAQ', th: 'FAQ', vi: 'FAQ', uk: 'FAQ', cs: 'FAQ', ro: 'FAQ', sv: 'FAQ' },
	support: { en: 'Support', es: 'Soporte', fr: 'Support', de: 'Support', pt: 'Suporte', it: 'Supporto', nl: 'Support', pl: 'Wsparcie', ru: 'Поддержка', tr: 'Destek', ar: 'الدعم', ja: 'サポート', ko: '지원', zh: '支持', hi: 'सहायता', id: 'Dukungan', th: 'สนับสนุน', vi: 'Hỗ trợ', uk: 'Підтримка', cs: 'Podpora', ro: 'Suport', sv: 'Support' },
	undetected: { en: 'Undetected Cheats', es: 'Trucos indetectables', fr: 'Triches indétectables', de: 'Undetected Cheats', pt: 'Cheats indetectáveis', it: 'Cheat indetectable', nl: 'Undetected Cheats', pl: 'Cheaty undetected', ru: 'Undetected читы', tr: 'Undetected hileler', ar: 'غش undetected', ja: 'Undetectedチート', ko: 'Undetected 치트', zh: 'Undetected作弊', hi: 'Undetected cheats', id: 'Cheat undetected', th: 'Cheats undetected', vi: 'Cheat undetected', uk: 'Undetected чіти', cs: 'Undetected cheaty', ro: 'Cheats undetected', sv: 'Undetected cheats' },
	wallhack: { en: 'Valorant Wallhack', es: 'Valorant Wallhack', fr: 'Valorant Wallhack', de: 'Valorant Wallhack', pt: 'Valorant Wallhack', it: 'Valorant Wallhack', nl: 'Valorant Wallhack', pl: 'Valorant Wallhack', ru: 'Valorant Wallhack', tr: 'Valorant Wallhack', ar: 'Valorant Wallhack', ja: 'Valorant Wallhack', ko: 'Valorant Wallhack', zh: 'Valorant Wallhack', hi: 'Valorant Wallhack', id: 'Valorant Wallhack', th: 'Valorant Wallhack', vi: 'Valorant Wallhack', uk: 'Valorant Wallhack', cs: 'Valorant Wallhack', ro: 'Valorant Wallhack', sv: 'Valorant Wallhack' },
	radar: { en: 'Radar Hack', es: 'Radar hack', fr: 'Radar hack', de: 'Radar Hack', pt: 'Radar hack', it: 'Radar hack', nl: 'Radar Hack', pl: 'Radar hack', ru: 'Radar hack', tr: 'Radar hack', ar: 'Radar hack', ja: 'Radar Hack', ko: 'Radar Hack', zh: 'Radar Hack', hi: 'Radar Hack', id: 'Radar hack', th: 'Radar Hack', vi: 'Radar hack', uk: 'Radar hack', cs: 'Radar Hack', ro: 'Radar hack', sv: 'Radar Hack' },
	'eac-bypass': { en: 'Anti-cheat bypass', es: 'Bypass Riot Games anti-cheat', fr: 'Bypass Riot Games anti-cheat', de: 'Anti-cheat bypass', pt: 'Bypass Riot Games anti-cheat', it: 'Bypass Riot Games anti-cheat', nl: 'Anti-cheat bypass', pl: 'Bypass Riot Games anti-cheat', ru: 'Bypass Riot Games anti-cheat', tr: 'anti-cheat bypass', ar: 'Bypass Riot Games anti-cheat', ja: 'Anti-cheat bypass', ko: 'Anti-cheat bypass', zh: 'Anti-cheat bypass', hi: 'Anti-cheat bypass', id: 'Bypass Riot Games anti-cheat', th: 'Anti-cheat bypass', vi: 'Bypass Riot Games anti-cheat', uk: 'Bypass Riot Games anti-cheat', cs: 'Anti-cheat bypass', ro: 'Bypass Riot Games anti-cheat', sv: 'Anti-cheat bypass' },
	'cheats-2026': { en: 'Valorant Cheats 2026', es: 'Valorant Cheats 2026', fr: 'Valorant Cheats 2026', de: 'Valorant Cheats 2026', pt: 'Valorant Cheats 2026', it: 'Valorant Cheats 2026', nl: 'Valorant Cheats 2026', pl: 'Valorant Cheats 2026', ru: 'Valorant Cheats 2026', tr: 'Valorant Cheats 2026', ar: 'Valorant Cheats 2026', ja: 'Valorant Cheats 2026', ko: 'Valorant Cheats 2026', zh: 'Valorant Cheats 2026', hi: 'Valorant Cheats 2026', id: 'Valorant Cheats 2026', th: 'Valorant Cheats 2026', vi: 'Valorant Cheats 2026', uk: 'Valorant Cheats 2026', cs: 'Valorant Cheats 2026', ro: 'Valorant Cheats 2026', sv: 'Valorant Cheats 2026' },
	hacks: { en: 'Valorant Cheats', es: 'Valorant Cheats', fr: 'Valorant Cheats', de: 'Valorant Cheats', pt: 'Valorant Cheats', it: 'Valorant Cheats', nl: 'Valorant Cheats', pl: 'Valorant Cheats', ru: 'Valorant Cheats', tr: 'Valorant Cheats', ar: 'Valorant Cheats', ja: 'Valorant Cheats', ko: 'Valorant Cheats', zh: 'Valorant Cheats', hi: 'Valorant Cheats', id: 'Valorant Cheats', th: 'Valorant Cheats', vi: 'Valorant Cheats', uk: 'Valorant Cheats', cs: 'Valorant Cheats', ro: 'Valorant Cheats', sv: 'Valorant Cheats' },
	'cheat-download': { en: 'Valorant Cheats Download', es: 'Descarga Valorant Cheats', fr: 'Téléchargement Valorant Cheats', de: 'Valorant Cheats Download', pt: 'Download Valorant Cheats', it: 'Download Valorant Cheats', nl: 'Valorant Cheats Download', pl: 'Pobieranie Valorant Cheats', ru: 'Скачать Valorant Cheats', tr: 'Valorant Hile İndir', ar: 'Valorant Cheats Download', ja: 'Valorant Cheats Download', ko: 'Valorant Cheats Download', zh: 'Valorant Cheats Download', hi: 'Valorant Cheats Download', id: 'Valorant Cheats Download', th: 'Valorant Cheats Download', vi: 'Valorant Cheats Download', uk: 'Завантаження Valorant Cheats', cs: 'Valorant Cheats Download', ro: 'Descărcare Valorant Cheats', sv: 'Valorant Cheats Download' },
	'mod-menu': { en: 'Valorant Mod Menu', es: 'Valorant Mod Menu', fr: 'Valorant Mod Menu', de: 'Valorant Mod Menu', pt: 'Valorant Mod Menu', it: 'Valorant Mod Menu', nl: 'Valorant Mod Menu', pl: 'Valorant Mod Menu', ru: 'Valorant Mod Menu', tr: 'Valorant Mod Menu', ar: 'Valorant Mod Menu', ja: 'Valorant Mod Menu', ko: 'Valorant Mod Menu', zh: 'Valorant Mod Menu', hi: 'Valorant Mod Menu', id: 'Valorant Mod Menu', th: 'Valorant Mod Menu', vi: 'Valorant Mod Menu', uk: 'Valorant Mod Menu', cs: 'Valorant Mod Menu', ro: 'Valorant Mod Menu', sv: 'Valorant Mod Menu' },
	'soft-aim': { en: 'Valorant Soft Aim', es: 'Valorant Soft Aim', fr: 'Valorant Soft Aim', de: 'Valorant Soft Aim', pt: 'Valorant Soft Aim', it: 'Valorant Soft Aim', nl: 'Valorant Soft Aim', pl: 'Valorant Soft Aim', ru: 'Valorant Soft Aim', tr: 'Valorant Soft Aim', ar: 'Valorant Soft Aim', ja: 'Valorant Soft Aim', ko: 'Valorant Soft Aim', zh: 'Valorant Soft Aim', hi: 'Valorant Soft Aim', id: 'Valorant Soft Aim', th: 'Valorant Soft Aim', vi: 'Valorant Soft Aim', uk: 'Valorant Soft Aim', cs: 'Valorant Soft Aim', ro: 'Valorant Soft Aim', sv: 'Valorant Soft Aim' },
	'best-cheats': { en: 'Best Valorant Cheats', es: 'Mejores Valorant Cheats', fr: 'Meilleures Valorant Cheats', de: 'Beste Valorant Cheats', pt: 'Melhores Valorant Cheats', it: 'Migliori Valorant Cheats', nl: 'Beste Valorant Cheats', pl: 'Najlepsze Valorant Cheats', ru: 'Лучшие Valorant Cheats', tr: 'En İyi Valorant Hileleri', ar: 'Best Valorant Cheats', ja: 'Best Valorant Cheats', ko: 'Best Valorant Cheats', zh: 'Best Valorant Cheats', hi: 'Best Valorant Cheats', id: 'Best Valorant Cheats', th: 'Best Valorant Cheats', vi: 'Best Valorant Cheats', uk: 'Найкращі Valorant Cheats', cs: 'Nejlepší Valorant Cheats', ro: 'Cele mai bune Valorant Cheats', sv: 'Bästa Valorant Cheats' },
	'aimbot-hack': { en: 'Valorant Aimbot Hack', es: 'Valorant Aimbot Hack', fr: 'Valorant Aimbot Hack', de: 'Valorant Aimbot Hack', pt: 'Valorant Aimbot Hack', it: 'Valorant Aimbot Hack', nl: 'Valorant Aimbot Hack', pl: 'Valorant Aimbot Hack', ru: 'Valorant Aimbot Hack', tr: 'Valorant Aimbot Hack', ar: 'Valorant Aimbot Hack', ja: 'Valorant Aimbot Hack', ko: 'Valorant Aimbot Hack', zh: 'Valorant Aimbot Hack', hi: 'Valorant Aimbot Hack', id: 'Valorant Aimbot Hack', th: 'Valorant Aimbot Hack', vi: 'Valorant Aimbot Hack', uk: 'Valorant Aimbot Hack', cs: 'Valorant Aimbot Hack', ro: 'Valorant Aimbot Hack', sv: 'Valorant Aimbot Hack' },
	'esp-hack': { en: 'Valorant ESP Hack', es: 'Valorant ESP Hack', fr: 'Valorant ESP Hack', de: 'Valorant ESP Hack', pt: 'Valorant ESP Hack', it: 'Valorant ESP Hack', nl: 'Valorant ESP Hack', pl: 'Valorant ESP Hack', ru: 'Valorant ESP Hack', tr: 'Valorant ESP Hack', ar: 'Valorant ESP Hack', ja: 'Valorant ESP Hack', ko: 'Valorant ESP Hack', zh: 'Valorant ESP Hack', hi: 'Valorant ESP Hack', id: 'Valorant ESP Hack', th: 'Valorant ESP Hack', vi: 'Valorant ESP Hack', uk: 'Valorant ESP Hack', cs: 'Valorant ESP Hack', ro: 'Valorant ESP Hack', sv: 'Valorant ESP Hack' },
	'unlock-all': { en: 'Valorant Unlock All', es: 'Valorant Unlock All', fr: 'Valorant Unlock All', de: 'Valorant Unlock All', pt: 'Valorant Unlock All', it: 'Valorant Unlock All', nl: 'Valorant Unlock All', pl: 'Valorant Unlock All', ru: 'Valorant Unlock All', tr: 'Valorant Unlock All', ar: 'Valorant Unlock All', ja: 'Valorant Unlock All', ko: 'Valorant Unlock All', zh: 'Valorant Unlock All', hi: 'Valorant Unlock All', id: 'Valorant Unlock All', th: 'Valorant Unlock All', vi: 'Valorant Unlock All', uk: 'Valorant Unlock All', cs: 'Valorant Unlock All', ro: 'Valorant Unlock All', sv: 'Valorant Unlock All' },
};

const CTA2_HREF = {
	'valorant-esp': '/valorant-wallhack/',
	'valorant-aimbot': '/valorant-esp/',
	features: '/pricing/',
	pricing: '/setup/',
	setup: '/support/',
	updates: '/valorant-cheats/',
	faq: '/support/',
	support: '/setup/',
	undetected: '/valorant-cheats/',
	wallhack: '/valorant-esp/',
	radar: '/valorant-esp/',
	'eac-bypass': '/updates/',
	'cheats-2026': '/features/',
	hacks: '/valorant-cheats/',
	'cheat-download': '/setup/',
	'mod-menu': '/features/',
	'soft-aim': '/valorant-aimbot/',
	'best-cheats': '/pricing/',
	'aimbot-hack': '/valorant-aimbot/',
	'esp-hack': '/valorant-esp/',
	'unlock-all': '/features/',
};

function buildLegal(locale, pageKey, kind) {
	const p = phrases[locale];
	const titles = {
		privacy: { es: 'Política de privacidad', fr: 'Politique de confidentialité', de: 'Datenschutz', pt: 'Política de privacidade', it: 'Informativa privacy', nl: 'Privacybeleid', pl: 'Polityka prywatności', ru: 'Политика конфиденциальности', tr: 'Gizlilik politikası', ar: 'سياسة الخصوصية', ja: 'プライバシーポリシー', ko: '개인정보 처리방침', zh: '隐私政策', hi: 'गोपनीयता नीति', id: 'Kebijakan privasi', th: 'นโยบายความเป็นส่วนตัว', vi: 'Chính sách bảo mật', uk: 'Політика конфіденційності', cs: 'Zásady ochrany soukromí', ro: 'Politica de confidențialitate', sv: 'Integritetspolicy' },
		refund: { es: 'Política de reembolso', fr: 'Politique de remboursement', de: 'Rückerstattung', pt: 'Política de reembolso', it: 'Politica di rimborso', nl: 'Restitutiebeleid', pl: 'Polityka zwrotów', ru: 'Политика возврата', tr: 'İade politikası', ar: 'سياسة الاسترداد', ja: '返金ポリシー', ko: '환불 정책', zh: '退款政策', hi: 'रिफंड नीति', id: 'Kebijakan refund', th: 'นโยบายการคืนเงิน', vi: 'Chính sách hoàn tiền', uk: 'Політика повернення', cs: 'Zásady vrácení peněz', ro: 'Politica de rambursare', sv: 'Återbetalningspolicy' },
		terms: { es: 'Términos de uso', fr: 'Conditions d\'utilisation', de: 'Nutzungsbedingungen', pt: 'Termos de uso', it: 'Termini di utilizzo', nl: 'Gebruiksvoorwaarden', pl: 'Warunki użytkowania', ru: 'Условия использования', tr: 'Kullanım şartları', ar: 'شروط الاستخدام', ja: '利用規約', ko: '이용 약관', zh: '使用条款', hi: 'उपयोग की शर्तें', id: 'Syarat penggunaan', th: 'ข้อกำหนดการใช้งาน', vi: 'Điều khoản sử dụng', uk: 'Умови використання', cs: 'Podmínky použití', ro: 'Termeni de utilizare', sv: 'Användarvillkor' },
	};
	const h1 = titles[kind][locale] ?? (kind === 'privacy' ? 'Privacy Policy' : kind === 'refund' ? 'Refund Policy' : 'Terms of Use');
	return {
		title: clampTitle(stripZadeyoFromMeta(`${h1} | Valorant Cheats`)),
		description: clampDesc(stripZadeyoFromMeta(`${h1} for Valorant Cheats — ESP wallhack, Aimbot, ${p.win}.`)),
		h1,
		intro: p.s1(`${h1} for cheatsforvalorant.com and Valorant licenses.`),
		imageAlt: `valorant-cheats ${kind} ESP wallhack Aimbot legal page`,
		galleryTitle: `Valorant Cheats ${kind} resources`,
		heroImage: HERO_IMAGES[pageKey],
		ctaPrimary: locale === 'ar' ? 'مراسلة الدعم' : locale === 'ja' ? 'サポートにメール' : locale === 'ko' ? '지원 이메일' : locale === 'zh' ? '邮件支持' : 'Email support',
		ctaSecondary: kind === 'privacy' ? (locale === 'es' ? 'Leer términos' : locale === 'fr' ? 'Lire conditions' : locale === 'de' ? 'Nutzungsbedingungen' : locale === 'ar' ? 'اقرأ الشروط' : locale === 'ja' ? '利用規約' : 'Read terms') : kind === 'refund' ? (locale === 'es' ? 'Leer privacidad' : 'Read privacy') : (locale === 'es' ? 'Leer privacidad' : 'Read privacy'),
		ctaSecondaryHref: kind === 'privacy' ? '/terms/' : '/privacy-policy/',
		sections: [
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Información que recopilamos' : locale === 'fr' ? 'Informations collectées' : locale === 'de' ? 'Erhobene Daten' : locale === 'ar' ? 'المعلومات التي نجمعها' : locale === 'ja' ? '収集する情報' : 'Information we collect') :
				kind === 'refund' ? (locale === 'es' ? 'Entrega digital' : locale === 'fr' ? 'Livraison numérique' : locale === 'de' ? 'Digitale Lieferung' : locale === 'ar' ? 'التسليم الرقمي' : locale === 'ja' ? 'デジタル配信' : 'Digital delivery') :
				(locale === 'es' ? 'Aceptación de términos' : locale === 'fr' ? 'Acceptation' : locale === 'de' ? 'Annahme' : locale === 'ar' ? 'قبول الشروط' : locale === 'ja' ? '規約への同意' : 'Acceptance of terms'),
				p.s1('Contact email, Zadeyo order references, and basic site security data.'),
				kind === 'privacy' ? 'Payment details are processed by Zadeyo checkout — not stored on cheatsforvalorant.com.' : p.s2(),
			),
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Uso de la información' : locale === 'fr' ? 'Utilisation' : locale === 'de' ? 'Datennutzung' : locale === 'ar' ? 'استخدام المعلومات' : locale === 'ja' ? '情報の利用' : 'How we use data') :
				kind === 'refund' ? (locale === 'es' ? 'Cuándo se aprueba' : locale === 'fr' ? 'Approbation' : locale === 'de' ? 'Genehmigung' : locale === 'ar' ? 'موافقة الاسترداد' : locale === 'ja' ? '返金承認' : 'Refund approval') :
				(locale === 'es' ? 'Riesgos y anti-cheat' : locale === 'fr' ? 'Risques' : locale === 'de' ? 'Risiko' : locale === 'ar' ? 'المخاطر' : locale === 'ja' ? 'リスク' : 'Risk disclaimer'),
				p.s1('Support responses, order resolution, and legal compliance when required.'),
				kind === 'terms' ? 'Using cheats may violate Valorant terms — you assume all ban risk.' : p.s3(),
			),
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Tus derechos' : locale === 'fr' ? 'Vos droits' : locale === 'de' ? 'Ihre Rechte' : locale === 'ar' ? 'حقوقك' : locale === 'ja' ? 'あなたの権利' : 'Your rights') :
				kind === 'refund' ? (locale === 'es' ? 'Cómo solicitar' : locale === 'fr' ? 'Comment demander' : locale === 'de' ? 'Anfrage stellen' : locale === 'ar' ? 'كيفية الطلب' : locale === 'ja' ? '申請方法' : 'How to request') :
				(locale === 'es' ? 'Cambios' : locale === 'fr' ? 'Modifications' : locale === 'de' ? 'Änderungen' : locale === 'ar' ? 'التغييرات' : locale === 'ja' ? '変更' : 'Policy changes'),
				p.legal(),
				'Email: support@cheatsforvalorant.com',
			),
		],
	};
}

/** Build all pages for a non-English locale. */
export function buildPagesForLocale(locale) {
	const pages = { home: buildHome(locale) };
	for (const [pageKey, names] of Object.entries(TOPIC_NAMES)) {
		pages[pageKey] = productPage(locale, pageKey, names[locale], CTA2_HREF[pageKey]);
	}
	for (const kind of ['privacy', 'refund', 'terms']) {
		pages[kind] = buildLegal(locale, kind, kind);
	}
	return pages;
}
