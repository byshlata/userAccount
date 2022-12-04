import React, { ChangeEvent, ReactElement, useState } from 'react';

import { Input } from 'antd';

import pencil from './assets/pencil.png';
import style from './ChangeInput.module.sass';

type ChangeLoginType = {
  value: string;
  onChangeName: (userLogin: string) => void;
};

export const ChangeInput = ({ onChangeName, value }: ChangeLoginType): ReactElement => {
  const [mode, setMode] = useState<boolean>(false);
  const [login, setLogin] = useState<string>(value);

  const NameChanger = (e: ChangeEvent<HTMLInputElement>): void => {
    setLogin(e.currentTarget.value);
  };
  const changeName = (): void => {
    if (login) {
      onChangeName(login);
      setMode(false);
    }
  };

  return (
    <div className={style.changeLoginWrapper}>
      {mode ? (
        <Input value={login} onChange={NameChanger} autoFocus onBlur={changeName} />
      ) : (
        <>
          <h3 className={style.title}>{login}</h3>

          <img
            className={style.imageItem}
            src={pencil}
            alt="change name"
            onClick={() => {
              setMode(true);
            }}
          />
        </>
      )}
    </div>
  );
};
