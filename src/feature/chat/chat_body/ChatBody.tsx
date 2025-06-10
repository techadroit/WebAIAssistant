import React from 'react';
import { Box, Paper, Typography } from '@mui/material';

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

interface ChatBodyProps {
  messages: ChatMessage[];
}

const ChatBody: React.FC<ChatBodyProps> = ({ messages }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: 2,
        overflow: 'auto',
        flexGrow: 1,
        gap: 2,
      }}
    >
      {messages.length === 0 ? (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <Typography variant="body1" color="text.secondary">
            No messages yet. Start a conversation!
          </Typography>
        </Box>
      ) : (
        messages.map((message) => (
          <Paper
            key={message.id}
            elevation={1}
            sx={{
              padding: 2,
              maxWidth: '70%',
              alignSelf: message.sender === 'user' ? 'flex-end' : 'flex-start',
              backgroundColor: message.sender === 'user' ? '#e3f2fd' : '#f5f5f5',
            }}
          >
            <Typography variant="body1">{message.text}</Typography>
            <Typography variant="caption" color="text.secondary">
              {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </Typography>
          </Paper>
        ))
      )}
    </Box>
  );
};

export default ChatBody;
