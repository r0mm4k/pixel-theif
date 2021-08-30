import { Meta, Story } from '@storybook/react';

import { Health } from '.';

export default {
  title: 'Components/Health',
  component: Health,
  args: {
    count: 3,
  },
} as Meta;

const Default: Story = (args) => <Health {...args} />;

export { Default };
