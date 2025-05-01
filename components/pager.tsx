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
    <div className="text-tx mb-24 flex items-center justify-between gap-1 text-sm">
      {pager.prev && (
        <Link
          scroll={false}
          href={pager.prev.slug}
          className="group line-clamp-1 inline-flex items-center"
        >
          <Icons.left className="group-hover: mr-2 h-5 w-5 text-disabled transition-colors" />
          <span className="group-hover: line-clamp-1 overflow-hidden text-ellipsis text-second transition-colors">
            {pager.prev.title}
          </span>
        </Link>
      )}
      {pager.next && (
        <Link
          scroll={false}
          href={pager.next.slug}
          className="group ml-auto inline-flex items-center text-right"
        >
          <span className="group-hover: line-clamp-1 overflow-hidden text-ellipsis text-second transition-colors">
            {pager.next.title}
          </span>
          <Icons.right className="group-hover: ml-2 h-5 w-5 text-disabled transition-colors" />
        </Link>
      )}
    </div>
  );
}
