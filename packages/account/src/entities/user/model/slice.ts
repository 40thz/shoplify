import { createSlice } from '@reduxjs/toolkit';
// import { fetchUser, login, logout, openAuthLogin, registration } from './reducers';
import { User } from './types';

type UserSlice = {
  data: User | null;
  isAuth: boolean;
  isLoading: boolean;
  isFetching: boolean;
  error: string | null;
};

const initialState: UserSlice = {
  data: null,
  isAuth: false,
  isLoading: true,
  isFetching: false,
  error: null,
};

export const userSlice = createSlice({
  name: 'entities/user',
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.data = payload;
    },
  },
  //   extraReducers: (builder) => {
  //     // Регистрация
  //     builder.addCase(registration.pending, (state) => {
  //       state.isLoading = true;
  //     });
  //   },
});

export const { setUser } = userSlice.actions;
