import UploadProduct from '@/auth/components/UploadProduct';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof UploadProduct> = {
  title: 'Features/UploadProduct',
  component: UploadProduct,
  parameters: {
    layout: 'fullscreen'
  }
};

export default meta;
type Story = StoryObj<typeof UploadProduct>;

export const Primary: Story = {
  args: {}
};
