import {
    ChatState,
    ChatActionTypes,
    ChatTypes
} from './types';

const initialState: ChatState = {
    messages: [],
    error: {},
    loading: false
};

export function chatReducer(state = initialState, action: ChatActionTypes): ChatState {
        switch (action.type) {
            case ChatTypes.SEND_MESSAGE: 
                return {
                    ...state,
                    loading: false,
                    messages: [...state.messages, action.payload]
                }

            case ChatTypes.DELETE_MESSAGE: 
                return {
                    ...state,
                    loading: false,
                    messages: state.messages.filter(message => message.timeStamp !== action.meta.timestamp)
                }

            case ChatTypes.GET_MESSAGES: 
                return {
                    ...state,
                    loading: true
                }

            case ChatTypes.GET_MESSAGES_SUCCESS: 
                return {
                    ...state,
                    loading: false,
                    messages: [...state.messages].concat(action.payload.data)
                }

            case ChatTypes.GET_MESSAGES_FAILED:
                
                return {
                    ...state,
                    loading: false,
                    error: action.payload.error
                }

            default: 
                return state
        }
}