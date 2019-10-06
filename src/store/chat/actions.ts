import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from "axios";

import { Message, ChatTypes, ChatActionTypes, ChatState } from './types';
import {errorObject} from '../types/httpResponseTypes/httpResponseTypes';

export const  getMessages: ActionCreator<ThunkAction<Promise<any>,  ChatState, null, ChatActionTypes>> = () => {

    return async (dispatch: Dispatch) => {

        dispatch({type: ChatTypes.GET_MESSAGES })

        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
            dispatch({
                type:  ChatTypes.GET_MESSAGES_SUCCESS,
                payload: {
                    loading: false,
                    data: response.data,
                }
            })
        } catch (error) {
            const errorObj: errorObject = error;
            const errorMessage = errorObj.message;
 
            dispatch({
                type:  ChatTypes.GET_MESSAGES_FAILED,
                payload: {
                    loading: false,
                    error: errorMessage
                }
            })
            
        }
    }
}


export function sendMessage(newMessage: Message): ChatActionTypes {
    return {
        type:  ChatTypes.SEND_MESSAGE,
        payload: newMessage
    }
}

export function deleteMessage(timestamp: number): ChatActionTypes {
    return {
        type:  ChatTypes.DELETE_MESSAGE,
        meta: {
            timestamp
        }
    }
}
