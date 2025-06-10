import React from 'react';
import {Box} from '@mui/material';
import ChatFooter from './footer/ChatFooter';
import { primary_bg_color } from '../design_system/themes/colors';


const ChatScreen: React.FC = () => {
    return (
        <Box
            sx={{
                height: '100vh',
                width: '100vw',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: 0,
                margin: 0,
                boxSizing: 'border-box',
                overflow: 'hidden',
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                bgcolor: primary_bg_color
            }}
        >
            <ChatFooter onSendMessage={function(message: string): void {
                console.log(message);
            }}/>
        </Box>
    );
};

export default ChatScreen;
