import { v4 as uuidv4 } from 'uuid';
import { useForm } from 'react-hook-form';
import PageInfo from '../components/PageInfo';
import Form from '../components/shared/Form';
import { Input } from '../components/shared/Input';
import {
  ButtonWrapper,
  InputContainer,
} from '../styles/components/HabitCreateForm.styled';
import { HistoryCreateWrapper } from '../styles/components/HistoryCreateForm.styled';
import {
  HistortCreateFormValidationSchema,
  HistoryCreateFormType,
} from '../types/HistoryCreateFormType';
import { yupResolver } from '@hookform/resolvers/yup';

import { firebaseAuth } from '../api/utils';

import { useParams } from 'react-router-dom';
import { createHistory } from '../api/history';
import Button from '../components/shared/Button';
import { Textarea } from '../components/shared/Textarea';
import { useEffect, useState } from 'react';
import { getHabit } from '../api/habit';
import { HabitCreateFormType } from '../types/HabitCreateFormType';

export default function HistoryCreate() {
  const { habitId } = useParams();
  const [habit, setHabit] = useState<HabitCreateFormType | undefined>();
  const formConditions = useForm<HistoryCreateFormType>({
    mode: 'onChange',
    criteriaMode: 'all',
    shouldFocusError: true,
    resolver: yupResolver(HistortCreateFormValidationSchema),
  });

  useEffect(() => {
    if (!habitId) return;
    const fetchHabit = async () => {
      if (!firebaseAuth.currentUser) return;
      const result = await getHabit({
        habitId,
        userId: firebaseAuth.currentUser.uid,
      });
      setHabit(result);
    };

    fetchHabit();
  }, [firebaseAuth.currentUser]);

  const onSubmit = (data: HistoryCreateFormType) => {
    if (!firebaseAuth.currentUser) return;
    if (!habitId) return;

    createHistory({
      ...data,
      historyId: uuidv4(),
      habitId: habitId,
      userId: firebaseAuth.currentUser.uid,
    });
  };

  if (!habit) {
    return <div>loading..</div>;
  }

  return (
    <HistoryCreateWrapper>
      {/* TODO: DB에서 데이터 연동하기 */}
      <PageInfo
        title={habit.habitName}
        description={new Date().toDateString()}
      />
      <Form formConditions={formConditions} onSubmit={onSubmit}>
        <InputContainer>
          <Input type="text" label="Title" name="title" />
          <Textarea label="Content" name="content" rows={20} />
        </InputContainer>
        <ButtonWrapper>
          <Button>Create History</Button>
        </ButtonWrapper>
      </Form>
    </HistoryCreateWrapper>
  );
}
