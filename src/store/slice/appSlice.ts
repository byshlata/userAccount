import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Nullable } from '../../types';
import { auth } from '../thunk';

type InitialStateType = {
  errorMessage: Nullable<string>;
  isProgress: boolean;
  isAuthRequest: boolean;
};

export const initialState: InitialStateType = {
  errorMessage: '',
  isProgress: false,
  isAuthRequest: false,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    occurredError: (state, action: PayloadAction<Nullable<string>>) => {
      state.errorMessage = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(auth.fulfilled, state => {
      state.isAuthRequest = true;
    });

    builder.addCase(auth.rejected, state => {
      state.isAuthRequest = true;
    });

    builder.addMatcher(
      action => action.type.endsWith('/pending'),
      state => {
        state.isProgress = true;
      },
    );

    builder.addMatcher(
      action => action.type.endsWith('/rejected'),
      (state, action: PayloadAction<string>) => {
        state.isProgress = false;
        state.errorMessage = action.payload;
      },
    );

    builder.addMatcher(
      action => action.type.endsWith('/fulfilled'),
      state => {
        state.isProgress = false;
      },
    );
  },
});

export const { occurredError } = appSlice.actions;
