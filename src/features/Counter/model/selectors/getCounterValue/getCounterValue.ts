import { createSelector } from '@reduxjs/toolkit';

import { CounterSchema } from 'shared/config/redux/StateSchema';

import getCounter from '../getCounter/getCounter';

const getCounterValue = createSelector(getCounter, (counter: CounterSchema) => counter.value);

export default getCounterValue;
