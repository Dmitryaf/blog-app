import { useEffect } from '@storybook/addons';
import React, { ReactNode, useRef, useState } from 'react';

import classNames from 'shared/lib/classNames/classNames';

import cls from './Modal.module.scss';

interface ModalProps {
  children?: ReactNode;
  className?: string;
  isOpen?: boolean,
  onClose: () => void
}

const ANIMATION_DELAY = 300;

const Modal = (props: ModalProps) => {
  const {
    className, children, isOpen, onClose,
  } = props;

  const [isClosing, setIsClosing] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  };

  const closeHandler = () => {
    if (onClose) {
      setIsClosing(true);
      /*
        Если модалка по каким-то причинам демонтируется,
        то может сработать setTimeout и попытается изменить состояние не существующего компонента.
        timerRef.current помогает избежать такое поведение
      */
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  };

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  useEffect(() => () => {
    clearTimeout(timerRef.current);
  }, [isOpen]);

  return (
    <div className={classNames(cls.modal, mods, [className])} onClick={closeHandler}>
      <div className={cls.overlay}>
        <div className={cls.content} onClick={onContentClick}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
