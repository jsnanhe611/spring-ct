import {createStore, applyMiddleware} from 'redux';
// import rootReducer from '../reducers';
import userReducer from '../reducers/userReducer';

export default function configureStore(initialState){
    return createStore(
        userReducer,
        initialState
    );
}