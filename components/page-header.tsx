import { Post } from 'contentlayer/generated';
import dayjs from 'dayjs';
import Image from 'next/image';

export default function PageHeader(post: Post) {
  return (
    <>
      <div className="mb-7 font-serif">
        <h1 className="text-heading">{post.title}</h1>
        <time className="font-serif text-sm">
          {dayjs(post.date).format('MMM.DD.YYYY')}
        </time>
      </div>
      {post.image && (
        <Image
          src={post.image}
          alt={`${post.title} thumbnail`}
          width={400}
          height={300}
          className="mb-12"
        />
      )}
    </>
  );
}
