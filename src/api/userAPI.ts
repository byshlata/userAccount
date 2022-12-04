import { API_CONFIG } from 'api';
import { Path } from 'enums';
import { ErrorResponseType, UserUpdateType, UserResponseType } from 'types';

export const userAPI = {
  getLinkPDF: async (token: string) => {
    const res = await API_CONFIG.post<UserResponseType>(
      `${Path.CreatePDF}`,
      {},
      {
        headers: {
          Authorization: token,
        },
      },
    );
    return res.data;
  },

  deleteAccount: async (token: string) => {
    const res = await API_CONFIG.delete<ErrorResponseType>(`${Path.Delete}`, {
      headers: {
        Authorization: token,
      },
    });
    return res.data;
  },

  updateUser: async (payload: UserUpdateType, token: string) => {
    const res = await API_CONFIG.post<UserResponseType>(`${Path.Update}`, payload, {
      headers: {
        Authorization: token,
      },
    });
    return res.data;
  },

  updateAvatarUser: async (file: File, token: string) => {
    const formData = new FormData();
    formData.append('file', file);

    const res = await API_CONFIG.post<UserResponseType>(`${Path.UploadCloud}`, formData, {
      headers: {
        Authorization: token,
        'Content-Type': 'multipart/form-data',
      },
    });
    return res.data;
  },
};
