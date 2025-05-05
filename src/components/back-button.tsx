'use client';

import { ComponentPropsWithoutRef, forwardRef } from 'react';
import { useRouter } from 'next/navigation';

import { IconButton } from './ui/icon-button';
import { Icons } from './icons';

interface BackButtonProps extends Partial<ComponentPropsWithoutRef<typeof IconButton>> {}

export const BackButton = forwardRef<HTMLButtonElement, BackButtonProps>(
  ({ label = 'Back to previous page', ...props }, ref) => {
    const router = useRouter();
    const back = () => router.back();

    return (
      <IconButton ref={ref} label={label} onClick={back} {...props}>
        <Icons.back className="h-4 w-4" />
      </IconButton>
    );
  },
);
BackButton.displayName = 'BackButton';
