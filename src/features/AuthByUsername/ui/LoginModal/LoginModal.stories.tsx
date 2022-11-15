import { ComponentStory, ComponentMeta } from '@storybook/react';

import LoginModal from './LoginModal';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'features/LoginModal',
  component: LoginModal,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LoginModal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LoginModal> = (args) => <LoginModal {...args} />;

export const LoginModalFeature = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LoginModalFeature.args = {
  isOpen: true,
};
