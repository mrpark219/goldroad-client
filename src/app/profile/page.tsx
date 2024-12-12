'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import Icon from '../../../public/icons/icon';
import Feedback from './components/feedback';
import Gether from './components/gether';

function ProfilePage() {
  const router = useRouter();
  const tabList = ['내 모임', '피드백'];
  const [selectedTab, setSelectedTab] = useState(tabList[0]);
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-[12px] py-12">
        <Icon name="profile-default" width={130} height={140} />
        <button onClick={() => router.push('/profile/goldroad')}>
          <p className="text-[24px] font-bold">{'닉네임님 >'}</p>
        </button>
      </div>
      <ul className="flex items-center justify-center w-full">
        {tabList.map((tab) => (
          <li
            key={tab}
            className={twMerge(
              'w-1/2 flex items-center justify-center text-text-03 border-b-2',
              selectedTab === tab && ' text-primary border-primary border-b-2',
            )}
          >
            <button onClick={() => setSelectedTab(tab)} className="w-full h-full">
              {tab}
            </button>
          </li>
        ))}
      </ul>
      {selectedTab === '내 모임' && <Gether />}
      {selectedTab === '피드백' && <Feedback />}
    </div>
  );
}

export default ProfilePage;
