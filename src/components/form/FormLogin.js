import { Button, withStyles } from '@ui-kitten/components'
import React, { useState } from 'react'
import { View, Text } from 'react-native'
import PasswordInput from '../input/PasswordInput'
import TextInput from '../input/TextInput'
import CardAlert from '../CardAlert'
import { emailRegexValid, usernameRegexValid } from '../../Validation'
import { loginApi } from '../../Api'
import { setJwtStorage } from '../../storage'
import { connect } from 'react-redux'
import { updateIsLoginAct } from '../../redux/user/action'

const FormLogin = ({ updateIsLogin, navigation, eva, style, ...restProps}) => {
    const [loading, setLoading] = useState(false)
    const [dataLogin, setDataLogin] = useState({
        email: '',
        password: '',
    })
    const [validation, setValidation] = useState({
        global: {
            message: '',
            valid: false
        },
        email: {
            message: '',
            valid: false,
        },
        password: {
            message: '',
            valid: false,
        }
    })

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

        return setDataLogin({
            ...dataLogin,
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

        return setDataLogin({
            ...dataLogin,
            password: value
        })
    }

    const handleSubmit = e => {
        setLoading(true)
        if(!validation.email.valid || !validation.password.valid) {
            return setValidation({
                ...validation,
                global: {
                    message: 'please check again form',
                    valid: false
                }
            })
        }

        const loginUser = async () => {
            const result = await loginApi(dataLogin.email, dataLogin.password)
            setLoading(false)
            if(result.id == 'Auth.form.error.email.provide'
            || result.id == 'Auth.form.error.invalid') return setValidation({
                ...validation,
                global: {
                    message: result.message,
                    valid: false
            }})

            setValidation({
                ...validation,
                global: {
                    message: '',
                    valid: true
            }})

            await setJwtStorage(result.jwt)
            console.log(result.jwt)
            if(result.jwt) updateIsLogin(true)
        }
        loginUser()
    }

    return (
        <View style={eva.style.container}>
            <View style={{ marginBottom: 40 }}>
                <Text style={eva.style.title}>Hello, Welcome Back</Text>
                <Text style={eva.style.description}>Please login for get access to dashboard</Text>
            </View>
            <View>
                {validation.global.message.length > 0 &&
                <CardAlert
                    type={validation.global.valid ? 'success' : 'danger'}
                    text={String(validation.global.message)}
                    styling={{ marginBottom: 30 }}
                />}

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

                <Button onPress={handleSubmit}>
                    {loading
                    ? 'Process...'
                    : 'Sign in'}
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

const mapDispatchToProps = dispatch => {
    return {
        updateIsLogin: status => dispatch(updateIsLoginAct(status))
    }
}

export default connect(null, mapDispatchToProps)(ThemedFormLogin)
