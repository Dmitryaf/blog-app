import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import classNames from 'shared/lib/classNames/classNames';

import cls from './AppLink.module.scss';

export const enum AppLinkTheme { }

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: string;
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const {
    to,
    className,
    children,
    theme,
    ...otherProps
  } = props;
  return (
    <Link
      to={to}
      className={classNames(cls.appLink, { active: true }, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
