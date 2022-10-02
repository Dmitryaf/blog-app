import classNames from "shared/lib/classNames/classNames";
import Loader from "shared/ui/Loader/Loader";

import cls from "./PageLoader.module.scss";

interface PageLoaderProps {
  classes?: string;
}

const PageLoader = ({ classes }: PageLoaderProps) => (
  <div className={classNames(cls.pageLoader, {}, [classes])}>
    <Loader />
  </div>

);

export default PageLoader;
