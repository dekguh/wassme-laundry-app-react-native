import { Layout, withStyles, Text, Icon } from '@ui-kitten/components'
import React from 'react'
import { Pressable, View } from 'react-native'

import 'intl'
import 'intl/locale-data/jsonp/en'
import { useNavigation } from '@react-navigation/native'

const CardTransaction = ({ eva, style, orderId, date, totalPayment, status }) => {
    const Navigation = useNavigation()
    return (
        <Layout style={{ ...eva.style.wrapper, ...style }}>
            <Layout style={eva.style.layoutDetail}>
                <View style={eva.style.detailWrap}>
                    <View style={eva.style.iconWrap}>
                        <View style={eva.style.iconBox}>
                            <Icon name='credit-card-outline' fill='#FFFFFF' style={{ height: 21, width: 21 }} />
                        </View>
                    </View>
                    <View style={eva.style.informationWrap}>
                        <Pressable onPress={e => Navigation.navigate('TransactionDetail')}>
                            <Text style={eva.style.textOrder} category='s1'>#{orderId || '-'}</Text>
                        </Pressable>
                        <View>
                            <Text style={eva.style.textDate} category='c1'>{new Date(date * 1000).toDateString()}</Text>
                        </View>
                    </View>
                </View>
            </Layout>

            <Layout style={eva.style.layoutPrice}>
                <Text category='s2' style={eva.style.textPrice}>
                    {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR'}).format(totalPayment)}
                </Text>
                <Text category='c1' style={eva.style.textStatus}>{status || '-'}</Text>
            </Layout>
        </Layout>
    )
}

const ThemedCardTransaction = withStyles(CardTransaction, (theme) => ({
    wrapper: {
        padding: 15,
        borderRadius: 4,
        backgroundColor: '#FFFFFF',
        borderColor: '#EEEEEE',
        borderWidth: 1,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center'
    },
    layoutDetail: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: '70%'
    },
    layoutPrice: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: '30%',
        paddingLeft: 8
    },
    detailWrap: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center'
    },
    iconWrap: {
        flexGrow: 0,
        flexShrink: 1,
        paddingRight: 8
    },
    informationWrap: {
        flexGrow: 1,
        flexShrink: 1,
        paddingRight: 8
    },
    iconBox: {
        backgroundColor: theme['color-primary-500'],
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 14,
        paddingRight: 14,
        borderRadius: 4
    },
    textPrice: {
        color: theme['color-primary-500'],
        textAlign: 'center'
    },
    textStatus: {
        color: theme['color-body'],
        textAlign: 'center',
        marginTop: 4
    },
    textOrder: {
        color: theme['color-heading'],
        marginBottom: 4
    },
    textDate: {
        color: theme['color-body']
    }
}))

export default ThemedCardTransaction
