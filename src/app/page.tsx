import Image from 'next/image';

import { Link } from '~//components/ui/link';

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
        디자인 시스템 개발자로서 개발자들에게 편의를 제공하고, 이를 넘어 누구나 웹서비스를 불편함
        없이 사용할 수 있도록 한다 는 것에 뿌듯함을 느낍니다. 최근에는 안정적인 제품을 만드는 것에
        관심이 많습니다. 그래서 테스트에 대해 학습하고, 시스템에 적용하고자 노력하고 있습니다.
      </div>

      <Link
        href="posts"
        className="group inline-flex items-center gap-1 underline decoration-1 decoration-gray-300 underline-offset-4"
      >
        게시물 보러 가기
        {/* <Icons.link className="h-4 w-4 fill-second duration-150 ease-in group-hover:fill-body" /> */}
      </Link>
    </>
  );
}
