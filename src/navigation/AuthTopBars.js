import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Button } from '@ui-kitten/components';

const AuthTopBars = ({ navigation, onChangeCurrent, currentScreen }) => {
    return (
        <View
            style={styled.container}
        >
            <View>
                <Button
                    onPress={e => onChangeCurrent('signin')}
                    style={{
                        ...styled.button,
                        borderBottomStartRadius: 20,
                        borderTopStartRadius: 20,
                        borderTopRightRadius: 0,
                        borderBottomRightRadius: 0,
                        backgroundColor: currentScreen === 'signin' ? '#6D9FFF' : '#C4DEFF',
                        borderColor: currentScreen === 'signin' ? '#6D9FFF' : '#C4DEFF'
                }}>
                    Sign in
                </Button>
            </View>
            <View>
                <Button
                    onPress={e => onChangeCurrent('signup')}
                    style={{
                        ...styled.button,
                        borderTopRightRadius: 20,
                        borderBottomRightRadius: 20,
                        borderBottomStartRadius: 0,
                        borderTopStartRadius: 0,
                        backgroundColor: currentScreen === 'signup' ? '#6D9FFF' : '#C4DEFF',
                        borderColor: currentScreen === 'signup' ? '#6D9FFF' : '#C4DEFF'
                }}>
                    Sign up
                </Button>
            </View>
        </View>
    )
}

const styled = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row'
    },
    button: {
        width:120
    }
})

export default AuthTopBars
