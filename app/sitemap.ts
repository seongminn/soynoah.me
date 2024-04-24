import { allPosts } from 'contentlayer/generated';

import { site } from '~/configs/site';

export default function sitemap() {
  const posts = allPosts.map(post => ({
    url: `${site.url}/${post.slug}`,
    lastModified: post.date,
  }));

  const routes = ['', '/posts'].map(route => ({
    url: `${site.url}/${route}`,
    lastModified: new Date().toISOString().split('T').shift(),
  }));

  return [...posts, ...routes];
}
