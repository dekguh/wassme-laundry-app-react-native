import { withStyles, Layout, Text } from '@ui-kitten/components'
import React from 'react'
import { ScrollView, View } from 'react-native'
import FormBilling from '../form/FormBilling'
import TitleScreen from '../reuse/TitleScreen'
import ProfileHeader from './profile/ProfileHeader'

const ProfileContainer = ({ eva, withStyles, ...restProps }) => {
    return (
        <ScrollView style={eva.style.container}>
            <TitleScreen title='Profile' />
            <ProfileHeader />
            <FormBilling />
        </ScrollView>
    )
}

const ThemedProfileContainer = withStyles(ProfileContainer, (theme) => ({
    container: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        minHeight: '100%'
    }
}))

export default ThemedProfileContainer
