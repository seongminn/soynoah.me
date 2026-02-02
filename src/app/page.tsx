import Image from 'next/image';
import NextLink from 'next/link';

import { Link } from '~//components/ui/link';
import { site } from '~/site';

export default function Page() {
  return (
    <>
      <Image
        src="/profile.webp"
        alt="seongminn profile"
        width="160"
        height="160"
        priority={true}
        className="mb-default h-42 w-42 rounded-full object-cover"
      />
      <h1 className="mb-default font-serif">안녕하세요. 프론트엔드 개발자 최성민입니다.</h1>

      <div className="mb-default text-pretty break-keep font-serif">
        제품 개발자가 고민하지 않아도 고품질의 결과물을 빠르게 낼 수 있는 인프라를 만드는 데
        집중합니다. 특히 웹 접근성을 사용자의 책임이 아닌 시스템의 기본값으로 만드는 것을
        지향합니다.
        <br />
        <br />
        시스템의 지속 가능성은 견고한 안정성 에서 시작된다고 믿습니다. 변경 사항이 제품에 미치는
        영향을 두려워하지 않도록 안정적인 환경을 구축하는데 관심이 많습니다.
      </div>

      <div className="flex items-center gap-2">
        <Link
          render={
            <NextLink
              href="posts"
              className="inline-flex items-center underline decoration-1 decoration-gray-300 underline-offset-4"
            >
              Posts
            </NextLink>
          }
        />

        <Link
          href={site.author.contact.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center underline decoration-1 decoration-gray-300 underline-offset-4"
        >
          Resume
        </Link>
      </div>
    </>
  );
}
