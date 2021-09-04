import { assign, createMachine, sendParent } from 'xstate';
import { choose } from 'xstate/lib/actions';
import { isEqual } from 'lodash';

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
        actions: ['setPlayerCoords', 'attemptAttack'],
      },
    },
    states: {
      up: {
        entry: 'attemptAttack',
        after: {
          2000: {
            target: 'down',
            actions: 'moveDown',
          },
        },
      },
      down: {
        entry: 'attemptAttack',
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
      attemptAttack: choose([{ cond: 'isMonsterAtPlayer', actions: 'attack' }]),
      attack: sendParent('ATTACK_PLAYER'),
    },
    guards: {
      isMonsterAtPlayer: ({ coords, playerCoords }) => isEqual(coords, playerCoords),
    },
  }
);

export { monsterMachine };
