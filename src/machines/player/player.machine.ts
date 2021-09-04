import { assign, createMachine, sendParent } from 'xstate';
import { choose } from 'xstate/lib/actions';

import { IPlayerMoved } from '@/machines/game';
import { PLAYER_STARTING_COORDS, PLAYER_STARTING_HEALTH } from '@/constants';
import { getTargetCoords, isAllowCoords } from '@/utils';
import { IPlayerContext, IPlayerState, TPlayerEvent } from '.';

const playerMachine = createMachine<IPlayerContext, TPlayerEvent, IPlayerState>(
  {
    id: 'player',
    context: {
      coords: PLAYER_STARTING_COORDS,
      health: PLAYER_STARTING_HEALTH,
    },
    initial: 'alive',
    states: {
      alive: {
        on: {
          ARROW_BUTTON_CLICKED: {
            actions: 'onArrowButtonClicked',
          },
          RESET_PLAYER_COORDS: {
            actions: 'onResetPlayerCoords',
          },
          ATTACK_PLAYER: {
            actions: ['reduceHealth', 'onResetPlayerCoords'],
            target: 'determining',
          },
        },
      },
      dead: {
        entry: 'broadcastPlayerDied',
      },
      determining: {
        always: [{ cond: 'isHealthy', target: 'alive' }, { target: 'dead' }],
      },
    },
  },
  {
    actions: {
      onArrowButtonClicked: choose([
        { cond: 'isAllowMove', actions: ['move', 'broadcastPlayerMoved'] },
      ]),
      broadcastPlayerMoved: sendParent(({ coords }) => {
        const event: IPlayerMoved = { type: 'PLAYER_MOVED', coords };

        return event;
      }),
      move: assign((context, event) => {
        if (event.type !== 'ARROW_BUTTON_CLICKED') return context;

        const targetCoords = getTargetCoords({
          coords: context.coords,
          direction: event.direction,
        });

        return { ...context, coords: targetCoords };
      }),
      onResetPlayerCoords: assign((context) => {
        return { ...context, coords: PLAYER_STARTING_COORDS };
      }),
      reduceHealth: assign((context) => ({ health: context.health - 1 })),
      broadcastPlayerDied: sendParent('PLAYER_DIED'),
    },
    guards: {
      isAllowMove: ({ coords }, event) => {
        if (event.type !== 'ARROW_BUTTON_CLICKED') return false;

        const targetCoords = getTargetCoords({ coords, direction: event.direction });

        return isAllowCoords(targetCoords);
      },
      isHealthy: ({ health }) => !!health,
    },
  }
);

export { playerMachine };
