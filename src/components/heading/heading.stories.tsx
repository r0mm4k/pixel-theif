import { Meta, Story } from '@storybook/react';

import { Heading } from '.';

export default {
  title: 'Components/Heading',
  component: Heading,
  args: {
    children: 'Game Over',
  },
} as Meta;

const Default: Story = (args) => <Heading {...args} />;

export { Default };
