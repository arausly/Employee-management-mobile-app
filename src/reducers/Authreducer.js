import * as actions from '../actions/types';

const INITIAL_STATE = { email:'', password:'', loading:false, error:'', user:null };

export default (state = INITIAL_STATE, action)=>{
  switch(action.type){
       case actions.ON_EMAIL_CHANGED:
          return {
               ...state,
               email:action.email,
          }
       break;
       case actions.ON_PASSWORD_CHANGED:
          return {
             ...state,
             password:action.password,
          }
        break;
        case actions.LOGIN_USER_SUCCESS:
          return {
               ...state,
               user:action.payload,
               ...INITIAL_STATE
          }
        break;
        case actions.LOGIN_USER_FAILURE:
         return {
              ...state,
              error:"Authentication Failed",
              password: '',
              loading:false,
         }
        break;
        case actions.ON_TAP_BUTTON:
           return {
                ...state,
                loading:true,
                error:''
           };
        break;
       default:
         return state;
       break;
  }
}