import { systemReducer} from './system/reducer';
import { chatReducer} from './chat/reducer'

import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
    system: systemReducer,
    chat: chatReducer
});

export type AppState = ReturnType<typeof rootReducer>

export default function configureStore() {
    const middlewares = [thunkMiddleware];
    const middlewareEnhancer = applyMiddleware(...middlewares);

    return createStore(rootReducer, composeWithDevTools(middlewareEnhancer));
}