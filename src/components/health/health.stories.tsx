import { Meta } from '@storybook/react';

import { Health } from '.';

export default {
  title: 'Components/Health',
} as Meta;

const Default = () => <Health count={3} />;

export { Default };
