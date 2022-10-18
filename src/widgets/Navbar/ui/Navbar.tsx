import { useTranslation } from 'react-i18next';
import { RouterPath } from 'shared/config/routerConfig/ui/routerConfig';

import classNames from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  const { t, i18n } = useTranslation();
  return (
    <div className={classNames(cls.navbar, {}, [className])} />
  );
};

export default Navbar;
