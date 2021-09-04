import { assign, createMachine } from 'xstate';

import { MONSTER_STARTING_COORDS } from '@/constants';
import { EDirection } from '@/enums';
import { getTargetCoords } from '@/utils';
import { IMonsterContext, IMonsterState, TMonsterEvent } from '.';

const monsterMachine = createMachine<IMonsterContext, TMonsterEvent, IMonsterState>(
  {
    id: 'monster',
    context: {
      coords: MONSTER_STARTING_COORDS,
    },
    initial: 'up',
    on: {
      PLAYER_MOVED: {
        actions: 'setPlayerCoords',
      },
    },
    states: {
      up: {
        after: {
          2000: {
            target: 'down',
            actions: 'moveDown',
          },
        },
      },
      down: {
        after: {
          2000: {
            target: 'up',
            actions: 'moveUp',
          },
        },
      },
    },
  },
  {
    actions: {
      moveDown: assign((context) => ({
        ...context,
        coords: getTargetCoords({ coords: context.coords, direction: EDirection.down }),
      })),
      moveUp: assign((context) => ({
        ...context,
        coords: getTargetCoords({ coords: context.coords, direction: EDirection.up }),
      })),
      setPlayerCoords: assign((context, event) => ({
        ...context,
        playerCoords: event.coords,
      })),
    },
  }
);

export { monsterMachine };
