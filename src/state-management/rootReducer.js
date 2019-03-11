import { combineReducers } from 'redux';
import appleCodeReducer from './appleCode/reducers';

export default combineReducers({
    appleCode: appleCodeReducer
});
