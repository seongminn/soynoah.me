import type { ComponentPropsWithoutRef } from 'react';
import { Slot } from '@radix-ui/react-slot';

import { cn } from '~//libs/utils';

export interface LinkProps extends ComponentPropsWithoutRef<'a'> {
  asChild?: boolean;
}

export default function Link({ asChild, className, children, ...props }: LinkProps) {
  const Component = asChild ? Slot : 'a';

  return (
    <Component
      className={cn(
        'inline-block break-all rounded-sm text-second underline decoration-gray-600 decoration-1 underline-offset-4 transition-colors duration-150 ease-in hover:text-body hover:decoration-gray-800 focus-visible:text-body focus-visible:ring-2',
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
