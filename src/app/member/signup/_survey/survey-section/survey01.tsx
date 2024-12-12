import DefaultButton from '@/app/components/buttons/default-button';
import ButtonLayout from '../../components/layout/button-layout';
import InputLayout from '../../components/layout/input-layout';
import ChoiceBisection from '../choice-bisection/choice-bisection';
import ChoiceLayout from '../choice-layout';

interface Props {
  handleNext: () => void;
}

function Survey01({ handleNext }: Props) {
  return (
    <ChoiceLayout title="성별을 선택해주세요">
      <InputLayout>
        <ChoiceBisection />
      </InputLayout>
      <ButtonLayout>
        <DefaultButton text="다음" onClick={handleNext} />
      </ButtonLayout>
    </ChoiceLayout>
  );
}

export default Survey01;
