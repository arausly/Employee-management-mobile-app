import React,{Component} from 'react';
import { View, Text, ListView } from 'react-native';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { employeeFetch } from '../actions';



class EmployeeList extends Component{
    render(){
        return(
          <View>
              <Text> Display dummy text for now</Text>
              <Text> Display dummy text for now</Text>
              <Text> Display dummy text for now</Text>
              <Text> Display dummy text for now</Text>              
              <Text> Display dummy text for now</Text>              
              <Text> Display dummy text for now</Text>              
              <Text> Display dummy text for now</Text>              
              <Text> Display dummy text for now</Text>              
              
          </View>
        );
    }
}

const mapStateToProps =(state)=>{
      employees: state.employees
}

export default connect(null, { employeeFetch })(EmployeeList);