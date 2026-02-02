import { useRender } from '@base-ui/react';
import { forwardRef } from 'react';

import { cn } from '~/utils/cn';

export interface LinkProps extends useRender.ComponentProps<'a'> {}

// TODO: NextLink support
export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ render, className, ...props }, ref) => {
    return useRender({
      defaultTagName: 'a',
      ref,
      render,
      props: {
        className: cn(
          'ease inline-block break-all rounded-xs text-second ring-accent ring-shadow ring-offset-2 transition-colors duration-100 hover:text-body hover:decoration-gray-800 focus-visible:text-body focus-visible:ring-2',
          className,
        ),
        ...props,
      },
    });

    // return (
    //   <Component
    //     ref={ref}
    //     className={cn(
    //       'ease inline-block break-all rounded-xs text-second ring-accent ring-shadow ring-offset-2 transition-colors duration-100 hover:text-body hover:decoration-gray-800 focus-visible:text-body focus-visible:ring-2',
    //       className,
    //     )}
    //     {...props}
    //   >
    //     {children}
    //   </Component>
    // );
  },
);
Link.displayName = 'Link';
