import { Post } from 'contentlayer/generated';
import dayjs from 'dayjs';

export default function PageHeader(post: Post) {
  return (
    <div className="mb-7 font-serif">
      <h1 className="text-base font-semibold text-heading">{post.title}</h1>
      <time className="font-serif text-[13px]">
        {dayjs(post.date).format('YYYY. MM. DD')}
      </time>
    </div>
  );
}
