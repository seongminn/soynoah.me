import type { ComponentProps } from 'react';

import { cn } from '~/libs/utils';

import { BackButton } from './back-button';
import ThemeToggle from './theme-toggle';

interface SidebarProps extends ComponentProps<'aside'> {}

export const Sidebar = ({ className, children, ...props }: SidebarProps) => {
  return (
    <aside
      className={cn(
        'absolute -top-page left-0 h-[calc(100%+var(--page-top))] max-w-[9rem] -translate-x-44 transition-opacity duration-100 lg:pointer-events-none lg:hidden lg:opacity-0',
        className,
      )}
      {...props}
    >
      <div className="sticky top-0 pt-page">
        <div className="mb-4 flex items-center gap-2">
          <BackButton />
          <ThemeToggle />
        </div>

        {children}
      </div>
    </aside>
  );
};
