import { Button, withStyles } from '@ui-kitten/components'
import React from 'react'
import { View, Text } from 'react-native'
import PasswordInput from '../input/PasswordInput'
import TextInput from '../input/TextInput'

const FormLogin = ({ eva, style, ...restProps}) => {
    return (
        <View style={eva.style.container}>
            <View style={{ marginBottom: 40 }}>
                <Text style={eva.style.title}>Hello, Welcome Back</Text>
                <Text style={eva.style.description}>Please login for get access to dashboard</Text>
            </View>
            <View>
                <TextInput
                    label='Email'
                    placeholder='ex: dekguh@email.id'
                    style={{ marginBottom: 15 }}
                />
                <PasswordInput
                    label='Password'
                    placeholder='password'
                    style={{ marginBottom: 15 }}
                />
                <Button>
                    Sign in
                </Button>
            </View>
        </View>
    )
}

const ThemedFormLogin = withStyles(FormLogin, (theme) => ({
    container: {
        width: '100%'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 21,
        color: theme['color-heading']
    },
    description: {
        fontSize: 14,
        color: theme['color-body']
    }
}))

export default ThemedFormLogin
