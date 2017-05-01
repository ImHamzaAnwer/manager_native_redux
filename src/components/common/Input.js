import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = ({label, value, onChangeText, placeholder, secureTextEntry}) => {
    return (
        <View style={styles.containerStyles}>
            <Text style={styles.labelStyles}>{label}</Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                autoCorrect={false}
                value={value}
                onChangeText={onChangeText}
                style={styles.inputStyles}
            />
        </View>
    );
};

const styles = {
    inputStyles:{
        color: "#000",
        paddingLeft: 5,
        paddingRight: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2,
    }, 

    labelStyles:{
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },

    containerStyles:{
        height: 40,
        flex:1,
        flexDirection: "row",
        alignItems: "center"
    }
}

export default Input;