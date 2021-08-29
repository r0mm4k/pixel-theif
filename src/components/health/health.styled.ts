import styled from 'styled-components';

import { space } from '@/styles';

const LayoutStyled = styled.div`
  display: flex;

  > *:not(:first-child) {
    margin-left: ${space(2)};
  }
`;

export { LayoutStyled };
