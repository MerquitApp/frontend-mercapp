import Page404 from '@/ui/components/Page404';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Page404> = {
  title: 'UI/Page404',
  component: Page404
};

export default meta;
type Story = StoryObj<typeof Page404>;

export const Primary: Story = {
  args: {}
};
