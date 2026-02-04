import { useRender } from '@base-ui/react';
import { type ComponentPropsWithoutRef, forwardRef } from 'react';

import { cn } from '~/utils/cn';

export interface LinkProps extends ComponentPropsWithoutRef<'a'> {
  render?: useRender.RenderProp;
}

// TODO: NextLink support
export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ render, className, ...props }, ref) => {
    const defaultProps: useRender.ElementProps<'a'> = {
      className: cn(
        'ease inline-block break-all rounded-xs text-second ring-accent ring-shadow ring-offset-2 transition-colors duration-100 hover:text-body hover:decoration-gray-800 focus-visible:text-body focus-visible:ring-2',
        className,
      ),
      ...props,
    };

    return useRender({
      defaultTagName: 'a',
      ref,
      render,
      props: defaultProps,
    });
  },
);
Link.displayName = 'Link';
