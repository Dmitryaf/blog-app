import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';

import { DeepPartial } from '@reduxjs/toolkit';

import { render } from '@testing-library/react';

import { I18nextProvider } from 'react-i18next';

import { StateSchema } from 'shared/config/redux/StateSchema';
import i18nForTests from 'shared/config/i18n/i18nForTests';

import StoreProvider from 'app/providers/StoreProvider';

export interface componentRenderOption {
  route?: string,
  initialState?: DeepPartial<StateSchema>
}

const componentRender = (component: ReactNode, options: componentRenderOption = {}) => {
  const { route = '/', initialState } = options;
  return render(
    <StoreProvider initialState={initialState}>
      <MemoryRouter initialEntries={[route]}>
        <I18nextProvider i18n={i18nForTests}>
          {component}
        </I18nextProvider>
      </MemoryRouter>
    </StoreProvider>,
  );
};

export default componentRender;
