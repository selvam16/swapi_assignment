import * as types from './actionTypes'
import axios from "axios";
export function loadProductSuccess(products) {
    return {type: types.LOAD_PRODUCTS, products};
}


export function loadProducts(page,callback) {
    return function (dispatch,getstate) {
    axios({
        method: 'GET',
        url: 'https://swapi.co/api/planets/?page='+page,
        headers: {
            'Content-Type': 'application/json'
        },
    }).then((response) => {
            dispatch(loadProductSuccess(response.data));
            callback();
        })
        .catch((err) => {
            //dispatch(loadOrderDataSuccess(err))
            alert(err.message)
        })
    }
}