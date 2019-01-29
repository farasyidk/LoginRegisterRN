'use strict';

import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, AsyncStorage} from 'react-native';
import { Container, Header, Content, Item, Thumbnail, Label, Button, Text } from 'native-base';
import t from 'tcomb-form-native';

import {styles} from '../components/Style'
import Logo from '../components/Logo';
// import Form from '../components/Form';

import {Actions} from 'react-native-router-flux';

const Form = t.form.Form;
const User = t.struct({
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
        username: {
            error: 'harus diisi'
        },
        password: {
            password: true,
            secureTextEntry: true,
            error: 'Choose something you use on a dozen other sites or something you won\'t remember'
        }
    },
    stylesheet: formStyles,
};

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            success: ''
        }
        global.nama;
        global.tokens;
    }

    signup() {
        Actions.signup({ type: 'replace' })
    }

    home() {
        Actions.home({ type: 'replace' })
    }

    handleClick = () => {

        const value = this._form.getValue(); 
        if (value == null) {
            return null
        } else {

            fetch('https://pbo-donasi.000webhostapp.com/api/auth/signin', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',

                },
                body: JSON.stringify({
                    name: value['username'],
                    password: value['password'],
                })
            })
                .then((response) => response.json())
                .then((response) => {


                    if (response.token != undefined) {
                        AsyncStorage.setItem('tokenUser', response.token);
                        AsyncStorage.setItem('namaUser', response.username);
                        this.home()
                    } else {
                        alert('Login Gagal !');
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
                    options={options} 
                    ref={c => this._form = c}
                    type={User} 
                />
                <Button style={styles.button} onPress={this.handleClick}> 
                    <Text style={styles.signIn}>Sign In</Text>
                </Button>

                <View style={styles.signupTextCont}>
                    <Text style={styles.signupText}>Dont have an account yet?</Text>
                    <TouchableOpacity onPress={this.signup}>
                        <Text style={styles.signupButton}>Signup</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
