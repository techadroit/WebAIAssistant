import React, { useState } from 'react';
import { Box, TextField, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

interface ChatFooterProps {
  onSendMessage: (message: string) => void;
}

const ChatFooter: React.FC<ChatFooterProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        padding: 2,
        borderTop: '1px solid rgba(0, 0, 0, 0.12)',
      }}
    >
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Type a message..."
        value={message}
        onChange={handleMessageChange}
        onKeyPress={handleKeyPress}
        size="small"
        sx={{ mr: 1 }}
      />
      <IconButton
        color="primary"
        onClick={handleSendMessage}
        disabled={!message.trim()}
        sx={{ alignSelf: 'center' }}
      >
        <SendIcon />
      </IconButton>
    </Box>
  );
};

export default ChatFooter;
