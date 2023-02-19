import { ComponentStory, ComponentMeta } from '@storybook/react';
import StoreDecorator from 'shared/config/storybook/StoreDecorator';

import LoginForm from './LoginForm';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'features/LoginForm',
  component: LoginForm,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LoginForm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const LoginFormFeature = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LoginFormFeature.args = {};
LoginFormFeature.decorators = [StoreDecorator({
  loginForm: { username: 'admin', password: '123' },
})];

export const withError = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
withError.args = {};
withError.decorators = [StoreDecorator({
  loginForm: { username: 'admin', password: '123', error: 'ERROR' },
})];

export const isLoading = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
isLoading.args = {};
isLoading.decorators = [StoreDecorator({
  loginForm: { isLoading: true },
})];
