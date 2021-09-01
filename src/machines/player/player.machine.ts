import { createMachine } from 'xstate';

import { IPlayerState } from './player.types';

const playerMachine = createMachine<any, any, IPlayerState>({
  id: 'player',
  initial: 'alive',
  states: {
    alive: {},
    dead: {},
  },
});

export { playerMachine };
