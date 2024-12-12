'use client';

import HomeNews from '@/app/components/Home/HomeNews';
import { Swiper, SwiperSlide } from 'swiper/react';
function NewsSwiper({
  titles,
  images,
  link,
}: {
  titles: string[];
  images: string[];
  link: string[];
}) {
  return (
    <>
      <p className="font-bold text-[24px] mx-[24px] text-black mb-[24px]">뉴스레터</p>
      <Swiper spaceBetween={18} slidesPerView={1.5} className="!ml-[24px] mb-[58px]">
        {titles.map((title, index) => (
          <SwiperSlide key={index}>
            <HomeNews title={title} image={images[index]} type="귀농" link={link[index]} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default NewsSwiper;
