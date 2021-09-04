import styled from 'styled-components';

import { space } from '@/styles';
import { Image } from '@/components/image';
import { Health } from '@/components/health';
import { IImageStyledProps } from './player.types';

const ImageStyled = styled(Image)<IImageStyledProps>`
  position: absolute;
  left: ${(props) => props.left};
  top: ${(props) => props.top};
`;

const HealthStyled = styled(Health)`
  position: absolute;
  top: -${space(30)};
  left: -${space(2)};
`;

export { ImageStyled, HealthStyled };
