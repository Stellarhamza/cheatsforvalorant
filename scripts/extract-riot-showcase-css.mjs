import fs from 'node:fs';
import { writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const cssPath =
	'C:/Users/ii/Downloads/Riot Games. Developer of League of Legends, VALORANT, Teamfight Tactics, Legends of Runeterra, and Wild Rift. Creators of Arcane. Home of LOL and VALORANT Esports. _ Riot Games_files/index.css';

const css = fs.readFileSync(cssPath, 'utf8');
const start = css.indexOf('.content-showcase__embla');
const end = css.indexOf('.content-showcase__secondary__embla__container');

let block = css.slice(start, end);

// Also grab embla block and content-showcase root
const emblaStart = css.indexOf('.embla{');
const emblaEnd = css.indexOf('.content-showcase__main__slide__logo');
const emblaBlock = css.slice(emblaStart, emblaEnd);

const rootStart = css.indexOf('.content-showcase{');
const rootEnd = css.indexOf('body.theme-throwback .content-showcase');
const rootBlock = css.slice(rootStart, rootEnd);

const titleStart = css.indexOf('.content-showcase__header{');
const titleEnd = css.indexOf('.content-showcase__carousel__buttons');
const headerBlock = css.slice(titleStart, titleEnd);

const logoStart = css.indexOf('.content-showcase__main__slide__logo{');
const logoEnd = css.indexOf('.content-showcase__secondary__embla');
const slideBlock = css.slice(logoStart, logoEnd);

const full = `/* Ported from riotgames.com content-showcase / embla Games carousel */\n\n${rootBlock}\n\n${headerBlock}\n\n${emblaBlock}\n\n${block}\n\n${slideBlock}`;

const modernized = full
	.replace(/-ms-flexbox/g, '')
	.replace(/display:-ms-flexbox;display:flex/g, 'display:flex')
	.replace(/-ms-flex-align:center;align-items:center/g, 'align-items:center')
	.replace(/-ms-flex-pack:center;justify-content:center/g, 'justify-content:center')
	.replace(/-ms-flex-pack:justify;justify-content:space-between/g, 'justify-content:space-between')
	.replace(/-ms-flex-direction:column;flex-direction:column/g, 'flex-direction:column')
	.replace(/-ms-flex:0 0/g, 'flex:0 0')
	.replace(/-ms-transform:/g, 'transform:')
	.replace(/-webkit-clip-path:/g, 'clip-path:')
	.replace(/clip-path:polygon\([^)]+\);clip-path:polygon/g, 'clip-path:polygon')
	.replace(/-o-object-fit:[^;]+;/g, '')
	.replace(/object-fit:cover;object-fit:cover/g, 'object-fit:cover')
	.replace(/-moz-column-gap:8px;column-gap:8px/g, 'column-gap:8px')
	.replace(/-webkit-backface-visibility:hidden;backface-visibility:hidden/g, 'backface-visibility:hidden')
	.replace(/-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none/g, 'user-select:none');

const __dirname = path.dirname(fileURLToPath(import.meta.url));
await writeFile(path.join(__dirname, '../src/styles/riot-content-showcase.css'), modernized);
console.log('Wrote', modernized.length, 'chars');
