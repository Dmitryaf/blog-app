import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { userReducer } from 'entities/User';

import { counterReducer } from 'features/Counter/model/slice/counterSlice';

import { StateSchema } from './StateSchema';

const createReduxStore = (initialState: StateSchema) => {
  const rootReducers: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
  };

  return configureStore({
    reducer: rootReducers,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
};

export default createReduxStore;
