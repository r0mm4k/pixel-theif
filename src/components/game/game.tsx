import { useMachine } from '@xstate/react';

import { gameMachine } from '@/machines';
import { Home } from '@/components/home';
import { GameOver } from '@/components/game-over';
import { GameComplete } from '@/components/game-complete';
import { Button } from '@/components/button';

const Game = () => {
  const [state, send] = useMachine(gameMachine);

  if (state.matches('home')) {
    return <Home onStartGame={() => send('START_BUTTON_CLICKED')} />;
  }

  if (state.matches('playing')) {
    if (state.matches('playing.level1')) {
      return (
        <>
          <p>level 1</p>
          <Button onClick={() => send('PLAYER_WALKED_TROUGH_DOOR')}>
            PLAYER_WALKED_TROUGH_DOOR
          </Button>
        </>
      );
    }

    if (state.matches('playing.level2')) {
      return (
        <>
          <p>level 2</p>
          <Button onClick={() => send('PLAYER_WALKED_TROUGH_DOOR')}>
            PLAYER_WALKED_TROUGH_DOOR
          </Button>
          <Button onClick={() => send('PLAYER_DIED')}>PLAYER_DIED</Button>
        </>
      );
    }

    if (state.matches('playing.level3')) {
      return (
        <>
          <p>level 3</p>
          <Button onClick={() => send('PLAYER_GOT_TREASURE')}>PLAYER_GOT_TREASURE</Button>
        </>
      );
    }
  }

  if (state.matches('gameOver')) {
    return <GameOver onRestart={() => send('RESTART_BUTTON_CLICKED')} />;
  }

  if (state.matches('gameComplete')) {
    return <GameComplete onGoHome={() => send('HOME_BUTTON_CLICKED')} />;
  }

  throw new Error(`Unknown game state: ${state.value}`);
};

export { Game };
