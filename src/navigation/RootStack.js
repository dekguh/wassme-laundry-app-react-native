import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { connect } from 'react-redux'
import SplashScreen from '../components/screens/SplashScreen'
import DashboardStack from './DashboardStack'
import AuthStack from './AuthStack'
import { updateIsLoadingAct, updateIsLoginAct } from '../redux/user/action'
import LogoutScreen from '../components/screens/LogoutScreen'

const Stack = createNativeStackNavigator()

const RootStack = ({ isLogin, isLoading, checkIsLogin }) => {
    useEffect(() => {
        setTimeout(() => checkIsLogin(), 3000)
    }, [])

    return (
    <NavigationContainer>
        {isLoading
        ? (<SplashScreen />)
        : isLogin ? (<DashboardStack />) : (<AuthStack />)}
        <Stack.Screen name='Logout' component={LogoutScreen} />
    </NavigationContainer>
    )
}

const mapStateToProps = state => {
    return {
        isLogin: state.user.isLogin,
        isLoading: state.user.isLoading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateIsLogin: status => dispatch(updateIsLoginAct(status)),
        updateIsLoading: status => dispatch(updateIsLoadingAct(status)),
        checkIsLogin: () => dispatch({ type: 'CHECK_IS_LOGIN' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RootStack)
