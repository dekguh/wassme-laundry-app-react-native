import { withStyles, Text, Button, Icon } from '@ui-kitten/components'
import React from 'react'
import { View } from 'react-native'

const SuccessPayment = ({ eva, style }) => {
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

            
        </View>
    )
}

const ThemedSuccessPayment = withStyles(SuccessPayment, (theme) => ({
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
}))

export default ThemedSuccessPayment
