import * as yup from 'yup';

export type HabitCreateFormType = {
  habitId: string;
  userId: string;
  habitName: string;
  periodFrom: string;
  periodTo: string;
  frequency: number;
  deleteFlg: boolean;
};

export const HabitCreateFormValidateSchema: yup.ObjectSchema<HabitCreateFormType> =
  yup.object().shape({
    habitId: yup.string().default(''),
    userId: yup.string().default(''),
    habitName: yup
      .string()
      .required('Please enter a habit name field')
      .max(20, 'Please enter a habit name within 20 characters'),
    periodFrom: yup.string().required('Please enter the start date'),
    periodTo: yup.string().required('Please enter the end date'),
    frequency: yup.number().required('Please enter a frequency field'),
    deleteFlg: yup.boolean().default(false),
  });
