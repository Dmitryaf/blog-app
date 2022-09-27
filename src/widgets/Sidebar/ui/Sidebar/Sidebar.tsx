import { useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { LangSwitcher } from "shared/ui/LangSwitcher/LangSwitcher";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher/ThemeSwitcher";

import cls from "./Sidebar.module.scss";

interface SidebarProps {
  classes?: string;
}

export const Sidebar = ({ classes }: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <div
      className={classNames(cls.sidebar, { [cls.collapsed]: isCollapsed }, [
        classes,
      ])}
    >
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher classes={cls.lang} />
      </div>

      <button onClick={() => setIsCollapsed((prev) => !prev)}>TOGGLE</button>
    </div>
  );
};
