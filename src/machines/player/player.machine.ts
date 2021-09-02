import { assign, createMachine } from 'xstate';
import { choose } from 'xstate/lib/actions';

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
        },
      },
      dead: {},
    },
  },
  {
    actions: {
      onArrowButtonClicked: choose([{ cond: 'isAllowMove', actions: 'move' }]),
      move: assign(({ coords }, { direction }) => {
        const targetCoords = getTargetCoords({ coords, direction });

        return { coords: targetCoords };
      }),
    },
    guards: {
      isAllowMove: ({ coords }, { type, direction }) => {
        if (type !== 'ARROW_BUTTON_CLICKED') return false;

        const targetCoords = getTargetCoords({ coords, direction });

        return isAllowCoords(targetCoords);
      },
    },
  }
);

export { playerMachine };
