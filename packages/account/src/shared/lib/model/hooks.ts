import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/app-sote';

export type IThunkDispatch<Action extends AnyAction = AnyAction> = ThunkDispatch<RootState, unknown, Action>;

const entireState = (state: RootState) => state;

export const useMapState = <T = unknown>(mapState: (state: RootState) => T) => {
  const state = useSelector(entireState);

  return useMemo(() => mapState(state), [mapState, state]);
};

export const useMapDispatch = <T = unknown>(mapDispatch: (dispatch: IThunkDispatch) => T) => {
  const dispatch = useDispatch();

  return useMemo(() => mapDispatch(dispatch), [dispatch, mapDispatch]);
};

export const makeMapState = <T = unknown>(mapState: (state: RootState) => T) => mapState;
export const makeMapDispatch = <T = unknown>(mapDispatch: (dispatch: IThunkDispatch) => T) => mapDispatch;
