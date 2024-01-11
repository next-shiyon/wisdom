import Button from '../components/shared/Button';
import PageInfo from '../components/shared/PageInfo';
import { Input } from '../components/shared/Input';

import {
  ButtonWrapper,
  HabitCreateContainer,
  InputContainer,
} from '../styles/components/HabitCreateForm.styled';
import { Select } from '../components/shared/Select';
import PeriodBox from '../components/shared/PeriodBox';

export default function HabitCreate() {
  return (
    <HabitCreateContainer>
      <PageInfo
        title="Create a new habit ✨"
        description="The created habit can be modified at any time!"
      />
      <form>
        <InputContainer>
          <Input type="text" label="Habit name" />
          <PeriodBox />

          <Select label="Frequency">
            <option value="dog">1</option>
            <option value="dog">2</option>
            <option value="dog">3</option>
            <option value="dog">4</option>
            <option value="dog">5</option>
            <option value="dog">6</option>
            <option value="dog">7</option>
          </Select>
        </InputContainer>
        <ButtonWrapper>
          <Button variant="outline">Previous</Button>
          <Button>Create Habit</Button>
        </ButtonWrapper>
      </form>
    </HabitCreateContainer>
  );
}
