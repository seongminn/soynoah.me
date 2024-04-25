'use client';

import { useRouter } from 'next/navigation';
import { ComponentProps } from 'react';

import { cn } from '~/libs/utils';

import { Icons } from './icons';
import Button from './ui/button';

export default function BackButton({
  className,
  ...props
}: ComponentProps<'button'>) {
  const router = useRouter();

  return (
    <aside className="absolute -top-page left-0 h-full -translate-x-28 transition-opacity duration-100 lg:pointer-events-none lg:hidden lg:opacity-0">
      <div className="sticky top-0 pt-page ">
        <Button
          onClick={() => router.replace('/posts')}
          className={cn('h-6 w-6 p-1', className)}
          {...props}
        >
          <Icons.back className="h-4 w-4" />
        </Button>
      </div>
    </aside>
  );
}
