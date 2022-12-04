import { AppRootStore } from 'store';
import { Nullable, UndefinedType } from 'types';
import { UserAccountType } from 'types/UserAccountType';

export const selectorUserFirstName = (state: AppRootStore): UndefinedType<string> =>
  state.user.user?.firstName;

export const selectorAvatarUser = (state: AppRootStore): Nullable<string> =>
  state.user.user?.image;

export const selectorUser = (state: AppRootStore): UserAccountType => ({
  id: state.user.user?.id,
  email: state.user.user?.email,
  firstName: state.user.user?.firstName,
  lastName: state.user.user?.lastName,
  image: state.user.user?.image,
  pdf: state.user.user?.pdf,
});
