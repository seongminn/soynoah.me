import type { ComponentProps } from 'react';

import { cn } from '~/utils/cn';

interface SidebarProps extends ComponentProps<'aside'> {}

export const Sidebar = ({ className, children, ...props }: SidebarProps) => {
  return (
    <aside
      className={cn(
        '-top-page -translate-x-44 absolute left-0 h-[calc(100%+var(--page-top))] max-w-36 transition-opacity duration-100 lg:pointer-events-none lg:hidden lg:opacity-0',
        className,
      )}
      {...props}
    >
      <div className="sticky top-0 mt-3 pt-page">
        {/* <div className="mt-2 mb-4 flex items-center gap-2">
          <BackButton className="-ml-1.5" />
          <ThemeToggle />
        </div> */}

        {children}
      </div>
    </aside>
  );
};
