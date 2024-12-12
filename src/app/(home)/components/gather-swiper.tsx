'use client';

import HomeGettering from '@/app/components/Home/HomeGettering';
import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

function GatherSwiper() {
  const getMeetings = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/meeting`, {
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
    getMeetings().then((data) => {
      console.log(data, 'meeting');
    });
  }, []);
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
