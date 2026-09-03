import fs from 'node:fs';

const htmlPath =
	'C:/Users/ii/Downloads/Riot Games. Developer of League of Legends, VALORANT, Teamfight Tactics, Legends of Runeterra, and Wild Rift. Creators of Arcane. Home of LOL and VALORANT Esports. _ Riot Games.html';
const cssPath =
	'C:/Users/ii/Downloads/Riot Games. Developer of League of Legends, VALORANT, Teamfight Tactics, Legends of Runeterra, and Wild Rift. Creators of Arcane. Home of LOL and VALORANT Esports. _ Riot Games_files/index.css';

const html = fs.readFileSync(htmlPath, 'utf8');
const css = fs.readFileSync(cssPath, 'utf8');

const slideRe =
	/<a title="Drag to explore" href="([^"]+)" class="embla__slide"[^>]*><div class="embla__slide__container"[^>]*><img class="content-showcase__main__slide__bkg-image"[^>]*src="[^"]*\/([^"/]+)"[^>]*><div class="content-showcase__main__slide__content"><div class="content-showcase__main__slide__logo"><img src="[^"]*\/([^"/]+)">/g;

const slides = [];
let m;
while ((m = slideRe.exec(html))) {
	slides.push({ href: m[1], bgFile: m[2], logoFile: m[3] });
}

console.log('SLIDES', JSON.stringify(slides, null, 2));

const logoIdx = css.indexOf('.content-showcase__main__slide__logo');
console.log('\nLOGO CSS:\n', css.slice(logoIdx, logoIdx + 800));

const beforeIdx = css.indexOf('.content-showcase__main__slide__content:before');
console.log('\nBEFORE CSS:\n', css.slice(beforeIdx, beforeIdx + 600));

const showcaseIdx = css.indexOf('.content-showcase{');
console.log('\nSHOWCASE CSS:\n', css.slice(showcaseIdx, showcaseIdx + 400));
