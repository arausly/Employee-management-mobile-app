import React, { Component } from 'react';
import {Card, CardItem, Button, Input } from '../common';
import { Picker, Text, StyleSheet } from 'react-native';

import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';

class EmployeeCreate extends Component{
    render(){
        return(
              <Card>
                  <CardItem>
                    <Input
                     label="Name"
                     textFill="Daniel"
                     autoFocus
                     onChangeText={name => this.props.employeeUpdate({prop:'name',value:name})}
                     value={this.props.name}
                     />
                  </CardItem>
                  <CardItem>
                      <Input 
                      label="Phone"
                      textFill="000-111-222"
                      onChangeText={phone => this.props.employeeUpdate({prop:'phone', value:phone })}
                      value={this.props.phone}
                      />
                  </CardItem>
                  <CardItem style={{flexDirection:'column'}}>
                      <Text style={styles.pickerLabelStyle}>Shift</Text>
                      <Picker
                         style={{flex:1}}
                         selectedValue={this.props.shift}
                         onValueChange={day=>this.props.employeeUpdate({prop:'shift',value:day})}
                      >
                      {/* { 
                          ["Monday","Tuesday", "Wedneday", "Thursday", "Friday", "Saturday","Sunday"].map((item, index)=>{
                          return(
                              <Picker.Item key={index} label={item} value={item} />
                          )
                        })
                      } */}
                     <Picker.Item label="Monday" value="Monday" />
                     <Picker.Item label="Tuesday" value="Tuesday" />
                     <Picker.Item label="Wednesday" value="Wednesday" />
                     <Picker.Item label="Thursday" value="Thursday" />
                     <Picker.Item label="Friday" value="Friday" />
                     <Picker.Item label="Saturday" value="Saturday" />
                     <Picker.Item label="Sunday" value="Sunday" />
                      </Picker>
                  </CardItem>
                  <CardItem>
                      <Button>Create</Button>
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

export default connect(mapStateToProps,{ employeeUpdate })(EmployeeCreate);