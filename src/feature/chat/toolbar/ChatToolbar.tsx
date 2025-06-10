import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Switch, IconButton, FormControlLabel } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';

interface ChatToolbarProps {
  onConnect: (isConnected: boolean) => void;
  onReload: () => void;
}

const ChatToolbar: React.FC<ChatToolbarProps> = ({ onConnect, onReload }) => {
  const [isConnected, setIsConnected] = useState(false);

  const handleConnectionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsConnected(event.target.checked);
    onConnect(event.target.checked);
  };

  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Chat
        </Typography>
        <FormControlLabel
          control={
            <Switch
              checked={isConnected}
              onChange={handleConnectionChange}
              color="primary"
            />
          }
          label="Connect"
        />
        <IconButton color="primary" onClick={onReload} aria-label="reload">
          <RefreshIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default ChatToolbar;
