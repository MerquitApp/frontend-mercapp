import ProductSection from '@/product/components/ProductSection';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ProductSection> = {
  title: 'Features/ProductSection',
  component: ProductSection
};

export default meta;
type Story = StoryObj<typeof ProductSection>;

export const Primary: Story = {
  args: {
    userName: 'John Doe.',
    userReview: 4.8,
    productCost: 10
  }
};
