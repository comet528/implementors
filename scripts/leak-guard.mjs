#!/usr/bin/env node
/**
 * Public-repo leak guard.
 * Build MUST fail if spine/, private/, or as-run/ directories appear anywhere.
 *
 * Public collections only: cards, diffs, lab.
 * No spine collection, no /spine routes. fcs_evolution strings on cards only.
 */
import { existsSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const ROOT = process.cwd();
const SKIP = new Set(['node_modules', '.git', 'dist', '.astro', '.wrangler']);
const FORBIDDEN_DIRS = new Set(['spine', 'private', 'as-run']);

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
    if (FORBIDDEN_DIRS.has(name)) {
      hits.push(relative(ROOT, full) || full);
    }
    walk(full);
  }
}

walk(ROOT);

// Also catch a lone src/pages/spine.astro (file, not directory).
const pagesDir = join(ROOT, 'src', 'pages');
if (existsSync(pagesDir)) {
  for (const name of readdirSync(pagesDir)) {
    if (name === 'spine.astro' || (name.startsWith('spine.') && name.endsWith('.astro'))) {
      hits.push(`src/pages/${name} (/spine routes)`);
    }
  }
}

if (hits.length > 0) {
  console.error('LEAK GUARD FAILED: forbidden paths found (public repo only):');
  for (const h of hits) console.error(`  - ${h}`);
  console.error('Collections allowed: cards, diffs, lab. No spine/, private/, or as-run/.');
  process.exit(1);
}

console.log('Leak guard OK: no spine/, private/, or as-run/.');
