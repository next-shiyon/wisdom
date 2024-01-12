import { ReactNode } from 'react';
import { FormProvider, SubmitHandler, UseFormReturn } from 'react-hook-form';
import { HabitCreateFormType } from '../../types/HabitCreateFormType';

type FormProps = {
  children: ReactNode;
  formConditions: UseFormReturn<HabitCreateFormType>;
};

export default function Form({ children, formConditions }: FormProps) {
  const { handleSubmit } = formConditions;

  // TODO: create submit API
  const onSubmit: SubmitHandler<HabitCreateFormType> = (data) =>
    console.log(data);

  return (
    <FormProvider {...formConditions}>
      <form onSubmit={handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
}
