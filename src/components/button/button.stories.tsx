import { Meta, Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button } from '.';

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Title',
    onClick: action('clicked'),
  },
} as Meta;

const Default: Story = (args) => <Button {...args} />;

export { Default };
