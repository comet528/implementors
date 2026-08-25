import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/** Shared frontmatter for Issue pieces in public collections. */
const pieceSchema = z.object({
  title: z.string(),
  family: z.enum(['fapi', 'obl', 'hmt', 'threat', 'kyc', 'diffs', 'lab', 'adjacent']),
  sources: z.array(z.string().url()).default([]),
  updated: z.coerce.date(),
  slug: z.string(),
  /** Editorial order within the issue (lower first). */
  order: z.number().int().positive(),
  /** Optional art under /issue-1/, e.g. ill-fapi.webp */
  illustration: z.string().optional(),
  /** Short section label on the issue page. */
  section: z.enum(['Feature', 'Lab']).default('Feature'),
});

const cards = defineCollection({
  loader: glob({ base: './src/content/cards', pattern: '**/*.md' }),
  schema: pieceSchema,
});

const diffs = defineCollection({
  loader: glob({ base: './src/content/diffs', pattern: '**/*.md' }),
  schema: pieceSchema,
});

const lab = defineCollection({
  loader: glob({ base: './src/content/lab', pattern: '**/*.md' }),
  schema: pieceSchema,
});

export const collections = { cards, diffs, lab };
