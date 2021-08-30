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

interface IGameState {
  context: null;
  value: 'home' | 'playing' | 'gameOver' | 'gameComplete';
}

type TGameEvent =
  | IStartButtonClicked
  | IPlayerDied
  | IPlayerGotTreasure
  | IRestartButtonClicked
  | IHomeButtonClicked;

export type {
  IStartButtonClicked,
  IPlayerDied,
  IPlayerGotTreasure,
  IRestartButtonClicked,
  IHomeButtonClicked,
  TGameEvent,
  IGameState,
};
