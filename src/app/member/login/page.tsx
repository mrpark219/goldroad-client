'use client';
import DefaultButton from '@/app/components/buttons/default-button';
import Input from '@/app/components/Input';
import Link from 'next/link';
import React from 'react';

const LoginPage = () => {
  return (
    <>
      <div className="mx-[24px] mt-[48px] flex flex-col gap-[48px]">
        <p className="text-[24px] font-bold text-black">안녕하세요!</p>
        <Input label="이메일" />
        <Input label="비밀번호" />
      </div>
      <div className="fixed bottom-[54px] w-[calc(100%-48px)] desktop:w-[432px] left-[50%] translate-x-[-50%]">
        <DefaultButton text="시작하기" onClick={() => console.log('a')} />
        <Link
          href={'/member/signup'}
          className="text-[18px] font-medium text-text-disabled underline text-center block mt-[18px]"
        >
          회원가입하기
        </Link>
      </div>
    </>
  );
};

export default LoginPage;
