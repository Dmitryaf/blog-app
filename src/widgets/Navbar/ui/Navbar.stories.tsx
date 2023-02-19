import { ComponentStory, ComponentMeta } from '@storybook/react';

import StoreDecorator from 'shared/config/storybook/StoreDecorator';

import Navbar from './Navbar';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'widgets/Navbar',
  component: Navbar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Navbar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const NavbarWidget = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NavbarWidget.args = {};
NavbarWidget.decorators = [StoreDecorator({
  loginForm: { username: 'admin', password: '123'},
})];

export const AuthNavbar = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
AuthNavbar.args = {};
AuthNavbar.decorators = [StoreDecorator({
  user: { authData: {} },
})];
