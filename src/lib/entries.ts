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
  volLabel: 'Vol. 1 · Issue 1 · August 2026',
  brandLine: 'A notebook for open-finance implementors',
  lede: 'Eight pieces for people who wire open-finance profiles: which FAPI is the UK rulebook, what HMT actually asked in Q15, where mandate belongs, and the lab instruments you can open today.',
} as const;
