import { TCoords } from '@/types';

interface IStartButtonClicked {
  type: 'START_BUTTON_CLICKED';
}
interface IPlayerDied {
  type: 'PLAYER_DIED';
}
interface IPlayerGotTreasure {
  type: 'PLAYER_GOT_TREASURE';
}
interface IRestartButtonClicked {
  type: 'RESTART_BUTTON_CLICKED';
}
interface IHomeButtonClicked {
  type: 'HOME_BUTTON_CLICKED';
}
interface IHomeButtonClicked {
  type: 'HOME_BUTTON_CLICKED';
}
interface IPlayerWalkedThroughDoor {
  type: 'PLAYER_WALKED_THROUGH_DOOR';
}
interface IPlayerMoved {
  type: 'PLAYER_MOVED';
  coords: TCoords;
}

interface IGameState {
  context: null;
  value:
    | 'home'
    | 'playing'
    | 'playing.level1'
    | 'playing.level2'
    | 'playing.level3'
    | 'gameOver'
    | 'gameComplete';
}

type TGameEvent =
  | IStartButtonClicked
  | IPlayerDied
  | IPlayerGotTreasure
  | IRestartButtonClicked
  | IHomeButtonClicked
  | IPlayerWalkedThroughDoor
  | IPlayerMoved;

export type {
  IStartButtonClicked,
  IPlayerDied,
  IPlayerGotTreasure,
  IRestartButtonClicked,
  IHomeButtonClicked,
  IPlayerMoved,
  TGameEvent,
  IGameState,
};
