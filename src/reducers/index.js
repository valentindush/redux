import {combineReducers, coombineReducers} from 'redux';
import { cartReducer } from './cart';
import counter from './counter';
import isLoogged from './isLogged';

const allReducers = combineReducers({
    counter: counter,
    isLoogged: isLoogged,
    cart: cartReducer
})

export default allReducers