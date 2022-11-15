import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input, { InputLabelTheme } from './Input';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'shared/Input',
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const InputShared = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
InputShared.args = {};

export const InputWithLabel = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
InputWithLabel.args = {
  label: 'Label',
};

export const InputWithTopLabel = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
InputWithTopLabel.args = {
  label: 'Label',
  isLabelTop: true,
  labelTheme: InputLabelTheme.INVERTED,
};
