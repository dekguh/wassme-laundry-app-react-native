import React, { useState } from 'react'
import { View, Text, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
import { withStyles, Button } from '@ui-kitten/components'
import PasswordInput from '../input/PasswordInput'
import TextInput from '../input/TextInput'
import CardAlert from '../CardAlert'
import { emailRegexValid, usernameRegexValid } from '../../Validation'
import { registerApi } from '../../Api'

const FormRegister = ({ eva, style, ...restProps }) => {
    const [loading, setLoading] = useState(false)
    const [dataRegister, setDataRegister] = useState({
        username: '',
        email: '',
        password: '',
        rePassword: ''
    })
    const [validation, setValidation] = useState({
        global: {
            message: '',
            valid: false
        },
        username: {
            message: '',
            valid: false,
        },
        email: {
            message: '',
            valid: false,
        },
        password: {
            message: '',
            valid: false,
        },
        rePassword: {
            message: '',
            valid: false,
        },
    })

    const usernameHandle = value => {
        if(!usernameRegexValid(value)) return setValidation({
            ...validation,
            username: {
                message: 'username must character and number only',
                valid: false
            }
        })

        if(value.length < 6) return setValidation({
            ...validation,
            username: {
                message: 'username minimal 6 character',
                valid: false
            }
        })

        setValidation({
            ...validation,
            username: {
                message: '',
                valid: true
            }
        })

        return setDataRegister({
            ...dataRegister,
            username: value
        })
    }

    const emailHandle = value => {
        if(!emailRegexValid(value)) return setValidation({
            ...validation,
            email: {
                message: 'format email not valid',
                valid: false
            }
        })

        if(value.length < 6) return setValidation({
            ...validation,
            email: {
                message: 'email minimal 6 character',
                valid: false
            }
        })

        setValidation({
            ...validation,
            email: {
                message: '',
                valid: true
            }
        })

        return setDataRegister({
            ...dataRegister,
            email: value
        })
    }

    const passwordHandle = value => {
        if(value.length < 6) return setValidation({
            ...validation,
            password: {
                message: 'password minimal 6 character',
                valid: false
            }
        })

        setValidation({
            ...validation,
            password: {
                message: '',
                valid: true
            }
        })

        return setDataRegister({
            ...dataRegister,
            password: value
        })
    }

    const rePasswordHandle = value => {
        if(value.length < 6) return setValidation({
            ...validation,
            rePassword: {
                message: 'password minimal 6 character',
                valid: false
            }
        })

        if(dataRegister.password != value) return setValidation({
            ...validation,
            rePassword: {
                message: 'password and re-password must same',
                valid: false
            }
        })

        setValidation({
            ...validation,
            rePassword: {
                message: '',
                valid: true
            }
        })

        return setDataRegister({
            ...dataRegister,
            rePassword: value
        })
    }

    const handleSubmit = e => {
        setLoading(true)
        if(!validation.username.valid || !validation.email.valid
            || !validation.password.valid || !validation.rePassword.valid) {
            return setValidation({
                ...validation,
                global: {
                    message: 'please check again form',
                    valid: false
                }
            })
        }

        const addUser = async () => {
            const result = await registerApi(dataRegister.username, dataRegister.email, dataRegister.password)
            setLoading(false)
            if(result.id === 'Auth.form.error.email.taken') return setValidation({
                ...validation,
                global: {
                    message: result.message,
                    valid: false
            }})

            return setValidation({
                ...validation,
                global: {
                    message: 'register success, now you can login',
                    valid: true
            }})
        }
        addUser()
    }

    return (
    <KeyboardAvoidingView style={eva.style.container} behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
        <ScrollView>
            <View style={{ marginBottom: 40 }}>
                <Text style={eva.style.title}>Hello, Welcome Back</Text>
                <Text style={eva.style.description}>Please register for get access to dashboard</Text>
            </View>
            <View>
                {validation.global.message.length > 0 &&
                <CardAlert
                    type={validation.global.valid ? 'success' : 'danger'}
                    text={String(validation.global.message)}
                    styling={{ marginBottom: 30 }}
                />}

                <TextInput
                    label='Username'
                    placeholder='ex: dekguh25'
                    style={{ marginBottom: 15 }}
                    onChangeText={usernameHandle}
                />
                {validation.username.message.length > 0 &&
                <CardAlert type='danger' text={String(validation.username.message)} styling={{ marginBottom: 15 }} />}

                <TextInput
                    label='Email'
                    placeholder='ex: dekguh@email.id'
                    style={{ marginBottom: 15 }}
                    onChangeText={emailHandle}
                />
                {validation.email.message.length > 0 &&
                <CardAlert type='danger' text={String(validation.email.message)} styling={{ marginBottom: 15 }} />}

                <PasswordInput
                    label='Password'
                    placeholder='password'
                    style={{ marginBottom: 15 }}
                    onChangeText={passwordHandle}
                />
                {validation.password.message.length > 0 &&
                <CardAlert type='danger' text={String(validation.password.message)} styling={{ marginBottom: 15 }} />}

                <PasswordInput
                    label='Re-Password'
                    placeholder='password'
                    style={{ marginBottom: 15 }}
                    onChangeText={rePasswordHandle}
                />
                {validation.rePassword.message.length > 0 &&
                <CardAlert type='danger' text={String(validation.rePassword.message)} styling={{ marginBottom: 15 }} />}

                <Button onPress={handleSubmit}>
                    {loading
                    ? 'Process...'
                    : 'Sign up'}
                </Button>
            </View>
        </ScrollView>
    </KeyboardAvoidingView>
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
