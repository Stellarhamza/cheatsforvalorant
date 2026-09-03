import { valorantImages } from '../data/valorant';

export interface ResponsiveWidth {
	src: string;
	width: number;
}

/** Build a srcset string from width-tagged image paths. */
export function buildSrcSet(widths: ResponsiveWidth[]): string {
	return widths.map(({ src, width }) => `${src} ${width}w`).join(', ');
}

function parseWebpBase(baseSrc: string): { dir: string; name: string } | undefined {
	const match = baseSrc.match(/^(.+\/)(.+)\.webp$/i);
	if (!match) return undefined;

	const [, dir, name] = match;
	if (
		name.endsWith('-480w') ||
		name.endsWith('-640w') ||
		name.endsWith('-960w') ||
		name.endsWith('-1400w')
	) {
		return undefined;
	}

	return { dir, name };
}

/** Build srcset for content images that have -480w / -960w variants. */
export function contentSrcSet(baseSrc: string): string | undefined {
	const parsed = parseWebpBase(baseSrc);
	if (!parsed) return undefined;

	const { dir, name } = parsed;
	return buildSrcSet(
		contentWidths.map((width) => ({
			src: `${dir}${name}-${width}w.webp`,
			width,
		})),
	);
}

/**
 * Fallback `src` for responsive stills — prefer 960w (~70KB) over full masters
 * (often 280–520KB) so slow networks never pull the huge file as a fallback.
 */
export function contentSrc(baseSrc: string): string {
	const parsed = parseWebpBase(baseSrc);
	if (!parsed) return baseSrc;
	return `${parsed.dir}${parsed.name}-960w.webp`;
}

/** Hero uses Riot cinematic video; poster PNG is the LCP fallback. */
export const heroImageSrc = valorantImages.heroPoster;
export const heroIsExternal = false;
export const heroSrc = valorantImages.heroPoster;
export const heroSrcSet = undefined;
export const heroSizes = '100vw';
export const heroPreloadSrc = valorantImages.heroPoster;

/** Responsive widths for below-fold content images. */
export const contentWidths = [480, 640, 960] as const;

export const galleryFeaturedSizes = '(max-width: 560px) 100vw, (max-width: 900px) 90vw, 640px';
export const galleryTileSizes = '(max-width: 560px) 100vw, (max-width: 900px) 45vw, 320px';
export const productMainSizes = '(max-width: 900px) 100vw, 640px';
export const productThumbSizes = '160px';
