import { Slot } from '@radix-ui/react-slot';
import type { ComponentPropsWithoutRef } from 'react';
import { forwardRef } from 'react';

import { cn } from '~/libs/utils';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild, className, ...props }, ref) => {
    const Component = asChild ? Slot : 'button';

    return (
      <Component
        ref={ref}
        className={cn(
          'ring-shadow ring-accent inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium text-second ring-offset-2 transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50',
          className,
        )}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';
