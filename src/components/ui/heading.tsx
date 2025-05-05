import { ComponentPropsWithoutRef, forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';

import { cn } from '~//libs/utils';

interface HeadingProps extends ComponentPropsWithoutRef<'h1'> {
  asChild?: boolean;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ asChild, as = 'h1', className, children }, ref) => {
    const Component = asChild ? Slot : as;

    return (
      <Component ref={ref} className={cn('text-base font-semibold', className)}>
        {children}
      </Component>
    );
  },
);
Heading.displayName = 'Heading';
