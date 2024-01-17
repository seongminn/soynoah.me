import Link from 'next/link';

import { site } from '~/configs/site';

import ThemeToggle from './theme-toggle';

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="mx-auto flex h-full max-w-content items-center">
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
    </>
  );
}
