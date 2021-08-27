import { withStyles, Text, Layout } from '@ui-kitten/components'
import React, { useState, useEffect } from 'react'
import { View } from 'react-native'

const CardPromo = ({ eva, style, title, code, dateExpired }) => {
    const [expiredDay, setExpiredDay] = useState(0)
    useEffect(() => {
        // count different day promo
        const dateNow = Math.ceil(Date.now()/1000)
        const total = Math.round((dateExpired - dateNow) / 86400)
        setExpiredDay(total)
    }, [])

    return (
        <View style={{
            ...eva.style.wrapper,
            ...style
        }}>
            <Layout style={eva.style.contentWrap}>
                <Layout style={eva.style.layoutTitle}>
                    <Text category='h5' style={eva.style.title}>CLAIM NOW</Text>
                    <Text category='s1' style={eva.style.subtitle}>{title}</Text>
                </Layout>

                <Layout style={eva.style.layoutCode}>
                    <Text style={eva.style.codePromo}>{code}</Text>
                    <Text category='s2' style={eva.style.expired}>{
                        expiredDay && expiredDay > 0
                        ? `expired in ${expiredDay || '-'} days`
                        : 'promo expired'
                    || 'checking...'}</Text>
                </Layout>
            </Layout>
        </View>
    )
}

const ThemedCardPromo = withStyles(CardPromo, (theme) => ({
    wrapper: {
        paddingTop: 40,
        paddingBottom: 40,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 4,
        backgroundColor: theme['color-primary-500']
    },
    contentWrap: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        backgroundColor: theme['color-primary-500']
    },
    layoutTitle: {
        flex: 1,
        flexBasis: '60%',
        backgroundColor: theme['color-primary-500']
    },
    layoutCode: {
        flex: 1,
        flexShrink: 0,
        flexBasis: '40%',
        backgroundColor: theme['color-primary-500']
    },
    title: {
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 4
    },
    subtitle: {
        color: '#FFFFFF',
    },
    codePromo: {
        backgroundColor: theme['color-primary-600'],
        color: '#FFFFFF',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 4,
        textAlign: 'center',
        marginBottom: 8
    },
    expired: {
        color: '#FFFFFF',
        textAlign: 'center'
    }
}))

export default ThemedCardPromo
