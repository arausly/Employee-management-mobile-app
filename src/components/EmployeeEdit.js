import React, { Component } from 'react';
import { View } from 'react-native';
import _ from 'lodash';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions'; 
import { Card, CardItem, Button, Confirm } from '../common';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';

import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component{
    constructor(){
        super();
        this.state = {
            visible:false,
        }
    }
    componentWillMount(){
           _.each(this.props.employee,(value, prop)=>{
                this.props.employeeUpdate({prop,value});
           })
    }

    onButtonPress(){

         const { name, phone, shift } = this.props;

         this.props.employeeSave({name, phone, shift, uid: this.props.employee.uid});

    }
    onDecline(){
        this.setState({visible:false})
    }
    onAccept(){
         this.props.employeeDelete({uid:this.props.employee.uid})
    }

    onTextPress(){
         const { phone, shift } = this.props;

         Communications.text(phone, `Your new schedule is ${shift}`);
    }
    render(){
        return(
            <Card>
                <EmployeeForm />
                <CardItem>
                    <Button onPress={this.onButtonPress.bind(this)}> Save Changes </Button>
                    <Button> Delete </Button>
                </CardItem>
                <CardItem>
                    <Button onPress={this.onTextPress.bind(this)}>
                        Text Schedule
                    </Button>
                </CardItem>
                <CardItem>
                    <Button onPress={()=> this.setState({visible:true})}> Delete </Button>
                </CardItem>
                <Confirm 
                   visible={this.state.visible}
                   onDecline={this.onDecline.bind(this)}
                   onAccept={this.onAccept.bind(this)} 
                 >
                    Are you sure you want to delete employee.
                </Confirm>
           </Card>
        );
    }
}

const mapStateToProps = (state) =>{
    const { name, phone, shift } = state.employeeForm
    return { name, phone, shift };
}

export default connect(mapStateToProps, { employeeUpdate, employeeSave, employeeDelete })(EmployeeEdit);