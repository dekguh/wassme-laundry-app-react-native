import { Divider, withStyles } from '@ui-kitten/components'
import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import TitleScreen from '../reuse/TitleScreen'
import FormFilter from './transaction/FormFilter'
import ListTransaction from './transaction/ListTransaction'

const TransactionContainer = ({ eva, style }) => {
    return (
        <ScrollView style={eva.style.container}>
            <TitleScreen title='Transaction' />
            <Divider style={{ marginBottom: 25 }} />

            <FormFilter />

            <ListTransaction
                dataTransaction={[
                    {
                        id: 1,
                        orderId: 13948,
                        statusPayment: 'waiting payment',
                        date: 1629954703,
                        totalPayment: 50000
                    },
                    {
                        id: 2,
                        orderId: 13994,
                        statusPayment: 'going pickup',
                        date: 1629954703,
                        totalPayment: 35000
                    },
                    {
                        id: 3,
                        orderId: 14948,
                        statusPayment: 'washing',
                        date: 1629954703,
                        totalPayment: 90000
                    }
                ]}
            />
        </ScrollView>
    )
}

const ThemedTransactionContainer = withStyles(TransactionContainer, (theme) => ({
    container: {
        padding: 20,
        minHeight: '100%',
        backgroundColor: '#FFFFFF'
    }
}))

export default ThemedTransactionContainer
