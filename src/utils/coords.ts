import { EDirection } from '@/enums';
import { TCoords } from '@/types';
import { GRID_SQUARE_SIZE } from '@/constants';
import { grid } from './grid';
import { isEqual } from 'lodash';

const coordsToPosition = (coords: TCoords) =>
  coords.map((coord) => `${coord * GRID_SQUARE_SIZE}px`);

interface IGetTargetCoordsProps {
  coords: TCoords;
  direction: EDirection;
}

const getTargetCoords = ({ coords, direction }: IGetTargetCoordsProps): TCoords => {
  switch (direction) {
    case EDirection.up: {
      return [coords[0], coords[1] - 1];
    }
    case EDirection.down: {
      return [coords[0], coords[1] + 1];
    }
    case EDirection.left: {
      return [coords[0] - 1, coords[1]];
    }
    case EDirection.right: {
      return [coords[0] + 1, coords[1]];
    }
    default: {
      throw new Error(`Unknown direction: ${direction}`);
    }
  }
};

const isAllowCoords = (coords: TCoords) => grid.some((gridCoords) => isEqual(gridCoords, coords));

export { coordsToPosition, getTargetCoords, isAllowCoords };
