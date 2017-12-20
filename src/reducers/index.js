import { combineReducers } from 'redux';
import AuthReducer from './Authreducer'
import EmployeeFormreducer from './EmployeeFormreducer';
import Employees from './employeeReducer';

export default combineReducers({
    auth:AuthReducer,
    employeeForm:EmployeeFormreducer,
    employees:Employees,
})
