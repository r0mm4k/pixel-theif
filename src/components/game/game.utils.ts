import { TGameEvent } from '@/machines';

const fastForwardToLevel1Events: TGameEvent[] = [
  {
    type: 'START_BUTTON_CLICKED',
  },
];

const fastForwardToLevel2Events: TGameEvent[] = [
  ...fastForwardToLevel1Events,
  {
    type: 'PLAYER_WALKED_THROUGH_DOOR',
  },
];

const fastForwardToLevel3Events: TGameEvent[] = [
  ...fastForwardToLevel2Events,
  {
    type: 'PLAYER_WALKED_THROUGH_DOOR',
  },
];

const fastForwardToGameCompleteEvents: TGameEvent[] = [
  ...fastForwardToLevel3Events,
  {
    type: 'PLAYER_GOT_TREASURE',
  },
];
const fastForwardToGameOverEvents: TGameEvent[] = [
  ...fastForwardToLevel1Events,
  {
    type: 'PLAYER_DIED',
  },
];

export {
  fastForwardToGameCompleteEvents,
  fastForwardToGameOverEvents,
  fastForwardToLevel1Events,
  fastForwardToLevel2Events,
  fastForwardToLevel3Events,
};
