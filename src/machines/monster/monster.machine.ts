import { assign, createMachine } from 'xstate';

import { MONSTER_STARTING_COORDS } from '@/constants';
import { IMonsterContext, IMonsterState } from '.';
import { getTargetCoords } from '@/utils';
import { EDirection } from '@/enums';

const monsterMachine = createMachine<IMonsterContext, any, IMonsterState>(
  {
    id: 'monster',
    context: {
      coords: MONSTER_STARTING_COORDS,
    },
    initial: 'up',
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
    },
  }
);

export { monsterMachine };
