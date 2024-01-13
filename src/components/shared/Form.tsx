import { ReactNode } from 'react';
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  UseFormReturn,
} from 'react-hook-form';

type FormProps<TFieldValues extends FieldValues> = {
  children: ReactNode;
  formConditions: UseFormReturn<TFieldValues>;
  onSubmit: (data: TFieldValues) => SubmitHandler<TFieldValues> | void;
};

export default function Form<TFieldValues extends FieldValues>({
  children,
  formConditions,
  onSubmit,
}: FormProps<TFieldValues>) {
  const { handleSubmit } = formConditions;

  return (
    <FormProvider {...formConditions}>
      <form onSubmit={handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
}
