import { HistoryCreateFormType } from './HistoryCreateFormType';

type HabitLowType = {
  habitId: string;
  historyList: Pick<HistoryCreateFormType, 'historyId' | 'createDate'>[];
};

export type HabitTableType = HabitLowType[];
