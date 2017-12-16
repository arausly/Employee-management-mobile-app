import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import firebase from  'firebase';
import { Provider } from 'react-redux';
import reduxThunk  from 'redux-thunk';

import  reducers from './src/reducers';
import LoginForm from './src/components/LoginForm';

export default class App extends Component{
    componentWillMount(){
          firebase.initializeApp({
            apiKey: "AIzaSyCM5teEUREgGGJ0NIiIoYwYPIgDbjykFw0",
            authDomain: "employee-management-sys.firebaseapp.com",
            databaseURL: "https://employee-management-sys.firebaseio.com",
            projectId: "employee-management-sys",
            storageBucket: "employee-management-sys.appspot.com",
            messagingSenderId: "580309817014"
        })
    }
    
    render(){
        const store = createStore(reducers, {}, applyMiddleware(reduxThunk))
        return(
             <Provider store={store}>
                    <LoginForm />
             </Provider>
        );
    }
}