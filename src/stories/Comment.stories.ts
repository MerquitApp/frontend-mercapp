import Comment from '@/ui/components/Comment';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Comment> = {
  title: 'UI/Comment',
  component: Comment
};

export default meta;
type Story = StoryObj<typeof Comment>;

export const Primary: Story = {
  args: {
    comments: [
      {
        username: 'Felipe',
        rating: 5,
        text: 'Excelente tarto.',
        avatar: 'https://avatars.githubusercontent.com/u/10594771?v=4'
      },
      {
        username: 'Jose',
        rating: 4,
        text: 'Muy buen producto.',
        avatar: 'https://avatars.githubusercontent.com/u/10594771?v=4'
      },
      {
        username: 'Pepe',
        rating: 3,
        text: 'Buen producto.',
        avatar: 'https://avatars.githubusercontent.com/u/10594771?v=4'
      },
      {
        username: 'Juan',
        rating: 0,
        text: 'Vaya mierda es un timo.',
        avatar: 'https://avatars.githubusercontent.com/u/10594771?v=4'
      }
    ]
  }
};
