import { createSlice } from '@reduxjs/toolkit';

import { UserResponseType } from '../../types';
import { deleteAccount, getLinkPDF, updateAvatar, updateUser } from '../thunk';
import { auth, createAccount, loginAccount } from '../thunk/authThunk';

export const initialStateUserAuthSlice: UserResponseType = {
  user: {
    id: -1,
    firstName: '',
    lastName: '',
    email: '',
    token: '',
    pdf: null,
    image: null,
  },
};

export const userSlice = createSlice({
  name: 'userSlice',
  initialState: initialStateUserAuthSlice,
  reducers: {
    logout: () => initialStateUserAuthSlice,
  },
  extraReducers: builder => {
    builder.addCase(createAccount.fulfilled, (state, action) => {
      const payload = action.payload as unknown as UserResponseType;
      state.user = payload.user;
    });

    builder.addCase(loginAccount.fulfilled, (state, action) => {
      const payload = action.payload as unknown as UserResponseType;
      state.user = payload.user;
    });

    builder.addCase(auth.fulfilled, (state, action) => {
      const payload = action.payload as unknown as UserResponseType;
      state.user = payload.user;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      const payload = action.payload as unknown as UserResponseType;
      state.user = payload.user;
    });
    builder.addCase(updateAvatar.fulfilled, (state, action) => {
      const payload = action.payload as unknown as UserResponseType;
      state.user = payload.user;
    });
    builder.addCase(getLinkPDF.fulfilled, (state, action) => {
      const payload = action.payload as unknown as UserResponseType;
      state.user = payload.user;
    });

    builder.addCase(deleteAccount.fulfilled, () => initialStateUserAuthSlice);
  },
});

export const { logout } = userSlice.actions;
