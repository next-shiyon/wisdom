import * as yup from 'yup';

export type HabitCreateFormType = {
  habitName: string;
  periodFrom: string;
  periodTo: string;
  frequency: number;
};

export const HabitCreateFormValidateSchema: yup.ObjectSchema<HabitCreateFormType> =
  yup.object().shape({
    habitName: yup
      .string()
      .required('Please enter a habit name field')
      .max(20, 'Please enter a habit name within 20 characters'),
    periodFrom: yup.string().required('Please enter the start date'),
    periodTo: yup.string().required('Please enter the end date'),
    frequency: yup.number().required('Please enter a frequency field'),
  });
