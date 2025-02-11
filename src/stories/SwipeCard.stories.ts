import SwipeCard from '@/home/components/SwipeCard';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SwipeCard> = {
  title: 'Features/Swipe/Card',
  component: SwipeCard
};

export default meta;
type Story = StoryObj<typeof SwipeCard>;

export const Primary: Story = {
  args: {
    title: 'Product title 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique, leo in pharetra aliquam, nunc eros euismod nisi, eu tincidunt nisl nisi sit amet nunc.',
    price: 10,
    userName: 'Jhon Doe',
    rate: 4.3,
    imageSrc:
      'https://plus.unsplash.com/premium_photo-1688045560212-b218aa2f110a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8'
  }
};
