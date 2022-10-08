import { useState } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import LangSwitcher from 'shared/ui/LangSwitcher/LangSwitcher';
import ThemeSwitcher from 'shared/ui/ThemeSwitcher/ThemeSwitcher';

import cls from './Sidebar.module.scss';

interface SidebarProps {
  classes?: string;
}

const Sidebar = ({ classes }: SidebarProps) => {
  const [isCollapsed, toggleCollapse] = useState(false);
  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.sidebar, { [cls.collapsed]: isCollapsed }, [
        classes,
      ])}
    >
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher classes={cls.lang} />
      </div>

      <button
        data-testid="sidebar-toggle"
        type="button"
        onClick={() => toggleCollapse((prev) => !prev)}
      >
        &gt;
      </button>
    </div>
  );
};

export default Sidebar;
