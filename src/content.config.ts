import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const articles = defineCollection({
	loader: glob({ base: './src/content/articles', pattern: '**/*.md' }),
	schema: z.object({
		title: z.string(),
		dek: z.string(),
		category: z.enum(['fashion', 'beauty', 'travel', 'home-garden', 'technology']),
		author: z.string(),
		publishedAt: z.coerce.date(),
		readTime: z.number().int().positive(),
		featured: z.boolean().default(false),
		coverImage: z.string().url(),
		coverAlt: z.string(),
		tone: z.enum(['terracotta', 'sage', 'cobalt', 'butter', 'rose']).default('terracotta'),
	}),
});

export const collections = { articles };
