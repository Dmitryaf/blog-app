import { useTranslation } from "react-i18next";

import classNames from "shared/lib/classNames/classNames";
import Button from "shared/ui/Button/Button";

import cls from "./PageError.module.scss";

interface PageErrorProps {
  classes?: string;
}

const PageError = ({ classes }: PageErrorProps) => {
  const { t } = useTranslation();
  const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };
  return (
    <div className={classNames(cls.pageError, {}, [classes])}>
      <h1 className={cls.title}>
        {t("Произошла непредвиденная ошибка")}
      </h1>
      <Button onClick={reloadPage}>{t("Перезагрузить страницу")}</Button>
    </div>

  );
};

export default PageError;
