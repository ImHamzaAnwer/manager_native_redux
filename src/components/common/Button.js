import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.buttonStyles}>
            <Text style={styles.textStyles}>{props.label}</Text>
        </TouchableOpacity>
    );
}

const styles = {
    textStyles: {
        alignSelf: "center",
        fontSize: 18,
        fontWeight: '600',
        color: "#fff"
},

    buttonStyles: {
        flex: 1,
        alignSelf: "stretch",
        borderColor: "#0e2447",
        borderRadius: 2,
        borderWidth: 1,
        marginLeft: 5,
        marginRight: 5,
        padding: 12,
        backgroundColor: "#0e2447"
    }
}
export default Button;