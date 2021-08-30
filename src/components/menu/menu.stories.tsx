import { Meta, Story } from '@storybook/react';

import { Menu } from '.';

export default {
  title: 'Components/Menu',
  component: Menu,
} as Meta;

const Default: Story = (args) => (
  <Menu {...args}>
    <div>Item</div>
    <div>Item</div>
  </Menu>
);

export { Default };
