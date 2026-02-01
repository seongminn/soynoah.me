import { allPosts } from 'contentlayer/generated';
import type { Metadata } from 'next';
import NextLink from 'next/link';

import { BackButton } from '~/components/back-button';
import { Icons } from '~/components/icons';
import { PageHeader } from '~/components/page-header';
import { Sidebar } from '~/components/sidebar';
import * as time from '~/libs/time';

export default function Page() {
  const posts = getSortedPostsByYears(allPosts);

  return (
    <>
      <BackButton path="/" className="mb-default inline-flex" />

      <PageHeader>
        <PageHeader.Title>기록</PageHeader.Title>
        <PageHeader.Description>이것저것 끄적끄적</PageHeader.Description>
      </PageHeader>

      <section className="relative">
        <Sidebar />

        <ul className="flex flex-col gap-xs">
          {Object.entries(posts)
            .reverse()
            .map(([year, posts]) => (
              <li key={year} className="flex justify-between gap-xs">
                <time dateTime={year} className="text-base leading-7">
                  {year}
                </time>
                <ul className="flex flex-1 flex-col gap-xs">
                  {posts.map((post) => (
                    <li key={post.slug}>
                      <NextLink
                        href={`posts/${post.slug}`}
                        className="group flex flex-1 items-start gap-xs no-underline"
                      >
                        <time
                          dateTime={time.format(post.date, 'YYYY-MM-DD')}
                          className="shrink-0 text-base text-body leading-7 group-hover:text-body"
                        >
                          {time.format(post.date, 'MM.DD')}
                        </time>

                        {/* <div className="flex h-7 w-7 items-center justify-center group-hover:translate-x-0.5 transition-transform">
                          <Icons.right aria-hidden="true" className="h-3 w-3" />
                        </div> */}
                        <div className="flex h-7 w-7 items-center justify-center">
                          <Icons.right
                            aria-hidden="true"
                            className="group-hover:-translate-x-0.5 h-3 w-3 transition-transform"
                          />
                          <Icons.right
                            aria-hidden="true"
                            className="absolute flex h-3 w-3 items-center justify-center transition-transform group-hover:translate-x-0.5"
                          />
                        </div>

                        <span className="flex w-full flex-1 flex-col justify-between font-medium text-base text-body leading-7 transition-colors group-hover:text-gray-900">
                          {post.title}
                        </span>
                      </NextLink>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
        </ul>
      </section>
    </>
  );
}

function getSortedPostsByYears(posts: typeof allPosts) {
  const sortedPosts = posts.sort((a, b) => {
    return time.isAfter(a.date, b.date) ? -1 : 1;
  });

  const postsByYears = sortedPosts.reduce(
    (acc, post) => {
      const year = time.getYear(post.date);

      if (!acc[year]) {
        acc[year] = [];
      }

      acc[year].push(post);

      return acc;
    },
    {} as Record<number, typeof allPosts>,
  );

  return postsByYears;
}

export const generateMetadata = (): Metadata => {
  return {
    title: '기록',
    description: '이것저것 끄적끄적',
    openGraph: {
      title: '기록',
      description: '이것저것 끄적끄적',
      type: 'website',
      locale: 'ko_KR',
    },
  };
};
