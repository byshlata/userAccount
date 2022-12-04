import { Nullable } from 'types';

export type UserType = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  image: Nullable<string>;
  pdf: Nullable<string>;
  token: string;
};
