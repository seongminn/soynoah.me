import { allPosts } from 'contentlayer/generated';

import { site } from '~/site';

export default function sitemap() {
  const routes = ['', 'posts'].map(route => ({
    url: `${site.url}/${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  const posts = allPosts.map(post => ({
    url: `${site.url}/posts/${post.slug}`,
    lastModified: post.date,
  }));

  return [...routes, ...posts];
}
