import Link from 'next/link';

import { Icons } from './icons';

export type TPager = {
  prev?: {
    title: string;
    slug: string;
  };
  next?: {
    title: string;
    slug: string;
  };
};

interface PagerProps {
  pager: TPager;
}

export default function Pager({ pager }: PagerProps) {
  return (
    <div className="text-tx mb-24 grid grid-cols-2 justify-between gap-1 text-sm">
      {pager.prev && (
        <Link
          scroll={false}
          href={pager.prev.slug}
          className="group line-clamp-1 inline-flex items-center px-4 py-2"
        >
          <Icons.left className="mr-2 h-5 w-5 text-disabled transition-colors group-hover:text-heading" />
          <span className="line-clamp-1 overflow-hidden text-ellipsis text-second transition-colors group-hover:text-heading">
            {pager.prev.title}
          </span>
        </Link>
      )}
      {pager.next && (
        <Link
          scroll={false}
          href={pager.next.slug}
          className="group ml-auto inline-flex items-center text-right text-second hover:text-body"
        >
          <span className="line-clamp-1 overflow-hidden text-ellipsis text-second transition-colors group-hover:text-heading">
            {pager.next.title}
          </span>
          <Icons.right className="ml-2 h-5 w-5 text-disabled transition-colors group-hover:text-heading" />
        </Link>
      )}
    </div>
  );
}
