import { Meta, Story } from '@storybook/react';

import { Game } from '.';

export default {
  title: 'Modules/Game',
  component: Game,
} as Meta;

const Default: Story = (args) => <Game {...args} />;

export { Default };
