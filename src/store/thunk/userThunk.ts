import { createAsyncThunk } from '@reduxjs/toolkit';

import { userAPI } from 'api';
import { AppRootStore } from 'store/store';
import { UserUpdateType } from 'types';
import { setErrorResponse } from 'utils';

export const getLinkPDF = createAsyncThunk(
  'usersSlice/getLinkPDF',
  async (_, { rejectWithValue, getState }) => {
    try {
      const state = getState() as AppRootStore;
      const token = state.user.user?.token || '';
      return await userAPI.getLinkPDF(token);
    } catch (e) {
      return setErrorResponse(e, rejectWithValue);
    }
  },
);

export const deleteAccount = createAsyncThunk(
  'usersSlice/deleteAccount',
  async (_, { rejectWithValue, getState }) => {
    try {
      const state = getState() as AppRootStore;
      const token = state.user.user?.token || '';
      return await userAPI.deleteAccount(token);
    } catch (e) {
      return setErrorResponse(e, rejectWithValue);
    }
  },
);

export const updateUser = createAsyncThunk(
  'usersSlice/updateUser',
  async (payload: UserUpdateType, { rejectWithValue, getState }) => {
    try {
      const state = getState() as AppRootStore;
      const token = state.user.user?.token || '';
      return await userAPI.updateUser(payload, token);
    } catch (e) {
      return setErrorResponse(e, rejectWithValue);
    }
  },
);
export const updateAvatar = createAsyncThunk(
  'usersSlice/updateAvatar',
  async (image: File, { rejectWithValue, getState }) => {
    try {
      const state = getState() as AppRootStore;
      const token = state.user.user?.token || '';
      return await userAPI.updateAvatarUser(image, token);
    } catch (e) {
      return setErrorResponse(e, rejectWithValue);
    }
  },
);
