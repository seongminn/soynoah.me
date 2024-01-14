import Link from 'next/link';

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
          className="group line-clamp-1 flex flex-col gap-1"
        >
          <div className="text-disabled transition-colors group-hover:text-second">
            Prev
          </div>
          <span className="line-clamp-1 overflow-hidden text-ellipsis text-second transition-colors group-hover:text-heading">
            {pager.prev.title}
          </span>
        </Link>
      )}
      {pager.next && (
        <Link
          scroll={false}
          href={pager.next.slug}
          className="group ml-auto flex flex-col gap-1 text-right text-second hover:text-body"
        >
          <div className="text-disabled transition-colors group-hover:text-second">
            Next
          </div>
          <span className="line-clamp-1 overflow-hidden text-ellipsis text-second transition-colors group-hover:text-heading">
            {pager.next.title}
          </span>
        </Link>
      )}
    </div>
  );
}
