import { UserLoginType } from 'types';

export type UserRegistrationType = UserLoginType & {
  firstName: string;
  lastName: string;
};
