import { Meta } from '@storybook/react';
import styled from 'styled-components';

import { space } from '@/styles';
import thief from '@/assets/images/thief.gif';
import { EImageSizes, Image } from '.';

export default {
  title: 'Components/Image',
} as Meta;

const Layout = styled.div`
  display: flex;

  > *:not(:first-child) {
    margin-left: ${space(4)};
  }
`;

const Default = () => (
  <Layout>
    <Image src={thief} size={EImageSizes.small} />
    <Image src={thief} />
    <Image src={thief} size={EImageSizes.large} />
  </Layout>
);

export { Default };
