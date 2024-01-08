import { createAsyncThunk } from '@reduxjs/toolkit';
import { userService } from '../api/user.service';
import { UserSignup } from './types';

export const signup = createAsyncThunk('entities/user/signup', async (data: UserSignup) => {
  try {
    await userService.create(data);
  } catch (error) {
    return Promise.reject(error);
  }
});
