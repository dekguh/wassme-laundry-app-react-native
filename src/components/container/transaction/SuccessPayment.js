import { withStyles, Text, Button, Icon } from '@ui-kitten/components'
import React from 'react'
import { View } from 'react-native'
import CardChecked from '../../CardChecked'

const SuccessPayment = ({ eva, style, transaction }) => {
    const listCheckedHandle = (status, statusPayment) => {
        if(status == 'waiting payment') {
            if(statusPayment == 'waiting payment'
            || statusPayment == 'going pickup'
            || statusPayment == 'process'
            || statusPayment == 'on delivery'
            || statusPayment == 'delivered') return true
            return false
        }

        if(status == 'going pickup') {
            if(statusPayment == 'going pickup'
            || statusPayment == 'process'
            || statusPayment == 'on delivery'
            || statusPayment == 'delivered') return true
            return false
        }

        if(status == 'process') {
            if(statusPayment == 'process'
            || statusPayment == 'on delivery'
            || statusPayment == 'delivered') return true
            return false
        }

        if(status == 'on delivery') {
            if(statusPayment == 'on delivery'
            || statusPayment == 'delivered') return true
            return false
        }

        if(status == 'delivered') {
            if(statusPayment == 'delivered') return true
            return false
        }
    }

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
                        .format(transaction.totalPayment)}
                    </Text>
                </View>

                <View style={eva.style.layoutTotalWeight}>
                    <Text style={eva.style.textTotalTitle} category='s2'>Total</Text>
                    <Text style={eva.style.textTotalNumber}>
                        {transaction.totalWeight} kilogram
                    </Text>
                </View>
            </View>

            <View>
                <Text category='h6'>Information</Text>
                <View style={eva.style.wrapInformation}>
                    <View style={eva.style.layoutIcon}>
                        <View style={eva.style.iconBox}>
                            <Icon name='clipboard-outline' style={{ height: 21, width: 21 }} fill='#FFFFFF' />
                        </View>
                    </View>

                    <View style={eva.style.layoutContent}>
                        <Text category='s1' style={eva.style.infoDescription}>
                            #12345
                        </Text>
                        <Text category='s2' style={{ ...eva.style.infoDescription, marginBottom: 2 }}>
                            {transaction.billing.name}
                        </Text>
                        <Text category='s2' style={eva.style.infoDescription}>
                            {transaction.billing.address}, {transaction.billing.postalCode}, {transaction.billing.subdistrict}, {transaction.billing.district}, {transaction.billing.province}
                        </Text>
                    </View>
                </View>
            </View>

            <View>
                <CardChecked
                    title='Waiting Payment'
                    description='make payment according to the instructions'
                    checked={listCheckedHandle('waiting payment', transaction.statusPayment)}
                    style={{ marginBottom: 15 }}
                />

                <CardChecked
                    title='Going Pickup'
                    description='our courier will pick up your laundry'
                    checked={listCheckedHandle('going pickup', transaction.statusPayment)}
                    style={{ marginBottom: 15 }}
                />

                <CardChecked
                    title='Process'
                    description='your laundry has been processed by us'
                    checked={listCheckedHandle('process', transaction.statusPayment)}
                    style={{ marginBottom: 15 }}
                />

                <CardChecked
                    title='On Delivery'
                    description='your laundry is done and is being delivered'
                    checked={listCheckedHandle('on delivery', transaction.statusPayment)}
                    style={{ marginBottom: 15 }}
                />

                <CardChecked
                    title='Delivered'
                    description='your laundry has arrived at its destination'
                    checked={listCheckedHandle('delivered', transaction.statusPayment)}
                    style={{ marginBottom: 15 }}
                />
            </View>

            <View style={eva.style.buttonWrap}>
                <View style={eva.style.layoutBtnDetail}>
                    <Button>
                        <Text>Detail</Text>
                    </Button>
                </View>

                <View style={eva.style.layoutBtnCall}>
                    <Button
                        style={eva.style.btnBordered}
                        appearance='outline'
                    >
                        <Text style={eva.style.btnBorderedText}>call us</Text>
                    </Button>
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
    buttonWrap: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        marginTop: 20
    },
    layoutBtnDetail: {
        flexGrow: 0,
        flexShrink: 1,
        flexBasis: '50%',
        paddingRight: 8
    },
    layoutBtnCall: {
        flexGrow: 0,
        flexShrink: 1,
        flexBasis: '50%',
        paddingLeft: 8,
    },
    btnBordered: {
        borderWidth: 1,
        borderColor: theme['color-primary-500'],
        backgroundColor: '#FFFFFF',
    },
    btnBorderedText: {
        color: theme['color-primary-500']
    },
    wrapInformation: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        marginBottom: 25,
        marginTop: 8
    },
    layoutIcon: {
        flexGrow: 0,
        flexShrink: 1,
        paddingRight: 12
    },
    layoutContent: {
        flexGrow: 1,
        flexShrink: 1,
    },
    iconInfo: {
        height: 24,
        width: 29
    },
    iconBox: {
        backgroundColor: theme['color-primary-500'],
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 4
    },
    infoDescription: {
        color: theme['color-body']
    },
}))

export default ThemedSuccessPayment
