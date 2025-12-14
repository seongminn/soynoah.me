import { Slot } from '@radix-ui/react-slot';
import type { ComponentPropsWithoutRef } from 'react';
import { forwardRef } from 'react';

import { cn } from '~/utils/cn';

interface HeadingProps extends ComponentPropsWithoutRef<'h1'> {
  asChild?: boolean;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ asChild, as = 'h1', className, children }, ref) => {
    const Component = asChild ? Slot : as;

    return (
      <Component ref={ref} className={cn('font-semibold text-base', className)}>
        {children}
      </Component>
    );
  },
);
Heading.displayName = 'Heading';
