import { combineReducers } from '@reduxjs/toolkit';
import { userSlice } from '@/entities/user/model/slice';

export const reducer = combineReducers({
  user: userSlice.reducer,
});
