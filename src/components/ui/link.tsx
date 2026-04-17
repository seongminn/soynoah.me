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
        'ease ring-accent ring-shadow inline-block cursor-pointer break-all text-second ring-offset-2 transition-colors duration-100 hover:text-body hover:decoration-gray-800 focus-visible:text-body focus-visible:ring-2',
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
