import { Button, withStyles, Text } from '@ui-kitten/components'
import React, { useState, useEffect } from 'react'
import { View } from 'react-native'

const Quantity = ({ eva, style, getQty }) => {
    const [qty, setQty] = useState(0)

    const minusHandle = e => {
        if(qty > 0) setQty(qty - 1)
    }

    const plusHandle = e => {
        setQty(qty + 1)
    }

    useEffect(() => {
        getQty(qty)
    }, [qty])

    return (
        <View style={eva.style.wrap}>
            <View>
                <Button size='tiny' onPress={minusHandle} disabled={qty == 0}>
                    <Text>-</Text>
                </Button>
            </View>

            <View style={eva.style.layoutTotal}>
                <View>
                    <Text style={eva.style.textQty} category='s2'>{qty}</Text>
                </View>
            </View>

            <View>
                <Button size='tiny' onPress={plusHandle}>
                    <Text>+</Text>
                </Button>
            </View>
        </View>
    )
}

const ThemedQuantity = withStyles(Quantity, (theme) => ({
    wrap: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center'
    },
    layoutTotal: {
        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft: 6,
        paddingRight: 6,
    },
    textQty: {
        color: theme['color-body']
    }
}))

export default ThemedQuantity
