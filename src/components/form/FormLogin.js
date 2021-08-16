import { withStyles } from '@ui-kitten/components'
import React from 'react'
import { View, Text } from 'react-native'

const FormLogin = ({ eva, style, ...restProps}) => {
    return (
        <View style={eva.style.container}>
            <Text>login</Text>
        </View>
    )
}

const ThemedFormLogin = withStyles(FormLogin, (theme) => ({
    container: {
        width: '100%'
    }
}))

export default ThemedFormLogin
