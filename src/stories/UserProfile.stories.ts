import UserProfile from '@/userProfile/UserProfile';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof UserProfile> = {
  title: 'Features/UserProfile',
  component: UserProfile,
  parameters: {
    layout: 'fullscreen'
  }
};

export default meta;
type Story = StoryObj<typeof UserProfile>;

export const Primary: Story = {
  args: {
    user: {
      id: 1,
      name: 'Jhon Doe',
      avatar: 'https://picsum.photos/200'
    }
  }
};
