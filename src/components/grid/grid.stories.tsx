import { Meta, Story } from '@storybook/react';

import { Grid } from '.';

export default {
  title: 'Components/Grid',
  component: Grid,
} as Meta;

const Default: Story = (args) => <Grid {...args} />;

export { Default };
