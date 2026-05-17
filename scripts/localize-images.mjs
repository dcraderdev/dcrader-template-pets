#!/usr/bin/env node
// Download all unsplash photos referenced in src/ and generate WebP variants.
// Output: public/images/<photo-id>-<width>.webp
// Variants emitted: 400, 800, 1600 widths. Hero photos also 1920.
//
// Photo IDs are extracted from grep — see PHOTO_IDS below.

import { mkdir, writeFile, access } from 'node:fs/promises';
import { constants } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = resolve(__dirname, '..', 'public', 'images');
const WIDTHS = [400, 800, 1600];
const HERO_WIDTHS = [400, 800, 1600, 1920];

const PHOTO_IDS = [
  'photo-1438761681033-6461ffad8d80',
  'photo-1472099645785-5658abf4ff4e',
  'photo-1494790108377-be9c29b29330',
  'photo-1500648767791-00dcc994a43e',
  'photo-1505628346881-b72b27e84530',
  'photo-1507003211169-0a1dd7228f2d',
  'photo-1510771463146-e89e6e86560e',
  'photo-1518717758536-85ae29035b6d',
  'photo-1529472119196-cb724127a98e',
  'photo-1546238232-20216dec9f72',
  'photo-1576201836106-db1758fd1c97',
  'photo-1534361960057-19889db9621e',
  'photo-1537151608828-ea2b11777ee8',
  'photo-1548199973-03cce0bbc87b',
  'photo-1559839734-2b71ea197ec2',
  'photo-1560743641-3914f2c45636',
  'photo-1560807707-8cc77767d783',
  'photo-1561037404-61cd46aa615b',
  'photo-1580489944761-15a19d654956',
  'photo-1583511655826-05700d52f4d9',
  'photo-1583512603806-077998240c7a',
  'photo-1587300003388-59208cc962cb',
  'photo-1588943211346-0908a1fb0b01',
  'photo-1601758125946-6ec2ef64daf8',
];

// Photos used as hero (need a 1920w variant). All variant pages preload at 1600.
const HERO_IDS = new Set([
  'photo-1587300003388-59208cc962cb', // v1
  'photo-1601758125946-6ec2ef64daf8', // v2
  'photo-1560743641-3914f2c45636',    // v3
  'photo-1548199973-03cce0bbc87b',    // v4
  'photo-1518717758536-85ae29035b6d', // v5
]);

async function exists(p) {
  try { await access(p, constants.F_OK); return true; } catch { return false; }
}

async function fetchOriginal(id) {
  // Fetch a large 2400w JPEG once; sharp resizes locally.
  const url = `https://images.unsplash.com/${id}?w=2400&q=85&fit=max&auto=format`;
  const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
  if (!res.ok) throw new Error(`fetch failed ${res.status} for ${id}`);
  return Buffer.from(await res.arrayBuffer());
}

async function processOne(id) {
  const widths = HERO_IDS.has(id) ? HERO_WIDTHS : WIDTHS;
  // Skip if all targets already exist (idempotent).
  const targets = widths.map((w) => resolve(OUT_DIR, `${id}-${w}.webp`));
  const haveAll = (await Promise.all(targets.map(exists))).every(Boolean);
  if (haveAll) {
    console.log(`[skip] ${id} — all widths present`);
    return { id, widths, skipped: true };
  }
  console.log(`[fetch] ${id}`);
  const original = await fetchOriginal(id);
  for (const w of widths) {
    const out = resolve(OUT_DIR, `${id}-${w}.webp`);
    await sharp(original)
      .resize({ width: w, withoutEnlargement: true })
      .webp({ quality: w >= 1600 ? 80 : 78 })
      .toFile(out);
    console.log(`  → ${id}-${w}.webp`);
  }
  return { id, widths, skipped: false };
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  let ok = 0, fail = 0;
  for (const id of PHOTO_IDS) {
    try { await processOne(id); ok++; }
    catch (e) { console.error(`[fail] ${id}: ${e.message}`); fail++; }
  }
  console.log(`\nDone. ok=${ok} fail=${fail}`);
}

main().catch((e) => { console.error(e); process.exit(1); });
