import { createMachine } from 'xstate';

import { MONSTER_STARTING_COORDS } from '@/constants';
import { IMonsterContext, IMonsterState } from '.';

const monsterMachine = createMachine<IMonsterContext, any, IMonsterState>({
  id: 'monster',
  context: {
    coords: MONSTER_STARTING_COORDS,
  },
  initial: 'active',
  states: {
    active: {},
  },
});

export { monsterMachine };
