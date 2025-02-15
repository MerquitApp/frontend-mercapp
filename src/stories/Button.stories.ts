import PrimaryButton from '@/ui/components/PrimaryButton';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof PrimaryButton> = {
  title: 'UI/Buttons',
  component: PrimaryButton
};

export default meta;
type Story = StoryObj<typeof PrimaryButton>;

export const Primary: Story = {
  args: {
    children: 'Primary Button'
  }
};
