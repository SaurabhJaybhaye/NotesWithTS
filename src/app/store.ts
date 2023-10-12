import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import noteReducer from '../components/notes/noteSlice';
export const store = configureStore({
  reducer: {
    notes:noteReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
