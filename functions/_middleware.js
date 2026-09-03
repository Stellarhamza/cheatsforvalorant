import { getHomeLocaleRedirect } from './locale-redirect.js';

const CANONICAL_ORIGIN = 'https://cheatsforvalorant.com';
const APEX_HOST = 'cheatsforvalorant.com';
const WWW_HOST = 'www.cheatsforvalorant.com';

/** Old hosts → canonical apex (301). Never include the apex host itself. */
const LEGACY_HOSTS = new Set([
	'valorantcheats.net',
	'www.valorantcheats.net',
]);

// Keep in sync with public/_redirects (which preserves query strings by default).
// All targets are final canonical URLs — no chains/loops.
const PATH_REDIRECTS = {
	'/sitemap-0.xml': '/sitemap.xml',
	'/fortnite-cheats': '/',
	'/fortnite-cheats/': '/',
	'/fortnite-hacks': '/valorant-cheats/',
	'/fortnite-hacks/': '/valorant-cheats/',
	'/fortnite-aimbot': '/valorant-aimbot/',
	'/fortnite-aimbot/': '/valorant-aimbot/',
	'/fortnite-esp': '/valorant-esp/',
	'/fortnite-esp/': '/valorant-esp/',
	'/fortnite-wallhack': '/valorant-wallhack/',
	'/fortnite-wallhack/': '/valorant-wallhack/',
	'/undetected-fortnite-cheats': '/valorant-cheats/',
	'/undetected-fortnite-cheats/': '/valorant-cheats/',
	'/eac-bypass-fortnite': '/valorant-cheats/',
	'/eac-bypass-fortnite/': '/valorant-cheats/',
	'/eac-bypass': '/valorant-cheats/',
	'/eac-bypass/': '/valorant-cheats/',
	'/warzone-aimbot': '/valorant-aimbot/',
	'/warzone-aimbot/': '/valorant-aimbot/',
	'/warzone-esp': '/valorant-esp/',
	'/warzone-esp/': '/valorant-esp/',
	'/ricochet-bypass': '/valorant-cheats/',
	'/ricochet-bypass/': '/valorant-cheats/',
	'/arc-raiders-hacks': '/valorant-cheats/',
	'/arc-raiders-hacks/': '/valorant-cheats/',
	'/arc-raiders-esp': '/valorant-esp/',
	'/arc-raiders-esp/': '/valorant-esp/',
	'/arc-raiders-aimbot': '/valorant-aimbot/',
	'/arc-raiders-aimbot/': '/valorant-aimbot/',
	'/arc-raiders-wallhack': '/valorant-wallhack/',
	'/arc-raiders-wallhack/': '/valorant-wallhack/',
	'/arc-raiders-radar': '/valorant-radar/',
	'/arc-raiders-radar/': '/valorant-radar/',
	'/overwatch-hacks': '/valorant-cheats/',
	'/overwatch-hacks/': '/valorant-cheats/',
	'/overwatch-esp': '/valorant-esp/',
	'/overwatch-esp/': '/valorant-esp/',
	'/overwatch-aimbot': '/valorant-aimbot/',
	'/overwatch-aimbot/': '/valorant-aimbot/',
	'/overwatch-wallhack': '/valorant-wallhack/',
	'/overwatch-wallhack/': '/valorant-wallhack/',
	'/overwatch-radar': '/valorant-radar/',
	'/overwatch-radar/': '/valorant-radar/',
	'/war-thunder-hacks': '/valorant-cheats/',
	'/war-thunder-hacks/': '/valorant-cheats/',
	'/war-thunder-esp': '/valorant-esp/',
	'/war-thunder-esp/': '/valorant-esp/',
	'/war-thunder-aimbot': '/valorant-aimbot/',
	'/war-thunder-aimbot/': '/valorant-aimbot/',
	'/war-thunder-wallhack': '/valorant-wallhack/',
	'/war-thunder-wallhack/': '/valorant-wallhack/',
	'/war-thunder-radar': '/valorant-radar/',
	'/war-thunder-radar/': '/valorant-radar/',
	'/rust-hacks': '/valorant-cheats/',
	'/rust-hacks/': '/valorant-cheats/',
	'/rust-aimbot': '/valorant-aimbot/',
	'/rust-aimbot/': '/valorant-aimbot/',
	'/rust-esp': '/valorant-esp/',
	'/rust-esp/': '/valorant-esp/',
	'/warframe-cheats': '/valorant-cheats/',
	'/warframe-cheats/': '/valorant-cheats/',
	'/warframe-esp': '/valorant-esp/',
	'/warframe-esp/': '/valorant-esp/',
	'/warframe-aimbot': '/valorant-aimbot/',
	'/warframe-aimbot/': '/valorant-aimbot/',
	'/warframe-wallhack': '/valorant-wallhack/',
	'/warframe-wallhack/': '/valorant-wallhack/',
	'/warframe-radar': '/valorant-radar/',
	'/warframe-radar/': '/valorant-radar/',
	'/warframe-radar-hack': '/valorant-radar/',
	'/warframe-radar-hack/': '/valorant-radar/',
	'/undetected-warframe-cheats': '/valorant-cheats/',
	'/undetected-warframe-cheats/': '/valorant-cheats/',
	'/eac-bypass-warframe': '/valorant-cheats/',
	'/eac-bypass-warframe/': '/valorant-cheats/',
	'/warframe-cheats-2026': '/valorant-cheats/',
	'/warframe-cheats-2026/': '/valorant-cheats/',
	'/best-warframe-cheats': '/valorant-cheats/',
	'/best-warframe-cheats/': '/valorant-cheats/',
	'/warframe-cheat-download': '/pricing/',
	'/warframe-cheat-download/': '/pricing/',
	'/warframe-mod-menu': '/features/',
	'/warframe-mod-menu/': '/features/',
	'/warframe-soft-aim': '/valorant-aimbot/',
	'/warframe-soft-aim/': '/valorant-aimbot/',
	'/warframe-aimbot-hack': '/valorant-aimbot/',
	'/warframe-aimbot-hack/': '/valorant-aimbot/',
	'/warframe-esp-hack': '/valorant-esp/',
	'/warframe-esp-hack/': '/valorant-esp/',
	'/warframe-unlock-all': '/features/',
	'/warframe-unlock-all/': '/features/',
	'/valorant-esp': '/valorant-esp/',
	'/valorant-aimbot': '/valorant-aimbot/',
	'/valorant-wallhack': '/valorant-wallhack/',
	'/valorant-radar': '/valorant-radar/',
	'/valorant-radar-hack': '/valorant-radar/',
	'/valorant-radar-hack/': '/valorant-radar/',
	'/undetected-valorant-cheats': '/valorant-cheats/',
	'/undetected-valorant-cheats/': '/valorant-cheats/',
	'/eac-bypass-valorant': '/valorant-cheats/',
	'/eac-bypass-valorant/': '/valorant-cheats/',
	'/valorant-cheats-2026': '/valorant-cheats/',
	'/valorant-cheats-2026/': '/valorant-cheats/',
	'/best-valorant-cheats': '/valorant-cheats/',
	'/best-valorant-cheats/': '/valorant-cheats/',
	'/valorant-cheat-download': '/pricing/',
	'/valorant-cheat-download/': '/pricing/',
	'/valorant-mod-menu': '/features/',
	'/valorant-mod-menu/': '/features/',
	'/valorant-soft-aim': '/valorant-aimbot/',
	'/valorant-soft-aim/': '/valorant-aimbot/',
	'/valorant-aimbot-hack': '/valorant-aimbot/',
	'/valorant-aimbot-hack/': '/valorant-aimbot/',
	'/valorant-esp-hack': '/valorant-esp/',
	'/valorant-esp-hack/': '/valorant-esp/',
	'/valorant-unlock-all': '/features/',
	'/valorant-unlock-all/': '/features/',
	'/blog/elitefn-vs-valorant-cheats-two-week-test': '/blog/voidcheats-vs-valorant-cheats-two-week-test/',
	'/blog/elitefn-vs-valorant-cheats-two-week-test/': '/blog/voidcheats-vs-valorant-cheats-two-week-test/',
	'/blog/elitefn-vs-warframe-cheats-two-week-test': '/blog/voidcheats-vs-valorant-cheats-two-week-test/',
	'/blog/elitefn-vs-warframe-cheats-two-week-test/': '/blog/voidcheats-vs-valorant-cheats-two-week-test/',
};

