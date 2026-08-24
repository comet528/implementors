#!/usr/bin/env node
/**
 * Public-repo leak guard.
 * Build MUST fail if private/ or as-run/ directories appear anywhere in the tree
 * (especially under src/content). Everything in src/content is public.
 * Also fails if the internal spine surface (src/content/spine, src/pages/spine)
 * reappears — hop-path / observer-cards / evidence-pack are not public pages.
 */
import { existsSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const ROOT = process.cwd();
const SKIP = new Set(['node_modules', '.git', 'dist', '.astro', '.wrangler']);

/** @type {string[]} */
const hits = [];

/**
 * @param {string} dir
 */
function walk(dir) {
  let entries;
  try {
    entries = readdirSync(dir);
  } catch {
    return;
  }
  for (const name of entries) {
    if (SKIP.has(name)) continue;
    const full = join(dir, name);
    let st;
    try {
      st = statSync(full);
    } catch {
      continue;
    }
    if (!st.isDirectory()) continue;
    if (name === 'private' || name === 'as-run') {
      hits.push(relative(ROOT, full) || full);
    }
    walk(full);
  }
}

walk(ROOT);

const spinePaths = ['src/content/spine', 'src/pages/spine'];
for (const p of spinePaths) {
  if (existsSync(join(ROOT, p))) {
    hits.push(p);
  }
}

if (hits.length > 0) {
  console.error('LEAK GUARD FAILED: forbidden directories found (public repo only):');
  for (const h of hits) console.error(`  - ${h}`);
  console.error(
    'Collections allowed: cards, diffs, lab. No private/, as-run/, or spine/.',
  );
  process.exit(1);
}

console.log('Leak guard OK: no private/, as-run/, or spine/ directories.');
