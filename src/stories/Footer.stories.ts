import type { Meta, StoryObj } from '@storybook/react';
import Footer from '@/ui/components/Footer';

const meta: Meta<typeof Footer> = {
  title: 'UI/Sections',
  component: Footer
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const FooterSection: Story = {
  args: {
    label: 'Name',
    name: 'name'
  }
};
