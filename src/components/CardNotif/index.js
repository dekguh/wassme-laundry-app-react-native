import { withStyles, Text, Layout, Icon } from '@ui-kitten/components'
import React, { useEffect, useState } from 'react'
import { View } from 'react-native'

const CardNotif = ({ eva, style, description, date }) => {
    const [textTime, SetTextTime] = useState('-')
    useEffect(() => {
        const currentDate = Math.floor(Date.now()/1000)
        const totalSecond = currentDate - date
        const totalMinute = Math.floor(totalSecond/60)
        if(totalMinute <= 60) SetTextTime(`${totalMinute} minute ago`)
        if(totalMinute > 60 && totalMinute < 1140) SetTextTime(`${Math.floor(totalMinute/60)} hour ago`)
        if(totalMinute >= 1140) SetTextTime(`${Math.floor(totalMinute/1140)} day ago`)
    }, [])

    return (
        <Layout style={{
            ...eva.style.wrapper,
            ...style
        }}>
            <Layout style={eva.style.layoutIcon}>
                <View style={eva.style.iconBox}>
                    <Icon name='bell-outline' style={eva.style.iconNotif} fill='#FFFFFF' />
                </View>
            </Layout>

            <Layout style={eva.style.layoutContent}>
                <Text category='s2' style={eva.style.description}>
                    {description}
                </Text>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'nowrap',
                    marginTop: 6
                }}>
                    <View style={{ flexGrow: 0, flexShrink: 1, paddingRight: 4 }}>
                        <Icon name='calendar-outline' fill='#6D9FFF' style={eva.style.iconDate} />
                    </View>
                    <View>
                        <Text category='s2' style={eva.style.date}>{textTime || '-'}</Text>
                    </View>
                </View>
            </Layout>
        </Layout>
    )
}

const ThemedCardNotif = withStyles(CardNotif, (theme) => ({
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
    layoutIcon: {
        flexGrow: 0,
        flexShrink: 1,
        paddingRight: 12
    },
    layoutContent: {
        flexGrow: 1,
        flexShrink: 1,
    },
    iconNotif: {
        height: 24,
        width: 29
    },
    iconDate: {
        height: 21,
        width: 21
    },
    iconBox: {
        backgroundColor: theme['color-primary-500'],
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 4
    },
    description: {
        color: theme['color-body']
    },
    date: {
        color: theme['color-heading']
    }
}))

export default ThemedCardNotif
