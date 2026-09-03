import type { APIRoute } from 'astro';
import { absolutePageUrl, imageSitemapEntries, pageSitemapEntries } from '../data/page-sitemap';
import { getBlogSitemapEntries } from '../data/blog/helpers';
import { getReviewSitemapEntries } from '../data/reviews';
import { getGuidesSitemapEntries } from '../data/guides/helpers';
import { escapeXml, sitemapResponseHeaders } from '../data/sitemap-xml';

export const prerender = true;

type HostedImage = {
	hostPath: string;
	lastmod: string;
	url: string;
	title: string;
	caption: string;
};

/**
 * Dedicated image sitemap: every unique keyword / page / blog / review asset
 * is listed under its best host URL for Google Image Search + SERP thumbnails.
 */
export const GET: APIRoute = () => {
	const homepage = absolutePageUrl('/');
	const fallbackLastmod = pageSitemapEntries[0]?.lastmod ?? new Date().toISOString().slice(0, 10);

	const englishEntries = [
		...pageSitemapEntries,
		...getBlogSitemapEntries().filter((entry) => !entry.path.match(/^\/[a-z]{2}\//)),
		...getReviewSitemapEntries(),
		...getGuidesSitemapEntries(),
	];

	const byImageUrl = new Map<string, HostedImage>();

	for (const page of englishEntries) {
		for (const image of page.images) {
			if (byImageUrl.has(image.url)) continue;
			byImageUrl.set(image.url, {
				hostPath: page.path,
				lastmod: page.lastmod,
				url: image.url,
				title: image.title,
				caption: image.caption,
			});
		}
	}

	for (const image of imageSitemapEntries) {
		if (byImageUrl.has(image.url)) continue;
		byImageUrl.set(image.url, {
			hostPath: '/',
			lastmod: fallbackLastmod,
			url: image.url,
			title: image.title,
			caption: image.caption,
		});
	}

	const urls = [...byImageUrl.values()]
		.map((image) => {
			const host = absolutePageUrl(image.hostPath) || homepage;
			return `  <url>
    <loc>${escapeXml(host)}</loc>
    <lastmod>${escapeXml(image.lastmod)}</lastmod>
    <image:image>
      <image:loc>${escapeXml(image.url)}</image:loc>
      <image:title>${escapeXml(image.title)}</image:title>
      <image:caption>${escapeXml(image.caption)}</image:caption>
    </image:image>
  </url>`;
		})
		.join('\n');

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls}
</urlset>
`;

	return new Response(xml, { headers: sitemapResponseHeaders });
};
