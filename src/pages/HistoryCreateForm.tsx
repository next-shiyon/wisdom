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

export default function HistoryCreate() {
  const { habitId } = useParams();
  const formConditions = useForm<HistoryCreateFormType>({
    mode: 'onChange',
    criteriaMode: 'all',
    shouldFocusError: true,
    resolver: yupResolver(HistortCreateFormValidationSchema),
  });

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

  return (
    <HistoryCreateWrapper>
      {/* TODO: DB에서 데이터 연동하기 */}
      <PageInfo title="습관 1" description="Sat, Dec 17, 2024" />
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
