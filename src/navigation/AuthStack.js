import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../components/screens/LoginScreen'

const Stack = createNativeStackNavigator()

const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, backgroundColor: '#FFFFFF' }}>
            <Stack.Screen name='SignIn' component={LoginScreen} />
        </Stack.Navigator>
    )
}

export default AuthStack
