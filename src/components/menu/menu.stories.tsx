import { Meta } from '@storybook/react';

import { Menu } from '.';

export default {
  title: 'Components/Menu',
} as Meta;

const Default = () => (
  <Menu>
    <div>First Item</div>
    <div>Second Item</div>
  </Menu>
);

export { Default };
