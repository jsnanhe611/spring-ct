import * as types from './actionTypes';

export function loginUser(userDetails){
    return {type:types.LOGIN_USER, userDetails};
}

// export function getUserList(){
//     return {type:types.GET_USER_LIST, ''};
// }

// export function addUser(){
//     return {type:types.ADD_USER, ''};
// }