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
        chatId: 1,
        id: 1,
        content: 'Hola, ¿cómo estás?',
        userId: 1,
        createdAt: new Date()
      },
      {
        chatId: 1,
        id: 2,
        content: 'Estoy bien, gracias por visitar',
        userId: 2,
        createdAt: new Date()
      }
    ],
    chatId: 1
  }
};
