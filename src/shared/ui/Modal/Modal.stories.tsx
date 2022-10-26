/* eslint-disable i18next/no-literal-string */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Modal from './Modal';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'shared/Modal',
  component: Modal,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Modal> = (args) => (
  <Modal {...args} />
);

export const ModalShared = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ModalShared.args = {
  children: `
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, dolor!
  Lorem ipsum dolor sit amet consectetur adipisicing elit.Obcaecati, dolor!
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, dolor!
  `,
  isOpen: true,
};
