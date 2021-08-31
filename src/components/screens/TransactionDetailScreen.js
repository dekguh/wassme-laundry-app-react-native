import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import TransactionDetailContainer from '../container/TransactionDetailContainer'

const TransactionDetailScreen = () => {
    return (
        <ScrollView>
            <TransactionDetailContainer />
        </ScrollView>
    )
}

export default TransactionDetailScreen
