import { ComponentPropsWithoutRef } from 'react';

import { cn } from '~/libs/utils';

import Button from './button';

interface IconButtonProps extends ComponentPropsWithoutRef<typeof Button> {
  label: string;
}

export default function IconButton({ label, className, ...props }: IconButtonProps) {
  return <Button aria-label={label} className={cn('h-6 w-6 p-1', className)} {...props} />;
}
