import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import TransactionDetailContainer from '../container/TransactionDetailContainer'

const TransactionDetailScreen = ({ route }) => {
    const { orderId } = route.params
    return (
        <ScrollView>
            <TransactionDetailContainer orderId={orderId} />
        </ScrollView>
    )
}

export default TransactionDetailScreen
