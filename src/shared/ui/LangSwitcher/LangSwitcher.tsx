import { useTranslation } from "react-i18next";

import classNames from "shared/lib/classNames/classNames";

import Button from "../Button/Button";

import cls from "./LangSwitcher.module.scss";

interface LangSwitcherProps {
  classes?: string;
}

const LangSwitcher = ({ classes }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();
  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };
  return (
    <Button
      className={classNames(cls.langSwitcher, {}, [classes])}
      type="button"
      onClick={toggleLang}
    >
      {t("Язык")}
    </Button>
  );
};

export default LangSwitcher;
