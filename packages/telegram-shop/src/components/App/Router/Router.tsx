import { MainPage } from '@/pages/MainPage';
import { createBrowserRouter, RouteObject } from 'react-router-dom';

const routerConfig: RouteObject[] = [
  {
    path: '/',
    element: <MainPage />,
    children: [
      {
        path: '/test',
        element: <MainPage />,
      },
    ],
  },
];

export const router = createBrowserRouter(routerConfig);
