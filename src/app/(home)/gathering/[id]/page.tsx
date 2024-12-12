'use client';
import React from 'react';
import ChatIcon from '/public/icons/chatting.svg';

const page = () => {
  return (
    <div className="mx-[24px]">
      <p className="mt-[66px] text-[24px] font-bold text-black mb-[8px]">어떤모임제목이에요</p>
      <div className="flex flex-wrap gap-[12px] mb-[18px]">
        <p className="font-semibold text-[#666666] text-[18px]">#제주도</p>
        <p className="font-semibold text-[#666666] text-[18px]">#서귀포</p>
      </div>
      <p className="text-[#666666] font-medium text-[18px] mb-[24px]">
        모임에대한설명이에여모임에대한설명이에여모임에대한설명이에여모임에대한설명이에여
      </p>
      <div className="flex justify-between w-full items-center">
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
        <div className="text-[#666666] flex items-center gap-[8px] cursor-pointer">
          채팅참여
          <ChatIcon />
        </div>
      </div>
    </div>
  );
};

export default page;
