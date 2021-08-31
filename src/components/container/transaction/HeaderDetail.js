import { useNavigation } from '@react-navigation/native'
import { Divider, Icon, Text, TopNavigation, withStyles } from '@ui-kitten/components'
import React from 'react'
import { Pressable, View } from 'react-native'

const HeaderDetail = ({ eva, style }) => {
    const Navigation = useNavigation()
    return (
        <View style={eva.style.wrapper}>
            <TopNavigation
                accessoryLeft={<Icon fill='#FFFFFF' name='arrow-back-outline' style={{
                    height: 21,
                    width: 21
                }}/>}
                title={textProps => (
                    <Pressable onPress={e => Navigation.goBack()}>
                        <Text {...textProps} style={{ color: '#FFFFFF', marginLeft: 8 }} category='s1'>Back</Text>
                    </Pressable>
                )}
                style={eva.style.topNav}
            />
            <Divider color='#FFFFFF' />
        </View>
    )
}

const ThemedHeaderDetail = withStyles(HeaderDetail, (theme) => ({
    wrapper: {
        backgroundColor: theme['color-primary-500'],
        paddingTop: 20,
        paddingBottom: 140,
        paddingLeft: 20,
        paddingRight: 20,
    },
    topNav: {
        backgroundColor: theme['color-primary-500']
    }
}))

export default ThemedHeaderDetail
