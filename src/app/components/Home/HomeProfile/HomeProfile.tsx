import Image from 'next/image';
import React from 'react';
import Icon from '../../../../../public/icons/icon';

const HomeProfile = () => {
  return (
    <div className="mx-[24px] p-[28px] bg-[#FFF3EC] rounded-[16px] mt-[40px] mb-[58px] flex gap-[12px] items-center cursor-pointer">
      <Image
        src="../../../../icons/profile.svg"
        alt="프로필"
        width={108}
        height={108}
        className="bg-[#F8F8F8] rounded-full"
      />
      <div>
        <p className="font-semibold text-[24px] text-black mb-[4px] mr-[4px]">00님</p>
        <p className="font-semibold text-[20px] text-black flex items-center">
          내 황금향 <Icon name="arrow-right" width={16} height={16} />
        </p>
      </div>
    </div>
  );
};

export default HomeProfile;
