import { InputHTMLAttributes } from 'react';
import classNames from 'shared/lib/classNames/classNames';

import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string,
  onChange?: (value: string) => void

}

const Input = (props: InputProps) => {
  const {
    className, type = 'text', ...otherProps
  } = props;
  const mods: Record<string, boolean> = {};

  return (
    <Input
      type={type}
      className={classNames(cls.input, mods, [className])}
      {...otherProps}
    />
  );
};

export default Input;
