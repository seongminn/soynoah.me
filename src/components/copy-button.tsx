'use client';

import { ComponentProps, useEffect, useState } from 'react';

import { cn } from '~//libs/utils';

import Button from './ui/button';
import { Icons } from './icons';

interface CopyButtonProps extends ComponentProps<'button'> {
  text: string;
}

export default function CopyButton({ text, className, ...props }: CopyButtonProps) {
  const [hasCopied, setHasCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(text);

    setHasCopied(true);
  }

  useEffect(() => {
    setTimeout(() => setHasCopied(false), 2000);
  }, [hasCopied]);

  return (
    <Button
      onClick={copy}
      className={cn(
        'absolute right-3 top-3 z-10 h-6 w-6 border border-gray-200 bg-gray-150 p-1 hover:bg-gray-200 [&>svg]:text-second',
        className,
      )}
      aria-label="copy contents"
      {...props}
    >
      {!hasCopied ? <Icons.copy className="h-4 w-4" /> : <Icons.check className="h-4 w-4" />}
    </Button>
  );
}
