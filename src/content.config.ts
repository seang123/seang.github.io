import { defineCollection, z } from 'astro:content';

const pageSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.date(),
  tags: z.array(z.string()).optional(),
});

const posts = defineCollection({
  type: 'content',
  schema: pageSchema,
});

const index = defineCollection({
  type: 'content',
  schema: pageSchema,
});

export const collections = { index, posts };
