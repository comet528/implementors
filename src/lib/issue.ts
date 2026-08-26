import { getCollection } from 'astro:content';
import { byOrderAsc } from './entries';

/** All Issue 1 pieces in editorial order (cards + lab). */
export async function loadIssuePieces() {
  const cards = await getCollection('cards');
  const lab = await getCollection('lab');

  const pieces = [
    ...cards.map((e) => ({ entry: e, collection: 'cards' as const })),
    ...lab.map((e) => ({ entry: e, collection: 'lab' as const })),
  ].sort((a, b) => byOrderAsc(a.entry, b.entry));

  return {
    pieces,
    features: pieces.filter((p) => p.entry.data.section === 'Feature'),
    labs: pieces.filter((p) => p.entry.data.section === 'Lab'),
  };
}
