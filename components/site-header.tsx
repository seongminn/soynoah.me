import Link from 'next/link';

import ThemeToggle from './theme-toggle';

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="mx-auto flex h-full max-w-content items-center">
          <nav className="mr-2 flex flex-1 items-center gap-2 pr-2">
            <Link href="posts" className="flex items-center font-serif">
              기록
            </Link>
            <Link href="posts" className="align-middle font-serif">
              메모
            </Link>
            <Link href="posts" className="align-middle font-serif">
              프로젝트
            </Link>
          </nav>
          <ThemeToggle />
        </div>
        <div className="blur-layer"></div>
      </header>
    </>
  );
}
