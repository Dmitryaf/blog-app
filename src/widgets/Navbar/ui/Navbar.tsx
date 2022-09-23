import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher/ThemeSwitcher";

import cls from "./Navbar.module.scss";

interface NavbarProps {
  classes?: string;
}

export const Navbar = ({ classes }: NavbarProps) => {
  return (
    <div className={classNames(cls.navbar, {}, [classes])}>
      <ThemeSwitcher />
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.ACTIVE} to="/">
          Home
        </AppLink>
        <AppLink to="/about">About</AppLink>
      </div>
    </div>
  );
};
