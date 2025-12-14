'use client';

import NextLink from 'next/link';
import { useEffect, useMemo, useState } from 'react';

import type { Items } from '~//utils/toc';
import { cn } from '~/utils/cn';

import { Sidebar } from './sidebar';
import { Link } from './ui/link';

type TableOfContents = Items[];
interface TocProps {
  toc: TableOfContents;
}

export default function Toc({ toc }: TocProps) {
  const itemIds = useMemo(
    () => toc.flatMap((item) => [item.url, ...item.items.map((id) => id.url)]),
    [toc],
  );

  const activeHeading = useActiveHeading(itemIds);

  return (
    <Sidebar>
      <nav>
        <Tree toc={toc} activeId={activeHeading} />
      </nav>
    </Sidebar>
  );
}

/* ---- hooks ---- */

function useActiveHeading(itemIds: string[]) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const active = entries.find((entry) => entry.isIntersecting);

        if (active) setActiveId(active.target.id);
      },
      { rootMargin: '0px 0px -80% 0px' },
    );

    const elements = itemIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () =>
      elements.forEach((element) => {
        observer.unobserve(element);
      });
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
        className={cn('m-0 flex list-none flex-col gap-2 text-ellipsis', {
          'pl-2': level !== 1,
        })}
      >
        {toc.map((item) => (
          <li key={item.url} className="flex flex-col gap-2">
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
