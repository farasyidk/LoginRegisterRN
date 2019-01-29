import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        padding: 20,
        backgroundColor: '#ffffff'
    },
    button: {
        width: 300,
        backgroundColor: '#fff27a',
        color: '#ffffff',
        borderRadius: 25,
        justifyContent: 'center',
        flexDirection: 'row',
        marginVertical: 10,
        marginTop: 20,
        paddingVertical: 13,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        zIndex: 99
    },
    signIn: {
        color: '#3d93a7',
    },

    signupTextCont: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 16,
        flexDirection: 'row'
    },

    signupText: {
        color: '#000',
        fontSize: 16
    },

    signupButton: {
        color: '#000000',
        fontSize: 16,
        fontWeight: '500'
    }
})