import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { postAbsUrl, SITE_URL } from '../../../lib/i18n';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async (context) => {
  const posts = await getCollection('post', ({ data }) => data.lang === 'es' && !data.draft);
  return rss({
    title: 'NextScenario Blog',
    description: 'Finanzas SaaS sin relleno. Unit economics, cash planning y reporting.',
    site: context.site ?? SITE_URL,
    items: posts
      .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime())
      .map((post) => ({
        title: post.data.title,
        description: post.data.description,
        pubDate: post.data.pubDate,
        link: postAbsUrl('es', post.data.slug),
      })),
    customData: '<language>es-es</language>',
  });
};
