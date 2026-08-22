/** Shared list helpers for family and collection index pages. */

export function byUpdatedDesc(
  a: { data: { updated: Date; title: string } },
  b: { data: { updated: Date; title: string } },
) {
  return (
    b.data.updated.valueOf() - a.data.updated.valueOf() ||
    a.data.title.localeCompare(b.data.title)
  );
}

export function entryHref(
  collection: 'spine' | 'cards' | 'diffs' | 'lab',
  slug: string,
) {
  if (collection === 'spine') return `/spine/${slug}/`;
  return `/${collection}/${slug}/`;
}
