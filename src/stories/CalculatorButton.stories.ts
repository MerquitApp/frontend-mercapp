import CalculatorButton from '@/ui/components/CalculatorButton';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CalculatorButton> = {
  title: 'UI/Buttons',
  component: CalculatorButton
};

export default meta;
type Story = StoryObj<typeof CalculatorButton>;

export const Calculator: Story = {
  args: {
    children: '1'
  }
};
