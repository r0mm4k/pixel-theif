import { Meta, Story } from '@storybook/react';

import { Game } from '.';
import { IGameProps } from './game.types';
import {
  fastForwardToGameCompleteEvents,
  fastForwardToGameOverEvents,
  fastForwardToLevel1Events,
  fastForwardToLevel2Events,
  fastForwardToLevel3Events,
} from './game.utils';

export default {
  title: 'Modules/Game',
  component: Game,
} as Meta;

const Default: Story<IGameProps> = (args) => <Game {...args} />;

const Level1 = Default.bind({});
Level1.args = {
  ...Default.args,
  fastForwardEvents: fastForwardToLevel1Events,
};

const Level2 = Default.bind({});
Level2.args = {
  ...Default.args,
  fastForwardEvents: fastForwardToLevel2Events,
};

const Level3 = Default.bind({});
Level3.args = {
  ...Default.args,
  fastForwardEvents: fastForwardToLevel3Events,
};

const GameOver = Default.bind({});
GameOver.args = {
  ...Default.args,
  fastForwardEvents: fastForwardToGameOverEvents,
};

const GameComplete = Default.bind({});
GameComplete.args = {
  ...Default.args,
  fastForwardEvents: fastForwardToGameCompleteEvents,
};

export { Default, Level1, Level2, Level3, GameOver, GameComplete };
