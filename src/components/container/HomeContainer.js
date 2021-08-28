import { Divider, withStyles } from '@ui-kitten/components'
import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import Header from './home/Header'
import Notification from './home/Notification'
import Promotion from './home/Promotion'
import Services from './home/Services'

const HomeContainer = ({ eva, style }) => {
    return (
        <ScrollView style={eva.style.container}>
            <Header name='I Kadek Teguh Mahesa' totalCart={4} />

            <Divider style={{ marginTop: 20, marginBottom: 20 }} />

            <View style={{
                marginBottom: 20
            }}>
                <Promotion />
            </View>

            <View style={{
                marginBottom: 20
            }}>
                <Services />
            </View>

            <View style={{
                marginBottom: 40
            }}>
                <Notification />
            </View>
        </ScrollView>
    )
}

const ThemedHomeContainer = withStyles(HomeContainer, (theme) => ({
    container: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        minHeight: '100%'
    }
}))

export default ThemedHomeContainer
