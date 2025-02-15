import SwipeCardGroup from '@/home/components/SwipeCardGroup';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SwipeCardGroup> = {
  title: 'Features/Swipe/CardGroup',
  component: SwipeCardGroup
};

export default meta;
type Story = StoryObj<typeof SwipeCardGroup>;

export const Primary: Story = {
  args: {
    cards: [
      {
        id: '1',
        title: 'Product title 1',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique, leo in pharetra aliquam, nunc eros euismod nisi, eu tincidunt nisl nisi sit amet nunc.',
        price: 10,
        userName: 'Jhon Doe',
        rate: 4.3,
        imageSrc:
          'https://plus.unsplash.com/premium_photo-1688045560212-b218aa2f110a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8'
      },
      {
        id: '2',
        title: 'Product title 2',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique, leo in pharetra aliquam, nunc eros euismod nisi, eu tincidunt nisl nisi sit amet nunc.',
        price: 10,
        userName: 'Jhon Doe',
        rate: 4.3,
        imageSrc:
          'https://plus.unsplash.com/premium_photo-1688045560212-b218aa2f110a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8'
      },
      {
        id: '3',
        title: 'Product title 3',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique, leo in pharetra aliquam, nunc eros euismod nisi, eu tincidunt nisl nisi sit amet nunc.',
        price: 10,
        userName: 'Jhon Doe',
        rate: 4.3,
        imageSrc:
          'https://plus.unsplash.com/premium_photo-1688045560212-b218aa2f110a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8'
      },
      {
        id: '4',
        title: 'Product title 4',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique, leo in pharetra aliquam, nunc eros euismod nisi, eu tincidunt nisl nisi sit amet nunc.',
        price: 10,
        userName: 'Jhon Doe',
        rate: 4.3,
        imageSrc:
          'https://plus.unsplash.com/premium_photo-1688045560212-b218aa2f110a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8'
      }
    ]
  }
};
