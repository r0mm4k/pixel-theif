import styled from 'styled-components';

import { space } from '@/styles';

const ButtonStyled = styled.button`
  padding: ${space(3)} ${space(6)};
  border: 2px solid ${(props) => props.theme.colors.white};

  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

export { ButtonStyled };
