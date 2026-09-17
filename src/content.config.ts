import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import type { symbol } from 'astro:schema';

const reallabs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/reallabs' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    partner: z.string(),
    date: z.string(),
    location: z.string(),
    participants: z.array(z.string()),
    fields: z.array(z.string()),
    comps: z.array(z.string()),
    image: z.string().optional(),
    color: z.string(),
    titleColor: z.string().optional(),
    symbol: z.string().optional(),
    order: z.number(),
    status: z.string(),
  })
});

export const collections = {
  reallabs
};