'use client';
import Image from 'next/image';
import Icon from '../../../../public/icons/icon';
import useToggle from '@/lib/hooks/useToggle';

function GoldroadPage() {
  const [isOpenGrade, toggleOpenGrade] = useToggle(true);

  return (
    <div className="mx-[24px]">
      {/* 상단바 */}
      <div className="flex items-center gap-[14px] cursor-pointer mb-[24px]">
        <Icon name="arrow-back" width={28} height={28} />
        <p className="text-[20px] font-semibold">내 황금향 키우기</p>
      </div>
      {/* 이미지 */}
      <div className="w-full h-[296px] relative rounded-[16px] bg-gray mb-[28px] overflow-hidden">
        <Image src="/icons/grade1.svg" alt="황금향이미지" fill objectFit="cover" />
      </div>
      {/* progress bar */}
      <div className="relative mb-[70px]">
        <progress
          className="progress progress-primary bg-[#FFF3EC] w-full h-[14px]"
          value="10"
          max="100"
        ></progress>
        <div className="top-[50%] translate-y-[-60%] left-[5%] absolute">
          <Icon name="orange" width={38} height={45} />
          <p className="absolute bottom-[-50%] text-[18px] font-medium">씨앗</p>
        </div>
      </div>
      {/* 피드백 */}
      <p className="font-semibold text-[18px] text-black">내가 받은 피드백</p>
      <p className="font-medium text-[16px] text-[#666666] mb-[24px]">
        모임에 참여하고 뱃지를 획득해보세요!
      </p>
      <div className="flex gap-[16px] mb-[38px]">
        <div>
          <div className="w-[134px] h-[134px] rounded-full bg-[#EEF4FF] mb-[8px] flex justify-center items-center">
            <Icon name="water" width={58} height={58} />
          </div>
          <p className="text-[18px] font-medium text-[#666666] text-center">물+4</p>
          <p className="text-[16px] font-medium text-[#3755CF] text-center">활발해요!</p>
        </div>
        <div>
          <div className="w-[134px] h-[134px] rounded-full bg-[#EEF4FF] mb-[8px] flex justify-center items-center">
            <Icon name="sun" width={58} height={58} />
          </div>
          <p className="text-[18px] font-medium text-[#666666] text-center">햇빛+4</p>
          <p className="text-[16px] font-medium text-[#3755CF] text-center">활발해요!</p>
        </div>
        <div>
          <div className="w-[134px] h-[134px] rounded-full bg-[#EEF4FF] mb-[8px] flex justify-center items-center">
            <Icon name="soy" width={58} height={58} />
          </div>
          <p className="text-[18px] font-medium text-[#666666] text-center">거름+4</p>
          <p className="text-[16px] font-medium text-[#3755CF] text-center">활발해요!</p>
        </div>
      </div>
      {/* 황금향등급 */}
      <div className="mb-[48px]">
        <div className="flex justify-between mt-[10px] mb-[24px] items-center">
          <p className="font-bold text-[18px]">황금향등급</p>
          <div className="cursor-pointer" onClick={toggleOpenGrade}>
            <Icon name={isOpenGrade ? `dropup` : `dropdown`} width={24} height={24} />
          </div>
        </div>
        {isOpenGrade && (
          <div>
            <p>·씨앗: 호기심 많은 제주 관심자</p>
            <p>·새싹: 정보를 모으는 제주 탐색자 (모임 5회 이상, 재료 10개 이상)</p>
            <p>·묘목: 첫발을 내딛은 제주 방문자 (모임 10회 이상, 재료 20개 이상)</p>
            <p>·잎새: 경험을 쌒는 제주 여행자 (모임 20회 이상, 재료 50개 이상)</p>
            <p>·가지: 얘기를 전하는 제주 소개자 (모임 30회 이상, 재료 100개 이상)</p>
            <p>·꽃: 길잡이가 되는 제주 가이드 (모임 50회 이상, 재료 150개 이상)</p>
            <p>·열매: 모험을 즐기는 제주 탐험가 (모임 80회 이상, 재료 250개 이상)</p>
            <p>·나무: 뿌리를 내린 제주 정착자 (모임 100회 이상, 재료 300개 이상)</p>
            <p>·황금향: 전설이 된 제주 토박이 (모임 200회 이상, 재료 600개 이상)</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default GoldroadPage;
