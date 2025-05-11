import type { Metadata } from 'next';
import NextLink from 'next/link';
import { allPosts } from 'contentlayer/generated';

import { PageHeader } from '~/components/page-header';
import { Sidebar } from '~/components/sidebar';
import Link from '~/components/ui/link';
import * as time from '~/libs/time';

export default function Page() {
  const posts = getSortedPostsByYears(allPosts);

  return (
    <>
      <PageHeader>
        <PageHeader.Title>기록</PageHeader.Title>
        <PageHeader.Description>기록을 보관하는 공간</PageHeader.Description>
      </PageHeader>

      <hr className="mb-7 mt-4" />

      <section className="relative">
        <Sidebar />

        <ul className="flex flex-col gap-2">
          {Object.entries(posts)
            .reverse()
            .map(([year, posts]) => (
              <li key={year} className="flex justify-between gap-8 font-sans">
                <time dateTime={year}>{year}</time>
                <ul className="flex flex-1 flex-col gap-2">
                  {posts.map(post => (
                    <>
                      <li
                        key={post.slug}
                        className="relative pb-2 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-border"
                      >
                        <Link asChild>
                          <NextLink
                            href={`posts/${post.slug}`}
                            className="flex flex-1 items-center no-underline"
                          >
                            <div className="flex w-full flex-col justify-between">
                              <span className="flex-1 font-medium transition-colors hover:text-gray-900">
                                {post.title}
                              </span>
                              <span className="line-clamp-2 text-sm text-second">
                                {post.description}
                              </span>
                            </div>
                            <time
                              dateTime={time.format(post.date, 'YYYY-MM-DD')}
                              className="shrink-0 text-sm text-second"
                            >
                              {time.format(post.date, 'MM.DD')}
                            </time>
                          </NextLink>
                        </Link>
                      </li>
                    </>
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
    description: '기록을 보관하는 공간',
    openGraph: {
      title: '기록',
      description: '기록을 보관하는 공간',
      type: 'website',
      locale: 'ko_KR',
    },
  };
};
