import { withStyles, Text, Button } from '@ui-kitten/components'
import React, { useState, useEffect } from 'react'
import { KeyboardAvoidingView, Platform, View, ScrollView } from 'react-native'
import TextInput from '../input/TextInput'
import PasswordInput from '../input/PasswordInput'
import { connect } from 'react-redux'
import CardAlert from '../CardAlert'
import { createBillingApi, updateBillingApi } from '../../Api'
import { updateBillingAct, updateIsBillingAct } from '../../redux/user/action'

const FormBilling = ({ updateBillingAction, updateIsBillingAction, jwt, isBilling, billing, eva, style, ...restProps }) => {
    const [loadingBilling, setLoadingBilling] = useState(false)
    const [dataBilling, setDataBilling] = useState({})
    const [dataPassword, setDataPassword] = useState({ newPassword: '', oldPassword: '' })
    const [msgBilling, setMsgBilling] = useState({
        type: '',
        message: ''
    })

    const submitBillingHandle = e => {
        setLoadingBilling(true)
        const updateBilling = async () => {
            let entity
            setLoadingBilling(false)

            if(isBilling) { // have billing
                entity = await updateBillingApi(billing.id, dataBilling, jwt)
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
                value={dataBilling?.name || billing?.name}
            />

            <TextInput
                label='Address (specific)'
                placeholder='ex: Jalan Bypass Ngurah Rai, depan toko bagunan'
                style={{ marginBottom: 15 }}
                onChangeText={val => setDataBilling({ ...dataBilling, address: val })}
                value={dataBilling?.address || billing?.address}
            />

            <TextInput
                label='Subdistrict'
                placeholder='ex: Kuta Selatan'
                style={{ marginBottom: 15 }}
                onChangeText={val => setDataBilling({ ...dataBilling, subdistrict: val })}
                value={dataBilling?.subdistrict || billing?.subdistrict}
            />

            <TextInput
                label='District'
                placeholder='ex: Badung'
                style={{ marginBottom: 15 }}
                onChangeText={val => setDataBilling({ ...dataBilling, district: val })}
                value={dataBilling?.district || billing?.district}
            />

            <TextInput
                label='Province'
                placeholder='ex: Bali'
                style={{ marginBottom: 15 }}
                onChangeText={val => setDataBilling({ ...dataBilling, province: val })}
                value={dataBilling?.province || billing?.province}
            />

            <TextInput
                label='Postal Code'
                placeholder='ex: 80361'
                style={{ marginBottom: 15 }}
                onChangeText={val => setDataBilling({ ...dataBilling, postalCode: val })}
                value={dataBilling?.postalCode || billing?.postalCode}
            />

            <TextInput
                label='Phone Number'
                placeholder='ex: +62123456789'
                style={{ marginBottom: 15 }}
                onChangeText={val => setDataBilling({ ...dataBilling, phone: val })}
                value={dataBilling?.phone || billing?.phone}
            />

            <Button style={{ marginBottom: 15 }} onPress={submitBillingHandle}>
                {loadingBilling
                ? 'Saving...'
                : 'Save Billing'}
            </Button>

            <Text category='s1' style={ eva.style.titleForm }>Update Password</Text>
            <Text category='s2' style={eva.style.description}>leave blank if you dont want change password</Text>

            <PasswordInput
                label='New Password'
                placeholder='password'
                style={{ marginBottom: 15 }}
            />
            <CardAlert styling={{ marginBottom: 15 }} type='danger' text='tes' />

            <PasswordInput
                label='Old Password'
                placeholder='password'
                style={{ marginBottom: 15 }}
            />
            <CardAlert styling={{ marginBottom: 15 }} type='danger' text='tes' />

            <Button>
                Save Password
            </Button>
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
        billing: state.user.billing
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateBillingAction: data => dispatch(updateBillingAct(data)),
        updateIsBillingAction: status => dispatch(updateIsBillingAct(status)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThemedFormBilling)
