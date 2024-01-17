import '~/styles/mdx.css';
import 'dayjs/locale/ko';

import { allPosts, Post } from 'contentlayer/generated';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import Giscus from '~/components/giscus';
import Mdx from '~/components/mdx-component';
import PageHeader from '~/components/page-header';
import Pager, { TPager } from '~/components/pager';
import Toc from '~/components/toc';
import { compareAsc } from '~/libs/pager';
import getTableOfContents from '~/libs/toc';

type PageProps = {
  params: {
    slug: string;
  };
};

export default function Page({ params }: PageProps) {
  const post = getPostsByParams({ params });

  if (!post) notFound();

  const toc = getTableOfContents({ content: post.body.raw });
  const pager = getPager(post);

  return (
    <>
      <PageHeader {...post} />

      <hr className="mb-7 mt-4" />

      <section className="relative">
        <Mdx code={post.body.code} />

        <Toc toc={toc} />
      </section>

      <footer>
        <hr className="mb-7 mt-4" />
        <Pager pager={pager} />
        <Giscus />
      </footer>
    </>
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

function getPager(post: Post) {
  return allPosts
    .sort((a, b) => compareAsc(new Date(a.date), new Date(b.date)))
    .reduce<TPager>((ac, v, index, list) => {
      if (post.slug !== v.slug) return ac;

      const prev = list[index - 1];
      const next = list[index + 1];

      ac.prev = prev && { title: prev.title, slug: prev.slug };
      ac.next = next && { title: next.title, slug: next.slug };

      return ac;
    }, {});
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
