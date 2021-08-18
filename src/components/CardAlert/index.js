import { useTheme, withStyles, Text } from '@ui-kitten/components'
import React from 'react'
import { View } from 'react-native'

const CardAlert = ({ eva, style, type, text, styling, ...restProps }) => {
    const theme = useTheme()

    return (
        <View
            style={{
                ...eva.style.card,
                backgroundColor: type === 'danger' && theme['color-danger-500']
                || type === 'success' && theme['color-success-500']
                || type === 'info' && theme['color-info-500'],
                ...styling
            }}
        {...restProps}>
            <Text style={{ color: '#FFFFFF' }}>{text}</Text>
        </View>
    )
}

const ThemeCardAlert = withStyles(CardAlert, (theme) => ({
    card: {
        padding: 12,
        borderRadius: 4
    }
}))

export default ThemeCardAlert
