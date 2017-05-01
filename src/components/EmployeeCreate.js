import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import Card from './common/Card';
import CardSection from './common/CardSection';
import Button from './common/Button';
import { connect } from 'react-redux';
import EmployeeForm from './EmployeeForm';

import { employeeUpdate, employeeCreate } from '../store/actions';

class EmployeeCreate extends Component {

    onButtonPress() {
        const { name, phone, shift } = this.props;
        this.props.employeeCreate({ name, phone, shift: shift || 'Monday' })
    }

    render() {
        return (
            <Card>
                <EmployeeForm {...this.props}/>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)} label="create" />
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift }
}


export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate);