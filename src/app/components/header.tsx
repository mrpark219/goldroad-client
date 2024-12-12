import Link from 'next/link';
import Icon from '../../../public/icons/icon';

function Header() {
  return (
    <header className="w-full h-[52px]">
      <nav className="flex justify-between items-center w-full h-full px-[24px] font-bold text-[26px]">
        <Link href={'/'}>
          <Icon name="logo" width={71} height={28} />
        </Link>
        <div className="cursor-pointer">
          <Icon name="menu" width={18} height={16} />
        </div>
      </nav>
    </header>
  );
}

export default Header;
