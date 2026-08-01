import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const reallabs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/reallabs' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    partner: z.string(),
    date: z.string(),
    location: z.string(),
    fields: z.array(z.string()),
    color: z.string(),
    titleColor: z.string().optional(),
    order: z.number(),
  })
});

export const collections = {
  reallabs
};