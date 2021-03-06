import React,{ Component } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { employeeUpdate } from '../actions';
import { Card, CardItem, Button, Input } from '../common';




class EmployeeForm extends Component{
    render(){
        return(
            <View>
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
                         selectedValue={this.props.shift}
                         onValueChange={day=>this.props.employeeUpdate({prop:'shift',value:day})}
                      >
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday" />
                        <Picker.Item label="Thursday" value="Thursday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
                        <Picker.Item label="Sunday" value="Sunday" />
                      </Picker>
                  </CardItem>
              </Card>
             </View> 
        );
    }
}

const styles = StyleSheet.create({
    pickerLabelStyle:{
         fontSize:18,
         paddingLeft:20,
    }
})

const mapStateToProps = (state)=>{
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift } 
}
 
export default connect(mapStateToProps,{ employeeUpdate })(EmployeeForm)