import Link from 'next/link';
import React from 'react';
import Icon from '../../../../../public/icons/icon';

const feedbackPage = () => {
  return (
    <div>
      <Link href="/" className="flex items-center gap-[14px] cursor-pointer mb-[24px]">
        <Icon name="arrow-back" width={28} height={28} />
        <p className="text-[20px] font-semibold">피드백</p>
      </Link>
    </div>
  );
};

export default feedbackPage;
