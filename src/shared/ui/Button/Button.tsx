import { ButtonHTMLAttributes, FC } from "react";

import classNames from "shared/lib/classNames/classNames";

import cls from "./Button.module.scss";

export const enum ButtonTheme {}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: string;
}

const Button: FC<ButtonProps> = (props) => {
  const {
    className, children, theme = "", ...otherProps
  } = props;
  return (
    <button
      type="button"
      className={classNames(cls.button, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
