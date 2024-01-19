import * as yup from 'yup';

export type HistoryCreateFormType = {
  historyId: string;
  habitId: string;
  userId: string;
  title: string;
  date: Date;
  content: string;
  deleteFlg: boolean;
};

export const HistortCreateFormValidationSchema: yup.ObjectSchema<HistoryCreateFormType> =
  yup.object().shape({
    historyId: yup.string().default(''),
    habitId: yup.string().default(''),
    userId: yup.string().default(''),
    date: yup.date().default(new Date()),
    title: yup
      .string()
      .required('Please enter a title field')
      .max(20, 'Please enter a title within 100 characters'),
    content: yup.string().required('Please enter the content'),
    deleteFlg: yup.boolean().default(false),
  });
