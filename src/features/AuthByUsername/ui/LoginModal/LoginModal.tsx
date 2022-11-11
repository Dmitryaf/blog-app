/* eslint-disable i18next/no-literal-string */
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import classNames from 'shared/lib/classNames/classNames';

import Modal from 'shared/ui/Modal/Modal';
import LoginForm from '../LoginForm/LoginForm';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void
}

const LoginModal = (props: LoginModalProps) => {
  const { className, onClose, isOpen } = props;
  return (
    <Modal onClose={onClose} isOpen={isOpen} className={classNames('', {}, [className])}>
      <LoginForm />
    </Modal>
  );
};

export default LoginModal;
