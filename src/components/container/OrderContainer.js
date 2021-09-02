import { Divider, withStyles, Text, Button } from '@ui-kitten/components'
import React from 'react'
import { View } from 'react-native'
import CardOrder from '../CardOrder'
import TitleScreen from '../reuse/TitleScreen'
import TextInput from '../input/TextInput'

const OrderContainer = ({ eva, style }) => {
    return (
        <View style={eva.style.container}>
            <TitleScreen title='Order' />
            <Divider style={{ marginBottom: 25 }} />

            <View style={{ marginBottom: 20 }}>
                <Text category='h6' style={eva.style.titleSection}>Choose Service</Text>
                <CardOrder
                    style={{ marginBottom: 15 }}
                    title='Washing'
                    description='your laundry will be washed and dried'
                    image={require('../../../images/icon-service/1-basket_64.png')}
                    getValue={qty => console.log(qty)}
                />

                <CardOrder
                    style={{ marginBottom: 15 }}
                    title='Ironing'
                    description='We will iron your laundry and deodorize'
                    image={require('../../../images/icon-service/4-iron-table_64.png')}
                    getValue={qty => console.log(qty)}
                />
            </View>

            <View style={{ marginBottom: 20 }}>
                <Text category='h6' style={eva.style.titleSection}>Optional</Text>
                <CardOrder
                    style={{ marginBottom: 15 }}
                    title='Stain Remover'
                    description='Remove stains from your laundry'
                    image={require('../../../images/icon-service/25-washing-powder_64.png')}
                    getValue={qty => console.log(qty)}
                />
            </View>

            <View style={{ marginBottom: 20 }}>
                <Text category='h6' style={eva.style.titleSection}>Coupon</Text>
                <View style={eva.style.wrapCoupon}>
                    <View style={{ flexGrow: 1, flexShrink: 1, paddingRight: 8 }}>
                        <TextInput size='small' placeholder='discount code' />
                    </View>

                    <View style={{ flexGrow: 0, flexShrink: 1 }}>
                        <Button size='small'>
                            <Text>Claim</Text>
                        </Button>
                    </View>
                </View>
            </View>

            <View style={{ marginBottom: 20 }}>
                <Text category='h6' style={eva.style.titleSection}>Total Payment</Text>
                <View style={{ ...eva.style.wrapCoupon, marginBottom: 8 }}>
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

                <View style={{ ...eva.style.wrapCoupon, marginBottom: 8 }}>
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

                <View style={{ ...eva.style.wrapCoupon, marginBottom: 8 }}>
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

            <View style={{ marginBottom: 20 }}>
                <Button>
                    <Text>Pay Now</Text>
                </Button>
            </View>
        </View>
    )
}

const ThemedOrderContainer = withStyles(OrderContainer, (theme) => ({
    container: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        minHeight: '100%'
    },
    titleSection: {
        fontWeight: 'bold',
        color: theme['color-heading'],
        marginBottom: 15
    },
    wrapCoupon: {
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
    }
}))

export default ThemedOrderContainer
