import CommentBox from '@/ui/components/CommentBox';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CommentBox> = {
  title: 'UI/CommentBox',
  component: CommentBox
};

export default meta;
type Story = StoryObj<typeof CommentBox>;

export const Primary: Story = {
  args: {}
};