const SECURITY_HEADERS = {
	'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
	'X-Content-Type-Options': 'nosniff',
	'Referrer-Policy': 'strict-origin-when-cross-origin',
	'X-Frame-Options': 'DENY',
	'Cross-Origin-Opener-Policy': 'same-origin',
	'Cross-Origin-Resource-Policy': 'same-origin',
	'Cross-Origin-Embedder-Policy': 'credentialless',
	'Origin-Agent-Cluster': '?1',
	'Permissions-Policy':
		'accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()',
	'Content-Security-Policy': [
		"default-src 'self'",
		"base-uri 'self'",
		"object-src 'none'",
		"frame-ancestors 'none'",
		"form-action 'self' https://zadeyo.com",
		"img-src 'self' data: blob: https:",
		"media-src 'self'",
		"font-src 'self' data:",
		"style-src 'self' 'unsafe-inline'",
		"script-src 'self' 'unsafe-inline'",
		"connect-src 'self'",
		"upgrade-insecure-requests",
		"trusted-types default",
		"require-trusted-types-for 'script'",
	].join('; '),
};

function getClientProtocol(request) {
	const visitor = request.headers.get('cf-visitor');
	if (visitor) {
		try {
			const scheme = JSON.parse(visitor).scheme;
			if (scheme) return String(scheme).toLowerCase();
		} catch {
			// ignore malformed cf-visitor
		}
	}

	const forwarded = request.headers.get('x-forwarded-proto');
	if (forwarded) {
		return forwarded.split(',')[0].trim().toLowerCase();
	}

	return new URL(request.url).protocol.replace(':', '').toLowerCase();
}

