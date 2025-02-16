import { TagInput as TagInputComponent } from '@/ui/components/TagInput';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TagInputComponent> = {
  title: 'UI/Inputs',
  component: TagInputComponent
};

export default meta;
type Story = StoryObj<typeof TagInputComponent>;

export const TagInput: Story = {
  args: {
    tags: ['tag1', 'tag2', 'tag3'],
    placeholder: 'Ingresa tus etiquetas'
  }
};
