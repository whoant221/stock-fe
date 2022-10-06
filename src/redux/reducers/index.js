import { combineReducers } from 'redux';
import header from './header';
import chart from './chart';

const reducers = combineReducers({
    header,
    chart,
});

export default reducers;
