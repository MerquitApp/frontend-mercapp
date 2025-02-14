import InputOffer from '@/ui/components/InputOffer';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof InputOffer> = {
  title: 'UI/Inputs',
  component: InputOffer
};

export default meta;
type Story = StoryObj<typeof InputOffer>;

export const OfferInput: Story = {
  args: {
    name: 'offer'
  }
};
