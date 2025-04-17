import { defineCollection, z } from 'astro:content';

// Define the schema for the collection
const analyzeCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().optional(),
    intro: z.string().optional(),
    sections: z.array(
      z.object({
        id: z.string(),
        title: z.string(),
        heading: z.string(),
        content: z.string(),
        image: z.string(),
        altText: z.string()
      })
    ).optional()
  }),
});

const herobanner = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().optional(),
    subtitle: z.string().optional(),
  }),
});

// Export the collections
export const collections = {
  'analyzeSection': analyzeCollection,
  'herobanner': herobanner,
}; 