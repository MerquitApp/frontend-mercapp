import LoginEmail from '@/auth/components/LoginEmail';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof LoginEmail> = {
  title: 'Auth/Login',
  component: LoginEmail,
  parameters: {
    layout: 'fullscreen'
  }
};

export default meta;
type Story = StoryObj<typeof LoginEmail>;

export const LoginEmailCard: Story = {
  args: {}
};
