import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity, AsyncStorage } from 'react-native'
import { Button, Text } from 'native-base'
import { Actions } from 'react-native-router-flux'

import { styles } from '../components/Style'

export default class Home extends Component {

    constructor() {
        super()
        this.isLoggedIn()
        this.state = {'user':''}
    }

    isLoggedIn = async () => {
        try {
            let token = await AsyncStorage.getItem('tokenUser')
            let user = await AsyncStorage.getItem('namaUser')
            this.setState({user: user})
            if (token == null) {
                Actions.login({ type: 'replace' })
            }
        } catch (error) {
            alert(error)
        }
    }

    handleClick = () => {
        AsyncStorage.removeItem('tokenUser')
        Actions.login()
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.signupText}>Selamat datang {this.state.user}</Text>    

                <Button style={styles.button} onPress={this.handleClick}>
                    <Text style={styles.signIn}>Logout</Text>
                </Button>
            </View>
        );
    }
}
