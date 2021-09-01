import { FC } from 'react';

import { grid } from '@/utils';
import { LayoutStyled, SquareStyled } from './grid.styled';

const Grid: FC = ({ children }) => {
  const hasSquares = grid.map(([x, y]) => <SquareStyled key={`${x}-${y}`} x={x} y={y} />);

  return (
    <LayoutStyled>
      {hasSquares}
      {children}
    </LayoutStyled>
  );
};

export { Grid };
