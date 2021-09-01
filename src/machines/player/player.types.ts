import { ActorRef } from 'xstate';

interface IPlayerState {
  context: null;
  value: 'alive' | 'dead';
}

type TPlayerActor = ActorRef<any, IPlayerState>;

export type { IPlayerState, TPlayerActor };
