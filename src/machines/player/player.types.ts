import { ActorRef } from 'xstate';

import { TCoords } from '@/types';
import { EDirection } from '@/enums';
import { IAttackPlayer } from '@/machines/game';

interface IArrowButtonClicked {
  type: 'ARROW_BUTTON_CLICKED';
  direction: EDirection;
}
interface IResetPlayerCoords {
  type: 'RESET_PLAYER_COORDS';
}

interface IPlayerContext {
  coords: TCoords;
  health: number;
}

interface IPlayerState {
  context: IPlayerContext;
  value: 'alive' | 'dead' | 'determining';
}

type TPlayerEvent = IArrowButtonClicked | IResetPlayerCoords | IAttackPlayer;

type TPlayerActor = ActorRef<TPlayerEvent, IPlayerState>;

export type {
  IPlayerState,
  TPlayerActor,
  IPlayerContext,
  IArrowButtonClicked,
  TPlayerEvent,
  IResetPlayerCoords,
};
