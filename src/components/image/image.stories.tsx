import { Meta, Story } from '@storybook/react';

import thief from '@/assets/images/thief.gif';
import { EImageSizes, Image } from '.';

export default {
  title: 'Components/Image',
  component: Image,
  args: {
    src: thief,
    alt: 'thief',
    size: EImageSizes.medium,
  },
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: EImageSizes,
      },
    },
  },
} as Meta;

const Default: Story = (args) => <Image {...args} />;

export { Default };
