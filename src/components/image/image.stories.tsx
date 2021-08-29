import { Meta } from '@storybook/react';
import styled from 'styled-components';

import { space } from '@/styles';
import thief from '@/assets/images/thief.gif';
import { EImageSizes, Image } from '.';

export default {
  title: 'Components/Image',
} as Meta;

const LayoutStyled = styled.div`
  display: flex;

  > *:not(:first-child) {
    margin-left: ${space(4)};
  }
`;

const Default = () => (
  <LayoutStyled>
    <Image src={thief} size={EImageSizes.small} alt="thief" />
    <Image src={thief} alt="thief" />
    <Image src={thief} size={EImageSizes.large} alt="thief" />
  </LayoutStyled>
);

export { Default };
