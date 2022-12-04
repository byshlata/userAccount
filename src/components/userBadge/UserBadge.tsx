import React, { ReactElement } from 'react';

import 'antd/dist/antd.css';

import { UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Typography } from 'antd';

import style from './UserBadge.module.sass';

const { Text } = Typography;

type UserBadgeType = {
  callback: () => void;
  disable: boolean;
  name: string;
  image: string | null;
};

export const UserBadge = ({
  callback,
  disable,
  name,
  image,
}: UserBadgeType): ReactElement => {
  const onClick = (): void => {
    callback();
  };
  return (
    <div className={style.block}>
      <div className={style.item}>
        <Text>{name}</Text>
        <Avatar
          style={{ marginRight: '10px', marginLeft: '10px' }}
          src={image}
          shape="square"
          icon={<UserOutlined />}
        />
        <Button type="primary" disabled={disable} onClick={onClick}>
          Logout
        </Button>
      </div>
    </div>
  );
};
