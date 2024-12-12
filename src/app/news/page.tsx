import Link from 'next/link';
import Icon from '../../../public/icons/icon';

function NewsPage() {
  const tabs = ['귀농', '부동산', '관광'];
  return (
    <div>
      <Link href={'/'} className="flex items-center gap-2 my-[24px] text-[20px]">
        <Icon name="arrow-back" width={24} height={24} />
        <p>뉴스레터</p>
      </Link>
      <div>
        <ul className="flex items-center gap-2">
          {tabs.map((tab, index) => (
            <li key={index} className="text-[16px] text-black">
              {tab}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NewsPage;
