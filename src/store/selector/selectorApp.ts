import { AppRootStore } from 'store';
import { Nullable } from 'types';

export const selectorIsProgress = (state: AppRootStore): boolean => state.app.isProgress;

export const selectorIsAuthRequest = (stat: AppRootStore): boolean =>
  stat.app.isAuthRequest;

export const selectorErrorMessage = (stat: AppRootStore): Nullable<string> =>
  stat.app.errorMessage;
