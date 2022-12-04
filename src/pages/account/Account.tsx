import React, { ReactElement } from 'react';

import { Button } from 'antd';
import { RcFile } from 'antd/lib/upload';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import style from './Account.module.sass';

import { ChangeInput, UploadImage } from 'components';
import { Path } from 'enums';
import { useAppDispatch } from 'hooks';
import {
  updateAvatar,
  deleteAccount,
  getLinkPDF,
  selectorIsProgress,
  selectorUser,
  selectorUserFirstName,
  updateUser,
} from 'store';

export const Account = (): ReactElement => {
  const dispatch = useAppDispatch();
  const user = useSelector(selectorUser);
  const isLoading = useSelector(selectorIsProgress);
  const isAuth = useSelector(selectorUserFirstName);
  const navigate = useNavigate();

  if (!isAuth) {
    navigate(`${Path.Root}`);
  }

  const onGetLinkPdf = (): void => {
    dispatch(getLinkPDF());
  };
  const onDeleteAccount = (): void => {
    dispatch(deleteAccount());
  };

  const onChangeFirstName = (value: string): void => {
    dispatch(updateUser({ firstName: value }));
  };

  const onChangeLastName = (value: string): void => {
    dispatch(updateUser({ lastName: value }));
  };

  const onChangeAvatar = (image: RcFile): void => {
    const file = image as File;
    dispatch(updateAvatar(file));
  };

  return (
    <div>
      <div style={{ marginBottom: 16 }} />
      <div className={style.lineContainer}>
        <div className={style.title}>First name:</div>
        <ChangeInput value={user.firstName || ''} onChangeName={onChangeFirstName} />
      </div>
      <div className={style.lineContainer}>
        <div className={style.title}>Last name:</div>
        <ChangeInput value={user.lastName || ''} onChangeName={onChangeLastName} />
      </div>
      <div className={style.lineContainer}>
        <div className={style.title}>Email:</div>
        <div>{user.email}</div>
      </div>
      <div className={style.lineContainer}>
        <div className={style.title}>Change avatar:</div>
        <UploadImage isLoading={isLoading} onGetImage={onChangeAvatar} />
      </div>
      <div className={style.lineContainer}>
        <div className={style.title}>Link pdf:</div>
        {user.pdf && (
          <a style={{ marginRight: '10px' }} href={user.pdf}>
            Link psf
          </a>
        )}
        <Button type="primary" onClick={onGetLinkPdf} disabled={isLoading || !user.image}>
          Get link pdf
        </Button>
      </div>
      <div>
        <Button type="dashed" onClick={onDeleteAccount} disabled={isLoading}>
          Delete account
        </Button>
      </div>
    </div>
  );
};
