import { Meta, Story } from '@storybook/react';

import { Complete } from '.';
import { ICompleteProps } from './complete.types';

export default {
  title: 'Screens/Complete',
  component: Complete,
} as Meta;

const Default: Story<ICompleteProps> = (args) => <Complete {...args} />;

export { Default };
