import { FC } from 'react';

import { Button } from '@/components/button';
import { Menu } from '@/components/menu';
import { Heading } from '@/components/heading';
import { Image, EImageSizes } from '@/components/image';
import skull from '@/assets/images/skull.png';
import { IGameOverProps } from './game-over.types';

const GameOver: FC<IGameOverProps> = ({ onRestart }) => {
  return (
    <Menu>
      <Heading>Game Over</Heading>
      <Image src={skull} alt={skull} size={EImageSizes.large} />
      <Button onClick={onRestart}>Restart</Button>
    </Menu>
  );
};

export { GameOver };
