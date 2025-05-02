import Image from 'next/image';

import { Icons } from '~/components/icons';
import Link from '~/components/ui/link';

export default function Page() {
  return (
    <>
      <Image
        src="/profile.webp"
        alt="seongminn profile"
        width="160"
        height="160"
        priority={true}
        className="mb-10 h-40 w-40 rounded-full object-cover"
      />
      <h1 className="mb-3 font-sans">안녕하세요. 신입 프론트엔드 개발자 최성민입니다.</h1>

      <div className="mb-2 font-sans">
        내가 만든 웹사이트가 사용자들에게 편리함을 제공하고, 나아가 행복을 전달할 수 있다는 점에
        보람을 느껴 프론트엔드 개발자의 꿈을 갖게 되었습니다.
      </div>

      <ul className="mb-5 list-outside list-disc pl-4">
        <li className="list-item leading-7 marker:text-gray-300">
          기술적으로 고민하는 것을 즐거워하고, 이를 통해 성능을 개선하기 위해 노력합니다.
        </li>
        <li className="list-item leading-7 marker:text-gray-300">지식을 나누는 것을 좋아합니다.</li>
        <li className="list-item leading-7 marker:text-gray-300">
          상호존중하며 원활하게 소통하는 방법에 대해 고민하는 것을 좋아합니다.
        </li>
      </ul>

      <Link href="posts" className="inline-flex items-center gap-1">
        게시물 보러 가기
        <Icons.link className="h-4 w-4 fill-gray-800 duration-150 ease-in" />
      </Link>
    </>
  );
}
