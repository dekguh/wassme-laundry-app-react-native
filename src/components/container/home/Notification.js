import { withStyles, Layout, Text } from '@ui-kitten/components'
import React from 'react'
import { View } from 'react-native'
import CardNotif from '../../CardNotif'

const Notification = ({ eva, style }) => {
    return (
        <View style={{ ...style, paddingBottom: 20 }}>
            <Text style={eva.style.title} category='h5'>Notifications</Text>

            <CardNotif
            date={1630138320}
            style={{ marginBottom: 15 }}
                description='Thank you for making the payment, the order is in the process of being picked up'
            />

            <CardNotif
            date={1629879120}
            style={{ marginBottom: 15 }}
                description='You have successfully placed your order, please complete your payment immediately'
            />
        </View>
    )
}

const ThemedNotification = withStyles(Notification, (theme) => ({
    title: {
        fontWeight: 'bold',
        color: theme['color-heading'],
        marginBottom: 15
    },
}))

export default ThemedNotification
