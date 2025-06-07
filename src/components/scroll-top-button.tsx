'use client';

import type { ComponentPropsWithoutRef } from 'react';
import { forwardRef } from 'react';

import { cn } from '~/libs/utils';

import { Icons } from './icons';
import { IconButton } from './ui/icon-button';

interface ScrollTopButtonProps extends Partial<ComponentPropsWithoutRef<typeof IconButton>> {}

export const ScrollTopButton = forwardRef<HTMLButtonElement, ScrollTopButtonProps>(
  ({ label = 'Scroll to top', className, ...props }, ref) => {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
      <IconButton
        ref={ref}
        label={label}
        onClick={scrollToTop}
        className={cn('mt-2 h-6 w-6 p-1', className)}
        {...props}
      >
        <Icons.up className="h-4 w-4" />
      </IconButton>
    );
  },
);
ScrollTopButton.displayName = 'ScrollTopButton';
