'use client';

import { useEffect, useMemo, useState } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/navigation';

import { cn } from '~//libs/utils';
import { Items } from '~//utils/toc';

import { IconButton } from './ui/icon-button';
import Link from './ui/link';
import { Icons } from './icons';
import { BackButton } from './back-button';
import { Sidebar } from './side-bar';

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
    <Sidebar>
      <BackButton className="mb-4" />
      <Tree toc={toc} activeId={activeHeading} />
    </Sidebar>
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
