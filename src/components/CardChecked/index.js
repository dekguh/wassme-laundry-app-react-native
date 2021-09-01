import { Icon, withStyles } from '@ui-kitten/components'
import React from 'react'
import { View, Text } from 'react-native'

const CardChecked = ({ eva, style, title, description, checked }) => {
    return (
        <View style={{ ...eva.style.wrapper, ...style }}>
            <View style={eva.style.layoutChecked}>
                <View style={eva.style.boxChecked}>
                    {checked && (<Icon
                        name='checkmark-outline'
                        fill='#6D9FFF'
                        style={{ width: 16, height: 16, position: 'absolute', top: 6, left: 6 }}
                    />)}
                </View>
            </View>

            <View>
                <Text style={eva.style.textTitle}>{title}</Text>
                <Text category='s2' style={eva.style.textDescription}>{description}</Text>
            </View>
        </View>
    )
}

const ThemedCardChecked = withStyles(CardChecked, (theme) => ({
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap'
    },
    layoutChecked: {
        flexGrow: 0,
        flexShrink: 1,
        paddingRight: 8
    },
    boxChecked: {
        borderWidth: 1,
        borderColor: theme['color-primary-500'],
        width: 30,
        height: 30,
        position: 'relative',
        borderRadius: 4
    },
    textTitle: {
        color: theme['color-heading'],
        marginBottom: 2
    },
    textDescription: {
        color: theme['color-body']
    }
}))

export default ThemedCardChecked
