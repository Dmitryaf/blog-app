import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Text, TextTheme } from './Text';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'shared/Text',
  component: Text,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const TextShared = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TextShared.args = {
  title: 'Text',
  text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
  Animi labore quos aut magni, sapiente nesciunt harum magnam tenetur iure quaerat!`,
};

export const onlyTitle = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
onlyTitle.args = {
  title: 'Text',
};

export const onlyText = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
onlyText.args = {
  text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
  Animi labore quos aut magni, sapiente nesciunt harum magnam tenetur iure quaerat!`,
};

export const Error = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Error.args = {
  title: 'Text',
  text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
  Animi labore quos aut magni, sapiente nesciunt harum magnam tenetur iure quaerat!`,
  theme: TextTheme.ERROR,
};
