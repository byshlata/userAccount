import { createAsyncThunk } from '@reduxjs/toolkit';

import { AuthAPI } from 'api/authAPI';
import { AppRootStore } from 'store/store';
import { UserLoginType, UserRegistrationType, UserResponseType } from 'types';
import { setErrorResponse } from 'utils';

export const createAccount = createAsyncThunk(
  'userSlice/createAccount',
  async (
    payload: UserRegistrationType,
    { rejectWithValue },
  ): Promise<UserResponseType | Function> => {
    try {
      return await AuthAPI.register(payload);
    } catch (e) {
      return setErrorResponse(e, rejectWithValue);
    }
  },
);

export const loginAccount = createAsyncThunk(
  'userSlice/loginAccount',
  async (
    payload: UserLoginType,
    { rejectWithValue },
  ): Promise<UserResponseType | Function> => {
    try {
      return await AuthAPI.login(payload);
    } catch (e) {
      return setErrorResponse(e, rejectWithValue);
    }
  },
);

export const auth = createAsyncThunk(
  'userSlice/auth',
  async (_, { rejectWithValue, getState }): Promise<UserResponseType | Function> => {
    try {
      const state = getState() as AppRootStore;
      const token = state.user.user?.token || '';
      return await AuthAPI.auth(token);
    } catch (e) {
      return setErrorResponse(e, rejectWithValue);
    }
  },
);
