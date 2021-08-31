import { withStyles, Text } from '@ui-kitten/components'
import React from 'react'
import { View, Image } from 'react-native'

const TransactionStatus = ({ eva, style, statusPayment }) => {
    return (
        <View>
            <Text category='s1' style={eva.style.textStatus}>{statusPayment}</Text>
            <Image
                resizeMode='contain'
                source={
                    statusPayment == 'waiting payment' && require('../../../../images/icon-transaction/waiting-payment.png')
                    || statusPayment == 'going pickup' && require('../../../../images/icon-transaction/going-pickup.png')
                    || statusPayment == 'process' && require('../../../../images/icon-transaction/process.png')
                    || statusPayment == 'on delivery' && require('../../../../images/icon-transaction/on-delivery.png')
                    || statusPayment == 'delivered' && require('../../../../images/icon-transaction/delivered.png')
                }
                style={{ width: 150, height: 150, marginLeft: 'auto', marginRight: 'auto' }}
            />
            <Text category='p1' style={eva.style.textDescription}>{
                statusPayment == 'waiting payment' && 'waiting for you to make payment'
                || statusPayment == 'going pickup' && 'we will pick up your clothes now'
                || statusPayment == 'process' && 'we are processing your clothes'
                || statusPayment == 'on delivery' && 'we are delivering your clothes'
                || statusPayment == 'delivered' && 'clothing has been received by the customer'
            }</Text>
        </View>
    )
}

const ThemedTransactionStatus = withStyles(TransactionStatus, (theme) => ({
    textStatus: {
        fontWeight: 'bold',
        color: theme['color-primary-500'],
        textAlign: 'center',
        marginBottom: 25
    },
    textDescription: {
        color: theme['color-body'],
        textAlign: 'center',
        marginTop: 25
    }
}))

export default ThemedTransactionStatus
