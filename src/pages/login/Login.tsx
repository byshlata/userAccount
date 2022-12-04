import React from 'react';

import 'antd/dist/antd.css';
import { Button, Form, Input } from 'antd';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import style from '../mainPageStyle/mainPageStyle.module.sass';

import { Path } from 'enums';
import { useAppDispatch } from 'hooks';
import { selectorIsProgress } from 'store';
import { loginAccount } from 'store/thunk';
import { UserLoginType } from 'types';

export const Login = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector(selectorIsProgress);

  const onFinish = (values: UserLoginType): void => {
    if (values.email && values.password) {
      dispatch(loginAccount({ email: values.email, password: values.password }));
    }
  };

  const onRegister = (): void => {
    navigate(`${Path.Register}`);
  };

  return (
    <div className={style.container}>
      <Form
        name="register"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
        style={{ width: '100%' }}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              type: 'email',
              message: 'Please input your email!',
            },
          ]}
        >
          <Input disabled={isLoading} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password disabled={isLoading} />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <div className={style.buttonContainer}>
            <Button type="primary" onClick={onRegister} disabled={isLoading}>
              Sing Up
            </Button>
            <Button type="primary" htmlType="submit" disabled={isLoading}>
              Sing In
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};
