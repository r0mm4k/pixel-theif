import { Meta, Story } from '@storybook/react';

import { GameComplete } from '.';
import { IGameCompleteProps } from './game-complete.types';

export default {
  title: 'Screens/GameComplete',
  component: GameComplete,
} as Meta;

const Default: Story<IGameCompleteProps> = (args) => <GameComplete {...args} />;

export { Default };
