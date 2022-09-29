import classNames from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";

import cls from "./Navbar.module.scss";

interface NavbarProps {
  classes?: string;
}

const Navbar = ({ classes }: NavbarProps) => (
  <div className={classNames(cls.navbar, {}, [classes])}>
    <div className={cls.links}>
      <AppLink theme={AppLinkTheme.ACTIVE} to="/">
        Home
      </AppLink>
      <AppLink to="/about">About</AppLink>
    </div>
  </div>
);

export default Navbar;
