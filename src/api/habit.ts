import { ref, set } from 'firebase/database';
import { HabitCreateFormType } from '../types/HabitCreateFormType';
import { firebaseDB } from './utils';

export const createHabit = (habitCreateForm: HabitCreateFormType) => {
  try {
    set(ref(firebaseDB, 'habit/' + habitCreateForm.habitName), {
      ...habitCreateForm,
    });
  } catch (error) {
    console.log(error);
    return false;
  }

  return true;
};
