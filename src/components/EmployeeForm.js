import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import CardSection from './common/CardSection';
import Input from './common/Input';
import { connect } from 'react-redux';
import { employeeUpdate } from '../store/actions';

class EmployeeForm extends Component {
    render() {
        return (
            <View>
                <CardSection>
                    <Input
                        label="Name"
                        placeholder="Hamza"
                        value={this.props.name}
                        onChangeText={text => this.props.employeeUpdate({ prop: 'name', value: text })} />
                </CardSection>

                <CardSection>
                    <Input
                        label="Phone"
                        placeholder="03131233"
                        value={this.props.phone}
                        onChangeText={text => this.props.employeeUpdate({ prop: 'phone', value: text })} />
                </CardSection>

                <CardSection>
                    <Text style={styles.pickerTextStyles}>Shift</Text>
                    <Picker style={{ flex: 1 }} selectedValue={this.props.shift} onValueChange={day => this.props.employeeUpdate({ prop: 'shift', value: day })}>
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday" />
                        <Picker.Item label="Thursday" value="Thursday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
                        <Picker.Item label="Sunday" value="Sunday" />
                    </Picker>
                </CardSection>
            </View>
        );
    }
}


const styles = {
    pickerTextStyles: {
        fontSize: 17,
        paddingLeft: 20,
        alignSelf: "center"
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };
}

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);