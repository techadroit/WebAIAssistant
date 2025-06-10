import React, {useReducer} from 'react';
import {Box, useTheme} from '@mui/material';
import ChatFooter from './footer/ChatFooter';
import ChatBody from './chat_body/ChatBody';
import ChatToolbar from './toolbar/ChatToolbar';
import chatReducer, {type ChatState} from './chatReducer';


const initialState: ChatState = {
    messages: []
};

const ChatScreen: React.FC = () => {
    const theme = useTheme();
    const [state, dispatch] = useReducer(chatReducer, initialState);

    // Handle sending a new message
    const handleSendMessage = (message: string) => {
        // Add user message
        dispatch({
            type: 'ADD_MESSAGE',
            payload: {
                text: message,
                sender: 'user'
            }
        });
    };

    // Handle connect/disconnect from toolbar
    const handleConnect = (isConnected: boolean) => {
        if (isConnected) {
            dispatch({
                type: 'ADD_MESSAGE',
                payload: {
                    text: 'Connected! How can I help you today?',
                    sender: 'assistant'
                }
            });
        } else {
            dispatch({
                type: 'ADD_MESSAGE',
                payload: {
                    text: 'Disconnected from the service.',
                    sender: 'assistant'
                }
            });
        }
    };

    // Handle reload from toolbar
    const handleReload = () => {
        dispatch({ type: 'CLEAR_MESSAGES' });
    };

    return (
        <Box
            sx={{
                height: '100vh',
                width: '100vw',
                display: 'flex',
                flexDirection: 'column',
                padding: 0,
                margin: 0,
                boxSizing: 'border-box',
                overflow: 'hidden',
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                bgcolor: theme.palette.background.paper
            }}
        >
            {/* Fixed toolbar at the top */}
            <Box sx={{ position: 'sticky', top: 0, zIndex: 1100 }}>
                <ChatToolbar onConnect={handleConnect} onReload={handleReload} />
            </Box>

            {/* Chat body with flex-grow to take available space */}
            <Box sx={{ flexGrow: 1, overflow: 'auto' }}>
                <ChatBody messages={state.messages} />
            </Box>

            {/* Footer stays at the bottom */}
            <ChatFooter onSendMessage={handleSendMessage} />
        </Box>
    );
};

export default ChatScreen;
