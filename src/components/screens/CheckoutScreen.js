import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import CheckoutContainer from '../container/CheckoutContainer'

const CheckoutScreen = () => {
    return (
        <ScrollView contentContainerStyle={{ backgroundColor: '#FFFFFF', minHeight: '100%' }}>
            <CheckoutContainer />
        </ScrollView>
    )
}

export default CheckoutScreen
