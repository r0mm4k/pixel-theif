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
      initial: 'level1',
      states: {
        level1: {
          on: {
            PLAYER_WALKED_THROUGH_DOOR: 'level2',
          },
        },
        level2: {
          on: {
            PLAYER_WALKED_THROUGH_DOOR: 'level3',
          },
        },
        level3: {},
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
