import { withStyles, Text, Layout, Icon, styled } from '@ui-kitten/components'
import React from 'react'
import { Pressable, View } from 'react-native'

const Header = ({ name, totalCart, eva, style, ...restProps }) => {
    return (
        <Layout style={eva.style.wrapper}>
            <Layout style={eva.style.layoutName}>
                <Text style={eva.style.textWelcome} category='h6'>Welcome back,</Text>
                <Text style={eva.style.textName} category='s1'>{name || '-'}</Text>
            </Layout>

            <Layout style={eva.style.layoutCart}>
                <View style={{ position: 'relative' }}>
                    <View style={eva.style.circleCart}>
                        <Text style={{
                            fontSize: 8,
                            color: '#FFFFFF',
                            flex: 1,
                            alignItems: 'center',
                            textAlign: 'center',
                            marginTop: 6
                        }}>{totalCart || '0'}</Text>
                    </View>
                    <Pressable style={eva.style.btnCart}>
                        <Icon
                            name='shopping-cart-outline'
                            fill='#6D9FFF'
                            style={eva.style.btnCartIcon}
                        />
                    </Pressable>
                </View>
            </Layout>
        </Layout>
    )
}

const ThemedHeader = withStyles(Header, (theme) => ({
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
    },
    layoutName: {
        flex: 1,
        flexBasis: '80%'
    },
    layoutCart: {
        flex: 1,
        flexBasis: '20%'
    },
    textWelcome: {
        color: theme['color-heading'],
        marginBottom: 4,
        fontWeight: 'bold'
    },
    textName: {
        color: theme['color-primary-500']
    },
    btnCart: {
        position: 'absolute',
        zIndex: 1,
        right: 0,
        marginLeft: 'auto',
        width: 40,
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 8,
        paddingRight: 8,
        backgroundColor: '#FFFFFF',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#EEEEEE',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.01,
        shadowRadius: 0,

        elevation: 1,
    },
    btnCartIcon: {
        height: 21
    },
    circleCart: {
        backgroundColor: theme['color-primary-500'],
        width: 25,
        height: 25,
        borderRadius: 100,
        position: 'absolute',
        right: 30,
        zIndex: 4,
        elevation: 2
    }
}))

export default ThemedHeader
