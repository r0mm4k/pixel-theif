import { Meta } from '@storybook/react';

import level1Background from '@/assets/images/level1Background.png';
import { Background } from '.';

export default {
  title: 'Components/Background',
} as Meta;

const Default = () => <Background src={level1Background} alt="level 1 background" />;

export { Default };
