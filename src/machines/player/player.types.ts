import { ActorRef } from 'xstate';

import { TCoords } from '@/types';

interface IPlayerContext {
  coords: TCoords;
}

interface IPlayerState {
  context: IPlayerContext;
  value: 'alive' | 'dead';
}

type TPlayerActor = ActorRef<any, IPlayerState>;

export type { IPlayerState, TPlayerActor, IPlayerContext };
