const AVATAR_PALETTES: ReadonlyArray<readonly [string, string]> = [
	['#ff4655', '#7a1f28'],
	['#bd3944', '#4a151c'],
	['#e85d68', '#6b2229'],
	['#c94852', '#521820'],
	['#ff6b76', '#8a2832'],
	['#a8323c', '#3d1218'],
];

function hashHandle(handle: string): number {
	let hash = 0;
	for (const char of handle) {
		hash = char.charCodeAt(0) + ((hash << 5) - hash);
	}
	return Math.abs(hash);
}

/** Two-letter initials derived from a review handle. */
export function getReviewAvatarInitials(handle: string): string {
	const parts = handle.split(/[_-]/).filter(Boolean);

	if (parts.length >= 2) {
		const first = parts[0].replace(/[^a-zA-Z0-9]/g, '').charAt(0);
		const second = parts[1].replace(/[^a-zA-Z0-9]/g, '').charAt(0);
		if (first && second) return `${first}${second}`.toUpperCase();
	}

	const cleaned = handle.replace(/[^a-zA-Z0-9]/g, '');
	if (cleaned.length >= 2) return cleaned.slice(0, 2).toUpperCase();
	if (cleaned.length === 1) return cleaned.toUpperCase();
	return '?';
}

/** Valorant-tinted gradient pair per handle. */
export function getReviewAvatarPalette(handle: string): readonly [string, string] {
	return AVATAR_PALETTES[hashHandle(handle) % AVATAR_PALETTES.length];
}
