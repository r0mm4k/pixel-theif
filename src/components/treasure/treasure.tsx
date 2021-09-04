import treasure from '@/assets/images/treasure.png';
import { coordsToPosition } from '@/utils';
import { ImageStyled } from './treasure.styled';
import { TREASURE_COORDS } from '@/constants';

const Treasure = () => {
  const [left, top] = coordsToPosition(TREASURE_COORDS);

  return <ImageStyled left={left} top={top} src={treasure} alt="treasure" />;
};

export { Treasure };
