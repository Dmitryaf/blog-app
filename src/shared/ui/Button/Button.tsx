import { ButtonHTMLAttributes, FC } from 'react';

import classNames from 'shared/lib/classNames/classNames';

import cls from './Button.module.scss';

export const enum ButtonTheme {
  OUTLINE = 'outline',
  CLEAR = 'clear',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export const enum ButtonSize {
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: string;
  size?: string;
  isLoading?: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className, children, theme = '', size = '', ...otherProps
  } = props;
  const mods: Record<string, boolean> = { [cls[theme]]: true, [cls[size]]: true };
  return (
    <button
      type="button"
      className={classNames(cls.button, mods, [className])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
