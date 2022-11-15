import { useTranslation } from 'react-i18next';

import classNames from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import Input, { InputLabelTheme } from 'shared/ui/Input/Input';

import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.loginForm, {}, [className])}>
      <Input
        classNameWrapper={cls.input}
        label={t('Логин')}
        labelTheme={InputLabelTheme.INVERTED}
        isLabelTop
      />
      <Input
        classNameWrapper={cls.input}
        label={t('Пароль')}
        labelTheme={InputLabelTheme.INVERTED}
        isLabelTop
      />
      <Button className={cls.loginBtn} theme={ButtonTheme.BACKGROUND}>{t('Войти')}</Button>
    </div>

  );
};

export default LoginForm;
