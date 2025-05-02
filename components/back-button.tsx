'use client';

import { useRouter } from 'next/navigation';
import { ComponentProps } from 'react';

import { Icons } from './icons';
import IconButton from './ui/icon-button';

export default function BackButton(props: ComponentProps<'button'>) {
  const router = useRouter();

  return (
    <IconButton label="Back to posts" onClick={() => router.push('/posts')} {...props}>
      <Icons.back className="h-4 w-4" />
    </IconButton>
  );
}
