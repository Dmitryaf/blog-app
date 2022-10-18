import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { RouterPath } from 'shared/config/routerConfig';

import classNames from 'shared/lib/classNames/classNames';

import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import LangSwitcher from 'shared/ui/LangSwitcher/LangSwitcher';
import ThemeSwitcher from 'shared/ui/ThemeSwitcher/ThemeSwitcher';

import HomeIcon from 'shared/assets/home_link.svg';
import AboutIcon from 'shared/assets/about_link.svg';

import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
  const [isCollapsed, toggleCollapse] = useState(false);
  const { t, i18n } = useTranslation();
  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.sidebar, { [cls.collapsed]: isCollapsed }, [
        className,
      ])}
    >
      <div className={cls.switchers}>
        <ThemeSwitcher iconClassName={cls.themeSwitcherIcon} />
        <LangSwitcher className={cls.lang} short={isCollapsed} />
      </div>

      <Button
        className={cls.collapseBtn}
        theme={ButtonTheme.BACKGROUND}
        size={ButtonSize.L}
        data-testid="sidebar-toggle"
        type="button"
        onClick={() => toggleCollapse((prev) => !prev)}
      >
        {isCollapsed ? '>' : '<'}
      </Button>

      <div className={cls.links}>
        <AppLink className={cls.item} to={RouterPath.main}>
          <HomeIcon className={cls.linkIcon} />
          <span className={cls.link}>{t('Главная')}</span>
        </AppLink>
        <AppLink className={cls.item} to={RouterPath.about}>
          <AboutIcon className={cls.linkIcon} />
          <span className={cls.link}>{t('О нас')}</span>
        </AppLink>
      </div>
    </div>
  );
};

export default Sidebar;
