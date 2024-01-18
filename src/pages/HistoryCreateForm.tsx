import { useForm } from 'react-hook-form';
import PageInfo from '../components/PageInfo';
import Form from '../components/shared/Form';
import { Input } from '../components/shared/Input';
import { InputContainer } from '../styles/components/HabitCreateForm.styled';
import { HistoryCreateWrapper } from '../styles/components/HistoryCreateForm.styled';
import {
  HistortCreateFormValidationSchema,
  HistoryCreateFormType,
} from '../types/HistoryCreateFormType';
import { yupResolver } from '@hookform/resolvers/yup';

export default function HistoryCreate() {
  const formConditions = useForm<HistoryCreateFormType>({
    mode: 'onChange',
    criteriaMode: 'all',
    shouldFocusError: true,
    resolver: yupResolver(HistortCreateFormValidationSchema),
  });

  // TODO: onSubmit 구현하기
  const onSubmit = (data: HistoryCreateFormType) => {};

  return (
    <HistoryCreateWrapper>
      <PageInfo title="습관 1" description="Sat, Dec 17, 2024" />
      <Form formConditions={formConditions} onSubmit={onSubmit}>
        <InputContainer>
          <Input type="text" label="Title" name="title" />
          {/* TODO: Textarea 구현  */}
          <Input type="text" label="Content" name="content" />
        </InputContainer>
      </Form>
    </HistoryCreateWrapper>
  );
}
