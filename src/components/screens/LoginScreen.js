import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AuthTopBars from '../../navigation/AuthTopBars'
import FormLogin from '../form/FormLogin'
import FormRegister from '../form/FormRegister'

const LoginScreen = () => {
    const [currentScreen, setCurrentScreen] = useState('signin')

    const onChangeCurrent = (name) => {
        setCurrentScreen(name)
    }
    return (
    <View style={styled.container}>
        <AuthTopBars onChangeCurrent={onChangeCurrent} currentScreen={currentScreen} />
        <View style={styled.containerForm}>
            {currentScreen === 'signin' && <FormLogin />}
            {currentScreen === 'signup' && <FormRegister />}
        </View>
    </View>
    )
}

export default LoginScreen

const styled = StyleSheet.create({
    container: {
        padding: 20,
        minHeight: '100%',
        backgroundColor: '#FFFFFF'
    },
    containerForm: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
