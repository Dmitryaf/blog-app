import React, { InputHTMLAttributes } from 'react';
import classNames from 'shared/lib/classNames/classNames';

import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

export const enum InputLabelTheme {
  INVERTED = 'invertedLabel',
}
interface InputProps extends HTMLInputProps {
  classNameInput?: string;
  classNameWrapper?: string;
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
  labelTheme?: string;
  isLabelTop?: boolean;
}

const Input = (props: InputProps) => {
  const {
    classNameInput,
    classNameWrapper,
    type = 'text',
    value,
    onChange,
    label,
    isLabelTop,
    labelTheme,
    ...otherProps
  } = props;
  const modsWrapper: Record<string, boolean> = { [cls.labelTop]: isLabelTop };
  const modsInput: Record<string, boolean> = {};
  const modsLabel: Record<string, boolean> = { [cls[labelTheme]]: true };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className={classNames(cls.inputWrapper, modsWrapper, [classNameWrapper])}>
      {label && (
        <span className={classNames(cls.label, modsLabel, [])}>{label}</span>
      )}

      <input
        type={type}
        value={value}
        onChange={onChangeHandler}
        className={classNames(cls.input, modsInput, [classNameInput])}
        {...otherProps}
      />
    </div>

  );
};

export default Input;
