import React from 'react'
import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../components/screens/HomeScreen'
import { Icon } from '@ui-kitten/components'
import ProfileScreen from '../components/screens/ProfileScreen'
import OrderScreen from '../components/screens/OrderScreen'
import TransactionScreen from '../components/screens/TransactionScreen'

const Stack = createBottomTabNavigator()

const DashboardStack = () => {
    return (
        <Stack.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                backgroundColor: '#FFFFFF',
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName
                    if(route.name == 'Home') {
                        iconName = focused ? 'home' : 'home-outline'
                    }
                    if(route.name == 'Order') {
                        iconName = focused ? 'shopping-cart' : 'shopping-cart-outline'
                    }
                    if(route.name == 'Transaction') {
                        iconName = focused ? 'credit-card' : 'credit-card-outline'
                    }
                    if(route.name == 'Profile') {
                        iconName = focused ? 'person' : 'person-outline'
                    }
                    if(route.name == 'Logout') {
                        iconName = focused ? 'repeat' : 'repeat-outline'
                    }
                    return <Icon
                        style={{
                            width: 21,
                            height: 21
                        }}
                        fill={color}
                        size={size}
                        name={iconName}
                    />
                },
                tabBarActiveTintColor: '#6D9FFF',
                tabBarInactiveTintColor: '#CECECE',
                tabBarLabelPosition: 'below-icon',
                tabBarItemStyle: {
                    marginBottom: 12,
                    marginTop: 12,
                },
                tabBarShowLabel: false,
                tabBarHideOnKeyboard: true
            })
        }>
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='Order' component={OrderScreen} />
            <Stack.Screen name='Transaction' component={TransactionScreen} />
            <Stack.Screen name='Profile' component={ProfileScreen} />
        </Stack.Navigator>
    )
}

const styled = StyleSheet.create({

})

export default DashboardStack
