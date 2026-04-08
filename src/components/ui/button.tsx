import { useRender } from '@base-ui/react';
import type { ComponentPropsWithoutRef } from 'react';
import { forwardRef } from 'react';

import { cn } from '~/utils/cn';

import { Interaction } from './interaction';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  render?: useRender.RenderProp;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ render, className, children: childrenProp, ...props }, ref) => {
    const defaultProps: useRender.ElementProps<'button'> = {
      className: cn(
        'group ring-accent ring-shadow relative inline-flex cursor-pointer items-center justify-center rounded-md px-3 py-2 text-sm font-medium whitespace-nowrap text-second ring-offset-2 transition-colors disabled:pointer-events-none disabled:opacity-50',
        className,
      ),
      children: (
        <>
          {childrenProp}
          <Interaction />
        </>
      ),
      ...props,
    };

    return useRender({
      ref,
      render,
      defaultTagName: 'button',
      props: defaultProps,
    });
  },
);
Button.displayName = 'Button';
