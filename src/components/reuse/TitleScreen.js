import { withStyles, Text } from '@ui-kitten/components'
import React from 'react'
import { View } from 'react-native'

const TitleScreen = ({ title, eva, style, ...restProps }) => {
    return (
        <View {...restProps} style={{ marginBottom: 20 }}>
            <Text category='h6' style={eva.style.title}>{title}</Text>
        </View>
    )
}

const ThemedTitleScreen = withStyles(TitleScreen, (theme) => ({
    title: {
        color: theme['color-heading'],
        textAlign: 'center',
        fontWeight: '600'
    }
}))

export default ThemedTitleScreen