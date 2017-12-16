import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';

import { Button, Header, Spinner } from './common/index';
import LoginForm from './components/LoginForm';


 

 export default class AuthRoot extends Component{
     constructor(){
         super();
         this.state = {
             loggedIn:null,
         }
     }

     componentWillMount(){
        //initialize firebase app
        firebase.initializeApp({
            apiKey: "AIzaSyDdsbzmxKW2FszwDyg_lIQqYvDceYeR-eI",
            authDomain: "auth-a90d8.firebaseapp.com",
            databaseURL: "https://auth-a90d8.firebaseio.com",
            projectId: "auth-a90d8",
            storageBucket: "auth-a90d8.appspot.com",
            messagingSenderId: "660171123820"
        })
 
         firebase.auth().onAuthStateChanged((user)=>{
           if(user){
              return this.setState({loggedIn:true})
            } 
            this.setState({loggedIn:false});
        })

     }

     renderForm(){
          const { loggedIn } = this.state;
          switch(loggedIn){
              case true:
                return (
                    <Button onPress={()=>firebase.auth().signOut()} >
                            Log Out 
                    </Button>
                );
              break;
              case false:
                return <LoginForm />;
              break;
              default:
                return (
                    <View>
                         <Spinner style={styles.spinnerStyle}/>
                    </View> 
                );
              break;
          }
    }

    render(){
        return(
            <View style={styles.containerStyles}>
                <Header headerTitle ="Auth App" />
                {this.renderForm()}
            </View>
        );
    } 
}


const styles = {
     containerStyles:{
          flex:1,
     },
     spinnerStyle:{
         justifyContent:'center',
         alignItems:'center',
     }

}