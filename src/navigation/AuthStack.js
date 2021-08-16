import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../components/screens/LoginScreen'
import RegisterScreen from '../components/screens/RegisterScreen'

const Stack = createNativeStackNavigator()

const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, backgroundColor: '#FFFFFF' }}>
            <Stack.Screen name='SignIn' component={LoginScreen} />
            <Stack.Screen name='SignUp' component={RegisterScreen} />
        </Stack.Navigator>
    )
}

export default AuthStack
