'use client';

import { usePathname } from 'next/navigation';

import Link from '~//components/ui/link';
import { cn } from '~//libs/utils';
import { site } from '~/site';

import ThemeToggle from './theme-toggle';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky left-0 top-0 z-10 mx-auto my-0 h-page w-full bg-page">
      <div className="container mx-auto grid h-full max-w-content grid-cols-[1fr,auto] items-center py-0">
        <nav className="mr-2 flex flex-1 items-center gap-4 pr-2" aria-label="Main">
          <Link href="/" className="font-semibold text-body no-underline">
            {site.title}
          </Link>
          {site.menus.map(menu => {
            const isCurrentPath = pathname.startsWith(menu.path);

            return (
              <Link
                key={menu.path}
                href={menu.path}
                className={cn(
                  'text-nowrap no-underline',
                  isCurrentPath ? 'text-body' : 'text-second',
                )}
                aria-current={isCurrentPath ? 'page' : undefined}
              >
                {menu.label}
              </Link>
            );
          })}
        </nav>
        <ThemeToggle />
      </div>
      <div className="blur-layer"></div>
    </header>
  );
}
