import React, { useState } from 'react'
import { TouchableWithoutFeedback, View, Text } from 'react-native'
import { Icon, withStyles, Layout } from '@ui-kitten/components'
import PasswordInput from '../input/PasswordInput'
import TextInput from '../input/TextInput'

const FormRegister = ({ eva, style, ...restProps }) => {
    const [secureTextEntry, setSecureTextEntry] = useState(true)

    const toggleSecureEntry = () => {
        setSecureTextEntry(!secureTextEntry);
    };

    const renderIcon = (props) => (
        <TouchableWithoutFeedback onPress={toggleSecureEntry}>
            <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'}/>
        </TouchableWithoutFeedback>
    );

    return (
        <View style={eva.style.container}>
            <View style={{ marginBottom: 40 }}>
                <Text style={eva.style.title}>Hello, Welcome Back</Text>
                <Text style={eva.style.description}>Please register for get access to dashboard</Text>
            </View>
            <View>
                <TextInput
                    label='Username'
                    placeholder='ex: dekguh25'
                    style={{ marginBottom: 15 }}
                />
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
                <PasswordInput
                    label='Re-Password'
                    placeholder='password'
                    style={{ marginBottom: 15 }}
                />
            </View>
        </View>
    )
}

const ThemedFormRegister = withStyles(FormRegister, (theme) => ({
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

export default ThemedFormRegister
