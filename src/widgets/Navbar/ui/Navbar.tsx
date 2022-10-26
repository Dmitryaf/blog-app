/* eslint-disable i18next/no-literal-string */
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import classNames from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';

import Modal from 'shared/ui/Modal/Modal';
import Portal from 'shared/ui/Portal/Portal';

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isOpenAuthModal, setIsOpenAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsOpenAuthModal((prev) => !prev);
  }, []);
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Button onClick={onToggleModal}>{t('Войти')}</Button>
      <Portal>
        <Modal isOpen={isOpenAuthModal} onClose={onToggleModal}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Excepturi voluptates fugit nam quam doloribus totam, minus saepe nobis ex a,
          rem placeat inventore quos voluptatibus iure, quisquam doloremque suscipit corrupti?
        </Modal>
      </Portal>
    </div>

  );
};

export default Navbar;
