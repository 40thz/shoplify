import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';
import { ShopPage } from '@/pages/Shop';
import { SignInPage } from '@/pages/SignIn';
import { SignUp } from '@/pages/SignUp';
import { TelegramBot } from '@/pages/TelegramBot';
import { BaseLayout } from './layout/BaseLayout';

const routerConfig: RouteObject[] = [
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        path: '/',
        element: <ShopPage />,
      },
      {
        path: '/tgbot',
        element: <TelegramBot />,
      },
    ],
  },
  {
    path: '/signin',
    element: <SignInPage />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
];

const router = createBrowserRouter(routerConfig);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
