import { allPosts } from 'contentlayer/generated';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { BackButton } from '~/components/back-button';
import Giscus from '~/components/giscus';
import Mdx from '~/components/mdx-component';
import { PageHeader } from '~/components/page-header';
import Pager, { getPager } from '~/components/pager';

// import Toc from '~/components/toc';
// import getTableOfContents from '~/utils/toc';

type PageProps = {
  params: { slug: string };
};

export default function Page({ params }: PageProps) {
  const post = getPostsByParams({ params });

  if (!post) notFound();

  // const toc = getTableOfContents({ content: post.body.raw });
  const pager = getPager({ post });

  return (
    <>
      <BackButton path="/posts" className="mb-default inline-flex" />

      <PageHeader>
        <PageHeader.Title>{post.title}</PageHeader.Title>
        <PageHeader.PublishDate date={post.date} />
      </PageHeader>

      <section className="relative">
        <Mdx code={post.body.code} />

        {/* <Toc toc={toc} /> */}
      </section>

      <hr className="mt-4 mb-7" />
      <Pager pager={pager} />
      <Giscus />
    </>
  );
}

export function generateStaticParams() {
  return allPosts.map((post) => ({ slug: post.slug }));
}

function getPostsByParams({ params }: PageProps) {
  const slug = params.slug;
  const post = allPosts.find((post) => post.slug === slug);

  return post;
}

export const generateMetadata = ({ params }: PageProps): Metadata => {
  const post = getPostsByParams({ params });

  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      images: [
        {
          url: post.image || '',
          alt: `${post.title} thumbnail`,
          width: 400,
          height: 300,
        },
      ],
      locale: 'ko_KR',
    },
  };
};
