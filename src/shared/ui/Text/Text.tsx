import classNames from 'shared/lib/classNames/classNames';

import cls from './Text.module.scss';

interface TextProps {
  title?: string;
  text?: string;
  className: string;
}

export const Text = ({ title, text, className }:TextProps) => (
  <div className={classNames(cls.textWrapp, {}, [className])}>
    {title && <p className={cls.title}>{title}</p>}
    {text && <p className={cls.text}>{text}</p>}
  </div>
);

export default Text;
