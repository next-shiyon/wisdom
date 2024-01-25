import { useEffect } from 'react';
import HabitListTable from '../components/HabitListTable';
import { firebaseAuth } from '../api/utils';
import { getHabitList } from '../api/habit';
import { HabitCreateFormType } from '../types/HabitCreateFormType';

export default function Main() {
  // TODO: firebase.currentUser 를 localStorage 에 저장해서 글로벌 상태로 관리하기
  useEffect(() => {
    const fetchHabit = async () => {
      if (!firebaseAuth.currentUser) return;
      const result = await getHabitList({
        userId: firebaseAuth.currentUser.uid,
      });

      const habitNameList = Object.values<HabitCreateFormType>(result);

      // TODO:
      // 1. iterate 를 하면서, habitId 에 맞는 history를 전부 가져온다.
      // 2. 필요한 데이터 형태로 가공한다. <HabitListTableType>
      // 3. useState 에 상태를 저장한다.
      console.log(habitNameList);
    };

    fetchHabit();
  }, [firebaseAuth.currentUser]);

  return (
    <div>
      Main
      <HabitListTable />
    </div>
  );
}
