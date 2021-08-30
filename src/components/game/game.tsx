import { useMachine } from '@xstate/react';

import { gameMachine } from '@/machines';

const Game = () => {
  const [state] = useMachine(gameMachine);

  if (state.matches('home')) {
    return <p>home</p>;
  }

  if (state.matches('playing')) {
    return <p>playing</p>;
  }

  if (state.matches('gameOver')) {
    return <p>gameOver</p>;
  }

  if (state.matches('gameComplete')) {
    return <p>gameComplete</p>;
  }

  throw new Error(`Unknown game state: ${state.value}`);
};

export { Game };
