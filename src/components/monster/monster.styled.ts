import styled from 'styled-components';

import { Image } from '@/components/image';
import { IImageStyledProps } from './monster.types';

const ImageStyled = styled(Image)<IImageStyledProps>`
  position: absolute;
  left: ${(props) => props.left};
  top: ${(props) => props.top};
`;

export { ImageStyled };
