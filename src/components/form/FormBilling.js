import { withStyles, Text, Button } from '@ui-kitten/components'
import React, { useState } from 'react'
import { KeyboardAvoidingView, Platform, View, ScrollView } from 'react-native'
import TextInput from '../input/TextInput'
import PasswordInput from '../input/PasswordInput'
import { connect } from 'react-redux'
import CardAlert from '../CardAlert'
import { changePasswordApi, createBillingApi, loginApi, updateBillingApi } from '../../Api'
import { CLEAR_ALL_GLOBAL_STATE, updateBillingAct, updateIsBillingAct, updateIsLoginAct } from '../../redux/user/action'
import { CardModal } from '../CardModal'
import { removeJwtStorage } from '../../storage'

const FormBilling = ({ clearAllGlobalStateAction, dataUser, updateBillingAction, updateIsBillingAction, jwt, isBilling, billing, eva, style, ...restProps }) => {
    const { name, address, subdistrict, district, province, postalCode, phone } = billing
    const [loadingBilling, setLoadingBilling] = useState(false)
    const [loadingPassword, setLoadingPassword] = useState(false)
    const [dataBilling, setDataBilling] = useState({
        name,
        address,
        subdistrict,
        district,
        province,
        postalCode,
        phone,
    })
    const [dataPassword, setDataPassword] = useState({ newPassword: '', oldPassword: '' })
    const [msgBilling, setMsgBilling] = useState({
        type: '',
        message: ''
    })
    const [msgPassword, setMsgPassword] = useState({
        global: {
            message: '',
            valid: false,
            type: 'danger'
        },
        newPassword: {
            message: '',
            valid: false
        },
        oldPassword: {
            message: '',
            valid: false
        }
    })

    const newPasswordHandle = val => {
        if(val.length < 6) return setMsgPassword({
            ...msgPassword,
            newPassword: {
                message: 'password minimal 6 character',
                valid: false
            }
        })

        setDataPassword({ ...dataPassword, newPassword: val })

        return setMsgPassword({
            ...msgPassword,
            newPassword: {
                message: '',
                valid: true
            }
        })
    }

    const oldPasswordHandle = val => {
        if(val.length < 6) return setMsgPassword({
            ...msgPassword,
            oldPassword: {
                message: 'password minimal 6 character',
                valid: false
            }
        })

        setDataPassword({ ...dataPassword, oldPassword: val })

        return setMsgPassword({
            ...msgPassword,
            oldPassword: {
                message: '',
                valid: true
            }
        })
    }

    const submitBillingHandle = e => {
        setLoadingBilling(true)
        const updateBilling = async () => {
            let entity

            if(isBilling) { // have billing
                entity = await updateBillingApi(billing.id, dataBilling, jwt)
                setLoadingBilling(false)
                if(Number.isInteger(entity.id)) {
                    updateBillingAction(entity)
                    return setMsgBilling({
                        type: 'success',
                        message: 'update billing success!'
                    })
                }
            }

            if(!isBilling) { // dont have billing
                entity = await createBillingApi(dataBilling, jwt)
                setLoadingBilling(false)
                if(Number.isInteger(entity.id)) {
                    updateBillingAction(entity)
                    updateIsBillingAction(true)
                    return setMsgBilling({
                        type: 'success',
                        message: 'success created your billing information'
                    })
                }
            }

            return setMsgBilling({
                type: 'danger',
                message: entity.message
            })
        }
        updateBilling()
    }

    const submitPasswordHandle = e => {
        setLoadingPassword(true)
        if(!msgPassword.newPassword.valid || !msgPassword.oldPassword.valid) return setMsgPassword({
            ...msgPassword,
            global: {
                message: 'please check again form',
                valid: false,
                type: 'danger'
            }
        })

        const changePassword = async () => {
            const checkOldPass = await loginApi(dataUser.email, dataPassword.oldPassword)
            setLoadingPassword(false)
            if(!Number.isInteger(checkOldPass?.user?.id)) return setMsgPassword({
                ...msgPassword,
                global: {
                    message: 'your old password is wrong',
                    valid: false,
                    type: 'danger'
                }
            })

            const change = await changePasswordApi(dataPassword.newPassword, jwt)
            if(change?.id == 'success.update.password.user') {
                setMsgPassword({
                    ...msgPassword,
                    global: {
                        message: change.message,
                        valid: true,
                        type: 'success'
                    }
                })

                setTimeout(() => {
                    setMsgPassword({
                        ...msgPassword,
                        global: {
                            message: '',
                            valid: false,
                            type: 'danger'
                        }
                    })
                }, 5000)

                await removeJwtStorage()
                return clearAllGlobalStateAction()
            }

            return setMsgPassword({
                ...msgPassword,
                global: {
                    message: change.message,
                    valid: false,
                    type: 'danger'
                }
            })
        }

        changePassword()
    }

    return (
    <KeyboardAvoidingView style={eva.style.container} behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
        <ScrollView>
            <Text category='s1' style={eva.style.titleForm}>Billing Information</Text>
            <Text category='s2' style={eva.style.description}>
                you must update your billing before get access feature
            </Text>

            {msgBilling.message.length > 0 && (
                <CardAlert styling={{ marginBottom: 15 }} type={msgBilling.type} text={msgBilling.message} />
            )}

            <TextInput
                label='Full Name'
                placeholder='ex: Dek Guh'
                style={{ marginBottom: 15 }}
                onChangeText={val => setDataBilling({ ...dataBilling, name: val })}
                value={dataBilling?.name}
            />

            <TextInput
                label='Address (specific)'
                placeholder='ex: Jalan Bypass Ngurah Rai, depan toko bagunan'
                style={{ marginBottom: 15 }}
                onChangeText={val => setDataBilling({ ...dataBilling, address: val })}
                value={dataBilling?.address}
            />

            <TextInput
                label='Subdistrict'
                placeholder='ex: Kuta Selatan'
                style={{ marginBottom: 15 }}
                onChangeText={val => setDataBilling({ ...dataBilling, subdistrict: val })}
                value={dataBilling?.subdistrict}
            />

            <TextInput
                label='District'
                placeholder='ex: Badung'
                style={{ marginBottom: 15 }}
                onChangeText={val => setDataBilling({ ...dataBilling, district: val })}
                value={dataBilling?.district}
            />

            <TextInput
                label='Province'
                placeholder='ex: Bali'
                style={{ marginBottom: 15 }}
                onChangeText={val => setDataBilling({ ...dataBilling, province: val })}
                value={dataBilling?.province}
            />

            <TextInput
                label='Postal Code'
                placeholder='ex: 80361'
                style={{ marginBottom: 15 }}
                onChangeText={val => setDataBilling({ ...dataBilling, postalCode: val })}
                value={dataBilling?.postalCode}
            />

            <TextInput
                label='Phone Number'
                placeholder='ex: +62123456789'
                style={{ marginBottom: 15 }}
                onChangeText={val => setDataBilling({ ...dataBilling, phone: val })}
                value={dataBilling?.phone}
            />

            <Button style={{ marginBottom: 15 }} onPress={submitBillingHandle}>
                {loadingBilling
                ? 'Saving...'
                : 'Save Billing'}
            </Button>

            <Text category='s1' style={ eva.style.titleForm }>Update Password</Text>
            <Text category='s2' style={eva.style.description}>leave blank if you dont want change password</Text>

            {msgPassword.global.message.length > 0 && (
                <CardAlert styling={{ marginBottom: 15 }} type={msgPassword.global.type} text={msgPassword.global.message} />
            )}

            <PasswordInput
                label='New Password'
                placeholder='password'
                style={{ marginBottom: 15 }}
                onChangeText={newPasswordHandle}
            />
            {msgPassword.newPassword.message.length > 0
            && (<CardAlert styling={{ marginBottom: 15 }} type='danger' text={msgPassword.newPassword.message} />)}

            <PasswordInput
                label='Old Password'
                placeholder='password'
                style={{ marginBottom: 15 }}
                onChangeText={oldPasswordHandle}
            />
            {msgPassword.oldPassword.message.length > 0
            && (<CardAlert styling={{ marginBottom: 15 }} type='danger' text={msgPassword.newPassword.oldPassword} />)}

            <Button onPress={submitPasswordHandle}>
                {loadingPassword
                ? 'Saving...'
                : 'Save Password'}
            </Button>

            {msgPassword.global.valid &&
            (<CardModal visible={true} text='success change password, you will be logged out automatically' />)}
        </ScrollView>
    </KeyboardAvoidingView>
    )
}

const ThemedFormBilling = withStyles(FormBilling, (theme) => ({
    container: {
        width: '100%',
        marginTop: 30,
        marginBottom: 50
    },
    titleForm: {
        fontWeight: '700',
        marginBottom: 2
    },
    description: {
        marginBottom: 15,
        color: theme['color-body']
    }
}))

const mapStateToProps = state => {
    return {
        jwt: state.user.jwt,
        isBilling: state.user.isBilling,
        billing: state.user.billing,
        dataUser: state.user.dataUser
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateBillingAction: data => dispatch(updateBillingAct(data)),
        updateIsBillingAction: status => dispatch(updateIsBillingAct(status)),
        clearAllGlobalStateAction: () => dispatch({ type: CLEAR_ALL_GLOBAL_STATE })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThemedFormBilling)
