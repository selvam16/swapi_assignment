import * as types from '../actions/actionTypes';
import initialState from './initialState'
export default function productReducers(state = initialState.products, action) {
    switch (action.type) {
        case types.LOAD_PRODUCTS:
            return action.products;
        case types.EDIT_PRODUCT:
            return action.products;
        case types.DELETE_PRODUCT:
            return action.products;
        default:
            return state;
    }
}