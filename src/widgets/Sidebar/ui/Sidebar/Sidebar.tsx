import { useState } from 'react';

import classNames from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import LangSwitcher from 'shared/ui/LangSwitcher/LangSwitcher';
import ThemeSwitcher from 'shared/ui/ThemeSwitcher/ThemeSwitcher';

import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
  const [isCollapsed, toggleCollapse] = useState(false);
  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.sidebar, { [cls.collapsed]: isCollapsed }, [
        className,
      ])}
    >
      <div className={cls.switchers}>
        <ThemeSwitcher iconClassName={cls.themeSwitcherIcon} />
        <LangSwitcher className={cls.lang} />
      </div>

      <Button
        theme={ButtonTheme.BACKGROUND}
        data-testid="sidebar-toggle"
        type="button"
        onClick={() => toggleCollapse((prev) => !prev)}
      >
        {isCollapsed ? '>' : '<'}
      </Button>
    </div>
  );
};

export default Sidebar;
