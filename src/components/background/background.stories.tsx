import { Meta, Story } from '@storybook/react';

import level1Background from '@/assets/images/level1Background.png';
import { Background } from '.';

export default {
  title: 'Components/Background',
  component: Background,
  args: {
    src: level1Background,
    alt: 'level 1 background',
  },
} as Meta;

const Default: Story = (args) => <Background {...args} />;

export { Default };
