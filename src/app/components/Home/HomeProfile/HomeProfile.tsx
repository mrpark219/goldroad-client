'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import Icon from '../../../../../public/icons/icon';

const HomeProfile = () => {
  const getMemberInfo = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/member`, {
        method: 'GET',
        credentials: 'include',
      });
      if (response.ok) {
        return await response.json();
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getMemberInfo().then((data) => {
      console.log(data, 'HomeProfile');
    });
  }, []);
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
