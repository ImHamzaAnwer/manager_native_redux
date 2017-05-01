import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Card from './common/Card';
import Button from './common/Button';
import CardSection from './common/CardSection';
import Confirm from './common/Confirm';
import EmployeeForm from './EmployeeForm';
import { connect } from 'react-redux';
import { employeeUpdate, employeeSave, employeeDelete } from '../store/actions';
import _ from "lodash";
import Communications from 'react-native-communications';

class EmployeeEdit extends Component {
    state = { showModal: false }

    componentWillMount() {
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value })
        });
    }

    onButtonPress() {
        console.log(this.props, "props")
        const { name, phone, shift } = this.props;
        this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid })
    }

    onTextPress() {
        console.log("sent")
        const { phone, shift } = this.props;
        Communications.text(phone, `Your Upcoming shift is on ${shift}`);
    }

    onAccept(){
        const {uid} = this.props.employee
        this.props.employeeDelete({uid})
    }

    onDecline(){
        this.setState({showModal: false});
    }

    render() {
        return (
            <Card>
                <EmployeeForm />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)} label="Save changes" />
                </CardSection>

                <CardSection>
                    <Button onPress={this.onTextPress.bind(this)} label="Text" />
                </CardSection>

                <CardSection>
                    <Button 
                        onPress={()=>{this.setState({showModal: !this.state.showModal})}} 
                        label="Fire Employee" />
                </CardSection>

                <Confirm 
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                    visible={this.state.showModal}>
                    Are you sure you want to delete this ?
                </Confirm>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };
}

export default connect(mapStateToProps, { employeeUpdate, employeeSave, employeeDelete })(EmployeeEdit)