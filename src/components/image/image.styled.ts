import styled from 'styled-components';

import { space } from '@/styles';
import { IImageStyledProps } from './image.types';
import { EImageSizes } from '.';

const getDimension = (size: EImageSizes) => {
  switch (size) {
    case EImageSizes.small: {
      return space(10);
    }
    case EImageSizes.medium: {
      return space(16);
    }
    case EImageSizes.large: {
      return space(20);
    }
  }
};

const ImageStyled = styled.img<IImageStyledProps>`
  width: ${({ size = EImageSizes.medium }) => getDimension(size)};
  height: ${({ size = EImageSizes.medium }) => getDimension(size)};

  object-fit: contain;
`;

export { ImageStyled };
