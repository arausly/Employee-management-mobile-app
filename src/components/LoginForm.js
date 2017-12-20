import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, StyleSheet } from 'react-native';

import { emailTextChanged, passwordChanged, onPressButton } from '../actions';
import { Card, Input, Button, CardItem, Spinner } from '../common';

class LoginForm extends Component{
    onEmailChange(text){
         this.props.emailTextChanged(text);
    }

    onPasswordChange(text){
        this.props.passwordChanged(text)
    }

    onTapButton(){
         const { email, password } = this.props;
         this.props.onPressButton(email, password);
    }
    renderButton(){
        const { loading } = this.props;
         if(loading){
             return <Spinner size="small" />;
         }
         return(
             <Button onPress={this.onTapButton.bind(this)}>
                 Login
              </Button>
         );
    }

    render(){
         return(
              <Card>
                <CardItem>
                    <Input
                      label ="Email"
                      textFill="user@user.com"
                      autoFocus
                      onChangeText={this.onEmailChange.bind(this)}
                      value={this.props.email}
                    />
                </CardItem>
                <CardItem>
                    <Input
                      label= "Password"
                      textFill="Password"
                      secured
                      onChangeText={this.onPasswordChange.bind(this)}
                      value={this.props.password}
                    />
                </CardItem>
                <Text style={styles.errorTextStyle}>{this.props.error}</Text>
                <CardItem>
                    {this.renderButton()}
                </CardItem>
              </Card>
         );
    }
}

const mapStateToProps =({ auth })=>{
    const { email, password, error,loading } = auth;
     return { email, password, error, loading };
}

const styles = StyleSheet.create({
     errorTextStyle:{
         alignSelf:'center',
         fontSize:18,
         color:'#a70000',
     }
})

export default connect(mapStateToProps,{
    onPressButton,
    emailTextChanged,
    passwordChanged
})(LoginForm)