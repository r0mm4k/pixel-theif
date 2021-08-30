import { FC } from 'react';

import { Button, EImageSizes, Heading, Image, Menu } from '@/components';
import treasure from '@/assets/images/treasure.png';
import { ICompleteProps } from './complete.types';

const Complete: FC<ICompleteProps> = ({ onGoHome }) => {
  return (
    <Menu>
      <Heading>Quest Complete!</Heading>
      <Image src={treasure} alt={treasure} size={EImageSizes.large} />
      <Button onClick={onGoHome}>Go Home</Button>
    </Menu>
  );
};

export { Complete };
