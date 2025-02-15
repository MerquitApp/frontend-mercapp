import ProfileSection from '@/profile/components/ProfileSection';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ProfileSection> = {
  title: 'User/Panel',
  component: ProfileSection
};

export default meta;
type Story = StoryObj<typeof ProfileSection>;

export const Panel: Story = {
  args: {
    userName: 'John Doe',
    userEmail: 'johndoe@gmail.com',
    userAvatar: 'https://avatars.githubusercontent.com/u/10594771?v=4'
  }
};
