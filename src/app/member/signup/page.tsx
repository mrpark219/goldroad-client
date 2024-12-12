'use client';
import DefaultButton from '@/app/components/buttons/default-button';
import Input from '@/app/components/Input';
import React from 'react';

const SignUpPage = () => {
  return (
    <div className="px-[24px]">
      <div className="flex flex-col gap-[60px] mt-[60px]">
        <Input label="이메일" />
        <Input label="비밀번호" />
        <Input label="비밀번호확인" />
      </div>
      <div className="fixed bottom-[54px] desktop:w-[432px] w-[calc(100%-48px)]">
        <DefaultButton text="시작하기" onClick={() => console.log('a')} />
      </div>
    </div>
  );
};

export default SignUpPage;
