'use client';

import DefaultButton from '@/app/components/buttons/default-button';
import { useState } from 'react';
import ButtonLayout from '../../components/layout/button-layout';
import InputLayout from '../../components/layout/input-layout';
import Button05 from '../button/button-05';
import ChoiceLayout from '../choice-layout';

interface Props {
  handleNext: () => void;
}

function Survey05({ handleNext }: Props) {
  const [selected, setSelected] = useState<number>(0);
  const choices = [2, 5, 10, 30, 50];
  const handleSelect = (index: number) => {
    setSelected(index);
  };
  return (
    <ChoiceLayout title="선호하는 모임 인원을 선택해주세요">
      <InputLayout>
        <div className="flex flex-col w-full gap-1">
          <input
            type="range"
            min={0}
            max="100"
            value={selected}
            className="range"
            step="25"
            onChange={(e) => setSelected(Number(e.target.value))}
          />
          <div className="flex w-full justify-between text-xs">
            {choices.map((num, index) => (
              <Button05 key={num} num={num} index={index} setNum={handleSelect} />
            ))}
          </div>
        </div>
      </InputLayout>
      <ButtonLayout>
        <DefaultButton text="다음" onClick={handleNext} />
      </ButtonLayout>
    </ChoiceLayout>
  );
}

export default Survey05;
