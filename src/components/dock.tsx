import { ComponentProps } from 'react';

import { Button } from './ui/button';

interface DockProps extends ComponentProps<'div'> {}

export default function Dock({ children, ...props }: DockProps) {
  return (
    <div
      className="fixed bottom-0 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-1.5 shadow-lg"
      {...props}
    >
      {children}
    </div>
  );
}

/* ---- Dock.Item ---- */

interface ItemProps extends ComponentProps<typeof Button> {}

export function Item({ children, ...props }: ItemProps) {
  return (
    <Button className="h-10 w-10 rounded-xl bg-gray-200 p-2" {...props}>
      {children}
    </Button>
  );
}

Dock.Item = Item;
