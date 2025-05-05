'use client';

import { ComponentProps } from 'react';

import { cn } from '~/libs/utils';

import Button from './ui/button';
import { Icons } from './icons';

export default function ScrollTopButton({ className, ...props }: ComponentProps<'button'>) {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <Button
      onClick={scrollToTop}
      className={cn('mt-2 h-6 w-6 p-1', className)}
      aria-label="scroll to top"
      {...props}
    >
      <Icons.up className="h-4 w-4" />
    </Button>
  );
}
