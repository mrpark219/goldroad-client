'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import HomeGettering from '../components/Home/HomeGettering';
import HomeNews from '../components/Home/HomeNews';
import HomeProfile from '../components/Home/HomeProfile';

import 'swiper/css';

const HomePage = () => {
  return (
    <div>
      <HomeProfile />
      <p className="font-bold text-[24px] mx-[24px] text-black mb-[24px]">뉴스레터</p>
      <Swiper spaceBetween={18} slidesPerView={1.5} className="!ml-[24px] mb-[58px]">
        <SwiperSlide>
          <HomeNews />
        </SwiperSlide>
        <SwiperSlide>
          <HomeNews />
        </SwiperSlide>
        <SwiperSlide>
          <HomeNews />
        </SwiperSlide>
        <SwiperSlide>
          <HomeNews />
        </SwiperSlide>
      </Swiper>
      <p className="font-bold text-[24px] mx-[24px] text-black mb-[24px]">모임</p>
      <Swiper spaceBetween={18} slidesPerView={1.1} className="!ml-[24px] mb-[240px]">
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
    </div>
  );
};

export default HomePage;
