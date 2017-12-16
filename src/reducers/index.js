import { combineReducers } from 'redux';
import AuthReducer from './Authreducer'


export default combineReducers({
    auth:AuthReducer,
})
