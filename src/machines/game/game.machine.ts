import { createMachine } from 'xstate';

import { IGameState, TGameEvent } from './game.types';

const gameMachine = createMachine<null, TGameEvent, IGameState>({
  id: 'game',
  initial: 'home',
  states: {
    home: {
      on: {
        START_BUTTON_CLICKED: 'playing',
      },
    },
    playing: {
      on: {
        PLAYER_DIED: 'gameOver',
        PLAYER_GOT_TREASURE: 'gameComplete',
      },
    },
    gameOver: {
      on: {
        RESTART_BUTTON_CLICKED: 'playing',
      },
    },
    gameComplete: {
      on: {
        HOME_BUTTON_CLICKED: 'home',
      },
    },
  },
});

export { gameMachine };
