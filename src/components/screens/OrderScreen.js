import React from 'react'
import { ScrollView } from 'react-native'
import OrderContainer from '../container/OrderContainer'

const OrderScreen = () => {
    return (
        <ScrollView contentContainerStyle={{ minHeight: '100%' }}>
            <OrderContainer />
        </ScrollView>
    )
}

export default OrderScreen
