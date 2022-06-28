import {combineReducers, coombineReducers} from 'redux';
import counter from './counter';
import isLoogged from './isLogged';

const allReducers = combineReducers({
    counter: counter,
    isLoogged: isLoogged
})

export default allReducers