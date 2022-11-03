import { DeepPartial } from '@reduxjs/toolkit';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';

import { StateSchema } from 'shared/config/redux/StateSchema';
import createReduxStore from 'shared/config/redux/strore';

interface StoreProviderProps {
  children: ReactNode;
  initialState?: DeepPartial<StateSchema>

}

const StoreProvider = (props: StoreProviderProps) => {
  const {
    children,
    initialState,
  } = props;

  const store = createReduxStore(initialState as StateSchema);
  return (
    <div>
      <Provider store={store}>
        {children}
      </Provider>
    </div>
  );
};

export default StoreProvider;
