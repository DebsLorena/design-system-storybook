import type { Meta, StoryObj } from '@storybook/react';
import { Loading } from '../components/Loading/Loading';

const meta: Meta = {
  title: 'Example/Loading',
  component: Loading,
};

export default meta;

type Story = StoryObj<typeof meta>;


export const Primary: Story = {
  args: {
    isLoading: true, 
  },
};

