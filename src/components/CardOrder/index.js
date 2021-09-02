import { withStyles, Text } from '@ui-kitten/components'
import React from 'react'
import { Image, View } from 'react-native'
import Quantity from '../input/Quantity'

const CardOrder = ({ eva, style, image, title, description, getValue }) => {
    return (
        <View style={{ ...eva.style.wrapper, ...style }}>
            <View style={eva.style.layoutIcon}>
                <Image
                    resizeMode='contain'
                    source={image}
                    style={eva.style.iconImage}
                />
            </View>

            <View style={eva.style.layoutDetail}>
                <Text style={eva.style.textTitle} category='s1'>{title}</Text>
                <Text style={eva.style.textDescription} category='s2'>{description}</Text>
            </View>

            <View>
                <Quantity getQty={qty => getValue(qty)} />
            </View>
        </View>
    )
}

const ThemedCardOrder = withStyles(CardOrder, (theme) => ({
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
        paddingRight: 8,
        flexGrow: 0,
        flexShrink: 1
    },
    layoutDetail: {
        paddingRight: 8,
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: '50%'
    },
    iconImage: {
        width: 30,
        height: 30
    },
    textTitle: {
        color: theme['color-heading'],
        marginBottom: 2
    },
    textDescription: {
        color: theme['color-body']
    }
}))

export default ThemedCardOrder
