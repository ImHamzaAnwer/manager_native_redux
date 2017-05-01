import React, { Component } from 'react';
import { View, Text } from 'react-native'
import Card from './common/Card';
import Button from './common/Button';
import Spinner from './common/Spinner';
import CardSection from './common/CardSection';
import Input from './common/Input';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../store/actions/authActions';

class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress(){
        const {email,password} = this.props;
        this.props.loginUser({email,password})
    }

    renderButton(){
        if(this.props.loading){
            return <Spinner size="large"/>
        }
        return <Button label="Sign in" onPress={this.onButtonPress.bind(this)} />
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="abc@abc.com"
                        value={this.props.email}
                        onChangeText={this.onEmailChange.bind(this)}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry={true}
                        label="Password"
                        placeholder="*****"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>

                <View>
                    <Text style={styles.errorStyles}>{this.props.error}</Text>
                </View>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles={
    errorStyles:{
        color: "red",
        fontSize: 18,
        alignSelf:"center"
    }
}

const mapStateToProps = ({auth}) => {
    const {email,password,error, loading} = auth
    return {email,password, error, loading  }
}

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);