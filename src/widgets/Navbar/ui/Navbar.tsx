/* eslint-disable i18next/no-literal-string */
import { LoginModal } from 'features/AuthByUsername';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import classNames from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

import Portal from 'shared/ui/Portal/Portal';

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isOpenAuthModal, setIsOpenAuthModal] = useState(false);

  const onShowModal = useCallback(() => {
    setIsOpenAuthModal(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setIsOpenAuthModal(false);
  }, []);
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
