import { FC } from 'react';
import { useActor } from '@xstate/react';

import thief from '@/assets/images/thief.gif';
import { coordsToPosition } from '@/utils';
import { useControls } from '@/hooks';
import { EDirection } from '@/enums';
import { IPlayerProps } from './player.types';
import { ImageStyled, HealthStyled } from './player.styled';

const Player: FC<IPlayerProps> = ({ actor }) => {
  const [state, send] = useActor(actor);
  useControls({
    handleArrowUp: () => send({ type: 'ARROW_BUTTON_CLICKED', direction: EDirection.up }),
    handleArrowDown: () => send({ type: 'ARROW_BUTTON_CLICKED', direction: EDirection.down }),
    handleArrowLeft: () => send({ type: 'ARROW_BUTTON_CLICKED', direction: EDirection.left }),
    handleArrowRight: () => send({ type: 'ARROW_BUTTON_CLICKED', direction: EDirection.right }),
  });

  const { coords, health } = state.context;
  const [left, top] = coordsToPosition(coords);

  return (
    <>
      <HealthStyled count={health} />
      <ImageStyled left={left} top={top} src={thief} alt="thief" />
    </>
  );
};

export { Player };
