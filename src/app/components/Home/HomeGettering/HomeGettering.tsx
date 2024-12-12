import Image from 'next/image';
import React from 'react';

const HomeGettering = () => {
  return (
    <div className="border-[1px] border-solid border-[#C4C4C6] rounded-[16px] p-[20px] flex gap-[12px] cursor-pointer">
      <Image src="" alt="이미지" width={128} height={128} className="bg-[#EDEDED] rounded-[12px]" />
      <div className="flex flex-col">
        <p className="w-fit bg-[#D7F0EA] mb-[4px] text-[#0A614D] text-[12px] font-semibold px-[16px] py-[8px] rounded-[16px]">
          인기
        </p>
        <p className="font-semibold text-[20px] mb-[8px] text-black">모임이름이에요</p>
        <div className="flex flex-wrap gap-[8px] mb-[12px]">
          <p className="font-semibold text-[#666666] text-[18px]"># 제주도</p>
          <p className="font-semibold text-[#666666] text-[18px]"># 서귀포</p>
        </div>
        <div className="flex items-center gap-[12px]">
          <div className="avatar-group -space-x-2 rtl:space-x-reverse">
            <div className="avatar">
              <div className="w-6">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <div className="avatar">
              <div className="w-6">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <div className="avatar">
              <div className="w-6">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <div className="avatar">
              <div className="w-6">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <div className="avatar placeholder">
              <div className="bg-[#D9D9D9] text-extrabold text-[#fff] w-6">
                <span>+</span>
              </div>
            </div>
          </div>
          <p className="text-[#666666] text-[14px]">
            <b className="font-semibold text-[18px]">8</b> /12
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeGettering;
