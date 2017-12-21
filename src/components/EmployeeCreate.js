import React, { Component } from 'react';
import { connect } from 'react-redux';

import {Card, CardItem, Button } from '../common';
import { employeeUpdate, employeeCreate } from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component{
    onButtonPress(){
        const {shift, phone, name } = this.props;
       this.props.employeeCreate({name,phone,shift:shift || "Monday"}); 
    }
    render(){
        return(
              <Card>
                <EmployeeForm {...this.props}/>
                  <CardItem>
                      <Button onPress={this.onButtonPress.bind(this)}>Create</Button>
                  </CardItem>
              </Card>
        );
    }
}


const mapStateToProps = (state)=>{
    const { name, phone, shift } = state.employeeForm;

    return {name, phone, shift};
}


const styles = StyleSheet.create({
      pickerLabelStyle:{
           fontSize:18,
           paddingLeft:20,
      }
})

export default connect(mapStateToProps,{ 
    employeeUpdate, 
    employeeCreate 
})(EmployeeCreate);