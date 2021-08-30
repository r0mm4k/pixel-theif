import { FC } from 'react';

import { Button, EImageSizes, Heading, Image, Menu } from '@/components';
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
