import { createMachine } from 'xstate';
import { log } from 'xstate/lib/actions';

import { PLAYER_STARTING_COORDS } from '@/constants';
import { IPlayerContext, IPlayerState, TPlayerEvent } from '.';

const playerMachine = createMachine<IPlayerContext, TPlayerEvent, IPlayerState>({
  id: 'player',
  context: {
    coords: PLAYER_STARTING_COORDS,
  },
  initial: 'alive',
  states: {
    alive: {
      on: {
        ARROW_BUTTON_CLICKED: {
          actions: log(),
        },
      },
    },
    dead: {},
  },
});

export { playerMachine };
