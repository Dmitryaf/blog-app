import { classNames } from "shared/lib/classNames/classNames";
import { AppLink } from "shared/ui/AppLink/AppLink";

import cls from "./Navbar.module.scss";

interface NavbarProps {
  classes?: string;
}

export const Navbar = ({ classes }: NavbarProps) => {
  return (
    <div className={classNames(cls.navbar, {}, [classes])}>
      <div className={cls.links}>
        <AppLink to="/">Home</AppLink>
        <AppLink to="/about">About</AppLink>
      </div>
    </div>
  );
};
