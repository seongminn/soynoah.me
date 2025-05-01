import { Post } from 'contentlayer/generated';
import dayjs from 'dayjs';

import Heading from './ui/heading';

export default function PageHeader(post: Post) {
  return (
    <div className="mb-7 font-sans">
      <Heading>{post.title}</Heading>
      <time className="font-sans text-[13px] text-second">
        {dayjs(post.date).format('YYYY. MM. DD')}
      </time>
    </div>
  );
}
