'use client';

import type { ComponentPropsWithoutRef } from 'react';
import { forwardRef, useEffect, useState } from 'react';

import { cn } from '~//libs/utils';

import { IconButton } from './ui/icon-button';
import { Icons } from './icons';

interface CopyButtonProps extends Partial<ComponentPropsWithoutRef<typeof IconButton>> {
  text: string;
}

export const CopyButton = forwardRef<HTMLButtonElement, CopyButtonProps>(
  ({ label = 'Copy contents', text, className, ...props }, ref) => {
    const [hasCopied, setHasCopied] = useState(false);

    async function copy() {
      await navigator.clipboard.writeText(text);

      setHasCopied(true);
    }

    useEffect(() => {
      setTimeout(() => setHasCopied(false), 2000);
    }, [hasCopied]);

    return (
      <IconButton
        ref={ref}
        label={label}
        onClick={copy}
        className={cn(
          'absolute right-3 top-3 z-10 h-6 w-6 border border-gray-200 bg-gray-150 p-1 hover:bg-gray-200 [&>svg]:text-second',
          className,
        )}
        {...props}
      >
        {!hasCopied ? <Icons.copy className="h-4 w-4" /> : <Icons.check className="h-4 w-4" />}
      </IconButton>
    );
  },
);
CopyButton.displayName = 'CopyButton';
