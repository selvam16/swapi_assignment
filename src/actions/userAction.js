import * as types from './actionTypes'
import axios from "axios";
export function loadUsersuccess(users) {
    return {type: types.LOAD_USERS, users};
}


export function loadUsers() {
    return function (dispatch,getstate) {
    axios({
        method: 'GET',
        url: 'https://swapi.co/api/people/',
        headers: {
            'Content-Type': 'application/json'
        },
    }).then((response) => {
            dispatch(loadUsersuccess(response.data.results))
        })
        .catch((err) => {
            //dispatch(loadOrderDataSuccess(err))
            alert(err.message)
        })
    }
}