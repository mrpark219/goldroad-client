'use client';

import HomeGettering from '@/app/components/Home/HomeGettering';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

export type MeetingData = {
  activity: string;
  createdDate: string;
  id: number;
  keyword: string;
  lastModifiedDate: string;
  preferredTime: string;
  summary: string;
  title: string;
};
function GatherSwiper() {
  const [meetings, setMeetings] = useState<MeetingData[]>([]);
  const getMeetings = async () => {
    try {
      const token = localStorage.getItem('refreshToken');
      console.log(token, 'token');
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/meeting`, {
        method: 'GET',
        headers: { 'refresh-token': `${token}`, 'access-token': `${token}` },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data, 'meeting');
        return data;
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getMeetings().then((data) => {
      setMeetings(data);
    });
  }, []);
  return (
    <>
      <p className="font-bold text-[24px] mx-[24px] text-black mb-[24px]">모임</p>
      <Swiper spaceBetween={18} slidesPerView={1.5} className="!ml-[24px] mb-[58px]">
        {meetings.map((meeting) => (
          <SwiperSlide key={meeting.id} className="!w-[320px]">
            <HomeGettering meeting={meeting} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default GatherSwiper;
