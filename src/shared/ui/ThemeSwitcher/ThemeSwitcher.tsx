import useTheme from 'shared/lib/theme/useTheme';
import classNames from 'shared/lib/classNames/classNames';
import ThemeIcon from 'shared/assets/theme_icon.svg';

import { Button, ButtonTheme } from '../Button/Button';

import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
  iconClassName?: string;
}

const ThemeSwitcher = ({ className, iconClassName }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      theme={ButtonTheme.CLEAR}
      className={classNames(cls.themeSwitcher, {}, [className])}
      type="button"
      onClick={toggleTheme}
    >
      <ThemeIcon className={classNames('theme-icon', {}, [cls.switcherIcon, iconClassName])} />
    </Button>
  );
};

export default ThemeSwitcher;
