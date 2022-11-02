import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'shared/config/redux/StateSchema';
import getCounterValue from './getCounterValue';

describe('getCounterValue', () => {
  test('Should return counter value', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 10 },
    };
    expect(getCounterValue(state as StateSchema)).toEqual(10);
  });
});
