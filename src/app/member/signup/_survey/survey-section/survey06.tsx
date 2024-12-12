'use client';

import DefaultButton from '@/app/components/buttons/default-button';
import { useState } from 'react';
import ButtonLayout from '../../components/layout/button-layout';
import InputLayout from '../../components/layout/input-layout';
import ChoiceLayout from '../choice-layout';
import ChoiceCard from '../choice-section/choice-card';

interface Props {
  handleNext: () => void;
}

function Survey06({ handleNext }: Props) {
  const [selected, setSelected] = useState<number[]>([]);
  const choices = [
    '귀농',
    '펜션 운영',
    '휴식',
    '문화 생활',
    '자연 환경',
    '관광',
    '은퇴 마을',
    '커뮤니티',
  ];
  const handleSelect = (index: number) => {
    setSelected((prev) => [...prev, index]);
  };
  return (
    <ChoiceLayout title="제주 이주 시 주요 관심사를 선택해주세요" subTitle="최소 3개 선택해주세요">
      <InputLayout>
        <div className="grid grid-cols-2 gap-4">
          {choices.map((choice, index) => (
            <ChoiceCard
              key={choice}
              choice={choice}
              isSelected={selected.includes(index)}
              index={index}
              handleSelect={handleSelect}
            />
          ))}
        </div>
      </InputLayout>
      <ButtonLayout>
        <DefaultButton text="가입 완료" onClick={handleNext} disabled={selected.length < 3} />
      </ButtonLayout>
    </ChoiceLayout>
  );
}

export default Survey06;
