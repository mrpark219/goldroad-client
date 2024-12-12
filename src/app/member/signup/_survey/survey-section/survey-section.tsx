import Survey01 from './survey01';
import Survey02 from './survey02';
import Survey03 from './survey03';
import Survey04 from './survey04';
import Survey05 from './survey05';
import Survey06 from './survey06';

interface Props {
  page: number;
  handleNext: () => void;
}

function SurveySection({ page, handleNext }: Props) {
  if (page === 1) return <Survey01 handleNext={handleNext} />;
  if (page === 2) return <Survey02 handleNext={handleNext} />;
  if (page === 3) return <Survey03 handleNext={handleNext} />;
  if (page === 4) return <Survey04 handleNext={handleNext} />;
  if (page === 5) return <Survey05 handleNext={handleNext} />;
  if (page === 6) return <Survey06 handleNext={handleNext} />;
}

export default SurveySection;
