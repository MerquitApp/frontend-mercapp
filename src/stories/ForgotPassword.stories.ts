import ForgotPassForm from '@/auth/components/ForgotPassForm';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ForgotPassForm> = {
  title: 'Auth/ForgotPassword',
  component: ForgotPassForm,
  parameters: {
    layout: 'fullscreen'
  }
};

export default meta;
type Story = StoryObj<typeof ForgotPassForm>;

export const ForgotPasswordCard: Story = {
  args: {}
};
