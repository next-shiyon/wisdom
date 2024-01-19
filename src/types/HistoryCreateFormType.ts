import { format } from 'date-fns';
import * as yup from 'yup';

export type HistoryCreateFormType = {
  historyId: string;
  habitId: string;
  userId: string;
  title: string;
  createDate: string;
  content: string;
  deleteFlg: boolean;
};

export const HistortCreateFormValidationSchema: yup.ObjectSchema<HistoryCreateFormType> =
  yup.object().shape({
    historyId: yup.string().default(''),
    habitId: yup.string().default(''),
    userId: yup.string().default(''),
    createDate: yup.string().default(format(new Date(), 'yyyy/MM/dd')),
    title: yup
      .string()
      .required('Please enter a title field')
      .max(20, 'Please enter a title within 100 characters'),
    content: yup.string().required('Please enter the content'),
    deleteFlg: yup.boolean().default(false),
  });
