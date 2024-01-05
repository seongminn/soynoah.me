import { useMDXComponent } from 'next-contentlayer/hooks';

import { cn } from '~/libs/utils';

interface MDXProps {
  code: string;
}

const components = {
  hr: ({ ...props }: React.HTMLAttributes<HTMLHRElement>) => (
    <hr className="my-4 md:my-8" {...props} />
  ),
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn('w-full', className)} {...props} />
    </div>
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
