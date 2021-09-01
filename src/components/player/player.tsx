import { FC } from 'react';
import { useActor } from '@xstate/react';

import thief from '@/assets/images/thief.gif';
import { coordsToPosition } from '@/utils';
import { IPlayerProps } from './player.types';
import { ImageStyled } from './player.styled';

const Player: FC<IPlayerProps> = ({ actor }) => {
  const [state, send] = useActor(actor);
  const { coords } = state.context;

  const [left, top] = coordsToPosition(coords);

  return <ImageStyled left={left} top={top} src={thief} alt="thief" />;
};

export { Player };
