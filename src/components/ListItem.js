import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import CardSection from './common/CardSection';
import { Actions } from 'react-native-router-flux';
class ListItem extends Component {
    onRowPress() {
        Actions.employeeEdit({ employee: this.props.employee });
    }

    render() {
        const { name } = this.props.employee;
        return (
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                <View>
                    <CardSection>
                        <Text style={styles.titleStyles}>
                            {name}
                        </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyles: {
        fontSize: 18,
        padding: 10,
    }
}
export default ListItem;