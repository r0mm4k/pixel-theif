import { TCoords } from '@/types';
import { GRID_SQUARE_SIZE } from '@/constants';

const coordsToPosition = (coords: TCoords) =>
  coords.map((coord) => `${coord * GRID_SQUARE_SIZE}px`);

export { coordsToPosition };
