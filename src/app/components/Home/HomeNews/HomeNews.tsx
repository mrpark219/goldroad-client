import Image from 'next/image';
import React from 'react';

const HomeNews = () => {
  return (
    <div>
      <Image
        src=""
        alt="뉴스이미지"
        width={307}
        height={200}
        className="bg-[#EDEDED] rounded-[16px] mb-[18px] cursor-pointer"
      />
      <div className="w-fit px-[12px] mb-[8px] py-[4px] bg-[#F6F6F6] rounded-[16px] font-medium text-[12px] text-black">
        라이프
      </div>
      <p className="font-bold text-black text-[18px] mb-[8px]">뉴스레터 제목이에요</p>
      <p className="font-medium text-[12px] text-[#666666]">2024.12.20</p>
    </div>
  );
};

export default HomeNews;
