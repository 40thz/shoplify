import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { ErrorBoundary } from '@/shared/ui/ui/ErrorBoundary';
import { AppRouter } from './AppRouter';
import { store } from './AppStore';
import '@/index.scss';

export const initializeApp = () => {
  const queryClient = new QueryClient();

  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <Provider store={store()}>
          <ErrorBoundary>
            <AppRouter />
          </ErrorBoundary>
        </Provider>
      </QueryClientProvider>
    </React.StrictMode>,
  );
};
