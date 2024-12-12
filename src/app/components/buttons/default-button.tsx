'use client';
interface DefaultButtonProps {
  text: string;
  onClick: () => void;
}

function DefaultButton({ text, onClick }: DefaultButtonProps) {
  return (
    <button className="w-full h-[50px] bg-primary rounded-[8px] text-white" onClick={onClick}>
      {text}
    </button>
  );
}

export default DefaultButton;
