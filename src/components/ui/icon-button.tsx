import { ComponentPropsWithoutRef, forwardRef } from 'react';

import { cn } from '~//libs/utils';

import { Button } from './button';

interface IconButtonProps extends ComponentPropsWithoutRef<typeof Button> {
  label: string;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ label, className, ...props }, ref) => {
    return (
      <Button ref={ref} aria-label={label} className={cn('h-7 w-7 p-0', className)} {...props} />
    );
  },
);
