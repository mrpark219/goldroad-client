'use client';
import { useState } from 'react';
import Signup from './_survey/survey-section/sighup';
import SurveySection from './_survey/survey-section/survey-section';

const SignUpPage = () => {
  const [page, setPage] = useState<number>(0);

  const handleNext = () => {
    if (page === 6) return;
    setPage(page + 1);
  };
  return (
    <div className="px-[24px]">
      <button onClick={() => page > 0 && setPage(page - 1)}>{'<<'}</button>
      {page === 0 && <Signup handleNext={handleNext} />}
      {page >= 1 && <SurveySection page={page} handleNext={handleNext} />}
    </div>
  );
};

export default SignUpPage;
