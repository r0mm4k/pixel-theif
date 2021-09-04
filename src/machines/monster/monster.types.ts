import { ActorRef } from 'xstate';

import { TCoords } from '@/types';

interface IMonsterContext {
  coords: TCoords;
}

interface IMonsterState {
  context: IMonsterContext;
  value: 'active';
}

type TMonsterActor = ActorRef<any, IMonsterState>;

export type { IMonsterState, IMonsterContext, TMonsterActor };
