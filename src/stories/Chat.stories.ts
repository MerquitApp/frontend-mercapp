import Chat from '@/chat/components/Chat';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Chat> = {
  title: 'Features/Chat',
  component: Chat,
  parameters: {
    layout: 'fullscreen'
  }
};

export default meta;
type Story = StoryObj<typeof Chat>;

export const Primary: Story = {
  args: {
    messages: [
      {
        message: 'Hola',
        isLocal: true
      },
      {
        message: 'Hola',
        isLocal: false
      }
    ],
    onSendMessage: (message: string) => {
      console.log(message);
    }
  }
};
