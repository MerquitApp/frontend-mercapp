import RegistrationForm from '@/auth/components/RegistrationForm';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof RegistrationForm> = {
  title: 'Auth/Register',
  component: RegistrationForm,
  parameters: {
    layout: 'fullscreen'
  }
};

export default meta;
type Story = StoryObj<typeof RegistrationForm>;

export const RegisterForm: Story = {
  args: {}
};
