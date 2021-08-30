import { Meta, Story } from '@storybook/react';

import { Home } from '.';
import { IHomeProps } from './home.types';

export default {
  title: 'Screens/Home',
  component: Home,
} as Meta;

const Default: Story<IHomeProps> = (args) => <Home {...args} />;

export { Default };
