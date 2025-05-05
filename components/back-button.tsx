'use client';

import { ComponentProps } from 'react';
import { useRouter } from 'next/navigation';

import IconButton from './ui/icon-button';
import { Icons } from './icons';

export default function BackButton(props: ComponentProps<'button'>) {
  const router = useRouter();

  return (
    <IconButton label="Back to posts" onClick={() => router.push('/posts')} {...props}>
      <Icons.back className="h-4 w-4" />
    </IconButton>
  );
}
