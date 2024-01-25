import { HabitCreateFormType } from './HabitCreateFormType';
import { HistoryCreateFormType } from './HistoryCreateFormType';

type HabitLowType = HabitCreateFormType & {
  historyList: HistoryCreateFormType[];
};

export type HabitListTableType = HabitLowType[];
