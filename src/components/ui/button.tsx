import { Slot } from '@radix-ui/react-slot';
import type { ComponentPropsWithoutRef } from 'react';
import { forwardRef } from 'react';

import { cn } from '~/utils/cn';

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
          'inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-md px-3 py-2 font-medium text-second text-sm ring-accent ring-shadow ring-offset-2 transition-colors hover:bg-gray-100 focus-visible:outline-hidden focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50',
          className,
        )}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';
