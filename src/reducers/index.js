import {combineReducers} from 'redux'
import products from './productReducer';
import users from './userReducer'
import {routerReducer} from 'react-router-redux'
const rootReducer = combineReducers({products, users,routing: routerReducer})

export default rootReducer;