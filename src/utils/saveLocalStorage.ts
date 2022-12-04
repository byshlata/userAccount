import { UserResponseType } from 'types';

export const loadStateToken = (): UserResponseType | undefined => {
  try {
    const tokenLocalStorage = localStorage.getItem('token');
    if (tokenLocalStorage === null) {
      return undefined;
    }
    const token = JSON.parse(tokenLocalStorage) as string;
    return {
      user: {
        id: -1,
        email: '',
        firstName: '',
        lastName: '',
        image: null,
        pdf: null,
        token,
      },
    };
  } catch (err) {
    throw new Error('Error get to Local Storage token');
  }
};

export const saveState = (token: string): void => {
  try {
    localStorage.setItem('token', JSON.stringify(token));
  } catch {
    throw new Error('Error save token to Local Storage');
  }
};
