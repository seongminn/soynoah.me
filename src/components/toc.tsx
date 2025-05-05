'use client';

import { useEffect, useMemo, useState } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/navigation';

import { cn } from '~//libs/utils';
import { Items } from '~//utils/toc';

import IconButton from './ui/icon-button';
import Link from './ui/link';
import { Icons } from './icons';

type TableOfContents = Items[];
interface TocProps {
  toc: TableOfContents;
}

export default function Toc({ toc }: TocProps) {
  const router = useRouter();
  const itemIds = useMemo(
    () => toc.flatMap(item => [item.url, ...item.items.map(id => id.url)]),
    [toc],
  );

  const activeHeading = useActiveHeading(itemIds);

  return (
    <aside className="absolute -top-page left-0 h-[calc(100%+var(--page-top))] max-w-[10rem] -translate-x-52 transition-opacity duration-100 lg:pointer-events-none lg:hidden lg:opacity-0">
      <nav className="sticky top-0 pt-page">
        <IconButton
          label="Back to posts"
          onClick={() => router.replace('/posts')}
          className={'mb-4'}
        >
          <Icons.back className="h-4 w-4" />
        </IconButton>

        <Tree toc={toc} activeId={activeHeading} />
      </nav>
    </aside>
  );
}

/* ---- hooks ---- */

function useActiveHeading(itemIds: string[]) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const active = entries.find(entry => entry.isIntersecting);

        if (active) setActiveId(active.target.id);
      },
      { rootMargin: '0px 0px -80% 0px' },
    );

    const elements = itemIds
      .map(id => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    elements.forEach(element => observer.observe(element));

    return () => elements.forEach(element => observer.unobserve(element));
  }, [itemIds]);

  return activeId;
}

/* ---- toc tree ---- */

interface TreeProps extends TocProps {
  level?: number;
  activeId: string;
}

function Tree({ toc, level = 1, activeId }: TreeProps) {
  return (
    toc.length > 0 &&
    level < 3 && (
      <ul
        className={cn('m-0 flex list-none flex-col gap-1 text-ellipsis', {
          'pl-4': level !== 1,
        })}
      >
        {toc.map(item => (
          <li key={item.url}>
            <Link asChild>
              <NextLink
                scroll={true}
                href={`#${item.url}`}
                className={cn(
                  'line-clamp-1 overflow-hidden text-ellipsis text-sm no-underline',
                  item.url === activeId && 'text-body',
                )}
              >
                {item.title}
              </NextLink>
            </Link>
            {item.items.length ? (
              <Tree toc={item.items} level={level + 1} activeId={activeId} />
            ) : null}
          </li>
        ))}
      </ul>
    )
  );
}
