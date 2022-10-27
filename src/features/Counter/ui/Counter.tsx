/* eslint-disable i18next/no-literal-string */
import { useDispatch, useSelector } from 'react-redux';

import classNames from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';

import getCounterValue from '../model/selectors/getCounterValue/getCounterValue';

import { counterActions } from '../model/slice/counterSlice';

interface CounterProps {
  className?: string;
}

const Counter = ({ className }: CounterProps) => {
  const count = useSelector(getCounterValue);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };
  return (
    <div className={classNames('', {}, [className])}>
      <div>
        <h1>{count}</h1>
        <Button
          aria-label="Increment value"
          onClick={() => dispatch(increment)}
        >
          Increment
        </Button>
        <span>{count}</span>
        <Button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement)}
        >
          Decrement
        </Button>
      </div>
    </div>
  );
};

export default Counter;
