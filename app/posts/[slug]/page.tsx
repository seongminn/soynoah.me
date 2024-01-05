import '~/styles/mdx.css';

import { allPosts } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import { useMDXComponent } from 'next-contentlayer/hooks';

type PageProps = {
  params: {
    slug: string;
  };
};

export default function Page({ params }: PageProps) {
  const post = getPostsByParams({ params });

  if (!post) notFound();

  const MDXComponent = useMDXComponent(post.body.code);

  return (
    <article className="mdx">
      <MDXComponent />
    </article>
  );
}

export function generateStaticParams() {
  return allPosts.map(post => ({ slug: post.slug }));
}

function getPostsByParams({ params }: PageProps) {
  const slug = params.slug;
  const post = allPosts.find(post => post.slug === slug);

  return post;
}
