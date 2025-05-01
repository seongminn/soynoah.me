import { Slot } from '@radix-ui/react-slot';
import { ComponentPropsWithoutRef } from 'react';

import { cn } from '~/libs/utils';

interface HeadingProps extends ComponentPropsWithoutRef<'h1'> {
  asChild?: boolean;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export default function Heading({ asChild, as = 'h1', className, children }: HeadingProps) {
  const Component = asChild ? Slot : as;

  return <Component className={cn('text-base font-semibold', className)}>{children}</Component>;
}
