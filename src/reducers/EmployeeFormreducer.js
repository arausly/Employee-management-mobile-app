import * as actions from '../actions/types';

const INTIAL_STATE = {
    name:'',
    phone:'',
    shift:''
};

export default (state=INTIAL_STATE,action)=>{
   switch(action.type){
       case actions.EMPLOYEE_UPDATE:
          return {
              ...state,
              // some key interpolation  here
              // [] --> !Array.of() 
              [action.payload.prop]: action.payload.value,
          }
       break;
       case actions.CLEAR_EMPLOYEE_FORM:
         return INTIAL_STATE;
       break;
       case actions.EMPLOYEE_SAVED:
        return INTIAL_STATE;
       break;
       default:
         return state;
       break;
   }
}
