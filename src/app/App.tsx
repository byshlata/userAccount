import React, { ReactElement, useEffect } from 'react';

import { message, Spin } from 'antd';
import { useSelector } from 'react-redux';
import 'antd/dist/antd.css';

import mainStyle from '../styles/container.module.sass';

import style from './App.module.sass';

import { UserBadge } from 'components';
import { useAppDispatch } from 'hooks';
import { Routers } from 'pages';
import {
  auth,
  logout,
  selectorAvatarUser,
  selectorErrorMessage,
  selectorIsAuthRequest,
  selectorIsProgress,
  selectorUserFirstName,
} from 'store';

export const App = (): ReactElement => {
  const dispatch = useAppDispatch();
  const isLoading = useSelector(selectorIsProgress);
  const isAuthRequest = useSelector(selectorIsAuthRequest);
  const userFirstName = useSelector(selectorUserFirstName);
  const errorMessage = useSelector(selectorErrorMessage);
  const avatarUser = useSelector(selectorAvatarUser);
  useEffect(() => {
    dispatch(auth());
  }, []);

  useEffect(() => {
    if (errorMessage) {
      message.error(errorMessage);
    }
  }, [errorMessage]);

  const onLogout = (): void => {
    dispatch(logout());
  };

  return (
    <div className={style.appWrapper}>
      <div className={style.header}>
        {userFirstName ? (
          <UserBadge
            image={avatarUser}
            name={userFirstName || ''}
            disable={isLoading}
            callback={onLogout}
          />
        ) : null}
      </div>
      <div className={mainStyle.mainContainer}>
        <div className={mainStyle.container}>
          {isAuthRequest ? (
            <Routers />
          ) : (
            <Spin style={{ width: '100%', margin: '0 auto' }} size="large" />
          )}
        </div>
      </div>
      <div className={style.footer} />
    </div>
  );
};
