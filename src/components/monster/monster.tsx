import { FC } from 'react';
import { useActor } from '@xstate/react';

import monster from '@/assets/images/monster.gif';
import { coordsToPosition } from '@/utils';
import { ImageStyled } from './monster.styled';
import { IMonsterProps } from './monster.types';

const Monster: FC<IMonsterProps> = ({ actor }) => {
  const [state] = useActor(actor);

  const { coords } = state.context;
  const [left, top] = coordsToPosition(coords);

  return <ImageStyled left={left} top={top} src={monster} alt="monster" />;
};

export { Monster };
