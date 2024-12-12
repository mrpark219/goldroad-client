'use client';

import HomeGettering from '@/app/components/Home/HomeGettering';
import { Swiper, SwiperSlide } from 'swiper/react';

function GatherSwiper() {
  return (
    <>
      <p className="font-bold text-[24px] mx-[24px] text-black mb-[24px]">모임</p>
      <Swiper spaceBetween={18} slidesPerView={1.5} className="!ml-[24px] mb-[58px]">
        <SwiperSlide>
          <HomeGettering />
        </SwiperSlide>
        <SwiperSlide>
          <HomeGettering />
        </SwiperSlide>
        <SwiperSlide>
          <HomeGettering />
        </SwiperSlide>
        <SwiperSlide>
          <HomeGettering />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default GatherSwiper;
