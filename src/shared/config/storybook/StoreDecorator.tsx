import { DeepPartial } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';

import StoreProvider from 'app/providers/StoreProvider';

import { StateSchema } from '../redux/StateSchema';

const StoreDecorator = (state: DeepPartial<StateSchema>) => (StoryComponent: Story) => (
  <StoreProvider initialState={state}>
    <StoryComponent />
  </StoreProvider>
);

export default StoreDecorator;
