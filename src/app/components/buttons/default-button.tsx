'use client';

import { twMerge } from 'tailwind-merge';

interface DefaultButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
}

function DefaultButton({ text, onClick, disabled = false }: DefaultButtonProps) {
  const disabledStyle = disabled ? 'bg-text-disabled' : 'bg-primary';
  return (
    <button
      className={twMerge('w-full h-[50px] rounded-[8px] text-white', disabledStyle)}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default DefaultButton;
