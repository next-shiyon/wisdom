import { ref, set } from 'firebase/database';
import { HistoryCreateFormType } from '../types/HistoryCreateFormType';
import { firebaseDB } from './utils';

export const createHistory = (historyCreateForm: HistoryCreateFormType) => {
  const url = `${historyCreateForm.userId}/history/${historyCreateForm.historyId}`;

  try {
    set(ref(firebaseDB, url), {
      ...historyCreateForm,
    });
  } catch (error) {
    console.log(error);
    return false;
  }

  return true;
};
