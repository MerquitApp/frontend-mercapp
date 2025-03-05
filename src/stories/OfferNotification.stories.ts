import OfferNotification from '@/product/components/OfferNotification';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof OfferNotification> = {
  title: 'Auth/OfferNotification',
  component: OfferNotification,
  parameters: {
    layout: 'fullscreen'
  }
};

export default meta;
type Story = StoryObj<typeof OfferNotification>;

export const OfferNotificationCard: Story = {
  args: {}
};
