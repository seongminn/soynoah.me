import ThemeToggle from './theme-toggle';

export default function Header() {
  return (
    <header className="header">
      <div className="mx-auto flex h-full max-w-content items-center">
        Header 입니다.
        <ThemeToggle />
      </div>

      <div className="blur-layer"></div>
    </header>
  );
}
