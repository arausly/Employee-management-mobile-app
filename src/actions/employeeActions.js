import * as action from './types';

export const employeeUpdate = ({prop,value})=>{
    return {
        type:action.EMPLOYEE_UPDATE,
        payload:{prop,value}
    }
}