import { ComponentStory, ComponentMeta } from '@storybook/react';

import PageError from './PageError';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'widgets/PageError',
  component: PageError,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof PageError>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PageError> = (args) => <PageError {...args} />;

export const PageErrorWidget = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PageErrorWidget.args = {};
