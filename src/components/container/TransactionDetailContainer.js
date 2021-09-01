import { Layout, withStyles, Text } from '@ui-kitten/components'
import React from 'react'
import { View } from 'react-native'
import Detail from './transaction/Detail'
import HeaderDetail from './transaction/HeaderDetail'

const dataDetail = {
    id: 1,
    orderId: 13948,
    statusPayment: 'delivered',
    date: 1629954703,
    totalPayment: 45000,
    totalWeight: 3,
    pricePerWeight: 15000,
    billing: {
        name: 'I Kadek Teguh Mahesa',
        address: 'Jalan bypass ngurah rai lingk. bualu',
        subdistrict: 'kuta selatan',
        district: 'badung',
        province: 'bali',
        postalCode: '80361',
        phone: '+62123456789'
    }
}

const TransactionDetailContainer = ({ eva, style, orderId }) => {
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
