import { useRender } from '@base-ui/react';
import type { ComponentPropsWithoutRef } from 'react';
import { forwardRef } from 'react';

import { cn } from '~/utils/cn';

interface HeadingProps extends ComponentPropsWithoutRef<'h1'> {
  render?: useRender.RenderProp;
}

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ render, className, ...props }, ref) => {
    const defaultProps: useRender.ElementProps<'h1'> = {
      className: cn('font-semibold text-base', className),
      ...props,
    };

    return useRender({
      ref,
      render,
      defaultTagName: 'h1',
      props: defaultProps,
    });
  },
);
Heading.displayName = 'Heading';
