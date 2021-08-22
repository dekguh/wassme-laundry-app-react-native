import { withStyles, Text, Button } from '@ui-kitten/components'
import React from 'react'
import { KeyboardAvoidingView, Platform, View, ScrollView } from 'react-native'
import TextInput from '../input/TextInput'
import PasswordInput from '../input/PasswordInput'

const FormBilling = ({ eva, style, ...restProps }) => {
    return (
    <KeyboardAvoidingView style={eva.style.container} behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
        <ScrollView>
            <Text category='s1' style={eva.style.titleForm}>Billing Information</Text>

            <TextInput
                label='Full Name'
                placeholder='ex: Dek Guh'
                style={{ marginBottom: 15 }}
            />

            <TextInput
                label='Address (specific)'
                placeholder='ex: Jalan Bypass Ngurah Rai, depan toko bagunan'
                style={{ marginBottom: 15 }}
            />

            <TextInput
                label='Subdistrict'
                placeholder='ex: Kuta Selatan'
                style={{ marginBottom: 15 }}
            />

            <TextInput
                label='District'
                placeholder='ex: Badung'
                style={{ marginBottom: 15 }}
            />

            <TextInput
                label='Province'
                placeholder='ex: Bali'
                style={{ marginBottom: 15 }}
            />

            <TextInput
                label='Phone Number'
                placeholder='ex: +62123456789'
                style={{ marginBottom: 15 }}
            />

            <Text category='s1' style={eva.style.titleForm}>Update Password</Text>

            <PasswordInput
                label='New Password'
                placeholder='password'
                style={{ marginBottom: 15 }}
            />

            <PasswordInput
                label='Old Password'
                placeholder='password'
                style={{ marginBottom: 15 }}
            />

            <Button>
                Save
            </Button>
        </ScrollView>
    </KeyboardAvoidingView>
    )
}

const ThemedFormBilling = withStyles(FormBilling, (theme) => ({
    container: {
        width: '100%',
        marginTop: 30,
        marginBottom: 40
    },
    titleForm: {
        fontWeight: '700',
        marginBottom: 15
    }
}))

export default ThemedFormBilling
