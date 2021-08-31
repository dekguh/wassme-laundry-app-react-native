import { Layout, withStyles, Text } from '@ui-kitten/components'
import React from 'react'
import { View } from 'react-native'
import Detail from './transaction/Detail'
import HeaderDetail from './transaction/HeaderDetail'

const dataDetail = {
    id: 1,
    orderId: 13948,
    statusPayment: 'process',
    date: 1629954703,
    totalPayment: 50000
}

const TransactionDetailContainer = ({ eva, style }) => {
    return (
        <Layout style={eva.style.container}>
            <HeaderDetail />

            <Detail transaction={dataDetail} />
        </Layout>
    )
}

const ThemedTransactionDetailContainer = withStyles(TransactionDetailContainer, (theme) => ({
    container: {
        backgroundColor: '#F7F7F7',
        minHeight: '100%'
    }
}))

export default ThemedTransactionDetailContainer
