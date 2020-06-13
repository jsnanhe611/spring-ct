import * as types from '../actions/actionTypes';

export default function userReducer(state = [], action) {
    switch (action.type) {
        case types.GET_USER_LIST:
            return ''
        default:
            return state;
    }
}