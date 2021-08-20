import { withStyles } from '@ui-kitten/components'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const SplashContainer = ({ eva, style, ...restProps }) => {
    return (
        <View style={eva.style.container}>
            <Text style={eva.style.title}>WASSME.</Text>
        </View>
    )
}

export const ThemedSplashContainerView = withStyles(SplashContainer, (theme) => ({
    container: {
        padding: 20,
        backgroundColor: theme['color-primary-500'],
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 99999,
        elevation: 99999
    },
    title: {
        color: '#FFFFFF',
        fontSize: 21,
        fontWeight: 'bold',
        fontStyle: 'italic'
    }
}))

export default ThemedSplashContainerView