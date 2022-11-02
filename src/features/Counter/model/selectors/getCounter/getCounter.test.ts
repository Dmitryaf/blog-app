import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'shared/config/redux/StateSchema';

import getCounter from './getCounter';

describe('getCounter', () => {
  test('Should return counter value', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 10 },
    };
    expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
  });
});
