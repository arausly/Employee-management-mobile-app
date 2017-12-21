import React, { Component } from 'react';
import { View } from 'react-native';
import { Card, CardItem, Button } from '../common';
import { connect } from 'react-redux';

import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component{
    render(){
        return(
            <Card>
                <EmployeeForm />
                <CardItem>
                    <Button> Save Changes </Button>
                    <Button> Delete </Button>
                </CardItem>
           </Card>
        );
    }
}

export default connect()(EmployeeEdit);