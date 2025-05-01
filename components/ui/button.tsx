import { ComponentProps } from 'react';

import { cn } from '~/libs/utils';

interface ButtonProps extends ComponentProps<'button'> {}

export default function Button({ className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'box-content inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium text-second transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-200 disabled:pointer-events-none disabled:opacity-50',
        className,
      )}
      {...props}
    />
  );
}
