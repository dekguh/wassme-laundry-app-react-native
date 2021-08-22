import { withStyles, Text, Divider } from '@ui-kitten/components'
import React from 'react'
import { View, Image, Pressable } from 'react-native'

const ProfileHeader = ({ eva, style, ...restProps}) => {
    return (
        <View style={eva.style.wrapper}>
            <Divider style={{ marginBottom: 25 }} />

            <Pressable style={eva.style.btnPhotoProfile}>
                <Text style={eva.style.btnPhotoProfileText}>+</Text>
            </Pressable>
            <Image
                style={eva.style.photoProfile}
                source={require('../../../../images/user-dummy.png')}
                resizeMode='cover'
            />

            <Text category='h6' style={eva.style.name}>I Kadek Teguh Mahesa</Text>
            <Text category='s1' style={eva.style.typeUser}>customer</Text>

            <Divider style={{ marginTop: 25 }} />
        </View>
    )
}

const ThemedProfileHeader = withStyles(ProfileHeader, (theme) => ({
    wrapper: {
        backgroundColor: '#FFFFFF'
    },
    photoProfile: {
        borderRadius: 1000,
        height: 80,
        width: 80,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 15,
    },
    name: {
        color: theme['color-heading'],
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: 4
    },
    typeUser: {
        color: theme['color-primary-500'],
        textAlign: 'center'
    },
    btnPhotoProfile: {
        alignSelf: 'center',
        backgroundColor: theme['color-primary-500'],
        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 4,
        marginLeft: 60,
        marginBottom: -20,
        zIndex: 2
    },
    btnPhotoProfileText: {
        color: '#FFFFFF',
        fontSize: 12
    }
}))

export default ThemedProfileHeader
