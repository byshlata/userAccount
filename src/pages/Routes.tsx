import React, { ReactElement } from 'react';

import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Path } from 'enums';
import { Account, Login, Page404, Register } from 'pages';
import { selectorUserFirstName } from 'store';

export const Routers = (): ReactElement | null => {
  const isAuth = useSelector(selectorUserFirstName);
  const LOGIN = <Navigate to={`${Path.Login}`} />;
  const USER = <Navigate to={`${Path.User}`} />;

  return (
    <Routes>
      <Route path={`${Path.Other}`} element={<Page404 />} />
      <Route path={`${Path.Root}`} element={isAuth ? USER : LOGIN} />
      <Route path={`${Path.User}`} element={isAuth ? <Account /> : LOGIN} />
      <Route path={`${Path.Register}`} element={isAuth ? USER : <Register />} />
      <Route path={`${Path.Login}`} element={isAuth ? USER : <Login />} />
    </Routes>
  );
};
