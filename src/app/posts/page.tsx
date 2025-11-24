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
                        className="group flex flex-1 items-center gap-xs no-underline"
                      >
                        <time
                          dateTime={time.format(post.date, 'YYYY-MM-DD')}
                          className="shrink-0 text-base text-body leading-7 group-hover:text-body"
                        >
                          {time.format(post.date, 'MM.DD')}
                        </time>

                        <Icons.right aria-hidden="true" className="h-3 w-3" />

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

// import { allPosts } from 'contentlayer/generated';
// import type { Metadata } from 'next';
// import NextLink from 'next/link';

// import { BackButton } from '~/components/back-button';
// import { PageHeader } from '~/components/page-header';
// import { Sidebar } from '~/components/sidebar';
// import * as time from '~/libs/time';

// export default function Page() {
//   const posts = getSortedPostsByYears(allPosts);

//   return (
//     <>
//       <BackButton path="/" className="mb-default inline-flex" />

//       <PageHeader>
//         <PageHeader.Title>기록</PageHeader.Title>
//         <PageHeader.Description>기록을 보관하는 공간</PageHeader.Description>
//       </PageHeader>

//       <section className="relative">
//         <Sidebar />

//         <ul className="flex flex-col gap-xs">
//           {Object.entries(posts)
//             .reverse()
//             .map(([year, posts]) => (
//               <li key={year} className="flex justify-between gap-xs">
//                 <time dateTime={year} className="text-base leading-7">
//                   {year}
//                 </time>
//                 <ul className="flex flex-1 flex-col gap-xs">
//                   {posts.map((post) => (
//                     <li key={post.slug} className="relative">
//                       <div
//                         aria-hidden="true"
//                         className="-translate-y-1/2 -left-8 absolute top-1/2 h-[3px] w-[3px] rounded-full bg-gray-150 before:absolute before:w-px before:h-6 before:bg-gray-150 before:left-1/2 before:-translate-x-1/2 before:-top-[8px] before:-translate-y-full"
//                       />
//                       <NextLink
//                         href={`posts/${post.slug}`}
//                         className="group flex flex-1 items-center gap-default no-underline"
//                       >
//                         <time
//                           dateTime={time.format(post.date, 'YYYY-MM-DD')}
//                           className="shrink-0 text-base text-second leading-7 group-hover:text-body"
//                         >
//                           {time.format(post.date, 'MM.DD')}
//                         </time>
//                         <span className="flex w-full flex-1 flex-col justify-between font-medium text-base text-second leading-7 transition-colors group-hover:text-gray-900">
//                           {post.title}
//                         </span>
//                       </NextLink>
//                     </li>
//                   ))}
//                 </ul>
//               </li>
//             ))}
//         </ul>
//       </section>
//     </>
//   );
// }

// function getSortedPostsByYears(posts: typeof allPosts) {
//   const sortedPosts = posts.sort((a, b) => {
//     return time.isAfter(a.date, b.date) ? -1 : 1;
//   });

//   const postsByYears = sortedPosts.reduce(
//     (acc, post) => {
//       const year = time.getYear(post.date);

//       if (!acc[year]) {
//         acc[year] = [];
//       }

//       acc[year].push(post);

//       return acc;
//     },
//     {} as Record<number, typeof allPosts>,
//   );

//   return postsByYears;
// }

// export const generateMetadata = (): Metadata => {
//   return {
//     title: '기록',
//     description: '기록을 보관하는 공간',
//     openGraph: {
//       title: '기록',
//       description: '기록을 보관하는 공간',
//       type: 'website',
//       locale: 'ko_KR',
//     },
//   };
// };
