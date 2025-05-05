import { Post } from 'contentlayer/generated';

import * as time from '~//libs/time';

import Heading from './ui/heading';

export default function PageHeader(post: Post) {
  return (
    <div className="mb-7 font-sans">
      <Heading>{post.title}</Heading>
      <time
        dateTime={time.format(post.date, 'YYYY-MM-DD')}
        className="font-sans text-[13px] text-second"
      >
        {time.format(post.date, 'YYYY. MM. DD')}
      </time>
    </div>
  );
}
