import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import getLoginState from 'features/AuthByUsername/model/selectors/getLoginState/getLoginState';
import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice';

import classNames from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import Input, { InputLabelTheme } from 'shared/ui/Input/Input';

import
loginByUsername
  from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';

import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const {
    username, password, error, isLoading,
  } = useSelector(getLoginState);

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onClickLogin = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, username, password]);

  return (
    <div className={classNames(cls.loginForm, {}, [className])}>
      {error && <div>{error}</div>}
      <Input
        value={username}
        classNameWrapper={cls.input}
        label={t('Логин')}
        labelTheme={InputLabelTheme.INVERTED}
        isLabelTop
        onChange={onChangeUsername}
      />
      <Input
        value={password}
        classNameWrapper={cls.input}
        label={t('Пароль')}
        labelTheme={InputLabelTheme.INVERTED}
        isLabelTop
        onChange={onChangePassword}
      />
      <Button
        onClick={onClickLogin}
        className={cls.loginBtn}
        theme={ButtonTheme.BACKGROUND}
        disabled={isLoading}
      >
        {t('Войти')}

      </Button>
    </div>

  );
});

export default LoginForm;
