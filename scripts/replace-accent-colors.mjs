#!/usr/bin/env node
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';

const REPS = [
	[/rgba\(32, 191, 192/g, 'rgba(255, 70, 85'],
	[/rgba\(45, 212, 191/g, 'rgba(255, 70, 85'],
	[/#20bfc0/g, '#ff4655'],
	[/#5eead4/g, '#ff6b77'],
	[/#0a0a0a/g, '#0f1923'],
	[/#42e6e2/g, '#ff6b77'],
];

async function walk(dir, files = []) {
	for (const entry of await readdir(dir, { withFileTypes: true })) {
		if (entry.name === 'node_modules' || entry.name === 'dist') continue;
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) await walk(full, files);
		else if (/\.(astro|css|ts)$/.test(entry.name)) files.push(full);
	}
	return files;
}

let changed = 0;
for (const file of await walk('src')) {
	let text = await readFile(file, 'utf8');
	let updated = text;
	for (const [from, to] of REPS) updated = updated.replace(from, to);
	if (updated !== text) {
		await writeFile(file, updated, 'utf8');
		changed++;
	}
}
console.log(`Updated ${changed} files.`);
