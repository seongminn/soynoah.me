import { allPosts } from 'contentlayer/generated';
import dayjs from 'dayjs';
import { Metadata } from 'next';
import Link from 'next/link';

export default function Page() {
  const posts = getSortedPostsByYears(allPosts);

  return (
    <main>
      <ul>
        {Object.entries(posts)
          .reverse()
          .map(([year, posts]) => (
            <li key={year} className="flex justify-between gap-8 font-serif">
              <h2 className="pt-2">{year}</h2>
              <ul className="flex-1">
                {posts.map(post => (
                  <li key={post.slug}>
                    <Link
                      href={`posts/${post.slug}`}
                      className="flex flex-1 items-center border-b border-gray-200 py-2"
                    >
                      <div className="flex w-full flex-col justify-between">
                        <h2 className="flex-1 transition-colors hover:text-gray-900">
                          {post.title}
                        </h2>
                        <p className="line-clamp-2 text-sm text-gray-500">
                          {post.description}
                        </p>
                      </div>
                      <time className="text-sm text-gray-500">
                        {dayjs(post.date).format('MM.DD')}
                      </time>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
      </ul>
    </main>
  );
}

function getSortedPostsByYears(posts: typeof allPosts) {
  const sortedPosts = posts.sort((a, b) => {
    return dayjs(a.date).isAfter(dayjs(b.date)) ? -1 : 1;
  });

  const postsByYears = sortedPosts.reduce(
    (acc, post) => {
      const year = dayjs(post.date).year();

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
