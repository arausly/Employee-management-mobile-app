import { combineReducers } from 'redux';
import AuthReducer from './Authreducer'
import EmployeeFormreducer from './EmployeeFormreducer';

export default combineReducers({
    auth:AuthReducer,
    employeeForm:EmployeeFormreducer,
})
