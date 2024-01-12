import Button from '../components/shared/Button';
import PageInfo from '../components/PageInfo';
import { Input } from '../components/shared/Input';

import {
  ButtonWrapper,
  HabitCreateContainer,
  InputContainer,
} from '../styles/components/HabitCreateForm.styled';
import { Select } from '../components/shared/Select';
import PeriodBox from '../components/PeriodBox';

import { useForm } from 'react-hook-form';
import Form from '../components/shared/Form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  HabitCreateFormType,
  HabitCreateFormValidateSchema,
} from '../types/HabitCreateFormType';

export default function HabitCreate() {
  const formConditions = useForm<HabitCreateFormType>({
    mode: 'onChange',
    criteriaMode: 'all',
    shouldFocusError: true,
    resolver: yupResolver(HabitCreateFormValidateSchema),
  });

  return (
    <HabitCreateContainer>
      <PageInfo
        title="Create a new habit ✨"
        description="The created habit can be modified at any time!"
      />
      <Form formConditions={formConditions}>
        <InputContainer>
          <Input type="text" label="Habit name" name="habitName" />
          <PeriodBox name="period" />

          <Select label="Frequency" name="frequency">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
          </Select>
        </InputContainer>
        <ButtonWrapper>
          <Button variant="outline">Previous</Button>
          <Button>Create Habit</Button>
        </ButtonWrapper>
      </Form>
    </HabitCreateContainer>
  );
}
