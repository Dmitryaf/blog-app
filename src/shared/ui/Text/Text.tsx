import classNames from 'shared/lib/classNames/classNames';

import cls from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
  ERROR = 'error'
}
interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: string;
}

export const Text = (props:TextProps) => {
  const {
    title,
    text,
    className,
    theme = TextTheme.PRIMARY,
  } = props;
  return (
    <div className={classNames(cls.textWrapp, { [cls[theme]]: true }, [className])}>
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
};

export default Text;
