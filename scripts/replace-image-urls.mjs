#!/usr/bin/env node
// Replace remote unsplash URLs in src/ with local /images/<id>-<w>.webp.
//
// Width mapping (chosen so each image is fetched at one of three preset widths):
//   src w <= 500 → 400
//   src w <= 900 → 800
//   src w <= 1700 → 1600
//   src w > 1700 → 1920 (heroes only; only HERO_IDS have a 1920 variant)
//
// Two dead unsplash URLs are remapped before resolution:
//   photo-1530143584537-c7cc7da4b9b4 (404) → substitutes per file

import { readFile, writeFile, readdir } from 'node:fs/promises';
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

const HERO_IDS = new Set([
  'photo-1587300003388-59208cc962cb',
  'photo-1601758125946-6ec2ef64daf8',
  'photo-1560743641-3914f2c45636',
  'photo-1548199973-03cce0bbc87b',
  'photo-1518717758536-85ae29035b6d',
]);

function pickWidth(srcW, id) {
  if (srcW <= 500) return 400;
  if (srcW <= 900) return 800;
  if (srcW <= 1700) return 1600;
  return HERO_IDS.has(id) ? 1920 : 1600;
}

const URL_RE = /https:\/\/images\.unsplash\.com\/(photo-[a-z0-9]+-[a-z0-9]+)\?[^"'\s)]*/g;

function transform(text, filePath) {
  return text.replace(URL_RE, (match, id) => {
    // Remap the dead photo to working substitutes per file context.
    if (id === 'photo-1530143584537-c7cc7da4b9b4') {
      if (filePath.includes('/v2/')) id = 'photo-1576201836106-db1758fd1c97';
      else if (filePath.includes('/v4/')) id = 'photo-1546238232-20216dec9f72';
      else id = 'photo-1576201836106-db1758fd1c97';
    }
    // Pull width from query string (default 800).
    const wMatch = match.match(/[?&]w=(\d+)/);
    const srcW = wMatch ? parseInt(wMatch[1], 10) : 800;
    const w = pickWidth(srcW, id);
    return `/images/${id}-${w}.webp`;
  });
}

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...await walk(p));
    else if (/\.(astro|ts)$/.test(entry.name)) out.push(p);
  }
  return out;
}

async function main() {
  const files = await walk(resolve(ROOT, 'src'));
  let changed = 0;
  for (const f of files) {
    const orig = await readFile(f, 'utf8');
    const next = transform(orig, f);
    if (next !== orig) {
      await writeFile(f, next);
      const diff = (orig.match(URL_RE) || []).length;
      console.log(`[edit] ${f.replace(ROOT + '/', '')} — ${diff} URL(s) replaced`);
      changed++;
    }
  }
  console.log(`\nDone. ${changed} files updated.`);
}

main().catch((e) => { console.error(e); process.exit(1); });
