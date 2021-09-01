import { Divider, withStyles } from '@ui-kitten/components'
import React from 'react'
import { View, Text } from 'react-native'
import SuccessPayment from './SuccessPayment'
import TransactionStatus from './TransactionStatus'
import WaitingPayment from './WaitingPayment'

const Detail = ({ eva, style, transaction }) => {
    return (
        <View style={eva.style.wrapper}>
            <View style={eva.style.iconBorder}></View>
            <TransactionStatus statusPayment={transaction.statusPayment} />

            <Divider style={{ marginTop: 25, marginBottom: 25 }} />

            {transaction.statusPayment == 'waiting payment'
            ? (<WaitingPayment />)
            : (<SuccessPayment transaction={transaction} />)}
        </View>
    )
}

const ThemedDetail = withStyles(Detail, (theme) => ({
    wrapper: {
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        paddingTop: 25,
        paddingBottom: 40,
        paddingRight: 20,
        paddingLeft: 20,
        marginTop: -100,
        zIndex: 4,
        minHeight: '100%'
    },
    iconBorder: {
        width: 60,
        height: 8,
        backgroundColor: '#F0F0F0',
        borderRadius: 4,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 30
    }
}))

export default ThemedDetail
