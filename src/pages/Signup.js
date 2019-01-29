import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Item, Thumbnail, Label, Button } from 'native-base';
import t from 'tcomb-form-native';

import Logo from '../components/Logo'
import { styles } from '../components/Style'

import { Actions } from 'react-native-router-flux';

const Form = t.form.Form;

const User = t.struct({
    email: t.String,
    username: t.String,
    password: t.String
});

const formStyles = {
    ...Form.stylesheet,
    formGroup: {
        normal: {
            width: 300,
            marginBottom: 10
        },
    },
    controlLabel: {
        normal: {
            fontSize: 18,
            marginBottom: 7,
            fontWeight: '600'
        },
        // the style applied when a validation error occours
        error: {
            color: 'red',
            fontSize: 18,
            marginBottom: 7,
            fontWeight: '600'
        }
    }
}

const options = {
    fields: {
        email: {
            error: 'Without an email address how are you going to reset your password when you forget it?'
        },
        username: {
            error: 'Choose something you use on a dozen other sites or something you won\'t remember'
        },
        password: {
            error: 'Choose something you use on a dozen other sites or something you won\'t remember',
            password: true,
            secureTextEntry: true
        }
    },
    stylesheet: formStyles,
};

export default class Signup extends Component {
    goBack() {
        Actions.pop();
    }

    handleClick = () => {
        const value = this._form.getValue();
        if (value == null) {
            return null
        } else {
            const value = this._form.getValue();
       
            fetch('https://pbo-donasi.000webhostapp.com/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',

                },
                body: JSON.stringify({
                    name: value['username'],
                    email: value['email'],
                    password: value['password'],
                })
            })
                .then((response) => response.json())
                .then((response) => {

                    if (response.name != undefined) {
                        alert('sukses');
                    } else {
                        alert('gagal!');
                    }
                })
                .done();
        }
    }

    render() {

        return (
            <View style={styles.container}>
                <Logo />
                <Form 
                    ref={c => this._form = c}
                    type={User}
                    options={options} 
                />
                <Button style={styles.button} onPress={this.handleClick}>
                    <Text style={styles.signIn}>Sign Up</Text>
                </Button>
                <View style={styles.signupTextCont}>
                    <Text style={styles.signupText}>Already have an account?</Text>
                    <TouchableOpacity onPress={this.goBack}>
                        <Text style={styles.signupButton}> Sign in</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
