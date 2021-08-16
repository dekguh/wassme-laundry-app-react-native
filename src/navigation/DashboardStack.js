import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../components/screens/HomeScreen'

const Stack = createNativeStackNavigator()

const DashboardStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, backgroundColor: '#FFFFFF' }}>
            <Stack.Screen name='Home' component={HomeScreen} />
        </Stack.Navigator>
    )
}

export default DashboardStack
