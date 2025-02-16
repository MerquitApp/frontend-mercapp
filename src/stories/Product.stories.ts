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
    id: '1',
    userName: 'Jhon Doe',
    userReview: 4.8,
    productCost: 10,
    productName: 'Product name',
    productDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique, leo in pharetra aliquam, nunc eros euismod nisi, eu tincidunt nisl nisi sit amet nunc.',
    coverImage:
      'https://plus.unsplash.com/premium_photo-1688045560212-b218aa2f110a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8',
    images: [
      'https://images.unsplash.com/photo-1739641375724-dfea74e0df69?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8',
      'https://images.unsplash.com/photo-1739518805568-41e07e3318b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8'
    ]
  }
};
