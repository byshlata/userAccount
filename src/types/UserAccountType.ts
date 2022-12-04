import { UserType } from 'types';

export type UserAccountType = Omit<Partial<UserType>, 'token'>;
