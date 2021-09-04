import { useMachine } from '@xstate/react';
import { FC, useEffect } from 'react';

import level1Background from '@/assets/images/level1Background.png';
import level2Background from '@/assets/images/level2Background.png';
import level3Background from '@/assets/images/level3Background.png';
import { gameMachine } from '@/machines';
import { Home } from '@/components/home';
import { GameOver } from '@/components/game-over';
import { GameComplete } from '@/components/game-complete';
import { Background } from '@/components/background';
import { Grid } from '@/components/grid';
import { Player } from '@/components/player';
import { Treasure } from '@/components/treasure';
import { IGameProps } from './game.types';

const Game: FC<IGameProps> = ({ fastForwardEvents }) => {
  const [state, send] = useMachine(gameMachine);
  const { playerActor } = state.children;

  useEffect(() => {
    !!fastForwardEvents && fastForwardEvents.forEach((event) => send(event));
  }, [fastForwardEvents, send]);

  if (state.matches('home')) {
    return <Home onStartGame={() => send('START_BUTTON_CLICKED')} />;
  }

  if (state.matches('playing')) {
    if (state.matches('playing.level1')) {
      return (
        <>
          <Background src={level1Background} alt="Dungeon room" />
          <Grid>{playerActor && <Player actor={playerActor} />}</Grid>
        </>
      );
    }

    if (state.matches('playing.level2')) {
      return (
        <>
          <Background src={level2Background} alt="Dungeon room" />
          <Grid>{playerActor && <Player actor={playerActor} />}</Grid>
        </>
      );
    }

    if (state.matches('playing.level3')) {
      return (
        <>
          <Background src={level3Background} alt="Dungeon room" />
          <Grid>
            {playerActor && <Player actor={playerActor} />}
            <Treasure />
          </Grid>
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
