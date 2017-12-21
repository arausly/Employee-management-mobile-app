import * as action from './types';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const employeeUpdate = ({ prop, value })=>{
    return {
        type:action.EMPLOYEE_UPDATE,
        payload:{prop,value}
    }
}

export const employeeCreate = ({ name, phone, shift })=>{
    const { currentUser } = firebase.auth();
    return (dispatch)=>{
         firebase.database().ref(`users/${currentUser.uid}/employees`)
                   .push({name, phone, shift})
                   .then(()=> {
                        Actions.employeeList({type:"reset"});
                        dispatch({type:action.CLEAR_EMPLOYEE_FORM})
                   });
    }
}

export const employeeFetch =()=>{
    return (dispatch)=>{
       const { currentUser } = firebase.auth();
        firebase.database().ref(`users/${currentUser.uid}/employees`)
                  .on('value',snapshot =>{
                      dispatch({type:action.EMPLOYEE_FETCH_SUCCESS, payload: snapshot.val()});
                    })
    }
}

export const employeeSave=({ name, phone, shift, uid })=>{
      return (dispatch) =>{
            const { currentUser } = firebase.auth();
            firebase.database().ref(`users/${currentUser.uid}/employees/${uid}`)
                       .set({ name, phone, shift })
                       .then(()=>{
                            Actions.employeeList({type:'reset'});
                            dispatch({type:action.EMPLOYEE_SAVED})
                        })
      }
}

export const employeeDelete =({ uid })=>{
     return ()=>{
            const { currentUser } = firebase.auth();
            firebase.database().ref(`users/${currentUser.uid}/employees/${uid}`)
                      .remove()
                      .then(()=>{
                            Actions.employeeList({type:'reset'});
                      })
     }
} 