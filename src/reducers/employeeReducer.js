import * as actions from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE,action)=>{
    switch(action.type){
        case actions.EMPLOYEE_FETCH_SUCCESS:
         return action.payload;
        break;
        default:
         return state;
        break;
    }
}