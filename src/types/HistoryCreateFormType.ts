import * as yup from 'yup';

export type HistoryCreateFormType = {
  habitId: string;
  userId: string;
  title: string;
  content: string;
  deleteFlg: boolean;
};

export const HistortCreateFormValidationSchema: yup.ObjectSchema<HistoryCreateFormType> =
  yup.object().shape({
    habitId: yup.string().default(''),
    userId: yup.string().default(''),
    title: yup
      .string()
      .required('Please enter a title field')
      .max(20, 'Please enter a title within 100 characters'),
    content: yup.string().required('Please enter the content'),
    deleteFlg: yup.boolean().default(false),
  });
