import useTheme from 'shared/lib/theme/useTheme';
import classNames from 'shared/lib/classNames/classNames';
import ThemeIcon from 'shared/assets/theme_icon.svg';

import { Button, ButtonTheme } from '../Button/Button';

import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  classes?: string;
}

const ThemeSwitcher = ({ classes }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      className={classNames(cls.themeSwitcher, {}, [classes])}
      theme={ButtonTheme.CLEAR}
      type="button"
      onClick={() => toggleTheme()}
    >
      <ThemeIcon className={classNames('theme-icon', {}, [cls.switcherIcon])} />
    </Button>
  );
};

export default ThemeSwitcher;
