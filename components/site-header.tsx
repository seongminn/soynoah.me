'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { site } from '~/configs/site';
import { cn } from '~/libs/utils';

import ThemeToggle from './theme-toggle';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="header">
      <div className="container mx-auto grid h-full max-w-content grid-cols-[1fr,auto] items-center py-0">
        <nav className="mr-2 flex flex-1 items-center gap-4 pr-2" aria-label="Main">
          <Link href="/" className="font-sans font-semibold text-gray-900">
            {site.title}
          </Link>
          {site.menus.map(menu => {
            const isCurrentPath = pathname.startsWith(menu.path);

            return (
              <Link
                key={menu.path}
                href={menu.path}
                className={cn(
                  'text-nowrap transition-colors hover:text-gray-900',
                  isCurrentPath ? 'text-gray-900' : 'text-gray-800',
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
