import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Executable SEO contract. Any MDX that fails this schema fails the build.
const post = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/posts',
    // Namespace by language folder so /en/foo.md and /es/foo.md don't collide.
    generateId: ({ entry }) => entry.replace(/\.(md|mdx)$/, ''),
  }),
  schema: ({ image }) =>
    z.object({
      title: z
        .string()
        .min(10, 'title too short for SEO')
        .max(70, 'title > 70 chars will be truncated in SERP'),
      description: z
        .string()
        .min(110, 'description too short (target 120-160)')
        .max(165, 'description > 165 will be truncated in SERP'),
      slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'slug must be kebab-case'),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      lang: z.enum(['es', 'en']),
      tags: z.array(z.string()).default([]),
      heroImage: z.string().optional(),
      heroAlt: z.string().min(5).optional(),
      // Slug of the sibling post in the other language (for hreflang pairing).
      translationOf: z.string().optional(),
      // Explicit canonical. Defaults to self-URL when omitted.
      canonical: z.string().url().optional(),
      // Historic URLs that should 301 to this post.
      redirectsFrom: z.array(z.string()).default([]),
      // Author attribution (defaults to NextScenario team).
      author: z.string().default('NextScenario'),
      draft: z.boolean().default(false),
      // Migration provenance — set by scraper for the initial import.
      migratedFrom: z.string().url().optional(),
      // Confidence of automated conversion (review flag).
      needsReview: z.boolean().default(false),
      // Business model the post applies to. Drives the badge on the card
      // and (future) filtering on the listing.
      businessModel: z.enum(['saas', 'ecommerce', 'both', 'general']).default('general'),
    }),
});

export const collections = { post };
