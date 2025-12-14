'use client';

import { useMDXComponent } from 'next-contentlayer/hooks';
import type { ComponentProps } from 'react';

import { cn } from '~/utils/cn';

import { CopyButton } from './copy-button';
import type { LinkProps } from './ui/link';
import { Link } from './ui/link';

interface MDXProps {
  code: string;
}

const components = {
  hr: ({ ...props }: ComponentProps<'hr'>) => <hr className="my-4 md:my-8" {...props} />,
  table: ({ className, ...props }: ComponentProps<'table'>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn('w-full', className)} {...props} />
    </div>
  ),
  pre: ({
    children,
    __rawstring__,
    ...props
  }: ComponentProps<'pre'> & { __rawstring__?: string }) => (
    <pre className="font-mono" {...props}>
      {children}
      {__rawstring__ && <CopyButton text={__rawstring__} />}
    </pre>
  ),
  a: ({ target, className, ...props }: LinkProps) => (
    <Link target={target} className={cn(!target && 'text-body', className)} {...props} />
  ),
  note: ({ className, ...props }: ComponentProps<'aside'>) => (
    <aside className={cn('text-disabled italic *:text-disabled *:text-sm', className)} {...props} />
  ),
};

export default function Mdx({ code }: MDXProps) {
  const MDXComponent = useMDXComponent(code);

  return (
    <article className="prose">
      <MDXComponent components={components} />
    </article>
  );
}
