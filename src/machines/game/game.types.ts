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

interface IPlayerWalkedTroughDoor {
  type: 'PLAYER_WALKED_TROUGH_DOOR';
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
  | IPlayerWalkedTroughDoor;

export type {
  IStartButtonClicked,
  IPlayerDied,
  IPlayerGotTreasure,
  IRestartButtonClicked,
  IHomeButtonClicked,
  TGameEvent,
  IGameState,
};
