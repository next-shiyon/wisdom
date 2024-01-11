import { ReactNode } from 'react';
import Main from './pages/Main';
import LoginForm from './pages/LoginForm';
import HabitCreateForm from './pages/HabitCreateForm';
import HistoryList from './pages/HistoryList';
import HistoryCreateForm from './pages/HistoryCreateForm';

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
    element: <LoginForm />,
  },
  {
    path: '/habit/create',
    element: <HabitCreateForm />,
  },
  {
    path: '/history',
    element: <HistoryList />,
  },
  {
    path: '/history/create',
    element: <HistoryCreateForm />,
  },
  {
    path: '*',
    element: <div>404 not found</div>,
  },
];
