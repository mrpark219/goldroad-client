import React from 'react';

type Props = {
  label: string;
  errorMessage?: string;
};

const Input = ({ label, errorMessage }: Props) => {
  return (
    <div className="flex flex-col">
      <label className="text-text-disabled font-medium text-[20px]">{label}</label>
      <input
        value={'내용내용'}
        className="h-[52px] border-b-[2px] border-solid border-[#e9ebed] outline-none font-medium text-[22px] focus:border-primary"
      />
      {errorMessage && <p className="font-medium text-red-500 mt-[8px]">{errorMessage}</p>}
    </div>
  );
};

export default Input;
