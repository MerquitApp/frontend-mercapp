import Login from '@/auth/components/Login';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Login> = {
  title: 'Auth/Login',
  component: Login,
  parameters: {
    layout: 'fullscreen'
  }
};

export default meta;
type Story = StoryObj<typeof Login>;

export const LoginCard: Story = {
  args: {}
};
