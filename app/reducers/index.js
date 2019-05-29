import {combineReducers} from 'redux';
import searchReducers from './SearchReducers';


export default combineReducers({
    auth: searchReducers,
})