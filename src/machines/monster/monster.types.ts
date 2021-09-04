import { ActorRef } from 'xstate';

import { TCoords } from '@/types';
import { IPlayerMoved } from '@/machines';

interface IMonsterContext {
  coords: TCoords;
  playerCoords?: TCoords;
}

interface IMonsterState {
  context: IMonsterContext;
  value: 'up' | 'down';
}

type TMonsterEvent = IPlayerMoved;

type TMonsterActor = ActorRef<TMonsterEvent, IMonsterState>;

export type { IMonsterState, IMonsterContext, TMonsterActor, TMonsterEvent };
