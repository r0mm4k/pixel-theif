import { FC } from 'react';

import { EImageSizes, Image } from '@/components/image';
import { LayoutStyled } from './health.styled';
import { IHealthProps } from './health.types';
import heart from '@/assets/images/heart.png';

const Health: FC<IHealthProps> = ({ count = 3, className }) => {
  const hasHearts = Array(count)
    .fill(undefined)
    .map((_, i) => <Image key={i} src={heart} alt="heart" size={EImageSizes.small} />);

  return <LayoutStyled className={className}>{hasHearts}</LayoutStyled>;
};

export { Health };
