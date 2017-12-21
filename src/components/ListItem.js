import React, { Component } from 'react';
import { Text, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { CardItem } from '../common';
import { Actions } from 'react-native-router-flux';


class ListItem extends Component{
     onRowPress(){
        Actions.employeeEdit({employee:this.props.employee});
     }

     render(){
         const { employee } = this.props;
     return(
        <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
           <View> 
                <CardItem>
                        <Text style={styles.employeeTextStyles}>
                            {employee.name}
                        </Text>
                </CardItem>
           </View> 
        </TouchableWithoutFeedback> 
     )
    }
}

export default ListItem;

const styles =  StyleSheet.create({
    employeeTextStyles:{
        fontSize:18,
        paddingLeft:20,
    }
})