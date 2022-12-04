import React from 'react';

import 'antd/dist/antd.css';
import { Button, Form, Input } from 'antd';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import style from '../mainPageStyle/mainPageStyle.module.sass';

import { Path } from 'enums';
import { useAppDispatch } from 'hooks';
import { selectorIsProgress, createAccount } from 'store';
import { UserRegistrationType } from 'types';

export const Register = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector(selectorIsProgress);

  const onFinish = (values: UserRegistrationType): void => {
    if (values.email && values.password && values.firstName && values.lastName) {
      dispatch(
        createAccount({
          email: values.email,
          password: values.password,
          firstName: values.firstName,
          lastName: values.lastName,
        }),
      );
    }
  };

  const onLogin = (): void => {
    navigate(`${Path.Login}`);
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
          label="FirstName"
          name="firstName"
          rules={[
            {
              required: true,
              type: 'string',
              message: 'Please input your first name!',
            },
          ]}
        >
          <Input disabled={isLoading} />
        </Form.Item>

        <Form.Item
          label="LastName"
          name="lastName"
          rules={[
            {
              required: true,
              type: 'string',
              message: 'Please input your last name!',
            },
          ]}
        >
          <Input disabled={isLoading} />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              type: 'email',
              message: 'Please input your username!',
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
            <Button type="primary" onClick={onLogin} disabled={isLoading}>
              Sing In
            </Button>
            <Button type="primary" htmlType="submit" disabled={isLoading}>
              Create account
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};
