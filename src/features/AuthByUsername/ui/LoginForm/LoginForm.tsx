import { useTranslation } from 'react-i18next';

import classNames from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import Input from 'shared/ui/Input/Input';

import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.loginForm, {}, [className])}>
      {/* <Input className={cls.input} />
      <Input className={cls.input} /> */}
      <Button className={cls.loginBtn}>{t('Войти')}</Button>
    </div>

  );
};

export default LoginForm;