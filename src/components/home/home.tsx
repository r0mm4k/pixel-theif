import { FC } from 'react';

import { Button } from '@/components/button';
import { Menu } from '@/components/menu';
import { Heading } from '@/components/heading';
import { Image, EImageSizes } from '@/components/image';
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
