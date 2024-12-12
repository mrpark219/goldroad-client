'use client';

import { useState } from 'react';
import ProgressBar from '../components/progress-bar/progress-bar';
import SurveySection from '../member/signup/_survey/survey-section/survey-section';

function Survey() {
  const [page, setPage] = useState<number>(1);

  const handleNext = () => {
    if (page === 6) return;
    setPage(page + 1);
  };
  return (
    <div>
      <div className="flex flex-col justify-center items-start gap-4">
        <ProgressBar progress={Math.floor((page / 6) * 100)} />
        <SurveySection page={page} handleNext={handleNext} />
      </div>
    </div>
  );
}

export default Survey;
