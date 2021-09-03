import { Divider, Icon, withStyles, Text, Button } from '@ui-kitten/components'
import React from 'react'
import { View } from 'react-native'

const Detail = ({ eva, style }) => {
    return (
        <View style={eva.style.wrapper}>
            <View style={eva.style.iconBorder}></View>

            <Text category='h6' style={eva.style.titleSection}>Pickup Information</Text>
            <View style={eva.style.cardInfo}>
                <View style={eva.style.wrapInformation}>
                    <View style={eva.style.layoutIcon}>
                        <View style={eva.style.iconBox}>
                            <Icon name='clipboard-outline' style={{ height: 21, width: 21 }} fill='#FFFFFF' />
                        </View>
                    </View>

                    <View style={eva.style.layoutContent}>
                        <Text category='s2' style={{ ...eva.style.infoDescription, marginBottom: 2 }}>
                            I Kadek Teguh Mahesa
                        </Text>
                        <Text category='s2' style={{ ...eva.style.infoDescription, marginBottom: 2 }}>
                            Jalan Bypass Ngurah rai, kuta selatan, badung, bali
                        </Text>
                        <Text category='s2' style={eva.style.infoDescription}>
                            +621234567890
                        </Text>
                    </View>
                </View>
            </View>

            <View style={{ marginTop: 20 }}>
                <Text category='h6' style={eva.style.titleSection}>Total Payment</Text>
                <View style={{ ...eva.style.wrapTotal, marginBottom: 8 }}>
                    <View style={{ flexGrow: 1, flexShrink: 1, paddingRight: 8 }}>
                        <Text category='s2' style={eva.style.textTotal}>Sub-Total</Text>
                    </View>

                    <View style={{ flexGrow: 0, flexShrink: 1 }}>
                        <Text category='s2' style={eva.style.textPrice}>
                            {new Intl
                            .NumberFormat('id-ID', { style: 'currency', currency: 'IDR' })
                            .format(50000)}
                        </Text>
                    </View>
                </View>

                <View style={{ ...eva.style.wrapTotal, marginBottom: 8 }}>
                    <View style={{ flexGrow: 1, flexShrink: 1, paddingRight: 8 }}>
                        <Text category='s2' style={eva.style.textTotal}>Total Discount</Text>
                    </View>

                    <View style={{ flexGrow: 0, flexShrink: 1 }}>
                        <Text category='s2' style={eva.style.textPrice}>
                            {new Intl
                            .NumberFormat('id-ID', { style: 'currency', currency: 'IDR' })
                            .format(15000)}
                        </Text>
                    </View>
                </View>

                <Divider style={{ marginTop: 15, marginBottom: 15 }} />

                <View style={{ ...eva.style.wrapTotal, marginBottom: 8 }}>
                    <View style={{ flexGrow: 1, flexShrink: 1, paddingRight: 8 }}>
                        <Text category='s2' style={eva.style.textTotal}>Total Pay</Text>
                    </View>

                    <View style={{ flexGrow: 0, flexShrink: 1 }}>
                        <Text category='s2' style={{ ...eva.style.textPrice, fontWeight: 'bold' }}>
                            {new Intl
                            .NumberFormat('id-ID', { style: 'currency', currency: 'IDR' })
                            .format(35000)}
                        </Text>
                    </View>
                </View>
            </View>

            <View style={{ marginTop: 20 }}>
                <Button onPress={e => navigation.navigate('Checkout')}>
                    <Text>Next Step</Text>
                </Button>
            </View>
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
    },
    wrapInformation: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
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
        backgroundColor: theme['color-primary-600'],
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 4
    },
    infoDescription: {
        color: '#FFFFFF'
    },
    cardInfo: {
        padding: 20,
        backgroundColor: theme['color-primary-500'],
        borderRadius: 6
    },
    titleSection: {
        fontWeight: 'bold',
        color: theme['color-heading'],
        marginBottom: 15
    },
    wrapTotal: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center'
    },
    textTotal: {
        fontWeight: '600',
        color: theme['color-heading']
    },
    textPrice: {
        color: theme['color-body']
    },
}))

export default ThemedDetail
