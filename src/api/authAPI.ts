import { AxiosResponse } from 'axios';

import { API_CONFIG } from 'api';
import { Path } from 'enums';
import { UserLoginType, UserRegistrationType, UserResponseType } from 'types';

export const AuthAPI = {
  auth: async (token: string) => {
    const res = await API_CONFIG.get<UserResponseType>(`${Path.Auth}`, {
      headers: {
        Authorization: token,
      },
    });
    return res.data;
  },

  login: async (payload: UserLoginType) => {
    const res = await API_CONFIG.post<
      any,
      AxiosResponse<UserResponseType, UserLoginType>,
      UserLoginType
    >(`${Path.Login}`, { ...payload });
    return res.data;
  },

  register: async (payload: UserRegistrationType) => {
    const res = await API_CONFIG.post<
      any,
      AxiosResponse<UserResponseType, UserRegistrationType>,
      UserRegistrationType
    >(`${Path.Register}`, { ...payload });
    return res.data;
  },
};
