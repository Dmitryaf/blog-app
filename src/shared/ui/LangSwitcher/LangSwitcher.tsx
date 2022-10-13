import { useTranslation } from 'react-i18next';

import classNames from 'shared/lib/classNames/classNames';

import { Button, ButtonTheme } from '../Button/Button';

interface LangSwitcherProps {
  className?: string;
}

const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();
  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };
  return (
    <Button
      theme={ButtonTheme.CLEAR}
      className={classNames('', {}, [className])}
      type="button"
      onClick={toggleLang}
    >
      {t('Язык')}
    </Button>
  );
};

export default LangSwitcher;
