import { v4 as uuidv4 } from 'uuid';

export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

export type ChatState = {
  messages: Message[];
};

export type ChatAction =
  | { type: 'ADD_MESSAGE'; payload: { text: string; sender: 'user' | 'assistant' } }
  | { type: 'CLEAR_MESSAGES' };

const initialChatState: ChatState = {
  messages: []
};

export const chatReducer = (state: ChatState = initialChatState, action: ChatAction): ChatState => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: uuidv4(),
            text: action.payload.text,
            sender: action.payload.sender,
            timestamp: new Date()
          }
        ]
      };
    case 'CLEAR_MESSAGES':
      return {
        ...state,
        messages: []
      };
    default:
      return state;
  }
};

export default chatReducer;
