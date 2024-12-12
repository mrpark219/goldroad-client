interface ProgressBarProps {
  progress: number;
}

function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="w-full bg-gray-200 h-[14px] rounded-full overflow-hidden">
      <div className="h-full bg-blue-500 rounded-[8px]" style={{ width: `${progress}%` }}></div>
    </div>
  );
}

export default ProgressBar;
