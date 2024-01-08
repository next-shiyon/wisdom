import { ReactNode } from 'react';
import Main from './pages/Main';
import Login from './pages/Login';
import HabitCreate from './pages/habit/HabitCreate';
import History from './pages/history/History';
import HistoryCreate from './pages/history/HistoryCreate';

type RoutesType = {
  path: string;
  element: ReactNode;
};

export const routes: RoutesType[] = [
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/habit/create',
    element: <HabitCreate />,
  },
  {
    path: '/history',
    element: <History />,
  },
  {
    path: '/history/create',
    element: <HistoryCreate />,
  },
  {
    path: '*',
    element: <div>404 not found</div>,
  },
];
