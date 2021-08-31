import { withStyles, Text, Button, Icon } from '@ui-kitten/components'
import React from 'react'
import { View } from 'react-native'
import ListNumber from '../../reuse/ListNumber'

const WaitingPayment = ({ eva, style }) => {
    return (
        <View>
            <View style={eva.style.totalWrap}>
                <View style={{
                    ...eva.style.layoutTotalPay,
                    borderRightWidth: 1,
                    borderRightColor: '#F0F0F0'
                }}>
                    <Text style={eva.style.textTotalTitle} category='s2'>Total</Text>
                    <Text style={eva.style.textTotalNumber}>
                        {Intl
                        .NumberFormat('id-ID', { style: 'currency', currency: 'IDR' })
                        .format(45000)}
                    </Text>
                </View>

                <View style={eva.style.layoutTotalWeight}>
                    <Text style={eva.style.textTotalTitle} category='s2'>Total</Text>
                    <Text style={eva.style.textTotalNumber}>
                        2 kilogram
                    </Text>
                </View>
            </View>

            <ListNumber
                dataList={[
                    {
                        number: '01',
                        title: 'First Step',
                        description: 'click the "Play Now" button, then you will be redirected to the payment option.'
                    },
                    {
                        number: '02',
                        title: 'Second Step',
                        description: 'select the payment method, then follow the instructions.'
                    },
                    {
                        number: '03',
                        title: 'Third Step',
                        description: 'system will check the payment automatically and the order status will change.'
                    }
                ]}
            />

            <View style={{ marginTop: 20 }}>
                <Text category='s2' style={eva.style.textDate}>pay before 09.23 AM - 2 Sep 2021</Text>
                <Button accessoryLeft={
                    <Icon name='credit-card-outline' fill='#FFFFFF' style={{ width: 21, height: 21 }} />
                }>
                    <Text>Pay Now</Text>
                </Button>
            </View>
        </View>
    )
}

const ThemedWaitingPayment = withStyles(WaitingPayment, (theme) => ({
    totalWrap: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        marginBottom: 30
    },
    layoutTotalPay: {
        flexGrow: 0,
        flexShrink: 1,
        flexBasis: '50%'
    },
    layoutTotalWeight: {
        flexGrow: 0,
        flexShrink: 1,
        flexBasis: '50%'
    },
    textTotalNumber: {
        color: theme['color-heading'],
        fontWeight: '600',
        textAlign: 'center',
        fontSize: 16
    },
    textTotalTitle: {
        color: theme['color-heading'],
        marginBottom: 4,
        textAlign: 'center'
    },
    textDate: {
        color: theme['color-body'],
        textAlign: 'center',
        marginBottom: 8
    }
}))

export default ThemedWaitingPayment
