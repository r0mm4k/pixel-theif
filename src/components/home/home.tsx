import { FC } from 'react';

import { Button, EImageSizes, Heading, Image, Menu } from '@/components';
import thief from '@/assets/images/thief.gif';
import { IHomeProps } from './home.types';

const Home: FC<IHomeProps> = ({ onStartGame }) => {
  return (
    <Menu>
      <Heading>Pixel Thief</Heading>
      <Image src={thief} alt={thief} size={EImageSizes.large} />
      <Button onClick={onStartGame}>Start Game</Button>
    </Menu>
  );
};

export { Home };
