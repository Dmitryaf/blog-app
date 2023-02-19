/* eslint-disable i18next/no-literal-string */
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { getUserAuthData, userActions } from 'entities/User';

import { LoginModal } from 'features/AuthByUsername';

import classNames from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import Portal from 'shared/ui/Portal/Portal';

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [isOpenAuthModal, setIsOpenAuthModal] = useState(false);
  const userAuthData = useSelector(getUserAuthData);
  console.log('🚀 ~ file: Navbar.tsx:24 ~ Navbar ~ userAuthData', userAuthData);
  const onShowModal = useCallback(() => {
    setIsOpenAuthModal(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setIsOpenAuthModal(false);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (userAuthData) {
    return (
      <div className={classNames(cls.navbar, {}, [className])}>
        <Button onClick={onLogout} theme={ButtonTheme.BACKGROUND}>{t('Выйти')}</Button>
      </div>
    );
  }
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Button onClick={onShowModal} theme={ButtonTheme.BACKGROUND}>{t('Войти')}</Button>
      <Portal>
        <LoginModal isOpen={isOpenAuthModal} onClose={onCloseModal} />
      </Portal>
    </div>

  );
};

export default Navbar;
