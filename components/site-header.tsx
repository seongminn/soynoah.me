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
        <nav className="mr-2 flex flex-1 items-center gap-4 pr-2">
          <Link href="/" className="font-serif font-semibold text-gray-700">
            {site.title}
          </Link>
          {site.menus.map(menu => (
            <Link
              key={menu.path}
              href={menu.path}
              className={cn(
                'text-nowrap font-serif text-gray-800 transition-opacity hover:opacity-80',
                pathname.startsWith(menu.path) ? 'opacity-100' : 'opacity-60',
              )}
            >
              {menu.label}
            </Link>
          ))}
        </nav>
        <ThemeToggle />
      </div>
      <div className="blur-layer"></div>
    </header>
  );
}
