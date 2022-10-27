import { configureStore } from '@reduxjs/toolkit';

import { counterReducer } from 'features/Counter/model/slice/counterSlice';

import { StateSchema } from './StateSchema';

const createReduxStore = (initialState: StateSchema) => configureStore({
  reducer: { counter: counterReducer },
  devTools: __IS_DEV__,
  preloadedState: initialState,
});

export default createReduxStore;
