import Header from '@/home/components/Header';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Header> = {
  title: 'UI/Sections',
  component: Header
};

export default meta;
type Story = StoryObj<typeof Header>;

export const HeaderSection: Story = {
  args: {}
};
