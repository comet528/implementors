/** Shared helpers for Issue pieces. */

export function byOrderAsc(
  a: { data: { order: number; title: string } },
  b: { data: { order: number; title: string } },
) {
  return a.data.order - b.data.order || a.data.title.localeCompare(b.data.title);
}

export function entryHref(collection: 'cards' | 'diffs' | 'lab', slug: string) {
  return `/${collection}/${slug}/`;
}

export function illustrationSrc(file: string) {
  return `/issue-1/${file}`;
}

export const ISSUE = {
  number: 1,
  label: 'Issue 1',
  dateLabel: 'August 2026',
  lede: 'What open-finance implementors need this month: profiles, consultations, and lab instruments—short, sourced, and readable.',
} as const;
