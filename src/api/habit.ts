import { ref, set } from 'firebase/database';
import { HabitCreateFormType } from '../types/HabitCreateFormType';
import { firebaseDB } from './utils';

export const createHabit = (habitCreateForm: HabitCreateFormType) => {
  const url = `${habitCreateForm.userId}/habit/${habitCreateForm.habitId}`;

  try {
    set(ref(firebaseDB, url), {
      ...habitCreateForm,
    });
  } catch (error) {
    console.log(error);
    return false;
  }

  return true;
};
