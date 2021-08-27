import { withStyles } from '@ui-kitten/components'
import React from 'react'
import { View, Text, Image } from 'react-native'

const CardService = ({ eva, style, title, source }) => {
    return (
        <View style={eva.style.wrapper}>
            <Image
                source={source}
                style={{ marginBottom: 8 , height: 50, marginRight:'auto', marginLeft:'auto' }}
                resizeMode='contain'
            />
            <Text category='s1' style={eva.style.title}>{title || '-'}</Text>
        </View>
    )
}

const ThemedCardService = withStyles(CardService, (theme) => ({
    wrapper: {
        backgroundColor: theme['color-primary-100'],
        borderRadius: 4,
        paddingBottom: 30,
        paddingTop: 30,
        paddingLeft: 20,
        paddingRight: 20,
    },
    title: {
        color: theme['color-body'],
        textAlign: 'center'
    }
}))

export default ThemedCardService
