import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const memberSchema = z.object({
  name: z.string(),
  photo: z.string().optional(),
  title: z.string(),
  titleModifiers: z.array(z.string()).default([]),
  description: z.string(),
});

const team = defineCollection({
  loader: glob({ base: './details', pattern: 'MEMBERS.md' }),
  schema: z.object({ title: z.string(), members: z.array(memberSchema) }),
});

const archive = defineCollection({
  loader: glob({ base: './details/archive', pattern: '**/*.md' }),
  schema: z.object({
    year: z.string(),
    projectTitle: z.string(),
    projectDescription: z.string(),
    coverImage: z.string().optional(),
    images: z.array(z.string()).default([]),
    members: z.array(memberSchema).default([]),
  }),
});

export const collections = { team, archive };


