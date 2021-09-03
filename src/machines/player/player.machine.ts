import { assign, createMachine, sendParent } from 'xstate';
import { choose } from 'xstate/lib/actions';

import { IPlayerMoved } from '@/machines/game';
import { PLAYER_STARTING_COORDS } from '@/constants';
import { getTargetCoords, isAllowCoords } from '@/utils';
import { IPlayerContext, IPlayerState, TPlayerEvent } from '.';

const playerMachine = createMachine<IPlayerContext, TPlayerEvent, IPlayerState>(
  {
    id: 'player',
    context: {
      coords: PLAYER_STARTING_COORDS,
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
        },
      },
      dead: {},
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
      move: assign(({ coords }, event) => {
        if (event.type !== 'ARROW_BUTTON_CLICKED') return { coords };

        const targetCoords = getTargetCoords({ coords, direction: event.direction });

        return { coords: targetCoords };
      }),
      onResetPlayerCoords: assign(() => ({ coords: PLAYER_STARTING_COORDS })),
    },
    guards: {
      isAllowMove: ({ coords }, event) => {
        if (event.type !== 'ARROW_BUTTON_CLICKED') return false;

        const targetCoords = getTargetCoords({ coords, direction: event.direction });

        return isAllowCoords(targetCoords);
      },
    },
  }
);

export { playerMachine };
