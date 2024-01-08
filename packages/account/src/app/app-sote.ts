import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './root-reducer';

export const store = () => {
  return configureStore({
    reducer,
  });
};
export type RootState = ReturnType<ReturnType<typeof store>['getState']>;
