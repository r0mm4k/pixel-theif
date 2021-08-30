import { Meta, Story } from '@storybook/react';

import { GameOver } from '.';
import { IGameOverProps } from './game-over.types';

export default {
  title: 'Screens/Game Over',
  component: GameOver,
} as Meta;

const Default: Story<IGameOverProps> = (args) => <GameOver {...args} />;

export { Default };
