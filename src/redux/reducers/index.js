import { combineReducers } from 'redux';
import header from './header';
import menu_right from './header';
const reducers = combineReducers({
    header,
    menu_right,
});

export default reducers;
