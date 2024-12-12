'use client';

import { useState } from 'react';
import BisectionCard from './bisection-card';

function ChoiceBisection() {
  const [isMan, setIsMan] = useState(true);
  const handleClick = (text: string) => {
    setIsMan(text === '남성');
  };
  return (
    <div className="flex justify-center items-center w-full gap-6">
      <BisectionCard iconName="man" text="남성" isChoosed={isMan} onClick={handleClick} />
      <BisectionCard iconName="woman" text="여성" isChoosed={!isMan} onClick={handleClick} />
    </div>
  );
}

export default ChoiceBisection;
