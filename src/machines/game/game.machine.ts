import { createMachine, forwardTo, send } from 'xstate';
import { isEqual } from 'lodash';
import { choose } from 'xstate/lib/actions';

import { DOOR_COORDS, TREASURE_COORDS } from '@/constants';
import { playerMachine } from '@/machines/player';
import { monsterMachine } from '@/machines/monster';
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
            invoke: {
              id: 'monsterActor',
              src: 'monsterMachine',
            },
            entry: 'resetPlayerCoords',
            on: {
              PLAYER_WALKED_THROUGH_DOOR: 'level3',
            },
          },
          level3: {
            entry: 'resetPlayerCoords',
            on: {
              PLAYER_MOVED: {
                actions: 'onPlayerMovedFinalLevel',
              },
            },
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
    services: { playerMachine, monsterMachine },
    actions: {
      onPlayerMoved: choose([
        { cond: 'isPlayerAtDoor', actions: 'playerWalkedThrowDoor' },
        { cond: 'hasMonster', actions: 'forwardToMonster' },
      ]),
      playerWalkedThrowDoor: send('PLAYER_WALKED_THROUGH_DOOR'),
      resetPlayerCoords: send('RESET_PLAYER_COORDS', { to: 'playerActor' }),
      onPlayerMovedFinalLevel: choose([
        { cond: 'isPlayerAtTreasure', actions: ['playerGotTreasure'] },
      ]),
      playerGotTreasure: send('PLAYER_GOT_TREASURE'),
      forwardToMonster: forwardTo('monsterActor'),
    },
    guards: {
      isPlayerAtDoor: (_, event) => {
        if (event.type !== 'PLAYER_MOVED') return false;

        return isEqual(event.coords, DOOR_COORDS);
      },
      isPlayerAtTreasure: (_, event) => {
        if (event.type !== 'PLAYER_MOVED') return false;

        return isEqual(event.coords, TREASURE_COORDS);
      },
      hasMonster: (context, event, meta) => {
        return !!meta.state.children.monsterActor;
      },
    },
  }
);

export { gameMachine };
