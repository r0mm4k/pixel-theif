import { FC } from 'react';

import { Button, EImageSizes, Heading, Image, Menu } from '@/components';
import treasure from '@/assets/images/treasure.png';
import { IGameCompleteProps } from './game-complete.types';

const GameComplete: FC<IGameCompleteProps> = ({ onGoHome }) => {
  return (
    <Menu>
      <Heading>Quest Complete!</Heading>
      <Image src={treasure} alt={treasure} size={EImageSizes.large} />
      <Button onClick={onGoHome}>Go Home</Button>
    </Menu>
  );
};

export { GameComplete };
