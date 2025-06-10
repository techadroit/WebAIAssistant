import React, {useReducer} from 'react';
import {Box} from '@mui/material';
import ChatFooter from './footer/ChatFooter';
import ChatBody from './chat_body/ChatBody';
import {primary_bg_color} from '../design_system/themes/colors';
import chatReducer, {type ChatState} from './chatReducer';


const initialState: ChatState = {
    messages: []
};

const ChatScreen: React.FC = () => {
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
            <ChatBody messages={state.messages} />
            <ChatFooter onSendMessage={handleSendMessage} />
        </Box>
    );
};

export default ChatScreen;
