import firebase from 'firebase';
import * as action from  './types';
import { Actions } from 'react-native-router-flux';


export const emailTextChanged = (email)=>{
   return {
       type: action.ON_EMAIL_CHANGED,
       email,
   }
}

export const passwordChanged = (password) =>{
   return {
       type: action.ON_PASSWORD_CHANGED,
       password
   }
}
 
export const onPressButton =(email, password)=>{
    return (dispatch)=>{
        onTapButton(dispatch);
        (!email && !password) ? loginUserFailure(dispatch) : 
        firebase.auth().signInWithEmailAndPassword(email, password).then((user)=>loginUserSuccess(dispatch,user))
        .catch(()=>{
              firebase.auth().createUserWithEmailAndPassword(email,password).then((user)=>loginUserSuccess(dispatch,user))
              .catch(()=> loginUserFailure(dispatch))
        });
    }  
}   

const loginUserSuccess = (dispatch, user)=>{
   dispatch({
       type:action.LOGIN_USER_SUCCESS,
       payload:user
   })
   Actions.main();
}


const loginUserFailure = (dispatch)=>{
   dispatch({
       type:action.LOGIN_USER_FAILURE,
   })
}
const onTapButton = (dispatch) =>{
   dispatch({
       type:action.ON_TAP_BUTTON
   })
}