import styled from 'styled-components';

import { GRID_SQUARE_SIZE, NUMBER_OF_GRID_COLUMNS, NUMBER_OF_GRID_ROWS } from './grid.constants';
import { ISquareProps } from './grid.types';

const LayoutStyled = styled.section`
  width: ${NUMBER_OF_GRID_COLUMNS * GRID_SQUARE_SIZE}px;
  height: ${NUMBER_OF_GRID_ROWS * GRID_SQUARE_SIZE}px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border: 1px solid ${(props) => props.theme.colors.white};
`;

const SquareStyled = styled.div<ISquareProps>`
  width: ${GRID_SQUARE_SIZE}px;
  height: ${GRID_SQUARE_SIZE}px;

  position: absolute;
  top: ${(props) => props.y * GRID_SQUARE_SIZE}px;
  left: ${(props) => props.x * GRID_SQUARE_SIZE}px;

  border: 1px solid ${(props) => props.theme.colors.white};
`;

export { LayoutStyled, SquareStyled };