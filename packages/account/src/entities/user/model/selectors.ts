import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@/app/AppStore';

const getUserModule = (state: RootState) => state.user;

export const getCurrentUser = (state: RootState) => getUserModule(state);
export const getUserData = createSelector(getCurrentUser, (state) => state);
