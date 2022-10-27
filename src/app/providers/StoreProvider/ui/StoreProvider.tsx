import { ReactNode } from 'react';
import { Provider } from 'react-redux';

import { StateSchema } from 'shared/config/redux/StateSchema';
import createReduxStore from 'shared/config/redux/strore';

interface StoreProviderProps {
  children: ReactNode;
  initialState?: StateSchema

}

const StoreProvider = (props: StoreProviderProps) => {
  const {
    children,
    initialState,
  } = props;

  const store = createReduxStore(initialState);
  return (
    <div>
      <Provider store={store}>
        {children}
      </Provider>
    </div>
  );
};

export default StoreProvider;
