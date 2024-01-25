import { child, get, ref, set } from 'firebase/database';
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

export const getHabit = async (
  data: Pick<HabitCreateFormType, 'userId' | 'habitId'>
) => {
  const url = `${data.userId}/habit/${data.habitId}`;
  try {
    const dbRef = ref(firebaseDB);
    return get(child(dbRef, url)).then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        return null;
      }
    });
  } catch (error) {
    console.log(error);
    return false;
  }
};

// TODO: getHabit 이랑 공통화하기
export const getHabitList = async ({
  userId,
}: Pick<HabitCreateFormType, 'userId'>) => {
  const url = `${userId}/habit`;

  try {
    const dbRef = ref(firebaseDB);
    return get(child(dbRef, url)).then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        return null;
      }
    });
  } catch (error) {
    console.log(error);
    return false;
  }
};
