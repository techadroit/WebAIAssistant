import React, { useState, useCallback } from 'react';
import { Box } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

import ChatToolbar from './toolbar/ChatToolbar';
import ChatBody, {type Message } from './chat_body/ChatBody';
import ChatFooter from './footer/ChatFooter';

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isConnected, setIsConnected] = useState(false);

  const handleConnect = useCallback((connected: boolean) => {
    setIsConnected(connected);
    if (connected) {
      // You could add connection logic here
      const welcomeMessage: Message = {
        id: uuidv4(),
        text: 'Connected! How can I help you today?',
        sender: 'assistant',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, welcomeMessage]);
    } else {
      // Handle disconnection if needed
      const disconnectMessage: Message = {
        id: uuidv4(),
        text: 'Disconnected from the service.',
        sender: 'assistant',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, disconnectMessage]);
    }
  }, []);

  const handleReload = useCallback(() => {
    setMessages([]);
    // Additional reload logic can be added here
  }, []);

  const handleSendMessage = useCallback((text: string) => {
    if (!isConnected) {
      // Optionally notify user they need to connect first
      return;
    }

    // Add user message
    const userMessage: Message = {
      id: uuidv4(),
      text,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate assistant response
    setTimeout(() => {
      const assistantMessage: Message = {
        id: uuidv4(),
        text: `This is a mock response to: "${text}"`,
        sender: 'assistant',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, assistantMessage]);
    }, 1000);
  }, [isConnected]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: '100%',
        bgcolor: 'background.default',
      }}
    >
      <ChatToolbar onConnect={handleConnect} onReload={handleReload} />
      <Box sx={{ flexGrow: 1, overflow: 'hidden' }}>
        <ChatBody messages={messages} />
      </Box>
      <ChatFooter onSendMessage={handleSendMessage} />
    </Box>
  );
};

export default Chat;
