import { ActorRef } from 'xstate';

import { TCoords } from '@/types';
import { EDirection } from '@/enums';

interface IArrowButtonClicked {
  type: 'ARROW_BUTTON_CLICKED';
  direction: EDirection;
}

interface IPlayerContext {
  coords: TCoords;
}

interface IPlayerState {
  context: IPlayerContext;
  value: 'alive' | 'dead';
}

type TPlayerActor = ActorRef<any, IPlayerState>;

type TPlayerEvent = IArrowButtonClicked;

export type { IPlayerState, TPlayerActor, IPlayerContext, IArrowButtonClicked, TPlayerEvent };
