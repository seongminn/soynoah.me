import { Post } from 'contentlayer/generated';
import dayjs from 'dayjs';

export default function PageHeader(post: Post) {
  return (
    <div className="mb-7 font-serif">
      <h1 className="text-heading">{post.title}</h1>
      <time className="font-serif text-sm">
        {dayjs(post.date).format('MMM.DD.YYYY')}
      </time>
    </div>
  );
}
