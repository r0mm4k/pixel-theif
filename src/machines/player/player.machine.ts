import { createMachine } from 'xstate';

import { PLAYER_STARTING_COORDS } from '@/constants';
import { IPlayerContext, IPlayerState } from '.';

const playerMachine = createMachine<IPlayerContext, any, IPlayerState>({
  id: 'player',
  context: {
    coords: PLAYER_STARTING_COORDS,
  },
  initial: 'alive',
  states: {
    alive: {},
    dead: {},
  },
});

export { playerMachine };
