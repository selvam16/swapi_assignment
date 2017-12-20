import * as types from '../actions/actionTypes';
import initialState from './initialState'
export default function usertReducers(state = initialState.users, action) {
    switch (action.type) {
        case types.LOAD_USERS:
            return action.users;
        default:
            return state;
    }
}