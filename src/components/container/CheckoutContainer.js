import { withStyles } from '@ui-kitten/components'
import React from 'react'
import { View, Text } from 'react-native'
import Detail from './order/Detail'
import HeaderDetail from './transaction/HeaderDetail'

const CheckoutContainer = ({ eva, style }) => {
    return (
        <View style={eva.style.container}>
            <HeaderDetail />

            <Detail />
        </View>
    )
}

const ThemedCheckoutContainer = withStyles(CheckoutContainer, (theme) => ({
    container: {
        backgroundColor: '#F7F7F7'
    }
}))

export default ThemedCheckoutContainer
