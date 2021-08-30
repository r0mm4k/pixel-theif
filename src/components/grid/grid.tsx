import { FC } from 'react';

import { LayoutStyled, SquareStyled } from './grid.styled';
import { grid } from './grid.utils';

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
