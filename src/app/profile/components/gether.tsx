import GatherModal from '@/app/(home)/gathering/gather-modal';
import Image from 'next/image';
import { useState } from 'react';

function Gether() {
  // 탭
  const [activeTab, setActiveTab] = useState(1);
  const tabs = [
    { id: 1, name: '예정 모임' },
    { id: 2, name: '지난 모임' },
  ];
  const onClickTab = (id: number) => {
    setActiveTab(id);
  };

  // 모달
  const [isModalOpen, setIsModalOpen] = useState(true);
  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  if (isModalOpen) {
    return <GatherModal handleModalClose={handleModalClose} />;
  }

  // datas에 실제 api를 불러오시면 됩니다!
  const datas1 = [
    {
      createdDate: '2024-12-12T20:33:32.11317',
      lastModifiedDate: '2024-12-12T20:33:32.11317',
      id: 3,
      title: '귀농을 고민하는 제주 이주 희망자들을 위한 소통의 장',
      summary:
        '제주도로 이주를 꿈꾸는 분들이 자유롭게 의견을 나누고 경험을 공유할 수 있는 모임입니다.',
      activity:
        '1. 각자의 귀농 꿈과 계획을 공유하기2. 제주도에서의 생활 경험에 대해 이야기 나누기3. 귀농 관련 정보나 자료를 서로 공유하기4. 지역 농산물에 대해 이야기하고 조언 주고받기5. 서로 격려하고 응원하는 시간을 가지기',
      preferredTime: '평일 오전, 평일 오후',
      keyword: '귀농',
    },
    {
      createdDate: '2024-12-12T20:31:54.454641',
      lastModifiedDate: '2024-12-12T20:31:54.454641',
      id: 2,
      title: '귀농을 위한 제주 이주 고민 모임',
      summary:
        '제주도로 이주를 원하는 사람들과 귀농에 대한 경험과 정보를 자유롭게 나누는 공간입니다.',
      activity:
        '1. 귀농에 대한 개인적인 경험 공유하기2. 제주도의 농업 환경에 대한 의견 나누기3. 서로의 이주 계획에 대해 이야기하기4. 제주도에서의 생활에 대한 질문과 답변하기5. 긍정적인 마음으로 서로 격려하며 마무리하기',
      preferredTime: '평일 오전, 평일 오후',
      keyword: '관광',
    },
    {
      createdDate: '2024-12-12T20:30:03.542273',
      lastModifiedDate: '2024-12-12T20:30:03.542273',
      id: 1,
      title: '귀농을 위한 제주 이주 모임',
      summary:
        '이 모임은 제주도로 이주를 희망하는 사람들을 위한 공간으로, 자유롭게 의견을 나누고 경험을 공유하며 서로의 고민을 나누는 자리입니다. 아직 제주도에 정착하지 않은 이주 희망자들이 모여 서로의 이야기를 듣고, 귀농에 대한 다양한 정보를 교환할 수 있는 기회를 제공합니다.',
      activity:
        '1. 각자의 귀농 계획과 꿈을 공유하는 시간2. 제주도에서의 생활과 농업에 대한 정보 나누기3. 귀농을 위한 필요한 자원이나 팁을 서로 추천하기4. 제주도에서의 자연이나 문화에 대한 이야기 나누기5. 서로 응원하고 격려하며 긍정적인 에너지를 나누는 시간',
      preferredTime: '평일 오전, 평일 오후',
      keyword: '귀농',
    },
  ];
  const datas2 = [
    {
      createdDate: '2024-12-12T20:33:32.11317',
      lastModifiedDate: '2024-12-12T20:33:32.11317',
      id: 3,
      title: '귀농을 고민하는 제주 이주 희망자들을 위한 소통의 장',
      summary:
        '제주도로 이주를 꿈꾸는 분들이 자유롭게 의견을 나누고 경험을 공유할 수 있는 모임입니다.',
      activity:
        '1. 각자의 귀농 꿈과 계획을 공유하기2. 제주도에서의 생활 경험에 대해 이야기 나누기3. 귀농 관련 정보나 자료를 서로 공유하기4. 지역 농산물에 대해 이야기하고 조언 주고받기5. 서로 격려하고 응원하는 시간을 가지기',
      preferredTime: '평일 오전, 평일 오후',
      keyword: '자연환경',
    },
    {
      createdDate: '2024-12-12T20:31:54.454641',
      lastModifiedDate: '2024-12-12T20:31:54.454641',
      id: 2,
      title: '귀농을 위한 제주 이주 고민 모임',
      summary:
        '제주도로 이주를 원하는 사람들과 귀농에 대한 경험과 정보를 자유롭게 나누는 공간입니다.',
      activity:
        '1. 귀농에 대한 개인적인 경험 공유하기2. 제주도의 농업 환경에 대한 의견 나누기3. 서로의 이주 계획에 대해 이야기하기4. 제주도에서의 생활에 대한 질문과 답변하기5. 긍정적인 마음으로 서로 격려하며 마무리하기',
      preferredTime: '평일 오전, 평일 오후',
      keyword: '문화생활',
    },
    {
      createdDate: '2024-12-12T20:30:03.542273',
      lastModifiedDate: '2024-12-12T20:30:03.542273',
      id: 1,
      title: '귀농을 위한 제주 이주 모임',
      summary:
        '이 모임은 제주도로 이주를 희망하는 사람들을 위한 공간으로, 자유롭게 의견을 나누고 경험을 공유하며 서로의 고민을 나누는 자리입니다. 아직 제주도에 정착하지 않은 이주 희망자들이 모여 서로의 이야기를 듣고, 귀농에 대한 다양한 정보를 교환할 수 있는 기회를 제공합니다.',
      activity:
        '1. 각자의 귀농 계획과 꿈을 공유하는 시간2. 제주도에서의 생활과 농업에 대한 정보 나누기3. 귀농을 위한 필요한 자원이나 팁을 서로 추천하기4. 제주도에서의 자연이나 문화에 대한 이야기 나누기5. 서로 응원하고 격려하며 긍정적인 에너지를 나누는 시간',
      preferredTime: '평일 오전, 평일 오후',
      keyword: '귀농',
    },
  ];

  const icons = [
    {
      id: 1,
      name: '관광',
      imagePath: '../../../../icons/gathering1.svg',
    },
    {
      id: 2,
      name: '귀농',
      imagePath: '../../../../icons/gathering2.svg',
    },
    {
      id: 3,
      name: '자연환경',
      imagePath: '../../../../icons/gathering3.svg',
    },
    {
      id: 4,
      name: '문화생활',
      imagePath: '../../../../icons/gathering4.svg',
    },
    {
      id: 5,
      name: '휴식',
      imagePath: '../../../../icons/gathering5.svg',
    },
    {
      id: 6,
      name: '은퇴마을',
      imagePath: '../../../../icons/gathering6.svg',
    },
  ];

  return (
    <div className="mb-[320px]">
      <div className="mt-[33px] mb-[15px] flex gap-[6px]">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            onClick={() => onClickTab(tab.id)}
            className={`font-semibold text-[18px] px-[20px] py-[12px] rounded-[24px]  w-fit cursor-pointer ${activeTab === tab.id ? 'bg-primary text-white' : 'bg-white text-black'}`}
          >
            {tab.name}
          </div>
        ))}
      </div>
      {activeTab === 1 && (
        <div className="flex flex-col gap-[12px]">
          {datas1.map((data) => (
            <div
              key={data.id}
              className="border-[1px] border-solid border-[#C4C4C6] rounded-[8px] p-[20px] flex-col flex gap-[40px] cursor-pointer"
            >
              <div className="flex gap-[12px]">
                {icons.map(
                  (icon) =>
                    data.keyword === icon.name && (
                      <Image
                        key={icon.name}
                        src={icon.imagePath}
                        alt={icon.name}
                        width={128}
                        height={128}
                        className="bg-[#EDEDED] rounded-[12px]"
                      />
                    ),
                )}
                <div className="flex flex-col">
                  <p className="w-fit bg-[#D7F0EA] mb-[4px] text-[#0A614D] text-[12px] font-semibold px-[10px] py-[4px] rounded-[16px]">
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
              <div className="flex gap-[12px]">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="h-[48px] bg-[#EBEBEC] w-full rounded-[8px] font-semibold text-black text-[18px]"
                >
                  상세보기
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {activeTab === 2 && (
        <div className="flex flex-col gap-[12px]">
          {datas2.map((data) => (
            <div
              key={data.id}
              className="border-[1px] border-solid border-[#C4C4C6] rounded-[8px] p-[20px] flex-col flex gap-[40px] cursor-pointer"
            >
              <div className="flex gap-[12px]">
                {icons.map(
                  (icon) =>
                    data.keyword === icon.name && (
                      <Image
                        key={icon.name}
                        src={icon.imagePath}
                        alt={icon.name}
                        width={128}
                        height={128}
                        className="bg-[#EDEDED] rounded-[12px]"
                      />
                    ),
                )}
                <div className="flex flex-col">
                  <p className="w-fit bg-[#D7F0EA] mb-[4px] text-[#0A614D] text-[12px] font-semibold px-[10px] py-[4px] rounded-[16px]">
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
              <div className="flex gap-[12px]">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="h-[48px] bg-[#EBEBEC] w-full rounded-[8px] font-semibold text-black text-[18px]"
                >
                  상세보기
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Gether;
