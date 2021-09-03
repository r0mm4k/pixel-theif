import { createMachine, send } from 'xstate';
import { isEqual } from 'lodash';
import { choose } from 'xstate/lib/actions';

import { playerMachine } from '@/machines/player';
import { DOOR_COORDS } from '@/constants';
import { IGameState, TGameEvent } from '.';

const gameMachine = createMachine<null, TGameEvent, IGameState>(
  {
    id: 'game',
    initial: 'home',
    states: {
      home: {
        on: {
          START_BUTTON_CLICKED: 'playing',
        },
      },
      playing: {
        invoke: {
          id: 'playerActor',
          src: 'playerMachine',
        },
        on: {
          PLAYER_DIED: 'gameOver',
          PLAYER_GOT_TREASURE: 'gameComplete',
          PLAYER_MOVED: {
            actions: 'onPlayerMoved',
          },
        },
        initial: 'level1',
        states: {
          level1: {
            on: {
              PLAYER_WALKED_THROUGH_DOOR: 'level2',
            },
          },
          level2: {
            entry: 'resetPlayerCoords',
            on: {
              PLAYER_WALKED_THROUGH_DOOR: 'level3',
            },
          },
          level3: {
            entry: 'resetPlayerCoords',
          },
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
  },
  {
    services: {
      playerMachine,
    },
    actions: {
      onPlayerMoved: choose([{ cond: 'isPlayerAtDoor', actions: ['playerWalkedThrowDoor'] }]),
      playerWalkedThrowDoor: send('PLAYER_WALKED_THROUGH_DOOR'),
      resetPlayerCoords: send('RESET_PLAYER_COORDS', { to: 'playerActor' }),
    },
    guards: {
      isPlayerAtDoor: (_, event) => {
        if (event.type !== 'PLAYER_MOVED') return false;

        return isEqual(event.coords, DOOR_COORDS);
      },
    },
  }
);

export { gameMachine };
