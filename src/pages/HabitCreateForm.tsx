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
import { createHabit } from '../api/habit';
import { firebaseAuth } from '../api/utils';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

export default function HabitCreate() {
  const navigate = useNavigate();

  const formConditions = useForm<HabitCreateFormType>({
    mode: 'onChange',
    criteriaMode: 'all',
    shouldFocusError: true,
    resolver: yupResolver(HabitCreateFormValidateSchema),
  });

  const onSubmit = (data: HabitCreateFormType) => {
    if (!firebaseAuth.currentUser) return;

    const result = createHabit({
      ...data,
      habitId: uuidv4(),
      userId: firebaseAuth.currentUser.uid,
    });

    if (!result) {
      window.alert('습관 생성에 실패하였습니다.🥲');
      return;
    }

    window.alert('습관 생성에 성공하였습니다.⭐️');
    navigate('/');
  };

  // TODO: submit 중일 때는 loading 되는 UI 표시하기
  return (
    <HabitCreateContainer>
      <PageInfo
        title="새롭게 습관을 생성해보세요✨"
        description="생성된 습관은 언제든지 수정할 수 있습니다!"
      />
      <Form formConditions={formConditions} onSubmit={onSubmit}>
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
          <Button
            variant="outline"
            onClick={() => {
              navigate('/');
            }}
          >
            Previous
          </Button>
          <Button>Create Habit</Button>
        </ButtonWrapper>
      </Form>
    </HabitCreateContainer>
  );
}
