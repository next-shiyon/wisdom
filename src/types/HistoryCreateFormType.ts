export type HistoryCreateFormType = {
  historyId: string;
  habitId: string;
  userId: string;
  title: string;
  createDate: Date;
  deleteFlg: boolean;
  keyword: string[];
};
