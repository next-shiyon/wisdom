import { ReactNode } from 'react';
import { FormProvider, SubmitHandler, UseFormReturn } from 'react-hook-form';
import { HabitCreateFormType } from '../../types/HabitCreateFormType';
import { createHabit } from '../../api/habit';

type FormProps = {
  children: ReactNode;
  formConditions: UseFormReturn<HabitCreateFormType>;
};

export default function Form({ children, formConditions }: FormProps) {
  const { handleSubmit } = formConditions;

  const onSubmit: SubmitHandler<HabitCreateFormType> = (data) => {
    if (createHabit(data)) {
      window.alert('success');
    } else {
      window.alert('fail');
    }
  };

  return (
    <FormProvider {...formConditions}>
      <form onSubmit={handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
}
