'use client';

import DefaultButton from '@/app/components/buttons/default-button';
import Input from '@/app/components/Input';
import ButtonLayout from '../../components/layout/button-layout';
import InputLayout from '../../components/layout/input-layout';

interface Props {
  handleNext: () => void;
}

function Signup({ handleNext }: Props) {
  return (
    <div>
      <InputLayout>
        <Input label="이메일" />
        <Input label="비밀번호" />
        <Input label="비밀번호확인" />
        <Input label="이름" />
      </InputLayout>
      <ButtonLayout>
        <DefaultButton text="시작하기" onClick={handleNext} />
      </ButtonLayout>
    </div>
  );
}

export default Signup;
