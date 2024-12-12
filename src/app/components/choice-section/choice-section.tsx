import ChoiceCard from './choice-card';

function ChoiceSection() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <ChoiceCard />
      <ChoiceCard />
      <ChoiceCard />
      <ChoiceCard />
    </div>
  );
}

export default ChoiceSection;
