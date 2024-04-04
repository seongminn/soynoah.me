import Link from 'next/link';

import { site } from '~/configs/site';

import ThemeToggle from './theme-toggle';

export default function Header() {
  return (
    <header className="header">
      <div className="container mx-auto grid h-full max-w-content grid-cols-[1fr,auto] items-center py-0">
        <nav className="mr-2 flex flex-1 items-center gap-4 pr-2">
          <Link href="/" className="font-serif">
            {site.title}
          </Link>
          {site.menus.map(menu => (
            <Link key={menu.path} href={menu.path} className="font-serif">
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
