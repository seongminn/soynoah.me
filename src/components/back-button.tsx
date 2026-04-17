'use client';

import { useRouter } from 'next/navigation';
import type { ComponentPropsWithoutRef } from 'react';
import { forwardRef } from 'react';

import { cn } from '~/utils/cn';

import { Icons } from './icons';
import { Link } from './ui/link';

interface BackButtonProps extends Partial<ComponentPropsWithoutRef<'button'>> {
  path?: string;
}

// TODO: Should Be Anchor Element
export const BackButton = forwardRef<HTMLButtonElement, BackButtonProps>(
  ({ path, className, ...props }, ref) => {
    const router = useRouter();
    const handleClick = () => {
      if (path) router.replace(path);
      else router.back();
    };

    return (
      <Link
        render={
          <button
            ref={ref}
            onClick={handleClick}
            className={cn(
              'group mb-1 inline-flex items-center gap-2 border-b border-dotted border-b-second whitespace-nowrap hover:border-b-body',
              className,
            )}
            {...props}
          >
            <Icons.back className="h-3.5 w-3.5 shrink-0 fill-second transition-colors group-hover:fill-body" />
            Back
          </button>
        }
      />
      // <button ref={ref} onClick={handleClick} {...props}>
      // </button>
    );
  },
);
BackButton.displayName = 'BackButton';
