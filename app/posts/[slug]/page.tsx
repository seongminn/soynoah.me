import '~/styles/mdx.css';

import { allPosts } from 'contentlayer/generated';
import { Metadata } from 'next';
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

export const generateMetadata = ({ params }: PageProps): Metadata => {
  const post = getPostsByParams({ params });

  if (!post) return {};

  return {
    title: {
      absolute: post.title,
    },
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [post.image || ''],
      locale: 'ko_KR',
      type: 'website',
    },
  };
};
