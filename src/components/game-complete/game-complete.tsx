import { FC } from 'react';

import { Button } from '@/components/button';
import { Menu } from '@/components/menu';
import { Heading } from '@/components/heading';
import { Image, EImageSizes } from '@/components/image';

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
