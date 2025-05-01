'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

import { TableOfContents } from '~/libs/toc';
import { cn } from '~/libs/utils';

import { Icons } from './icons';
import Button from './ui/button';

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
        <Button onClick={() => router.replace('/posts')} className={cn('mb-4 h-6 w-6 p-1')}>
          <Icons.back className="h-4 w-4" />
        </Button>

        <Tree toc={toc} activeId={activeHeading} />
      </nav>
    </aside>
  );
}

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

interface TreeProps extends TocProps {
  level?: number;
  activeId: string;
}

function Tree({ toc, level = 1, activeId }: TreeProps) {
  return (
    toc.length > 0 &&
    level < 3 && (
      <ul
        className={cn('m-0 list-none text-ellipsis', {
          'pl-4': level !== 1,
        })}
      >
        {toc.map(item => (
          <li key={item.url}>
            <Link
              scroll={true}
              href={`#${item.url}`}
              className={cn(
                'line-clamp-1 overflow-hidden text-ellipsis text-sm leading-7 text-disabled no-underline transition-colors duration-200 hover:text-second',
                item.url === activeId && ' hover:',
              )}
            >
              {item.title}
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
