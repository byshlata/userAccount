import { configureStore } from '@reduxjs/toolkit';

import { appSlice } from './slice/appSlice';

import { userSlice } from 'store/slice/userSlice';
import { loadStateToken, saveState } from 'utils/saveLocalStorage';

export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
    user: userSlice.reducer,
  },
  preloadedState: {
    user: loadStateToken(),
  },
});

store.subscribe(() => {
  saveState(store.getState().user.user?.token || '');
});

export type AppRootStore = ReturnType<typeof store.getState>;

export type AppDispatchType = typeof store.dispatch;
