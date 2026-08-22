#!/usr/bin/env node
/**
 * Public-repo leak guard.
 * Build MUST fail if:
 * - private/ or as-run/ directories appear anywhere in the tree
 * - src/content/spine appears (spine is not a public collection)
 * - /spine routes appear under src/pages
 *
 * Public collections only: cards, diffs, lab.
 * Spine may exist only as fcs_evolution strings on cards — never as pages or a collection.
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

const spineContent = join(ROOT, 'src', 'content', 'spine');
if (existsSync(spineContent)) {
  hits.push('src/content/spine');
}

const spinePages = join(ROOT, 'src', 'pages', 'spine');
if (existsSync(spinePages)) {
  hits.push('src/pages/spine (/spine routes)');
} else {
  // Any page file that would publish a /spine path (e.g. src/pages/spine.astro).
  const pagesDir = join(ROOT, 'src', 'pages');
  if (existsSync(pagesDir)) {
    for (const name of readdirSync(pagesDir)) {
      if (name === 'spine.astro' || name.startsWith('spine.')) {
        hits.push(`src/pages/${name} (/spine routes)`);
      }
    }
  }
}

if (hits.length > 0) {
  console.error('LEAK GUARD FAILED: forbidden paths found (public repo only):');
  for (const h of hits) console.error(`  - ${h}`);
  console.error(
    'Collections allowed: cards, diffs, lab. No private/, as-run/, src/content/spine, or /spine routes.',
  );
  process.exit(1);
}

console.log('Leak guard OK: no private/, as-run/, spine content, or /spine routes.');
