'use client';

import { useMDXComponent } from 'next-contentlayer/hooks';
import { ComponentProps } from 'react';

import { cn } from '../libs/utils';
import CopyButton from './copy-button';

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
    <pre {...props}>
      {children}
      {__rawstring__ && <CopyButton text={__rawstring__} />}
    </pre>
  ),
};

export default function Mdx({ code }: MDXProps) {
  const MDXComponent = useMDXComponent(code);

  return (
    <article className="mdx">
      <MDXComponent components={components} />
    </article>
  );
}
