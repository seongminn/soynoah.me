'use client';

import { useRouter } from 'next/navigation';
import type { ComponentPropsWithoutRef } from 'react';
import { forwardRef } from 'react';

import { Icons } from './icons';
import { IconButton } from './ui/icon-button';

interface BackButtonProps extends Partial<ComponentPropsWithoutRef<typeof IconButton>> {}

// TODO: Should Be Anchor Element
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
