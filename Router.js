import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';

import LoginForm from './src/components/LoginForm';
import EmployeeList from './src/components/EmployeeList';
import EmployeeCreate from './src/components/EmployeeCreate';

const RouterComponent = ()=>{
    return(
        <Router sceneStyle={{paddingTop:65}}>
        <Scene key="auth">
          <Scene  key="login" component={LoginForm} title="Login" initial />
        </Scene>
        <Scene key="main">   
          <Scene 
           rightTitle="Add"
           onRight= {()=> Actions.employeeCreate()}
           key="employeeList" 
           component={EmployeeList} 
           title="Employee List" 
          /> 
        </Scene>
        <Scene 
           key="employeeCreate" 
           component={EmployeeCreate} 
           title="Create Employee"
        />
        </Router>
    );
}

export default RouterComponent;