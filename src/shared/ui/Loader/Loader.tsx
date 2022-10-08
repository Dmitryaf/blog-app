import classNames from 'shared/lib/classNames/classNames';
import cls from './Loader.module.scss';

interface LoaderProps {
  classes?: string;
}

const Loader = ({ classes }: LoaderProps) => (
  <div className={classNames(cls.loader, {}, [classes])}>
    <div />
    <div />
    <div />
    <div />
  </div>
);

export default Loader;
