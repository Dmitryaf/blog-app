import { useTranslation } from 'react-i18next';
import { RouterPath } from 'shared/config/routerConfig/ui/routerConfig';

import classNames from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

import cls from './Navbar.module.scss';

interface NavbarProps {
  classes?: string;
}

const Navbar = ({ classes }: NavbarProps) => {
  const { t, i18n } = useTranslation();
  return (
    <div className={classNames(cls.navbar, {}, [classes])}>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.ACTIVE} to={RouterPath.main}>
          {t('Главная')}
        </AppLink>
        <AppLink to={RouterPath.about}>{t('О нас')}</AppLink>
      </div>
    </div>
  );
};

export default Navbar;
