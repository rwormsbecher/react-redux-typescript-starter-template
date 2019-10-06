 export enum ChatTypes {
     SEND_MESSAGE = 'SEND_MESSAGE',
     DELETE_MESSAGE = 'DELETE_MESSSAGE' , 
     GET_MESSAGES = 'GET_MESSSAGES',
     GET_MESSAGES_SUCCESS = 'GET_MESSAGES_SUCCESS' ,
     GET_MESSAGES_FAILED = 'GET_MESSAGES_FAILED'
 }


 // State related types
 
export interface Message {
    user: string,
    message: string,
    timeStamp: number
}

export type ChatState = Readonly<{
    messages: Message[],
    error: object,
    loading: boolean
}>


// reducer types types

interface SendMessageAction {
    type: typeof ChatTypes.SEND_MESSAGE,
    payload: Message
}

interface DeleteMessageAction {
    type: typeof ChatTypes.DELETE_MESSAGE,
    meta: {
        timestamp: number
    }
}

interface GetMessagesAction {
    type: typeof ChatTypes.GET_MESSAGES,
    payload: {
        loading: boolean
    }
}

interface GetMessagesFailedAction {
    type: typeof ChatTypes.GET_MESSAGES_FAILED,
    payload: {
        loading: boolean,
        error: object
    }
}

interface GetMessagesSuccessAction {
    type: typeof ChatTypes.GET_MESSAGES_SUCCESS,
    payload: {
        loading: boolean,
        data: any[]
    }
}

export type ChatActionTypes = SendMessageAction | DeleteMessageAction | GetMessagesAction | GetMessagesFailedAction | GetMessagesSuccessAction;