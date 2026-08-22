import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/** Shared frontmatter for all public collections. No unpublished field. No spine collection. */
const cardSchema = z.object({
  title: z.string(),
  status: z.enum(['card', 'stub']),
  family: z.enum(['fapi', 'obl', 'hmt', 'threat', 'kyc', 'diffs', 'lab', 'adjacent']),
  fcs_evolution: z.string(),
  sources: z.array(z.string().url()).default([]),
  updated: z.coerce.date(),
  slug: z.string(),
});

const cards = defineCollection({
  loader: glob({ base: './src/content/cards', pattern: '**/*.md' }),
  schema: cardSchema,
});

const diffs = defineCollection({
  loader: glob({ base: './src/content/diffs', pattern: '**/*.md' }),
  schema: cardSchema,
});

const lab = defineCollection({
  loader: glob({ base: './src/content/lab', pattern: '**/*.md' }),
  schema: cardSchema,
});

export const collections = { cards, diffs, lab };
