import { Slot } from '@radix-ui/react-slot';
import { type ComponentPropsWithoutRef, forwardRef } from 'react';

import { cn } from '~/libs/utils';

export interface LinkProps extends ComponentPropsWithoutRef<'a'> {
  asChild?: boolean;
}

// TODO: NextLink support
export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ asChild, className, children, ...props }, ref) => {
    const Component = asChild ? Slot : 'a';

    return (
      <Component
        ref={ref}
        className={cn(
          'ease block break-all rounded-xs text-second ring-accent ring-shadow ring-offset-2 transition-colors duration-100 hover:text-body hover:decoration-gray-800 focus-visible:text-body focus-visible:ring-2',
          className,
        )}
        {...props}
      >
        {children}
      </Component>
    );
  },
);
Link.displayName = 'Link';