function applySecurityHeaders(headers, { html = false } = {}) {
	for (const [key, value] of Object.entries(SECURITY_HEADERS)) {
		headers.set(key, value);
	}

	if (html) {
		const contentType = headers.get('Content-Type') || '';
		if (!/charset=/i.test(contentType)) {
			headers.set('Content-Type', 'text/html; charset=utf-8');
		}
		headers.set('Cache-Control', 'public, max-age=0, must-revalidate');
		headers.set('CDN-Cache-Control', 'no-store');
		headers.set('Cloudflare-CDN-Cache-Control', 'no-store');
	}
}

export async function onRequest(context) {
	const url = new URL(context.request.url);
	const host = url.hostname.toLowerCase();
	const proto = getClientProtocol(context.request);

	const isLegacyHost = LEGACY_HOSTS.has(host);
	const isProductionHost = host === APEX_HOST || host === WWW_HOST || isLegacyHost;
	const needsHostRedirect = host === WWW_HOST || isLegacyHost;
	const needsHttpsRedirect = isProductionHost && proto === 'http';

	if (needsHostRedirect || needsHttpsRedirect) {
		const mappedPath = PATH_REDIRECTS[url.pathname] ?? url.pathname;
		const target = new URL(mappedPath + url.search, CANONICAL_ORIGIN);
		const headers = new Headers({
			Location: target.toString(),
			'Cache-Control': 'no-store',
			'CDN-Cache-Control': 'no-store',
			'Cloudflare-CDN-Cache-Control': 'no-store',
		});
		applySecurityHeaders(headers);
		return new Response(null, { status: 301, headers });
	}

	const pathRedirect = PATH_REDIRECTS[url.pathname];
	if (pathRedirect) {
		const headers = new Headers({
			Location: new URL(pathRedirect + url.search, CANONICAL_ORIGIN).toString(),
			'Cache-Control': 'no-store',
		});
		applySecurityHeaders(headers);
		return new Response(null, { status: 301, headers });
	}

	const homeLocaleRedirect = getHomeLocaleRedirect(
		url.pathname,
		url.search,
		context.request.headers,
	);
	if (homeLocaleRedirect) {
		const headers = new Headers({
			Location: new URL(homeLocaleRedirect + url.search, CANONICAL_ORIGIN).toString(),
			'Cache-Control': 'no-store',
		});
		applySecurityHeaders(headers);
		return new Response(null, { status: 302, headers });
	}

	const response = await context.next();
	const headers = new Headers(response.headers);
	const contentType = headers.get('Content-Type') || '';
	const isHtml = contentType.includes('text/html');

	applySecurityHeaders(headers, { html: isHtml });

	return new Response(response.body, {
		status: response.status,
		statusText: response.statusText,
		headers,
	});
}
